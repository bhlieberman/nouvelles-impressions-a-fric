import "./cljs_env.js";
import "./cljs.core.js";
import "./zprint.core.js";
import "./clojure.string.js";
import "./goog.string.string.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.js";
import "./day8.re_frame_10x.panels.settings.subs.js";
import "./day8.re_frame_10x.panels.traces.subs.js";
goog.provide('day8.re_frame_10x.panels.event.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__26925,_){
var map__26926 = p__26925;
var map__26926__$1 = cljs.core.__destructure_map(map__26926);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return code;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch",2069606875)], null),(function (traces,_){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5808__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5808__auto__ == null)){
return null;
} else {
var code = temp__5808__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch-exists?","day8.re-frame-10x.panels.event.subs/code-for-epoch-exists?",929098522),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),(function (code,_){
return cljs.core.boolean$(code);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","fragments-for-epoch","day8.re-frame-10x.panels.event.subs/fragments-for-epoch",-10362729),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","execution-order?","day8.re-frame-10x.panels.event.subs/execution-order?",1536487585)], null),(function (p__26928,_){
var vec__26929 = p__26928;
var map__26932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26929,(0),null);
var map__26932__$1 = cljs.core.__destructure_map(map__26932);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26932__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var execution_order_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26929,(1),null);
var unordered_fragments = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line));
}),code);
if(cljs.core.truth_(execution_order_QMARK_)){
return unordered_fragments;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),unordered_fragments);
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","trace-id-for-epoch","day8.re-frame-10x.panels.event.subs/trace-id-for-epoch",728519790),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),(function (p__26933,_){
var map__26934 = p__26933;
var map__26934__$1 = cljs.core.__destructure_map(map__26934);
var trace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26934__$1,new cljs.core.Keyword(null,"trace-id","trace-id",681947249));
return trace_id;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","form-for-epoch","day8.re-frame-10x.panels.event.subs/form-for-epoch",-1506248120),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),(function (p__26935,_){
var map__26936 = p__26935;
var map__26936__$1 = cljs.core.__destructure_map(map__26936);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26936__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return form;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","zprint-form-for-epoch","day8.re-frame-10x.panels.event.subs/zprint-form-for-epoch",279472373),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","form-for-epoch","day8.re-frame-10x.panels.event.subs/form-for-epoch",-1506248120)], null),(function (form,_){
return zprint.core.zprint_str(form);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","execution-order?","day8.re-frame-10x.panels.event.subs/execution-order?",1536487585),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (code,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(code,new cljs.core.Keyword(null,"execution-order?","execution-order?",-1342177142),true);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-open?","day8.re-frame-10x.panels.event.subs/code-open?",1956666991),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__26937,_){
var map__26938 = p__26937;
var map__26938__$1 = cljs.core.__destructure_map(map__26938);
var code_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938__$1,new cljs.core.Keyword(null,"code-open?","code-open?",1228336744));
return code_open_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","highlighted-form","day8.re-frame-10x.panels.event.subs/highlighted-form",1402683478),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__26943,_){
var map__26944 = p__26943;
var map__26944__$1 = cljs.core.__destructure_map(map__26944);
var highlighted_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26944__$1,new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753));
return highlighted_form;
})], 0));
/**
 * Like re-seq but returns matches and indices
 */
day8.re_frame_10x.panels.event.subs.re_seq_idx = (function day8$re_frame_10x$panels$event$subs$re_seq_idx(var_args){
var G__26950 = arguments.length;
switch (G__26950) {
case 2:
return day8.re_frame_10x.panels.event.subs.re_seq_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.panels.event.subs.re_seq_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.panels.event.subs.re_seq_idx.cljs$core$IFn$_invoke$arity$2 = (function (re,s){
return day8.re_frame_10x.panels.event.subs.re_seq_idx.cljs$core$IFn$_invoke$arity$3(re,s,(0));
}));

(day8.re_frame_10x.panels.event.subs.re_seq_idx.cljs$core$IFn$_invoke$arity$3 = (function (re,s,offset){
var temp__5808__auto__ = re.exec(s);
if((temp__5808__auto__ == null)){
return null;
} else {
var matches = temp__5808__auto__;
var match_str = (matches[(0)]);
var match_vals = (((matches.length === (1)))?match_str:cljs.core.vec(matches));
var match_index = matches.index;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [match_vals,(offset + match_index)], null),(new cljs.core.LazySeq(null,(function (){
var post_idx = (matches.index + (function (){var x__5130__auto__ = (1);
var y__5131__auto__ = match_str.length;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
if((post_idx <= s.length)){
return day8.re_frame_10x.panels.event.subs.re_seq_idx.cljs$core$IFn$_invoke$arity$3(re,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,post_idx),(offset + post_idx));
} else {
return null;
}
}),null,null)));
}
}));

(day8.re_frame_10x.panels.event.subs.re_seq_idx.cljs$lang$maxFixedArity = 3);

/**
 * given a string argument `s` it will return a vector of two values:
 *   - a modified version of `s`, call it s'
 *   - a vector of indexes, v
 * s' will be a copy of s in which all consecutive whitespace is collapsed to one whitespace
 * v  will be a vector of index for characters in s' back to the original s
 * For example:
 *    (collapse-whitespace-and-index "a b  c")
 * will return
 *     ["a b c" [0 1 2 3 5]]     ;; notice that the 4 is not there
 * 
 */
day8.re_frame_10x.panels.event.subs.collapse_whitespace_and_index = (function day8$re_frame_10x$panels$event$subs$collapse_whitespace_and_index(s){
var s_SINGLEQUOTE_ = clojure.string.replace(s,/\s+/," ");
var v = (function (){var v = cljs.core.PersistentVector.EMPTY;
var i_s = (0);
var i_s_SINGLEQUOTE_ = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((s_SINGLEQUOTE_).length),i_s_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.count(s));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i_s),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,i_s_SINGLEQUOTE_))){
var G__27072 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,i_s);
var G__27073 = (i_s + (1));
var G__27074 = (i_s_SINGLEQUOTE_ + (1));
v = G__27072;
i_s = G__27073;
i_s_SINGLEQUOTE_ = G__27074;
continue;
} else {
var G__27076 = v;
var G__27077 = (i_s + (1));
var G__27078 = i_s_SINGLEQUOTE_;
v = G__27076;
i_s = G__27077;
i_s_SINGLEQUOTE_ = G__27078;
continue;

}
}
break;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_SINGLEQUOTE_,v], null);
});
/**
 * Try and find the bounds of the form we are searching for. Uses some heuristics to
 *   try and avoid matching partial forms, e.g. 'default-|weeks| for the form 'weeks.
 */
