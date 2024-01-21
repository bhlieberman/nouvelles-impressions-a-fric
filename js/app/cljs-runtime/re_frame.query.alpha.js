import "./cljs_env.js";
import "./cljs.core.js";
import "./re_frame.db.js";
import "./re_frame.interop.js";
import "./re_frame.loggers.js";
import "./re_frame.register.alpha.js";
import "./re_frame.registrar.js";
import "./re_frame.trace.js";
goog.provide('re_frame.query.alpha');
re_frame.query.alpha.legacy_lifecycle = (function re_frame$query$alpha$legacy_lifecycle(v){
if(cljs.core.vector_QMARK_(v)){
var or__5045__auto__ = (function (){var G__28730 = cljs.core.meta(v);
return (re_frame.query.alpha.lifecycle.cljs$core$IFn$_invoke$arity$1 ? re_frame.query.alpha.lifecycle.cljs$core$IFn$_invoke$arity$1(G__28730) : re_frame.query.alpha.lifecycle.call(null,G__28730));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
} else {
return null;
}
});
re_frame.query.alpha.lifecycle = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(re_frame.query.alpha.legacy_lifecycle,new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),cljs.core.constantly(new cljs.core.Keyword(null,"default","default",-1987822328)));
re_frame.query.alpha.legacy_query_id = (function re_frame$query$alpha$legacy_query_id(q){
if(cljs.core.vector_QMARK_(q)){
return cljs.core.first(q);
} else {
return null;
}
});
re_frame.query.alpha.id = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(re_frame.query.alpha.legacy_query_id,new cljs.core.Keyword("re-frame","q","re-frame/q",-1128715212));
re_frame.query.alpha.method = (function re_frame$query$alpha$method(q){
var G__28732 = re_frame.query.alpha.lifecycle(q);
var fexpr__28731 = cljs.core.deref(re_frame.register.alpha.lifecycle__GT_method);
return (fexpr__28731.cljs$core$IFn$_invoke$arity$1 ? fexpr__28731.cljs$core$IFn$_invoke$arity$1(G__28732) : fexpr__28731.call(null,G__28732));
});
re_frame.query.alpha.clear_all_methods_BANG_ = (function re_frame$query$alpha$clear_all_methods_BANG_(){
return cljs.core.reset_BANG_(re_frame.register.alpha.lifecycle__GT_method,cljs.core.PersistentArrayMap.EMPTY);
});
re_frame.query.alpha.cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame.query.alpha.cached = (function re_frame$query$alpha$cached(q){
var temp__5806__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.query.alpha.cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.query.alpha.lifecycle(q),q], null));
if((temp__5806__auto__ == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__15981__auto___28748 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__15981__auto___28748);

return null;
} else {
return null;
}
} else {
var r = temp__5806__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__15981__auto___28749 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__15981__auto___28749);

} else {
}

return r;
}
});
re_frame.query.alpha.cache_BANG_ = (function re_frame$query$alpha$cache_BANG_(q,r){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.query.alpha.cache,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.query.alpha.lifecycle(q),q], null),r);

return r;
});
re_frame.query.alpha.clear_BANG_ = (function re_frame$query$alpha$clear_BANG_(var_args){
var G__28742 = arguments.length;
switch (G__28742) {
case 0:
return re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.reset_BANG_(re_frame.query.alpha.cache,cljs.core.PersistentArrayMap.EMPTY);
}));

(re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (q){
return re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$2(q,re_frame.query.alpha.lifecycle(q));
}));

(re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (q,strat){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.query.alpha.cache,cljs.core.update,strat,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q], 0));
}));

(re_frame.query.alpha.clear_BANG_.cljs$lang$maxFixedArity = 2);

re_frame.query.alpha.handle = (function re_frame$query$alpha$handle(q){
var handler = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),re_frame.query.alpha.id(q));
if((!((handler == null)))){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,q) : handler.call(null,re_frame.db.app_db,q));
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__15981__auto___28758 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__15981__auto___28758);

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no subscription handler registered for: ",re_frame.query.alpha.id(q),". Returning a nil subscription."], 0));
}
});
re_frame.query.alpha.query_QMARK_ = (function re_frame$query$alpha$query_QMARK_(q){
return (!(((function (){var and__5043__auto__ = re_frame.query.alpha.id(q);
if(cljs.core.truth_(and__5043__auto__)){
return re_frame.query.alpha.lifecycle(q);
} else {
return and__5043__auto__;
}
})() == null)));
});

//# sourceMappingURL=re_frame.query.alpha.js.map
