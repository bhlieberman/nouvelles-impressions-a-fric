goog.provide('dumdom.dom');
/**
 * Creates a virtual DOM element component of the specified type with attributes
 *   and optional children. Returns a function that renders the virtual DOM. This
 *   function expects a vector path and a key that addresses the component.
 */
dumdom.dom.el = (function dumdom$dom$el(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30901 = arguments.length;
var i__5770__auto___30902 = (0);
while(true){
if((i__5770__auto___30902 < len__5769__auto___30901)){
args__5775__auto__.push((arguments[i__5770__auto___30902]));

var G__30903 = (i__5770__auto___30902 + (1));
i__5770__auto___30902 = G__30903;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dumdom.dom.el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dumdom.dom.el.cljs$core$IFn$_invoke$arity$variadic = (function (type,attrs,children){
var el_fn = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(dumdom.element.create,type,attrs,dumdom.element.flatten_seqs(children));
(el_fn.dumdom = true);

return el_fn;
}));

(dumdom.dom.el.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.dom.el.cljs$lang$applyTo = (function (seq30377){
var G__30378 = cljs.core.first(seq30377);
var seq30377__$1 = cljs.core.next(seq30377);
var G__30379 = cljs.core.first(seq30377__$1);
var seq30377__$2 = cljs.core.next(seq30377__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30378,G__30379,seq30377__$2);
}));

dumdom.dom.a = (function dumdom$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30904 = arguments.length;
var i__5770__auto___30905 = (0);
while(true){
if((i__5770__auto___30905 < len__5769__auto___30904)){
args__5775__auto__.push((arguments[i__5770__auto___30905]));

var G__30906 = (i__5770__auto___30905 + (1));
i__5770__auto___30905 = G__30906;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"a",args__30359__auto__);
}));

(dumdom.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.a.cljs$lang$applyTo = (function (seq30404){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30404));
}));


dumdom.dom.abbr = (function dumdom$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30907 = arguments.length;
var i__5770__auto___30908 = (0);
while(true){
if((i__5770__auto___30908 < len__5769__auto___30907)){
args__5775__auto__.push((arguments[i__5770__auto___30908]));

var G__30909 = (i__5770__auto___30908 + (1));
i__5770__auto___30908 = G__30909;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"abbr",args__30359__auto__);
}));

(dumdom.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.abbr.cljs$lang$applyTo = (function (seq30492){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30492));
}));


dumdom.dom.address = (function dumdom$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30912 = arguments.length;
var i__5770__auto___30913 = (0);
while(true){
if((i__5770__auto___30913 < len__5769__auto___30912)){
args__5775__auto__.push((arguments[i__5770__auto___30913]));

var G__30915 = (i__5770__auto___30913 + (1));
i__5770__auto___30913 = G__30915;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"address",args__30359__auto__);
}));

(dumdom.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.address.cljs$lang$applyTo = (function (seq30498){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30498));
}));


dumdom.dom.area = (function dumdom$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30918 = arguments.length;
var i__5770__auto___30919 = (0);
while(true){
if((i__5770__auto___30919 < len__5769__auto___30918)){
args__5775__auto__.push((arguments[i__5770__auto___30919]));

var G__30920 = (i__5770__auto___30919 + (1));
i__5770__auto___30919 = G__30920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"area",args__30359__auto__);
}));

(dumdom.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.area.cljs$lang$applyTo = (function (seq30508){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30508));
}));


dumdom.dom.article = (function dumdom$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30922 = arguments.length;
var i__5770__auto___30923 = (0);
while(true){
if((i__5770__auto___30923 < len__5769__auto___30922)){
args__5775__auto__.push((arguments[i__5770__auto___30923]));

var G__30924 = (i__5770__auto___30923 + (1));
i__5770__auto___30923 = G__30924;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"article",args__30359__auto__);
}));

(dumdom.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.article.cljs$lang$applyTo = (function (seq30517){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30517));
}));


dumdom.dom.aside = (function dumdom$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30925 = arguments.length;
var i__5770__auto___30926 = (0);
while(true){
if((i__5770__auto___30926 < len__5769__auto___30925)){
args__5775__auto__.push((arguments[i__5770__auto___30926]));

var G__30927 = (i__5770__auto___30926 + (1));
i__5770__auto___30926 = G__30927;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"aside",args__30359__auto__);
}));

(dumdom.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.aside.cljs$lang$applyTo = (function (seq30521){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30521));
}));


dumdom.dom.audio = (function dumdom$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30928 = arguments.length;
var i__5770__auto___30929 = (0);
while(true){
if((i__5770__auto___30929 < len__5769__auto___30928)){
args__5775__auto__.push((arguments[i__5770__auto___30929]));

var G__30930 = (i__5770__auto___30929 + (1));
i__5770__auto___30929 = G__30930;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"audio",args__30359__auto__);
}));

(dumdom.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.audio.cljs$lang$applyTo = (function (seq30523){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30523));
}));


dumdom.dom.b = (function dumdom$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30931 = arguments.length;
var i__5770__auto___30932 = (0);
while(true){
if((i__5770__auto___30932 < len__5769__auto___30931)){
args__5775__auto__.push((arguments[i__5770__auto___30932]));

var G__30933 = (i__5770__auto___30932 + (1));
i__5770__auto___30932 = G__30933;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"b",args__30359__auto__);
}));

(dumdom.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.b.cljs$lang$applyTo = (function (seq30528){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30528));
}));


dumdom.dom.base = (function dumdom$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30934 = arguments.length;
var i__5770__auto___30935 = (0);
while(true){
if((i__5770__auto___30935 < len__5769__auto___30934)){
args__5775__auto__.push((arguments[i__5770__auto___30935]));

var G__30937 = (i__5770__auto___30935 + (1));
i__5770__auto___30935 = G__30937;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"base",args__30359__auto__);
}));

(dumdom.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.base.cljs$lang$applyTo = (function (seq30529){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30529));
}));


dumdom.dom.bdi = (function dumdom$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30939 = arguments.length;
var i__5770__auto___30940 = (0);
while(true){
if((i__5770__auto___30940 < len__5769__auto___30939)){
args__5775__auto__.push((arguments[i__5770__auto___30940]));

var G__30941 = (i__5770__auto___30940 + (1));
i__5770__auto___30940 = G__30941;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"bdi",args__30359__auto__);
}));

(dumdom.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdi.cljs$lang$applyTo = (function (seq30537){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30537));
}));


dumdom.dom.bdo = (function dumdom$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30943 = arguments.length;
var i__5770__auto___30944 = (0);
while(true){
if((i__5770__auto___30944 < len__5769__auto___30943)){
args__5775__auto__.push((arguments[i__5770__auto___30944]));

var G__30946 = (i__5770__auto___30944 + (1));
i__5770__auto___30944 = G__30946;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"bdo",args__30359__auto__);
}));

(dumdom.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdo.cljs$lang$applyTo = (function (seq30557){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30557));
}));


dumdom.dom.big = (function dumdom$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30948 = arguments.length;
var i__5770__auto___30950 = (0);
while(true){
if((i__5770__auto___30950 < len__5769__auto___30948)){
args__5775__auto__.push((arguments[i__5770__auto___30950]));

var G__30951 = (i__5770__auto___30950 + (1));
i__5770__auto___30950 = G__30951;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"big",args__30359__auto__);
}));

(dumdom.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.big.cljs$lang$applyTo = (function (seq30570){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30570));
}));


dumdom.dom.blockquote = (function dumdom$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30952 = arguments.length;
var i__5770__auto___30953 = (0);
while(true){
if((i__5770__auto___30953 < len__5769__auto___30952)){
args__5775__auto__.push((arguments[i__5770__auto___30953]));

var G__30954 = (i__5770__auto___30953 + (1));
i__5770__auto___30953 = G__30954;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"blockquote",args__30359__auto__);
}));

(dumdom.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.blockquote.cljs$lang$applyTo = (function (seq30577){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30577));
}));


dumdom.dom.body = (function dumdom$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30955 = arguments.length;
var i__5770__auto___30956 = (0);
while(true){
if((i__5770__auto___30956 < len__5769__auto___30955)){
args__5775__auto__.push((arguments[i__5770__auto___30956]));

var G__30957 = (i__5770__auto___30956 + (1));
i__5770__auto___30956 = G__30957;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"body",args__30359__auto__);
}));

