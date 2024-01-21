import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./zprint.zfns.js";
import "./zprint.util.js";
import "./rewrite_clj.zip.js";
goog.provide('zprint.comment');
/**
 * Produce a blank string of desired size.
 */
zprint.comment.blanks = (function zprint$comment$blanks(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," "));
});
/**
 * Do split for newlines, instead of using regular expressions.
 */
zprint.comment.split_lf = (function zprint$comment$split_lf(s){
var input = s;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(input)){
return out;
} else {
var next_lf = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(input,"\n");
var chunk = (cljs.core.truth_(next_lf)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input,(0),next_lf):input);
var G__33840 = (cljs.core.truth_(next_lf)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(input,(next_lf + (1))):null);
var G__33841 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,chunk);
input = G__33840;
out = G__33841;
continue;
}
break;
}
});
/**
 * True if the first letter of the string is a capital letter.
 */
zprint.comment.capital_QMARK_ = (function zprint$comment$capital_QMARK_(s){
return cljs.core.re_find(/^[A-Z]/,s);
});
/**
 * Capitalize the first character.  Don't mess with the others.
 */
zprint.comment.capitalize_first = (function zprint$comment$capitalize_first(s){
return [clojure.string.capitalize(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join('');
});
/**
 * Possibly reduce the border because we don't have a lot of space left.
 *   Returns a new width.
 */
zprint.comment.adjust_border = (function zprint$comment$adjust_border(start_col,border,width){
var actual_space = (width - start_col);
var border__$1 = ((function (){var x__5133__auto__ = border;
var y__5134__auto__ = (actual_space / (6));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})() | (0));
var new_width = (width - border__$1);
return new_width;
});
/**
 * Given a tag into which you can go down from rewrite-clj, which must be
 *   a collection of some kind, return the size the l-str.  All of the tag
 *   values into which you can go down must be in this list for indent-before
 *   to work correctly.  It uses these values when it steps up out of one of
 *   these things to see how big the thing would have been if it showed up
 *   as characters.
 */
zprint.comment.tag_l_size = (function zprint$comment$tag_l_size(t){
var G__32601 = t;
var G__32601__$1 = (((G__32601 instanceof cljs.core.Keyword))?G__32601.fqn:null);
switch (G__32601__$1) {
case "list":
return (1);

break;
case "vector":
return (1);

break;
case "set":
return (2);

break;
case "map":
return (1);

break;
case "uneval":
return (2);

break;
case "reader-macro":
return (1);

break;
case "meta":
return (1);

break;
case "quote":
return (1);

break;
case "syntax-quote":
return (1);

break;
case "fn":
return (2);

break;
case "unquote":
return (1);

break;
case "deref":
return (1);

break;
case "namespaced-map":
return (1);

break;
default:
return (0);

}
});
/**
 * Take a zloc and move left if possible, or move up if necessary.
 *   Return a vector with [up-size new-zloc]
 */
zprint.comment.left_or_up = (function zprint$comment$left_or_up(zloc){
var ploc = zloc;
var total_up = (0);
while(true){
var next_left = rewrite_clj.zip.left_STAR_(ploc);
if(cljs.core.truth_(next_left)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,next_left], null);
} else {
var moving_up = rewrite_clj.zip.up_STAR_(ploc);
var up_tag = (cljs.core.truth_(moving_up)?rewrite_clj.zip.tag(moving_up):null);
var up_size = zprint.comment.tag_l_size(up_tag);
if(cljs.core.not(moving_up)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_up,null], null);
} else {
var G__33870 = moving_up;
var G__33871 = (total_up + up_size);
ploc = G__33870;
total_up = G__33871;
continue;
}
}
break;
}
});
/**
 * Given a string, return the number of characters to the right
 *   of any newlines in the string.  Will return nil if no newlines
 *   in the string.
 */
zprint.comment.length_after_newline = (function zprint$comment$length_after_newline(s){
var nl_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''),/\n/);
var nl_num = (cljs.core.count(nl_split) - (1));
if((nl_num === (0))){
return null;
} else {
return (cljs.core.count(cljs.core.last(nl_split)) - (1));
}
});
/**
 * Given a zloc, find the amount of printing space before it on its
 *   current line.
 */
zprint.comment.length_before = (function zprint$comment$length_before(zloc){
var vec__32614 = zprint.comment.left_or_up(zloc);
var up_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32614,(0),null);
var next_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32614,(1),null);
var ploc = next_zloc;
var indent_before = up_size;
while(true){
if(cljs.core.not(ploc)){
return indent_before;
} else {
var zstr = (cljs.core.truth_(ploc)?(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(ploc) : zprint.zfns.zstring.call(null,ploc)):"");
var length_right_of_newline = zprint.comment.length_after_newline(zstr);
var vec__32624 = zprint.comment.left_or_up(ploc);
var up_size__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32624,(0),null);
var next_zloc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32624,(1),null);
if(cljs.core.truth_(length_right_of_newline)){
return (length_right_of_newline + indent_before);
} else {
var G__33894 = next_zloc__$1;
var G__33895 = ((indent_before + cljs.core.count(zstr)) + up_size__$1);
ploc = G__33894;
indent_before = G__33895;
continue;
}
}
break;
}
});
/**
 * If this is an inline comment, returns a vector with the amount
 *   of space that was between this and the previous element and the
 *   starting column of this inline comment.  That means that if we
 *   go left, we get something other than whitespace before a newline.
 *   If we get only whitespace before a newline, then this is considered
 *   an inline comment if the comment at the end of the previous line
 *   was an inline comment and we were aligned with that comment.
 *   Assumes zloc is a comment.
 */
zprint.comment.inlinecomment_QMARK_ = (function zprint$comment$inlinecomment_QMARK_(zloc){
var nloc = rewrite_clj.zip.left_STAR_(zloc);
var spaces = (0);
var passed_nl_QMARK_ = false;
while(true){
var vec__32644 = (function (){var tnloc = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zfns.ztag.call(null,nloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
var nstr = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zfns.zstring.call(null,nloc));
var trim_nstr = clojure.string.trimr(nstr);
if((((trim_nstr).length) > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),(spaces + (cljs.core.count(nstr) - ((trim_nstr).length)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),spaces], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tnloc,spaces], null);
}
})();
var tnloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32644,(0),null);
var spaces__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32644,(1),null);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
var G__33912 = rewrite_clj.zip.left_STAR_(nloc);
var G__33913 = spaces__$1;
var G__33914 = true;
nloc = G__33912;
spaces = G__33913;
passed_nl_QMARK_ = G__33914;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))){
if(cljs.core.truth_((zprint.comment.inlinecomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.comment.inlinecomment_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.comment.inlinecomment_QMARK_.call(null,nloc)))){
var nloc_length_before = zprint.comment.length_before(nloc);
var zloc_length_before = zprint.comment.length_before(zloc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nloc_length_before,zloc_length_before)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zloc_length_before], null);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
if(cljs.core.truth_(passed_nl_QMARK_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaces__$1,zprint.comment.length_before(zloc)], null);
}
} else {
var G__33920 = rewrite_clj.zip.left_STAR_(nloc);
var G__33921 = (rewrite_clj.zip.length(nloc) + spaces__$1);
var G__33922 = passed_nl_QMARK_;
nloc = G__33920;
spaces = G__33921;
passed_nl_QMARK_ = G__33922;
continue;

}
}
}
}
break;
}
});
/**
 * Take a string and an index, and look for the last space prior to the
 *   index. If we wanted to tie ourselves to 1.8, we could use 
 *   clojure.string/last-index-of, but we don't.  However, we use similar
 *   conventions, i.e., if no space is found, return nil, and if the index
 *   is a space return that value, and accept any from-index, including one
 *   larger than the length of the string.
 */
