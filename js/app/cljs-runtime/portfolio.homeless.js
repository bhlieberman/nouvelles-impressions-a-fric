goog.provide('portfolio.homeless');
portfolio.homeless.debounce = (function portfolio$homeless$debounce(f,ms){
var timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__28680__delegate = function (args){
var G__28677_28681 = cljs.core.deref(timer);
if((G__28677_28681 == null)){
} else {
clearTimeout(G__28677_28681);
}

return cljs.core.reset_BANG_(timer,setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),ms));
};
var G__28680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28682__i = 0, G__28682__a = new Array(arguments.length -  0);
while (G__28682__i < G__28682__a.length) {G__28682__a[G__28682__i] = arguments[G__28682__i + 0]; ++G__28682__i;}
  args = new cljs.core.IndexedSeq(G__28682__a,0,null);
} 
return G__28680__delegate.call(this,args);};
G__28680.cljs$lang$maxFixedArity = 0;
G__28680.cljs$lang$applyTo = (function (arglist__28683){
var args = cljs.core.seq(arglist__28683);
return G__28680__delegate(args);
});
G__28680.cljs$core$IFn$_invoke$arity$variadic = G__28680__delegate;
return G__28680;
})()
;
});
portfolio.homeless.get_words = (function portfolio$homeless$get_words(s){
if(cljs.core.truth_(cljs.core.not_empty(s))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/[\- ]+/);
} else {
return null;
}
});
portfolio.homeless.__GT_title = (function portfolio$homeless$__GT_title(s){
return clojure.string.capitalize(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",portfolio.homeless.get_words(s)));
});
portfolio.homeless.title_case = (function portfolio$homeless$title_case(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,portfolio.homeless.get_words(s)));
});

//# sourceMappingURL=portfolio.homeless.js.map
