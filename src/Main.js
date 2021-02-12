//window.androidTabletTest;
//window.iPadTest;
//window.bodyHeight;

//window.dispUserAgent;	// 起動時にユーザーエージェントを表示するかどうか
//window.dispCache;		// 起動時にキャッシュ内容を表示するかどうか
//window.conMaxLen;		// コンソールの最大文字数
//window.errMaxLen;		// エラー出力の最大文字数
//window.retAssertProc;	// アサートに失敗した時に処理を停止するかどうか
//window.loopMax;		// ループ回数上限
//window.useStorage;	// ストレージを使用するかどうか
//window.lockGUpdate;

#ifndef DEBUG
window.onerror = clip_onerror;
#endif // DEBUG

#define PROFILE_PREFIX	"_CLIPCALC_"

// 外部関数
var extFuncData  = new Array();
var extFuncFile2 = new Array();
var extFuncData2 = new Array();

#define _TRY	try {
#define _CATCH	} catch( e ){ catchError( e ); }

#ifndef USE_CLIP_LIB

#include "_Global.h"

#include "math\_Complex.js"
#include "math\_Fract.js"
#include "math\_Math.js"
#include "math\_MathEnv.js"
#include "math\_Matrix.js"
#include "math\_Time.js"
#include "math\_Value.js"

#include "param\_Boolean.js"
#include "param\_Float.js"
#include "param\_Integer.js"
#include "param\_String.js"
#include "param\_Void.js"

#include "system\_Tm.js"

#include "_Array.js"
#include "_Func.js"
#include "_Global.js"
#include "_Graph.js"
#include "_GWorld.js"
#include "_Label.js"
#include "_Line.js"
#include "_Loop.js"
#include "_Param.js"
#include "_Proc.js"
#include "_Token.js"
#include "_Variable.js"

#endif // USE_CLIP_LIB

#include "_ColorWin.js"
#include "_DefCharInfo.js"
#include "_DefCharInfoLarge.js"

var resetCalculator = false;
var started = false;

// コンソール
#include "_Console.js"
var con = new Array();
var conId, errId;
function onConsoleUpdate( id ){
	if( id == conId ){
		if( started ){
			doButtonUIConsole();
		}
	} else if( id == errId ){
		document.getElementById( "button_ui_log"  ).innerHTML = "<b><span style='color:#FF0000'>！</span></b>";
		document.getElementById( "button_ui_log2" ).innerHTML = "<b><span style='color:#FF0000'>！</span></b>";
	}
}

// エラー
#include "_Error.js"
function onError( e ){
	con[0].newLine();

	con[0].setColor( "ff0000" );

	con[0].println( "message: " + e.message() );
	con[0].println( "name: " + e.name() );
	con[0].println( "description: " + e.description() );
	con[0].println( "number: " + e.number() );
	con[0].println( "file: " + e.file() );
	con[0].println( "line: " + e.line() );
	con[0].println( "column: " + e.column() );

	var tmp = new _String( e.stack() );
	tmp.escape().replaceNewLine( consoleBreak() );
	con[0].println( "stack: " + tmp.str() );

	con[0].setColor();
}

// キャンバス
#include "_Canvas.js"
var canvas;
function canvasClear(){
	canvas.setColorRGB( gWorldBgColor() );
	canvas.fill( 0, 0, canvas.width(), canvas.height() );
}
function canvasSetColor( bgrColor ){
	canvas.setColorBGR( bgrColor );
}
function canvasPut( x, y ){
	canvas.put( x, y );

	doButtonUIGWorld();
}
function canvasFill( x, y, w, h ){
	canvas.fill( x, y, w, h );

	doButtonUIGWorld();
}
function canvasLine( x1, y1, x2, y2 ){
	canvas.line( x1, y1, x2, y2 );

	doButtonUIGWorld();
}

// ファイル選択
#include "_InputFile.js"
var inputFile;

// 計算エラー情報管理
#include "_ProcError.js"
var procError;
var silentErr = false;

#include "EditExpr.js"
var editExpr;

#include "ListBox.js"
var logExpr;
var listImage;
function ListImageItem( url, x, y ){
	this._url = url;
	this._x   = x;
	this._y   = y;
}

// エディタ
#include "_Editor.js"
var editor;
var selFunc;
var curFunc;

var topProc;
var topParam;

var needGUpdate = false;

#include "Common.js"
var common;

#include "CalcUI.js"
var calcUI;

#include "ConvUI.js"
var convUI = null;

#include "_NativeRequest.js"
var nativeRequest = null;

#include "Profile.js"

// キー関連
#include "KeyEvent.js"
var keyShiftOnly = false;

#include "Electron.js"
var electron = null;

var divEdit;

var buttonMode = 0;
var usageFlag  = true;

#define LANG_JAPANESE	0
#define LANG_ENGLISH	1
var englishFlag = false;

#define SKIN_COLOR	6
#define SKIN_IMAGE	7
#define SKIN_MAX	7
var skin;
var skinColor;
var skinAns;
var skinLockR, skinLockG, skinLockB;
var skinTrans;
var skinImage;
var fontSpan;
var fontEdit;

var soundType;

#define _UI_CALC_MENU_MAIN			0
#define _UI_CALC_MENU_FUNC			1
#define _UI_CALC_MENU_LOG			2
#define _UI_CALC_MENU_CONV			3
#define _UI_CALC_MENU_CONSOLE		4
#define _UI_CALC_MENU_GWORLD		5
#define _UI_CALC_MENU_OPTION		6
#define _UI_CALC_MENU_SELECTIMAGE	7
#define _UI_CALC_MENU_PROFILE		8
var menu = -1;

// iOS10でダブルタップを防ぐ
var lastTouchEnd = 0;

function isAndroidTablet(){
	return (androidTabletTest || common.isAndroidTablet());
}
function isIPad(){
	return (iPadTest || common.isIPad());
}

function main( editId, logId, _conId, _errId, selectImageId, canvasId, inputFileIds, editorId ){
	var i;

	defGWorldFunction();
	defProcFunction();

	// コンソール
	conId = _conId;
	con[0] = new _Console( _conId );
	con[0].setMaxLen( conMaxLen );
	errId = _errId;
	con[1] = new _Console( _errId );
	con[1].setMaxLen( errMaxLen );

	try {
		electron = new Electron( require( "electron" ).remote.require( "./electron" ) );
	} catch( e ){
		electron = null;
	}

	common = new Common();

	con[0].println( "ClipCalc" + consoleBreak() + "Copyright (C) SatisKia" );
	con[0].setColor( "0000ff" );
	if( dispUserAgent ){
		con[0].setBold( true );
		con[0].print( "UserAgent: " );
		con[0].setBold( false );
		con[0].println( window.navigator.userAgent );
	}
	if( electron != null ){
		con[0].setBold( true );
		con[0].print( "Platform: " );
		con[0].setBold( false );
		con[0].println( electron.platform() );
	} else {
		con[0].setBold( true );
		con[0].print( "App: " );
		con[0].setBold( false );
		con[0].println( common.isApp() ? "true" : "false" );
	}
	con[0].setColor();

	if( common.isIPhone() || common.isIPad() ){
		// iOS10で複数指で拡大縮小が出来てしまうのを防ぐ
		document.documentElement.addEventListener( "touchstart", function( e ){
			if( e.touches.length > 1 ){
				e.preventDefault();
			}
		}, true );

		// iOS10でダブルタップを防ぐ
		document.documentElement.addEventListener( "touchend", function( e ){
			var now = (new Date()).getTime();
			if( now - lastTouchEnd <= 500 ){
				e.preventDefault();
			}
			lastTouchEnd = now;
		}, true );

		if( common.isApp() ){
			useStorage = false;
		}
	}

	initProfile( useStorage );
	setProfilePrefix( PROFILE_PREFIX );

	if( isAndroidTablet() || isIPad() ){
		cssSetPropertyValue( ".div_body"        , "width" , "357px" );
		cssSetPropertyValue( ".div_body"        , "height", "471px" );
		cssSetPropertyValue( ".div_selectimage" , "height", "387px" );
		cssSetPropertyValue( ".textarea_profile", "height", "415px" );
	}

	skin      = getProfileInt( "ENV_", "Skin"     , 0 ); if( skin > SKIN_MAX ) skin = SKIN_MAX;
	skinColor = getProfileInt( "ENV_", "SkinColor", 0 ); if( skinColor >= COLOR.length ) skinColor = 0;
	skinAns   = getProfileInt( "ENV_", "SkinAns"  , 0 ); if( skinAns > 2 ) skin = 0;
	document.getElementById( "calc_edit_r" ).value = getProfileInt( "ENV_", "SkinColorR", 161 );
	document.getElementById( "calc_edit_g" ).value = getProfileInt( "ENV_", "SkinColorG", 161 );
	document.getElementById( "calc_edit_b" ).value = getProfileInt( "ENV_", "SkinColorB", 161 );
	skinLockR = (getProfileInt( "ENV_", "SkinLockR", 0 ) == 1);
	skinLockG = (getProfileInt( "ENV_", "SkinLockG", 0 ) == 1);
	skinLockB = (getProfileInt( "ENV_", "SkinLockB", 0 ) == 1);
	document.getElementById( "check_color_r" ).checked = skinLockR;
	document.getElementById( "check_color_g" ).checked = skinLockG;
	document.getElementById( "check_color_b" ).checked = skinLockB;
	skinTrans = getProfileInt( "ENV_", "SkinTrans", 0 ); if( skinTrans > 5 ) skin = 0;
	skinImage = getProfileString( "ENV_", "SkinImage", "" );
	document.getElementById( "calc_edit_skin_image" ).value = skinImage;
	document.getElementById( "calc_edit_x" ).value = getProfileString( "ENV_", "SkinImageX", "50" );
	document.getElementById( "calc_edit_y" ).value = getProfileString( "ENV_", "SkinImageY", "50" );
	makeColor( skinColor, "calc_edit_r", "calc_edit_g", "calc_edit_b" );
	updateSkin();
	updateSkinAns();
	initSelect( "calc_select_skin"      , skin      );
	initSelect( "calc_select_skin_color", skinColor );
	initSelect( "calc_select_skin_ans"  , skinAns   );
	initSelect( "calc_select_skin_trans", skinTrans );
	cssSetStyleDisplayById( "calc_select_skin_color", skin == SKIN_COLOR );
	cssSetStyleDisplayById( "calc_select_skin_trans", skin == SKIN_IMAGE );
	cssSetStyleDisplayById( "input_skin_color"      , (skin == SKIN_COLOR) && (skinColor == COLOR.length - 1) );
	cssSetStyleDisplayById( "input_skin_image"      , skin == SKIN_IMAGE );

	fontSpan = getProfileString( "ENV_", "FontSpan", "Helvetica"   );
	fontEdit = getProfileString( "ENV_", "FontEdit", "Courier New" );
	updateFont();

	usageFlag = (getProfileInt( "ENV_", "PrintUsage", 1 ) == 1);
	updateButtonHeight();

	englishFlag = (getProfileInt( "ENV_", "Language", LANG_JAPANESE ) == LANG_ENGLISH);
	updateLanguage();

	soundType = getProfileInt( "ENV_", "Sound", 0 );
	updateSoundType();

	divEdit = document.getElementById( editId );

	// 文字情報を登録する
	regGWorldDefCharInfo( 0 );
	regGWorldDefCharInfoLarge( 1 );

	// システムの背景色（canvasClearより前に設定）
	regGWorldBgColor( 0xC0C0C0 );

	// キャンバス
	setCanvasEnv( new _CanvasEnv() );
	canvas = new _Canvas( canvasId );
	canvasClear();

	// ファイル選択コントロール
	inputFile = new Array();
	for( i = 0; i < inputFileIds.length; i++ ){
		inputFile[i] = new _InputFile( inputFileIds[i] );
	}

	// 計算エラー情報管理クラス
	procError = new _ProcError();

	editExpr = new EditExpr( 1 );
	editExpr.setDispLen( 28, 8 );
	logExpr = new ListBox( logId );
	logExpr.setLineNum( 12 );
	_addCalcEventListener( logExpr.element(), "click", function( e ){
		if( logExpr.click( e, 0, 20 ) ){
			updateLogExpr();
		}
	});
	listImage = new ListBox( selectImageId );
	listImage.setLineNum( (isAndroidTablet() || isIPad()) ? 19 : 21 );
	_addCalcEventListener( listImage.element(), "click", function( e ){
		if( listImage.click( e, 0, 20 ) ){
			updateListImage();

			getListImage();
		}
	});

	// 定義定数の値（regGWorldBgColorより後に設定）
	setDefineValue();

	// 計算処理メイン・クラスを生成する
	setProcEnv( new _ProcEnv() );
	topProc = new _Proc( _PROC_DEF_PARENT_MODE, _PROC_DEF_PARENT_MP_PREC, _PROC_DEF_PARENT_MP_ROUND, true, _PROC_DEF_PRINT_ASSERT, _PROC_DEF_PRINT_WARN, _PROC_DEF_GUPDATE_FLAG );
	setProcWarnFlowFlag( true );
	setProcLoopMax( loopMax );

	// 計算パラメータ・クラスを生成する
	topParam = new _Param();
	topParam.setPrec( 0 );
	topParam._enableCommand = false;
	topParam._enableOpPow = true;
	topParam._enableStat = false;
	topParam._var._label.setLabel( 0 , "Ans", true );
	setGlobalParam( topParam );

	initProc();	// setProcEnvより後に実行

	// 乱数を初期化する
	srand( time() );
	rand();

	calcUI = new CalcUI( topProc, topParam );
	convUI = new ConvUI( topProc, topParam, englishFlag );

	getProfileExpr();
	updateEditExpr();

	getProfileLogExpr();
	updateLogExpr();

	getProfileVar();
	updateSelectVar();

	getProfileImage();
	selListImage( skinImage, document.getElementById( "calc_edit_x" ).value, document.getElementById( "calc_edit_y" ).value );

	updateCalcRadioMode();
	updateCalcRadioBitType();
	updateCalcEditRadix();
	updateCalcRadioTimeType();
	updateCalcEditFps();
	updateCalcRadioAngType();
	updateCalcRadioSepType();

	updateConvMode();

	doButtonUIMain();
	initSelect( "calc_select_mode", calcUI._mode );
	initSelect( "calc_select_bit", calcUI._bitType );
	initSelect( "calc_select_time", calcUI._timeType );
	initSelect( "calc_select_var", 0 );
	updateButton();

	document.getElementById( "check_keep_trig"    ).checked = calcUI.keepTrigFlag();
	document.getElementById( "check_italic"       ).checked = calcUI.italic();
	document.getElementById( "check_recalc_mode"  ).checked = calcUI.reCalcModeFlag();
	document.getElementById( "check_recalc_angle" ).checked = calcUI.reCalcAngleFlag();
	document.getElementById( "check_recalc_sto"   ).checked = calcUI.reCalcSTOFlag();
	document.getElementById( "check_print_usage"  ).checked = usageFlag;
	document.getElementById( "check_calculator"   ).checked = topParam._calculator;

	var event = common.isPC() ? "mousedown" : "touchstart";
	var elements;

	_addCalcEventListenerById( "button_cursor_top", event, topEditExpr );
	_addCalcEventListenerById( "button_cursor_end", event, endEditExpr );
	_addCalcEventListenerById( "button_cursor_backward", event, backwardEditExpr );
	_addCalcEventListenerById( "button_cursor_forward", event, forwardEditExpr );

	_addCalcEventListenerById( "button_del", event, delEditExpr );
	_addCalcEventListenerById( "button_del_all", event, delAllEditExpr );

	_addCalcEventListenerById( "button_0", event, doButton0 );
	_addCalcEventListenerById( "button_1", event, doButton1 );
	_addCalcEventListenerById( "button_2", event, doButton2 );
	_addCalcEventListenerById( "button_3", event, doButton3 );
	_addCalcEventListenerById( "button_4", event, doButton4 );
	_addCalcEventListenerById( "button_5", event, doButton5 );
	_addCalcEventListenerById( "button_6", event, doButton6 );
	_addCalcEventListenerById( "button_7", event, doButton7 );
	_addCalcEventListenerById( "button_8", event, doButton8 );
	_addCalcEventListenerById( "button_9", event, doButton9 );
	_addCalcEventListenerById( "button_a", event, doButtonA );
	_addCalcEventListenerById( "button_b", event, doButtonB );
	_addCalcEventListenerById( "button_c", event, doButtonC );
	_addCalcEventListenerById( "button_d", event, doButtonD );
	_addCalcEventListenerById( "button_e", event, doButtonE );
	_addCalcEventListenerById( "button_f", event, doButtonF );

	_addCalcEventListenerById( "button_point", event, doButtonPoint );
	_addCalcEventListenerById( "button_plus", event, doButtonPlus );
	_addCalcEventListenerById( "button_minus", event, doButtonMinus );
	_addCalcEventListenerById( "button_space", event, doButtonSpace );
	_addCalcEventListenerById( "button_eplus", event, doButtonEPlus );
	_addCalcEventListenerById( "button_eminus", event, doButtonEMinus );

	_addCalcEventListenerById( "button_fract", event, doButtonFract );
	_addCalcEventListenerById( "button_i", event, doButtonI );
	_addCalcEventListenerById( "button_time", event, doButtonTime );

	_addCalcEventListenerById( "button_mul", event, doButtonMul );
	_addCalcEventListenerById( "button_div", event, doButtonDiv );
	_addCalcEventListenerById( "button_mod", event, doButtonMod );
	_addCalcEventListenerById( "button_add", event, doButtonAdd );
	_addCalcEventListenerById( "button_sub", event, doButtonSub );
	_addCalcEventListenerById( "button_shiftl", event, doButtonShiftL );
	_addCalcEventListenerById( "button_shiftr", event, doButtonShiftR );
	_addCalcEventListenerById( "button_complement", event, doButtonComplement );
	_addCalcEventListenerById( "button_unary_minus", event, doButtonUnaryMinus );
	_addCalcEventListenerById( "button_and", event, doButtonAND );
	_addCalcEventListenerById( "button_xor", event, doButtonXOR );
	_addCalcEventListenerById( "button_or", event, doButtonOR );

	_addCalcEventListenerById( "button_deg", event, doButtonDeg );
	_addCalcEventListenerById( "button_grad", event, doButtonGrad );
	_addCalcEventListenerById( "button_rad", event, doButtonRad );
	_addCalcEventListenerById( "button_esc", event, doButtonEsc );
	_addCalcEventListenerById( "button_bin", event, doButtonBIN );
	_addCalcEventListenerById( "button_hex", event, doButtonHEX );
	_addCalcEventListenerById( "button_hour", event, doButtonHour );
	_addCalcEventListenerById( "button_min", event, doButtonMin );
	_addCalcEventListenerById( "button_sec", event, doButtonSec );
	_addCalcEventListenerById( "button_frame", event, doButtonFrame );

	_addCalcEventListenerById( "button_factorial1", event, doButtonFactorial );
	_addCalcEventListenerById( "button_factorial2", event, doButtonFactorial );

	_addCalcEventListenerById( "button_pow1", event, doButtonPow );
	_addCalcEventListenerById( "button_pow2", event, doButtonPow );

	_addCalcEventListenerById( "button_lang", "click", doButtonLang );

	elements = document.getElementsByName( "button_shift" );
	for( i = 0; i < elements.length; i++ ){
		_addCalcEventListener( elements[i], "click", doButtonSHIFT );
	}

	_addCalcEventListenerById( "button_sin", "click", doButtonSin );
	_addCalcEventListenerById( "button_cos", "click", doButtonCos );
	_addCalcEventListenerById( "button_tan", "click", doButtonTan );
	_addCalcEventListenerById( "button_log", "click", doButtonLog );
	_addCalcEventListenerById( "button_log10", "click", doButtonLog10 );
	_addCalcEventListenerById( "button_sqr", "click", doButtonSqr );

	elements = document.getElementsByName( "button_func" );
	for( i = 0; i < elements.length; i++ ){
		_addCalcEventListener( elements[i], "click", doButtonFunc );
	}

	_addCalcEventListenerById( "button_top", event, doButtonTop );
	_addCalcEventListenerById( "button_end", event, doButtonEnd );

	_addCalcEventListenerById( "button_sto", event, doButtonSTO );
	_addCalcEventListenerById( "button_rcl", event, doButtonRCL );
	_addCalcEventListenerById( "button_mcl", event, doButtonMCL );
	_addCalcEventListenerById( "button_enter", "click", doButtonEnter );

	_addCalcEventListenerById( "button_radix_down", event, doCalcDownRadix );
	_addCalcEventListenerById( "button_radix_up"  , event, doCalcUpRadix );
	_addCalcEventListenerById( "button_fps_down"  , event, doCalcDownFps );
	_addCalcEventListenerById( "button_fps_up"    , event, doCalcUpFps );

	_addCalcEventListenerById( "button_log_up"  , event, upLogExpr );
	_addCalcEventListenerById( "button_log_down", event, downLogExpr );
	_addCalcEventListenerById( "button_log_del" , event, delLogExpr );

	_addCalcEventListenerById( "button_edit_r_up"  , event, doButtonEditRUp );
	_addCalcEventListenerById( "button_edit_r_down", event, doButtonEditRDown );
	_addCalcEventListenerById( "button_edit_g_up"  , event, doButtonEditGUp );
	_addCalcEventListenerById( "button_edit_g_down", event, doButtonEditGDown );
	_addCalcEventListenerById( "button_edit_b_up"  , event, doButtonEditBUp );
	_addCalcEventListenerById( "button_edit_b_down", event, doButtonEditBDown );
	_addCalcEventListenerById( "button_edit_x_up"  , event, doButtonEditXUp );
	_addCalcEventListenerById( "button_edit_x_down", event, doButtonEditXDown );
	_addCalcEventListenerById( "button_edit_y_up"  , event, doButtonEditYUp );
	_addCalcEventListenerById( "button_edit_y_down", event, doButtonEditYDown );

	_addCalcEventListenerById( "button_selectimage_up"  , event, upListImage );
	_addCalcEventListenerById( "button_selectimage_down", event, downListImage );
	_addCalcEventListenerById( "button_selectimage_del" , event, delListImage );

	_addCalcEventListenerById( "button_edit_tab_up"  , event, doButtonEditTabUp );
	_addCalcEventListenerById( "button_edit_tab_down", event, doButtonEditTabDown );

	// 計算結果エディットボックスの初期化
	onCalcPrintAns();

	if( !common.isApp() ){
		if( useStorage && canUseStorage() ){
			cssSetStyleDisplayById( "button_storage_clear", true );
		} else if( canUseCookie() ){
			cssSetStyleDisplayById( "button_cookie_clear", true );
		}
	}

	if( !common.isPC() ){
		cssSetStyleDisplayById( "calc_radio_sound", true );
	}

	if( common.isApp() ){
		cssSetStyleDisplayById( "button_get_content", true );
	}

	if( getUrlParameter( "menu" ) == "option" ){
		doButtonUIOption();
	}

	if( dispCache ){
		if( canUseStorage() ){
			var num = storageNum();
			con[0].setColor( "0000ff" );
			con[0].setBold( true );
			con[0].print( "Storage: " );
			con[0].setBold( false );
			con[0].println( "" + num );
			con[0].setColor();
			for( i = 0; i < num; i++ ){
				var key = getStorageKey( i );
				con[0].print( "<b>[" + key + "]</b> " );
				con[0].println( common.escape( getStorage( key, "" ) ) );
			}
		}
		if( canUseCookie() ){
			var num = cookieNum();
			con[0].setColor( "0000ff" );
			con[0].setBold( true );
			con[0].print( "Cookie: " );
			con[0].setBold( false );
			con[0].println( "" + num );
			con[0].setColor();
			for( i = 0; i < num; i++ ){
				var key = getCookieKey( i );
				con[0].print( "<b>[" + key + "]</b> " );
				con[0].println( common.escape( getCookie( key, "" ) ) );
			}
		}
	}

	loadExtFuncFile();
	for( i = 0; i < extFuncFile.length; i++ ){
		var name = extFuncName( extFuncFile[i] );
		if( name.length > 0 ){
			regExtFuncButton( name );
		}
	}

	loadExtFuncFile2();
	for( i = 0; i < extFuncFile2.length; i++ ){
		var name = extFuncName( extFuncFile2[i] );
		if( name.length > 0 ){
			regExtFuncButton( name );
		}
	}

	// エディタ
	editor = new _Editor( editorId );

	// エディタのタブ幅
	var tabWidth = getProfileInt( "EDITOR_", "Tab", 4 );
	if( tabWidth < 0 ){
		tabWidth = 0;
	}
	document.getElementById( "tab_width" ).value = "" + tabWidth;
	cssSetPropertyValue( ".textarea_func", "tab-size", "" + tabWidth );

	// スマート
	var smart = (getProfileInt( "EDITOR_", "Smart", 1 ) == 1);
	document.getElementById( "check_smart" ).checked = smart;
	setEditorSmartFlag( smart );

	// エディタの現在の関数
	selFunc = getProfileInt( "EDITOR_", "SelFunc", 0 );
	initSelect( "calc_select_func", selFunc );
	curFunc = document.getElementById( "calc_select_func" ).options[selFunc].value;
	loadFunc();

	updateSelectFunc();

	setEnableWriteProfile( true );

	if( resetCalculator ){
		changeExpr();
		writeProfileInt( "ENV_", "Calculator", topParam._calculator ? 1 : 0 );
	}

	started = true;

	if( !common.isPC() ){
		nativeRequest = new NativeRequest();
		nativeRequest.setScheme( "native" );
		nativeRequest.send( "start_load_extfunc/" + extFuncFile[loadNum] );
	}

	// キー関連
	_addCalcEventListener( document, "keydown", keyDown );
	_addCalcEventListener( document, "keyup", keyUp );

	if( electron != null ){
		setEnglish( electron.isEnglish() );
	}

	if( androidTabletTest || iPadTest || (bodyHeight != defHeight( false )) ){
		setHeight( bodyHeight );
	}
}

