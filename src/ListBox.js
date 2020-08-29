// オブジェクト
function ListBoxObj( obj ){
	this._obj    = obj;		// オブジェクト
	this._before = null;	// 前のオブジェクト
	this._next   = null;	// 次のオブジェクト
}

// リストボックス
function ListBox( id ){
	this._e = document.getElementById( id );

	this._top = null;	// オブジェクト
	this._end = null;	// オブジェクト
	this._num = 0;		// オブジェクトの個数

	this._index  = 0;	//
	this._line   = 1;	// 表示行数
	this._scroll = 0;	// スクロール値
}

ListBox.prototype = {

	element : function(){
		return this._e;
	},
	click : function( e, offsetY, lineHeight ){
		// 要素の上端のY座標
		var top = 0;
		var tmp = this._e;
		while( tmp ){
			top += tmp.offsetTop;
			tmp = tmp.offsetParent;
		}

		var index = _DIV( e.clientY - offsetY - top, lineHeight );
		if( index < this._line ){
			this.setIndex( this._scroll + index );
			return true;
		}
		return false;
	},

	// リストを検索する
	_searchList : function( num ){
		if( num < 0 ){
			return null;
		}
		var tmp = 0;
		var cur = this._top;
		while( true ){
			if( cur == null ){
				return null;
			}
			if( tmp == num ){
				break;
			}
			tmp++;
			cur = cur._next;
		}
		return cur;
	},

	// オブジェクトを追加する
	add : function( obj ){
		var tmp = new ListBoxObj( obj );
		if( this._top == null ){
			// 先頭に登録する
			this._top = tmp;
			this._end = tmp;
		} else {
			// 最後尾に追加する
			tmp._before     = this._end;
			this._end._next = tmp;
			this._end       = tmp;
		}
		this._num++;

		this._index = this._num - 1;
		this._updateScroll();
	},

	// オブジェクトを挿入する
	ins : function( index, obj ){
		var cur = this._searchList( index );
		if( cur == null ){
			this.add( obj );
			return;
		}

		this._index = index;
		this._updateScroll();

		var tmp = new ListBoxObj( obj );
		tmp._before = cur._before;
		tmp._next   = cur;
		if( cur._before != null ){
			cur._before._next = tmp;
		} else {
			this._top = tmp;
		}
		cur._before = tmp;

		this._num++;
	},

	// オブジェクトを削除する
	del : function( index ){
		var cur = this._searchList( index );
		if( cur == null ){
			return;
		}

		if( cur._before != null ){
			cur._before._next = cur._next;
		} else {
			this._top = cur._next;
		}
		if( cur._next != null ){
			cur._next._before = cur._before;
		} else {
			this._end = cur._before;
		}

		this._num--;

		if( this._index >= this._num ){
			this._index = this._num - 1;
		}
		if( this._index < 0 ){
			this._index = 0;
		}
		this._updateScroll();
	},

	// オブジェクトを全削除する
	delAll : function(){
		this._top = null;
		this._num = 0;

		this._index  = 0;
		this._scroll = 0;
	},

	// オブジェクトの数を確認する
	num : function(){
		return this._num;
	},

	// オブジェクトを確認する
	obj : function( index ){
		var cur = this._searchList( index );
		if( cur != null ){
			return cur._obj;
		}
		return null;
	},

	// オブジェクトを上書きする
	set : function( index, obj ){
		var cur = this._searchList( index );
		if( cur != null ){
			cur._obj = obj;
		}
	},

	setLineNum : function( lineNum ){
		this._line = lineNum;
		if( this._line < 1 ){
			this._line = 1;
		}
	},
	lineNum : function(){
		return this._line;
	},

	setIndex : function( index ){
		this._index = index;
		if( this._index >= this._num ){
			this._index = this._num - 1;
		}
		if( this._index < 0 ){
			this._index = 0;
		}
		this._updateScroll();
	},
	index : function(){
		return this._index;
	},

	_updateScroll : function(){
		if( this._index - this._scroll < 0 ){
			this._scroll = this._index;
		}
		if( this._index - this._scroll >= this._line ){
			this._scroll = this._index - (this._line - 1);
		}
	},
	scroll : function(){
		return this._scroll;
	},

	up : function(){
		if( this._index > 0 ){
			this._index--;
			this._updateScroll();
		}
	},
	down : function(){
		if( this._index < this._num - 1 ){
			this._index++;
			this._updateScroll();
		}
	}

};
