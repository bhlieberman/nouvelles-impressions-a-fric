goog.provide('portfolio.ui.components.document');
/**
 * 
 */
portfolio.ui.components.document.Document = (function (){var G__31871 = (function (p__31877){
var map__31879 = p__31877;
var map__31879__$1 = cljs.core.__destructure_map(map__31879);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31879__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31879__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document.dark.contrast","div.document.dark.contrast",-1889138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),title], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$document$iter__31889(s__31890){
return (new cljs.core.LazySeq(null,(function (){
var s__31890__$1 = s__31890;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31890__$1);
if(temp__5804__auto__){
var s__31890__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31890__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31890__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31892 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31891 = (0);
while(true){
if((i__31891 < size__5522__auto__)){
var section = cljs.core._nth(c__5521__auto__,i__31891);
cljs.core.chunk_append(b__31892,(function (){var G__31898 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(section);
var G__31898__$1 = (((G__31898 instanceof cljs.core.Keyword))?G__31898.fqn:null);
switch (G__31898__$1) {
case "markdown":
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(section) : portfolio.ui.components.markdown.Markdown.call(null,section));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31898__$1)].join('')));

}
})());

var G__31909 = (i__31891 + (1));
i__31891 = G__31909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31892),portfolio$ui$components$document$iter__31889(cljs.core.chunk_rest(s__31890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31892),null);
}
} else {
var section = cljs.core.first(s__31890__$2);
return cljs.core.cons((function (){var G__31901 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(section);
var G__31901__$1 = (((G__31901 instanceof cljs.core.Keyword))?G__31901.fqn:null);
switch (G__31901__$1) {
case "markdown":
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(section) : portfolio.ui.components.markdown.Markdown.call(null,section));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31901__$1)].join('')));

}
})(),portfolio$ui$components$document$iter__31889(cljs.core.rest(s__31890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(sections);
})()], null);
});
var G__31872 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.document/Document"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__31871,G__31872) : dumdom.core.component.call(null,G__31871,G__31872));
})();

//# sourceMappingURL=portfolio.ui.components.document.js.map