zprint.comment.last_space = (function zprint$comment$last_space(s,from_index){
var from_index__$1 = (function (){var x__5133__auto__ = (cljs.core.count(s) - (1));
var y__5134__auto__ = from_index;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var rev_seq = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2((from_index__$1 + (1)),s));
var seq_after_space = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__32657_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__32657_SHARP_," ");
}),rev_seq);
var space_index = (from_index__$1 - cljs.core.count(seq_after_space));
if((space_index < (0))){
return null;
} else {
return space_index;
}
});
/**
 * Take a string and an index, and look for the next space *after* the
 *   index. If no space is found, return nil. Accept any from-index, 
 *   including one larger than the length of the string.
 */
zprint.comment.next_space = (function zprint$comment$next_space(s,from_index){
var from_index__$1 = (from_index + (1));
if((from_index__$1 < cljs.core.count(s))){
var seq_after_space = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__32662_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__32662_SHARP_," ");
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(from_index__$1,cljs.core.seq(s)));
var space_index = (from_index__$1 + cljs.core.count(seq_after_space));
if((space_index >= cljs.core.count(s))){
return null;
} else {
return space_index;
}
} else {
return null;
}
});
/**
 * If this is a comment, and it is too long, word wrap it to the right width.
 *   Note that top level comments may well end with a newline, so remove it
 *   and reapply it at the end if that is the case.
 */
zprint.comment.wrap_comment = (function zprint$comment$wrap_comment(width,border,p__32666,start){
var vec__32667 = p__32666;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32667,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32667,(1),null);
var stype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32667,(2),null);
var element = vec__32667;
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stype,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stype,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))))){
return element;
} else {
var width_configured = width;
var width__$1 = zprint.comment.adjust_border(start,border,width);
var comment_width = (width__$1 - start);
var semi_str = cljs.core.re_find(/;*/,s);
var rest_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(semi_str));
var space_str = cljs.core.re_find(/ */,rest_str);
var rest_str__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest_str,cljs.core.count(space_str));
var newline_QMARK_ = cljs.core.re_find(/\n$/,s);
var comment_width__$1 = ((comment_width - cljs.core.count(semi_str)) - cljs.core.count(space_str));
var comment_str = rest_str__$1;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(comment_str)){
if((cljs.core.count(out) === (0))){
if(cljs.core.truth_(newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(38)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null)], null);
}
} else {
return cljs.core.persistent_BANG_((cljs.core.truth_(newline_QMARK_)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(39)], null)):out));
}
} else {
var last_space_index = (((((comment_str).length) <= comment_width__$1))?(((comment_str).length) - (1)):(((comment_width__$1 <= (0)))?(function (){var or__5045__auto__ = zprint.comment.next_space(comment_str,(0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (((comment_str).length) - (1));
}
})():(function (){var or__5045__auto__ = zprint.comment.last_space(comment_str,comment_width__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = zprint.comment.next_space(comment_str,comment_width__$1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (((comment_str).length) - (1));
}
}
})()));
var next_comment = clojure.string.trimr(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(comment_str,(0),(last_space_index + (1))));
var G__33964 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(comment_str,(last_space_index + (1)));
var G__33965 = (((cljs.core.count(out) === (0)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,stype], null)):cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(start))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(40)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),next_comment].join(''),color,new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128)], null)));
comment_str = G__33964;
out = G__33965;
continue;
}
break;
}
}
});
/**
 * Takes the start of this vector and the vector itself.
 */
zprint.comment.loc_vec = (function zprint$comment$loc_vec(start,p__32687){
var vec__32688 = p__32687;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32688,(0),null);
var split = zprint.comment.split_lf(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(split),(1))){
return (start + cljs.core.count(s));
} else {
return cljs.core.count(cljs.core.last(split));
}
});
/**
 * Take a style-vec and produce a style-loc-vec with the starting column
 *   of each element in the style-vec. Accepts a beginning indent.
 */
zprint.comment.style_loc_vec = (function zprint$comment$style_loc_vec(indent,style_vec){
return cljs.core.butlast(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(zprint.comment.loc_vec,indent,style_vec));
});
/**
 * Take a transient output vector and a vector and lift any style-vec elements
 *   out of the input vector.
 */
zprint.comment.lift_vec = (function zprint$comment$lift_vec(out_vec,element){
if(typeof cljs.core.first(element) === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out_vec,element);
} else {
var element_vec = element;
var out = out_vec;
while(true){
if(cljs.core.not(element_vec)){
return out;
} else {
var G__33968 = cljs.core.next(element_vec);
var G__33969 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(element_vec));
element_vec = G__33968;
out = G__33969;
continue;
}
break;
}
}
});
/**
 * Take a style-vec [[s color type] [s color type] [[s color type]
 *   [s color type]] [s color type] ...] and lift out the inner vectors.
 */
zprint.comment.lift_style_vec = (function zprint$comment$lift_style_vec(style_vec){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.comment.lift_vec,cljs.core.PersistentVector.EMPTY,style_vec);
});
/**
 * Take the final output style-vec, and wrap any comments which run over
 *   the width. Looking for 
 */
zprint.comment.fzprint_wrap_comments = (function zprint$comment$fzprint_wrap_comments(p__32695,style_vec){
var map__32697 = p__32695;
var map__32697__$1 = cljs.core.__destructure_map(map__32697);
var options = map__32697__$1;
var map__32698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32697__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var map__32698__$1 = cljs.core.__destructure_map(map__32698);
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32698__$1,new cljs.core.Keyword(null,"border","border",1444987323));
var smart_wrap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32698__$1,new cljs.core.Keyword(null,"smart-wrap?","smart-wrap?",-237296715));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32697__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var start_col = zprint.comment.style_loc_vec((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),style_vec);
var top_level_border = border;
var border__$1 = (cljs.core.truth_(smart_wrap_QMARK_)?new cljs.core.Keyword(null,"border","border",1444987323).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options))):border);
var _ = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: indent:",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options),"border (configured):",border__$1,"count style-vec:",cljs.core.count(style_vec),"count start-col:",cljs.core.count(start_col),"start-col:",start_col], 0)):null);
var ___$1 = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: style-vec:",(function (){var G__32701 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true,new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null)], null);
var G__32702 = style_vec;
var fexpr__32700 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__32700.cljs$core$IFn$_invoke$arity$2 ? fexpr__32700.cljs$core$IFn$_invoke$arity$2(G__32701,G__32702) : fexpr__32700.call(null,G__32701,G__32702));
})()], 0)):null);
var ___$2 = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap","wrap",851669987),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: start-col:",start_col], 0)):null);
var wrap_style_vec = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(style_vec),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(style_vec),(2)),new cljs.core.Keyword(null,"comment","comment",532206069)))))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.comment.wrap_comment,width,top_level_border),style_vec,start_col):cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.comment.wrap_comment,width,border__$1),style_vec,start_col));
var ___$3 = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: wrapped:",(function (){var G__32707 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true,new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null)], null);
var G__32708 = wrap_style_vec;
var fexpr__32706 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__32706.cljs$core$IFn$_invoke$arity$2 ? fexpr__32706.cljs$core$IFn$_invoke$arity$2(G__32707,G__32708) : fexpr__32706.call(null,G__32707,G__32708));
})()], 0)):null);
var out_style_vec = zprint.comment.lift_style_vec(wrap_style_vec);
return out_style_vec;
});
/**
 * Find a the first element of this type working from the end of a 
 *   style-vec.  Return the index of the element.
 */
zprint.comment.find_element_from_end = (function zprint$comment$find_element_from_end(element_pred_QMARK_,style_vec){
var index = (cljs.core.count(style_vec) - (1));
while(true){
if((index < (0))){
return null;
} else {
var vec__32712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,index);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32712,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32712,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32712,(2),null);
if(cljs.core.truth_((element_pred_QMARK_.cljs$core$IFn$_invoke$arity$1 ? element_pred_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : element_pred_QMARK_.call(null,e)))){
return index;
} else {
var G__34006 = (index - (1));
index = G__34006;
continue;
}
}
break;
}
});
/**
 * Given a style-vec, how big is it in actual characters.  This doesn't
 *   handle newlines.
 */
