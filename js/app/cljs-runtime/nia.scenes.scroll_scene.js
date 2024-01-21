goog.provide('nia.scenes.scroll_scene');
nia.scenes.scroll_scene.current_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"thesis","thesis",-438481408));
nia.scenes.scroll_scene.navigate = (function nia$scenes$scroll_scene$navigate(level){
return cljs.core.reset_BANG_(nia.scenes.scroll_scene.current_view,level);
});
portfolio.data.register_scene_BANG_(portfolio.reagent_18.create_scene(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("nia.scenes.scroll-scene","scroll","nia.scenes.scroll-scene/scroll",881456432),new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__32159__delegate = function (___28748__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.parens_scroll.parens_scroll,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello"], null),new cljs.core.Keyword(null,"depth","depth",1768663640),reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1))], null)], null);
};
var G__32159 = function (var_args){
var ___28748__auto__ = null;
if (arguments.length > 0) {
var G__32160__i = 0, G__32160__a = new Array(arguments.length -  0);
while (G__32160__i < G__32160__a.length) {G__32160__a[G__32160__i] = arguments[G__32160__i + 0]; ++G__32160__i;}
  ___28748__auto__ = new cljs.core.IndexedSeq(G__32160__a,0,null);
} 
return G__32159__delegate.call(this,___28748__auto__);};
G__32159.cljs$lang$maxFixedArity = 0;
G__32159.cljs$lang$applyTo = (function (arglist__32161){
var ___28748__auto__ = cljs.core.seq(arglist__32161);
return G__32159__delegate(___28748__auto__);
});
G__32159.cljs$core$IFn$_invoke$arity$variadic = G__32159__delegate;
return G__32159;
})()
,new cljs.core.Keyword(null,"code","code",1586293142),"[parens-scroll {:children [:div \"hello\"], :depth (r/atom 1)}]"], null)));
portfolio.data.register_scene_BANG_(portfolio.reagent_18.create_scene(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("nia.scenes.scroll-scene","scroll-w-child","nia.scenes.scroll-scene/scroll-w-child",-963824143),new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__32162__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.parens_scroll.parens_scroll,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),reagent.core.atom.cljs$core$IFn$_invoke$arity$1((3)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.one.parens_four.parens_four], null)], null)], null);
};
var G__32162 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__32163__i = 0, G__32163__a = new Array(arguments.length -  1);
while (G__32163__i < G__32163__a.length) {G__32163__a[G__32163__i] = arguments[G__32163__i + 1]; ++G__32163__i;}
  args = new cljs.core.IndexedSeq(G__32163__a,0,null);
} 
return G__32162__delegate.call(this,store,args);};
G__32162.cljs$lang$maxFixedArity = 1;
G__32162.cljs$lang$applyTo = (function (arglist__32164){
var store = cljs.core.first(arglist__32164);
var args = cljs.core.rest(arglist__32164);
return G__32162__delegate(store,args);
});
G__32162.cljs$core$IFn$_invoke$arity$variadic = G__32162__delegate;
return G__32162;
})()
,new cljs.core.Keyword(null,"code","code",1586293142),"[parens-scroll {:depth (r/atom 3), :children [parens-four]}]",new cljs.core.Keyword(null,"params","params",710516235),nia.scenes.scroll_scene.current_view], null)));

//# sourceMappingURL=nia.scenes.scroll_scene.js.map
