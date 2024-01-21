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
var _STAR_current_trace_STAR__orig_val__24921 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24922 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24922);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___25130 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___25130)){
var new_db_25131 = temp__5804__auto___25130;
var fexpr__24929_25132 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24929_25132.cljs$core$IFn$_invoke$arity$1 ? fexpr__24929_25132.cljs$core$IFn$_invoke$arity$1(new_db_25131) : fexpr__24929_25132.call(null,new_db_25131));
} else {
}

var seq__24931 = cljs.core.seq(effects_without_db);
var chunk__24932 = null;
var count__24933 = (0);
var i__24934 = (0);
while(true){
if((i__24934 < count__24933)){
var vec__24953 = chunk__24932.cljs$core$IIndexed$_nth$arity$2(null,i__24934);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24953,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24953,(1),null);
var temp__5802__auto___25137 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25137)){
var effect_fn_25140 = temp__5802__auto___25137;
(effect_fn_25140.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25140.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25140.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25141 = seq__24931;
var G__25142 = chunk__24932;
var G__25143 = count__24933;
var G__25144 = (i__24934 + (1));
seq__24931 = G__25141;
chunk__24932 = G__25142;
count__24933 = G__25143;
i__24934 = G__25144;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24931);
if(temp__5804__auto__){
var seq__24931__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24931__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24931__$1);
var G__25145 = cljs.core.chunk_rest(seq__24931__$1);
var G__25146 = c__5568__auto__;
var G__25147 = cljs.core.count(c__5568__auto__);
var G__25148 = (0);
seq__24931 = G__25145;
chunk__24932 = G__25146;
count__24933 = G__25147;
i__24934 = G__25148;
continue;
} else {
var vec__24959 = cljs.core.first(seq__24931__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24959,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24959,(1),null);
var temp__5802__auto___25149 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25149)){
var effect_fn_25150 = temp__5802__auto___25149;
(effect_fn_25150.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25150.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25150.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25151 = cljs.core.next(seq__24931__$1);
var G__25152 = null;
var G__25153 = (0);
var G__25154 = (0);
seq__24931 = G__25151;
chunk__24932 = G__25152;
count__24933 = G__25153;
i__24934 = G__25154;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23839__auto___25155 = re_frame.interop.now();
var duration__23840__auto___25156 = (end__23839__auto___25155 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23840__auto___25156,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23839__auto___25155);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24921);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___25158 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___25158)){
var new_db_25159 = temp__5804__auto___25158;
var fexpr__24964_25160 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24964_25160.cljs$core$IFn$_invoke$arity$1 ? fexpr__24964_25160.cljs$core$IFn$_invoke$arity$1(new_db_25159) : fexpr__24964_25160.call(null,new_db_25159));
} else {
}

