function DesktopApp( main ){
	this._main = main;

	try {
		this._extfunc = JSON.parse( this._main.fsReadExtFuncCache() );
	} catch( e ){
		this._extfunc = {};
	}
	this._extfunc_update = false;

	this._extfunc_val = "";
	this._extfunc_s   = 0;
	this._extfunc_str = "";
}

DesktopApp.prototype = {

	version : function(){
		return this._main.version();
	},
	isEnglish : function(){
		return this._main.isEnglish();
	},
	platform : function(){
		return this._main.platform();
	},

	extFuncKeyNum : function(){
		return Object.keys( this._extfunc ).length;
	},
	extFuncKey : function( index ){
		return Object.keys( this._extfunc )[index];
	},
	getExtFunc : function( key, defString ){
		var string = this._extfunc[key];
		return (string == undefined) ? defString : string;
	},

	setExtFunc : function( key, string ){
		this._extfunc[key] = string;
		this._extfunc_update = true;
	},

	clearExtFunc : function(){
		this._extfunc = {};
		this._extfunc_update = true;
		this.applyExtFunc();
	},

	beginReadExtFunc : function( key ){
		this._extfunc_val = this.getExtFunc( key, "" );
		this._extfunc_s = 0;
	},
	readExtFunc : function(){
		if( this._extfunc_s >= this._extfunc_val.length ){
			this._extfunc_str = "";
		} else {
			var e = this._extfunc_val.indexOf( "&", this._extfunc_s );
			if( e < 0 ){
				e = this._extfunc_val.length;
			}
			this._extfunc_str = this._extfunc_val.substring( this._extfunc_s, e );
			this._extfunc_s = e + 1;
		}
		return unescape( this._extfunc_str );
	},
	endReadExtFunc : function(){
		this._extfunc_val = "";
		this._extfunc_str = "";
	},

	beginWriteExtFunc : function(){
		this._extfunc_val = "";
	},
	writeExtFunc : function( str ){
		if( this._extfunc_val.length > 0 ){
			this._extfunc_val += "&";
		}
		this._extfunc_val += escape( str );
	},
	endWriteExtFunc : function( key ){
		this.setExtFunc( key, this._extfunc_val );
		this._extfunc_val = "";
	},

	applyExtFunc : function(){
		if( this._extfunc_update ){
			this._extfunc_update = false;
			this._main.fsWriteExtFuncCache( JSON.stringify( this._extfunc ) );
		}
	},

	clipboardRead : function(){
		return this._main.clipboardRead();
	},
	clipboardWrite : function( text ){
		this._main.clipboardWrite( text );
	},

	beep : function(){
		this._main.shellBeep();
	},

	readProfile : function(){
		return this._main.fsReadProfile();
	},
	writeProfile : function( text ){
		this._main.fsWriteProfile( text );
	}

};
