import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$react_dom$index.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.input.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.js";
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__18210 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18211 = true;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18211);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__18212 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18213 = false;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18213);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.assoc,container,comp);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18212);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18210);
}});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render(var_args){
var G__18216 = arguments.length;
switch (G__18216) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var vec__18221 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18221,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18221,(1),null);
var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var seq__18226_18254 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots));
var chunk__18227_18255 = null;
var count__18228_18256 = (0);
var i__18229_18257 = (0);
while(true){
if((i__18229_18257 < count__18228_18256)){
var vec__18244_18258 = chunk__18227_18255.cljs$core$IIndexed$_nth$arity$2(null,i__18229_18257);
var container_18259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18244_18258,(0),null);
var comp_18260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18244_18258,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_18260,container_18259);


var G__18261 = seq__18226_18254;
var G__18262 = chunk__18227_18255;
var G__18263 = count__18228_18256;
var G__18264 = (i__18229_18257 + (1));
seq__18226_18254 = G__18261;
chunk__18227_18255 = G__18262;
count__18228_18256 = G__18263;
i__18229_18257 = G__18264;
continue;
} else {
var temp__5804__auto___18267 = cljs.core.seq(seq__18226_18254);
if(temp__5804__auto___18267){
var seq__18226_18268__$1 = temp__5804__auto___18267;
if(cljs.core.chunked_seq_QMARK_(seq__18226_18268__$1)){
var c__5568__auto___18269 = cljs.core.chunk_first(seq__18226_18268__$1);
var G__18270 = cljs.core.chunk_rest(seq__18226_18268__$1);
var G__18271 = c__5568__auto___18269;
var G__18272 = cljs.core.count(c__5568__auto___18269);
var G__18273 = (0);
seq__18226_18254 = G__18270;
chunk__18227_18255 = G__18271;
count__18228_18256 = G__18272;
i__18229_18257 = G__18273;
continue;
} else {
var vec__18249_18274 = cljs.core.first(seq__18226_18268__$1);
var container_18275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18249_18274,(0),null);
var comp_18276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18249_18274,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_18276,container_18275);


var G__18277 = cljs.core.next(seq__18226_18268__$1);
var G__18278 = null;
var G__18279 = (0);
var G__18280 = (0);
seq__18226_18254 = G__18277;
chunk__18227_18255 = G__18278;
count__18228_18256 = G__18279;
i__18229_18257 = G__18280;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.js.map
