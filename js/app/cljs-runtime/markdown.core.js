goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__30668){
var map__30669 = p__30668;
var map__30669__$1 = cljs.core.__destructure_map(map__30669);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30669__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30669__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30669__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__30670 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__30671 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__30671);

try{var vec__30673 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__30676,transformer){
var vec__30677 = p__30676;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30677,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30677,(1),null);
var G__30680 = text;
var G__30681 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__30680,G__30681) : transformer.call(null,G__30680,G__30681));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30673,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30673,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__30670);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30738 = arguments.length;
var i__5770__auto___30739 = (0);
while(true){
if((i__5770__auto___30739 < len__5769__auto___30738)){
args__5775__auto__.push((arguments[i__5770__auto___30739]));

var G__30740 = (i__5770__auto___30739 + (1));
i__5770__auto___30739 = G__30740;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq30682){
var G__30683 = cljs.core.first(seq30682);
var seq30682__$1 = cljs.core.next(seq30682);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30683,seq30682__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__30686_30742 = cljs.core.seq(lines);
var chunk__30687_30743 = null;
var count__30688_30744 = (0);
var i__30689_30745 = (0);
while(true){
if((i__30689_30745 < count__30688_30744)){
var line_30746 = chunk__30687_30743.cljs$core$IIndexed$_nth$arity$2(null,i__30689_30745);
markdown.links.parse_reference_link(line_30746,references);


var G__30747 = seq__30686_30742;
var G__30748 = chunk__30687_30743;
var G__30749 = count__30688_30744;
var G__30750 = (i__30689_30745 + (1));
seq__30686_30742 = G__30747;
chunk__30687_30743 = G__30748;
count__30688_30744 = G__30749;
i__30689_30745 = G__30750;
continue;
} else {
var temp__5804__auto___30751 = cljs.core.seq(seq__30686_30742);
if(temp__5804__auto___30751){
var seq__30686_30752__$1 = temp__5804__auto___30751;
if(cljs.core.chunked_seq_QMARK_(seq__30686_30752__$1)){
var c__5568__auto___30753 = cljs.core.chunk_first(seq__30686_30752__$1);
var G__30754 = cljs.core.chunk_rest(seq__30686_30752__$1);
var G__30755 = c__5568__auto___30753;
var G__30756 = cljs.core.count(c__5568__auto___30753);
var G__30757 = (0);
seq__30686_30742 = G__30754;
chunk__30687_30743 = G__30755;
count__30688_30744 = G__30756;
i__30689_30745 = G__30757;
continue;
} else {
var line_30758 = cljs.core.first(seq__30686_30752__$1);
markdown.links.parse_reference_link(line_30758,references);


var G__30759 = cljs.core.next(seq__30686_30752__$1);
var G__30760 = null;
var G__30761 = (0);
var G__30762 = (0);
seq__30686_30742 = G__30759;
chunk__30687_30743 = G__30760;
count__30688_30744 = G__30761;
i__30689_30745 = G__30762;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__30694_30763 = cljs.core.seq(lines);
var chunk__30695_30764 = null;
var count__30696_30765 = (0);
var i__30697_30766 = (0);
while(true){
if((i__30697_30766 < count__30696_30765)){
var line_30767 = chunk__30695_30764.cljs$core$IIndexed$_nth$arity$2(null,i__30697_30766);
markdown.links.parse_footnote_link(line_30767,footnotes);


var G__30768 = seq__30694_30763;
var G__30769 = chunk__30695_30764;
var G__30770 = count__30696_30765;
var G__30771 = (i__30697_30766 + (1));
seq__30694_30763 = G__30768;
chunk__30695_30764 = G__30769;
count__30696_30765 = G__30770;
i__30697_30766 = G__30771;
continue;
} else {
var temp__5804__auto___30772 = cljs.core.seq(seq__30694_30763);
if(temp__5804__auto___30772){
var seq__30694_30773__$1 = temp__5804__auto___30772;
if(cljs.core.chunked_seq_QMARK_(seq__30694_30773__$1)){
var c__5568__auto___30774 = cljs.core.chunk_first(seq__30694_30773__$1);
var G__30775 = cljs.core.chunk_rest(seq__30694_30773__$1);
var G__30776 = c__5568__auto___30774;
var G__30777 = cljs.core.count(c__5568__auto___30774);
var G__30778 = (0);
seq__30694_30763 = G__30775;
chunk__30695_30764 = G__30776;
count__30696_30765 = G__30777;
i__30697_30766 = G__30778;
continue;
} else {
var line_30779 = cljs.core.first(seq__30694_30773__$1);
markdown.links.parse_footnote_link(line_30779,footnotes);


var G__30780 = cljs.core.next(seq__30694_30773__$1);
var G__30781 = null;
var G__30782 = (0);
var G__30783 = (0);
seq__30694_30763 = G__30780;
chunk__30695_30764 = G__30781;
count__30696_30765 = G__30782;
i__30697_30766 = G__30783;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__30700 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30700,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30700,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__30703 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__30704 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__30705 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__30706 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__30705);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__30706);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__30708 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30708,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30708,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__30714_30785 = lines__$1;
var vec__30715_30786 = G__30714_30785;
var seq__30716_30787 = cljs.core.seq(vec__30715_30786);
var first__30717_30788 = cljs.core.first(seq__30716_30787);
var seq__30716_30789__$1 = cljs.core.next(seq__30716_30787);
var line_30790 = first__30717_30788;
var more_30791 = seq__30716_30789__$1;
var state_30792 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__30714_30793__$1 = G__30714_30785;
var state_30794__$1 = state_30792;
while(true){
var vec__30722_30796 = G__30714_30793__$1;
var seq__30723_30797 = cljs.core.seq(vec__30722_30796);
var first__30724_30798 = cljs.core.first(seq__30723_30797);
var seq__30723_30799__$1 = cljs.core.next(seq__30723_30797);
var line_30800__$1 = first__30724_30798;
var more_30801__$1 = seq__30723_30799__$1;
var state_30802__$2 = state_30794__$1;
var line_30803__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_30802__$2))?"":line_30800__$1);
var state_30804__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_30802__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_30802__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_30802__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_30802__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_30802__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_30801__$1))){
var G__30805 = more_30801__$1;
var G__30806 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_30803__$2,cljs.core.first(more_30801__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_30804__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_30803__$2.trim()));
G__30714_30793__$1 = G__30805;
state_30794__$1 = G__30806;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_30804__$3))),line_30803__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_30804__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__30704);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__30703);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30807 = arguments.length;
var i__5770__auto___30808 = (0);
while(true){
if((i__5770__auto___30808 < len__5769__auto___30807)){
args__5775__auto__.push((arguments[i__5770__auto___30808]));

var G__30809 = (i__5770__auto___30808 + (1));
i__5770__auto___30808 = G__30809;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq30726){
var G__30727 = cljs.core.first(seq30726);
var seq30726__$1 = cljs.core.next(seq30726);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30727,seq30726__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30811 = arguments.length;
var i__5770__auto___30812 = (0);
while(true){
if((i__5770__auto___30812 < len__5769__auto___30811)){
args__5775__auto__.push((arguments[i__5770__auto___30812]));

var G__30813 = (i__5770__auto___30812 + (1));
i__5770__auto___30812 = G__30813;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq30729){
var G__30730 = cljs.core.first(seq30729);
var seq30729__$1 = cljs.core.next(seq30729);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30730,seq30729__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30814 = arguments.length;
var i__5770__auto___30815 = (0);
while(true){
if((i__5770__auto___30815 < len__5769__auto___30814)){
args__5775__auto__.push((arguments[i__5770__auto___30815]));

var G__30816 = (i__5770__auto___30815 + (1));
i__5770__auto___30815 = G__30816;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq30733){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30733));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30817 = arguments.length;
var i__5770__auto___30818 = (0);
while(true){
if((i__5770__auto___30818 < len__5769__auto___30817)){
args__5775__auto__.push((arguments[i__5770__auto___30818]));

var G__30819 = (i__5770__auto___30818 + (1));
i__5770__auto___30818 = G__30819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq30735){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30735));
}));


//# sourceMappingURL=markdown.core.js.map
