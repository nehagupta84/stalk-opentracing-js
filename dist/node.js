module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";var r,o,i,a=n(3),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){i=!1}function s(t){if(t){if(t!==r){if(t.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,n){return e!==n.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,u()}}else r!==c&&(r=c,u())}function p(){return i||(i=function(){r||s(c);for(var t,e=r.split(""),n=[],o=a.nextValue();e.length>0;)o=a.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||c},characters:function(t){return s(t),r},seed:function(t){a.seed(t),o!==t&&(u(),o=t)},lookup:function(t){return p()[t]},shuffled:p}},function(t,e,n){"use strict";t.exports=n(2)},function(t,e,n){"use strict";var r=n(0),o=n(4),i=n(10),a=n(11)||0;function c(){return o(a)}t.exports=c,t.exports.generate=c,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=i},function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},function(t,e,n){"use strict";var r,o,i=n(5),a=(n(0),1459707606518),c=6;t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-a));return n===o?r++:(r=0,o=n),e+=i(c),e+=i(t),r>0&&(e+=i(r)),e+=i(n)}},function(t,e,n){"use strict";var r=n(0),o=n(6),i=n(9);t.exports=function(t){for(var e,n=0,a="";!e;)a+=i(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return a}},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(8);if(r.randomFillSync){var o={};t.exports=function(t){var e=o[t];return e||(e=Buffer.allocUnsafe(t),t<=255&&(o[t]=e)),r.randomFillSync(e)}}else t.exports=r.randomBytes},function(t,e){t.exports=require("crypto")},function(t,e){t.exports=function(t,e,n){var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=Math.ceil(1.6*r*n/e.length);n=+n;for(var i="";;)for(var a=t(o),c=0;c<o;c++){var u=a[c]&r;if(e[u]&&(i+=e[u]).length===n)return i}}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,e,n){"use strict";var r=n(12),o=0;!r.isMaster&&r.worker&&(o=r.worker.id),t.exports=parseInt(process.env.NODE_UNIQUE_ID||o,10)},function(t,e){t.exports=require("cluster")},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"SPAN_KIND",function(){return h}),n.d(r,"SPAN_KIND_RPC_CLIENT",function(){return _}),n.d(r,"SPAN_KIND_RPC_SERVER",function(){return g}),n.d(r,"SPAN_KIND_MESSAGING_PRODUCER",function(){return d}),n.d(r,"SPAN_KIND_MESSAGING_CONSUMER",function(){return y}),n.d(r,"ERROR",function(){return v}),n.d(r,"COMPONENT",function(){return O}),n.d(r,"SAMPLING_PRIORITY",function(){return m}),n.d(r,"PEER_SERVICE",function(){return S}),n.d(r,"PEER_HOSTNAME",function(){return b}),n.d(r,"PEER_ADDRESS",function(){return x}),n.d(r,"PEER_HOST_IPV4",function(){return T}),n.d(r,"PEER_HOST_IPV6",function(){return E}),n.d(r,"PEER_PORT",function(){return I}),n.d(r,"HTTP_URL",function(){return w}),n.d(r,"HTTP_METHOD",function(){return N}),n.d(r,"HTTP_STATUS_CODE",function(){return P}),n.d(r,"MESSAGE_BUS_DESTINATION",function(){return R}),n.d(r,"DB_INSTANCE",function(){return j}),n.d(r,"DB_STATEMENT",function(){return C}),n.d(r,"DB_TYPE",function(){return L}),n.d(r,"DB_USER",function(){return F});var o={};n.r(o),n.d(o,"BinaryCarrier",function(){return l}),n.d(o,"Reference",function(){return V}),n.d(o,"SpanContext",function(){return B}),n.d(o,"Span",function(){return M}),n.d(o,"Tracer",function(){return Y}),n.d(o,"Tags",function(){return r}),n.d(o,"initGlobalTracer",function(){return nt}),n.d(o,"globalTracer",function(){return rt}),n.d(o,"FORMAT_BINARY",function(){return D}),n.d(o,"FORMAT_TEXT_MAP",function(){return k}),n.d(o,"FORMAT_HTTP_HEADERS",function(){return U}),n.d(o,"REFERENCE_CHILD_OF",function(){return H}),n.d(o,"REFERENCE_FOLLOWS_FROM",function(){return G}),n.d(o,"childOf",function(){return Q}),n.d(o,"followsFrom",function(){return K});var i={};n.r(i),n.d(i,"BaseReporter",function(){return St}),n.d(i,"DebugReporter",function(){return Tt}),n.d(i,"WinstonReporter",function(){return It}),n.d(i,"InMemoryReporter",function(){return Nt}),n.d(i,"SpanFilterProxyReporter",function(){return Rt}),n.d(i,"LogFilterProxyReporter",function(){return Lt}),n.d(i,"SpanComponentTagFilterProxyReporter",function(){return Bt}),n.d(i,"LogLevelFilterProxyReporter",function(){return Ut}),n.d(i,"ZipkinReporter",function(){return Vt});var a={};n.r(a),n.d(a,"Tag",function(){return Kt}),n.d(a,"default",function(){return Yt}),n.d(a,"getTags",function(){return qt}),n.d(a,"Component",function(){return Wt}),n.d(a,"getComponent",function(){return Xt});var c={};n.r(c),n.d(c,"Trace",function(){return Jt}),n.d(c,"default",function(){return $t}),n.d(c,"TraceAsync",function(){return Zt}),n.d(c,"ChildOfRelationHandler",function(){return te}),n.d(c,"FollowFromRelationHandler",function(){return ee}),n.d(c,"NewTraceRelationHandler",function(){return ne});var u={};n.r(u),n.d(u,"Trace",function(){return c}),n.d(u,"Tag",function(){return a});var s={};n.r(s),n.d(s,"TextMapFormat",function(){return yt});var p={};n.r(p),n.d(p,"formats",function(){return s}),n.d(p,"reporters",function(){return i}),n.d(p,"decorators",function(){return u}),n.d(p,"SpanContext",function(){return ct}),n.d(p,"Span",function(){return ft}),n.d(p,"Tracer",function(){return mt});var f,l=function(){return function(t){this.buffer=t}}(),h="span.kind",_="client",g="server",d="producer",y="consumer",v="error",O="component",m="sampling.priority",S="peer.service",b="peer.hostname",x="peer.address",T="peer.ipv4",E="peer.ipv6",I="peer.port",w="http.url",N="http.method",P="http.status_code",R="message_bus.destination",j="db.instance",C="db.statement",L="db.type",F="db.user";!function(t){t.ERROR="error",t.WARN="warn",t.INFO="info",t.VERBOSE="verbose",t.DEBUG="debug",t.SILLY="silly"}(f||(f={}));var A=function(){function t(t){this._span=t}return t.prototype.error=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:f.ERROR,message:t,payload:e,event:"error"})},t.prototype.warn=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:f.WARN,message:t,payload:e})},t.prototype.info=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:f.INFO,message:t,payload:e})},t.prototype.debug=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:f.DEBUG,message:t,payload:e})},t.prototype.silly=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:f.SILLY,message:t,payload:e})},t}(),M=function(){function t(){this.logger=new A(this)}return t.prototype.context=function(){return this._context()},t.prototype.tracer=function(){return this._tracer()},t.prototype.setOperationName=function(t){return this._setOperationName(t),this},t.prototype.setBaggageItem=function(t,e){return this._setBaggageItem(t,e),this},t.prototype.getBaggageItem=function(t){return this._getBaggageItem(t)},t.prototype.setTag=function(t,e){var n;return this._addTags(((n={})[t]=e,n)),this},t.prototype.addTags=function(t){return this._addTags(t),this},t.prototype.log=function(t,e){return this._log(t,e),this},t.prototype.logEvent=function(t,e){return this._log({event:t,payload:e})},t.prototype.finish=function(t){this._finish(t)},t.prototype._context=function(){return X},t.prototype._tracer=function(){return W},t.prototype._setOperationName=function(t){},t.prototype._setBaggageItem=function(t,e){},t.prototype._getBaggageItem=function(t){},t.prototype._addTags=function(t){},t.prototype._log=function(t,e){},t.prototype._finish=function(t){},t}(),B=function(){function t(){}return t.prototype.toTraceId=function(){return""},t.prototype.toSpanId=function(){return""},t}(),D="binary",k="text_map",U="http_headers",H="child_of",G="follows_from",V=function(){function t(t,e){this._type=t,this._referencedContext=e instanceof M?e.context():e}return t.prototype.type=function(){return this._type},t.prototype.referencedContext=function(){return this._referencedContext},t}();function Q(t){return t instanceof M&&(t=t.context()),new V(H,t)}function K(t){return t instanceof M&&(t=t.context()),new V(G,t)}var Y=function(){function t(){}return t.prototype.startSpan=function(t,e){if(void 0===e&&(e={}),e.childOf){var n=Q(e.childOf);e.references?e.references.push(n):e.references=[n],delete e.childOf}return this._startSpan(t,e)},t.prototype.inject=function(t,e,n){return t instanceof M&&(t=t.context()),this._inject(t,e,n)},t.prototype.extract=function(t,e){return this._extract(t,e)},t.prototype._startSpan=function(t,e){return z},t.prototype._inject=function(t,e,n){},t.prototype._extract=function(t,e){return X},t}(),q=Y,W=null,X=null,z=null;var J,$=(J=function(t,e){return(J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}J(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),Z=new q,tt=null,et=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return $(e,t),e.prototype.startSpan=function(){var t=tt||Z;return t.startSpan.apply(t,arguments)},e.prototype.inject=function(){var t=tt||Z;return t.inject.apply(t,arguments)},e.prototype.extract=function(){var t=tt||Z;return t.extract.apply(t,arguments)},e}(q));function nt(t){tt=t}function rt(){return et}W=new q,z=new M,X=new B;var ot,it=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),at=function(){return(at=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ct=function(t){function e(e,n){var r=t.call(this)||this;return r._baggageItems={},r._traceId=e,r._spanId=n,r}return it(e,t),e.prototype.toTraceId=function(){return this._traceId},e.prototype.toSpanId=function(){return this._spanId},e.prototype.toJSON=function(){return{traceId:this._traceId,spanId:this._spanId,baggageItems:this._baggageItems}},e.prototype.addBaggageItems=function(t){this._baggageItems=at({},this._baggageItems,t)},Object.defineProperty(e.prototype,"baggageItems",{get:function(){return this._baggageItems},enumerable:!0,configurable:!0}),e}(B),ut=ct,st=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),pt=function(){return(pt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ft=function(t){function e(e,n){var r=t.call(this)||this;return r._references=[],r._tags={},r._logs=[],r.__tracer=e,r.__context=n,r}return st(e,t),e.prototype.tracer=function(){return t.prototype.tracer.call(this)},e.prototype.start=function(t){this._startTime=t||Date.now()},e.prototype.addReference=function(t){this._references.push(t)},e.prototype.getTag=function(t){return this._tags[t]},e.prototype.toJSON=function(){return{context:this.__context,operationName:this._operationName,startTime:this._startTime,finishTime:this._finishTime,references:this._references.map(function(t){return{type:t.type(),referencedContext:t.referencedContext()}}),tags:this._tags,logs:this._logs}},e.prototype._context=function(){return this.__context},e.prototype._tracer=function(){return this.__tracer},e.prototype._setOperationName=function(t){this._operationName=t},e.prototype._addTags=function(t){this._tags=pt({},this._tags,t)},e.prototype._log=function(t,e){var n=this,r={fields:t,timestamp:e||Date.now()};this._logs.push(r),this.__tracer.reporters.forEach(function(t){t.accepts.spanLog&&t.recieveSpanLog(n,r)})},e.prototype._finish=function(t){var e=this;this._finishTime=t||Date.now(),this.__tracer.reporters.forEach(function(t){t.accepts.spanFinish&&t.recieveSpanFinish(e)})},e.prototype._setBaggageItem=function(t,e){var n;this.__context.addBaggageItems(((n={})[t]=e,n))},e.prototype._getBaggageItem=function(t){return this.__context.baggageItems[t]},e}(M),lt=ft,ht=n(1),_t="X-Stalk-TraceId",gt="X-Stalk-SpanId",dt="X-Stalk-BaggageItem-",yt={name:k,inject:function(t,e){if(e&&"object"==typeof e)for(var n in e[_t]=t.toTraceId(),e[gt]=t.toSpanId(),t.baggageItems){var r=t.baggageItems[n];e[dt+n]=r}else console.error("Could not inject context to plain object, carrier is not object.",e)},extract:function(t){if(!t||"object"!=typeof t)return console.error("Could not extract context from carrier",t),null;var e,n,r={};for(var o in t){if(0==o.indexOf(dt))r[o.replace(dt,"")]=t[o];else o==_t?e=t[o]:o==gt&&(n=t[o])}if(!e||!n)return null;var i=new ct(e,n);return i.addBaggageItems(r),i}},vt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ot=function(){return(Ot=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},mt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._tags={},e._reporters=[],e}return vt(e,t),Object.defineProperty(e.prototype,"reporters",{get:function(){return this._reporters},enumerable:!0,configurable:!0}),e.prototype.addTags=function(t){this._tags=Ot({},this._tags,t)},e.prototype.addReporter=function(t){this._reporters.push(t)},e.prototype.removeReporter=function(t){var e=this._reporters.indexOf(t);if(e>-1){var n=this._reporters[e];return this._reporters.splice(e,1),n.close(),!0}return!1},e.prototype.startSpan=function(e,n){return void 0===n&&(n={}),t.prototype.startSpan.call(this,e,n)},e.prototype._startSpan=function(t,e){var n=e.references?e.references[0]:null,r=n?n.referencedContext():null,o=r?r.toTraceId():ht.generate(),i=ht.generate(),a=new ut(o,i);r&&r.baggageItems&&a.addBaggageItems(r.baggageItems);var c=new lt(this,a);if(c.setOperationName(t),c.addTags(this._tags),e.tags&&c.addTags(e.tags),e.references)for(var u=0,s=e.references;u<s.length;u++){var p=s[u];c.addReference(p)}return c.start(e.startTime),this._reporters.forEach(function(t){t.accepts.spanCreate&&t.recieveSpanCreate(c)}),c},e.prototype._inject=function(t,e,n){switch(e){case U:case k:return yt.inject(t,n);default:console.error('Could not inject context into carrier, unknown format "'+e+'"',n)}},e.prototype._extract=function(t,e){switch(t){case U:case k:return yt.extract(e);default:console.error('Could not extract context from carrier, unknown carrier format "'+t+'"',e)}},e}(Y),St=function(){function t(){this.accepts={spanCreate:!1,spanLog:!1,spanFinish:!1}}return t.prototype.recieveSpanCreate=function(t){},t.prototype.recieveSpanLog=function(t,e){},t.prototype.recieveSpanFinish=function(t){},t.prototype.close=function(){},t}(),bt=St,xt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Tt=function(t){function e(e){var n=t.call(this)||this;return n.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},n.debugInstances={},n.debugFactory=e,n}return xt(e,t),e.prototype.recieveSpanLog=function(t,e){var n=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=this.debugInstances[n];o||(o=this.debugInstances[n]=this.debugFactory(n));var i=e.fields.level||"NO-LEVEL",a=e.fields.message||"NO-MESSAGE";e.fields.payload?o.apply(void 0,["["+i+"] "+a].concat(e.fields.payload)):o("["+i+"] "+a)},e.prototype.close=function(){for(var t in this.debugInstances){this.debugInstances[t].destroy()}this.debugInstances={}},e}(bt),Et=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),It=function(t){function e(e){var n=t.call(this)||this;return n.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},n.winstonLogger=e,n}return Et(e,t),e.prototype.recieveSpanLog=function(t,e){var n=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=e.fields.level||"NO-LEVEL",i=e.fields.message||"NO-MESSAGE";this.winstonLogger.log({component:n,level:o,message:i,payload:e.fields.payload})},e.prototype.close=function(){},e}(bt),wt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Nt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.accepts={spanCreate:!0,spanLog:!1,spanFinish:!1},e.spans=[],e}return wt(e,t),e.prototype.recieveSpanCreate=function(t){this.spans.push(t)},e.prototype.close=function(){this.spans=[]},e}(bt),Pt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Rt=function(t){function e(e,n){var r=t.call(this)||this;return r._predicate=function(){return!0},r._target=e,"function"==typeof n&&(r._predicate=n),r.accepts.spanCreate=e.accepts.spanCreate,r.accepts.spanLog=e.accepts.spanLog,r.accepts.spanFinish=e.accepts.spanFinish,r}return Pt(e,t),e.prototype.recieveSpanCreate=function(t){return!!this.testSpan(t)&&this._target.recieveSpanCreate(t)},e.prototype.recieveSpanLog=function(t,e){return!!this.testSpan(t)&&this._target.recieveSpanLog(t,e)},e.prototype.recieveSpanFinish=function(t){return!!this.testSpan(t)&&this._target.recieveSpanFinish(t)},e.prototype.testSpan=function(t){return this._predicate(t)},e.prototype.close=function(){this._target.close(),this._target=null},e}(bt),jt=Rt,Ct=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Lt=function(t){function e(e,n){var r=t.call(this)||this;return r._predicate=function(){return!0},r._target=e,"function"==typeof n&&(r._predicate=n),r.accepts.spanCreate=e.accepts.spanCreate,r.accepts.spanLog=e.accepts.spanLog,r.accepts.spanFinish=e.accepts.spanFinish,r}return Ct(e,t),e.prototype.recieveSpanCreate=function(t){return this._target.recieveSpanCreate(t)},e.prototype.recieveSpanLog=function(t,e){return!!this.testSpanLog(t,e)&&this._target.recieveSpanLog(t,e)},e.prototype.recieveSpanFinish=function(t){return this._target.recieveSpanFinish(t)},e.prototype.testSpanLog=function(t,e){return this._predicate(t,e)},e.prototype.close=function(){this._target.close(),this._target=null},e}(bt),Ft=Lt,At=function(){function t(t){this.updateQuery(t)}return t.prototype.updateQuery=function(t){this._matchQuery=t,this.setupRegexes()},t.prototype.setupRegexes=function(){var t;this._regexes={names:[],skips:[]};var e=("string"==typeof this._matchQuery?this._matchQuery:"").split(/[\s,]+/),n=e.length;for(t=0;t<n;t++)if(e[t]){var r=e[t].replace(/\*/g,".*?");"-"===r[0]?this._regexes.skips.push(new RegExp("^"+r.substr(1)+"$")):this._regexes.names.push(new RegExp("^"+r+"$"))}},t.prototype.test=function(t){if("*"===t[t.length-1])return!0;var e,n;for(e=0,n=this._regexes.skips.length;e<n;e++)if(this._regexes.skips[e].test(t))return!1;for(e=0,n=this._regexes.names.length;e<n;e++)if(this._regexes.names[e].test(t))return!0;return!1},t}(),Mt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Bt=function(t){function e(e,n){var r=t.call(this,e)||this;return r.matcher=new At(n),r}return Mt(e,t),e.prototype.updateQuery=function(t){this.matcher.updateQuery(t)},e.prototype.testSpan=function(t){return this.matcher.test(t.getTag(r.COMPONENT))},e}(jt),Dt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),kt=((ot={})[f.ERROR]=0,ot[f.WARN]=1,ot[f.INFO]=2,ot[f.DEBUG]=3,ot[f.SILLY]=4,ot),Ut=function(t){function e(e,n){var r=t.call(this,e)||this;return r._logLevel=n,r}return Dt(e,t),e.prototype.updateLevel=function(t){this._logLevel=t},e.prototype.testSpanLog=function(t,e){return kt[e.fields.level]<=kt[this._logLevel]},e}(Ft),Ht=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Gt=function(){return(Gt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},Vt=function(t){function e(e){var n=t.call(this)||this;return n._spans=[],n._zipkinBaseUrl="http://localhost:9411",n.accepts={spanCreate:!1,spanLog:!1,spanFinish:!0},n._serviceName=e.serviceName,n._zipkinBaseUrl=e.zipkinBaseUrl,n._fetch=e.fetch,n}return Ht(e,t),e.prototype.recieveSpanFinish=function(t){var e=function(t){var e=t.toJSON(),n={traceId:e.context.toTraceId(),id:e.context.toSpanId(),name:e.operationName,timestamp:1e3*e.startTime,duration:1e3*(e.finishTime-e.startTime),tags:Gt({},e.tags)},o=e.references.length>0?e.references[0].referencedContext.toSpanId():null;o&&(n.parentId=o);var i=e.tags[r.SPAN_KIND];i&&(n.kind=i,delete n.tags[r.SPAN_KIND]);return n}(t);e.localEndpoint||(e.localEndpoint={}),e.localEndpoint.serviceName=this._serviceName,this._spans.push(e)},e.prototype.report=function(){var t=this,e=this._spans.slice();return this._fetch(this._zipkinBaseUrl+"/api/v2/spans",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(n){return n.ok&&e.forEach(function(e){var n=t._spans.indexOf(e);n>-1&&t._spans.splice(n,1)}),n})},e}(St);var Qt="X-Stalk-Tags";function Kt(t,e){return function(n){n.prototype[Qt]||(n.prototype[Qt]={}),n.prototype[Qt][t]=e}}var Yt=Kt;function qt(t){return t[Qt]}function Wt(t){return Kt(r.COMPONENT,t)}function Xt(t){return qt(t)[r.COMPONENT]}var zt=function(){return(zt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function Jt(t){return function(e,n,o){var i=o.value;t.operationName=t.operationName||n;var a=t;if("custom"!=t.relation)switch(t.relation){case"childOf":a.handler=te;break;case"followsFrom":a.handler=ee;break;case"newTrace":a.handler=ne;break;default:throw new Error('Unexpected relation type "'+t.relation+'"')}return o.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=e[0]instanceof M?e[0]:null,c=o?o.tracer():rt(),u={};try{var s=a.handler.apply(this,e);u=zt({},u,s)}catch(e){throw console.error('Unexpected error in traced method "'+t.operationName+'"s relation handler'),e}var p=qt(this);p&&(u.tags=zt({},p,u));var f=c.startSpan(t.operationName,u);e.splice(0,1,f);try{var l=i.apply(this,e);return t.autoFinish?"object"==typeof l&&l.then&&l.catch?l.then(function(t){return f.finish(),t}).catch(function(t){throw f.logger.error(t&&t.message||"Unknown error",t),f.setTag(r.ERROR,!0),f.finish(),t}):(f.finish(),l):l}catch(t){throw f.logger.error(t&&t.message||"Unknown error",t),f.setTag(r.ERROR,!0),f.finish(),t}},o}}var $t=Jt;function Zt(t){return Jt(zt({},t,{autoFinish:!0}))}function te(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t)throw new Error("Traced method's first argument must be a span");return{childOf:t.context()}}function ee(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t)throw new Error("Traced method's first argument must be a span");return{references:[K(t.context())]}}function ne(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return{}}n.d(e,"opentracing",function(){return o}),n.d(e,"stalk",function(){return p})}]);