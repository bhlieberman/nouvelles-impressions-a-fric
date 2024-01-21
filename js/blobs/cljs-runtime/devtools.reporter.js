import "./cljs_env.js";
import "./cljs.core.js";
import "./devtools.util.js";
import "./devtools.context.js";
goog.provide('devtools.reporter');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28279 = arguments.length;
var i__5770__auto___28280 = (0);
while(true){
if((i__5770__auto___28280 < len__5769__auto___28279)){
args__5775__auto__.push((arguments[i__5770__auto___28280]));

var G__28286 = (i__5770__auto___28280 + (1));
i__5770__auto___28280 = G__28286;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__28209){
var vec__28211 = p__28209;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28211,(0),null);
var footer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28211,(1),null);
var console__$1 = devtools.context.get_console.call(null);
try{var message = (((e instanceof Error))?(function (){var or__5045__auto__ = e.message;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",devtools.util.get_lib_info(),(cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):"."),"\n\n"].join('');
var footer_msg = (((!((footer == null))))?footer:["\n\n","---\n","Please report the issue here: ",devtools.reporter.issues_url].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console__$1["groupCollapsed"]);
var log = (console__$1["log"]);
var group_end = (console__$1["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console__$1,header);

log.apply(console__$1,details);

return group_end.call(console__$1);
}catch (e28215){var e__$1 = e28215;
return console__$1.error("FATAL: report-internal-error! failed",e__$1);
}}));

(devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq28199){
var G__28200 = cljs.core.first(seq28199);
var seq28199__$1 = cljs.core.next(seq28199);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28200,seq28199__$1);
}));


//# sourceMappingURL=devtools.reporter.js.map
