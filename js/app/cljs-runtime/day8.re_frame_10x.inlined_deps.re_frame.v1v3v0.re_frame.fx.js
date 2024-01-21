import "./cljs_env.js";
import "./cljs.core.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interceptor.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.events.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.js";
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v3v0.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16637 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16638 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16638);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16804 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16804)){
var new_db_16805 = temp__5804__auto___16804;
var fexpr__16641_16806 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16641_16806.cljs$core$IFn$_invoke$arity$1 ? fexpr__16641_16806.cljs$core$IFn$_invoke$arity$1(new_db_16805) : fexpr__16641_16806.call(null,new_db_16805));
} else {
}

var seq__16642 = cljs.core.seq(effects_without_db);
var chunk__16643 = null;
var count__16644 = (0);
var i__16645 = (0);
while(true){
if((i__16645 < count__16644)){
var vec__16662 = chunk__16643.cljs$core$IIndexed$_nth$arity$2(null,i__16645);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16662,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16662,(1),null);
var temp__5802__auto___16808 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16808)){
var effect_fn_16809 = temp__5802__auto___16808;
(effect_fn_16809.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16809.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16809.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16810 = seq__16642;
var G__16811 = chunk__16643;
var G__16812 = count__16644;
var G__16813 = (i__16645 + (1));
seq__16642 = G__16810;
chunk__16643 = G__16811;
count__16644 = G__16812;
i__16645 = G__16813;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16642);
if(temp__5804__auto__){
var seq__16642__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16642__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16642__$1);
var G__16814 = cljs.core.chunk_rest(seq__16642__$1);
var G__16815 = c__5568__auto__;
var G__16816 = cljs.core.count(c__5568__auto__);
var G__16817 = (0);
seq__16642 = G__16814;
chunk__16643 = G__16815;
count__16644 = G__16816;
i__16645 = G__16817;
continue;
} else {
var vec__16665 = cljs.core.first(seq__16642__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(1),null);
var temp__5802__auto___16819 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16819)){
var effect_fn_16820 = temp__5802__auto___16819;
(effect_fn_16820.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16820.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16820.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16824 = cljs.core.next(seq__16642__$1);
var G__16825 = null;
var G__16826 = (0);
var G__16827 = (0);
seq__16642 = G__16824;
chunk__16643 = G__16825;
count__16644 = G__16826;
i__16645 = G__16827;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__15288__auto___16828 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now();
var duration__15289__auto___16829 = (end__15288__auto___16828 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15289__auto___16829,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_(end__15288__auto___16828);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16637);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16830 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16830)){
var new_db_16831 = temp__5804__auto___16830;
var fexpr__16674_16832 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16674_16832.cljs$core$IFn$_invoke$arity$1 ? fexpr__16674_16832.cljs$core$IFn$_invoke$arity$1(new_db_16831) : fexpr__16674_16832.call(null,new_db_16831));
} else {
}

