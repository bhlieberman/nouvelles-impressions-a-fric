import "./cljs_env.js";
import "./cljs.core.js";
import "./ajax.protocols.js";
import "./goog.string.string.js";
goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__47911 = e.target.readyState;
var fexpr__47910 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__47910.cljs$core$IFn$_invoke$arity$1 ? fexpr__47910.cljs$core$IFn$_invoke$arity$1(G__47911) : fexpr__47910.call(null,G__47911));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__47914,handler){
var map__47915 = p__47914;
var map__47915__$1 = cljs.core.__destructure_map(map__47915);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47915__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47915__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47915__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47915__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47915__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47915__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47915__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__47913_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__47913_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___47982 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___47982)){
var response_type_47983 = temp__5804__auto___47982;
(this$__$1.responseType = cljs.core.name(response_type_47983));
} else {
}

var seq__47920_47984 = cljs.core.seq(headers);
var chunk__47921_47985 = null;
var count__47922_47986 = (0);
var i__47923_47987 = (0);
while(true){
if((i__47923_47987 < count__47922_47986)){
var vec__47939_47988 = chunk__47921_47985.cljs$core$IIndexed$_nth$arity$2(null,i__47923_47987);
var k_47989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47939_47988,(0),null);
var v_47990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47939_47988,(1),null);
this$__$1.setRequestHeader(k_47989,v_47990);


var G__47991 = seq__47920_47984;
var G__47992 = chunk__47921_47985;
var G__47993 = count__47922_47986;
var G__47994 = (i__47923_47987 + (1));
seq__47920_47984 = G__47991;
chunk__47921_47985 = G__47992;
count__47922_47986 = G__47993;
i__47923_47987 = G__47994;
continue;
} else {
var temp__5804__auto___47996 = cljs.core.seq(seq__47920_47984);
if(temp__5804__auto___47996){
var seq__47920_47997__$1 = temp__5804__auto___47996;
if(cljs.core.chunked_seq_QMARK_(seq__47920_47997__$1)){
var c__5568__auto___48001 = cljs.core.chunk_first(seq__47920_47997__$1);
var G__48002 = cljs.core.chunk_rest(seq__47920_47997__$1);
var G__48003 = c__5568__auto___48001;
var G__48004 = cljs.core.count(c__5568__auto___48001);
var G__48005 = (0);
seq__47920_47984 = G__48002;
chunk__47921_47985 = G__48003;
count__47922_47986 = G__48004;
i__47923_47987 = G__48005;
continue;
} else {
var vec__47945_48006 = cljs.core.first(seq__47920_47997__$1);
var k_48007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47945_48006,(0),null);
var v_48008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47945_48006,(1),null);
this$__$1.setRequestHeader(k_48007,v_48008);


var G__48009 = cljs.core.next(seq__47920_47997__$1);
var G__48010 = null;
var G__48011 = (0);
var G__48012 = (0);
seq__47920_47984 = G__48009;
chunk__47921_47985 = G__48010;
count__47922_47986 = G__48011;
i__47923_47987 = G__48012;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