zprint.comment.line_size = (function zprint$comment$line_size(style_vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.loc_vec,(0)),style_vec));
});
/**
 * Given a style-vec, whose last element in a comment, find the amount
 *   of space before that comment on the line.
 */
zprint.comment.space_before_comment = (function zprint$comment$space_before_comment(style_vec){
var indent_index = zprint.comment.find_element_from_end((function (p1__32721_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__32721_SHARP_,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__32721_SHARP_,new cljs.core.Keyword(null,"newline","newline",1790071323))));
}),style_vec);
var this_line_vec = (cljs.core.truth_(indent_index)?cljs.core.nthnext(style_vec,indent_index):style_vec);
return zprint.comment.line_size(cljs.core.butlast(this_line_vec));
});
/**
 * Given a string that starts with a semicolon, count the semicolons
 *   and the spaces after it, and return both: [semi-count space-count blank?].
 */
zprint.comment.get_semis_and_spaces = (function zprint$comment$get_semis_and_spaces(s){
var semi_str = cljs.core.re_find(/^;*/,s);
var rest_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(semi_str));
var space_str = cljs.core.re_find(/^ */,rest_str);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(semi_str),cljs.core.count(space_str)], null);
});
/**
 * Given a vector of regex expressions, attempt to match each 
 *   against a string.  If any match, return the matched value which
 *   must be a vector, else nil.
 */
zprint.comment.match_regex_seq = (function zprint$comment$match_regex_seq(regex_seq,regex_source,groups_QMARK_,s){
if(cljs.core.truth_(cljs.core.first(regex_seq))){
var match = (function (){try{return cljs.core.re_find(cljs.core.first(regex_seq),s);
}catch (e32726){var e = e32726;
throw (new Error(["Invalid regular expression: '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(regex_seq)], 0)),"' in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_source)," produced ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')));
}})();
if(cljs.core.truth_(match)){
if(((cljs.core.vector_QMARK_(match)) || (cljs.core.not(groups_QMARK_)))){
return match;
} else {
throw (new Error(["match-and-modify: regex from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_source)," doesn't return groups. Regex: '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(regex_seq)], 0)),"'."].join('')));
}
} else {
var G__32731 = cljs.core.next(regex_seq);
var G__32732 = regex_source;
var G__32733 = groups_QMARK_;
var G__32734 = s;
return (zprint.comment.match_regex_seq.cljs$core$IFn$_invoke$arity$4 ? zprint.comment.match_regex_seq.cljs$core$IFn$_invoke$arity$4(G__32731,G__32732,G__32733,G__32734) : zprint.comment.match_regex_seq.call(null,G__32731,G__32732,G__32733,G__32734));
}
} else {
return null;
}
});
/**
 * Given a series of regular expressions, which *must* match
 *   two groups where the first group is a variable number of semicolons
 *   at the beginning, and the second group is some exdented item like
 *   a 'o', '-', '1', or '1.', if any of them match, replace the second group 
 *   with spaces and return the resulting string, otherwise return the
 *   string unchanged. Returns [s skip?] in case the comment string
 *   matched the end+skip-cg vector of regexs.
 */
zprint.comment.match_and_modify_comment = (function zprint$comment$match_and_modify_comment(end_PLUS_start_cg,end_PLUS_skip_cg,s){
var skip_QMARK_ = zprint.comment.match_regex_seq(end_PLUS_skip_cg,new cljs.core.Keyword(null,"end+skip-cg","end+skip-cg",1897765581),null,s);
if(cljs.core.truth_(skip_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
} else {
var match = zprint.comment.match_regex_seq(end_PLUS_start_cg,new cljs.core.Keyword(null,"end+start-cg","end+start-cg",-1596795489),true,s);
if(cljs.core.truth_(match)){
var vec__32740 = match;
var whole_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32740,(0),null);
var semi_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32740,(1),null);
var after_semi_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32740,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_match),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(cljs.core.count(after_semi_match))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(whole_match))].join(''),false], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,false], null);
}
}
});
/**
 * Figure out if this comments fits in the current comment group.
 *   Start simple, enhance later. Returns :fit, :skip, :next to represent
 *   what to do when dealing with this line.  :fit means it goes in the
 *   current comment group, :end means that it fits in this comment group
 *   but ends this groupi, :skip means that it doesn't go into any
 *   comment group, and :next means that it goes in the next comment group.
 */
zprint.comment.fit_in_comment_group_QMARK_ = (function zprint$comment$fit_in_comment_group_QMARK_(s,this_start_col,end_PLUS_start_cg,end_PLUS_skip_cg,end_cg,start_col,number_semis,current_spacing){
var vec__32745 = zprint.comment.get_semis_and_spaces(s);
var semi_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745,(0),null);
var space_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745,(1),null);
var len = cljs.core.count(s);
if(cljs.core.truth_(zprint.comment.match_regex_seq(end_PLUS_skip_cg,new cljs.core.Keyword(null,"end+skip-cg","end+skip-cg",1897765581),null,s))){
return new cljs.core.Keyword(null,"skip","skip",602715391);
} else {
if(cljs.core.truth_(zprint.comment.match_regex_seq(end_PLUS_start_cg,new cljs.core.Keyword(null,"end+start-cg","end+start-cg",-1596795489),true,s))){
return new cljs.core.Keyword(null,"next","next",-117701485);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_start_col,start_col)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(semi_count,number_semis)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(space_count,current_spacing)))))){
if(cljs.core.truth_(zprint.comment.match_regex_seq(end_cg,new cljs.core.Keyword(null,"end-cg","end-cg",1784228804),null,s))){
return new cljs.core.Keyword(null,"end","end",-268185958);
} else {
return new cljs.core.Keyword(null,"fit","fit",869444807);
}
} else {
return new cljs.core.Keyword(null,"next","next",-117701485);

}
}
}
});
/**
 * Get the next comment group.  A comment group is a set of comments
 *   which are:
 *  o On contiguous lines
 *  o Contain no blank comment lines
 *  o Have the starting column of their first ; the same
 *  o Have the same number of beginning ; characters
 *  o Have the same number of spaces after their rightmost ;
 *     or
 *  o Have an outdented single character or number, and have the
 *    same number of spaces between the rightmost semi and the beginning
 *    of the text if you ignore the outdented character or number
 * 
 *   The final critiera is managed by a set of regular expressions
 *   which each match two groups -- the contiguous ; characters, and
 *   any outdented information after the rightmost ; and before the
 *   remaining text.
 * 
 *   Takes a starting index, and two vectors.  The start-col-vec is a
 *   vector of the starting columns of each element in the style-vec.
 *   They must be the same length!  Returns a vector with the starting
 *   element in the style vec of each comment of this comment group.
 *   Returns [depth [next-element-index semi-count space-count
 *   comment-group-members]] If next-element-index is nil, this was
 *   the last comment group in the style-vec and it may or may not
 *   have any additional indexes in the vector.
 *   
 *   Also tracks the depth.
 */
zprint.comment.get_next_comment_group = (function zprint$comment$get_next_comment_group(p__32756,depth,index,start_col_vec,style_vec){
var map__32757 = p__32756;
var map__32757__$1 = cljs.core.__destructure_map(map__32757);
var options = map__32757__$1;
var map__32758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32757__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var map__32758__$1 = cljs.core.__destructure_map(map__32758);
var map__32759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32758__$1,new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181));
var map__32759__$1 = cljs.core.__destructure_map(map__32759);
var end_PLUS_start_cg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32759__$1,new cljs.core.Keyword(null,"end+start-cg","end+start-cg",-1596795489));
var end_PLUS_skip_cg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32759__$1,new cljs.core.Keyword(null,"end+skip-cg","end+skip-cg",1897765581));
var end_cg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32759__$1,new cljs.core.Keyword(null,"end-cg","end-cg",1784228804));
var top_level_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32759__$1,new cljs.core.Keyword(null,"top-level?","top-level?",993634489));
var smart_wrap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32758__$1,new cljs.core.Keyword(null,"smart-wrap?","smart-wrap?",-237296715));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"get-next-comment-group: depth:",depth,"end+start-cg",end_PLUS_start_cg,"end+skip-cg",end_PLUS_skip_cg], 0));
} else {
}

