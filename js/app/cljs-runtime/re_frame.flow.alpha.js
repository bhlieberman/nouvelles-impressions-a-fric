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
var G__28719 = x;
if(cljs.core.truth_((re_frame.flow.alpha.flow_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_frame.flow.alpha.flow_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : re_frame.flow.alpha.flow_QMARK_.call(null,x)))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__28719);
} else {
return G__28719;
}
});
re_frame.flow.alpha.input_ids = (function re_frame$flow$alpha$input_ids(p__28722){
var map__28723 = p__28722;
var map__28723__$1 = cljs.core.__destructure_map(map__28723);
var map__28724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28723__$1,new cljs.core.Keyword(null,"live?","live?",-1539352230));
var map__28724__$1 = cljs.core.__destructure_map(map__28724);
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28724__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var map__28725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28723__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var map__28725__$1 = cljs.core.__destructure_map(map__28725);
var calc_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28725__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.id,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.db_path_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.vals(live_inputs)),cljs.core.vals(calc_inputs))));
});
re_frame.flow.alpha.topsort = (function re_frame$flow$alpha$topsort(flows){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(flows,cljs.core.reverse(re_frame.utils.topsort_kahn(re_frame.utils.map_vals(re_frame.flow.alpha.input_ids,flows))));
});
re_frame.flow.alpha.safe_update_in = (function re_frame$flow$alpha$safe_update_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28800 = arguments.length;
var i__5770__auto___28801 = (0);
while(true){
if((i__5770__auto___28801 < len__5769__auto___28800)){
args__5775__auto__.push((arguments[i__5770__auto___28801]));

var G__28802 = (i__5770__auto___28801 + (1));
i__5770__auto___28801 = G__28802;
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
(re_frame.flow.alpha.safe_update_in.cljs$lang$applyTo = (function (seq28726){
var G__28727 = cljs.core.first(seq28726);
var seq28726__$1 = cljs.core.next(seq28726);
var G__28728 = cljs.core.first(seq28726__$1);
var seq28726__$2 = cljs.core.next(seq28726__$1);
var G__28729 = cljs.core.first(seq28726__$2);
var seq28726__$3 = cljs.core.next(seq28726__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28727,G__28728,G__28729,seq28726__$3);
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
var G__28806 = new_data;
var G__28807 = cljs.core.pop(path);
db = G__28806;
path = G__28807;
continue;
}
}
break;
}
});
re_frame.flow.alpha.__GT_flow = (function re_frame$flow$alpha$__GT_flow(p__28735){
var map__28736 = p__28735;
var map__28736__$1 = cljs.core.__destructure_map(map__28736);
var m = map__28736__$1;
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28736__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var live_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28736__$1,new cljs.core.Keyword(null,"live?","live?",-1539352230));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28736__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var G__28737 = (function (){var G__28738 = (function (){var G__28739 = (function (){var G__28740 = m;
if(cljs.core.truth_((function (){var and__5043__auto__ = output;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.map_QMARK_(output)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__28740,new cljs.core.Keyword(null,"output","output",-1105869043),(function (p1__28733_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p1__28733_SHARP_], null);
}));
} else {
return G__28740;
}
})();
if(cljs.core.truth_(output)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__28739,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"inputs","inputs",865803858)], null),cljs.core.merge,inputs);
} else {
return G__28739;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = live_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.map_QMARK_(live_QMARK_)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__28738,new cljs.core.Keyword(null,"live?","live?",-1539352230),(function (p1__28734_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p1__28734_SHARP_], null);
}));
} else {
return G__28738;
}
})();
if(cljs.core.truth_(live_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__28737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live?","live?",-1539352230),new cljs.core.Keyword(null,"inputs","inputs",865803858)], null),cljs.core.merge,inputs);
} else {
return G__28737;
}
})(),new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
re_frame.flow.alpha.default$ = (function re_frame$flow$alpha$default(id){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"live?","live?",-1539352230),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.constantly(true)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.constantly(["Hello World ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())].join(''))], null),new cljs.core.Keyword(null,"init","init",-1875481434),(function (db,path){
return cljs.core.assoc_in(db,path,cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),re_frame.flow.alpha.deep_cleanup], null);
});
re_frame.flow.alpha.reg_flow = (function re_frame$flow$alpha$reg_flow(var_args){
var G__28744 = arguments.length;
switch (G__28744) {
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
var G__28746 = arguments.length;
switch (G__28746) {
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
var G__28747 = value;
var G__28747__$1 = (((G__28747 == null))?null:re_frame.flow.alpha.lookup(G__28747));
var G__28747__$2 = (((G__28747__$1 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__28747__$1));
if((G__28747__$2 == null)){
return null;
} else {
return (re_frame.flow.alpha.get_output.cljs$core$IFn$_invoke$arity$2 ? re_frame.flow.alpha.get_output.cljs$core$IFn$_invoke$arity$2(db,G__28747__$2) : re_frame.flow.alpha.get_output.call(null,db,G__28747__$2));
}
}
});
re_frame.flow.alpha.flow_fx_ids = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear-flow","clear-flow",2086400997),null,new cljs.core.Keyword(null,"reg-flow","reg-flow",-1365926178),null], null), null);
re_frame.flow.alpha.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-flow-fx","do-flow-fx",528807066),new cljs.core.Keyword(null,"after","after",594996914),(function (p__28750){
var map__28751 = p__28750;
var map__28751__$1 = cljs.core.__destructure_map(map__28751);
var ctx = map__28751__$1;
var map__28752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28751__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var map__28752__$1 = cljs.core.__destructure_map(map__28752);
var effects = map__28752__$1;
var fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28752__$1,new cljs.core.Keyword(null,"fx","fx",-1237829572));
var flow_fx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flow_fx_ids,cljs.core.first),fx),cljs.core.select_keys(effects,re_frame.flow.alpha.flow_fx_ids));
if(cljs.core.empty_QMARK_(flow_fx)){
return ctx;
} else {
var seq__28754_28814 = cljs.core.seq(flow_fx);
var chunk__28755_28815 = null;
var count__28756_28816 = (0);
var i__28757_28817 = (0);
while(true){
if((i__28757_28817 < count__28756_28816)){
var vec__28766_28818 = chunk__28755_28815.cljs$core$IIndexed$_nth$arity$2(null,i__28757_28817);
var k_28819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766_28818,(0),null);
var v_28820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766_28818,(1),null);
var temp__5802__auto___28823 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"fx","fx",-1237829572),k_28819,false);
if(cljs.core.truth_(temp__5802__auto___28823)){
var f_28824 = temp__5802__auto___28823;
(f_28824.cljs$core$IFn$_invoke$arity$1 ? f_28824.cljs$core$IFn$_invoke$arity$1(v_28820) : f_28824.call(null,v_28820));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",k_28819," which has no associated handler. Ignoring."], 0));
}


