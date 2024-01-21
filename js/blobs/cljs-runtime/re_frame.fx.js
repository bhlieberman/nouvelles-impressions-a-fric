import "./cljs_env.js";
import "./cljs.core.js";
import "./re_frame.router.js";
import "./re_frame.db.js";
import "./re_frame.interceptor.js";
import "./re_frame.interop.js";
import "./re_frame.events.js";
import "./re_frame.registrar.js";
import "./re_frame.loggers.js";
import "./re_frame.trace.js";
goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__33864 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33865 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33865);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___34063 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___34063)){
var new_db_34065 = temp__5804__auto___34063;
var fexpr__33875_34066 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33875_34066.cljs$core$IFn$_invoke$arity$1 ? fexpr__33875_34066.cljs$core$IFn$_invoke$arity$1(new_db_34065) : fexpr__33875_34066.call(null,new_db_34065));
} else {
}

var seq__33882 = cljs.core.seq(effects_without_db);
var chunk__33883 = null;
var count__33884 = (0);
var i__33885 = (0);
while(true){
if((i__33885 < count__33884)){
var vec__33895 = chunk__33883.cljs$core$IIndexed$_nth$arity$2(null,i__33885);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(1),null);
var temp__5802__auto___34067 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___34067)){
var effect_fn_34068 = temp__5802__auto___34067;
(effect_fn_34068.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34068.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34068.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34069 = seq__33882;
var G__34070 = chunk__33883;
var G__34071 = count__33884;
var G__34072 = (i__33885 + (1));
seq__33882 = G__34069;
chunk__33883 = G__34070;
count__33884 = G__34071;
i__33885 = G__34072;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33882);
if(temp__5804__auto__){
var seq__33882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33882__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33882__$1);
var G__34073 = cljs.core.chunk_rest(seq__33882__$1);
var G__34074 = c__5568__auto__;
var G__34075 = cljs.core.count(c__5568__auto__);
var G__34076 = (0);
seq__33882 = G__34073;
chunk__33883 = G__34074;
count__33884 = G__34075;
i__33885 = G__34076;
continue;
} else {
var vec__33903 = cljs.core.first(seq__33882__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33903,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33903,(1),null);
var temp__5802__auto___34078 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___34078)){
var effect_fn_34079 = temp__5802__auto___34078;
(effect_fn_34079.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34079.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34079.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34080 = cljs.core.next(seq__33882__$1);
var G__34081 = null;
var G__34082 = (0);
var G__34083 = (0);
seq__33882 = G__34080;
chunk__33883 = G__34081;
count__33884 = G__34082;
i__33885 = G__34083;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16864__auto___34084 = re_frame.interop.now();
var duration__16865__auto___34085 = (end__16864__auto___34084 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16865__auto___34085,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16864__auto___34084);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33864);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___34086 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___34086)){
var new_db_34087 = temp__5804__auto___34086;
var fexpr__33907_34088 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33907_34088.cljs$core$IFn$_invoke$arity$1 ? fexpr__33907_34088.cljs$core$IFn$_invoke$arity$1(new_db_34087) : fexpr__33907_34088.call(null,new_db_34087));
} else {
}

