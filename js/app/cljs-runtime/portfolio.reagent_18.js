goog.provide('portfolio.reagent_18');
portfolio.reagent_18.get_root = (function portfolio$reagent_18$get_root(el){
if(cljs.core.truth_(el.reactRoot)){
} else {
(el.reactRoot = reagent.dom.client.create_root(el));
}

return el.reactRoot;
});
portfolio.reagent_18.component_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.adapter","render-component","portfolio.adapter/render-component",-433053335,null),(function (p__28769,el){
var map__28770 = p__28769;
var map__28770__$1 = cljs.core.__destructure_map(map__28770);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28770__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if((!((el == null)))){
} else {
throw (new Error(["Assert failed: ","Asked to render Reagent component without an element","\n","(some? el)"].join('')));
}

var temp__5804__auto___28772 = (function (){var G__28771 = el;
if((G__28771 == null)){
return null;
} else {
return G__28771.unmount;
}
})();
if(cljs.core.truth_(temp__5804__auto___28772)){
var f_28773 = temp__5804__auto___28772;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("react18",el.unmountLib)){
} else {
(f_28773.cljs$core$IFn$_invoke$arity$0 ? f_28773.cljs$core$IFn$_invoke$arity$0() : f_28773.call(null));
}
} else {
}

var root = portfolio.reagent_18.get_root(el);
(el.unmount = (function (){
root.unmount();

(el.reactRoot = null);

(el.innerHTML = "");

return (el.unmount = null);
}));

(el.unmountLib = "react18");

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(root,((cljs.core.fn_QMARK_(component))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null):component));
})], null);
portfolio.reagent_18.create_scene = (function portfolio$reagent_18$create_scene(scene){
return portfolio.adapter.prepare_scene(scene,portfolio.reagent_18.component_impl);
});
portfolio.data.register_scene_renderer_BANG_((function (x){
var temp__5804__auto__ = ((reagent.impl.template.valid_tag_QMARK_(x))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null):((reagent.impl.template.valid_tag_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(x)))?x:null));
if(cljs.core.truth_(temp__5804__auto__)){
var scene = temp__5804__auto__;
return portfolio.reagent_18.create_scene(scene);
} else {
return null;
}
}));

//# sourceMappingURL=portfolio.reagent_18.js.map
