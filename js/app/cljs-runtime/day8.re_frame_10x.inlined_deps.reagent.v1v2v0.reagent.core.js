import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$react$index.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.js";
import "./day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.js";
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.is_client = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$create_element(var_args){
var G__14652 = arguments.length;
switch (G__14652) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___14727 = arguments.length;
var i__5770__auto___14728 = (0);
while(true){
if((i__5770__auto___14728 < len__5769__auto___14727)){
args_arr__5794__auto__.push((arguments[i__5770__auto___14728]));

var G__14729 = (i__5770__auto___14728 + (1));
i__5770__auto___14728 = G__14729;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props,child);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(module$node_modules$react$index.createElement,type,props,child,children);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq14648){
var G__14649 = cljs.core.first(seq14648);
var seq14648__$1 = cljs.core.next(seq14648);
var G__14650 = cljs.core.first(seq14648__$1);
var seq14648__$2 = cljs.core.next(seq14648__$1);
var G__14651 = cljs.core.first(seq14648__$2);
var seq14648__$3 = cljs.core.next(seq14648__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14649,G__14650,G__14651,seq14648__$3);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$as_element(var_args){
var G__14656 = arguments.length;
switch (G__14656) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_,form);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2 = (function (form,compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(compiler,form);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$lang$maxFixedArity = 2);

/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$reactify_component(var_args){
var G__14659 = arguments.length;
switch (G__14659) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1 = (function (c){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2(c,day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2 = (function (c,compiler){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reactify_component(c,compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$lang$maxFixedArity = 2);

/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$create_class(var_args){
var G__14661 = arguments.length;
switch (G__14661) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.create_class(spec,day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2 = (function (spec,compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.create_class(spec,compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$lang$maxFixedArity = 2);

/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.current_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$current_component(){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$state_atom(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$state(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.replace_state = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$replace_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.set_state = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$set_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$force_update(var_args){
var G__14664 = arguments.length;
switch (G__14664) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.flush_BANG_();

day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.force_update(this$,deep);

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush_after_render();
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2);

/**
 * Returns the props passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.props = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$props(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.children = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$children(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.argv = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$argv(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.get_argv(this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$class_names(var_args){
var G__14669 = arguments.length;
switch (G__14669) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___14756 = arguments.length;
var i__5770__auto___14757 = (0);
while(true){
if((i__5770__auto___14757 < len__5769__auto___14756)){
args_arr__5794__auto__.push((arguments[i__5770__auto___14757]));

var G__14758 = (i__5770__auto___14757 + (1));
i__5770__auto___14757 = G__14758;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class1,class2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$lang$applyTo = (function (seq14666){
var G__14667 = cljs.core.first(seq14666);
var seq14666__$1 = cljs.core.next(seq14666);
var G__14668 = cljs.core.first(seq14666__$1);
var seq14666__$2 = cljs.core.next(seq14666__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14667,G__14668,seq14666__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$merge_props(var_args){
var G__14674 = arguments.length;
switch (G__14674) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___14760 = arguments.length;
var i__5770__auto___14761 = (0);
while(true){
if((i__5770__auto___14761 < len__5769__auto___14760)){
args_arr__5794__auto__.push((arguments[i__5770__auto___14761]));

var G__14762 = (i__5770__auto___14761 + (1));
i__5770__auto___14761 = G__14762;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1(defaults);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2(defaults,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$lang$applyTo = (function (seq14671){
var G__14672 = cljs.core.first(seq14671);
var seq14671__$1 = cljs.core.next(seq14671);
var G__14673 = cljs.core.first(seq14671__$1);
var seq14671__$2 = cljs.core.next(seq14671__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14672,G__14673,seq14671__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.flush = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$flush(){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$atom(var_args){
var G__14678 = arguments.length;
switch (G__14678) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___14768 = arguments.length;
var i__5770__auto___14769 = (0);
while(true){
if((i__5770__auto___14769 < len__5769__auto___14768)){
args_arr__5794__auto__.push((arguments[i__5770__auto___14769]));

var G__14770 = (i__5770__auto___14769 + (1));
i__5770__auto___14769 = G__14770;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$lang$applyTo = (function (seq14676){
var G__14677 = cljs.core.first(seq14676);
var seq14676__$1 = cljs.core.next(seq14676);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14677,seq14676__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14773 = arguments.length;
var i__5770__auto___14774 = (0);
while(true){
if((i__5770__auto___14774 < len__5769__auto___14773)){
args__5775__auto__.push((arguments[i__5770__auto___14774]));

var G__14775 = (i__5770__auto___14774 + (1));
i__5770__auto___14774 = G__14775;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.make_track(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$lang$applyTo = (function (seq14679){
var G__14680 = cljs.core.first(seq14679);
var seq14679__$1 = cljs.core.next(seq14679);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14680,seq14679__$1);
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$track_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14780 = arguments.length;
var i__5770__auto___14781 = (0);
while(true){
if((i__5770__auto___14781 < len__5769__auto___14780)){
args__5775__auto__.push((arguments[i__5770__auto___14781]));

var G__14783 = (i__5770__auto___14781 + (1));
i__5770__auto___14781 = G__14783;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.make_track_BANG_(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq14685){
var G__14686 = cljs.core.first(seq14685);
var seq14685__$1 = cljs.core.next(seq14685);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14686,seq14685__$1);
}));

/**
 * Stop the result of track! from updating.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$dispose_BANG_(x){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$wrap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14789 = arguments.length;
var i__5770__auto___14790 = (0);
while(true){
if((i__5770__auto___14790 < len__5769__auto___14789)){
args__5775__auto__.push((arguments[i__5770__auto___14790]));

var G__14791 = (i__5770__auto___14790 + (1));
i__5770__auto___14790 = G__14791;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reset_fn], 0))].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.make_wrapper(value,reset_fn,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq14689){
var G__14690 = cljs.core.first(seq14689);
var seq14689__$1 = cljs.core.next(seq14689);
var G__14691 = cljs.core.first(seq14689__$1);
var seq14689__$2 = cljs.core.next(seq14689__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14690,G__14691,seq14689__$2);
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$cursor(src,path){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$rswap_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14796 = arguments.length;
var i__5770__auto___14798 = (0);
while(true){
if((i__5770__auto___14798 < len__5769__auto___14796)){
args__5775__auto__.push((arguments[i__5770__auto___14798]));

var G__14800 = (i__5770__auto___14798 + (1));
i__5770__auto___14798 = G__14800;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__5045__auto__ = a.rswapfs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (a.rswapfs = []);
}
})().push((function (p1__14696_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__14696_SHARP_,args);
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__5806__auto__ = (function (){var G__14702 = a;
var G__14702__$1 = (((G__14702 == null))?null:G__14702.rswapfs);
if((G__14702__$1 == null)){
return null;
} else {
return G__14702__$1.shift();
}
})();
if((temp__5806__auto__ == null)){
return s;
} else {
var sf = temp__5806__auto__;
var G__14802 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__14802;
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq14697){
var G__14698 = cljs.core.first(seq14697);
var seq14697__$1 = cljs.core.next(seq14697);
var G__14699 = cljs.core.first(seq14697__$1);
var seq14697__$2 = cljs.core.next(seq14697__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14698,G__14699,seq14697__$2);
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.next_tick = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$next_tick(f){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.after_render = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$after_render(f){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$partial(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14806 = arguments.length;
var i__5770__auto___14807 = (0);
while(true){
if((i__5770__auto___14807 < len__5769__auto___14806)){
args__5775__auto__.push((arguments[i__5770__auto___14807]));

var G__14808 = (i__5770__auto___14807 + (1));
i__5770__auto___14807 = G__14808;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.make_partial_fn(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$lang$applyTo = (function (seq14707){
var G__14708 = cljs.core.first(seq14707);
var seq14707__$1 = cljs.core.next(seq14707);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14708,seq14707__$1);
}));

/**
 * Creates Compiler object with given `opts`,
 *   this can be passed to `render`, `as-element` and other functions to control
 *   how they turn the Reagent-style Hiccup into React components and elements.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_compiler = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$create_compiler(opts){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.create_compiler(opts);
});
/**
 * Globally sets the Compiler object used by `render`, `as-element` and other
 *   calls by default, when no `compiler` parameter is provided.
 * 
 *   Use `nil` value to restore the original default compiler.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.set_default_compiler_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$set_default_compiler_BANG_(compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.set_default_compiler_BANG_((((compiler == null))?day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.class_compiler:compiler));
});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14810 = arguments.length;
var i__5770__auto___14811 = (0);
while(true){
if((i__5770__auto___14811 < len__5769__auto___14810)){
args__5775__auto__.push((arguments[i__5770__auto___14811]));

var G__14812 = (i__5770__auto___14811 + (1));
i__5770__auto___14811 = G__14812;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw (new Error("Reagent.core/render function was moved to day8.re-frame-10x.inlined-deps.reagent.v1v2v0.reagent.dom namespace in Reagent v1.0."));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$lang$applyTo = (function (seq14721){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14721));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.js.map
