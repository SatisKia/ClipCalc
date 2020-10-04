#include "_StringUtil.js"

function Common(){
	var userAgent = window.navigator.userAgent;
	this._androidMobile = false;
	this._androidTablet = false;
	this._iPhone        = false;
	this._iPad          = false;
	if( userAgent.indexOf( "iPad" ) != -1 ){
		this._iPad = true;
	} else if( (userAgent.indexOf( "iPhone" ) != -1) || (userAgent.indexOf( "iPod" ) != -1) ){
		this._iPhone  = true;
	} else if( userAgent.indexOf( "Android" ) != -1 ){
		if( userAgent.indexOf( "Mobile" ) != -1 ){
			this._androidMobile = true;
		} else {
			this._androidTablet = true;
		}
	}
	this._app = false;
	if( userAgent.lastIndexOf( " APP" ) == userAgent.length - 4 ){
		this._app = true;
	}

	this._su = new _StringUtil();
}

Common.prototype = {

	isAndroidMobile : function(){
		return this._androidMobile;
	},
	isAndroidTablet : function(){
		return this._androidTablet;
	},
	isIPhone : function(){
		return this._iPhone;
	},
	isIPad : function(){
		return this._iPad;
	},
	isPC : function(){
		return (!this._androidMobile && !this._androidTablet && !this._iPhone && !this._iPad);
	},

	isApp : function(){
		return this._app;
	},

	setFont : function( size, family ){
		this._su.setFont( size, family );
	},
	stringWidth : function( str ){
		return this._su.stringWidth( str );
	},
	fontHeight : function(){
		return this,_su.fontHeight();
	},
	truncate : function( str, width, truncation ){
		return this._su.truncate( str, width, truncation );
	},

	escape : function( str ){
		return (new _String( str )).escape().str();
	}

};

#include "_Css.js"
#define GRADIENT_T_B	"linear,left top,left bottom"
#define GRADIENT_L_R	"linear,left top,right top"
#define GRADIENT_LT_RB	"linear,left top,right bottom"
function cssSetButton( selector, gradientType, start, end, color, shadow, flag ){
	cssSetPropertyValue( selector, "background", "-webkit-gradient(" + gradientType + ",color-stop(0%," + start + "),color-stop(100%," + end + "))" );
	cssSetPropertyValue( selector, "color", color );
	cssSetPropertyValue( selector, "text-shadow", (flag ? "1px 1px " : "-1px -1px ") + shadow );
}
function cssSetSelect( selector, gradientType, start, end, color, shadow, flag ){
	cssSetPropertyValue( selector, "background", "-webkit-gradient(" + gradientType + ",color-stop(0%," + start + "),color-stop(100%," + end + "))" );
	cssSetPropertyValue( selector, "color", color );
	if( shadow.length > 0 ){
		cssSetPropertyValue( selector, "text-shadow", (flag ? "1px 1px " : "-1px -1px ") + shadow );
	} else {
		cssSetPropertyValue( selector, "text-shadow", "0 0" );
	}
}

function initSelect( id, selectedIndex ){
	var select = document.getElementById( id );
	for( var i = 0; i < select.options.length; i++ ){
		select.options[i].selected = (i == selectedIndex) ? true : false;
	}
}

function doButtonUpFloat( id, step, max ){
	var val = parseFloat( document.getElementById( id ).value );
	if( !_ISNAN( val ) ){
		if( (max == undefined) || (val < max) ){
			val += step;
			if( (max != undefined) && (val > max) ){
				val = max;
			}
			document.getElementById( id ).value = floatToStringPoint( val );
			return true;
		}
	}
	return false;
}
function doButtonDownFloat( id, step, min ){
	var val = parseFloat( document.getElementById( id ).value );
	if( !_ISNAN( val ) ){
		if( (min == undefined) || (val > min) ){
			val -= step;
			if( (min != undefined) && (val < min) ){
				val = min;
			}
			document.getElementById( id ).value = floatToStringPoint( val );
			return true;
		}
	}
	return false;
}
function doButtonUpInt( id, step, max ){
	var val = parseInt( document.getElementById( id ).value );
	if( !_ISNAN( val ) ){
		if( (max == undefined) || (val < max) ){
			val += step;
			if( (max != undefined) && (val > max) ){
				val = max;
			}
			document.getElementById( id ).value = "" + val;
			return true;
		}
	}
	return false;
}
function doButtonDownInt( id, step, min ){
	var val = parseInt( document.getElementById( id ).value );
	if( !_ISNAN( val ) ){
		if( (min == undefined) || (val > min) ){
			val -= step;
			if( (min != undefined) && (val < min) ){
				val = min;
			}
			document.getElementById( id ).value = "" + val;
			return true;
		}
	}
	return false;
}