var seq__16675 = cljs.core.seq(effects_without_db);
var chunk__16676 = null;
var count__16677 = (0);
var i__16678 = (0);
while(true){
if((i__16678 < count__16677)){
var vec__16690 = chunk__16676.cljs$core$IIndexed$_nth$arity$2(null,i__16678);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16690,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16690,(1),null);
var temp__5802__auto___16833 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16833)){
var effect_fn_16834 = temp__5802__auto___16833;
(effect_fn_16834.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16834.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16834.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16835 = seq__16675;
var G__16836 = chunk__16676;
var G__16837 = count__16677;
var G__16838 = (i__16678 + (1));
seq__16675 = G__16835;
chunk__16676 = G__16836;
count__16677 = G__16837;
i__16678 = G__16838;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16675);
if(temp__5804__auto__){
var seq__16675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16675__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16675__$1);
var G__16839 = cljs.core.chunk_rest(seq__16675__$1);
var G__16840 = c__5568__auto__;
var G__16841 = cljs.core.count(c__5568__auto__);
var G__16842 = (0);
seq__16675 = G__16839;
chunk__16676 = G__16840;
count__16677 = G__16841;
i__16678 = G__16842;
continue;
} else {
var vec__16698 = cljs.core.first(seq__16675__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16698,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16698,(1),null);
var temp__5802__auto___16844 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16844)){
var effect_fn_16846 = temp__5802__auto___16844;
(effect_fn_16846.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16846.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16846.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16847 = cljs.core.next(seq__16675__$1);
var G__16848 = null;
var G__16849 = (0);
var G__16850 = (0);
seq__16675 = G__16847;
chunk__16676 = G__16848;
count__16677 = G__16849;
i__16678 = G__16850;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$dispatch_later(p__16709){
var map__16710 = p__16709;
var map__16710__$1 = cljs.core.__destructure_map(map__16710);
var effect = map__16710__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16710__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16710__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(value);
} else {
var seq__16716 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16717 = null;
var count__16718 = (0);
var i__16719 = (0);
while(true){
if((i__16719 < count__16718)){
var effect = chunk__16717.cljs$core$IIndexed$_nth$arity$2(null,i__16719);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__16857 = seq__16716;
var G__16858 = chunk__16717;
var G__16859 = count__16718;
var G__16860 = (i__16719 + (1));
seq__16716 = G__16857;
chunk__16717 = G__16858;
count__16718 = G__16859;
i__16719 = G__16860;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16716);
if(temp__5804__auto__){
var seq__16716__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16716__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16716__$1);
var G__16861 = cljs.core.chunk_rest(seq__16716__$1);
var G__16862 = c__5568__auto__;
var G__16863 = cljs.core.count(c__5568__auto__);
var G__16864 = (0);
seq__16716 = G__16861;
chunk__16717 = G__16862;
count__16718 = G__16863;
i__16719 = G__16864;
continue;
} else {
var effect = cljs.core.first(seq__16716__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__16865 = cljs.core.next(seq__16716__$1);
var G__16866 = null;
var G__16867 = (0);
var G__16868 = (0);
seq__16716 = G__16865;
chunk__16717 = G__16866;
count__16718 = G__16867;
i__16719 = G__16868;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__16727 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16728 = null;
var count__16729 = (0);
var i__16730 = (0);
while(true){
if((i__16730 < count__16729)){
var vec__16753 = chunk__16728.cljs$core$IIndexed$_nth$arity$2(null,i__16730);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16871 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16871)){
var effect_fn_16872 = temp__5802__auto___16871;
(effect_fn_16872.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16872.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16872.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16874 = seq__16727;
var G__16875 = chunk__16728;
var G__16876 = count__16729;
var G__16877 = (i__16730 + (1));
seq__16727 = G__16874;
chunk__16728 = G__16875;
count__16729 = G__16876;
i__16730 = G__16877;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16727);
if(temp__5804__auto__){
var seq__16727__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16727__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16727__$1);
var G__16878 = cljs.core.chunk_rest(seq__16727__$1);
var G__16879 = c__5568__auto__;
var G__16880 = cljs.core.count(c__5568__auto__);
var G__16881 = (0);
seq__16727 = G__16878;
chunk__16728 = G__16879;
count__16729 = G__16880;
i__16730 = G__16881;
continue;
} else {
var vec__16761 = cljs.core.first(seq__16727__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16883 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16883)){
var effect_fn_16885 = temp__5802__auto___16883;
(effect_fn_16885.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16885.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16885.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16886 = cljs.core.next(seq__16727__$1);
var G__16887 = null;
var G__16888 = (0);
var G__16889 = (0);
seq__16727 = G__16886;
chunk__16728 = G__16887;
count__16729 = G__16888;
i__16730 = G__16889;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__16771 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16772 = null;
var count__16773 = (0);
var i__16774 = (0);
while(true){
if((i__16774 < count__16773)){
var event = chunk__16772.cljs$core$IIndexed$_nth$arity$2(null,i__16774);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__16890 = seq__16771;
var G__16891 = chunk__16772;
var G__16892 = count__16773;
var G__16893 = (i__16774 + (1));
seq__16771 = G__16890;
chunk__16772 = G__16891;
count__16773 = G__16892;
i__16774 = G__16893;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16771);
if(temp__5804__auto__){
var seq__16771__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16771__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16771__$1);
var G__16894 = cljs.core.chunk_rest(seq__16771__$1);
var G__16895 = c__5568__auto__;
var G__16896 = cljs.core.count(c__5568__auto__);
var G__16897 = (0);
seq__16771 = G__16894;
chunk__16772 = G__16895;
count__16773 = G__16896;
i__16774 = G__16897;
continue;
} else {
var event = cljs.core.first(seq__16771__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__16898 = cljs.core.next(seq__16771__$1);
var G__16899 = null;
var G__16900 = (0);
var G__16901 = (0);
seq__16771 = G__16898;
chunk__16772 = G__16899;
count__16773 = G__16900;
i__16774 = G__16901;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16787 = cljs.core.seq(value);
var chunk__16788 = null;
var count__16789 = (0);
var i__16790 = (0);
while(true){
if((i__16790 < count__16789)){
var event = chunk__16788.cljs$core$IIndexed$_nth$arity$2(null,i__16790);
clear_event(event);


var G__16902 = seq__16787;
var G__16903 = chunk__16788;
var G__16904 = count__16789;
var G__16905 = (i__16790 + (1));
seq__16787 = G__16902;
chunk__16788 = G__16903;
count__16789 = G__16904;
i__16790 = G__16905;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16787);
if(temp__5804__auto__){
var seq__16787__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16787__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16787__$1);
var G__16909 = cljs.core.chunk_rest(seq__16787__$1);
var G__16910 = c__5568__auto__;
var G__16911 = cljs.core.count(c__5568__auto__);
var G__16912 = (0);
seq__16787 = G__16909;
chunk__16788 = G__16910;
count__16789 = G__16911;
i__16790 = G__16912;
continue;
} else {
var event = cljs.core.first(seq__16787__$1);
clear_event(event);


var G__16914 = cljs.core.next(seq__16787__$1);
var G__16915 = null;
var G__16916 = (0);
var G__16917 = (0);
seq__16787 = G__16914;
chunk__16788 = G__16915;
count__16789 = G__16916;
i__16790 = G__16917;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.js.map
