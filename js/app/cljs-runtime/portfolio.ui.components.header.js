goog.provide('portfolio.ui.components.header');
/**
 * 
 */
portfolio.ui.components.header.Header = (function (){var G__31946 = (function (p__31948){
var map__31950 = p__31948;
var map__31950__$1 = cljs.core.__destructure_map(map__31950);
var menu_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31950__$1,new cljs.core.Keyword(null,"menu-bar","menu-bar",-1688157683));
var buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31950__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31950__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["center","height 0.25s ease","hidden","0",(20),(20),"flex",(0),"1px solid var(--header-border)"]),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(56)], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(0)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$header$iter__31952(s__31953){
return (new cljs.core.LazySeq(null,(function (){
var s__31953__$1 = s__31953;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31953__$1);
if(temp__5804__auto__){
var s__31953__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31953__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31953__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31955 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31954 = (0);
while(true){
if((i__31954 < size__5522__auto__)){
var map__31957 = cljs.core._nth(c__5521__auto__,i__31954);
var map__31957__$1 = cljs.core.__destructure_map(map__31957);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31957__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31957__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31957__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__31955,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)], 0))], null));

var G__31978 = (i__31954 + (1));
i__31954 = G__31978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31955),portfolio$ui$components$header$iter__31952(cljs.core.chunk_rest(s__31953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31955),null);
}
} else {
var map__31962 = cljs.core.first(s__31953__$2);
var map__31962__$1 = cljs.core.__destructure_map(map__31962);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31962__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31962__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31962__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)], 0))], null),portfolio$ui$components$header$iter__31952(cljs.core.rest(s__31953__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,buttons));
})(),(portfolio.ui.components.menu_bar.MenuBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.menu_bar.MenuBar.cljs$core$IFn$_invoke$arity$1(menu_bar) : portfolio.ui.components.menu_bar.MenuBar.call(null,menu_bar))], null),(cljs.core.truth_(menu)?(portfolio.ui.components.browser.Browser.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.browser.Browser.cljs$core$IFn$_invoke$arity$1(menu) : portfolio.ui.components.browser.Browser.call(null,menu)):null)], null);
});
var G__31947 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.header/Header"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__31946,G__31947) : dumdom.core.component.call(null,G__31946,G__31947));
})();

//# sourceMappingURL=portfolio.ui.components.header.js.map
