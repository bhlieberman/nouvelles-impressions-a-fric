import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.storage.storage.js";
import "./goog.storage.mechanism.html5localstorage.js";
import "./goog.testing.storage.fakemechanism.js";
import "./cljs.reader.js";
import "./clojure.string.js";
import "./day8.re_frame_10x.tools.datafy.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.js";
goog.provide('day8.re_frame_10x.fx.local_storage');
goog.scope(function(){
  day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism = goog.module.get('goog.testing.storage.FakeMechanism');
});
/**
 * LocalStorage is not available in sandboxed iframes, so check
 *   window.localStorage and use the fake storage mechanism if it's not available.
 *   re-frame-10x settings will not persist, but it will work.
 */
day8.re_frame_10x.fx.local_storage.storage_mechanism = (function (){try{if(cljs.core.truth_(localStorage)){
return (new goog.storage.mechanism.HTML5LocalStorage());
} else {
return null;
}
}catch (e17771){if((e17771 instanceof Error)){
var _ = e17771;
return (new day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism());
} else {
throw e17771;

}
}})();
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage(day8.re_frame_10x.fx.local_storage.storage_mechanism));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
/**
 * Adds a unique prefix to local storage keys to ensure they don't collide with the host application
 */
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){
return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Loads a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.load = (function day8$re_frame_10x$fx$local_storage$load(key){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key(key));
if((void 0 === value)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});
day8.re_frame_10x.fx.local_storage.all_keys = (function day8$re_frame_10x$fx$local_storage$all_keys(){
try{return Object.keys(localStorage);
}catch (e17805){if((e17805 instanceof Error)){
var _ = e17805;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e17805;

}
}});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__17813 = cljs.core.seq(day8.re_frame_10x.fx.local_storage.all_keys());
var chunk__17814 = null;
var count__17815 = (0);
var i__17816 = (0);
while(true){
if((i__17816 < count__17815)){
var k = chunk__17814.cljs$core$IIndexed$_nth$arity$2(null,i__17816);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__17891 = seq__17813;
var G__17892 = chunk__17814;
var G__17893 = count__17815;
var G__17894 = (i__17816 + (1));
seq__17813 = G__17891;
chunk__17814 = G__17892;
count__17815 = G__17893;
i__17816 = G__17894;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17813);
if(temp__5804__auto__){
var seq__17813__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17813__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17813__$1);
var G__17896 = cljs.core.chunk_rest(seq__17813__$1);
var G__17897 = c__5568__auto__;
var G__17898 = cljs.core.count(c__5568__auto__);
var G__17899 = (0);
seq__17813 = G__17896;
chunk__17814 = G__17897;
count__17815 = G__17898;
i__17816 = G__17899;
continue;
} else {
var k = cljs.core.first(seq__17813__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__17904 = cljs.core.next(seq__17813__$1);
var G__17905 = null;
var G__17906 = (0);
var G__17907 = (0);
seq__17813 = G__17904;
chunk__17814 = G__17905;
count__17815 = G__17906;
i__17816 = G__17907;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.save = (function day8$re_frame_10x$fx$local_storage$save(var_args){
var G__17854 = arguments.length;
switch (G__17854) {
case 1:
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___17910 = arguments.length;
var i__5770__auto___17911 = (0);
while(true){
if((i__5770__auto___17911 < len__5769__auto___17910)){
args_arr__5794__auto__.push((arguments[i__5770__auto___17911]));

var G__17912 = (i__5770__auto___17911 + (1));
i__5770__auto___17911 = G__17912;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.after((function (db){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),day8.re_frame_10x.tools.datafy.pr_str_safe(db));
}));
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.after((function (db){
return cljs.core.run_BANG_((function (k){
var v = ((cljs.core.vector_QMARK_(k))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,k):cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k));
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),day8.re_frame_10x.tools.datafy.pr_str_safe(v));
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.save.cljs$lang$applyTo = (function (seq17852){
var G__17853 = cljs.core.first(seq17852);
var seq17852__$1 = cljs.core.next(seq17852);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17853,seq17852__$1);
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),(function (coeffects,p__17874){
var map__17875 = p__17874;
var map__17875__$1 = cljs.core.__destructure_map(map__17875);
var storage_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17875__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17875__$1,new cljs.core.Keyword(null,"or","or",235744169));
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(storage_key);
var v = day8.re_frame_10x.fx.local_storage.load(storage_key);
var G__17876 = coeffects;
var G__17876__$1 = (((!((fallback == null))))?cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17876,k,fallback),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","fallback","day8.re-frame-10x.fx.local-storage/fallback",-294997201),k], null),fallback):G__17876);
if((!((v == null)))){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17876__$1,k,v),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","stored","day8.re-frame-10x.fx.local-storage/stored",1674400390),k], null),v);
} else {
return G__17876__$1;
}
}));

//# sourceMappingURL=day8.re_frame_10x.fx.local_storage.js.map