function sound(){
	if( soundType != 0 ){
		if( nativeRequest ){
			nativeRequest.send( (soundType == 1) ? "sound" : "vibrate" );
		}
	}
}
function updateSoundType(){
	document.getElementById( "sound_type_0" ).checked = (soundType == 0);
	document.getElementById( "sound_type_1" ).checked = (soundType == 1);
	document.getElementById( "sound_type_2" ).checked = (soundType == 2);
}
function doSoundType0(){
	soundType = 0;
	updateSoundType();

	writeProfileInt( "ENV_", "Sound", soundType );
}
function doSoundType1(){
	soundType = 1;
	updateSoundType();

	writeProfileInt( "ENV_", "Sound", soundType );
}
function doSoundType2(){
	soundType = 2;
	updateSoundType();

	writeProfileInt( "ENV_", "Sound", soundType );
}

// Androidタブレット、iPad用
function setDeviceWidth( width ){
	if( isAndroidTablet() ){
		document.querySelector( "meta[name='viewport']" ).setAttribute( "content", "target-densitydpi=device-dpi, width=357, user-scalable=no" );
	}

	if( isIPad() ){
		var scale = "" + (width / 357.0);
		scale = scale.substring( 0, 5 );
		document.querySelector( "meta[name='viewport']" ).setAttribute( "content", "target-densitydpi=device-dpi, width=357, initial-scale=" + scale + ", maximum-scale=" + scale + ", user-scalable=no" );
	}
}

function defHeight( mainFlag ){
	var height = (isAndroidTablet() || isIPad()) ? 471 : 510;
	if( mainFlag && !usageFlag ){
		height -= 40;
	}
	return height;
}
function updateButtonHeight(){
	if( bodyHeight >= defHeight( true ) ){
		var add = _DIV( bodyHeight - defHeight( true ), 10 );
		var height29 = 29 + add;
		var height35 = 35 + add;
		var height70 = height35 * 2;
		cssSetPropertyValue( ".height29", "height", "" + height29 + "px" );
		cssSetPropertyValue( ".height35", "height", "" + height35 + "px" );
		cssSetPropertyValue( ".height70", "height", "" + height70 + "px" );
		document.getElementById( "td_mode"       ).setAttribute( "height", "" + height35 );
		document.getElementById( "td_angle"      ).setAttribute( "height", "" + height35 );
		document.getElementById( "td_trig"       ).setAttribute( "height", "" + height35 );
		document.getElementById( "td_calculator" ).setAttribute( "height", "" + height35 );
	}
}
function setHeight( height ){
	bodyHeight = height;

	started = false;
	con[0].setColor( "0000ff" );
	con[0].setBold( true );
	con[0].print( "Height: " );
	con[0].setBold( false );
	con[0].println( "" + bodyHeight );
	con[0].setColor();
	started = true;

	if( bodyHeight > defHeight( false ) ){
		cssSetPropertyValue( ".div_body", "height", "" + bodyHeight + "px" );
	}

	updateButtonHeight();

	var editorHeight = 0;
	if( isAndroidTablet() ){
		editorHeight = bodyHeight - 227;	// IMEのサイズ：357x227
	} else if( !androidTabletTest && common.isAndroidMobile() ){
		editorHeight = bodyHeight - 255 - 39;	// IMEのサイズ：322x255
	} else if( isIPad() ){
		editorHeight = bodyHeight - 145;	// IMEのサイズ：357x145
	} else if( !iPadTest && common.isIPhone() ){
		editorHeight = bodyHeight - 261;	// IMEのサイズ：322x261
	}
	if( editorHeight > 0 ){
		cssSetPropertyValue( ".textarea_func", "height", "" + editorHeight + "px" );
	}
}

