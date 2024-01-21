import "./cljs_env.js";
import "./cljs.core.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.js";
import "./goog.functions.functions.js";
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$start_trace(p__19810){
var map__19811 = p__19810;
var map__19811__$1 = cljs.core.__destructure_map(map__19811);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$tracing_cb_debounced(){
var seq__19823_19910 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs));
var chunk__19824_19911 = null;
var count__19825_19912 = (0);
var i__19826_19913 = (0);
while(true){
if((i__19826_19913 < count__19825_19912)){
var vec__19858_19914 = chunk__19824_19911.cljs$core$IIndexed$_nth$arity$2(null,i__19826_19913);
var k_19915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19858_19914,(0),null);
var cb_19916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19858_19914,(1),null);
try{var G__19866_19917 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces);
(cb_19916.cljs$core$IFn$_invoke$arity$1 ? cb_19916.cljs$core$IFn$_invoke$arity$1(G__19866_19917) : cb_19916.call(null,G__19866_19917));
}catch (e19865){var e_19918 = e19865;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19915,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_19918], 0));
}

var G__19920 = seq__19823_19910;
var G__19921 = chunk__19824_19911;
var G__19922 = count__19825_19912;
var G__19923 = (i__19826_19913 + (1));
seq__19823_19910 = G__19920;
chunk__19824_19911 = G__19921;
count__19825_19912 = G__19922;
i__19826_19913 = G__19923;
continue;
} else {
var temp__5804__auto___19925 = cljs.core.seq(seq__19823_19910);
if(temp__5804__auto___19925){
var seq__19823_19927__$1 = temp__5804__auto___19925;
if(cljs.core.chunked_seq_QMARK_(seq__19823_19927__$1)){
var c__5568__auto___19928 = cljs.core.chunk_first(seq__19823_19927__$1);
var G__19929 = cljs.core.chunk_rest(seq__19823_19927__$1);
var G__19930 = c__5568__auto___19928;
var G__19931 = cljs.core.count(c__5568__auto___19928);
var G__19932 = (0);
seq__19823_19910 = G__19929;
chunk__19824_19911 = G__19930;
count__19825_19912 = G__19931;
i__19826_19913 = G__19932;
continue;
} else {
var vec__19870_19933 = cljs.core.first(seq__19823_19927__$1);
var k_19934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19870_19933,(0),null);
var cb_19935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19870_19933,(1),null);
try{var G__19876_19936 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces);
(cb_19935.cljs$core$IFn$_invoke$arity$1 ? cb_19935.cljs$core$IFn$_invoke$arity$1(G__19876_19936) : cb_19935.call(null,G__19876_19936));
}catch (e19875){var e_19937 = e19875;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19934,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_19937], 0));
}

var G__19939 = cljs.core.next(seq__19823_19927__$1);
var G__19940 = null;
var G__19941 = (0);
var G__19942 = (0);
seq__19823_19910 = G__19939;
chunk__19824_19911 = G__19940;
count__19825_19912 = G__19941;
i__19826_19913 = G__19942;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.js.map
