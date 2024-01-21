import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.remote.runtime.api.js";
goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__43290){
var map__43291 = p__43290;
var map__43291__$1 = cljs.core.__destructure_map(map__43291);
var runtime = map__43291__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43291__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_43543 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_43543)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__43298 = runtime;
var G__43299 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_43543);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__43298,G__43299) : shadow.remote.runtime.shared.process.call(null,G__43298,G__43299));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__43305,res){
var map__43306 = p__43305;
var map__43306__$1 = cljs.core.__destructure_map(map__43306);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__43307 = res;
var G__43307__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43307,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__43307);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43307__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__43307__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__43311 = arguments.length;
switch (G__43311) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__43317,msg,handlers,timeout_after_ms){
var map__43318 = p__43317;
var map__43318__$1 = cljs.core.__destructure_map(map__43318);
var runtime = map__43318__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43318__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43553 = arguments.length;
var i__5770__auto___43554 = (0);
while(true){
if((i__5770__auto___43554 < len__5769__auto___43553)){
args__5775__auto__.push((arguments[i__5770__auto___43554]));

var G__43555 = (i__5770__auto___43554 + (1));
i__5770__auto___43554 = G__43555;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__43331,ev,args){
var map__43332 = p__43331;
var map__43332__$1 = cljs.core.__destructure_map(map__43332);
var runtime = map__43332__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43332__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__43333 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43336 = null;
var count__43337 = (0);
var i__43338 = (0);
while(true){
if((i__43338 < count__43337)){
var ext = chunk__43336.cljs$core$IIndexed$_nth$arity$2(null,i__43338);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43556 = seq__43333;
var G__43557 = chunk__43336;
var G__43558 = count__43337;
var G__43559 = (i__43338 + (1));
seq__43333 = G__43556;
chunk__43336 = G__43557;
count__43337 = G__43558;
i__43338 = G__43559;
continue;
} else {
var G__43560 = seq__43333;
var G__43561 = chunk__43336;
var G__43562 = count__43337;
var G__43563 = (i__43338 + (1));
seq__43333 = G__43560;
chunk__43336 = G__43561;
count__43337 = G__43562;
i__43338 = G__43563;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43333);
if(temp__5804__auto__){
var seq__43333__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43333__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43333__$1);
var G__43564 = cljs.core.chunk_rest(seq__43333__$1);
var G__43565 = c__5568__auto__;
var G__43566 = cljs.core.count(c__5568__auto__);
var G__43567 = (0);
seq__43333 = G__43564;
chunk__43336 = G__43565;
count__43337 = G__43566;
i__43338 = G__43567;
continue;
} else {
var ext = cljs.core.first(seq__43333__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43568 = cljs.core.next(seq__43333__$1);
var G__43569 = null;
var G__43570 = (0);
var G__43571 = (0);
seq__43333 = G__43568;
chunk__43336 = G__43569;
count__43337 = G__43570;
i__43338 = G__43571;
continue;
} else {
var G__43572 = cljs.core.next(seq__43333__$1);
var G__43573 = null;
var G__43574 = (0);
var G__43575 = (0);
seq__43333 = G__43572;
chunk__43336 = G__43573;
count__43337 = G__43574;
i__43338 = G__43575;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq43323){
var G__43324 = cljs.core.first(seq43323);
var seq43323__$1 = cljs.core.next(seq43323);
var G__43325 = cljs.core.first(seq43323__$1);
var seq43323__$2 = cljs.core.next(seq43323__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43324,G__43325,seq43323__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__43350,p__43351){
var map__43352 = p__43350;
var map__43352__$1 = cljs.core.__destructure_map(map__43352);
var runtime = map__43352__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43352__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43353 = p__43351;
var map__43353__$1 = cljs.core.__destructure_map(map__43353);
var msg = map__43353__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43353__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__43355 = cljs.core.deref(state_ref);
var map__43355__$1 = cljs.core.__destructure_map(map__43355);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__43356,msg){
var map__43357 = p__43356;
var map__43357__$1 = cljs.core.__destructure_map(map__43357);
var runtime = map__43357__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43357__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__43363,key,p__43364){
var map__43366 = p__43363;
var map__43366__$1 = cljs.core.__destructure_map(map__43366);
var state = map__43366__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43366__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__43367 = p__43364;
var map__43367__$1 = cljs.core.__destructure_map(map__43367);
var spec = map__43367__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43367__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__43381,key,spec){
var map__43382 = p__43381;
var map__43382__$1 = cljs.core.__destructure_map(map__43382);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43382__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__43388_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__43388_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__43389_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__43389_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__43390_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__43390_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__43391_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__43391_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__43392_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__43392_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__43403,key){
var map__43404 = p__43403;
var map__43404__$1 = cljs.core.__destructure_map(map__43404);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43404__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__43405,msg){
var map__43409 = p__43405;
var map__43409__$1 = cljs.core.__destructure_map(map__43409);
var runtime = map__43409__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43409__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__43436,p__43437){
var map__43443 = p__43436;
var map__43443__$1 = cljs.core.__destructure_map(map__43443);
var runtime = map__43443__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43444 = p__43437;
var map__43444__$1 = cljs.core.__destructure_map(map__43444);
var msg = map__43444__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43444__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43444__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__43452 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43455 = null;
var count__43456 = (0);
var i__43457 = (0);
while(true){
if((i__43457 < count__43456)){
var map__43488 = chunk__43455.cljs$core$IIndexed$_nth$arity$2(null,i__43457);
var map__43488__$1 = cljs.core.__destructure_map(map__43488);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43488__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43609 = seq__43452;
var G__43610 = chunk__43455;
var G__43611 = count__43456;
var G__43612 = (i__43457 + (1));
seq__43452 = G__43609;
chunk__43455 = G__43610;
count__43456 = G__43611;
i__43457 = G__43612;
continue;
} else {
var G__43614 = seq__43452;
var G__43615 = chunk__43455;
var G__43616 = count__43456;
var G__43617 = (i__43457 + (1));
seq__43452 = G__43614;
chunk__43455 = G__43615;
count__43456 = G__43616;
i__43457 = G__43617;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43452);
if(temp__5804__auto__){
var seq__43452__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43452__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43452__$1);
var G__43618 = cljs.core.chunk_rest(seq__43452__$1);
var G__43619 = c__5568__auto__;
var G__43620 = cljs.core.count(c__5568__auto__);
var G__43621 = (0);
seq__43452 = G__43618;
chunk__43455 = G__43619;
count__43456 = G__43620;
i__43457 = G__43621;
continue;
} else {
var map__43495 = cljs.core.first(seq__43452__$1);
var map__43495__$1 = cljs.core.__destructure_map(map__43495);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43495__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43623 = cljs.core.next(seq__43452__$1);
var G__43624 = null;
var G__43625 = (0);
var G__43626 = (0);
seq__43452 = G__43623;
chunk__43455 = G__43624;
count__43456 = G__43625;
i__43457 = G__43626;
continue;
} else {
var G__43627 = cljs.core.next(seq__43452__$1);
var G__43628 = null;
var G__43629 = (0);
var G__43630 = (0);
seq__43452 = G__43627;
chunk__43455 = G__43628;
count__43456 = G__43629;
i__43457 = G__43630;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
