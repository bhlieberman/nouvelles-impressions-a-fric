import "./cljs_env.js";
import "./cljs.core.js";
import "./sci.impl.types.js";
import "./sci.impl.utils.js";
goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__34125 = arguments.length;
switch (G__34125) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__34142 = fixed_arity;
switch (G__34142) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__34144){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__34144);

while(true){
var ret__32859__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32859__auto__)){
continue;
} else {
return ret__32859__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__34144 = null;
if (arguments.length > 0) {
var G__35017__i = 0, G__35017__a = new Array(arguments.length -  0);
while (G__35017__i < G__35017__a.length) {G__35017__a[G__35017__i] = arguments[G__35017__i + 0]; ++G__35017__i;}
  G__34144 = new cljs.core.IndexedSeq(G__35017__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__34144);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__35018){
var G__34144 = cljs.core.seq(arglist__35018);
return sci$impl$fns$arity_0__delegate(G__34144);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__34151,G__34152){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34151);

(invoc_array[vararg_idx] = G__34152);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__34151,var_args){
var G__34152 = null;
if (arguments.length > 1) {
var G__35025__i = 0, G__35025__a = new Array(arguments.length -  1);
while (G__35025__i < G__35025__a.length) {G__35025__a[G__35025__i] = arguments[G__35025__i + 1]; ++G__35025__i;}
  G__34152 = new cljs.core.IndexedSeq(G__35025__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__34151,G__34152);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__35026){
var G__34151 = cljs.core.first(arglist__35026);
var G__34152 = cljs.core.rest(arglist__35026);
return sci$impl$fns$arity_1__delegate(G__34151,G__34152);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__34165,G__34166,G__34167){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34165);

(invoc_array[(1)] = G__34166);

(invoc_array[vararg_idx] = G__34167);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__34165,G__34166,var_args){
var G__34167 = null;
if (arguments.length > 2) {
var G__35027__i = 0, G__35027__a = new Array(arguments.length -  2);
while (G__35027__i < G__35027__a.length) {G__35027__a[G__35027__i] = arguments[G__35027__i + 2]; ++G__35027__i;}
  G__34167 = new cljs.core.IndexedSeq(G__35027__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__34165,G__34166,G__34167);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__35028){
var G__34165 = cljs.core.first(arglist__35028);
arglist__35028 = cljs.core.next(arglist__35028);
var G__34166 = cljs.core.first(arglist__35028);
var G__34167 = cljs.core.rest(arglist__35028);
return sci$impl$fns$arity_2__delegate(G__34165,G__34166,G__34167);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__34172,G__34173,G__34174,G__34175){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34172);

(invoc_array[(1)] = G__34173);

(invoc_array[(2)] = G__34174);

(invoc_array[vararg_idx] = G__34175);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__34172,G__34173,G__34174,var_args){
var G__34175 = null;
if (arguments.length > 3) {
var G__35029__i = 0, G__35029__a = new Array(arguments.length -  3);
while (G__35029__i < G__35029__a.length) {G__35029__a[G__35029__i] = arguments[G__35029__i + 3]; ++G__35029__i;}
  G__34175 = new cljs.core.IndexedSeq(G__35029__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__34172,G__34173,G__34174,G__34175);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__35031){
var G__34172 = cljs.core.first(arglist__35031);
arglist__35031 = cljs.core.next(arglist__35031);
var G__34173 = cljs.core.first(arglist__35031);
arglist__35031 = cljs.core.next(arglist__35031);
var G__34174 = cljs.core.first(arglist__35031);
var G__34175 = cljs.core.rest(arglist__35031);
return sci$impl$fns$arity_3__delegate(G__34172,G__34173,G__34174,G__34175);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__34192,G__34193,G__34194,G__34195,G__34196){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34192);

(invoc_array[(1)] = G__34193);

(invoc_array[(2)] = G__34194);

(invoc_array[(3)] = G__34195);

(invoc_array[vararg_idx] = G__34196);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__34192,G__34193,G__34194,G__34195,var_args){
var G__34196 = null;
if (arguments.length > 4) {
var G__35036__i = 0, G__35036__a = new Array(arguments.length -  4);
while (G__35036__i < G__35036__a.length) {G__35036__a[G__35036__i] = arguments[G__35036__i + 4]; ++G__35036__i;}
  G__34196 = new cljs.core.IndexedSeq(G__35036__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__34192,G__34193,G__34194,G__34195,G__34196);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__35037){
var G__34192 = cljs.core.first(arglist__35037);
arglist__35037 = cljs.core.next(arglist__35037);
var G__34193 = cljs.core.first(arglist__35037);
arglist__35037 = cljs.core.next(arglist__35037);
var G__34194 = cljs.core.first(arglist__35037);
arglist__35037 = cljs.core.next(arglist__35037);
var G__34195 = cljs.core.first(arglist__35037);
var G__34196 = cljs.core.rest(arglist__35037);
return sci$impl$fns$arity_4__delegate(G__34192,G__34193,G__34194,G__34195,G__34196);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__34224,G__34225,G__34226,G__34227,G__34228,G__34229){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34224);

(invoc_array[(1)] = G__34225);

(invoc_array[(2)] = G__34226);

(invoc_array[(3)] = G__34227);

(invoc_array[(4)] = G__34228);

(invoc_array[vararg_idx] = G__34229);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__34224,G__34225,G__34226,G__34227,G__34228,var_args){
var G__34229 = null;
if (arguments.length > 5) {
var G__35038__i = 0, G__35038__a = new Array(arguments.length -  5);
while (G__35038__i < G__35038__a.length) {G__35038__a[G__35038__i] = arguments[G__35038__i + 5]; ++G__35038__i;}
  G__34229 = new cljs.core.IndexedSeq(G__35038__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__34224,G__34225,G__34226,G__34227,G__34228,G__34229);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__35039){
var G__34224 = cljs.core.first(arglist__35039);
arglist__35039 = cljs.core.next(arglist__35039);
var G__34225 = cljs.core.first(arglist__35039);
arglist__35039 = cljs.core.next(arglist__35039);
var G__34226 = cljs.core.first(arglist__35039);
arglist__35039 = cljs.core.next(arglist__35039);
var G__34227 = cljs.core.first(arglist__35039);
arglist__35039 = cljs.core.next(arglist__35039);
var G__34228 = cljs.core.first(arglist__35039);
var G__34229 = cljs.core.rest(arglist__35039);
return sci$impl$fns$arity_5__delegate(G__34224,G__34225,G__34226,G__34227,G__34228,G__34229);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__34243,G__34244,G__34245,G__34246,G__34247,G__34248,G__34249){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34243);

(invoc_array[(1)] = G__34244);

(invoc_array[(2)] = G__34245);

(invoc_array[(3)] = G__34246);

(invoc_array[(4)] = G__34247);

(invoc_array[(5)] = G__34248);

(invoc_array[vararg_idx] = G__34249);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__34243,G__34244,G__34245,G__34246,G__34247,G__34248,var_args){
var G__34249 = null;
if (arguments.length > 6) {
var G__35044__i = 0, G__35044__a = new Array(arguments.length -  6);
while (G__35044__i < G__35044__a.length) {G__35044__a[G__35044__i] = arguments[G__35044__i + 6]; ++G__35044__i;}
  G__34249 = new cljs.core.IndexedSeq(G__35044__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__34243,G__34244,G__34245,G__34246,G__34247,G__34248,G__34249);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__35045){
var G__34243 = cljs.core.first(arglist__35045);
arglist__35045 = cljs.core.next(arglist__35045);
var G__34244 = cljs.core.first(arglist__35045);
arglist__35045 = cljs.core.next(arglist__35045);
var G__34245 = cljs.core.first(arglist__35045);
arglist__35045 = cljs.core.next(arglist__35045);
var G__34246 = cljs.core.first(arglist__35045);
arglist__35045 = cljs.core.next(arglist__35045);
var G__34247 = cljs.core.first(arglist__35045);
arglist__35045 = cljs.core.next(arglist__35045);
var G__34248 = cljs.core.first(arglist__35045);
var G__34249 = cljs.core.rest(arglist__35045);
return sci$impl$fns$arity_6__delegate(G__34243,G__34244,G__34245,G__34246,G__34247,G__34248,G__34249);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__34276,G__34277,G__34278,G__34279,G__34280,G__34281,G__34282,G__34283){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34276);

(invoc_array[(1)] = G__34277);

(invoc_array[(2)] = G__34278);

(invoc_array[(3)] = G__34279);

(invoc_array[(4)] = G__34280);

(invoc_array[(5)] = G__34281);

(invoc_array[(6)] = G__34282);

(invoc_array[vararg_idx] = G__34283);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__34276,G__34277,G__34278,G__34279,G__34280,G__34281,G__34282,var_args){
var G__34283 = null;
if (arguments.length > 7) {
var G__35046__i = 0, G__35046__a = new Array(arguments.length -  7);
while (G__35046__i < G__35046__a.length) {G__35046__a[G__35046__i] = arguments[G__35046__i + 7]; ++G__35046__i;}
  G__34283 = new cljs.core.IndexedSeq(G__35046__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__34276,G__34277,G__34278,G__34279,G__34280,G__34281,G__34282,G__34283);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__35047){
var G__34276 = cljs.core.first(arglist__35047);
arglist__35047 = cljs.core.next(arglist__35047);
var G__34277 = cljs.core.first(arglist__35047);
arglist__35047 = cljs.core.next(arglist__35047);
var G__34278 = cljs.core.first(arglist__35047);
arglist__35047 = cljs.core.next(arglist__35047);
var G__34279 = cljs.core.first(arglist__35047);
arglist__35047 = cljs.core.next(arglist__35047);
var G__34280 = cljs.core.first(arglist__35047);
arglist__35047 = cljs.core.next(arglist__35047);
var G__34281 = cljs.core.first(arglist__35047);
arglist__35047 = cljs.core.next(arglist__35047);
var G__34282 = cljs.core.first(arglist__35047);
var G__34283 = cljs.core.rest(arglist__35047);
return sci$impl$fns$arity_7__delegate(G__34276,G__34277,G__34278,G__34279,G__34280,G__34281,G__34282,G__34283);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__34290,G__34291,G__34292,G__34293,G__34294,G__34295,G__34296,G__34297,G__34298){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34290);

(invoc_array[(1)] = G__34291);

(invoc_array[(2)] = G__34292);

(invoc_array[(3)] = G__34293);

(invoc_array[(4)] = G__34294);

(invoc_array[(5)] = G__34295);

(invoc_array[(6)] = G__34296);

(invoc_array[(7)] = G__34297);

(invoc_array[vararg_idx] = G__34298);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__34290,G__34291,G__34292,G__34293,G__34294,G__34295,G__34296,G__34297,var_args){
var G__34298 = null;
if (arguments.length > 8) {
var G__35049__i = 0, G__35049__a = new Array(arguments.length -  8);
while (G__35049__i < G__35049__a.length) {G__35049__a[G__35049__i] = arguments[G__35049__i + 8]; ++G__35049__i;}
  G__34298 = new cljs.core.IndexedSeq(G__35049__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__34290,G__34291,G__34292,G__34293,G__34294,G__34295,G__34296,G__34297,G__34298);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__35050){
var G__34290 = cljs.core.first(arglist__35050);
arglist__35050 = cljs.core.next(arglist__35050);
var G__34291 = cljs.core.first(arglist__35050);
arglist__35050 = cljs.core.next(arglist__35050);
var G__34292 = cljs.core.first(arglist__35050);
arglist__35050 = cljs.core.next(arglist__35050);
var G__34293 = cljs.core.first(arglist__35050);
arglist__35050 = cljs.core.next(arglist__35050);
var G__34294 = cljs.core.first(arglist__35050);
arglist__35050 = cljs.core.next(arglist__35050);
var G__34295 = cljs.core.first(arglist__35050);
arglist__35050 = cljs.core.next(arglist__35050);
var G__34296 = cljs.core.first(arglist__35050);
arglist__35050 = cljs.core.next(arglist__35050);
var G__34297 = cljs.core.first(arglist__35050);
var G__34298 = cljs.core.rest(arglist__35050);
return sci$impl$fns$arity_8__delegate(G__34290,G__34291,G__34292,G__34293,G__34294,G__34295,G__34296,G__34297,G__34298);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__34299,G__34300,G__34301,G__34302,G__34303,G__34304,G__34305,G__34306,G__34307,G__34308){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34299);

(invoc_array[(1)] = G__34300);

(invoc_array[(2)] = G__34301);

(invoc_array[(3)] = G__34302);

(invoc_array[(4)] = G__34303);

(invoc_array[(5)] = G__34304);

(invoc_array[(6)] = G__34305);

(invoc_array[(7)] = G__34306);

(invoc_array[(8)] = G__34307);

(invoc_array[vararg_idx] = G__34308);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__34299,G__34300,G__34301,G__34302,G__34303,G__34304,G__34305,G__34306,G__34307,var_args){
var G__34308 = null;
if (arguments.length > 9) {
var G__35051__i = 0, G__35051__a = new Array(arguments.length -  9);
while (G__35051__i < G__35051__a.length) {G__35051__a[G__35051__i] = arguments[G__35051__i + 9]; ++G__35051__i;}
  G__34308 = new cljs.core.IndexedSeq(G__35051__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__34299,G__34300,G__34301,G__34302,G__34303,G__34304,G__34305,G__34306,G__34307,G__34308);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__35052){
var G__34299 = cljs.core.first(arglist__35052);
arglist__35052 = cljs.core.next(arglist__35052);
var G__34300 = cljs.core.first(arglist__35052);
arglist__35052 = cljs.core.next(arglist__35052);
var G__34301 = cljs.core.first(arglist__35052);
arglist__35052 = cljs.core.next(arglist__35052);
var G__34302 = cljs.core.first(arglist__35052);
arglist__35052 = cljs.core.next(arglist__35052);
var G__34303 = cljs.core.first(arglist__35052);
arglist__35052 = cljs.core.next(arglist__35052);
var G__34304 = cljs.core.first(arglist__35052);
arglist__35052 = cljs.core.next(arglist__35052);
var G__34305 = cljs.core.first(arglist__35052);
arglist__35052 = cljs.core.next(arglist__35052);
var G__34306 = cljs.core.first(arglist__35052);
arglist__35052 = cljs.core.next(arglist__35052);
var G__34307 = cljs.core.first(arglist__35052);
var G__34308 = cljs.core.rest(arglist__35052);
return sci$impl$fns$arity_9__delegate(G__34299,G__34300,G__34301,G__34302,G__34303,G__34304,G__34305,G__34306,G__34307,G__34308);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__34309,G__34310,G__34311,G__34312,G__34313,G__34314,G__34315,G__34316,G__34317,G__34318,G__34319){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34309);

(invoc_array[(1)] = G__34310);

(invoc_array[(2)] = G__34311);

(invoc_array[(3)] = G__34312);

(invoc_array[(4)] = G__34313);

(invoc_array[(5)] = G__34314);

(invoc_array[(6)] = G__34315);

(invoc_array[(7)] = G__34316);

(invoc_array[(8)] = G__34317);

(invoc_array[(9)] = G__34318);

(invoc_array[vararg_idx] = G__34319);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__34309,G__34310,G__34311,G__34312,G__34313,G__34314,G__34315,G__34316,G__34317,G__34318,var_args){
var G__34319 = null;
if (arguments.length > 10) {
var G__35054__i = 0, G__35054__a = new Array(arguments.length -  10);
while (G__35054__i < G__35054__a.length) {G__35054__a[G__35054__i] = arguments[G__35054__i + 10]; ++G__35054__i;}
  G__34319 = new cljs.core.IndexedSeq(G__35054__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__34309,G__34310,G__34311,G__34312,G__34313,G__34314,G__34315,G__34316,G__34317,G__34318,G__34319);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__35055){
var G__34309 = cljs.core.first(arglist__35055);
arglist__35055 = cljs.core.next(arglist__35055);
var G__34310 = cljs.core.first(arglist__35055);
arglist__35055 = cljs.core.next(arglist__35055);
var G__34311 = cljs.core.first(arglist__35055);
arglist__35055 = cljs.core.next(arglist__35055);
var G__34312 = cljs.core.first(arglist__35055);
arglist__35055 = cljs.core.next(arglist__35055);
var G__34313 = cljs.core.first(arglist__35055);
arglist__35055 = cljs.core.next(arglist__35055);
var G__34314 = cljs.core.first(arglist__35055);
arglist__35055 = cljs.core.next(arglist__35055);
var G__34315 = cljs.core.first(arglist__35055);
arglist__35055 = cljs.core.next(arglist__35055);
var G__34316 = cljs.core.first(arglist__35055);
arglist__35055 = cljs.core.next(arglist__35055);
var G__34317 = cljs.core.first(arglist__35055);
arglist__35055 = cljs.core.next(arglist__35055);
var G__34318 = cljs.core.first(arglist__35055);
var G__34319 = cljs.core.rest(arglist__35055);
return sci$impl$fns$arity_10__delegate(G__34309,G__34310,G__34311,G__34312,G__34313,G__34314,G__34315,G__34316,G__34317,G__34318,G__34319);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__34320,G__34321,G__34322,G__34323,G__34324,G__34325,G__34326,G__34327,G__34328,G__34329,G__34330,G__34331){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34320);

(invoc_array[(1)] = G__34321);

(invoc_array[(2)] = G__34322);

(invoc_array[(3)] = G__34323);

(invoc_array[(4)] = G__34324);

(invoc_array[(5)] = G__34325);

(invoc_array[(6)] = G__34326);

(invoc_array[(7)] = G__34327);

(invoc_array[(8)] = G__34328);

(invoc_array[(9)] = G__34329);

(invoc_array[(10)] = G__34330);

(invoc_array[vararg_idx] = G__34331);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__34320,G__34321,G__34322,G__34323,G__34324,G__34325,G__34326,G__34327,G__34328,G__34329,G__34330,var_args){
var G__34331 = null;
if (arguments.length > 11) {
var G__35061__i = 0, G__35061__a = new Array(arguments.length -  11);
while (G__35061__i < G__35061__a.length) {G__35061__a[G__35061__i] = arguments[G__35061__i + 11]; ++G__35061__i;}
  G__34331 = new cljs.core.IndexedSeq(G__35061__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__34320,G__34321,G__34322,G__34323,G__34324,G__34325,G__34326,G__34327,G__34328,G__34329,G__34330,G__34331);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__35062){
var G__34320 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34321 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34322 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34323 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34324 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34325 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34326 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34327 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34328 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34329 = cljs.core.first(arglist__35062);
arglist__35062 = cljs.core.next(arglist__35062);
var G__34330 = cljs.core.first(arglist__35062);
var G__34331 = cljs.core.rest(arglist__35062);
return sci$impl$fns$arity_11__delegate(G__34320,G__34321,G__34322,G__34323,G__34324,G__34325,G__34326,G__34327,G__34328,G__34329,G__34330,G__34331);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__34336,G__34337,G__34338,G__34339,G__34340,G__34341,G__34342,G__34343,G__34344,G__34345,G__34346,G__34347,G__34348){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34336);

(invoc_array[(1)] = G__34337);

(invoc_array[(2)] = G__34338);

(invoc_array[(3)] = G__34339);

(invoc_array[(4)] = G__34340);

(invoc_array[(5)] = G__34341);

(invoc_array[(6)] = G__34342);

(invoc_array[(7)] = G__34343);

(invoc_array[(8)] = G__34344);

(invoc_array[(9)] = G__34345);

(invoc_array[(10)] = G__34346);

(invoc_array[(11)] = G__34347);

(invoc_array[vararg_idx] = G__34348);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__34336,G__34337,G__34338,G__34339,G__34340,G__34341,G__34342,G__34343,G__34344,G__34345,G__34346,G__34347,var_args){
var G__34348 = null;
if (arguments.length > 12) {
var G__35063__i = 0, G__35063__a = new Array(arguments.length -  12);
while (G__35063__i < G__35063__a.length) {G__35063__a[G__35063__i] = arguments[G__35063__i + 12]; ++G__35063__i;}
  G__34348 = new cljs.core.IndexedSeq(G__35063__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__34336,G__34337,G__34338,G__34339,G__34340,G__34341,G__34342,G__34343,G__34344,G__34345,G__34346,G__34347,G__34348);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__35064){
var G__34336 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34337 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34338 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34339 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34340 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34341 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34342 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34343 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34344 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34345 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34346 = cljs.core.first(arglist__35064);
arglist__35064 = cljs.core.next(arglist__35064);
var G__34347 = cljs.core.first(arglist__35064);
var G__34348 = cljs.core.rest(arglist__35064);
return sci$impl$fns$arity_12__delegate(G__34336,G__34337,G__34338,G__34339,G__34340,G__34341,G__34342,G__34343,G__34344,G__34345,G__34346,G__34347,G__34348);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__34357,G__34358,G__34359,G__34360,G__34361,G__34362,G__34363,G__34364,G__34365,G__34366,G__34367,G__34368,G__34369,G__34370){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34357);

(invoc_array[(1)] = G__34358);

(invoc_array[(2)] = G__34359);

(invoc_array[(3)] = G__34360);

(invoc_array[(4)] = G__34361);

(invoc_array[(5)] = G__34362);

(invoc_array[(6)] = G__34363);

(invoc_array[(7)] = G__34364);

(invoc_array[(8)] = G__34365);

(invoc_array[(9)] = G__34366);

(invoc_array[(10)] = G__34367);

(invoc_array[(11)] = G__34368);

(invoc_array[(12)] = G__34369);

(invoc_array[vararg_idx] = G__34370);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__34357,G__34358,G__34359,G__34360,G__34361,G__34362,G__34363,G__34364,G__34365,G__34366,G__34367,G__34368,G__34369,var_args){
var G__34370 = null;
if (arguments.length > 13) {
var G__35069__i = 0, G__35069__a = new Array(arguments.length -  13);
while (G__35069__i < G__35069__a.length) {G__35069__a[G__35069__i] = arguments[G__35069__i + 13]; ++G__35069__i;}
  G__34370 = new cljs.core.IndexedSeq(G__35069__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__34357,G__34358,G__34359,G__34360,G__34361,G__34362,G__34363,G__34364,G__34365,G__34366,G__34367,G__34368,G__34369,G__34370);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__35070){
var G__34357 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34358 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34359 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34360 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34361 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34362 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34363 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34364 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34365 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34366 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34367 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34368 = cljs.core.first(arglist__35070);
arglist__35070 = cljs.core.next(arglist__35070);
var G__34369 = cljs.core.first(arglist__35070);
var G__34370 = cljs.core.rest(arglist__35070);
return sci$impl$fns$arity_13__delegate(G__34357,G__34358,G__34359,G__34360,G__34361,G__34362,G__34363,G__34364,G__34365,G__34366,G__34367,G__34368,G__34369,G__34370);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__34384,G__34385,G__34386,G__34387,G__34388,G__34389,G__34390,G__34391,G__34392,G__34393,G__34394,G__34395,G__34396,G__34397,G__34398){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34384);

(invoc_array[(1)] = G__34385);

(invoc_array[(2)] = G__34386);

(invoc_array[(3)] = G__34387);

(invoc_array[(4)] = G__34388);

(invoc_array[(5)] = G__34389);

(invoc_array[(6)] = G__34390);

(invoc_array[(7)] = G__34391);

(invoc_array[(8)] = G__34392);

(invoc_array[(9)] = G__34393);

(invoc_array[(10)] = G__34394);

(invoc_array[(11)] = G__34395);

(invoc_array[(12)] = G__34396);

(invoc_array[(13)] = G__34397);

(invoc_array[vararg_idx] = G__34398);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__34384,G__34385,G__34386,G__34387,G__34388,G__34389,G__34390,G__34391,G__34392,G__34393,G__34394,G__34395,G__34396,G__34397,var_args){
var G__34398 = null;
if (arguments.length > 14) {
var G__35075__i = 0, G__35075__a = new Array(arguments.length -  14);
while (G__35075__i < G__35075__a.length) {G__35075__a[G__35075__i] = arguments[G__35075__i + 14]; ++G__35075__i;}
  G__34398 = new cljs.core.IndexedSeq(G__35075__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__34384,G__34385,G__34386,G__34387,G__34388,G__34389,G__34390,G__34391,G__34392,G__34393,G__34394,G__34395,G__34396,G__34397,G__34398);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__35076){
var G__34384 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34385 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34386 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34387 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34388 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34389 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34390 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34391 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34392 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34393 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34394 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34395 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34396 = cljs.core.first(arglist__35076);
arglist__35076 = cljs.core.next(arglist__35076);
var G__34397 = cljs.core.first(arglist__35076);
var G__34398 = cljs.core.rest(arglist__35076);
return sci$impl$fns$arity_14__delegate(G__34384,G__34385,G__34386,G__34387,G__34388,G__34389,G__34390,G__34391,G__34392,G__34393,G__34394,G__34395,G__34396,G__34397,G__34398);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__34414,G__34415,G__34416,G__34417,G__34418,G__34419,G__34420,G__34421,G__34422,G__34423,G__34424,G__34425,G__34426,G__34427,G__34428,G__34429){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34414);

(invoc_array[(1)] = G__34415);

(invoc_array[(2)] = G__34416);

(invoc_array[(3)] = G__34417);

(invoc_array[(4)] = G__34418);

(invoc_array[(5)] = G__34419);

(invoc_array[(6)] = G__34420);

(invoc_array[(7)] = G__34421);

(invoc_array[(8)] = G__34422);

(invoc_array[(9)] = G__34423);

(invoc_array[(10)] = G__34424);

(invoc_array[(11)] = G__34425);

(invoc_array[(12)] = G__34426);

(invoc_array[(13)] = G__34427);

(invoc_array[(14)] = G__34428);

(invoc_array[vararg_idx] = G__34429);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__34414,G__34415,G__34416,G__34417,G__34418,G__34419,G__34420,G__34421,G__34422,G__34423,G__34424,G__34425,G__34426,G__34427,G__34428,var_args){
var G__34429 = null;
if (arguments.length > 15) {
var G__35077__i = 0, G__35077__a = new Array(arguments.length -  15);
while (G__35077__i < G__35077__a.length) {G__35077__a[G__35077__i] = arguments[G__35077__i + 15]; ++G__35077__i;}
  G__34429 = new cljs.core.IndexedSeq(G__35077__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__34414,G__34415,G__34416,G__34417,G__34418,G__34419,G__34420,G__34421,G__34422,G__34423,G__34424,G__34425,G__34426,G__34427,G__34428,G__34429);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__35078){
var G__34414 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34415 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34416 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34417 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34418 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34419 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34420 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34421 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34422 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34423 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34424 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34425 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34426 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34427 = cljs.core.first(arglist__35078);
arglist__35078 = cljs.core.next(arglist__35078);
var G__34428 = cljs.core.first(arglist__35078);
var G__34429 = cljs.core.rest(arglist__35078);
return sci$impl$fns$arity_15__delegate(G__34414,G__34415,G__34416,G__34417,G__34418,G__34419,G__34420,G__34421,G__34422,G__34423,G__34424,G__34425,G__34426,G__34427,G__34428,G__34429);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__34437,G__34438,G__34439,G__34440,G__34441,G__34442,G__34443,G__34444,G__34445,G__34446,G__34447,G__34448,G__34449,G__34450,G__34451,G__34452,G__34453){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34437);

(invoc_array[(1)] = G__34438);

(invoc_array[(2)] = G__34439);

(invoc_array[(3)] = G__34440);

(invoc_array[(4)] = G__34441);

(invoc_array[(5)] = G__34442);

(invoc_array[(6)] = G__34443);

(invoc_array[(7)] = G__34444);

(invoc_array[(8)] = G__34445);

(invoc_array[(9)] = G__34446);

(invoc_array[(10)] = G__34447);

(invoc_array[(11)] = G__34448);

(invoc_array[(12)] = G__34449);

(invoc_array[(13)] = G__34450);

(invoc_array[(14)] = G__34451);

(invoc_array[(15)] = G__34452);

(invoc_array[vararg_idx] = G__34453);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__34437,G__34438,G__34439,G__34440,G__34441,G__34442,G__34443,G__34444,G__34445,G__34446,G__34447,G__34448,G__34449,G__34450,G__34451,G__34452,var_args){
var G__34453 = null;
if (arguments.length > 16) {
var G__35079__i = 0, G__35079__a = new Array(arguments.length -  16);
while (G__35079__i < G__35079__a.length) {G__35079__a[G__35079__i] = arguments[G__35079__i + 16]; ++G__35079__i;}
  G__34453 = new cljs.core.IndexedSeq(G__35079__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__34437,G__34438,G__34439,G__34440,G__34441,G__34442,G__34443,G__34444,G__34445,G__34446,G__34447,G__34448,G__34449,G__34450,G__34451,G__34452,G__34453);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__35080){
var G__34437 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34438 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34439 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34440 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34441 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34442 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34443 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34444 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34445 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34446 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34447 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34448 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34449 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34450 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34451 = cljs.core.first(arglist__35080);
arglist__35080 = cljs.core.next(arglist__35080);
var G__34452 = cljs.core.first(arglist__35080);
var G__34453 = cljs.core.rest(arglist__35080);
return sci$impl$fns$arity_16__delegate(G__34437,G__34438,G__34439,G__34440,G__34441,G__34442,G__34443,G__34444,G__34445,G__34446,G__34447,G__34448,G__34449,G__34450,G__34451,G__34452,G__34453);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__34454,G__34455,G__34456,G__34457,G__34458,G__34459,G__34460,G__34461,G__34462,G__34463,G__34464,G__34465,G__34466,G__34467,G__34468,G__34469,G__34470,G__34471){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34454);

(invoc_array[(1)] = G__34455);

(invoc_array[(2)] = G__34456);

(invoc_array[(3)] = G__34457);

(invoc_array[(4)] = G__34458);

(invoc_array[(5)] = G__34459);

(invoc_array[(6)] = G__34460);

(invoc_array[(7)] = G__34461);

(invoc_array[(8)] = G__34462);

(invoc_array[(9)] = G__34463);

(invoc_array[(10)] = G__34464);

(invoc_array[(11)] = G__34465);

(invoc_array[(12)] = G__34466);

(invoc_array[(13)] = G__34467);

(invoc_array[(14)] = G__34468);

(invoc_array[(15)] = G__34469);

(invoc_array[(16)] = G__34470);

(invoc_array[vararg_idx] = G__34471);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__34454,G__34455,G__34456,G__34457,G__34458,G__34459,G__34460,G__34461,G__34462,G__34463,G__34464,G__34465,G__34466,G__34467,G__34468,G__34469,G__34470,var_args){
var G__34471 = null;
if (arguments.length > 17) {
var G__35082__i = 0, G__35082__a = new Array(arguments.length -  17);
while (G__35082__i < G__35082__a.length) {G__35082__a[G__35082__i] = arguments[G__35082__i + 17]; ++G__35082__i;}
  G__34471 = new cljs.core.IndexedSeq(G__35082__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__34454,G__34455,G__34456,G__34457,G__34458,G__34459,G__34460,G__34461,G__34462,G__34463,G__34464,G__34465,G__34466,G__34467,G__34468,G__34469,G__34470,G__34471);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__35083){
var G__34454 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34455 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34456 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34457 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34458 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34459 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34460 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34461 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34462 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34463 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34464 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34465 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34466 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34467 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34468 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34469 = cljs.core.first(arglist__35083);
arglist__35083 = cljs.core.next(arglist__35083);
var G__34470 = cljs.core.first(arglist__35083);
var G__34471 = cljs.core.rest(arglist__35083);
return sci$impl$fns$arity_17__delegate(G__34454,G__34455,G__34456,G__34457,G__34458,G__34459,G__34460,G__34461,G__34462,G__34463,G__34464,G__34465,G__34466,G__34467,G__34468,G__34469,G__34470,G__34471);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__34499,G__34500,G__34501,G__34502,G__34503,G__34504,G__34505,G__34506,G__34507,G__34508,G__34509,G__34510,G__34511,G__34512,G__34513,G__34514,G__34515,G__34516,G__34517){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34499);

(invoc_array[(1)] = G__34500);

(invoc_array[(2)] = G__34501);

(invoc_array[(3)] = G__34502);

(invoc_array[(4)] = G__34503);

(invoc_array[(5)] = G__34504);

(invoc_array[(6)] = G__34505);

(invoc_array[(7)] = G__34506);

(invoc_array[(8)] = G__34507);

(invoc_array[(9)] = G__34508);

(invoc_array[(10)] = G__34509);

(invoc_array[(11)] = G__34510);

(invoc_array[(12)] = G__34511);

(invoc_array[(13)] = G__34512);

(invoc_array[(14)] = G__34513);

(invoc_array[(15)] = G__34514);

(invoc_array[(16)] = G__34515);

(invoc_array[(17)] = G__34516);

(invoc_array[vararg_idx] = G__34517);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__34499,G__34500,G__34501,G__34502,G__34503,G__34504,G__34505,G__34506,G__34507,G__34508,G__34509,G__34510,G__34511,G__34512,G__34513,G__34514,G__34515,G__34516,var_args){
var G__34517 = null;
if (arguments.length > 18) {
var G__35084__i = 0, G__35084__a = new Array(arguments.length -  18);
while (G__35084__i < G__35084__a.length) {G__35084__a[G__35084__i] = arguments[G__35084__i + 18]; ++G__35084__i;}
  G__34517 = new cljs.core.IndexedSeq(G__35084__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__34499,G__34500,G__34501,G__34502,G__34503,G__34504,G__34505,G__34506,G__34507,G__34508,G__34509,G__34510,G__34511,G__34512,G__34513,G__34514,G__34515,G__34516,G__34517);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__35085){
var G__34499 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34500 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34501 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34502 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34503 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34504 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34505 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34506 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34507 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34508 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34509 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34510 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34511 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34512 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34513 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34514 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34515 = cljs.core.first(arglist__35085);
arglist__35085 = cljs.core.next(arglist__35085);
var G__34516 = cljs.core.first(arglist__35085);
var G__34517 = cljs.core.rest(arglist__35085);
return sci$impl$fns$arity_18__delegate(G__34499,G__34500,G__34501,G__34502,G__34503,G__34504,G__34505,G__34506,G__34507,G__34508,G__34509,G__34510,G__34511,G__34512,G__34513,G__34514,G__34515,G__34516,G__34517);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__34532,G__34533,G__34534,G__34535,G__34536,G__34537,G__34538,G__34539,G__34540,G__34541,G__34542,G__34543,G__34544,G__34545,G__34546,G__34547,G__34548,G__34549,G__34550,G__34551){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34532);

(invoc_array[(1)] = G__34533);

(invoc_array[(2)] = G__34534);

(invoc_array[(3)] = G__34535);

(invoc_array[(4)] = G__34536);

(invoc_array[(5)] = G__34537);

(invoc_array[(6)] = G__34538);

(invoc_array[(7)] = G__34539);

(invoc_array[(8)] = G__34540);

(invoc_array[(9)] = G__34541);

(invoc_array[(10)] = G__34542);

(invoc_array[(11)] = G__34543);

(invoc_array[(12)] = G__34544);

(invoc_array[(13)] = G__34545);

(invoc_array[(14)] = G__34546);

(invoc_array[(15)] = G__34547);

(invoc_array[(16)] = G__34548);

(invoc_array[(17)] = G__34549);

(invoc_array[(18)] = G__34550);

(invoc_array[vararg_idx] = G__34551);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__34532,G__34533,G__34534,G__34535,G__34536,G__34537,G__34538,G__34539,G__34540,G__34541,G__34542,G__34543,G__34544,G__34545,G__34546,G__34547,G__34548,G__34549,G__34550,var_args){
var G__34551 = null;
if (arguments.length > 19) {
var G__35086__i = 0, G__35086__a = new Array(arguments.length -  19);
while (G__35086__i < G__35086__a.length) {G__35086__a[G__35086__i] = arguments[G__35086__i + 19]; ++G__35086__i;}
  G__34551 = new cljs.core.IndexedSeq(G__35086__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__34532,G__34533,G__34534,G__34535,G__34536,G__34537,G__34538,G__34539,G__34540,G__34541,G__34542,G__34543,G__34544,G__34545,G__34546,G__34547,G__34548,G__34549,G__34550,G__34551);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__35090){
var G__34532 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34533 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34534 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34535 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34536 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34537 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34538 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34539 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34540 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34541 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34542 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34543 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34544 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34545 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34546 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34547 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34548 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34549 = cljs.core.first(arglist__35090);
arglist__35090 = cljs.core.next(arglist__35090);
var G__34550 = cljs.core.first(arglist__35090);
var G__34551 = cljs.core.rest(arglist__35090);
return sci$impl$fns$arity_19__delegate(G__34532,G__34533,G__34534,G__34535,G__34536,G__34537,G__34538,G__34539,G__34540,G__34541,G__34542,G__34543,G__34544,G__34545,G__34546,G__34547,G__34548,G__34549,G__34550,G__34551);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__34556,G__34557,G__34558,G__34559,G__34560,G__34561,G__34562,G__34563,G__34564,G__34565,G__34566,G__34567,G__34568,G__34569,G__34570,G__34571,G__34572,G__34573,G__34574,G__34575,G__34576){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34556);

(invoc_array[(1)] = G__34557);

(invoc_array[(2)] = G__34558);

(invoc_array[(3)] = G__34559);

(invoc_array[(4)] = G__34560);

(invoc_array[(5)] = G__34561);

(invoc_array[(6)] = G__34562);

(invoc_array[(7)] = G__34563);

(invoc_array[(8)] = G__34564);

(invoc_array[(9)] = G__34565);

(invoc_array[(10)] = G__34566);

(invoc_array[(11)] = G__34567);

(invoc_array[(12)] = G__34568);

(invoc_array[(13)] = G__34569);

(invoc_array[(14)] = G__34570);

(invoc_array[(15)] = G__34571);

(invoc_array[(16)] = G__34572);

(invoc_array[(17)] = G__34573);

(invoc_array[(18)] = G__34574);

(invoc_array[(19)] = G__34575);

(invoc_array[vararg_idx] = G__34576);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__34556,G__34557,G__34558,G__34559,G__34560,G__34561,G__34562,G__34563,G__34564,G__34565,G__34566,G__34567,G__34568,G__34569,G__34570,G__34571,G__34572,G__34573,G__34574,G__34575,var_args){
var G__34576 = null;
if (arguments.length > 20) {
var G__35093__i = 0, G__35093__a = new Array(arguments.length -  20);
while (G__35093__i < G__35093__a.length) {G__35093__a[G__35093__i] = arguments[G__35093__i + 20]; ++G__35093__i;}
  G__34576 = new cljs.core.IndexedSeq(G__35093__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__34556,G__34557,G__34558,G__34559,G__34560,G__34561,G__34562,G__34563,G__34564,G__34565,G__34566,G__34567,G__34568,G__34569,G__34570,G__34571,G__34572,G__34573,G__34574,G__34575,G__34576);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__35094){
var G__34556 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34557 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34558 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34559 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34560 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34561 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34562 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34563 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34564 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34565 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34566 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34567 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34568 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34569 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34570 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34571 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34572 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34573 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34574 = cljs.core.first(arglist__35094);
arglist__35094 = cljs.core.next(arglist__35094);
var G__34575 = cljs.core.first(arglist__35094);
var G__34576 = cljs.core.rest(arglist__35094);
return sci$impl$fns$arity_20__delegate(G__34556,G__34557,G__34558,G__34559,G__34560,G__34561,G__34562,G__34563,G__34564,G__34565,G__34566,G__34567,G__34568,G__34569,G__34570,G__34571,G__34572,G__34573,G__34574,G__34575,G__34576);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34142)].join('')));

}
})():(function (){var G__34584 = fixed_arity;
switch (G__34584) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__32859__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32859__auto__)){
continue;
} else {
return ret__32859__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__34587){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34587);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__34597,G__34598){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34597);

