import "./cljs_env.js";
import "./cljs.core.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.js";
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20531 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20532 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20532);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20659 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20659)){
var new_db_20660 = temp__5804__auto___20659;
var fexpr__20551_20661 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20551_20661.cljs$core$IFn$_invoke$arity$1 ? fexpr__20551_20661.cljs$core$IFn$_invoke$arity$1(new_db_20660) : fexpr__20551_20661.call(null,new_db_20660));
} else {
}

var seq__20556 = cljs.core.seq(effects_without_db);
var chunk__20557 = null;
var count__20558 = (0);
var i__20559 = (0);
while(true){
if((i__20559 < count__20558)){
var vec__20576 = chunk__20557.cljs$core$IIndexed$_nth$arity$2(null,i__20559);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20576,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20576,(1),null);
var temp__5802__auto___20662 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20662)){
var effect_fn_20664 = temp__5802__auto___20662;
(effect_fn_20664.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20664.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20664.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20668 = seq__20556;
var G__20669 = chunk__20557;
var G__20670 = count__20558;
var G__20671 = (i__20559 + (1));
seq__20556 = G__20668;
chunk__20557 = G__20669;
count__20558 = G__20670;
i__20559 = G__20671;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20556);
if(temp__5804__auto__){
var seq__20556__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20556__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20556__$1);
var G__20672 = cljs.core.chunk_rest(seq__20556__$1);
var G__20673 = c__5568__auto__;
var G__20674 = cljs.core.count(c__5568__auto__);
var G__20675 = (0);
seq__20556 = G__20672;
chunk__20557 = G__20673;
count__20558 = G__20674;
i__20559 = G__20675;
continue;
} else {
var vec__20583 = cljs.core.first(seq__20556__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20583,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20583,(1),null);
var temp__5802__auto___20676 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20676)){
var effect_fn_20677 = temp__5802__auto___20676;
(effect_fn_20677.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20677.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20677.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20678 = cljs.core.next(seq__20556__$1);
var G__20679 = null;
var G__20680 = (0);
var G__20681 = (0);
seq__20556 = G__20678;
chunk__20557 = G__20679;
count__20558 = G__20680;
i__20559 = G__20681;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__19778__auto___20682 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__19779__auto___20683 = (end__19778__auto___20682 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19779__auto___20683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__19778__auto___20682);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20531);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20684 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20684)){
var new_db_20685 = temp__5804__auto___20684;
var fexpr__20590_20686 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20590_20686.cljs$core$IFn$_invoke$arity$1 ? fexpr__20590_20686.cljs$core$IFn$_invoke$arity$1(new_db_20685) : fexpr__20590_20686.call(null,new_db_20685));
} else {
}

