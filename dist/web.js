!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.tracing=n():t.tracing=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=10)}([function(t,n,e){"use strict";var r,o,i,u=e(3),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function a(){i=!1}function s(t){if(t){if(t!==r){if(t.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+t.length+" characters: "+t);var n=t.split("").filter(function(t,n,e){return n!==e.lastIndexOf(t)});if(n.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+n.join(", "));r=t,a()}}else r!==c&&(r=c,a())}function p(){return i||(i=function(){r||s(c);for(var t,n=r.split(""),e=[],o=u.nextValue();n.length>0;)o=u.nextValue(),t=Math.floor(o*n.length),e.push(n.splice(t,1)[0]);return e.join("")}())}t.exports={get:function(){return r||c},characters:function(t){return s(t),r},seed:function(t){u.seed(t),o!==t&&(a(),o=t)},lookup:function(t){return p()[t]},shuffled:p}},function(t,n,e){"use strict";t.exports=e(2)},function(t,n,e){"use strict";var r=e(0),o=e(4),i=e(8),u=e(9)||0;function c(){return o(u)}t.exports=c,t.exports.generate=c,t.exports.seed=function(n){return r.seed(n),t.exports},t.exports.worker=function(n){return u=n,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=i},function(t,n,e){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},function(t,n,e){"use strict";var r,o,i=e(5),u=(e(0),1459707606518),c=6;t.exports=function(t){var n="",e=Math.floor(.001*(Date.now()-u));return e===o?r++:(r=0,o=e),n+=i(c),n+=i(t),r>0&&(n+=i(r)),n+=i(e)}},function(t,n,e){"use strict";var r=e(0),o=e(6),i=e(7);t.exports=function(t){for(var n,e=0,u="";!n;)u+=i(o,r.get(),1),n=t<Math.pow(16,e+1),e++;return u}},function(t,n,e){"use strict";var r,o="object"==typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var n=[],e=0;e<t;e++)n.push(Math.floor(256*Math.random()));return n},t.exports=r},function(t,n){t.exports=function(t,n,e){var r=(2<<Math.log(n.length-1)/Math.LN2)-1,o=Math.ceil(1.6*r*e/n.length);e=+e;for(var i="";;)for(var u=t(o),c=0;c<o;c++){var a=u[c]&r;if(n[a]&&(i+=n[a]).length===e)return i}}},function(t,n,e){"use strict";var r=e(0);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,n,e){"use strict";t.exports=0},function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"SPAN_KIND",function(){return u}),e.d(r,"SPAN_KIND_RPC_CLIENT",function(){return c}),e.d(r,"SPAN_KIND_RPC_SERVER",function(){return a}),e.d(r,"SPAN_KIND_MESSAGING_PRODUCER",function(){return s}),e.d(r,"SPAN_KIND_MESSAGING_CONSUMER",function(){return p}),e.d(r,"ERROR",function(){return f}),e.d(r,"COMPONENT",function(){return l}),e.d(r,"SAMPLING_PRIORITY",function(){return h}),e.d(r,"PEER_SERVICE",function(){return _}),e.d(r,"PEER_HOSTNAME",function(){return d}),e.d(r,"PEER_ADDRESS",function(){return y}),e.d(r,"PEER_HOST_IPV4",function(){return g}),e.d(r,"PEER_HOST_IPV6",function(){return v}),e.d(r,"PEER_PORT",function(){return O}),e.d(r,"HTTP_URL",function(){return E}),e.d(r,"HTTP_METHOD",function(){return m}),e.d(r,"HTTP_STATUS_CODE",function(){return T}),e.d(r,"MESSAGE_BUS_DESTINATION",function(){return S}),e.d(r,"DB_INSTANCE",function(){return b}),e.d(r,"DB_STATEMENT",function(){return N}),e.d(r,"DB_TYPE",function(){return w}),e.d(r,"DB_USER",function(){return R});var o,i=function(){return function(t){this.buffer=t}}(),u="span.kind",c="client",a="server",s="producer",p="consumer",f="error",l="component",h="sampling.priority",_="peer.service",d="peer.hostname",y="peer.address",g="peer.ipv4",v="peer.ipv6",O="peer.port",E="http.url",m="http.method",T="http.status_code",S="message_bus.destination",b="db.instance",N="db.statement",w="db.type",R="db.user";!function(t){t.ERROR="error",t.WARN="warn",t.INFO="info",t.VERBOSE="verbose",t.DEBUG="debug",t.SILLY="silly"}(o||(o={}));var x=function(){function t(t){this._span=t}return t.prototype.error=function(t,n){this._span.log({level:o.ERROR,message:t,payload:n,event:"error"})},t.prototype.warn=function(t,n){this._span.log({level:o.WARN,message:t,payload:n})},t.prototype.info=function(t,n){this._span.log({level:o.INFO,message:t,payload:n})},t.prototype.debug=function(t,n){this._span.log({level:o.DEBUG,message:t,payload:n})},t.prototype.silly=function(t,n){this._span.log({level:o.SILLY,message:t,payload:n})},t}(),P=function(){function t(){this.logger=new x(this)}return t.prototype.context=function(){return this._context()},t.prototype.tracer=function(){return this._tracer()},t.prototype.setOperationName=function(t){return this._setOperationName(t),this},t.prototype.setBaggageItem=function(t,n){return this._setBaggageItem(t,n),this},t.prototype.getBaggageItem=function(t){return this._getBaggageItem(t)},t.prototype.setTag=function(t,n){var e;return this._addTags(((e={})[t]=n,e)),this},t.prototype.addTags=function(t){return this._addTags(t),this},t.prototype.log=function(t,n){return this._log(t,n),this},t.prototype.logEvent=function(t,n){return this._log({event:t,payload:n})},t.prototype.finish=function(t){this._finish(t)},t.prototype._context=function(){return V},t.prototype._tracer=function(){return B},t.prototype._setOperationName=function(t){},t.prototype._setBaggageItem=function(t,n){},t.prototype._getBaggageItem=function(t){},t.prototype._addTags=function(t){},t.prototype._log=function(t,n){},t.prototype._finish=function(t){},t}(),I=function(){function t(){}return t.prototype.toTraceId=function(){return""},t.prototype.toSpanId=function(){return""},t}(),j="child_of",M="follows_from",C=function(){function t(t,n){this._type=t,this._referencedContext=n instanceof P?n.context():n}return t.prototype.type=function(){return this._type},t.prototype.referencedContext=function(){return this._referencedContext},t}();function A(t){return t instanceof P&&(t=t.context()),new C(j,t)}function L(t){return t instanceof P&&(t=t.context()),new C(M,t)}var D=function(){function t(){}return t.prototype.startSpan=function(t,n){if(void 0===n&&(n={}),n.childOf){var e=A(n.childOf);n.references?n.references.push(e):n.references=[e],delete n.childOf}return this._startSpan(t,n)},t.prototype.inject=function(t,n,e){return t instanceof P&&(t=t.context()),this._inject(t,n,e)},t.prototype.extract=function(t,n){return this._extract(t,n)},t.prototype._startSpan=function(t,n){return U},t.prototype._inject=function(t,n,e){},t.prototype._extract=function(t,n){return V},t}(),F=D,B=null,V=null,U=null;var G,H=(G=function(t,n){return(G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}G(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),Y=new F,k=null,K=new(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return H(n,t),n.prototype.startSpan=function(){var t=k||Y;return t.startSpan.apply(t,arguments)},n.prototype.inject=function(){var t=k||Y;return t.inject.apply(t,arguments)},n.prototype.extract=function(){var t=k||Y;return t.extract.apply(t,arguments)},n}(F));function W(t){k=t}function q(){return K}B=new F,U=new P,V=new I;var X=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),$=function(){return($=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},z=function(t){function n(n,e){var r=t.call(this)||this;return r._references=[],r._tags={},r._logs=[],r.__tracer=n,r.__context=e,r}return X(n,t),n.prototype.tracer=function(){return t.prototype.tracer.call(this)},n.prototype.start=function(t){this._startTime=t||Date.now()},n.prototype.addReference=function(t){this._references.push(t)},n.prototype.getTag=function(t){return this._tags[t]},n.prototype._context=function(){return this.__context},n.prototype._tracer=function(){return this.__tracer},n.prototype._setOperationName=function(t){this._operationName=t},n.prototype._addTags=function(t){this._tags=$({},this._tags,t)},n.prototype._log=function(t,n){var e=this,r={fields:t,timestamp:n||Date.now()};this._logs.push(r),this.__tracer.reporters.forEach(function(t){t.accepts.spanLog&&t.recieveSpanLog(e,r)})},n.prototype._finish=function(t){var n=this;this._finishTime=t||Date.now(),this.__tracer.reporters.forEach(function(t){t.accepts.spanFinish&&t.recieveSpanFinish(n)})},n}(P),J=z,Q=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Z=function(t){function n(n,e){var r=t.call(this)||this;return r._traceId=n,r._spanId=e,r}return Q(n,t),n.prototype.toTraceId=function(){return this._traceId},n.prototype.toSpanId=function(){return this._spanId},n}(I),tt=e(1),nt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),et=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n._reporters=[],n}return nt(n,t),Object.defineProperty(n.prototype,"reporters",{get:function(){return this._reporters},enumerable:!0,configurable:!0}),n.prototype.addReporter=function(t){this._reporters.push(t)},n.prototype.removeReporter=function(t){var n=this._reporters.indexOf(t);if(n>-1){var e=this._reporters[n];return this._reporters.splice(n,1),e.close(),!0}return!1},n.prototype.startSpan=function(n,e){return void 0===e&&(e={}),t.prototype.startSpan.call(this,n,e)},n.prototype._startSpan=function(t,n){var e=n.references?n.references[0]:null,r=e?e.referencedContext().toTraceId():tt.generate(),o=tt.generate(),i=new Z(r,o),u=new J(this,i);if(u.setOperationName(t),n.tags&&u.addTags(n.tags),n.references)for(var c=0,a=n.references;c<a.length;c++){var s=a[c];u.addReference(s)}return u.start(n.startTime),this._reporters.forEach(function(t){t.accepts.spanCreate&&t.recieveSpanCreate(u)}),u},n.prototype._inject=function(t,n,e){},n.prototype._extract=function(t,n){return V},n}(D),rt=function(){function t(){this.accepts={spanCreate:!1,spanLog:!1,spanFinish:!1}}return t.prototype.recieveSpanCreate=function(t){},t.prototype.recieveSpanLog=function(t,n){},t.prototype.recieveSpanFinish=function(t){},t.prototype.close=function(){},t}(),ot=rt,it=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),ut=function(t){function n(n){var e=t.call(this)||this;return e.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},e.debugInstances={},e.debugFactory=n,e}return it(n,t),n.prototype.recieveSpanLog=function(t,n){var e=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=this.debugInstances[e];o||(o=this.debugInstances[e]=this.debugFactory(e));var i=n.fields.level||"NO-LEVEL",u=n.fields.message||"NO-MESSAGE";n.fields.payload?o("["+i+"] "+u,n.fields.payload):o("["+i+"] "+u)},n.prototype.close=function(){for(var t in this.debugInstances){this.debugInstances[t].destroy()}this.debugInstances={}},n}(ot),ct=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),at=function(t){function n(n){var e=t.call(this)||this;return e.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},e.winstonLogger=n,e}return ct(n,t),n.prototype.recieveSpanLog=function(t,n){var e=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=n.fields.level||"NO-LEVEL",i=n.fields.message||"NO-MESSAGE";this.winstonLogger.log({component:e,level:o,message:i,payload:n.fields.payload})},n.prototype.close=function(){},n}(ot),st="__COMPONENT_NAME__";var pt={Trace:function(t){return function(n,e,o){var i=o.value;return t.operationName=t.operationName||e,o.value=function(){for(var n,e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var u=e[0]instanceof P?e[0]:null,c=u?u.tracer():q(),a={};if("function"==typeof t.relationType)try{var s=t.relationType.apply(this,e);t.relationType=s}catch(n){throw console.error('Unexpected error in traces method "'+t.operationName+'"s relation type handler'),n}var p=this[st];if(p&&(a.tags=((n={})[r.COMPONENT]=p,n)),"childOf"==t.relationType||"followsFrom"==t.relationType){if(!u)throw new Error('Traced method "'+t.operationName+'"s first argument must be a span');"childOf"==t.relationType?a.childOf=u:"followsFrom"==t.relationType&&(a.references=[L(u)])}var f=c.startSpan(t.operationName,a);e.splice(0,1,f);try{var l=i.apply(this,e);return t.autoFinish?"object"==typeof l&&l.then&&l.catch?l.then(function(t){return f.finish(),t}).catch(function(t){throw f.logger.error(t&&t.message||"Unknown error",t),f.setTag(r.ERROR,!0),f.finish(),t}):(f.finish(),l):l}catch(t){throw f.logger.error(t&&t.message||"Unknown error",t),f.setTag(r.ERROR,!0),f.finish(),t}},o}},ComponentName:function(t){return function(n){n.prototype[st]=t}}};e.d(n,"BasicSpan",function(){return z}),e.d(n,"BasicTracer",function(){return et}),e.d(n,"BaseReporter",function(){return rt}),e.d(n,"DebugReporter",function(){return ut}),e.d(n,"WinstonReporter",function(){return at}),e.d(n,"decorators",function(){return pt}),e.d(n,"BinaryCarrier",function(){return i}),e.d(n,"Reference",function(){return C}),e.d(n,"SpanContext",function(){return I}),e.d(n,"Span",function(){return P}),e.d(n,"Tracer",function(){return D}),e.d(n,"Tags",function(){return r}),e.d(n,"initGlobalTracer",function(){return W}),e.d(n,"globalTracer",function(){return q}),e.d(n,"FORMAT_BINARY",function(){return"binary"}),e.d(n,"FORMAT_TEXT_MAP",function(){return"text_map"}),e.d(n,"FORMAT_HTTP_HEADERS",function(){return"http_headers"}),e.d(n,"REFERENCE_CHILD_OF",function(){return j}),e.d(n,"REFERENCE_FOLLOWS_FROM",function(){return M}),e.d(n,"childOf",function(){return A}),e.d(n,"followsFrom",function(){return L})}])});