(invoc_array[(1)] = G__34598);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__34599,G__34600,G__34601){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34599);

(invoc_array[(1)] = G__34600);

(invoc_array[(2)] = G__34601);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__34603,G__34604,G__34605,G__34606){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34603);

(invoc_array[(1)] = G__34604);

(invoc_array[(2)] = G__34605);

(invoc_array[(3)] = G__34606);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__34613,G__34614,G__34615,G__34616,G__34617){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34613);

(invoc_array[(1)] = G__34614);

(invoc_array[(2)] = G__34615);

(invoc_array[(3)] = G__34616);

(invoc_array[(4)] = G__34617);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__34625,G__34626,G__34627,G__34628,G__34629,G__34630){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34625);

(invoc_array[(1)] = G__34626);

(invoc_array[(2)] = G__34627);

(invoc_array[(3)] = G__34628);

(invoc_array[(4)] = G__34629);

(invoc_array[(5)] = G__34630);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__34631,G__34632,G__34633,G__34634,G__34635,G__34636,G__34637){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34631);

(invoc_array[(1)] = G__34632);

(invoc_array[(2)] = G__34633);

(invoc_array[(3)] = G__34634);

(invoc_array[(4)] = G__34635);

(invoc_array[(5)] = G__34636);

(invoc_array[(6)] = G__34637);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__34643,G__34644,G__34645,G__34646,G__34647,G__34648,G__34649,G__34650){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34643);

