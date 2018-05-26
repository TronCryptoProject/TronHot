(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var tronProto = require('./src/main/genjs/TronAll_pb');
module.exports = {
  DataProto: tronProto
}
},{"./src/main/genjs/TronAll_pb":5}],2:[function(require,module,exports){
(function (global){
var $jscomp={scope:{},getGlobal:function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a}};$jscomp.global=$jscomp.getGlobal(this);$jscomp.initSymbol=function(){$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol);$jscomp.initSymbol=function(){}};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return"jscomp_symbol_"+a+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();$jscomp.global.Symbol.iterator||($jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));$jscomp.initSymbolIterator=function(){}};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();$jscomp.initSymbol();$jscomp.initSymbolIterator();var b=a[Symbol.iterator];if(b)return b.call(a);var c=0;return{next:function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}};
$jscomp.arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};$jscomp.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};$jscomp.array=$jscomp.array||{};
$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};$jscomp.initSymbol();$jscomp.initSymbolIterator();d[Symbol.iterator]=function(){return d};return d};
$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};
$jscomp.array.from=function(a,b,c){$jscomp.initSymbolIterator();b=null!=b?b:function(a){return a};var d=[];$jscomp.initSymbol();$jscomp.initSymbolIterator();var e=a[Symbol.iterator];"function"==typeof e&&(a=e.call(a));if("function"==typeof a.next)for(;!(e=a.next()).done;)d.push(b.call(c,e.value));else for(var e=a.length,f=0;f<e;f++)d.push(b.call(c,a[f]));return d};$jscomp.array.of=function(a){return $jscomp.array.from(arguments)};
$jscomp.array.entries=function(){return $jscomp.iteratorFromArray(this,function(a,b){return[a,b]})};$jscomp.array.installHelper_=function(a,b){!Array.prototype[a]&&Object.defineProperties&&Object.defineProperty&&Object.defineProperty(Array.prototype,a,{configurable:!0,enumerable:!1,writable:!0,value:b})};$jscomp.array.entries$install=function(){$jscomp.array.installHelper_("entries",$jscomp.array.entries)};$jscomp.array.keys=function(){return $jscomp.iteratorFromArray(this,function(a){return a})};
$jscomp.array.keys$install=function(){$jscomp.array.installHelper_("keys",$jscomp.array.keys)};$jscomp.array.values=function(){return $jscomp.iteratorFromArray(this,function(a,b){return b})};$jscomp.array.values$install=function(){$jscomp.array.installHelper_("values",$jscomp.array.values)};
$jscomp.array.copyWithin=function(a,b,c){var d=this.length;a=Number(a);b=Number(b);c=Number(null!=c?c:d);if(a<b)for(c=Math.min(c,d);b<c;)b in this?this[a++]=this[b++]:(delete this[a++],b++);else for(c=Math.min(c,d+b-a),a+=c-b;c>b;)--c in this?this[--a]=this[c]:delete this[a];return this};$jscomp.array.copyWithin$install=function(){$jscomp.array.installHelper_("copyWithin",$jscomp.array.copyWithin)};
$jscomp.array.fill=function(a,b,c){var d=this.length||0;0>b&&(b=Math.max(0,d+b));if(null==c||c>d)c=d;c=Number(c);0>c&&(c=Math.max(0,d+c));for(b=Number(b||0);b<c;b++)this[b]=a;return this};$jscomp.array.fill$install=function(){$jscomp.array.installHelper_("fill",$jscomp.array.fill)};$jscomp.array.find=function(a,b){return $jscomp.findInternal(this,a,b).v};$jscomp.array.find$install=function(){$jscomp.array.installHelper_("find",$jscomp.array.find)};
$jscomp.array.findIndex=function(a,b){return $jscomp.findInternal(this,a,b).i};$jscomp.array.findIndex$install=function(){$jscomp.array.installHelper_("findIndex",$jscomp.array.findIndex)};$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.Map$isConformant=function(){if($jscomp.ASSUME_NO_NATIVE_MAP)return!1;var a=$jscomp.global.Map;if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(f){return!1}};
$jscomp.Map=function(a){this.data_={};this.head_=$jscomp.Map.createHead();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}};
$jscomp.Map.prototype.set=function(a,b){var c=$jscomp.Map.maybeGetEntry(this,a);c.list||(c.list=this.data_[c.id]=[]);c.entry?c.entry.value=b:(c.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:b},c.list.push(c.entry),this.head_.previous.next=c.entry,this.head_.previous=c.entry,this.size++);return this};
$jscomp.Map.prototype["delete"]=function(a){a=$jscomp.Map.maybeGetEntry(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};$jscomp.Map.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=$jscomp.Map.createHead();this.size=0};$jscomp.Map.prototype.has=function(a){return!!$jscomp.Map.maybeGetEntry(this,a).entry};
$jscomp.Map.prototype.get=function(a){return(a=$jscomp.Map.maybeGetEntry(this,a).entry)&&a.value};$jscomp.Map.prototype.entries=function(){return $jscomp.Map.makeIterator_(this,function(a){return[a.key,a.value]})};$jscomp.Map.prototype.keys=function(){return $jscomp.Map.makeIterator_(this,function(a){return a.key})};$jscomp.Map.prototype.values=function(){return $jscomp.Map.makeIterator_(this,function(a){return a.value})};
$jscomp.Map.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};$jscomp.Map.maybeGetEntry=function(a,b){var c=$jscomp.Map.getId(b),d=a.data_[c];if(d&&Object.prototype.hasOwnProperty.call(a.data_,c))for(var e=0;e<d.length;e++){var f=d[e];if(b!==b&&f.key!==f.key||b===f.key)return{id:c,list:d,index:e,entry:f}}return{id:c,list:d,index:-1,entry:void 0}};
$jscomp.Map.makeIterator_=function(a,b){var c=a.head_,d={next:function(){if(c){for(;c.head!=a.head_;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}}};$jscomp.initSymbol();$jscomp.initSymbolIterator();d[Symbol.iterator]=function(){return d};return d};$jscomp.Map.mapIndex_=0;$jscomp.Map.createHead=function(){var a={};return a.previous=a.next=a.head=a};
$jscomp.Map.getId=function(a){if(!(a instanceof Object))return"p_"+a;if(!($jscomp.Map.idKey in a))try{$jscomp.Map.defineProperty(a,$jscomp.Map.idKey,{value:++$jscomp.Map.mapIndex_})}catch(b){}return $jscomp.Map.idKey in a?a[$jscomp.Map.idKey]:"o_ "+a};$jscomp.Map.defineProperty=Object.defineProperty?function(a,b,c){Object.defineProperty(a,b,{value:String(c)})}:function(a,b,c){a[b]=String(c)};$jscomp.Map.Entry=function(){};
$jscomp.Map$install=function(){$jscomp.initSymbol();$jscomp.initSymbolIterator();$jscomp.Map$isConformant()?$jscomp.Map=$jscomp.global.Map:($jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Map.prototype[Symbol.iterator]=$jscomp.Map.prototype.entries,$jscomp.initSymbol(),$jscomp.Map.idKey=Symbol("map-id-key"),$jscomp.Map$install=function(){})};$jscomp.math=$jscomp.math||{};
$jscomp.math.clz32=function(a){a=Number(a)>>>0;if(0===a)return 32;var b=0;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);0===(a&2147483648)&&b++;return b};$jscomp.math.imul=function(a,b){a=Number(a);b=Number(b);var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};$jscomp.math.sign=function(a){a=Number(a);return 0===a||isNaN(a)?a:0<a?1:-1};
$jscomp.math.log10=function(a){return Math.log(a)/Math.LN10};$jscomp.math.log2=function(a){return Math.log(a)/Math.LN2};$jscomp.math.log1p=function(a){a=Number(a);if(.25>a&&-.25<a){for(var b=a,c=1,d=a,e=0,f=1;e!=d;)b*=a,f*=-1,d=(e=d)+f*b/++c;return d}return Math.log(1+a)};$jscomp.math.expm1=function(a){a=Number(a);if(.25>a&&-.25<a){for(var b=a,c=1,d=a,e=0;e!=d;)b*=a/++c,d=(e=d)+b;return d}return Math.exp(a)-1};$jscomp.math.cosh=function(a){a=Number(a);return(Math.exp(a)+Math.exp(-a))/2};
$jscomp.math.sinh=function(a){a=Number(a);return 0===a?a:(Math.exp(a)-Math.exp(-a))/2};$jscomp.math.tanh=function(a){a=Number(a);if(0===a)return a;var b=Math.exp(-2*Math.abs(a)),b=(1-b)/(1+b);return 0>a?-b:b};$jscomp.math.acosh=function(a){a=Number(a);return Math.log(a+Math.sqrt(a*a-1))};$jscomp.math.asinh=function(a){a=Number(a);if(0===a)return a;var b=Math.log(Math.abs(a)+Math.sqrt(a*a+1));return 0>a?-b:b};
$jscomp.math.atanh=function(a){a=Number(a);return($jscomp.math.log1p(a)-$jscomp.math.log1p(-a))/2};$jscomp.math.hypot=function(a,b,c){a=Number(a);b=Number(b);var d,e,f,g=Math.max(Math.abs(a),Math.abs(b));for(d=2;d<arguments.length;d++)g=Math.max(g,Math.abs(arguments[d]));if(1E100<g||1E-100>g){a/=g;b/=g;f=a*a+b*b;for(d=2;d<arguments.length;d++)e=Number(arguments[d])/g,f+=e*e;return Math.sqrt(f)*g}f=a*a+b*b;for(d=2;d<arguments.length;d++)e=Number(arguments[d]),f+=e*e;return Math.sqrt(f)};
$jscomp.math.trunc=function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b};$jscomp.math.cbrt=function(a){if(0===a)return a;a=Number(a);var b=Math.pow(Math.abs(a),1/3);return 0>a?-b:b};$jscomp.number=$jscomp.number||{};$jscomp.number.isFinite=function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a};$jscomp.number.isInteger=function(a){return $jscomp.number.isFinite(a)?a===Math.floor(a):!1};
$jscomp.number.isNaN=function(a){return"number"===typeof a&&isNaN(a)};$jscomp.number.isSafeInteger=function(a){return $jscomp.number.isInteger(a)&&Math.abs(a)<=$jscomp.number.MAX_SAFE_INTEGER};$jscomp.number.EPSILON=function(){return Math.pow(2,-52)}();$jscomp.number.MAX_SAFE_INTEGER=function(){return 9007199254740991}();$jscomp.number.MIN_SAFE_INTEGER=function(){return-9007199254740991}();$jscomp.object=$jscomp.object||{};
$jscomp.object.assign=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};$jscomp.object.is=function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b};$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.Set$isConformant=function(){if($jscomp.ASSUME_NO_NATIVE_SET)return!1;var a=$jscomp.global.Set;if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([b]));if(!c.has(b)||1!=c.size||c.add(b)!=c||1!=c.size||c.add({x:4})!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||e.value[1]!=b)return!1;e=d.next();return e.done||e.value[0]==b||4!=e.value[0].x||e.value[1]!=e.value[0]?!1:d.next().done}catch(f){return!1}};
$jscomp.Set=function(a){this.map_=new $jscomp.Map;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.map_.size};$jscomp.Set.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};$jscomp.Set.prototype["delete"]=function(a){a=this.map_["delete"](a);this.size=this.map_.size;return a};$jscomp.Set.prototype.clear=function(){this.map_.clear();this.size=0};$jscomp.Set.prototype.has=function(a){return this.map_.has(a)};
$jscomp.Set.prototype.entries=function(){return this.map_.entries()};$jscomp.Set.prototype.values=function(){return this.map_.values()};$jscomp.Set.prototype.forEach=function(a,b){var c=this;this.map_.forEach(function(d){return a.call(b,d,d,c)})};$jscomp.Set$install=function(){$jscomp.Map$install();$jscomp.Set$isConformant()?$jscomp.Set=$jscomp.global.Set:($jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Set.prototype[Symbol.iterator]=$jscomp.Set.prototype.values,$jscomp.Set$install=function(){})};
$jscomp.string=$jscomp.string||{};$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
$jscomp.string.fromCodePoint=function(a){for(var b="",c=0;c<arguments.length;c++){var d=Number(arguments[c]);if(0>d||1114111<d||d!==Math.floor(d))throw new RangeError("invalid_code_point "+d);65535>=d?b+=String.fromCharCode(d):(d-=65536,b+=String.fromCharCode(d>>>10&1023|55296),b+=String.fromCharCode(d&1023|56320))}return b};
$jscomp.string.repeat=function(a){var b=$jscomp.checkStringArgs(this,null,"repeat");if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};$jscomp.string.repeat$install=function(){String.prototype.repeat||(String.prototype.repeat=$jscomp.string.repeat)};
$jscomp.string.codePointAt=function(a){var b=$jscomp.checkStringArgs(this,null,"codePointAt"),c=b.length;a=Number(a)||0;if(0<=a&&a<c){a|=0;var d=b.charCodeAt(a);if(55296>d||56319<d||a+1===c)return d;a=b.charCodeAt(a+1);return 56320>a||57343<a?d:1024*(d-55296)+a+9216}};$jscomp.string.codePointAt$install=function(){String.prototype.codePointAt||(String.prototype.codePointAt=$jscomp.string.codePointAt)};
$jscomp.string.includes=function(a,b){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,b||0)};$jscomp.string.includes$install=function(){String.prototype.includes||(String.prototype.includes=$jscomp.string.includes)};$jscomp.string.startsWith=function(a,b){var c=$jscomp.checkStringArgs(this,a,"startsWith");a+="";for(var d=c.length,e=a.length,f=Math.max(0,Math.min(b|0,c.length)),g=0;g<e&&f<d;)if(c[f++]!=a[g++])return!1;return g>=e};
$jscomp.string.startsWith$install=function(){String.prototype.startsWith||(String.prototype.startsWith=$jscomp.string.startsWith)};$jscomp.string.endsWith=function(a,b){var c=$jscomp.checkStringArgs(this,a,"endsWith");a+="";void 0===b&&(b=c.length);for(var d=Math.max(0,Math.min(b|0,c.length)),e=a.length;0<e&&0<d;)if(c[--d]!=a[--e])return!1;return 0>=e};$jscomp.string.endsWith$install=function(){String.prototype.endsWith||(String.prototype.endsWith=$jscomp.string.endsWith)};
var COMPILED=!0,goog=goog||{};goog.global=this;goog.isDef=function(a){return void 0!==a};goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};
goog.define=function(a,b){var c=b;COMPILED||(goog.global.CLOSURE_UNCOMPILED_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES,a)?c=goog.global.CLOSURE_UNCOMPILED_DEFINES[a]:goog.global.CLOSURE_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES,a)&&(c=goog.global.CLOSURE_DEFINES[a]));goog.exportPath_(a,c)};goog.DEBUG=!0;goog.LOCALE="en";goog.TRUSTED_SITE=!0;goog.STRICT_MODE_COMPATIBLE=!1;goog.DISALLOW_TEST_ONLY_CODE=COMPILED&&!goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1;goog.provide=function(a){if(!COMPILED&&goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');goog.constructNamespace_(a)};goog.constructNamespace_=function(a,b){if(!COMPILED){delete goog.implicitNamespaces_[a];for(var c=a;(c=c.substring(0,c.lastIndexOf(".")))&&!goog.getObjectByName(c);)goog.implicitNamespaces_[c]=!0}goog.exportPath_(a,b)};goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module=function(a){if(!goog.isString(a)||!a||-1==a.search(goog.VALID_MODULE_RE_))throw Error("Invalid module identifier");if(!goog.isInModuleLoader_())throw Error("Module "+a+" has been loaded incorrectly.");if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");goog.moduleLoaderState_.moduleName=a;if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a]}};goog.module.get=function(a){return goog.module.getInternal_(a)};
goog.module.getInternal_=function(a){if(!COMPILED)return goog.isProvided_(a)?a in goog.loadedModules_?goog.loadedModules_[a]:goog.getObjectByName(a):null};goog.moduleLoaderState_=null;goog.isInModuleLoader_=function(){return null!=goog.moduleLoaderState_};
goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInModuleLoader_())throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");if(!COMPILED&&!goog.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");goog.moduleLoaderState_.declareLegacyNamespace=!0};
goog.setTestOnly=function(a){if(goog.DISALLOW_TEST_ONLY_CODE)throw a=a||"",Error("Importing test-only code into non-debug environment"+(a?": "+a:"."));};goog.forwardDeclare=function(a){};COMPILED||(goog.isProvided_=function(a){return a in goog.loadedModules_||!goog.implicitNamespaces_[a]&&goog.isDefAndNotNull(goog.getObjectByName(a))},goog.implicitNamespaces_={"goog.module":!0});
goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c,d){if(goog.DEPENDENCIES_ENABLED){var e;a=a.replace(/\\/g,"/");for(var f=goog.dependencies_,g=0;e=b[g];g++)f.nameToPath[e]=a,f.pathIsModule[a]=!!d;for(d=0;b=c[d];d++)a in f.requires||(f.requires[a]={}),f.requires[a][b]=!0}};
goog.ENABLE_DEBUG_LOADER=!0;goog.logToConsole_=function(a){goog.global.console&&goog.global.console.error(a)};goog.require=function(a){if(!COMPILED){goog.ENABLE_DEBUG_LOADER&&goog.IS_OLD_IE_&&goog.maybeProcessDeferredDep_(a);if(goog.isProvided_(a))return goog.isInModuleLoader_()?goog.module.getInternal_(a):null;if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b)return goog.writeScripts_(b),null}a="goog.require could not find: "+a;goog.logToConsole_(a);throw Error(a);}};
goog.basePath="";goog.nullFunction=function(){};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];goog.LOAD_MODULE_USING_EVAL=!0;goog.SEAL_MODULE_EXPORTS=goog.DEBUG;goog.loadedModules_={};goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED&&(goog.dependencies_={pathIsModule:{},nameToPath:{},requires:{},visited:{},written:{},deferred:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return null!=a&&"write"in a},goog.findBasePath_=function(){if(goog.isDef(goog.global.CLOSURE_BASE_PATH))goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("SCRIPT"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=-1==d?c.length:
d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a,b){(goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_)(a,b)&&(goog.dependencies_.written[a]=!0)},goog.IS_OLD_IE_=!(goog.global.atob||!goog.global.document||!goog.global.document.all),goog.importModule_=function(a){goog.importScript_("",'goog.retrieveAndExecModule_("'+a+'");')&&(goog.dependencies_.written[a]=!0)},goog.queuedModules_=[],goog.wrapModule_=function(a,b){return goog.LOAD_MODULE_USING_EVAL&&
goog.isDef(goog.global.JSON)?"goog.loadModule("+goog.global.JSON.stringify(b+"\n//# sourceURL="+a+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+b+"\n;return exports});\n//# sourceURL="+a+"\n"},goog.loadQueuedModules_=function(){var a=goog.queuedModules_.length;if(0<a){var b=goog.queuedModules_;goog.queuedModules_=[];for(var c=0;c<a;c++)goog.maybeProcessDeferredPath_(b[c])}},goog.maybeProcessDeferredDep_=function(a){goog.isDeferredModule_(a)&&goog.allDepsAreAvailable_(a)&&(a=goog.getPathFromDeps_(a),
goog.maybeProcessDeferredPath_(goog.basePath+a))},goog.isDeferredModule_=function(a){return(a=goog.getPathFromDeps_(a))&&goog.dependencies_.pathIsModule[a]?goog.basePath+a in goog.dependencies_.deferred:!1},goog.allDepsAreAvailable_=function(a){if((a=goog.getPathFromDeps_(a))&&a in goog.dependencies_.requires)for(var b in goog.dependencies_.requires[a])if(!goog.isProvided_(b)&&!goog.isDeferredModule_(b))return!1;return!0},goog.maybeProcessDeferredPath_=function(a){if(a in goog.dependencies_.deferred){var b=
goog.dependencies_.deferred[a];delete goog.dependencies_.deferred[a];goog.globalEval(b)}},goog.loadModuleFromUrl=function(a){goog.retrieveAndExecModule_(a)},goog.loadModule=function(a){var b=goog.moduleLoaderState_;try{goog.moduleLoaderState_={moduleName:void 0,declareLegacyNamespace:!1};var c;if(goog.isFunction(a))c=a.call(goog.global,{});else if(goog.isString(a))c=goog.loadModuleFromSource_.call(goog.global,a);else throw Error("Invalid module definition");var d=goog.moduleLoaderState_.moduleName;
if(!goog.isString(d)||!d)throw Error('Invalid module name "'+d+'"');goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(d,c):goog.SEAL_MODULE_EXPORTS&&Object.seal&&Object.seal(c);goog.loadedModules_[d]=c}finally{goog.moduleLoaderState_=b}},goog.loadModuleFromSource_=function(a){eval(a);return{}},goog.writeScriptSrcNode_=function(a){goog.global.document.write('<script type="text/javascript" src="'+a+'">\x3c/script>')},goog.appendScriptSrcNode_=function(a){var b=goog.global.document,
c=b.createElement("script");c.type="text/javascript";c.src=a;c.defer=!1;c.async=!1;b.head.appendChild(c)},goog.writeScriptTag_=function(a,b){if(goog.inHtmlDocument_()){var c=goog.global.document;if(!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&"complete"==c.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}var d=goog.IS_OLD_IE_;void 0===b?d?(d=" onreadystatechange='goog.onScriptLoad_(this, "+ ++goog.lastNonModuleScriptIndex_+")' ",c.write('<script type="text/javascript" src="'+
a+'"'+d+">\x3c/script>")):goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING?goog.appendScriptSrcNode_(a):goog.writeScriptSrcNode_(a):c.write('<script type="text/javascript">'+b+"\x3c/script>");return!0}return!1},goog.lastNonModuleScriptIndex_=0,goog.onScriptLoad_=function(a,b){"complete"==a.readyState&&goog.lastNonModuleScriptIndex_==b&&goog.loadQueuedModules_();return!0},goog.writeScripts_=function(a){function b(a){if(!(a in e.written||a in e.visited)){e.visited[a]=!0;if(a in e.requires)for(var f in e.requires[a])if(!goog.isProvided_(f))if(f in
e.nameToPath)b(e.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);a in d||(d[a]=!0,c.push(a))}}var c=[],d={},e=goog.dependencies_;b(a);for(a=0;a<c.length;a++){var f=c[a];goog.dependencies_.written[f]=!0}var g=goog.moduleLoaderState_;goog.moduleLoaderState_=null;for(a=0;a<c.length;a++)if(f=c[a])e.pathIsModule[f]?goog.importModule_(goog.basePath+f):goog.importScript_(goog.basePath+f);else throw goog.moduleLoaderState_=g,Error("Undefined script input");goog.moduleLoaderState_=g},goog.getPathFromDeps_=
function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));goog.normalizePath_=function(a){a=a.split("/");for(var b=0;b<a.length;)"."==a[b]?a.splice(b,1):b&&".."==a[b]&&a[b-1]&&".."!=a[b-1]?a.splice(--b,2):b++;return a.join("/")};
goog.loadFileSync_=function(a){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(a);var b=new goog.global.XMLHttpRequest;b.open("get",a,!1);b.send();return b.responseText};
goog.retrieveAndExecModule_=function(a){if(!COMPILED){var b=a;a=goog.normalizePath_(a);var c=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_,d=goog.loadFileSync_(a);if(null!=d)d=goog.wrapModule_(a,d),goog.IS_OLD_IE_?(goog.dependencies_.deferred[b]=d,goog.queuedModules_.push(b)):c(a,d);else throw Error("load of "+a+"failed");}};
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(a){return!!a[goog.UID_PROPERTY_]};
goog.removeUid=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};goog.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};
goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
goog.bind=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(null==goog.evalWorksForGlobals_)if(goog.global.eval("var _evalTest_ = 1;"),"undefined"!=typeof goog.global._evalTest_){try{delete goog.global._evalTest_}catch(d){}goog.evalWorksForGlobals_=!0}else goog.evalWorksForGlobals_=!1;if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));
b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};
goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){b&&(a=a.replace(/\{\$([^}]+)}/g,function(a,d){return null!=b&&d in b?b[d]:a}));return a};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(goog.STRICT_MODE_COMPATIBLE||goog.DEBUG&&!d)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(d.superClass_){for(var e=Array(arguments.length-1),f=1;f<arguments.length;f++)e[f-1]=arguments[f];return d.superClass_.constructor.apply(a,e)}e=Array(arguments.length-2);for(f=2;f<arguments.length;f++)e[f-2]=arguments[f];for(var f=!1,g=a.constructor;g;g=
g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=!0;else if(f)return g.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};goog.scope=function(a){a.call(goog.global)};COMPILED||(goog.global.COMPILED=COMPILED);
goog.defineClass=function(a,b){var c=b.constructor,d=b.statics;c&&c!=Object.prototype.constructor||(c=function(){throw Error("cannot instantiate an interface (no constructor defined).");});c=goog.defineClass.createSealingConstructor_(c,a);a&&goog.inherits(c,a);delete b.constructor;delete b.statics;goog.defineClass.applyProperties_(c.prototype,b);null!=d&&(d instanceof Function?d(c):goog.defineClass.applyProperties_(c,d));return c};goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG;
goog.defineClass.createSealingConstructor_=function(a,b){if(goog.defineClass.SEAL_CLASS_INSTANCES&&Object.seal instanceof Function){if(b&&b.prototype&&b.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_])return a;var c=function(){var b=a.apply(this,arguments)||this;b[goog.UID_PROPERTY_]=b[goog.UID_PROPERTY_];this.constructor===c&&Object.seal(b);return b};return c}return a};goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);for(var d=0;d<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++)c=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d],Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])};goog.tagUnsealableClass=function(a){!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES&&(a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=!0)};goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";goog.dom={};goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};goog.debug={};goog.debug.Error=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a));this.reportErrorToServer=!0};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.string={};goog.string.DETECT_DOUBLE_ESCAPING=!1;goog.string.FORCE_NON_DOM_HTML_UNESCAPING=!1;goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(0,b.length))};
goog.string.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};goog.string.caseInsensitiveEquals=function(a,b){return a.toLowerCase()==b.toLowerCase()};goog.string.subs=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};
goog.string.isEmptyOrWhitespace=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.isEmptyString=function(a){return 0==a.length};goog.string.isEmpty=goog.string.isEmptyOrWhitespace;goog.string.isEmptyOrWhitespaceSafe=function(a){return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a))};goog.string.isEmptySafe=goog.string.isEmptyOrWhitespaceSafe;goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};
goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};
goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=goog.TRUSTED_SITE&&String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};
goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};goog.string.caseInsensitiveCompare=function(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1};
goog.string.numberAwareCompare_=function(a,b,c){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var d=a.toLowerCase().match(c),e=b.toLowerCase().match(c),f=Math.min(d.length,e.length),g=0;g<f;g++){c=d[g];var h=e[g];if(c!=h)return a=parseInt(c,10),!isNaN(a)&&(b=parseInt(h,10),!isNaN(b)&&a-b)?a-b:c<h?-1:1}return d.length!=e.length?d.length-e.length:a<b?-1:1};goog.string.intAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\D+/g)};
goog.string.floatAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\.\d+|\D+/g)};goog.string.numerateCompare=goog.string.floatAwareCompare;goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.htmlEscape=function(a,b){if(b)a=a.replace(goog.string.AMP_RE_,"&amp;").replace(goog.string.LT_RE_,"&lt;").replace(goog.string.GT_RE_,"&gt;").replace(goog.string.QUOT_RE_,"&quot;").replace(goog.string.SINGLE_QUOTE_RE_,"&#39;").replace(goog.string.NULL_RE_,"&#0;"),goog.string.DETECT_DOUBLE_ESCAPING&&(a=a.replace(goog.string.E_RE_,"&#101;"));else{if(!goog.string.ALL_RE_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.AMP_RE_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.LT_RE_,
"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.GT_RE_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.QUOT_RE_,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(goog.string.SINGLE_QUOTE_RE_,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(goog.string.NULL_RE_,"&#0;"));goog.string.DETECT_DOUBLE_ESCAPING&&-1!=a.indexOf("e")&&(a=a.replace(goog.string.E_RE_,"&#101;"))}return a};goog.string.AMP_RE_=/&/g;goog.string.LT_RE_=/</g;goog.string.GT_RE_=/>/g;goog.string.QUOT_RE_=/"/g;
goog.string.SINGLE_QUOTE_RE_=/'/g;goog.string.NULL_RE_=/\x00/g;goog.string.E_RE_=/e/g;goog.string.ALL_RE_=goog.string.DETECT_DOUBLE_ESCAPING?/[\x00&<>"'e]/:/[\x00&<>"']/;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?!goog.string.FORCE_NON_DOM_HTML_UNESCAPING&&"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesWithDocument=function(a,b){return goog.string.contains(a,"&")?goog.string.unescapeEntitiesUsingDom_(a,b):a};
goog.string.unescapeEntitiesUsingDom_=function(a,b){var c={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},d;d=b?b.createElement("div"):goog.global.document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,b){var g=c[a];if(g)return g;if("#"==b.charAt(0)){var h=Number("0"+b.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(d.innerHTML=a+" ",g=d.firstChild.nodeValue.slice(0,-1));return c[a]=g})};
goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.preserveSpaces=function(a){return a.replace(/(^|[\n ]) /g,"$1"+goog.string.Unicode.NBSP)};goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d;a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b,c=a.charCodeAt(0);if(31<c&&127>c)b=a;else{if(256>c){if(b="\\x",16>c||256<c)b+="0"}else b="\\u",4096>c&&(b+="0");b+=c.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=b};goog.string.contains=function(a,b){return-1!=a.indexOf(b)};
goog.string.caseInsensitiveContains=function(a,b){return goog.string.contains(a.toLowerCase(),b.toLowerCase())};goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&b<a.length&&0<c&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){var c=new RegExp(goog.string.regExpEscape(b),"");return a.replace(c,"")};
goog.string.removeAll=function(a,b){var c=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(c,"")};goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":String(a)};goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};
goog.string.compareVersions=function(a,b){for(var c=0,d=goog.string.trim(String(a)).split("."),e=goog.string.trim(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"",l=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var m=l.exec(h)||["","",""],n=p.exec(k)||["","",""];if(0==m[0].length&&0==n[0].length)break;var c=0==m[1].length?0:parseInt(m[1],10),q=0==n[1].length?0:parseInt(n[1],10),c=goog.string.compareElements_(c,q)||goog.string.compareElements_(0==
m[2].length,0==n[2].length)||goog.string.compareElements_(m[2],n[2])}while(0==c)}return c};goog.string.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};
goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmptyOrWhitespace(a)?NaN:b};goog.string.isLowerCamelCase=function(a){return/^[a-z]+([A-Z][a-z]*)*$/.test(a)};goog.string.isUpperCamelCase=function(a){return/^([A-Z][a-z]*)+$/.test(a)};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};
goog.string.toTitleCase=function(a,b){var c=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,b,c){return b+c.toUpperCase()})};goog.string.capitalize=function(a){return String(a.charAt(0)).toUpperCase()+String(a.substr(1)).toLowerCase()};goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return goog.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};
goog.string.splitLimit=function(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};goog.string.editDistance=function(a,b){var c=[],d=[];if(a==b)return 0;if(!a.length||!b.length)return Math.max(a.length,b.length);for(var e=0;e<b.length+1;e++)c[e]=e;for(e=0;e<a.length;e++){d[0]=e+1;for(var f=0;f<b.length;f++)d[f+1]=Math.min(d[f]+1,c[f+1]+1,c[f]+Number(a[e]!=b[f]));for(f=0;f<c.length;f++)c[f]=d[f]}return d[b.length]};goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){b.unshift(a);goog.debug.Error.call(this,goog.string.subs.apply(null,b));b.shift();this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.DEFAULT_ERROR_HANDLER=function(a){throw a;};goog.asserts.errorHandler_=goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);a=new goog.asserts.AssertionError(""+e,f||[]);goog.asserts.errorHandler_(a)};goog.asserts.setErrorHandler=function(a){goog.asserts.ENABLE_ASSERTS&&(goog.asserts.errorHandler_=a)};goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.fail=function(a,b){goog.asserts.ENABLE_ASSERTS&&goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))};goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertElement=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||goog.isObject(a)&&a.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){!goog.asserts.ENABLE_ASSERTS||a instanceof b||goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.",[goog.asserts.getType_(b),goog.asserts.getType_(a)],c,Array.prototype.slice.call(arguments,3));return a};goog.asserts.assertObjectPrototypeIsIntact=function(){for(var a in Object.prototype)goog.asserts.fail(a+" should not be enumerable in Object.prototype.")};
goog.asserts.getType_=function(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};var jspb={Map:function(a,b){this.arr_=a;this.valueCtor_=b;this.map_={};this.arrClean=!0;0<this.arr_.length&&this.loadFromArray_()}};jspb.Map.prototype.loadFromArray_=function(){for(var a=0;a<this.arr_.length;a++){var b=this.arr_[a],c=b[0];this.map_[c.toString()]=new jspb.Map.Entry_(c,b[1])}this.arrClean=!0};
jspb.Map.prototype.toArray=function(){if(this.arrClean){if(this.valueCtor_){var a=this.map_,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].valueWrapper;c&&c.toArray()}}}else{this.arr_.length=0;a=this.stringKeys_();a.sort();for(b=0;b<a.length;b++){var d=this.map_[a[b]];(c=d.valueWrapper)&&c.toArray();this.arr_.push([d.key,d.value])}this.arrClean=!0}return this.arr_};
jspb.Map.prototype.toObject=function(a,b){for(var c=this.toArray(),d=[],e=0;e<c.length;e++){var f=this.map_[c[e][0].toString()];this.wrapEntry_(f);var g=f.valueWrapper;g?(goog.asserts.assert(b),d.push([f.key,b(a,g)])):d.push([f.key,f.value])}return d};jspb.Map.fromObject=function(a,b,c){b=new jspb.Map([],b);for(var d=0;d<a.length;d++){var e=a[d][0],f=c(a[d][1]);b.set(e,f)}return b};jspb.Map.ArrayIteratorIterable_=function(a){this.idx_=0;this.arr_=a};
jspb.Map.ArrayIteratorIterable_.prototype.next=function(){return this.idx_<this.arr_.length?{done:!1,value:this.arr_[this.idx_++]}:{done:!0,value:void 0}};$jscomp.initSymbol();"undefined"!=typeof Symbol&&($jscomp.initSymbol(),$jscomp.initSymbolIterator(),jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator]=function(){return this});jspb.Map.prototype.getLength=function(){return this.stringKeys_().length};jspb.Map.prototype.clear=function(){this.map_={};this.arrClean=!1};
jspb.Map.prototype.del=function(a){a=a.toString();var b=this.map_.hasOwnProperty(a);delete this.map_[a];this.arrClean=!1;return b};jspb.Map.prototype.getEntryList=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,d.value])}return a};jspb.Map.prototype.entries=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,this.wrapEntry_(d)])}return new jspb.Map.ArrayIteratorIterable_(a)};
jspb.Map.prototype.keys=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.map_[b[c]].key);return new jspb.Map.ArrayIteratorIterable_(a)};jspb.Map.prototype.values=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.wrapEntry_(this.map_[b[c]]));return new jspb.Map.ArrayIteratorIterable_(a)};
jspb.Map.prototype.forEach=function(a,b){var c=this.stringKeys_();c.sort();for(var d=0;d<c.length;d++){var e=this.map_[c[d]];a.call(b,this.wrapEntry_(e),e.key,this)}};jspb.Map.prototype.set=function(a,b){var c=new jspb.Map.Entry_(a);this.valueCtor_?(c.valueWrapper=b,c.value=b.toArray()):c.value=b;this.map_[a.toString()]=c;this.arrClean=!1;return this};jspb.Map.prototype.wrapEntry_=function(a){return this.valueCtor_?(a.valueWrapper||(a.valueWrapper=new this.valueCtor_(a.value)),a.valueWrapper):a.value};
jspb.Map.prototype.get=function(a){if(a=this.map_[a.toString()])return this.wrapEntry_(a)};jspb.Map.prototype.has=function(a){return a.toString()in this.map_};jspb.Map.prototype.serializeBinary=function(a,b,c,d,e){var f=this.stringKeys_();f.sort();for(var g=0;g<f.length;g++){var h=this.map_[f[g]];b.beginSubMessage(a);c.call(b,1,h.key);this.valueCtor_?d.call(b,2,this.wrapEntry_(h),e):d.call(b,2,h.value);b.endSubMessage()}};
jspb.Map.deserializeBinary=function(a,b,c,d,e){for(var f=void 0,g=void 0;b.nextField()&&!b.isEndGroup();){var h=b.getFieldNumber();1==h?f=c.call(b):2==h&&(a.valueCtor_?(g=new a.valueCtor_,d.call(b,g,e)):g=d.call(b))}goog.asserts.assert(void 0!=f);goog.asserts.assert(void 0!=g);a.set(f,g)};jspb.Map.prototype.stringKeys_=function(){var a=this.map_,b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b};
jspb.Map.Entry_=function(a,b){this.key=a;this.value=b;this.valueWrapper=void 0};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE;goog.array.ASSUME_NATIVE_FUNCTIONS=!1;goog.array.peek=function(a){return a[a.length-1]};goog.array.last=goog.array.peek;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.indexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return goog.isString(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.lastIndexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return goog.isString(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.forEach)?function(a,b,c){goog.asserts.assert(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.filter)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.map)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};
goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduce)?function(a,b,c,d){goog.asserts.assert(null!=a.length);d&&(b=goog.bind(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduceRight)?function(a,b,c,d){goog.asserts.assert(null!=a.length);goog.asserts.assert(null!=b);d&&(b=goog.bind(b,d));return Array.prototype.reduceRight.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.some)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.every)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.count=function(a,b,c){var d=0;goog.array.forEach(a,function(a,f,g){b.call(c,a,f,g)&&++d},c);return d};
goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndexRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};
goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){var c=goog.array.indexOf(a,b),d;(d=0<=c)&&goog.array.removeAt(a,c);return d};
goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.removeAllIf=function(a,b,c){var d=0;goog.array.forEachRight(a,function(e,f){b.call(c,e,f,a)&&goog.array.removeAt(a,f)&&d++});return d};goog.array.concat=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)};
goog.array.join=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(goog.isArrayLike(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};
goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return Array.prototype.splice.apply(a,goog.array.slice(arguments,1))};goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
goog.array.removeDuplicates=function(a,b,c){b=b||a;var d=function(a){return goog.isObject(a)?"o"+goog.getUid(a):(typeof a).charAt(0)+a};c=c||d;for(var d={},e=0,f=0;f<a.length;){var g=a[f++],h=c(g);Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,b[e++]=g)}b.length=e};goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};
goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var k=f+g>>1,l;l=c?b.call(e,a[k],k,a):b(d,a[k]);0<l?f=k+1:(g=k,h=!l)}return h?f:~f};goog.array.sort=function(a,b){a.sort(b||goog.array.defaultCompare)};goog.array.stableSort=function(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||goog.array.defaultCompare;goog.array.sort(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value};
goog.array.sortByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(b(a),b(c))})};goog.array.sortObjectsByKey=function(a,b,c){goog.array.sortByKey(a,function(a){return a[b]},c)};goog.array.isSorted=function(a,b,c){b=b||goog.array.defaultCompare;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};
goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;var d=a.length;c=c||goog.array.defaultCompareEquality;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};goog.array.compare3=function(a,b,c){c=c||goog.array.defaultCompare;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};
goog.array.inverseDefaultCompare=function(a,b){return-goog.array.defaultCompare(a,b)};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};
goog.array.bucket=function(a,b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=b.call(c,f,e,a);goog.isDef(g)&&(d[g]||(d[g]=[])).push(f)}return d};goog.array.toObject=function(a,b,c){var d={};goog.array.forEach(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};goog.array.range=function(a,b,c){var d=[],e=0,f=a;c=c||1;void 0!==b&&(e=a,f=b);if(0>c*(f-e))return[];if(0<c)for(a=e;a<f;a+=c)d.push(a);else for(a=e;a>f;a+=c)d.push(a);return d};
goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(goog.isArray(d))for(var e=0;e<d.length;e+=8192)for(var f=goog.array.slice(d,e,e+8192),f=goog.array.flatten.apply(null,f),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b};
goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?Array.prototype.unshift.apply(a,a.splice(-b,b)):0>b&&Array.prototype.push.apply(a,a.splice(0,-b)));return a};goog.array.moveItem=function(a,b,c){goog.asserts.assert(0<=b&&b<a.length);goog.asserts.assert(0<=c&&c<a.length);b=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,c,0,b[0])};
goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=arguments[0].length,d=1;d<arguments.length;d++)arguments[d].length<c&&(c=arguments[d].length);for(d=0;d<c;d++){for(var e=[],f=0;f<arguments.length;f++)e.push(arguments[f][d]);b.push(e)}return b};goog.array.shuffle=function(a,b){for(var c=b||Math.random,d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=a[d];a[d]=a[e];a[e]=f}};goog.array.copyByIndex=function(a,b){var c=[];goog.array.forEach(b,function(b){c.push(a[b])});return c};goog.crypt={};goog.crypt.stringToByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){for(var e=a.charCodeAt(d);255<e;)b[c++]=e&255,e>>=8;b[c++]=e}return b};goog.crypt.byteArrayToString=function(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192)var d=goog.array.slice(a,c,c+8192),b=b+String.fromCharCode.apply(null,d);return b};goog.crypt.byteArrayToHex=function(a){return goog.array.map(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};
goog.crypt.hexToByteArray=function(a){goog.asserts.assert(0==a.length%2,"Key string length must be multiple of 2");for(var b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substring(c,c+2),16));return b};
goog.crypt.stringToUtf8ByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};
goog.crypt.utf8ByteArrayToString=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){var f=a[c++],g=a[c++],h=a[c++],e=((e&7)<<18|(f&63)<<12|(g&63)<<6|h&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],g=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63)}return b.join("")};
goog.crypt.xorByteArray=function(a,b){goog.asserts.assert(a.length==b.length,"XOR array lengths must match");for(var c=[],d=0;d<a.length;d++)c.push(a[d]^b[d]);return c};goog.labs={};goog.labs.userAgent={};goog.labs.userAgent.util={};goog.labs.userAgent.util.getNativeUserAgentString_=function(){var a=goog.labs.userAgent.util.getNavigator_();return a&&(a=a.userAgent)?a:""};goog.labs.userAgent.util.getNavigator_=function(){return goog.global.navigator};goog.labs.userAgent.util.userAgent_=goog.labs.userAgent.util.getNativeUserAgentString_();goog.labs.userAgent.util.setUserAgent=function(a){goog.labs.userAgent.util.userAgent_=a||goog.labs.userAgent.util.getNativeUserAgentString_()};
goog.labs.userAgent.util.getUserAgent=function(){return goog.labs.userAgent.util.userAgent_};goog.labs.userAgent.util.matchUserAgent=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.contains(b,a)};goog.labs.userAgent.util.matchUserAgentIgnoreCase=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.caseInsensitiveContains(b,a)};
goog.labs.userAgent.util.extractVersionTuples=function(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};goog.labs.userAgent.platform={};goog.labs.userAgent.platform.isAndroid=function(){return goog.labs.userAgent.util.matchUserAgent("Android")};goog.labs.userAgent.platform.isIpod=function(){return goog.labs.userAgent.util.matchUserAgent("iPod")};goog.labs.userAgent.platform.isIphone=function(){return goog.labs.userAgent.util.matchUserAgent("iPhone")&&!goog.labs.userAgent.util.matchUserAgent("iPod")&&!goog.labs.userAgent.util.matchUserAgent("iPad")};goog.labs.userAgent.platform.isIpad=function(){return goog.labs.userAgent.util.matchUserAgent("iPad")};
goog.labs.userAgent.platform.isIos=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpad()||goog.labs.userAgent.platform.isIpod()};goog.labs.userAgent.platform.isMacintosh=function(){return goog.labs.userAgent.util.matchUserAgent("Macintosh")};goog.labs.userAgent.platform.isLinux=function(){return goog.labs.userAgent.util.matchUserAgent("Linux")};goog.labs.userAgent.platform.isWindows=function(){return goog.labs.userAgent.util.matchUserAgent("Windows")};
goog.labs.userAgent.platform.isChromeOS=function(){return goog.labs.userAgent.util.matchUserAgent("CrOS")};
goog.labs.userAgent.platform.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent(),b="";goog.labs.userAgent.platform.isWindows()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):goog.labs.userAgent.platform.isIos()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):goog.labs.userAgent.platform.isMacintosh()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):goog.labs.userAgent.platform.isAndroid()?(b=/Android\s+([^\);]+)(\)|;)/,
b=(a=b.exec(a))&&a[1]):goog.labs.userAgent.platform.isChromeOS()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);return b||""};goog.labs.userAgent.platform.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(),a)};goog.object={};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};
goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
goog.object.getValueByKeys=function(a,b){for(var c=goog.isArrayLike(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],goog.isDef(a));c++);return a};goog.object.containsKey=function(a,b){return null!==a&&b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};
goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return null!==a&&b in a?a[b]:c};goog.object.set=function(a,b,c){a[b]=c};
goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};goog.object.setWithReturnValueIfNotSet=function(a,b,c){if(b in a)return a[b];c=c();return a[b]=c};goog.object.equals=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(goog.isFunction(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
goog.object.createImmutableView=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};goog.object.isImmutableView=function(a){return!!Object.isFrozen&&Object.isFrozen(a)};goog.labs.userAgent.browser={};goog.labs.userAgent.browser.matchOpera_=function(){return goog.labs.userAgent.util.matchUserAgent("Opera")||goog.labs.userAgent.util.matchUserAgent("OPR")};goog.labs.userAgent.browser.matchIE_=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.browser.matchEdge_=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};goog.labs.userAgent.browser.matchFirefox_=function(){return goog.labs.userAgent.util.matchUserAgent("Firefox")};
goog.labs.userAgent.browser.matchSafari_=function(){return goog.labs.userAgent.util.matchUserAgent("Safari")&&!(goog.labs.userAgent.browser.matchChrome_()||goog.labs.userAgent.browser.matchCoast_()||goog.labs.userAgent.browser.matchOpera_()||goog.labs.userAgent.browser.matchEdge_()||goog.labs.userAgent.browser.isSilk()||goog.labs.userAgent.util.matchUserAgent("Android"))};goog.labs.userAgent.browser.matchCoast_=function(){return goog.labs.userAgent.util.matchUserAgent("Coast")};
goog.labs.userAgent.browser.matchIosWebview_=function(){return(goog.labs.userAgent.util.matchUserAgent("iPad")||goog.labs.userAgent.util.matchUserAgent("iPhone"))&&!goog.labs.userAgent.browser.matchSafari_()&&!goog.labs.userAgent.browser.matchChrome_()&&!goog.labs.userAgent.browser.matchCoast_()&&goog.labs.userAgent.util.matchUserAgent("AppleWebKit")};
goog.labs.userAgent.browser.matchChrome_=function(){return(goog.labs.userAgent.util.matchUserAgent("Chrome")||goog.labs.userAgent.util.matchUserAgent("CriOS"))&&!goog.labs.userAgent.browser.matchOpera_()&&!goog.labs.userAgent.browser.matchEdge_()};goog.labs.userAgent.browser.matchAndroidBrowser_=function(){return goog.labs.userAgent.util.matchUserAgent("Android")&&!(goog.labs.userAgent.browser.isChrome()||goog.labs.userAgent.browser.isFirefox()||goog.labs.userAgent.browser.isOpera()||goog.labs.userAgent.browser.isSilk())};
goog.labs.userAgent.browser.isOpera=goog.labs.userAgent.browser.matchOpera_;goog.labs.userAgent.browser.isIE=goog.labs.userAgent.browser.matchIE_;goog.labs.userAgent.browser.isEdge=goog.labs.userAgent.browser.matchEdge_;goog.labs.userAgent.browser.isFirefox=goog.labs.userAgent.browser.matchFirefox_;goog.labs.userAgent.browser.isSafari=goog.labs.userAgent.browser.matchSafari_;goog.labs.userAgent.browser.isCoast=goog.labs.userAgent.browser.matchCoast_;goog.labs.userAgent.browser.isIosWebview=goog.labs.userAgent.browser.matchIosWebview_;
goog.labs.userAgent.browser.isChrome=goog.labs.userAgent.browser.matchChrome_;goog.labs.userAgent.browser.isAndroidBrowser=goog.labs.userAgent.browser.matchAndroidBrowser_;goog.labs.userAgent.browser.isSilk=function(){return goog.labs.userAgent.util.matchUserAgent("Silk")};
goog.labs.userAgent.browser.getVersion=function(){function a(a){a=goog.array.find(a,d);return c[a]||""}var b=goog.labs.userAgent.util.getUserAgent();if(goog.labs.userAgent.browser.isIE())return goog.labs.userAgent.browser.getIEVersion_(b);var b=goog.labs.userAgent.util.extractVersionTuples(b),c={};goog.array.forEach(b,function(a){c[a[0]]=a[1]});var d=goog.partial(goog.object.containsKey,c);return goog.labs.userAgent.browser.isOpera()?a(["Version","Opera","OPR"]):goog.labs.userAgent.browser.isEdge()?
a(["Edge"]):goog.labs.userAgent.browser.isChrome()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""};goog.labs.userAgent.browser.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(),a)};
goog.labs.userAgent.browser.getIEVersion_=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];var b="",c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};goog.labs.userAgent.engine={};goog.labs.userAgent.engine.isPresto=function(){return goog.labs.userAgent.util.matchUserAgent("Presto")};goog.labs.userAgent.engine.isTrident=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.engine.isEdge=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};
goog.labs.userAgent.engine.isWebKit=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")&&!goog.labs.userAgent.engine.isEdge()};goog.labs.userAgent.engine.isGecko=function(){return goog.labs.userAgent.util.matchUserAgent("Gecko")&&!goog.labs.userAgent.engine.isWebKit()&&!goog.labs.userAgent.engine.isTrident()&&!goog.labs.userAgent.engine.isEdge()};
goog.labs.userAgent.engine.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent();if(a){var a=goog.labs.userAgent.util.extractVersionTuples(a),b=goog.labs.userAgent.engine.getEngineTuple_(a);if(b)return"Gecko"==b[0]?goog.labs.userAgent.engine.getVersionForKey_(a,"Firefox"):b[1];var a=a[0],c;if(a&&(c=a[2])&&(c=/Trident\/([^\s;]+)/.exec(c)))return c[1]}return""};
goog.labs.userAgent.engine.getEngineTuple_=function(a){if(!goog.labs.userAgent.engine.isEdge())return a[1];for(var b=0;b<a.length;b++){var c=a[b];if("Edge"==c[0])return c}};goog.labs.userAgent.engine.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(),a)};goog.labs.userAgent.engine.getVersionForKey_=function(a,b){var c=goog.array.find(a,function(a){return b==a[0]});return c&&c[1]||""};goog.userAgent={};goog.userAgent.ASSUME_IE=!1;goog.userAgent.ASSUME_EDGE=!1;goog.userAgent.ASSUME_GECKO=!1;goog.userAgent.ASSUME_WEBKIT=!1;goog.userAgent.ASSUME_MOBILE_WEBKIT=!1;goog.userAgent.ASSUME_OPERA=!1;goog.userAgent.ASSUME_ANY_VERSION=!1;goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA;goog.userAgent.getUserAgentString=function(){return goog.labs.userAgent.util.getUserAgent()};
goog.userAgent.getNavigator=function(){return goog.global.navigator||null};goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.labs.userAgent.browser.isOpera();goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.labs.userAgent.browser.isIE();goog.userAgent.EDGE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_EDGE:goog.labs.userAgent.engine.isEdge();goog.userAgent.EDGE_OR_IE=goog.userAgent.EDGE||goog.userAgent.IE;
goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.labs.userAgent.engine.isGecko();goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.labs.userAgent.engine.isWebKit();goog.userAgent.isMobile_=function(){return goog.userAgent.WEBKIT&&goog.labs.userAgent.util.matchUserAgent("Mobile")};goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.isMobile_();goog.userAgent.SAFARI=goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_=function(){var a=goog.userAgent.getNavigator();return a&&a.platform||""};goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_();goog.userAgent.ASSUME_MAC=!1;goog.userAgent.ASSUME_WINDOWS=!1;goog.userAgent.ASSUME_LINUX=!1;goog.userAgent.ASSUME_X11=!1;goog.userAgent.ASSUME_ANDROID=!1;goog.userAgent.ASSUME_IPHONE=!1;goog.userAgent.ASSUME_IPAD=!1;
goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11||goog.userAgent.ASSUME_ANDROID||goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD;goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.labs.userAgent.platform.isMacintosh();goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.labs.userAgent.platform.isWindows();
goog.userAgent.isLegacyLinux_=function(){return goog.labs.userAgent.platform.isLinux()||goog.labs.userAgent.platform.isChromeOS()};goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.isLegacyLinux_();goog.userAgent.isX11_=function(){var a=goog.userAgent.getNavigator();return!!a&&goog.string.contains(a.appVersion||"","X11")};goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.isX11_();
goog.userAgent.ANDROID=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_ANDROID:goog.labs.userAgent.platform.isAndroid();goog.userAgent.IPHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE:goog.labs.userAgent.platform.isIphone();goog.userAgent.IPAD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();goog.userAgent.operaVersion_=function(){var a=goog.global.opera.version;try{return a()}catch(b){return a}};
goog.userAgent.determineVersion_=function(){if(goog.userAgent.OPERA&&goog.global.opera)return goog.userAgent.operaVersion_();var a="",b=goog.userAgent.getVersionRegexResult_();b&&(a=b?b[1]:"");return goog.userAgent.IE&&(b=goog.userAgent.getDocumentMode_(),b>parseFloat(a))?String(b):a};
goog.userAgent.getVersionRegexResult_=function(){var a=goog.userAgent.getUserAgentString();if(goog.userAgent.GECKO)return/rv\:([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.EDGE)return/Edge\/([\d\.]+)/.exec(a);if(goog.userAgent.IE)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.WEBKIT)return/WebKit\/(\S+)/.exec(a)};goog.userAgent.getDocumentMode_=function(){var a=goog.global.document;return a?a.documentMode:void 0};goog.userAgent.VERSION=goog.userAgent.determineVersion_();
goog.userAgent.compare=function(a,b){return goog.string.compareVersions(a,b)};goog.userAgent.isVersionOrHigherCache_={};goog.userAgent.isVersionOrHigher=function(a){return goog.userAgent.ASSUME_ANY_VERSION||goog.userAgent.isVersionOrHigherCache_[a]||(goog.userAgent.isVersionOrHigherCache_[a]=0<=goog.string.compareVersions(goog.userAgent.VERSION,a))};goog.userAgent.isVersion=goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher=function(a){return Number(goog.userAgent.DOCUMENT_MODE)>=a};goog.userAgent.isDocumentMode=goog.userAgent.isDocumentModeOrHigher;goog.userAgent.DOCUMENT_MODE=function(){var a=goog.global.document,b=goog.userAgent.getDocumentMode_();return a&&goog.userAgent.IE?b||("CSS1Compat"==a.compatMode?parseInt(goog.userAgent.VERSION,10):5):void 0}();goog.userAgent.product={};goog.userAgent.product.ASSUME_FIREFOX=!1;goog.userAgent.product.ASSUME_IPHONE=!1;goog.userAgent.product.ASSUME_IPAD=!1;goog.userAgent.product.ASSUME_ANDROID=!1;goog.userAgent.product.ASSUME_CHROME=!1;goog.userAgent.product.ASSUME_SAFARI=!1;
goog.userAgent.product.PRODUCT_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_OPERA||goog.userAgent.product.ASSUME_FIREFOX||goog.userAgent.product.ASSUME_IPHONE||goog.userAgent.product.ASSUME_IPAD||goog.userAgent.product.ASSUME_ANDROID||goog.userAgent.product.ASSUME_CHROME||goog.userAgent.product.ASSUME_SAFARI;goog.userAgent.product.OPERA=goog.userAgent.OPERA;goog.userAgent.product.IE=goog.userAgent.IE;goog.userAgent.product.EDGE=goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_FIREFOX:goog.labs.userAgent.browser.isFirefox();goog.userAgent.product.isIphoneOrIpod_=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpod()};goog.userAgent.product.IPHONE=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPHONE:goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();goog.userAgent.product.ANDROID=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_ANDROID:goog.labs.userAgent.browser.isAndroidBrowser();goog.userAgent.product.CHROME=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_CHROME:goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_=function(){return goog.labs.userAgent.browser.isSafari()&&!goog.labs.userAgent.platform.isIos()};goog.userAgent.product.SAFARI=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_SAFARI:goog.userAgent.product.isSafariDesktop_();goog.crypt.base64={};goog.crypt.base64.byteToCharMap_=null;goog.crypt.base64.charToByteMap_=null;goog.crypt.base64.byteToCharMapWebSafe_=null;goog.crypt.base64.ENCODED_VALS_BASE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";goog.crypt.base64.ENCODED_VALS=goog.crypt.base64.ENCODED_VALS_BASE+"+/=";goog.crypt.base64.ENCODED_VALS_WEBSAFE=goog.crypt.base64.ENCODED_VALS_BASE+"-_.";
goog.crypt.base64.ASSUME_NATIVE_SUPPORT_=goog.userAgent.GECKO||goog.userAgent.WEBKIT&&!goog.userAgent.product.SAFARI||goog.userAgent.OPERA;goog.crypt.base64.HAS_NATIVE_ENCODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||"function"==typeof goog.global.btoa;goog.crypt.base64.HAS_NATIVE_DECODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||!goog.userAgent.product.SAFARI&&!goog.userAgent.IE&&"function"==typeof goog.global.atob;
goog.crypt.base64.encodeByteArray=function(a,b){goog.asserts.assert(goog.isArrayLike(a),"encodeByteArray takes an array as a parameter");goog.crypt.base64.init_();for(var c=b?goog.crypt.base64.byteToCharMapWebSafe_:goog.crypt.base64.byteToCharMap_,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,h=g?a[e+1]:0,k=e+2<a.length,l=k?a[e+2]:0,p=f>>2,f=(f&3)<<4|h>>4,h=(h&15)<<2|l>>6,l=l&63;k||(l=64,g||(h=64));d.push(c[p],c[f],c[h],c[l])}return d.join("")};
goog.crypt.base64.encodeString=function(a,b){return goog.crypt.base64.HAS_NATIVE_ENCODE_&&!b?goog.global.btoa(a):goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a),b)};goog.crypt.base64.decodeString=function(a,b){if(goog.crypt.base64.HAS_NATIVE_DECODE_&&!b)return goog.global.atob(a);var c="";goog.crypt.base64.decodeStringInternal_(a,function(a){c+=String.fromCharCode(a)});return c};
goog.crypt.base64.decodeStringToByteArray=function(a,b){var c=[];goog.crypt.base64.decodeStringInternal_(a,function(a){c.push(a)});return c};goog.crypt.base64.decodeStringToUint8Array=function(a){goog.asserts.assert(!goog.userAgent.IE||goog.userAgent.isVersionOrHigher("10"),"Browser does not support typed arrays");var b=new Uint8Array(Math.ceil(3*a.length/4)),c=0;goog.crypt.base64.decodeStringInternal_(a,function(a){b[c++]=a});return b.subarray(0,c)};
goog.crypt.base64.decodeStringInternal_=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=goog.crypt.base64.charToByteMap_[c];if(null!=e)return e;if(!goog.string.isEmptyOrWhitespace(c))throw Error("Unknown base64 encoding at char: "+c);}return b}goog.crypt.base64.init_();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}};
goog.crypt.base64.init_=function(){if(!goog.crypt.base64.byteToCharMap_){goog.crypt.base64.byteToCharMap_={};goog.crypt.base64.charToByteMap_={};goog.crypt.base64.byteToCharMapWebSafe_={};for(var a=0;a<goog.crypt.base64.ENCODED_VALS.length;a++)goog.crypt.base64.byteToCharMap_[a]=goog.crypt.base64.ENCODED_VALS.charAt(a),goog.crypt.base64.charToByteMap_[goog.crypt.base64.byteToCharMap_[a]]=a,goog.crypt.base64.byteToCharMapWebSafe_[a]=goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(a),a>=goog.crypt.base64.ENCODED_VALS_BASE.length&&
(goog.crypt.base64.charToByteMap_[goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(a)]=a)}};jspb.ExtensionFieldInfo=function(a,b,c,d,e){this.fieldIndex=a;this.fieldName=b;this.ctor=c;this.toObjectFn=d;this.isRepeated=e};jspb.ExtensionFieldBinaryInfo=function(a,b,c,d,e,f){this.fieldInfo=a;this.binaryReaderFn=b;this.binaryWriterFn=c;this.binaryMessageSerializeFn=d;this.binaryMessageDeserializeFn=e;this.isPacked=f};jspb.ExtensionFieldInfo.prototype.isMessageType=function(){return!!this.ctor};jspb.Message=function(){};jspb.Message.GENERATE_TO_OBJECT=!0;jspb.Message.GENERATE_FROM_OBJECT=!goog.DISALLOW_TEST_ONLY_CODE;
jspb.Message.GENERATE_TO_STRING=!0;jspb.Message.ASSUME_LOCAL_ARRAYS=!1;jspb.Message.MINIMIZE_MEMORY_ALLOCATIONS=COMPILED;jspb.Message.SUPPORTS_UINT8ARRAY_="function"==typeof Uint8Array;jspb.Message.prototype.getJsPbMessageId=function(){return this.messageId_};jspb.Message.getIndex_=function(a,b){return b+a.arrayIndexOffset_};
jspb.Message.initialize=function(a,b,c,d,e,f){a.wrappers_=jspb.Message.MINIMIZE_MEMORY_ALLOCATIONS?null:{};b||(b=c?[c]:[]);a.messageId_=c?String(c):void 0;a.arrayIndexOffset_=0===c?-1:0;a.array=b;jspb.Message.initPivotAndExtensionObject_(a,d);a.convertedFloatingPointFields_={};if(e)for(b=0;b<e.length;b++)c=e[b],c<a.pivot_?(c=jspb.Message.getIndex_(a,c),a.array[c]=a.array[c]||(jspb.Message.MINIMIZE_MEMORY_ALLOCATIONS?jspb.Message.EMPTY_LIST_SENTINEL_:[])):(jspb.Message.maybeInitEmptyExtensionObject_(a),
a.extensionObject_[c]=a.extensionObject_[c]||(jspb.Message.MINIMIZE_MEMORY_ALLOCATIONS?jspb.Message.EMPTY_LIST_SENTINEL_:[]));f&&f.length&&goog.array.forEach(f,goog.partial(jspb.Message.computeOneofCase,a))};jspb.Message.EMPTY_LIST_SENTINEL_=goog.DEBUG&&Object.freeze?Object.freeze([]):[];jspb.Message.isArray_=function(a){return jspb.Message.ASSUME_LOCAL_ARRAYS?a instanceof Array:goog.isArray(a)};
jspb.Message.initPivotAndExtensionObject_=function(a,b){if(a.array.length){var c=a.array.length-1,d=a.array[c];if(d&&"object"==typeof d&&!jspb.Message.isArray_(d)&&!(jspb.Message.SUPPORTS_UINT8ARRAY_&&d instanceof Uint8Array)){a.pivot_=c-a.arrayIndexOffset_;a.extensionObject_=d;return}}-1<b?(a.pivot_=b,a.extensionObject_=null):a.pivot_=Number.MAX_VALUE};jspb.Message.maybeInitEmptyExtensionObject_=function(a){var b=jspb.Message.getIndex_(a,a.pivot_);a.array[b]||(a.extensionObject_=a.array[b]={})};
jspb.Message.toObjectList=function(a,b,c){for(var d=[],e=0;e<a.length;e++)d[e]=b.call(a[e],c,a[e]);return d};jspb.Message.toObjectExtension=function(a,b,c,d,e){for(var f in c){var g=c[f],h=d.call(a,g);if(null!=h){for(var k in g.fieldName)if(g.fieldName.hasOwnProperty(k))break;b[k]=g.toObjectFn?g.isRepeated?jspb.Message.toObjectList(h,g.toObjectFn,e):g.toObjectFn(e,h):h}}};
jspb.Message.serializeBinaryExtensions=function(a,b,c,d){for(var e in c){var f=c[e],g=f.fieldInfo;if(!f.binaryWriterFn)throw Error("Message extension present that was generated without binary serialization support");var h=d.call(a,g);if(null!=h)if(g.isMessageType())if(f.binaryMessageSerializeFn)f.binaryWriterFn.call(b,g.fieldIndex,h,f.binaryMessageSerializeFn);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
else f.binaryWriterFn.call(b,g.fieldIndex,h)}};jspb.Message.readBinaryExtension=function(a,b,c,d,e){var f=c[b.getFieldNumber()];if(f){c=f.fieldInfo;if(!f.binaryReaderFn)throw Error("Deserializing extension whose generated code does not support binary format");var g;c.isMessageType()?(g=new c.ctor,f.binaryReaderFn.call(b,g,f.binaryMessageDeserializeFn)):g=f.binaryReaderFn.call(b);c.isRepeated&&!f.isPacked?(b=d.call(a,c))?b.push(g):e.call(a,c,[g]):e.call(a,c,g)}else b.skipField()};
jspb.Message.getField=function(a,b){if(b<a.pivot_){var c=jspb.Message.getIndex_(a,b),d=a.array[c];return d===jspb.Message.EMPTY_LIST_SENTINEL_?a.array[c]=[]:d}if(a.extensionObject_)return d=a.extensionObject_[b],d===jspb.Message.EMPTY_LIST_SENTINEL_?a.extensionObject_[b]=[]:d};
jspb.Message.getRepeatedField=function(a,b){if(b<a.pivot_){var c=jspb.Message.getIndex_(a,b),d=a.array[c];return d===jspb.Message.EMPTY_LIST_SENTINEL_?a.array[c]=[]:d}d=a.extensionObject_[b];return d===jspb.Message.EMPTY_LIST_SENTINEL_?a.extensionObject_[b]=[]:d};jspb.Message.getOptionalFloatingPointField=function(a,b){var c=jspb.Message.getField(a,b);return null==c?c:+c};
jspb.Message.getRepeatedFloatingPointField=function(a,b){var c=jspb.Message.getRepeatedField(a,b);a.convertedFloatingPointFields_||(a.convertedFloatingPointFields_={});if(!a.convertedFloatingPointFields_[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.convertedFloatingPointFields_[b]=!0}return c};
jspb.Message.bytesAsB64=function(a){if(null==a||goog.isString(a))return a;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return goog.crypt.base64.encodeByteArray(a);goog.asserts.fail("Cannot coerce to b64 string: "+goog.typeOf(a));return null};jspb.Message.bytesAsU8=function(a){if(null==a||a instanceof Uint8Array)return a;if(goog.isString(a))return goog.crypt.base64.decodeStringToUint8Array(a);goog.asserts.fail("Cannot coerce to Uint8Array: "+goog.typeOf(a));return null};
jspb.Message.bytesListAsB64=function(a){jspb.Message.assertConsistentTypes_(a);return!a.length||goog.isString(a[0])?a:goog.array.map(a,jspb.Message.bytesAsB64)};jspb.Message.bytesListAsU8=function(a){jspb.Message.assertConsistentTypes_(a);return!a.length||a[0]instanceof Uint8Array?a:goog.array.map(a,jspb.Message.bytesAsU8)};
jspb.Message.assertConsistentTypes_=function(a){if(goog.DEBUG&&a&&1<a.length){var b=goog.typeOf(a[0]);goog.array.forEach(a,function(a){goog.typeOf(a)!=b&&goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got "+goog.typeOf(a)+" expected "+b)})}};jspb.Message.getFieldWithDefault=function(a,b,c){a=jspb.Message.getField(a,b);return null==a?c:a};jspb.Message.getFieldProto3=jspb.Message.getFieldWithDefault;
jspb.Message.getMapField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(b in a.wrappers_)return a.wrappers_[b];if(!c)return c=jspb.Message.getField(a,b),c||(c=[],jspb.Message.setField(a,b,c)),a.wrappers_[b]=new jspb.Map(c,d)};jspb.Message.setField=function(a,b,c){b<a.pivot_?a.array[jspb.Message.getIndex_(a,b)]=c:(jspb.Message.maybeInitEmptyExtensionObject_(a),a.extensionObject_[b]=c)};jspb.Message.setProto3IntField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};
jspb.Message.setProto3FloatField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};jspb.Message.setProto3BooleanField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,!1)};jspb.Message.setProto3StringField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};jspb.Message.setProto3BytesField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};jspb.Message.setProto3EnumField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};
jspb.Message.setFieldIgnoringDefault_=function(a,b,c,d){c!=d?jspb.Message.setField(a,b,c):a.array[jspb.Message.getIndex_(a,b)]=null};jspb.Message.addToRepeatedField=function(a,b,c,d){a=jspb.Message.getRepeatedField(a,b);void 0!=d?a.splice(d,0,c):a.push(c)};jspb.Message.setOneofField=function(a,b,c,d){(c=jspb.Message.computeOneofCase(a,c))&&c!==b&&void 0!==d&&(a.wrappers_&&c in a.wrappers_&&(a.wrappers_[c]=void 0),jspb.Message.setField(a,c,void 0));jspb.Message.setField(a,b,d)};
jspb.Message.computeOneofCase=function(a,b){var c,d;goog.array.forEach(b,function(b){var f=jspb.Message.getField(a,b);goog.isDefAndNotNull(f)&&(c=b,d=f,jspb.Message.setField(a,b,void 0))});return c?(jspb.Message.setField(a,c,d),c):0};jspb.Message.getWrapperField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){var e=jspb.Message.getField(a,c);if(d||e)a.wrappers_[c]=new b(e)}return a.wrappers_[c]};
jspb.Message.getRepeatedWrapperField=function(a,b,c){jspb.Message.wrapRepeatedField_(a,b,c);b=a.wrappers_[c];b==jspb.Message.EMPTY_LIST_SENTINEL_&&(b=a.wrappers_[c]=[]);return b};jspb.Message.wrapRepeatedField_=function(a,b,c){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){for(var d=jspb.Message.getRepeatedField(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.wrappers_[c]=e}};
jspb.Message.setWrapperField=function(a,b,c){a.wrappers_||(a.wrappers_={});var d=c?c.toArray():c;a.wrappers_[b]=c;jspb.Message.setField(a,b,d)};jspb.Message.setOneofWrapperField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});var e=d?d.toArray():d;a.wrappers_[b]=d;jspb.Message.setOneofField(a,b,c,e)};jspb.Message.setRepeatedWrapperField=function(a,b,c){a.wrappers_||(a.wrappers_={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].toArray();a.wrappers_[b]=c;jspb.Message.setField(a,b,d)};
jspb.Message.addToRepeatedWrapperField=function(a,b,c,d,e){jspb.Message.wrapRepeatedField_(a,d,b);var f=a.wrappers_[b];f||(f=a.wrappers_[b]=[]);c=c?c:new d;a=jspb.Message.getRepeatedField(a,b);void 0!=e?(f.splice(e,0,c),a.splice(e,0,c.toArray())):(f.push(c),a.push(c.toArray()));return c};jspb.Message.toMap=function(a,b,c,d){for(var e={},f=0;f<a.length;f++)e[b.call(a[f])]=c?c.call(a[f],d,a[f]):a[f];return e};
jspb.Message.prototype.syncMapFields_=function(){if(this.wrappers_)for(var a in this.wrappers_){var b=this.wrappers_[a];if(goog.isArray(b))for(var c=0;c<b.length;c++)b[c]&&b[c].toArray();else b&&b.toArray()}};jspb.Message.prototype.toArray=function(){this.syncMapFields_();return this.array};jspb.Message.GENERATE_TO_STRING&&(jspb.Message.prototype.toString=function(){this.syncMapFields_();return this.array.toString()});
jspb.Message.prototype.getExtension=function(a){if(this.extensionObject_){this.wrappers_||(this.wrappers_={});var b=a.fieldIndex;if(a.isRepeated){if(a.isMessageType())return this.wrappers_[b]||(this.wrappers_[b]=goog.array.map(this.extensionObject_[b]||[],function(b){return new a.ctor(b)})),this.wrappers_[b]}else if(a.isMessageType())return!this.wrappers_[b]&&this.extensionObject_[b]&&(this.wrappers_[b]=new a.ctor(this.extensionObject_[b])),this.wrappers_[b];return this.extensionObject_[b]}};
jspb.Message.prototype.setExtension=function(a,b){this.wrappers_||(this.wrappers_={});jspb.Message.maybeInitEmptyExtensionObject_(this);var c=a.fieldIndex;a.isRepeated?(b=b||[],a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=goog.array.map(b,function(a){return a.toArray()})):this.extensionObject_[c]=b):a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=b?b.toArray():b):this.extensionObject_[c]=b;return this};
jspb.Message.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.toArray(),d=b.toArray(),e=[],f=0,g=c.length>d.length?c.length:d.length;a.getJsPbMessageId()&&(e[0]=a.getJsPbMessageId(),f=1);for(;f<g;f++)jspb.Message.compareFields(c[f],d[f])||(e[f]=d[f]);return new a.constructor(e)};jspb.Message.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&jspb.Message.compareFields(a.toArray(),b.toArray())};
jspb.Message.compareExtensions=function(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!jspb.Message.compareFields(a[d],b[d]))return!1;return!0};
jspb.Message.compareFields=function(a,b){if(a==b)return!0;if(!goog.isObject(a)||!goog.isObject(b)||a.constructor!=b.constructor)return!1;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){for(var d=void 0,e=void 0,f=Math.max(a.length,b.length),c=0;c<f;c++){var g=a[c],h=b[c];g&&g.constructor==Object&&(goog.asserts.assert(void 0===d),goog.asserts.assert(c===a.length-1),
d=g,g=void 0);h&&h.constructor==Object&&(goog.asserts.assert(void 0===e),goog.asserts.assert(c===b.length-1),e=h,h=void 0);if(!jspb.Message.compareFields(g,h))return!1}return d||e?(d=d||{},e=e||{},jspb.Message.compareExtensions(d,e)):!0}if(a.constructor===Object)return jspb.Message.compareExtensions(a,b);throw Error("Invalid type in JSPB array");};jspb.Message.prototype.cloneMessage=function(){return jspb.Message.cloneMessage(this)};jspb.Message.prototype.clone=function(){return jspb.Message.cloneMessage(this)};
jspb.Message.clone=function(a){return jspb.Message.cloneMessage(a)};jspb.Message.cloneMessage=function(a){return new a.constructor(jspb.Message.clone_(a.toArray()))};
jspb.Message.copyInto=function(a,b){goog.asserts.assertInstanceof(a,jspb.Message);goog.asserts.assertInstanceof(b,jspb.Message);goog.asserts.assert(a.constructor==b.constructor,"Copy source and target message should have the same type.");for(var c=jspb.Message.clone(a),d=b.toArray(),e=c.toArray(),f=d.length=0;f<e.length;f++)d[f]=e[f];b.wrappers_=c.wrappers_;b.extensionObject_=c.extensionObject_};
jspb.Message.clone_=function(a){var b;if(goog.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)null!=(b=a[d])&&(c[d]="object"==typeof b?jspb.Message.clone_(b):b);return c}if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return new Uint8Array(a);c={};for(d in a)null!=(b=a[d])&&(c[d]="object"==typeof b?jspb.Message.clone_(b):b);return c};jspb.Message.registerMessageType=function(a,b){jspb.Message.registry_[a]=b;b.messageId=a};jspb.Message.registry_={};
jspb.Message.messageSetExtensions={};jspb.Message.messageSetExtensionsBinary={};jspb.arith={};jspb.arith.UInt64=function(a,b){this.lo=a;this.hi=b};jspb.arith.UInt64.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};jspb.arith.UInt64.prototype.rightShift=function(){return new jspb.arith.UInt64((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};jspb.arith.UInt64.prototype.leftShift=function(){return new jspb.arith.UInt64(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};
jspb.arith.UInt64.prototype.msb=function(){return!!(this.hi&2147483648)};jspb.arith.UInt64.prototype.lsb=function(){return!!(this.lo&1)};jspb.arith.UInt64.prototype.zero=function(){return 0==this.lo&&0==this.hi};jspb.arith.UInt64.prototype.add=function(a){return new jspb.arith.UInt64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};
jspb.arith.UInt64.prototype.sub=function(a){return new jspb.arith.UInt64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.UInt64.mul32x32=function(a,b){for(var c=a&65535,d=a>>>16,e=b&65535,f=b>>>16,g=c*e+65536*(c*f&65535)+65536*(d*e&65535),c=d*f+(c*f>>>16)+(d*e>>>16);4294967296<=g;)g-=4294967296,c+=1;return new jspb.arith.UInt64(g>>>0,c>>>0)};
jspb.arith.UInt64.prototype.mul=function(a){var b=jspb.arith.UInt64.mul32x32(this.lo,a);a=jspb.arith.UInt64.mul32x32(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};
jspb.arith.UInt64.prototype.div=function(a){if(0==a)return[];var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(this.lo,this.hi);a=new jspb.arith.UInt64(a,0);for(var d=new jspb.arith.UInt64(1,0);!a.msb();)a=a.leftShift(),d=d.leftShift();for(;!d.zero();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.rightShift(),d=d.rightShift();return[b,c]};jspb.arith.UInt64.prototype.toString=function(){for(var a="",b=this;!b.zero();)var b=b.div(10),c=b[0],a=b[1].lo+a,b=c;""==a&&(a="0");return a};
jspb.arith.UInt64.fromString=function(a){for(var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;var e=parseInt(a[d],10);c.lo=e;b=b.mul(10).add(c)}return b};jspb.arith.UInt64.prototype.clone=function(){return new jspb.arith.UInt64(this.lo,this.hi)};jspb.arith.Int64=function(a,b){this.lo=a;this.hi=b};
jspb.arith.Int64.prototype.add=function(a){return new jspb.arith.Int64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.sub=function(a){return new jspb.arith.Int64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.clone=function(){return new jspb.arith.Int64(this.lo,this.hi)};
jspb.arith.Int64.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new jspb.arith.UInt64(this.lo,this.hi);a&&(b=(new jspb.arith.UInt64(0,0)).sub(b));return(a?"-":"")+b.toString()};jspb.arith.Int64.fromString=function(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=jspb.arith.UInt64.fromString(a);if(null===a)return null;b&&(a=(new jspb.arith.UInt64(0,0)).sub(a));return new jspb.arith.Int64(a.lo,a.hi)};jspb.BinaryConstants={};jspb.ConstBinaryMessage=function(){};jspb.BinaryMessage=function(){};jspb.BinaryConstants.FieldType={INVALID:-1,DOUBLE:1,FLOAT:2,INT64:3,UINT64:4,INT32:5,FIXED64:6,FIXED32:7,BOOL:8,STRING:9,GROUP:10,MESSAGE:11,BYTES:12,UINT32:13,ENUM:14,SFIXED32:15,SFIXED64:16,SINT32:17,SINT64:18,FHASH64:30,VHASH64:31};jspb.BinaryConstants.WireType={INVALID:-1,VARINT:0,FIXED64:1,DELIMITED:2,START_GROUP:3,END_GROUP:4,FIXED32:5};
jspb.BinaryConstants.FieldTypeToWireType=function(a){var b=jspb.BinaryConstants.FieldType,c=jspb.BinaryConstants.WireType;switch(a){case b.INT32:case b.INT64:case b.UINT32:case b.UINT64:case b.SINT32:case b.SINT64:case b.BOOL:case b.ENUM:case b.VHASH64:return c.VARINT;case b.DOUBLE:case b.FIXED64:case b.SFIXED64:case b.FHASH64:return c.FIXED64;case b.STRING:case b.MESSAGE:case b.BYTES:return c.DELIMITED;case b.FLOAT:case b.FIXED32:case b.SFIXED32:return c.FIXED32;default:return c.INVALID}};
jspb.BinaryConstants.INVALID_FIELD_NUMBER=-1;jspb.BinaryConstants.FLOAT32_EPS=1.401298464324817E-45;jspb.BinaryConstants.FLOAT32_MIN=1.1754943508222875E-38;jspb.BinaryConstants.FLOAT32_MAX=3.4028234663852886E38;jspb.BinaryConstants.FLOAT64_EPS=4.9E-324;jspb.BinaryConstants.FLOAT64_MIN=2.2250738585072014E-308;jspb.BinaryConstants.FLOAT64_MAX=1.7976931348623157E308;jspb.BinaryConstants.TWO_TO_20=1048576;jspb.BinaryConstants.TWO_TO_23=8388608;jspb.BinaryConstants.TWO_TO_31=2147483648;
jspb.BinaryConstants.TWO_TO_32=4294967296;jspb.BinaryConstants.TWO_TO_52=4503599627370496;jspb.BinaryConstants.TWO_TO_63=0x7fffffffffffffff;jspb.BinaryConstants.TWO_TO_64=1.8446744073709552E19;jspb.BinaryConstants.ZERO_HASH="\x00\x00\x00\x00\x00\x00\x00\x00";jspb.utils={};jspb.utils.split64Low=0;jspb.utils.split64High=0;jspb.utils.splitUint64=function(a){var b=a>>>0;a=Math.floor((a-b)/jspb.BinaryConstants.TWO_TO_32)>>>0;jspb.utils.split64Low=b;jspb.utils.split64High=a};jspb.utils.splitInt64=function(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/jspb.BinaryConstants.TWO_TO_32);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));jspb.utils.split64Low=c;jspb.utils.split64High=a};
jspb.utils.splitZigzag64=function(a){var b=0>a;a=2*Math.abs(a);jspb.utils.splitUint64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);jspb.utils.split64Low=a;jspb.utils.split64High=c};
jspb.utils.splitFloat32=function(a){var b=0>a?1:0;a=b?-a:a;var c;0===a?0<1/a?(jspb.utils.split64High=0,jspb.utils.split64Low=0):(jspb.utils.split64High=0,jspb.utils.split64Low=2147483648):isNaN(a)?(jspb.utils.split64High=0,jspb.utils.split64Low=2147483647):a>jspb.BinaryConstants.FLOAT32_MAX?(jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|2139095040)>>>0):a<jspb.BinaryConstants.FLOAT32_MIN?(a=Math.round(a/Math.pow(2,-149)),jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|a)>>>0):(c=Math.floor(Math.log(a)/
Math.LN2),a*=Math.pow(2,-c),a=Math.round(a*jspb.BinaryConstants.TWO_TO_23)&8388607,jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|c+127<<23|a)>>>0)};
jspb.utils.splitFloat64=function(a){var b=0>a?1:0;a=b?-a:a;if(0===a)jspb.utils.split64High=0<1/a?0:2147483648,jspb.utils.split64Low=0;else if(isNaN(a))jspb.utils.split64High=2147483647,jspb.utils.split64Low=4294967295;else if(a>jspb.BinaryConstants.FLOAT64_MAX)jspb.utils.split64High=(b<<31|2146435072)>>>0,jspb.utils.split64Low=0;else if(a<jspb.BinaryConstants.FLOAT64_MIN){var c=a/Math.pow(2,-1074);a=c/jspb.BinaryConstants.TWO_TO_32;jspb.utils.split64High=(b<<31|a)>>>0;jspb.utils.split64Low=c>>>0}else{var d=
Math.floor(Math.log(a)/Math.LN2);1024==d&&(d=1023);c=a*Math.pow(2,-d);a=c*jspb.BinaryConstants.TWO_TO_20&1048575;c=c*jspb.BinaryConstants.TWO_TO_52>>>0;jspb.utils.split64High=(b<<31|d+1023<<20|a)>>>0;jspb.utils.split64Low=c}};
jspb.utils.splitHash64=function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=a.charCodeAt(4),g=a.charCodeAt(5),h=a.charCodeAt(6);a=a.charCodeAt(7);jspb.utils.split64Low=b+(c<<8)+(d<<16)+(e<<24)>>>0;jspb.utils.split64High=f+(g<<8)+(h<<16)+(a<<24)>>>0};jspb.utils.joinUint64=function(a,b){return b*jspb.BinaryConstants.TWO_TO_32+a};
jspb.utils.joinInt64=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));var d=jspb.utils.joinUint64(a,b);return c?-d:d};jspb.utils.joinZigzag64=function(a,b){var c=a&1;a=(a>>>1|b<<31)>>>0;b>>>=1;c&&(a=a+1>>>0,0==a&&(b=b+1>>>0));var d=jspb.utils.joinUint64(a,b);return c?-d:d};jspb.utils.joinFloat32=function(a,b){var c=2*(a>>31)+1,d=a>>>23&255,e=a&8388607;return 255==d?e?NaN:Infinity*c:0==d?c*Math.pow(2,-149)*e:c*Math.pow(2,d-150)*(e+Math.pow(2,23))};
jspb.utils.joinFloat64=function(a,b){var c=2*(b>>31)+1,d=b>>>20&2047,e=jspb.BinaryConstants.TWO_TO_32*(b&1048575)+a;return 2047==d?e?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*e:c*Math.pow(2,d-1075)*(e+jspb.BinaryConstants.TWO_TO_52)};jspb.utils.joinHash64=function(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)};jspb.utils.DIGITS="0123456789abcdef".split("");
jspb.utils.joinUnsignedDecimalString=function(a,b){function c(a){for(var b=1E7,c=0;7>c;c++){var b=b/10,d=a/b%10>>>0;if(0!=d||h)h=!0,k+=g[d]}}if(2097151>=b)return""+(jspb.BinaryConstants.TWO_TO_32*b+a);var d=(a>>>24|b<<8)>>>0&16777215,e=b>>16&65535,f=(a&16777215)+6777216*d+6710656*e,d=d+8147497*e,e=2*e;1E7<=f&&(d+=Math.floor(f/1E7),f%=1E7);1E7<=d&&(e+=Math.floor(d/1E7),d%=1E7);var g=jspb.utils.DIGITS,h=!1,k="";(e||h)&&c(e);(d||h)&&c(d);(f||h)&&c(f);return k};
jspb.utils.joinSignedDecimalString=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);var d=jspb.utils.joinUnsignedDecimalString(a,b);return c?"-"+d:d};jspb.utils.hash64ToDecimalString=function(a,b){jspb.utils.splitHash64(a);var c=jspb.utils.split64Low,d=jspb.utils.split64High;return b?jspb.utils.joinSignedDecimalString(c,d):jspb.utils.joinUnsignedDecimalString(c,d)};
jspb.utils.hash64ArrayToDecimalStrings=function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=jspb.utils.hash64ToDecimalString(a[d],b);return c};
jspb.utils.decimalStringToHash64=function(a){function b(a,b){for(var c=0;8>c&&(1!==a||0<b);c++){var d=a*e[c]+b;e[c]=d&255;b=d>>>8}}function c(){for(var a=0;8>a;a++)e[a]=~e[a]&255}goog.asserts.assert(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var e=[0,0,0,0,0,0,0,0],f=0;f<a.length;f++)b(10,jspb.utils.DIGITS.indexOf(a[f]));d&&(c(),b(1,1));return goog.crypt.byteArrayToString(e)};jspb.utils.splitDecimalString=function(a){jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a))};
jspb.utils.hash64ToHexString=function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=jspb.utils.DIGITS[d>>4];b[2*c+3]=jspb.utils.DIGITS[d&15]}return b.join("")};jspb.utils.hexStringToHash64=function(a){a=a.toLowerCase();goog.asserts.assert(18==a.length);goog.asserts.assert("0"==a[0]);goog.asserts.assert("x"==a[1]);for(var b="",c=0;8>c;c++)var d=jspb.utils.DIGITS.indexOf(a[2*c+2]),e=jspb.utils.DIGITS.indexOf(a[2*c+3]),b=String.fromCharCode(16*d+e)+b;return b};
jspb.utils.hash64ToNumber=function(a,b){jspb.utils.splitHash64(a);var c=jspb.utils.split64Low,d=jspb.utils.split64High;return b?jspb.utils.joinInt64(c,d):jspb.utils.joinUint64(c,d)};jspb.utils.numberToHash64=function(a){jspb.utils.splitInt64(a);return jspb.utils.joinHash64(jspb.utils.split64Low,jspb.utils.split64High)};jspb.utils.countVarints=function(a,b,c){for(var d=0,e=b;e<c;e++)d+=a[e]>>7;return c-b-d};
jspb.utils.countVarintFields=function(a,b,c,d){var e=0;d=8*d+jspb.BinaryConstants.WireType.VARINT;if(128>d)for(;b<c&&a[b++]==d;)for(e++;;){var f=a[b++];if(0==(f&128))break}else for(;b<c;){for(f=d;128<f;){if(a[b]!=(f&127|128))return e;b++;f>>=7}if(a[b++]!=f)break;for(e++;f=a[b++],0!=(f&128););}return e};jspb.utils.countFixedFields_=function(a,b,c,d,e){var f=0;if(128>d)for(;b<c&&a[b++]==d;)f++,b+=e;else for(;b<c;){for(var g=d;128<g;){if(a[b++]!=(g&127|128))return f;g>>=7}if(a[b++]!=g)break;f++;b+=e}return f};
jspb.utils.countFixed32Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED32,4)};jspb.utils.countFixed64Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED64,8)};
jspb.utils.countDelimitedFields=function(a,b,c,d){var e=0;for(d=8*d+jspb.BinaryConstants.WireType.DELIMITED;b<c;){for(var f=d;128<f;){if(a[b++]!=(f&127|128))return e;f>>=7}if(a[b++]!=f)break;e++;for(var g=0,h=1;f=a[b++],g+=(f&127)*h,h*=128,0!=(f&128););b+=g}return e};jspb.utils.debugBytesToTextFormat=function(a){var b='"';if(a){a=jspb.utils.byteSourceToUint8Array(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'};
jspb.utils.debugScalarToTextFormat=function(a){return goog.isString(a)?goog.string.quote(a):a.toString()};jspb.utils.stringToByteArray=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b};
jspb.utils.byteSourceToUint8Array=function(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer||a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return goog.crypt.base64.decodeStringToUint8Array(a);goog.asserts.fail("Type not convertible to Uint8Array.");return new Uint8Array(0)};jspb.BinaryEncoder=function(){this.buffer_=[]};jspb.BinaryEncoder.prototype.length=function(){return this.buffer_.length};jspb.BinaryEncoder.prototype.end=function(){var a=this.buffer_;this.buffer_=[];return a};
jspb.BinaryEncoder.prototype.writeSplitVarint64=function(a,b){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(b==Math.floor(b));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);for(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);0<b||127<a;)this.buffer_.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSplitFixed64=function(a,b){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(b==Math.floor(b));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);this.writeUint32(a);this.writeUint32(b)};
jspb.BinaryEncoder.prototype.writeUnsignedVarint32=function(a){goog.asserts.assert(a==Math.floor(a));for(goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);127<a;)this.buffer_.push(a&127|128),a>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSignedVarint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);if(0<=a)this.writeUnsignedVarint32(a);else{for(var b=0;9>b;b++)this.buffer_.push(a&127|128),a>>=7;this.buffer_.push(1)}};
jspb.BinaryEncoder.prototype.writeUnsignedVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeSignedVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeUnsignedVarint32((a<<1^a>>31)>>>0)};jspb.BinaryEncoder.prototype.writeZigzagVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitZigzag64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint64String=function(a){this.writeZigzagVarint64(parseInt(a,10))};jspb.BinaryEncoder.prototype.writeUint8=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&256>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeUint16=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&65536>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeUint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};jspb.BinaryEncoder.prototype.writeUint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitUint64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt8=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(-128<=a&&128>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeInt16=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(-32768<=a&&32768>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeInt32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};
jspb.BinaryEncoder.prototype.writeInt64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt64String=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(+a>=-jspb.BinaryConstants.TWO_TO_63&&+a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a));this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};jspb.BinaryEncoder.prototype.writeFloat=function(a){goog.asserts.assert(a>=-jspb.BinaryConstants.FLOAT32_MAX&&a<=jspb.BinaryConstants.FLOAT32_MAX);jspb.utils.splitFloat32(a);this.writeUint32(jspb.utils.split64Low)};
jspb.BinaryEncoder.prototype.writeDouble=function(a){goog.asserts.assert(a>=-jspb.BinaryConstants.FLOAT64_MAX&&a<=jspb.BinaryConstants.FLOAT64_MAX);jspb.utils.splitFloat64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};jspb.BinaryEncoder.prototype.writeBool=function(a){goog.asserts.assert(goog.isBoolean(a)||goog.isNumber(a));this.buffer_.push(a?1:0)};
jspb.BinaryEncoder.prototype.writeEnum=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeSignedVarint32(a)};jspb.BinaryEncoder.prototype.writeBytes=function(a){this.buffer_.push.apply(this.buffer_,a)};jspb.BinaryEncoder.prototype.writeVarintHash64=function(a){jspb.utils.splitHash64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeFixedHash64=function(a){jspb.utils.splitHash64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeString=function(a){for(var b=this.buffer_.length,c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.buffer_.push(d);else if(2048>d)this.buffer_.push(d>>6|192),this.buffer_.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var e=a.charCodeAt(c+1);56320<=e&&57343>=e&&(d=1024*(d-55296)+e-56320+65536,this.buffer_.push(d>>18|240),this.buffer_.push(d>>12&63|128),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|128),c++)}else this.buffer_.push(d>>
12|224),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|128)}return this.buffer_.length-b};jspb.BinaryWriter=function(){this.blocks_=[];this.totalLength_=0;this.encoder_=new jspb.BinaryEncoder;this.bookmarks_=[]};jspb.BinaryWriter.prototype.appendUint8Array_=function(a){var b=this.encoder_.end();this.blocks_.push(b);this.blocks_.push(a);this.totalLength_+=b.length+a.length};
jspb.BinaryWriter.prototype.beginDelimited_=function(a){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);a=this.encoder_.end();this.blocks_.push(a);this.totalLength_+=a.length;a.push(this.totalLength_);return a};jspb.BinaryWriter.prototype.endDelimited_=function(a){var b=a.pop(),b=this.totalLength_+this.encoder_.length()-b;for(goog.asserts.assert(0<=b);127<b;)a.push(b&127|128),b>>>=7,this.totalLength_++;a.push(b);this.totalLength_++};
jspb.BinaryWriter.prototype.writeSerializedMessage=function(a,b,c){this.appendUint8Array_(a.subarray(b,c))};jspb.BinaryWriter.prototype.maybeWriteSerializedMessage=function(a,b,c){null!=a&&null!=b&&null!=c&&this.writeSerializedMessage(a,b,c)};jspb.BinaryWriter.prototype.reset=function(){this.blocks_=[];this.encoder_.end();this.totalLength_=0;this.bookmarks_=[]};
jspb.BinaryWriter.prototype.getResultBuffer=function(){goog.asserts.assert(0==this.bookmarks_.length);for(var a=new Uint8Array(this.totalLength_+this.encoder_.length()),b=this.blocks_,c=b.length,d=0,e=0;e<c;e++){var f=b[e];a.set(f,d);d+=f.length}b=this.encoder_.end();a.set(b,d);d+=b.length;goog.asserts.assert(d==a.length);this.blocks_=[a];return a};jspb.BinaryWriter.prototype.getResultBase64String=function(){return goog.crypt.base64.encodeByteArray(this.getResultBuffer())};
jspb.BinaryWriter.prototype.beginSubMessage=function(a){this.bookmarks_.push(this.beginDelimited_(a))};jspb.BinaryWriter.prototype.endSubMessage=function(){goog.asserts.assert(0<=this.bookmarks_.length);this.endDelimited_(this.bookmarks_.pop())};jspb.BinaryWriter.prototype.writeFieldHeader_=function(a,b){goog.asserts.assert(1<=a&&a==Math.floor(a));this.encoder_.writeUnsignedVarint32(8*a+b)};
jspb.BinaryWriter.prototype.writeAny=function(a,b,c){var d=jspb.BinaryConstants.FieldType;switch(a){case d.DOUBLE:this.writeDouble(b,c);break;case d.FLOAT:this.writeFloat(b,c);break;case d.INT64:this.writeInt64(b,c);break;case d.UINT64:this.writeUint64(b,c);break;case d.INT32:this.writeInt32(b,c);break;case d.FIXED64:this.writeFixed64(b,c);break;case d.FIXED32:this.writeFixed32(b,c);break;case d.BOOL:this.writeBool(b,c);break;case d.STRING:this.writeString(b,c);break;case d.GROUP:goog.asserts.fail("Group field type not supported in writeAny()");
break;case d.MESSAGE:goog.asserts.fail("Message field type not supported in writeAny()");break;case d.BYTES:this.writeBytes(b,c);break;case d.UINT32:this.writeUint32(b,c);break;case d.ENUM:this.writeEnum(b,c);break;case d.SFIXED32:this.writeSfixed32(b,c);break;case d.SFIXED64:this.writeSfixed64(b,c);break;case d.SINT32:this.writeSint32(b,c);break;case d.SINT64:this.writeSint64(b,c);break;case d.FHASH64:this.writeFixedHash64(b,c);break;case d.VHASH64:this.writeVarintHash64(b,c);break;default:goog.asserts.fail("Invalid field type in writeAny()")}};
jspb.BinaryWriter.prototype.writeUnsignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint32(b))};jspb.BinaryWriter.prototype.writeSignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};jspb.BinaryWriter.prototype.writeUnsignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint64(b))};
jspb.BinaryWriter.prototype.writeSignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint64(b))};jspb.BinaryWriter.prototype.writeZigzagVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint32(b))};jspb.BinaryWriter.prototype.writeZigzagVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64(b))};
jspb.BinaryWriter.prototype.writeZigzagVarint64String_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64String(b))};jspb.BinaryWriter.prototype.writeInt32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeInt32String=function(a,b){if(null!=b){var c=parseInt(b,10);goog.asserts.assert(c>=-jspb.BinaryConstants.TWO_TO_31&&c<jspb.BinaryConstants.TWO_TO_31);this.writeSignedVarint32_(a,c)}};jspb.BinaryWriter.prototype.writeInt64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeSignedVarint64_(a,b))};
jspb.BinaryWriter.prototype.writeInt64String=function(a,b){if(null!=b){var c=jspb.arith.Int64.fromString(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);this.encoder_.writeSplitVarint64(c.lo,c.hi)}};jspb.BinaryWriter.prototype.writeUint32=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeUint32String=function(a,b){if(null!=b){var c=parseInt(b,10);goog.asserts.assert(0<=c&&c<jspb.BinaryConstants.TWO_TO_32);this.writeUnsignedVarint32_(a,c)}};jspb.BinaryWriter.prototype.writeUint64=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeUnsignedVarint64_(a,b))};
jspb.BinaryWriter.prototype.writeUint64String=function(a,b){if(null!=b){var c=jspb.arith.UInt64.fromString(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);this.encoder_.writeSplitVarint64(c.lo,c.hi)}};jspb.BinaryWriter.prototype.writeSint32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeZigzagVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeSint64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeZigzagVarint64_(a,b))};jspb.BinaryWriter.prototype.writeSint64String=function(a,b){null!=b&&(goog.asserts.assert(+b>=-jspb.BinaryConstants.TWO_TO_63&&+b<jspb.BinaryConstants.TWO_TO_63),this.writeZigzagVarint64String_(a,b))};
jspb.BinaryWriter.prototype.writeFixed32=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeUint32(b))};jspb.BinaryWriter.prototype.writeFixed64=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeUint64(b))};
jspb.BinaryWriter.prototype.writeFixed64String=function(a,b){if(null!=b){var c=jspb.arith.UInt64.fromString(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64);this.encoder_.writeSplitFixed64(c.lo,c.hi)}};jspb.BinaryWriter.prototype.writeSfixed32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeInt32(b))};
jspb.BinaryWriter.prototype.writeSfixed64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeInt64(b))};jspb.BinaryWriter.prototype.writeSfixed64String=function(a,b){if(null!=b){var c=jspb.arith.Int64.fromString(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64);this.encoder_.writeSplitFixed64(c.lo,c.hi)}};
jspb.BinaryWriter.prototype.writeFloat=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeFloat(b))};jspb.BinaryWriter.prototype.writeDouble=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeDouble(b))};jspb.BinaryWriter.prototype.writeBool=function(a,b){null!=b&&(goog.asserts.assert(goog.isBoolean(b)||goog.isNumber(b)),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeBool(b))};
jspb.BinaryWriter.prototype.writeEnum=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};jspb.BinaryWriter.prototype.writeString=function(a,b){if(null!=b){var c=this.beginDelimited_(a);this.encoder_.writeString(b);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writeBytes=function(a,b){if(null!=b){var c=jspb.utils.byteSourceToUint8Array(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(c.length);this.appendUint8Array_(c)}};jspb.BinaryWriter.prototype.writeMessage=function(a,b,c){null!=b&&(a=this.beginDelimited_(a),c(b,this),this.endDelimited_(a))};
jspb.BinaryWriter.prototype.writeGroup=function(a,b,c){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b,this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP))};jspb.BinaryWriter.prototype.writeFixedHash64=function(a,b){null!=b&&(goog.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeFixedHash64(b))};
jspb.BinaryWriter.prototype.writeVarintHash64=function(a,b){null!=b&&(goog.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeVarintHash64(b))};jspb.BinaryWriter.prototype.writeRepeatedInt32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint32_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedInt32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt32String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedInt64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedInt64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt64String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint32_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedUint32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint32String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint32_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64String_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedFixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed32(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSfixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed32(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSfixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSfixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedFloat=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFloat(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedDouble=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeDouble(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedBool=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBool(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedEnum=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeEnum(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedString=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeString(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedBytes=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBytes(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedMessage=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var e=this.beginDelimited_(a);c(b[d],this);this.endDelimited_(e)}};
jspb.BinaryWriter.prototype.writeRepeatedGroup=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b[d],this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP)};jspb.BinaryWriter.prototype.writeRepeatedFixedHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixedHash64(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedVarintHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeVarintHash64(a,b[c])};jspb.BinaryWriter.prototype.writePackedInt32=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeSignedVarint32(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedInt32String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeSignedVarint32(parseInt(b[d],10));this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedInt64=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeSignedVarint64(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedInt64String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++){var e=jspb.arith.Int64.fromString(b[d]);this.encoder_.writeSplitVarint64(e.lo,e.hi)}this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedUint32=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeUnsignedVarint32(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedUint32String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeUnsignedVarint32(parseInt(b[d],10));this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedUint64=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeUnsignedVarint64(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedUint64String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++){var e=jspb.arith.UInt64.fromString(b[d]);this.encoder_.writeSplitVarint64(e.lo,e.hi)}this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedSint32=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeZigzagVarint32(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedSint64=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeZigzagVarint64(b[d]);this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedSint64String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeZigzagVarint64(parseInt(b[d],10));this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedFixed32=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(4*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeUint32(b[c])}};jspb.BinaryWriter.prototype.writePackedFixed64=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeUint64(b[c])}};
jspb.BinaryWriter.prototype.writePackedFixed64String=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++){var d=jspb.arith.UInt64.fromString(b[c]);this.encoder_.writeSplitFixed64(d.lo,d.hi)}}};
jspb.BinaryWriter.prototype.writePackedSfixed32=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(4*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeInt32(b[c])}};jspb.BinaryWriter.prototype.writePackedSfixed64=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeInt64(b[c])}};
jspb.BinaryWriter.prototype.writePackedSfixed64String=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeInt64String(b[c])}};jspb.BinaryWriter.prototype.writePackedFloat=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(4*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeFloat(b[c])}};
jspb.BinaryWriter.prototype.writePackedDouble=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeDouble(b[c])}};jspb.BinaryWriter.prototype.writePackedBool=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(b.length);for(var c=0;c<b.length;c++)this.encoder_.writeBool(b[c])}};
jspb.BinaryWriter.prototype.writePackedEnum=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeEnum(b[d]);this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedFixedHash64=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeFixedHash64(b[c])}};
jspb.BinaryWriter.prototype.writePackedVarintHash64=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeVarintHash64(b[d]);this.endDelimited_(c)}};jspb.BinaryIterator=function(a,b,c){this.elements_=this.nextMethod_=this.decoder_=null;this.cursor_=0;this.nextValue_=null;this.atEnd_=!0;this.init_(a,b,c)};jspb.BinaryIterator.prototype.init_=function(a,b,c){a&&b&&(this.decoder_=a,this.nextMethod_=b);this.elements_=c||null;this.cursor_=0;this.nextValue_=null;this.atEnd_=!this.decoder_&&!this.elements_;this.next()};jspb.BinaryIterator.instanceCache_=[];
jspb.BinaryIterator.alloc=function(a,b,c){if(jspb.BinaryIterator.instanceCache_.length){var d=jspb.BinaryIterator.instanceCache_.pop();d.init_(a,b,c);return d}return new jspb.BinaryIterator(a,b,c)};jspb.BinaryIterator.prototype.free=function(){this.clear();100>jspb.BinaryIterator.instanceCache_.length&&jspb.BinaryIterator.instanceCache_.push(this)};
jspb.BinaryIterator.prototype.clear=function(){this.decoder_&&this.decoder_.free();this.elements_=this.nextMethod_=this.decoder_=null;this.cursor_=0;this.nextValue_=null;this.atEnd_=!0};jspb.BinaryIterator.prototype.get=function(){return this.nextValue_};jspb.BinaryIterator.prototype.atEnd=function(){return this.atEnd_};
jspb.BinaryIterator.prototype.next=function(){var a=this.nextValue_;this.decoder_?this.decoder_.atEnd()?(this.nextValue_=null,this.atEnd_=!0):this.nextValue_=this.nextMethod_.call(this.decoder_):this.elements_&&(this.cursor_==this.elements_.length?(this.nextValue_=null,this.atEnd_=!0):this.nextValue_=this.elements_[this.cursor_++]);return a};jspb.BinaryDecoder=function(a,b,c){this.bytes_=null;this.tempHigh_=this.tempLow_=this.cursor_=this.end_=this.start_=0;this.error_=!1;a&&this.setBlock(a,b,c)};
jspb.BinaryDecoder.instanceCache_=[];jspb.BinaryDecoder.alloc=function(a,b,c){if(jspb.BinaryDecoder.instanceCache_.length){var d=jspb.BinaryDecoder.instanceCache_.pop();a&&d.setBlock(a,b,c);return d}return new jspb.BinaryDecoder(a,b,c)};jspb.BinaryDecoder.prototype.free=function(){this.clear();100>jspb.BinaryDecoder.instanceCache_.length&&jspb.BinaryDecoder.instanceCache_.push(this)};jspb.BinaryDecoder.prototype.clone=function(){return jspb.BinaryDecoder.alloc(this.bytes_,this.start_,this.end_-this.start_)};
jspb.BinaryDecoder.prototype.clear=function(){this.bytes_=null;this.cursor_=this.end_=this.start_=0;this.error_=!1};jspb.BinaryDecoder.prototype.getBuffer=function(){return this.bytes_};jspb.BinaryDecoder.prototype.setBlock=function(a,b,c){this.bytes_=jspb.utils.byteSourceToUint8Array(a);this.start_=goog.isDef(b)?b:0;this.end_=goog.isDef(c)?this.start_+c:this.bytes_.length;this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getEnd=function(){return this.end_};
jspb.BinaryDecoder.prototype.setEnd=function(a){this.end_=a};jspb.BinaryDecoder.prototype.reset=function(){this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getCursor=function(){return this.cursor_};jspb.BinaryDecoder.prototype.setCursor=function(a){this.cursor_=a};jspb.BinaryDecoder.prototype.advance=function(a){this.cursor_+=a;goog.asserts.assert(this.cursor_<=this.end_)};jspb.BinaryDecoder.prototype.atEnd=function(){return this.cursor_==this.end_};
jspb.BinaryDecoder.prototype.pastEnd=function(){return this.cursor_>this.end_};jspb.BinaryDecoder.prototype.getError=function(){return this.error_||0>this.cursor_||this.cursor_>this.end_};
jspb.BinaryDecoder.prototype.readSplitVarint64_=function(){for(var a,b=0,c,d=0;4>d;d++)if(a=this.bytes_[this.cursor_++],b|=(a&127)<<7*d,128>a){this.tempLow_=b>>>0;this.tempHigh_=0;return}a=this.bytes_[this.cursor_++];b|=(a&127)<<28;c=0|(a&127)>>4;if(128>a)this.tempLow_=b>>>0,this.tempHigh_=c>>>0;else{for(d=0;5>d;d++)if(a=this.bytes_[this.cursor_++],c|=(a&127)<<7*d+3,128>a){this.tempLow_=b>>>0;this.tempHigh_=c>>>0;return}goog.asserts.fail("Failed to read varint, encoding is invalid.");this.error_=
!0}};jspb.BinaryDecoder.prototype.skipVarint=function(){for(;this.bytes_[this.cursor_]&128;)this.cursor_++;this.cursor_++};jspb.BinaryDecoder.prototype.unskipVarint=function(a){for(;128<a;)this.cursor_--,a>>>=7;this.cursor_--};
jspb.BinaryDecoder.prototype.readUnsignedVarint32=function(){var a,b=this.bytes_;a=b[this.cursor_+0];var c=a&127;if(128>a)return this.cursor_+=1,goog.asserts.assert(this.cursor_<=this.end_),c;a=b[this.cursor_+1];c|=(a&127)<<7;if(128>a)return this.cursor_+=2,goog.asserts.assert(this.cursor_<=this.end_),c;a=b[this.cursor_+2];c|=(a&127)<<14;if(128>a)return this.cursor_+=3,goog.asserts.assert(this.cursor_<=this.end_),c;a=b[this.cursor_+3];c|=(a&127)<<21;if(128>a)return this.cursor_+=4,goog.asserts.assert(this.cursor_<=
this.end_),c;a=b[this.cursor_+4];c|=(a&15)<<28;if(128>a)return this.cursor_+=5,goog.asserts.assert(this.cursor_<=this.end_),c>>>0;this.cursor_+=5;128<=b[this.cursor_++]&&128<=b[this.cursor_++]&&128<=b[this.cursor_++]&&128<=b[this.cursor_++]&&128<=b[this.cursor_++]&&goog.asserts.assert(!1);goog.asserts.assert(this.cursor_<=this.end_);return c};jspb.BinaryDecoder.prototype.readSignedVarint32=jspb.BinaryDecoder.prototype.readUnsignedVarint32;jspb.BinaryDecoder.prototype.readUnsignedVarint32String=function(){return this.readUnsignedVarint32().toString()};
jspb.BinaryDecoder.prototype.readSignedVarint32String=function(){return this.readSignedVarint32().toString()};jspb.BinaryDecoder.prototype.readZigzagVarint32=function(){var a=this.readUnsignedVarint32();return a>>>1^-(a&1)};jspb.BinaryDecoder.prototype.readUnsignedVarint64=function(){this.readSplitVarint64_();return jspb.utils.joinUint64(this.tempLow_,this.tempHigh_)};
jspb.BinaryDecoder.prototype.readUnsignedVarint64String=function(){this.readSplitVarint64_();return jspb.utils.joinUnsignedDecimalString(this.tempLow_,this.tempHigh_)};jspb.BinaryDecoder.prototype.readSignedVarint64=function(){this.readSplitVarint64_();return jspb.utils.joinInt64(this.tempLow_,this.tempHigh_)};jspb.BinaryDecoder.prototype.readSignedVarint64String=function(){this.readSplitVarint64_();return jspb.utils.joinSignedDecimalString(this.tempLow_,this.tempHigh_)};
jspb.BinaryDecoder.prototype.readZigzagVarint64=function(){this.readSplitVarint64_();return jspb.utils.joinZigzag64(this.tempLow_,this.tempHigh_)};jspb.BinaryDecoder.prototype.readZigzagVarint64String=function(){return this.readZigzagVarint64().toString()};jspb.BinaryDecoder.prototype.readUint8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;goog.asserts.assert(this.cursor_<=this.end_);return a};
jspb.BinaryDecoder.prototype.readUint16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;goog.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8};jspb.BinaryDecoder.prototype.readUint32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;goog.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8|c<<16|d<<24)>>>0};
jspb.BinaryDecoder.prototype.readUint64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUint64(a,b)};jspb.BinaryDecoder.prototype.readUint64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUnsignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readInt8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;goog.asserts.assert(this.cursor_<=this.end_);return a<<24>>24};
jspb.BinaryDecoder.prototype.readInt16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;goog.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8)<<16>>16};jspb.BinaryDecoder.prototype.readInt32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;goog.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8|c<<16|d<<24};
jspb.BinaryDecoder.prototype.readInt64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinInt64(a,b)};jspb.BinaryDecoder.prototype.readInt64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinSignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readFloat=function(){var a=this.readUint32();return jspb.utils.joinFloat32(a,0)};
jspb.BinaryDecoder.prototype.readDouble=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinFloat64(a,b)};jspb.BinaryDecoder.prototype.readBool=function(){return!!this.bytes_[this.cursor_++]};jspb.BinaryDecoder.prototype.readEnum=function(){return this.readSignedVarint32()};
jspb.BinaryDecoder.prototype.readString=function(a){var b=this.bytes_,c=this.cursor_;a=c+a;for(var d=[],e="";c<a;){var f=b[c++];if(128>f)d.push(f);else if(192>f)continue;else if(224>f){var g=b[c++];d.push((f&31)<<6|g&63)}else if(240>f){var g=b[c++],h=b[c++];d.push((f&15)<<12|(g&63)<<6|h&63)}else if(248>f){var g=b[c++],h=b[c++],k=b[c++],f=(f&7)<<18|(g&63)<<12|(h&63)<<6|k&63,f=f-65536;d.push((f>>10&1023)+55296,(f&1023)+56320)}8192<=d.length&&(e+=String.fromCharCode.apply(null,d),d.length=0)}e+=goog.crypt.byteArrayToString(d);
this.cursor_=c;return e};jspb.BinaryDecoder.prototype.readStringWithLength=function(){var a=this.readUnsignedVarint32();return this.readString(a)};jspb.BinaryDecoder.prototype.readBytes=function(a){if(0>a||this.cursor_+a>this.bytes_.length)return this.error_=!0,goog.asserts.fail("Invalid byte length!"),new Uint8Array(0);var b=this.bytes_.subarray(this.cursor_,this.cursor_+a);this.cursor_+=a;goog.asserts.assert(this.cursor_<=this.end_);return b};
jspb.BinaryDecoder.prototype.readVarintHash64=function(){this.readSplitVarint64_();return jspb.utils.joinHash64(this.tempLow_,this.tempHigh_)};jspb.BinaryDecoder.prototype.readFixedHash64=function(){var a=this.bytes_,b=this.cursor_,c=a[b+0],d=a[b+1],e=a[b+2],f=a[b+3],g=a[b+4],h=a[b+5],k=a[b+6],a=a[b+7];this.cursor_+=8;return String.fromCharCode(c,d,e,f,g,h,k,a)};jspb.BinaryReader=function(a,b,c){this.decoder_=jspb.BinaryDecoder.alloc(a,b,c);this.fieldCursor_=this.decoder_.getCursor();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null};jspb.BinaryReader.instanceCache_=[];
jspb.BinaryReader.alloc=function(a,b,c){if(jspb.BinaryReader.instanceCache_.length){var d=jspb.BinaryReader.instanceCache_.pop();a&&d.decoder_.setBlock(a,b,c);return d}return new jspb.BinaryReader(a,b,c)};jspb.BinaryReader.prototype.alloc=jspb.BinaryReader.alloc;
jspb.BinaryReader.prototype.free=function(){this.decoder_.clear();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null;100>jspb.BinaryReader.instanceCache_.length&&jspb.BinaryReader.instanceCache_.push(this)};jspb.BinaryReader.prototype.getFieldCursor=function(){return this.fieldCursor_};jspb.BinaryReader.prototype.getCursor=function(){return this.decoder_.getCursor()};
jspb.BinaryReader.prototype.getBuffer=function(){return this.decoder_.getBuffer()};jspb.BinaryReader.prototype.getFieldNumber=function(){return this.nextField_};jspb.BinaryReader.prototype.getWireType=function(){return this.nextWireType_};jspb.BinaryReader.prototype.isEndGroup=function(){return this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP};jspb.BinaryReader.prototype.getError=function(){return this.error_||this.decoder_.getError()};
jspb.BinaryReader.prototype.setBlock=function(a,b,c){this.decoder_.setBlock(a,b,c);this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};jspb.BinaryReader.prototype.reset=function(){this.decoder_.reset();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};jspb.BinaryReader.prototype.advance=function(a){this.decoder_.advance(a)};
jspb.BinaryReader.prototype.nextField=function(){if(this.decoder_.atEnd())return!1;if(this.getError())return goog.asserts.fail("Decoder hit an error"),!1;this.fieldCursor_=this.decoder_.getCursor();var a=this.decoder_.readUnsignedVarint32(),b=a>>>3,a=a&7;if(a!=jspb.BinaryConstants.WireType.VARINT&&a!=jspb.BinaryConstants.WireType.FIXED32&&a!=jspb.BinaryConstants.WireType.FIXED64&&a!=jspb.BinaryConstants.WireType.DELIMITED&&a!=jspb.BinaryConstants.WireType.START_GROUP&&a!=jspb.BinaryConstants.WireType.END_GROUP)return goog.asserts.fail("Invalid wire type"),
this.error_=!0,!1;this.nextField_=b;this.nextWireType_=a;return!0};jspb.BinaryReader.prototype.unskipHeader=function(){this.decoder_.unskipVarint(this.nextField_<<3|this.nextWireType_)};jspb.BinaryReader.prototype.skipMatchingFields=function(){var a=this.nextField_;for(this.unskipHeader();this.nextField()&&this.getFieldNumber()==a;)this.skipField();this.decoder_.atEnd()||this.unskipHeader()};
jspb.BinaryReader.prototype.skipVarintField=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.VARINT?(goog.asserts.fail("Invalid wire type for skipVarintField"),this.skipField()):this.decoder_.skipVarint()};jspb.BinaryReader.prototype.skipDelimitedField=function(){if(this.nextWireType_!=jspb.BinaryConstants.WireType.DELIMITED)goog.asserts.fail("Invalid wire type for skipDelimitedField"),this.skipField();else{var a=this.decoder_.readUnsignedVarint32();this.decoder_.advance(a)}};
jspb.BinaryReader.prototype.skipFixed32Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED32?(goog.asserts.fail("Invalid wire type for skipFixed32Field"),this.skipField()):this.decoder_.advance(4)};jspb.BinaryReader.prototype.skipFixed64Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED64?(goog.asserts.fail("Invalid wire type for skipFixed64Field"),this.skipField()):this.decoder_.advance(8)};
jspb.BinaryReader.prototype.skipGroup=function(){var a=[this.nextField_];do{if(!this.nextField()){goog.asserts.fail("Unmatched start-group tag: stream EOF");this.error_=!0;break}if(this.nextWireType_==jspb.BinaryConstants.WireType.START_GROUP)a.push(this.nextField_);else if(this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP&&this.nextField_!=a.pop()){goog.asserts.fail("Unmatched end-group tag");this.error_=!0;break}}while(0<a.length)};
jspb.BinaryReader.prototype.skipField=function(){switch(this.nextWireType_){case jspb.BinaryConstants.WireType.VARINT:this.skipVarintField();break;case jspb.BinaryConstants.WireType.FIXED64:this.skipFixed64Field();break;case jspb.BinaryConstants.WireType.DELIMITED:this.skipDelimitedField();break;case jspb.BinaryConstants.WireType.FIXED32:this.skipFixed32Field();break;case jspb.BinaryConstants.WireType.START_GROUP:this.skipGroup();break;default:goog.asserts.fail("Invalid wire encoding for field.")}};
jspb.BinaryReader.prototype.registerReadCallback=function(a,b){goog.isNull(this.readCallbacks_)&&(this.readCallbacks_={});goog.asserts.assert(!this.readCallbacks_[a]);this.readCallbacks_[a]=b};jspb.BinaryReader.prototype.runReadCallback=function(a){goog.asserts.assert(!goog.isNull(this.readCallbacks_));a=this.readCallbacks_[a];goog.asserts.assert(a);return a(this)};
jspb.BinaryReader.prototype.readAny=function(a){this.nextWireType_=jspb.BinaryConstants.FieldTypeToWireType(a);var b=jspb.BinaryConstants.FieldType;switch(a){case b.DOUBLE:return this.readDouble();case b.FLOAT:return this.readFloat();case b.INT64:return this.readInt64();case b.UINT64:return this.readUint64();case b.INT32:return this.readInt32();case b.FIXED64:return this.readFixed64();case b.FIXED32:return this.readFixed32();case b.BOOL:return this.readBool();case b.STRING:return this.readString();
case b.GROUP:goog.asserts.fail("Group field type not supported in readAny()");case b.MESSAGE:goog.asserts.fail("Message field type not supported in readAny()");case b.BYTES:return this.readBytes();case b.UINT32:return this.readUint32();case b.ENUM:return this.readEnum();case b.SFIXED32:return this.readSfixed32();case b.SFIXED64:return this.readSfixed64();case b.SINT32:return this.readSint32();case b.SINT64:return this.readSint64();case b.FHASH64:return this.readFixedHash64();case b.VHASH64:return this.readVarintHash64();
default:goog.asserts.fail("Invalid field type in readAny()")}return 0};jspb.BinaryReader.prototype.readMessage=function(a,b){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var c=this.decoder_.getEnd(),d=this.decoder_.readUnsignedVarint32(),d=this.decoder_.getCursor()+d;this.decoder_.setEnd(d);b(a,this);this.decoder_.setCursor(d);this.decoder_.setEnd(c)};
jspb.BinaryReader.prototype.readGroup=function(a,b,c){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.START_GROUP);goog.asserts.assert(this.nextField_==a);c(b,this);this.error_||this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP||(goog.asserts.fail("Group submessage did not end with an END_GROUP tag"),this.error_=!0)};
jspb.BinaryReader.prototype.getFieldDecoder=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32(),b=this.decoder_.getCursor(),c=b+a,a=jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(),b,a);this.decoder_.setCursor(c);return a};jspb.BinaryReader.prototype.readInt32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32()};
jspb.BinaryReader.prototype.readInt32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32String()};jspb.BinaryReader.prototype.readInt64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};jspb.BinaryReader.prototype.readInt64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64String()};
jspb.BinaryReader.prototype.readUint32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32()};jspb.BinaryReader.prototype.readUint32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32String()};jspb.BinaryReader.prototype.readUint64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64()};
jspb.BinaryReader.prototype.readUint64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64String()};jspb.BinaryReader.prototype.readSint32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint32()};jspb.BinaryReader.prototype.readSint64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64()};
jspb.BinaryReader.prototype.readSint64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64String()};jspb.BinaryReader.prototype.readFixed32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readUint32()};jspb.BinaryReader.prototype.readFixed64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64()};
jspb.BinaryReader.prototype.readFixed64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64String()};jspb.BinaryReader.prototype.readSfixed32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32()};jspb.BinaryReader.prototype.readSfixed32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32().toString()};
jspb.BinaryReader.prototype.readSfixed64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64()};jspb.BinaryReader.prototype.readSfixed64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64String()};jspb.BinaryReader.prototype.readFloat=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readFloat()};
jspb.BinaryReader.prototype.readDouble=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readDouble()};jspb.BinaryReader.prototype.readBool=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return!!this.decoder_.readUnsignedVarint32()};jspb.BinaryReader.prototype.readEnum=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};
jspb.BinaryReader.prototype.readString=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readString(a)};jspb.BinaryReader.prototype.readBytes=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readBytes(a)};
jspb.BinaryReader.prototype.readVarintHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readVarintHash64()};jspb.BinaryReader.prototype.readFixedHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readFixedHash64()};
jspb.BinaryReader.prototype.readPackedField_=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);for(var b=this.decoder_.readUnsignedVarint32(),b=this.decoder_.getCursor()+b,c=[];this.decoder_.getCursor()<b;)c.push(a.call(this.decoder_));return c};jspb.BinaryReader.prototype.readPackedInt32=function(){return this.readPackedField_(this.decoder_.readSignedVarint32)};jspb.BinaryReader.prototype.readPackedInt32String=function(){return this.readPackedField_(this.decoder_.readSignedVarint32String)};
jspb.BinaryReader.prototype.readPackedInt64=function(){return this.readPackedField_(this.decoder_.readSignedVarint64)};jspb.BinaryReader.prototype.readPackedInt64String=function(){return this.readPackedField_(this.decoder_.readSignedVarint64String)};jspb.BinaryReader.prototype.readPackedUint32=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32)};jspb.BinaryReader.prototype.readPackedUint32String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32String)};
jspb.BinaryReader.prototype.readPackedUint64=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64)};jspb.BinaryReader.prototype.readPackedUint64String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64String)};jspb.BinaryReader.prototype.readPackedSint32=function(){return this.readPackedField_(this.decoder_.readZigzagVarint32)};jspb.BinaryReader.prototype.readPackedSint64=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64)};
jspb.BinaryReader.prototype.readPackedSint64String=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64String)};jspb.BinaryReader.prototype.readPackedFixed32=function(){return this.readPackedField_(this.decoder_.readUint32)};jspb.BinaryReader.prototype.readPackedFixed64=function(){return this.readPackedField_(this.decoder_.readUint64)};jspb.BinaryReader.prototype.readPackedFixed64String=function(){return this.readPackedField_(this.decoder_.readUint64String)};
jspb.BinaryReader.prototype.readPackedSfixed32=function(){return this.readPackedField_(this.decoder_.readInt32)};jspb.BinaryReader.prototype.readPackedSfixed64=function(){return this.readPackedField_(this.decoder_.readInt64)};jspb.BinaryReader.prototype.readPackedSfixed64String=function(){return this.readPackedField_(this.decoder_.readInt64String)};jspb.BinaryReader.prototype.readPackedFloat=function(){return this.readPackedField_(this.decoder_.readFloat)};
jspb.BinaryReader.prototype.readPackedDouble=function(){return this.readPackedField_(this.decoder_.readDouble)};jspb.BinaryReader.prototype.readPackedBool=function(){return this.readPackedField_(this.decoder_.readBool)};jspb.BinaryReader.prototype.readPackedEnum=function(){return this.readPackedField_(this.decoder_.readEnum)};jspb.BinaryReader.prototype.readPackedVarintHash64=function(){return this.readPackedField_(this.decoder_.readVarintHash64)};
jspb.BinaryReader.prototype.readPackedFixedHash64=function(){return this.readPackedField_(this.decoder_.readFixedHash64)};jspb.Export={};exports.Map=jspb.Map;exports.Message=jspb.Message;exports.BinaryReader=jspb.BinaryReader;exports.BinaryWriter=jspb.BinaryWriter;exports.ExtensionFieldInfo=jspb.ExtensionFieldInfo;exports.ExtensionFieldBinaryInfo=jspb.ExtensionFieldBinaryInfo;exports.exportSymbol=goog.exportSymbol;exports.inherits=goog.inherits;exports.object={extend:goog.object.extend};exports.typeOf=goog.typeOf;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.protobuf.Any', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Any = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Any, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Any.displayName = 'proto.google.protobuf.Any';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Any.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Any.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Any} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Any.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Any}
 */
proto.google.protobuf.Any.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Any;
  return proto.google.protobuf.Any.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Any} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Any}
 */
proto.google.protobuf.Any.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeUrl(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Any.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.Any.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Any} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Any.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string type_url = 1;
 * @return {string}
 */
proto.google.protobuf.Any.prototype.getTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.Any.prototype.setTypeUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.google.protobuf.Any.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.google.protobuf.Any.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.google.protobuf.Any.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.protobuf.Any.prototype.setValue = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.google.protobuf);
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* This code will be inserted into generated code for
 * google/protobuf/any.proto. */

/**
 * Returns the type name contained in this instance, if any.
 * @return {string|undefined}
 */
proto.google.protobuf.Any.prototype.getTypeName = function() {
  return this.getTypeUrl().split('/').pop();
};


/**
 * Packs the given message instance into this Any.
 * @param {!Uint8Array} serialized The serialized data to pack.
 * @param {string} name The type name of this message object.
 * @param {string=} opt_typeUrlPrefix the type URL prefix.
 */
proto.google.protobuf.Any.prototype.pack = function(serialized, name,
                                                    opt_typeUrlPrefix) {
  if (!opt_typeUrlPrefix) {
    opt_typeUrlPrefix = 'type.googleapis.com/';
  }

  if (opt_typeUrlPrefix.substr(-1) != '/') {
    this.setTypeUrl(opt_typeUrlPrefix + '/' + name);
  } else {
    this.setTypeUrl(opt_typeUrlPrefix + name);
  }

  this.setValue(serialized);
};


/**
 * @template T
 * Unpacks this Any into the given message object.
 * @param {function(Uint8Array):T} deserialize Function that will deserialize
 *     the binary data properly.
 * @param {string} name The expected type name of this message object.
 * @return {?T} If the name matched the expected name, returns the deserialized
 *     object, otherwise returns null.
 */
proto.google.protobuf.Any.prototype.unpack = function(deserialize, name) {
  if (this.getTypeName() == name) {
    return deserialize(this.getValue_asU8());
  } else {
    return null;
  }
};

},{"google-protobuf":2}],4:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.protobuf.DescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.DescriptorProto.ExtensionRange', null, global);
goog.exportSymbol('proto.google.protobuf.DescriptorProto.ReservedRange', null, global);
goog.exportSymbol('proto.google.protobuf.EnumDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.EnumDescriptorProto.EnumReservedRange', null, global);
goog.exportSymbol('proto.google.protobuf.EnumOptions', null, global);
goog.exportSymbol('proto.google.protobuf.EnumValueDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.EnumValueOptions', null, global);
goog.exportSymbol('proto.google.protobuf.ExtensionRangeOptions', null, global);
goog.exportSymbol('proto.google.protobuf.FieldDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.FieldDescriptorProto.Label', null, global);
goog.exportSymbol('proto.google.protobuf.FieldDescriptorProto.Type', null, global);
goog.exportSymbol('proto.google.protobuf.FieldOptions', null, global);
goog.exportSymbol('proto.google.protobuf.FieldOptions.CType', null, global);
goog.exportSymbol('proto.google.protobuf.FieldOptions.JSType', null, global);
goog.exportSymbol('proto.google.protobuf.FileDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.FileDescriptorSet', null, global);
goog.exportSymbol('proto.google.protobuf.FileOptions', null, global);
goog.exportSymbol('proto.google.protobuf.FileOptions.OptimizeMode', null, global);
goog.exportSymbol('proto.google.protobuf.GeneratedCodeInfo', null, global);
goog.exportSymbol('proto.google.protobuf.GeneratedCodeInfo.Annotation', null, global);
goog.exportSymbol('proto.google.protobuf.MessageOptions', null, global);
goog.exportSymbol('proto.google.protobuf.MethodDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.MethodOptions', null, global);
goog.exportSymbol('proto.google.protobuf.MethodOptions.IdempotencyLevel', null, global);
goog.exportSymbol('proto.google.protobuf.OneofDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.OneofOptions', null, global);
goog.exportSymbol('proto.google.protobuf.ServiceDescriptorProto', null, global);
goog.exportSymbol('proto.google.protobuf.ServiceOptions', null, global);
goog.exportSymbol('proto.google.protobuf.SourceCodeInfo', null, global);
goog.exportSymbol('proto.google.protobuf.SourceCodeInfo.Location', null, global);
goog.exportSymbol('proto.google.protobuf.UninterpretedOption', null, global);
goog.exportSymbol('proto.google.protobuf.UninterpretedOption.NamePart', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FileDescriptorSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.FileDescriptorSet.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FileDescriptorSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FileDescriptorSet.displayName = 'proto.google.protobuf.FileDescriptorSet';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FileDescriptorSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FileDescriptorSet.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FileDescriptorSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FileDescriptorSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileDescriptorSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileList: jspb.Message.toObjectList(msg.getFileList(),
    proto.google.protobuf.FileDescriptorProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FileDescriptorSet}
 */
proto.google.protobuf.FileDescriptorSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FileDescriptorSet;
  return proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FileDescriptorSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FileDescriptorSet}
 */
proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.FileDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader);
      msg.addFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FileDescriptorSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FileDescriptorSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FileDescriptorSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileDescriptorSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FileDescriptorProto file = 1;
 * @return {!Array.<!proto.google.protobuf.FileDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorSet.prototype.getFileList = function() {
  return /** @type{!Array.<!proto.google.protobuf.FileDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FileDescriptorProto, 1));
};


/** @param {!Array.<!proto.google.protobuf.FileDescriptorProto>} value */
proto.google.protobuf.FileDescriptorSet.prototype.setFileList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.FileDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FileDescriptorProto}
 */
proto.google.protobuf.FileDescriptorSet.prototype.addFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.FileDescriptorProto, opt_index);
};


proto.google.protobuf.FileDescriptorSet.prototype.clearFileList = function() {
  this.setFileList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FileDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.FileDescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FileDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FileDescriptorProto.displayName = 'proto.google.protobuf.FileDescriptorProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FileDescriptorProto.repeatedFields_ = [3,10,11,4,5,6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FileDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FileDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FileDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    pb_package: jspb.Message.getField(msg, 2),
    dependencyList: jspb.Message.getRepeatedField(msg, 3),
    publicDependencyList: jspb.Message.getRepeatedField(msg, 10),
    weakDependencyList: jspb.Message.getRepeatedField(msg, 11),
    messageTypeList: jspb.Message.toObjectList(msg.getMessageTypeList(),
    proto.google.protobuf.DescriptorProto.toObject, includeInstance),
    enumTypeList: jspb.Message.toObjectList(msg.getEnumTypeList(),
    proto.google.protobuf.EnumDescriptorProto.toObject, includeInstance),
    serviceList: jspb.Message.toObjectList(msg.getServiceList(),
    proto.google.protobuf.ServiceDescriptorProto.toObject, includeInstance),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto.google.protobuf.FieldDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.FileOptions.toObject(includeInstance, f),
    sourceCodeInfo: (f = msg.getSourceCodeInfo()) && proto.google.protobuf.SourceCodeInfo.toObject(includeInstance, f),
    syntax: jspb.Message.getField(msg, 12)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FileDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FileDescriptorProto;
  return proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FileDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FileDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDependency(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.addPublicDependency(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.addWeakDependency(value);
      break;
    case 4:
      var value = new proto.google.protobuf.DescriptorProto;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader);
      msg.addMessageType(value);
      break;
    case 5:
      var value = new proto.google.protobuf.EnumDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader);
      msg.addEnumType(value);
      break;
    case 6:
      var value = new proto.google.protobuf.ServiceDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader);
      msg.addService(value);
      break;
    case 7:
      var value = new proto.google.protobuf.FieldDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 8:
      var value = new proto.google.protobuf.FileOptions;
      reader.readMessage(value,proto.google.protobuf.FileOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 9:
      var value = new proto.google.protobuf.SourceCodeInfo;
      reader.readMessage(value,proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader);
      msg.setSourceCodeInfo(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSyntax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FileDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FileDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDependencyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getPublicDependencyList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      10,
      f
    );
  }
  f = message.getWeakDependencyList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      11,
      f
    );
  }
  f = message.getMessageTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.DescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getEnumTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getServiceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.protobuf.FileOptions.serializeBinaryToWriter
    );
  }
  f = message.getSourceCodeInfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.FileDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string package = 2;
 * @return {string}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.protobuf.FileDescriptorProto.prototype.setPackage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearPackage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasPackage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string dependency = 3;
 * @return {!Array.<string>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getDependencyList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array.<string>} value */
proto.google.protobuf.FileDescriptorProto.prototype.setDependencyList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.google.protobuf.FileDescriptorProto.prototype.addDependency = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearDependencyList = function() {
  this.setDependencyList([]);
};


/**
 * repeated int32 public_dependency = 10;
 * @return {!Array.<number>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getPublicDependencyList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 10));
};


/** @param {!Array.<number>} value */
proto.google.protobuf.FileDescriptorProto.prototype.setPublicDependencyList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.google.protobuf.FileDescriptorProto.prototype.addPublicDependency = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearPublicDependencyList = function() {
  this.setPublicDependencyList([]);
};


/**
 * repeated int32 weak_dependency = 11;
 * @return {!Array.<number>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getWeakDependencyList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 11));
};


/** @param {!Array.<number>} value */
proto.google.protobuf.FileDescriptorProto.prototype.setWeakDependencyList = function(value) {
  jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.google.protobuf.FileDescriptorProto.prototype.addWeakDependency = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearWeakDependencyList = function() {
  this.setWeakDependencyList([]);
};


/**
 * repeated DescriptorProto message_type = 4;
 * @return {!Array.<!proto.google.protobuf.DescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getMessageTypeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.DescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 4));
};


/** @param {!Array.<!proto.google.protobuf.DescriptorProto>} value */
proto.google.protobuf.FileDescriptorProto.prototype.setMessageTypeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.protobuf.DescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.prototype.addMessageType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.protobuf.DescriptorProto, opt_index);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearMessageTypeList = function() {
  this.setMessageTypeList([]);
};


/**
 * repeated EnumDescriptorProto enum_type = 5;
 * @return {!Array.<!proto.google.protobuf.EnumDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getEnumTypeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.EnumDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 5));
};


/** @param {!Array.<!proto.google.protobuf.EnumDescriptorProto>} value */
proto.google.protobuf.FileDescriptorProto.prototype.setEnumTypeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.protobuf.EnumDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.prototype.addEnumType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.EnumDescriptorProto, opt_index);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearEnumTypeList = function() {
  this.setEnumTypeList([]);
};


/**
 * repeated ServiceDescriptorProto service = 6;
 * @return {!Array.<!proto.google.protobuf.ServiceDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getServiceList = function() {
  return /** @type{!Array.<!proto.google.protobuf.ServiceDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.ServiceDescriptorProto, 6));
};


/** @param {!Array.<!proto.google.protobuf.ServiceDescriptorProto>} value */
proto.google.protobuf.FileDescriptorProto.prototype.setServiceList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.ServiceDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.ServiceDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.prototype.addService = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.ServiceDescriptorProto, opt_index);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearServiceList = function() {
  this.setServiceList([]);
};


/**
 * repeated FieldDescriptorProto extension = 7;
 * @return {!Array.<!proto.google.protobuf.FieldDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getExtensionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.FieldDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 7));
};


/** @param {!Array.<!proto.google.protobuf.FieldDescriptorProto>} value */
proto.google.protobuf.FileDescriptorProto.prototype.setExtensionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.protobuf.FieldDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.protobuf.FieldDescriptorProto, opt_index);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearExtensionList = function() {
  this.setExtensionList([]);
};


/**
 * optional FileOptions options = 8;
 * @return {?proto.google.protobuf.FileOptions}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.FileOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FileOptions, 8));
};


/** @param {?proto.google.protobuf.FileOptions|undefined} value */
proto.google.protobuf.FileDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SourceCodeInfo source_code_info = 9;
 * @return {?proto.google.protobuf.SourceCodeInfo}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getSourceCodeInfo = function() {
  return /** @type{?proto.google.protobuf.SourceCodeInfo} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.SourceCodeInfo, 9));
};


/** @param {?proto.google.protobuf.SourceCodeInfo|undefined} value */
proto.google.protobuf.FileDescriptorProto.prototype.setSourceCodeInfo = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearSourceCodeInfo = function() {
  this.setSourceCodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasSourceCodeInfo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string syntax = 12;
 * @return {string}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getSyntax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.google.protobuf.FileDescriptorProto.prototype.setSyntax = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearSyntax = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileDescriptorProto.prototype.hasSyntax = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.DescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.DescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.DescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.DescriptorProto.displayName = 'proto.google.protobuf.DescriptorProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.DescriptorProto.repeatedFields_ = [2,6,3,4,5,8,9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    fieldList: jspb.Message.toObjectList(msg.getFieldList(),
    proto.google.protobuf.FieldDescriptorProto.toObject, includeInstance),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto.google.protobuf.FieldDescriptorProto.toObject, includeInstance),
    nestedTypeList: jspb.Message.toObjectList(msg.getNestedTypeList(),
    proto.google.protobuf.DescriptorProto.toObject, includeInstance),
    enumTypeList: jspb.Message.toObjectList(msg.getEnumTypeList(),
    proto.google.protobuf.EnumDescriptorProto.toObject, includeInstance),
    extensionRangeList: jspb.Message.toObjectList(msg.getExtensionRangeList(),
    proto.google.protobuf.DescriptorProto.ExtensionRange.toObject, includeInstance),
    oneofDeclList: jspb.Message.toObjectList(msg.getOneofDeclList(),
    proto.google.protobuf.OneofDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.MessageOptions.toObject(includeInstance, f),
    reservedRangeList: jspb.Message.toObjectList(msg.getReservedRangeList(),
    proto.google.protobuf.DescriptorProto.ReservedRange.toObject, includeInstance),
    reservedNameList: jspb.Message.getRepeatedField(msg, 10)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.DescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DescriptorProto;
  return proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.FieldDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader);
      msg.addField(value);
      break;
    case 6:
      var value = new proto.google.protobuf.FieldDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto.google.protobuf.DescriptorProto;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader);
      msg.addNestedType(value);
      break;
    case 4:
      var value = new proto.google.protobuf.EnumDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader);
      msg.addEnumType(value);
      break;
    case 5:
      var value = new proto.google.protobuf.DescriptorProto.ExtensionRange;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader);
      msg.addExtensionRange(value);
      break;
    case 8:
      var value = new proto.google.protobuf.OneofDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader);
      msg.addOneofDecl(value);
      break;
    case 7:
      var value = new proto.google.protobuf.MessageOptions;
      reader.readMessage(value,proto.google.protobuf.MessageOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 9:
      var value = new proto.google.protobuf.DescriptorProto.ReservedRange;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader);
      msg.addReservedRange(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addReservedName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.DescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.DescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getNestedTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.protobuf.DescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getEnumTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getExtensionRangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter
    );
  }
  f = message.getOneofDeclList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.protobuf.MessageOptions.serializeBinaryToWriter
    );
  }
  f = message.getReservedRangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter
    );
  }
  f = message.getReservedNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.DescriptorProto.ExtensionRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.DescriptorProto.ExtensionRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.DescriptorProto.ExtensionRange.displayName = 'proto.google.protobuf.DescriptorProto.ExtensionRange';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DescriptorProto.ExtensionRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getField(msg, 1),
    end: jspb.Message.getField(msg, 2),
    options: (f = msg.getOptions()) && proto.google.protobuf.ExtensionRangeOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DescriptorProto.ExtensionRange;
  return proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    case 3:
      var value = new proto.google.protobuf.ExtensionRangeOptions;
      reader.readMessage(value,proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 start = 1;
 * @return {number}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setStart = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearStart = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 end = 2;
 * @return {number}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setEnd = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearEnd = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ExtensionRangeOptions options = 3;
 * @return {?proto.google.protobuf.ExtensionRangeOptions}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.ExtensionRangeOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.ExtensionRangeOptions, 3));
};


/** @param {?proto.google.protobuf.ExtensionRangeOptions|undefined} value */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.DescriptorProto.ReservedRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.DescriptorProto.ReservedRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.DescriptorProto.ReservedRange.displayName = 'proto.google.protobuf.DescriptorProto.ReservedRange';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DescriptorProto.ReservedRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.ReservedRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getField(msg, 1),
    end: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DescriptorProto.ReservedRange;
  return proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 start = 1;
 * @return {number}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setStart = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearStart = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 end = 2;
 * @return {number}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setEnd = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearEnd = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.DescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.DescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.DescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated FieldDescriptorProto field = 2;
 * @return {!Array.<!proto.google.protobuf.FieldDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getFieldList = function() {
  return /** @type{!Array.<!proto.google.protobuf.FieldDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 2));
};


/** @param {!Array.<!proto.google.protobuf.FieldDescriptorProto>} value */
proto.google.protobuf.DescriptorProto.prototype.setFieldList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.FieldDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addField = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.FieldDescriptorProto, opt_index);
};


proto.google.protobuf.DescriptorProto.prototype.clearFieldList = function() {
  this.setFieldList([]);
};


/**
 * repeated FieldDescriptorProto extension = 6;
 * @return {!Array.<!proto.google.protobuf.FieldDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getExtensionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.FieldDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 6));
};


/** @param {!Array.<!proto.google.protobuf.FieldDescriptorProto>} value */
proto.google.protobuf.DescriptorProto.prototype.setExtensionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.FieldDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.FieldDescriptorProto, opt_index);
};


proto.google.protobuf.DescriptorProto.prototype.clearExtensionList = function() {
  this.setExtensionList([]);
};


/**
 * repeated DescriptorProto nested_type = 3;
 * @return {!Array.<!proto.google.protobuf.DescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getNestedTypeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.DescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 3));
};


/** @param {!Array.<!proto.google.protobuf.DescriptorProto>} value */
proto.google.protobuf.DescriptorProto.prototype.setNestedTypeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.DescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addNestedType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.DescriptorProto, opt_index);
};


proto.google.protobuf.DescriptorProto.prototype.clearNestedTypeList = function() {
  this.setNestedTypeList([]);
};


/**
 * repeated EnumDescriptorProto enum_type = 4;
 * @return {!Array.<!proto.google.protobuf.EnumDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getEnumTypeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.EnumDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 4));
};


/** @param {!Array.<!proto.google.protobuf.EnumDescriptorProto>} value */
proto.google.protobuf.DescriptorProto.prototype.setEnumTypeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.protobuf.EnumDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addEnumType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.protobuf.EnumDescriptorProto, opt_index);
};


proto.google.protobuf.DescriptorProto.prototype.clearEnumTypeList = function() {
  this.setEnumTypeList([]);
};


/**
 * repeated ExtensionRange extension_range = 5;
 * @return {!Array.<!proto.google.protobuf.DescriptorProto.ExtensionRange>}
 */
proto.google.protobuf.DescriptorProto.prototype.getExtensionRangeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.DescriptorProto.ExtensionRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ExtensionRange, 5));
};


/** @param {!Array.<!proto.google.protobuf.DescriptorProto.ExtensionRange>} value */
proto.google.protobuf.DescriptorProto.prototype.setExtensionRangeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange}
 */
proto.google.protobuf.DescriptorProto.prototype.addExtensionRange = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.DescriptorProto.ExtensionRange, opt_index);
};


proto.google.protobuf.DescriptorProto.prototype.clearExtensionRangeList = function() {
  this.setExtensionRangeList([]);
};


/**
 * repeated OneofDescriptorProto oneof_decl = 8;
 * @return {!Array.<!proto.google.protobuf.OneofDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getOneofDeclList = function() {
  return /** @type{!Array.<!proto.google.protobuf.OneofDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.OneofDescriptorProto, 8));
};


/** @param {!Array.<!proto.google.protobuf.OneofDescriptorProto>} value */
proto.google.protobuf.DescriptorProto.prototype.setOneofDeclList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.protobuf.OneofDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.OneofDescriptorProto}
 */
proto.google.protobuf.DescriptorProto.prototype.addOneofDecl = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.protobuf.OneofDescriptorProto, opt_index);
};


proto.google.protobuf.DescriptorProto.prototype.clearOneofDeclList = function() {
  this.setOneofDeclList([]);
};


/**
 * optional MessageOptions options = 7;
 * @return {?proto.google.protobuf.MessageOptions}
 */
proto.google.protobuf.DescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.MessageOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.MessageOptions, 7));
};


/** @param {?proto.google.protobuf.MessageOptions|undefined} value */
proto.google.protobuf.DescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.DescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated ReservedRange reserved_range = 9;
 * @return {!Array.<!proto.google.protobuf.DescriptorProto.ReservedRange>}
 */
proto.google.protobuf.DescriptorProto.prototype.getReservedRangeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.DescriptorProto.ReservedRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ReservedRange, 9));
};


/** @param {!Array.<!proto.google.protobuf.DescriptorProto.ReservedRange>} value */
proto.google.protobuf.DescriptorProto.prototype.setReservedRangeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange}
 */
proto.google.protobuf.DescriptorProto.prototype.addReservedRange = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.protobuf.DescriptorProto.ReservedRange, opt_index);
};


proto.google.protobuf.DescriptorProto.prototype.clearReservedRangeList = function() {
  this.setReservedRangeList([]);
};


/**
 * repeated string reserved_name = 10;
 * @return {!Array.<string>}
 */
proto.google.protobuf.DescriptorProto.prototype.getReservedNameList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/** @param {!Array.<string>} value */
proto.google.protobuf.DescriptorProto.prototype.setReservedNameList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.google.protobuf.DescriptorProto.prototype.addReservedName = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.google.protobuf.DescriptorProto.prototype.clearReservedNameList = function() {
  this.setReservedNameList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.ExtensionRangeOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.ExtensionRangeOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ExtensionRangeOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.ExtensionRangeOptions.displayName = 'proto.google.protobuf.ExtensionRangeOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ExtensionRangeOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ExtensionRangeOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ExtensionRangeOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ExtensionRangeOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ExtensionRangeOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.ExtensionRangeOptions.extensions, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.ExtensionRangeOptions}
 */
proto.google.protobuf.ExtensionRangeOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ExtensionRangeOptions;
  return proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ExtensionRangeOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ExtensionRangeOptions}
 */
proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.ExtensionRangeOptions.extensionsBinary,
        proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension,
        proto.google.protobuf.ExtensionRangeOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.ExtensionRangeOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ExtensionRangeOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.ExtensionRangeOptions.extensionsBinary, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.ExtensionRangeOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption>} value */
proto.google.protobuf.ExtensionRangeOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.ExtensionRangeOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


proto.google.protobuf.ExtensionRangeOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.ExtensionRangeOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.ExtensionRangeOptions.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FieldDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.FieldDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FieldDescriptorProto.displayName = 'proto.google.protobuf.FieldDescriptorProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FieldDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FieldDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FieldDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    number: jspb.Message.getField(msg, 3),
    label: jspb.Message.getField(msg, 4),
    type: jspb.Message.getField(msg, 5),
    typeName: jspb.Message.getField(msg, 6),
    extendee: jspb.Message.getField(msg, 2),
    defaultValue: jspb.Message.getField(msg, 7),
    oneofIndex: jspb.Message.getField(msg, 9),
    jsonName: jspb.Message.getField(msg, 10),
    options: (f = msg.getOptions()) && proto.google.protobuf.FieldOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.FieldDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FieldDescriptorProto;
  return proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FieldDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {!proto.google.protobuf.FieldDescriptorProto.Label} */ (reader.readEnum());
      msg.setLabel(value);
      break;
    case 5:
      var value = /** @type {!proto.google.protobuf.FieldDescriptorProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtendee(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOneofIndex(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonName(value);
      break;
    case 8:
      var value = new proto.google.protobuf.FieldOptions;
      reader.readMessage(value,proto.google.protobuf.FieldOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FieldDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.FieldDescriptorProto.Label} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.FieldDescriptorProto.Type} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.protobuf.FieldOptions.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.protobuf.FieldDescriptorProto.Type = {
  TYPE_DOUBLE: 1,
  TYPE_FLOAT: 2,
  TYPE_INT64: 3,
  TYPE_UINT64: 4,
  TYPE_INT32: 5,
  TYPE_FIXED64: 6,
  TYPE_FIXED32: 7,
  TYPE_BOOL: 8,
  TYPE_STRING: 9,
  TYPE_GROUP: 10,
  TYPE_MESSAGE: 11,
  TYPE_BYTES: 12,
  TYPE_UINT32: 13,
  TYPE_ENUM: 14,
  TYPE_SFIXED32: 15,
  TYPE_SFIXED64: 16,
  TYPE_SINT32: 17,
  TYPE_SINT64: 18
};

/**
 * @enum {number}
 */
proto.google.protobuf.FieldDescriptorProto.Label = {
  LABEL_OPTIONAL: 1,
  LABEL_REQUIRED: 2,
  LABEL_REPEATED: 3
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 number = 3;
 * @return {number}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setNumber = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearNumber = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Label label = 4;
 * @return {!proto.google.protobuf.FieldDescriptorProto.Label}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getLabel = function() {
  return /** @type {!proto.google.protobuf.FieldDescriptorProto.Label} */ (jspb.Message.getFieldWithDefault(this, 4, 1));
};


/** @param {!proto.google.protobuf.FieldDescriptorProto.Label} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setLabel = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearLabel = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Type type = 5;
 * @return {!proto.google.protobuf.FieldDescriptorProto.Type}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getType = function() {
  return /** @type {!proto.google.protobuf.FieldDescriptorProto.Type} */ (jspb.Message.getFieldWithDefault(this, 5, 1));
};


/** @param {!proto.google.protobuf.FieldDescriptorProto.Type} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setType = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearType = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string type_name = 6;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setTypeName = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearTypeName = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasTypeName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string extendee = 2;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getExtendee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setExtendee = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearExtendee = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasExtendee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string default_value = 7;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getDefaultValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setDefaultValue = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearDefaultValue = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasDefaultValue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 oneof_index = 9;
 * @return {number}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getOneofIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setOneofIndex = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearOneofIndex = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasOneofIndex = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string json_name = 10;
 * @return {string}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getJsonName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setJsonName = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearJsonName = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasJsonName = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional FieldOptions options = 8;
 * @return {?proto.google.protobuf.FieldOptions}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.FieldOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FieldOptions, 8));
};


/** @param {?proto.google.protobuf.FieldOptions|undefined} value */
proto.google.protobuf.FieldDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.OneofDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.OneofDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.OneofDescriptorProto.displayName = 'proto.google.protobuf.OneofDescriptorProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.OneofDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.OneofDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.OneofDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    options: (f = msg.getOptions()) && proto.google.protobuf.OneofOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.OneofDescriptorProto}
 */
proto.google.protobuf.OneofDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.OneofDescriptorProto;
  return proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.OneofDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.OneofDescriptorProto}
 */
proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.OneofOptions;
      reader.readMessage(value,proto.google.protobuf.OneofOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.OneofDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.OneofOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.OneofDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.OneofDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OneofOptions options = 2;
 * @return {?proto.google.protobuf.OneofOptions}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.OneofOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.OneofOptions, 2));
};


/** @param {?proto.google.protobuf.OneofOptions|undefined} value */
proto.google.protobuf.OneofDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.protobuf.OneofDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.EnumDescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumDescriptorProto.displayName = 'proto.google.protobuf.EnumDescriptorProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumDescriptorProto.repeatedFields_ = [2,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    proto.google.protobuf.EnumValueDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.EnumOptions.toObject(includeInstance, f),
    reservedRangeList: jspb.Message.toObjectList(msg.getReservedRangeList(),
    proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject, includeInstance),
    reservedNameList: jspb.Message.getRepeatedField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.EnumDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumDescriptorProto;
  return proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.EnumValueDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader);
      msg.addValue(value);
      break;
    case 3:
      var value = new proto.google.protobuf.EnumOptions;
      reader.readMessage(value,proto.google.protobuf.EnumOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 4:
      var value = new proto.google.protobuf.EnumDescriptorProto.EnumReservedRange;
      reader.readMessage(value,proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader);
      msg.addReservedRange(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addReservedName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.EnumOptions.serializeBinaryToWriter
    );
  }
  f = message.getReservedRangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter
    );
  }
  f = message.getReservedNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.displayName = 'proto.google.protobuf.EnumDescriptorProto.EnumReservedRange';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getField(msg, 1),
    end: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumDescriptorProto.EnumReservedRange;
  return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 start = 1;
 * @return {number}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.setStart = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.clearStart = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 end = 2;
 * @return {number}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.setEnd = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.clearEnd = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.EnumDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.EnumDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated EnumValueDescriptorProto value = 2;
 * @return {!Array.<!proto.google.protobuf.EnumValueDescriptorProto>}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getValueList = function() {
  return /** @type{!Array.<!proto.google.protobuf.EnumValueDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumValueDescriptorProto, 2));
};


/** @param {!Array.<!proto.google.protobuf.EnumValueDescriptorProto>} value */
proto.google.protobuf.EnumDescriptorProto.prototype.setValueList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.EnumValueDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.EnumValueDescriptorProto}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.EnumValueDescriptorProto, opt_index);
};


proto.google.protobuf.EnumDescriptorProto.prototype.clearValueList = function() {
  this.setValueList([]);
};


/**
 * optional EnumOptions options = 3;
 * @return {?proto.google.protobuf.EnumOptions}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.EnumOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.EnumOptions, 3));
};


/** @param {?proto.google.protobuf.EnumOptions|undefined} value */
proto.google.protobuf.EnumDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.protobuf.EnumDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated EnumReservedRange reserved_range = 4;
 * @return {!Array.<!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange>}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getReservedRangeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, 4));
};


/** @param {!Array.<!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange>} value */
proto.google.protobuf.EnumDescriptorProto.prototype.setReservedRangeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.EnumDescriptorProto.EnumReservedRange}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.addReservedRange = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, opt_index);
};


proto.google.protobuf.EnumDescriptorProto.prototype.clearReservedRangeList = function() {
  this.setReservedRangeList([]);
};


/**
 * repeated string reserved_name = 5;
 * @return {!Array.<string>}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getReservedNameList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array.<string>} value */
proto.google.protobuf.EnumDescriptorProto.prototype.setReservedNameList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.google.protobuf.EnumDescriptorProto.prototype.addReservedName = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.google.protobuf.EnumDescriptorProto.prototype.clearReservedNameList = function() {
  this.setReservedNameList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumValueDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.EnumValueDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumValueDescriptorProto.displayName = 'proto.google.protobuf.EnumValueDescriptorProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumValueDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumValueDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumValueDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    number: jspb.Message.getField(msg, 2),
    options: (f = msg.getOptions()) && proto.google.protobuf.EnumValueOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumValueDescriptorProto}
 */
proto.google.protobuf.EnumValueDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumValueDescriptorProto;
  return proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumValueDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumValueDescriptorProto}
 */
proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 3:
      var value = new proto.google.protobuf.EnumValueOptions;
      reader.readMessage(value,proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumValueDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.EnumValueDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.EnumValueDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 number = 2;
 * @return {number}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.protobuf.EnumValueDescriptorProto.prototype.setNumber = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.EnumValueDescriptorProto.prototype.clearNumber = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EnumValueOptions options = 3;
 * @return {?proto.google.protobuf.EnumValueOptions}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.EnumValueOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.EnumValueOptions, 3));
};


/** @param {?proto.google.protobuf.EnumValueOptions|undefined} value */
proto.google.protobuf.EnumValueDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.protobuf.EnumValueDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.ServiceDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.ServiceDescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ServiceDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.ServiceDescriptorProto.displayName = 'proto.google.protobuf.ServiceDescriptorProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ServiceDescriptorProto.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ServiceDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ServiceDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ServiceDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    methodList: jspb.Message.toObjectList(msg.getMethodList(),
    proto.google.protobuf.MethodDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.ServiceOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.ServiceDescriptorProto}
 */
proto.google.protobuf.ServiceDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ServiceDescriptorProto;
  return proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ServiceDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ServiceDescriptorProto}
 */
proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.MethodDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader);
      msg.addMethod(value);
      break;
    case 3:
      var value = new proto.google.protobuf.ServiceOptions;
      reader.readMessage(value,proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ServiceDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethodList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.ServiceOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.ServiceDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.ServiceDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MethodDescriptorProto method = 2;
 * @return {!Array.<!proto.google.protobuf.MethodDescriptorProto>}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.getMethodList = function() {
  return /** @type{!Array.<!proto.google.protobuf.MethodDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.MethodDescriptorProto, 2));
};


/** @param {!Array.<!proto.google.protobuf.MethodDescriptorProto>} value */
proto.google.protobuf.ServiceDescriptorProto.prototype.setMethodList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.MethodDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.MethodDescriptorProto}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.addMethod = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.MethodDescriptorProto, opt_index);
};


proto.google.protobuf.ServiceDescriptorProto.prototype.clearMethodList = function() {
  this.setMethodList([]);
};


/**
 * optional ServiceOptions options = 3;
 * @return {?proto.google.protobuf.ServiceOptions}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.ServiceOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.ServiceOptions, 3));
};


/** @param {?proto.google.protobuf.ServiceOptions|undefined} value */
proto.google.protobuf.ServiceDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.protobuf.ServiceDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.MethodDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.MethodDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.MethodDescriptorProto.displayName = 'proto.google.protobuf.MethodDescriptorProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.MethodDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.MethodDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MethodDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    inputType: jspb.Message.getField(msg, 2),
    outputType: jspb.Message.getField(msg, 3),
    options: (f = msg.getOptions()) && proto.google.protobuf.MethodOptions.toObject(includeInstance, f),
    clientStreaming: jspb.Message.getFieldWithDefault(msg, 5, false),
    serverStreaming: jspb.Message.getFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.MethodDescriptorProto}
 */
proto.google.protobuf.MethodDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.MethodDescriptorProto;
  return proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.MethodDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.MethodDescriptorProto}
 */
proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputType(value);
      break;
    case 4:
      var value = new proto.google.protobuf.MethodOptions;
      reader.readMessage(value,proto.google.protobuf.MethodOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClientStreaming(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setServerStreaming(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.MethodDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.protobuf.MethodOptions.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.MethodDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string input_type = 2;
 * @return {string}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getInputType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.protobuf.MethodDescriptorProto.prototype.setInputType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearInputType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasInputType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string output_type = 3;
 * @return {string}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getOutputType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.protobuf.MethodDescriptorProto.prototype.setOutputType = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearOutputType = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasOutputType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MethodOptions options = 4;
 * @return {?proto.google.protobuf.MethodOptions}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.MethodOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.MethodOptions, 4));
};


/** @param {?proto.google.protobuf.MethodOptions|undefined} value */
proto.google.protobuf.MethodDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool client_streaming = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getClientStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.google.protobuf.MethodDescriptorProto.prototype.setClientStreaming = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearClientStreaming = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasClientStreaming = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool server_streaming = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getServerStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.protobuf.MethodDescriptorProto.prototype.setServerStreaming = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearServerStreaming = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.hasServerStreaming = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FileOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.FileOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FileOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FileOptions.displayName = 'proto.google.protobuf.FileOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FileOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FileOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FileOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FileOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    javaPackage: jspb.Message.getField(msg, 1),
    javaOuterClassname: jspb.Message.getField(msg, 8),
    javaMultipleFiles: jspb.Message.getFieldWithDefault(msg, 10, false),
    javaGenerateEqualsAndHash: jspb.Message.getField(msg, 20),
    javaStringCheckUtf8: jspb.Message.getFieldWithDefault(msg, 27, false),
    optimizeFor: jspb.Message.getFieldWithDefault(msg, 9, 1),
    goPackage: jspb.Message.getField(msg, 11),
    ccGenericServices: jspb.Message.getFieldWithDefault(msg, 16, false),
    javaGenericServices: jspb.Message.getFieldWithDefault(msg, 17, false),
    pyGenericServices: jspb.Message.getFieldWithDefault(msg, 18, false),
    phpGenericServices: jspb.Message.getFieldWithDefault(msg, 42, false),
    deprecated: jspb.Message.getFieldWithDefault(msg, 23, false),
    ccEnableArenas: jspb.Message.getFieldWithDefault(msg, 31, false),
    objcClassPrefix: jspb.Message.getField(msg, 36),
    csharpNamespace: jspb.Message.getField(msg, 37),
    swiftPrefix: jspb.Message.getField(msg, 39),
    phpClassPrefix: jspb.Message.getField(msg, 40),
    phpNamespace: jspb.Message.getField(msg, 41),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.FileOptions.extensions, proto.google.protobuf.FileOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FileOptions}
 */
proto.google.protobuf.FileOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FileOptions;
  return proto.google.protobuf.FileOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FileOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FileOptions}
 */
proto.google.protobuf.FileOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJavaPackage(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setJavaOuterClassname(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaMultipleFiles(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaGenerateEqualsAndHash(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaStringCheckUtf8(value);
      break;
    case 9:
      var value = /** @type {!proto.google.protobuf.FileOptions.OptimizeMode} */ (reader.readEnum());
      msg.setOptimizeFor(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoPackage(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCcGenericServices(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaGenericServices(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPyGenericServices(value);
      break;
    case 42:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPhpGenericServices(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 31:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCcEnableArenas(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjcClassPrefix(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readString());
      msg.setCsharpNamespace(value);
      break;
    case 39:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwiftPrefix(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhpClassPrefix(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhpNamespace(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.FileOptions.extensionsBinary,
        proto.google.protobuf.FileOptions.prototype.getExtension,
        proto.google.protobuf.FileOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FileOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FileOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FileOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FileOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBool(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeBool(
      27,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.FileOptions.OptimizeMode} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 42));
  if (f != null) {
    writer.writeBool(
      42,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeBool(
      23,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeBool(
      31,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 36));
  if (f != null) {
    writer.writeString(
      36,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 37));
  if (f != null) {
    writer.writeString(
      37,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 39));
  if (f != null) {
    writer.writeString(
      39,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 40));
  if (f != null) {
    writer.writeString(
      40,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 41));
  if (f != null) {
    writer.writeString(
      41,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.FileOptions.extensionsBinary, proto.google.protobuf.FileOptions.prototype.getExtension);
};


/**
 * @enum {number}
 */
proto.google.protobuf.FileOptions.OptimizeMode = {
  SPEED: 1,
  CODE_SIZE: 2,
  LITE_RUNTIME: 3
};

/**
 * optional string java_package = 1;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getJavaPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.FileOptions.prototype.setJavaPackage = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaPackage = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaPackage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string java_outer_classname = 8;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getJavaOuterClassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.google.protobuf.FileOptions.prototype.setJavaOuterClassname = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaOuterClassname = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaOuterClassname = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool java_multiple_files = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaMultipleFiles = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.google.protobuf.FileOptions.prototype.setJavaMultipleFiles = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaMultipleFiles = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaMultipleFiles = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool java_generate_equals_and_hash = 20;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaGenerateEqualsAndHash = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 20, false));
};


/** @param {boolean} value */
proto.google.protobuf.FileOptions.prototype.setJavaGenerateEqualsAndHash = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaGenerateEqualsAndHash = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaGenerateEqualsAndHash = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool java_string_check_utf8 = 27;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaStringCheckUtf8 = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 27, false));
};


/** @param {boolean} value */
proto.google.protobuf.FileOptions.prototype.setJavaStringCheckUtf8 = function(value) {
  jspb.Message.setField(this, 27, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaStringCheckUtf8 = function() {
  jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaStringCheckUtf8 = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional OptimizeMode optimize_for = 9;
 * @return {!proto.google.protobuf.FileOptions.OptimizeMode}
 */
proto.google.protobuf.FileOptions.prototype.getOptimizeFor = function() {
  return /** @type {!proto.google.protobuf.FileOptions.OptimizeMode} */ (jspb.Message.getFieldWithDefault(this, 9, 1));
};


/** @param {!proto.google.protobuf.FileOptions.OptimizeMode} value */
proto.google.protobuf.FileOptions.prototype.setOptimizeFor = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.google.protobuf.FileOptions.prototype.clearOptimizeFor = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasOptimizeFor = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string go_package = 11;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getGoPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.google.protobuf.FileOptions.prototype.setGoPackage = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.google.protobuf.FileOptions.prototype.clearGoPackage = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasGoPackage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool cc_generic_services = 16;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getCcGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 16, false));
};


/** @param {boolean} value */
proto.google.protobuf.FileOptions.prototype.setCcGenericServices = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.google.protobuf.FileOptions.prototype.clearCcGenericServices = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasCcGenericServices = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool java_generic_services = 17;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 17, false));
};


/** @param {boolean} value */
proto.google.protobuf.FileOptions.prototype.setJavaGenericServices = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaGenericServices = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasJavaGenericServices = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool py_generic_services = 18;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getPyGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 18, false));
};


/** @param {boolean} value */
proto.google.protobuf.FileOptions.prototype.setPyGenericServices = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.google.protobuf.FileOptions.prototype.clearPyGenericServices = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasPyGenericServices = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool php_generic_services = 42;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getPhpGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 42, false));
};


/** @param {boolean} value */
proto.google.protobuf.FileOptions.prototype.setPhpGenericServices = function(value) {
  jspb.Message.setField(this, 42, value);
};


proto.google.protobuf.FileOptions.prototype.clearPhpGenericServices = function() {
  jspb.Message.setField(this, 42, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasPhpGenericServices = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional bool deprecated = 23;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 23, false));
};


/** @param {boolean} value */
proto.google.protobuf.FileOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.google.protobuf.FileOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional bool cc_enable_arenas = 31;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getCcEnableArenas = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 31, false));
};


/** @param {boolean} value */
proto.google.protobuf.FileOptions.prototype.setCcEnableArenas = function(value) {
  jspb.Message.setField(this, 31, value);
};


proto.google.protobuf.FileOptions.prototype.clearCcEnableArenas = function() {
  jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasCcEnableArenas = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional string objc_class_prefix = 36;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getObjcClassPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/** @param {string} value */
proto.google.protobuf.FileOptions.prototype.setObjcClassPrefix = function(value) {
  jspb.Message.setField(this, 36, value);
};


proto.google.protobuf.FileOptions.prototype.clearObjcClassPrefix = function() {
  jspb.Message.setField(this, 36, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasObjcClassPrefix = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional string csharp_namespace = 37;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getCsharpNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 37, ""));
};


/** @param {string} value */
proto.google.protobuf.FileOptions.prototype.setCsharpNamespace = function(value) {
  jspb.Message.setField(this, 37, value);
};


proto.google.protobuf.FileOptions.prototype.clearCsharpNamespace = function() {
  jspb.Message.setField(this, 37, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasCsharpNamespace = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional string swift_prefix = 39;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getSwiftPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 39, ""));
};


/** @param {string} value */
proto.google.protobuf.FileOptions.prototype.setSwiftPrefix = function(value) {
  jspb.Message.setField(this, 39, value);
};


proto.google.protobuf.FileOptions.prototype.clearSwiftPrefix = function() {
  jspb.Message.setField(this, 39, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasSwiftPrefix = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional string php_class_prefix = 40;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getPhpClassPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/** @param {string} value */
proto.google.protobuf.FileOptions.prototype.setPhpClassPrefix = function(value) {
  jspb.Message.setField(this, 40, value);
};


proto.google.protobuf.FileOptions.prototype.clearPhpClassPrefix = function() {
  jspb.Message.setField(this, 40, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasPhpClassPrefix = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional string php_namespace = 41;
 * @return {string}
 */
proto.google.protobuf.FileOptions.prototype.getPhpNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/** @param {string} value */
proto.google.protobuf.FileOptions.prototype.setPhpNamespace = function(value) {
  jspb.Message.setField(this, 41, value);
};


proto.google.protobuf.FileOptions.prototype.clearPhpNamespace = function() {
  jspb.Message.setField(this, 41, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FileOptions.prototype.hasPhpNamespace = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.FileOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption>} value */
proto.google.protobuf.FileOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.FileOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


proto.google.protobuf.FileOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.FileOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.FileOptions.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.MessageOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.MessageOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.MessageOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.MessageOptions.displayName = 'proto.google.protobuf.MessageOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.MessageOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.MessageOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.MessageOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.MessageOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MessageOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageSetWireFormat: jspb.Message.getFieldWithDefault(msg, 1, false),
    noStandardDescriptorAccessor: jspb.Message.getFieldWithDefault(msg, 2, false),
    deprecated: jspb.Message.getFieldWithDefault(msg, 3, false),
    mapEntry: jspb.Message.getField(msg, 7),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.MessageOptions.extensions, proto.google.protobuf.MessageOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.MessageOptions}
 */
proto.google.protobuf.MessageOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.MessageOptions;
  return proto.google.protobuf.MessageOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.MessageOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.MessageOptions}
 */
proto.google.protobuf.MessageOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMessageSetWireFormat(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoStandardDescriptorAccessor(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMapEntry(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.MessageOptions.extensionsBinary,
        proto.google.protobuf.MessageOptions.prototype.getExtension,
        proto.google.protobuf.MessageOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.MessageOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.MessageOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.MessageOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MessageOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.MessageOptions.extensionsBinary, proto.google.protobuf.MessageOptions.prototype.getExtension);
};


/**
 * optional bool message_set_wire_format = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getMessageSetWireFormat = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.google.protobuf.MessageOptions.prototype.setMessageSetWireFormat = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.MessageOptions.prototype.clearMessageSetWireFormat = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MessageOptions.prototype.hasMessageSetWireFormat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool no_standard_descriptor_accessor = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getNoStandardDescriptorAccessor = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.protobuf.MessageOptions.prototype.setNoStandardDescriptorAccessor = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.MessageOptions.prototype.clearNoStandardDescriptorAccessor = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MessageOptions.prototype.hasNoStandardDescriptorAccessor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool deprecated = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.google.protobuf.MessageOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.MessageOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MessageOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool map_entry = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getMapEntry = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.google.protobuf.MessageOptions.prototype.setMapEntry = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.google.protobuf.MessageOptions.prototype.clearMapEntry = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MessageOptions.prototype.hasMapEntry = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.MessageOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption>} value */
proto.google.protobuf.MessageOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.MessageOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


proto.google.protobuf.MessageOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.MessageOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.MessageOptions.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FieldOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.FieldOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FieldOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FieldOptions.displayName = 'proto.google.protobuf.FieldOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FieldOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FieldOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FieldOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FieldOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FieldOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ctype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    packed: jspb.Message.getField(msg, 2),
    jstype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    lazy: jspb.Message.getFieldWithDefault(msg, 5, false),
    deprecated: jspb.Message.getFieldWithDefault(msg, 3, false),
    weak: jspb.Message.getFieldWithDefault(msg, 10, false),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.FieldOptions.extensions, proto.google.protobuf.FieldOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FieldOptions}
 */
proto.google.protobuf.FieldOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FieldOptions;
  return proto.google.protobuf.FieldOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FieldOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FieldOptions}
 */
proto.google.protobuf.FieldOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.FieldOptions.CType} */ (reader.readEnum());
      msg.setCtype(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacked(value);
      break;
    case 6:
      var value = /** @type {!proto.google.protobuf.FieldOptions.JSType} */ (reader.readEnum());
      msg.setJstype(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLazy(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWeak(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.FieldOptions.extensionsBinary,
        proto.google.protobuf.FieldOptions.prototype.getExtension,
        proto.google.protobuf.FieldOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FieldOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.FieldOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FieldOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.FieldOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.google.protobuf.FieldOptions.CType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.FieldOptions.JSType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.FieldOptions.extensionsBinary, proto.google.protobuf.FieldOptions.prototype.getExtension);
};


/**
 * @enum {number}
 */
proto.google.protobuf.FieldOptions.CType = {
  STRING: 0,
  CORD: 1,
  STRING_PIECE: 2
};

/**
 * @enum {number}
 */
proto.google.protobuf.FieldOptions.JSType = {
  JS_NORMAL: 0,
  JS_STRING: 1,
  JS_NUMBER: 2
};

/**
 * optional CType ctype = 1;
 * @return {!proto.google.protobuf.FieldOptions.CType}
 */
proto.google.protobuf.FieldOptions.prototype.getCtype = function() {
  return /** @type {!proto.google.protobuf.FieldOptions.CType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.protobuf.FieldOptions.CType} value */
proto.google.protobuf.FieldOptions.prototype.setCtype = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.FieldOptions.prototype.clearCtype = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasCtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool packed = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getPacked = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.protobuf.FieldOptions.prototype.setPacked = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.FieldOptions.prototype.clearPacked = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasPacked = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JSType jstype = 6;
 * @return {!proto.google.protobuf.FieldOptions.JSType}
 */
proto.google.protobuf.FieldOptions.prototype.getJstype = function() {
  return /** @type {!proto.google.protobuf.FieldOptions.JSType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.google.protobuf.FieldOptions.JSType} value */
proto.google.protobuf.FieldOptions.prototype.setJstype = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.google.protobuf.FieldOptions.prototype.clearJstype = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasJstype = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool lazy = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getLazy = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.google.protobuf.FieldOptions.prototype.setLazy = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.google.protobuf.FieldOptions.prototype.clearLazy = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasLazy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool deprecated = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.google.protobuf.FieldOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.FieldOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool weak = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getWeak = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.google.protobuf.FieldOptions.prototype.setWeak = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.google.protobuf.FieldOptions.prototype.clearWeak = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.FieldOptions.prototype.hasWeak = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.FieldOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption>} value */
proto.google.protobuf.FieldOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.FieldOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


proto.google.protobuf.FieldOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.FieldOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.FieldOptions.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.OneofOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.OneofOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.OneofOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.OneofOptions.displayName = 'proto.google.protobuf.OneofOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.OneofOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.OneofOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.OneofOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.OneofOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.OneofOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.OneofOptions.extensions, proto.google.protobuf.OneofOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.OneofOptions}
 */
proto.google.protobuf.OneofOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.OneofOptions;
  return proto.google.protobuf.OneofOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.OneofOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.OneofOptions}
 */
proto.google.protobuf.OneofOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.OneofOptions.extensionsBinary,
        proto.google.protobuf.OneofOptions.prototype.getExtension,
        proto.google.protobuf.OneofOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.OneofOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.OneofOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.OneofOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.OneofOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.OneofOptions.extensionsBinary, proto.google.protobuf.OneofOptions.prototype.getExtension);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.OneofOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption>} value */
proto.google.protobuf.OneofOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.OneofOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


proto.google.protobuf.OneofOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.OneofOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.OneofOptions.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.EnumOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumOptions.displayName = 'proto.google.protobuf.EnumOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowAlias: jspb.Message.getField(msg, 2),
    deprecated: jspb.Message.getFieldWithDefault(msg, 3, false),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.EnumOptions.extensions, proto.google.protobuf.EnumOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumOptions}
 */
proto.google.protobuf.EnumOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumOptions;
  return proto.google.protobuf.EnumOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumOptions}
 */
proto.google.protobuf.EnumOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowAlias(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.EnumOptions.extensionsBinary,
        proto.google.protobuf.EnumOptions.prototype.getExtension,
        proto.google.protobuf.EnumOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.EnumOptions.extensionsBinary, proto.google.protobuf.EnumOptions.prototype.getExtension);
};


/**
 * optional bool allow_alias = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.EnumOptions.prototype.getAllowAlias = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.protobuf.EnumOptions.prototype.setAllowAlias = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.EnumOptions.prototype.clearAllowAlias = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumOptions.prototype.hasAllowAlias = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool deprecated = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.EnumOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.google.protobuf.EnumOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.EnumOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.EnumOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption>} value */
proto.google.protobuf.EnumOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.EnumOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


proto.google.protobuf.EnumOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.EnumOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.EnumOptions.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumValueOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.EnumValueOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumValueOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumValueOptions.displayName = 'proto.google.protobuf.EnumValueOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumValueOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumValueOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumValueOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumValueOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumValueOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecated: jspb.Message.getFieldWithDefault(msg, 1, false),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.EnumValueOptions.extensions, proto.google.protobuf.EnumValueOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumValueOptions}
 */
proto.google.protobuf.EnumValueOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumValueOptions;
  return proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumValueOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumValueOptions}
 */
proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.EnumValueOptions.extensionsBinary,
        proto.google.protobuf.EnumValueOptions.prototype.getExtension,
        proto.google.protobuf.EnumValueOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumValueOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumValueOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.EnumValueOptions.extensionsBinary, proto.google.protobuf.EnumValueOptions.prototype.getExtension);
};


/**
 * optional bool deprecated = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.EnumValueOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.google.protobuf.EnumValueOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.EnumValueOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.EnumValueOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.EnumValueOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption>} value */
proto.google.protobuf.EnumValueOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.EnumValueOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


proto.google.protobuf.EnumValueOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.EnumValueOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.EnumValueOptions.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.ServiceOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.ServiceOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ServiceOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.ServiceOptions.displayName = 'proto.google.protobuf.ServiceOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ServiceOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ServiceOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ServiceOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ServiceOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ServiceOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecated: jspb.Message.getFieldWithDefault(msg, 33, false),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.ServiceOptions.extensions, proto.google.protobuf.ServiceOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.ServiceOptions}
 */
proto.google.protobuf.ServiceOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ServiceOptions;
  return proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ServiceOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ServiceOptions}
 */
proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.ServiceOptions.extensionsBinary,
        proto.google.protobuf.ServiceOptions.prototype.getExtension,
        proto.google.protobuf.ServiceOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.ServiceOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.ServiceOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ServiceOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.ServiceOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeBool(
      33,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.ServiceOptions.extensionsBinary, proto.google.protobuf.ServiceOptions.prototype.getExtension);
};


/**
 * optional bool deprecated = 33;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.ServiceOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 33, false));
};


/** @param {boolean} value */
proto.google.protobuf.ServiceOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 33, value);
};


proto.google.protobuf.ServiceOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.ServiceOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.ServiceOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption>} value */
proto.google.protobuf.ServiceOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.ServiceOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


proto.google.protobuf.ServiceOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.ServiceOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.ServiceOptions.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.MethodOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.google.protobuf.MethodOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.MethodOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.MethodOptions.displayName = 'proto.google.protobuf.MethodOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.MethodOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.MethodOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.MethodOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.MethodOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MethodOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecated: jspb.Message.getFieldWithDefault(msg, 33, false),
    idempotencyLevel: jspb.Message.getFieldWithDefault(msg, 34, 0),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.MethodOptions.extensions, proto.google.protobuf.MethodOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.MethodOptions}
 */
proto.google.protobuf.MethodOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.MethodOptions;
  return proto.google.protobuf.MethodOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.MethodOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.MethodOptions}
 */
proto.google.protobuf.MethodOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 34:
      var value = /** @type {!proto.google.protobuf.MethodOptions.IdempotencyLevel} */ (reader.readEnum());
      msg.setIdempotencyLevel(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.addUninterpretedOption(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.MethodOptions.extensionsBinary,
        proto.google.protobuf.MethodOptions.prototype.getExtension,
        proto.google.protobuf.MethodOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.MethodOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.MethodOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.MethodOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.MethodOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeBool(
      33,
      f
    );
  }
  f = /** @type {!proto.google.protobuf.MethodOptions.IdempotencyLevel} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeEnum(
      34,
      f
    );
  }
  f = message.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.google.protobuf.MethodOptions.extensionsBinary, proto.google.protobuf.MethodOptions.prototype.getExtension);
};


/**
 * @enum {number}
 */
proto.google.protobuf.MethodOptions.IdempotencyLevel = {
  IDEMPOTENCY_UNKNOWN: 0,
  NO_SIDE_EFFECTS: 1,
  IDEMPOTENT: 2
};

/**
 * optional bool deprecated = 33;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MethodOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 33, false));
};


/** @param {boolean} value */
proto.google.protobuf.MethodOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 33, value);
};


proto.google.protobuf.MethodOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MethodOptions.prototype.hasDeprecated = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional IdempotencyLevel idempotency_level = 34;
 * @return {!proto.google.protobuf.MethodOptions.IdempotencyLevel}
 */
proto.google.protobuf.MethodOptions.prototype.getIdempotencyLevel = function() {
  return /** @type {!proto.google.protobuf.MethodOptions.IdempotencyLevel} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/** @param {!proto.google.protobuf.MethodOptions.IdempotencyLevel} value */
proto.google.protobuf.MethodOptions.prototype.setIdempotencyLevel = function(value) {
  jspb.Message.setField(this, 34, value);
};


proto.google.protobuf.MethodOptions.prototype.clearIdempotencyLevel = function() {
  jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.MethodOptions.prototype.hasIdempotencyLevel = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.MethodOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption>} value */
proto.google.protobuf.MethodOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.MethodOptions.prototype.addUninterpretedOption = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 999, opt_value, proto.google.protobuf.UninterpretedOption, opt_index);
};


proto.google.protobuf.MethodOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.MethodOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.google.protobuf.MethodOptions.extensionsBinary = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.UninterpretedOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.UninterpretedOption.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.UninterpretedOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.UninterpretedOption.displayName = 'proto.google.protobuf.UninterpretedOption';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.UninterpretedOption.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.UninterpretedOption.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.UninterpretedOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.UninterpretedOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.UninterpretedOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    nameList: jspb.Message.toObjectList(msg.getNameList(),
    proto.google.protobuf.UninterpretedOption.NamePart.toObject, includeInstance),
    identifierValue: jspb.Message.getField(msg, 3),
    positiveIntValue: jspb.Message.getField(msg, 4),
    negativeIntValue: jspb.Message.getField(msg, 5),
    doubleValue: jspb.Message.getOptionalFloatingPointField(msg, 6),
    stringValue: msg.getStringValue_asB64(),
    aggregateValue: jspb.Message.getField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.UninterpretedOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.UninterpretedOption;
  return proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.UninterpretedOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.google.protobuf.UninterpretedOption.NamePart;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader);
      msg.addName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifierValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPositiveIntValue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNegativeIntValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoubleValue(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStringValue(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.UninterpretedOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.UninterpretedOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNameList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.UninterpretedOption.NamePart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.UninterpretedOption.NamePart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.UninterpretedOption.NamePart.displayName = 'proto.google.protobuf.UninterpretedOption.NamePart';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.UninterpretedOption.NamePart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.UninterpretedOption.NamePart.toObject = function(includeInstance, msg) {
  var f, obj = {
    namePart: jspb.Message.getField(msg, 1),
    isExtension: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart}
 */
proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.UninterpretedOption.NamePart;
  return proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart}
 */
proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamePart(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExtension(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * required string name_part = 1;
 * @return {string}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.getNamePart = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.setNamePart = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearNamePart = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.hasNamePart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required bool is_extension = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.getIsExtension = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.setIsExtension = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearIsExtension = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.hasIsExtension = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NamePart name = 2;
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption.NamePart>}
 */
proto.google.protobuf.UninterpretedOption.prototype.getNameList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption.NamePart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption.NamePart, 2));
};


/** @param {!Array.<!proto.google.protobuf.UninterpretedOption.NamePart>} value */
proto.google.protobuf.UninterpretedOption.prototype.setNameList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart}
 */
proto.google.protobuf.UninterpretedOption.prototype.addName = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.UninterpretedOption.NamePart, opt_index);
};


proto.google.protobuf.UninterpretedOption.prototype.clearNameList = function() {
  this.setNameList([]);
};


/**
 * optional string identifier_value = 3;
 * @return {string}
 */
proto.google.protobuf.UninterpretedOption.prototype.getIdentifierValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.protobuf.UninterpretedOption.prototype.setIdentifierValue = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearIdentifierValue = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasIdentifierValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 positive_int_value = 4;
 * @return {number}
 */
proto.google.protobuf.UninterpretedOption.prototype.getPositiveIntValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.protobuf.UninterpretedOption.prototype.setPositiveIntValue = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearPositiveIntValue = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasPositiveIntValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 negative_int_value = 5;
 * @return {number}
 */
proto.google.protobuf.UninterpretedOption.prototype.getNegativeIntValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.google.protobuf.UninterpretedOption.prototype.setNegativeIntValue = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearNegativeIntValue = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasNegativeIntValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double double_value = 6;
 * @return {number}
 */
proto.google.protobuf.UninterpretedOption.prototype.getDoubleValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.google.protobuf.UninterpretedOption.prototype.setDoubleValue = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearDoubleValue = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasDoubleValue = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes string_value = 7;
 * @return {!(string|Uint8Array)}
 */
proto.google.protobuf.UninterpretedOption.prototype.getStringValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes string_value = 7;
 * This is a type-conversion wrapper around `getStringValue()`
 * @return {string}
 */
proto.google.protobuf.UninterpretedOption.prototype.getStringValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStringValue()));
};


/**
 * optional bytes string_value = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStringValue()`
 * @return {!Uint8Array}
 */
proto.google.protobuf.UninterpretedOption.prototype.getStringValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStringValue()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.protobuf.UninterpretedOption.prototype.setStringValue = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearStringValue = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string aggregate_value = 8;
 * @return {string}
 */
proto.google.protobuf.UninterpretedOption.prototype.getAggregateValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.google.protobuf.UninterpretedOption.prototype.setAggregateValue = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearAggregateValue = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.UninterpretedOption.prototype.hasAggregateValue = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.SourceCodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.SourceCodeInfo.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.SourceCodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.SourceCodeInfo.displayName = 'proto.google.protobuf.SourceCodeInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.SourceCodeInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.SourceCodeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.SourceCodeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.SourceCodeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.SourceCodeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationList: jspb.Message.toObjectList(msg.getLocationList(),
    proto.google.protobuf.SourceCodeInfo.Location.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.SourceCodeInfo}
 */
proto.google.protobuf.SourceCodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.SourceCodeInfo;
  return proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.SourceCodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.SourceCodeInfo}
 */
proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.SourceCodeInfo.Location;
      reader.readMessage(value,proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader);
      msg.addLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.SourceCodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.SourceCodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.SourceCodeInfo.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.SourceCodeInfo.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.SourceCodeInfo.Location.displayName = 'proto.google.protobuf.SourceCodeInfo.Location';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_ = [1,2,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.SourceCodeInfo.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.SourceCodeInfo.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.SourceCodeInfo.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathList: jspb.Message.getRepeatedField(msg, 1),
    spanList: jspb.Message.getRepeatedField(msg, 2),
    leadingComments: jspb.Message.getField(msg, 3),
    trailingComments: jspb.Message.getField(msg, 4),
    leadingDetachedCommentsList: jspb.Message.getRepeatedField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location}
 */
proto.google.protobuf.SourceCodeInfo.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.SourceCodeInfo.Location;
  return proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.SourceCodeInfo.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location}
 */
proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setPathList(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setSpanList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeadingComments(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrailingComments(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addLeadingDetachedComments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.SourceCodeInfo.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = message.getSpanList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLeadingDetachedCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * repeated int32 path = 1;
 * @return {!Array.<number>}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getPathList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array.<number>} value */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setPathList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.addPath = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearPathList = function() {
  this.setPathList([]);
};


/**
 * repeated int32 span = 2;
 * @return {!Array.<number>}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getSpanList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<number>} value */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setSpanList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.addSpan = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearSpanList = function() {
  this.setSpanList([]);
};


/**
 * optional string leading_comments = 3;
 * @return {string}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingComments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingComments = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingComments = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.hasLeadingComments = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string trailing_comments = 4;
 * @return {string}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getTrailingComments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setTrailingComments = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearTrailingComments = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.hasTrailingComments = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string leading_detached_comments = 6;
 * @return {!Array.<string>}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingDetachedCommentsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array.<string>} value */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingDetachedCommentsList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.addLeadingDetachedComments = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingDetachedCommentsList = function() {
  this.setLeadingDetachedCommentsList([]);
};


/**
 * repeated Location location = 1;
 * @return {!Array.<!proto.google.protobuf.SourceCodeInfo.Location>}
 */
proto.google.protobuf.SourceCodeInfo.prototype.getLocationList = function() {
  return /** @type{!Array.<!proto.google.protobuf.SourceCodeInfo.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.SourceCodeInfo.Location, 1));
};


/** @param {!Array.<!proto.google.protobuf.SourceCodeInfo.Location>} value */
proto.google.protobuf.SourceCodeInfo.prototype.setLocationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.SourceCodeInfo.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.SourceCodeInfo.Location}
 */
proto.google.protobuf.SourceCodeInfo.prototype.addLocation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.SourceCodeInfo.Location, opt_index);
};


proto.google.protobuf.SourceCodeInfo.prototype.clearLocationList = function() {
  this.setLocationList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.GeneratedCodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.GeneratedCodeInfo.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.GeneratedCodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.GeneratedCodeInfo.displayName = 'proto.google.protobuf.GeneratedCodeInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.GeneratedCodeInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.GeneratedCodeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.GeneratedCodeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.GeneratedCodeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.GeneratedCodeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    annotationList: jspb.Message.toObjectList(msg.getAnnotationList(),
    proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.GeneratedCodeInfo}
 */
proto.google.protobuf.GeneratedCodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.GeneratedCodeInfo;
  return proto.google.protobuf.GeneratedCodeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.GeneratedCodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.GeneratedCodeInfo}
 */
proto.google.protobuf.GeneratedCodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.GeneratedCodeInfo.Annotation;
      reader.readMessage(value,proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader);
      msg.addAnnotation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.GeneratedCodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.GeneratedCodeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.GeneratedCodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.GeneratedCodeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnnotationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.GeneratedCodeInfo.Annotation.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.GeneratedCodeInfo.Annotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.GeneratedCodeInfo.Annotation.displayName = 'proto.google.protobuf.GeneratedCodeInfo.Annotation';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.GeneratedCodeInfo.Annotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathList: jspb.Message.getRepeatedField(msg, 1),
    sourceFile: jspb.Message.getField(msg, 2),
    begin: jspb.Message.getField(msg, 3),
    end: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.GeneratedCodeInfo.Annotation;
  return proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.GeneratedCodeInfo.Annotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setPathList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceFile(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBegin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.GeneratedCodeInfo.Annotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * repeated int32 path = 1;
 * @return {!Array.<number>}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getPathList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array.<number>} value */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setPathList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.addPath = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearPathList = function() {
  this.setPathList([]);
};


/**
 * optional string source_file = 2;
 * @return {string}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getSourceFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setSourceFile = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearSourceFile = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasSourceFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 begin = 3;
 * @return {number}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getBegin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setBegin = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearBegin = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasBegin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 end = 4;
 * @return {number}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setEnd = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearEnd = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Annotation annotation = 1;
 * @return {!Array.<!proto.google.protobuf.GeneratedCodeInfo.Annotation>}
 */
proto.google.protobuf.GeneratedCodeInfo.prototype.getAnnotationList = function() {
  return /** @type{!Array.<!proto.google.protobuf.GeneratedCodeInfo.Annotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.GeneratedCodeInfo.Annotation, 1));
};


/** @param {!Array.<!proto.google.protobuf.GeneratedCodeInfo.Annotation>} value */
proto.google.protobuf.GeneratedCodeInfo.prototype.setAnnotationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.GeneratedCodeInfo.Annotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.GeneratedCodeInfo.Annotation}
 */
proto.google.protobuf.GeneratedCodeInfo.prototype.addAnnotation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.GeneratedCodeInfo.Annotation, opt_index);
};


proto.google.protobuf.GeneratedCodeInfo.prototype.clearAnnotationList = function() {
  this.setAnnotationList([]);
};


goog.object.extend(exports, proto.google.protobuf);

},{"google-protobuf":2}],5:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var api_api_pb = require('./api/api_pb.js');
var core_Tron_pb = require('./core/Tron_pb.js');
var core_Contract_pb = require('./core/Contract_pb.js');
var core_TronInventoryItems_pb = require('./core/TronInventoryItems_pb.js');
var core_Message_pb = require('./core/Discover_pb.js');
goog.object.extend(exports, proto);

},{"./api/api_pb.js":6,"./core/Contract_pb.js":7,"./core/Discover_pb.js":8,"./core/TronInventoryItems_pb.js":9,"./core/Tron_pb.js":10,"google-protobuf":2}],6:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var core_Tron_pb = require('../core/Tron_pb.js');
var core_Contract_pb = require('../core/Contract_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
goog.exportSymbol('proto.protocol.AccountNetMessage', null, global);
goog.exportSymbol('proto.protocol.AccountPaginated', null, global);
goog.exportSymbol('proto.protocol.Address', null, global);
goog.exportSymbol('proto.protocol.AssetIssueList', null, global);
goog.exportSymbol('proto.protocol.BlockLimit', null, global);
goog.exportSymbol('proto.protocol.BlockList', null, global);
goog.exportSymbol('proto.protocol.BlockReference', null, global);
goog.exportSymbol('proto.protocol.BytesMessage', null, global);
goog.exportSymbol('proto.protocol.EmptyMessage', null, global);
goog.exportSymbol('proto.protocol.Node', null, global);
goog.exportSymbol('proto.protocol.NodeList', null, global);
goog.exportSymbol('proto.protocol.NumberMessage', null, global);
goog.exportSymbol('proto.protocol.Return', null, global);
goog.exportSymbol('proto.protocol.Return.response_code', null, global);
goog.exportSymbol('proto.protocol.TimeMessage', null, global);
goog.exportSymbol('proto.protocol.TimePaginatedMessage', null, global);
goog.exportSymbol('proto.protocol.TransactionLimit', null, global);
goog.exportSymbol('proto.protocol.TransactionList', null, global);
goog.exportSymbol('proto.protocol.WitnessList', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Return = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Return, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Return.displayName = 'proto.protocol.Return';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Return.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Return.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Return} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Return.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, false),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    message: msg.getMessage_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Return}
 */
proto.protocol.Return.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Return;
  return proto.protocol.Return.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Return} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Return}
 */
proto.protocol.Return.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {!proto.protocol.Return.response_code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Return.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Return.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Return} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Return.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMessage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protocol.Return.response_code = {
  SUCCESS: 0,
  SIGERROR: 1,
  CONTRACT_VALIDATE_ERROR: 2,
  CONTRACT_EXE_ERROR: 3,
  BANDWITH_ERROR: 4,
  DUP_TRANSACTION_ERROR: 5,
  TAPOS_ERROR: 6,
  TOO_BIG_TRANSACTION_ERROR: 7,
  TRANSACTION_EXPIRATION_ERROR: 8,
  SERVER_BUSY: 9,
  OTHER_ERROR: 20
};

/**
 * optional bool result = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.protocol.Return.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.protocol.Return.prototype.setResult = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional response_code code = 2;
 * @return {!proto.protocol.Return.response_code}
 */
proto.protocol.Return.prototype.getCode = function() {
  return /** @type {!proto.protocol.Return.response_code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.protocol.Return.response_code} value */
proto.protocol.Return.prototype.setCode = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bytes message = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Return.prototype.getMessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes message = 3;
 * This is a type-conversion wrapper around `getMessage()`
 * @return {string}
 */
proto.protocol.Return.prototype.getMessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMessage()));
};


/**
 * optional bytes message = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessage()`
 * @return {!Uint8Array}
 */
proto.protocol.Return.prototype.getMessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessage()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Return.prototype.setMessage = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.BlockReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.BlockReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.BlockReference.displayName = 'proto.protocol.BlockReference';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.BlockReference.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.BlockReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.BlockReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockNum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockHash: msg.getBlockHash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.BlockReference}
 */
proto.protocol.BlockReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.BlockReference;
  return proto.protocol.BlockReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.BlockReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.BlockReference}
 */
proto.protocol.BlockReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockNum(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.BlockReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.BlockReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.BlockReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockNum();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int64 block_num = 1;
 * @return {number}
 */
proto.protocol.BlockReference.prototype.getBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.BlockReference.prototype.setBlockNum = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes block_hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.BlockReference.prototype.getBlockHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes block_hash = 2;
 * This is a type-conversion wrapper around `getBlockHash()`
 * @return {string}
 */
proto.protocol.BlockReference.prototype.getBlockHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockHash()));
};


/**
 * optional bytes block_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockHash()`
 * @return {!Uint8Array}
 */
proto.protocol.BlockReference.prototype.getBlockHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.BlockReference.prototype.setBlockHash = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.WitnessList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.WitnessList.repeatedFields_, null);
};
goog.inherits(proto.protocol.WitnessList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.WitnessList.displayName = 'proto.protocol.WitnessList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.WitnessList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.WitnessList.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.WitnessList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.WitnessList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.WitnessList.toObject = function(includeInstance, msg) {
  var f, obj = {
    witnessesList: jspb.Message.toObjectList(msg.getWitnessesList(),
    core_Tron_pb.Witness.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.WitnessList}
 */
proto.protocol.WitnessList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.WitnessList;
  return proto.protocol.WitnessList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.WitnessList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.WitnessList}
 */
proto.protocol.WitnessList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_Tron_pb.Witness;
      reader.readMessage(value,core_Tron_pb.Witness.deserializeBinaryFromReader);
      msg.addWitnesses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.WitnessList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.WitnessList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.WitnessList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.WitnessList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWitnessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      core_Tron_pb.Witness.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Witness witnesses = 1;
 * @return {!Array.<!proto.protocol.Witness>}
 */
proto.protocol.WitnessList.prototype.getWitnessesList = function() {
  return /** @type{!Array.<!proto.protocol.Witness>} */ (
    jspb.Message.getRepeatedWrapperField(this, core_Tron_pb.Witness, 1));
};


/** @param {!Array.<!proto.protocol.Witness>} value */
proto.protocol.WitnessList.prototype.setWitnessesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.Witness=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Witness}
 */
proto.protocol.WitnessList.prototype.addWitnesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.Witness, opt_index);
};


proto.protocol.WitnessList.prototype.clearWitnessesList = function() {
  this.setWitnessesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.AssetIssueList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.AssetIssueList.repeatedFields_, null);
};
goog.inherits(proto.protocol.AssetIssueList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.AssetIssueList.displayName = 'proto.protocol.AssetIssueList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.AssetIssueList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.AssetIssueList.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.AssetIssueList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.AssetIssueList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AssetIssueList.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetissueList: jspb.Message.toObjectList(msg.getAssetissueList(),
    core_Contract_pb.AssetIssueContract.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.AssetIssueList}
 */
proto.protocol.AssetIssueList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.AssetIssueList;
  return proto.protocol.AssetIssueList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.AssetIssueList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.AssetIssueList}
 */
proto.protocol.AssetIssueList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_Contract_pb.AssetIssueContract;
      reader.readMessage(value,core_Contract_pb.AssetIssueContract.deserializeBinaryFromReader);
      msg.addAssetissue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.AssetIssueList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.AssetIssueList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.AssetIssueList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AssetIssueList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetissueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      core_Contract_pb.AssetIssueContract.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AssetIssueContract assetIssue = 1;
 * @return {!Array.<!proto.protocol.AssetIssueContract>}
 */
proto.protocol.AssetIssueList.prototype.getAssetissueList = function() {
  return /** @type{!Array.<!proto.protocol.AssetIssueContract>} */ (
    jspb.Message.getRepeatedWrapperField(this, core_Contract_pb.AssetIssueContract, 1));
};


/** @param {!Array.<!proto.protocol.AssetIssueContract>} value */
proto.protocol.AssetIssueList.prototype.setAssetissueList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.AssetIssueContract=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.AssetIssueContract}
 */
proto.protocol.AssetIssueList.prototype.addAssetissue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.AssetIssueContract, opt_index);
};


proto.protocol.AssetIssueList.prototype.clearAssetissueList = function() {
  this.setAssetissueList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.BlockList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.BlockList.repeatedFields_, null);
};
goog.inherits(proto.protocol.BlockList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.BlockList.displayName = 'proto.protocol.BlockList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.BlockList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.BlockList.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.BlockList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.BlockList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockList.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockList: jspb.Message.toObjectList(msg.getBlockList(),
    core_Tron_pb.Block.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.BlockList}
 */
proto.protocol.BlockList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.BlockList;
  return proto.protocol.BlockList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.BlockList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.BlockList}
 */
proto.protocol.BlockList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_Tron_pb.Block;
      reader.readMessage(value,core_Tron_pb.Block.deserializeBinaryFromReader);
      msg.addBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.BlockList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.BlockList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.BlockList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      core_Tron_pb.Block.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Block block = 1;
 * @return {!Array.<!proto.protocol.Block>}
 */
proto.protocol.BlockList.prototype.getBlockList = function() {
  return /** @type{!Array.<!proto.protocol.Block>} */ (
    jspb.Message.getRepeatedWrapperField(this, core_Tron_pb.Block, 1));
};


/** @param {!Array.<!proto.protocol.Block>} value */
proto.protocol.BlockList.prototype.setBlockList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.Block=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Block}
 */
proto.protocol.BlockList.prototype.addBlock = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.Block, opt_index);
};


proto.protocol.BlockList.prototype.clearBlockList = function() {
  this.setBlockList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TransactionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.TransactionList.repeatedFields_, null);
};
goog.inherits(proto.protocol.TransactionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TransactionList.displayName = 'proto.protocol.TransactionList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.TransactionList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TransactionList.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TransactionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TransactionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TransactionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionList: jspb.Message.toObjectList(msg.getTransactionList(),
    core_Tron_pb.Transaction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TransactionList}
 */
proto.protocol.TransactionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TransactionList;
  return proto.protocol.TransactionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TransactionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TransactionList}
 */
proto.protocol.TransactionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_Tron_pb.Transaction;
      reader.readMessage(value,core_Tron_pb.Transaction.deserializeBinaryFromReader);
      msg.addTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TransactionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TransactionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TransactionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TransactionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      core_Tron_pb.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Transaction transaction = 1;
 * @return {!Array.<!proto.protocol.Transaction>}
 */
proto.protocol.TransactionList.prototype.getTransactionList = function() {
  return /** @type{!Array.<!proto.protocol.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, core_Tron_pb.Transaction, 1));
};


/** @param {!Array.<!proto.protocol.Transaction>} value */
proto.protocol.TransactionList.prototype.setTransactionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Transaction}
 */
proto.protocol.TransactionList.prototype.addTransaction = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.Transaction, opt_index);
};


proto.protocol.TransactionList.prototype.clearTransactionList = function() {
  this.setTransactionList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.NodeList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.NodeList.repeatedFields_, null);
};
goog.inherits(proto.protocol.NodeList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.NodeList.displayName = 'proto.protocol.NodeList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.NodeList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.NodeList.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.NodeList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.NodeList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.NodeList.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.protocol.Node.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.NodeList}
 */
proto.protocol.NodeList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.NodeList;
  return proto.protocol.NodeList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.NodeList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.NodeList}
 */
proto.protocol.NodeList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.Node;
      reader.readMessage(value,proto.protocol.Node.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.NodeList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.NodeList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.NodeList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.NodeList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.Node.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Node nodes = 1;
 * @return {!Array.<!proto.protocol.Node>}
 */
proto.protocol.NodeList.prototype.getNodesList = function() {
  return /** @type{!Array.<!proto.protocol.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Node, 1));
};


/** @param {!Array.<!proto.protocol.Node>} value */
proto.protocol.NodeList.prototype.setNodesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Node}
 */
proto.protocol.NodeList.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.Node, opt_index);
};


proto.protocol.NodeList.prototype.clearNodesList = function() {
  this.setNodesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Node = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Node, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Node.displayName = 'proto.protocol.Node';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Node.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Node.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Node} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Node.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && proto.protocol.Address.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Node}
 */
proto.protocol.Node.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Node;
  return proto.protocol.Node.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Node} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Node}
 */
proto.protocol.Node.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.Address;
      reader.readMessage(value,proto.protocol.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Node.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Node.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Node} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Node.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional Address address = 1;
 * @return {?proto.protocol.Address}
 */
proto.protocol.Node.prototype.getAddress = function() {
  return /** @type{?proto.protocol.Address} */ (
    jspb.Message.getWrapperField(this, proto.protocol.Address, 1));
};


/** @param {?proto.protocol.Address|undefined} value */
proto.protocol.Node.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.Node.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.Node.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Address.displayName = 'proto.protocol.Address';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: msg.getHost_asB64(),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Address}
 */
proto.protocol.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Address;
  return proto.protocol.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Address}
 */
proto.protocol.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional bytes host = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Address.prototype.getHost = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes host = 1;
 * This is a type-conversion wrapper around `getHost()`
 * @return {string}
 */
proto.protocol.Address.prototype.getHost_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHost()));
};


/**
 * optional bytes host = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHost()`
 * @return {!Uint8Array}
 */
proto.protocol.Address.prototype.getHost_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHost()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Address.prototype.setHost = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.protocol.Address.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.Address.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.EmptyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.EmptyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.EmptyMessage.displayName = 'proto.protocol.EmptyMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.EmptyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.EmptyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.EmptyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.EmptyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.EmptyMessage}
 */
proto.protocol.EmptyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.EmptyMessage;
  return proto.protocol.EmptyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.EmptyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.EmptyMessage}
 */
proto.protocol.EmptyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.EmptyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.EmptyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.EmptyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.EmptyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.NumberMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.NumberMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.NumberMessage.displayName = 'proto.protocol.NumberMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.NumberMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.NumberMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.NumberMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.NumberMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    num: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.NumberMessage}
 */
proto.protocol.NumberMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.NumberMessage;
  return proto.protocol.NumberMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.NumberMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.NumberMessage}
 */
proto.protocol.NumberMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.NumberMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.NumberMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.NumberMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.NumberMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 num = 1;
 * @return {number}
 */
proto.protocol.NumberMessage.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.NumberMessage.prototype.setNum = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.BytesMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.BytesMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.BytesMessage.displayName = 'proto.protocol.BytesMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.BytesMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.BytesMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.BytesMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BytesMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.BytesMessage}
 */
proto.protocol.BytesMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.BytesMessage;
  return proto.protocol.BytesMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.BytesMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.BytesMessage}
 */
proto.protocol.BytesMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.BytesMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.BytesMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.BytesMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BytesMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.BytesMessage.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.protocol.BytesMessage.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.protocol.BytesMessage.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.BytesMessage.prototype.setValue = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TimeMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.TimeMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TimeMessage.displayName = 'proto.protocol.TimeMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TimeMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TimeMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TimeMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TimeMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    begininmilliseconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endinmilliseconds: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TimeMessage}
 */
proto.protocol.TimeMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TimeMessage;
  return proto.protocol.TimeMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TimeMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TimeMessage}
 */
proto.protocol.TimeMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBegininmilliseconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndinmilliseconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TimeMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TimeMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TimeMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TimeMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBegininmilliseconds();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEndinmilliseconds();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 beginInMilliseconds = 1;
 * @return {number}
 */
proto.protocol.TimeMessage.prototype.getBegininmilliseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.TimeMessage.prototype.setBegininmilliseconds = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 endInMilliseconds = 2;
 * @return {number}
 */
proto.protocol.TimeMessage.prototype.getEndinmilliseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.TimeMessage.prototype.setEndinmilliseconds = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.BlockLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.BlockLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.BlockLimit.displayName = 'proto.protocol.BlockLimit';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.BlockLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.BlockLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.BlockLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    startnum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endnum: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.BlockLimit}
 */
proto.protocol.BlockLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.BlockLimit;
  return proto.protocol.BlockLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.BlockLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.BlockLimit}
 */
proto.protocol.BlockLimit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartnum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.BlockLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.BlockLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.BlockLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockLimit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartnum();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEndnum();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 startNum = 1;
 * @return {number}
 */
proto.protocol.BlockLimit.prototype.getStartnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.BlockLimit.prototype.setStartnum = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 endNum = 2;
 * @return {number}
 */
proto.protocol.BlockLimit.prototype.getEndnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.BlockLimit.prototype.setEndnum = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TransactionLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.TransactionLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TransactionLimit.displayName = 'proto.protocol.TransactionLimit';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TransactionLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TransactionLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TransactionLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TransactionLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionid: msg.getTransactionid_asB64(),
    limitnum: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TransactionLimit}
 */
proto.protocol.TransactionLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TransactionLimit;
  return proto.protocol.TransactionLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TransactionLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TransactionLimit}
 */
proto.protocol.TransactionLimit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimitnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TransactionLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TransactionLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TransactionLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TransactionLimit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getLimitnum();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes transactionId = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TransactionLimit.prototype.getTransactionid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes transactionId = 1;
 * This is a type-conversion wrapper around `getTransactionid()`
 * @return {string}
 */
proto.protocol.TransactionLimit.prototype.getTransactionid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionid()));
};


/**
 * optional bytes transactionId = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionid()`
 * @return {!Uint8Array}
 */
proto.protocol.TransactionLimit.prototype.getTransactionid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionid()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TransactionLimit.prototype.setTransactionid = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 limitNum = 2;
 * @return {number}
 */
proto.protocol.TransactionLimit.prototype.getLimitnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.TransactionLimit.prototype.setLimitnum = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.AccountPaginated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.AccountPaginated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.AccountPaginated.displayName = 'proto.protocol.AccountPaginated';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.AccountPaginated.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.AccountPaginated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.AccountPaginated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountPaginated.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && core_Tron_pb.Account.toObject(includeInstance, f),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.AccountPaginated}
 */
proto.protocol.AccountPaginated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.AccountPaginated;
  return proto.protocol.AccountPaginated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.AccountPaginated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.AccountPaginated}
 */
proto.protocol.AccountPaginated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_Tron_pb.Account;
      reader.readMessage(value,core_Tron_pb.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.AccountPaginated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.AccountPaginated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.AccountPaginated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountPaginated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      core_Tron_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional Account account = 1;
 * @return {?proto.protocol.Account}
 */
proto.protocol.AccountPaginated.prototype.getAccount = function() {
  return /** @type{?proto.protocol.Account} */ (
    jspb.Message.getWrapperField(this, core_Tron_pb.Account, 1));
};


/** @param {?proto.protocol.Account|undefined} value */
proto.protocol.AccountPaginated.prototype.setAccount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.AccountPaginated.prototype.clearAccount = function() {
  this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.AccountPaginated.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.protocol.AccountPaginated.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.AccountPaginated.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.protocol.AccountPaginated.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.AccountPaginated.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TimePaginatedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.TimePaginatedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TimePaginatedMessage.displayName = 'proto.protocol.TimePaginatedMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TimePaginatedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TimePaginatedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TimePaginatedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TimePaginatedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    timemessage: (f = msg.getTimemessage()) && proto.protocol.TimeMessage.toObject(includeInstance, f),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TimePaginatedMessage}
 */
proto.protocol.TimePaginatedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TimePaginatedMessage;
  return proto.protocol.TimePaginatedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TimePaginatedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TimePaginatedMessage}
 */
proto.protocol.TimePaginatedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.TimeMessage;
      reader.readMessage(value,proto.protocol.TimeMessage.deserializeBinaryFromReader);
      msg.setTimemessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TimePaginatedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TimePaginatedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TimePaginatedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TimePaginatedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimemessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.TimeMessage.serializeBinaryToWriter
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional TimeMessage timeMessage = 1;
 * @return {?proto.protocol.TimeMessage}
 */
proto.protocol.TimePaginatedMessage.prototype.getTimemessage = function() {
  return /** @type{?proto.protocol.TimeMessage} */ (
    jspb.Message.getWrapperField(this, proto.protocol.TimeMessage, 1));
};


/** @param {?proto.protocol.TimeMessage|undefined} value */
proto.protocol.TimePaginatedMessage.prototype.setTimemessage = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.TimePaginatedMessage.prototype.clearTimemessage = function() {
  this.setTimemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.TimePaginatedMessage.prototype.hasTimemessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.protocol.TimePaginatedMessage.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.TimePaginatedMessage.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.protocol.TimePaginatedMessage.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.TimePaginatedMessage.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.AccountNetMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.AccountNetMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.AccountNetMessage.displayName = 'proto.protocol.AccountNetMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.AccountNetMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.AccountNetMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.AccountNetMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountNetMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    freenetused: jspb.Message.getFieldWithDefault(msg, 1, 0),
    freenetlimit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    netused: jspb.Message.getFieldWithDefault(msg, 3, 0),
    netlimit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    assetnetusedMap: (f = msg.getAssetnetusedMap()) ? f.toObject(includeInstance, undefined) : [],
    assetnetlimitMap: (f = msg.getAssetnetlimitMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.AccountNetMessage}
 */
proto.protocol.AccountNetMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.AccountNetMessage;
  return proto.protocol.AccountNetMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.AccountNetMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.AccountNetMessage}
 */
proto.protocol.AccountNetMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFreenetused(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFreenetlimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetused(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetlimit(value);
      break;
    case 5:
      var value = msg.getAssetnetusedMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64);
         });
      break;
    case 6:
      var value = msg.getAssetnetlimitMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.AccountNetMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.AccountNetMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.AccountNetMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountNetMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFreenetused();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFreenetlimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNetused();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getNetlimit();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getAssetnetusedMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getAssetnetlimitMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * optional int64 freeNetUsed = 1;
 * @return {number}
 */
proto.protocol.AccountNetMessage.prototype.getFreenetused = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.AccountNetMessage.prototype.setFreenetused = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 freeNetLimit = 2;
 * @return {number}
 */
proto.protocol.AccountNetMessage.prototype.getFreenetlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.AccountNetMessage.prototype.setFreenetlimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 NetUsed = 3;
 * @return {number}
 */
proto.protocol.AccountNetMessage.prototype.getNetused = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.AccountNetMessage.prototype.setNetused = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 NetLimit = 4;
 * @return {number}
 */
proto.protocol.AccountNetMessage.prototype.getNetlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protocol.AccountNetMessage.prototype.setNetlimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * map<string, int64> assetNetUsed = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.protocol.AccountNetMessage.prototype.getAssetnetusedMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


proto.protocol.AccountNetMessage.prototype.clearAssetnetusedMap = function() {
  this.getAssetnetusedMap().clear();
};


/**
 * map<string, int64> assetNetLimit = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.protocol.AccountNetMessage.prototype.getAssetnetlimitMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.protocol.AccountNetMessage.prototype.clearAssetnetlimitMap = function() {
  this.getAssetnetlimitMap().clear();
};


goog.object.extend(exports, proto.protocol);

},{"../core/Contract_pb.js":7,"../core/Tron_pb.js":10,"../google/api/annotations_pb.js":11,"google-protobuf":2}],7:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var core_Tron_pb = require('../core/Tron_pb.js');
goog.exportSymbol('proto.protocol.AccountCreateContract', null, global);
goog.exportSymbol('proto.protocol.AccountUpdateContract', null, global);
goog.exportSymbol('proto.protocol.AssetIssueContract', null, global);
goog.exportSymbol('proto.protocol.AssetIssueContract.FrozenSupply', null, global);
goog.exportSymbol('proto.protocol.DeployContract', null, global);
goog.exportSymbol('proto.protocol.FreezeBalanceContract', null, global);
goog.exportSymbol('proto.protocol.ParticipateAssetIssueContract', null, global);
goog.exportSymbol('proto.protocol.TransferAssetContract', null, global);
goog.exportSymbol('proto.protocol.TransferContract', null, global);
goog.exportSymbol('proto.protocol.UnfreezeAssetContract', null, global);
goog.exportSymbol('proto.protocol.UnfreezeBalanceContract', null, global);
goog.exportSymbol('proto.protocol.UpdateAssetContract', null, global);
goog.exportSymbol('proto.protocol.VoteAssetContract', null, global);
goog.exportSymbol('proto.protocol.VoteWitnessContract', null, global);
goog.exportSymbol('proto.protocol.VoteWitnessContract.Vote', null, global);
goog.exportSymbol('proto.protocol.WithdrawBalanceContract', null, global);
goog.exportSymbol('proto.protocol.WitnessCreateContract', null, global);
goog.exportSymbol('proto.protocol.WitnessUpdateContract', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.AccountCreateContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.AccountCreateContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.AccountCreateContract.displayName = 'proto.protocol.AccountCreateContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.AccountCreateContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.AccountCreateContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.AccountCreateContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountCreateContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accountName: msg.getAccountName_asB64(),
    ownerAddress: msg.getOwnerAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.AccountCreateContract}
 */
proto.protocol.AccountCreateContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.AccountCreateContract;
  return proto.protocol.AccountCreateContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.AccountCreateContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.AccountCreateContract}
 */
proto.protocol.AccountCreateContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protocol.AccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccountName(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.AccountCreateContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.AccountCreateContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.AccountCreateContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountCreateContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAccountName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional AccountType type = 1;
 * @return {!proto.protocol.AccountType}
 */
proto.protocol.AccountCreateContract.prototype.getType = function() {
  return /** @type {!proto.protocol.AccountType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.protocol.AccountType} value */
proto.protocol.AccountCreateContract.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes account_name = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AccountCreateContract.prototype.getAccountName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes account_name = 2;
 * This is a type-conversion wrapper around `getAccountName()`
 * @return {string}
 */
proto.protocol.AccountCreateContract.prototype.getAccountName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccountName()));
};


/**
 * optional bytes account_name = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccountName()`
 * @return {!Uint8Array}
 */
proto.protocol.AccountCreateContract.prototype.getAccountName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccountName()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AccountCreateContract.prototype.setAccountName = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes owner_address = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AccountCreateContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes owner_address = 3;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.AccountCreateContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.AccountCreateContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AccountCreateContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.AccountUpdateContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.AccountUpdateContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.AccountUpdateContract.displayName = 'proto.protocol.AccountUpdateContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.AccountUpdateContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.AccountUpdateContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.AccountUpdateContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountUpdateContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: msg.getAccountName_asB64(),
    ownerAddress: msg.getOwnerAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.AccountUpdateContract}
 */
proto.protocol.AccountUpdateContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.AccountUpdateContract;
  return proto.protocol.AccountUpdateContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.AccountUpdateContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.AccountUpdateContract}
 */
proto.protocol.AccountUpdateContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.AccountUpdateContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.AccountUpdateContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.AccountUpdateContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountUpdateContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes account_name = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AccountUpdateContract.prototype.getAccountName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes account_name = 1;
 * This is a type-conversion wrapper around `getAccountName()`
 * @return {string}
 */
proto.protocol.AccountUpdateContract.prototype.getAccountName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccountName()));
};


/**
 * optional bytes account_name = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccountName()`
 * @return {!Uint8Array}
 */
proto.protocol.AccountUpdateContract.prototype.getAccountName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccountName()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AccountUpdateContract.prototype.setAccountName = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes owner_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AccountUpdateContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes owner_address = 2;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.AccountUpdateContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.AccountUpdateContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AccountUpdateContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TransferContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.TransferContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TransferContract.displayName = 'proto.protocol.TransferContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TransferContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TransferContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TransferContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TransferContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    toAddress: msg.getToAddress_asB64(),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TransferContract}
 */
proto.protocol.TransferContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TransferContract;
  return proto.protocol.TransferContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TransferContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TransferContract}
 */
proto.protocol.TransferContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setToAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TransferContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TransferContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TransferContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TransferContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getToAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TransferContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.TransferContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.TransferContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TransferContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes to_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TransferContract.prototype.getToAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes to_address = 2;
 * This is a type-conversion wrapper around `getToAddress()`
 * @return {string}
 */
proto.protocol.TransferContract.prototype.getToAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getToAddress()));
};


/**
 * optional bytes to_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getToAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.TransferContract.prototype.getToAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getToAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TransferContract.prototype.setToAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 amount = 3;
 * @return {number}
 */
proto.protocol.TransferContract.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.TransferContract.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TransferAssetContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.TransferAssetContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TransferAssetContract.displayName = 'proto.protocol.TransferAssetContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TransferAssetContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TransferAssetContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TransferAssetContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TransferAssetContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetName: msg.getAssetName_asB64(),
    ownerAddress: msg.getOwnerAddress_asB64(),
    toAddress: msg.getToAddress_asB64(),
    amount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TransferAssetContract}
 */
proto.protocol.TransferAssetContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TransferAssetContract;
  return proto.protocol.TransferAssetContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TransferAssetContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TransferAssetContract}
 */
proto.protocol.TransferAssetContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setToAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TransferAssetContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TransferAssetContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TransferAssetContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TransferAssetContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getToAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional bytes asset_name = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TransferAssetContract.prototype.getAssetName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes asset_name = 1;
 * This is a type-conversion wrapper around `getAssetName()`
 * @return {string}
 */
proto.protocol.TransferAssetContract.prototype.getAssetName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetName()));
};


/**
 * optional bytes asset_name = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetName()`
 * @return {!Uint8Array}
 */
proto.protocol.TransferAssetContract.prototype.getAssetName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetName()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TransferAssetContract.prototype.setAssetName = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes owner_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TransferAssetContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes owner_address = 2;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.TransferAssetContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.TransferAssetContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TransferAssetContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes to_address = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TransferAssetContract.prototype.getToAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes to_address = 3;
 * This is a type-conversion wrapper around `getToAddress()`
 * @return {string}
 */
proto.protocol.TransferAssetContract.prototype.getToAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getToAddress()));
};


/**
 * optional bytes to_address = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getToAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.TransferAssetContract.prototype.getToAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getToAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TransferAssetContract.prototype.setToAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional int64 amount = 4;
 * @return {number}
 */
proto.protocol.TransferAssetContract.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protocol.TransferAssetContract.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.VoteAssetContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.VoteAssetContract.repeatedFields_, null);
};
goog.inherits(proto.protocol.VoteAssetContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.VoteAssetContract.displayName = 'proto.protocol.VoteAssetContract';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.VoteAssetContract.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.VoteAssetContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.VoteAssetContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.VoteAssetContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.VoteAssetContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    voteAddressList: msg.getVoteAddressList_asB64(),
    support: jspb.Message.getFieldWithDefault(msg, 3, false),
    count: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.VoteAssetContract}
 */
proto.protocol.VoteAssetContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.VoteAssetContract;
  return proto.protocol.VoteAssetContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.VoteAssetContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.VoteAssetContract}
 */
proto.protocol.VoteAssetContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addVoteAddress(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupport(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.VoteAssetContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.VoteAssetContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.VoteAssetContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.VoteAssetContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVoteAddressList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
  f = message.getSupport();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.VoteAssetContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.VoteAssetContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.VoteAssetContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.VoteAssetContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated bytes vote_address = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.protocol.VoteAssetContract.prototype.getVoteAddressList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes vote_address = 2;
 * This is a type-conversion wrapper around `getVoteAddressList()`
 * @return {!Array.<string>}
 */
proto.protocol.VoteAssetContract.prototype.getVoteAddressList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getVoteAddressList()));
};


/**
 * repeated bytes vote_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVoteAddressList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.protocol.VoteAssetContract.prototype.getVoteAddressList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getVoteAddressList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.protocol.VoteAssetContract.prototype.setVoteAddressList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.protocol.VoteAssetContract.prototype.addVoteAddress = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.protocol.VoteAssetContract.prototype.clearVoteAddressList = function() {
  this.setVoteAddressList([]);
};


/**
 * optional bool support = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.protocol.VoteAssetContract.prototype.getSupport = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.protocol.VoteAssetContract.prototype.setSupport = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 count = 5;
 * @return {number}
 */
proto.protocol.VoteAssetContract.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.protocol.VoteAssetContract.prototype.setCount = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.VoteWitnessContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.VoteWitnessContract.repeatedFields_, null);
};
goog.inherits(proto.protocol.VoteWitnessContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.VoteWitnessContract.displayName = 'proto.protocol.VoteWitnessContract';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.VoteWitnessContract.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.VoteWitnessContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.VoteWitnessContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.VoteWitnessContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.VoteWitnessContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    proto.protocol.VoteWitnessContract.Vote.toObject, includeInstance),
    support: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.VoteWitnessContract}
 */
proto.protocol.VoteWitnessContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.VoteWitnessContract;
  return proto.protocol.VoteWitnessContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.VoteWitnessContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.VoteWitnessContract}
 */
proto.protocol.VoteWitnessContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = new proto.protocol.VoteWitnessContract.Vote;
      reader.readMessage(value,proto.protocol.VoteWitnessContract.Vote.deserializeBinaryFromReader);
      msg.addVotes(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.VoteWitnessContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.VoteWitnessContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.VoteWitnessContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.VoteWitnessContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protocol.VoteWitnessContract.Vote.serializeBinaryToWriter
    );
  }
  f = message.getSupport();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.VoteWitnessContract.Vote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.VoteWitnessContract.Vote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.VoteWitnessContract.Vote.displayName = 'proto.protocol.VoteWitnessContract.Vote';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.VoteWitnessContract.Vote.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.VoteWitnessContract.Vote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.VoteWitnessContract.Vote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.VoteWitnessContract.Vote.toObject = function(includeInstance, msg) {
  var f, obj = {
    voteAddress: msg.getVoteAddress_asB64(),
    voteCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.VoteWitnessContract.Vote}
 */
proto.protocol.VoteWitnessContract.Vote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.VoteWitnessContract.Vote;
  return proto.protocol.VoteWitnessContract.Vote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.VoteWitnessContract.Vote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.VoteWitnessContract.Vote}
 */
proto.protocol.VoteWitnessContract.Vote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVoteAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoteCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.VoteWitnessContract.Vote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.VoteWitnessContract.Vote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.VoteWitnessContract.Vote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.VoteWitnessContract.Vote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoteAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVoteCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes vote_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.VoteWitnessContract.Vote.prototype.getVoteAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes vote_address = 1;
 * This is a type-conversion wrapper around `getVoteAddress()`
 * @return {string}
 */
proto.protocol.VoteWitnessContract.Vote.prototype.getVoteAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVoteAddress()));
};


/**
 * optional bytes vote_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVoteAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.VoteWitnessContract.Vote.prototype.getVoteAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoteAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.VoteWitnessContract.Vote.prototype.setVoteAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 vote_count = 2;
 * @return {number}
 */
proto.protocol.VoteWitnessContract.Vote.prototype.getVoteCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.VoteWitnessContract.Vote.prototype.setVoteCount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.VoteWitnessContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.VoteWitnessContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.VoteWitnessContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.VoteWitnessContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated Vote votes = 2;
 * @return {!Array.<!proto.protocol.VoteWitnessContract.Vote>}
 */
proto.protocol.VoteWitnessContract.prototype.getVotesList = function() {
  return /** @type{!Array.<!proto.protocol.VoteWitnessContract.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.VoteWitnessContract.Vote, 2));
};


/** @param {!Array.<!proto.protocol.VoteWitnessContract.Vote>} value */
proto.protocol.VoteWitnessContract.prototype.setVotesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocol.VoteWitnessContract.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.VoteWitnessContract.Vote}
 */
proto.protocol.VoteWitnessContract.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocol.VoteWitnessContract.Vote, opt_index);
};


proto.protocol.VoteWitnessContract.prototype.clearVotesList = function() {
  this.setVotesList([]);
};


/**
 * optional bool support = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.protocol.VoteWitnessContract.prototype.getSupport = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.protocol.VoteWitnessContract.prototype.setSupport = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.WitnessCreateContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.WitnessCreateContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.WitnessCreateContract.displayName = 'proto.protocol.WitnessCreateContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.WitnessCreateContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.WitnessCreateContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.WitnessCreateContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.WitnessCreateContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    url: msg.getUrl_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.WitnessCreateContract}
 */
proto.protocol.WitnessCreateContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.WitnessCreateContract;
  return proto.protocol.WitnessCreateContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.WitnessCreateContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.WitnessCreateContract}
 */
proto.protocol.WitnessCreateContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.WitnessCreateContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.WitnessCreateContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.WitnessCreateContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.WitnessCreateContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getUrl_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.WitnessCreateContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.WitnessCreateContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.WitnessCreateContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.WitnessCreateContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes url = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.WitnessCreateContract.prototype.getUrl = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes url = 2;
 * This is a type-conversion wrapper around `getUrl()`
 * @return {string}
 */
proto.protocol.WitnessCreateContract.prototype.getUrl_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUrl()));
};


/**
 * optional bytes url = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUrl()`
 * @return {!Uint8Array}
 */
proto.protocol.WitnessCreateContract.prototype.getUrl_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUrl()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.WitnessCreateContract.prototype.setUrl = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.WitnessUpdateContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.WitnessUpdateContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.WitnessUpdateContract.displayName = 'proto.protocol.WitnessUpdateContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.WitnessUpdateContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.WitnessUpdateContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.WitnessUpdateContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.WitnessUpdateContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    updateUrl: msg.getUpdateUrl_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.WitnessUpdateContract}
 */
proto.protocol.WitnessUpdateContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.WitnessUpdateContract;
  return proto.protocol.WitnessUpdateContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.WitnessUpdateContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.WitnessUpdateContract}
 */
proto.protocol.WitnessUpdateContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUpdateUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.WitnessUpdateContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.WitnessUpdateContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.WitnessUpdateContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.WitnessUpdateContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getUpdateUrl_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      12,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.WitnessUpdateContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.WitnessUpdateContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.WitnessUpdateContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.WitnessUpdateContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes update_url = 12;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.WitnessUpdateContract.prototype.getUpdateUrl = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes update_url = 12;
 * This is a type-conversion wrapper around `getUpdateUrl()`
 * @return {string}
 */
proto.protocol.WitnessUpdateContract.prototype.getUpdateUrl_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUpdateUrl()));
};


/**
 * optional bytes update_url = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUpdateUrl()`
 * @return {!Uint8Array}
 */
proto.protocol.WitnessUpdateContract.prototype.getUpdateUrl_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUpdateUrl()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.WitnessUpdateContract.prototype.setUpdateUrl = function(value) {
  jspb.Message.setProto3BytesField(this, 12, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.AssetIssueContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.AssetIssueContract.repeatedFields_, null);
};
goog.inherits(proto.protocol.AssetIssueContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.AssetIssueContract.displayName = 'proto.protocol.AssetIssueContract';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.AssetIssueContract.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.AssetIssueContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.AssetIssueContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.AssetIssueContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AssetIssueContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    name: msg.getName_asB64(),
    abbr: msg.getAbbr_asB64(),
    totalSupply: jspb.Message.getFieldWithDefault(msg, 4, 0),
    frozenSupplyList: jspb.Message.toObjectList(msg.getFrozenSupplyList(),
    proto.protocol.AssetIssueContract.FrozenSupply.toObject, includeInstance),
    trxNum: jspb.Message.getFieldWithDefault(msg, 6, 0),
    num: jspb.Message.getFieldWithDefault(msg, 8, 0),
    startTime: jspb.Message.getFieldWithDefault(msg, 9, 0),
    endTime: jspb.Message.getFieldWithDefault(msg, 10, 0),
    voteScore: jspb.Message.getFieldWithDefault(msg, 16, 0),
    description: msg.getDescription_asB64(),
    url: msg.getUrl_asB64(),
    freeAssetNetLimit: jspb.Message.getFieldWithDefault(msg, 22, 0),
    publicFreeAssetNetLimit: jspb.Message.getFieldWithDefault(msg, 23, 0),
    publicFreeAssetNetUsage: jspb.Message.getFieldWithDefault(msg, 24, 0),
    publicLatestFreeNetTime: jspb.Message.getFieldWithDefault(msg, 25, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.AssetIssueContract}
 */
proto.protocol.AssetIssueContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.AssetIssueContract;
  return proto.protocol.AssetIssueContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.AssetIssueContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.AssetIssueContract}
 */
proto.protocol.AssetIssueContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAbbr(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSupply(value);
      break;
    case 5:
      var value = new proto.protocol.AssetIssueContract.FrozenSupply;
      reader.readMessage(value,proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinaryFromReader);
      msg.addFrozenSupply(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrxNum(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTime(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVoteScore(value);
      break;
    case 20:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDescription(value);
      break;
    case 21:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUrl(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFreeAssetNetLimit(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPublicFreeAssetNetLimit(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPublicFreeAssetNetUsage(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPublicLatestFreeNetTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.AssetIssueContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.AssetIssueContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.AssetIssueContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AssetIssueContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAbbr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getTotalSupply();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFrozenSupplyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.protocol.AssetIssueContract.FrozenSupply.serializeBinaryToWriter
    );
  }
  f = message.getTrxNum();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getStartTime();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getEndTime();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getVoteScore();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getDescription_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      20,
      f
    );
  }
  f = message.getUrl_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      21,
      f
    );
  }
  f = message.getFreeAssetNetLimit();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
  f = message.getPublicFreeAssetNetLimit();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getPublicFreeAssetNetUsage();
  if (f !== 0) {
    writer.writeInt64(
      24,
      f
    );
  }
  f = message.getPublicLatestFreeNetTime();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.AssetIssueContract.FrozenSupply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.AssetIssueContract.FrozenSupply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.AssetIssueContract.FrozenSupply.displayName = 'proto.protocol.AssetIssueContract.FrozenSupply';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.AssetIssueContract.FrozenSupply.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.AssetIssueContract.FrozenSupply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.AssetIssueContract.FrozenSupply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AssetIssueContract.FrozenSupply.toObject = function(includeInstance, msg) {
  var f, obj = {
    frozenAmount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    frozenDays: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.AssetIssueContract.FrozenSupply}
 */
proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.AssetIssueContract.FrozenSupply;
  return proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.AssetIssueContract.FrozenSupply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.AssetIssueContract.FrozenSupply}
 */
proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenDays(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.AssetIssueContract.FrozenSupply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.AssetIssueContract.FrozenSupply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.AssetIssueContract.FrozenSupply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AssetIssueContract.FrozenSupply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrozenAmount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFrozenDays();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 frozen_amount = 1;
 * @return {number}
 */
proto.protocol.AssetIssueContract.FrozenSupply.prototype.getFrozenAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.FrozenSupply.prototype.setFrozenAmount = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 frozen_days = 2;
 * @return {number}
 */
proto.protocol.AssetIssueContract.FrozenSupply.prototype.getFrozenDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.FrozenSupply.prototype.setFrozenDays = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AssetIssueContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.AssetIssueContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.AssetIssueContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AssetIssueContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes name = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AssetIssueContract.prototype.getName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes name = 2;
 * This is a type-conversion wrapper around `getName()`
 * @return {string}
 */
proto.protocol.AssetIssueContract.prototype.getName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getName()));
};


/**
 * optional bytes name = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getName()`
 * @return {!Uint8Array}
 */
proto.protocol.AssetIssueContract.prototype.getName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getName()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AssetIssueContract.prototype.setName = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes abbr = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AssetIssueContract.prototype.getAbbr = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes abbr = 3;
 * This is a type-conversion wrapper around `getAbbr()`
 * @return {string}
 */
proto.protocol.AssetIssueContract.prototype.getAbbr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAbbr()));
};


/**
 * optional bytes abbr = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAbbr()`
 * @return {!Uint8Array}
 */
proto.protocol.AssetIssueContract.prototype.getAbbr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAbbr()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AssetIssueContract.prototype.setAbbr = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional int64 total_supply = 4;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getTotalSupply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setTotalSupply = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated FrozenSupply frozen_supply = 5;
 * @return {!Array.<!proto.protocol.AssetIssueContract.FrozenSupply>}
 */
proto.protocol.AssetIssueContract.prototype.getFrozenSupplyList = function() {
  return /** @type{!Array.<!proto.protocol.AssetIssueContract.FrozenSupply>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.AssetIssueContract.FrozenSupply, 5));
};


/** @param {!Array.<!proto.protocol.AssetIssueContract.FrozenSupply>} value */
proto.protocol.AssetIssueContract.prototype.setFrozenSupplyList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protocol.AssetIssueContract.FrozenSupply=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.AssetIssueContract.FrozenSupply}
 */
proto.protocol.AssetIssueContract.prototype.addFrozenSupply = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protocol.AssetIssueContract.FrozenSupply, opt_index);
};


proto.protocol.AssetIssueContract.prototype.clearFrozenSupplyList = function() {
  this.setFrozenSupplyList([]);
};


/**
 * optional int32 trx_num = 6;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getTrxNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setTrxNum = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 num = 8;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setNum = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 start_time = 9;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setStartTime = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 end_time = 10;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getEndTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setEndTime = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 vote_score = 16;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getVoteScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setVoteScore = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional bytes description = 20;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AssetIssueContract.prototype.getDescription = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes description = 20;
 * This is a type-conversion wrapper around `getDescription()`
 * @return {string}
 */
proto.protocol.AssetIssueContract.prototype.getDescription_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDescription()));
};


/**
 * optional bytes description = 20;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDescription()`
 * @return {!Uint8Array}
 */
proto.protocol.AssetIssueContract.prototype.getDescription_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDescription()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AssetIssueContract.prototype.setDescription = function(value) {
  jspb.Message.setProto3BytesField(this, 20, value);
};


/**
 * optional bytes url = 21;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AssetIssueContract.prototype.getUrl = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * optional bytes url = 21;
 * This is a type-conversion wrapper around `getUrl()`
 * @return {string}
 */
proto.protocol.AssetIssueContract.prototype.getUrl_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUrl()));
};


/**
 * optional bytes url = 21;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUrl()`
 * @return {!Uint8Array}
 */
proto.protocol.AssetIssueContract.prototype.getUrl_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUrl()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AssetIssueContract.prototype.setUrl = function(value) {
  jspb.Message.setProto3BytesField(this, 21, value);
};


/**
 * optional int64 free_asset_net_limit = 22;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getFreeAssetNetLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setFreeAssetNetLimit = function(value) {
  jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional int64 public_free_asset_net_limit = 23;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getPublicFreeAssetNetLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setPublicFreeAssetNetLimit = function(value) {
  jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int64 public_free_asset_net_usage = 24;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getPublicFreeAssetNetUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setPublicFreeAssetNetUsage = function(value) {
  jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int64 public_latest_free_net_time = 25;
 * @return {number}
 */
proto.protocol.AssetIssueContract.prototype.getPublicLatestFreeNetTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/** @param {number} value */
proto.protocol.AssetIssueContract.prototype.setPublicLatestFreeNetTime = function(value) {
  jspb.Message.setProto3IntField(this, 25, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.ParticipateAssetIssueContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.ParticipateAssetIssueContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.ParticipateAssetIssueContract.displayName = 'proto.protocol.ParticipateAssetIssueContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.ParticipateAssetIssueContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.ParticipateAssetIssueContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.ParticipateAssetIssueContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    toAddress: msg.getToAddress_asB64(),
    assetName: msg.getAssetName_asB64(),
    amount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.ParticipateAssetIssueContract}
 */
proto.protocol.ParticipateAssetIssueContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.ParticipateAssetIssueContract;
  return proto.protocol.ParticipateAssetIssueContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.ParticipateAssetIssueContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.ParticipateAssetIssueContract}
 */
proto.protocol.ParticipateAssetIssueContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setToAddress(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.ParticipateAssetIssueContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.ParticipateAssetIssueContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.ParticipateAssetIssueContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getToAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAssetName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.ParticipateAssetIssueContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes to_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getToAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes to_address = 2;
 * This is a type-conversion wrapper around `getToAddress()`
 * @return {string}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getToAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getToAddress()));
};


/**
 * optional bytes to_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getToAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getToAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getToAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.ParticipateAssetIssueContract.prototype.setToAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes asset_name = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getAssetName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes asset_name = 3;
 * This is a type-conversion wrapper around `getAssetName()`
 * @return {string}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getAssetName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetName()));
};


/**
 * optional bytes asset_name = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetName()`
 * @return {!Uint8Array}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getAssetName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetName()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.ParticipateAssetIssueContract.prototype.setAssetName = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional int64 amount = 4;
 * @return {number}
 */
proto.protocol.ParticipateAssetIssueContract.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protocol.ParticipateAssetIssueContract.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.DeployContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.DeployContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.DeployContract.displayName = 'proto.protocol.DeployContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.DeployContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.DeployContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.DeployContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.DeployContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    script: msg.getScript_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.DeployContract}
 */
proto.protocol.DeployContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.DeployContract;
  return proto.protocol.DeployContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.DeployContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.DeployContract}
 */
proto.protocol.DeployContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScript(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.DeployContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.DeployContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.DeployContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.DeployContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getScript_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.DeployContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.DeployContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.DeployContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.DeployContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes script = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.DeployContract.prototype.getScript = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes script = 2;
 * This is a type-conversion wrapper around `getScript()`
 * @return {string}
 */
proto.protocol.DeployContract.prototype.getScript_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScript()));
};


/**
 * optional bytes script = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScript()`
 * @return {!Uint8Array}
 */
proto.protocol.DeployContract.prototype.getScript_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScript()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.DeployContract.prototype.setScript = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.FreezeBalanceContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.FreezeBalanceContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.FreezeBalanceContract.displayName = 'proto.protocol.FreezeBalanceContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.FreezeBalanceContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.FreezeBalanceContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.FreezeBalanceContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.FreezeBalanceContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    frozenBalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    frozenDuration: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.FreezeBalanceContract}
 */
proto.protocol.FreezeBalanceContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.FreezeBalanceContract;
  return proto.protocol.FreezeBalanceContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.FreezeBalanceContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.FreezeBalanceContract}
 */
proto.protocol.FreezeBalanceContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.FreezeBalanceContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.FreezeBalanceContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.FreezeBalanceContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.FreezeBalanceContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFrozenBalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFrozenDuration();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.FreezeBalanceContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.FreezeBalanceContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.FreezeBalanceContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.FreezeBalanceContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 frozen_balance = 2;
 * @return {number}
 */
proto.protocol.FreezeBalanceContract.prototype.getFrozenBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.FreezeBalanceContract.prototype.setFrozenBalance = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 frozen_duration = 3;
 * @return {number}
 */
proto.protocol.FreezeBalanceContract.prototype.getFrozenDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.FreezeBalanceContract.prototype.setFrozenDuration = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.UnfreezeBalanceContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.UnfreezeBalanceContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.UnfreezeBalanceContract.displayName = 'proto.protocol.UnfreezeBalanceContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.UnfreezeBalanceContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.UnfreezeBalanceContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.UnfreezeBalanceContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.UnfreezeBalanceContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.UnfreezeBalanceContract}
 */
proto.protocol.UnfreezeBalanceContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.UnfreezeBalanceContract;
  return proto.protocol.UnfreezeBalanceContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.UnfreezeBalanceContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.UnfreezeBalanceContract}
 */
proto.protocol.UnfreezeBalanceContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.UnfreezeBalanceContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.UnfreezeBalanceContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.UnfreezeBalanceContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.UnfreezeBalanceContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.UnfreezeBalanceContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.UnfreezeBalanceContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.UnfreezeBalanceContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.UnfreezeBalanceContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.UnfreezeAssetContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.UnfreezeAssetContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.UnfreezeAssetContract.displayName = 'proto.protocol.UnfreezeAssetContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.UnfreezeAssetContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.UnfreezeAssetContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.UnfreezeAssetContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.UnfreezeAssetContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.UnfreezeAssetContract}
 */
proto.protocol.UnfreezeAssetContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.UnfreezeAssetContract;
  return proto.protocol.UnfreezeAssetContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.UnfreezeAssetContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.UnfreezeAssetContract}
 */
proto.protocol.UnfreezeAssetContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.UnfreezeAssetContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.UnfreezeAssetContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.UnfreezeAssetContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.UnfreezeAssetContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.UnfreezeAssetContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.UnfreezeAssetContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.UnfreezeAssetContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.UnfreezeAssetContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.WithdrawBalanceContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.WithdrawBalanceContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.WithdrawBalanceContract.displayName = 'proto.protocol.WithdrawBalanceContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.WithdrawBalanceContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.WithdrawBalanceContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.WithdrawBalanceContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.WithdrawBalanceContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.WithdrawBalanceContract}
 */
proto.protocol.WithdrawBalanceContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.WithdrawBalanceContract;
  return proto.protocol.WithdrawBalanceContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.WithdrawBalanceContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.WithdrawBalanceContract}
 */
proto.protocol.WithdrawBalanceContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.WithdrawBalanceContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.WithdrawBalanceContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.WithdrawBalanceContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.WithdrawBalanceContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.WithdrawBalanceContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.WithdrawBalanceContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.WithdrawBalanceContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.WithdrawBalanceContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.UpdateAssetContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.UpdateAssetContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.UpdateAssetContract.displayName = 'proto.protocol.UpdateAssetContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.UpdateAssetContract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.UpdateAssetContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.UpdateAssetContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.UpdateAssetContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    description: msg.getDescription_asB64(),
    url: msg.getUrl_asB64(),
    newLimit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    newPublicLimit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.UpdateAssetContract}
 */
proto.protocol.UpdateAssetContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.UpdateAssetContract;
  return proto.protocol.UpdateAssetContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.UpdateAssetContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.UpdateAssetContract}
 */
proto.protocol.UpdateAssetContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewLimit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewPublicLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.UpdateAssetContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.UpdateAssetContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.UpdateAssetContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.UpdateAssetContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDescription_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getUrl_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getNewLimit();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getNewPublicLimit();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.UpdateAssetContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.protocol.UpdateAssetContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.UpdateAssetContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.UpdateAssetContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes description = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.UpdateAssetContract.prototype.getDescription = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes description = 2;
 * This is a type-conversion wrapper around `getDescription()`
 * @return {string}
 */
proto.protocol.UpdateAssetContract.prototype.getDescription_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDescription()));
};


/**
 * optional bytes description = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDescription()`
 * @return {!Uint8Array}
 */
proto.protocol.UpdateAssetContract.prototype.getDescription_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDescription()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.UpdateAssetContract.prototype.setDescription = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes url = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.UpdateAssetContract.prototype.getUrl = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes url = 3;
 * This is a type-conversion wrapper around `getUrl()`
 * @return {string}
 */
proto.protocol.UpdateAssetContract.prototype.getUrl_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUrl()));
};


/**
 * optional bytes url = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUrl()`
 * @return {!Uint8Array}
 */
proto.protocol.UpdateAssetContract.prototype.getUrl_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUrl()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.UpdateAssetContract.prototype.setUrl = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional int64 new_limit = 4;
 * @return {number}
 */
proto.protocol.UpdateAssetContract.prototype.getNewLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protocol.UpdateAssetContract.prototype.setNewLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 new_public_limit = 5;
 * @return {number}
 */
proto.protocol.UpdateAssetContract.prototype.getNewPublicLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.protocol.UpdateAssetContract.prototype.setNewPublicLimit = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


goog.object.extend(exports, proto.protocol);

},{"../core/Tron_pb.js":10,"google-protobuf":2}],8:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.protocol.Endpoint', null, global);
goog.exportSymbol('proto.protocol.FindNeighbours', null, global);
goog.exportSymbol('proto.protocol.Neighbours', null, global);
goog.exportSymbol('proto.protocol.PingMessage', null, global);
goog.exportSymbol('proto.protocol.PongMessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Endpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Endpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Endpoint.displayName = 'proto.protocol.Endpoint';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Endpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Endpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Endpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Endpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nodeid: msg.getNodeid_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Endpoint}
 */
proto.protocol.Endpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Endpoint;
  return proto.protocol.Endpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Endpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Endpoint}
 */
proto.protocol.Endpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNodeid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Endpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Endpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Endpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Endpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNodeid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Endpoint.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.protocol.Endpoint.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.Endpoint.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Endpoint.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.protocol.Endpoint.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.Endpoint.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes nodeId = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Endpoint.prototype.getNodeid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes nodeId = 3;
 * This is a type-conversion wrapper around `getNodeid()`
 * @return {string}
 */
proto.protocol.Endpoint.prototype.getNodeid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNodeid()));
};


/**
 * optional bytes nodeId = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNodeid()`
 * @return {!Uint8Array}
 */
proto.protocol.Endpoint.prototype.getNodeid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNodeid()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Endpoint.prototype.setNodeid = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.PingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.PingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.PingMessage.displayName = 'proto.protocol.PingMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.PingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.PingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.PingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.PingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.protocol.Endpoint.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.protocol.Endpoint.toObject(includeInstance, f),
    version: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.PingMessage}
 */
proto.protocol.PingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.PingMessage;
  return proto.protocol.PingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.PingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.PingMessage}
 */
proto.protocol.PingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.Endpoint;
      reader.readMessage(value,proto.protocol.Endpoint.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new proto.protocol.Endpoint;
      reader.readMessage(value,proto.protocol.Endpoint.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.PingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.PingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.PingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.PingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protocol.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional Endpoint from = 1;
 * @return {?proto.protocol.Endpoint}
 */
proto.protocol.PingMessage.prototype.getFrom = function() {
  return /** @type{?proto.protocol.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.protocol.Endpoint, 1));
};


/** @param {?proto.protocol.Endpoint|undefined} value */
proto.protocol.PingMessage.prototype.setFrom = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.PingMessage.prototype.clearFrom = function() {
  this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.PingMessage.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Endpoint to = 2;
 * @return {?proto.protocol.Endpoint}
 */
proto.protocol.PingMessage.prototype.getTo = function() {
  return /** @type{?proto.protocol.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.protocol.Endpoint, 2));
};


/** @param {?proto.protocol.Endpoint|undefined} value */
proto.protocol.PingMessage.prototype.setTo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.protocol.PingMessage.prototype.clearTo = function() {
  this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.PingMessage.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 version = 3;
 * @return {number}
 */
proto.protocol.PingMessage.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.PingMessage.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.protocol.PingMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protocol.PingMessage.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.PongMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.PongMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.PongMessage.displayName = 'proto.protocol.PongMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.PongMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.PongMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.PongMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.PongMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.protocol.Endpoint.toObject(includeInstance, f),
    echo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.PongMessage}
 */
proto.protocol.PongMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.PongMessage;
  return proto.protocol.PongMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.PongMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.PongMessage}
 */
proto.protocol.PongMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.Endpoint;
      reader.readMessage(value,proto.protocol.Endpoint.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEcho(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.PongMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.PongMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.PongMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.PongMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getEcho();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional Endpoint from = 1;
 * @return {?proto.protocol.Endpoint}
 */
proto.protocol.PongMessage.prototype.getFrom = function() {
  return /** @type{?proto.protocol.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.protocol.Endpoint, 1));
};


/** @param {?proto.protocol.Endpoint|undefined} value */
proto.protocol.PongMessage.prototype.setFrom = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.PongMessage.prototype.clearFrom = function() {
  this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.PongMessage.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 echo = 2;
 * @return {number}
 */
proto.protocol.PongMessage.prototype.getEcho = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.PongMessage.prototype.setEcho = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.protocol.PongMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.PongMessage.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.FindNeighbours = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.FindNeighbours, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.FindNeighbours.displayName = 'proto.protocol.FindNeighbours';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.FindNeighbours.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.FindNeighbours.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.FindNeighbours} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.FindNeighbours.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.protocol.Endpoint.toObject(includeInstance, f),
    targetid: msg.getTargetid_asB64(),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.FindNeighbours}
 */
proto.protocol.FindNeighbours.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.FindNeighbours;
  return proto.protocol.FindNeighbours.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.FindNeighbours} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.FindNeighbours}
 */
proto.protocol.FindNeighbours.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.Endpoint;
      reader.readMessage(value,proto.protocol.Endpoint.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTargetid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.FindNeighbours.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.FindNeighbours.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.FindNeighbours} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.FindNeighbours.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getTargetid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional Endpoint from = 1;
 * @return {?proto.protocol.Endpoint}
 */
proto.protocol.FindNeighbours.prototype.getFrom = function() {
  return /** @type{?proto.protocol.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.protocol.Endpoint, 1));
};


/** @param {?proto.protocol.Endpoint|undefined} value */
proto.protocol.FindNeighbours.prototype.setFrom = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.FindNeighbours.prototype.clearFrom = function() {
  this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.FindNeighbours.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes targetId = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.FindNeighbours.prototype.getTargetid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes targetId = 2;
 * This is a type-conversion wrapper around `getTargetid()`
 * @return {string}
 */
proto.protocol.FindNeighbours.prototype.getTargetid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTargetid()));
};


/**
 * optional bytes targetId = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTargetid()`
 * @return {!Uint8Array}
 */
proto.protocol.FindNeighbours.prototype.getTargetid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTargetid()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.FindNeighbours.prototype.setTargetid = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.protocol.FindNeighbours.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.FindNeighbours.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Neighbours = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Neighbours.repeatedFields_, null);
};
goog.inherits(proto.protocol.Neighbours, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Neighbours.displayName = 'proto.protocol.Neighbours';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Neighbours.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Neighbours.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Neighbours.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Neighbours} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Neighbours.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.protocol.Endpoint.toObject(includeInstance, f),
    neighboursList: jspb.Message.toObjectList(msg.getNeighboursList(),
    proto.protocol.Endpoint.toObject, includeInstance),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Neighbours}
 */
proto.protocol.Neighbours.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Neighbours;
  return proto.protocol.Neighbours.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Neighbours} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Neighbours}
 */
proto.protocol.Neighbours.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.Endpoint;
      reader.readMessage(value,proto.protocol.Endpoint.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new proto.protocol.Endpoint;
      reader.readMessage(value,proto.protocol.Endpoint.deserializeBinaryFromReader);
      msg.addNeighbours(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Neighbours.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Neighbours.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Neighbours} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Neighbours.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getNeighboursList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protocol.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional Endpoint from = 1;
 * @return {?proto.protocol.Endpoint}
 */
proto.protocol.Neighbours.prototype.getFrom = function() {
  return /** @type{?proto.protocol.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.protocol.Endpoint, 1));
};


/** @param {?proto.protocol.Endpoint|undefined} value */
proto.protocol.Neighbours.prototype.setFrom = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.Neighbours.prototype.clearFrom = function() {
  this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.Neighbours.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Endpoint neighbours = 2;
 * @return {!Array.<!proto.protocol.Endpoint>}
 */
proto.protocol.Neighbours.prototype.getNeighboursList = function() {
  return /** @type{!Array.<!proto.protocol.Endpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Endpoint, 2));
};


/** @param {!Array.<!proto.protocol.Endpoint>} value */
proto.protocol.Neighbours.prototype.setNeighboursList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocol.Endpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Endpoint}
 */
proto.protocol.Neighbours.prototype.addNeighbours = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocol.Endpoint, opt_index);
};


proto.protocol.Neighbours.prototype.clearNeighboursList = function() {
  this.setNeighboursList([]);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.protocol.Neighbours.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.Neighbours.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.protocol);

},{"google-protobuf":2}],9:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.protocol.InventoryItems', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.InventoryItems = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.InventoryItems.repeatedFields_, null);
};
goog.inherits(proto.protocol.InventoryItems, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.InventoryItems.displayName = 'proto.protocol.InventoryItems';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.InventoryItems.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.InventoryItems.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.InventoryItems.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.InventoryItems} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.InventoryItems.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    itemsList: msg.getItemsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.InventoryItems}
 */
proto.protocol.InventoryItems.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.InventoryItems;
  return proto.protocol.InventoryItems.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.InventoryItems} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.InventoryItems}
 */
proto.protocol.InventoryItems.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.InventoryItems.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.InventoryItems.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.InventoryItems} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.InventoryItems.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getItemsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.protocol.InventoryItems.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.InventoryItems.prototype.setType = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated bytes items = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.protocol.InventoryItems.prototype.getItemsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes items = 2;
 * This is a type-conversion wrapper around `getItemsList()`
 * @return {!Array.<string>}
 */
proto.protocol.InventoryItems.prototype.getItemsList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getItemsList()));
};


/**
 * repeated bytes items = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getItemsList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.protocol.InventoryItems.prototype.getItemsList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getItemsList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.protocol.InventoryItems.prototype.setItemsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.protocol.InventoryItems.prototype.addItems = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.protocol.InventoryItems.prototype.clearItemsList = function() {
  this.setItemsList([]);
};


goog.object.extend(exports, proto.protocol);

},{"google-protobuf":2}],10:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var core_Discover_pb = require('../core/Discover_pb.js');
goog.exportSymbol('proto.protocol.Account', null, global);
goog.exportSymbol('proto.protocol.Account.Frozen', null, global);
goog.exportSymbol('proto.protocol.AccountId', null, global);
goog.exportSymbol('proto.protocol.AccountType', null, global);
goog.exportSymbol('proto.protocol.Block', null, global);
goog.exportSymbol('proto.protocol.BlockHeader', null, global);
goog.exportSymbol('proto.protocol.BlockHeader.raw', null, global);
goog.exportSymbol('proto.protocol.BlockInventory', null, global);
goog.exportSymbol('proto.protocol.BlockInventory.BlockId', null, global);
goog.exportSymbol('proto.protocol.BlockInventory.Type', null, global);
goog.exportSymbol('proto.protocol.ChainInventory', null, global);
goog.exportSymbol('proto.protocol.ChainInventory.BlockId', null, global);
goog.exportSymbol('proto.protocol.DisconnectMessage', null, global);
goog.exportSymbol('proto.protocol.DynamicProperties', null, global);
goog.exportSymbol('proto.protocol.HelloMessage', null, global);
goog.exportSymbol('proto.protocol.HelloMessage.BlockId', null, global);
goog.exportSymbol('proto.protocol.Inventory', null, global);
goog.exportSymbol('proto.protocol.Inventory.InventoryType', null, global);
goog.exportSymbol('proto.protocol.Items', null, global);
goog.exportSymbol('proto.protocol.Items.ItemType', null, global);
goog.exportSymbol('proto.protocol.ReasonCode', null, global);
goog.exportSymbol('proto.protocol.TXInput', null, global);
goog.exportSymbol('proto.protocol.TXInput.raw', null, global);
goog.exportSymbol('proto.protocol.TXOutput', null, global);
goog.exportSymbol('proto.protocol.TXOutputs', null, global);
goog.exportSymbol('proto.protocol.Transaction', null, global);
goog.exportSymbol('proto.protocol.Transaction.Contract', null, global);
goog.exportSymbol('proto.protocol.Transaction.Contract.ContractType', null, global);
goog.exportSymbol('proto.protocol.Transaction.Result', null, global);
goog.exportSymbol('proto.protocol.Transaction.Result.code', null, global);
goog.exportSymbol('proto.protocol.Transaction.raw', null, global);
goog.exportSymbol('proto.protocol.Transactions', null, global);
goog.exportSymbol('proto.protocol.Vote', null, global);
goog.exportSymbol('proto.protocol.Votes', null, global);
goog.exportSymbol('proto.protocol.Witness', null, global);
goog.exportSymbol('proto.protocol.acuthrity', null, global);
goog.exportSymbol('proto.protocol.permision', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.AccountId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.AccountId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.AccountId.displayName = 'proto.protocol.AccountId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.AccountId.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.AccountId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.AccountId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountId.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName_asB64(),
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.AccountId}
 */
proto.protocol.AccountId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.AccountId;
  return proto.protocol.AccountId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.AccountId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.AccountId}
 */
proto.protocol.AccountId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.AccountId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.AccountId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.AccountId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.AccountId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes name = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AccountId.prototype.getName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes name = 1;
 * This is a type-conversion wrapper around `getName()`
 * @return {string}
 */
proto.protocol.AccountId.prototype.getName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getName()));
};


/**
 * optional bytes name = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getName()`
 * @return {!Uint8Array}
 */
proto.protocol.AccountId.prototype.getName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getName()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AccountId.prototype.setName = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.AccountId.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes address = 2;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.protocol.AccountId.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.AccountId.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.AccountId.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Vote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Vote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Vote.displayName = 'proto.protocol.Vote';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Vote.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Vote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Vote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Vote.toObject = function(includeInstance, msg) {
  var f, obj = {
    voteAddress: msg.getVoteAddress_asB64(),
    voteCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Vote}
 */
proto.protocol.Vote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Vote;
  return proto.protocol.Vote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Vote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Vote}
 */
proto.protocol.Vote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVoteAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoteCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Vote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Vote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Vote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Vote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoteAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVoteCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes vote_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Vote.prototype.getVoteAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes vote_address = 1;
 * This is a type-conversion wrapper around `getVoteAddress()`
 * @return {string}
 */
proto.protocol.Vote.prototype.getVoteAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVoteAddress()));
};


/**
 * optional bytes vote_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVoteAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.Vote.prototype.getVoteAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoteAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Vote.prototype.setVoteAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 vote_count = 2;
 * @return {number}
 */
proto.protocol.Vote.prototype.getVoteCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.Vote.prototype.setVoteCount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Account.repeatedFields_, null);
};
goog.inherits(proto.protocol.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Account.displayName = 'proto.protocol.Account';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Account.repeatedFields_ = [5,7,16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: msg.getAccountName_asB64(),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    address: msg.getAddress_asB64(),
    balance: jspb.Message.getFieldWithDefault(msg, 4, 0),
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    proto.protocol.Vote.toObject, includeInstance),
    assetMap: (f = msg.getAssetMap()) ? f.toObject(includeInstance, undefined) : [],
    frozenList: jspb.Message.toObjectList(msg.getFrozenList(),
    proto.protocol.Account.Frozen.toObject, includeInstance),
    netUsage: jspb.Message.getFieldWithDefault(msg, 8, 0),
    createTime: jspb.Message.getFieldWithDefault(msg, 9, 0),
    latestOprationTime: jspb.Message.getFieldWithDefault(msg, 10, 0),
    allowance: jspb.Message.getFieldWithDefault(msg, 11, 0),
    latestWithdrawTime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    code: msg.getCode_asB64(),
    isWitness: jspb.Message.getFieldWithDefault(msg, 14, false),
    isCommittee: jspb.Message.getFieldWithDefault(msg, 15, false),
    frozenSupplyList: jspb.Message.toObjectList(msg.getFrozenSupplyList(),
    proto.protocol.Account.Frozen.toObject, includeInstance),
    assetIssuedName: msg.getAssetIssuedName_asB64(),
    latestAssetOperationTimeMap: (f = msg.getLatestAssetOperationTimeMap()) ? f.toObject(includeInstance, undefined) : [],
    freeNetUsage: jspb.Message.getFieldWithDefault(msg, 19, 0),
    freeAssetNetUsageMap: (f = msg.getFreeAssetNetUsageMap()) ? f.toObject(includeInstance, undefined) : [],
    latestConsumeTime: jspb.Message.getFieldWithDefault(msg, 21, 0),
    latestConsumeFreeTime: jspb.Message.getFieldWithDefault(msg, 22, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Account}
 */
proto.protocol.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Account;
  return proto.protocol.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Account}
 */
proto.protocol.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {!proto.protocol.AccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    case 5:
      var value = new proto.protocol.Vote;
      reader.readMessage(value,proto.protocol.Vote.deserializeBinaryFromReader);
      msg.addVotes(value);
      break;
    case 6:
      var value = msg.getAssetMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64);
         });
      break;
    case 7:
      var value = new proto.protocol.Account.Frozen;
      reader.readMessage(value,proto.protocol.Account.Frozen.deserializeBinaryFromReader);
      msg.addFrozen(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetUsage(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateTime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestOprationTime(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAllowance(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestWithdrawTime(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCode(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWitness(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCommittee(value);
      break;
    case 16:
      var value = new proto.protocol.Account.Frozen;
      reader.readMessage(value,proto.protocol.Account.Frozen.deserializeBinaryFromReader);
      msg.addFrozenSupply(value);
      break;
    case 17:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetIssuedName(value);
      break;
    case 18:
      var value = msg.getLatestAssetOperationTimeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64);
         });
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFreeNetUsage(value);
      break;
    case 20:
      var value = msg.getFreeAssetNetUsageMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64);
         });
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestConsumeTime(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestConsumeFreeTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.protocol.Vote.serializeBinaryToWriter
    );
  }
  f = message.getAssetMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getFrozenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.protocol.Account.Frozen.serializeBinaryToWriter
    );
  }
  f = message.getNetUsage();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getCreateTime();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getLatestOprationTime();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getAllowance();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getLatestWithdrawTime();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      13,
      f
    );
  }
  f = message.getIsWitness();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getIsCommittee();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getFrozenSupplyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.protocol.Account.Frozen.serializeBinaryToWriter
    );
  }
  f = message.getAssetIssuedName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      17,
      f
    );
  }
  f = message.getLatestAssetOperationTimeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(18, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getFreeNetUsage();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getFreeAssetNetUsageMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(20, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getLatestConsumeTime();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getLatestConsumeFreeTime();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Account.Frozen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Account.Frozen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Account.Frozen.displayName = 'proto.protocol.Account.Frozen';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Account.Frozen.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Account.Frozen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Account.Frozen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Account.Frozen.toObject = function(includeInstance, msg) {
  var f, obj = {
    frozenBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    expireTime: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Account.Frozen}
 */
proto.protocol.Account.Frozen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Account.Frozen;
  return proto.protocol.Account.Frozen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Account.Frozen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Account.Frozen}
 */
proto.protocol.Account.Frozen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpireTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Account.Frozen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Account.Frozen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Account.Frozen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Account.Frozen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrozenBalance();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getExpireTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 frozen_balance = 1;
 * @return {number}
 */
proto.protocol.Account.Frozen.prototype.getFrozenBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.Account.Frozen.prototype.setFrozenBalance = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 expire_time = 2;
 * @return {number}
 */
proto.protocol.Account.Frozen.prototype.getExpireTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.Account.Frozen.prototype.setExpireTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes account_name = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Account.prototype.getAccountName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes account_name = 1;
 * This is a type-conversion wrapper around `getAccountName()`
 * @return {string}
 */
proto.protocol.Account.prototype.getAccountName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccountName()));
};


/**
 * optional bytes account_name = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccountName()`
 * @return {!Uint8Array}
 */
proto.protocol.Account.prototype.getAccountName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccountName()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Account.prototype.setAccountName = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional AccountType type = 2;
 * @return {!proto.protocol.AccountType}
 */
proto.protocol.Account.prototype.getType = function() {
  return /** @type {!proto.protocol.AccountType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.protocol.AccountType} value */
proto.protocol.Account.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bytes address = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Account.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes address = 3;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.protocol.Account.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.Account.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Account.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional int64 balance = 4;
 * @return {number}
 */
proto.protocol.Account.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.protocol.Account.prototype.setBalance = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Vote votes = 5;
 * @return {!Array.<!proto.protocol.Vote>}
 */
proto.protocol.Account.prototype.getVotesList = function() {
  return /** @type{!Array.<!proto.protocol.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Vote, 5));
};


/** @param {!Array.<!proto.protocol.Vote>} value */
proto.protocol.Account.prototype.setVotesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protocol.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Vote}
 */
proto.protocol.Account.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protocol.Vote, opt_index);
};


proto.protocol.Account.prototype.clearVotesList = function() {
  this.setVotesList([]);
};


/**
 * map<string, int64> asset = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.protocol.Account.prototype.getAssetMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.protocol.Account.prototype.clearAssetMap = function() {
  this.getAssetMap().clear();
};


/**
 * repeated Frozen frozen = 7;
 * @return {!Array.<!proto.protocol.Account.Frozen>}
 */
proto.protocol.Account.prototype.getFrozenList = function() {
  return /** @type{!Array.<!proto.protocol.Account.Frozen>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Account.Frozen, 7));
};


/** @param {!Array.<!proto.protocol.Account.Frozen>} value */
proto.protocol.Account.prototype.setFrozenList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.protocol.Account.Frozen=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Account.Frozen}
 */
proto.protocol.Account.prototype.addFrozen = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.protocol.Account.Frozen, opt_index);
};


proto.protocol.Account.prototype.clearFrozenList = function() {
  this.setFrozenList([]);
};


/**
 * optional int64 net_usage = 8;
 * @return {number}
 */
proto.protocol.Account.prototype.getNetUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.protocol.Account.prototype.setNetUsage = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 create_time = 9;
 * @return {number}
 */
proto.protocol.Account.prototype.getCreateTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.protocol.Account.prototype.setCreateTime = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 latest_opration_time = 10;
 * @return {number}
 */
proto.protocol.Account.prototype.getLatestOprationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.protocol.Account.prototype.setLatestOprationTime = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 allowance = 11;
 * @return {number}
 */
proto.protocol.Account.prototype.getAllowance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.protocol.Account.prototype.setAllowance = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 latest_withdraw_time = 12;
 * @return {number}
 */
proto.protocol.Account.prototype.getLatestWithdrawTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.protocol.Account.prototype.setLatestWithdrawTime = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional bytes code = 13;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Account.prototype.getCode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes code = 13;
 * This is a type-conversion wrapper around `getCode()`
 * @return {string}
 */
proto.protocol.Account.prototype.getCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCode()));
};


/**
 * optional bytes code = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCode()`
 * @return {!Uint8Array}
 */
proto.protocol.Account.prototype.getCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCode()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Account.prototype.setCode = function(value) {
  jspb.Message.setProto3BytesField(this, 13, value);
};


/**
 * optional bool is_witness = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.protocol.Account.prototype.getIsWitness = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.protocol.Account.prototype.setIsWitness = function(value) {
  jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool is_committee = 15;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.protocol.Account.prototype.getIsCommittee = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 15, false));
};


/** @param {boolean} value */
proto.protocol.Account.prototype.setIsCommittee = function(value) {
  jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * repeated Frozen frozen_supply = 16;
 * @return {!Array.<!proto.protocol.Account.Frozen>}
 */
proto.protocol.Account.prototype.getFrozenSupplyList = function() {
  return /** @type{!Array.<!proto.protocol.Account.Frozen>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Account.Frozen, 16));
};


/** @param {!Array.<!proto.protocol.Account.Frozen>} value */
proto.protocol.Account.prototype.setFrozenSupplyList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.protocol.Account.Frozen=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Account.Frozen}
 */
proto.protocol.Account.prototype.addFrozenSupply = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.protocol.Account.Frozen, opt_index);
};


proto.protocol.Account.prototype.clearFrozenSupplyList = function() {
  this.setFrozenSupplyList([]);
};


/**
 * optional bytes asset_issued_name = 17;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Account.prototype.getAssetIssuedName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * optional bytes asset_issued_name = 17;
 * This is a type-conversion wrapper around `getAssetIssuedName()`
 * @return {string}
 */
proto.protocol.Account.prototype.getAssetIssuedName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetIssuedName()));
};


/**
 * optional bytes asset_issued_name = 17;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetIssuedName()`
 * @return {!Uint8Array}
 */
proto.protocol.Account.prototype.getAssetIssuedName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetIssuedName()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Account.prototype.setAssetIssuedName = function(value) {
  jspb.Message.setProto3BytesField(this, 17, value);
};


/**
 * map<string, int64> latest_asset_operation_time = 18;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.protocol.Account.prototype.getLatestAssetOperationTimeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 18, opt_noLazyCreate,
      null));
};


proto.protocol.Account.prototype.clearLatestAssetOperationTimeMap = function() {
  this.getLatestAssetOperationTimeMap().clear();
};


/**
 * optional int64 free_net_usage = 19;
 * @return {number}
 */
proto.protocol.Account.prototype.getFreeNetUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.protocol.Account.prototype.setFreeNetUsage = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * map<string, int64> free_asset_net_usage = 20;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.protocol.Account.prototype.getFreeAssetNetUsageMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 20, opt_noLazyCreate,
      null));
};


proto.protocol.Account.prototype.clearFreeAssetNetUsageMap = function() {
  this.getFreeAssetNetUsageMap().clear();
};


/**
 * optional int64 latest_consume_time = 21;
 * @return {number}
 */
proto.protocol.Account.prototype.getLatestConsumeTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/** @param {number} value */
proto.protocol.Account.prototype.setLatestConsumeTime = function(value) {
  jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional int64 latest_consume_free_time = 22;
 * @return {number}
 */
proto.protocol.Account.prototype.getLatestConsumeFreeTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {number} value */
proto.protocol.Account.prototype.setLatestConsumeFreeTime = function(value) {
  jspb.Message.setProto3IntField(this, 22, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.acuthrity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.acuthrity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.acuthrity.displayName = 'proto.protocol.acuthrity';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.acuthrity.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.acuthrity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.acuthrity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.acuthrity.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.protocol.AccountId.toObject(includeInstance, f),
    permissionName: msg.getPermissionName_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.acuthrity}
 */
proto.protocol.acuthrity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.acuthrity;
  return proto.protocol.acuthrity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.acuthrity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.acuthrity}
 */
proto.protocol.acuthrity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.AccountId;
      reader.readMessage(value,proto.protocol.AccountId.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPermissionName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.acuthrity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.acuthrity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.acuthrity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.acuthrity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.AccountId.serializeBinaryToWriter
    );
  }
  f = message.getPermissionName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional AccountId account = 1;
 * @return {?proto.protocol.AccountId}
 */
proto.protocol.acuthrity.prototype.getAccount = function() {
  return /** @type{?proto.protocol.AccountId} */ (
    jspb.Message.getWrapperField(this, proto.protocol.AccountId, 1));
};


/** @param {?proto.protocol.AccountId|undefined} value */
proto.protocol.acuthrity.prototype.setAccount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.acuthrity.prototype.clearAccount = function() {
  this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.acuthrity.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes permission_name = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.acuthrity.prototype.getPermissionName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes permission_name = 2;
 * This is a type-conversion wrapper around `getPermissionName()`
 * @return {string}
 */
proto.protocol.acuthrity.prototype.getPermissionName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPermissionName()));
};


/**
 * optional bytes permission_name = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPermissionName()`
 * @return {!Uint8Array}
 */
proto.protocol.acuthrity.prototype.getPermissionName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPermissionName()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.acuthrity.prototype.setPermissionName = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.permision = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.permision, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.permision.displayName = 'proto.protocol.permision';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.permision.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.permision.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.permision} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.permision.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.protocol.AccountId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.permision}
 */
proto.protocol.permision.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.permision;
  return proto.protocol.permision.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.permision} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.permision}
 */
proto.protocol.permision.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.AccountId;
      reader.readMessage(value,proto.protocol.AccountId.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.permision.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.permision.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.permision} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.permision.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.AccountId.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountId account = 1;
 * @return {?proto.protocol.AccountId}
 */
proto.protocol.permision.prototype.getAccount = function() {
  return /** @type{?proto.protocol.AccountId} */ (
    jspb.Message.getWrapperField(this, proto.protocol.AccountId, 1));
};


/** @param {?proto.protocol.AccountId|undefined} value */
proto.protocol.permision.prototype.setAccount = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.permision.prototype.clearAccount = function() {
  this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.permision.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Witness = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Witness, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Witness.displayName = 'proto.protocol.Witness';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Witness.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Witness.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Witness} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Witness.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    votecount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pubkey: msg.getPubkey_asB64(),
    url: jspb.Message.getFieldWithDefault(msg, 4, ""),
    totalproduced: jspb.Message.getFieldWithDefault(msg, 5, 0),
    totalmissed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    latestblocknum: jspb.Message.getFieldWithDefault(msg, 7, 0),
    latestslotnum: jspb.Message.getFieldWithDefault(msg, 8, 0),
    isjobs: jspb.Message.getFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Witness}
 */
proto.protocol.Witness.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Witness;
  return proto.protocol.Witness.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Witness} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Witness}
 */
proto.protocol.Witness.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVotecount(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalproduced(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalmissed(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestblocknum(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestslotnum(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsjobs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Witness.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Witness.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Witness} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Witness.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVotecount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTotalproduced();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTotalmissed();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getLatestblocknum();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getLatestslotnum();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getIsjobs();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Witness.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.protocol.Witness.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.Witness.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Witness.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 voteCount = 2;
 * @return {number}
 */
proto.protocol.Witness.prototype.getVotecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.Witness.prototype.setVotecount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes pubKey = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Witness.prototype.getPubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes pubKey = 3;
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {string}
 */
proto.protocol.Witness.prototype.getPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkey()));
};


/**
 * optional bytes pubKey = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {!Uint8Array}
 */
proto.protocol.Witness.prototype.getPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkey()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Witness.prototype.setPubkey = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.protocol.Witness.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.protocol.Witness.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 totalProduced = 5;
 * @return {number}
 */
proto.protocol.Witness.prototype.getTotalproduced = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.protocol.Witness.prototype.setTotalproduced = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 totalMissed = 6;
 * @return {number}
 */
proto.protocol.Witness.prototype.getTotalmissed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.protocol.Witness.prototype.setTotalmissed = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 latestBlockNum = 7;
 * @return {number}
 */
proto.protocol.Witness.prototype.getLatestblocknum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.protocol.Witness.prototype.setLatestblocknum = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 latestSlotNum = 8;
 * @return {number}
 */
proto.protocol.Witness.prototype.getLatestslotnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.protocol.Witness.prototype.setLatestslotnum = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool isJobs = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.protocol.Witness.prototype.getIsjobs = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.protocol.Witness.prototype.setIsjobs = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Votes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Votes.repeatedFields_, null);
};
goog.inherits(proto.protocol.Votes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Votes.displayName = 'proto.protocol.Votes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Votes.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Votes.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Votes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Votes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Votes.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    oldVotesList: jspb.Message.toObjectList(msg.getOldVotesList(),
    proto.protocol.Vote.toObject, includeInstance),
    newVotesList: jspb.Message.toObjectList(msg.getNewVotesList(),
    proto.protocol.Vote.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Votes}
 */
proto.protocol.Votes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Votes;
  return proto.protocol.Votes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Votes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Votes}
 */
proto.protocol.Votes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = new proto.protocol.Vote;
      reader.readMessage(value,proto.protocol.Vote.deserializeBinaryFromReader);
      msg.addOldVotes(value);
      break;
    case 3:
      var value = new proto.protocol.Vote;
      reader.readMessage(value,proto.protocol.Vote.deserializeBinaryFromReader);
      msg.addNewVotes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Votes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Votes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Votes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Votes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOldVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protocol.Vote.serializeBinaryToWriter
    );
  }
  f = message.getNewVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.protocol.Vote.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Votes.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.protocol.Votes.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.Votes.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Votes.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated Vote old_votes = 2;
 * @return {!Array.<!proto.protocol.Vote>}
 */
proto.protocol.Votes.prototype.getOldVotesList = function() {
  return /** @type{!Array.<!proto.protocol.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Vote, 2));
};


/** @param {!Array.<!proto.protocol.Vote>} value */
proto.protocol.Votes.prototype.setOldVotesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocol.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Vote}
 */
proto.protocol.Votes.prototype.addOldVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocol.Vote, opt_index);
};


proto.protocol.Votes.prototype.clearOldVotesList = function() {
  this.setOldVotesList([]);
};


/**
 * repeated Vote new_votes = 3;
 * @return {!Array.<!proto.protocol.Vote>}
 */
proto.protocol.Votes.prototype.getNewVotesList = function() {
  return /** @type{!Array.<!proto.protocol.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Vote, 3));
};


/** @param {!Array.<!proto.protocol.Vote>} value */
proto.protocol.Votes.prototype.setNewVotesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocol.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Vote}
 */
proto.protocol.Votes.prototype.addNewVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocol.Vote, opt_index);
};


proto.protocol.Votes.prototype.clearNewVotesList = function() {
  this.setNewVotesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TXOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.TXOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TXOutput.displayName = 'proto.protocol.TXOutput';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TXOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TXOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TXOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TXOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pubkeyhash: msg.getPubkeyhash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TXOutput}
 */
proto.protocol.TXOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TXOutput;
  return proto.protocol.TXOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TXOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TXOutput}
 */
proto.protocol.TXOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkeyhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TXOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TXOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TXOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TXOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPubkeyhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.protocol.TXOutput.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.TXOutput.prototype.setValue = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes pubKeyHash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TXOutput.prototype.getPubkeyhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes pubKeyHash = 2;
 * This is a type-conversion wrapper around `getPubkeyhash()`
 * @return {string}
 */
proto.protocol.TXOutput.prototype.getPubkeyhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkeyhash()));
};


/**
 * optional bytes pubKeyHash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkeyhash()`
 * @return {!Uint8Array}
 */
proto.protocol.TXOutput.prototype.getPubkeyhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkeyhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TXOutput.prototype.setPubkeyhash = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TXInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.TXInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TXInput.displayName = 'proto.protocol.TXInput';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TXInput.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TXInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TXInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TXInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawData: (f = msg.getRawData()) && proto.protocol.TXInput.raw.toObject(includeInstance, f),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TXInput}
 */
proto.protocol.TXInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TXInput;
  return proto.protocol.TXInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TXInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TXInput}
 */
proto.protocol.TXInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.TXInput.raw;
      reader.readMessage(value,proto.protocol.TXInput.raw.deserializeBinaryFromReader);
      msg.setRawData(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TXInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TXInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TXInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TXInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.TXInput.raw.serializeBinaryToWriter
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TXInput.raw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.TXInput.raw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TXInput.raw.displayName = 'proto.protocol.TXInput.raw';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TXInput.raw.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TXInput.raw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TXInput.raw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TXInput.raw.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: msg.getTxid_asB64(),
    vout: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pubkey: msg.getPubkey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TXInput.raw}
 */
proto.protocol.TXInput.raw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TXInput.raw;
  return proto.protocol.TXInput.raw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TXInput.raw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TXInput.raw}
 */
proto.protocol.TXInput.raw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVout(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TXInput.raw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TXInput.raw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TXInput.raw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TXInput.raw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVout();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes txID = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TXInput.raw.prototype.getTxid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes txID = 1;
 * This is a type-conversion wrapper around `getTxid()`
 * @return {string}
 */
proto.protocol.TXInput.raw.prototype.getTxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxid()));
};


/**
 * optional bytes txID = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxid()`
 * @return {!Uint8Array}
 */
proto.protocol.TXInput.raw.prototype.getTxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxid()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TXInput.raw.prototype.setTxid = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 vout = 2;
 * @return {number}
 */
proto.protocol.TXInput.raw.prototype.getVout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.TXInput.raw.prototype.setVout = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes pubKey = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TXInput.raw.prototype.getPubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes pubKey = 3;
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {string}
 */
proto.protocol.TXInput.raw.prototype.getPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkey()));
};


/**
 * optional bytes pubKey = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {!Uint8Array}
 */
proto.protocol.TXInput.raw.prototype.getPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkey()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TXInput.raw.prototype.setPubkey = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional raw raw_data = 1;
 * @return {?proto.protocol.TXInput.raw}
 */
proto.protocol.TXInput.prototype.getRawData = function() {
  return /** @type{?proto.protocol.TXInput.raw} */ (
    jspb.Message.getWrapperField(this, proto.protocol.TXInput.raw, 1));
};


/** @param {?proto.protocol.TXInput.raw|undefined} value */
proto.protocol.TXInput.prototype.setRawData = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.TXInput.prototype.clearRawData = function() {
  this.setRawData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.TXInput.prototype.hasRawData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes signature = 4;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.TXInput.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes signature = 4;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.protocol.TXInput.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.protocol.TXInput.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.TXInput.prototype.setSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TXOutputs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.TXOutputs.repeatedFields_, null);
};
goog.inherits(proto.protocol.TXOutputs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TXOutputs.displayName = 'proto.protocol.TXOutputs';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.TXOutputs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TXOutputs.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TXOutputs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TXOutputs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TXOutputs.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.protocol.TXOutput.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TXOutputs}
 */
proto.protocol.TXOutputs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TXOutputs;
  return proto.protocol.TXOutputs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TXOutputs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TXOutputs}
 */
proto.protocol.TXOutputs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.TXOutput;
      reader.readMessage(value,proto.protocol.TXOutput.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TXOutputs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TXOutputs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TXOutputs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.TXOutputs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.TXOutput.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TXOutput outputs = 1;
 * @return {!Array.<!proto.protocol.TXOutput>}
 */
proto.protocol.TXOutputs.prototype.getOutputsList = function() {
  return /** @type{!Array.<!proto.protocol.TXOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.TXOutput, 1));
};


/** @param {!Array.<!proto.protocol.TXOutput>} value */
proto.protocol.TXOutputs.prototype.setOutputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.TXOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.TXOutput}
 */
proto.protocol.TXOutputs.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.TXOutput, opt_index);
};


proto.protocol.TXOutputs.prototype.clearOutputsList = function() {
  this.setOutputsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Transaction.repeatedFields_, null);
};
goog.inherits(proto.protocol.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Transaction.displayName = 'proto.protocol.Transaction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Transaction.repeatedFields_ = [2,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawData: (f = msg.getRawData()) && proto.protocol.Transaction.raw.toObject(includeInstance, f),
    signatureList: msg.getSignatureList_asB64(),
    retList: jspb.Message.toObjectList(msg.getRetList(),
    proto.protocol.Transaction.Result.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Transaction}
 */
proto.protocol.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Transaction;
  return proto.protocol.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Transaction}
 */
proto.protocol.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.Transaction.raw;
      reader.readMessage(value,proto.protocol.Transaction.raw.deserializeBinaryFromReader);
      msg.setRawData(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSignature(value);
      break;
    case 5:
      var value = new proto.protocol.Transaction.Result;
      reader.readMessage(value,proto.protocol.Transaction.Result.deserializeBinaryFromReader);
      msg.addRet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.Transaction.raw.serializeBinaryToWriter
    );
  }
  f = message.getSignatureList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
  f = message.getRetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.protocol.Transaction.Result.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Transaction.Contract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Transaction.Contract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Transaction.Contract.displayName = 'proto.protocol.Transaction.Contract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Transaction.Contract.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Transaction.Contract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Transaction.Contract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transaction.Contract.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    parameter: (f = msg.getParameter()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    provider: msg.getProvider_asB64(),
    contractname: msg.getContractname_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Transaction.Contract}
 */
proto.protocol.Transaction.Contract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Transaction.Contract;
  return proto.protocol.Transaction.Contract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Transaction.Contract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Transaction.Contract}
 */
proto.protocol.Transaction.Contract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protocol.Transaction.Contract.ContractType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProvider(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContractname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.Contract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Transaction.Contract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Transaction.Contract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transaction.Contract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getProvider_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getContractname_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protocol.Transaction.Contract.ContractType = {
  ACCOUNTCREATECONTRACT: 0,
  TRANSFERCONTRACT: 1,
  TRANSFERASSETCONTRACT: 2,
  VOTEASSETCONTRACT: 3,
  VOTEWITNESSCONTRACT: 4,
  WITNESSCREATECONTRACT: 5,
  ASSETISSUECONTRACT: 6,
  DEPLOYCONTRACT: 7,
  WITNESSUPDATECONTRACT: 8,
  PARTICIPATEASSETISSUECONTRACT: 9,
  ACCOUNTUPDATECONTRACT: 10,
  FREEZEBALANCECONTRACT: 11,
  UNFREEZEBALANCECONTRACT: 12,
  WITHDRAWBALANCECONTRACT: 13,
  UNFREEZEASSETCONTRACT: 14,
  UPDATEASSETCONTRACT: 15,
  CUSTOMCONTRACT: 20
};

/**
 * optional ContractType type = 1;
 * @return {!proto.protocol.Transaction.Contract.ContractType}
 */
proto.protocol.Transaction.Contract.prototype.getType = function() {
  return /** @type {!proto.protocol.Transaction.Contract.ContractType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.protocol.Transaction.Contract.ContractType} value */
proto.protocol.Transaction.Contract.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Any parameter = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.protocol.Transaction.Contract.prototype.getParameter = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/** @param {?proto.google.protobuf.Any|undefined} value */
proto.protocol.Transaction.Contract.prototype.setParameter = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.protocol.Transaction.Contract.prototype.clearParameter = function() {
  this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.Transaction.Contract.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes provider = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Transaction.Contract.prototype.getProvider = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes provider = 3;
 * This is a type-conversion wrapper around `getProvider()`
 * @return {string}
 */
proto.protocol.Transaction.Contract.prototype.getProvider_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProvider()));
};


/**
 * optional bytes provider = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProvider()`
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.Contract.prototype.getProvider_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProvider()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Transaction.Contract.prototype.setProvider = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes ContractName = 4;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Transaction.Contract.prototype.getContractname = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes ContractName = 4;
 * This is a type-conversion wrapper around `getContractname()`
 * @return {string}
 */
proto.protocol.Transaction.Contract.prototype.getContractname_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContractname()));
};


/**
 * optional bytes ContractName = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContractname()`
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.Contract.prototype.getContractname_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContractname()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Transaction.Contract.prototype.setContractname = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Transaction.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Transaction.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Transaction.Result.displayName = 'proto.protocol.Transaction.Result';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Transaction.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Transaction.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Transaction.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transaction.Result.toObject = function(includeInstance, msg) {
  var f, obj = {
    fee: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ret: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Transaction.Result}
 */
proto.protocol.Transaction.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Transaction.Result;
  return proto.protocol.Transaction.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Transaction.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Transaction.Result}
 */
proto.protocol.Transaction.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
      break;
    case 2:
      var value = /** @type {!proto.protocol.Transaction.Result.code} */ (reader.readEnum());
      msg.setRet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Transaction.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Transaction.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transaction.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFee();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRet();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protocol.Transaction.Result.code = {
  SUCESS: 0,
  FAILED: 1
};

/**
 * optional int64 fee = 1;
 * @return {number}
 */
proto.protocol.Transaction.Result.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.Transaction.Result.prototype.setFee = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional code ret = 2;
 * @return {!proto.protocol.Transaction.Result.code}
 */
proto.protocol.Transaction.Result.prototype.getRet = function() {
  return /** @type {!proto.protocol.Transaction.Result.code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.protocol.Transaction.Result.code} value */
proto.protocol.Transaction.Result.prototype.setRet = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Transaction.raw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Transaction.raw.repeatedFields_, null);
};
goog.inherits(proto.protocol.Transaction.raw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Transaction.raw.displayName = 'proto.protocol.Transaction.raw';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Transaction.raw.repeatedFields_ = [9,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Transaction.raw.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Transaction.raw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Transaction.raw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transaction.raw.toObject = function(includeInstance, msg) {
  var f, obj = {
    refBlockBytes: msg.getRefBlockBytes_asB64(),
    refBlockNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    refBlockHash: msg.getRefBlockHash_asB64(),
    expiration: jspb.Message.getFieldWithDefault(msg, 8, 0),
    authsList: jspb.Message.toObjectList(msg.getAuthsList(),
    proto.protocol.acuthrity.toObject, includeInstance),
    data: msg.getData_asB64(),
    contractList: jspb.Message.toObjectList(msg.getContractList(),
    proto.protocol.Transaction.Contract.toObject, includeInstance),
    scripts: msg.getScripts_asB64(),
    timestamp: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Transaction.raw}
 */
proto.protocol.Transaction.raw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Transaction.raw;
  return proto.protocol.Transaction.raw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Transaction.raw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Transaction.raw}
 */
proto.protocol.Transaction.raw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRefBlockBytes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRefBlockNum(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRefBlockHash(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiration(value);
      break;
    case 9:
      var value = new proto.protocol.acuthrity;
      reader.readMessage(value,proto.protocol.acuthrity.deserializeBinaryFromReader);
      msg.addAuths(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 11:
      var value = new proto.protocol.Transaction.Contract;
      reader.readMessage(value,proto.protocol.Transaction.Contract.deserializeBinaryFromReader);
      msg.addContract(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScripts(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.raw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Transaction.raw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Transaction.raw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transaction.raw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefBlockBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRefBlockNum();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRefBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getExpiration();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getAuthsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.protocol.acuthrity.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
  f = message.getContractList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.protocol.Transaction.Contract.serializeBinaryToWriter
    );
  }
  f = message.getScripts_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      12,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
};


/**
 * optional bytes ref_block_bytes = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Transaction.raw.prototype.getRefBlockBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ref_block_bytes = 1;
 * This is a type-conversion wrapper around `getRefBlockBytes()`
 * @return {string}
 */
proto.protocol.Transaction.raw.prototype.getRefBlockBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRefBlockBytes()));
};


/**
 * optional bytes ref_block_bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRefBlockBytes()`
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.raw.prototype.getRefBlockBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRefBlockBytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Transaction.raw.prototype.setRefBlockBytes = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 ref_block_num = 3;
 * @return {number}
 */
proto.protocol.Transaction.raw.prototype.getRefBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.Transaction.raw.prototype.setRefBlockNum = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes ref_block_hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Transaction.raw.prototype.getRefBlockHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes ref_block_hash = 4;
 * This is a type-conversion wrapper around `getRefBlockHash()`
 * @return {string}
 */
proto.protocol.Transaction.raw.prototype.getRefBlockHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRefBlockHash()));
};


/**
 * optional bytes ref_block_hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRefBlockHash()`
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.raw.prototype.getRefBlockHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRefBlockHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Transaction.raw.prototype.setRefBlockHash = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int64 expiration = 8;
 * @return {number}
 */
proto.protocol.Transaction.raw.prototype.getExpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.protocol.Transaction.raw.prototype.setExpiration = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated acuthrity auths = 9;
 * @return {!Array.<!proto.protocol.acuthrity>}
 */
proto.protocol.Transaction.raw.prototype.getAuthsList = function() {
  return /** @type{!Array.<!proto.protocol.acuthrity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.acuthrity, 9));
};


/** @param {!Array.<!proto.protocol.acuthrity>} value */
proto.protocol.Transaction.raw.prototype.setAuthsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.protocol.acuthrity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.acuthrity}
 */
proto.protocol.Transaction.raw.prototype.addAuths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.protocol.acuthrity, opt_index);
};


proto.protocol.Transaction.raw.prototype.clearAuthsList = function() {
  this.setAuthsList([]);
};


/**
 * optional bytes data = 10;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Transaction.raw.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes data = 10;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.protocol.Transaction.raw.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.raw.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Transaction.raw.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 10, value);
};


/**
 * repeated Contract contract = 11;
 * @return {!Array.<!proto.protocol.Transaction.Contract>}
 */
proto.protocol.Transaction.raw.prototype.getContractList = function() {
  return /** @type{!Array.<!proto.protocol.Transaction.Contract>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Transaction.Contract, 11));
};


/** @param {!Array.<!proto.protocol.Transaction.Contract>} value */
proto.protocol.Transaction.raw.prototype.setContractList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.protocol.Transaction.Contract=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Transaction.Contract}
 */
proto.protocol.Transaction.raw.prototype.addContract = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.protocol.Transaction.Contract, opt_index);
};


proto.protocol.Transaction.raw.prototype.clearContractList = function() {
  this.setContractList([]);
};


/**
 * optional bytes scripts = 12;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Transaction.raw.prototype.getScripts = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes scripts = 12;
 * This is a type-conversion wrapper around `getScripts()`
 * @return {string}
 */
proto.protocol.Transaction.raw.prototype.getScripts_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScripts()));
};


/**
 * optional bytes scripts = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScripts()`
 * @return {!Uint8Array}
 */
proto.protocol.Transaction.raw.prototype.getScripts_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScripts()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.Transaction.raw.prototype.setScripts = function(value) {
  jspb.Message.setProto3BytesField(this, 12, value);
};


/**
 * optional int64 timestamp = 14;
 * @return {number}
 */
proto.protocol.Transaction.raw.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.protocol.Transaction.raw.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional raw raw_data = 1;
 * @return {?proto.protocol.Transaction.raw}
 */
proto.protocol.Transaction.prototype.getRawData = function() {
  return /** @type{?proto.protocol.Transaction.raw} */ (
    jspb.Message.getWrapperField(this, proto.protocol.Transaction.raw, 1));
};


/** @param {?proto.protocol.Transaction.raw|undefined} value */
proto.protocol.Transaction.prototype.setRawData = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.Transaction.prototype.clearRawData = function() {
  this.setRawData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.Transaction.prototype.hasRawData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bytes signature = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.protocol.Transaction.prototype.getSignatureList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes signature = 2;
 * This is a type-conversion wrapper around `getSignatureList()`
 * @return {!Array.<string>}
 */
proto.protocol.Transaction.prototype.getSignatureList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getSignatureList()));
};


/**
 * repeated bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignatureList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.protocol.Transaction.prototype.getSignatureList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSignatureList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.protocol.Transaction.prototype.setSignatureList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.protocol.Transaction.prototype.addSignature = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.protocol.Transaction.prototype.clearSignatureList = function() {
  this.setSignatureList([]);
};


/**
 * repeated Result ret = 5;
 * @return {!Array.<!proto.protocol.Transaction.Result>}
 */
proto.protocol.Transaction.prototype.getRetList = function() {
  return /** @type{!Array.<!proto.protocol.Transaction.Result>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Transaction.Result, 5));
};


/** @param {!Array.<!proto.protocol.Transaction.Result>} value */
proto.protocol.Transaction.prototype.setRetList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protocol.Transaction.Result=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Transaction.Result}
 */
proto.protocol.Transaction.prototype.addRet = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protocol.Transaction.Result, opt_index);
};


proto.protocol.Transaction.prototype.clearRetList = function() {
  this.setRetList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Transactions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Transactions.repeatedFields_, null);
};
goog.inherits(proto.protocol.Transactions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Transactions.displayName = 'proto.protocol.Transactions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Transactions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Transactions.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Transactions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Transactions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transactions.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.protocol.Transaction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Transactions}
 */
proto.protocol.Transactions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Transactions;
  return proto.protocol.Transactions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Transactions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Transactions}
 */
proto.protocol.Transactions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.Transaction;
      reader.readMessage(value,proto.protocol.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Transactions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Transactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Transactions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Transactions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Transaction transactions = 1;
 * @return {!Array.<!proto.protocol.Transaction>}
 */
proto.protocol.Transactions.prototype.getTransactionsList = function() {
  return /** @type{!Array.<!proto.protocol.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Transaction, 1));
};


/** @param {!Array.<!proto.protocol.Transaction>} value */
proto.protocol.Transactions.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Transaction}
 */
proto.protocol.Transactions.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.Transaction, opt_index);
};


proto.protocol.Transactions.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.BlockHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.BlockHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.BlockHeader.displayName = 'proto.protocol.BlockHeader';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.BlockHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.BlockHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.BlockHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawData: (f = msg.getRawData()) && proto.protocol.BlockHeader.raw.toObject(includeInstance, f),
    witnessSignature: msg.getWitnessSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.BlockHeader}
 */
proto.protocol.BlockHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.BlockHeader;
  return proto.protocol.BlockHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.BlockHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.BlockHeader}
 */
proto.protocol.BlockHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.BlockHeader.raw;
      reader.readMessage(value,proto.protocol.BlockHeader.raw.deserializeBinaryFromReader);
      msg.setRawData(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setWitnessSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.BlockHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.BlockHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.BlockHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.BlockHeader.raw.serializeBinaryToWriter
    );
  }
  f = message.getWitnessSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.BlockHeader.raw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.BlockHeader.raw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.BlockHeader.raw.displayName = 'proto.protocol.BlockHeader.raw';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.BlockHeader.raw.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.BlockHeader.raw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.BlockHeader.raw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockHeader.raw.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    txtrieroot: msg.getTxtrieroot_asB64(),
    parenthash: msg.getParenthash_asB64(),
    number: jspb.Message.getFieldWithDefault(msg, 7, 0),
    witnessId: jspb.Message.getFieldWithDefault(msg, 8, 0),
    witnessAddress: msg.getWitnessAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.BlockHeader.raw}
 */
proto.protocol.BlockHeader.raw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.BlockHeader.raw;
  return proto.protocol.BlockHeader.raw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.BlockHeader.raw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.BlockHeader.raw}
 */
proto.protocol.BlockHeader.raw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxtrieroot(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setParenthash(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumber(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWitnessId(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setWitnessAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.BlockHeader.raw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.BlockHeader.raw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.BlockHeader.raw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockHeader.raw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTxtrieroot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getParenthash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getWitnessId();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getWitnessAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.protocol.BlockHeader.raw.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.BlockHeader.raw.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes txTrieRoot = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.BlockHeader.raw.prototype.getTxtrieroot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes txTrieRoot = 2;
 * This is a type-conversion wrapper around `getTxtrieroot()`
 * @return {string}
 */
proto.protocol.BlockHeader.raw.prototype.getTxtrieroot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxtrieroot()));
};


/**
 * optional bytes txTrieRoot = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxtrieroot()`
 * @return {!Uint8Array}
 */
proto.protocol.BlockHeader.raw.prototype.getTxtrieroot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxtrieroot()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.BlockHeader.raw.prototype.setTxtrieroot = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes parentHash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.BlockHeader.raw.prototype.getParenthash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes parentHash = 3;
 * This is a type-conversion wrapper around `getParenthash()`
 * @return {string}
 */
proto.protocol.BlockHeader.raw.prototype.getParenthash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getParenthash()));
};


/**
 * optional bytes parentHash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getParenthash()`
 * @return {!Uint8Array}
 */
proto.protocol.BlockHeader.raw.prototype.getParenthash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getParenthash()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.BlockHeader.raw.prototype.setParenthash = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional int64 number = 7;
 * @return {number}
 */
proto.protocol.BlockHeader.raw.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.protocol.BlockHeader.raw.prototype.setNumber = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 witness_id = 8;
 * @return {number}
 */
proto.protocol.BlockHeader.raw.prototype.getWitnessId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.protocol.BlockHeader.raw.prototype.setWitnessId = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bytes witness_address = 9;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.BlockHeader.raw.prototype.getWitnessAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes witness_address = 9;
 * This is a type-conversion wrapper around `getWitnessAddress()`
 * @return {string}
 */
proto.protocol.BlockHeader.raw.prototype.getWitnessAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getWitnessAddress()));
};


/**
 * optional bytes witness_address = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getWitnessAddress()`
 * @return {!Uint8Array}
 */
proto.protocol.BlockHeader.raw.prototype.getWitnessAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getWitnessAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.BlockHeader.raw.prototype.setWitnessAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional raw raw_data = 1;
 * @return {?proto.protocol.BlockHeader.raw}
 */
proto.protocol.BlockHeader.prototype.getRawData = function() {
  return /** @type{?proto.protocol.BlockHeader.raw} */ (
    jspb.Message.getWrapperField(this, proto.protocol.BlockHeader.raw, 1));
};


/** @param {?proto.protocol.BlockHeader.raw|undefined} value */
proto.protocol.BlockHeader.prototype.setRawData = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.BlockHeader.prototype.clearRawData = function() {
  this.setRawData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.BlockHeader.prototype.hasRawData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes witness_signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.BlockHeader.prototype.getWitnessSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes witness_signature = 2;
 * This is a type-conversion wrapper around `getWitnessSignature()`
 * @return {string}
 */
proto.protocol.BlockHeader.prototype.getWitnessSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getWitnessSignature()));
};


/**
 * optional bytes witness_signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getWitnessSignature()`
 * @return {!Uint8Array}
 */
proto.protocol.BlockHeader.prototype.getWitnessSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getWitnessSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.BlockHeader.prototype.setWitnessSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Block.repeatedFields_, null);
};
goog.inherits(proto.protocol.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Block.displayName = 'proto.protocol.Block';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Block.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.protocol.Transaction.toObject, includeInstance),
    blockHeader: (f = msg.getBlockHeader()) && proto.protocol.BlockHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Block}
 */
proto.protocol.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Block;
  return proto.protocol.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Block}
 */
proto.protocol.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.Transaction;
      reader.readMessage(value,proto.protocol.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 2:
      var value = new proto.protocol.BlockHeader;
      reader.readMessage(value,proto.protocol.BlockHeader.deserializeBinaryFromReader);
      msg.setBlockHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getBlockHeader();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protocol.BlockHeader.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Transaction transactions = 1;
 * @return {!Array.<!proto.protocol.Transaction>}
 */
proto.protocol.Block.prototype.getTransactionsList = function() {
  return /** @type{!Array.<!proto.protocol.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Transaction, 1));
};


/** @param {!Array.<!proto.protocol.Transaction>} value */
proto.protocol.Block.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Transaction}
 */
proto.protocol.Block.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.Transaction, opt_index);
};


proto.protocol.Block.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};


/**
 * optional BlockHeader block_header = 2;
 * @return {?proto.protocol.BlockHeader}
 */
proto.protocol.Block.prototype.getBlockHeader = function() {
  return /** @type{?proto.protocol.BlockHeader} */ (
    jspb.Message.getWrapperField(this, proto.protocol.BlockHeader, 2));
};


/** @param {?proto.protocol.BlockHeader|undefined} value */
proto.protocol.Block.prototype.setBlockHeader = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.protocol.Block.prototype.clearBlockHeader = function() {
  this.setBlockHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.Block.prototype.hasBlockHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.ChainInventory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.ChainInventory.repeatedFields_, null);
};
goog.inherits(proto.protocol.ChainInventory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.ChainInventory.displayName = 'proto.protocol.ChainInventory';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.ChainInventory.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.ChainInventory.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.ChainInventory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.ChainInventory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.ChainInventory.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: jspb.Message.toObjectList(msg.getIdsList(),
    proto.protocol.ChainInventory.BlockId.toObject, includeInstance),
    remainNum: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.ChainInventory}
 */
proto.protocol.ChainInventory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.ChainInventory;
  return proto.protocol.ChainInventory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.ChainInventory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.ChainInventory}
 */
proto.protocol.ChainInventory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.ChainInventory.BlockId;
      reader.readMessage(value,proto.protocol.ChainInventory.BlockId.deserializeBinaryFromReader);
      msg.addIds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRemainNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.ChainInventory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.ChainInventory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.ChainInventory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.ChainInventory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.ChainInventory.BlockId.serializeBinaryToWriter
    );
  }
  f = message.getRemainNum();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.ChainInventory.BlockId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.ChainInventory.BlockId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.ChainInventory.BlockId.displayName = 'proto.protocol.ChainInventory.BlockId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.ChainInventory.BlockId.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.ChainInventory.BlockId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.ChainInventory.BlockId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.ChainInventory.BlockId.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64(),
    number: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.ChainInventory.BlockId}
 */
proto.protocol.ChainInventory.BlockId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.ChainInventory.BlockId;
  return proto.protocol.ChainInventory.BlockId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.ChainInventory.BlockId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.ChainInventory.BlockId}
 */
proto.protocol.ChainInventory.BlockId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.ChainInventory.BlockId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.ChainInventory.BlockId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.ChainInventory.BlockId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.ChainInventory.BlockId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.ChainInventory.BlockId.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.protocol.ChainInventory.BlockId.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.protocol.ChainInventory.BlockId.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.ChainInventory.BlockId.prototype.setHash = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 number = 2;
 * @return {number}
 */
proto.protocol.ChainInventory.BlockId.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.ChainInventory.BlockId.prototype.setNumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated BlockId ids = 1;
 * @return {!Array.<!proto.protocol.ChainInventory.BlockId>}
 */
proto.protocol.ChainInventory.prototype.getIdsList = function() {
  return /** @type{!Array.<!proto.protocol.ChainInventory.BlockId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.ChainInventory.BlockId, 1));
};


/** @param {!Array.<!proto.protocol.ChainInventory.BlockId>} value */
proto.protocol.ChainInventory.prototype.setIdsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.ChainInventory.BlockId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.ChainInventory.BlockId}
 */
proto.protocol.ChainInventory.prototype.addIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.ChainInventory.BlockId, opt_index);
};


proto.protocol.ChainInventory.prototype.clearIdsList = function() {
  this.setIdsList([]);
};


/**
 * optional int64 remain_num = 2;
 * @return {number}
 */
proto.protocol.ChainInventory.prototype.getRemainNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.ChainInventory.prototype.setRemainNum = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.BlockInventory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.BlockInventory.repeatedFields_, null);
};
goog.inherits(proto.protocol.BlockInventory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.BlockInventory.displayName = 'proto.protocol.BlockInventory';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.BlockInventory.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.BlockInventory.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.BlockInventory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.BlockInventory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockInventory.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: jspb.Message.toObjectList(msg.getIdsList(),
    proto.protocol.BlockInventory.BlockId.toObject, includeInstance),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.BlockInventory}
 */
proto.protocol.BlockInventory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.BlockInventory;
  return proto.protocol.BlockInventory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.BlockInventory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.BlockInventory}
 */
proto.protocol.BlockInventory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.BlockInventory.BlockId;
      reader.readMessage(value,proto.protocol.BlockInventory.BlockId.deserializeBinaryFromReader);
      msg.addIds(value);
      break;
    case 2:
      var value = /** @type {!proto.protocol.BlockInventory.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.BlockInventory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.BlockInventory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.BlockInventory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockInventory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.BlockInventory.BlockId.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protocol.BlockInventory.Type = {
  SYNC: 0,
  ADVTISE: 1,
  FETCH: 2
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.BlockInventory.BlockId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.BlockInventory.BlockId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.BlockInventory.BlockId.displayName = 'proto.protocol.BlockInventory.BlockId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.BlockInventory.BlockId.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.BlockInventory.BlockId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.BlockInventory.BlockId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockInventory.BlockId.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64(),
    number: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.BlockInventory.BlockId}
 */
proto.protocol.BlockInventory.BlockId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.BlockInventory.BlockId;
  return proto.protocol.BlockInventory.BlockId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.BlockInventory.BlockId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.BlockInventory.BlockId}
 */
proto.protocol.BlockInventory.BlockId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.BlockInventory.BlockId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.BlockInventory.BlockId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.BlockInventory.BlockId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BlockInventory.BlockId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.BlockInventory.BlockId.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.protocol.BlockInventory.BlockId.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.protocol.BlockInventory.BlockId.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.BlockInventory.BlockId.prototype.setHash = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 number = 2;
 * @return {number}
 */
proto.protocol.BlockInventory.BlockId.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.BlockInventory.BlockId.prototype.setNumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated BlockId ids = 1;
 * @return {!Array.<!proto.protocol.BlockInventory.BlockId>}
 */
proto.protocol.BlockInventory.prototype.getIdsList = function() {
  return /** @type{!Array.<!proto.protocol.BlockInventory.BlockId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.BlockInventory.BlockId, 1));
};


/** @param {!Array.<!proto.protocol.BlockInventory.BlockId>} value */
proto.protocol.BlockInventory.prototype.setIdsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.BlockInventory.BlockId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.BlockInventory.BlockId}
 */
proto.protocol.BlockInventory.prototype.addIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.BlockInventory.BlockId, opt_index);
};


proto.protocol.BlockInventory.prototype.clearIdsList = function() {
  this.setIdsList([]);
};


/**
 * optional Type type = 2;
 * @return {!proto.protocol.BlockInventory.Type}
 */
proto.protocol.BlockInventory.prototype.getType = function() {
  return /** @type {!proto.protocol.BlockInventory.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.protocol.BlockInventory.Type} value */
proto.protocol.BlockInventory.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Inventory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Inventory.repeatedFields_, null);
};
goog.inherits(proto.protocol.Inventory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Inventory.displayName = 'proto.protocol.Inventory';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Inventory.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Inventory.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Inventory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Inventory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Inventory.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    idsList: msg.getIdsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Inventory}
 */
proto.protocol.Inventory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Inventory;
  return proto.protocol.Inventory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Inventory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Inventory}
 */
proto.protocol.Inventory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protocol.Inventory.InventoryType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Inventory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Inventory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Inventory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Inventory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIdsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protocol.Inventory.InventoryType = {
  TRX: 0,
  BLOCK: 1
};

/**
 * optional InventoryType type = 1;
 * @return {!proto.protocol.Inventory.InventoryType}
 */
proto.protocol.Inventory.prototype.getType = function() {
  return /** @type {!proto.protocol.Inventory.InventoryType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.protocol.Inventory.InventoryType} value */
proto.protocol.Inventory.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated bytes ids = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.protocol.Inventory.prototype.getIdsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes ids = 2;
 * This is a type-conversion wrapper around `getIdsList()`
 * @return {!Array.<string>}
 */
proto.protocol.Inventory.prototype.getIdsList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getIdsList()));
};


/**
 * repeated bytes ids = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIdsList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.protocol.Inventory.prototype.getIdsList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getIdsList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.protocol.Inventory.prototype.setIdsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.protocol.Inventory.prototype.addIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.protocol.Inventory.prototype.clearIdsList = function() {
  this.setIdsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Items = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Items.repeatedFields_, null);
};
goog.inherits(proto.protocol.Items, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Items.displayName = 'proto.protocol.Items';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Items.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Items.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Items.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Items} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Items.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.protocol.Block.toObject, includeInstance),
    blockHeadersList: jspb.Message.toObjectList(msg.getBlockHeadersList(),
    proto.protocol.BlockHeader.toObject, includeInstance),
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.protocol.Transaction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Items}
 */
proto.protocol.Items.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Items;
  return proto.protocol.Items.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Items} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Items}
 */
proto.protocol.Items.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protocol.Items.ItemType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.protocol.Block;
      reader.readMessage(value,proto.protocol.Block.deserializeBinaryFromReader);
      msg.addBlocks(value);
      break;
    case 3:
      var value = new proto.protocol.BlockHeader;
      reader.readMessage(value,proto.protocol.BlockHeader.deserializeBinaryFromReader);
      msg.addBlockHeaders(value);
      break;
    case 4:
      var value = new proto.protocol.Transaction;
      reader.readMessage(value,proto.protocol.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Items.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Items.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Items} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Items.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protocol.Block.serializeBinaryToWriter
    );
  }
  f = message.getBlockHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.protocol.BlockHeader.serializeBinaryToWriter
    );
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.protocol.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.protocol.Items.ItemType = {
  ERR: 0,
  TRX: 1,
  BLOCK: 2,
  BLOCKHEADER: 3
};

/**
 * optional ItemType type = 1;
 * @return {!proto.protocol.Items.ItemType}
 */
proto.protocol.Items.prototype.getType = function() {
  return /** @type {!proto.protocol.Items.ItemType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.protocol.Items.ItemType} value */
proto.protocol.Items.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated Block blocks = 2;
 * @return {!Array.<!proto.protocol.Block>}
 */
proto.protocol.Items.prototype.getBlocksList = function() {
  return /** @type{!Array.<!proto.protocol.Block>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Block, 2));
};


/** @param {!Array.<!proto.protocol.Block>} value */
proto.protocol.Items.prototype.setBlocksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocol.Block=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Block}
 */
proto.protocol.Items.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocol.Block, opt_index);
};


proto.protocol.Items.prototype.clearBlocksList = function() {
  this.setBlocksList([]);
};


/**
 * repeated BlockHeader block_headers = 3;
 * @return {!Array.<!proto.protocol.BlockHeader>}
 */
proto.protocol.Items.prototype.getBlockHeadersList = function() {
  return /** @type{!Array.<!proto.protocol.BlockHeader>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.BlockHeader, 3));
};


/** @param {!Array.<!proto.protocol.BlockHeader>} value */
proto.protocol.Items.prototype.setBlockHeadersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocol.BlockHeader=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.BlockHeader}
 */
proto.protocol.Items.prototype.addBlockHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocol.BlockHeader, opt_index);
};


proto.protocol.Items.prototype.clearBlockHeadersList = function() {
  this.setBlockHeadersList([]);
};


/**
 * repeated Transaction transactions = 4;
 * @return {!Array.<!proto.protocol.Transaction>}
 */
proto.protocol.Items.prototype.getTransactionsList = function() {
  return /** @type{!Array.<!proto.protocol.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.Transaction, 4));
};


/** @param {!Array.<!proto.protocol.Transaction>} value */
proto.protocol.Items.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.protocol.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Transaction}
 */
proto.protocol.Items.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.protocol.Transaction, opt_index);
};


proto.protocol.Items.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.DynamicProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.DynamicProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.DynamicProperties.displayName = 'proto.protocol.DynamicProperties';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.DynamicProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.DynamicProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.DynamicProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.DynamicProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastSolidityBlockNum: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.DynamicProperties}
 */
proto.protocol.DynamicProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.DynamicProperties;
  return proto.protocol.DynamicProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.DynamicProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.DynamicProperties}
 */
proto.protocol.DynamicProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastSolidityBlockNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.DynamicProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.DynamicProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.DynamicProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.DynamicProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastSolidityBlockNum();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 last_solidity_block_num = 1;
 * @return {number}
 */
proto.protocol.DynamicProperties.prototype.getLastSolidityBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protocol.DynamicProperties.prototype.setLastSolidityBlockNum = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.DisconnectMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.DisconnectMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.DisconnectMessage.displayName = 'proto.protocol.DisconnectMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.DisconnectMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.DisconnectMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.DisconnectMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.DisconnectMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.DisconnectMessage}
 */
proto.protocol.DisconnectMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.DisconnectMessage;
  return proto.protocol.DisconnectMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.DisconnectMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.DisconnectMessage}
 */
proto.protocol.DisconnectMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protocol.ReasonCode} */ (reader.readEnum());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.DisconnectMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.DisconnectMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.DisconnectMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.DisconnectMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional ReasonCode reason = 1;
 * @return {!proto.protocol.ReasonCode}
 */
proto.protocol.DisconnectMessage.prototype.getReason = function() {
  return /** @type {!proto.protocol.ReasonCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.protocol.ReasonCode} value */
proto.protocol.DisconnectMessage.prototype.setReason = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.HelloMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.HelloMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.HelloMessage.displayName = 'proto.protocol.HelloMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.HelloMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.HelloMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.HelloMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.HelloMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && core_Discover_pb.Endpoint.toObject(includeInstance, f),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    genesisblockid: (f = msg.getGenesisblockid()) && proto.protocol.HelloMessage.BlockId.toObject(includeInstance, f),
    solidblockid: (f = msg.getSolidblockid()) && proto.protocol.HelloMessage.BlockId.toObject(includeInstance, f),
    headblockid: (f = msg.getHeadblockid()) && proto.protocol.HelloMessage.BlockId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.HelloMessage}
 */
proto.protocol.HelloMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.HelloMessage;
  return proto.protocol.HelloMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.HelloMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.HelloMessage}
 */
proto.protocol.HelloMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_Discover_pb.Endpoint;
      reader.readMessage(value,core_Discover_pb.Endpoint.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = new proto.protocol.HelloMessage.BlockId;
      reader.readMessage(value,proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader);
      msg.setGenesisblockid(value);
      break;
    case 5:
      var value = new proto.protocol.HelloMessage.BlockId;
      reader.readMessage(value,proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader);
      msg.setSolidblockid(value);
      break;
    case 6:
      var value = new proto.protocol.HelloMessage.BlockId;
      reader.readMessage(value,proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader);
      msg.setHeadblockid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.HelloMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.HelloMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.HelloMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.HelloMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      core_Discover_pb.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getGenesisblockid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter
    );
  }
  f = message.getSolidblockid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter
    );
  }
  f = message.getHeadblockid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.HelloMessage.BlockId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.HelloMessage.BlockId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.HelloMessage.BlockId.displayName = 'proto.protocol.HelloMessage.BlockId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.HelloMessage.BlockId.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.HelloMessage.BlockId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.HelloMessage.BlockId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.HelloMessage.BlockId.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64(),
    number: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.HelloMessage.BlockId}
 */
proto.protocol.HelloMessage.BlockId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.HelloMessage.BlockId;
  return proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.HelloMessage.BlockId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.HelloMessage.BlockId}
 */
proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.HelloMessage.BlockId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.HelloMessage.BlockId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.HelloMessage.BlockId.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.protocol.HelloMessage.BlockId.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.protocol.HelloMessage.BlockId.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.protocol.HelloMessage.BlockId.prototype.setHash = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 number = 2;
 * @return {number}
 */
proto.protocol.HelloMessage.BlockId.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.HelloMessage.BlockId.prototype.setNumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Endpoint from = 1;
 * @return {?proto.protocol.Endpoint}
 */
proto.protocol.HelloMessage.prototype.getFrom = function() {
  return /** @type{?proto.protocol.Endpoint} */ (
    jspb.Message.getWrapperField(this, core_Discover_pb.Endpoint, 1));
};


/** @param {?proto.protocol.Endpoint|undefined} value */
proto.protocol.HelloMessage.prototype.setFrom = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protocol.HelloMessage.prototype.clearFrom = function() {
  this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.HelloMessage.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 version = 2;
 * @return {number}
 */
proto.protocol.HelloMessage.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.protocol.HelloMessage.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.protocol.HelloMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.protocol.HelloMessage.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional BlockId genesisBlockId = 4;
 * @return {?proto.protocol.HelloMessage.BlockId}
 */
proto.protocol.HelloMessage.prototype.getGenesisblockid = function() {
  return /** @type{?proto.protocol.HelloMessage.BlockId} */ (
    jspb.Message.getWrapperField(this, proto.protocol.HelloMessage.BlockId, 4));
};


/** @param {?proto.protocol.HelloMessage.BlockId|undefined} value */
proto.protocol.HelloMessage.prototype.setGenesisblockid = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.protocol.HelloMessage.prototype.clearGenesisblockid = function() {
  this.setGenesisblockid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.HelloMessage.prototype.hasGenesisblockid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BlockId solidBlockId = 5;
 * @return {?proto.protocol.HelloMessage.BlockId}
 */
proto.protocol.HelloMessage.prototype.getSolidblockid = function() {
  return /** @type{?proto.protocol.HelloMessage.BlockId} */ (
    jspb.Message.getWrapperField(this, proto.protocol.HelloMessage.BlockId, 5));
};


/** @param {?proto.protocol.HelloMessage.BlockId|undefined} value */
proto.protocol.HelloMessage.prototype.setSolidblockid = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.protocol.HelloMessage.prototype.clearSolidblockid = function() {
  this.setSolidblockid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.HelloMessage.prototype.hasSolidblockid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional BlockId headBlockId = 6;
 * @return {?proto.protocol.HelloMessage.BlockId}
 */
proto.protocol.HelloMessage.prototype.getHeadblockid = function() {
  return /** @type{?proto.protocol.HelloMessage.BlockId} */ (
    jspb.Message.getWrapperField(this, proto.protocol.HelloMessage.BlockId, 6));
};


/** @param {?proto.protocol.HelloMessage.BlockId|undefined} value */
proto.protocol.HelloMessage.prototype.setHeadblockid = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.protocol.HelloMessage.prototype.clearHeadblockid = function() {
  this.setHeadblockid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.HelloMessage.prototype.hasHeadblockid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * @enum {number}
 */
proto.protocol.AccountType = {
  NORMAL: 0,
  ASSETISSUE: 1,
  CONTRACT: 2
};

/**
 * @enum {number}
 */
proto.protocol.ReasonCode = {
  REQUESTED: 0,
  BAD_PROTOCOL: 2,
  TOO_MANY_PEERS: 4,
  DUPLICATE_PEER: 5,
  INCOMPATIBLE_PROTOCOL: 6,
  NULL_IDENTITY: 7,
  PEER_QUITING: 8,
  UNEXPECTED_IDENTITY: 9,
  LOCAL_IDENTITY: 10,
  PING_TIMEOUT: 11,
  USER_REASON: 16,
  RESET: 17,
  SYNC_FAIL: 18,
  FETCH_FAIL: 19,
  BAD_TX: 20,
  BAD_BLOCK: 21,
  FORKED: 22,
  UNLINKABLE: 23,
  INCOMPATIBLE_VERSION: 24,
  INCOMPATIBLE_CHAIN: 25,
  TIME_OUT: 32,
  CONNECT_FAIL: 33,
  UNKNOWN: 255
};

goog.object.extend(exports, proto.protocol);

},{"../core/Discover_pb.js":8,"google-protobuf":2,"google-protobuf/google/protobuf/any_pb.js":3}],11:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_http_pb = require('../../google/api/http_pb.js');
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.exportSymbol('proto.google.api.http', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `http`.
 * @type {!jspb.ExtensionFieldInfo.<!proto.google.api.HttpRule>}
 */
proto.google.api.http = new jspb.ExtensionFieldInfo(
    72295728,
    {http: 0},
    google_api_http_pb.HttpRule,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         google_api_http_pb.HttpRule.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[72295728] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.http,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    google_api_http_pb.HttpRule.serializeBinaryToWriter,
    google_api_http_pb.HttpRule.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[72295728] = proto.google.api.http;

goog.object.extend(exports, proto.google.api);

},{"../../google/api/http_pb.js":12,"google-protobuf":2,"google-protobuf/google/protobuf/descriptor_pb.js":4}],12:[function(require,module,exports){
/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.api.CustomHttpPattern', null, global);
goog.exportSymbol('proto.google.api.Http', null, global);
goog.exportSymbol('proto.google.api.HttpRule', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Http = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Http.repeatedFields_, null);
};
goog.inherits(proto.google.api.Http, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.Http.displayName = 'proto.google.api.Http';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Http.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Http.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Http.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Http} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.api.Http.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.google.api.HttpRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Http}
 */
proto.google.api.Http.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Http;
  return proto.google.api.Http.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Http} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Http}
 */
proto.google.api.Http.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.api.HttpRule;
      reader.readMessage(value,proto.google.api.HttpRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Http.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Http.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Http} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.Http.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.api.HttpRule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated HttpRule rules = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.api.HttpRule>}
 */
proto.google.api.Http.prototype.getRulesList = function() {
  return /** @type{!Array.<!proto.google.api.HttpRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.HttpRule, 1));
};


/** @param {!Array.<!proto.google.api.HttpRule>} value */
proto.google.api.Http.prototype.setRulesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.api.HttpRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.HttpRule}
 */
proto.google.api.Http.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.api.HttpRule, opt_index);
};


proto.google.api.Http.prototype.clearRulesList = function() {
  this.setRulesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.HttpRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.HttpRule.repeatedFields_, proto.google.api.HttpRule.oneofGroups_);
};
goog.inherits(proto.google.api.HttpRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.HttpRule.displayName = 'proto.google.api.HttpRule';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.HttpRule.repeatedFields_ = [11];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.api.HttpRule.oneofGroups_ = [[2,3,4,5,6,8]];

/**
 * @enum {number}
 */
proto.google.api.HttpRule.PatternCase = {
  PATTERN_NOT_SET: 0,
  GET: 2,
  PUT: 3,
  POST: 4,
  DELETE: 5,
  PATCH: 6,
  CUSTOM: 8
};

/**
 * @return {proto.google.api.HttpRule.PatternCase}
 */
proto.google.api.HttpRule.prototype.getPatternCase = function() {
  return /** @type {proto.google.api.HttpRule.PatternCase} */(jspb.Message.computeOneofCase(this, proto.google.api.HttpRule.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.HttpRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.HttpRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.HttpRule} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.api.HttpRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    get: jspb.Message.getFieldWithDefault(msg, 2, ""),
    put: jspb.Message.getFieldWithDefault(msg, 3, ""),
    post: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pb_delete: jspb.Message.getFieldWithDefault(msg, 5, ""),
    patch: jspb.Message.getFieldWithDefault(msg, 6, ""),
    custom: (f = msg.getCustom()) && proto.google.api.CustomHttpPattern.toObject(includeInstance, f),
    body: jspb.Message.getFieldWithDefault(msg, 7, ""),
    additionalBindingsList: jspb.Message.toObjectList(msg.getAdditionalBindingsList(),
    proto.google.api.HttpRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.HttpRule}
 */
proto.google.api.HttpRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.HttpRule;
  return proto.google.api.HttpRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.HttpRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.HttpRule}
 */
proto.google.api.HttpRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGet(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPut(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPost(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelete(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPatch(value);
      break;
    case 8:
      var value = new proto.google.api.CustomHttpPattern;
      reader.readMessage(value,proto.google.api.CustomHttpPattern.deserializeBinaryFromReader);
      msg.setCustom(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 11:
      var value = new proto.google.api.HttpRule;
      reader.readMessage(value,proto.google.api.HttpRule.deserializeBinaryFromReader);
      msg.addAdditionalBindings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.HttpRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.HttpRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.HttpRule} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.HttpRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.api.CustomHttpPattern.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAdditionalBindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.google.api.HttpRule.serializeBinaryToWriter
    );
  }
};


/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.HttpRule.prototype.setSelector = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string get = 2;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getGet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.api.HttpRule.prototype.setGet = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.api.HttpRule.oneofGroups_[0], value);
};


proto.google.api.HttpRule.prototype.clearGet = function() {
  jspb.Message.setOneofField(this, 2, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasGet = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string put = 3;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getPut = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.api.HttpRule.prototype.setPut = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.api.HttpRule.oneofGroups_[0], value);
};


proto.google.api.HttpRule.prototype.clearPut = function() {
  jspb.Message.setOneofField(this, 3, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasPut = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string post = 4;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getPost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.api.HttpRule.prototype.setPost = function(value) {
  jspb.Message.setOneofField(this, 4, proto.google.api.HttpRule.oneofGroups_[0], value);
};


proto.google.api.HttpRule.prototype.clearPost = function() {
  jspb.Message.setOneofField(this, 4, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasPost = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string delete = 5;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getDelete = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.api.HttpRule.prototype.setDelete = function(value) {
  jspb.Message.setOneofField(this, 5, proto.google.api.HttpRule.oneofGroups_[0], value);
};


proto.google.api.HttpRule.prototype.clearDelete = function() {
  jspb.Message.setOneofField(this, 5, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasDelete = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string patch = 6;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getPatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.api.HttpRule.prototype.setPatch = function(value) {
  jspb.Message.setOneofField(this, 6, proto.google.api.HttpRule.oneofGroups_[0], value);
};


proto.google.api.HttpRule.prototype.clearPatch = function() {
  jspb.Message.setOneofField(this, 6, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasPatch = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CustomHttpPattern custom = 8;
 * @return {?proto.google.api.CustomHttpPattern}
 */
proto.google.api.HttpRule.prototype.getCustom = function() {
  return /** @type{?proto.google.api.CustomHttpPattern} */ (
    jspb.Message.getWrapperField(this, proto.google.api.CustomHttpPattern, 8));
};


/** @param {?proto.google.api.CustomHttpPattern|undefined} value */
proto.google.api.HttpRule.prototype.setCustom = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.google.api.HttpRule.oneofGroups_[0], value);
};


proto.google.api.HttpRule.prototype.clearCustom = function() {
  this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasCustom = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string body = 7;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.google.api.HttpRule.prototype.setBody = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * repeated HttpRule additional_bindings = 11;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.api.HttpRule>}
 */
proto.google.api.HttpRule.prototype.getAdditionalBindingsList = function() {
  return /** @type{!Array.<!proto.google.api.HttpRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.HttpRule, 11));
};


/** @param {!Array.<!proto.google.api.HttpRule>} value */
proto.google.api.HttpRule.prototype.setAdditionalBindingsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.api.HttpRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.HttpRule}
 */
proto.google.api.HttpRule.prototype.addAdditionalBindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.api.HttpRule, opt_index);
};


proto.google.api.HttpRule.prototype.clearAdditionalBindingsList = function() {
  this.setAdditionalBindingsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.CustomHttpPattern = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.CustomHttpPattern, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.CustomHttpPattern.displayName = 'proto.google.api.CustomHttpPattern';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.CustomHttpPattern.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.CustomHttpPattern.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.CustomHttpPattern} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.api.CustomHttpPattern.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.CustomHttpPattern}
 */
proto.google.api.CustomHttpPattern.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.CustomHttpPattern;
  return proto.google.api.CustomHttpPattern.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.CustomHttpPattern} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.CustomHttpPattern}
 */
proto.google.api.CustomHttpPattern.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.CustomHttpPattern.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.CustomHttpPattern.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.CustomHttpPattern} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.CustomHttpPattern.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.google.api.CustomHttpPattern.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.CustomHttpPattern.prototype.setKind = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.google.api.CustomHttpPattern.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.api.CustomHttpPattern.prototype.setPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


goog.object.extend(exports, proto.google.api);

},{"google-protobuf":2}]},{},[1]);
