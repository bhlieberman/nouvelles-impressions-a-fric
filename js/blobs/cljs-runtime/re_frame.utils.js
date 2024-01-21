import "./cljs_env.js";
import "./cljs.core.js";
import "./re_frame.loggers.js";
goog.provide('re_frame.utils');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__32771){
var vec__32772 = p__32771;
var seq__32773 = cljs.core.seq(vec__32772);
var first__32774 = cljs.core.first(seq__32773);
var seq__32773__$1 = cljs.core.next(seq__32773);
var k = first__32774;
var ks = seq__32773__$1;
var keys = vec__32772;
if(ks){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var nextmap = temp__5802__auto__;
var newmap = (re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : re_frame.utils.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: expected a vector, but got:",v], 0));
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
re_frame.utils.apply_kw = (function re_frame$utils$apply_kw(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32843 = arguments.length;
var i__5770__auto___32844 = (0);
while(true){
if((i__5770__auto___32844 < len__5769__auto___32843)){
args__5775__auto__.push((arguments[i__5770__auto___32844]));

var G__32845 = (i__5770__auto___32844 + (1));
i__5770__auto___32844 = G__32845;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_(cljs.core.last(args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

(re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq32790){
var G__32791 = cljs.core.first(seq32790);
var seq32790__$1 = cljs.core.next(seq32790);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32791,seq32790__$1);
}));

re_frame.utils.map_vals = (function re_frame$utils$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__32814){
var vec__32816 = p__32814;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.utils.topsort_kahn = (function re_frame$utils$topsort_kahn(graph){
var in_degree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__32825){
var vec__32828 = p__32825;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32828,(0),null);
var neighbors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32828,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,neighbor){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,neighbor,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),acc,neighbors);
}),cljs.core.PersistentArrayMap.EMPTY,graph);
var q = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (in_degree){
return (function (p1__32820_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(in_degree,p1__32820_SHARP_,(0)));
});})(in_degree))
,cljs.core.keys(graph));
var sorted = cljs.core.PersistentVector.EMPTY;
var in_degree__$1 = in_degree;
while(true){
if(cljs.core.empty_QMARK_(q)){
return sorted;
} else {
var current = cljs.core.first(q);
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$3(graph,current,cljs.core.PersistentVector.EMPTY);
var updated_in_degree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,sorted,in_degree__$1,current,neighbors,in_degree){
return (function (acc,neighbor){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,neighbor,cljs.core.dec);
});})(q,sorted,in_degree__$1,current,neighbors,in_degree))
,in_degree__$1,neighbors);
var new_q = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(q),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (q,sorted,in_degree__$1,current,neighbors,updated_in_degree,in_degree){
return (function (p1__32823_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(updated_in_degree,p1__32823_SHARP_));
});})(q,sorted,in_degree__$1,current,neighbors,updated_in_degree,in_degree))
,neighbors));
var G__32850 = new_q;
var G__32851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sorted,current);
var G__32852 = updated_in_degree;
q = G__32850;
sorted = G__32851;
in_degree__$1 = G__32852;
continue;
}
break;
}
});

//# sourceMappingURL=re_frame.utils.js.map