(dumdom.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.body.cljs$lang$applyTo = (function (seq30581){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30581));
}));


dumdom.dom.br = (function dumdom$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30960 = arguments.length;
var i__5770__auto___30961 = (0);
while(true){
if((i__5770__auto___30961 < len__5769__auto___30960)){
args__5775__auto__.push((arguments[i__5770__auto___30961]));

var G__30963 = (i__5770__auto___30961 + (1));
i__5770__auto___30961 = G__30963;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"br",args__30359__auto__);
}));

(dumdom.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.br.cljs$lang$applyTo = (function (seq30585){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30585));
}));


dumdom.dom.button = (function dumdom$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30965 = arguments.length;
var i__5770__auto___30966 = (0);
while(true){
if((i__5770__auto___30966 < len__5769__auto___30965)){
args__5775__auto__.push((arguments[i__5770__auto___30966]));

var G__30967 = (i__5770__auto___30966 + (1));
i__5770__auto___30966 = G__30967;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"button",args__30359__auto__);
}));

(dumdom.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.button.cljs$lang$applyTo = (function (seq30593){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30593));
}));


dumdom.dom.canvas = (function dumdom$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30968 = arguments.length;
var i__5770__auto___30969 = (0);
while(true){
if((i__5770__auto___30969 < len__5769__auto___30968)){
args__5775__auto__.push((arguments[i__5770__auto___30969]));

var G__30970 = (i__5770__auto___30969 + (1));
i__5770__auto___30969 = G__30970;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"canvas",args__30359__auto__);
}));

(dumdom.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.canvas.cljs$lang$applyTo = (function (seq30597){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30597));
}));


dumdom.dom.caption = (function dumdom$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30975 = arguments.length;
var i__5770__auto___30976 = (0);
while(true){
if((i__5770__auto___30976 < len__5769__auto___30975)){
args__5775__auto__.push((arguments[i__5770__auto___30976]));

var G__30977 = (i__5770__auto___30976 + (1));
i__5770__auto___30976 = G__30977;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"caption",args__30359__auto__);
}));

(dumdom.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.caption.cljs$lang$applyTo = (function (seq30604){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30604));
}));


dumdom.dom.cite = (function dumdom$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30978 = arguments.length;
var i__5770__auto___30979 = (0);
while(true){
if((i__5770__auto___30979 < len__5769__auto___30978)){
args__5775__auto__.push((arguments[i__5770__auto___30979]));

var G__30981 = (i__5770__auto___30979 + (1));
i__5770__auto___30979 = G__30981;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"cite",args__30359__auto__);
}));

(dumdom.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.cite.cljs$lang$applyTo = (function (seq30606){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30606));
}));


dumdom.dom.code = (function dumdom$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30982 = arguments.length;
var i__5770__auto___30983 = (0);
while(true){
if((i__5770__auto___30983 < len__5769__auto___30982)){
args__5775__auto__.push((arguments[i__5770__auto___30983]));

var G__30984 = (i__5770__auto___30983 + (1));
i__5770__auto___30983 = G__30984;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"code",args__30359__auto__);
}));

(dumdom.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.code.cljs$lang$applyTo = (function (seq30614){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30614));
}));


dumdom.dom.col = (function dumdom$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30989 = arguments.length;
var i__5770__auto___30990 = (0);
while(true){
if((i__5770__auto___30990 < len__5769__auto___30989)){
args__5775__auto__.push((arguments[i__5770__auto___30990]));

var G__30991 = (i__5770__auto___30990 + (1));
i__5770__auto___30990 = G__30991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"col",args__30359__auto__);
}));

(dumdom.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.col.cljs$lang$applyTo = (function (seq30618){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30618));
}));


dumdom.dom.colgroup = (function dumdom$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30992 = arguments.length;
var i__5770__auto___30993 = (0);
while(true){
if((i__5770__auto___30993 < len__5769__auto___30992)){
args__5775__auto__.push((arguments[i__5770__auto___30993]));

var G__30994 = (i__5770__auto___30993 + (1));
i__5770__auto___30993 = G__30994;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"colgroup",args__30359__auto__);
}));

(dumdom.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.colgroup.cljs$lang$applyTo = (function (seq30622){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30622));
}));


dumdom.dom.data = (function dumdom$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30996 = arguments.length;
var i__5770__auto___30997 = (0);
while(true){
if((i__5770__auto___30997 < len__5769__auto___30996)){
args__5775__auto__.push((arguments[i__5770__auto___30997]));

var G__30998 = (i__5770__auto___30997 + (1));
i__5770__auto___30997 = G__30998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"data",args__30359__auto__);
}));

(dumdom.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.data.cljs$lang$applyTo = (function (seq30623){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30623));
}));


dumdom.dom.datalist = (function dumdom$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31001 = arguments.length;
var i__5770__auto___31002 = (0);
while(true){
if((i__5770__auto___31002 < len__5769__auto___31001)){
args__5775__auto__.push((arguments[i__5770__auto___31002]));

var G__31003 = (i__5770__auto___31002 + (1));
i__5770__auto___31002 = G__31003;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"datalist",args__30359__auto__);
}));

(dumdom.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.datalist.cljs$lang$applyTo = (function (seq30624){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30624));
}));


dumdom.dom.dd = (function dumdom$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31004 = arguments.length;
var i__5770__auto___31005 = (0);
while(true){
if((i__5770__auto___31005 < len__5769__auto___31004)){
args__5775__auto__.push((arguments[i__5770__auto___31005]));

var G__31006 = (i__5770__auto___31005 + (1));
i__5770__auto___31005 = G__31006;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dd",args__30359__auto__);
}));

(dumdom.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dd.cljs$lang$applyTo = (function (seq30625){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30625));
}));


dumdom.dom.del = (function dumdom$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31013 = arguments.length;
var i__5770__auto___31014 = (0);
while(true){
if((i__5770__auto___31014 < len__5769__auto___31013)){
args__5775__auto__.push((arguments[i__5770__auto___31014]));

var G__31015 = (i__5770__auto___31014 + (1));
i__5770__auto___31014 = G__31015;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"del",args__30359__auto__);
}));

(dumdom.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.del.cljs$lang$applyTo = (function (seq30628){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30628));
}));


dumdom.dom.details = (function dumdom$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31017 = arguments.length;
var i__5770__auto___31018 = (0);
while(true){
if((i__5770__auto___31018 < len__5769__auto___31017)){
args__5775__auto__.push((arguments[i__5770__auto___31018]));

var G__31019 = (i__5770__auto___31018 + (1));
i__5770__auto___31018 = G__31019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"details",args__30359__auto__);
}));

(dumdom.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.details.cljs$lang$applyTo = (function (seq30631){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30631));
}));


dumdom.dom.dfn = (function dumdom$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31020 = arguments.length;
var i__5770__auto___31021 = (0);
while(true){
if((i__5770__auto___31021 < len__5769__auto___31020)){
args__5775__auto__.push((arguments[i__5770__auto___31021]));

var G__31022 = (i__5770__auto___31021 + (1));
i__5770__auto___31021 = G__31022;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dfn",args__30359__auto__);
}));

(dumdom.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dfn.cljs$lang$applyTo = (function (seq30636){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30636));
}));


dumdom.dom.div = (function dumdom$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31028 = arguments.length;
var i__5770__auto___31029 = (0);
while(true){
if((i__5770__auto___31029 < len__5769__auto___31028)){
args__5775__auto__.push((arguments[i__5770__auto___31029]));

var G__31030 = (i__5770__auto___31029 + (1));
i__5770__auto___31029 = G__31030;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"div",args__30359__auto__);
}));

(dumdom.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.div.cljs$lang$applyTo = (function (seq30641){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30641));
}));


dumdom.dom.dl = (function dumdom$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31031 = arguments.length;
var i__5770__auto___31032 = (0);
while(true){
if((i__5770__auto___31032 < len__5769__auto___31031)){
args__5775__auto__.push((arguments[i__5770__auto___31032]));

var G__31034 = (i__5770__auto___31032 + (1));
i__5770__auto___31032 = G__31034;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dl",args__30359__auto__);
}));

(dumdom.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dl.cljs$lang$applyTo = (function (seq30652){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30652));
}));