var cursorText;
var cursorBack;
function updateSkin(){
	var element = document.getElementById( "calc_body" );
	element.classList.remove( "bg_gold" );
	element.classList.remove( "bg_silver" );
	element.classList.remove( "bg_iron" );
	element.classList.remove( "bg_image" );

	switch( skin ){
	case 0:
		cssSetPropertyValue( ".div_body", "background-color", GREEN_BG );

		cssSetButton( ".button_common", GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, GREEN_GRAY.get( 16 ), GREEN_GRAY.get( -16 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_del"   , GRADIENT_T_B, GREEN_RED.get( 16 ), GREEN_RED.get( -16 ), GREEN_TEXT, "#404040", false );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, GREEN_BLUE.get( 16 ), GREEN_BLUE.get( -16 ), GREEN_TEXT, "#404040", false );
		cssSetButton( ".button_sto"   , GRADIENT_T_B, GREEN_EMERALD.get( 16 ), GREEN_EMERALD.get( -16 ), GREEN_TEXT, "#404040", false );

		cssSetButton( ".button_enter" , GRADIENT_T_B, GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );

		cssSetButton( ".button_func"  , GRADIENT_T_B, GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
		cssSetButton( ".button_invhyp", GRADIENT_T_B, GREEN_DARK.get( 16 ), GREEN_DARK.get( -16 ), GREEN_TEXT, "#202020", false );

		cssSetButton( ".button_number", GRADIENT_T_B, GREEN_DARK.get( 16 ), GREEN_DARK.get( -16 ), GREEN_TEXT, "#202020", false );
		cssSetButton( ".button_op"    , GRADIENT_T_B, GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
		cssSetButton( ".button_symbol", GRADIENT_T_B, GREEN_LIGHT.get( 16 ), GREEN_LIGHT.get( -16 ), GREEN_TEXT, "#404040", false );
		cssSetPropertyValue( ".span_symbol", "color", GREEN_TEXT );

		cssSetSelect( ".select_common", GRADIENT_T_B, GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, GREEN_SELECT.get( 16 ), GREEN_SELECT.get( -16 ), "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", GREEN_SPAN );
		cssSetPropertyValue( ".div_usage", "color", GREEN_SPAN );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GREEN_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", GREEN_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_error"      , "background-color", "#C0C0C0" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

		cursorText = "#FFFFFF";
		cursorBack = GREEN_CHECKED;

		break;
	case 1:
		cssSetPropertyValue( ".div_body", "background-color", GRAY_BG );

		cssSetButton( ".button_common", GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, GRAY_SYSTEM.get( -32 ), GRAY_SYSTEM.get( 32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_LT_RB, GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );

		cssSetButton( ".button_del"   , GRADIENT_T_B, GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
		cssSetButton( ".button_rcl"   , GRADIENT_LT_RB, GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );
		cssSetButton( ".button_sto"   , GRADIENT_LT_RB, GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );

		cssSetButton( ".button_enter" , GRADIENT_LT_RB, GRAY_RED_1, GRAY_RED_2, GRAY_TEXT, "#404040", false );

		cssSetButton( ".button_func"  , GRADIENT_LT_RB, GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
		cssSetButton( ".button_invhyp", GRADIENT_LT_RB, GRAY_LIGHT_1, GRAY_LIGHT_2, GRAY_TEXT, "#404040", false );

		cssSetButton( ".button_number", GRADIENT_LT_RB, GRAY_LIGHT_1, GRAY_LIGHT_2, GRAY_TEXT, "#404040", false );
		cssSetButton( ".button_op"    , GRADIENT_LT_RB, GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
		cssSetButton( ".button_symbol", GRADIENT_LT_RB, GRAY_DARK_1, GRAY_DARK_2, GRAY_TEXT, "#202020", false );
		cssSetPropertyValue( ".span_symbol", "color", GRAY_TEXT );

		cssSetSelect( ".select_common", GRADIENT_T_B, GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, GRAY_SELECT.get( 32 ), GRAY_SELECT.get( -32 ), "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", GRAY_SPAN );
		cssSetPropertyValue( ".div_usage", "color", GRAY_SPAN );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GRAY_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", GRAY_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_error"      , "background-color", "#C0C0C0" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

		cursorText = "#FFFFFF";
		cursorBack = GRAY_CHECKED;

		break;
	case 2:
		cssSetPropertyValue( ".div_body", "background-color", PURPLE_BG );

		cssSetButton( ".button_common", GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_del"   , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_sto"   , GRADIENT_T_B, PURPLE_GRAY_1, PURPLE_GRAY_2, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_enter" , GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );

		cssSetButton( ".button_func"  , GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
		cssSetButton( ".button_invhyp", GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );

		cssSetButton( ".button_number", GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
		cssSetButton( ".button_op"    , GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
		cssSetButton( ".button_symbol", GRADIENT_T_B, PURPLE_BLUE_1, PURPLE_BLUE_2, PURPLE_TEXT, "#202020", false );
		cssSetPropertyValue( ".span_symbol", "color", PURPLE_TEXT );

		cssSetSelect( ".select_common", GRADIENT_T_B, PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, PURPLE_SELECT.get( 32 ), PURPLE_SELECT.get( -32 ), "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", PURPLE_SPAN );
		cssSetPropertyValue( ".div_usage", "color", PURPLE_SPAN );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", PURPLE_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", PURPLE_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_error"      , "background-color", "#C0C0C0" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

		cursorText = "#FFFFFF";
		cursorBack = PURPLE_CHECKED;

		break;
	case 3:
	case 4:
	case 5:
		switch( skin ){
		case 3:
			document.getElementById( "calc_body" ).classList.add( "bg_gold" );

			cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", GOLD_CHECKED );
			cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", GOLD_CHECKED );

			cursorText = "#FFFFFF";
			cursorBack = GOLD_CHECKED;

			break;
		case 4:
			document.getElementById( "calc_body" ).classList.add( "bg_silver" );

			cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", SILVER_CHECKED );
			cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", SILVER_CHECKED );

			cursorText = "#FFFFFF";
			cursorBack = SILVER_CHECKED;

			break;
		case 5:
			document.getElementById( "calc_body" ).classList.add( "bg_iron" );

			cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", IRON_CHECKED );
			cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", IRON_CHECKED );

			cursorText = "#FFFFFF";
			cursorBack = IRON_CHECKED;

			break;
		}

		cssSetButton( ".button_common", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );

		cssSetButton( ".button_del"   , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );
		cssSetButton( ".button_sto"   , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_enter" , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_func"  , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_invhyp", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );

		cssSetButton( ".button_number", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_op"    , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetButton( ".button_symbol", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "#E0E0E0", true );
		cssSetPropertyValue( ".span_symbol", "color", "#000000" );

		cssSetSelect( ".select_common", GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, "rgba(255,255,255,0.0)", "rgba(255,255,255,0.0)", "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", "#000000" );
		cssSetPropertyValue( ".div_usage", "color", "#000000" );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_error"      , "background-color", "#C0C0C0" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

		break;
	case 6:
		cssSetPropertyValue( ".div_body", "background-color", COLOR_BG );

		cssSetButton( ".button_common", GRADIENT_T_B, COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, COLOR_SYSTEM.get( 32 ), COLOR_SYSTEM.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_del"   , GRADIENT_T_B, COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_sto"   , GRADIENT_T_B, COLOR_DARK.get( 32 ), COLOR_DARK.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_enter" , GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_func"  , GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_invhyp", GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );

		cssSetButton( ".button_number", GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_op"    , GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetButton( ".button_symbol", GRADIENT_T_B, COLOR_LIGHT.get( 32 ), COLOR_LIGHT.get( -32 ), "#000000", "#E0E0E0", true );
		cssSetPropertyValue( ".span_symbol", "color", "#000000" );

		cssSetSelect( ".select_common", GRADIENT_T_B, COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, COLOR_SELECT.get( 32 ), COLOR_SELECT.get( -32 ), "#000000", "", true );

		cssSetPropertyValue( ".span"     , "color", "#000000" );
		cssSetPropertyValue( ".div_usage", "color", "#000000" );

		cssSetPropertyValue( ".span"     , "text-shadow", "0 0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "0 0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", COLOR_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", COLOR_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_log"        , "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "#FFFFFF" );
		cssSetPropertyValue( ".div_error"      , "background-color", "#C0C0C0" );
		cssSetPropertyValue( ".div_console"    , "background-color", "#C0C0C0" );

		cursorText = "#FFFFFF";
		cursorBack = COLOR_CHECKED;

		break;
	case 7:
		cssSetPropertyValue( ".bg_image", "background-image", "url(\"" + skinImage + "\")" );
		cssSetPropertyValue( ".bg_image", "background-position", document.getElementById( "calc_edit_x" ).value + "% " + document.getElementById( "calc_edit_y" ).value + "%" );
		document.getElementById( "calc_body" ).classList.add( "bg_image" );

		cssSetPropertyValue( ".div_body", "background-color", COLOR_BG );

		var color = "rgba(255,255,255,0.0)";
		switch( skinTrans ){
		case 0: break;
		case 1: color = "rgba(255,255,255,0.1)"; break;
		case 2: color = "rgba(255,255,255,0.2)"; break;
		case 3: color = "rgba(255,255,255,0.3)"; break;
		case 4: color = "rgba(255,255,255,0.4)"; break;
		case 5: color = "rgba(255,255,255,0.5)"; break;
		}

		cssSetButton( ".button_common", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_cursor", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu"  , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_menu2" , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_shift" , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_topend", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_del"   , GRADIENT_T_B, color, color, "#FF0000", "#A0A0A0", false );
		cssSetButton( ".button_rcl"   , GRADIENT_T_B, color, color, "#FF0000", "#A0A0A0", false );
		cssSetButton( ".button_sto"   , GRADIENT_T_B, color, color, "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_enter" , GRADIENT_T_B, color, color, "#FF0000", "#A0A0A0", false );

		cssSetButton( ".button_func"  , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_invhyp", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );

		cssSetButton( ".button_number", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_op"    , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetButton( ".button_symbol", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetPropertyValue( ".span_symbol", "color", "#000000" );

		cssSetSelect( ".select_common", GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetSelect( ".select_var"   , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );
		cssSetSelect( ".select_func"  , GRADIENT_T_B, color, color, "#000000", "#E0E0E0", true );

		cssSetPropertyValue( ".span"     , "color", "#000000" );
		cssSetPropertyValue( ".div_usage", "color", "#000000" );

		cssSetPropertyValue( ".span"     , "text-shadow", "1px 1px #E0E0E0" );
		cssSetPropertyValue( ".div_usage", "text-shadow", "1px 1px #E0E0E0" );

		cssSetPropertyValue( "input[type=\"checkbox\"]:checked + label::after", "background", IMAGE_CHECKED );
		cssSetPropertyValue( "input[type=\"radio\"]:checked + label::after"   , "background", IMAGE_CHECKED );

		cssSetPropertyValue( ".div_edit"       , "background-color", "rgba(255,255,255,0.0)" );
		cssSetPropertyValue( ".div_log"        , "background-color", "rgba(255,255,255,0.0)" );
		cssSetPropertyValue( ".div_selectimage", "background-color", "rgba(255,255,255,0.0)" );
		cssSetPropertyValue( ".div_error"      , "background-color", "rgba(255,255,255,0.0)" );
		cssSetPropertyValue( ".div_console"    , "background-color", "rgba(255,255,255,0.0)" );

		cursorText = "#FFFFFF";
		cursorBack = IMAGE_CHECKED;

		break;
	}
}
function updateSkinAns(){
	switch( skinAns ){
	case 0:
		cssSetPropertyValue( ".div_ans", "background-color", (skin == SKIN_IMAGE) ? "rgba(255,255,255,0.0)" : "#C0F080" );
		cssSetPropertyValue( ".span_ans", "color", "#000000" );
		break;
	case 1:
		cssSetPropertyValue( ".div_ans", "background-color", (skin == SKIN_IMAGE) ? "rgba(255,255,255,0.0)" : "#000000" );
		cssSetPropertyValue( ".span_ans", "color", _RGB( 0, 255, 0 ) );
		break;
	case 2:
		cssSetPropertyValue( ".div_ans", "background-color", (skin == SKIN_IMAGE) ? "rgba(255,255,255,0.0)" : "#000000" );
		cssSetPropertyValue( ".span_ans", "color", _RGB( 255, 160, 0 ) );
		break;
	}
}
function updateSkinColor(){
	makeColor( skinColor, "calc_edit_r", "calc_edit_g", "calc_edit_b" );
	updateSkin();
	updateEditExpr();
	updateLogExpr();
}
function doChangeSkin( select ){
	skin = select.selectedIndex;
	updateSkin();
	updateSkinAns();
	updateEditExpr();
	updateLogExpr();

	writeProfileInt( "ENV_", "Skin", skin );

	cssSetStyleDisplayById( "calc_select_skin_color", skin == SKIN_COLOR );
	cssSetStyleDisplayById( "calc_select_skin_trans", skin == SKIN_IMAGE );
	cssSetStyleDisplayById( "input_skin_color"      , (skin == SKIN_COLOR) && (skinColor == COLOR.length - 1) );
	cssSetStyleDisplayById( "input_skin_image"      , skin == SKIN_IMAGE );
}
function doChangeSkinColor( select ){
	skinColor = select.selectedIndex;
	updateSkinColor();

	writeProfileInt( "ENV_", "SkinColor", skinColor );

	cssSetStyleDisplayById( "input_skin_color", (skin == SKIN_COLOR) && (skinColor == COLOR.length - 1) );
}
function doChangeSkinAns( select ){
	skinAns = select.selectedIndex;
	updateSkinAns();

	writeProfileInt( "ENV_", "SkinAns", skinAns );
}
function doChangeSkinTrans( select ){
	skinTrans = select.selectedIndex;
	updateSkin();

	writeProfileInt( "ENV_", "SkinTrans", skinTrans );
}
function doCalcEditSkinImage(){
	skinImage = document.getElementById( "calc_edit_skin_image" ).value;
	if( (skinImage.indexOf( "://" ) < 0) && (skinImage.indexOf( "data:" ) != 0) ){
		skinImage = "http://" + skinImage;
		document.getElementById( "calc_edit_skin_image" ).value = skinImage;
	}
	updateSkin();

	writeProfileString( "ENV_", "SkinImage", skinImage );

	addListImage();
}

function onChangeEditR(){
	updateSkinColor();

	writeProfileInt( "ENV_", "SkinColorR", COLOR[COLOR.length - 1][0] );
}
function onChangeEditG(){
	updateSkinColor();

	writeProfileInt( "ENV_", "SkinColorG", COLOR[COLOR.length - 1][1] );
}
function onChangeEditB(){
	updateSkinColor();

	writeProfileInt( "ENV_", "SkinColorB", COLOR[COLOR.length - 1][2] );
}
function doButtonEditRUp( e ){
	if( doButtonUpInt( "calc_edit_r", 1, 255 ) ){
		onChangeEditR();
	}
}
function doButtonEditRDown( e ){
	if( doButtonDownInt( "calc_edit_r", 1, 0 ) ){
		onChangeEditR();
	}
}
function doButtonEditGUp( e ){
	if( doButtonUpInt( "calc_edit_g", 1, 255 ) ){
		onChangeEditG();
	}
}
function doButtonEditGDown( e ){
	if( doButtonDownInt( "calc_edit_g", 1, 0 ) ){
		onChangeEditG();
	}
}
function doButtonEditBUp( e ){
	if( doButtonUpInt( "calc_edit_b", 1, 255 ) ){
		onChangeEditB();
	}
}
function doButtonEditBDown( e ){
	if( doButtonDownInt( "calc_edit_b", 1, 0 ) ){
		onChangeEditB();
	}
}
function doCheckColorR(){
	skinLockR = document.getElementById( "check_color_r" ).checked;
	updateSkinColor();

	writeProfileInt( "ENV_", "SkinLockR", skinLockR ? 1 : 0 );
}
function doCheckColorG(){
	skinLockG = document.getElementById( "check_color_g" ).checked;
	updateSkinColor();

	writeProfileInt( "ENV_", "SkinLockG", skinLockG ? 1 : 0 );
}
function doCheckColorB(){
	skinLockB = document.getElementById( "check_color_b" ).checked;
	updateSkinColor();

	writeProfileInt( "ENV_", "SkinLockB", skinLockB ? 1 : 0 );
}
function onChangeEditX(){
	updateSkin();

	writeProfileString( "ENV_", "SkinImageX", document.getElementById( "calc_edit_x" ).value );

	addListImage();
}
function onChangeEditY(){
	updateSkin();

	writeProfileString( "ENV_", "SkinImageY", document.getElementById( "calc_edit_y" ).value );

	addListImage();
}
function doButtonEditXUp( e ){
	if( doButtonUpInt( "calc_edit_x", 5, 100 ) ){
		onChangeEditX();
	}
}
function doButtonEditXDown( e ){
	if( doButtonDownInt( "calc_edit_x", 5, 0 ) ){
		onChangeEditX();
	}
}
function doButtonEditYUp( e ){
	if( doButtonUpInt( "calc_edit_y", 5, 100 ) ){
		onChangeEditY();
	}
}
function doButtonEditYDown( e ){
	if( doButtonDownInt( "calc_edit_y", 5, 0 ) ){
		onChangeEditY();
	}
}

function updateFont(){
	cssSetPropertyValue( "button"           , "font-family", fontSpan );
	cssSetPropertyValue( "select"           , "font-family", fontSpan );
	cssSetPropertyValue( ".span"            , "font-family", fontSpan );
	cssSetPropertyValue( ".span_ellipsis"   , "font-family", fontSpan );
	cssSetPropertyValue( ".div_usage"       , "font-family", fontSpan );
	cssSetPropertyValue( ".input_file"      , "font-family", fontSpan );

	cssSetPropertyValue( ".input"           , "font-family", fontEdit );
	cssSetPropertyValue( ".select_var_font" , "font-family", fontEdit );
	cssSetPropertyValue( ".select_func_font", "font-family", fontEdit );
	cssSetPropertyValue( ".div_ans"         , "font-family", fontEdit );
	cssSetPropertyValue( ".div_edit"        , "font-family", fontEdit );
	cssSetPropertyValue( ".div_log"         , "font-family", fontEdit );
	cssSetPropertyValue( ".div_error"       , "font-family", fontEdit );
	cssSetPropertyValue( ".div_console"     , "font-family", fontEdit );
	cssSetPropertyValue( ".div_selectimage" , "font-family", fontEdit );
	cssSetPropertyValue( ".textarea_profile", "font-family", fontEdit );
}

function updateEditExpr(){
	var forward = new _String();
	var after   = new _String();
	editExpr.get( forward, after, true );
	if( editExpr.isSelAll() ){
		divEdit.innerHTML = "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>" + forward.escape().str() + after.escape().str() + "</span>";
	} else if( after.str().length == 0 ){
		divEdit.innerHTML = forward.escape().str() + "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>&nbsp;</span>";
	} else if( after.str().length == 1 ){
		divEdit.innerHTML = forward.escape().str() + "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>" + after.escape().str() + "</span>";
	} else {
		var tmp = after.str();
		var str1 = new _String( tmp.substring( 0, 1 ) );
		var str2 = new _String( tmp.slice( 1 ) );
		divEdit.innerHTML = forward.escape().str() + "<span style='color:" + cursorText + "; background-color:" + cursorBack + "'>" + str1.escape().str() + "</span>" + str2.escape().str();
	}
}

function insEditExpr( token ){
	if( usageFlag ){
		printUsage( token, topProc, topParam, englishFlag, "calc_usage" );
	}

	editExpr.ins( token );
	writeProfileExpr();
	updateEditExpr();
}

function topEditExpr( e ){
	editExpr.top();
	updateEditExpr();
}
function endEditExpr( e ){
	editExpr.end();
	updateEditExpr();
}
function backwardEditExpr( e ){
	editExpr.backward();
	updateEditExpr();
}
function forwardEditExpr( e ){
	editExpr.forward();
	updateEditExpr();
}
function delEditExpr( e ){
	editExpr.del();
	writeProfileExpr();
	updateEditExpr();
}
function delAllEditExpr( e ){
	editExpr.delAll();
	writeProfileExpr();
	updateEditExpr();

	document.getElementById( "calc_usage" ).innerHTML = "";
}

function doButton0( e ){ if( e != undefined ) sound(); insEditExpr( "0" ); }
function doButton1( e ){ if( e != undefined ) sound(); insEditExpr( "1" ); }
function doButton2( e ){ if( e != undefined ) sound(); insEditExpr( "2" ); }
function doButton3( e ){ if( e != undefined ) sound(); insEditExpr( "3" ); }
function doButton4( e ){ if( e != undefined ) sound(); insEditExpr( "4" ); }
function doButton5( e ){ if( e != undefined ) sound(); insEditExpr( "5" ); }
function doButton6( e ){ if( e != undefined ) sound(); insEditExpr( "6" ); }
function doButton7( e ){ if( e != undefined ) sound(); insEditExpr( "7" ); }
function doButton8( e ){ if( e != undefined ) sound(); insEditExpr( "8" ); }
function doButton9( e ){ if( e != undefined ) sound(); insEditExpr( "9" ); }
function doButtonA( e ){ if( e != undefined ) sound(); insEditExpr( "A" ); }
function doButtonB( e ){ if( e != undefined ) sound(); insEditExpr( "B" ); }
function doButtonC( e ){ if( e != undefined ) sound(); insEditExpr( "C" ); }
function doButtonD( e ){ if( e != undefined ) sound(); insEditExpr( "D" ); }
function doButtonE( e ){ if( e != undefined ) sound(); insEditExpr( "E" ); }
function doButtonF( e ){ if( e != undefined ) sound(); insEditExpr( "F" ); }

function doButtonPoint( e ){ if( e != undefined ) sound(); insEditExpr( "." ); }
function doButtonPlus( e ){ if( e != undefined ) sound(); insEditExpr( "\\+" ); }
function doButtonMinus( e ){ if( e != undefined ) sound(); insEditExpr( "\\-" ); }
function doButtonSpace( e ){ if( e != undefined ) sound(); insEditExpr( " " ); }
function doButtonEPlus( e ){ if( e != undefined ) sound(); insEditExpr( "e+" ); }
function doButtonEMinus( e ){ if( e != undefined ) sound(); insEditExpr( "e-" ); }

function doButtonFract( e ){ if( e != undefined ) sound(); insEditExpr( "_" ); }
function doButtonI( e ){ if( e != undefined ) sound(); insEditExpr( "i" ); }
function doButtonTime( e ){ if( e != undefined ) sound(); insEditExpr( ":" ); }

function doButtonMul( e ){ if( e != undefined ) sound(); insEditExpr( "*" ); }
function doButtonDiv( e ){ if( e != undefined ) sound(); insEditExpr( "/" ); }
function doButtonMod( e ){ if( e != undefined ) sound(); insEditExpr( "%" ); }
function doButtonAdd( e ){ if( e != undefined ) sound(); insEditExpr( "+" ); }
function doButtonSub( e ){ if( e != undefined ) sound(); insEditExpr( "-" ); }
function doButtonShiftL( e ){ if( e != undefined ) sound(); insEditExpr( "<<" ); }
function doButtonShiftR( e ){ if( e != undefined ) sound(); insEditExpr( ">>" ); }
function doButtonComplement( e ){ if( e != undefined ) sound(); insEditExpr( "[~]" ); }
function doButtonUnaryMinus( e ){ if( e != undefined ) sound(); insEditExpr( "[-]" ); }
function doButtonAND( e ){ if( e != undefined ) sound(); insEditExpr( "&" ); }
function doButtonXOR( e ){ if( e != undefined ) sound(); insEditExpr( "^" ); }
function doButtonOR( e ){ if( e != undefined ) sound(); insEditExpr( "|" ); }

function doButtonDeg( e ){ if( e != undefined ) sound(); insEditExpr( "d" ); }
function doButtonGrad( e ){ if( e != undefined ) sound(); insEditExpr( "g" ); }
function doButtonRad( e ){ if( e != undefined ) sound(); insEditExpr( "r" ); }
function doButtonEsc( e ){ if( e != undefined ) sound(); insEditExpr( "\\" ); }
function doButtonBIN( e ){ if( e != undefined ) sound(); insEditExpr( "b" ); }
function doButtonHEX( e ){ if( e != undefined ) sound(); insEditExpr( "x" ); }
function doButtonHour( e ){ if( e != undefined ) sound(); insEditExpr( "h" ); }
function doButtonMin( e ){ if( e != undefined ) sound(); insEditExpr( "m" ); }
function doButtonSec( e ){ if( e != undefined ) sound(); insEditExpr( "s" ); }
function doButtonFrame( e ){ if( e != undefined ) sound(); insEditExpr( "f" ); }

function doButtonFactorial( e ){ if( e != undefined ) sound(); insEditExpr( "!" ); }

function doButtonPow( e ){ if( e != undefined ) sound(); insEditExpr( "^" ); }

function doButtonSin( e ){
	sound();
	insEditExpr( calcUI.buttonSin() );

	setButtonMode( 0 );
}
function doButtonCos( e ){
	sound();
	insEditExpr( calcUI.buttonCos() );

	setButtonMode( 0 );
}
function doButtonTan( e ){
	sound();
	insEditExpr( calcUI.buttonTan() );

	setButtonMode( 0 );
}
function doButtonLog( e ){
	sound();
	insEditExpr( calcUI.buttonLog() );

	setButtonMode( 0 );
}
function doButtonLog10( e ){
	sound();
	insEditExpr( calcUI.buttonLog10() );

	setButtonMode( 0 );
}
function doButtonSqr( e ){
	sound();
	insEditExpr( calcUI.buttonSqr() );

	setButtonMode( 0 );
}
function doButtonFunc( e ){
	sound();
	insEditExpr( e.target.innerHTML + " " );

	setButtonMode( 0 );
}
function doButtonExtFunc( e ){
	sound();
	insEditExpr( "!" + e.target.innerHTML + " " );

	setButtonMode( 0 );
}

function doButtonTop( e ){ if( e != undefined ) sound(); insEditExpr( "(" ); }
function doButtonEnd( e ){ if( e != undefined ) sound(); insEditExpr( ")" ); }

function doButtonSTO( e ){
	sound();
	calcUI.buttonSTO();
	updateSelectVar();
}
function doButtonRCL( e ){
	sound();
	insEditExpr( calcUI.buttonRCL() );
}
function doButtonMCL( e ){
	sound();
	calcUI.buttonMCL();
	updateSelectVar();
}
function doButtonEnter( e ){
	if( e != undefined ) sound();
	onCalcButtonEnter();
}

function updateLogExpr(){
	var html    = new String();
	var tmpEdit = new EditExpr( -1 );
	var forward = new _String();
	var after   = new _String();
	var tmp;
	var j = 0;
	html += "<table width='100%' border='0' cellpadding='0' cellspacing='0'>";
	for( var i = logExpr.scroll(); i < logExpr.num(); i++ ){
		tmpEdit.importLog( logExpr.obj( i ) );
		tmpEdit.get( forward, after );

		if( i == logExpr.index() ){
			html += "<tr><td bgcolor='" + cursorBack + "'>";
		} else {
			html += "<tr><td>";
		}
		tmp = forward.str() + after.str();
		if( tmp.length > 29 ){
			if( i == logExpr.index() ){
				tmp = common.escape( tmp.substring( 0, 27 ) ) + "<span class='span_ellipsis' style='color:" + cursorText + "'>...</span>";
			} else {
				tmp = common.escape( tmp.substring( 0, 27 ) ) + "<span class='span_ellipsis'>...</span>";
			}
		} else {
			tmp = common.escape( tmp );
		}
		if( i == logExpr.index() ){
			html += "<span style='color:" + cursorText + "'>" + tmp + "</span>";
		} else {
			html += tmp;
		}
		html += "</td></tr>";

		j++;
		if( j >= logExpr.lineNum() ){
			break;
		}
	}
	html += "</table>";
	logExpr.element().innerHTML = html;
}

function addLogExpr(){
	var expr = new _String();
	editExpr.exportLog( expr );
	if( expr.str().length > 0 ){
		editExpr.selAll();
		updateEditExpr();

		for( var i = logExpr.num() - 1; i >= 0; i-- ){
			if( logExpr.obj( i ) == expr.str() ){
				logExpr.del( i );
			}
		}

		logExpr.ins( 0, expr.str() );
		updateLogExpr();

		writeProfileLogExpr();
	}
}

function importLogExpr(){
	var expr = logExpr.obj( logExpr.index() );
	if( expr != null ){
		editExpr.importLog( expr );
		writeProfileExpr();
		updateEditExpr();

		doButtonUIMain();
		setButtonMode( 0 );
	}
}

function upLogExpr( e ){
	logExpr.up();
	updateLogExpr();
}
function downLogExpr( e ){
	logExpr.down();
	updateLogExpr();
}

function delLogExpr( e ){
	logExpr.del( logExpr.index() );
	updateLogExpr();

	writeProfileLogExpr();
}

function delAllLogExpr(){
	logExpr.delAll();
	updateLogExpr();

	writeProfileLogExpr();
}

function updateSelectVar(){
	var _real = new _String();
	var _imag = new _String();

	var select = document.getElementById( "calc_select_var" );
	var index;
	var old = new String();
	for( var i = 0; i < 27; i++ ){
		old = select.options[i].innerHTML;
		index = (i == 0) ? 0 : (64 + i);
		if( topParam.isZero( index ) ){
			select.options[i].innerHTML = (index == 0) ? "Ans" : "@" + String.fromCharCode( index );
		} else {
			procToken().valueToString( topParam, topParam.val( index ), _real, _imag );
			select.options[i].innerHTML = ((index == 0) ? "Ans" : "@" + String.fromCharCode( index ) + "&nbsp;") + "&nbsp;=&nbsp;" + _real.str() + _imag.str();
		}
		if( started && (select.options[i].innerHTML != old) ){
			writeProfileVar( index );
		}
	}
}

function selListImage( url, x, y ){
	if( url.length > 0 ){
		var i;
		for( i = 0; i < listImage.num(); i++ ){
			if( listImage.obj( i )._url == url ){
				listImage.setIndex( i );
				break;
			}
		}
		if( i == listImage.num() ){
			listImage.add( new ListImageItem( url, x, y ) );

			writeProfileImage();
		}
	}
	updateListImage();
}

function addListImage(){
	var url = skinImage;
	if( url.length > 0 ){
		var i;
		for( i = 0; i < listImage.num(); i++ ){
			if( listImage.obj( i )._url == url ){
				listImage.obj( i )._x = document.getElementById( "calc_edit_x" ).value;
				listImage.obj( i )._y = document.getElementById( "calc_edit_y" ).value;
				listImage.setIndex( i );
				break;
			}
		}
		if( i == listImage.num() ){
			var position = "50";

			document.getElementById( "calc_edit_x" ).value = position;
			document.getElementById( "calc_edit_y" ).value = position;

			updateSkin();

			writeProfileString( "ENV_", "SkinImageX", position );
			writeProfileString( "ENV_", "SkinImageY", position );

			listImage.add( new ListImageItem( url, position, position ) );
		}

		updateListImage();

		writeProfileImage();
	}
}

function getListImage(){
	var item = listImage.obj( listImage.index() );
	if( item != null ){
		skinImage = item._url;
		document.getElementById( "calc_edit_skin_image" ).value = skinImage;
		document.getElementById( "calc_edit_x"          ).value = item._x;
		document.getElementById( "calc_edit_y"          ).value = item._y;

		updateSkin();

		writeProfileString( "ENV_", "SkinImage" , skinImage );
		writeProfileString( "ENV_", "SkinImageX", item._x   );
		writeProfileString( "ENV_", "SkinImageY", item._y   );
	}
}

function updateListImage(){
	var html = new String();
	var tmp;
	var j = 0;
	html += "<table width='100%' border='0' cellpadding='0' cellspacing='0'>";
	for( var i = listImage.scroll(); i < listImage.num(); i++ ){
		if( i == listImage.index() ){
			html += "<tr><td bgcolor='" + cursorBack + "'>";
		} else {
			html += "<tr><td>";
		}
		tmp = listImage.obj( i )._url;
		if( tmp.length > 29 ){
			if( i == listImage.index() ){
				tmp = "<span class='span_ellipsis' style='color:" + cursorText + "'>...</span>" + tmp.slice( tmp.length - 27 );
			} else {
				tmp = "<span class='span_ellipsis'>...</span>" + tmp.slice( tmp.length - 27 );
			}
		}
		if( i == listImage.index() ){
			html += "<span style='color:" + cursorText + "'>" + tmp + "</span>";
		} else {
			html += tmp;
		}
		html += "</td></tr>";

		j++;
		if( j >= listImage.lineNum() ){
			break;
		}
	}
	html += "</table>";
	listImage.element().innerHTML = html;
}

function upListImage( e ){
	listImage.up();
	updateListImage();

	getListImage();
}
function downListImage( e ){
	listImage.down();
	updateListImage();

	getListImage();
}

function delListImage( e ){
	listImage.del( listImage.index() );
	updateListImage();

	writeProfileImage();

	getListImage();
}

function doCheckKeepTrig(){
	calcUI.setKeepTrigFlag( document.getElementById( "check_keep_trig" ).checked );

	writeProfileInt( "ENV_", "KeepTrig", calcUI.keepTrigFlag() ? 1 : 0 );
}

function doCheckItalic(){
	calcUI.setItalic( document.getElementById( "check_italic" ).checked );

	writeProfileInt( "ENV_", "Italic", calcUI.italic() ? 1 : 0 );
}

function doCheckRecalcMode(){
	calcUI.setReCalcModeFlag( document.getElementById( "check_recalc_mode" ).checked );

	writeProfileInt( "ENV_", "ReCalcMode", calcUI.reCalcModeFlag() ? 1 : 0 );
}

function doCheckRecalcAngle(){
	calcUI.setReCalcAngleFlag( document.getElementById( "check_recalc_angle" ).checked );

	writeProfileInt( "ENV_", "ReCalcAngle", calcUI.reCalcAngleFlag() ? 1 : 0 );
}

function doCheckRecalcSTO(){
	calcUI.setReCalcSTOFlag( document.getElementById( "check_recalc_sto" ).checked );

	writeProfileInt( "ENV_", "ReCalcSTO", calcUI.reCalcSTOFlag() ? 1 : 0 );
}

function doCheckPrintUsage(){
	usageFlag = document.getElementById( "check_print_usage" ).checked;

	updateButtonHeight();

	writeProfileInt( "ENV_", "PrintUsage", usageFlag ? 1 : 0 );
}

#include "_Cookie.js"
#include "_Storage.js"
#include "_Preference.js"
#include "_HttpRequest.js"
var loadNum = 0;
var loading = false;
function doLoadExtFuncFile(){
	if( !loading ){
		loading = true;
		loadExtFuncFile();
	}
}
function loadExtFuncFile(){
	if( loadNum >= extFuncFile.length ){
		if( electron != null ){
			electron.applyExtFunc();
		}

		cssSetStyleDisplayById( "calc_button_loadextfunc" , false );
		cssSetStyleDisplayById( "calc_button_loadextfunc2", false );
		if( common.isPC() ){
			cssSetStyleDisplayById( "calc_input_loadextfunc" , true );
			cssSetStyleDisplayById( "calc_input_loadextfunc2", true );
			cssSetStyleDisplayById( "calc_input_loadextfunc3", true );
		}
		return;
	}

	var data;
	if( electron != null ){
		data = electron.getExtFunc( extFuncFile[loadNum], "" );
	} else {
		data = getProfileString( "TMP_", extFuncFile[loadNum], "" );
	}
	if( data.length > 0 ){
		onHttpResponse( null, data );
	} else {
		if( loading ){
			var file = extFuncFile[loadNum];
			httpGet( file );
		}
	}
}
function onHttpSetRequestHeader( header, value ){
}
function onHttpResponse( request, data ){
	extFuncData[loadNum] = splitData( data );

	data = "";
	for( var i = 0; i < extFuncData[loadNum].length; i++ ){
		if( i != 0 ) data += "\n";
		data += extFuncData[loadNum][i];
	}

	if( request != null ){
		if( electron != null ){
			electron.setExtFunc( extFuncFile[loadNum], data );
		} else {
			writeProfileString( "TMP_", extFuncFile[loadNum], data );
		}
	}

	loadNum++;
	loadExtFuncFile();
}
function onHttpError( request, status ){
	loading = false;
}

function loadExtFuncFile2(){
	var i;

	if( electron != null ){
		electron.beginReadExtFunc( "load" );
		for( i = 0; ; i++ ){
			file = electron.readExtFunc();
			if( file.length == 0 ){
				break;
			}
			extFuncFile2[i] = file;
		}
		electron.endReadExtFunc();
	} else {
		beginGetProfile( "TMP_LOADCEF_" );
		for( i = 0; ; i++ ){
			file = getProfile();
			if( file.length == 0 ){
				break;
			}
			extFuncFile2[i] = file;
		}
		endGetProfile();
	}

	for( i = 0; i < extFuncFile2.length; i++ ){
		var data;
		if( electron != null ){
			data = electron.getExtFunc( extFuncFile2[i], "" );
		} else {
			data = getProfileString( "TMP_", extFuncFile2[i], "" );
		}
		if( data.length > 0 ){
			extFuncData2[i] = splitData( data );
		}
	}
}

function onInputFileLoad( func, data ){
	var i;

	// 外部関数キャッシュのクリア
	topProc.clearFuncCache( func );

	var name = "/" + func + ".cef";

	var index = extFuncFile2.length;
	for( i = 0; i < extFuncFile2.length; i++ ){
		if( extFuncFile2[i] == name ){
			index = i;
			break;
		}
	}
	extFuncFile2[index] = name;
	extFuncData2[index] = splitData( data );

	regExtFuncButton( extFuncName( extFuncFile2[index] ) );

	data = "";
	for( i = 0; i < extFuncData2[index].length; i++ ){
		if( i != 0 ) data += "\n";
		data += extFuncData2[index][i];
	}

	if( electron != null ){
		electron.beginWriteExtFunc();
		for( i = 0; i < extFuncFile2.length; i++ ){
			electron.writeExtFunc( extFuncFile2[i] );
		}
		electron.endWriteExtFunc( "load" );

		electron.setExtFunc( extFuncFile2[index], data );
	} else {
		beginWriteProfile();
		for( i = 0; i < extFuncFile2.length; i++ ){
			writeProfile( extFuncFile2[i] );
		}
		endWriteProfile( "TMP_LOADCEF_" );

		writeProfileString( "TMP_", extFuncFile2[index], data );
	}
}
function onInputFileLoadEnd( num ){
	if( electron != null ){
		electron.applyExtFunc();
	}
}

function extFuncName( str ){
	var end = str.lastIndexOf( ".cef" );
	if( end >= 0 ){
		var top = str.lastIndexOf( "/" );
		if( top >= 0 ){
			top++;
		} else {
			top = 0;
		}
		return str.substring( top, end );
	}
	return "";
}
function getExtFuncDataDirect( func ){
	if( (func.charAt( 0 ) == "!") && (func.length == 2) ){
		return splitData( getFunc( func.charAt( 1 ) ) );
	}
	return null;
}
function getExtFuncDataNameSpace( func ){
	for( var i = 0; i < extFuncFile.length; i++ ){
		if( extFuncName( extFuncFile[i] ) == func ){
			if( i < extFuncData.length ){
				return extFuncData[i];
			}
		}
	}
	for( var i = 0; i < extFuncFile2.length; i++ ){
		if( extFuncName( extFuncFile2[i] ) == func ){
			if( i < extFuncData2.length ){
				return extFuncData2[i];
			}
		}
	}
	return null;
}

function regExtFuncButton( name ){
	var i;

	if( name.indexOf( ".inc" ) >= 0 ){
		return;
	}

	var elements = document.getElementsByName( "button_extfunc" );
	for( i = 0; i < elements.length; i++ ){
		if( elements[i].innerHTML == name ){
			return;
		}
	}
	for( i = 0; i < elements.length; i++ ){
		if( elements[i].disabled ){
			elements[i].innerHTML = name;
			elements[i].disabled = false;
			_addCalcEventListener( elements[i], "click", doButtonExtFunc );
			break;
		}
	}
}

function setExtFuncData( index, data ){
	if( loadNum >= extFuncFile.length ){
		return;
	}

	cssSetStyleDisplayById( "calc_button_loadextfunc" , false );
	cssSetStyleDisplayById( "calc_button_loadextfunc2", false );
	extFuncData[loadNum] = splitData( data );

	loadNum++;
	if( nativeRequest ){
		nativeRequest.send( "load_extfunc/" + extFuncFile[loadNum] );
	}
}

function mainProc( parentProc, parentParam, func, funcParam, childProc, childParam ){
	var ret;
_TRY
	ret = childProc.mainLoop( func, childParam, funcParam, parentParam );
_CATCH
	return ret;
}
function assertProc( num, func ){
	con[1].newLine();
	if( (func != null) && (func.length > 0) ){
		if( englishFlag ) con[1].print( func + ": " );
		else              con[1].print( func + ":" );
	}
	if( num > 0 ){
		if( englishFlag ) con[1].print( "Line " + num + ": " );
		else              con[1].print( "" + num + "行:" );
	}
	if( englishFlag ) con[1].println( "Error " + intToString( _CLIP_ERR_ASSERT, 16, 4 ) + ":" + consoleBreak() + "Failed to assert." );
	else              con[1].println( "エラー(" + intToString( _CLIP_ERR_ASSERT, 16, 4 ) + "):" + consoleBreak() + "アサートに失敗しました" );

	if( englishFlag ) document.getElementById( "calc_usage" ).innerHTML = "Failed to assert.";
	else              document.getElementById( "calc_usage" ).innerHTML = "アサートに失敗しました";

	return retAssertProc;
}
function getErrorString( err, num, func, token ){
	var string = new String();
	var error  = getProcErrorDefString( err, token, topParam._calculator, englishFlag );
	if( error.length > 0 ){
		if( (func != null) && (func.length > 0) ){
			if( englishFlag ) string += func + ": ";
			else              string += func + ":";
		}
		if( num > 0 ){
			if( englishFlag ) string += "Line " + num + ": ";
			else              string += "" + num + "行:";
		}
		if( englishFlag ) string += (((err & _CLIP_PROC_WARN) != 0) ? "Warning" : "Error") + " " + intToString( err, 16, 4 ) + ":" + consoleBreak() + error;
		else              string += (((err & _CLIP_PROC_WARN) != 0) ? "警告" : "エラー") + "(" + intToString( err, 16, 4 ) + "):" + consoleBreak() + error;
	}
	return string;
}
function errorProc( err, num, func, token ){
	if( silentErr ){
		procError.add( err, num, func, token );
	} else {
		var string = getErrorString( err, num, func, token );
		if( string.length > 0 ){
			con[1].newLine();
			con[1].println( string );

			if( string.indexOf( consoleBreak() ) >= 0 ){
				document.getElementById( "calc_usage" ).innerHTML = string.slice( string.indexOf( consoleBreak() ) + consoleBreak().length );
			} else {
				document.getElementById( "calc_usage" ).innerHTML = string;
			}
		}
	}
}

function printAnsComplex( real, imag ){
	// 桁区切り
	var _real = new _String( real );
	var _imag = new _String( imag );
	switch( calcUI.sepType() ){
	case _UI_CALC_SEP_UPPER:
		procToken().sepString( _real, "<span class='span_ans' style='font-family:\"Helvetica\"'>'</span>" );
		procToken().sepString( _imag, "<span class='span_ans' style='font-family:\"Helvetica\"'>'</span>" );
		break;
	case _UI_CALC_SEP_LOWER:
		procToken().sepString( _real, "<span class='span_ans' style='font-family:\"Helvetica\"'>,</span>" );
		procToken().sepString( _imag, "<span class='span_ans' style='font-family:\"Helvetica\"'>,</span>" );
		break;
	}

	real = _real.replace( "⏌", "<span class='span_ans' style='font-size:15px'>⏌</span>" ).str();
	imag = _imag.replace( "⏌", "<span class='span_ans' style='font-size:15px'>⏌</span>" ).str();

	if( real.length > 0 ){
		if( calcUI.italic() ){
			document.getElementById( "calc_ans" ).innerHTML = "<i><b><span class='span_ans'>" + real + "<br>" + imag + "</span></b></i>";
		} else {
			document.getElementById( "calc_ans" ).innerHTML = "<b><span class='span_ans'>" + real + "<br>" + imag + "</span></b>";
		}
	} else {
		if( calcUI.italic() ){
			document.getElementById( "calc_ans" ).innerHTML = "<i><b><span class='span_ans'>" + imag + "</span></b></i>";
		} else {
			document.getElementById( "calc_ans" ).innerHTML = "<b><span class='span_ans'>" + imag + "</span></b>";
		}
	}

	convUI.update();
}
function printAnsMatrix( param, array/*_Token*/ ){
	var i;
	var code;
	var token;
	var string = new String();
	var indent = 0;
	var enter  = false;

	con[0].newLine();
	con[0].setColor( "0000ff" );
	array.beginGetToken();
	while( array.getToken() ){
		code  = getCode();
		token = getToken();
		if( enter ){
			if( code == _CLIP_CODE_ARRAY_TOP ){
				con[0].println( string );
				string = "";
				for( i = 0; i < indent; i++ ){
					string += "&nbsp;";
				}
			}
			enter = false;
		}
		string += procToken().tokenString( param, code, token );
		string += "&nbsp;";
		if( code == _CLIP_CODE_ARRAY_TOP ){
			indent += 2;
		}
		if( code == _CLIP_CODE_ARRAY_END ){
			indent -= 2;
			enter = true;
		}
	}
	con[0].println( string );
	con[0].setColor();
}
function printWarn( warn, num, func ){
	con[1].newLine();
	if( (func != null) && (func.length > 0) ){
		if( englishFlag ) con[1].print( func + ": " );
		else              con[1].print( func + ":" );
	}
	if( num > 0 ){
		if( englishFlag ) con[1].print( "Line " + num + ": " );
		else              con[1].print( "" + num + "行:" );
	}
	if( englishFlag ) con[1].println( "Warning:" + consoleBreak() + warn );
	else              con[1].println( "警告:" + consoleBreak() + warn );

	document.getElementById( "calc_usage" ).innerHTML = warn;
}
function printError( error, num, func ){
	con[1].newLine();
	if( (func != null) && (func.length > 0) ){
		if( englishFlag ) con[1].print( func + ": " );
		else              con[1].print( func + ":" );
	}
	if( num > 0 ){
		if( englishFlag ) con[1].print( "Line " + num + ": " );
		else              con[1].print( "" + num + "行:" );
	}
	if( englishFlag ) con[1].println( "Error:" + consoleBreak() + error );
	else              con[1].println( "エラー:" + consoleBreak() + error );

	document.getElementById( "calc_usage" ).innerHTML = error;
}

function doFuncGColor( rgb ){
	return doFuncGColorBGR( rgb, COLOR_WIN );
}
function doFuncGColor24( index ){
	return _RGB2BGR( COLOR_WIN[index] );
}
function doFuncEval( parentProc, childProc, childParam, string, value ){
	var ret;
_TRY
	ret = parentProc.doFuncEval( childProc, childParam, string, value );
_CATCH
	return ret;
}

function doCommandClear(){
	con[0].clear();
}
function doCommandPrint( topPrint, flag ){
	var cur = topPrint;
	while( cur != null ){
		if( cur._string != null ){
			var tmp = new _String( cur._string );
			tmp.escape().replaceNewLine( consoleBreak() );
			con[0].print( tmp.str() );
		}
		cur = cur._next;
	}
	if( flag ){
		con[0].println();
	}
}
function doCommandScan( topScan, proc, param ){
	var defString = new String();
	var newString = new String();

	var cur = topScan;
	while( cur != null ){
		defString = cur.getDefString( proc, param );

		newString = prompt( cur.title(), defString );
		if( (newString == null) || (newString.length == 0) ){
			newString = defString;
		}

		cur.setNewValue( newString, proc, param );

		cur = cur._next;
	}
}
function gWorldClear( gWorld, color ){
	if( lockGUpdate ){
		needGUpdate = true;
		return;
	}
	canvasClear();
	canvasSetColor( COLOR_WIN[color] );
	canvasFill( 0, 0, gWorld._width, gWorld._height );
	canvasSetColor( COLOR_WIN[gWorld._color] );
}
function gWorldSetColor( gWorld, color ){
	if( lockGUpdate ){
		return;
	}
	canvasSetColor( COLOR_WIN[color] );
}
function gWorldPutColor( gWorld, x, y, color ){
	if( lockGUpdate ){
		needGUpdate = true;
		return;
	}
	if( topProc._gUpdateFlag ){
		canvasSetColor( COLOR_WIN[color] );
		canvasPut( x, y );
		canvasSetColor( COLOR_WIN[gWorld._color] );
	}
}
function gWorldPut( gWorld, x, y ){
	if( lockGUpdate ){
		needGUpdate = true;
		return;
	}
	if( topProc._gUpdateFlag ){
		canvasPut( x, y );
	}
}
function gWorldFill( gWorld, x, y, w, h ){
	if( lockGUpdate ){
		needGUpdate = true;
		return;
	}
	if( topProc._gUpdateFlag ){
		canvasFill( x, y, w, h );
	}
}
function gWorldLine( gWorld, x1, y1, x2, y2 ){
	if( lockGUpdate ){
		needGUpdate = true;
		return;
	}
	if( topProc._gUpdateFlag ){
		canvasLine( x1, y1, x2, y2 );
	}
}
function doCommandGColor( index, rgb ){
	COLOR_WIN[index] = _RGB2BGR( rgb );
	needGUpdate = true;
}
function gUpdate( gWorld ){
	canvasClear();

	var image  = gWorld._image;
	var offset = gWorld._offset;
	var width  = gWorld._width;
	var height = gWorld._height;
	var x, y;
	for( y = 0; y < height; y++ ){
		for( x = 0; x < width; x++ ){
			canvasSetColor( COLOR_WIN[image[y * offset + x]] );
			canvasPut( x, y );
		}
	}
	canvasSetColor( COLOR_WIN[gWorld._color] );
}
function doCommandGUpdate( gWorld ){
	if( lockGUpdate ){
		needGUpdate = true;
		return;
	}
	gUpdate( gWorld );
}
function doCommandPlot( parentProc, parentParam, graph, start, end, step ){
	// 親プロセスの環境を受け継いで、子プロセスを実行する
	var childProc = new _Proc( parentParam._mode, parentParam._mpPrec, parentParam._mpRound, false, parentProc._printAssert, parentProc._printWarn, false/*グラフィック画面更新OFF*/ );
	var childParam = new _Param( parentProc._curLine._num, parentParam, true );
	childParam._enableCommand = false;
	childParam._enableStat = false;
_TRY
	parentProc.doCommandPlot( childProc, childParam, graph, start, end, step );
_CATCH
	childParam.end();
	childProc.end();
}
function doCommandRePlot( parentProc, parentParam, graph, start, end, step ){
	// 親プロセスの環境を受け継いで、子プロセスを実行する
	var childProc = new _Proc( parentParam._mode, parentParam._mpPrec, parentParam._mpRound, false, parentProc._printAssert, parentProc._printWarn, false/*グラフィック画面更新OFF*/ );
	var childParam = new _Param( parentProc._curLine._num, parentParam, true );
	childParam._enableCommand = false;
	childParam._enableStat = false;
_TRY
	parentProc.doCommandRePlot( childProc, childParam, graph, start, end, step );
_CATCH
	childParam.end();
	childProc.end();
}
function doCommandUsage( topUsage ){
	common.setFont( 16, "Helvetica" );
	var usage = new String();
	var cur = topUsage;
	while( cur != null ){
		if( cur._string != null ){
			usage += common.escape( common.truncate( cur._string, 316, "" ) ) + "<br>";
		}
		cur = cur._next;
	}
	document.getElementById( "calc_usage" ).innerHTML = usage;
}

function onStartPlot(){
	silentErr = true;
}
function onEndPlot(){
	silentErr = false;

	var err   = new _Integer();
	var num   = new _Integer();
	var func  = new _String();
	var token = new _String();
	for( var i = 0; i < procError.num(); i++ ){
		procError.get( i, err, num, func, token );
		errorProc( err._val, num._val, func.str(), token.str() );
	}
	procError.delAll();
}
function onStartRePlot(){
	onStartPlot();
}
function onEndRePlot(){
	onEndPlot();
}

function dummy(){}

function onCalcPrintAns(){
	topProc.printAns( topParam );
}
function onCalcButtonEnter(){
	var forward = new _String();
	var after   = new _String();
	editExpr.get( forward, after, false );
	var line = forward.str() + after.str();

	if( line.length > 0 ){
		doCalcEditRadix();
		doCalcEditFps();

		document.getElementById( "calc_usage" ).innerHTML = "";

		con[0].lock();
		con[0].newLine();
		con[1].lock();
		con[1].newLine();

		if( lockGUpdate ){
			needGUpdate = false;
		}

_TRY
		initProcLoopCount();
		topProc.processLoop( line, topParam );
_CATCH

		if( lockGUpdate && needGUpdate ){
			gUpdate( procGWorld() );
			needGUpdate = false;
		}

		con[0].unlock();
		con[1].unlock();

		updateSelectVar();

		// ログを記録する
		addLogExpr();
	}
}

function onCalcUpdateTrigButton( _this ){
	document.getElementById( "check_inv" ).checked = ((_this._checkTrig & _UI_CALC_TRIG_INV) != 0) ? true : false;
	document.getElementById( "check_hyp" ).checked = ((_this._checkTrig & _UI_CALC_TRIG_HYP) != 0) ? true : false;

	document.getElementById( "button_sin"   ).innerHTML = _this._buttonSin;
	document.getElementById( "button_cos"   ).innerHTML = _this._buttonCos;
	document.getElementById( "button_tan"   ).innerHTML = _this._buttonTan;
	document.getElementById( "button_log"   ).innerHTML = _this._buttonLog;
	document.getElementById( "button_log10" ).innerHTML = _this._buttonLog10;
	document.getElementById( "button_sqr"   ).innerHTML = _this._buttonSqr;
}

function updateCalcRadioMode(){
	var flag;

	cssLockStyleDisplay();

	switch( calcUI._mode ){
	case _UI_CALC_MODE_FLOAT:
	case _UI_CALC_MODE_FRACT:
	case _UI_CALC_MODE_MFRACT:
	case _UI_CALC_MODE_COMPLEX:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "calc_select_angle", flag );

	switch( calcUI._mode ){
	case _UI_CALC_MODE_SIGNED:
	case _UI_CALC_MODE_UNSIGNED:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "calc_select_bit"  , flag );
	cssSetStyleDisplayById( "calc_form_radix"  , flag );
	cssSetStyleDisplayById( "calc_static_radix", flag );
	cssSetStyleDisplayById( "button_radix_down", flag );
	cssSetStyleDisplayById( "button_radix_up"  , flag );

	switch( calcUI._mode ){
	case _UI_CALC_MODE_TIME:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "calc_select_time", flag );
	cssSetStyleDisplayById( "calc_form_fps"   , flag );
	cssSetStyleDisplayById( "calc_static_fps" , flag );
	cssSetStyleDisplayById( "button_fps_down" , flag );
	cssSetStyleDisplayById( "button_fps_up"   , flag );

	cssUnlockStyleDisplay();
}
function updateConvMode(){
	switch( calcUI._mode ){
	case _UI_CALC_MODE_FLOAT:
	case _UI_CALC_MODE_FRACT:
	case _UI_CALC_MODE_MFRACT:
	case _UI_CALC_MODE_COMPLEX:
		convUI.setMode( _UI_CONV_MODE_ANGLE );
		document.getElementById( "conv_edit_4" ).disabled = true;
		break;
	case _UI_CALC_MODE_SIGNED:
	case _UI_CALC_MODE_UNSIGNED:
		convUI.setMode( _UI_CONV_MODE_RADIX );
		document.getElementById( "conv_edit_4" ).disabled = false;
		break;
	case _UI_CALC_MODE_TIME:
		convUI.setMode( _UI_CONV_MODE_TIME );
		document.getElementById( "conv_edit_4" ).disabled = false;
		break;
	}
}
function doCalcFloat(){
	calcUI.setMode( _UI_CALC_MODE_FLOAT );
	updateCalcRadioMode();
	updateButton();
	updateSelectVar();
	updateConvMode();

	writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcFract(){
	calcUI.setMode( _UI_CALC_MODE_FRACT );
	updateCalcRadioMode();
	updateButton();
	updateSelectVar();
	updateConvMode();

	writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcMFract(){
	calcUI.setMode( _UI_CALC_MODE_MFRACT );
	updateCalcRadioMode();
	updateButton();
	updateSelectVar();
	updateConvMode();

	writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcComplex(){
	calcUI.setMode( _UI_CALC_MODE_COMPLEX );
	updateCalcRadioMode();
	updateButton();
	updateSelectVar();
	updateConvMode();

	writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcSigned(){
	calcUI.setMode( _UI_CALC_MODE_SIGNED );
	updateCalcRadioMode();
	updateButton();
	updateSelectVar();
	updateConvMode();

	writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcUnsigned(){
	calcUI.setMode( _UI_CALC_MODE_UNSIGNED );
	updateCalcRadioMode();
	updateButton();
	updateSelectVar();
	updateConvMode();

	writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doCalcTime(){
	calcUI.setMode( _UI_CALC_MODE_TIME );
	updateCalcRadioMode();
	updateButton();
	updateSelectVar();
	updateConvMode();

	writeProfileInt( "ENV_", "Mode", calcUI._mode );
}
function doChangeMode( select ){
	switch( select.selectedIndex ){
	case 0: doCalcFloat   (); break;
	case 1: doCalcFract   (); break;
	case 2: doCalcMFract  (); break;
	case 3: doCalcComplex (); break;
	case 4: doCalcSigned  (); break;
	case 5: doCalcUnsigned(); break;
	case 6: doCalcTime    (); break;
	}
}

function updateCalcRadioBitType(){
	convUI.update();
}
function doCalcBit8(){
	calcUI.setBitType( _UI_CALC_BIT_8 );
	updateCalcRadioBitType();

	writeProfileInt( "ENV_", "Bit", calcUI._bitType );

	updateSelectVar();
}
function doCalcBit16(){
	calcUI.setBitType( _UI_CALC_BIT_16 );
	updateCalcRadioBitType();

	writeProfileInt( "ENV_", "Bit", calcUI._bitType );

	updateSelectVar();
}
function doCalcBit32(){
	calcUI.setBitType( _UI_CALC_BIT_32 );
	updateCalcRadioBitType();

	writeProfileInt( "ENV_", "Bit", calcUI._bitType );

	updateSelectVar();
}
function doChangeBit( select ){
	switch( select.selectedIndex ){
	case 0: doCalcBit8 (); break;
	case 1: doCalcBit16(); break;
	case 2: doCalcBit32(); break;
	}
}

function updateCalcEditRadix(){
	document.getElementById( "calc_edit_radix" ).value = "" + calcUI._radix;

	convUI.update();
}
function doCalcEditRadix(){
	var radix = parseInt( document.getElementById( "calc_edit_radix" ).value );
	calcUI.setRadix( radix );
	updateCalcEditRadix();

	writeProfileInt( "ENV_", "Radix", calcUI._radix );

	updateSelectVar();
}
function doCalcDownRadix( e ){
	var radix = parseInt( document.getElementById( "calc_edit_radix" ).value );
	radix--;
	calcUI.setRadix( radix );
	updateCalcEditRadix();

	writeProfileInt( "ENV_", "Radix", calcUI._radix );

	updateSelectVar();
}
function doCalcUpRadix( e ){
	var radix = parseInt( document.getElementById( "calc_edit_radix" ).value );
	radix++;
	calcUI.setRadix( radix );
	updateCalcEditRadix();

	writeProfileInt( "ENV_", "Radix", calcUI._radix );

	updateSelectVar();
}

function updateCalcRadioTimeType(){
	convUI.update();
}
function doCalcTimeH(){
	calcUI.setTimeType( _UI_CALC_TIME_H );
	updateCalcRadioTimeType();

	writeProfileInt( "ENV_", "Time", calcUI._timeType );
}
function doCalcTimeM(){
	calcUI.setTimeType( _UI_CALC_TIME_M );
	updateCalcRadioTimeType();

	writeProfileInt( "ENV_", "Time", calcUI._timeType );
}
function doCalcTimeS(){
	calcUI.setTimeType( _UI_CALC_TIME_S );
	updateCalcRadioTimeType();

	writeProfileInt( "ENV_", "Time", calcUI._timeType );
}
function doCalcTimeF(){
	calcUI.setTimeType( _UI_CALC_TIME_F );
	updateCalcRadioTimeType();

	writeProfileInt( "ENV_", "Time", calcUI._timeType );
}
function doChangeTime( select ){
	switch( select.selectedIndex ){
	case 0: doCalcTimeH(); break;
	case 1: doCalcTimeM(); break;
	case 2: doCalcTimeS(); break;
	case 3: doCalcTimeF(); break;
	}
}

function updateCalcEditFps(){
	document.getElementById( "calc_edit_fps" ).value = "" + calcUI._fps + ((calcUI._fps == _INT( calcUI._fps )) ? ".0" : "");

	convUI.update();
}
function doCalcEditFps(){
	var fps = parseFloat( document.getElementById( "calc_edit_fps" ).value );
	calcUI.setFps( fps );
	updateCalcEditFps();

	writeProfileFloat( "ENV_", "FPS", calcUI._fps );
}
function doCalcDownFps( e ){
	var fps = parseFloat( document.getElementById( "calc_edit_fps" ).value );
	fps -= 1.0;
	calcUI.setFps( fps );
	updateCalcEditFps();

	writeProfileFloat( "ENV_", "FPS", calcUI._fps );
}
function doCalcUpFps( e ){
	var fps = parseFloat( document.getElementById( "calc_edit_fps" ).value );
	fps += 1.0;
	calcUI.setFps( fps );
	updateCalcEditFps();

	writeProfileFloat( "ENV_", "FPS", calcUI._fps );
}

function updateCalcRadioAngType(){
	var type       = new _Integer();
	var updateFlag = new _Boolean();
	topProc.getAngType( type, updateFlag );
	document.getElementById( "calc_radio_deg"  ).checked = (type._val == _ANG_TYPE_DEG );
	document.getElementById( "calc_radio_rad"  ).checked = (type._val == _ANG_TYPE_RAD );
	document.getElementById( "calc_radio_grad" ).checked = (type._val == _ANG_TYPE_GRAD);

	convUI.update();
}
function doCalcDeg(){
	calcUI.setAngType( _ANG_TYPE_DEG );
	updateCalcRadioAngType();

	writeProfileAngle();
}
function doCalcRad(){
	calcUI.setAngType( _ANG_TYPE_RAD );
	updateCalcRadioAngType();

	writeProfileAngle();
}
function doCalcGrad(){
	calcUI.setAngType( _ANG_TYPE_GRAD );
	updateCalcRadioAngType();

	writeProfileAngle();
}

function updateCalcRadioSepType(){
	document.getElementById( "calc_radio_sep_off"   ).checked = (calcUI._sepType == _UI_CALC_SEP_OFF  );
	document.getElementById( "calc_radio_sep_upper" ).checked = (calcUI._sepType == _UI_CALC_SEP_UPPER);
	document.getElementById( "calc_radio_sep_lower" ).checked = (calcUI._sepType == _UI_CALC_SEP_LOWER);
}
function doCalcSepOff(){
	calcUI.setSepType( _UI_CALC_SEP_OFF );
	updateCalcRadioSepType();

	writeProfileInt( "ENV_", "SepType", calcUI.sepType() );
}
function doCalcSepUpper(){
	calcUI.setSepType( _UI_CALC_SEP_UPPER );
	updateCalcRadioSepType();

	writeProfileInt( "ENV_", "SepType", calcUI.sepType() );
}
function doCalcSepLower(){
	calcUI.setSepType( _UI_CALC_SEP_LOWER );
	updateCalcRadioSepType();

	writeProfileInt( "ENV_", "SepType", calcUI.sepType() );
}

function onConvUpdateStatic( _this ){
	document.getElementById( "conv_static_1" ).innerHTML = _this._static1;
	document.getElementById( "conv_static_2" ).innerHTML = _this._static2;
	document.getElementById( "conv_static_3" ).innerHTML = _this._static3;
	document.getElementById( "conv_static_4" ).innerHTML = _this._static4;
}
function onConvUpdateEdit( _this ){
	document.getElementById( "conv_edit_1" ).value = _this._edit1;
	document.getElementById( "conv_edit_2" ).value = _this._edit2;
	document.getElementById( "conv_edit_3" ).value = _this._edit3;
	document.getElementById( "conv_edit_4" ).value = _this._edit4;
}

function onChangeEdit1(){
	convUI._edit1 = document.getElementById( "conv_edit_1" ).value;
	var value = new _Value();
	convUI.getValue( _UI_CONV_EDIT_1, value );
	convUI.update( value, _UI_CONV_EDIT_2 | _UI_CONV_EDIT_3 | _UI_CONV_EDIT_4 );
}
function onChangeEdit2(){
	convUI._edit2 = document.getElementById( "conv_edit_2" ).value;
	var value = new _Value();
	convUI.getValue( _UI_CONV_EDIT_2, value );
	convUI.update( value, _UI_CONV_EDIT_1 | _UI_CONV_EDIT_3 | _UI_CONV_EDIT_4 );
}
function onChangeEdit3(){
	convUI._edit3 = document.getElementById( "conv_edit_3" ).value;
	var value = new _Value();
	convUI.getValue( _UI_CONV_EDIT_3, value );
	convUI.update( value, _UI_CONV_EDIT_1 | _UI_CONV_EDIT_2 | _UI_CONV_EDIT_4 );
}
function onChangeEdit4(){
	convUI._edit4 = document.getElementById( "conv_edit_4" ).value;
	var value = new _Value();
	convUI.getValue( _UI_CONV_EDIT_4, value );
	convUI.update( value, _UI_CONV_EDIT_1 | _UI_CONV_EDIT_2 | _UI_CONV_EDIT_3 );
}

function doCheckInv(){
	calcUI.checkInv();
}
function doCheckHyp(){
	calcUI.checkHyp();
}

function doChangeVar( select ){
	calcUI.setCurVar( select.options[select.selectedIndex].value );
}

function updateButton(){
	var flag;

	cssLockStyleDisplay();

	switch( calcUI._mode ){
	case _UI_CALC_MODE_SIGNED:
	case _UI_CALC_MODE_UNSIGNED:
		cssSetStyleDisplayById( "calc_button_integer", true  );
		cssSetStyleDisplayById( "calc_button_lang"   , false );
		break;
	default:
		cssSetStyleDisplayById( "calc_button_integer", false );
		cssSetStyleDisplayById( "calc_button_lang"   , true  );
		break;
	}

	switch( calcUI._mode ){
	case _UI_CALC_MODE_SIGNED:
	case _UI_CALC_MODE_UNSIGNED:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "button_complement", flag );
	cssSetStyleDisplayById( "button_shiftl"    , flag );
	cssSetStyleDisplayById( "button_shiftr"    , flag );
	cssSetStyleDisplayById( "button_and"       , flag );
	cssSetStyleDisplayById( "button_xor"       , flag );
	cssSetStyleDisplayById( "button_or"        , flag );
	cssSetStyleDisplayById( "button_factorial2", flag );

	switch( calcUI._mode ){
	case _UI_CALC_MODE_FLOAT:
	case _UI_CALC_MODE_FRACT:
	case _UI_CALC_MODE_MFRACT:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "button_fract", flag );

	switch( calcUI._mode ){
	case _UI_CALC_MODE_COMPLEX:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "button_i", flag );

	switch( calcUI._mode ){
	case _UI_CALC_MODE_TIME:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "button_time", flag );

	switch( calcUI._mode ){
	case _UI_CALC_MODE_FLOAT:
	case _UI_CALC_MODE_FRACT:
	case _UI_CALC_MODE_MFRACT:
	case _UI_CALC_MODE_COMPLEX:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "button_deg"       , flag );
	cssSetStyleDisplayById( "button_grad"      , flag );
	cssSetStyleDisplayById( "button_rad"       , flag );
	cssSetStyleDisplayById( "button_factorial1", flag );
	cssSetStyleDisplayById( "button_pow1"      , flag );

	switch( calcUI._mode ){
	case _UI_CALC_MODE_TIME:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "button_hour" , flag );
	cssSetStyleDisplayById( "button_min"  , flag );
	cssSetStyleDisplayById( "button_sec"  , flag );
	cssSetStyleDisplayById( "button_frame", flag );
	cssSetStyleDisplayById( "button_pow2" , flag );

	switch( calcUI._mode ){
	case _UI_CALC_MODE_FLOAT:
	case _UI_CALC_MODE_FRACT:
	case _UI_CALC_MODE_MFRACT:
	case _UI_CALC_MODE_COMPLEX:
	case _UI_CALC_MODE_TIME:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "button_eplus" , flag );
	cssSetStyleDisplayById( "button_eminus", flag );
	cssSetStyleDisplayById( "button_plus"  , flag );
	cssSetStyleDisplayById( "button_point" , flag );

	switch( calcUI._mode ){
	case _UI_CALC_MODE_SIGNED:
	case _UI_CALC_MODE_UNSIGNED:
		flag = true;
		break;
	default:
		flag = false;
		break;
	}
	cssSetStyleDisplayById( "button_a", flag );
	cssSetStyleDisplayById( "button_b", flag );
	cssSetStyleDisplayById( "button_c", flag );
	cssSetStyleDisplayById( "button_d", flag );
	cssSetStyleDisplayById( "button_e", flag );
	cssSetStyleDisplayById( "button_f", flag );

	cssUnlockStyleDisplay();
}

function setMenu( newMenu ){
	switch( menu ){
	case _UI_CALC_MENU_MAIN:
		document.getElementById( "button_ui_main"  ).innerHTML = "<img src='icon1.png' width='20' height='20'>";
		document.getElementById( "button_ui_main2" ).innerHTML = "<img src='icon1.png' width='20' height='20'>";
		break;
	case _UI_CALC_MENU_FUNC:
		document.getElementById( "button_ui_func"  ).innerHTML = "<img src='icon7.png' width='20' height='20'>";
		document.getElementById( "button_ui_func2" ).innerHTML = "<img src='icon7.png' width='20' height='20'>";
		break;
	case _UI_CALC_MENU_LOG:
		document.getElementById( "button_ui_log"  ).innerHTML = "<img src='icon6.png' width='20' height='20'>";
		document.getElementById( "button_ui_log2" ).innerHTML = "<img src='icon6.png' width='20' height='20'>";
		break;
	case _UI_CALC_MENU_CONV:
		document.getElementById( "button_ui_conv"  ).innerHTML = "<img src='icon4.png' width='20' height='20'>";
		document.getElementById( "button_ui_conv2" ).innerHTML = "<img src='icon4.png' width='20' height='20'>";
		break;
	case _UI_CALC_MENU_CONSOLE:
		document.getElementById( "button_ui_console"  ).innerHTML = "<img src='icon3.png' width='20' height='20'>";
		document.getElementById( "button_ui_console2" ).innerHTML = "<img src='icon3.png' width='20' height='20'>";
		break;
	case _UI_CALC_MENU_GWORLD:
		document.getElementById( "button_ui_gworld"  ).innerHTML = "<img src='icon2.png' width='20' height='20'>";
		document.getElementById( "button_ui_gworld2" ).innerHTML = "<img src='icon2.png' width='20' height='20'>";
		break;
	case _UI_CALC_MENU_OPTION:
		document.getElementById( "button_ui_option"  ).innerHTML = "<img src='icon5.png' width='20' height='20'>";
		document.getElementById( "button_ui_option2" ).innerHTML = "<img src='icon5.png' width='20' height='20'>";
		break;
	}
	menu = newMenu;
	switch( menu ){
	case _UI_CALC_MENU_MAIN:
		document.getElementById( "button_ui_main"  ).innerHTML = "<img src='icon1.png' width='25' height='25'>";
		document.getElementById( "button_ui_main2" ).innerHTML = "<img src='icon1.png' width='25' height='25'>";
		break;
	case _UI_CALC_MENU_FUNC:
		document.getElementById( "button_ui_func"  ).innerHTML = "<img src='icon7.png' width='25' height='25'>";
		document.getElementById( "button_ui_func2" ).innerHTML = "<img src='icon7.png' width='25' height='25'>";
		break;
	case _UI_CALC_MENU_LOG:
		document.getElementById( "button_ui_log"  ).innerHTML = "<img src='icon6.png' width='25' height='25'>";
		document.getElementById( "button_ui_log2" ).innerHTML = "<img src='icon6.png' width='25' height='25'>";
		break;
	case _UI_CALC_MENU_CONV:
		document.getElementById( "button_ui_conv"  ).innerHTML = "<img src='icon4.png' width='25' height='25'>";
		document.getElementById( "button_ui_conv2" ).innerHTML = "<img src='icon4.png' width='25' height='25'>";
		break;
	case _UI_CALC_MENU_CONSOLE:
		document.getElementById( "button_ui_console"  ).innerHTML = "<img src='icon3.png' width='25' height='25'>";
		document.getElementById( "button_ui_console2" ).innerHTML = "<img src='icon3.png' width='25' height='25'>";
		break;
	case _UI_CALC_MENU_GWORLD:
		document.getElementById( "button_ui_gworld"  ).innerHTML = "<img src='icon2.png' width='25' height='25'>";
		document.getElementById( "button_ui_gworld2" ).innerHTML = "<img src='icon2.png' width='25' height='25'>";
		break;
	case _UI_CALC_MENU_OPTION:
		document.getElementById( "button_ui_option"  ).innerHTML = "<img src='icon5.png' width='25' height='25'>";
		document.getElementById( "button_ui_option2" ).innerHTML = "<img src='icon5.png' width='25' height='25'>";
		break;
	}
}
function doButtonUIMain(){
	if( menu == _UI_CALC_MENU_MAIN ){
		return;
	}
	setMenu( _UI_CALC_MENU_MAIN );

	document.getElementById( "button_ui_main"    ).disabled = true;
	document.getElementById( "button_ui_func"    ).disabled = false;
	document.getElementById( "button_ui_log"     ).disabled = false;
	document.getElementById( "button_ui_conv"    ).disabled = false;
	document.getElementById( "button_ui_console" ).disabled = false;
	document.getElementById( "button_ui_gworld"  ).disabled = false;
	document.getElementById( "button_ui_option"  ).disabled = false;

	document.getElementById( "button_ui_main2"    ).disabled = true;
	document.getElementById( "button_ui_func2"    ).disabled = false;
	document.getElementById( "button_ui_log2"     ).disabled = false;
	document.getElementById( "button_ui_conv2"    ).disabled = false;
	document.getElementById( "button_ui_console2" ).disabled = false;
	document.getElementById( "button_ui_gworld2"  ).disabled = false;
	document.getElementById( "button_ui_option2"  ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "calc_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "calc_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "calc_ui_top"        , true );
	cssSetStyleDisplayById( "calc_ui_cursor"     , true );
	cssSetStyleDisplayById( "calc_ui_button_1"   , false );
	cssSetStyleDisplayById( "calc_ui_button_2"   , false );
	cssSetStyleDisplayById( "calc_ui_button_3"   , false );
	cssSetStyleDisplayById( "calc_ui_button_4"   , false );
	cssSetStyleDisplayById( "calc_ui_button_5"   , false );
	cssSetStyleDisplayById( "calc_ui_button_6"   , false );
	cssSetStyleDisplayById( "calc_ui_usage"      , usageFlag ? true : false );
	cssSetStyleDisplayById( "calc_ui_func"       , false );
	cssSetStyleDisplayById( "calc_ui_log"        , false );
	cssSetStyleDisplayById( "calc_ui_conv"       , false );
	cssSetStyleDisplayById( "calc_ui_console"    , false );
	cssSetStyleDisplayById( "calc_ui_gworld"     , false );
	cssSetStyleDisplayById( "calc_ui_option"     , false );
	cssSetStyleDisplayById( "calc_ui_selectimage", false );
	cssSetStyleDisplayById( "calc_ui_profile"    , false );
	cssUnlockStyleDisplay();

	cssSetStyleDisplayById( "calc_ui_button_" + (buttonMode + 1), true );
}
function setButtonMode( mode ){
	cssSetStyleDisplayById( "calc_ui_button_1", false );
	cssSetStyleDisplayById( "calc_ui_button_2", false );
	cssSetStyleDisplayById( "calc_ui_button_3", false );
	cssSetStyleDisplayById( "calc_ui_button_4", false );
	cssSetStyleDisplayById( "calc_ui_button_5", false );
	cssSetStyleDisplayById( "calc_ui_button_6", false );

	if( mode == undefined ){
		buttonMode++;
		if( buttonMode == 4 ){
			if( document.getElementById( "last_button_extfunc" ).disabled ){
				buttonMode = 0;
			}
		} else if( buttonMode == 5 ){
			if( document.getElementById( "last_button_extfunc2" ).disabled ){
				buttonMode = 0;
			}
		} else if( buttonMode >= 6 ){
			buttonMode = 0;
		}
	} else {
		buttonMode = mode;
	}

	cssSetStyleDisplayById( "calc_ui_button_" + (buttonMode + 1), true );
}
function updateLanguage(){
	document.title = englishFlag ? "ClipCalc" : "関数電卓";

	var select;

	select = document.getElementById( "calc_select_mode" );
	select.options[0].innerHTML = englishFlag ? "Floating point" : "浮動小数点";
	select.options[1].innerHTML = englishFlag ? "Fraction" : "分数";
	select.options[2].innerHTML = englishFlag ? "Mixed fraction" : "帯分数";
	select.options[3].innerHTML = englishFlag ? "Complex" : "複素数";
	select.options[4].innerHTML = englishFlag ? "Signed" : "符号付き";
	select.options[5].innerHTML = englishFlag ? "Unsigned" : "符号なし";
	select.options[6].innerHTML = englishFlag ? "Time" : "時間";

	document.getElementById( "calc_static_radix" ).innerHTML = englishFlag ? "base" : "進";

	select = document.getElementById( "calc_select_time" );
	select.options[0].innerHTML = englishFlag ? "Hour" : "時";
	select.options[1].innerHTML = englishFlag ? "Min" : "分";
	select.options[2].innerHTML = englishFlag ? "Sec" : "秒";
	select.options[3].innerHTML = englishFlag ? "Frame" : "ﾌﾚｰﾑ";

	document.getElementById( "calc_static_calculator" ).innerHTML = englishFlag ? "Calculator mode" : "電卓モード";
	document.getElementById( "button_loadextfunc" ).innerHTML = englishFlag ? "Load external function" : "外部関数読み込み";
	document.getElementById( "button_loadextfunc2" ).innerHTML = englishFlag ? "Load external function" : "外部関数読み込み";
	document.getElementById( "button_log_del" ).innerHTML = englishFlag ? "Del" : "消";
	document.getElementById( "button_log_delall" ).innerHTML = englishFlag ? "Clear" : "クリアする";
	document.getElementById( "button_console_clear" ).innerHTML = englishFlag ? "Clear" : "クリアする";
	document.getElementById( "button_console_clear2" ).innerHTML = englishFlag ? "Clear" : "クリアする";
	document.getElementById( "calc_static_option1" ).innerHTML = englishFlag ? "Answer:" : "計算結果:";

	select = document.getElementById( "calc_select_skin_ans" );
	select.options[0].innerHTML = englishFlag ? "Black" : "ブラック";
	select.options[1].innerHTML = englishFlag ? "Green" : "グリーン";
	select.options[2].innerHTML = englishFlag ? "Orange" : "オレンジ";

	document.getElementById( "calc_static_option2" ).innerHTML = englishFlag ? "Body:" : "本体:";

	select = document.getElementById( "calc_select_skin" );
	select.options[0].innerHTML = englishFlag ? "Green" : "グリーン";
	select.options[1].innerHTML = englishFlag ? "Gray" : "グレー";
	select.options[2].innerHTML = englishFlag ? "Purple" : "パープル";
	select.options[3].innerHTML = englishFlag ? "Metal (gold)" : "メタル(金)";
	select.options[4].innerHTML = englishFlag ? "Metal (silver)" : "メタル(銀)";
	select.options[5].innerHTML = englishFlag ? "Metal (iron)" : "メタル(鉄)";
	select.options[6].innerHTML = englishFlag ? "Color" : "カラー";
	select.options[7].innerHTML = englishFlag ? "Image" : "画像";

	select = document.getElementById( "calc_select_skin_color" );
	select.options[0].innerHTML = englishFlag ? "Gray" : "グレー";
	select.options[1].innerHTML = englishFlag ? "Brown" : "ブラウン";
	select.options[2].innerHTML = englishFlag ? "Red" : "レッド";
	select.options[3].innerHTML = englishFlag ? "Pink" : "ピンク";
	select.options[4].innerHTML = englishFlag ? "Orange" : "オレンジ";
	select.options[5].innerHTML = englishFlag ? "Cream" : "クリーム";
	select.options[6].innerHTML = englishFlag ? "Green" : "グリーン";
	select.options[7].innerHTML = englishFlag ? "Sky blue" : "スカイブルー";
	select.options[8].innerHTML = englishFlag ? "Blue" : "ブルー";
	select.options[9].innerHTML = englishFlag ? "Purple" : "パープル";
	select.options[10].innerHTML = englishFlag ? "Custom" : "カスタム";

	select = document.getElementById( "calc_select_skin_trans" );
	select.options[0].innerHTML = englishFlag ? "100% through" : "100%透過";
	select.options[1].innerHTML = englishFlag ? "90% through" : "90%透過";
	select.options[2].innerHTML = englishFlag ? "80% through" : "80%透過";
	select.options[3].innerHTML = englishFlag ? "70% through" : "70%透過";
	select.options[4].innerHTML = englishFlag ? "60% through" : "60%透過";
	select.options[5].innerHTML = englishFlag ? "50% through" : "50%透過";

	document.getElementById( "calc_static_option3" ).innerHTML = englishFlag ? "Lock" : "固定";
	document.getElementById( "calc_static_option4" ).innerHTML = englishFlag ? "Lock" : "固定";
	document.getElementById( "calc_static_option5" ).innerHTML = englishFlag ? "Lock" : "固定";
	document.getElementById( "calc_static_option6" ).innerHTML = englishFlag ? "Pos X:" : "X方向:";
	document.getElementById( "calc_static_option7" ).innerHTML = englishFlag ? "Pos Y:" : "Y方向:";
	document.getElementById( "calc_static_option8" ).innerHTML = englishFlag ? "Display calculation results in italics" : "計算結果表示をイタリックに";
	document.getElementById( "calc_static_option9" ).innerHTML = englishFlag ? "Separator:" : "桁区切り:";
	document.getElementById( "calc_static_option10" ).innerHTML = englishFlag ? "None" : "なし";
	document.getElementById( "calc_static_option11" ).innerHTML = englishFlag ? "Upper" : "上部";
	document.getElementById( "calc_static_option12" ).innerHTML = englishFlag ? "Lower" : "下部";
	document.getElementById( "calc_static_option13" ).innerHTML = englishFlag ? "[Inv] [Hyp] holds the checked state" : "[Inv][Hyp]チェック状態を保持";
	document.getElementById( "calc_static_option14" ).innerHTML = englishFlag ? "Recalculation:" : "再計算:";
	document.getElementById( "calc_static_option15" ).innerHTML = englishFlag ? "When changing the type" : "型の変更時";
	document.getElementById( "calc_static_option16" ).innerHTML = englishFlag ? "When changing the angle type" : "角度の単位変更時";
	document.getElementById( "calc_static_option17" ).innerHTML = englishFlag ? "Before assignment to variable by [STO] button" : "[STO]ボタンによる変数の代入前";
	document.getElementById( "calc_static_option18" ).innerHTML = englishFlag ? "Usage is indicated when pressing button" : "ボタン押下時に使用法を表示";
	document.getElementById( "calc_static_option19" ).innerHTML = englishFlag ? "Button sound:" : "ボタン音:";
	document.getElementById( "calc_static_option20" ).innerHTML = englishFlag ? "Off" : "なし";
	document.getElementById( "calc_static_option21" ).innerHTML = englishFlag ? "On" : "あり";
	document.getElementById( "calc_static_option22" ).innerHTML = englishFlag ? "Vibrate" : "振動";
	document.getElementById( "button_storage_clear" ).innerHTML = englishFlag ? "Clear<br>storage" : "ストレージ<br>クリア";
	document.getElementById( "button_cookie_clear" ).innerHTML = englishFlag ? "Clear<br>cookie" : "Cookie<br>クリア";
	document.getElementById( "button_profile_export" ).innerHTML = englishFlag ? "Export<br>profile" : "環境設定<br>ｴｸｽﾎﾟｰﾄ";
	document.getElementById( "button_profile_import" ).innerHTML = englishFlag ? "Import<br>profile" : "環境設定<br>ｲﾝﾎﾟｰﾄ";
	document.getElementById( "button_return" ).innerHTML = englishFlag ? "Return" : "戻る";
	document.getElementById( "button_get_content" ).innerHTML = englishFlag ? "Album..." : "アルバム...";
	document.getElementById( "button_selectimage_del" ).innerHTML = englishFlag ? "Del" : "消";
	document.getElementById( "button_return2" ).innerHTML = englishFlag ? "Return" : "戻る";
	document.getElementById( "button_profile_import2" ).innerHTML = englishFlag ? "Import" : "ｲﾝﾎﾟｰﾄする";

	document.getElementById( "button_savefunc" ).innerHTML = englishFlag ? "Save" : "保存する";

	document.getElementById( "calc_static_tab" ).innerHTML = englishFlag ? "Tab width:" : "Tab幅:";
	document.getElementById( "calc_static_smart" ).innerHTML = englishFlag ? "Smart" : "スマート";

	if( englishFlag ){
		cssSetStyleDisplayById( "lang_japanese" , false );
		cssSetStyleDisplayById( "lang_japanese2", false );
		cssSetStyleDisplayById( "lang_japanese3", false );
		cssSetStyleDisplayById( "lang_english"  , true  );
		cssSetStyleDisplayById( "lang_english2" , true  );
		cssSetStyleDisplayById( "lang_english3" , true  );
	} else {
		cssSetStyleDisplayById( "lang_english"  , false );
		cssSetStyleDisplayById( "lang_english2" , false );
		cssSetStyleDisplayById( "lang_english3" , false );
		cssSetStyleDisplayById( "lang_japanese" , true  );
		cssSetStyleDisplayById( "lang_japanese2", true  );
		cssSetStyleDisplayById( "lang_japanese3", true  );
	}

	document.getElementById( "button_lang" ).innerHTML = englishFlag ? "to JP" : "to EN";

	if( convUI != null ){
		convUI.setEnglish( englishFlag );
	}
}
function setEnglish( isEnglish ){
	cssSetStyleDisplayById( "button_lang", false );

	englishFlag = isEnglish;

	updateLanguage();
}
function doButtonLang( e ){
	englishFlag = englishFlag ? false : true;
	writeProfileInt( "ENV_", "Language", englishFlag ? LANG_ENGLISH : LANG_JAPANESE );

	updateLanguage();

	document.getElementById( "calc_usage" ).innerHTML = "";
}
function doButtonSHIFT( e ){
	setButtonMode();
}
function doButtonUIFunc(){
	if( menu == _UI_CALC_MENU_FUNC ){
		return;
	}
	setMenu( _UI_CALC_MENU_FUNC );

	document.getElementById( "button_ui_main"    ).disabled = false;
	document.getElementById( "button_ui_func"    ).disabled = true;
	document.getElementById( "button_ui_log"     ).disabled = false;
	document.getElementById( "button_ui_conv"    ).disabled = false;
	document.getElementById( "button_ui_console" ).disabled = false;
	document.getElementById( "button_ui_gworld"  ).disabled = false;
	document.getElementById( "button_ui_option"  ).disabled = false;

	document.getElementById( "button_ui_main2"    ).disabled = false;
	document.getElementById( "button_ui_func2"    ).disabled = true;
	document.getElementById( "button_ui_log2"     ).disabled = false;
	document.getElementById( "button_ui_conv2"    ).disabled = false;
	document.getElementById( "button_ui_console2" ).disabled = false;
	document.getElementById( "button_ui_gworld2"  ).disabled = false;
	document.getElementById( "button_ui_option2"  ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "calc_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "calc_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "calc_ui_top"        , false );
	cssSetStyleDisplayById( "calc_ui_cursor"     , false );
	cssSetStyleDisplayById( "calc_ui_button_1"   , false );
	cssSetStyleDisplayById( "calc_ui_button_2"   , false );
	cssSetStyleDisplayById( "calc_ui_button_3"   , false );
	cssSetStyleDisplayById( "calc_ui_button_4"   , false );
	cssSetStyleDisplayById( "calc_ui_button_5"   , false );
	cssSetStyleDisplayById( "calc_ui_button_6"   , false );
	cssSetStyleDisplayById( "calc_ui_usage"      , false );
	cssSetStyleDisplayById( "calc_ui_func"       , true );
	cssSetStyleDisplayById( "calc_ui_log"        , false );
	cssSetStyleDisplayById( "calc_ui_conv"       , false );
	cssSetStyleDisplayById( "calc_ui_console"    , false );
	cssSetStyleDisplayById( "calc_ui_gworld"     , false );
	cssSetStyleDisplayById( "calc_ui_option"     , false );
	cssSetStyleDisplayById( "calc_ui_selectimage", false );
	cssSetStyleDisplayById( "calc_ui_profile"    , false );
	cssUnlockStyleDisplay();
}
function doButtonUILog(){
	if( menu == _UI_CALC_MENU_LOG ){
		return;
	}
	setMenu( _UI_CALC_MENU_LOG );

	document.getElementById( "button_ui_main"    ).disabled = false;
	document.getElementById( "button_ui_func"    ).disabled = false;
	document.getElementById( "button_ui_log"     ).disabled = true;
	document.getElementById( "button_ui_conv"    ).disabled = false;
	document.getElementById( "button_ui_console" ).disabled = false;
	document.getElementById( "button_ui_gworld"  ).disabled = false;
	document.getElementById( "button_ui_option"  ).disabled = false;

	document.getElementById( "button_ui_main2"    ).disabled = false;
	document.getElementById( "button_ui_func2"    ).disabled = false;
	document.getElementById( "button_ui_log2"     ).disabled = true;
	document.getElementById( "button_ui_conv2"    ).disabled = false;
	document.getElementById( "button_ui_console2" ).disabled = false;
	document.getElementById( "button_ui_gworld2"  ).disabled = false;
	document.getElementById( "button_ui_option2"  ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "calc_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "calc_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "calc_ui_top"        , false );
	cssSetStyleDisplayById( "calc_ui_cursor"     , false );
	cssSetStyleDisplayById( "calc_ui_button_1"   , false );
	cssSetStyleDisplayById( "calc_ui_button_2"   , false );
	cssSetStyleDisplayById( "calc_ui_button_3"   , false );
	cssSetStyleDisplayById( "calc_ui_button_4"   , false );
	cssSetStyleDisplayById( "calc_ui_button_5"   , false );
	cssSetStyleDisplayById( "calc_ui_button_6"   , false );
	cssSetStyleDisplayById( "calc_ui_usage"      , false );
	cssSetStyleDisplayById( "calc_ui_func"       , false );
	cssSetStyleDisplayById( "calc_ui_log"        , true );
	cssSetStyleDisplayById( "calc_ui_conv"       , false );
	cssSetStyleDisplayById( "calc_ui_console"    , false );
	cssSetStyleDisplayById( "calc_ui_gworld"     , false );
	cssSetStyleDisplayById( "calc_ui_option"     , false );
	cssSetStyleDisplayById( "calc_ui_selectimage", false );
	cssSetStyleDisplayById( "calc_ui_profile"    , false );
	cssUnlockStyleDisplay();

	// 一番下までスクロール
	con[1].scrollBottom();
}
function doButtonUIConv(){
	if( menu == _UI_CALC_MENU_CONV ){
		return;
	}
	setMenu( _UI_CALC_MENU_CONV );

	document.getElementById( "button_ui_main"    ).disabled = false;
	document.getElementById( "button_ui_func"    ).disabled = false;
	document.getElementById( "button_ui_log"     ).disabled = false;
	document.getElementById( "button_ui_conv"    ).disabled = true;
	document.getElementById( "button_ui_console" ).disabled = false;
	document.getElementById( "button_ui_gworld"  ).disabled = false;
	document.getElementById( "button_ui_option"  ).disabled = false;

	document.getElementById( "button_ui_main2"    ).disabled = false;
	document.getElementById( "button_ui_func2"    ).disabled = false;
	document.getElementById( "button_ui_log2"     ).disabled = false;
	document.getElementById( "button_ui_conv2"    ).disabled = true;
	document.getElementById( "button_ui_console2" ).disabled = false;
	document.getElementById( "button_ui_gworld2"  ).disabled = false;
	document.getElementById( "button_ui_option2"  ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "calc_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "calc_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "calc_ui_top"        , false );
	cssSetStyleDisplayById( "calc_ui_cursor"     , false );
	cssSetStyleDisplayById( "calc_ui_button_1"   , false );
	cssSetStyleDisplayById( "calc_ui_button_2"   , false );
	cssSetStyleDisplayById( "calc_ui_button_3"   , false );
	cssSetStyleDisplayById( "calc_ui_button_4"   , false );
	cssSetStyleDisplayById( "calc_ui_button_5"   , false );
	cssSetStyleDisplayById( "calc_ui_button_6"   , false );
	cssSetStyleDisplayById( "calc_ui_usage"      , false );
	cssSetStyleDisplayById( "calc_ui_func"       , false );
	cssSetStyleDisplayById( "calc_ui_log"        , false );
	cssSetStyleDisplayById( "calc_ui_conv"       , true );
	cssSetStyleDisplayById( "calc_ui_console"    , false );
	cssSetStyleDisplayById( "calc_ui_gworld"     , false );
	cssSetStyleDisplayById( "calc_ui_option"     , false );
	cssSetStyleDisplayById( "calc_ui_selectimage", false );
	cssSetStyleDisplayById( "calc_ui_profile"    , false );
	cssUnlockStyleDisplay();
}
function doButtonUIConsole(){
	if( menu == _UI_CALC_MENU_CONSOLE ){
		return;
	}
	setMenu( _UI_CALC_MENU_CONSOLE );

	document.getElementById( "button_ui_main"    ).disabled = false;
	document.getElementById( "button_ui_func"    ).disabled = false;
	document.getElementById( "button_ui_log"     ).disabled = false;
	document.getElementById( "button_ui_conv"    ).disabled = false;
	document.getElementById( "button_ui_console" ).disabled = true;
	document.getElementById( "button_ui_gworld"  ).disabled = false;
	document.getElementById( "button_ui_option"  ).disabled = false;

	document.getElementById( "button_ui_main2"    ).disabled = false;
	document.getElementById( "button_ui_func2"    ).disabled = false;
	document.getElementById( "button_ui_log2"     ).disabled = false;
	document.getElementById( "button_ui_conv2"    ).disabled = false;
	document.getElementById( "button_ui_console2" ).disabled = true;
	document.getElementById( "button_ui_gworld2"  ).disabled = false;
	document.getElementById( "button_ui_option2"  ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "calc_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "calc_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "calc_ui_top"        , false );
	cssSetStyleDisplayById( "calc_ui_cursor"     , false );
	cssSetStyleDisplayById( "calc_ui_button_1"   , false );
	cssSetStyleDisplayById( "calc_ui_button_2"   , false );
	cssSetStyleDisplayById( "calc_ui_button_3"   , false );
	cssSetStyleDisplayById( "calc_ui_button_4"   , false );
	cssSetStyleDisplayById( "calc_ui_button_5"   , false );
	cssSetStyleDisplayById( "calc_ui_button_6"   , false );
	cssSetStyleDisplayById( "calc_ui_usage"      , false );
	cssSetStyleDisplayById( "calc_ui_func"       , false );
	cssSetStyleDisplayById( "calc_ui_log"        , false );
	cssSetStyleDisplayById( "calc_ui_conv"       , false );
	cssSetStyleDisplayById( "calc_ui_console"    , true );
	cssSetStyleDisplayById( "calc_ui_gworld"     , false );
	cssSetStyleDisplayById( "calc_ui_option"     , false );
	cssSetStyleDisplayById( "calc_ui_selectimage", false );
	cssSetStyleDisplayById( "calc_ui_profile"    , false );
	cssUnlockStyleDisplay();

	// 一番下までスクロール
	con[0].scrollBottom();
}
function doButtonUIGWorld(){
	if( menu == _UI_CALC_MENU_GWORLD ){
		return;
	}
	setMenu( _UI_CALC_MENU_GWORLD );

	document.getElementById( "button_ui_main"    ).disabled = false;
	document.getElementById( "button_ui_func"    ).disabled = false;
	document.getElementById( "button_ui_log"     ).disabled = false;
	document.getElementById( "button_ui_conv"    ).disabled = false;
	document.getElementById( "button_ui_console" ).disabled = false;
	document.getElementById( "button_ui_gworld"  ).disabled = true;
	document.getElementById( "button_ui_option"  ).disabled = false;

	document.getElementById( "button_ui_main2"    ).disabled = false;
	document.getElementById( "button_ui_func2"    ).disabled = false;
	document.getElementById( "button_ui_log2"     ).disabled = false;
	document.getElementById( "button_ui_conv2"    ).disabled = false;
	document.getElementById( "button_ui_console2" ).disabled = false;
	document.getElementById( "button_ui_gworld2"  ).disabled = true;
	document.getElementById( "button_ui_option2"  ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "calc_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "calc_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "calc_ui_top"        , false );
	cssSetStyleDisplayById( "calc_ui_cursor"     , false );
	cssSetStyleDisplayById( "calc_ui_button_1"   , false );
	cssSetStyleDisplayById( "calc_ui_button_2"   , false );
	cssSetStyleDisplayById( "calc_ui_button_3"   , false );
	cssSetStyleDisplayById( "calc_ui_button_4"   , false );
	cssSetStyleDisplayById( "calc_ui_button_5"   , false );
	cssSetStyleDisplayById( "calc_ui_button_6"   , false );
	cssSetStyleDisplayById( "calc_ui_usage"      , false );
	cssSetStyleDisplayById( "calc_ui_func"       , false );
	cssSetStyleDisplayById( "calc_ui_log"        , false );
	cssSetStyleDisplayById( "calc_ui_conv"       , false );
	cssSetStyleDisplayById( "calc_ui_console"    , false );
	cssSetStyleDisplayById( "calc_ui_gworld"     , true );
	cssSetStyleDisplayById( "calc_ui_option"     , false );
	cssSetStyleDisplayById( "calc_ui_selectimage", false );
	cssSetStyleDisplayById( "calc_ui_profile"    , false );
	cssUnlockStyleDisplay();
}
function doButtonUIOption(){
	if( menu == _UI_CALC_MENU_OPTION ){
		return;
	}
	setMenu( _UI_CALC_MENU_OPTION );

	document.getElementById( "button_ui_main"    ).disabled = false;
	document.getElementById( "button_ui_func"    ).disabled = false;
	document.getElementById( "button_ui_log"     ).disabled = false;
	document.getElementById( "button_ui_conv"    ).disabled = false;
	document.getElementById( "button_ui_console" ).disabled = false;
	document.getElementById( "button_ui_gworld"  ).disabled = false;
	document.getElementById( "button_ui_option"  ).disabled = true;

	document.getElementById( "button_ui_main2"    ).disabled = false;
	document.getElementById( "button_ui_func2"    ).disabled = false;
	document.getElementById( "button_ui_log2"     ).disabled = false;
	document.getElementById( "button_ui_conv2"    ).disabled = false;
	document.getElementById( "button_ui_console2" ).disabled = false;
	document.getElementById( "button_ui_gworld2"  ).disabled = false;
	document.getElementById( "button_ui_option2"  ).disabled = true;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "calc_ui_menu"       , (isAndroidTablet() || isIPad()) ? false : true );
	cssSetStyleDisplayById( "calc_ui_menu2"      , (isAndroidTablet() || isIPad()) ? true : false );
	cssSetStyleDisplayById( "calc_ui_top"        , false );
	cssSetStyleDisplayById( "calc_ui_cursor"     , false );
	cssSetStyleDisplayById( "calc_ui_button_1"   , false );
	cssSetStyleDisplayById( "calc_ui_button_2"   , false );
	cssSetStyleDisplayById( "calc_ui_button_3"   , false );
	cssSetStyleDisplayById( "calc_ui_button_4"   , false );
	cssSetStyleDisplayById( "calc_ui_button_5"   , false );
	cssSetStyleDisplayById( "calc_ui_button_6"   , false );
	cssSetStyleDisplayById( "calc_ui_usage"      , false );
	cssSetStyleDisplayById( "calc_ui_func"       , false );
	cssSetStyleDisplayById( "calc_ui_log"        , false );
	cssSetStyleDisplayById( "calc_ui_conv"       , false );
	cssSetStyleDisplayById( "calc_ui_console"    , false );
	cssSetStyleDisplayById( "calc_ui_gworld"     , false );
	cssSetStyleDisplayById( "calc_ui_option"     , true );
	cssSetStyleDisplayById( "calc_ui_selectimage", false );
	cssSetStyleDisplayById( "calc_ui_profile"    , false );
	cssUnlockStyleDisplay();
}
function doButtonUISelectImage(){
	setMenu( _UI_CALC_MENU_SELECTIMAGE );

	document.getElementById( "button_ui_main"    ).disabled = false;
	document.getElementById( "button_ui_func"    ).disabled = false;
	document.getElementById( "button_ui_log"     ).disabled = false;
	document.getElementById( "button_ui_conv"    ).disabled = false;
	document.getElementById( "button_ui_console" ).disabled = false;
	document.getElementById( "button_ui_gworld"  ).disabled = false;
	document.getElementById( "button_ui_option"  ).disabled = false;

	document.getElementById( "button_ui_main2"    ).disabled = false;
	document.getElementById( "button_ui_func2"    ).disabled = false;
	document.getElementById( "button_ui_log2"     ).disabled = false;
	document.getElementById( "button_ui_conv2"    ).disabled = false;
	document.getElementById( "button_ui_console2" ).disabled = false;
	document.getElementById( "button_ui_gworld2"  ).disabled = false;
	document.getElementById( "button_ui_option2"  ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "calc_ui_menu"       , false );
	cssSetStyleDisplayById( "calc_ui_menu2"      , false );
	cssSetStyleDisplayById( "calc_ui_top"        , false );
	cssSetStyleDisplayById( "calc_ui_cursor"     , false );
	cssSetStyleDisplayById( "calc_ui_button_1"   , false );
	cssSetStyleDisplayById( "calc_ui_button_2"   , false );
	cssSetStyleDisplayById( "calc_ui_button_3"   , false );
	cssSetStyleDisplayById( "calc_ui_button_4"   , false );
	cssSetStyleDisplayById( "calc_ui_button_5"   , false );
	cssSetStyleDisplayById( "calc_ui_button_6"   , false );
	cssSetStyleDisplayById( "calc_ui_usage"      , false );
	cssSetStyleDisplayById( "calc_ui_func"       , false );
	cssSetStyleDisplayById( "calc_ui_log"        , false );
	cssSetStyleDisplayById( "calc_ui_conv"       , false );
	cssSetStyleDisplayById( "calc_ui_console"    , false );
	cssSetStyleDisplayById( "calc_ui_gworld"     , false );
	cssSetStyleDisplayById( "calc_ui_option"     , false );
	cssSetStyleDisplayById( "calc_ui_selectimage", true );
	cssSetStyleDisplayById( "calc_ui_profile"    , false );
	cssUnlockStyleDisplay();
}
function doButtonUIProfile( readOnly ){
	setMenu( _UI_CALC_MENU_PROFILE );

	cssSetStyleDisplayById( "button_profile_import2", readOnly ? false : true );
	document.getElementById( "profile" ).readOnly = readOnly;
	if( !readOnly ){
		document.getElementById( "profile" ).value = "";
	}

	document.getElementById( "button_ui_main"    ).disabled = false;
	document.getElementById( "button_ui_func"    ).disabled = false;
	document.getElementById( "button_ui_log"     ).disabled = false;
	document.getElementById( "button_ui_conv"    ).disabled = false;
	document.getElementById( "button_ui_console" ).disabled = false;
	document.getElementById( "button_ui_gworld"  ).disabled = false;
	document.getElementById( "button_ui_option"  ).disabled = false;

	document.getElementById( "button_ui_main2"    ).disabled = false;
	document.getElementById( "button_ui_func2"    ).disabled = false;
	document.getElementById( "button_ui_log2"     ).disabled = false;
	document.getElementById( "button_ui_conv2"    ).disabled = false;
	document.getElementById( "button_ui_console2" ).disabled = false;
	document.getElementById( "button_ui_gworld2"  ).disabled = false;
	document.getElementById( "button_ui_option2"  ).disabled = false;

	cssLockStyleDisplay();
	cssSetStyleDisplayById( "calc_ui_menu"       , false );
	cssSetStyleDisplayById( "calc_ui_menu2"      , false );
	cssSetStyleDisplayById( "calc_ui_top"        , false );
	cssSetStyleDisplayById( "calc_ui_cursor"     , false );
	cssSetStyleDisplayById( "calc_ui_button_1"   , false );
	cssSetStyleDisplayById( "calc_ui_button_2"   , false );
	cssSetStyleDisplayById( "calc_ui_button_3"   , false );
	cssSetStyleDisplayById( "calc_ui_button_4"   , false );
	cssSetStyleDisplayById( "calc_ui_button_5"   , false );
	cssSetStyleDisplayById( "calc_ui_button_6"   , false );
	cssSetStyleDisplayById( "calc_ui_usage"      , false );
	cssSetStyleDisplayById( "calc_ui_func"       , false );
	cssSetStyleDisplayById( "calc_ui_log"        , false );
	cssSetStyleDisplayById( "calc_ui_conv"       , false );
	cssSetStyleDisplayById( "calc_ui_console"    , false );
	cssSetStyleDisplayById( "calc_ui_gworld"     , false );
	cssSetStyleDisplayById( "calc_ui_option"     , false );
	cssSetStyleDisplayById( "calc_ui_selectimage", false );
	cssSetStyleDisplayById( "calc_ui_profile"    , true );
	cssUnlockStyleDisplay();
}

function clearConsole( type ){
	con[type].clear();
}

function changeExpr(){
	var i, j;
	var token;

	for( i = 0; i < editExpr.num(); i++ ){
		token = editExpr.token( i );
		if( topParam._calculator ){
			if( token == "log "   ) editExpr.set( i, "ln "  );
			if( token == "log10 " ) editExpr.set( i, "log " );
		} else {
			if( token == "log " ) editExpr.set( i, "log10 " );
			if( token == "ln "  ) editExpr.set( i, "log "   );
		}
	}
	writeProfileExpr();
	updateEditExpr();

	var tmpEdit = new EditExpr( -1 );
	for( i = 0; i < logExpr.num(); i++ ){
		tmpEdit.importLog( logExpr.obj( i ) );

		for( j = 0; j < tmpEdit.num(); j++ ){
			token = tmpEdit.token( j );
			if( topParam._calculator ){
				if( token == "log "   ) tmpEdit.set( j, "ln "  );
				if( token == "log10 " ) tmpEdit.set( j, "log " );
			} else {
				if( token == "log " ) tmpEdit.set( j, "log10 " );
				if( token == "ln "  ) tmpEdit.set( j, "log "   );
			}
		}

		var expr = new _String();
		tmpEdit.exportLog( expr );

		logExpr.set( i, expr.str() );
	}
	updateLogExpr();
	writeProfileLogExpr();
}
function doCheckCalculator(){
	topParam._calculator = document.getElementById( "check_calculator" ).checked;

	calcUI.updateTrigButton();
	changeExpr();

	writeProfileInt( "ENV_", "Calculator", topParam._calculator ? 1 : 0 );
}

function onCalcInitEnv( _this ){
	_this._mode = getProfileInt( "ENV_", "Mode", _UI_CALC_MODE_FLOAT );
	_this._bitType = getProfileInt( "ENV_", "Bit", _UI_CALC_BIT_32 );
	_this._radix = getProfileInt( "ENV_", "Radix", 10 );
	_this._timeType = getProfileInt( "ENV_", "Time", _UI_CALC_TIME_S );
	_this._fps = getProfileFloat( "ENV_", "FPS", 30.0 );
	_this._keepTrigFlag = (getProfileInt( "ENV_", "KeepTrig", 0 ) == 1);
	_this._reCalcModeFlag = (getProfileInt( "ENV_", "ReCalcMode", 1 ) == 1);
	_this._reCalcAngleFlag = (getProfileInt( "ENV_", "ReCalcAngle", 1 ) == 1);
	_this._reCalcSTOFlag = (getProfileInt( "ENV_", "ReCalcSTO", 1 ) == 1);
	_this._sepType = getProfileInt( "ENV_", "SepType", _UI_CALC_SEP_OFF );
	_this._italic = (getProfileInt( "ENV_", "Italic", 0 ) == 1);
	_this._proc.setAngType( getProfileInt( "ENV_", "Angle", _ANG_TYPE_RAD ), false );

	var calculatorMode = getProfileInt( "ENV_", "Calculator", -1 );
	if( calculatorMode < 0 ){
		calculatorMode = 1;
		resetCalculator = true;
	}
	_this._param._calculator = (calculatorMode == 1);
}

function getProfileVar(){
	var c = new _Complex();
	var f = new _Fract();
	var t = new _Time();
	var v = new _Value();
	for( var i = 64; i <= 90; i++ ){
		beginGetProfile( "VAR_" + ((i == 64) ? "ANS" : String.fromCharCode( i )) );
		var tmp = getProfile();
		if( tmp.length != 0 ){
			var type = parseInt( tmp );

			var c_re = parseFloat( getProfile() );
			var c_im = parseFloat( getProfile() );
			setComplex( c, c_re, c_im );

			var f_mi = (parseInt( getProfile() ) == 1);
			var f_nu = parseInt( getProfile() );
			var f_de = parseInt( getProfile() );
			setFract( f, f_mi, f_nu, f_de );

			var t_fps   = parseFloat( getProfile() );
			var t_minus = (parseInt( getProfile() ) == 1);
			var t_hour  = parseFloat( getProfile() );
			var t_min   = parseFloat( getProfile() );
			var t_sec   = parseFloat( getProfile() );
			var t_frame = parseFloat( getProfile() );
			setTime( t, t_fps, t_minus, t_hour, t_min, t_sec, t_frame );

			topParam.setVal( (i == 64) ? 0 : i, setValue( v, type, c, f, t ), true );
		}
		endGetProfile();
	}
}
function writeProfileVar( index ){
	var type    = new _Integer();
	var c       = new _Complex();
	var f       = new _Fract();
	var t       = new _Time();
	var c_re    = new _Float();
	var c_im    = new _Float();
	var f_mi    = new _Boolean();
	var f_nu    = new _Integer();
	var f_de    = new _Integer();
	var t_fps   = new _Float();
	var t_minus = new _Boolean();
	var t_hour  = new _Float();
	var t_min   = new _Float();
	var t_sec   = new _Float();
	var t_frame = new _Float();
	getValue( topParam.val( index ), type, c, f, t );
	getComplex( c, c_re, c_im );
	getFract( f, f_mi, f_nu, f_de );
	getTime( t, t_fps, t_minus, t_hour, t_min, t_sec, t_frame );

	beginWriteProfile();
	writeProfile( "" + type._val );
	writeProfile( "" + c_re._val );
	writeProfile( "" + c_im._val );
	writeProfile( f_mi._val ? "1" : "0" );
	writeProfile( "" + f_nu._val );
	writeProfile( "" + f_de._val );
	writeProfile( "" + t_fps._val );
	writeProfile( t_minus._val ? "1" : "0" );
	writeProfile( "" + t_hour._val );
	writeProfile( "" + t_min._val );
	writeProfile( "" + t_sec._val );
	writeProfile( "" + t_frame._val );
	endWriteProfile( "VAR_" + ((index == 0) ? "ANS" : String.fromCharCode( index )) );
}

var _getProfileExpr = false;
function getProfileExpr(){
	_getProfileExpr = true;
	editExpr.importLog( getProfileString( "EXPR_", "", "" ) );
	if( getProfileInt( "EXPR_", "SelAll", 0 ) == 1 ){
		editExpr.selAll();
	}
	_getProfileExpr = false;
}
function writeProfileExpr(){
	var expr = new _String();
	editExpr.exportLog( expr );
	writeProfileString( "EXPR_", "", expr.str() );
}
function onEditExprUpdateSelAll( id, flag ){
	if( (id == 1) && !_getProfileExpr ){
		writeProfileInt( "EXPR_", "SelAll", flag ? 1 : 0 );
	}
}

function getProfileLogExpr(){
	var expr = new String();
	beginGetProfile( "LOG_" + "Expr" );
	while( true ){
		expr = getProfile();
		if( expr.length == 0 ){
			break;
		}
		logExpr.add( expr );
	}
	endGetProfile();

	logExpr.setIndex( 0 );
}
function writeProfileLogExpr(){
	var expr = new String();
	beginWriteProfile();
	for( var i = 0; i < logExpr.num(); i++ ){
		expr = logExpr.obj( i );
		writeProfile( expr );
	}
	endWriteProfile( "LOG_" + "Expr" );
}

function writeProfileAngle(){
	var type       = new _Integer();
	var updateFlag = new _Boolean();
	topProc.getAngType( type, updateFlag );
	writeProfileInt( "ENV_", "Angle", type._val );
}

function addListImageFromProfile( url, x, y ){
	var i;
	for( i = 0; i < listImage.num(); i++ ){
		if( listImage.obj( i )._url == url ){
			break;
		}
	}
	if( i == listImage.num() ){
		listImage.add( new ListImageItem( url, x, y ) );
	}
}
function getProfileImage(){
	var i;
	var url, x, y;

	var prefix = new Array();
	for( i = 0; ; i++ ){
		var tmp = getProfileString( "IMAGE_PATH_", "" + (i + 1), "" );
		if( tmp.length == 0 ){
			break;
		}
		prefix[i] = new String();
		prefix[i] = tmp;

		beginGetProfile( "IMAGE_" + (i + 1) );
		while( true ){
			url = getProfile();
			x   = getProfile();
			y   = getProfile();
			if( url.length == 0 ){
				break;
			}
			addListImageFromProfile( tmp + url, x, y );
		}
		endGetProfile();
	}

	beginGetProfile( "IMAGE_" );
	while( true ){
		url = getProfile();
		x   = getProfile();
		y   = getProfile();
		if( url.length == 0 ){
			break;
		}
		if( url.charAt( 0 ) == '{' ){
			var tmp = url.indexOf( "}" );
			if( tmp >= 2 ){
				i = parseInt( url.substring( 1, tmp ) ) - 1;
				if( i < prefix.length ){
					url = prefix[i] + url.slice( tmp + 1 );
				}
			}
		}
		addListImageFromProfile( url, x, y );
	}
	endGetProfile();
}
function writeProfileImage(){
	var i, j;
	var prefix = new Array();
	var image = new Array();

	clearProfile( PROFILE_PREFIX + "IMAGE_" );

	beginWriteProfile();
	for( i = 0; i < listImage.num(); i++ ){
		var url = listImage.obj( i )._url;
		var tmp = url.lastIndexOf( "/" );
		if( tmp >= 0 ){
			var url1 = url.substring( 0, tmp + 1 );
			var url2 = url.slice( tmp + 1 );
			for( j = 0; j < prefix.length; j++ ){
				if( prefix[j] == url1 ){
					break;
				}
			}
			if( j >= prefix.length ){
				prefix[j] = new String();
				prefix[j] = url1;

				image[j] = new String();
				image[j] = escape( url2 );
			} else {
				image[j] += "&" + escape( url2 );
			}
			image[j] += "&" + listImage.obj( i )._x;
			image[j] += "&" + listImage.obj( i )._y;
		} else {
			writeProfile( url );
			writeProfile( listImage.obj( i )._x );
			writeProfile( listImage.obj( i )._y );
		}
	}
	endWriteProfile( "IMAGE_" );

	for( i = 0; i < prefix.length; i++ ){
		writeProfileString( "IMAGE_PATH_", "" + (i + 1), prefix[i] );
		writeProfileString( "IMAGE_"     , "" + (i + 1), image [i] );
	}
}

// エディタ関連
var needSaveFunc = false;
function onEditorUpdateText( len ){
	needSaveFunc = true;
	cssSetStyleDisplayById( "calc_button_savefunc", true );
}
function getFunc( chr ){
	return getProfileString( "FUNC_", "" + chr, "" );
}
function setFunc( chr, text ){
	writeProfileString( "FUNC_", "" + chr, text );

	// 外部関数キャッシュのクリア
	topProc.clearFuncCache( "!" + chr );
}
function loadFunc(){
	editor.setText( getFunc( String.fromCharCode( curFunc ) ) );
}
function saveFunc(){
	if( needSaveFunc ){
		setFunc( String.fromCharCode( curFunc ), "" + editor.text() );

		updateSelectFunc1( document.getElementById( "calc_select_func" ), curFunc - 97 );

		needSaveFunc = false;
		cssSetStyleDisplayById( "calc_button_savefunc", false );
	}
}
function doChangeFunc( select ){
	saveFunc();

	selFunc = select.selectedIndex;
	curFunc = select.options[selFunc].value;

	loadFunc();

	writeProfileInt( "EDITOR_", "SelFunc", selFunc );
}
function callFunc(){
	saveFunc();

	insEditExpr( "!!" + String.fromCharCode( curFunc ) + " " );

	doButtonUIMain();
	setButtonMode( 0 );
}
function onChangeTabWidth(){
	var tabWidth = parseInt( document.getElementById( "tab_width" ).value );
	if( tabWidth < 0 ){
		tabWidth = 0;
		document.getElementById( "tab_width" ).value = "" + tabWidth;
	}
	cssSetPropertyValue( ".textarea_func", "tab-size", "" + tabWidth );

	writeProfileInt( "EDITOR_", "Tab", tabWidth );
}
function doButtonEditTabUp( e ){
	if( doButtonUpInt( "tab_width", 1, 8 ) ){
		onChangeTabWidth();
	}
}
function doButtonEditTabDown( e ){
	if( doButtonDownInt( "tab_width", 1, 1 ) ){
		onChangeTabWidth();
	}
}
function doCheckSmart(){
	setEditorSmartFlag( document.getElementById( "check_smart" ).checked );

	writeProfileInt( "EDITOR_", "Smart", editorSmartFlag() ? 1 : 0 );
}

function updateSelectFunc1( select, i ){
	var index = 97 + i;
	var data = getFunc( String.fromCharCode( index ) );
	if( data.length == 0 ){
		select.options[i].innerHTML = "" + String.fromCharCode( index );
	} else {
		select.options[i].innerHTML = "" + String.fromCharCode( index ) + "&nbsp;&nbsp;" + splitData( data )[0];
	}
}
function updateSelectFunc(){
	var select = document.getElementById( "calc_select_func" );
	for( var i = 0; i < 26; i++ ){
		updateSelectFunc1( select, i );
	}
}

function getContent(){
	if( nativeRequest ){
		nativeRequest.send( "get_content" );
	}
}
function onContentBase64( data ){
	skinImage = data;
	document.getElementById( "calc_edit_skin_image" ).value = skinImage;
	updateSkin();

	writeProfileString( "ENV_", "SkinImage", skinImage );

	addListImage();
}

// キー関連
function onKeyDown( key ){
	if( menu != _UI_CALC_MENU_MAIN ){
		return false;
	}

	if(
		(document.activeElement == document.getElementById( "calc_edit_radix" )) ||
		(document.activeElement == document.getElementById( "calc_edit_fps"   ))
	){
		return false;
	}

	if( key == _KEY_SHIFT ){
		keyShiftOnly = true;
	} else {
		keyShiftOnly = false;
	}

	switch( key ){
	case _KEY_UP   : topEditExpr(); return true;
	case _KEY_DOWN : endEditExpr(); return true;
	case _KEY_LEFT : backwardEditExpr(); return true;
	case _KEY_RIGHT: forwardEditExpr(); return true;

	case _KEY_BACKSPACE: delEditExpr(); return true;
	case _KEY_DELETE   : delEditExpr(); return true;

	case _KEY_0    : doButton0(); return true;
	case _KEY_NUM_0: doButton0(); return true;
	case _KEY_1:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButton1();
			return true;
		} else {
			switch( calcUI._mode ){
			case _UI_CALC_MODE_FLOAT:
			case _UI_CALC_MODE_FRACT:
			case _UI_CALC_MODE_MFRACT:
			case _UI_CALC_MODE_COMPLEX:
			case _UI_CALC_MODE_SIGNED:
			case _UI_CALC_MODE_UNSIGNED:
				doButtonFactorial();
				return true;
			}
		}
		break;
	case _KEY_NUM_1: doButton1(); return true;
	case _KEY_2    : doButton2(); return true;
	case _KEY_NUM_2: doButton2(); return true;
	case _KEY_3    : doButton3(); return true;
	case _KEY_NUM_3: doButton3(); return true;
	case _KEY_4    : doButton4(); return true;
	case _KEY_NUM_4: doButton4(); return true;
	case _KEY_5:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButton5();
		} else {
			doButtonMod();
		}
		return true;
	case _KEY_NUM_5: doButton5(); return true;
	case _KEY_6:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButton6();
			return true;
		} else if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			doButtonAND();
			return true;
		}
		break;
	case _KEY_NUM_6: doButton6(); return true;
	case _KEY_7    : doButton7(); return true;
	case _KEY_NUM_7: doButton7(); return true;
	case _KEY_8:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButton8();
		} else {
			doButtonTop();
		}
		return true;
	case _KEY_NUM_8: doButton8(); return true;
	case _KEY_9:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButton9();
		} else {
			doButtonEnd();
		}
		return true;
	case _KEY_NUM_9: doButton9(); return true;
	case _KEY_A:
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			doButtonA();
			return true;
		}
		break;
	case _KEY_B:
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
				doButtonB();
			} else {
				doButtonBIN();
			}
			return true;
		}
		break;
	case _KEY_C:
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			doButtonC();
			return true;
		}
		break;
	case _KEY_D:
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			doButtonD();
			return true;
		} else {
			switch( calcUI._mode ){
			case _UI_CALC_MODE_FLOAT:
			case _UI_CALC_MODE_FRACT:
			case _UI_CALC_MODE_MFRACT:
			case _UI_CALC_MODE_COMPLEX:
				doButtonDeg();
				return true;
			}
		}
		break;
	case _KEY_E:
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			doButtonE();
		} else {
			if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
				doButtonEPlus();
			} else {
				doButtonEMinus();
			}
		}
		return true;
	case _KEY_F:
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			doButtonF();
			return true;
		} else if( calcUI._mode == _UI_CALC_MODE_TIME ){
			doButtonFrame();
			return true;
		}
		break;
	case _KEY_G:
		switch( calcUI._mode ){
		case _UI_CALC_MODE_FLOAT:
		case _UI_CALC_MODE_FRACT:
		case _UI_CALC_MODE_MFRACT:
		case _UI_CALC_MODE_COMPLEX:
			doButtonGrad();
			return true;
		}
		break;
	case _KEY_H:
		if( calcUI._mode == _UI_CALC_MODE_TIME ){
			doButtonHour();
			return true;
		}
		break;
	case _KEY_M:
		if( calcUI._mode == _UI_CALC_MODE_TIME ){
			doButtonMin();
			return true;
		}
		break;
	case _KEY_R:
		switch( calcUI._mode ){
		case _UI_CALC_MODE_FLOAT:
		case _UI_CALC_MODE_FRACT:
		case _UI_CALC_MODE_MFRACT:
		case _UI_CALC_MODE_COMPLEX:
			doButtonRad();
			return true;
		}
		break;
	case _KEY_S:
		if( calcUI._mode == _UI_CALC_MODE_TIME ){
			doButtonSec();
			return true;
		}
		break;
	case _KEY_X:
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			doButtonHEX();
			return true;
		}
		break;

	case _KEY_NUM_POINT:
		switch( calcUI._mode ){
		case _UI_CALC_MODE_FLOAT:
		case _UI_CALC_MODE_FRACT:
		case _UI_CALC_MODE_MFRACT:
		case _UI_CALC_MODE_COMPLEX:
			doButtonPoint();
			return true;
		}
		break;
	case 190:	// .>キー
		switch( calcUI._mode ){
		case _UI_CALC_MODE_FLOAT:
		case _UI_CALC_MODE_FRACT:
		case _UI_CALC_MODE_MFRACT:
		case _UI_CALC_MODE_COMPLEX:
			doButtonPoint();
			return true;
		case _UI_CALC_MODE_SIGNED:
		case _UI_CALC_MODE_UNSIGNED:
			doButtonShiftR();
			return true;
		}
		break;
	case 187:	// ;+キー
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButtonPlus();
		} else {
			doButtonAdd();
		}
		return true;
	case 189:	// -=キー
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButtonSub();
		} else {
			doButtonMinus();
		}
		return true;

	case 226:	// \_キー
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			doButtonEsc();
		} else {
			doButtonFract();
		}
		return true;
	case _KEY_I:
		switch( calcUI._mode ){
		case _UI_CALC_MODE_FLOAT:
		case _UI_CALC_MODE_FRACT:
		case _UI_CALC_MODE_MFRACT:
		case _UI_CALC_MODE_COMPLEX:
			doButtonI();
			return true;
		}
		break;
	case 186:	// :*キー
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			if( calcUI._mode == _UI_CALC_MODE_TIME ){
				doButtonTime();
				return true;
			}
		} else {
			doButtonMul();
			return true;
		}
		break;

	case _KEY_NUM_ADD:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButtonAdd();
		} else {
			doButtonPlus();
		}
		return true;
	case _KEY_NUM_SUB:
		if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
			doButtonSub();
		} else {
			doButtonMinus();
		}
		return true;
	case _KEY_NUM_MUL: doButtonMul(); return true;
	case _KEY_NUM_DIV: doButtonDiv(); return true;
	case 191: doButtonDiv(); return true;	// /?キー

	case 222:	// ^~キー
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
				doButtonXOR();
			} else {
				doButtonComplement();
			}
		} else {
			doButtonPow();
		}
		return true;
	case 220:	// \|キー
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			if( _AND( _key_state, keyBit( _KEY_SHIFT ) ) == 0 ){
				doButtonEsc();
			} else {
				doButtonOR();
			}
			return true;
		}
		break;
	case 188:	// ,<キー
		if( (calcUI._mode == _UI_CALC_MODE_SIGNED) || (calcUI._mode == _UI_CALC_MODE_UNSIGNED) ){
			doButtonShiftL();
			return true;
		}
		break;

	case _KEY_SPACE: doButtonSpace(); return true;

	case _KEY_ENTER: doButtonEnter(); return true;
	}

	return false;
}
function onKeyUp( key ){
	if( (key == _KEY_SHIFT) && keyShiftOnly ){
		doButtonSHIFT();
		return true;
	}

	return false;
}