var seq__33914 = cljs.core.seq(effects_without_db);
var chunk__33915 = null;
var count__33916 = (0);
var i__33917 = (0);
while(true){
if((i__33917 < count__33916)){
var vec__33938 = chunk__33915.cljs$core$IIndexed$_nth$arity$2(null,i__33917);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33938,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33938,(1),null);
var temp__5802__auto___34089 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___34089)){
var effect_fn_34090 = temp__5802__auto___34089;
(effect_fn_34090.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34090.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34090.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34091 = seq__33914;
var G__34092 = chunk__33915;
var G__34093 = count__33916;
var G__34094 = (i__33917 + (1));
seq__33914 = G__34091;
chunk__33915 = G__34092;
count__33916 = G__34093;
i__33917 = G__34094;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33914);
if(temp__5804__auto__){
var seq__33914__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33914__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33914__$1);
var G__34095 = cljs.core.chunk_rest(seq__33914__$1);
var G__34096 = c__5568__auto__;
var G__34097 = cljs.core.count(c__5568__auto__);
var G__34098 = (0);
seq__33914 = G__34095;
chunk__33915 = G__34096;
count__33916 = G__34097;
i__33917 = G__34098;
continue;
} else {
var vec__33944 = cljs.core.first(seq__33914__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33944,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33944,(1),null);
var temp__5802__auto___34101 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___34101)){
var effect_fn_34102 = temp__5802__auto___34101;
(effect_fn_34102.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34102.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34102.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34103 = cljs.core.next(seq__33914__$1);
var G__34104 = null;
var G__34105 = (0);
var G__34106 = (0);
seq__33914 = G__34103;
chunk__33915 = G__34104;
count__33916 = G__34105;
i__33917 = G__34106;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__33951){
var map__33953 = p__33951;
var map__33953__$1 = cljs.core.__destructure_map(map__33953);
var effect = map__33953__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__33961 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33962 = null;
var count__33963 = (0);
var i__33964 = (0);
while(true){
if((i__33964 < count__33963)){
var effect = chunk__33962.cljs$core$IIndexed$_nth$arity$2(null,i__33964);
re_frame.fx.dispatch_later(effect);


var G__34118 = seq__33961;
var G__34119 = chunk__33962;
var G__34120 = count__33963;
var G__34121 = (i__33964 + (1));
seq__33961 = G__34118;
chunk__33962 = G__34119;
count__33963 = G__34120;
i__33964 = G__34121;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33961);
if(temp__5804__auto__){
var seq__33961__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33961__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33961__$1);
var G__34122 = cljs.core.chunk_rest(seq__33961__$1);
var G__34123 = c__5568__auto__;
var G__34124 = cljs.core.count(c__5568__auto__);
var G__34125 = (0);
seq__33961 = G__34122;
chunk__33962 = G__34123;
count__33963 = G__34124;
i__33964 = G__34125;
continue;
} else {
var effect = cljs.core.first(seq__33961__$1);
re_frame.fx.dispatch_later(effect);


var G__34126 = cljs.core.next(seq__33961__$1);
var G__34127 = null;
var G__34128 = (0);
var G__34129 = (0);
seq__33961 = G__34126;
chunk__33962 = G__34127;
count__33963 = G__34128;
i__33964 = G__34129;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__33972 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__33973 = null;
var count__33974 = (0);
var i__33975 = (0);
while(true){
if((i__33975 < count__33974)){
var vec__34004 = chunk__33973.cljs$core$IIndexed$_nth$arity$2(null,i__33975);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34004,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34004,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___34134 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___34134)){
var effect_fn_34135 = temp__5802__auto___34134;
(effect_fn_34135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34135.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34136 = seq__33972;
var G__34137 = chunk__33973;
var G__34138 = count__33974;
var G__34139 = (i__33975 + (1));
seq__33972 = G__34136;
chunk__33973 = G__34137;
count__33974 = G__34138;
i__33975 = G__34139;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33972);
if(temp__5804__auto__){
var seq__33972__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33972__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33972__$1);
var G__34140 = cljs.core.chunk_rest(seq__33972__$1);
var G__34141 = c__5568__auto__;
var G__34142 = cljs.core.count(c__5568__auto__);
var G__34143 = (0);
seq__33972 = G__34140;
chunk__33973 = G__34141;
count__33974 = G__34142;
i__33975 = G__34143;
continue;
} else {
var vec__34010 = cljs.core.first(seq__33972__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34010,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34010,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___34145 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___34145)){
var effect_fn_34146 = temp__5802__auto___34145;
(effect_fn_34146.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34146.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34146.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34149 = cljs.core.next(seq__33972__$1);
var G__34150 = null;
var G__34151 = (0);
var G__34152 = (0);
seq__33972 = G__34149;
chunk__33973 = G__34150;
count__33974 = G__34151;
i__33975 = G__34152;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__34023 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34024 = null;
var count__34025 = (0);
var i__34026 = (0);
while(true){
if((i__34026 < count__34025)){
var event = chunk__34024.cljs$core$IIndexed$_nth$arity$2(null,i__34026);
re_frame.router.dispatch(event);


var G__34158 = seq__34023;
var G__34159 = chunk__34024;
var G__34160 = count__34025;
var G__34161 = (i__34026 + (1));
seq__34023 = G__34158;
chunk__34024 = G__34159;
count__34025 = G__34160;
i__34026 = G__34161;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34023);
if(temp__5804__auto__){
var seq__34023__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34023__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34023__$1);
var G__34163 = cljs.core.chunk_rest(seq__34023__$1);
var G__34164 = c__5568__auto__;
var G__34165 = cljs.core.count(c__5568__auto__);
var G__34166 = (0);
seq__34023 = G__34163;
chunk__34024 = G__34164;
count__34025 = G__34165;
i__34026 = G__34166;
continue;
} else {
var event = cljs.core.first(seq__34023__$1);
re_frame.router.dispatch(event);


var G__34168 = cljs.core.next(seq__34023__$1);
var G__34169 = null;
var G__34170 = (0);
var G__34171 = (0);
seq__34023 = G__34168;
chunk__34024 = G__34169;
count__34025 = G__34170;
i__34026 = G__34171;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__34042 = cljs.core.seq(value);
var chunk__34043 = null;
var count__34044 = (0);
var i__34045 = (0);
while(true){
if((i__34045 < count__34044)){
var event = chunk__34043.cljs$core$IIndexed$_nth$arity$2(null,i__34045);
clear_event(event);


var G__34173 = seq__34042;
var G__34174 = chunk__34043;
var G__34175 = count__34044;
var G__34176 = (i__34045 + (1));
seq__34042 = G__34173;
chunk__34043 = G__34174;
count__34044 = G__34175;
i__34045 = G__34176;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34042);
if(temp__5804__auto__){
var seq__34042__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34042__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34042__$1);
var G__34178 = cljs.core.chunk_rest(seq__34042__$1);
var G__34179 = c__5568__auto__;
var G__34180 = cljs.core.count(c__5568__auto__);
var G__34181 = (0);
seq__34042 = G__34178;
chunk__34043 = G__34179;
count__34044 = G__34180;
i__34045 = G__34181;
continue;
} else {
var event = cljs.core.first(seq__34042__$1);
clear_event(event);


var G__34186 = cljs.core.next(seq__34042__$1);
var G__34187 = null;
var G__34188 = (0);
var G__34189 = (0);
seq__34042 = G__34186;
chunk__34043 = G__34187;
count__34044 = G__34188;
i__34045 = G__34189;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__34048 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34049 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34049);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16864__auto___34191 = re_frame.interop.now();
var duration__16865__auto___34192 = (end__16864__auto___34191 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16865__auto___34192,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16864__auto___34191);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34048);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