var idx = index;
var depth__$1 = depth;
var start_col = (0);
var number_semis = (0);
var current_spacing = (0);
var nl_indent_count = (0);
var out = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0)], null);
while(true){
var vec__32798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(style_vec,idx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"end","end",-268185958)], null));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(2),null);
var element = vec__32798;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-next-comment-group: depth:",depth__$1,"s:",s,"what:",what,"number-semis:",number_semis,"current-spacing:",current_spacing,"out:",out], 0))], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"end","end",-268185958))){
if((number_semis === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth__$1,out], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(out,(1),number_semis,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),current_spacing], 0))], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"left","left",-399115937))){
var G__34026 = (idx + (1));
var G__34027 = (depth__$1 + (1));
var G__34028 = start_col;
var G__34029 = number_semis;
var G__34030 = current_spacing;
var G__34031 = nl_indent_count;
var G__34032 = out;
idx = G__34026;
depth__$1 = G__34027;
start_col = G__34028;
number_semis = G__34029;
current_spacing = G__34030;
nl_indent_count = G__34031;
out = G__34032;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"right","right",-452581833))){
var G__34033 = (idx + (1));
var G__34034 = (depth__$1 - (1));
var G__34035 = start_col;
var G__34036 = number_semis;
var G__34037 = current_spacing;
var G__34038 = nl_indent_count;
var G__34039 = out;
idx = G__34033;
depth__$1 = G__34034;
start_col = G__34035;
number_semis = G__34036;
current_spacing = G__34037;
nl_indent_count = G__34038;
out = G__34039;
continue;
} else {
if((depth__$1 === (0))){
var G__34040 = (idx + (1));
var G__34041 = depth__$1;
var G__34042 = start_col;
var G__34043 = number_semis;
var G__34044 = current_spacing;
var G__34045 = nl_indent_count;
var G__34046 = out;
idx = G__34040;
depth__$1 = G__34041;
start_col = G__34042;
number_semis = G__34043;
current_spacing = G__34044;
nl_indent_count = G__34045;
out = G__34046;
continue;
} else {
if((number_semis === (0))){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))){
var vec__32805 = zprint.comment.match_and_modify_comment(end_PLUS_start_cg,end_PLUS_skip_cg,s);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32805,(0),null);
var skip_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32805,(1),null);
var vec__32808 = (cljs.core.truth_(skip_QMARK_)?null:zprint.comment.get_semis_and_spaces(s__$1));
var semi_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(0),null);
var space_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(1),null);
if(cljs.core.truth_(skip_QMARK_)){
var G__34048 = (idx + (1));
var G__34049 = depth__$1;
var G__34050 = (0);
var G__34051 = (0);
var G__34052 = (0);
var G__34053 = (0);
var G__34054 = out;
idx = G__34048;
depth__$1 = G__34049;
start_col = G__34050;
number_semis = G__34051;
current_spacing = G__34052;
nl_indent_count = G__34053;
out = G__34054;
continue;
} else {
var G__34055 = (idx + (1));
var G__34056 = depth__$1;
var G__34057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(start_col_vec,idx);
var G__34058 = semi_count;
var G__34059 = space_count;
var G__34060 = nl_indent_count;
var G__34061 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,idx);
idx = G__34055;
depth__$1 = G__34056;
start_col = G__34057;
number_semis = G__34058;
current_spacing = G__34059;
nl_indent_count = G__34060;
out = G__34061;
continue;
}
} else {
var G__34062 = (idx + (1));
var G__34063 = depth__$1;
var G__34064 = (0);
var G__34065 = (0);
var G__34066 = (0);
var G__34067 = (0);
var G__34068 = out;
idx = G__34062;
depth__$1 = G__34063;
start_col = G__34064;
number_semis = G__34065;
current_spacing = G__34066;
nl_indent_count = G__34067;
out = G__34068;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
if((nl_indent_count === (0))){
var G__34069 = (idx + (1));
var G__34070 = depth__$1;
var G__34071 = start_col;
var G__34072 = number_semis;
var G__34073 = current_spacing;
var G__34074 = (1);
var G__34075 = out;
idx = G__34069;
depth__$1 = G__34070;
start_col = G__34071;
number_semis = G__34072;
current_spacing = G__34073;
nl_indent_count = G__34074;
out = G__34075;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(out,(0),(idx + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),number_semis,(2),current_spacing], 0))], null);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))){
var fit_return = zprint.comment.fit_in_comment_group_QMARK_(s,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(start_col_vec,idx),end_PLUS_start_cg,end_PLUS_skip_cg,end_cg,start_col,number_semis,current_spacing);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fit-in-comment-group","fit-in-comment-group",718846310),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"get-next-comment-group: fit-in-comment-group:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)),fit_return], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fit_return,new cljs.core.Keyword(null,"fit","fit",869444807))){
var G__34076 = (idx + (1));
var G__34077 = depth__$1;
var G__34078 = start_col;
var G__34079 = number_semis;
var G__34080 = current_spacing;
var G__34081 = (0);
var G__34082 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,idx);
idx = G__34076;
depth__$1 = G__34077;
start_col = G__34078;
number_semis = G__34079;
current_spacing = G__34080;
nl_indent_count = G__34081;
out = G__34082;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fit_return,new cljs.core.Keyword(null,"skip","skip",602715391))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(out,(0),(idx + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),number_semis,(2),current_spacing], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fit_return,new cljs.core.Keyword(null,"next","next",-117701485))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(out,(0),idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),number_semis,(2),current_spacing], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fit_return,new cljs.core.Keyword(null,"end","end",-268185958))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,idx),(0),(idx + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),number_semis,(2),current_spacing], 0))], null);
} else {
throw (new Error(["Internal error in get-next-comment-group: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fit_return),"'."].join('')));

}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(out,(0),(idx + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),number_semis,(2),current_spacing], 0))], null);

}
}
}

}
}
}
}
break;
}
});
/**
 * Do style-lines (rather differently) for a set of comments in a 
 *   comment-group.  Return [<line-count> <max-width> [line-lengths]].
 */
zprint.comment.style_lines_in_comment_group = (function zprint$comment$style_lines_in_comment_group(start_col_vec,style_vec,comment_group){
var lengths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__32826_SHARP_){
return cljs.core.count(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,p1__32826_SHARP_)));
}),comment_group);
var lengths__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(start_col_vec,cljs.core.first(comment_group))),lengths);
var max_length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,lengths__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(comment_group),max_length,lengths__$1], null);
});
/**
 * Find the first space to the left of idx in the string s. Returns a number
 *   or nil if no space.
 */
zprint.comment.first_space_left = (function zprint$comment$first_space_left(s,idx){
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(s," ",idx);
});
/**
 * Find the first space to the left of idx in the string s. Returns a number
 *   or nil if no space.
 */
zprint.comment.first_space_right = (function zprint$comment$first_space_right(s,idx){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s," ",idx);
});
/**
 * Split the string at the first space to the left of idx, if any
 *   is found.  Returns [start-str end-str].  If no space is found,
 *   end-str is nil.  If idx is beyond the end of s, then puts all of
 *   s into start-str, and makes end-str be an empty string, not nil.
 *   Note -- leaves the first left space out of the resulting strings.
 */
zprint.comment.split_str_at_space_left = (function zprint$comment$split_str_at_space_left(s,idx){
if((idx > cljs.core.count(s))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,""], null);
} else {
var space_left = zprint.comment.first_space_left(s,idx);
if(cljs.core.truth_(space_left)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),space_left),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(space_left + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null);
}
}
});
/**
 * Split the string at the first space to the left of idx, if any
 *   is found.  Returns [start-str end-str].  If no space is found,
 *   instead of using the first space to the left of idx, the first
 *   space to the right of idx is used.  If no space at all can be
 *   found, end-str is nil.  If idx is beyond the end of s, then puts
 *   all of s into start-str, and makes end-str be an empty string,
 *   not nil.  Note -- leaves the space where the string is split out
 *   of the resulting strings.
 */
