const mainWidth    = 322;
const mainHeight   = 564;//506;
const mainTitleEN  = "ClipCalc";
const mainTitleJP  = "関数電卓";
const mainIcon     = "favicon.ico";
const mainTrayIcon = "trayicon.png";
const mainPage     = "index.html";

const { app, BrowserWindow, Menu, nativeImage, Tray, shell, clipboard, ipcMain } = require( "electron" );
const fs = require( "fs" );
const path = require( "path" );

const boundsInfoPath   = path.join( app.getPath( "userData" ), "bounds-info.json" );
const extFuncCachePath = path.join( app.getPath( "userData" ), "extfunc-cache.json" );
const profilePath      = path.join( app.getPath( "home" ), "ClipCalc.env" );

let mainWindow = null;
let trayIcon;
let contextMenu;

let _version = "";
let _isEnglish = false;

const createWindow = () => {
	// バージョンの取得
	_version = app.getVersion();

	// ロケールの取得
	_isEnglish = (app.getLocale() != "ja");

	// ウィンドウ位置の復元
	let bounds;
	try {
		bounds = JSON.parse( fs.readFileSync( boundsInfoPath, "utf8" ) );
	} catch( e ){
		bounds = { "x": 100, "y": 100 };
	}

	// メイン・ウィンドウ
	mainWindow = new BrowserWindow( {
		width: mainWidth,
		height: mainHeight,
		useContentSize: true,
		x: bounds.x,
		y: bounds.y,
		resizable: false,
		movable: true,
		minimizable: true,
		maximizable: false,
		closable: true,
		skipTaskbar: true,
		title: (_isEnglish ? mainTitleEN : mainTitleJP),
		icon: mainIcon,
		frame: true,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	} );

	// メニューバーを消す
	mainWindow.removeMenu();

	mainWindow.on( "close", () => {
		// ウィンドウ位置の保存
		fs.writeFileSync( boundsInfoPath, JSON.stringify( mainWindow.getBounds() ) );
	} );
	mainWindow.on( "closed", () => {
		mainWindow = null;
	} );

	// メイン・コンテンツ
	mainWindow.loadURL( "file://" + __dirname + "/" + mainPage );

	// トレイアイコン
	trayIcon = new Tray( nativeImage.createFromPath( __dirname + "/" + mainTrayIcon ) );
	trayIcon.on( "click", () => {
		mainWindow.focus();
	} );

	// トレイアイコンにメニューを設定
	contextMenu = Menu.buildFromTemplate( [
		{ "label": (_isEnglish ? "Always on top" : "常に手前に表示"), "type": "checkbox", "checked": mainWindow.isAlwaysOnTop(), "click": () => {
			mainWindow.setAlwaysOnTop( mainWindow.isAlwaysOnTop() ? false : true );
			mainWindow.webContents.send("updateAlwaysOnTop", mainWindow.isAlwaysOnTop());
		} },
		{ "label": (_isEnglish ? "Show" : "表示"), "click": () => { mainWindow.focus(); } },
		{ "label": (_isEnglish ? "Quit" : "終了"), "click": () => { mainWindow.close(); } }
	] );
	trayIcon.setContextMenu( contextMenu );

	// トレイアイコンにツールチップを設定
	trayIcon.setToolTip( _isEnglish ? mainTitleEN : mainTitleJP );

	// ヘルプをデフォルトブラウザで開くように設定
	mainWindow.webContents.setWindowOpenHandler( ( { url } ) => {
		shell.openExternal( url );
		return { action: 'deny' };
	} );
};

app.on( "ready", createWindow );

app.on( "window-all-closed", () => {
	if( process.platform != "darwin" ){
		app.quit();
	}
} );

app.on( "activate", () => {
	if( mainWindow == null ){
		createWindow();
	}
} );

ipcMain.on( 'setAlwaysOnTop', (event, flag) => {
	mainWindow.setAlwaysOnTop( flag );

	// トレイアイコンのメニューを更新
	contextMenu.items[0].checked = flag;

	event.returnValue = null;
} );
ipcMain.on( 'clipboardRead', (event, message) => {
	event.returnValue = clipboard.readText();
} );
ipcMain.on( 'clipboardWrite', (event, message) => {
	clipboard.writeText(message);
	event.returnValue = null;
} );
ipcMain.on( 'extFuncCachePath', (event, message) => {
	event.returnValue = extFuncCachePath;
} );
ipcMain.on( 'profilePath', (event, message) => {
	event.returnValue = profilePath;
} );
ipcMain.on( 'fsReadExtFuncCache', (event, message) => {
	try {
		event.returnValue = fs.readFileSync( extFuncCachePath, "utf8" );
	} catch( e ){
	}
	event.returnValue = "";
} );
ipcMain.on( 'fsWriteExtFuncCache', (event, message) => {
	try {
		fs.writeFileSync( extFuncCachePath, message );
	} catch( e ){
	}
	event.returnValue = null;
} );
ipcMain.on( 'fsReadProfile', (event, message) => {
	try {
		event.returnValue = fs.readFileSync( profilePath, "utf8" );
	} catch( e ){
	}
	event.returnValue = "";
} );
ipcMain.on( 'fsWriteProfile', (event, message) => {
	try {
		fs.writeFileSync( profilePath, message );
	} catch( e ){
	}
	event.returnValue = null;
} );
ipcMain.on( 'isEnglish', (event, message) => {
	event.returnValue = _isEnglish;
} );
ipcMain.on( 'platform', (event, message) => {
	event.returnValue = process.platform;
} );
ipcMain.on( 'shellBeep', (event, message) => {
	shell.beep();
	event.returnValue = null;
} );
ipcMain.on( 'version', (event, message) => {
	event.returnValue = _version;
} );
