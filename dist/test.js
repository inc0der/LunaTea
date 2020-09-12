//=============================================================================
// test.js
//=============================================================================
//=============================================================================
// Build Date: 2020-09-11 20:17:49
//=============================================================================
//=============================================================================
// Made with Kiniita -- Haxe
//=============================================================================

//=============================================================================
//  Contact Information
//=============================================================================
/*
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Old Website Link: http://endlessillusoft.com/
* New Website Link: https://kinocreates.io/ 
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this plugin helps, and enjoy!
* --Kino
*/

// Generated by Haxe 4.1.3
/**Document this comment for testing
 * Kinitta.js
 */
;(function ($hx_exports, $global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {};
class Lambda {
	static fold(it,f,first) {
		let x = $getIterator(it);
		while(x.hasNext()) first = f(x.next(),first);
		return first;
	}
}
Lambda.__name__ = true;
class Main {
	static main() {
		// Build Date: 2020-09-11 20:17:42 
		
//=============================================================================
// Kiniitta
//=============================================================================
      ;
		/*:
     @author Kino
    @plugindesc This plugin allows you to use Haxe in your RPGMakerMV code.
    @param haxeVersion
   */
		// This is a test of the watcher 
		let sceneTitleStart = Scene_Base.prototype["start"] ;
		Scene_Base.prototype["start"] = function() {
			let self = this;
			sceneTitleStart.call(self);
			_$LTGlobals_$.$gameVariables.setValue(1,3);
			Window.Haxe = "Version 4.2.0";
			console.log("src/Main.hx:29:","Running Console Log From Haxe Added haxe Version");
		};
		console.log("src/Main.hx:33:",Scene_Base.prototype.start);
		let abc = [1,2,3,4,5,10];
		Lambda.fold(abc,function(x,result) {
			result = x * 2;
			return result;
		},0);
		let result = new Array(abc.length);
		let _g = 0;
		let _g1 = abc.length;
		while(_g < _g1) {
			let i = _g++;
			result[i] = abc[i] * 2;
		}
		console.log("src/Main.hx:56:","Test comment");
	}
}
Main.__name__ = true;
class LTWinMsg extends Window_Message {
	constructor(x,y,width,height) {
		super(x,y,width,height);
	}
	initialize() {
		super.initialize();
		console.log("src/Main.hx:77:",this._background);
	}
}
LTWinMsg.__name__ = true;
Math.__name__ = true;
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
haxe_iterators_ArrayIterator.__name__ = true;
class js_Boot {
	static __string_rec(o,s) {
		if(o == null) {
			return "null";
		}
		if(s.length >= 5) {
			return "<...>";
		}
		let t = typeof(o);
		if(t == "function" && (o.__name__ || o.__ename__)) {
			t = "object";
		}
		switch(t) {
		case "function":
			return "<function>";
		case "object":
			if(o.__enum__) {
				let e = $hxEnums[o.__enum__];
				let n = e.__constructs__[o._hx_index];
				let con = e[n];
				if(con.__params__) {
					s = s + "\t";
					return n + "(" + ((function($this) {
						var $r;
						let _g = [];
						{
							let _g1 = 0;
							let _g2 = con.__params__;
							while(true) {
								if(!(_g1 < _g2.length)) {
									break;
								}
								let p = _g2[_g1];
								_g1 = _g1 + 1;
								_g.push(js_Boot.__string_rec(o[p],s));
							}
						}
						$r = _g;
						return $r;
					}(this))).join(",") + ")";
				} else {
					return n;
				}
			}
			if(((o) instanceof Array)) {
				let str = "[";
				s += "\t";
				let _g = 0;
				let _g1 = o.length;
				while(_g < _g1) {
					let i = _g++;
					str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
				}
				str += "]";
				return str;
			}
			let tostr;
			try {
				tostr = o.toString;
			} catch( _g ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				let s2 = o.toString();
				if(s2 != "[object Object]") {
					return s2;
				}
			}
			let str = "{\n";
			s += "\t";
			let hasp = o.hasOwnProperty != null;
			let k = null;
			for( k in o ) {
			if(hasp && !o.hasOwnProperty(k)) {
				continue;
			}
			if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
				continue;
			}
			if(str.length != 2) {
				str += ", \n";
			}
			str += s + k + " : " + js_Boot.__string_rec(o[k],s);
			}
			s = s.substring(1);
			str += "\n" + s + "}";
			return str;
		case "string":
			return o;
		default:
			return String(o);
		}
	}
}
js_Boot.__name__ = true;
class _$LTGlobals_$ {
}
_$LTGlobals_$.__name__ = true;
class utils_Fn {
	static proto(obj) {
		return obj.prototype;
	}
	static updateProto(obj,fn) {
		return (fn)(obj.prototype);
	}
	static updateEntity(obj,fn) {
		return (fn)(obj);
	}
}
utils_Fn.__name__ = true;
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, {});
