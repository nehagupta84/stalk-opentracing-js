!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.StalkOpentracing=e():t.StalkOpentracing=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";(function(t){function r(){return void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}}n.d(e,"a",function(){return r})}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"SPAN_KIND",function(){return d}),n.d(r,"SPAN_KIND_RPC_CLIENT",function(){return _}),n.d(r,"SPAN_KIND_RPC_SERVER",function(){return y}),n.d(r,"SPAN_KIND_MESSAGING_PRODUCER",function(){return g}),n.d(r,"SPAN_KIND_MESSAGING_CONSUMER",function(){return v}),n.d(r,"ERROR",function(){return m}),n.d(r,"COMPONENT",function(){return T}),n.d(r,"SAMPLING_PRIORITY",function(){return I}),n.d(r,"PEER_SERVICE",function(){return w}),n.d(r,"PEER_HOSTNAME",function(){return O}),n.d(r,"PEER_ADDRESS",function(){return S}),n.d(r,"PEER_HOST_IPV4",function(){return b}),n.d(r,"PEER_HOST_IPV6",function(){return E}),n.d(r,"PEER_PORT",function(){return N}),n.d(r,"HTTP_URL",function(){return R}),n.d(r,"HTTP_METHOD",function(){return C}),n.d(r,"HTTP_STATUS_CODE",function(){return x}),n.d(r,"MESSAGE_BUS_DESTINATION",function(){return P}),n.d(r,"DB_INSTANCE",function(){return j}),n.d(r,"DB_STATEMENT",function(){return L}),n.d(r,"DB_TYPE",function(){return A}),n.d(r,"DB_USER",function(){return B});var o={};n.r(o),n.d(o,"BinaryCarrier",function(){return h}),n.d(o,"Reference",function(){return J}),n.d(o,"SpanContext",function(){return D}),n.d(o,"Span",function(){return F}),n.d(o,"Tracer",function(){return Y}),n.d(o,"Tags",function(){return r}),n.d(o,"initGlobalTracer",function(){return nt}),n.d(o,"globalTracer",function(){return rt}),n.d(o,"FORMAT_BINARY",function(){return U}),n.d(o,"FORMAT_TEXT_MAP",function(){return k}),n.d(o,"FORMAT_HTTP_HEADERS",function(){return M}),n.d(o,"REFERENCE_CHILD_OF",function(){return G}),n.d(o,"REFERENCE_FOLLOWS_FROM",function(){return H}),n.d(o,"childOf",function(){return V}),n.d(o,"followsFrom",function(){return X});var i={};n.r(i),n.d(i,"I32",function(){return Wt}),n.d(i,"I64",function(){return Zt}),n.d(i,"List",function(){return $t}),n.d(i,"String",function(){return te}),n.d(i,"toUTF8Array",function(){return ee}),n.d(i,"Struct",function(){return re}),n.d(i,"StructFieldType",function(){return ne});var a={};n.r(a),n.d(a,"BaseReporter",function(){return Et}),n.d(a,"DebugReporter",function(){return Ct}),n.d(a,"WinstonReporter",function(){return Pt}),n.d(a,"InMemoryReporter",function(){return Lt}),n.d(a,"SpanFilterProxyReporter",function(){return Bt}),n.d(a,"LogFilterProxyReporter",function(){return Ut}),n.d(a,"SpanComponentTagFilterProxyReporter",function(){return Jt}),n.d(a,"LogLevelFilterProxyReporter",function(){return Yt}),n.d(a,"ZipkinReporter",function(){return Qt}),n.d(a,"toZipkinJSON",function(){return zt}),n.d(a,"JaegerReporter",function(){return ae}),n.d(a,"toJaegerThriftStructure",function(){return se}),n.d(a,"StalkCollectorReporter",function(){return pe});var c={};n.r(c),n.d(c,"Tag",function(){return le}),n.d(c,"default",function(){return he}),n.d(c,"getTags",function(){return de}),n.d(c,"Component",function(){return _e}),n.d(c,"getComponent",function(){return ye});var s={};n.r(s),n.d(s,"Trace",function(){return me}),n.d(s,"default",function(){return Te}),n.d(s,"TraceAsync",function(){return Ie}),n.d(s,"ChildOfRelationHandler",function(){return we}),n.d(s,"FollowFromRelationHandler",function(){return Oe}),n.d(s,"NewTraceRelationHandler",function(){return Se});var u={};n.r(u),n.d(u,"Trace",function(){return s}),n.d(u,"Tag",function(){return c});var p={};n.r(p),n.d(p,"TextMapFormat",function(){return _t}),n.d(p,"JaegerFormat",function(){return vt}),n.d(p,"JaegerFormatName",function(){return gt}),n.d(p,"ZipkinB3Format",function(){return It}),n.d(p,"ZipkinB3FormatName",function(){return Tt});var f={};n.r(f),n.d(f,"DebugNamespaceMatcher",function(){return Mt}),n.d(f,"Thrift",function(){return i});var l={};n.r(l),n.d(l,"formats",function(){return p}),n.d(l,"reporters",function(){return a}),n.d(l,"decorators",function(){return u}),n.d(l,"utils",function(){return f}),n.d(l,"SpanContext",function(){return ct}),n.d(l,"Span",function(){return ft}),n.d(l,"SpanLoggerLogLevel",function(){return ot}),n.d(l,"Tracer",function(){return bt});var h=function(){return function(t){this.buffer=t}}(),d="span.kind",_="client",y="server",g="producer",v="consumer",m="error",T="component",I="sampling.priority",w="peer.service",O="peer.hostname",S="peer.address",b="peer.ipv4",E="peer.ipv6",N="peer.port",R="http.url",C="http.method",x="http.status_code",P="message_bus.destination",j="db.instance",L="db.statement",A="db.type",B="db.user",F=function(){function t(){}return t.prototype.context=function(){return this._context()},t.prototype.tracer=function(){return this._tracer()},t.prototype.setOperationName=function(t){return this._setOperationName(t),this},t.prototype.setBaggageItem=function(t,e){return this._setBaggageItem(t,e),this},t.prototype.getBaggageItem=function(t){return this._getBaggageItem(t)},t.prototype.setTag=function(t,e){var n;return this._addTags(((n={})[t]=e,n)),this},t.prototype.addTags=function(t){return this._addTags(t),this},t.prototype.log=function(t,e){return this._log(t,e),this},t.prototype.logEvent=function(t,e){return this._log({event:t,payload:e})},t.prototype.finish=function(t){this._finish(t)},t.prototype._context=function(){return Q},t.prototype._tracer=function(){return K},t.prototype._setOperationName=function(t){},t.prototype._setBaggageItem=function(t,e){},t.prototype._getBaggageItem=function(t){},t.prototype._addTags=function(t){},t.prototype._log=function(t,e){},t.prototype._finish=function(t){},t}(),D=function(){function t(){}return t.prototype.toTraceId=function(){return""},t.prototype.toSpanId=function(){return""},t}(),U="binary",k="text_map",M="http_headers",G="child_of",H="follows_from",J=function(){function t(t,e){this._type=t,this._referencedContext=e instanceof F?e.context():e}return t.prototype.type=function(){return this._type},t.prototype.referencedContext=function(){return this._referencedContext},t}();function V(t){return t instanceof F&&(t=t.context()),new J(G,t)}function X(t){return t instanceof F&&(t=t.context()),new J(H,t)}var Y=function(){function t(){}return t.prototype.startSpan=function(t,e){if(void 0===e&&(e={}),e.childOf){var n=V(e.childOf);e.references?e.references.push(n):e.references=[n],delete e.childOf}return this._startSpan(t,e)},t.prototype.inject=function(t,e,n){return t instanceof F&&(t=t.context()),this._inject(t,e,n)},t.prototype.extract=function(t,e){return this._extract(t,e)},t.prototype._startSpan=function(t,e){return z},t.prototype._inject=function(t,e,n){},t.prototype._extract=function(t,e){return Q},t}(),q=Y,K=null,Q=null,z=null;var W,Z=(W=function(t,e){return(W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}W(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),$=new q,tt=null,et=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Z(e,t),e.prototype.startSpan=function(){var t=tt||$;return t.startSpan.apply(t,arguments)},e.prototype.inject=function(){var t=tt||$;return t.inject.apply(t,arguments)},e.prototype.extract=function(){var t=tt||$;return t.extract.apply(t,arguments)},e}(q));function nt(t){tt=t}function rt(){return et}K=new q,z=new F,Q=new D;var ot,it=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),at=function(){return(at=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ct=function(t){function e(e,n){var r=t.call(this)||this;return r._baggageItems={},r._traceId=e,r._spanId=n,r}return it(e,t),e.prototype.toTraceId=function(){return this._traceId},e.prototype.toSpanId=function(){return this._spanId},e.prototype.toJSON=function(){return{traceId:this._traceId,spanId:this._spanId,baggageItems:this._baggageItems}},e.prototype.addBaggageItems=function(t){this._baggageItems=at({},this._baggageItems,t)},Object.defineProperty(e.prototype,"baggageItems",{get:function(){return this._baggageItems},enumerable:!0,configurable:!0}),e}(D),st=ct,ut=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),pt=function(){return(pt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ft=function(t){function e(e,n){var r=t.call(this)||this;return r._references=[],r._tags={},r._logs=[],r.__tracer=e,r.__context=n,r}return ut(e,t),e.prototype.tracer=function(){return t.prototype.tracer.call(this)},e.prototype.start=function(t){this._startTime=t||Date.now()},e.prototype.addReference=function(t){this._references.push(t)},e.prototype.getTag=function(t){return this._tags[t]},e.prototype.toJSON=function(){return{context:this.__context,operationName:this._operationName,startTime:this._startTime,finishTime:this._finishTime,references:this._references.map(function(t){return{type:t.type(),referencedContext:t.referencedContext()}}),tags:this._tags,logs:this._logs}},e.fromJSON=function(t){var n=new st(t.context.traceId,t.context.spanId);n.addBaggageItems(t.context.baggageItems||{});var r=new e(null,n);return r._operationName=t.operationName,r._startTime=t.startTime,r._finishTime=t.finishTime,t.references&&t.references.length>0&&(r._references=t.references.map(function(t){var e=new st(t.referencedContext.traceId,t.referencedContext.spanId);return e.addBaggageItems(t.referencedContext.baggageItems||{}),new J(t.type,e)})),r._tags=t.tags||{},r._logs=t.logs||[],r},e.prototype._context=function(){return this.__context},e.prototype._tracer=function(){return this.__tracer},e.prototype._setOperationName=function(t){this._operationName=t},e.prototype._addTags=function(t){this._tags=pt({},this._tags,t)},e.prototype._log=function(t,e){var n=this,r={fields:t,timestamp:e||Date.now()};this._logs.push(r),this.__tracer.reporters.forEach(function(t){t.accepts.spanLog&&t.recieveSpanLog(n,r)})},e.prototype._finish=function(t){var e=this;this._finishTime=t||Date.now(),this.__tracer.reporters.forEach(function(t){t.accepts.spanFinish&&t.recieveSpanFinish(e)})},e.prototype._setBaggageItem=function(t,e){var n;this.__context.addBaggageItems(((n={})[t]=e,n))},e.prototype._getBaggageItem=function(t){return this.__context.baggageItems[t]},e}(F),lt=ft;!function(t){t.ERROR="error",t.WARN="warn",t.INFO="info",t.VERBOSE="verbose",t.DEBUG="debug",t.SILLY="silly"}(ot||(ot={}));!function(){function t(t){this._span=t}t.prototype.error=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:ot.ERROR,message:t,payload:e,event:"error"})},t.prototype.warn=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:ot.WARN,message:t,payload:e})},t.prototype.info=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:ot.INFO,message:t,payload:e})},t.prototype.debug=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:ot.DEBUG,message:t,payload:e})},t.prototype.silly=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:ot.SILLY,message:t,payload:e})}}();var ht,dt={TRACE_ID:"X-Stalk-TraceId",SPAN_ID:"X-Stalk-SpanId",BAGGAGE_ITEM_PREFIX:"X-Stalk-BaggageItem-"},_t={name:k,inject:function(t,e){if(e&&"object"==typeof e)for(var n in e[dt.TRACE_ID]=t.toTraceId(),e[dt.SPAN_ID]=t.toSpanId(),t.baggageItems){var r=t.baggageItems[n];e[dt.BAGGAGE_ITEM_PREFIX+n]=r}else console.error("Could not inject context to plain object, carrier is not object.",e)},extract:function(t){if(!t||"object"!=typeof t)return console.error("Could not extract context from carrier",t),null;var e,n,r={};for(var o in t){var i=o.toLowerCase();if(0==i.indexOf(dt.BAGGAGE_ITEM_PREFIX.toLowerCase()))r[o.replace(new RegExp(dt.BAGGAGE_ITEM_PREFIX,"ig"),"")]=t[o];else i==dt.TRACE_ID.toLowerCase()?e=t[o]:i==dt.SPAN_ID.toLowerCase()&&(n=t[o])}if(!e||!n)return null;var a=new ct(e,n);return a.addBaggageItems(r),a}},yt={IDENTITY:"uber-trace-id",BAGGAGE_ITEM_PREFIX:"uberctx-"},gt="jaeger_format",vt={name:gt,inject:function(t,e){e&&"object"==typeof e?e[yt.IDENTITY]=t.toTraceId()+":"+t.toSpanId()+":0:1":console.error("Could not inject context to plain object, carrier is not object.",e)},extract:function(t){if(!t||"object"!=typeof t)return console.error("Could not extract context from carrier",t),null;var e,n;for(var r in t)if(r.toLowerCase()==yt.IDENTITY.toLowerCase()){var o=t[r].split(":");if(4!=o.length)continue;e=o[0],n=o[1]}return e&&n?new ct(e,n):null}},mt={TRACE_ID:"X-B3-TraceId",SPAN_ID:"X-B3-SpanId"},Tt="zipkin_b3_format",It={name:Tt,inject:function(t,e){e&&"object"==typeof e?(e[mt.TRACE_ID]=t.toTraceId(),e[mt.SPAN_ID]=t.toSpanId()):console.error("Could not inject context to plain object, carrier is not object.",e)},extract:function(t){if(!t||"object"!=typeof t)return console.error("Could not extract context from carrier",t),null;var e,n;for(var r in t){var o=r.toLowerCase();o==mt.TRACE_ID.toLowerCase()?e=t[r]:o==mt.SPAN_ID.toLowerCase()&&(n=t[r])}return e&&n?new ct(e,n):null}},wt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ot=function(){return(Ot=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},St=function(){return Math.random().toString(16).substring(2,10)+Math.random().toString(16).substring(2,10)},bt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._tags={},e._reporters=[],e}return wt(e,t),Object.defineProperty(e.prototype,"reporters",{get:function(){return this._reporters},enumerable:!0,configurable:!0}),e.prototype.addTags=function(t){this._tags=Ot({},this._tags,t)},e.prototype.deleteTag=function(t){delete this._tags[t]},e.prototype.clearTags=function(t){this._tags={}},e.prototype.addReporter=function(t){this._reporters.push(t)},e.prototype.removeReporter=function(t){var e=this._reporters.indexOf(t);if(e>-1){var n=this._reporters[e];return this._reporters.splice(e,1),n.close(),!0}return!1},e.prototype.startSpan=function(e,n){return void 0===n&&(n={}),t.prototype.startSpan.call(this,e,n)},e.prototype._startSpan=function(t,e){var n=e.references?e.references[0]:null,r=n?n.referencedContext():null,o=r?r.toTraceId():St(),i=St(),a=new st(o,i);r&&r.baggageItems&&a.addBaggageItems(r.baggageItems);var c=new lt(this,a);if(c.setOperationName(t),c.addTags(this._tags),e.tags&&c.addTags(e.tags),e.references)for(var s=0,u=e.references;s<u.length;s++){var p=u[s];c.addReference(p)}return c.start(e.startTime),this._reporters.forEach(function(t){t.accepts.spanCreate&&t.recieveSpanCreate(c)}),c},e.prototype._inject=function(t,e,n){switch(e){case M:case k:return _t.inject(t,n);case gt:return vt.inject(t,n);case Tt:return It.inject(t,n);default:console.error('Could not inject context into carrier, unknown format "'+e+'"',n)}},e.prototype._extract=function(t,e){switch(t){case M:case k:return _t.extract(e);case gt:return vt.extract(e);case Tt:return It.extract(e);default:console.error('Could not extract context from carrier, unknown carrier format "'+t+'"',e)}},e}(Y),Et=function(){function t(){this.accepts={spanCreate:!1,spanLog:!1,spanFinish:!1}}return t.prototype.recieveSpanCreate=function(t){},t.prototype.recieveSpanLog=function(t,e){},t.prototype.recieveSpanFinish=function(t){},t.prototype.close=function(){},t}(),Nt=Et,Rt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ct=function(t){function e(e){var n=t.call(this)||this;return n.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},n.debugInstances={},n.debugFactory=e,n}return Rt(e,t),e.prototype.recieveSpanLog=function(t,e){var n=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=this.debugInstances[n];o||(o=this.debugInstances[n]=this.debugFactory(n));var i=e.fields.level||"NO-LEVEL",a=e.fields.message||"NO-MESSAGE";e.fields.payload?o.apply(void 0,["["+i+"] "+a].concat(e.fields.payload)):o("["+i+"] "+a)},e.prototype.close=function(){for(var t in this.debugInstances){this.debugInstances[t].destroy()}this.debugInstances={}},e}(Nt),xt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Pt=function(t){function e(e){var n=t.call(this)||this;return n.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},n.winstonLogger=e,n}return xt(e,t),e.prototype.recieveSpanLog=function(t,e){var n=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=e.fields.level||"NO-LEVEL",i=e.fields.message||"NO-MESSAGE";this.winstonLogger.log({component:n,level:o,message:i,payload:e.fields.payload})},e.prototype.close=function(){},e}(Nt),jt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Lt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.accepts={spanCreate:!0,spanLog:!1,spanFinish:!1},e.spans=[],e}return jt(e,t),e.prototype.recieveSpanCreate=function(t){this.spans.push(t)},e.prototype.close=function(){this.spans=[]},e}(Nt),At=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Bt=function(t){function e(e,n){var r=t.call(this)||this;return r._predicate=function(){return!0},r._target=e,"function"==typeof n&&(r._predicate=n),r.accepts.spanCreate=e.accepts.spanCreate,r.accepts.spanLog=e.accepts.spanLog,r.accepts.spanFinish=e.accepts.spanFinish,r}return At(e,t),e.prototype.recieveSpanCreate=function(t){return!!this.testSpan(t)&&this._target.recieveSpanCreate(t)},e.prototype.recieveSpanLog=function(t,e){return!!this.testSpan(t)&&this._target.recieveSpanLog(t,e)},e.prototype.recieveSpanFinish=function(t){return!!this.testSpan(t)&&this._target.recieveSpanFinish(t)},e.prototype.testSpan=function(t){return this._predicate(t)},e.prototype.close=function(){this._target.close(),this._target=null},e}(Nt),Ft=Bt,Dt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ut=function(t){function e(e,n){var r=t.call(this)||this;return r._predicate=function(){return!0},r._target=e,"function"==typeof n&&(r._predicate=n),r.accepts.spanCreate=e.accepts.spanCreate,r.accepts.spanLog=e.accepts.spanLog,r.accepts.spanFinish=e.accepts.spanFinish,r}return Dt(e,t),e.prototype.recieveSpanCreate=function(t){return this._target.recieveSpanCreate(t)},e.prototype.recieveSpanLog=function(t,e){return!!this.testSpanLog(t,e)&&this._target.recieveSpanLog(t,e)},e.prototype.recieveSpanFinish=function(t){return this._target.recieveSpanFinish(t)},e.prototype.testSpanLog=function(t,e){return this._predicate(t,e)},e.prototype.close=function(){this._target.close(),this._target=null},e}(Nt),kt=Ut,Mt=function(){function t(t){this.updateQuery(t)}return t.prototype.updateQuery=function(t){this._matchQuery=t,this.setupRegexes()},t.prototype.setupRegexes=function(){var t;this._regexes={names:[],skips:[]};var e=("string"==typeof this._matchQuery?this._matchQuery:"").split(/[\s,]+/),n=e.length;for(t=0;t<n;t++)if(e[t]){var r=e[t].replace(/\*/g,".*?");"-"===r[0]?this._regexes.skips.push(new RegExp("^"+r.substr(1)+"$")):this._regexes.names.push(new RegExp("^"+r+"$"))}},t.prototype.test=function(t){if("*"===t[t.length-1])return!0;var e,n;for(e=0,n=this._regexes.skips.length;e<n;e++)if(this._regexes.skips[e].test(t))return!1;for(e=0,n=this._regexes.names.length;e<n;e++)if(this._regexes.names[e].test(t))return!0;return!1},t}(),Gt=Mt,Ht=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Jt=function(t){function e(e,n){var r=t.call(this,e)||this;return r.matcher=new Gt(n),r}return Ht(e,t),e.prototype.updateQuery=function(t){this.matcher.updateQuery(t)},e.prototype.testSpan=function(t){return this.matcher.test(t.getTag(r.COMPONENT))},e}(Ft),Vt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Xt=((ht={})[ot.ERROR]=0,ht[ot.WARN]=1,ht[ot.INFO]=2,ht[ot.DEBUG]=3,ht[ot.SILLY]=4,ht),Yt=function(t){function e(e,n){var r=t.call(this,e)||this;return r._logLevel=n,r}return Vt(e,t),e.prototype.updateLevel=function(t){this._logLevel=t},e.prototype.testSpanLog=function(t,e){return Xt[e.fields.level]<=Xt[this._logLevel]},e}(kt),qt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Kt=function(){return(Kt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},Qt=function(t){function e(e){var n=t.call(this)||this;return n._tags={},n._spans=[],n._zipkinBaseUrl="http://localhost:9411",n._requestHeaders={},n._shouldConvertLogsToAnnotations=!0,n.accepts={spanCreate:!1,spanLog:!1,spanFinish:!0},n._localEndpoint=e.localEndpoint,"object"==typeof e.tags&&(n._tags=e.tags),n._zipkinBaseUrl=e.zipkinBaseUrl,n._fetch=e.fetch,n._requestHeaders=e.requestHeaders||{},n._requestHeaders=e.requestHeaders||{},"boolean"==typeof e.convertLogsToAnnotations&&(n._shouldConvertLogsToAnnotations=e.convertLogsToAnnotations),n}return qt(e,t),e.prototype.recieveSpanFinish=function(t){var e=zt(t,this._shouldConvertLogsToAnnotations,this._tags);e.localEndpoint=this._localEndpoint,this._spans.push(e)},e.prototype.report=function(){var t=this,e=this._spans.slice();return this._fetch(this._zipkinBaseUrl+"/api/v2/spans",{method:"post",headers:Kt({"Content-Type":"application/json"},this._requestHeaders),body:JSON.stringify(e)}).then(function(n){return n.ok&&e.forEach(function(e){var n=t._spans.indexOf(e);n>-1&&t._spans.splice(n,1)}),n})},e}(Et);function zt(t,e,n){void 0===e&&(e=!1),void 0===n&&(n={});var o=t.toJSON(),i={};for(var a in n)i[a]=o.tags[a]+"";for(var c in o.tags)i[c]=o.tags[c]+"";var s={traceId:o.context.toTraceId(),id:o.context.toSpanId(),name:o.operationName,timestamp:1e3*o.startTime,duration:1e3*(o.finishTime-o.startTime),tags:i};e&&(s.annotations=o.logs.map(function(t){var e="";return e=t.fields.level&&t.fields.message?"["+t.fields.level+"] "+t.fields.message:JSON.stringify(t.fields),{timestamp:1e3*(t.timestamp||0),value:e}}));var u=o.references.length>0?o.references[0].referencedContext.toSpanId():null;u&&(s.parentId=u);var p=o.tags[r.SPAN_KIND];return p&&(s.kind=p,delete s.tags[r.SPAN_KIND]),s}var Wt=function(){function t(t){if("number"!=typeof t)throw new Error('Unsupported number value "'+t+'"');this.value=t}return t.prototype.writeToBuffer=function(t,e){return new DataView(t,e,4).setUint32(0,this.value,!1),4},t.prototype.calculateByteLength=function(){return 4},t}(),Zt=function(){function t(t){if("number"==typeof t)this.value=BigInt(t);else if("bigint"==typeof t)this.value=t;else{if("string"!=typeof t)throw new Error('Unsupported i64 value "'+t+'"');this.value=BigInt("0x"+t)}}return t.prototype.writeToBuffer=function(t,e){var n=new DataView(t,e,8);n.setUint32(0,0,!1),n.setUint32(4,0,!1);var r=this.value.toString(16);r.length%2&&(r="0"+r);for(var o=r.length/2,i=0,a=0,c=8-o;i<o;)n.setUint8(c+i,parseInt(r.slice(a,a+2),16)),i+=1,a+=2;return 8},t.prototype.calculateByteLength=function(){return 8},t.prototype.toJSON=function(){return this.value.toString(16)},t}(),$t=function(){function t(t,e){this.elements=[],this.elements=t||[],this.elementType=e}return t.prototype.writeToBuffer=function(t,e){var n=new DataView(t,e);n.setUint8(0,this.elementType),n.setUint32(1,this.elements.length,!1);var r=5;return this.elements.forEach(function(n){if(!n.writeToBuffer)throw new Error('List elements must have "writeToBuffer" method');var o=n.writeToBuffer(t,e+r);r+=o}),r},t.prototype.calculateByteLength=function(){var t=0;return this.elements.forEach(function(e){t+=e.calculateByteLength()}),t+1+4},t}(),te=function(){function t(t){if("string"!=typeof t)throw new Error('Unsupported string value "'+t+'"');this.value=t}return t.prototype.writeToBuffer=function(t,e){var n=ee(this.value),r=new DataView(t,e,n.length+4);r.setUint32(0,n.length);for(var o=0;o<n.length;o++)r.setUint8(4+o,n[o]);return n.length+4},t.prototype.calculateByteLength=function(){return 4+ee(this.value).length},t}();function ee(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e.push(r):r<2048?e.push(192|r>>6,128|63&r):r<55296||r>=57344?e.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&t.charCodeAt(n)),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return e}var ne,re=function(){function t(t){this.fields=[],this.fields=t||[]}return t.prototype.writeToBuffer=function(t,e){var n=new DataView(t,e),r=0;return this.fields.forEach(function(o){if(n.setUint8(r,o.type),n.setInt16(r+1,o.id),o.value instanceof Uint8Array&&o.type==ne.I64)o.value.forEach(function(t,e){n.setUint8(r+3+e,t)}),r+=3+o.value.length;else{if(!o.value.writeToBuffer)throw console.log(o.value),new Error('Not supported field value "'+o.value+'"');var i=o.value.writeToBuffer(t,e+3+r);r+=3+i}}),n.setUint8(r,0),r+1},t.prototype.calculateByteLength=function(){var t=0;return this.fields.forEach(function(e){e.value instanceof Uint8Array&&e.type==ne.I64?t+=11:t+=3+e.value.calculateByteLength()}),1+t},t}();!function(t){t[t.BOOL=2]="BOOL",t[t.BYTE=3]="BYTE",t[t.DOUBLE=4]="DOUBLE",t[t.I16=6]="I16",t[t.I32=8]="I32",t[t.I64=10]="I64",t[t.STRING=11]="STRING",t[t.STRUCT=12]="STRUCT",t[t.MAP=13]="MAP",t[t.SET=14]="SET",t[t.LIST=15]="LIST"}(ne||(ne={}));var oe=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ie=function(){return(ie=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ae=function(t){function e(e){var n=t.call(this)||this;return n._spans=[],n._jaegerBaseUrl="http://localhost:14268",n._requestHeaders={},n.accepts={spanCreate:!1,spanLog:!1,spanFinish:!0},n._process=e.process,n._jaegerBaseUrl=e.jaegerBaseUrl,n._fetch=e.fetch,n._requestHeaders=e.requestHeaders||{},n}return oe(e,t),e.prototype.recieveSpanFinish=function(t){var e=se(t);this._spans.push(e)},e.prototype.report=function(){var t=this,e=this._spans.slice(),n=new $t([],ne.STRUCT);for(var r in this._process.tags){var o=new re([{id:1,name:"key",type:ne.STRING,value:new te(r)},{id:2,name:"vType",type:ne.I32,value:new Wt(0)},{id:3,name:"vStr",type:ne.STRING,value:new te(this._process.tags[r]+"")}]);n.elements.push(o)}var i=new re([{id:1,name:"serviceName",type:ne.STRING,value:new te(this._process.serviceName)},{id:2,name:"tags",type:ne.LIST,value:n}]),a=new $t([],ne.STRUCT);a.elements=this._spans;var c=new re([{id:1,name:"process",type:ne.STRUCT,value:i},{id:2,name:"spans",type:ne.LIST,value:a}]),s=c.calculateByteLength(),u=new ArrayBuffer(s);return c.writeToBuffer(u,0),this._fetch(this._jaegerBaseUrl+"/api/traces",{method:"post",headers:ie({"Content-Type":"application/x-thrift",Connection:"keep-alive"},this._requestHeaders),body:u}).then(function(n){return n.ok&&e.forEach(function(e){var n=t._spans.indexOf(e);n>-1&&t._spans.splice(n,1)}),n})},e}(Et),ce=new Uint8Array([0,0,0,0,0,0,0,0]);function se(t){var e=t.toJSON(),n=new $t([],ne.STRUCT);e.references.forEach(function(t){if(t.type!=G&&t.type!=H)throw new Error('Unsupported reference type "'+t.type+'"');var e=void 0;t.type==G?(t.referencedContext.toSpanId(),e=0):t.type==H&&(e=1);var r=new re([{id:1,name:"refType",type:ne.I32,value:new Wt(e)},{id:2,name:"traceIdLow",type:ne.I64,value:new Zt(t.referencedContext.toTraceId())},{id:3,name:"traceIdHigh",type:ne.I64,value:ce},{id:4,name:"spanId",type:ne.I64,value:new Zt(t.referencedContext.toSpanId())}]);n.elements.push(r)});var r=new $t([],ne.STRUCT);for(var o in e.tags){var i=new re([{id:1,name:"key",type:ne.STRING,value:new te(o)},{id:2,name:"vType",type:ne.I32,value:new Wt(0)},{id:3,name:"vStr",type:ne.STRING,value:new te(e.tags[o]+"")}]);r.elements.push(i)}var a=new $t([],ne.STRUCT);return e.logs.forEach(function(t){var e=new $t([],ne.STRUCT);for(var n in t.fields){var r=t.fields[n];if(r){"object"==typeof r&&(r=JSON.stringify(r));var o=new re([{id:1,name:"key",type:ne.STRING,value:new te(n)},{id:2,name:"vType",type:ne.I32,value:new Wt(0)},{id:3,name:"vStr",type:ne.STRING,value:new te(r+"")}]);e.elements.push(o)}}var i=new re([{id:1,name:"timestamp",type:ne.I64,value:new Zt(BigInt(1e3*t.timestamp))},{id:2,name:"fields",type:ne.LIST,value:e}]);a.elements.push(i)}),new re([{id:1,name:"traceIdLow",type:ne.I64,value:new Zt(e.context.toTraceId())},{id:2,name:"traceIdHigh",type:ne.I64,value:ce},{id:3,name:"spanId",type:ne.I64,value:new Zt(e.context.toSpanId())},{id:4,name:"parentSpanId",type:ne.I64,value:ce},{id:5,name:"operationName",type:ne.STRING,value:new te(e.operationName)},{id:6,name:"references",type:ne.LIST,value:n},{id:7,name:"flags",type:ne.I32,value:new Wt(0)},{id:8,name:"startTime",type:ne.I64,value:new Zt(BigInt(1e3*e.startTime))},{id:9,name:"duration",type:ne.I64,value:new Zt(1e3*(e.finishTime-e.startTime))},{id:10,name:"tags",type:ne.LIST,value:r},{id:11,name:"logs",type:ne.LIST,value:a}])}var ue=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),pe=function(t){function e(e){var n=t.call(this)||this;return n._tags={},n._spans=[],n._stalkCollectorApiRoot="http://localhost:7855",n.accepts={spanCreate:!1,spanLog:!1,spanFinish:!0},n._serviceName=e.serviceName,e.tags&&(n._tags=e.tags),n._stalkCollectorApiRoot=e.stalkCollectorApiRoot,n._fetch=e.fetch,n}return ue(e,t),e.prototype.recieveSpanFinish=function(t){this._spans.push(t.toJSON())},e.prototype.report=function(){var t=this,e=this._spans.slice();return this._fetch(this._stalkCollectorApiRoot+"/batch",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({serviceName:this._serviceName,tags:this._tags,spans:e})}).then(function(n){return n.ok&&e.forEach(function(e){var n=t._spans.indexOf(e);n>-1&&t._spans.splice(n,1)}),n})},e}(Et),fe="X-Stalk-Tags";function le(t,e){return function(n){n.prototype[fe]||(n.prototype[fe]={}),n.prototype[fe][t]=e}}var he=le;function de(t){return t[fe]}function _e(t){return le(r.COMPONENT,t)}function ye(t){return de(t)[r.COMPONENT]}var ge=n(0),ve=function(){return(ve=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function me(t){return function(e,n,i){var a=i.value;t.operationName=t.operationName||n;var c=t;if("custom"!=t.relation)switch(t.relation){case"childOf":c.handler=we;break;case"followsFrom":c.handler=Oe;break;case"newTrace":c.handler=Se;break;default:throw new Error('Unexpected relation type "'+t.relation+'"')}return i.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var i=e[0]instanceof F?e[0]:null,s=Object(ge.a)().opentracing||o,u=i?i.tracer():s.globalTracer(),p={};try{var f=c.handler.apply(this,e);p=ve({},f)}catch(e){throw console.error('Unexpected error in traced method "'+t.operationName+'"s relation handler'),e}var l=de(this);l&&(p.tags=ve({},l,p.tags));var h=u.startSpan(t.operationName,p);e.splice(0,1,h);try{var d=a.apply(this,e);return t.autoFinish?"object"==typeof d&&d.then&&d.catch?d.then(function(t){return h.finish(),t}).catch(function(t){throw h.log({level:"error",event:"error",message:t.message,stack:t.stack,"error.kind":t.name}),h.setTag(r.ERROR,!0),h.finish(),t}):(h.finish(),d):d}catch(t){throw h.log({level:"error",event:"error",message:t.message,stack:t.stack,"error.kind":t.name}),h.setTag(r.ERROR,!0),h.finish(),t}},i}}var Te=me;function Ie(t){return me(ve({},t,{autoFinish:!0}))}function we(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t)throw new Error("Traced method's first argument must be a span");return{childOf:t.context()}}function Oe(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t)throw new Error("Traced method's first argument must be a span");return{references:[X(t.context())]}}function Se(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return{}}n.d(e,"opentracing",function(){return o}),n.d(e,"stalk",function(){return l})}])});