function printUsage( token, proc, param, isEnglish, divId ){
	var usage = new String();

	if( token == "!"   ){ usage = isEnglish ? "factorial" : "階乗"; }
	if( token == "e+"  ){ usage = isEnglish ? "exponent part of floating point constant" : "浮動小数点定数の指数部"; }
	if( token == "e-"  ){ usage = isEnglish ? "exponent part of floating point constant" : "浮動小数点定数の指数部"; }
	if( token == "d"   ){ usage = isEnglish ? "degrees" : "度"; }
	if( token == "g"   ){ usage = isEnglish ? "gradian" : "グラジアン"; }
	if( token == "r"   ){ usage = isEnglish ? "radians" : "ラジアン"; }
	if( token == "h"   ){ usage = isEnglish ? "hour" : "時"; }
	if( token == "m"   ){ usage = isEnglish ? "min" : "分"; }
	if( token == "s"   ){ usage = isEnglish ? "second" : "秒"; }
	if( token == "f"   ){ usage = isEnglish ? "frame" : "フレーム"; }
	if( token == "_"   ){ usage = isEnglish ? "fraction" : "分数"; }
	if( token == "i"   ){ usage = isEnglish ? "imaginary part of complex number" : "複素数の虚数部"; }
	if( token == ":"   ){ usage = isEnglish ? "time" : "時間"; }
	if( token == "\\b" ){ usage = isEnglish ? "in binary notation" : "2進表記"; }
	if( token == "\\0" ){ usage = isEnglish ? "octal notation" : "8進表記"; }
	if( token == "\\"  ){ usage = isEnglish ? "decimal notation" : "10進表記"; }
	if( token == "\\x" ){ usage = isEnglish ? "hexadecimal notation" : "16進表記"; }
	if( token == "\\-" ){ usage = isEnglish ? "unary minus (for constant)" : "単項マイナス(定数用)"; }
	if( token == "\\+" ){ usage = isEnglish ? "unary plus (for constant)" : "単項プラス(定数用)"; }
	if( token == "[-]" ){ usage = isEnglish ? "unary minus" : "単項マイナス"; }
	if( token == "[~]" ){ usage = isEnglish ? "complement (unary operator)" : "補数(単項演算子)"; }
	if( token == "+"   ){ usage = isEnglish ? "addition (binomial plus)" : "加算(二項プラス)"; }
	if( token == "-"   ){ usage = isEnglish ? "subtraction (binomial minus)" : "減算(二項マイナス)"; }
	if( token == "*"   ){ usage = isEnglish ? "multiplication" : "乗算"; }
	if( token == "/"   ){ usage = isEnglish ? "division" : "除算"; }
	if( token == "%"   ){ usage = isEnglish ? "modulo (remainder)" : "モジュロ(剰余)"; }
	if( token == "&"   ){ usage = isEnglish ? "bitwise logical AND" : "ビット単位の論理積"; }
	if( token == "^"   ){ usage = ((param._mode & _CLIP_MODE_INT) == 0) ? (isEnglish ? "power" : "累乗") : (isEnglish ? "bitwise exclusive OR" : "ビット単位の排他的論理和"); }
	if( token == "|"   ){ usage = isEnglish ? "inclusive logical sum of bits" : "ビット単位の内包的論理和"; }
	if( token == "<<"  ){ usage = isEnglish ? "shift left" : "左シフト"; }
	if( token == ">>"  ){ usage = isEnglish ? "shift right" : "右シフト"; }
	if( token == "("   ){ usage = isEnglish ? "beginning of parenthesis indicating priority of operation" : "演算の優先順位を示す括弧の始まり"; }
	if( token == ")"   ){ usage = isEnglish ? "end of parenthesis indicating the priority of operation" : "演算の優先順位を示す括弧の終わり"; }
	if( token == " "   ){ usage = isEnglish ? "space" : "空白"; }

	if( token == "sin "   ){ usage = "sin &lt;x&gt; : " + (isEnglish ? "sine" : "正弦"); }
	if( token == "cos "   ){ usage = "cos &lt;x&gt; : " + (isEnglish ? "cosine" : "余弦"); }
	if( token == "tan "   ){ usage = "tan &lt;x&gt; : " + (isEnglish ? "tangent" : "正接"); }
	if( token == "asin "  ){ usage = "asin &lt;x&gt; : " + (isEnglish ? "arc sine" : "逆正弦"); }
	if( token == "acos "  ){ usage = "acos &lt;x&gt; : " + (isEnglish ? "arc cosine" : "逆余弦"); }
	if( token == "atan "  ){ usage = "atan &lt;x&gt; : " + (isEnglish ? "arc tangent" : "逆正接"); }
	if( token == "sinh "  ){ usage = "sinh &lt;x&gt; : " + (isEnglish ? "hyperbolic sine" : "双曲線正弦"); }
	if( token == "cosh "  ){ usage = "cosh &lt;x&gt; : " + (isEnglish ? "hyperbolic cosine" : "双曲線余弦"); }
	if( token == "tanh "  ){ usage = "tanh &lt;x&gt; : " + (isEnglish ? "hyperbolic tangent" : "双曲線正接"); }
	if( token == "asinh " ){ usage = "asinh &lt;x&gt; : " + (isEnglish ? "inverse hyperbolic sine" : "逆双曲線正弦"); }
	if( token == "acosh " ){ usage = "acosh &lt;x&gt; : " + (isEnglish ? "inverse hyperbolic cosine" : "逆双曲線余弦"); }
	if( token == "atanh " ){ usage = "atanh &lt;x&gt; : " + (isEnglish ? "inverse hyperbolic tangent" : "逆双曲線正接"); }
	if( token == "ln "    ){ usage = "ln &lt;x&gt; : " + (isEnglish ? "natural logarithm" : "自然対数"); }
	if( token == "log "   ){ usage = "log &lt;x&gt; : " + (param._calculator ? (isEnglish ? "base 10 logarithm" : "底10の対数") : (isEnglish ? "natural logarithm" : "自然対数")); }
	if( token == "log10 " ){ usage = "log10 &lt;x&gt; : " + (isEnglish ? "base 10 logarithm" : "底10の対数"); }
	if( token == "exp "   ){ usage = "exp &lt;x&gt; : " + (isEnglish ? "exponent" : "指数"); }
	if( token == "exp10 " ){ usage = "exp10 &lt;x&gt; : " + (isEnglish ? "base 10 exponent" : "底10の指数"); }
	if( token == "sqr "   ){ usage = "sqr &lt;x&gt; : " + (isEnglish ? "squared" : "自乗"); }
	if( token == "sqrt "  ){ usage = "sqrt &lt;x&gt; : " + (isEnglish ? "square root" : "平方根"); }
	if( token == "atan2 " ){ usage = "atan2 &lt;y&gt; &lt;x&gt; : " + (isEnglish ? "arc tangent of &lt;y&gt;/&lt;x&gt;" : "&lt;y&gt;/&lt;x&gt;の逆正接"); }
	if( token == "abs "   ){ usage = "abs &lt;x&gt; : " + (isEnglish ? "absolute value" : "絶対値"); }
	if( token == "ceil "  ){ usage = "ceil &lt;x&gt; : " + (isEnglish ? "the smallest integer greater than or equal to &lt;x&gt;" : "&lt;x&gt;以上の最小の整数"); }
	if( token == "floor " ){ usage = "floor &lt;x&gt; : " + (isEnglish ? "the largest integer less than or equal to &lt;x&gt;" : "&lt;x&gt;以下の最大の整数"); }
	if( token == "int "   ){ usage = "int &lt;x&gt; : " + (isEnglish ? "integer" : "整数"); }
	if( token == "ldexp " ){ usage = "ldexp &lt;x&gt; &lt;exp&gt; : " + (isEnglish ? "calculate real numbers from mantissa &lt;x&gt; and exponent &lt;exp&gt;" : "仮数&lt;x&gt;と指数&lt;exp&gt;から実数を計算"); }
	if( token == "frexp " ){ usage = "frexp &lt;x&gt; &lt;var_exp&gt; : " + (isEnglish ? "returns the mantissa of &lt;x&gt;, stores the exponent in &lt;var_exp&gt;" : "&lt;x&gt;の仮数を返し、変数&lt;var_exp&gt;に指数を格納"); }
	if( token == "modf "  ){ usage = "modf &lt;x&gt; &lt;var_int&gt; : " + (isEnglish ? "returns the fraction part of &lt;x&gt;, stores the integer part in &lt;var_int&gt;" : "&lt;x&gt;の小数部を返し、変数&lt;var_int&gt;に整数部を格納"); }
	if( token == "pow "   ){ usage = "pow &lt;x&gt; &lt;y&gt; : " + (isEnglish ? "the &lt;y&gt; power of &lt;x&gt;" : "&lt;x&gt;の&lt;y&gt;乗"); }
	if( token == "fact "  ){ usage = "fact &lt;x&gt; : " + (isEnglish ? "factorial of &lt;x&gt;" : "&lt;x&gt;の階乗"); }
	if( token == "num "   ){ usage = "num &lt;x&gt; : " + (isEnglish ? "numerator of fraction" : "分数の分子"); }
	if( token == "denom " ){ usage = "denom &lt;x&gt; : " + (isEnglish ? "denominator of fraction" : "分数の分母"); }
	if( token == "real "  ){ usage = "real &lt;x&gt; : " + (isEnglish ? "real part of complex number" : "複素数の実数部"); }
	if( token == "imag "  ){ usage = "imag &lt;x&gt; : " + (isEnglish ? "imaginary part of complex number" : "複素数の虚数部"); }
	if( token == "arg "   ){ usage = "arg &lt;x&gt; : " + (isEnglish ? "phase angle of complex number" : "複素数の位相角度"); }
	if( token == "norm "  ){ usage = "norm &lt;x&gt; : " + (isEnglish ? "squared absolute value" : "絶対値の自乗"); }
	if( token == "conjg " ){ usage = "conjg &lt;x&gt; : " + (isEnglish ? "conjugate complex number" : "共役複素数"); }
	if( token == "polar " ){ usage = "polar &lt;rho&gt; &lt;t&gt; : " + (isEnglish ? "complex value of absolute value &lt;rho&gt; and phase angle &lt;t&gt;" : "絶対値&lt;rho&gt;、位相角度&lt;t&gt;の複素数値"); }
	if( token == "rand "  ){ usage = "rand : " + (isEnglish ? "pseudorandom number" : "疑似乱数"); }
	if( token == "time "  ){ usage = "time : " + (isEnglish ? "current time" : "現在の時刻"); }

	if( usage.length > 0 ){
		document.getElementById( divId ).innerHTML = usage;
	}

	if( (token.charAt( 0 ) == '!') && (token.charAt( token.length - 1 ) == ' ') ){
		var func = token.substring( 1, token.length - 1 );
		proc.usage( func, param, true/*キャッシュON*/ );
	}
}

