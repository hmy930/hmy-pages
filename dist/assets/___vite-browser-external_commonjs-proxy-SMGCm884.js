import{aA as Q}from"./commonMain-18EjtHMn.js";var q={exports:{}},X="Function.prototype.bind called on incompatible ",Z=Object.prototype.toString,rr=Math.max,er="[object Function]",N=function(e,r){for(var t=[],o=0;o<e.length;o+=1)t[o]=e[o];for(var i=0;i<r.length;i+=1)t[i+e.length]=r[i];return t},tr=function(e,r){for(var t=[],o=r||0,i=0;o<e.length;o+=1,i+=1)t[i]=e[o];return t},or=function(a,e){for(var r="",t=0;t<a.length;t+=1)r+=a[t],t+1<a.length&&(r+=e);return r},nr=function(e){var r=this;if(typeof r!="function"||Z.apply(r)!==er)throw new TypeError(X+r);for(var t=tr(arguments,1),o,i=function(){if(this instanceof o){var u=r.apply(this,N(t,arguments));return Object(u)===u?u:this}return r.apply(e,N(t,arguments))},y=rr(0,r.length-t.length),p=[],l=0;l<y;l++)p[l]="$"+l;if(o=Function("binder","return function ("+or(p,",")+"){ return binder.apply(this,arguments); }")(i),r.prototype){var c=function(){};c.prototype=r.prototype,o.prototype=new c,c.prototype=null}return o},ar=nr,T=Function.prototype.bind||ar,ir=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},r=Symbol("test"),t=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(t)!=="[object Symbol]")return!1;var o=42;e[r]=o;for(r in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var i=Object.getOwnPropertySymbols(e);if(i.length!==1||i[0]!==r||!Object.prototype.propertyIsEnumerable.call(e,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var y=Object.getOwnPropertyDescriptor(e,r);if(y.value!==o||y.enumerable!==!0)return!1}return!0},G=typeof Symbol<"u"&&Symbol,yr=ir,pr=function(){return typeof G!="function"||typeof Symbol!="function"||typeof G("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:yr()},M={foo:{}},lr=Object,fr=function(){return{__proto__:M}.foo===M.foo&&!({__proto__:null}instanceof lr)},ur=Function.prototype.call,sr=Object.prototype.hasOwnProperty,cr=T,vr=cr.call(ur,sr),n,S=SyntaxError,z=Function,P=TypeError,U=function(a){try{return z('"use strict"; return ('+a+").constructor;")()}catch{}},g=Object.getOwnPropertyDescriptor;if(g)try{g({},"")}catch{g=null}var j=function(){throw new P},gr=g?function(){try{return arguments.callee,j}catch{try{return g(arguments,"callee").get}catch{return j}}}():j,m=pr(),dr=fr(),f=Object.getPrototypeOf||(dr?function(a){return a.__proto__}:null),A={},br=typeof Uint8Array>"u"||!f?n:f(Uint8Array),d={"%AggregateError%":typeof AggregateError>"u"?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?n:ArrayBuffer,"%ArrayIteratorPrototype%":m&&f?f([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":A,"%AsyncGenerator%":A,"%AsyncGeneratorFunction%":A,"%AsyncIteratorPrototype%":A,"%Atomics%":typeof Atomics>"u"?n:Atomics,"%BigInt%":typeof BigInt>"u"?n:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?n:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?n:Float32Array,"%Float64Array%":typeof Float64Array>"u"?n:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?n:FinalizationRegistry,"%Function%":z,"%GeneratorFunction%":A,"%Int8Array%":typeof Int8Array>"u"?n:Int8Array,"%Int16Array%":typeof Int16Array>"u"?n:Int16Array,"%Int32Array%":typeof Int32Array>"u"?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":m&&f?f(f([][Symbol.iterator]())):n,"%JSON%":typeof JSON=="object"?JSON:n,"%Map%":typeof Map>"u"?n:Map,"%MapIteratorPrototype%":typeof Map>"u"||!m||!f?n:f(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?n:Promise,"%Proxy%":typeof Proxy>"u"?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?n:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?n:Set,"%SetIteratorPrototype%":typeof Set>"u"||!m||!f?n:f(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":m&&f?f(""[Symbol.iterator]()):n,"%Symbol%":m?Symbol:n,"%SyntaxError%":S,"%ThrowTypeError%":gr,"%TypedArray%":br,"%TypeError%":P,"%Uint8Array%":typeof Uint8Array>"u"?n:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?n:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?n:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?n:WeakMap,"%WeakRef%":typeof WeakRef>"u"?n:WeakRef,"%WeakSet%":typeof WeakSet>"u"?n:WeakSet};if(f)try{null.error}catch(a){var mr=f(f(a));d["%Error.prototype%"]=mr}var hr=function a(e){var r;if(e==="%AsyncFunction%")r=U("async function () {}");else if(e==="%GeneratorFunction%")r=U("function* () {}");else if(e==="%AsyncGeneratorFunction%")r=U("async function* () {}");else if(e==="%AsyncGenerator%"){var t=a("%AsyncGeneratorFunction%");t&&(r=t.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=a("%AsyncGenerator%");o&&f&&(r=f(o.prototype))}return d[e]=r,r},k={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},w=T,R=vr,Ar=w.call(Function.call,Array.prototype.concat),Pr=w.call(Function.apply,Array.prototype.splice),C=w.call(Function.call,String.prototype.replace),x=w.call(Function.call,String.prototype.slice),Sr=w.call(Function.call,RegExp.prototype.exec),Er=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,wr=/\\(\\)?/g,Fr=function(e){var r=x(e,0,1),t=x(e,-1);if(r==="%"&&t!=="%")throw new S("invalid intrinsic syntax, expected closing `%`");if(t==="%"&&r!=="%")throw new S("invalid intrinsic syntax, expected opening `%`");var o=[];return C(e,Er,function(i,y,p,l){o[o.length]=p?C(l,wr,"$1"):y||i}),o},Ir=function(e,r){var t=e,o;if(R(k,t)&&(o=k[t],t="%"+o[0]+"%"),R(d,t)){var i=d[t];if(i===A&&(i=hr(t)),typeof i>"u"&&!r)throw new P("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:t,value:i}}throw new S("intrinsic "+e+" does not exist!")},F=function(e,r){if(typeof e!="string"||e.length===0)throw new P("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof r!="boolean")throw new P('"allowMissing" argument must be a boolean');if(Sr(/^%?[^%]*%?$/,e)===null)throw new S("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var t=Fr(e),o=t.length>0?t[0]:"",i=Ir("%"+o+"%",r),y=i.name,p=i.value,l=!1,c=i.alias;c&&(o=c[0],Pr(t,Ar([0,1],c)));for(var u=1,v=!0;u<t.length;u+=1){var s=t[u],b=x(s,0,1),I=x(s,-1);if((b==='"'||b==="'"||b==="`"||I==='"'||I==="'"||I==="`")&&b!==I)throw new S("property names with quotes must have matching quotes");if((s==="constructor"||!v)&&(l=!0),o+="."+s,y="%"+o+"%",R(d,y))p=d[y];else if(p!=null){if(!(s in p)){if(!r)throw new P("base intrinsic for "+e+" exists, but the property is not available.");return}if(g&&u+1>=t.length){var O=g(p,s);v=!!O,v&&"get"in O&&!("originalValue"in O.get)?p=O.get:p=p[s]}else v=R(p,s),p=p[s];v&&!l&&(d[y]=p)}}return p},Or=F,B=Or("%Object.defineProperty%",!0),_=function(){if(B)try{return B({},"a",{value:1}),!0}catch{return!1}return!1};_.hasArrayLengthDefineBug=function(){if(!_())return null;try{return B([],"length",{value:1}).length!==1}catch{return!0}};var Y=_,$r=F,$=$r("%Object.getOwnPropertyDescriptor%",!0);if($)try{$([],"length")}catch{$=null}var H=$,Rr=Y(),D=F,E=Rr&&D("%Object.defineProperty%",!0);if(E)try{E({},"a",{value:1})}catch{E=!1}var xr=D("%SyntaxError%"),h=D("%TypeError%"),W=H,Ur=function(e,r,t){if(!e||typeof e!="object"&&typeof e!="function")throw new h("`obj` must be an object or a function`");if(typeof r!="string"&&typeof r!="symbol")throw new h("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new h("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new h("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new h("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new h("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,i=arguments.length>4?arguments[4]:null,y=arguments.length>5?arguments[5]:null,p=arguments.length>6?arguments[6]:!1,l=!!W&&W(e,r);if(E)E(e,r,{configurable:y===null&&l?l.configurable:!y,enumerable:o===null&&l?l.enumerable:!o,value:t,writable:i===null&&l?l.writable:!i});else if(p||!o&&!i&&!y)e[r]=t;else throw new xr("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},K=F,L=Ur,jr=Y(),J=H,V=K("%TypeError%"),Br=K("%Math.floor%"),_r=function(e,r){if(typeof e!="function")throw new V("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||Br(r)!==r)throw new V("`length` must be a positive 32-bit integer");var t=arguments.length>2&&!!arguments[2],o=!0,i=!0;if("length"in e&&J){var y=J(e,"length");y&&!y.configurable&&(o=!1),y&&!y.writable&&(i=!1)}return(o||i||!t)&&(jr?L(e,"length",r,!0,!0):L(e,"length",r)),e};(function(a){var e=T,r=F,t=_r,o=r("%TypeError%"),i=r("%Function.prototype.apply%"),y=r("%Function.prototype.call%"),p=r("%Reflect.apply%",!0)||e.call(y,i),l=r("%Object.defineProperty%",!0),c=r("%Math.max%");if(l)try{l({},"a",{value:1})}catch{l=null}a.exports=function(s){if(typeof s!="function")throw new o("a function is required");var b=p(e,y,arguments);return t(b,1+c(0,s.length-(arguments.length-1)),!0)};var u=function(){return p(e,i,arguments)};l?l(a.exports,"apply",{value:u}):a.exports.apply=u})(q);var Gr=q.exports;const Tr={},Dr=Object.freeze(Object.defineProperty({__proto__:null,default:Tr},Symbol.toStringTag,{value:"Module"})),Mr=Q(Dr);export{Gr as c,Ur as d,F as g,Y as h,Mr as r};
