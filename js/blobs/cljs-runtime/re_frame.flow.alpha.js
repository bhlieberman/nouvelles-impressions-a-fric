import "./cljs_env.js";
import "./cljs.core.js";
import "./re_frame.utils.js";
import "./re_frame.registrar.js";
import "./re_frame.loggers.js";
import "./re_frame.interceptor.js";
goog.provide('re_frame.flow.alpha');
re_frame.flow.alpha.db_path_QMARK_ = cljs.core.vector_QMARK_;
re_frame.flow.alpha.flow_QMARK_ = cljs.core.map_QMARK_;
re_frame.flow.alpha.id_QMARK_ = cljs.core.keyword_QMARK_;
re_frame.flow.alpha.flows = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame.flow.alpha.lookup = (function re_frame$flow$alpha$lookup(x){
if(cljs.core.truth_((re_frame.flow.alpha.flow_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_frame.flow.alpha.flow_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : re_frame.flow.alpha.flow_QMARK_.call(null,x)))){
return x;
} else {
if(cljs.core.truth_((re_frame.flow.alpha.id_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_frame.flow.alpha.id_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : re_frame.flow.alpha.id_QMARK_.call(null,x)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.flow.alpha.flows),x);
} else {
return null;
}
}
});
re_frame.flow.alpha.id = (function re_frame$flow$alpha$id(x){
var G__33343 = x;
if(cljs.core.truth_((re_frame.flow.alpha.flow_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_frame.flow.alpha.flow_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : re_frame.flow.alpha.flow_QMARK_.call(null,x)))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__33343);
} else {
return G__33343;
}
});
re_frame.flow.alpha.input_ids = (function re_frame$flow$alpha$input_ids(p__33344){
var map__33346 = p__33344;
var map__33346__$1 = cljs.core.__destructure_map(map__33346);
var map__33347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33346__$1,new cljs.core.Keyword(null,"live?","live?",-1539352230));
var map__33347__$1 = cljs.core.__destructure_map(map__33347);
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33347__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var map__33348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33346__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var map__33348__$1 = cljs.core.__destructure_map(map__33348);
var calc_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33348__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.id,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.db_path_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.vals(live_inputs)),cljs.core.vals(calc_inputs))));
});
re_frame.flow.alpha.topsort = (function re_frame$flow$alpha$topsort(flows){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(flows,cljs.core.reverse(re_frame.utils.topsort_kahn(re_frame.utils.map_vals(re_frame.flow.alpha.input_ids,flows))));
});
re_frame.flow.alpha.safe_update_in = (function re_frame$flow$alpha$safe_update_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33558 = arguments.length;
var i__5770__auto___33559 = (0);
while(true){
if((i__5770__auto___33559 < len__5769__auto___33558)){
args__5775__auto__.push((arguments[i__5770__auto___33559]));

var G__33562 = (i__5770__auto___33559 + (1));
i__5770__auto___33559 = G__33562;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return re_frame.flow.alpha.safe_update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(re_frame.flow.alpha.safe_update_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,path,f,args){
if(cljs.core.empty_QMARK_(path)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,m,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,path,f,args);
}
}));

(re_frame.flow.alpha.safe_update_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_frame.flow.alpha.safe_update_in.cljs$lang$applyTo = (function (seq33356){
var G__33357 = cljs.core.first(seq33356);
var seq33356__$1 = cljs.core.next(seq33356);
var G__33358 = cljs.core.first(seq33356__$1);
var seq33356__$2 = cljs.core.next(seq33356__$1);
var G__33359 = cljs.core.first(seq33356__$2);
var seq33356__$3 = cljs.core.next(seq33356__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33357,G__33358,G__33359,seq33356__$3);
}));

