import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.pprint.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.js";
import "./day8.re_frame_10x.fx.clipboard.js";
goog.provide('day8.re_frame_10x.fx.log');
day8.re_frame_10x.fx.log.pretty = (function day8$re_frame_10x$fx$log$pretty(value){
var _STAR_print_length_STAR__orig_val__26724 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__26725 = (20);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__26725);

try{var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26726_26737 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26727_26738 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26728_26739 = true;
var _STAR_print_fn_STAR__temp_val__26729_26740 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26728_26739);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26729_26740);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(value);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26727_26738);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26726_26737);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__26724);
}});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.log","console","day8.re-frame-10x.fx.log/console",-1073534176),(function (p__26730){
var map__26731 = p__26730;
var map__26731__$1 = cljs.core.__destructure_map(map__26731);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26731__$1,new cljs.core.Keyword(null,"value","value",305978217));
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.log","console-raw","day8.re-frame-10x.fx.log/console-raw",-2046765886),(function (p__26732){
var map__26733 = p__26732;
var map__26733__$1 = cljs.core.__destructure_map(map__26733);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26733__$1,new cljs.core.Keyword(null,"value","value",305978217));
var pretty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26733__$1,new cljs.core.Keyword(null,"pretty?","pretty?",-1481161944));
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(pretty_QMARK_)?day8.re_frame_10x.fx.log.pretty(value):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.log","clipboard","day8.re-frame-10x.fx.log/clipboard",-2127755755),(function (p__26734){
var map__26735 = p__26734;
var map__26735__$1 = cljs.core.__destructure_map(map__26735);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26735__$1,new cljs.core.Keyword(null,"value","value",305978217));
var pretty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26735__$1,new cljs.core.Keyword(null,"pretty?","pretty?",-1481161944));
return day8.re_frame_10x.fx.clipboard.copy_BANG_((function (){var G__26736 = value;
if(cljs.core.truth_(pretty_QMARK_)){
return day8.re_frame_10x.fx.log.pretty(G__26736);
} else {
return G__26736;
}
})());
}));

//# sourceMappingURL=day8.re_frame_10x.fx.log.js.map