dumdom.dom.dt = (function dumdom$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31035 = arguments.length;
var i__5770__auto___31037 = (0);
while(true){
if((i__5770__auto___31037 < len__5769__auto___31035)){
args__5775__auto__.push((arguments[i__5770__auto___31037]));

var G__31039 = (i__5770__auto___31037 + (1));
i__5770__auto___31037 = G__31039;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"dt",args__30359__auto__);
}));

(dumdom.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dt.cljs$lang$applyTo = (function (seq30656){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30656));
}));


dumdom.dom.em = (function dumdom$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31040 = arguments.length;
var i__5770__auto___31041 = (0);
while(true){
if((i__5770__auto___31041 < len__5769__auto___31040)){
args__5775__auto__.push((arguments[i__5770__auto___31041]));

var G__31044 = (i__5770__auto___31041 + (1));
i__5770__auto___31041 = G__31044;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"em",args__30359__auto__);
}));

(dumdom.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.em.cljs$lang$applyTo = (function (seq30660){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30660));
}));


dumdom.dom.embed = (function dumdom$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31049 = arguments.length;
var i__5770__auto___31050 = (0);
while(true){
if((i__5770__auto___31050 < len__5769__auto___31049)){
args__5775__auto__.push((arguments[i__5770__auto___31050]));

var G__31051 = (i__5770__auto___31050 + (1));
i__5770__auto___31050 = G__31051;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"embed",args__30359__auto__);
}));

(dumdom.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.embed.cljs$lang$applyTo = (function (seq30661){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30661));
}));


dumdom.dom.fieldset = (function dumdom$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31058 = arguments.length;
var i__5770__auto___31059 = (0);
while(true){
if((i__5770__auto___31059 < len__5769__auto___31058)){
args__5775__auto__.push((arguments[i__5770__auto___31059]));

var G__31062 = (i__5770__auto___31059 + (1));
i__5770__auto___31059 = G__31062;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"fieldset",args__30359__auto__);
}));

(dumdom.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.fieldset.cljs$lang$applyTo = (function (seq30662){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30662));
}));


dumdom.dom.figcaption = (function dumdom$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31069 = arguments.length;
var i__5770__auto___31070 = (0);
while(true){
if((i__5770__auto___31070 < len__5769__auto___31069)){
args__5775__auto__.push((arguments[i__5770__auto___31070]));

var G__31071 = (i__5770__auto___31070 + (1));
i__5770__auto___31070 = G__31071;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"figcaption",args__30359__auto__);
}));

(dumdom.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figcaption.cljs$lang$applyTo = (function (seq30667){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30667));
}));


dumdom.dom.figure = (function dumdom$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31075 = arguments.length;
var i__5770__auto___31077 = (0);
while(true){
if((i__5770__auto___31077 < len__5769__auto___31075)){
args__5775__auto__.push((arguments[i__5770__auto___31077]));

var G__31080 = (i__5770__auto___31077 + (1));
i__5770__auto___31077 = G__31080;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"figure",args__30359__auto__);
}));

(dumdom.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figure.cljs$lang$applyTo = (function (seq30672){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30672));
}));


dumdom.dom.footer = (function dumdom$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31087 = arguments.length;
var i__5770__auto___31088 = (0);
while(true){
if((i__5770__auto___31088 < len__5769__auto___31087)){
args__5775__auto__.push((arguments[i__5770__auto___31088]));

var G__31089 = (i__5770__auto___31088 + (1));
i__5770__auto___31088 = G__31089;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"footer",args__30359__auto__);
}));

(dumdom.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.footer.cljs$lang$applyTo = (function (seq30684){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30684));
}));


dumdom.dom.form = (function dumdom$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31090 = arguments.length;
var i__5770__auto___31091 = (0);
while(true){
if((i__5770__auto___31091 < len__5769__auto___31090)){
args__5775__auto__.push((arguments[i__5770__auto___31091]));

var G__31092 = (i__5770__auto___31091 + (1));
i__5770__auto___31091 = G__31092;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"form",args__30359__auto__);
}));

(dumdom.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.form.cljs$lang$applyTo = (function (seq30685){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30685));
}));


dumdom.dom.h1 = (function dumdom$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31093 = arguments.length;
var i__5770__auto___31094 = (0);
while(true){
if((i__5770__auto___31094 < len__5769__auto___31093)){
args__5775__auto__.push((arguments[i__5770__auto___31094]));

var G__31095 = (i__5770__auto___31094 + (1));
i__5770__auto___31094 = G__31095;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h1",args__30359__auto__);
}));

(dumdom.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h1.cljs$lang$applyTo = (function (seq30690){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30690));
}));


dumdom.dom.h2 = (function dumdom$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31101 = arguments.length;
var i__5770__auto___31102 = (0);
while(true){
if((i__5770__auto___31102 < len__5769__auto___31101)){
args__5775__auto__.push((arguments[i__5770__auto___31102]));

var G__31103 = (i__5770__auto___31102 + (1));
i__5770__auto___31102 = G__31103;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h2",args__30359__auto__);
}));

(dumdom.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h2.cljs$lang$applyTo = (function (seq30698){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30698));
}));


dumdom.dom.h3 = (function dumdom$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31107 = arguments.length;
var i__5770__auto___31108 = (0);
while(true){
if((i__5770__auto___31108 < len__5769__auto___31107)){
args__5775__auto__.push((arguments[i__5770__auto___31108]));

var G__31109 = (i__5770__auto___31108 + (1));
i__5770__auto___31108 = G__31109;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h3",args__30359__auto__);
}));

(dumdom.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h3.cljs$lang$applyTo = (function (seq30699){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30699));
}));


dumdom.dom.h4 = (function dumdom$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31111 = arguments.length;
var i__5770__auto___31112 = (0);
while(true){
if((i__5770__auto___31112 < len__5769__auto___31111)){
args__5775__auto__.push((arguments[i__5770__auto___31112]));

var G__31113 = (i__5770__auto___31112 + (1));
i__5770__auto___31112 = G__31113;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h4",args__30359__auto__);
}));

(dumdom.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h4.cljs$lang$applyTo = (function (seq30707){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30707));
}));


dumdom.dom.h5 = (function dumdom$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31121 = arguments.length;
var i__5770__auto___31122 = (0);
while(true){
if((i__5770__auto___31122 < len__5769__auto___31121)){
args__5775__auto__.push((arguments[i__5770__auto___31122]));

var G__31125 = (i__5770__auto___31122 + (1));
i__5770__auto___31122 = G__31125;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h5",args__30359__auto__);
}));

(dumdom.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h5.cljs$lang$applyTo = (function (seq30718){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30718));
}));


dumdom.dom.h6 = (function dumdom$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31127 = arguments.length;
var i__5770__auto___31128 = (0);
while(true){
if((i__5770__auto___31128 < len__5769__auto___31127)){
args__5775__auto__.push((arguments[i__5770__auto___31128]));

var G__31129 = (i__5770__auto___31128 + (1));
i__5770__auto___31128 = G__31129;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"h6",args__30359__auto__);
}));

(dumdom.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h6.cljs$lang$applyTo = (function (seq30725){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30725));
}));


dumdom.dom.head = (function dumdom$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31131 = arguments.length;
var i__5770__auto___31132 = (0);
while(true){
if((i__5770__auto___31132 < len__5769__auto___31131)){
args__5775__auto__.push((arguments[i__5770__auto___31132]));

var G__31133 = (i__5770__auto___31132 + (1));
i__5770__auto___31132 = G__31133;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"head",args__30359__auto__);
}));

(dumdom.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.head.cljs$lang$applyTo = (function (seq30728){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30728));
}));


dumdom.dom.header = (function dumdom$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31139 = arguments.length;
var i__5770__auto___31141 = (0);
while(true){
if((i__5770__auto___31141 < len__5769__auto___31139)){
args__5775__auto__.push((arguments[i__5770__auto___31141]));

var G__31142 = (i__5770__auto___31141 + (1));
i__5770__auto___31141 = G__31142;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"header",args__30359__auto__);
}));

(dumdom.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.header.cljs$lang$applyTo = (function (seq30731){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30731));
}));


dumdom.dom.hr = (function dumdom$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31145 = arguments.length;
var i__5770__auto___31146 = (0);
while(true){
if((i__5770__auto___31146 < len__5769__auto___31145)){
args__5775__auto__.push((arguments[i__5770__auto___31146]));

var G__31147 = (i__5770__auto___31146 + (1));
i__5770__auto___31146 = G__31147;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"hr",args__30359__auto__);
}));

