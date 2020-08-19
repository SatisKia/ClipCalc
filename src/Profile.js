var _preference;
var _enable_write_profile = false;
var _profile_prefix = new String();

function initProfile( useStorage ){
	_preference = new _Preference( useStorage );
}
function setEnableWriteProfile( flag ){
	_enable_write_profile = flag;
}
function setProfilePrefix( prefix ){
	_profile_prefix = prefix;
}

function getProfileString( key, subKey, defString ){
	return _preference.get( _profile_prefix + key + subKey, defString );
}
function getProfileInt( key, subKey, defValue ){
	return parseInt( getProfileString( key, subKey, "" + defValue ) );
}
function getProfileFloat( key, subKey, defValue ){
	return parseFloat( getProfileString( key, subKey, "" + defValue ) );
}

function writeProfileString( key, subKey, string ){
	if( !_enable_write_profile ){
		return;
	}
	_preference.set( _profile_prefix + key + subKey, string );
}
function writeProfileInt( key, subKey, value ){
	writeProfileString( key, subKey, "" + value );
}
function writeProfileFloat( key, subKey, value ){
	writeProfileString( key, subKey, "" + value );
}

function clearProfile( prefix ){
	_preference.clear( prefix );
}

function beginGetProfile( key ){
	_preference.beginRead( _profile_prefix + key );
}
function getProfile(){
	return _preference.read();
}
function endGetProfile(){
	_preference.endRead();
}

function beginWriteProfile(){
	if( !_enable_write_profile ){
		return;
	}
	_preference.beginWrite();
}
function writeProfile( str ){
	if( !_enable_write_profile ){
		return;
	}
	_preference.write( str );
}
function endWriteProfile( key ){
	if( !_enable_write_profile ){
		return;
	}
	_preference.endWrite( _profile_prefix + key );
}

function profileNum(){
	return _preference.num();
}
function getProfileKey( index ){
	return _preference.getKey( index );
}

function doExportProfile( textarea ){
	var i, j;

	var tmp = new Array();
	var num2 = 0;

	var num = profileNum();
	for( i = 0; i < num; i++ ){
		var key = getProfileKey( i );
		if( (key != null) && (key.indexOf( _profile_prefix ) == 0) && (key.indexOf( _profile_prefix + "TMP_" ) != 0) ){
			key = key.slice( _profile_prefix.length );
			if( key.indexOf( "FUNC_" ) == 0 ){
				var tmpValue = new _String();
				tmpValue.set( getProfileString( key, "", "" ) );
				tmpValue.replace( "\\", "¥"/*0xC2A5*/ );	// 重要：一番最初に行うこと！
				tmpValue.replace( "\t", "\\t" );
				tmpValue.replace( "\r", "\\r" );
				tmpValue.replace( "\n", "\\n" );
				tmp[num2] = key + "=" + tmpValue.str();
			} else {
				tmp[num2] = key + "=" + getProfileString( key, "", "" );
			}
			for( j = 0; j < num2; j++ ){
				if( tmp[j] == tmp[num2] ){
					break;
				}
			}
			if( j >= num2 ){
				num2++;
			}
		}
	}

	var text = new String();
	for( i = 0; i < num2; i++ ){
		text += tmp[i] + "\n";
	}
	document.getElementById( textarea ).value = text;

	doButtonUIProfile( true );
}

