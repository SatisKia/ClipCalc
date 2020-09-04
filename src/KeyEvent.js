// キーコード
#define _KEY_BACKSPACE	8
#define _KEY_TAB		9
#define _KEY_ENTER		13
#define _KEY_SHIFT		16
#define _KEY_CTRL		17
#define _KEY_SPACE		32
#define _KEY_LEFT		37
#define _KEY_UP			38
#define _KEY_RIGHT		39
#define _KEY_DOWN		40
#define _KEY_DELETE		46
#define _KEY_0			48
#define _KEY_1			49
#define _KEY_2			50
#define _KEY_3			51
#define _KEY_4			52
#define _KEY_5			53
#define _KEY_6			54
#define _KEY_7			55
#define _KEY_8			56
#define _KEY_9			57
#define _KEY_A			65
#define _KEY_B			66
#define _KEY_C			67
#define _KEY_D			68
#define _KEY_E			69
#define _KEY_F			70
#define _KEY_G			71
#define _KEY_H			72
#define _KEY_I			73
#define _KEY_J			74
#define _KEY_K			75
#define _KEY_L			76
#define _KEY_M			77
#define _KEY_N			78
#define _KEY_O			79
#define _KEY_P			80
#define _KEY_Q			81
#define _KEY_R			82
#define _KEY_S			83
#define _KEY_T			84
#define _KEY_U			85
#define _KEY_V			86
#define _KEY_W			87
#define _KEY_X			88
#define _KEY_Y			89
#define _KEY_Z			90
#define _KEY_NUM_0		96
#define _KEY_NUM_1		97
#define _KEY_NUM_2		98
#define _KEY_NUM_3		99
#define _KEY_NUM_4		100
#define _KEY_NUM_5		101
#define _KEY_NUM_6		102
#define _KEY_NUM_7		103
#define _KEY_NUM_8		104
#define _KEY_NUM_9		105
#define _KEY_NUM_POINT	110
#define _KEY_NUM_ADD	107
#define _KEY_NUM_SUB	109
#define _KEY_NUM_MUL	106
#define _KEY_NUM_DIV	111

// イベント関連
var _key_state = 0;
var _key_array = new Array();
_key_array[0] = _KEY_SHIFT;
_key_array[1] = _KEY_CTRL;

function setKeyArray( array ){
	var len = array.length;
	_key_array = new Array();
	for( var i = 0; i < len; i++ ){
		_key_array[i] = array[i];
	}
}

function keyBit( key ){
	var len = _key_array.length;
	for( var i = 0; i < len; i++ ){
		if( _key_array[i] == key ){
			return _SHIFTL( 1, i );
		}
	}
	return 0;
}

function keyDown( e ){
	var k = keyBit( e.keyCode );
	if( _AND( _key_state, k ) == 0 ){
		_key_state += k;
	}
	if( onKeyDown( e.keyCode ) ){
		e.preventDefault();
	}
}
function keyUp( e ){
	var k = keyBit( e.keyCode );
	if( _AND( _key_state, k ) != 0 ){
		_key_state -= k;
	}
	if( onKeyUp( e.keyCode ) ){
		e.preventDefault();
	}
}

//function onKeyDown( key ){}
//function onKeyUp( key ){}