function getUrlParameter( key ){
	var ret = "";
	var start = location.href.indexOf( "?" + key + "=" );
	if( start < 0 ){
		start = location.href.indexOf( "&" + key + "=" );
	}
	if( start >= 0 ){
		start += key.length + 2;
		var end = location.href.indexOf( "&", start );
		if( end < 0 ){
			end = location.href.length;
		}
		ret = location.href.substring( start, end );
	}
	return decodeURIComponent( ret );
}

#define _R		1
#define _G		2
#define _B		4
#define _RG		3//(_R | _G)
#define _RB		5//(_R | _B)
#define _GB		6//(_G | _B)
#define _ALL	7//(_R | _G | _B)
function _RGB( r, g, b ){
	if( r > 255 ) r = 255;
	if( g > 255 ) g = 255;
	if( b > 255 ) b = 255;
	if( r <   0 ) r =   0;
	if( g <   0 ) g =   0;
	if( b <   0 ) b =   0;
	return "#" + intToString( r, 16, 2 ) + intToString( g, 16, 2 ) + intToString( b, 16, 2 );
}
function RGB( r, g, b, flag ){
	this.r = r;
	this.g = g;
	this.b = b;
	this.f = (flag == undefined) ? _ALL : flag;
}
RGB.prototype = {
	get : function( add ){
		var rr = ((this.f & _R) != 0) ? add : 0;
		var gg = ((this.f & _G) != 0) ? add : 0;
		var bb = ((this.f & _B) != 0) ? add : 0;
		return _RGB( this.r + rr, this.g + gg, this.b + bb );
	}
};
var GREEN_LIGHT    = new RGB( 71,128,128);
var GREEN_DARK     = new RGB( 76, 99, 99);
var GREEN_RED      = new RGB(255, 96,112);
var GREEN_BLUE     = new RGB(112,128,255);
var GREEN_EMERALD  = new RGB( 37,218,219);
var GREEN_GRAY     = new RGB(169,169,158);
var GREEN_SELECT   = new RGB(192,192,192);
var GREEN_BG       = _RGB( 98,143,189);
var GREEN_TEXT     = _RGB(255,255,255);
var GREEN_SPAN     = _RGB(255,255,255);
var GREEN_CHECKED  = _RGB( 32,128,176);
var GRAY_LIGHT_1   = _RGB(112,112,120);
var GRAY_LIGHT_2   = _RGB(144,144,152);
var GRAY_DARK_1    = _RGB( 64, 64, 64);
var GRAY_DARK_2    = _RGB( 72, 72, 72);
var GRAY_RED_1     = _RGB(160,  0, 48);
var GRAY_RED_2     = _RGB(224,  0, 80);
var GRAY_SYSTEM    = new RGB(192,192,192);
var GRAY_SELECT    = new RGB(192,192,192);
var GRAY_BG        = _RGB( 96, 96, 96);
var GRAY_TEXT      = _RGB(224,224,224);
var GRAY_SPAN      = _RGB(255,255,255);
var GRAY_CHECKED   = _RGB( 32,128,176);
var PURPLE_BLUE_1  = _RGB(141,141,234);
var PURPLE_BLUE_2  = _RGB(100,100,141);
var PURPLE_GRAY_1  = _RGB(180,180,180);
var PURPLE_GRAY_2  = _RGB(121,121,121);
var PURPLE_SELECT  = new RGB(192,192,192);
var PURPLE_BG      = _RGB(110,110,130);
var PURPLE_TEXT    = _RGB(255,255,255);
var PURPLE_SPAN    = _RGB(255,255,255);
var PURPLE_CHECKED = _RGB( 32,128,176);
var GOLD_CHECKED   = _RGB( 32,128,176);
var SILVER_CHECKED = _RGB( 32,128,176);
var IRON_CHECKED   = _RGB( 32,128,176);
var COLOR = [
	[ 161,161,161,_ALL ],	// グレー       明:195,195,195 濃:127,127,127
	[ 160, 61, 54,_ALL ],	// ブラウン     明:185,122, 87 濃:136,  0, 21
	[ 246,101,118,_GB  ],	// レッド       明:255,174,201 濃:237, 28, 36
	[ 255,144,255,_G   ],	// ピンク
	[ 255,164, 26,_GB  ],	// オレンジ     明:255,201, 14 濃:255,127, 39
	[ 247,235, 88,_B   ],	// クリーム     明:239,228,176 濃:255,242,  0
	[ 107,203, 52,_RG  ],	// グリーン     明:181,230, 29 濃: 34,177, 76
	[  76,189,233,_RG  ],	// スカイブルー 明:153,217,234 濃:  0,162,232
	[  87,109,197,_RG  ],	// ブルー       明:112,146,190 濃: 63, 72,204
	[ 181,132,197,_RG  ],	// パープル     明:200,191,231 濃:163, 73,164
	[ 161,161,161,_ALL ]	// カスタム
];
var COLOR_LIGHT;
var COLOR_DARK;
var COLOR_SYSTEM;
var COLOR_SELECT;
var COLOR_BG;
var COLOR_CHECKED;
var IMAGE_CHECKED;
function makeColor( i, editR, editG, editB ){
	if( i == COLOR.length - 1 ){
		COLOR[i][0] = parseInt( document.getElementById( editR ).value );
		COLOR[i][1] = parseInt( document.getElementById( editG ).value );
		COLOR[i][2] = parseInt( document.getElementById( editB ).value );
		COLOR[i][3] = 0;
		if( !skinLockR ) COLOR[i][3] += _R;
		if( !skinLockG ) COLOR[i][3] += _G;
		if( !skinLockB ) COLOR[i][3] += _B;
	}

	var r = COLOR[i][0];
	var g = COLOR[i][1];
	var b = COLOR[i][2];
	COLOR_BG = _RGB( r, g, b );
	var count = 0;
	if( (COLOR[i][3] & _R) != 0 ) count++;
	if( (COLOR[i][3] & _G) != 0 ) count++;
	if( (COLOR[i][3] & _B) != 0 ) count++;
	var offset = 40 - 8 * count;
	if( (COLOR[i][3] & _R) != 0 ) r += offset;
	if( (COLOR[i][3] & _G) != 0 ) g += offset;
	if( (COLOR[i][3] & _B) != 0 ) b += offset;
	COLOR_LIGHT = new RGB( r, g, b, COLOR[i][3] );
	if( (COLOR[i][3] & _R) != 0 ) r -= offset * 2;
	if( (COLOR[i][3] & _G) != 0 ) g -= offset * 2;
	if( (COLOR[i][3] & _B) != 0 ) b -= offset * 2;
	COLOR_DARK = new RGB( r, g, b, COLOR[i][3] );
	COLOR_SYSTEM = COLOR_LIGHT;
	COLOR_SELECT = COLOR_LIGHT;
	if( (COLOR[i][3] & _R) != 0 ) r -= offset * 2;
	if( (COLOR[i][3] & _G) != 0 ) g -= offset * 2;
	if( (COLOR[i][3] & _B) != 0 ) b -= offset * 2;
	COLOR_CHECKED = _RGB( r, g, b );
	IMAGE_CHECKED = ((r == g) && (g == b)) ? _RGB( 32,128,176) : COLOR_CHECKED;
}