(invoc_array[(1)] = G__34644);

(invoc_array[(2)] = G__34645);

(invoc_array[(3)] = G__34646);

(invoc_array[(4)] = G__34647);

(invoc_array[(5)] = G__34648);

(invoc_array[(6)] = G__34649);

(invoc_array[(7)] = G__34650);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__34651,G__34652,G__34653,G__34654,G__34655,G__34656,G__34657,G__34658,G__34659){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34651);

(invoc_array[(1)] = G__34652);

(invoc_array[(2)] = G__34653);

(invoc_array[(3)] = G__34654);

(invoc_array[(4)] = G__34655);

(invoc_array[(5)] = G__34656);

(invoc_array[(6)] = G__34657);

(invoc_array[(7)] = G__34658);

(invoc_array[(8)] = G__34659);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__34666,G__34667,G__34668,G__34669,G__34670,G__34671,G__34672,G__34673,G__34674,G__34675){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34666);

(invoc_array[(1)] = G__34667);

(invoc_array[(2)] = G__34668);

(invoc_array[(3)] = G__34669);

(invoc_array[(4)] = G__34670);

(invoc_array[(5)] = G__34671);

(invoc_array[(6)] = G__34672);

(invoc_array[(7)] = G__34673);

(invoc_array[(8)] = G__34674);