(dumdom.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.hr.cljs$lang$applyTo = (function (seq30732){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30732));
}));


dumdom.dom.html = (function dumdom$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31148 = arguments.length;
var i__5770__auto___31149 = (0);
while(true){
if((i__5770__auto___31149 < len__5769__auto___31148)){
args__5775__auto__.push((arguments[i__5770__auto___31149]));

var G__31154 = (i__5770__auto___31149 + (1));
i__5770__auto___31149 = G__31154;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"html",args__30359__auto__);
}));

(dumdom.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.html.cljs$lang$applyTo = (function (seq30734){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30734));
}));


dumdom.dom.i = (function dumdom$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31162 = arguments.length;
var i__5770__auto___31163 = (0);
while(true){
if((i__5770__auto___31163 < len__5769__auto___31162)){
args__5775__auto__.push((arguments[i__5770__auto___31163]));

var G__31165 = (i__5770__auto___31163 + (1));
i__5770__auto___31163 = G__31165;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"i",args__30359__auto__);
}));

(dumdom.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.i.cljs$lang$applyTo = (function (seq30736){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30736));
}));


dumdom.dom.iframe = (function dumdom$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31167 = arguments.length;
var i__5770__auto___31168 = (0);
while(true){
if((i__5770__auto___31168 < len__5769__auto___31167)){
args__5775__auto__.push((arguments[i__5770__auto___31168]));

var G__31169 = (i__5770__auto___31168 + (1));
i__5770__auto___31168 = G__31169;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"iframe",args__30359__auto__);
}));

(dumdom.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.iframe.cljs$lang$applyTo = (function (seq30737){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30737));
}));


dumdom.dom.img = (function dumdom$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31174 = arguments.length;
var i__5770__auto___31175 = (0);
while(true){
if((i__5770__auto___31175 < len__5769__auto___31174)){
args__5775__auto__.push((arguments[i__5770__auto___31175]));

var G__31176 = (i__5770__auto___31175 + (1));
i__5770__auto___31175 = G__31176;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"img",args__30359__auto__);
}));

(dumdom.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.img.cljs$lang$applyTo = (function (seq30741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30741));
}));


dumdom.dom.input = (function dumdom$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31177 = arguments.length;
var i__5770__auto___31178 = (0);
while(true){
if((i__5770__auto___31178 < len__5769__auto___31177)){
args__5775__auto__.push((arguments[i__5770__auto___31178]));

var G__31179 = (i__5770__auto___31178 + (1));
i__5770__auto___31178 = G__31179;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"input",args__30359__auto__);
}));

(dumdom.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.input.cljs$lang$applyTo = (function (seq30784){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30784));
}));


dumdom.dom.ins = (function dumdom$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31186 = arguments.length;
var i__5770__auto___31187 = (0);
while(true){
if((i__5770__auto___31187 < len__5769__auto___31186)){
args__5775__auto__.push((arguments[i__5770__auto___31187]));

var G__31188 = (i__5770__auto___31187 + (1));
i__5770__auto___31187 = G__31188;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ins",args__30359__auto__);
}));

(dumdom.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ins.cljs$lang$applyTo = (function (seq30795){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30795));
}));


dumdom.dom.kbd = (function dumdom$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31191 = arguments.length;
var i__5770__auto___31192 = (0);
while(true){
if((i__5770__auto___31192 < len__5769__auto___31191)){
args__5775__auto__.push((arguments[i__5770__auto___31192]));

var G__31193 = (i__5770__auto___31192 + (1));
i__5770__auto___31192 = G__31193;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"kbd",args__30359__auto__);
}));

(dumdom.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.kbd.cljs$lang$applyTo = (function (seq30810){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30810));
}));


dumdom.dom.keygen = (function dumdom$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31200 = arguments.length;
var i__5770__auto___31201 = (0);
while(true){
if((i__5770__auto___31201 < len__5769__auto___31200)){
args__5775__auto__.push((arguments[i__5770__auto___31201]));

var G__31202 = (i__5770__auto___31201 + (1));
i__5770__auto___31201 = G__31202;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"keygen",args__30359__auto__);
}));

(dumdom.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.keygen.cljs$lang$applyTo = (function (seq30820){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30820));
}));


dumdom.dom.label = (function dumdom$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31205 = arguments.length;
var i__5770__auto___31206 = (0);
while(true){
if((i__5770__auto___31206 < len__5769__auto___31205)){
args__5775__auto__.push((arguments[i__5770__auto___31206]));

var G__31207 = (i__5770__auto___31206 + (1));
i__5770__auto___31206 = G__31207;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"label",args__30359__auto__);
}));

(dumdom.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.label.cljs$lang$applyTo = (function (seq30821){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30821));
}));


dumdom.dom.legend = (function dumdom$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31212 = arguments.length;
var i__5770__auto___31214 = (0);
while(true){
if((i__5770__auto___31214 < len__5769__auto___31212)){
args__5775__auto__.push((arguments[i__5770__auto___31214]));

var G__31217 = (i__5770__auto___31214 + (1));
i__5770__auto___31214 = G__31217;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"legend",args__30359__auto__);
}));

(dumdom.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.legend.cljs$lang$applyTo = (function (seq30822){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30822));
}));


dumdom.dom.li = (function dumdom$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31218 = arguments.length;
var i__5770__auto___31220 = (0);
while(true){
if((i__5770__auto___31220 < len__5769__auto___31218)){
args__5775__auto__.push((arguments[i__5770__auto___31220]));

var G__31221 = (i__5770__auto___31220 + (1));
i__5770__auto___31220 = G__31221;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"li",args__30359__auto__);
}));

(dumdom.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.li.cljs$lang$applyTo = (function (seq30823){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30823));
}));


dumdom.dom.link = (function dumdom$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31224 = arguments.length;
var i__5770__auto___31225 = (0);
while(true){
if((i__5770__auto___31225 < len__5769__auto___31224)){
args__5775__auto__.push((arguments[i__5770__auto___31225]));

var G__31226 = (i__5770__auto___31225 + (1));
i__5770__auto___31225 = G__31226;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"link",args__30359__auto__);
}));

(dumdom.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.link.cljs$lang$applyTo = (function (seq30824){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30824));
}));


dumdom.dom.main = (function dumdom$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31227 = arguments.length;
var i__5770__auto___31228 = (0);
while(true){
if((i__5770__auto___31228 < len__5769__auto___31227)){
args__5775__auto__.push((arguments[i__5770__auto___31228]));

var G__31229 = (i__5770__auto___31228 + (1));
i__5770__auto___31228 = G__31229;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"main",args__30359__auto__);
}));

(dumdom.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.main.cljs$lang$applyTo = (function (seq30825){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30825));
}));


dumdom.dom.map = (function dumdom$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31230 = arguments.length;
var i__5770__auto___31234 = (0);
while(true){
if((i__5770__auto___31234 < len__5769__auto___31230)){
args__5775__auto__.push((arguments[i__5770__auto___31234]));

var G__31235 = (i__5770__auto___31234 + (1));
i__5770__auto___31234 = G__31235;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"map",args__30359__auto__);
}));

(dumdom.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.map.cljs$lang$applyTo = (function (seq30826){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30826));
}));


dumdom.dom.mark = (function dumdom$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31237 = arguments.length;
var i__5770__auto___31238 = (0);
while(true){
if((i__5770__auto___31238 < len__5769__auto___31237)){
args__5775__auto__.push((arguments[i__5770__auto___31238]));

var G__31239 = (i__5770__auto___31238 + (1));
i__5770__auto___31238 = G__31239;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"mark",args__30359__auto__);
}));

(dumdom.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mark.cljs$lang$applyTo = (function (seq30827){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30827));
}));


dumdom.dom.menu = (function dumdom$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31240 = arguments.length;
var i__5770__auto___31242 = (0);
while(true){
if((i__5770__auto___31242 < len__5769__auto___31240)){
args__5775__auto__.push((arguments[i__5770__auto___31242]));

var G__31243 = (i__5770__auto___31242 + (1));
i__5770__auto___31242 = G__31243;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"menu",args__30359__auto__);
}));

(dumdom.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menu.cljs$lang$applyTo = (function (seq30828){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30828));
}));


