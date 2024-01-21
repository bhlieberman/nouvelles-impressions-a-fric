goog.provide('portfolio.ui.components.markdown');
portfolio.ui.components.markdown.langs = new cljs.core.PersistentArrayMap(null, 2, ["clj","clojure","cljs","clojure"], null);
portfolio.ui.components.markdown.autolink = (function portfolio$ui$components$markdown$autolink(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__5523__auto__ = (function portfolio$ui$components$markdown$autolink_$_iter__31704(s__31705){
return (new cljs.core.LazySeq(null,(function (){
var s__31705__$1 = s__31705;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31705__$1);
if(temp__5804__auto__){
var s__31705__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31705__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31705__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31707 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31706 = (0);
while(true){
if((i__31706 < size__5522__auto__)){
var w = cljs.core._nth(c__5521__auto__,i__31706);
cljs.core.chunk_append(b__31707,(cljs.core.truth_(cljs.core.re_find(/^https?:\/\/[^\s]+$/,w))?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"](",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),")"].join(''):w));

var G__31859 = (i__31706 + (1));
i__31706 = G__31859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31707),portfolio$ui$components$markdown$autolink_$_iter__31704(cljs.core.chunk_rest(s__31705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31707),null);
}
} else {
var w = cljs.core.first(s__31705__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.re_find(/^https?:\/\/[^\s]+$/,w))?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"](",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),")"].join(''):w),portfolio$ui$components$markdown$autolink_$_iter__31704(cljs.core.rest(s__31705__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ /));
})());
});
portfolio.ui.components.markdown.space_lists = (function portfolio$ui$components$markdown$space_lists(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31766_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__31766_SHARP_);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__31765_SHARP_){
return cljs.core.boolean$(cljs.core.re_find(/^(-|\d+\.) /,p1__31765_SHARP_));
}),clojure.string.split_lines(s))));
});
/**
 * Removes line breaks in brackets, which causes markdown-clj to not recognize
 *   them as links.
 */
portfolio.ui.components.markdown.unbreak_links = (function portfolio$ui$components$markdown$unbreak_links(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function portfolio$ui$components$markdown$unbreak_links_$_iter__31769(s__31770){
return (new cljs.core.LazySeq(null,(function (){
var s__31770__$1 = s__31770;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31770__$1);
if(temp__5804__auto__){
var s__31770__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31770__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31770__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31772 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31771 = (0);
while(true){
if((i__31771 < size__5522__auto__)){
var vec__31775 = cljs.core._nth(c__5521__auto__,i__31771);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31775,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31775,(1),null);
cljs.core.chunk_append(b__31772,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),(function (){var G__31781 = link;
if((G__31781 == null)){
return null;
} else {
return clojure.string.replace(G__31781,/\n/," ");
}
})()].join(''));

var G__31864 = (i__31771 + (1));
i__31771 = G__31864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31772),portfolio$ui$components$markdown$unbreak_links_$_iter__31769(cljs.core.chunk_rest(s__31770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31772),null);
}
} else {
var vec__31784 = cljs.core.first(s__31770__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31784,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31784,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),(function (){var G__31788 = link;
if((G__31788 == null)){
return null;
} else {
return clojure.string.replace(G__31788,/\n/," ");
}
})()].join(''),portfolio$ui$components$markdown$unbreak_links_$_iter__31769(cljs.core.rest(s__31770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(\[[^\]]+\]\([^\)]+\))/)));
})());
});
portfolio.ui.components.markdown.render_markdown = (function portfolio$ui$components$markdown$render_markdown(s){
return markdown.core.md__GT_html(portfolio.ui.components.markdown.unbreak_links(portfolio.ui.components.markdown.autolink(portfolio.ui.components.markdown.space_lists(s))));
});
/**
 * 
 */
portfolio.ui.components.markdown.Markdown = (function (){var G__31812 = (function (p__31814){
var map__31815 = p__31814;
var map__31815__$1 = cljs.core.__destructure_map(map__31815);
var markdown__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31815__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.md","div.md",1540365753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),portfolio.ui.components.markdown.render_markdown(markdown__$1)], null)], null)], null);
});
var G__31813 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.markdown/Markdown",new cljs.core.Keyword(null,"on-render","on-render",2096729391),(function (el,props){
var seq__31816 = cljs.core.seq(el.querySelectorAll("pre"));
var chunk__31817 = null;
var count__31818 = (0);
var i__31819 = (0);
while(true){
if((i__31819 < count__31818)){
var pre = chunk__31817.cljs$core$IIndexed$_nth$arity$2(null,i__31819);
var code_31869 = pre.firstElementChild;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("CODE",code_31869.tagName)){
(pre.className = ["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = (function (){var G__31845 = code_31869.className;
return (portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1(G__31845) : portfolio.ui.components.markdown.langs.call(null,G__31845));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return code_31869.className;
}
})())].join(''));

Prism.highlightElement(pre);
} else {
}


var G__31873 = seq__31816;
var G__31874 = chunk__31817;
var G__31875 = count__31818;
var G__31876 = (i__31819 + (1));
seq__31816 = G__31873;
chunk__31817 = G__31874;
count__31818 = G__31875;
i__31819 = G__31876;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31816);
if(temp__5804__auto__){
var seq__31816__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31816__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31816__$1);
var G__31880 = cljs.core.chunk_rest(seq__31816__$1);
var G__31881 = c__5568__auto__;
var G__31882 = cljs.core.count(c__5568__auto__);
var G__31883 = (0);
seq__31816 = G__31880;
chunk__31817 = G__31881;
count__31818 = G__31882;
i__31819 = G__31883;
continue;
} else {
var pre = cljs.core.first(seq__31816__$1);
var code_31888 = pre.firstElementChild;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("CODE",code_31888.tagName)){
(pre.className = ["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = (function (){var G__31848 = code_31888.className;
return (portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.langs.cljs$core$IFn$_invoke$arity$1(G__31848) : portfolio.ui.components.markdown.langs.call(null,G__31848));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return code_31888.className;
}
})())].join(''));

Prism.highlightElement(pre);
} else {
}


var G__31893 = cljs.core.next(seq__31816__$1);
var G__31894 = null;
var G__31895 = (0);
var G__31896 = (0);
seq__31816 = G__31893;
chunk__31817 = G__31894;
count__31818 = G__31895;
i__31819 = G__31896;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__31812,G__31813) : dumdom.core.component.call(null,G__31812,G__31813));
})();

//# sourceMappingURL=portfolio.ui.components.markdown.js.map