(invoc_array[(9)] = G__34675);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__34678,G__34679,G__34680,G__34681,G__34682,G__34683,G__34684,G__34685,G__34686,G__34687,G__34688){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34678);

(invoc_array[(1)] = G__34679);

(invoc_array[(2)] = G__34680);

(invoc_array[(3)] = G__34681);

(invoc_array[(4)] = G__34682);

(invoc_array[(5)] = G__34683);

(invoc_array[(6)] = G__34684);

(invoc_array[(7)] = G__34685);

(invoc_array[(8)] = G__34686);

(invoc_array[(9)] = G__34687);

(invoc_array[(10)] = G__34688);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__34697,G__34698,G__34699,G__34700,G__34701,G__34702,G__34703,G__34704,G__34705,G__34706,G__34707,G__34708){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34697);

(invoc_array[(1)] = G__34698);

(invoc_array[(2)] = G__34699);

(invoc_array[(3)] = G__34700);

(invoc_array[(4)] = G__34701);

(invoc_array[(5)] = G__34702);

(invoc_array[(6)] = G__34703);

(invoc_array[(7)] = G__34704);

(invoc_array[(8)] = G__34705);

(invoc_array[(9)] = G__34706);

(invoc_array[(10)] = G__34707);

(invoc_array[(11)] = G__34708);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__34714,G__34715,G__34716,G__34717,G__34718,G__34719,G__34720,G__34721,G__34722,G__34723,G__34724,G__34725,G__34726){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34714);