dumdom.dom.menuitem = (function dumdom$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31244 = arguments.length;
var i__5770__auto___31245 = (0);
while(true){
if((i__5770__auto___31245 < len__5769__auto___31244)){
args__5775__auto__.push((arguments[i__5770__auto___31245]));

var G__31246 = (i__5770__auto___31245 + (1));
i__5770__auto___31245 = G__31246;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"menuitem",args__30359__auto__);
}));

(dumdom.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menuitem.cljs$lang$applyTo = (function (seq30829){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30829));
}));


dumdom.dom.meta = (function dumdom$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31255 = arguments.length;
var i__5770__auto___31256 = (0);
while(true){
if((i__5770__auto___31256 < len__5769__auto___31255)){
args__5775__auto__.push((arguments[i__5770__auto___31256]));

var G__31258 = (i__5770__auto___31256 + (1));
i__5770__auto___31256 = G__31258;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"meta",args__30359__auto__);
}));

(dumdom.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meta.cljs$lang$applyTo = (function (seq30830){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30830));
}));


dumdom.dom.meter = (function dumdom$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31262 = arguments.length;
var i__5770__auto___31263 = (0);
while(true){
if((i__5770__auto___31263 < len__5769__auto___31262)){
args__5775__auto__.push((arguments[i__5770__auto___31263]));

var G__31264 = (i__5770__auto___31263 + (1));
i__5770__auto___31263 = G__31264;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"meter",args__30359__auto__);
}));

(dumdom.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meter.cljs$lang$applyTo = (function (seq30831){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30831));
}));


dumdom.dom.nav = (function dumdom$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31265 = arguments.length;
var i__5770__auto___31266 = (0);
while(true){
if((i__5770__auto___31266 < len__5769__auto___31265)){
args__5775__auto__.push((arguments[i__5770__auto___31266]));

var G__31268 = (i__5770__auto___31266 + (1));
i__5770__auto___31266 = G__31268;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"nav",args__30359__auto__);
}));

(dumdom.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.nav.cljs$lang$applyTo = (function (seq30832){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30832));
}));


dumdom.dom.noscript = (function dumdom$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31272 = arguments.length;
var i__5770__auto___31274 = (0);
while(true){
if((i__5770__auto___31274 < len__5769__auto___31272)){
args__5775__auto__.push((arguments[i__5770__auto___31274]));

var G__31275 = (i__5770__auto___31274 + (1));
i__5770__auto___31274 = G__31275;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"noscript",args__30359__auto__);
}));

(dumdom.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.noscript.cljs$lang$applyTo = (function (seq30833){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30833));
}));


dumdom.dom.object = (function dumdom$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31279 = arguments.length;
var i__5770__auto___31280 = (0);
while(true){
if((i__5770__auto___31280 < len__5769__auto___31279)){
args__5775__auto__.push((arguments[i__5770__auto___31280]));

var G__31281 = (i__5770__auto___31280 + (1));
i__5770__auto___31280 = G__31281;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"object",args__30359__auto__);
}));

(dumdom.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.object.cljs$lang$applyTo = (function (seq30834){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30834));
}));


dumdom.dom.ol = (function dumdom$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31284 = arguments.length;
var i__5770__auto___31285 = (0);
while(true){
if((i__5770__auto___31285 < len__5769__auto___31284)){
args__5775__auto__.push((arguments[i__5770__auto___31285]));

var G__31286 = (i__5770__auto___31285 + (1));
i__5770__auto___31285 = G__31286;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ol",args__30359__auto__);
}));

(dumdom.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ol.cljs$lang$applyTo = (function (seq30835){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30835));
}));


dumdom.dom.optgroup = (function dumdom$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31295 = arguments.length;
var i__5770__auto___31296 = (0);
while(true){
if((i__5770__auto___31296 < len__5769__auto___31295)){
args__5775__auto__.push((arguments[i__5770__auto___31296]));

var G__31297 = (i__5770__auto___31296 + (1));
i__5770__auto___31296 = G__31297;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"optgroup",args__30359__auto__);
}));

(dumdom.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.optgroup.cljs$lang$applyTo = (function (seq30836){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30836));
}));


dumdom.dom.option = (function dumdom$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31298 = arguments.length;
var i__5770__auto___31299 = (0);
while(true){
if((i__5770__auto___31299 < len__5769__auto___31298)){
args__5775__auto__.push((arguments[i__5770__auto___31299]));

var G__31300 = (i__5770__auto___31299 + (1));
i__5770__auto___31299 = G__31300;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"option",args__30359__auto__);
}));

(dumdom.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.option.cljs$lang$applyTo = (function (seq30837){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30837));
}));


dumdom.dom.output = (function dumdom$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31308 = arguments.length;
var i__5770__auto___31309 = (0);
while(true){
if((i__5770__auto___31309 < len__5769__auto___31308)){
args__5775__auto__.push((arguments[i__5770__auto___31309]));

var G__31310 = (i__5770__auto___31309 + (1));
i__5770__auto___31309 = G__31310;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"output",args__30359__auto__);
}));

(dumdom.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.output.cljs$lang$applyTo = (function (seq30838){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30838));
}));


dumdom.dom.p = (function dumdom$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31311 = arguments.length;
var i__5770__auto___31312 = (0);
while(true){
if((i__5770__auto___31312 < len__5769__auto___31311)){
args__5775__auto__.push((arguments[i__5770__auto___31312]));

var G__31314 = (i__5770__auto___31312 + (1));
i__5770__auto___31312 = G__31314;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"p",args__30359__auto__);
}));

(dumdom.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.p.cljs$lang$applyTo = (function (seq30839){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30839));
}));


dumdom.dom.param = (function dumdom$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31319 = arguments.length;
var i__5770__auto___31320 = (0);
while(true){
if((i__5770__auto___31320 < len__5769__auto___31319)){
args__5775__auto__.push((arguments[i__5770__auto___31320]));

var G__31323 = (i__5770__auto___31320 + (1));
i__5770__auto___31320 = G__31323;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"param",args__30359__auto__);
}));

(dumdom.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.param.cljs$lang$applyTo = (function (seq30840){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30840));
}));


dumdom.dom.pre = (function dumdom$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31325 = arguments.length;
var i__5770__auto___31326 = (0);
while(true){
if((i__5770__auto___31326 < len__5769__auto___31325)){
args__5775__auto__.push((arguments[i__5770__auto___31326]));

var G__31328 = (i__5770__auto___31326 + (1));
i__5770__auto___31326 = G__31328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"pre",args__30359__auto__);
}));

(dumdom.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pre.cljs$lang$applyTo = (function (seq30841){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30841));
}));


dumdom.dom.progress = (function dumdom$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31330 = arguments.length;
var i__5770__auto___31331 = (0);
while(true){
if((i__5770__auto___31331 < len__5769__auto___31330)){
args__5775__auto__.push((arguments[i__5770__auto___31331]));

var G__31332 = (i__5770__auto___31331 + (1));
i__5770__auto___31331 = G__31332;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"progress",args__30359__auto__);
}));

(dumdom.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.progress.cljs$lang$applyTo = (function (seq30842){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30842));
}));


dumdom.dom.q = (function dumdom$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31336 = arguments.length;
var i__5770__auto___31337 = (0);
while(true){
if((i__5770__auto___31337 < len__5769__auto___31336)){
args__5775__auto__.push((arguments[i__5770__auto___31337]));

var G__31338 = (i__5770__auto___31337 + (1));
i__5770__auto___31337 = G__31338;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"q",args__30359__auto__);
}));

(dumdom.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.q.cljs$lang$applyTo = (function (seq30843){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30843));
}));


dumdom.dom.rp = (function dumdom$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31339 = arguments.length;
var i__5770__auto___31340 = (0);
while(true){
if((i__5770__auto___31340 < len__5769__auto___31339)){
args__5775__auto__.push((arguments[i__5770__auto___31340]));

var G__31341 = (i__5770__auto___31340 + (1));
i__5770__auto___31340 = G__31341;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"rp",args__30359__auto__);
}));

(dumdom.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rp.cljs$lang$applyTo = (function (seq30844){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30844));
}));


dumdom.dom.rt = (function dumdom$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31342 = arguments.length;
var i__5770__auto___31343 = (0);
while(true){
if((i__5770__auto___31343 < len__5769__auto___31342)){
args__5775__auto__.push((arguments[i__5770__auto___31343]));

var G__31344 = (i__5770__auto___31343 + (1));
i__5770__auto___31343 = G__31344;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"rt",args__30359__auto__);
}));

