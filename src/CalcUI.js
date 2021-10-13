#define _UI_CALC_MODE_FLOAT		0	// 浮動小数点
#define _UI_CALC_MODE_FRACT		1	// 分数
#define _UI_CALC_MODE_MFRACT	2	// 帯分数
#define _UI_CALC_MODE_COMPLEX	3	// 複素数
#define _UI_CALC_MODE_SIGNED	4	// 符号付き
#define _UI_CALC_MODE_UNSIGNED	5	// 符号なし
#define _UI_CALC_MODE_TIME		6	// 時間

// 整数型オプション
#define _UI_CALC_BIT_8	0	// 8bit
#define _UI_CALC_BIT_16	1	// 16bit
#define _UI_CALC_BIT_32	2	// 32bit

// 時間型オプション
#define _UI_CALC_TIME_H	0	// 時
#define _UI_CALC_TIME_M	1	// 分
#define _UI_CALC_TIME_S	2	// 秒
#define _UI_CALC_TIME_F	3	// フレーム

// 三角関数オプション
#define _UI_CALC_TRIG_NORMAL	0x00
#define _UI_CALC_TRIG_INV		0x01
#define _UI_CALC_TRIG_HYP		0x02
#define _UI_CALC_TRIG_INVHYP	(_UI_CALC_TRIG_INV | _UI_CALC_TRIG_HYP)

// 桁区切り
#define _UI_CALC_SEP_OFF	0	// なし
#define _UI_CALC_SEP_UPPER	1	// 上部
#define _UI_CALC_SEP_LOWER	2	// 下部

function CalcUI( proc, param ){
	this._proc  = proc;
	this._param = param;

	this._curVar = 0;

	this._mode = _UI_CALC_MODE_FLOAT;

	// 整数型オプション
	this._bitType = _UI_CALC_BIT_32;
	this._radix   = 10;

	// 時間型オプション
	this._timeType = _UI_CALC_TIME_S;
	this._fps      = 30.0;

	// 三角関数オプション
	this._checkTrig    = _UI_CALC_TRIG_NORMAL;
	this._keepTrigFlag = false;	// [Inv][Hyp]チェック状態を保持

	// 再計算
	this._reCalcModeFlag  = true;	// 型の変更時
	this._reCalcAngleFlag = true;	// 角度の単位変更時
	this._reCalcSTOFlag   = true;	// [STO]ボタンによる変数への代入前

	this._sepType = _UI_CALC_SEP_OFF;
	this._italic  = false;

	this._funcCacheSize = -1;	// 外部関数キャッシュ・サイズ（-1で無制限）

	this._assertFlag = false;	// アサート文による診断メッセージ

	this._buttonSin   = new String();
	this._buttonCos   = new String();
	this._buttonTan   = new String();
	this._buttonLog   = new String();
	this._buttonLog10 = new String();
	this._buttonSqr   = new String();

	onCalcInitEnv( this );

	this.setMode();
	this.setFuncCacheSize();
	this.setAssertFlag();

	this.updateTrigButton();
}

