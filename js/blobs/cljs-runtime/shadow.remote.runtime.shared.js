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
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28775){
var map__28777 = p__28775;
var map__28777__$1 = cljs.core.__destructure_map(map__28777);
var runtime = map__28777__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28777__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_28977 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_28977)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28784 = runtime;
var G__28785 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_28977);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28784,G__28785) : shadow.remote.runtime.shared.process.call(null,G__28784,G__28785));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28789,res){
var map__28791 = p__28789;
var map__28791__$1 = cljs.core.__destructure_map(map__28791);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28791__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28791__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28793 = res;
var G__28793__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28793,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28793);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28793__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28793__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28800 = arguments.length;
switch (G__28800) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28811,msg,handlers,timeout_after_ms){
var map__28817 = p__28811;
var map__28817__$1 = cljs.core.__destructure_map(map__28817);
var runtime = map__28817__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28817__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5769__auto___28994 = arguments.length;
var i__5770__auto___28995 = (0);
while(true){
if((i__5770__auto___28995 < len__5769__auto___28994)){
args__5775__auto__.push((arguments[i__5770__auto___28995]));

var G__29000 = (i__5770__auto___28995 + (1));
i__5770__auto___28995 = G__29000;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28833,ev,args){
var map__28834 = p__28833;
var map__28834__$1 = cljs.core.__destructure_map(map__28834);
var runtime = map__28834__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28834__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28836 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28840 = null;
var count__28841 = (0);
var i__28842 = (0);
while(true){
if((i__28842 < count__28841)){
var ext = chunk__28840.cljs$core$IIndexed$_nth$arity$2(null,i__28842);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29011 = seq__28836;
var G__29012 = chunk__28840;
var G__29013 = count__28841;
var G__29014 = (i__28842 + (1));
seq__28836 = G__29011;
chunk__28840 = G__29012;
count__28841 = G__29013;
i__28842 = G__29014;
continue;
} else {
var G__29015 = seq__28836;
var G__29016 = chunk__28840;
var G__29017 = count__28841;
var G__29018 = (i__28842 + (1));
seq__28836 = G__29015;
chunk__28840 = G__29016;
count__28841 = G__29017;
i__28842 = G__29018;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28836);
if(temp__5804__auto__){
var seq__28836__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28836__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28836__$1);
var G__29019 = cljs.core.chunk_rest(seq__28836__$1);
var G__29020 = c__5568__auto__;
var G__29021 = cljs.core.count(c__5568__auto__);
var G__29022 = (0);
seq__28836 = G__29019;
chunk__28840 = G__29020;
count__28841 = G__29021;
i__28842 = G__29022;
continue;
} else {
var ext = cljs.core.first(seq__28836__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29027 = cljs.core.next(seq__28836__$1);
var G__29028 = null;
var G__29029 = (0);
var G__29030 = (0);
seq__28836 = G__29027;
chunk__28840 = G__29028;
count__28841 = G__29029;
i__28842 = G__29030;
continue;
} else {
var G__29031 = cljs.core.next(seq__28836__$1);
var G__29032 = null;
var G__29033 = (0);
var G__29034 = (0);
seq__28836 = G__29031;
chunk__28840 = G__29032;
count__28841 = G__29033;
i__28842 = G__29034;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28825){
var G__28827 = cljs.core.first(seq28825);
var seq28825__$1 = cljs.core.next(seq28825);
var G__28828 = cljs.core.first(seq28825__$1);
var seq28825__$2 = cljs.core.next(seq28825__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28827,G__28828,seq28825__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28861,p__28862){
var map__28863 = p__28861;
var map__28863__$1 = cljs.core.__destructure_map(map__28863);
var runtime = map__28863__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28863__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28864 = p__28862;
var map__28864__$1 = cljs.core.__destructure_map(map__28864);
var msg = map__28864__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28864__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__28870 = cljs.core.deref(state_ref);
var map__28870__$1 = cljs.core.__destructure_map(map__28870);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28870__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28870__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28881,msg){
var map__28882 = p__28881;
var map__28882__$1 = cljs.core.__destructure_map(map__28882);
var runtime = map__28882__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28882__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28887,key,p__28888){
var map__28889 = p__28887;
var map__28889__$1 = cljs.core.__destructure_map(map__28889);
var state = map__28889__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28889__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28890 = p__28888;
var map__28890__$1 = cljs.core.__destructure_map(map__28890);
var spec = map__28890__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28890__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28892,key,spec){
var map__28894 = p__28892;
var map__28894__$1 = cljs.core.__destructure_map(map__28894);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28894__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28896_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28896_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28897_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28897_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28898_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28898_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28899_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28899_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28900_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28900_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28903,key){
var map__28905 = p__28903;
var map__28905__$1 = cljs.core.__destructure_map(map__28905);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28905__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28906,msg){
var map__28907 = p__28906;
var map__28907__$1 = cljs.core.__destructure_map(map__28907);
var runtime = map__28907__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28907__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28929,p__28930){
var map__28935 = p__28929;
var map__28935__$1 = cljs.core.__destructure_map(map__28935);
var runtime = map__28935__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28935__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28936 = p__28930;
var map__28936__$1 = cljs.core.__destructure_map(map__28936);
var msg = map__28936__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__28941 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28943 = null;
var count__28944 = (0);
var i__28945 = (0);
while(true){
if((i__28945 < count__28944)){
var map__28955 = chunk__28943.cljs$core$IIndexed$_nth$arity$2(null,i__28945);
var map__28955__$1 = cljs.core.__destructure_map(map__28955);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28955__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29090 = seq__28941;
var G__29091 = chunk__28943;
var G__29092 = count__28944;
var G__29093 = (i__28945 + (1));
seq__28941 = G__29090;
chunk__28943 = G__29091;
count__28944 = G__29092;
i__28945 = G__29093;
continue;
} else {
var G__29096 = seq__28941;
var G__29097 = chunk__28943;
var G__29098 = count__28944;
var G__29099 = (i__28945 + (1));
seq__28941 = G__29096;
chunk__28943 = G__29097;
count__28944 = G__29098;
i__28945 = G__29099;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28941);
if(temp__5804__auto__){
var seq__28941__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28941__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28941__$1);
var G__29108 = cljs.core.chunk_rest(seq__28941__$1);
var G__29109 = c__5568__auto__;
var G__29110 = cljs.core.count(c__5568__auto__);
var G__29111 = (0);
seq__28941 = G__29108;
chunk__28943 = G__29109;
count__28944 = G__29110;
i__28945 = G__29111;
continue;
} else {
var map__28959 = cljs.core.first(seq__28941__$1);
var map__28959__$1 = cljs.core.__destructure_map(map__28959);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28959__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29118 = cljs.core.next(seq__28941__$1);
var G__29119 = null;
var G__29120 = (0);
var G__29121 = (0);
seq__28941 = G__29118;
chunk__28943 = G__29119;
count__28944 = G__29120;
i__28945 = G__29121;
continue;
} else {
var G__29122 = cljs.core.next(seq__28941__$1);
var G__29123 = null;
var G__29124 = (0);
var G__29125 = (0);
seq__28941 = G__29122;
chunk__28943 = G__29123;
count__28944 = G__29124;
i__28945 = G__29125;
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