re_frame.flow.alpha.deep_cleanup = (function re_frame$flow$alpha$deep_cleanup(db,path){
while(true){
if(cljs.core.empty_QMARK_(path)){
return db;
} else {
var new_data = re_frame.flow.alpha.safe_update_in.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.pop(path),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.peek(path)], 0));
if((!(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_data,cljs.core.pop(path)))))){
return new_data;
} else {
var G__33566 = new_data;
var G__33567 = cljs.core.pop(path);
db = G__33566;
path = G__33567;
continue;
}
}
break;
}
});
re_frame.flow.alpha.__GT_flow = (function re_frame$flow$alpha$__GT_flow(p__33380){
var map__33381 = p__33380;
var map__33381__$1 = cljs.core.__destructure_map(map__33381);
var m = map__33381__$1;
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33381__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var live_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33381__$1,new cljs.core.Keyword(null,"live?","live?",-1539352230));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33381__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var G__33382 = (function (){var G__33383 = (function (){var G__33384 = (function (){var G__33385 = m;
if(cljs.core.truth_((function (){var and__5043__auto__ = output;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.map_QMARK_(output)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__33385,new cljs.core.Keyword(null,"output","output",-1105869043),(function (p1__33378_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p1__33378_SHARP_], null);
}));
} else {
return G__33385;
}
})();
if(cljs.core.truth_(output)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__33384,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"inputs","inputs",865803858)], null),cljs.core.merge,inputs);
} else {
return G__33384;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = live_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.map_QMARK_(live_QMARK_)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__33383,new cljs.core.Keyword(null,"live?","live?",-1539352230),(function (p1__33379_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p1__33379_SHARP_], null);
}));
} else {
return G__33383;
}
})();
if(cljs.core.truth_(live_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__33382,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live?","live?",-1539352230),new cljs.core.Keyword(null,"inputs","inputs",865803858)], null),cljs.core.merge,inputs);
} else {
return G__33382;
}
})(),new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
re_frame.flow.alpha.default$ = (function re_frame$flow$alpha$default(id){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"live?","live?",-1539352230),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.constantly(true)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.constantly(["Hello World ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())].join(''))], null),new cljs.core.Keyword(null,"init","init",-1875481434),(function (db,path){
return cljs.core.assoc_in(db,path,cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),re_frame.flow.alpha.deep_cleanup], null);
});
re_frame.flow.alpha.reg_flow = (function re_frame$flow$alpha$reg_flow(var_args){
var G__33391 = arguments.length;
switch (G__33391) {
case 2:
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2 = (function (k,m){
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"id","id",-1388402092),k));
}));

(re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1 = (function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.flow.alpha.flows,cljs.core.assoc,re_frame.flow.alpha.id(m),cljs.core.with_meta(re_frame.flow.alpha.__GT_flow(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frame.flow.alpha.default$(re_frame.flow.alpha.id(m)),m], 0))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-frame.flow.alpha","new","re-frame.flow.alpha/new",-1920903681),true], null)));
}));

(re_frame.flow.alpha.reg_flow.cljs$lang$maxFixedArity = 2);

re_frame.flow.alpha.clear_flow = (function re_frame$flow$alpha$clear_flow(var_args){
var G__33406 = arguments.length;
switch (G__33406) {
case 0:
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0 = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flows,cljs.core.vary_meta,cljs.core.update,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into,cljs.core.deref(re_frame.flow.alpha.flows)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flows,cljs.core.empty);
}));

(re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1 = (function (x){
var temp__5804__auto__ = re_frame.flow.alpha.lookup(x);
if(cljs.core.truth_(temp__5804__auto__)){
var flow = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flows,cljs.core.vary_meta,cljs.core.update,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,re_frame.flow.alpha.id(flow),flow], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.flows,cljs.core.dissoc,re_frame.flow.alpha.id(flow));
} else {
return null;
}
}));

(re_frame.flow.alpha.clear_flow.cljs$lang$maxFixedArity = 1);

