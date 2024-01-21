goog.provide('portfolio.ui.components.elastic_container');
portfolio.ui.components.elastic_container.clean_up_after_transition = (function portfolio$ui$components$elastic_container$clean_up_after_transition(node,callback,ms){
return setTimeout((function (_){
(node.style.overflow = "auto");

(node.style.height = "auto");

node.setAttribute("data-ec-anim","done");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}),ms);
});
portfolio.ui.components.elastic_container.enter = (function portfolio$ui$components$elastic_container$enter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30607 = arguments.length;
var i__5770__auto___30608 = (0);
while(true){
if((i__5770__auto___30608 < len__5769__auto___30607)){
args__5775__auto__.push((arguments[i__5770__auto___30608]));

var G__30609 = (i__5770__auto___30608 + (1));
i__5770__auto___30608 = G__30609;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return portfolio.ui.components.elastic_container.enter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(portfolio.ui.components.elastic_container.enter.cljs$core$IFn$_invoke$arity$variadic = (function (p__30589){
var vec__30590 = p__30589;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30590,(0),null);
return (function (node,callback,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("animating",node.getAttribute("data-ec-anim"))){
node.setAttribute("data-ec-anim","cancelled");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
node.setAttribute("data-ec-anim","animating");

(node.style.overflow = "hidden");

var target = node.getBoundingClientRect().height;
portfolio.ui.components.elastic_container.clean_up_after_transition(node,callback,(250));

(node.style.height = (0));

(node.style.transition = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "height 0.25s ease-in";
}
})());

return window.requestAnimationFrame((function (){
return (node.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"px"].join(''));
}));
}
});
}));

(portfolio.ui.components.elastic_container.enter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portfolio.ui.components.elastic_container.enter.cljs$lang$applyTo = (function (seq30586){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30586));
}));

portfolio.ui.components.elastic_container.leave = (function portfolio$ui$components$elastic_container$leave(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30611 = arguments.length;
var i__5770__auto___30612 = (0);
while(true){
if((i__5770__auto___30612 < len__5769__auto___30611)){
args__5775__auto__.push((arguments[i__5770__auto___30612]));

var G__30613 = (i__5770__auto___30612 + (1));
i__5770__auto___30612 = G__30613;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return portfolio.ui.components.elastic_container.leave.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(portfolio.ui.components.elastic_container.leave.cljs$core$IFn$_invoke$arity$variadic = (function (p__30598){
var vec__30599 = p__30598;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30599,(0),null);
return (function (node,callback){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("animating",node.getAttribute("data-ec-anim"))){
node.setAttribute("data-ec-anim","cancelled");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
(node.style.transition = "none");

(node.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.getBoundingClientRect().height),"px"].join(''));

(node.style.overflow = "hidden");

portfolio.ui.components.elastic_container.clean_up_after_transition(node,callback,(150));

(node.style.transition = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "height 0.15s ease-out";
}
})());

return window.requestAnimationFrame((function (){
return (node.style.height = (0));
}));
}
});
}));

(portfolio.ui.components.elastic_container.leave.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portfolio.ui.components.elastic_container.leave.cljs$lang$applyTo = (function (seq30595){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30595));
}));


//# sourceMappingURL=portfolio.ui.components.elastic_container.js.map
