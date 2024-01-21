import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__30656__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30660__i = 0, G__30660__a = new Array(arguments.length -  0);
while (G__30660__i < G__30660__a.length) {G__30660__a[G__30660__i] = arguments[G__30660__i + 0]; ++G__30660__i;}
  args = new cljs.core.IndexedSeq(G__30660__a,0,null);
} 
return G__30656__delegate.call(this,args);};
G__30656.cljs$lang$maxFixedArity = 0;
G__30656.cljs$lang$applyTo = (function (arglist__30661){
var args = cljs.core.seq(arglist__30661);
return G__30656__delegate(args);
});
G__30656.cljs$core$IFn$_invoke$arity$variadic = G__30656__delegate;
return G__30656;
})()
);

(o.error = (function() { 
var G__30662__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30667__i = 0, G__30667__a = new Array(arguments.length -  0);
while (G__30667__i < G__30667__a.length) {G__30667__a[G__30667__i] = arguments[G__30667__i + 0]; ++G__30667__i;}
  args = new cljs.core.IndexedSeq(G__30667__a,0,null);
} 
return G__30662__delegate.call(this,args);};
G__30662.cljs$lang$maxFixedArity = 0;
G__30662.cljs$lang$applyTo = (function (arglist__30668){
var args = cljs.core.seq(arglist__30668);
return G__30662__delegate(args);
});
G__30662.cljs$core$IFn$_invoke$arity$variadic = G__30662__delegate;
return G__30662;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