zprint.comment.split_str_at_space = (function zprint$comment$split_str_at_space(s,idx){
var vec__32860 = zprint.comment.split_str_at_space_left(s,idx);
var start_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32860,(0),null);
var end_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32860,(1),null);
var return_vec = vec__32860;
if((end_str == null)){
var space_right = zprint.comment.first_space_right(s,idx);
if(cljs.core.truth_(space_right)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),space_right),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(space_right + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null);
}
} else {
return return_vec;
}
});
/**
 * Insert string s into the style-vec at index style-idx.
 */
zprint.comment.insert_str_into_style_vec = (function zprint$comment$insert_str_into_style_vec(style_vec,s,style_idx){
var vec__32866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,style_idx);
var old_s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866,(2),null);
var element = vec__32866;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(style_vec,style_idx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,color,what], null));
});
/**
 * Make a style-vec element an empty string and remove :newline or :indent
 * immediately before it.
 */
zprint.comment.delete_style_vec_element = (function zprint$comment$delete_style_vec_element(style_vec,style_idx){
if((style_idx === (0))){
return style_vec;
} else {
var vec__32881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,style_idx);
var rs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32881,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32881,(1),null);
var right_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32881,(2),null);
var right_element = vec__32881;
var vec__32884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,(style_idx - (1)));
var ls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32884,(0),null);
var color__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32884,(1),null);
var left_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32884,(2),null);
var left_element = vec__32884;
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(right_what,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(right_what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left_what,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left_what,new cljs.core.Keyword(null,"newline","newline",1790071323))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(style_vec,style_idx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"deleted","deleted",-510100639)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(style_idx - (1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"deleted","deleted",-510100639)], null)], 0));
} else {
throw (new Error(["can't delete style vec element idx: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_idx)," element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_element)].join('')));
}
}
});
/**
 * Take a string, an return true if it ends with some kind of
 *   punctuation.  Returns nil if it does not, which signals that
 *   some kind of terminating punctuation must be added.
 */
zprint.comment.ends_w_punctuation_QMARK_ = (function zprint$comment$ends_w_punctuation_QMARK_(s){
if(cljs.core.empty_QMARK_(s)){
return true;
} else {
return ((clojure.string.ends_with_QMARK_(s,".")) || (((clojure.string.ends_with_QMARK_(s,"!")) || (((clojure.string.ends_with_QMARK_(s,"?")) || (clojure.string.ends_with_QMARK_(s,":")))))));
}
});
/**
 * Takes two string fragments to glue together.  We assume a space
 *   between them (unless the left is empty), but figure out if we
 *   need to have a period and possibly capitalize the beginning of
 *   the second one. Just use a space if either left or right contains
 *   parentheses, so we don't add periods and caps inside of commented
 *   out code. Returns [separator new-right]
 */
zprint.comment.figure_separator = (function zprint$comment$figure_separator(left,right){
if(((clojure.string.includes_QMARK_(left,"(")) || (((clojure.string.includes_QMARK_(left,")")) || (((clojure.string.includes_QMARK_(right,"(")) || (clojure.string.includes_QMARK_(right,")")))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",right], null);
} else {
var terminated_QMARK_ = zprint.comment.ends_w_punctuation_QMARK_(left);
var capitalized_QMARK_ = zprint.comment.capital_QMARK_(right);
var right_more_than_one_QMARK_ = (cljs.core.count(cljs.core.re_find(/^\w*/,right)) > (1));
var left_empty_QMARK_ = cljs.core.empty_QMARK_(left);
if(left_empty_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",right], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = terminated_QMARK_;
if(and__5043__auto__){
return capitalized_QMARK_;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",right], null);
} else {
if(terminated_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",zprint.comment.capitalize_first(right)], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = capitalized_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return right_more_than_one_QMARK_;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [". ",right], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",right], null);

}
}
}
}
}
});
/**
 * Look at just the text (not semis or initial spaces) of the us and ls
 *   and the available space, and determine if there is any reason to move
 *   some or all of the ls onto the us.  If there is, do it, and return new
 *   strings.  Returns [new-us new-ls].  If new-ls is nil, then no changes
 *   were warrented.  If new-ls is empty (but not nil), then it means that
 *   all of the text from the ls moved to the us.  Figures out the necessary
 *   separator(s), based in part of the existing punctuation.
 */
zprint.comment.move_ls_to_us = (function zprint$comment$move_ls_to_us(us_text,ls_text,available_space){
var vec__32907 = zprint.comment.figure_separator(us_text,ls_text);
var separator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(0),null);
var new_ls_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(1),null);
var available_space__$1 = (available_space - cljs.core.count(separator));
var vec__32910 = zprint.comment.split_str_at_space_left(new_ls_text,available_space__$1);
var new_end_us = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(0),null);
var new_ls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(1),null);
if(cljs.core.truth_(new_ls)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(us_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_end_us)].join(''),new_ls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [us_text,null], null);
}
});
/**
 * Prepend the correct number of semicolons and spaces to a comment
 *   string.
 */
zprint.comment.text_to_comment = (function zprint$comment$text_to_comment(var_args){
var G__32916 = arguments.length;
switch (G__32916) {
case 4:
return zprint.comment.text_to_comment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.comment.text_to_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.comment.text_to_comment.cljs$core$IFn$_invoke$arity$4 = (function (semi_count,space_count,s,us){
if(cljs.core.truth_(us)){
var space_count_from_us = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(us,semi_count,(semi_count + space_count));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semi_count,";"))),space_count_from_us,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semi_count,";"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(space_count)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
}));

(zprint.comment.text_to_comment.cljs$core$IFn$_invoke$arity$3 = (function (semi_count,space_count,s){
return zprint.comment.text_to_comment.cljs$core$IFn$_invoke$arity$4(semi_count,space_count,s,null);
}));

(zprint.comment.text_to_comment.cljs$lang$maxFixedArity = 4);

/**
 * Take the index into the style-vec for two comments, and balance
 *   the words in them. Note that usable-space is start-col based.
 *   Returns a new style-vec in [new-style-vec changed?].
 */
zprint.comment.balance_two_comments = (function zprint$comment$balance_two_comments(options,start_col_vec,style_vec,semi_count,space_count,usable_space,upper_idx,lower_idx,comment_group){
var vec__32931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,upper_idx);
var us = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32931,(0),null);
var ucolor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32931,(1),null);
var uwhat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32931,(2),null);
var upper_element = vec__32931;
var vec__32934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,lower_idx);
var ls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32934,(0),null);
var lcolor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32934,(1),null);
var lwhat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32934,(2),null);
var lower_element = vec__32934;
var front_matter = (semi_count + space_count);
var us_text = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(us,front_matter);
var ls_text = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ls,front_matter);
var upper_space = ((us_text).length);
var lower_space = ((ls_text).length);
var usable_space__$1 = (usable_space - front_matter);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"balance-comments","balance-comments",-1720593472),null,new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"balance-two-comments: usable-space:",usable_space__$1,"upper-idx:",upper_idx,"lower-idx:",lower_idx,"\nus:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([us], 0)),"\nls:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ls], 0))], 0));
} else {
}

if((upper_space > usable_space__$1)){
var vec__32950 = zprint.comment.split_str_at_space(us_text,usable_space__$1);
var new_us = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32950,(0),null);
var new_start_ls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32950,(1),null);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"balance-comments","balance-comments",-1720593472),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"...upper->lower","\n   us:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([us_text], 0)),"\n   ",((us_text).length),"\n   ls:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ls_text], 0)),"\n   ",((ls_text).length),"\n   new-us:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_us], 0)),"\n   ",cljs.core.count(new_us),"\n   new-start-ls:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_start_ls], 0)),"\n   ",cljs.core.count(new_start_ls)], 0));
} else {
}