(invoc_array[(1)] = G__34715);

(invoc_array[(2)] = G__34716);

(invoc_array[(3)] = G__34717);

(invoc_array[(4)] = G__34718);

(invoc_array[(5)] = G__34719);

(invoc_array[(6)] = G__34720);

(invoc_array[(7)] = G__34721);

(invoc_array[(8)] = G__34722);

(invoc_array[(9)] = G__34723);

(invoc_array[(10)] = G__34724);

(invoc_array[(11)] = G__34725);

(invoc_array[(12)] = G__34726);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__34742,G__34743,G__34744,G__34745,G__34746,G__34747,G__34748,G__34749,G__34750,G__34751,G__34752,G__34753,G__34754,G__34755){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34742);

(invoc_array[(1)] = G__34743);

(invoc_array[(2)] = G__34744);

(invoc_array[(3)] = G__34745);

(invoc_array[(4)] = G__34746);

(invoc_array[(5)] = G__34747);

(invoc_array[(6)] = G__34748);

(invoc_array[(7)] = G__34749);

(invoc_array[(8)] = G__34750);

(invoc_array[(9)] = G__34751);

(invoc_array[(10)] = G__34752);

(invoc_array[(11)] = G__34753);

(invoc_array[(12)] = G__34754);

(invoc_array[(13)] = G__34755);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__34759,G__34760,G__34761,G__34762,G__34763,G__34764,G__34765,G__34766,G__34767,G__34768,G__34769,G__34770,G__34771,G__34772,G__34773){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34759);