(dumdom.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rt.cljs$lang$applyTo = (function (seq30845){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30845));
}));


dumdom.dom.ruby = (function dumdom$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31349 = arguments.length;
var i__5770__auto___31350 = (0);
while(true){
if((i__5770__auto___31350 < len__5769__auto___31349)){
args__5775__auto__.push((arguments[i__5770__auto___31350]));

var G__31351 = (i__5770__auto___31350 + (1));
i__5770__auto___31350 = G__31351;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ruby",args__30359__auto__);
}));

(dumdom.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ruby.cljs$lang$applyTo = (function (seq30846){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30846));
}));


dumdom.dom.s = (function dumdom$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31352 = arguments.length;
var i__5770__auto___31353 = (0);
while(true){
if((i__5770__auto___31353 < len__5769__auto___31352)){
args__5775__auto__.push((arguments[i__5770__auto___31353]));

var G__31354 = (i__5770__auto___31353 + (1));
i__5770__auto___31353 = G__31354;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"s",args__30359__auto__);
}));

(dumdom.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.s.cljs$lang$applyTo = (function (seq30847){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30847));
}));


dumdom.dom.samp = (function dumdom$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31358 = arguments.length;
var i__5770__auto___31359 = (0);
while(true){
if((i__5770__auto___31359 < len__5769__auto___31358)){
args__5775__auto__.push((arguments[i__5770__auto___31359]));

var G__31362 = (i__5770__auto___31359 + (1));
i__5770__auto___31359 = G__31362;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"samp",args__30359__auto__);
}));

(dumdom.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.samp.cljs$lang$applyTo = (function (seq30848){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30848));
}));


dumdom.dom.script = (function dumdom$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31366 = arguments.length;
var i__5770__auto___31367 = (0);
while(true){
if((i__5770__auto___31367 < len__5769__auto___31366)){
args__5775__auto__.push((arguments[i__5770__auto___31367]));

var G__31368 = (i__5770__auto___31367 + (1));
i__5770__auto___31367 = G__31368;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"script",args__30359__auto__);
}));

(dumdom.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.script.cljs$lang$applyTo = (function (seq30849){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30849));
}));


dumdom.dom.section = (function dumdom$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31369 = arguments.length;
var i__5770__auto___31370 = (0);
while(true){
if((i__5770__auto___31370 < len__5769__auto___31369)){
args__5775__auto__.push((arguments[i__5770__auto___31370]));

var G__31371 = (i__5770__auto___31370 + (1));
i__5770__auto___31370 = G__31371;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"section",args__30359__auto__);
}));

(dumdom.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.section.cljs$lang$applyTo = (function (seq30850){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30850));
}));


dumdom.dom.select = (function dumdom$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31374 = arguments.length;
var i__5770__auto___31375 = (0);
while(true){
if((i__5770__auto___31375 < len__5769__auto___31374)){
args__5775__auto__.push((arguments[i__5770__auto___31375]));

var G__31376 = (i__5770__auto___31375 + (1));
i__5770__auto___31375 = G__31376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"select",args__30359__auto__);
}));

(dumdom.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.select.cljs$lang$applyTo = (function (seq30851){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30851));
}));


dumdom.dom.small = (function dumdom$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31379 = arguments.length;
var i__5770__auto___31380 = (0);
while(true){
if((i__5770__auto___31380 < len__5769__auto___31379)){
args__5775__auto__.push((arguments[i__5770__auto___31380]));

var G__31381 = (i__5770__auto___31380 + (1));
i__5770__auto___31380 = G__31381;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"small",args__30359__auto__);
}));

(dumdom.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.small.cljs$lang$applyTo = (function (seq30852){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30852));
}));


dumdom.dom.source = (function dumdom$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31384 = arguments.length;
var i__5770__auto___31385 = (0);
while(true){
if((i__5770__auto___31385 < len__5769__auto___31384)){
args__5775__auto__.push((arguments[i__5770__auto___31385]));

var G__31386 = (i__5770__auto___31385 + (1));
i__5770__auto___31385 = G__31386;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"source",args__30359__auto__);
}));

(dumdom.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.source.cljs$lang$applyTo = (function (seq30853){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30853));
}));


dumdom.dom.span = (function dumdom$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31390 = arguments.length;
var i__5770__auto___31391 = (0);
while(true){
if((i__5770__auto___31391 < len__5769__auto___31390)){
args__5775__auto__.push((arguments[i__5770__auto___31391]));

var G__31392 = (i__5770__auto___31391 + (1));
i__5770__auto___31391 = G__31392;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"span",args__30359__auto__);
}));

(dumdom.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.span.cljs$lang$applyTo = (function (seq30854){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30854));
}));


dumdom.dom.strong = (function dumdom$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31398 = arguments.length;
var i__5770__auto___31399 = (0);
while(true){
if((i__5770__auto___31399 < len__5769__auto___31398)){
args__5775__auto__.push((arguments[i__5770__auto___31399]));

var G__31403 = (i__5770__auto___31399 + (1));
i__5770__auto___31399 = G__31403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"strong",args__30359__auto__);
}));

(dumdom.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.strong.cljs$lang$applyTo = (function (seq30855){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30855));
}));


dumdom.dom.style = (function dumdom$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31404 = arguments.length;
var i__5770__auto___31405 = (0);
while(true){
if((i__5770__auto___31405 < len__5769__auto___31404)){
args__5775__auto__.push((arguments[i__5770__auto___31405]));

var G__31406 = (i__5770__auto___31405 + (1));
i__5770__auto___31405 = G__31406;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"style",args__30359__auto__);
}));

(dumdom.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.style.cljs$lang$applyTo = (function (seq30856){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30856));
}));


dumdom.dom.sub = (function dumdom$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31407 = arguments.length;
var i__5770__auto___31408 = (0);
while(true){
if((i__5770__auto___31408 < len__5769__auto___31407)){
args__5775__auto__.push((arguments[i__5770__auto___31408]));

var G__31410 = (i__5770__auto___31408 + (1));
i__5770__auto___31408 = G__31410;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"sub",args__30359__auto__);
}));

(dumdom.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sub.cljs$lang$applyTo = (function (seq30857){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30857));
}));


dumdom.dom.summary = (function dumdom$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31413 = arguments.length;
var i__5770__auto___31414 = (0);
while(true){
if((i__5770__auto___31414 < len__5769__auto___31413)){
args__5775__auto__.push((arguments[i__5770__auto___31414]));

var G__31416 = (i__5770__auto___31414 + (1));
i__5770__auto___31414 = G__31416;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"summary",args__30359__auto__);
}));

(dumdom.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.summary.cljs$lang$applyTo = (function (seq30858){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30858));
}));


dumdom.dom.sup = (function dumdom$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31420 = arguments.length;
var i__5770__auto___31421 = (0);
while(true){
if((i__5770__auto___31421 < len__5769__auto___31420)){
args__5775__auto__.push((arguments[i__5770__auto___31421]));

var G__31422 = (i__5770__auto___31421 + (1));
i__5770__auto___31421 = G__31422;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"sup",args__30359__auto__);
}));

(dumdom.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sup.cljs$lang$applyTo = (function (seq30859){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30859));
}));


dumdom.dom.table = (function dumdom$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31423 = arguments.length;
var i__5770__auto___31424 = (0);
while(true){
if((i__5770__auto___31424 < len__5769__auto___31423)){
args__5775__auto__.push((arguments[i__5770__auto___31424]));

var G__31425 = (i__5770__auto___31424 + (1));
i__5770__auto___31424 = G__31425;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"table",args__30359__auto__);
}));

(dumdom.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.table.cljs$lang$applyTo = (function (seq30860){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30860));
}));


dumdom.dom.tbody = (function dumdom$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31427 = arguments.length;
var i__5770__auto___31428 = (0);
while(true){
if((i__5770__auto___31428 < len__5769__auto___31427)){
args__5775__auto__.push((arguments[i__5770__auto___31428]));

var G__31430 = (i__5770__auto___31428 + (1));
i__5770__auto___31428 = G__31430;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tbody",args__30359__auto__);
}));

(dumdom.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tbody.cljs$lang$applyTo = (function (seq30861){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30861));
}));


dumdom.dom.td = (function dumdom$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31434 = arguments.length;
var i__5770__auto___31435 = (0);
while(true){
if((i__5770__auto___31435 < len__5769__auto___31434)){
args__5775__auto__.push((arguments[i__5770__auto___31435]));

var G__31436 = (i__5770__auto___31435 + (1));
i__5770__auto___31435 = G__31436;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"td",args__30359__auto__);
}));

