import "./cljs_env.js";
import "./cljs.core.js";
import "./re_frame.interop.js";
import "./re_frame.loggers.js";
import "./goog.functions.functions.js";
goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__33067){
var map__33068 = p__33067;
var map__33068__$1 = cljs.core.__destructure_map(map__33068);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33068__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33068__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33068__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33068__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__33069_33108 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__33070_33109 = null;
var count__33071_33110 = (0);
var i__33072_33111 = (0);
while(true){
if((i__33072_33111 < count__33071_33110)){
var vec__33087_33112 = chunk__33070_33109.cljs$core$IIndexed$_nth$arity$2(null,i__33072_33111);
var k_33113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33087_33112,(0),null);
var cb_33114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33087_33112,(1),null);
try{var G__33092_33115 = cljs.core.deref(re_frame.trace.traces);
(cb_33114.cljs$core$IFn$_invoke$arity$1 ? cb_33114.cljs$core$IFn$_invoke$arity$1(G__33092_33115) : cb_33114.call(null,G__33092_33115));
}catch (e33090){var e_33116 = e33090;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_33113,"while storing",cljs.core.deref(re_frame.trace.traces),e_33116], 0));
}

var G__33117 = seq__33069_33108;
var G__33118 = chunk__33070_33109;
var G__33119 = count__33071_33110;
var G__33120 = (i__33072_33111 + (1));
seq__33069_33108 = G__33117;
chunk__33070_33109 = G__33118;
count__33071_33110 = G__33119;
i__33072_33111 = G__33120;
continue;
} else {
var temp__5804__auto___33121 = cljs.core.seq(seq__33069_33108);
if(temp__5804__auto___33121){
var seq__33069_33122__$1 = temp__5804__auto___33121;
if(cljs.core.chunked_seq_QMARK_(seq__33069_33122__$1)){
var c__5568__auto___33123 = cljs.core.chunk_first(seq__33069_33122__$1);
var G__33124 = cljs.core.chunk_rest(seq__33069_33122__$1);
var G__33125 = c__5568__auto___33123;
var G__33126 = cljs.core.count(c__5568__auto___33123);
var G__33127 = (0);
seq__33069_33108 = G__33124;
chunk__33070_33109 = G__33125;
count__33071_33110 = G__33126;
i__33072_33111 = G__33127;
continue;
} else {
var vec__33096_33128 = cljs.core.first(seq__33069_33122__$1);
var k_33129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33096_33128,(0),null);
var cb_33130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33096_33128,(1),null);
try{var G__33101_33131 = cljs.core.deref(re_frame.trace.traces);
(cb_33130.cljs$core$IFn$_invoke$arity$1 ? cb_33130.cljs$core$IFn$_invoke$arity$1(G__33101_33131) : cb_33130.call(null,G__33101_33131));
}catch (e33099){var e_33132 = e33099;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_33129,"while storing",cljs.core.deref(re_frame.trace.traces),e_33132], 0));
}

var G__33133 = cljs.core.next(seq__33069_33122__$1);
var G__33134 = null;
var G__33135 = (0);
var G__33136 = (0);
seq__33069_33108 = G__33133;
chunk__33070_33109 = G__33134;
count__33071_33110 = G__33135;
i__33072_33111 = G__33136;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