re_frame.flow.alpha.get_output = (function re_frame$flow$alpha$get_output(db,value){
if(cljs.core.vector_QMARK_(value)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,value);
} else {
var G__33415 = value;
var G__33415__$1 = (((G__33415 == null))?null:re_frame.flow.alpha.lookup(G__33415));
var G__33415__$2 = (((G__33415__$1 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__33415__$1));
if((G__33415__$2 == null)){
return null;
} else {
return (re_frame.flow.alpha.get_output.cljs$core$IFn$_invoke$arity$2 ? re_frame.flow.alpha.get_output.cljs$core$IFn$_invoke$arity$2(db,G__33415__$2) : re_frame.flow.alpha.get_output.call(null,db,G__33415__$2));
}
}
});
re_frame.flow.alpha.flow_fx_ids = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear-flow","clear-flow",2086400997),null,new cljs.core.Keyword(null,"reg-flow","reg-flow",-1365926178),null], null), null);
re_frame.flow.alpha.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-flow-fx","do-flow-fx",528807066),new cljs.core.Keyword(null,"after","after",594996914),(function (p__33423){
var map__33427 = p__33423;
var map__33427__$1 = cljs.core.__destructure_map(map__33427);
var ctx = map__33427__$1;
var map__33428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33427__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var map__33428__$1 = cljs.core.__destructure_map(map__33428);
var effects = map__33428__$1;
var fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33428__$1,new cljs.core.Keyword(null,"fx","fx",-1237829572));
var flow_fx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flow_fx_ids,cljs.core.first),fx),cljs.core.select_keys(effects,re_frame.flow.alpha.flow_fx_ids));
if(cljs.core.empty_QMARK_(flow_fx)){
return ctx;
} else {
var seq__33429_33590 = cljs.core.seq(flow_fx);
var chunk__33430_33591 = null;
var count__33431_33592 = (0);
var i__33432_33593 = (0);
while(true){
if((i__33432_33593 < count__33431_33592)){
var vec__33450_33594 = chunk__33430_33591.cljs$core$IIndexed$_nth$arity$2(null,i__33432_33593);
var k_33595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33450_33594,(0),null);
var v_33596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33450_33594,(1),null);
var temp__5802__auto___33597 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"fx","fx",-1237829572),k_33595,false);
if(cljs.core.truth_(temp__5802__auto___33597)){
var f_33598 = temp__5802__auto___33597;
(f_33598.cljs$core$IFn$_invoke$arity$1 ? f_33598.cljs$core$IFn$_invoke$arity$1(v_33596) : f_33598.call(null,v_33596));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",k_33595," which has no associated handler. Ignoring."], 0));
}


var G__33599 = seq__33429_33590;
var G__33600 = chunk__33430_33591;
var G__33601 = count__33431_33592;
var G__33602 = (i__33432_33593 + (1));
seq__33429_33590 = G__33599;
chunk__33430_33591 = G__33600;
count__33431_33592 = G__33601;
i__33432_33593 = G__33602;
continue;
} else {
var temp__5804__auto___33607 = cljs.core.seq(seq__33429_33590);
if(temp__5804__auto___33607){
var seq__33429_33608__$1 = temp__5804__auto___33607;
if(cljs.core.chunked_seq_QMARK_(seq__33429_33608__$1)){
var c__5568__auto___33609 = cljs.core.chunk_first(seq__33429_33608__$1);
var G__33610 = cljs.core.chunk_rest(seq__33429_33608__$1);
var G__33611 = c__5568__auto___33609;
var G__33612 = cljs.core.count(c__5568__auto___33609);
var G__33613 = (0);
seq__33429_33590 = G__33610;
chunk__33430_33591 = G__33611;
count__33431_33592 = G__33612;
i__33432_33593 = G__33613;
continue;
} else {
var vec__33487_33614 = cljs.core.first(seq__33429_33608__$1);
var k_33615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487_33614,(0),null);
var v_33616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487_33614,(1),null);
var temp__5802__auto___33617 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"fx","fx",-1237829572),k_33615,false);
if(cljs.core.truth_(temp__5802__auto___33617)){
var f_33618 = temp__5802__auto___33617;
(f_33618.cljs$core$IFn$_invoke$arity$1 ? f_33618.cljs$core$IFn$_invoke$arity$1(v_33616) : f_33618.call(null,v_33616));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",k_33615," which has no associated handler. Ignoring."], 0));
}


