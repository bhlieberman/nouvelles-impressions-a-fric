goog.provide('markdown.links');
markdown.links.href = (function markdown$links$href(text,link,state){
var vec__29850 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),link);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29850,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29850,(1),null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq("<a href='"),link__$1,cljs.core.seq("'"),(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str," title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title)),">")):cljs.core.seq(">")),text,cljs.core.seq("</a>"),state], 0));
});
markdown.links.img = (function markdown$links$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30416 = arguments.length;
var i__5770__auto___30417 = (0);
while(true){
if((i__5770__auto___30417 < len__5769__auto___30416)){
args__5775__auto__.push((arguments[i__5770__auto___30417]));

var G__30418 = (i__5770__auto___30417 + (1));
i__5770__auto___30417 = G__30418;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__29869){
var vec__29870 = p__29869;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29870,(0),null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq("<img src=\""),url,cljs.core.seq("\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)," />")):cljs.core.seq("\" />")),state], 0));
}));

(markdown.links.img.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(markdown.links.img.cljs$lang$applyTo = (function (seq29865){
var G__29866 = cljs.core.first(seq29865);
var seq29865__$1 = cljs.core.next(seq29865);
var G__29867 = cljs.core.first(seq29865__$1);
var seq29865__$2 = cljs.core.next(seq29865__$1);
var G__29868 = cljs.core.first(seq29865__$2);
var seq29865__$3 = cljs.core.next(seq29865__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29866,G__29867,G__29868,seq29865__$3);
}));

markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),xs))){
var xs__$1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),xs);
var vec__29874 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29874,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29874,(1),null);
var vec__29877 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),xy));
var url_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29877,(0),null);
var zy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29877,(1),null);
var vec__29880 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29880,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29880,(1),null);
var vec__29883 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.not_empty(title)], 0));
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29883,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29883,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(zy)], 0)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29893_SHARP_,p2__29892_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p2__29892_SHARP_,p1__29893_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__29958){
var map__29962 = p__29958;
var map__29962__$1 = cljs.core.__destructure_map(map__29962);
var state = map__29962__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29962__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29962__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__5045__auto__ = code;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq(text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(out),loop_state], null);
} else {
var vec__30010 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30010,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30010,(1),null);
var vec__30013 = markdown.links.handle_img_link(xs,loop_state);
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30013,(0),null);
var loop_state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30013,(1),null);
var vec__30016 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30016,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30016,(1),null);
var vec__30019 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30019,(0),null);
var zs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30019,(1),null);
var vec__30022 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30022,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30022,(1),null);
if((((cljs.core.count(tail) < (1))) || ((((cljs.core.count(link__$1) < (2))) || ((cljs.core.count(dud) > (1))))))){
var G__30453 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0));
var G__30454 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(dud,link__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tail], 0));
var G__30455 = loop_state__$1;
out = G__30453;
tokens = G__30454;
loop_state = G__30455;
continue;
} else {
if(((cljs.core.not(img_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!")))){
var vec__30043 = markdown.links.href(cljs.core.rest(markdown.links.process_link_title(title,state)),cljs.core.rest(link__$1),loop_state__$1);
var link_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30043,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30043,(1),null);
var G__30461 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link_text], 0));
var G__30462 = cljs.core.rest(tail);
var G__30463 = new_loop_state;
out = G__30461;
tokens = G__30462;
loop_state = G__30463;
continue;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = img_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!");
} else {
return and__5043__auto__;
}
})())){
var alt = cljs.core.rest(title);
var vec__30052 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.rest(link__$1));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30052,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30052,(1),null);
var title__$2 = markdown.links.process_link_title(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title__$1)),loop_state__$1);
var vec__30055 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,loop_state__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title__$2], 0));
var img_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30055,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30055,(1),null);
var G__30468 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.butlast(head),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([img_text], 0));
var G__30469 = cljs.core.rest(tail);
var G__30470 = new_loop_state;
out = G__30468;
tokens = G__30469;
loop_state = G__30470;
continue;
} else {
var G__30471 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title,dud,link__$1], 0));
var G__30472 = tail;
var G__30473 = loop_state__$1;
out = G__30471;
tokens = G__30472;
loop_state = G__30473;
continue;

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link(false);
markdown.links.image = markdown.links.make_link(true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find(/^\[[a-zA-Z0-9 \-_\.:\/\\]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim(line);
var temp__5804__auto__ = markdown.links.reference(trimmed);
if(cljs.core.truth_(temp__5804__auto__)){
var link = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(references,cljs.core.assoc,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1))),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__30075 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(reference,/\]\s*/,(2));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30075,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30075,(1),null);
var vec__30078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,id);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30078,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30078,(1),null);
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"'",(cljs.core.truth_(alt)?[" title='",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(alt,(1),(cljs.core.count(alt) - (1))),"'"].join(''):null),">",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(title,(1)),"</a>"].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__30096,link){
var vec__30097 = p__30096;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30097,(0),null);
var encoded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30097,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encoded,markdown.common.gen_token(i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30107){
var vec__30108 = p__30107;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link(references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq(/\[[^\]]+\]\s*\[[a-zA-Z0-9 \-_\.:\/\\]+\]/,text);
var encoded_links = markdown.links.encode_links(links,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.PersistentVector.EMPTY)(new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__30118){
var vec__30119 = p__30118;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(1),null);
return clojure.string.replace(s,link,id);
}),text,encoded_links),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),cljs.core.merge,markdown.links.parse_links(references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__30125){
var map__30126 = p__30125;
var map__30126__$1 = cljs.core.__destructure_map(map__30126);
var state = map__30126__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30126__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30126__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30126__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((function (){var or__5045__auto__ = (references == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = code;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links(references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace(text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find(/^\[\^[a-zA-Z:0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim(line);
var temp__5804__auto__ = markdown.links.footnote(trimmed);
if(cljs.core.truth_(temp__5804__auto__)){
var link = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1)))], null),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636).cljs$core$IFn$_invoke$arity$1(footnotes);
var link = ["#fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id)].join('');
return ["<a href='",link,"' id='fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"'><sup>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"</sup></a>"].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__30193){
while(true){
var map__30196 = p__30193;
var map__30196__$1 = cljs.core.__destructure_map(map__30196);
var state = map__30196__$1;
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30196__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var matcher = /\[\^[a-zA-Z:0-9_-]+\]/;
var match = cljs.core.re_find(matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first(text,matcher,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),match], null)));
var G__30509 = next_text;
var G__30510 = next_state;
text = G__30509;
p__30193 = G__30510;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__30226){
var map__30229 = p__30226;
var map__30229__$1 = cljs.core.__destructure_map(map__30229);
var state = map__30229__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30229__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30229__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30229__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.truth_((function (){var or__5045__auto__ = (new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972).cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = code;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__30341 = markdown.links.replace_all_footnote_links(text,state);
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = (cljs.core.truth_(title)?["\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title),""].join(''):"\"");
return ["<img src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"\" alt=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alt),title_text," />"].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__30354){
var map__30355 = p__30354;
var map__30355__$1 = cljs.core.__destructure_map(map__30355);
var state = map__30355__$1;
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30355__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(((cljs.core.not(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_(references)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.re_seq(matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq(ms)){
var vec__30363 = cljs.core.first(ms);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30363,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30363,(1),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30363,(2),null);
var refval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,ref);
var im = markdown.links.make_image_reference(cljs.core.first(refval),alt,cljs.core.second(refval));
var G__30518 = cljs.core.rest(ms);
var G__30519 = clojure.string.replace(new_text,m,im);
ms = G__30518;
new_text = G__30519;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});

//# sourceMappingURL=markdown.links.js.map