var seq__24969 = cljs.core.seq(effects_without_db);
var chunk__24970 = null;
var count__24971 = (0);
var i__24972 = (0);
while(true){
if((i__24972 < count__24971)){
var vec__24992 = chunk__24970.cljs$core$IIndexed$_nth$arity$2(null,i__24972);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24992,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24992,(1),null);
var temp__5802__auto___25161 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25161)){
var effect_fn_25162 = temp__5802__auto___25161;
(effect_fn_25162.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25162.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25162.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25163 = seq__24969;
var G__25164 = chunk__24970;
var G__25165 = count__24971;
var G__25166 = (i__24972 + (1));
seq__24969 = G__25163;
chunk__24970 = G__25164;
count__24971 = G__25165;
i__24972 = G__25166;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24969);
if(temp__5804__auto__){
var seq__24969__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24969__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24969__$1);
var G__25167 = cljs.core.chunk_rest(seq__24969__$1);
var G__25168 = c__5568__auto__;
var G__25169 = cljs.core.count(c__5568__auto__);
var G__25170 = (0);
seq__24969 = G__25167;
chunk__24970 = G__25168;
count__24971 = G__25169;
i__24972 = G__25170;
continue;
} else {
var vec__24999 = cljs.core.first(seq__24969__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24999,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24999,(1),null);
var temp__5802__auto___25171 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25171)){
var effect_fn_25172 = temp__5802__auto___25171;
(effect_fn_25172.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25172.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25172.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25173 = cljs.core.next(seq__24969__$1);
var G__25174 = null;
var G__25175 = (0);
var G__25176 = (0);
seq__24969 = G__25173;
chunk__24970 = G__25174;
count__24971 = G__25175;
i__24972 = G__25176;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__25006){
var map__25008 = p__25006;
var map__25008__$1 = cljs.core.__destructure_map(map__25008);
var effect = map__25008__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25008__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25008__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__25015 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25016 = null;
var count__25017 = (0);
var i__25018 = (0);
while(true){
if((i__25018 < count__25017)){
var effect = chunk__25016.cljs$core$IIndexed$_nth$arity$2(null,i__25018);
re_frame.fx.dispatch_later(effect);


var G__25181 = seq__25015;
var G__25182 = chunk__25016;
var G__25183 = count__25017;
var G__25184 = (i__25018 + (1));
seq__25015 = G__25181;
chunk__25016 = G__25182;
count__25017 = G__25183;
i__25018 = G__25184;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25015);
if(temp__5804__auto__){
var seq__25015__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25015__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25015__$1);
var G__25185 = cljs.core.chunk_rest(seq__25015__$1);
var G__25186 = c__5568__auto__;
var G__25187 = cljs.core.count(c__5568__auto__);
var G__25188 = (0);
seq__25015 = G__25185;
chunk__25016 = G__25186;
count__25017 = G__25187;
i__25018 = G__25188;
continue;
} else {
var effect = cljs.core.first(seq__25015__$1);
re_frame.fx.dispatch_later(effect);


var G__25189 = cljs.core.next(seq__25015__$1);
var G__25190 = null;
var G__25191 = (0);
var G__25192 = (0);
seq__25015 = G__25189;
chunk__25016 = G__25190;
count__25017 = G__25191;
i__25018 = G__25192;
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
var seq__25029 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__25030 = null;
var count__25031 = (0);
var i__25032 = (0);
while(true){
if((i__25032 < count__25031)){
var vec__25050 = chunk__25030.cljs$core$IIndexed$_nth$arity$2(null,i__25032);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25050,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25050,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___25195 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25195)){
var effect_fn_25196 = temp__5802__auto___25195;
(effect_fn_25196.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25196.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25196.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25197 = seq__25029;
var G__25198 = chunk__25030;
var G__25199 = count__25031;
var G__25200 = (i__25032 + (1));
seq__25029 = G__25197;
chunk__25030 = G__25198;
count__25031 = G__25199;
i__25032 = G__25200;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25029);
if(temp__5804__auto__){
var seq__25029__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25029__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25029__$1);
var G__25201 = cljs.core.chunk_rest(seq__25029__$1);
var G__25202 = c__5568__auto__;
var G__25203 = cljs.core.count(c__5568__auto__);
var G__25204 = (0);
seq__25029 = G__25201;
chunk__25030 = G__25202;
count__25031 = G__25203;
i__25032 = G__25204;
continue;
} else {
var vec__25066 = cljs.core.first(seq__25029__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25066,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25066,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___25206 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25206)){
var effect_fn_25207 = temp__5802__auto___25206;
(effect_fn_25207.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25207.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25207.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25208 = cljs.core.next(seq__25029__$1);
var G__25209 = null;
var G__25210 = (0);
var G__25211 = (0);
seq__25029 = G__25208;
chunk__25030 = G__25209;
count__25031 = G__25210;
i__25032 = G__25211;
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
var seq__25087 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25088 = null;
var count__25090 = (0);
var i__25091 = (0);
while(true){
if((i__25091 < count__25090)){
var event = chunk__25088.cljs$core$IIndexed$_nth$arity$2(null,i__25091);
re_frame.router.dispatch(event);


var G__25213 = seq__25087;
var G__25214 = chunk__25088;
var G__25215 = count__25090;
var G__25216 = (i__25091 + (1));
seq__25087 = G__25213;
chunk__25088 = G__25214;
count__25090 = G__25215;
i__25091 = G__25216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25087);
if(temp__5804__auto__){
var seq__25087__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25087__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25087__$1);
var G__25217 = cljs.core.chunk_rest(seq__25087__$1);
var G__25218 = c__5568__auto__;
var G__25219 = cljs.core.count(c__5568__auto__);
var G__25220 = (0);
seq__25087 = G__25217;
chunk__25088 = G__25218;
count__25090 = G__25219;
i__25091 = G__25220;
continue;
} else {
var event = cljs.core.first(seq__25087__$1);
re_frame.router.dispatch(event);


var G__25222 = cljs.core.next(seq__25087__$1);
var G__25223 = null;
var G__25224 = (0);
var G__25225 = (0);
seq__25087 = G__25222;
chunk__25088 = G__25223;
count__25090 = G__25224;
i__25091 = G__25225;
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
var seq__25110 = cljs.core.seq(value);
var chunk__25111 = null;
var count__25112 = (0);
var i__25113 = (0);
while(true){
if((i__25113 < count__25112)){
var event = chunk__25111.cljs$core$IIndexed$_nth$arity$2(null,i__25113);
clear_event(event);


var G__25226 = seq__25110;
var G__25227 = chunk__25111;
var G__25228 = count__25112;
var G__25229 = (i__25113 + (1));
seq__25110 = G__25226;
chunk__25111 = G__25227;
count__25112 = G__25228;
i__25113 = G__25229;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25110);
if(temp__5804__auto__){
var seq__25110__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25110__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25110__$1);
var G__25230 = cljs.core.chunk_rest(seq__25110__$1);
var G__25231 = c__5568__auto__;
var G__25232 = cljs.core.count(c__5568__auto__);
var G__25233 = (0);
seq__25110 = G__25230;
chunk__25111 = G__25231;
count__25112 = G__25232;
i__25113 = G__25233;
continue;
} else {
var event = cljs.core.first(seq__25110__$1);
clear_event(event);


var G__25234 = cljs.core.next(seq__25110__$1);
var G__25235 = null;
var G__25236 = (0);
var G__25237 = (0);
seq__25110 = G__25234;
chunk__25111 = G__25235;
count__25112 = G__25236;
i__25113 = G__25237;
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
var _STAR_current_trace_STAR__orig_val__25121 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25122 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25122);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23839__auto___25246 = re_frame.interop.now();
var duration__23840__auto___25247 = (end__23839__auto___25246 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23840__auto___25247,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23839__auto___25246);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25121);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
