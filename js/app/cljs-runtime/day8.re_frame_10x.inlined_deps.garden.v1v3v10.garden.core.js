import "./cljs_env.js";
import "./cljs.core.js";
import "./day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compiler.js";
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$core$css(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18047 = arguments.length;
var i__5770__auto___18048 = (0);
while(true){
if((i__5770__auto___18048 < len__5769__auto___18047)){
args__5775__auto__.push((arguments[i__5770__auto___18048]));

var G__18049 = (i__5770__auto___18048 + (1));
i__5770__auto___18048 = G__18049;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compiler.compile_css,rules);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$lang$applyTo = (function (seq18044){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18044));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$core$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18050 = arguments.length;
var i__5770__auto___18051 = (0);
while(true){
if((i__5770__auto___18051 < len__5769__auto___18050)){
args__5775__auto__.push((arguments[i__5770__auto___18051]));

var G__18052 = (i__5770__auto___18051 + (1));
i__5770__auto___18051 = G__18052;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compiler.compile_style(maps);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$lang$applyTo = (function (seq18046){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18046));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.js.map
