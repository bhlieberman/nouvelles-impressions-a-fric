import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('re_frame.register.alpha');
if((typeof re_frame !== 'undefined') && (typeof re_frame.register !== 'undefined') && (typeof re_frame.register.alpha !== 'undefined') && (typeof re_frame.register.alpha.reg !== 'undefined')){
} else {
re_frame.register.alpha.reg = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__32992 = cljs.core.get_global_hierarchy;
return (fexpr__32992.cljs$core$IFn$_invoke$arity$0 ? fexpr__32992.cljs$core$IFn$_invoke$arity$0() : fexpr__32992.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-frame.register.alpha","reg"),(function() { 
var G__32998__delegate = function (kind,_){
return kind;
};
var G__32998 = function (kind,var_args){
var _ = null;
if (arguments.length > 1) {
var G__32999__i = 0, G__32999__a = new Array(arguments.length -  1);
while (G__32999__i < G__32999__a.length) {G__32999__a[G__32999__i] = arguments[G__32999__i + 1]; ++G__32999__i;}
  _ = new cljs.core.IndexedSeq(G__32999__a,0,null);
} 
return G__32998__delegate.call(this,kind,_);};
G__32998.cljs$lang$maxFixedArity = 1;
G__32998.cljs$lang$applyTo = (function (arglist__33000){
var kind = cljs.core.first(arglist__33000);
var _ = cljs.core.rest(arglist__33000);
return G__32998__delegate(kind,_);
});
G__32998.cljs$core$IFn$_invoke$arity$variadic = G__32998__delegate;
return G__32998;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
re_frame.register.alpha.lifecycle__GT_method = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=re_frame.register.alpha.js.map
