goog.provide('portfolio.ui.canvas.background');
portfolio.ui.canvas.background.default_options = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"light-mode","light-mode",-1650913509),new cljs.core.Keyword(null,"title","title",636505583),"Light (.light-mode)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("background","background-color","background/background-color",1902638780),"#fff",new cljs.core.Keyword("background","body-class","background/body-class",181741863),"light-mode"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dark-mode","dark-mode",491620517),new cljs.core.Keyword(null,"title","title",636505583),"Dark (.dark-mode)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("background","background-color","background/background-color",1902638780),"#111111",new cljs.core.Keyword("background","body-class","background/body-class",181741863),"dark-mode"], null)], null)], null);
portfolio.ui.canvas.background.prepare_canvas = (function portfolio$ui$canvas$background$prepare_canvas(data,el,p__32700){
var map__32701 = p__32700;
var map__32701__$1 = cljs.core.__destructure_map(map__32701);
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32701__$1,new cljs.core.Keyword("background","background-color","background/background-color",1902638780));
var body_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32701__$1,new cljs.core.Keyword("background","body-class","background/body-class",181741863));
(portfolio.ui.components.canvas.get_iframe(el).style.backgroundColor = background_color);

var body = portfolio.ui.components.canvas.get_iframe_body(el);
var seq__32706 = cljs.core.seq(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(data));
var chunk__32707 = null;
var count__32708 = (0);
var i__32709 = (0);
while(true){
if((i__32709 < count__32708)){
var map__32718 = chunk__32707.cljs$core$IIndexed$_nth$arity$2(null,i__32709);
var map__32718__$1 = cljs.core.__destructure_map(map__32718);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32718__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.empty_QMARK_(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(body_class,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
body.classList.add(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.classList.remove(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
}
}


var G__32746 = seq__32706;
var G__32747 = chunk__32707;
var G__32748 = count__32708;
var G__32749 = (i__32709 + (1));
seq__32706 = G__32746;
chunk__32707 = G__32747;
count__32708 = G__32748;
i__32709 = G__32749;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32706);
if(temp__5804__auto__){
var seq__32706__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32706__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32706__$1);
var G__32751 = cljs.core.chunk_rest(seq__32706__$1);
var G__32752 = c__5568__auto__;
var G__32753 = cljs.core.count(c__5568__auto__);
var G__32754 = (0);
seq__32706 = G__32751;
chunk__32707 = G__32752;
count__32708 = G__32753;
i__32709 = G__32754;
continue;
} else {
var map__32721 = cljs.core.first(seq__32706__$1);
var map__32721__$1 = cljs.core.__destructure_map(map__32721);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32721__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.empty_QMARK_(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(body_class,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
body.classList.add(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.classList.remove(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
}
}


var G__32755 = cljs.core.next(seq__32706__$1);
var G__32756 = null;
var G__32757 = (0);
var G__32758 = (0);
seq__32706 = G__32755;
chunk__32707 = G__32756;
count__32708 = G__32757;
i__32709 = G__32758;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.ui.canvas.background.create_background_tool = (function portfolio$ui$canvas$background$create_background_tool(config){
var options = (function (){var or__5045__auto__ = new cljs.core.Keyword("background","options","background/options",1180140427).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return portfolio.ui.canvas.background.default_options;
}
})();
return portfolio.ui.canvas.addons.create_toolbar_menu_button(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","background","canvas/background",-533817437),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true,new cljs.core.Keyword(null,"title","title",636505583),"Background",new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","palette","phosphor.regular/palette",-491808122),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M128,192a24,24,0,0,1,24-24h46.21a24,24,0,0,0,23.4-18.65A96.48,96.48,0,0,0,224,127.17c-.45-52.82-44.16-95.7-97-95.17a96,96,0,0,0-95,96c0,41.81,26.73,73.44,64,86.61A24,24,0,0,0,128,192Z",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"128",new cljs.core.Keyword(null,"cy","cy",755331060),"76",new cljs.core.Keyword(null,"r","r",-471384190),"12"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"84",new cljs.core.Keyword(null,"cy","cy",755331060),"100",new cljs.core.Keyword(null,"r","r",-471384190),"12"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"84",new cljs.core.Keyword(null,"cy","cy",755331060),"156",new cljs.core.Keyword(null,"r","r",-471384190),"12"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"172",new cljs.core.Keyword(null,"cy","cy",755331060),"100",new cljs.core.Keyword(null,"r","r",-471384190),"12"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","palette","phosphor.regular/palette",-491808122);
})()
,new cljs.core.Keyword(null,"options","options",99638489),(function (){var or__5045__auto__ = new cljs.core.Keyword("background","options","background/options",1180140427).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return options;
}
})(),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first((function (){var or__5045__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword("background","default-option-id","background/default-option-id",-1599012737).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),options);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return options;
}
})())),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.ui.canvas.background.prepare_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.background","prepare-canvas","portfolio.ui.canvas.background/prepare-canvas",-1224444684,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.background","portfolio.ui.canvas.background",1900476903,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"portfolio/ui/canvas/background.cljs",21,1,16,16,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("background","keys","background/keys",-1876510524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"background-color","background-color",-2084001743,null),new cljs.core.Symbol(null,"body-class","body-class",1006967324,null)], null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.background.prepare_canvas)?portfolio.ui.canvas.background.prepare_canvas.cljs$lang$test:null)]))], null));
});

//# sourceMappingURL=portfolio.ui.canvas.background.js.map