(invoc_array[(1)] = G__34760);

(invoc_array[(2)] = G__34761);

(invoc_array[(3)] = G__34762);

(invoc_array[(4)] = G__34763);

(invoc_array[(5)] = G__34764);

(invoc_array[(6)] = G__34765);

(invoc_array[(7)] = G__34766);

(invoc_array[(8)] = G__34767);

(invoc_array[(9)] = G__34768);

(invoc_array[(10)] = G__34769);

(invoc_array[(11)] = G__34770);

(invoc_array[(12)] = G__34771);

(invoc_array[(13)] = G__34772);

(invoc_array[(14)] = G__34773);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__34783,G__34784,G__34785,G__34786,G__34787,G__34788,G__34789,G__34790,G__34791,G__34792,G__34793,G__34794,G__34795,G__34796,G__34797,G__34798){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34783);

(invoc_array[(1)] = G__34784);

(invoc_array[(2)] = G__34785);

(invoc_array[(3)] = G__34786);

(invoc_array[(4)] = G__34787);

(invoc_array[(5)] = G__34788);

(invoc_array[(6)] = G__34789);

(invoc_array[(7)] = G__34790);

(invoc_array[(8)] = G__34791);

(invoc_array[(9)] = G__34792);

(invoc_array[(10)] = G__34793);