var G__28825 = seq__28754_28814;
var G__28826 = chunk__28755_28815;
var G__28827 = count__28756_28816;
var G__28828 = (i__28757_28817 + (1));
seq__28754_28814 = G__28825;
chunk__28755_28815 = G__28826;
count__28756_28816 = G__28827;
i__28757_28817 = G__28828;
continue;
} else {
var temp__5804__auto___28829 = cljs.core.seq(seq__28754_28814);
if(temp__5804__auto___28829){
var seq__28754_28830__$1 = temp__5804__auto___28829;
if(cljs.core.chunked_seq_QMARK_(seq__28754_28830__$1)){
var c__5568__auto___28831 = cljs.core.chunk_first(seq__28754_28830__$1);
var G__28832 = cljs.core.chunk_rest(seq__28754_28830__$1);
var G__28833 = c__5568__auto___28831;
var G__28834 = cljs.core.count(c__5568__auto___28831);
var G__28835 = (0);
seq__28754_28814 = G__28832;
chunk__28755_28815 = G__28833;
count__28756_28816 = G__28834;
i__28757_28817 = G__28835;
continue;
} else {
var vec__28770_28836 = cljs.core.first(seq__28754_28830__$1);
var k_28837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770_28836,(0),null);
var v_28838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770_28836,(1),null);
var temp__5802__auto___28839 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"fx","fx",-1237829572),k_28837,false);
if(cljs.core.truth_(temp__5802__auto___28839)){
var f_28840 = temp__5802__auto___28839;
(f_28840.cljs$core$IFn$_invoke$arity$1 ? f_28840.cljs$core$IFn$_invoke$arity$1(v_28838) : f_28840.call(null,v_28838));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",k_28837," which has no associated handler. Ignoring."], 0));
}


