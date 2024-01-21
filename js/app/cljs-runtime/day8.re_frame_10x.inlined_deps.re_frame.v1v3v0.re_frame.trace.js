import "./cljs_env.js";
import "./cljs.core.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.js";
import "./goog.functions.functions.js";
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$start_trace(p__15336){
var map__15337 = p__15336;
var map__15337__$1 = cljs.core.__destructure_map(map__15337);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15337__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15337__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15337__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15337__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$tracing_cb_debounced(){
var seq__15348_15396 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs));
var chunk__15349_15397 = null;
var count__15350_15398 = (0);
var i__15351_15399 = (0);
while(true){
if((i__15351_15399 < count__15350_15398)){
var vec__15375_15400 = chunk__15349_15397.cljs$core$IIndexed$_nth$arity$2(null,i__15351_15399);
var k_15401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15375_15400,(0),null);
var cb_15402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15375_15400,(1),null);
try{var G__15379_15403 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces);
(cb_15402.cljs$core$IFn$_invoke$arity$1 ? cb_15402.cljs$core$IFn$_invoke$arity$1(G__15379_15403) : cb_15402.call(null,G__15379_15403));
}catch (e15378){var e_15404 = e15378;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_15401,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces),e_15404], 0));
}

var G__15405 = seq__15348_15396;
var G__15406 = chunk__15349_15397;
var G__15407 = count__15350_15398;
var G__15408 = (i__15351_15399 + (1));
seq__15348_15396 = G__15405;
chunk__15349_15397 = G__15406;
count__15350_15398 = G__15407;
i__15351_15399 = G__15408;
continue;
} else {
var temp__5804__auto___15409 = cljs.core.seq(seq__15348_15396);
if(temp__5804__auto___15409){
var seq__15348_15410__$1 = temp__5804__auto___15409;
if(cljs.core.chunked_seq_QMARK_(seq__15348_15410__$1)){
var c__5568__auto___15411 = cljs.core.chunk_first(seq__15348_15410__$1);
var G__15412 = cljs.core.chunk_rest(seq__15348_15410__$1);
var G__15413 = c__5568__auto___15411;
var G__15414 = cljs.core.count(c__5568__auto___15411);
var G__15415 = (0);
seq__15348_15396 = G__15412;
chunk__15349_15397 = G__15413;
count__15350_15398 = G__15414;
i__15351_15399 = G__15415;
continue;
} else {
var vec__15380_15416 = cljs.core.first(seq__15348_15410__$1);
var k_15417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15380_15416,(0),null);
var cb_15418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15380_15416,(1),null);
try{var G__15384_15419 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces);
(cb_15418.cljs$core$IFn$_invoke$arity$1 ? cb_15418.cljs$core$IFn$_invoke$arity$1(G__15384_15419) : cb_15418.call(null,G__15384_15419));
}catch (e15383){var e_15420 = e15383;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_15417,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces),e_15420], 0));
}

var G__15421 = cljs.core.next(seq__15348_15410__$1);
var G__15422 = null;
var G__15423 = (0);
var G__15424 = (0);
seq__15348_15396 = G__15421;
chunk__15349_15397 = G__15422;
count__15350_15398 = G__15423;
i__15351_15399 = G__15424;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.js.map
