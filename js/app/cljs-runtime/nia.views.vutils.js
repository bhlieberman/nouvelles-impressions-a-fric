import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('nia.views.vutils');
nia.views.vutils.toggle = (function nia$views$vutils$toggle(show_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-25.align-self-center","div.w-25.align-self-center",729970609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.rounded.p-2.w-50","input.btn.rounded.p-2.w-50",-493987410),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(show_QMARK_))?"bg-primary":"bg-muted border"),new cljs.core.Keyword(null,"default-value","default-value",232220170),(cljs.core.truth_(cljs.core.deref(show_QMARK_))?"On":"Off"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_QMARK_,cljs.core.not);
})], null)], null)], null);
});
nia.views.vutils.collapsible = (function nia$views$vutils$collapsible(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30051 = arguments.length;
var i__5770__auto___30052 = (0);
while(true){
if((i__5770__auto___30052 < len__5769__auto___30051)){
args__5775__auto__.push((arguments[i__5770__auto___30052]));

var G__30053 = (i__5770__auto___30052 + (1));
i__5770__auto___30052 = G__30053;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nia.views.vutils.collapsible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nia.views.vutils.collapsible.cljs$core$IFn$_invoke$arity$variadic = (function (el_type,show_QMARK_,args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el_type], null),(function (){var iter__5523__auto__ = (function nia$views$vutils$iter__30047(s__30048){
return (new cljs.core.LazySeq(null,(function (){
var s__30048__$1 = s__30048;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30048__$1);
if(temp__5804__auto__){
var s__30048__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30048__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30048__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30050 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30049 = (0);
while(true){
if((i__30049 < size__5522__auto__)){
var arg = cljs.core._nth(c__5521__auto__,i__30049);
cljs.core.chunk_append(b__30050,((cljs.core.sequential_QMARK_(arg))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(arg),((cljs.core.not(show_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"collapse"], null):cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.rest(arg)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el_type,((cljs.core.not(show_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"collapse"], null):cljs.core.PersistentArrayMap.EMPTY),arg], null)));

var G__30054 = (i__30049 + (1));
i__30049 = G__30054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30050),nia$views$vutils$iter__30047(cljs.core.chunk_rest(s__30048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30050),null);
}
} else {
var arg = cljs.core.first(s__30048__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(arg))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(arg),((cljs.core.not(show_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"collapse"], null):cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.rest(arg)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el_type,((cljs.core.not(show_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"collapse"], null):cljs.core.PersistentArrayMap.EMPTY),arg], null)),nia$views$vutils$iter__30047(cljs.core.rest(s__30048__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(args);
})());
}));

(nia.views.vutils.collapsible.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nia.views.vutils.collapsible.cljs$lang$applyTo = (function (seq30044){
var G__30045 = cljs.core.first(seq30044);
var seq30044__$1 = cljs.core.next(seq30044);
var G__30046 = cljs.core.first(seq30044__$1);
var seq30044__$2 = cljs.core.next(seq30044__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30045,G__30046,seq30044__$2);
}));


//# sourceMappingURL=nia.views.vutils.js.map