function splitData( data ){
	// 末尾の改行を取り除く
	var dataLen = data.length;
	while( dataLen > 0 ){
		if( !isCharEnter( data, dataLen - 1 ) ){
			break;
		}
		dataLen--;
	}
	data = data.substr( 0, dataLen );

	var data2 = new _String( data );
	data2.replaceNewLine();
	if( data2.str().indexOf( "\n" ) < 0 ){
		var tmp = new Array();
		tmp[0] = data2.str();
		return tmp;
	}
	var data3 = data2.str().split( "\n" );

	// 先頭の空白を取り除く
	for( var i = 0; i < data3.length; i++ ){
		for( var j = 0; j < data3[i].length; j++ ){
			if( !isCharSpace( data3[i], j ) && (data3[i].charAt( j ) != '\t') ){
				data3[i] = data3[i].slice( j );
				break;
			}
		}
	}

	return data3;
}
function doImportProfile( textarea ){
	var i, j, k, l;

	// 既存のURLリスト登録数
	var offset;
	for( offset = 0; ; offset++ ){
		var tmp = getProfileString( "IMAGE_PATH_", "" + (offset + 1), "" );
		if( tmp.length == 0 ){
			break;
		}
	}

	var text = document.getElementById( textarea ).value;
	var profile = splitData( text );
	for( i = 0; i < profile.length; i++ ){
		j = profile[i].indexOf( "=" );
		if( j > 0 ){
			var key   = profile[i].substring( 0, j );
			var value = profile[i].slice( j + 1 );

			// 末尾の空白を取り除く
			var valueLen = value.length;
			while( valueLen > 0 ){
				if( !isCharSpace( value, valueLen - 1 ) && (value.charAt( valueLen - 1 ) != '\t') ){
					break;
				}
				valueLen--;
			}
			value = value.substr( 0, valueLen );

			if( key.indexOf( "FUNC_" ) == 0 ){
				var tmpValue = new _String();
				tmpValue.set( value );
				tmpValue.replace( "\\t", "\t" );
				tmpValue.replace( "\\r", "\r" );
				tmpValue.replace( "\\n", "\n" );
				tmpValue.replace( "¥"/*0xC2A5*/, "\\" );	// 重要：一番最後に行うこと！
				value = tmpValue.str();
			} else if( key == "IMAGE_" ){
				var value2 = new String();
				for( k = 0; k < value.length; k++ ){
					var tmp = "" + value.charAt( k );
					if( (tmp == "%") && (k <= value.length - 3) ){
						if( (value.charAt( k + 1 ) == '7') && (value.charAt( k + 2 ) == 'B') ){
							for( l = k + 3; l < value.length; l++ ){
								if( value.charAt( l ) == '%' ){
									break;
								}
							}
							if( l - (k + 3) > 0 ){
								// 既存のURLリスト登録数を加算する
								var num = "" + (parseInt( value.substring( k + 3, l ) ) + offset);
								tmp = "%7B" + num;
								k += 2 + num.length;
							}
						}
					}
					value2 += tmp;
				}

				var oldValue = getProfileString( key, "", "" );
				if( value2.length == 0 ){
					value2 = oldValue;
				} else if( oldValue.length > 0 ){
					value2 = oldValue + "&" + value2;
				}

				value = value2;
			} else if( key.indexOf( "IMAGE_PATH_" ) == 0 ){
				// 既存のURLリスト登録数を加算する
				var num = "" + (parseInt( key.slice( 11 ) ) + offset);
				key = "IMAGE_PATH_" + num;
			} else if( key.indexOf( "IMAGE_" ) == 0 ){
				// 既存のURLリスト登録数を加算する
				var num = "" + (parseInt( key.slice( 6 ) ) + offset);
				key = "IMAGE_" + num;
			}
			writeProfileString( key, "", value );
		}
	}
	location.replace( "index.html?menu=option" );
}

function doClearStorage( button ){
	if( canUseStorage() ){
		document.getElementById( button ).disabled = true;
		clearStorage( _profile_prefix + "TMP_" );
		if( electron != null ){
			electron.clearExtFunc();
		}
		location.replace( "index.html?menu=option" );
	}
}

function doClearCookie( button ){
	if( canUseCookie() ){
		document.getElementById( button ).disabled = true;
		clearCookie( _profile_prefix + "TMP_" );
		if( electron != null ){
			electron.clearExtFunc();
		}
		location.replace( "index.html?menu=option" );
	}
}