var G__28841 = cljs.core.next(seq__28754_28830__$1);
var G__28842 = null;
var G__28843 = (0);
var G__28844 = (0);
seq__28754_28814 = G__28841;
chunk__28755_28815 = G__28842;
count__28756_28816 = G__28843;
i__28757_28817 = G__28844;
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
var map__28778 = flow;
var map__28778__$1 = cljs.core.__destructure_map(map__28778);
var map__28779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28778__$1,new cljs.core.Keyword(null,"live?","live?",-1539352230));
var map__28779__$1 = cljs.core.__destructure_map(map__28779);
var live_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28779__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28779__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var map__28780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28778__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var map__28780__$1 = cljs.core.__destructure_map(map__28780);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28780__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28780__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28778__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28778__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var cleanup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28778__$1,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959));
var cleared_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28778__$1,new cljs.core.Keyword("re-frame.flow.alpha","cleared?","re-frame.flow.alpha/cleared?",1524733548));
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
var bardo = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28773_SHARP_){
if(cljs.core.truth_(p1__28773_SHARP_)){
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
var update_db = (function (){var G__28782 = bardo;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__28782)){
return (function (p1__28774_SHARP_){
var G__28784 = p1__28774_SHARP_;
if(dirty_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__28784,path,output,id__GT_input);
} else {
return G__28784;
}
});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"dead","dead",-1946604091)], null),G__28782)){
return cljs.core.identity;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"dead","dead",-1946604091)], null),G__28782)){
return (function (p1__28775_SHARP_){
return (cleanup.cljs$core$IFn$_invoke$arity$2 ? cleanup.cljs$core$IFn$_invoke$arity$2(p1__28775_SHARP_,path) : cleanup.call(null,p1__28775_SHARP_,path));
});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__28782)){
return (function (p1__28776_SHARP_){
var G__28785 = (init.cljs$core$IFn$_invoke$arity$2 ? init.cljs$core$IFn$_invoke$arity$2(p1__28776_SHARP_,path) : init.call(null,p1__28776_SHARP_,path));
if(cljs.core.truth_((function (){var or__5045__auto__ = dirty_QMARK_;
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new_QMARK_;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__28785,path,output,id__GT_input);
} else {
return G__28785;
}
});
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28782)].join('')));

}
}
}
}
})();
return re_frame.interceptor.update_effect(ctx,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(update_db,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759))));
});
re_frame.flow.alpha.with_cleared = (function re_frame$flow$alpha$with_cleared(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28791){
var vec__28792 = p__28791;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28792,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28792,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327),k,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword("re-frame.flow.alpha","cleared?","re-frame.flow.alpha/cleared?",1524733548),true)], null);
}),new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m))));
});
re_frame.flow.alpha.interceptor = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"after","after",594996914),(function (ctx){
var all_flows = re_frame.flow.alpha.with_cleared(cljs.core.deref(re_frame.flow.alpha.flows));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.flow.alpha.flows,cljs.core.vary_meta,cljs.core.dissoc,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flows,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.utils.map_vals,(function (p1__28795_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(p1__28795_SHARP_,cljs.core.dissoc,new cljs.core.Keyword("re-frame.flow.alpha","new","re-frame.flow.alpha/new",-1920903681));
})));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.update_flow,ctx,cljs.core.memoize(re_frame.flow.alpha.topsort)(all_flows));
})], null)], 0));

//# sourceMappingURL=re_frame.flow.alpha.js.map