(dumdom.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.td.cljs$lang$applyTo = (function (seq30862){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30862));
}));


dumdom.dom.textarea = (function dumdom$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31439 = arguments.length;
var i__5770__auto___31440 = (0);
while(true){
if((i__5770__auto___31440 < len__5769__auto___31439)){
args__5775__auto__.push((arguments[i__5770__auto___31440]));

var G__31442 = (i__5770__auto___31440 + (1));
i__5770__auto___31440 = G__31442;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"textarea",args__30359__auto__);
}));

(dumdom.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.textarea.cljs$lang$applyTo = (function (seq30863){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30863));
}));


dumdom.dom.tfoot = (function dumdom$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31447 = arguments.length;
var i__5770__auto___31448 = (0);
while(true){
if((i__5770__auto___31448 < len__5769__auto___31447)){
args__5775__auto__.push((arguments[i__5770__auto___31448]));

var G__31450 = (i__5770__auto___31448 + (1));
i__5770__auto___31448 = G__31450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tfoot",args__30359__auto__);
}));

(dumdom.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tfoot.cljs$lang$applyTo = (function (seq30864){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30864));
}));


dumdom.dom.th = (function dumdom$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31452 = arguments.length;
var i__5770__auto___31453 = (0);
while(true){
if((i__5770__auto___31453 < len__5769__auto___31452)){
args__5775__auto__.push((arguments[i__5770__auto___31453]));

var G__31454 = (i__5770__auto___31453 + (1));
i__5770__auto___31453 = G__31454;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"th",args__30359__auto__);
}));

(dumdom.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.th.cljs$lang$applyTo = (function (seq30865){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30865));
}));


dumdom.dom.thead = (function dumdom$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31455 = arguments.length;
var i__5770__auto___31456 = (0);
while(true){
if((i__5770__auto___31456 < len__5769__auto___31455)){
args__5775__auto__.push((arguments[i__5770__auto___31456]));

var G__31457 = (i__5770__auto___31456 + (1));
i__5770__auto___31456 = G__31457;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"thead",args__30359__auto__);
}));

(dumdom.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.thead.cljs$lang$applyTo = (function (seq30866){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30866));
}));


dumdom.dom.time = (function dumdom$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31460 = arguments.length;
var i__5770__auto___31461 = (0);
while(true){
if((i__5770__auto___31461 < len__5769__auto___31460)){
args__5775__auto__.push((arguments[i__5770__auto___31461]));

var G__31462 = (i__5770__auto___31461 + (1));
i__5770__auto___31461 = G__31462;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"time",args__30359__auto__);
}));

(dumdom.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.time.cljs$lang$applyTo = (function (seq30867){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30867));
}));


dumdom.dom.title = (function dumdom$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31463 = arguments.length;
var i__5770__auto___31464 = (0);
while(true){
if((i__5770__auto___31464 < len__5769__auto___31463)){
args__5775__auto__.push((arguments[i__5770__auto___31464]));

var G__31465 = (i__5770__auto___31464 + (1));
i__5770__auto___31464 = G__31465;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"title",args__30359__auto__);
}));

(dumdom.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.title.cljs$lang$applyTo = (function (seq30868){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30868));
}));


dumdom.dom.tr = (function dumdom$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31466 = arguments.length;
var i__5770__auto___31467 = (0);
while(true){
if((i__5770__auto___31467 < len__5769__auto___31466)){
args__5775__auto__.push((arguments[i__5770__auto___31467]));

var G__31468 = (i__5770__auto___31467 + (1));
i__5770__auto___31467 = G__31468;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tr",args__30359__auto__);
}));

(dumdom.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tr.cljs$lang$applyTo = (function (seq30869){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30869));
}));


dumdom.dom.track = (function dumdom$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31470 = arguments.length;
var i__5770__auto___31471 = (0);
while(true){
if((i__5770__auto___31471 < len__5769__auto___31470)){
args__5775__auto__.push((arguments[i__5770__auto___31471]));

var G__31473 = (i__5770__auto___31471 + (1));
i__5770__auto___31471 = G__31473;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"track",args__30359__auto__);
}));

(dumdom.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.track.cljs$lang$applyTo = (function (seq30870){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30870));
}));


dumdom.dom.u = (function dumdom$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31475 = arguments.length;
var i__5770__auto___31476 = (0);
while(true){
if((i__5770__auto___31476 < len__5769__auto___31475)){
args__5775__auto__.push((arguments[i__5770__auto___31476]));

var G__31477 = (i__5770__auto___31476 + (1));
i__5770__auto___31476 = G__31477;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"u",args__30359__auto__);
}));

(dumdom.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.u.cljs$lang$applyTo = (function (seq30871){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30871));
}));


dumdom.dom.ul = (function dumdom$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31482 = arguments.length;
var i__5770__auto___31484 = (0);
while(true){
if((i__5770__auto___31484 < len__5769__auto___31482)){
args__5775__auto__.push((arguments[i__5770__auto___31484]));

var G__31485 = (i__5770__auto___31484 + (1));
i__5770__auto___31484 = G__31485;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ul",args__30359__auto__);
}));

(dumdom.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ul.cljs$lang$applyTo = (function (seq30872){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30872));
}));


dumdom.dom.var$ = (function dumdom$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31487 = arguments.length;
var i__5770__auto___31489 = (0);
while(true){
if((i__5770__auto___31489 < len__5769__auto___31487)){
args__5775__auto__.push((arguments[i__5770__auto___31489]));

var G__31491 = (i__5770__auto___31489 + (1));
i__5770__auto___31489 = G__31491;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"var",args__30359__auto__);
}));

(dumdom.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.var$.cljs$lang$applyTo = (function (seq30873){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30873));
}));


dumdom.dom.video = (function dumdom$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31492 = arguments.length;
var i__5770__auto___31493 = (0);
while(true){
if((i__5770__auto___31493 < len__5769__auto___31492)){
args__5775__auto__.push((arguments[i__5770__auto___31493]));

var G__31494 = (i__5770__auto___31493 + (1));
i__5770__auto___31493 = G__31494;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"video",args__30359__auto__);
}));

(dumdom.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.video.cljs$lang$applyTo = (function (seq30874){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30874));
}));


dumdom.dom.wbr = (function dumdom$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31496 = arguments.length;
var i__5770__auto___31497 = (0);
while(true){
if((i__5770__auto___31497 < len__5769__auto___31496)){
args__5775__auto__.push((arguments[i__5770__auto___31497]));

var G__31500 = (i__5770__auto___31497 + (1));
i__5770__auto___31497 = G__31500;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"wbr",args__30359__auto__);
}));

(dumdom.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.wbr.cljs$lang$applyTo = (function (seq30875){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30875));
}));


dumdom.dom.circle = (function dumdom$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31501 = arguments.length;
var i__5770__auto___31502 = (0);
while(true){
if((i__5770__auto___31502 < len__5769__auto___31501)){
args__5775__auto__.push((arguments[i__5770__auto___31502]));

var G__31503 = (i__5770__auto___31502 + (1));
i__5770__auto___31502 = G__31503;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"circle",args__30359__auto__);
}));

(dumdom.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.circle.cljs$lang$applyTo = (function (seq30876){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30876));
}));


dumdom.dom.clipPath = (function dumdom$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31504 = arguments.length;
var i__5770__auto___31505 = (0);
while(true){
if((i__5770__auto___31505 < len__5769__auto___31504)){
args__5775__auto__.push((arguments[i__5770__auto___31505]));

var G__31507 = (i__5770__auto___31505 + (1));
i__5770__auto___31505 = G__31507;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"clipPath",args__30359__auto__);
}));

(dumdom.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.clipPath.cljs$lang$applyTo = (function (seq30877){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30877));
}));


dumdom.dom.defs = (function dumdom$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31509 = arguments.length;
var i__5770__auto___31510 = (0);
while(true){
if((i__5770__auto___31510 < len__5769__auto___31509)){
args__5775__auto__.push((arguments[i__5770__auto___31510]));

var G__31511 = (i__5770__auto___31510 + (1));
i__5770__auto___31510 = G__31511;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"defs",args__30359__auto__);
}));

