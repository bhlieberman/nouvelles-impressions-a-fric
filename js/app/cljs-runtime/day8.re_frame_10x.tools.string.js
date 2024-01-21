import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26812 = arguments.length;
var i__5770__auto___26813 = (0);
while(true){
if((i__5770__auto___26813 < len__5769__auto___26812)){
args__5775__auto__.push((arguments[i__5770__auto___26813]));

var G__26814 = (i__5770__auto___26813 + (1));
i__5770__auto___26813 = G__26814;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__26780){
var vec__26781 = p__26780;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26781,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq26773){
var G__26774 = cljs.core.first(seq26773);
var seq26773__$1 = cljs.core.next(seq26773);
var G__26775 = cljs.core.first(seq26773__$1);
var seq26773__$2 = cljs.core.next(seq26773__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26774,G__26775,seq26773__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26815 = arguments.length;
var i__5770__auto___26816 = (0);
while(true){
if((i__5770__auto___26816 < len__5769__auto___26815)){
args__5775__auto__.push((arguments[i__5770__auto___26816]));

var G__26817 = (i__5770__auto___26816 + (1));
i__5770__auto___26816 = G__26817;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__26804){
var vec__26805 = p__26804;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26805,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq26799){
var G__26800 = cljs.core.first(seq26799);
var seq26799__$1 = cljs.core.next(seq26799);
var G__26801 = cljs.core.first(seq26799__$1);
var seq26799__$2 = cljs.core.next(seq26799__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26800,G__26801,seq26799__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