(invoc_array[(11)] = G__34794);

(invoc_array[(12)] = G__34795);

(invoc_array[(13)] = G__34796);

(invoc_array[(14)] = G__34797);

(invoc_array[(15)] = G__34798);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__34805,G__34806,G__34807,G__34808,G__34809,G__34810,G__34811,G__34812,G__34813,G__34814,G__34815,G__34816,G__34817,G__34818,G__34819,G__34820,G__34821){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34805);

(invoc_array[(1)] = G__34806);

(invoc_array[(2)] = G__34807);

(invoc_array[(3)] = G__34808);

(invoc_array[(4)] = G__34809);

(invoc_array[(5)] = G__34810);

(invoc_array[(6)] = G__34811);

(invoc_array[(7)] = G__34812);

(invoc_array[(8)] = G__34813);

(invoc_array[(9)] = G__34814);

(invoc_array[(10)] = G__34815);

(invoc_array[(11)] = G__34816);

(invoc_array[(12)] = G__34817);

(invoc_array[(13)] = G__34818);

(invoc_array[(14)] = G__34819);

(invoc_array[(15)] = G__34820);

(invoc_array[(16)] = G__34821);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__34825,G__34826,G__34827,G__34828,G__34829,G__34830,G__34831,G__34832,G__34833,G__34834,G__34835,G__34836,G__34837,G__34838,G__34839,G__34840,G__34841,G__34842){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34825);

