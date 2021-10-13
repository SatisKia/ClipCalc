#define _UI_CONV_MODE_RADIX	0	// 基数変換
#define _UI_CONV_MODE_ANGLE	1	// 角度単位変換
#define _UI_CONV_MODE_TIME	2	// 時間単位変換

#define _UI_CONV_EDIT_1		0x01
#define _UI_CONV_EDIT_2		0x02
#define _UI_CONV_EDIT_3		0x04
#define _UI_CONV_EDIT_4		0x08
#define _UI_CONV_EDIT_ALL	(_UI_CONV_EDIT_1 | _UI_CONV_EDIT_2 | _UI_CONV_EDIT_3 | _UI_CONV_EDIT_4)

function ConvUI( proc, param, isEnglish ){
	this._english = isEnglish;

	this._proc  = proc;
	this._param = param;

	this._mode = _UI_CONV_MODE_ANGLE;

	this._static1 = new String();
	this._static2 = new String();
	this._static3 = new String();
	this._static4 = new String();

	this._edit1 = new String();
	this._edit2 = new String();
	this._edit3 = new String();
	this._edit4 = new String();

	this.setMode();
}

ConvUI.prototype = {

	_setStatic : function(){
		switch( this._mode ){
		case _UI_CONV_MODE_RADIX:
			this._static1 = "BIN";
			this._static2 = "OCT";
			this._static3 = "DEC";
			this._static4 = "HEX";
			break;
		case _UI_CONV_MODE_ANGLE:
			this._static1 = "Deg";
			this._static2 = "Rad";
			this._static3 = "Grad";
			this._static4 = "";
			break;
		case _UI_CONV_MODE_TIME:
			this._static1 = this._english ? "Hour"  : "時";
			this._static2 = this._english ? "Min"   : "分";
			this._static3 = this._english ? "Sec"   : "秒";
			this._static4 = this._english ? "Frame" : "ﾌﾚｰﾑ";
			break;
		}
		onConvUpdateStatic( this );
	},

	setEnglish : function( isEnglish ){
		this._english = isEnglish;

		this._setStatic();
	},

	setMode : function( mode ){
		if( mode != undefined ){
			this._mode = mode;
		}

		this._setStatic();

		this.update();
	},

	getRadixString : function( value, radix, string/*_String*/ ){
		var param = new _Param( 0, this._param, false );

		param.setMode( this._param._mode );
		param.setRadix( radix );
		string.set( procToken().tokenString( param, _CLIP_CODE_CONSTANT, value ) );
		string.replace( "\\", "" );

		param.end();
	},

	getAngleString : function( value, oldType, newType, string/*_String*/ ){
		var param    = new _Param( 0, this._param, false );
		var tmpValue = new _Value();

		param.setMode( this._param._mode );
		param.setPrec( 0 );
		tmpValue.ass( value );
		tmpValue.angToAng( oldType, newType );
		string.set( procToken().tokenString( param, _CLIP_CODE_CONSTANT, tmpValue ) );
		string.replace( "\\", "" );

		param.end();
	},

	getTimeString : function( value, mode, string/*_String*/ ){
		switch( mode & _CLIP_MODE_MASK ){
		case _CLIP_MODE_H_TIME:
			string.set( floatToString( value.toFloat() / 3600.0 ) );
			break;
		case _CLIP_MODE_M_TIME:
			string.set( floatToString( value.toFloat() / 60.0 ) );
			break;
		case _CLIP_MODE_S_TIME:
			string.set( floatToString( value.toFloat() ) );
			break;
		case _CLIP_MODE_F_TIME:
			string.set( floatToString( value.toFloat() * this._param._fps ) );
			break;
		}
	},

	getRadixValue : function( string, radix, value/*_Value*/ ){
		var param = new _Param( 0, this._param, false );

		param.setMode( this._param._mode );
		param.setRadix( radix );
		procToken().stringToValue( param, string, value );

		param.end();
	},

	getAngleValue : function( string, oldType, newType, value/*_Value*/ ){
		var param = new _Param( 0, this._param, false );

		param.setMode( this._param._mode );
		param.setPrec( 0 );
		procToken().stringToValue( param, string, value );
		value.angToAng( oldType, newType );

		param.end();
	},

	getTimeValue : function( string, mode, value/*_Value*/ ){
		var param     = new _Param( 0, this._param, false );
		var tmpString = new String();

		tmpString = string;
		switch( mode & _CLIP_MODE_MASK ){
		case _CLIP_MODE_H_TIME: tmpString += "h"; break;
		case _CLIP_MODE_M_TIME: tmpString += "m"; break;
		case _CLIP_MODE_S_TIME: tmpString += "s"; break;
		case _CLIP_MODE_F_TIME: tmpString += "f"; break;
		}
		param.setMode( mode );
		param.setFps( this._param._fps );
		procToken().stringToValue( param, tmpString, value );

		param.end();
	},

	getValue : function( type, value/*_Value*/ ){
		switch( this._mode ){
		case _UI_CONV_MODE_RADIX:
			switch( type ){
			case _UI_CONV_EDIT_1: this.getRadixValue( this._edit1,  2, value ); break;
			case _UI_CONV_EDIT_2: this.getRadixValue( this._edit2,  8, value ); break;
			case _UI_CONV_EDIT_3: this.getRadixValue( this._edit3, 10, value ); break;
			case _UI_CONV_EDIT_4: this.getRadixValue( this._edit4, 16, value ); break;
			}
			break;
		case _UI_CONV_MODE_ANGLE:
			var angType    = new _Integer();
			var updateFlag = new _Boolean();
			this._proc.getAngType( angType, updateFlag );
			switch( type ){
			case _UI_CONV_EDIT_1: this.getAngleValue( this._edit1, _ANG_TYPE_DEG , angType._val, value ); break;
			case _UI_CONV_EDIT_2: this.getAngleValue( this._edit2, _ANG_TYPE_RAD , angType._val, value ); break;
			case _UI_CONV_EDIT_3: this.getAngleValue( this._edit3, _ANG_TYPE_GRAD, angType._val, value ); break;
			}
			break;
		case _UI_CONV_MODE_TIME:
			switch( type ){
			case _UI_CONV_EDIT_1: this.getTimeValue( this._edit1, _CLIP_MODE_H_TIME, value ); break;
			case _UI_CONV_EDIT_2: this.getTimeValue( this._edit2, _CLIP_MODE_M_TIME, value ); break;
			case _UI_CONV_EDIT_3: this.getTimeValue( this._edit3, _CLIP_MODE_S_TIME, value ); break;
			case _UI_CONV_EDIT_4: this.getTimeValue( this._edit4, _CLIP_MODE_F_TIME, value ); break;
			}
			break;
		}
	},

	update : function( value, type ){
		if( value == undefined ){
			value = this._param.val( 0 );
		}
		if( type == undefined ){
			type = _UI_CONV_EDIT_ALL;
		}

		var tmpString = new _String();
		switch( this._mode ){
		case _UI_CONV_MODE_RADIX:
			// 2進数
			if( (type & _UI_CONV_EDIT_1) != 0 ){
				this.getRadixString( value, 2, tmpString );
				this._edit1 = tmpString.str();
			}
			// 8進数
			if( (type & _UI_CONV_EDIT_2) != 0 ){
				this.getRadixString( value, 8, tmpString );
				this._edit2 = tmpString.str();
			}
			// 10進数
			if( (type & _UI_CONV_EDIT_3) != 0 ){
				this.getRadixString( value, 10, tmpString );
				this._edit3 = tmpString.str();
			}
			// 16進数
			if( (type & _UI_CONV_EDIT_4) != 0 ){
				this.getRadixString( value, 16, tmpString );
				this._edit4 = tmpString.str();
			}
			break;
		case _UI_CONV_MODE_ANGLE:
			var angType    = new _Integer();
			var updateFlag = new _Boolean();
			this._proc.getAngType( angType, updateFlag );
			// 度
			if( (type & _UI_CONV_EDIT_1) != 0 ){
				this.getAngleString( value, angType._val, _ANG_TYPE_DEG, tmpString );
				this._edit1 = tmpString.str();
			}
			// ラジアン
			if( (type & _UI_CONV_EDIT_2) != 0 ){
				this.getAngleString( value, angType._val, _ANG_TYPE_RAD, tmpString );
				this._edit2 = tmpString.str();
			}
			// グラジアン
			if( (type & _UI_CONV_EDIT_3) != 0 ){
				this.getAngleString( value, angType._val, _ANG_TYPE_GRAD, tmpString );
				this._edit3 = tmpString.str();
			}
			this._edit4 = "";
			break;
		case _UI_CONV_MODE_TIME:
			// 時
			if( (type & _UI_CONV_EDIT_1) != 0 ){
				this.getTimeString( value, _CLIP_MODE_H_TIME, tmpString );
				this._edit1 = tmpString.str();
			}
			// 分
			if( (type & _UI_CONV_EDIT_2) != 0 ){
				this.getTimeString( value, _CLIP_MODE_M_TIME, tmpString );
				this._edit2 = tmpString.str();
			}
			// 秒
			if( (type & _UI_CONV_EDIT_3) != 0 ){
				this.getTimeString( value, _CLIP_MODE_S_TIME, tmpString );
				this._edit3 = tmpString.str();
			}
			// フレーム
			if( (type & _UI_CONV_EDIT_4) != 0 ){
				this.getTimeString( value, _CLIP_MODE_F_TIME, tmpString );
				this._edit4 = tmpString.str();
			}
			break;
		}

		onConvUpdateEdit( this );
	}

};

//window.onConvUpdateStatic = function( _this ){};
//window.onConvUpdateEdit = function( _this ){};
