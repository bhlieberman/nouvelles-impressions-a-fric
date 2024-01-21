goog.provide('phosphor.icons');
phosphor.icons.icons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
phosphor.icons.load_icon_BANG_ = (function phosphor$icons$load_icon_BANG_(id,hiccup){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phosphor.icons.icons,cljs.core.assoc,id,hiccup);
});
phosphor.icons.get_loaded_icons = (function phosphor$icons$get_loaded_icons(){
return cljs.core.keys(cljs.core.deref(phosphor.icons.icons));
});
phosphor.icons.render = (function phosphor$icons$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28690 = arguments.length;
var i__5770__auto___28691 = (0);
while(true){
if((i__5770__auto___28691 < len__5769__auto___28690)){
args__5775__auto__.push((arguments[i__5770__auto___28691]));

var G__28692 = (i__5770__auto___28691 + (1));
i__5770__auto___28691 = G__28692;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__28684){
var vec__28685 = p__28684;
var map__28688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28685,(0),null);
var map__28688__$1 = cljs.core.__destructure_map(map__28688);
var attrs = map__28688__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28688__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28688__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28688__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(phosphor.icons.icons),id);
if(cljs.core.truth_(temp__5802__auto__)){
var svg = temp__5802__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"style","style",-496642736)], null),(function (){var G__28689 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1"], null);
var G__28689__$1 = (cljs.core.truth_(size)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28689,new cljs.core.Keyword(null,"height","height",1025178622),size):G__28689);
var G__28689__$2 = (cljs.core.truth_(size)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28689__$1,new cljs.core.Keyword(null,"width","width",-384071477),size):G__28689__$1);
var G__28689__$3 = (cljs.core.truth_(color)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28689__$2,new cljs.core.Keyword(null,"color","color",1011675173),color):G__28689__$2);
if(cljs.core.truth_(style)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__28689__$3,style);
} else {
return G__28689__$3;
}
})()),(1),cljs.core.merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"style","style",-496642736)], 0)));
} else {
throw (new Error(["Icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," is not loaded. Try loading it with `load-icon!`, or check that it exists."].join('')));
}
}));

(phosphor.icons.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(phosphor.icons.render.cljs$lang$applyTo = (function (seq28678){
var G__28679 = cljs.core.first(seq28678);
var seq28678__$1 = cljs.core.next(seq28678);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28679,seq28678__$1);
}));


//# sourceMappingURL=phosphor.icons.js.map
