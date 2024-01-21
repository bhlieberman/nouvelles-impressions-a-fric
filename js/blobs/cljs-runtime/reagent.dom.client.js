import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.esm.esm_import$react.js";
import "./shadow.esm.esm_import$react_dom$client.js";
import "./reagent.impl.batching.js";
import "./reagent.impl.protocols.js";
import "./reagent.impl.template.js";
import "./reagent.impl.util.js";
import "./goog.object.object.js";
goog.provide('reagent.dom.client');
goog.scope(function(){
  reagent.dom.client.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create a React Root connected to given container DOM element.
 */
reagent.dom.client.create_root = (function reagent$dom$client$create_root(container){
return shadow.esm.esm_import$react_dom$client.createRoot(container);
});
/**
 * Unmount the given React Root
 */
reagent.dom.client.unmount = (function reagent$dom$client$unmount(root){
return root.unmount();
});
reagent.dom.client.reagent_root = (function reagent$dom$client$reagent_root(js_props){
var el = reagent.dom.client.goog$module$goog$object.get(js_props,"comp");
shadow.esm.esm_import$react.useEffect((function (){
var _STAR_always_update_STAR__orig_val__37831 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37832 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37832);

try{reagent.impl.batching.flush_after_render();

return undefined;
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37831);
}}));

var _STAR_always_update_STAR__orig_val__37833 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37834 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37834);

try{return (el.cljs$core$IFn$_invoke$arity$0 ? el.cljs$core$IFn$_invoke$arity$0() : el.call(null));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37833);
}});
/**
 * Render the given Reagent element (i.e. Hiccup data)
 *   into a given React root.
 */
reagent.dom.client.render = (function reagent$dom$client$render(var_args){
var G__37839 = arguments.length;
switch (G__37839) {
case 2:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2 = (function (root,el){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3(root,el,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3 = (function (root,el,compiler){
var comp = (function (){
return reagent.impl.protocols.as_element(compiler,el);
});
return root.render(shadow.esm.esm_import$react.createElement(reagent.dom.client.reagent_root,({"comp": comp})));
}));

(reagent.dom.client.render.cljs$lang$maxFixedArity = 3);

reagent.dom.client.hydrate_root = (function reagent$dom$client$hydrate_root(var_args){
var G__37855 = arguments.length;
switch (G__37855) {
case 2:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2 = (function (container,el){
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3(container,el,null);
}));

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3 = (function (container,el,p__37856){
var map__37857 = p__37856;
var map__37857__$1 = cljs.core.__destructure_map(map__37857);
var compiler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37857__$1,new cljs.core.Keyword(null,"compiler","compiler",-267926731),reagent.impl.template._STAR_current_default_compiler_STAR_);
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37857__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37857__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
var comp = (function (){
return reagent.impl.protocols.as_element(compiler,el);
});
return shadow.esm.esm_import$react_dom$client.hydrateRoot(container,shadow.esm.esm_import$react.createElement(reagent.dom.client.reagent_root,({"comp": comp})));
}));

(reagent.dom.client.hydrate_root.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=reagent.dom.client.js.map