if((!(cljs.core.empty_QMARK_(new_start_ls)))){
var full_us = zprint.comment.text_to_comment.cljs$core$IFn$_invoke$arity$4(semi_count,space_count,new_us,us);
var vec__32964 = zprint.comment.figure_separator(new_start_ls,ls_text);
var separator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(0),null);
var new_ls_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(1),null);
var full_ls = zprint.comment.text_to_comment.cljs$core$IFn$_invoke$arity$3(semi_count,space_count,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_start_ls),cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_ls_text)].join(''));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"balance-comments","balance-comments",-1720593472),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),".2.new-ls:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([full_ls], 0))], 0));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.insert_str_into_style_vec(zprint.comment.insert_str_into_style_vec(style_vec,full_us,upper_idx),full_ls,lower_idx),true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_vec,null], null);
}
} else {
if((function (){var and__5043__auto__ = (function (){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"balance-comments","balance-comments",-1720593472),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"...(< upper-space usable-space)",(upper_space < usable_space__$1),"\n   upper-space:",upper_space,"\n   lower-space:",lower_space,"\n   ls:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ls], 0))], 0));
} else {
}

return (upper_space < usable_space__$1);
})()
;
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"balance-comments","balance-comments",-1720593472),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"...(< lower-space upper-space)",(lower_space < upper_space),"(- usable-space upper-space)",(usable_space__$1 - upper_space),"(+ semi-count space-count)",(semi_count + space_count),"(- lower-space (+ semi-count space-count))",(lower_space - (semi_count + space_count))], 0));
} else {
}

return true;
})()
;
if(and__5043__auto____$1){
return (!((((lower_space < upper_space)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(comment_group),(2))) && ((((usable_space__$1 - upper_space) - ((lower_space - (semi_count + space_count)) + (1))) < (0))))))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})()){
var available_space = (usable_space__$1 - upper_space);
var vec__32981 = zprint.comment.move_ls_to_us(us_text,ls_text,available_space);
var new_us = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32981,(0),null);
var new_ls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32981,(1),null);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"balance-comments","balance-comments",-1720593472),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"...move from lower to upper","\n available-space (- usable-space upper-space):",available_space,"\n   new-us:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_us], 0)),"\n   ",cljs.core.count(new_us),"\n   new-ls:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ls], 0)),"\n   ",cljs.core.count(new_ls)], 0));
} else {
}

if(cljs.core.truth_(new_ls)){
var full_us = zprint.comment.text_to_comment.cljs$core$IFn$_invoke$arity$4(semi_count,space_count,new_us,us);
if(cljs.core.empty_QMARK_(new_ls)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.delete_style_vec_element(zprint.comment.insert_str_into_style_vec(style_vec,full_us,upper_idx),lower_idx),true], null);
} else {
var full_ls = zprint.comment.text_to_comment.cljs$core$IFn$_invoke$arity$3(semi_count,space_count,new_ls);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.insert_str_into_style_vec(zprint.comment.insert_str_into_style_vec(style_vec,full_us,upper_idx),full_ls,lower_idx),true], null);
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"balance-comments","balance-comments",-1720593472),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"...no changes:"], 0));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_vec,null], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_vec,null], null);

}
}
});
/**
 * For multple line comment groups, do some 'smart' word wrapping,
 *   where we will move words back up to a line with less than the
 *   others, and also move words down when a line is too long.  Returns
 *   style-vec.
 */
zprint.comment.flow_comments_in_group = (function zprint$comment$flow_comments_in_group(p__33007,start_col_vec,style_vec,semi_count,space_count,comment_group){
var map__33016 = p__33007;
var map__33016__$1 = cljs.core.__destructure_map(map__33016);
var options = map__33016__$1;
var map__33017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33016__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var map__33017__$1 = cljs.core.__destructure_map(map__33017);
var map__33018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33017__$1,new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181));
var map__33018__$1 = cljs.core.__destructure_map(map__33018);
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33018__$1,new cljs.core.Keyword(null,"border","border",1444987323));
var max_variance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33018__$1,new cljs.core.Keyword(null,"max-variance","max-variance",-899998186));
var last_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33018__$1,new cljs.core.Keyword(null,"last-max","last-max",1625691236));
var space_factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33018__$1,new cljs.core.Keyword(null,"space-factor","space-factor",1288684081));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33016__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var comment_lines = zprint.comment.style_lines_in_comment_group(start_col_vec,style_vec,comment_group);
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(start_col_vec,cljs.core.first(comment_group));
var max_width = cljs.core.second(comment_lines);
var length_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(comment_lines,(2));
var length_len = cljs.core.count(length_vec);
var butlast_length_vec = cljs.core.butlast(length_vec);
var last_len = cljs.core.peek(length_vec);
var max_not_last = (((length_len > (1)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,butlast_length_vec):cljs.core.first(length_vec));
var include_last_QMARK_ = (((((length_len > (1))) && ((last_len >= max_not_last)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(length_len,(2))));
var cg_variance = (function (){var or__5045__auto__ = zprint.util.variance(((include_last_QMARK_)?length_vec:cljs.core.butlast(length_vec)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var last_force_QMARK_ = (((length_len > (1))) && ((((last_len > max_not_last)) && (((last_len - max_not_last) > last_max)))));
var width__$1 = zprint.comment.adjust_border(start_col,border,width);
var usable_space = (width__$1 - start_col);
var max_space = (max_width - start_col);
var line_count = cljs.core.count(comment_group);
var space_factor__$1 = (((space_factor < (1)))?(1):space_factor);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flow-comments","flow-comments",-2134212223),null,new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"flow-comments-in-group: max-variance:",max_variance,"cg-variance:",cg_variance,"include-last?",include_last_QMARK_,"last-len:",last_len,"max-not-last:",max_not_last,"(- last-len max-not-last):",(last_len - max_not_last),"max-width:",max_width,"max-space:",max_space,"usable-space:",usable_space], 0));
} else {
}

if((((cg_variance < max_variance)) && ((((max_space >= ((usable_space / space_factor__$1) | (0)))) && ((((max_space <= usable_space)) && ((((line_count >= (2))) && ((!(last_force_QMARK_))))))))))){
return style_vec;
} else {
var cg = comment_group;
var style_vec__$1 = style_vec;
var already_changed_QMARK_ = null;
while(true){
if((cljs.core.count(cg) <= (1))){
return style_vec__$1;
} else {
var vec__33075 = zprint.comment.balance_two_comments(options,start_col_vec,style_vec__$1,semi_count,space_count,usable_space,cljs.core.first(cg),cljs.core.second(cg),cg);
var new_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(0),null);
var changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_style_vec,cljs.core.second(cg)),(2)),new cljs.core.Keyword(null,"deleted","deleted",-510100639))){
var G__34122 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first(cg),null,(1),null)),cljs.core.nnext(cg));
var G__34123 = new_style_vec;
var G__34124 = (function (){var or__5045__auto__ = already_changed_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return changed_QMARK_;
}
})();
cg = G__34122;
style_vec__$1 = G__34123;
already_changed_QMARK_ = G__34124;
continue;
} else {
var G__34126 = cljs.core.next(cg);
var G__34127 = new_style_vec;
var G__34128 = (function (){var or__5045__auto__ = already_changed_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return changed_QMARK_;
}
})();
cg = G__34126;
style_vec__$1 = G__34127;
already_changed_QMARK_ = G__34128;
continue;
}
}
break;
}
}
});
/**
 * Do smart wrap over the entire style-vec.  Returns a possibly new
 *   style-vec.  
 *   
 *   Note that top-level isn't really a thing, since every actual
 *   top-level element comes in one at a time, so they will all have
 *   their own comment group, and never get smart wrapped because of
 *   that.  We have been keeping track of the depth, and we continue
 *   to do so since there might be some reason we cared in the future,
 *   but it really makes no actual difference to the output at this
 *   point.  That is to say, from this routine, you can't do top-level
 *   smart wrapping, period.  Because you never see two top-level
 *   comments at the same time.
 *   
 *   Note also that this routine doesn't complete the wrapping, as it
 *   never creates new lines, just wraps within the lines that we have.
 *   It may leave the last line with a lot of stuff on it, and let
 *   fzprint-wrap-comments turn that last line into multiple lines.
 */
