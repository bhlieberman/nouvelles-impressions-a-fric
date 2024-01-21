import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./camel_snake_kebab.internals.misc.js";
import "./camel_snake_kebab.internals.alter_name.js";
goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29795 = arguments.length;
var i__5770__auto___29796 = (0);
while(true){
if((i__5770__auto___29796 < len__5769__auto___29795)){
args__5775__auto__.push((arguments[i__5770__auto___29796]));

var G__29797 = (i__5770__auto___29796 + (1));
i__5770__auto___29796 = G__29797;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq29734){
var G__29735 = cljs.core.first(seq29734);
var seq29734__$1 = cljs.core.next(seq29734);
var G__29736 = cljs.core.first(seq29734__$1);
var seq29734__$2 = cljs.core.next(seq29734__$1);
var G__29737 = cljs.core.first(seq29734__$2);
var seq29734__$3 = cljs.core.next(seq29734__$2);
var G__29738 = cljs.core.first(seq29734__$3);
var seq29734__$4 = cljs.core.next(seq29734__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29735,G__29736,G__29737,G__29738,seq29734__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29798 = arguments.length;
var i__5770__auto___29799 = (0);
while(true){
if((i__5770__auto___29799 < len__5769__auto___29798)){
args__5775__auto__.push((arguments[i__5770__auto___29799]));

var G__29800 = (i__5770__auto___29799 + (1));
i__5770__auto___29799 = G__29800;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26879__auto__,rest__26880__auto__){
var convert_case__26881__auto__ = (function (p1__26878__26882__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__26878__26882__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26880__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26879__auto__,convert_case__26881__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq29739){
var G__29740 = cljs.core.first(seq29739);
var seq29739__$1 = cljs.core.next(seq29739);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29740,seq29739__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29801 = arguments.length;
var i__5770__auto___29802 = (0);
while(true){
if((i__5770__auto___29802 < len__5769__auto___29801)){
args__5775__auto__.push((arguments[i__5770__auto___29802]));

var G__29803 = (i__5770__auto___29802 + (1));
i__5770__auto___29802 = G__29803;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq29741){
var G__29742 = cljs.core.first(seq29741);
var seq29741__$1 = cljs.core.next(seq29741);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29742,seq29741__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29804 = arguments.length;
var i__5770__auto___29805 = (0);
while(true){
if((i__5770__auto___29805 < len__5769__auto___29804)){
args__5775__auto__.push((arguments[i__5770__auto___29805]));

var G__29806 = (i__5770__auto___29805 + (1));
i__5770__auto___29805 = G__29806;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq29743){
var G__29744 = cljs.core.first(seq29743);
var seq29743__$1 = cljs.core.next(seq29743);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29744,seq29743__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29807 = arguments.length;
var i__5770__auto___29808 = (0);
while(true){
if((i__5770__auto___29808 < len__5769__auto___29807)){
args__5775__auto__.push((arguments[i__5770__auto___29808]));

var G__29809 = (i__5770__auto___29808 + (1));
i__5770__auto___29808 = G__29809;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq29745){
var G__29746 = cljs.core.first(seq29745);
var seq29745__$1 = cljs.core.next(seq29745);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29746,seq29745__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29810 = arguments.length;
var i__5770__auto___29811 = (0);
while(true){
if((i__5770__auto___29811 < len__5769__auto___29810)){
args__5775__auto__.push((arguments[i__5770__auto___29811]));

var G__29812 = (i__5770__auto___29811 + (1));
i__5770__auto___29811 = G__29812;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26879__auto__,rest__26880__auto__){
var convert_case__26881__auto__ = (function (p1__26878__26882__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__26878__26882__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26880__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26879__auto__,convert_case__26881__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq29747){
var G__29748 = cljs.core.first(seq29747);
var seq29747__$1 = cljs.core.next(seq29747);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29748,seq29747__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29813 = arguments.length;
var i__5770__auto___29814 = (0);
while(true){
if((i__5770__auto___29814 < len__5769__auto___29813)){
args__5775__auto__.push((arguments[i__5770__auto___29814]));

var G__29815 = (i__5770__auto___29814 + (1));
i__5770__auto___29814 = G__29815;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq29749){
var G__29750 = cljs.core.first(seq29749);
var seq29749__$1 = cljs.core.next(seq29749);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29750,seq29749__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29816 = arguments.length;
var i__5770__auto___29817 = (0);
while(true){
if((i__5770__auto___29817 < len__5769__auto___29816)){
args__5775__auto__.push((arguments[i__5770__auto___29817]));

var G__29818 = (i__5770__auto___29817 + (1));
i__5770__auto___29817 = G__29818;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq29751){
var G__29752 = cljs.core.first(seq29751);
var seq29751__$1 = cljs.core.next(seq29751);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29752,seq29751__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29820 = arguments.length;
var i__5770__auto___29821 = (0);
while(true){
if((i__5770__auto___29821 < len__5769__auto___29820)){
args__5775__auto__.push((arguments[i__5770__auto___29821]));

var G__29822 = (i__5770__auto___29821 + (1));
i__5770__auto___29821 = G__29822;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq29753){
var G__29754 = cljs.core.first(seq29753);
var seq29753__$1 = cljs.core.next(seq29753);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29754,seq29753__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29823 = arguments.length;
var i__5770__auto___29824 = (0);
while(true){
if((i__5770__auto___29824 < len__5769__auto___29823)){
args__5775__auto__.push((arguments[i__5770__auto___29824]));

var G__29825 = (i__5770__auto___29824 + (1));
i__5770__auto___29824 = G__29825;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26879__auto__,rest__26880__auto__){
var convert_case__26881__auto__ = (function (p1__26878__26882__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__26878__26882__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26880__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26879__auto__,convert_case__26881__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq29755){
var G__29756 = cljs.core.first(seq29755);
var seq29755__$1 = cljs.core.next(seq29755);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29756,seq29755__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29826 = arguments.length;
var i__5770__auto___29827 = (0);
while(true){
if((i__5770__auto___29827 < len__5769__auto___29826)){
args__5775__auto__.push((arguments[i__5770__auto___29827]));

var G__29828 = (i__5770__auto___29827 + (1));
i__5770__auto___29827 = G__29828;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq29757){
var G__29758 = cljs.core.first(seq29757);
var seq29757__$1 = cljs.core.next(seq29757);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29758,seq29757__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29829 = arguments.length;
var i__5770__auto___29831 = (0);
while(true){
if((i__5770__auto___29831 < len__5769__auto___29829)){
args__5775__auto__.push((arguments[i__5770__auto___29831]));

var G__29833 = (i__5770__auto___29831 + (1));
i__5770__auto___29831 = G__29833;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq29759){
var G__29760 = cljs.core.first(seq29759);
var seq29759__$1 = cljs.core.next(seq29759);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29760,seq29759__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29834 = arguments.length;
var i__5770__auto___29835 = (0);
while(true){
if((i__5770__auto___29835 < len__5769__auto___29834)){
args__5775__auto__.push((arguments[i__5770__auto___29835]));

var G__29836 = (i__5770__auto___29835 + (1));
i__5770__auto___29835 = G__29836;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq29761){
var G__29762 = cljs.core.first(seq29761);
var seq29761__$1 = cljs.core.next(seq29761);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29762,seq29761__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29837 = arguments.length;
var i__5770__auto___29838 = (0);
while(true){
if((i__5770__auto___29838 < len__5769__auto___29837)){
args__5775__auto__.push((arguments[i__5770__auto___29838]));

var G__29839 = (i__5770__auto___29838 + (1));
i__5770__auto___29838 = G__29839;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__26879__auto__,rest__26880__auto__){
var convert_case__26881__auto__ = (function (p1__26878__26882__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__26878__26882__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26880__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26879__auto__,convert_case__26881__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq29763){
var G__29764 = cljs.core.first(seq29763);
var seq29763__$1 = cljs.core.next(seq29763);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29764,seq29763__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29840 = arguments.length;
var i__5770__auto___29841 = (0);
while(true){
if((i__5770__auto___29841 < len__5769__auto___29840)){
args__5775__auto__.push((arguments[i__5770__auto___29841]));

var G__29842 = (i__5770__auto___29841 + (1));
i__5770__auto___29841 = G__29842;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq29765){
var G__29766 = cljs.core.first(seq29765);
var seq29765__$1 = cljs.core.next(seq29765);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29766,seq29765__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29843 = arguments.length;
var i__5770__auto___29844 = (0);
while(true){
if((i__5770__auto___29844 < len__5769__auto___29843)){
args__5775__auto__.push((arguments[i__5770__auto___29844]));

var G__29845 = (i__5770__auto___29844 + (1));
i__5770__auto___29844 = G__29845;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq29767){
var G__29768 = cljs.core.first(seq29767);
var seq29767__$1 = cljs.core.next(seq29767);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29768,seq29767__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29846 = arguments.length;
var i__5770__auto___29847 = (0);
while(true){
if((i__5770__auto___29847 < len__5769__auto___29846)){
args__5775__auto__.push((arguments[i__5770__auto___29847]));

var G__29848 = (i__5770__auto___29847 + (1));
i__5770__auto___29847 = G__29848;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq29769){
var G__29770 = cljs.core.first(seq29769);
var seq29769__$1 = cljs.core.next(seq29769);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29770,seq29769__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29849 = arguments.length;
var i__5770__auto___29850 = (0);
while(true){
if((i__5770__auto___29850 < len__5769__auto___29849)){
args__5775__auto__.push((arguments[i__5770__auto___29850]));

var G__29851 = (i__5770__auto___29850 + (1));
i__5770__auto___29850 = G__29851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26879__auto__,rest__26880__auto__){
var convert_case__26881__auto__ = (function (p1__26878__26882__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__26878__26882__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26880__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26879__auto__,convert_case__26881__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq29771){
var G__29772 = cljs.core.first(seq29771);
var seq29771__$1 = cljs.core.next(seq29771);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29772,seq29771__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29852 = arguments.length;
var i__5770__auto___29853 = (0);
while(true){
if((i__5770__auto___29853 < len__5769__auto___29852)){
args__5775__auto__.push((arguments[i__5770__auto___29853]));

var G__29854 = (i__5770__auto___29853 + (1));
i__5770__auto___29853 = G__29854;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq29773){
var G__29774 = cljs.core.first(seq29773);
var seq29773__$1 = cljs.core.next(seq29773);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29774,seq29773__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29855 = arguments.length;
var i__5770__auto___29856 = (0);
while(true){
if((i__5770__auto___29856 < len__5769__auto___29855)){
args__5775__auto__.push((arguments[i__5770__auto___29856]));

var G__29857 = (i__5770__auto___29856 + (1));
i__5770__auto___29856 = G__29857;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq29775){
var G__29776 = cljs.core.first(seq29775);
var seq29775__$1 = cljs.core.next(seq29775);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29776,seq29775__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29858 = arguments.length;
var i__5770__auto___29859 = (0);
while(true){
if((i__5770__auto___29859 < len__5769__auto___29858)){
args__5775__auto__.push((arguments[i__5770__auto___29859]));

var G__29860 = (i__5770__auto___29859 + (1));
i__5770__auto___29859 = G__29860;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq29777){
var G__29778 = cljs.core.first(seq29777);
var seq29777__$1 = cljs.core.next(seq29777);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29778,seq29777__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29861 = arguments.length;
var i__5770__auto___29862 = (0);
while(true){
if((i__5770__auto___29862 < len__5769__auto___29861)){
args__5775__auto__.push((arguments[i__5770__auto___29862]));

var G__29863 = (i__5770__auto___29862 + (1));
i__5770__auto___29862 = G__29863;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26879__auto__,rest__26880__auto__){
var convert_case__26881__auto__ = (function (p1__26878__26882__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__26878__26882__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26880__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26879__auto__,convert_case__26881__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq29779){
var G__29780 = cljs.core.first(seq29779);
var seq29779__$1 = cljs.core.next(seq29779);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29780,seq29779__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29864 = arguments.length;
var i__5770__auto___29865 = (0);
while(true){
if((i__5770__auto___29865 < len__5769__auto___29864)){
args__5775__auto__.push((arguments[i__5770__auto___29865]));

var G__29866 = (i__5770__auto___29865 + (1));
i__5770__auto___29865 = G__29866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq29781){
var G__29782 = cljs.core.first(seq29781);
var seq29781__$1 = cljs.core.next(seq29781);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29782,seq29781__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29867 = arguments.length;
var i__5770__auto___29868 = (0);
while(true){
if((i__5770__auto___29868 < len__5769__auto___29867)){
args__5775__auto__.push((arguments[i__5770__auto___29868]));

var G__29869 = (i__5770__auto___29868 + (1));
i__5770__auto___29868 = G__29869;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq29783){
var G__29784 = cljs.core.first(seq29783);
var seq29783__$1 = cljs.core.next(seq29783);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29784,seq29783__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29871 = arguments.length;
var i__5770__auto___29872 = (0);
while(true){
if((i__5770__auto___29872 < len__5769__auto___29871)){
args__5775__auto__.push((arguments[i__5770__auto___29872]));

var G__29873 = (i__5770__auto___29872 + (1));
i__5770__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq29785){
var G__29786 = cljs.core.first(seq29785);
var seq29785__$1 = cljs.core.next(seq29785);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29786,seq29785__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29875 = arguments.length;
var i__5770__auto___29876 = (0);
while(true){
if((i__5770__auto___29876 < len__5769__auto___29875)){
args__5775__auto__.push((arguments[i__5770__auto___29876]));

var G__29877 = (i__5770__auto___29876 + (1));
i__5770__auto___29876 = G__29877;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26879__auto__,rest__26880__auto__){
var convert_case__26881__auto__ = (function (p1__26878__26882__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__26878__26882__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26880__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26879__auto__,convert_case__26881__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq29787){
var G__29788 = cljs.core.first(seq29787);
var seq29787__$1 = cljs.core.next(seq29787);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29788,seq29787__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29878 = arguments.length;
var i__5770__auto___29879 = (0);
while(true){
if((i__5770__auto___29879 < len__5769__auto___29878)){
args__5775__auto__.push((arguments[i__5770__auto___29879]));

var G__29880 = (i__5770__auto___29879 + (1));
i__5770__auto___29879 = G__29880;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq29789){
var G__29790 = cljs.core.first(seq29789);
var seq29789__$1 = cljs.core.next(seq29789);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29790,seq29789__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29882 = arguments.length;
var i__5770__auto___29883 = (0);
while(true){
if((i__5770__auto___29883 < len__5769__auto___29882)){
args__5775__auto__.push((arguments[i__5770__auto___29883]));

var G__29884 = (i__5770__auto___29883 + (1));
i__5770__auto___29883 = G__29884;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq29791){
var G__29792 = cljs.core.first(seq29791);
var seq29791__$1 = cljs.core.next(seq29791);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29792,seq29791__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29886 = arguments.length;
var i__5770__auto___29887 = (0);
while(true){
if((i__5770__auto___29887 < len__5769__auto___29886)){
args__5775__auto__.push((arguments[i__5770__auto___29887]));

var G__29888 = (i__5770__auto___29887 + (1));
i__5770__auto___29887 = G__29888;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26884__auto__,rest__26885__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26884__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26885__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq29793){
var G__29794 = cljs.core.first(seq29793);
var seq29793__$1 = cljs.core.next(seq29793);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29794,seq29793__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