CalcUI.prototype = {

	setKeepTrigFlag : function( flag ){
		this._keepTrigFlag = flag;
	},
	keepTrigFlag : function(){
		return this._keepTrigFlag;
	},

	setReCalcModeFlag : function( flag ){
		this._reCalcModeFlag = flag;
	},
	reCalcModeFlag : function(){
		return this._reCalcModeFlag;
	},

	setReCalcAngleFlag : function( flag ){
		this._reCalcAngleFlag = flag;
	},
	reCalcAngleFlag : function(){
		return this._reCalcAngleFlag;
	},

	setReCalcSTOFlag : function( flag ){
		this._reCalcSTOFlag = flag;
	},
	reCalcSTOFlag : function(){
		return this._reCalcSTOFlag;
	},

	setSepType : function( type ){
		this._sepType = type;

		// 計算結果の再表示
		onCalcPrintAns();
	},
	sepType : function(){
		return this._sepType;
	},

	setItalic : function( flag ){
		this._italic = flag;

		// 計算結果の再表示
		onCalcPrintAns();
	},
	italic : function(){
		return this._italic;
	},

	setFuncCacheSize : function( size ){
		if( size != undefined ){
			this._funcCacheSize = size;
		}

		this._proc.setFuncCacheSize( this._funcCacheSize );
	},
	funcCacheSize : function(){
		return this._funcCacheSize;
	},

	setAssertFlag : function( flag ){
		if( flag != undefined ){
			this._assertFlag = flag;
		}

		this._proc.setAssertFlag( this._assertFlag );
	},
	assertFlag : function(){
		return this._assertFlag;
	},

	setMode : function( mode ){
		if( mode != undefined ){
			this._mode = mode;
		}

		switch( this._mode ){
		case _UI_CALC_MODE_FLOAT:
			this._param.setMode( _CLIP_MODE_G_FLOAT );
			break;
		case _UI_CALC_MODE_FRACT:
			this._param.setMode( _CLIP_MODE_I_FRACT );
			break;
		case _UI_CALC_MODE_MFRACT:
			this._param.setMode( _CLIP_MODE_M_FRACT );
			break;
		case _UI_CALC_MODE_COMPLEX:
			this._param.setMode( _CLIP_MODE_G_COMPLEX );
			break;
		case _UI_CALC_MODE_SIGNED:
			switch( this._bitType ){
			case _UI_CALC_BIT_8 : this._param.setMode( _CLIP_MODE_S_CHAR  ); break;
			case _UI_CALC_BIT_16: this._param.setMode( _CLIP_MODE_S_SHORT ); break;
			case _UI_CALC_BIT_32: this._param.setMode( _CLIP_MODE_S_LONG  ); break;
			}
			break;
		case _UI_CALC_MODE_UNSIGNED:
			switch( this._bitType ){
			case _UI_CALC_BIT_8 : this._param.setMode( _CLIP_MODE_U_CHAR  ); break;
			case _UI_CALC_BIT_16: this._param.setMode( _CLIP_MODE_U_SHORT ); break;
			case _UI_CALC_BIT_32: this._param.setMode( _CLIP_MODE_U_LONG  ); break;
			}
			break;
		case _UI_CALC_MODE_TIME:
			switch( this._timeType ){
			case _UI_CALC_TIME_H: this._param.setMode( _CLIP_MODE_H_TIME ); break;
			case _UI_CALC_TIME_M: this._param.setMode( _CLIP_MODE_M_TIME ); break;
			case _UI_CALC_TIME_S: this._param.setMode( _CLIP_MODE_S_TIME ); break;
			case _UI_CALC_TIME_F: this._param.setMode( _CLIP_MODE_F_TIME ); break;
			}
			break;
		}

		if( this._reCalcModeFlag ){
			// 計算し直す
			onCalcButtonEnter();
		}
	},

	setBitType : function( type ){
		this._bitType = type;

		this.setMode();
	},
	setRadix : function( radix ){
		if( _ISNAN( radix ) ){
			radix = 10;
		} else if( radix < 2 ){
			radix = 2;
		} else if( radix > 16 ){
			radix = 16;
		}
		this._radix = radix;

		this._param.setRadix( this._radix );
	},

	setTimeType : function( type ){
		this._timeType = type;

		this.setMode();
	},
	setFps : function( fps ){
		if( _ISNAN( fps ) || (fps <= 0.0) ){
			fps = 30.0;
		}
		this._fps = fps;

		this._param.setFps( this._fps );
	},

	setAngType : function( type ){
		this._proc.setAngType( type, false );

		if( this._reCalcAngleFlag ){
			// 計算し直す
			onCalcButtonEnter();
		}
	},

	setCurVar : function( index ){
		this._curVar = index;
	},
	buttonSTO : function(){
		if( this._reCalcSTOFlag ){
			// 計算し直す
			onCalcButtonEnter();
		}

		this._param.setVal( this._curVar, this._param.val( 0 ), true );
	},
	buttonRCL : function(){
		if( this._curVar == 0 ){
			return "Ans";
		} else {
			return "@" + String.fromCharCode( this._curVar );
		}
	},
	buttonMCL : function(){
		if( !(this._param.isZero( this._curVar )) ){
			this._param.setVal( this._curVar, 0.0, true );
			if( this._curVar == 0 ){
				this._param._array.setMatrix( 0, 0.0, true );

				// 計算結果の初期化
				onCalcPrintAns();
			}
		}
	},

	updateTrigButton : function(){
		switch( this._checkTrig ){
		case _UI_CALC_TRIG_NORMAL:
			this._buttonSin = "sin";
			this._buttonCos = "cos";
			this._buttonTan = "tan";
			break;
		case _UI_CALC_TRIG_INV:
			this._buttonSin = "asin";
			this._buttonCos = "acos";
			this._buttonTan = "atan";
			break;
		case _UI_CALC_TRIG_HYP:
			this._buttonSin = "sinh";
			this._buttonCos = "cosh";
			this._buttonTan = "tanh";
			break;
		case _UI_CALC_TRIG_INVHYP:
			this._buttonSin = "asinh";
			this._buttonCos = "acosh";
			this._buttonTan = "atanh";
			break;
		}

		if( (this._checkTrig & _UI_CALC_TRIG_INV) != 0 ){
			this._buttonLog   = "exp";
			this._buttonLog10 = "exp10";
			this._buttonSqr   = "sqrt";
		} else {
			this._buttonLog   = this._param._calculator ? "ln"  : "log";
			this._buttonLog10 = this._param._calculator ? "log" : "log10";
			this._buttonSqr   = "sqr";
		}

		onCalcUpdateTrigButton( this );
	},

	clearInv : function(){
		if( (this._checkTrig & _UI_CALC_TRIG_INV) != 0 ){
			this._checkTrig -= _UI_CALC_TRIG_INV;
		}
		this.updateTrigButton();
	},
	clearInvHyp : function(){
		if( (this._checkTrig & _UI_CALC_TRIG_INV) != 0 ){
			this._checkTrig -= _UI_CALC_TRIG_INV;
		}
		if( (this._checkTrig & _UI_CALC_TRIG_HYP) != 0 ){
			this._checkTrig -= _UI_CALC_TRIG_HYP;
		}
		this.updateTrigButton();
	},

	checkInv : function(){
		if( (this._checkTrig & _UI_CALC_TRIG_INV) != 0 ){
			this._checkTrig -= _UI_CALC_TRIG_INV;
		} else {
			this._checkTrig |= _UI_CALC_TRIG_INV;
		}
		this.updateTrigButton();
	},
	checkHyp : function(){
		if( (this._checkTrig & _UI_CALC_TRIG_HYP) != 0 ){
			this._checkTrig -= _UI_CALC_TRIG_HYP;
		} else {
			this._checkTrig |= _UI_CALC_TRIG_HYP;
		}
		this.updateTrigButton();
	},

	buttonSin : function(){
		var expr = new String();
		switch( this._checkTrig ){
		case _UI_CALC_TRIG_NORMAL: expr = "sin "  ; break;
		case _UI_CALC_TRIG_INV   : expr = "asin " ; break;
		case _UI_CALC_TRIG_HYP   : expr = "sinh " ; break;
		case _UI_CALC_TRIG_INVHYP: expr = "asinh "; break;
		}
		if( !(this._keepTrigFlag) ){
			this.clearInvHyp();
		}
		return expr;
	},
	buttonCos : function(){
		var expr = new String();
		switch( this._checkTrig ){
		case _UI_CALC_TRIG_NORMAL: expr = "cos "  ; break;
		case _UI_CALC_TRIG_INV   : expr = "acos " ; break;
		case _UI_CALC_TRIG_HYP   : expr = "cosh " ; break;
		case _UI_CALC_TRIG_INVHYP: expr = "acosh "; break;
		}
		if( !(this._keepTrigFlag) ){
			this.clearInvHyp();
		}
		return expr;
	},
	buttonTan : function(){
		var expr = new String();
		switch( this._checkTrig ){
		case _UI_CALC_TRIG_NORMAL: expr = "tan "  ; break;
		case _UI_CALC_TRIG_INV   : expr = "atan " ; break;
		case _UI_CALC_TRIG_HYP   : expr = "tanh " ; break;
		case _UI_CALC_TRIG_INVHYP: expr = "atanh "; break;
		}
		if( !(this._keepTrigFlag) ){
			this.clearInvHyp();
		}
		return expr;
	},
	buttonLog : function(){
		var expr = new String();
		if( this._checkTrig & _UI_CALC_TRIG_INV ){
			expr = "exp ";
		} else {
			expr = this._param._calculator ? "ln " : "log ";
		}
		if( !(this._keepTrigFlag) ){
			this.clearInv();
		}
		return expr;
	},
	buttonLog10 : function(){
		var expr = new String();
		if( this._checkTrig & _UI_CALC_TRIG_INV ){
			expr = "exp10 ";
		} else {
			expr = this._param._calculator ? "log " : "log10 ";
		}
		if( !(this._keepTrigFlag) ){
			this.clearInv();
		}
		return expr;
	},
	buttonSqr : function(){
		var expr = new String();
		if( this._checkTrig & _UI_CALC_TRIG_INV ){
			expr = "sqrt ";
		} else {
			expr = "sqr ";
		}
		if( !(this._keepTrigFlag) ){
			this.clearInv();
		}
		return expr;
	}

};

function _addCalcEventListener( target, event, func ){
	if( !!target.addEventListener ){
		target.addEventListener( event, func, false );
	} else if( !!target.attachEvent ){
		target.attachEvent( "on" + event, func );
	} else {
		target["on" + event] = func;
	}
}
function _addCalcEventListenerById( id, event, func ){
	_addCalcEventListener( document.getElementById( id ), event, func );
}

//window.onCalcInitEnv = function( _this ){};

//window.onCalcPrintAns = function(){};
//window.onCalcButtonEnter = function(){};

//window.onCalcUpdateTrigButton = function( _this ){};