zprint.comment.fzprint_smart_wrap = (function zprint$comment$fzprint_smart_wrap(p__33118,style_vec){
var map__33119 = p__33118;
var map__33119__$1 = cljs.core.__destructure_map(map__33119);
var options = map__33119__$1;
var map__33120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33119__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var map__33120__$1 = cljs.core.__destructure_map(map__33120);
var map__33121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33120__$1,new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181));
var map__33121__$1 = cljs.core.__destructure_map(map__33121);
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33121__$1,new cljs.core.Keyword(null,"border","border",1444987323));
var smart_wrap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33120__$1,new cljs.core.Keyword(null,"smart-wrap?","smart-wrap?",-237296715));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33119__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var start_col = zprint.comment.style_loc_vec((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),style_vec);
var style_vec__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,style_vec);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"comment-group","comment-group",-1629245680),null,new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-smart-wrap smart-wrap?",smart_wrap_QMARK_,"border:",border,(function (){var G__33126 = cljs.core.PersistentArrayMap.EMPTY;
var G__33127 = cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (p1__33100_SHARP_,p2__33101_SHARP_,p3__33102_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__33100_SHARP_,p2__33101_SHARP_,p3__33102_SHARP_],null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),start_col,style_vec__$1);
var fexpr__33125 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__33125.cljs$core$IFn$_invoke$arity$2 ? fexpr__33125.cljs$core$IFn$_invoke$arity$2(G__33126,G__33127) : fexpr__33125.call(null,G__33126,G__33127));
})()], 0));
} else {
}

var idx = (0);
var depth = (0);
var style_vec__$2 = style_vec__$1;
while(true){
var vec__33151 = zprint.comment.get_next_comment_group(options,depth,idx,start_col,style_vec__$2);
var new_depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33151,(0),null);
var comment_group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33151,(1),null);
var next_idx = cljs.core.first(comment_group);
var semi_count = cljs.core.second(comment_group);
var space_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(comment_group,(2));
var cg = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(comment_group,(3));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"comment-group","comment-group",-1629245680),null,new cljs.core.Keyword(null,"smart-wrap","smart-wrap",-2139886181),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-smart-wrap comment-group:",cg,"depth:",new_depth,"next-idx:",next_idx,"semi-count:",semi_count,"space-count:",space_count], 0));
} else {
}

if(cljs.core.empty_QMARK_(cg)){
return style_vec__$2;
} else {
var new_style_vec = zprint.comment.flow_comments_in_group(options,start_col,style_vec__$2,semi_count,space_count,cg);
if((!((next_idx == null)))){
var G__34154 = next_idx;
var G__34156 = new_depth;
var G__34157 = new_style_vec;
idx = G__34154;
depth = G__34156;
style_vec__$2 = G__34157;
continue;
} else {
return new_style_vec;
}
}
break;
}
});
/**
 * Try to bring inline comments back onto the line on which they belong.
 */
zprint.comment.fzprint_inline_comments = (function zprint$comment$fzprint_inline_comments(p__33178,style_vec){
var map__33195 = p__33178;
var map__33195__$1 = cljs.core.__destructure_map(map__33195);
var options = map__33195__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33195__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-inline-comments:",style_vec], 0))], 0));
} else {
}

var cvec = style_vec;
var last_out = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",null,null], null);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
return out;
} else {
var vec__33240 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33240,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33240,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33240,(2),null);
var element = vec__33240;
var vec__33243 = cljs.core.second(cvec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33243,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33243,(1),null);
var ne = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33243,(2),null);
var nn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33243,(3),null);
var next_element = vec__33243;
var vec__33246 = last_out;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33246,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33246,(1),null);
var le = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33246,(2),null);
var new_element = ((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"newline","newline",1790071323))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ne,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))?(((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(le,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(le,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(nn),c,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(25)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(zprint.comment.space_before_comment(out)))].join(''),c,new cljs.core.Keyword(null,"indent","indent",-148200125),(41)], null)):element
);
var G__34168 = cljs.core.next(cvec);
var G__34169 = new_element;
var G__34170 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_element);
cvec = G__34168;
last_out = G__34169;
out = G__34170;
continue;
}
break;
}
});
zprint.comment.max_aligned_inline_comment_distance = (5);
/**
 * Given a style-vec, find previously aligned inline comments and
 *   output the as a sequence of vectors of comments. The previously
 *   aligned comments do not have to be consecutive, but they can't
 *   be separated by more than max-aligned-inline-comment-distance.
 *   Each comment itself is a vector: [indent-index inline-comment-index],
 *   yielding a [[[indent-index inline-comment-index] [indent-index
 *   inline-comment-index] ...] ...].  The indexes are into the
 *   style-vec.
 */
zprint.comment.find_aligned_inline_comments = (function zprint$comment$find_aligned_inline_comments(style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var current_column = (0);
var distance = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
var out__$1 = (((cljs.core.count(current_seq) > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out);
return out__$1;
} else {
var vec__33332 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33332,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33332,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33332,(2),null);
var spaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33332,(3),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33332,(4),null);
var element = vec__33332;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_column,current_column)){
var G__34185 = cljs.core.next(cvec);
var G__34186 = (index + (1));
var G__34187 = null;
var G__34188 = (cljs.core.truth_(last_indent)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function(){throw (new Error(["find-aligned-inline-comments a:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')))})());
var G__34189 = current_column;
var G__34190 = (0);
var G__34191 = out;
cvec = G__34185;
index = G__34186;
last_indent = G__34187;
current_seq = G__34188;
current_column = G__34189;
distance = G__34190;
out = G__34191;
continue;
} else {
var G__34197 = cljs.core.next(cvec);
var G__34198 = (index + (1));
var G__34199 = null;
var G__34200 = (cljs.core.truth_(last_indent)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)], null):(function(){throw (new Error(["find-aligned-inline-comments b:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')))})());
var G__34201 = start_column;
var G__34202 = (0);
var G__34203 = (((cljs.core.count(current_seq) > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out);
cvec = G__34197;
index = G__34198;
last_indent = G__34199;
current_seq = G__34200;
current_column = G__34201;
distance = G__34202;
out = G__34203;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"newline","newline",1790071323))))){
if((distance >= zprint.comment.max_aligned_inline_comment_distance)){
var G__34209 = cljs.core.next(cvec);
var G__34210 = (index + (1));
var G__34211 = index;
var G__34212 = cljs.core.PersistentVector.EMPTY;
var G__34213 = (0);
var G__34214 = (0);
var G__34215 = (((cljs.core.count(current_seq) > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out);
cvec = G__34209;
index = G__34210;
last_indent = G__34211;
current_seq = G__34212;
current_column = G__34213;
distance = G__34214;
out = G__34215;
continue;
} else {
var G__34217 = cljs.core.next(cvec);
var G__34218 = (index + (1));
var G__34219 = index;
var G__34220 = current_seq;
var G__34221 = current_column;
var G__34222 = (distance + (1));
var G__34223 = out;
cvec = G__34217;
index = G__34218;
last_indent = G__34219;
current_seq = G__34220;
current_column = G__34221;
distance = G__34222;
out = G__34223;
continue;
}
} else {
var G__34230 = cljs.core.next(cvec);
var G__34231 = (index + (1));
var G__34232 = last_indent;
var G__34233 = current_seq;
var G__34234 = current_column;
var G__34235 = distance;
var G__34236 = out;
cvec = G__34230;
index = G__34231;
last_indent = G__34232;
current_seq = G__34233;
current_column = G__34234;
distance = G__34235;
out = G__34236;
continue;

}
}
}
break;
}
});
/**
 * Given a style-vec, find consecutive inline comments and output
 *   them as a sequence of vectors of comments.  Each comment itself
 *   is a vector: [indent-index inline-comment-index], yielding a
 *   [[[indent-index inline-comment-index] [indent-index inline-comment-index]
 *   ...] ...]
 */
zprint.comment.find_consecutive_inline_comments = (function zprint$comment$find_consecutive_inline_comments(options,style_vec){
var cvec = style_vec;
var index = (0);
var last_indent = (0);
var current_seq = cljs.core.PersistentVector.EMPTY;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
if(cljs.core.truth_(last_indent)){
if((cljs.core.count(current_seq) > (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq);
} else {
return out;
}
} else {
return out;
}
} else {
var vec__33530 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33530,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33530,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33530,(2),null);
var element = vec__33530;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"consecutive","consecutive",-1628234596),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"find-consecutive-inline-comments element:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([element], 0)),"\n index:",index,"\n last-indent:",last_indent,"\n current-seq:",current_seq,"\n out:",out], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))){
var G__34255 = cljs.core.next(cvec);
var G__34256 = (index + (1));
var G__34257 = null;
var G__34258 = (cljs.core.truth_(last_indent)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_seq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_indent,index], null)):(function(){throw (new Error(["find-consecutive-inline-comments:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')))})());
var G__34259 = out;
cvec = G__34255;
index = G__34256;
last_indent = G__34257;
current_seq = G__34258;
out = G__34259;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"newline","newline",1790071323))))){
var G__34263 = cljs.core.next(cvec);
var G__34264 = (index + (1));
var G__34265 = index;
var G__34266 = (cljs.core.truth_(last_indent)?cljs.core.PersistentVector.EMPTY:current_seq);
var G__34267 = (cljs.core.truth_(last_indent)?(((cljs.core.count(current_seq) > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,current_seq):out):out);
cvec = G__34263;
index = G__34264;
last_indent = G__34265;
current_seq = G__34266;
out = G__34267;
continue;
} else {
var G__34271 = cljs.core.next(cvec);
var G__34272 = (index + (1));
var G__34273 = last_indent;
var G__34274 = current_seq;
var G__34275 = out;
cvec = G__34271;
index = G__34272;
last_indent = G__34273;
current_seq = G__34274;
out = G__34275;
continue;

}
}
}
break;
}
});
/**
 * Takes a single vector of [indent-index comment-index] and will show the
 *   column on the line in which the comment starts.
 */
