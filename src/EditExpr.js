// トークン
function EditExprToken( token ){
	this._token  = token;	// トークン
	this._before = null;	// 前のトークン
	this._next   = null;	// 次のトークン
}

// 計算式の編集
function EditExpr( id ){
	this._id = id;

	this._top = null;	// トークン
	this._end = null;	// トークン
	this._num = 0;		// トークンの個数

	this._cur = null;

	this._cursor  = 0;	// カーソル位置
	this._disp    = 2;	// 表示文字数
	this._forward = 0;	//
	this._scroll  = 0;	// スクロール値

	this._selAll = false;	// 全選択

	this._firstChars = "(*/+-%[&^|<>";
}

EditExpr.prototype = {

	setDispLen : function( dspLen, fwdLen ){
		this._disp    = (dspLen < 2) ? 2 : dspLen;
		this._forward = (fwdLen < 0) ? 0 : fwdLen;
		if( this._forward >= this._disp ){
			this._forward = this._disp - 1;
		}
	},

	// リストを検索する
	_searchList : function( num ){
		if( num < 0 ){
			return false;
		}
		var tmp = 0;
		this._cur = this._top;
		while( true ){
			if( this._cur == null ){
				return false;
			}
			if( tmp == num ){
				break;
			}
			tmp++;
			this._cur = this._cur._next;
		}
		return true;
	},

	_lastChar : function( str ){
		if( str.length == 0 ){
			return '';
		}
		return str.charAt( str.length - 1 );
	},

	lastChar : function(){
		if( !this._searchList( this._cursor - 1 ) ){
			return '';
		}
		return this._lastChar( this._cur._token );
	},
	lastCharNumber : function(){
		var chr = this.lastChar();
		chr = (chr.length == 0) ? 0 : chr.charCodeAt( 0 );
		if( (chr >= _CHAR_CODE_0) && (chr <= _CHAR_CODE_9) ){
			return true;
		}
		return false;
	},
	lastCharLower : function(){
		var chr = this.lastChar();
		chr = (chr.length == 0) ? 0 : chr.charCodeAt( 0 );
		if( (chr >= _CHAR_CODE_LA) && (chr <= _CHAR_CODE_LZ) ){
			return true;
		}
		return false;
	},
	lastCharUpper : function(){
		var chr = this.lastChar();
		chr = (chr.length == 0) ? 0 : chr.charCodeAt( 0 );
		if( (chr >= _CHAR_CODE_UA) && (chr <= _CHAR_CODE_UZ) ){
			return true;
		}
		return false;
	},

	// トークンを追加する
	add : function( token ){
		if( this._selAll ){
			this.delAll();
		}

		var tmp = new EditExprToken( token );
		if( this._top == null ){
			if( token == " " ){
				// 先頭のスペースはNG
				return;
			}

			// 先頭に登録する
			this._top = tmp;
			this._end = tmp;
		} else {
			if( (token == " ") && (this._lastChar( this._end._token ) == ' ') ){
				// 連続スペースはNG
				return;
			}

			// 最後尾に追加する
			tmp._before     = this._end;
			this._end._next = tmp;
			this._end       = tmp;
		}
		this._num++;

		this._cursor = this._num;
	},

	// トークンを挿入する
	ins : function( token ){
		if( this._selAll ){
			this.delAll();
		}

		if( !this._searchList( this._cursor ) ){
			this.add( token );
			return;
		}

		if( token == " " ){
			if( this._cur._before == null ){
				// 先頭のスペースはNG
				return;
			}
			if( (this._cur._token == " ") || (this._lastChar( this._cur._before._token ) == ' ') ){
				// 連続スペースはNG
				return;
			}
		}

		var tmp = new EditExprToken( token );
		tmp._before = this._cur._before;
		tmp._next   = this._cur;
		if( this._cur._before != null ){
			this._cur._before._next = tmp;
		} else {
			this._top = tmp;
		}
		this._cur._before = tmp;
		this._num++;

		this._cursor++;
	},

	// トークンを削除する
	del : function(){
		if( this._selAll ){
			this.delAll();
			return;
		}

		if( !this._searchList( this._cursor - 1 ) ){
			this.forward();
			if( !this._searchList( this._cursor - 1 ) ){
				return;
			}
		}

		if( this._cur._before != null ){
			this._cur._before._next = this._cur._next;
		} else {
			this._top = this._cur._next;
		}
		if( this._cur._next != null ){
			this._cur._next._before = this._cur._before;
		} else {
			this._end = this._cur._before;
		}
		this._num--;

		this._cursor--;
	},

	// トークンを全削除する
	delAll : function(){
		this._top = null;
		this._num = 0;

		this._cursor = 0;
		this._scroll = 0;

		this._unsetAll();
	},

	// トークンの数を確認する
	num : function(){
		return this._num;
	},

	// トークンを確認する
	token : function( index ){
		if( this._searchList( index ) ){
			return this._cur._token;
		}
		return null;
	},

	// トークンを上書きする
	set : function( index, token ){
		if( this._searchList( index ) ){
			this._cur._token = token;
		}
	},

	// カーソルを先頭に移動させる
	top : function(){
		this._cursor = 0;

		this._unsetAll();
	},

	// カーソルを最後尾に移動させる
	end : function(){
		this._cursor = this._num;

		this._unsetAll();
	},

	// カーソルを戻す
	backward : function(){
		if( this._selAll ){
			this.top();
			return;
		}

		if( this._cursor > 0 ){
			this._cursor--;
		}
	},

	// カーソルを進める
	forward : function(){
		if( this._selAll ){
			this.end();
			return;
		}

		if( this._cursor < this._num ){
			this._cursor++;
		}
	},

	// 全選択
	_unsetAll : function(){
		if( this._selAll ){
			onEditExprUpdateSelAll( this._id, false );
		}
		this._selAll = false;
	},
	selAll : function(){
		if( !this._selAll ){
			onEditExprUpdateSelAll( this._id, true );
		}
		this._selAll = true;
	},
	isSelAll : function(){
		return this._selAll;
	},

	// 計算式を確認する
	get : function( forward/*_String*/, after/*_String*/, dispFlag ){
		if( dispFlag == undefined ){
			dispFlag = false;
		}

		var tmpToken = new _String();

		forward.set( "" );
		after  .set( "" );

		var tmp = 0;
		var cur = this._top;
		while( cur != null ){
			if( tmp < this._cursor ){
				// 末尾の空白を取り除く
				if( (this._lastChar( forward.str() ) == ' ') && (this._firstChars.indexOf( "" + cur._token.charAt( 0 ) ) >= 0) ){
					var str = forward.str();
					forward.set( str.substr( 0, str.length - 1 ) );
				}

				forward.add( cur._token );
			} else {
				// 末尾の空白を取り除く
				if( (this._lastChar( after.str() ) == ' ') && (this._firstChars.indexOf( "" + cur._token.charAt( 0 ) ) >= 0) ){
					var str = after.str();
					after.set( str.substr( 0, str.length - 1 ) );
				}

				after.add( cur._token );
			}
			tmp++;
			cur = cur._next;
		}

		if( dispFlag ){
			if( forward.str().length - this._scroll >= this._disp ){
				this._scroll = forward.str().length - (this._disp - 1);
			}
			if( forward.str().length < this._scroll + this._forward ){
				this._scroll = forward.str().length - this._forward;
				if( this._scroll < 0 ){
					this._scroll = 0;
				}
			}
			forward.set( forward.str().slice( this._scroll ) );
			after.set( after.str().substring( 0, this._disp - forward.str().length ) );
		}
	},

	// 計算式を履歴用に書き出す
	exportLog : function( expr/*_String*/ ){
		var tmpToken = new _String();

		expr.set( "" );

		var tmp = 0;
		var cur = this._top;
		while( cur != null ){
			// 最後尾のスペースを無視する
			if( cur == this._end ){
				if( cur._token == " " ){
					break;
				}
			}

			if( expr.str().length != 0 ){
				expr.add( "," );
			}

			tmpToken.set( cur._token );
			tmpToken.replace( "\\", "\\\\" );	// 重要：一番最初に行うこと！
			tmpToken.replace( "," , "\\,"  );
			expr.add( tmpToken.str() );

			tmp++;
			cur = cur._next;
		}
	},

	// 計算式を履歴から取り込む
	importLog : function( expr ){
		var token    = new String();
		var tmpToken = new _String();

		this.delAll();

		var top = 0;
		var cur = 0;
		while( cur < expr.length ){
			if( expr.charAt( cur ) == '\\' ){
				cur++;
				if( cur >= expr.length ){
					break;
				}
			} else if( expr.charAt( cur ) == ',' ){
				if( top != cur ){
					token = expr.substring( top, cur );
					tmpToken.set( token );
					tmpToken.replace( "\\," , ","  );
					tmpToken.replace( "\\\\", "\\" );	// 重要：一番最後に行うこと！
					this.add( tmpToken.str() );
				}
				top = cur + 1;
			}
			cur++;
		}
		if( top < expr.length ){
			token = expr.slice( top );
			tmpToken.set( token );
			tmpToken.replace( "\\," , ","  );
			tmpToken.replace( "\\\\", "\\" );	// 重要：一番最後に行うこと！
			this.add( tmpToken.str() );
		}
	}

};

//window.onEditExprUpdateSelAll = function( id, flag ){};
