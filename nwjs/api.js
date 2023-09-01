const mainTitleEN  = "ClipCalc";
const mainTitleJP  = "関数電卓";
const mainTrayIcon = "trayicon.png";

const clipboard = require( 'node-clipboardy' );
const fs = require( "fs" );
const os = require( 'os' );
const path = require( "path" );

var appDir = '';
if( process.platform == 'win32' ){
	appDir = process.env.APPDATA;
}
if( process.platform == 'darwin' ){
	appDir = process.env.HOME + '/Library/Application Support';
}
if( appDir.length > 0 ){
	appDir = path.join( appDir, require( 'package.json' ).name );
	fs.mkdir( appDir, function( err ){} );
}
const boundsInfoPath   = path.join( appDir, "bounds-info.json" );
const extFuncCachePath = path.join( appDir, "extfunc-cache.json" );
const profilePath      = path.join( os.homedir(), "ClipCalc.env" );

var globalShortcut;
var trayIcon;
var contextMenu;

function DesktopAppAPI(){
	// バージョンの取得
	this._version = require( 'package.json' ).version;

	// ロケールの取得
	var locale = Intl.NumberFormat().resolvedOptions().locale;
	this._isEnglish = (locale != "ja");

	// グローバルショートカットを登録
	globalShortcut = new nw.Shortcut({
		key : "Ctrl+Alt+C",
		active : function(){
			nw.Window.get().focus();
		},
		failed : function(msg){
		}
	});
	nw.App.registerGlobalHotKey(globalShortcut);

	var win = nw.Window.get();
	win.on( "loaded", function(){
		// ウィンドウ位置の復元
		var bounds;
		try {
			bounds = JSON.parse( fs.readFileSync( boundsInfoPath, "utf8" ) );
		} catch( e ){
			bounds = { "x": 100, "y": 100 };
		}
		win.moveTo( bounds.x, bounds.y );
		win.show();

		// コンテキストメニュー
		var menu = document.getElementById( "contextmenu" );
		var item = document.getElementById( "contextmenuitem" );
		var body = document.getElementById( "calc_body" );
		body.addEventListener( "contextmenu", function( event ){
			menu.style.left = event.pageX + 'px';
			menu.style.top  = event.pageY + 'px';
			menu.classList.add( 'show' );
			item.innerHTML = (alwaysOnTopFlag ? "\u2714\u2004" : "&nbsp;&nbsp;&nbsp;") + (this._isEnglish ? "Always on top" : "常に手前に表示");
		} );
		body.addEventListener( "click", function(){
			if( menu.classList.contains( 'show' ) ){
				menu.classList.remove( 'show' );
			}
		} );
	} );
	win.on( "close", function(){
		// ウィンドウ位置の保存
		try {
			fs.writeFileSync( boundsInfoPath, JSON.stringify( { "x": win.x, "y": win.y } ) );
		} catch( e ){
		}

		// グローバルショートカットを登録解除
		nw.App.unregisterGlobalHotKey( globalShortcut );

		nw.App.quit();
	} );

	// デベロッパーツール
//	win.showDevTools();

	// トレイアイコン
	trayIcon = new nw.Tray({
		tooltip: this._isEnglish ? mainTitleEN : mainTitleJP,
		icon: mainTrayIcon
	});
	trayIcon.on("click", function(){
		nw.Window.get().focus();
	});

	// トレイアイコンにメニューを設定
	contextMenu = new nw.Menu();
	contextMenu.append(new nw.MenuItem({
		label: (this._isEnglish ? "Always on top" : "常に手前に表示"),
		type: 'checkbox',
		checked: false,
		click: function(){
			var flag = alwaysOnTopFlag ? false : true;
			window.desktopAppAPI.setAlwaysOnTop( flag );
			window.desktopAppAPI._updateAlwaysOnTopFunc( null, flag );
		}
	}));
	contextMenu.append(new nw.MenuItem({
		label: (this._isEnglish ? "Show" : "表示"),
		click: function(){
			nw.Window.get().focus();
		}
	}));
	contextMenu.append(new nw.MenuItem({
		label: (this._isEnglish ? "Quit" : "終了"),
		click: function(){
			nw.Window.get().close();
		}
	}));
	trayIcon.menu = contextMenu;

	// ヘルプをデフォルトブラウザで開くように設定
	win.on( 'new-win-policy', function( frame, url, policy ){
		policy.ignore();
		nw.Shell.openExternal( url );
	} );
}

DesktopAppAPI.prototype = {
	updateAlwaysOnTop : function( func ){
		this._updateAlwaysOnTopFunc = func;
	},
	setAlwaysOnTop : function( flag ){
		nw.Window.get().setAlwaysOnTop( flag );

		// トレイアイコンのメニューを更新
		contextMenu.items[0].checked = flag;
	},
	clipboardRead : function(){
		return clipboard.readSync();
	},
	clipboardWrite : function( text ){
		clipboard.writeSync( text );
	},
	extFuncCachePath : function(){
		return extFuncCachePath;
	},
	profilePath : function(){
		return profilePath;
	},
	fsReadExtFuncCache : function(){
		try {
			return fs.readFileSync( extFuncCachePath, "utf8" );
		} catch( e ){
		}
		return "";
	},
	fsWriteExtFuncCache : function( text ){
		try {
			fs.writeFileSync( extFuncCachePath, text );
		} catch( e ){
		}
	},
	fsReadProfile : function(){
		try {
			return fs.readFileSync( profilePath, "utf8" );
		} catch( e ){
		}
		return "";
	},
	fsWriteProfile : function( text ){
		try {
			fs.writeFileSync( profilePath, text );
		} catch( e ){
		}
	},
	isEnglish : function(){
		return this._isEnglish;
	},
	platform : function(){
		return process.platform;
	},
	shellBeep : function(){
		console.log('\u0007'); // ベル文字（Unicode 0007）
	},
	version : function(){
		return this._version;
	},
};

window.desktopAppAPI = new DesktopAppAPI();

function toggleAlwaysOnTop(){
	var flag = alwaysOnTopFlag ? false : true;
	window.desktopAppAPI.setAlwaysOnTop( flag );
	window.desktopAppAPI._updateAlwaysOnTopFunc( null, flag );

	var menu = document.getElementById( "contextmenu" );
	if( menu.classList.contains( 'show' ) ){
		menu.classList.remove( 'show' );
	}
}
