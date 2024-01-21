goog.provide('portfolio.ui.scene');
portfolio.ui.scene.get_param_overrides = (function portfolio$ui$scene$get_param_overrides(state,scene){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null));
});
portfolio.ui.scene.get_param_STAR_ = (function portfolio$ui$scene$get_param_STAR_(state,scene,param){
if(cljs.core.map_QMARK_(param)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([param,portfolio.ui.scene.get_param_overrides(state,scene)], 0));
} else {
return param;
}
});
portfolio.ui.scene.get_params = (function portfolio$ui$scene$get_params(state,scene){
if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30295){
var vec__30297 = p__30295;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30297,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30297,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,portfolio.ui.scene.get_param_STAR_(state,scene,v)], null);
}),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene)));
} else {
if(cljs.core.coll_QMARK_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30273_SHARP_){
return portfolio.ui.scene.get_param_STAR_(state,scene,p1__30273_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene));
} else {
return portfolio.ui.scene.get_param_STAR_(state,scene,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene));

}
}
});
portfolio.ui.scene.prep_scene_fn = (function portfolio$ui$scene$prep_scene_fn(state,scene){
var params = portfolio.ui.scene.get_params(state,scene);
var G__30332 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene,new cljs.core.Keyword(null,"component-params","component-params",-1900426525),portfolio.ui.code.code_str(params));
var G__30332__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30332,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function (){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene);
})):G__30332);
if(cljs.core.truth_(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30332__$1,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__30362__delegate = function (rest__30327_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene),params,rest__30327_SHARP_);
};
var G__30362 = function (var_args){
var rest__30327_SHARP_ = null;
if (arguments.length > 0) {
var G__30366__i = 0, G__30366__a = new Array(arguments.length -  0);
while (G__30366__i < G__30366__a.length) {G__30366__a[G__30366__i] = arguments[G__30366__i + 0]; ++G__30366__i;}
  rest__30327_SHARP_ = new cljs.core.IndexedSeq(G__30366__a,0,null);
} 
return G__30362__delegate.call(this,rest__30327_SHARP_);};
G__30362.cljs$lang$maxFixedArity = 0;
G__30362.cljs$lang$applyTo = (function (arglist__30367){
var rest__30327_SHARP_ = cljs.core.seq(arglist__30367);
return G__30362__delegate(rest__30327_SHARP_);
});
G__30362.cljs$core$IFn$_invoke$arity$variadic = G__30362__delegate;
return G__30362;
})()
);
} else {
return G__30332__$1;
}
});
portfolio.ui.scene.sort_key = (function portfolio$ui$scene$sort_key(scene){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(scene)], null);
});
portfolio.ui.scene.get_scene_atoms = (function portfolio$ui$scene$get_scene_atoms(p__30346){
var map__30347 = p__30346;
var map__30347__$1 = cljs.core.__destructure_map(map__30347);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30347__$1,new cljs.core.Keyword(null,"params","params",710516235));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30344_SHARP_){
if((!((p1__30344_SHARP_ == null)))){
if((((p1__30344_SHARP_.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === p1__30344_SHARP_.cljs$core$IWatchable$)))){
return true;
} else {
if((!p1__30344_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,p1__30344_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,p1__30344_SHARP_);
}
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.identity,params));
});

//# sourceMappingURL=portfolio.ui.scene.js.map
