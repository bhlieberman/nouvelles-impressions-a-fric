goog.provide('portfolio.ui.components.tab_bar');
/**
 * 
 */
portfolio.ui.components.tab_bar.TabBar = (function (){var G__31702 = (function (p__31708){
var map__31710 = p__31708;
var map__31710__$1 = cljs.core.__destructure_map(map__31710);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31710__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function portfolio$ui$components$tab_bar$iter__31713(s__31714){
return (new cljs.core.LazySeq(null,(function (){
var s__31714__$1 = s__31714;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31714__$1);
if(temp__5804__auto__){
var s__31714__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31714__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31714__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31716 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31715 = (0);
while(true){
if((i__31715 < size__5522__auto__)){
var map__31724 = cljs.core._nth(c__5521__auto__,i__31715);
var map__31724__$1 = cljs.core.__destructure_map(map__31724);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31724__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31724__$1,new cljs.core.Keyword(null,"url","url",276297046));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31724__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
cljs.core.chunk_append(b__31716,(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid var(--highlight-color)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--highlight-color)"], null)], null),title], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null)));

var G__31759 = (i__31715 + (1));
i__31715 = G__31759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31716),portfolio$ui$components$tab_bar$iter__31713(cljs.core.chunk_rest(s__31714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31716),null);
}
} else {
var map__31742 = cljs.core.first(s__31714__$2);
var map__31742__$1 = cljs.core.__destructure_map(map__31742);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31742__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31742__$1,new cljs.core.Keyword(null,"url","url",276297046));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31742__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
return cljs.core.cons((cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid var(--highlight-color)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--highlight-color)"], null)], null),title], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null)),portfolio$ui$components$tab_bar$iter__31713(cljs.core.rest(s__31714__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(tabs);
})()], null)], null);
});
var G__31703 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.tab-bar/TabBar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__31702,G__31703) : dumdom.core.component.call(null,G__31702,G__31703));
})();

//# sourceMappingURL=portfolio.ui.components.tab_bar.js.map