(invoc_array[(1)] = G__34826);

(invoc_array[(2)] = G__34827);

(invoc_array[(3)] = G__34828);

(invoc_array[(4)] = G__34829);

(invoc_array[(5)] = G__34830);

(invoc_array[(6)] = G__34831);

(invoc_array[(7)] = G__34832);

(invoc_array[(8)] = G__34833);

(invoc_array[(9)] = G__34834);

(invoc_array[(10)] = G__34835);

(invoc_array[(11)] = G__34836);

(invoc_array[(12)] = G__34837);

(invoc_array[(13)] = G__34838);

(invoc_array[(14)] = G__34839);

(invoc_array[(15)] = G__34840);

(invoc_array[(16)] = G__34841);

(invoc_array[(17)] = G__34842);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__34852,G__34853,G__34854,G__34855,G__34856,G__34857,G__34858,G__34859,G__34860,G__34861,G__34862,G__34863,G__34864,G__34865,G__34866,G__34867,G__34868,G__34869,G__34870){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34852);

(invoc_array[(1)] = G__34853);

(invoc_array[(2)] = G__34854);

(invoc_array[(3)] = G__34855);

(invoc_array[(4)] = G__34856);

(invoc_array[(5)] = G__34857);

(invoc_array[(6)] = G__34858);

(invoc_array[(7)] = G__34859);

(invoc_array[(8)] = G__34860);

(invoc_array[(9)] = G__34861);

(invoc_array[(10)] = G__34862);

(invoc_array[(11)] = G__34863);

(invoc_array[(12)] = G__34864);

(invoc_array[(13)] = G__34865);

(invoc_array[(14)] = G__34866);

(invoc_array[(15)] = G__34867);

(invoc_array[(16)] = G__34868);

(invoc_array[(17)] = G__34869);

(invoc_array[(18)] = G__34870);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__34882,G__34883,G__34884,G__34885,G__34886,G__34887,G__34888,G__34889,G__34890,G__34891,G__34892,G__34893,G__34894,G__34895,G__34896,G__34897,G__34898,G__34899,G__34900,G__34901){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__34882);

(invoc_array[(1)] = G__34883);

(invoc_array[(2)] = G__34884);

(invoc_array[(3)] = G__34885);

(invoc_array[(4)] = G__34886);

(invoc_array[(5)] = G__34887);

(invoc_array[(6)] = G__34888);

(invoc_array[(7)] = G__34889);

(invoc_array[(8)] = G__34890);

(invoc_array[(9)] = G__34891);

(invoc_array[(10)] = G__34892);

(invoc_array[(11)] = G__34893);

(invoc_array[(12)] = G__34894);

(invoc_array[(13)] = G__34895);

(invoc_array[(14)] = G__34896);

(invoc_array[(15)] = G__34897);

(invoc_array[(16)] = G__34898);

(invoc_array[(17)] = G__34899);

(invoc_array[(18)] = G__34900);

(invoc_array[(19)] = G__34901);

while(true){
var ret__32863__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__32863__auto__)){
continue;
} else {
return ret__32863__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34584)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__35105 = cljs.core.next(params__$1);
var G__35106 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__35107 = lets;
params__$1 = G__35105;
new_params = G__35106;
lets = G__35107;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__35108 = cljs.core.next(params__$1);
var G__35109 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__35110 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__35108;
new_params = G__35109;
lets = G__35110;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35111 = arguments.length;
var i__5770__auto___35112 = (0);
while(true){
if((i__5770__auto___35112 < len__5769__auto___35111)){
args__5775__auto__.push((arguments[i__5770__auto___35112]));

var G__35113 = (i__5770__auto___35112 + (1));
i__5770__auto___35112 = G__35113;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__34961 = sig;
var seq__34962 = cljs.core.seq(vec__34961);
var first__34963 = cljs.core.first(seq__34962);
var seq__34962__$1 = cljs.core.next(seq__34962);
var params = first__34963;
var body = seq__34962__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5045__auto__ = conds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq34952){
var G__34953 = cljs.core.first(seq34952);
var seq34952__$1 = cljs.core.next(seq34952);
var G__34954 = cljs.core.first(seq34952__$1);
var seq34952__$2 = cljs.core.next(seq34952__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34953,G__34954,seq34952__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__35116 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__35117 = cljs.core.next(fdecls);
ret = G__35116;
fdecls = G__35117;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35118 = arguments.length;
var i__5770__auto___35119 = (0);
while(true){
if((i__5770__auto___35119 < len__5769__auto___35118)){
args__5775__auto__.push((arguments[i__5770__auto___35119]));

var G__35120 = (i__5770__auto___35119 + (1));
i__5770__auto___35119 = G__35120;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5045__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq34981){
var G__34982 = cljs.core.first(seq34981);
var seq34981__$1 = cljs.core.next(seq34981);
var G__34983 = cljs.core.first(seq34981__$1);
var seq34981__$2 = cljs.core.next(seq34981__$1);
var G__34984 = cljs.core.first(seq34981__$2);
var seq34981__$3 = cljs.core.next(seq34981__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34982,G__34983,G__34984,seq34981__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35121 = arguments.length;
var i__5770__auto___35122 = (0);
while(true){
if((i__5770__auto___35122 < len__5769__auto___35121)){
args__5775__auto__.push((arguments[i__5770__auto___35122]));

var G__35123 = (i__5770__auto___35122 + (1));
i__5770__auto___35122 = G__35123;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__35124 = cljs.core.cons(f,p);
var G__35125 = cljs.core.next(args__$1);
p = G__35124;
args__$1 = G__35125;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__35126 = cljs.core.cons(f,p);
var G__35127 = cljs.core.next(args__$1);
p = G__35126;
args__$1 = G__35127;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__35128 = cljs.core.next(fd);
fd = G__35128;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__35129 = cljs.core.next(fd);
fd = G__35129;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__35130 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__35131 = cljs.core.next(ds);
acc = G__35130;
ds = G__35131;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__35132 = cljs.core.next(p);
var G__35133 = cljs.core.cons(cljs.core.first(p),d);
p = G__35132;
d = G__35133;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq34996){
var G__34997 = cljs.core.first(seq34996);
var seq34996__$1 = cljs.core.next(seq34996);
var G__34998 = cljs.core.first(seq34996__$1);
var seq34996__$2 = cljs.core.next(seq34996__$1);
var G__34999 = cljs.core.first(seq34996__$2);
var seq34996__$3 = cljs.core.next(seq34996__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34997,G__34998,G__34999,seq34996__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