day8.re_frame_10x.panels.event.subs.find_bounds = (function day8$re_frame_10x$panels$event$subs$find_bounds(form_str,search_str,num_seen){
if((search_str == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
var vec__26976 = day8.re_frame_10x.panels.event.subs.collapse_whitespace_and_index(form_str);
var form_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26976,(0),null);
var reindex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26976,(1),null);
var esc_str = goog.string.regExpEscape(search_str);
var regex = ["(\\s|\\(|\\[|\\{)","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc_str),")(\\s|\\)|\\]|\\})"].join('');
var re = cljs.core.re_pattern(regex);
var results = day8.re_frame_10x.panels.event.subs.re_seq_idx.cljs$core$IFn$_invoke$arity$2(re,form_str__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = search_str;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = num_seen;
if(cljs.core.truth_(and__5043__auto____$1)){
return ((cljs.core.seq(results)) && ((cljs.core.count(results) >= num_seen)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(num_seen - (1)));
var vec__26984 = result;
var vec__26987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26984,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,(0),null);
var pre_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,(1),null);
var matched_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,(2),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26984,(1),null);
var index__$1 = (index + cljs.core.count(pre_match));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,index__$1);
var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,(index__$1 + cljs.core.count(matched_form)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,stop], null);
} else {
var start = (function (){var G__26993 = form_str__$1;
var G__26993__$1 = (((G__26993 == null))?null:clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_str], 0)),G__26993));
if((G__26993__$1 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,G__26993__$1);
}
})();
var length = (((!((start == null))))?((cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_str], 0))).length):(1));
var end = (function (){var G__26995 = start;
var G__26995__$1 = (((G__26995 == null))?null:(length + G__26995));
if((G__26995__$1 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,G__26995__$1);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
}
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","highlighted-form-bounds","day8.re-frame-10x.panels.event.subs/highlighted-form-bounds",-992076813),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","highlighted-form","day8.re-frame-10x.panels.event.subs/highlighted-form",1402683478)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","zprint-form-for-epoch","day8.re-frame-10x.panels.event.subs/zprint-form-for-epoch",279472373)], null),(function (p__27000,_){
var vec__27004 = p__27000;
var highlighted_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27004,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27004,(1),null);
return day8.re_frame_10x.panels.event.subs.find_bounds(form,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(highlighted_form),new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431).cljs$core$IFn$_invoke$arity$1(highlighted_form));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","highlighted?","day8.re-frame-10x.panels.event.subs/highlighted?",-173027178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","zprint-form-for-epoch","day8.re-frame-10x.panels.event.subs/zprint-form-for-epoch",279472373)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","highlighted-form-bounds","day8.re-frame-10x.panels.event.subs/highlighted-form-bounds",-992076813)], null),(function (p__27011,p__27012){
var vec__27013 = p__27011;
var zp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27013,(0),null);
var vec__27016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27013,(1),null);
var left_bound = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27016,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27016,(1),null);
var vec__27019 = p__27012;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27019,(0),null);
var vec__27022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27019,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022,(0),null);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022,(1),null);
if((left_bound > (0))){
var line__$1 = (line - (1));
var char$__$1 = (char$ - (1));
var line_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.count),clojure.string.split_lines(zp));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left_bound,(char$__$1 + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(line__$1,line_counts))));
} else {
return null;
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","show-all-code?","day8.re-frame-10x.panels.event.subs/show-all-code?",1829719373),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__27031,_){
var map__27035 = p__27031;
var map__27035__$1 = cljs.core.__destructure_map(map__27035);
var show_all_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27035__$1,new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286));
return show_all_code_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","repl-msg-state","day8.re-frame-10x.panels.event.subs/repl-msg-state",1012951853),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__27036,_){
var map__27037 = p__27036;
var map__27037__$1 = cljs.core.__destructure_map(map__27037);
var repl_msg_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27037__$1,new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040));
return repl_msg_state;
})], 0));
day8.re_frame_10x.panels.event.subs.canvas = document.createElement("canvas");
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","single-character-width","day8.re-frame-10x.panels.event.subs/single-character-width",1463629101),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,___$1){
var context = day8.re_frame_10x.panels.event.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","max-column-width","day8.re-frame-10x.panels.event.subs/max-column-width",-1175866341),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","window-width-rounded","day8.re-frame-10x.panels.settings.subs/window-width-rounded",193095108),(100)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","single-character-width","day8.re-frame-10x.panels.event.subs/single-character-width",1463629101)], null),(function (p__27042,_){
var vec__27043 = p__27042;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27043,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27043,(1),null);
return Math.ceil((window_width / char_width));
})], 0));

//# sourceMappingURL=day8.re_frame_10x.panels.event.subs.js.map