var seq__20592 = cljs.core.seq(effects_without_db);
var chunk__20593 = null;
var count__20594 = (0);
var i__20595 = (0);
while(true){
if((i__20595 < count__20594)){
var vec__20604 = chunk__20593.cljs$core$IIndexed$_nth$arity$2(null,i__20595);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20604,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20604,(1),null);
var temp__5802__auto___20689 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20689)){
var effect_fn_20690 = temp__5802__auto___20689;
(effect_fn_20690.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20690.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20690.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20691 = seq__20592;
var G__20692 = chunk__20593;
var G__20693 = count__20594;
var G__20694 = (i__20595 + (1));
seq__20592 = G__20691;
chunk__20593 = G__20692;
count__20594 = G__20693;
i__20595 = G__20694;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20592);
if(temp__5804__auto__){
var seq__20592__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20592__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20592__$1);
var G__20695 = cljs.core.chunk_rest(seq__20592__$1);
var G__20696 = c__5568__auto__;
var G__20697 = cljs.core.count(c__5568__auto__);
var G__20698 = (0);
seq__20592 = G__20695;
chunk__20593 = G__20696;
count__20594 = G__20697;
i__20595 = G__20698;
continue;
} else {
var vec__20608 = cljs.core.first(seq__20592__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20608,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20608,(1),null);
var temp__5802__auto___20699 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20699)){
var effect_fn_20700 = temp__5802__auto___20699;
(effect_fn_20700.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20700.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20700.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20701 = cljs.core.next(seq__20592__$1);
var G__20702 = null;
var G__20703 = (0);
var G__20704 = (0);
seq__20592 = G__20701;
chunk__20593 = G__20702;
count__20594 = G__20703;
i__20595 = G__20704;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__20616){
var map__20617 = p__20616;
var map__20617__$1 = cljs.core.__destructure_map(map__20617);
var effect = map__20617__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__20619 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20620 = null;
var count__20621 = (0);
var i__20622 = (0);
while(true){
if((i__20622 < count__20621)){
var effect = chunk__20620.cljs$core$IIndexed$_nth$arity$2(null,i__20622);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__20709 = seq__20619;
var G__20710 = chunk__20620;
var G__20711 = count__20621;
var G__20712 = (i__20622 + (1));
seq__20619 = G__20709;
chunk__20620 = G__20710;
count__20621 = G__20711;
i__20622 = G__20712;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20619);
if(temp__5804__auto__){
var seq__20619__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20619__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20619__$1);
var G__20713 = cljs.core.chunk_rest(seq__20619__$1);
var G__20714 = c__5568__auto__;
var G__20715 = cljs.core.count(c__5568__auto__);
var G__20716 = (0);
seq__20619 = G__20713;
chunk__20620 = G__20714;
count__20621 = G__20715;
i__20622 = G__20716;
continue;
} else {
var effect = cljs.core.first(seq__20619__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__20717 = cljs.core.next(seq__20619__$1);
var G__20718 = null;
var G__20719 = (0);
var G__20720 = (0);
seq__20619 = G__20717;
chunk__20620 = G__20718;
count__20621 = G__20719;
i__20622 = G__20720;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20625 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20626 = null;
var count__20627 = (0);
var i__20628 = (0);
while(true){
if((i__20628 < count__20627)){
var vec__20637 = chunk__20626.cljs$core$IIndexed$_nth$arity$2(null,i__20628);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20637,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20637,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20721 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20721)){
var effect_fn_20722 = temp__5802__auto___20721;
(effect_fn_20722.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20722.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20722.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20723 = seq__20625;
var G__20724 = chunk__20626;
var G__20725 = count__20627;
var G__20726 = (i__20628 + (1));
seq__20625 = G__20723;
chunk__20626 = G__20724;
count__20627 = G__20725;
i__20628 = G__20726;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20625);
if(temp__5804__auto__){
var seq__20625__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20625__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20625__$1);
var G__20727 = cljs.core.chunk_rest(seq__20625__$1);
var G__20728 = c__5568__auto__;
var G__20729 = cljs.core.count(c__5568__auto__);
var G__20730 = (0);
seq__20625 = G__20727;
chunk__20626 = G__20728;
count__20627 = G__20729;
i__20628 = G__20730;
continue;
} else {
var vec__20641 = cljs.core.first(seq__20625__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20732 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20732)){
var effect_fn_20733 = temp__5802__auto___20732;
(effect_fn_20733.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20733.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20733.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20734 = cljs.core.next(seq__20625__$1);
var G__20735 = null;
var G__20736 = (0);
var G__20737 = (0);
seq__20625 = G__20734;
chunk__20626 = G__20735;
count__20627 = G__20736;
i__20628 = G__20737;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20645 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20646 = null;
var count__20647 = (0);
var i__20648 = (0);
while(true){
if((i__20648 < count__20647)){
var event = chunk__20646.cljs$core$IIndexed$_nth$arity$2(null,i__20648);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__20741 = seq__20645;
var G__20742 = chunk__20646;
var G__20743 = count__20647;
var G__20744 = (i__20648 + (1));
seq__20645 = G__20741;
chunk__20646 = G__20742;
count__20647 = G__20743;
i__20648 = G__20744;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20645);
if(temp__5804__auto__){
var seq__20645__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20645__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20645__$1);
var G__20745 = cljs.core.chunk_rest(seq__20645__$1);
var G__20746 = c__5568__auto__;
var G__20747 = cljs.core.count(c__5568__auto__);
var G__20748 = (0);
seq__20645 = G__20745;
chunk__20646 = G__20746;
count__20647 = G__20747;
i__20648 = G__20748;
continue;
} else {
var event = cljs.core.first(seq__20645__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__20749 = cljs.core.next(seq__20645__$1);
var G__20750 = null;
var G__20751 = (0);
var G__20752 = (0);
seq__20645 = G__20749;
chunk__20646 = G__20750;
count__20647 = G__20751;
i__20648 = G__20752;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20649 = cljs.core.seq(value);
var chunk__20650 = null;
var count__20651 = (0);
var i__20652 = (0);
while(true){
if((i__20652 < count__20651)){
var event = chunk__20650.cljs$core$IIndexed$_nth$arity$2(null,i__20652);
clear_event(event);


var G__20753 = seq__20649;
var G__20754 = chunk__20650;
var G__20755 = count__20651;
var G__20756 = (i__20652 + (1));
seq__20649 = G__20753;
chunk__20650 = G__20754;
count__20651 = G__20755;
i__20652 = G__20756;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20649);
if(temp__5804__auto__){
var seq__20649__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20649__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20649__$1);
var G__20757 = cljs.core.chunk_rest(seq__20649__$1);
var G__20758 = c__5568__auto__;
var G__20759 = cljs.core.count(c__5568__auto__);
var G__20760 = (0);
seq__20649 = G__20757;
chunk__20650 = G__20758;
count__20651 = G__20759;
i__20652 = G__20760;
continue;
} else {
var event = cljs.core.first(seq__20649__$1);
clear_event(event);


var G__20761 = cljs.core.next(seq__20649__$1);
var G__20762 = null;
var G__20763 = (0);
var G__20764 = (0);
seq__20649 = G__20761;
chunk__20650 = G__20762;
count__20651 = G__20763;
i__20652 = G__20764;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
