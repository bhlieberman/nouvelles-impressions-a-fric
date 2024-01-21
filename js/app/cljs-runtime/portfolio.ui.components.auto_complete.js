goog.provide('portfolio.ui.components.auto_complete');
portfolio.ui.components.auto_complete.render_icon = (function portfolio$ui$components$auto_complete$render_icon(p__31960){
var map__31961 = p__31960;
var map__31961__$1 = cljs.core.__destructure_map(map__31961);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31961__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31961__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31961__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31961__$1,new cljs.core.Keyword(null,"align","align",1964212802));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",(function (){var or__5045__auto__ = align;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"left","left",-399115937);
}
})(),(8),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions)?"pointer":null),new cljs.core.Keyword(null,"color","color",1011675173),"var(--folder-icon-color)"])], null),phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),size], null)], 0))], null);
});
/**
 * 
 */
portfolio.ui.components.auto_complete.Suggestions = (function (){var G__31963 = (function (p__31968){
var map__31969 = p__31968;
var map__31969__$1 = cljs.core.__destructure_map(map__31969);
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31969__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.suggestions","nav.suggestions",-1470072828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px 0"], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$auto_complete$iter__31972(s__31973){
return (new cljs.core.LazySeq(null,(function (){
var s__31973__$1 = s__31973;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31973__$1);
if(temp__5804__auto__){
var s__31973__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31973__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31973__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31975 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31974 = (0);
while(true){
if((i__31974 < size__5522__auto__)){
var map__31979 = cljs.core._nth(c__5521__auto__,i__31974);
var map__31979__$1 = cljs.core.__destructure_map(map__31979);
var illustration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
cljs.core.chunk_append(b__31975,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hoverable","li.hoverable",63355135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 18px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration)], null)], 0)):null),title], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--secondary-text)",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 0 0 26px"], null)], null),description], null):null)], null));

var G__32007 = (i__31974 + (1));
i__31974 = G__32007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31975),portfolio$ui$components$auto_complete$iter__31972(cljs.core.chunk_rest(s__31973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31975),null);
}
} else {
var map__31983 = cljs.core.first(s__31973__$2);
var map__31983__$1 = cljs.core.__destructure_map(map__31983);
var illustration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31983__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31983__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31983__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31983__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hoverable","li.hoverable",63355135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 18px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration)], null)], 0)):null),title], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--secondary-text)",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 0 0 26px"], null)], null),description], null):null)], null),portfolio$ui$components$auto_complete$iter__31972(cljs.core.rest(s__31973__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(suggestions);
})()], null)], null);
});
var G__31964 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.auto-complete/Suggestions",new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),portfolio.ui.components.elastic_container.enter(),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),portfolio.ui.components.elastic_container.leave()], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__31963,G__31964) : dumdom.core.component.call(null,G__31963,G__31964));
})();
/**
 * 
 */
portfolio.ui.components.auto_complete.AutoCompleter = (function (){var G__31988 = (function (p__31991){
var map__31992 = p__31991;
var map__31992__$1 = cljs.core.__destructure_map(map__31992);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auto-completer","div.auto-completer",-506576802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),(8),new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.15s ease-in",new cljs.core.Keyword(null,"--hover-bg","--hover-bg",-338506224),"var(--shark)",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core.seq(suggestions))?"var(--auto-complete-active-bg)":"var(--folder-bg)")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(cljs.core.truth_(icon)?portfolio.ui.components.auto_complete.render_icon(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--input-inactive-bg)",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(12),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(12),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(cljs.core.truth_(icon)?(40):(12)),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(cljs.core.truth_(action)?(40):(12)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-input","on-input",-267523366),on_input,new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null)], null),(cljs.core.truth_(action)?portfolio.ui.components.auto_complete.render_icon(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833)], null)):null)], null),((cljs.core.seq(suggestions))?(function (){var G__32002 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions], null);
return (portfolio.ui.components.auto_complete.Suggestions.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.auto_complete.Suggestions.cljs$core$IFn$_invoke$arity$1(G__32002) : portfolio.ui.components.auto_complete.Suggestions.call(null,G__32002));
})():null)], null);
});
var G__31989 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.auto-complete/AutoCompleter"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__31988,G__31989) : dumdom.core.component.call(null,G__31988,G__31989));
})();

//# sourceMappingURL=portfolio.ui.components.auto_complete.js.map