zprint.comment.comment_column = (function zprint$comment$comment_column(p__33555,style_vec){
var vec__33557 = p__33555;
var indent_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33557,(0),null);
var comment_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33557,(1),null);
if(cljs.core.vector_QMARK_(style_vec)){
} else {
throw (new Error(["comment-column: style-vec not a vector!! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_vec)].join('')));
}

var index = indent_index;
var column = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,comment_index)){
return column;
} else {
var G__34284 = (index + (1));
var G__34285 = zprint.comment.loc_vec(column,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,index));
index = G__34284;
column = G__34285;
continue;
}
break;
}
});
/**
 * Take a single inline comment vector:
 *   [indent-index inline-comment-index] 
 *   and replace it with [inline-comment-index start-column spaces-before].
 */
zprint.comment.comment_vec_column = (function zprint$comment$comment_vec_column(style_vec,p__33571){
var vec__33573 = p__33571;
var indent_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(0),null);
var inline_comment_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(1),null);
var comment_vec = vec__33573;
var start_column = zprint.comment.comment_column(comment_vec,style_vec);
var spaces_before = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(style_vec),(1)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(style_vec),(3)):zprint.comment.loc_vec((0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,(inline_comment_index - (1)))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_comment_index,start_column,spaces_before], null);
});
/**
 * Take a single vector of inline comments
 *   [[indent-index inline-comment-index] [indent-index inline-comment-index]
 * ...] and replace it with [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...]
 */
zprint.comment.comment_vec_seq_column = (function zprint$comment$comment_vec_seq_column(style_vec,comment_vec_seq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.comment_vec_column,style_vec),comment_vec_seq);
});
/**
 * Take a seq of all of the comments as produced by 
 *   find-consecutive-inline-comments, and turn it into:
 *   [[[inline-comment-index start-column spaces-before] [inline-comment-index
 *   start-column spaces-before]
 *   ...] ...]
 */
zprint.comment.comment_vec_all_column = (function zprint$comment$comment_vec_all_column(style_vec,comment_vec_all){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.comment_vec_seq_column,style_vec),comment_vec_all);
});
/**
 * Given a set of inline comments:
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], determine
 * the minimum column at which they could be aligned.
 */
zprint.comment.minimum_column = (function zprint$comment$minimum_column(comment_vec){
var minimum_vec = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33610_SHARP_){
return ((cljs.core.second(p1__33610_SHARP_) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__33610_SHARP_,(2))) + (1));
}),comment_vec);
var minimum_col = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,minimum_vec);
return minimum_col;
});
/**
 * Given a new start-column, and a vector 
 *   [[inline-comment-index start-column spaces-before]
 *   and a style-vec, return a new style-vec with the inline-comment starting
 *   at a new column.
 */
zprint.comment.change_start_column = (function zprint$comment$change_start_column(new_start_column,style_vec,p__33624){
var vec__33635 = p__33624;
var inline_comment_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635,(1),null);
var spaces_before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635,(2),null);
var comment_vec = vec__33635;
if((inline_comment_index === (0))){
return style_vec;
} else {
var delta_spaces = (new_start_column - start_column);
var new_spaces = (spaces_before + delta_spaces);
var previous_element_index = (inline_comment_index - (1));
var vec__33645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(style_vec,previous_element_index);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33645,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33645,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33645,(2),null);
var previous_element = vec__33645;
var new_previous_element = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"indent","indent",-148200125)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(new_spaces))].join(''),c,e], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(new_spaces)),c,e,(26)], null):(function(){throw (new Error(["change-start-column: comment preceded by neither"," an :indent nor :whitespace!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')))})()
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(style_vec,previous_element_index,new_previous_element);
}
});
/**
 * Given one set of inline comments: 
 *   [[inline-comment-index start-column spaces-before]
 * [inline-comment-index start-column spaces-before] ...], align them 
 * as best as possible, and return the modified style-vec.
 */
zprint.comment.align_comment_vec = (function zprint$comment$align_comment_vec(style_vec,comment_vec){
var minimum_col = zprint.comment.minimum_column(comment_vec);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.comment.change_start_column,minimum_col),style_vec,comment_vec);
});
/**
 * Given the current style-vec, align all inline comments.
 */
zprint.comment.fzprint_align_inline_comments = (function zprint$comment$fzprint_align_inline_comments(options,style_vec){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-inline","align-inline",1018096739),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-align-inline-comments: style-vec:",(function (){var G__33697 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false,new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null)], null);
var G__33698 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[a,b],null));
}),style_vec);
var fexpr__33696 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__33696.cljs$core$IFn$_invoke$arity$2 ? fexpr__33696.cljs$core$IFn$_invoke$arity$2(G__33697,G__33698) : fexpr__33696.call(null,G__33697,G__33698));
})()], 0));
} else {
}

var style = new cljs.core.Keyword(null,"inline-align-style","inline-align-style",1548722575).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"none","none",1333468478))){
return style_vec;
} else {
var comment_vec = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"aligned","aligned",-1015148916)))?zprint.comment.find_aligned_inline_comments(style_vec):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"consecutive","consecutive",-1628234596)))?zprint.comment.find_consecutive_inline_comments(options,style_vec):null));
var _ = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-inline","align-inline",1018096739),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-align-inline-comments: comment-vec:",comment_vec], 0)):null);
var comment_vec_column = zprint.comment.comment_vec_all_column(style_vec,comment_vec);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.comment.align_comment_vec,style_vec,comment_vec_column);
}
});

//# sourceMappingURL=zprint.comment.js.map