var G__33619 = cljs.core.next(seq__33429_33608__$1);
var G__33620 = null;
var G__33621 = (0);
var G__33622 = (0);
seq__33429_33590 = G__33619;
chunk__33430_33591 = G__33620;
count__33431_33592 = G__33621;
i__33432_33593 = G__33622;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"fx","fx",-1237829572)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.set(flow_fx)));
}
})], null)], 0));
re_frame.flow.alpha.update_flow = (function re_frame$flow$alpha$update_flow(ctx,flow){
var map__33503 = flow;
var map__33503__$1 = cljs.core.__destructure_map(map__33503);
var map__33504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33503__$1,new cljs.core.Keyword(null,"live?","live?",-1539352230));
var map__33504__$1 = cljs.core.__destructure_map(map__33504);
var live_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33504__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33504__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var map__33505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33503__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var map__33505__$1 = cljs.core.__destructure_map(map__33505);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33505__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33505__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33503__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33503__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var cleanup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33503__$1,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959));
var cleared_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33503__$1,new cljs.core.Keyword("re-frame.flow.alpha","cleared?","re-frame.flow.alpha/cleared?",1524733548));
var new_QMARK_ = new cljs.core.Keyword("re-frame.flow.alpha","new","re-frame.flow.alpha/new",-1920903681).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(flow));
var old_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = (function (){var or__5045__auto__ = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return old_db;
}
})();
var id__GT_old_live_input = re_frame.utils.map_vals(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.get_output,old_db),live_inputs);
var id__GT_live_input = re_frame.utils.map_vals(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.get_output,new_db),live_inputs);
var id__GT_old_input = re_frame.utils.map_vals(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.get_output,old_db),inputs);
var id__GT_input = re_frame.utils.map_vals(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.get_output,new_db),inputs);
var dirty_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id__GT_input,id__GT_old_input);
var bardo = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33496_SHARP_){
if(cljs.core.truth_(p1__33496_SHARP_)){
return new cljs.core.Keyword(null,"live","live",-1610148039);
} else {
return new cljs.core.Keyword(null,"dead","dead",-1946604091);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var and__5043__auto__ = (live_QMARK_.cljs$core$IFn$_invoke$arity$2 ? live_QMARK_.cljs$core$IFn$_invoke$arity$2(old_db,id__GT_old_live_input) : live_QMARK_.call(null,old_db,id__GT_old_live_input));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(new_QMARK_);
} else {
return and__5043__auto__;
}
})(),(function (){var and__5043__auto__ = (live_QMARK_.cljs$core$IFn$_invoke$arity$2 ? live_QMARK_.cljs$core$IFn$_invoke$arity$2(new_db,id__GT_live_input) : live_QMARK_.call(null,new_db,id__GT_live_input));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cleared_QMARK_);
} else {
return and__5043__auto__;
}
})()], null));
var update_db = (function (){var G__33513 = bardo;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__33513)){
return (function (p1__33497_SHARP_){
var G__33515 = p1__33497_SHARP_;
if(dirty_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__33515,path,output,id__GT_input);
} else {
return G__33515;
}
});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"dead","dead",-1946604091)], null),G__33513)){
return cljs.core.identity;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"dead","dead",-1946604091)], null),G__33513)){
return (function (p1__33498_SHARP_){
return (cleanup.cljs$core$IFn$_invoke$arity$2 ? cleanup.cljs$core$IFn$_invoke$arity$2(p1__33498_SHARP_,path) : cleanup.call(null,p1__33498_SHARP_,path));
});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__33513)){
return (function (p1__33499_SHARP_){
var G__33520 = (init.cljs$core$IFn$_invoke$arity$2 ? init.cljs$core$IFn$_invoke$arity$2(p1__33499_SHARP_,path) : init.call(null,p1__33499_SHARP_,path));
if(cljs.core.truth_((function (){var or__5045__auto__ = dirty_QMARK_;
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new_QMARK_;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__33520,path,output,id__GT_input);
} else {
return G__33520;
}
});
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33513)].join('')));

}
}
}
}
})();
return re_frame.interceptor.update_effect(ctx,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(update_db,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759))));
});
re_frame.flow.alpha.with_cleared = (function re_frame$flow$alpha$with_cleared(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33533){
var vec__33534 = p__33533;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33534,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327),k,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword("re-frame.flow.alpha","cleared?","re-frame.flow.alpha/cleared?",1524733548),true)], null);
}),new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m))));
});
re_frame.flow.alpha.interceptor = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"after","after",594996914),(function (ctx){
var all_flows = re_frame.flow.alpha.with_cleared(cljs.core.deref(re_frame.flow.alpha.flows));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.flow.alpha.flows,cljs.core.vary_meta,cljs.core.dissoc,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flows,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.utils.map_vals,(function (p1__33537_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(p1__33537_SHARP_,cljs.core.dissoc,new cljs.core.Keyword("re-frame.flow.alpha","new","re-frame.flow.alpha/new",-1920903681));
})));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.update_flow,ctx,cljs.core.memoize(re_frame.flow.alpha.topsort)(all_flows));
})], null)], 0));

//# sourceMappingURL=re_frame.flow.alpha.js.map