(dumdom.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.defs.cljs$lang$applyTo = (function (seq30878){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30878));
}));


dumdom.dom.ellipse = (function dumdom$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31512 = arguments.length;
var i__5770__auto___31513 = (0);
while(true){
if((i__5770__auto___31513 < len__5769__auto___31512)){
args__5775__auto__.push((arguments[i__5770__auto___31513]));

var G__31514 = (i__5770__auto___31513 + (1));
i__5770__auto___31513 = G__31514;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"ellipse",args__30359__auto__);
}));

(dumdom.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ellipse.cljs$lang$applyTo = (function (seq30879){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30879));
}));


dumdom.dom.g = (function dumdom$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31517 = arguments.length;
var i__5770__auto___31518 = (0);
while(true){
if((i__5770__auto___31518 < len__5769__auto___31517)){
args__5775__auto__.push((arguments[i__5770__auto___31518]));

var G__31520 = (i__5770__auto___31518 + (1));
i__5770__auto___31518 = G__31520;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"g",args__30359__auto__);
}));

(dumdom.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.g.cljs$lang$applyTo = (function (seq30880){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30880));
}));


dumdom.dom.image = (function dumdom$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31521 = arguments.length;
var i__5770__auto___31522 = (0);
while(true){
if((i__5770__auto___31522 < len__5769__auto___31521)){
args__5775__auto__.push((arguments[i__5770__auto___31522]));

var G__31523 = (i__5770__auto___31522 + (1));
i__5770__auto___31522 = G__31523;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"image",args__30359__auto__);
}));

(dumdom.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.image.cljs$lang$applyTo = (function (seq30881){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30881));
}));


dumdom.dom.line = (function dumdom$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31524 = arguments.length;
var i__5770__auto___31526 = (0);
while(true){
if((i__5770__auto___31526 < len__5769__auto___31524)){
args__5775__auto__.push((arguments[i__5770__auto___31526]));

var G__31527 = (i__5770__auto___31526 + (1));
i__5770__auto___31526 = G__31527;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"line",args__30359__auto__);
}));

(dumdom.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.line.cljs$lang$applyTo = (function (seq30882){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30882));
}));


dumdom.dom.linearGradient = (function dumdom$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31528 = arguments.length;
var i__5770__auto___31529 = (0);
while(true){
if((i__5770__auto___31529 < len__5769__auto___31528)){
args__5775__auto__.push((arguments[i__5770__auto___31529]));

var G__31530 = (i__5770__auto___31529 + (1));
i__5770__auto___31529 = G__31530;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"linearGradient",args__30359__auto__);
}));

(dumdom.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.linearGradient.cljs$lang$applyTo = (function (seq30883){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30883));
}));


dumdom.dom.mask = (function dumdom$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31533 = arguments.length;
var i__5770__auto___31534 = (0);
while(true){
if((i__5770__auto___31534 < len__5769__auto___31533)){
args__5775__auto__.push((arguments[i__5770__auto___31534]));

var G__31535 = (i__5770__auto___31534 + (1));
i__5770__auto___31534 = G__31535;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"mask",args__30359__auto__);
}));

(dumdom.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mask.cljs$lang$applyTo = (function (seq30884){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30884));
}));


dumdom.dom.path = (function dumdom$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31539 = arguments.length;
var i__5770__auto___31540 = (0);
while(true){
if((i__5770__auto___31540 < len__5769__auto___31539)){
args__5775__auto__.push((arguments[i__5770__auto___31540]));

var G__31541 = (i__5770__auto___31540 + (1));
i__5770__auto___31540 = G__31541;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"path",args__30359__auto__);
}));

(dumdom.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.path.cljs$lang$applyTo = (function (seq30885){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30885));
}));


dumdom.dom.pattern = (function dumdom$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31546 = arguments.length;
var i__5770__auto___31547 = (0);
while(true){
if((i__5770__auto___31547 < len__5769__auto___31546)){
args__5775__auto__.push((arguments[i__5770__auto___31547]));

var G__31548 = (i__5770__auto___31547 + (1));
i__5770__auto___31547 = G__31548;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"pattern",args__30359__auto__);
}));

(dumdom.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pattern.cljs$lang$applyTo = (function (seq30886){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30886));
}));


dumdom.dom.polygon = (function dumdom$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31550 = arguments.length;
var i__5770__auto___31551 = (0);
while(true){
if((i__5770__auto___31551 < len__5769__auto___31550)){
args__5775__auto__.push((arguments[i__5770__auto___31551]));

var G__31552 = (i__5770__auto___31551 + (1));
i__5770__auto___31551 = G__31552;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"polygon",args__30359__auto__);
}));

(dumdom.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polygon.cljs$lang$applyTo = (function (seq30887){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30887));
}));


dumdom.dom.polyline = (function dumdom$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31553 = arguments.length;
var i__5770__auto___31554 = (0);
while(true){
if((i__5770__auto___31554 < len__5769__auto___31553)){
args__5775__auto__.push((arguments[i__5770__auto___31554]));

var G__31555 = (i__5770__auto___31554 + (1));
i__5770__auto___31554 = G__31555;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"polyline",args__30359__auto__);
}));

(dumdom.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polyline.cljs$lang$applyTo = (function (seq30888){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30888));
}));


dumdom.dom.radialGradient = (function dumdom$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31559 = arguments.length;
var i__5770__auto___31560 = (0);
while(true){
if((i__5770__auto___31560 < len__5769__auto___31559)){
args__5775__auto__.push((arguments[i__5770__auto___31560]));

var G__31561 = (i__5770__auto___31560 + (1));
i__5770__auto___31560 = G__31561;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"radialGradient",args__30359__auto__);
}));

(dumdom.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.radialGradient.cljs$lang$applyTo = (function (seq30889){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30889));
}));


dumdom.dom.rect = (function dumdom$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31564 = arguments.length;
var i__5770__auto___31565 = (0);
while(true){
if((i__5770__auto___31565 < len__5769__auto___31564)){
args__5775__auto__.push((arguments[i__5770__auto___31565]));

var G__31566 = (i__5770__auto___31565 + (1));
i__5770__auto___31565 = G__31566;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"rect",args__30359__auto__);
}));

(dumdom.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rect.cljs$lang$applyTo = (function (seq30890){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30890));
}));


dumdom.dom.stop = (function dumdom$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31570 = arguments.length;
var i__5770__auto___31571 = (0);
while(true){
if((i__5770__auto___31571 < len__5769__auto___31570)){
args__5775__auto__.push((arguments[i__5770__auto___31571]));

var G__31573 = (i__5770__auto___31571 + (1));
i__5770__auto___31571 = G__31573;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"stop",args__30359__auto__);
}));

(dumdom.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.stop.cljs$lang$applyTo = (function (seq30891){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30891));
}));


dumdom.dom.svg = (function dumdom$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31574 = arguments.length;
var i__5770__auto___31575 = (0);
while(true){
if((i__5770__auto___31575 < len__5769__auto___31574)){
args__5775__auto__.push((arguments[i__5770__auto___31575]));

var G__31576 = (i__5770__auto___31575 + (1));
i__5770__auto___31575 = G__31576;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"svg",args__30359__auto__);
}));

(dumdom.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.svg.cljs$lang$applyTo = (function (seq30892){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30892));
}));


dumdom.dom.text = (function dumdom$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31577 = arguments.length;
var i__5770__auto___31578 = (0);
while(true){
if((i__5770__auto___31578 < len__5769__auto___31577)){
args__5775__auto__.push((arguments[i__5770__auto___31578]));

var G__31579 = (i__5770__auto___31578 + (1));
i__5770__auto___31578 = G__31579;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"text",args__30359__auto__);
}));

(dumdom.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.text.cljs$lang$applyTo = (function (seq30893){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30893));
}));


dumdom.dom.tspan = (function dumdom$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31581 = arguments.length;
var i__5770__auto___31582 = (0);
while(true){
if((i__5770__auto___31582 < len__5769__auto___31581)){
args__5775__auto__.push((arguments[i__5770__auto___31582]));

var G__31583 = (i__5770__auto___31582 + (1));
i__5770__auto___31582 = G__31583;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__30359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dumdom.dom.el,"tspan",args__30359__auto__);
}));

(dumdom.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tspan.cljs$lang$applyTo = (function (seq30894){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30894));
}));


dumdom.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image],[dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image]);

//# sourceMappingURL=dumdom.dom.js.map
