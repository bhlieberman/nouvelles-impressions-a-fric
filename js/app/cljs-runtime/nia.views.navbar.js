import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$$mui$material$node$styles$index.js";
import "./nia.views.text_search.js";
import "./reagent_mui.material.drawer.js";
import "./reagent_mui.material.button.js";
import "./reagent_mui.material.box.js";
import "./reagent_mui.material.link.js";
import "./reagent_mui.icons.search.js";
import "./reagent_mui.material.input_base.js";
import "./reagent_mui.material.switch.js";
import "./reagent_mui.material.form_control_label.js";
import "./reagent_mui.material.list.js";
import "./reagent_mui.material.list_item.js";
import "./reagent_mui.material.list_item_button.js";
import "./reagent_mui.material.list_item_icon.js";
import "./reagent_mui.styles.js";
import "./reagent.core.js";
import "./re_com.core.js";
import "./re_frame.core.js";
import "./shadow.cljs.modern.js";
goog.provide('nia.views.navbar');
var module$node_modules$$mui$material$node$styles$index=shadow.js.require("module$node_modules$$mui$material$node$styles$index", {});
nia.views.navbar.toggle_drawer = (function nia$views$navbar$toggle_drawer(open_QMARK_){
return (function (event){
var e = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.type,"keydown")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Tab")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Shift")))));
if(e){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
}
});
});
nia.views.navbar.search_comp = reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2("div",(function (p__29757){
var map__29758 = p__29757;
var map__29758__$1 = cljs.core.__destructure_map(map__29758);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29758__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"border-radius","border-radius",419594011).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(theme)),new cljs.core.Keyword(null,"background-color","background-color",570434026),module$node_modules$$mui$material$node$styles$index.alpha(new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"common","common",-1822281391).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palette","palette",-456203511).cljs$core$IFn$_invoke$arity$1(theme))),0.15),"&:hover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),module$node_modules$$mui$material$node$styles$index.alpha(new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"common","common",-1822281391).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palette","palette",-456203511).cljs$core$IFn$_invoke$arity$1(theme))),0.25)], null),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
}));
nia.views.navbar.search_icon_wrapper = reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2("div",(function (p__29759){
var map__29760 = p__29759;
var map__29760__$1 = cljs.core.__destructure_map(map__29760);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29760__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),(function (){var fexpr__29761 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__29761.cljs$core$IFn$_invoke$arity$2 ? fexpr__29761.cljs$core$IFn$_invoke$arity$2((0),(2)) : fexpr__29761.call(null,(0),(2)));
})(),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null);
}));
nia.views.navbar.styled_input_base = reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2(reagent_mui.material.input_base.input_base,(function (p__29762){
var map__29763 = p__29762;
var map__29763__$1 = cljs.core.__destructure_map(map__29763);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29763__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"width","width",-384071477),"100%","& .MuiInputBase-input",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(function (){var fexpr__29764 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__29764.cljs$core$IFn$_invoke$arity$4 ? fexpr__29764.cljs$core$IFn$_invoke$arity$4((1),(1),(1),(0)) : fexpr__29764.call(null,(1),(1),(1),(0)));
})(),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),`calc(1em + ${(function (){var fexpr__29765 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__29765.cljs$core$IFn$_invoke$arity$1 ? fexpr__29765.cljs$core$IFn$_invoke$arity$1((4)) : fexpr__29765.call(null,(4)));
})()})`,new cljs.core.Keyword(null,"transition","transition",765692007),(function (){var fexpr__29766 = new cljs.core.Keyword(null,"create","create",-1301499256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transitions","transitions",-2046216121).cljs$core$IFn$_invoke$arity$1(theme));
return (fexpr__29766.cljs$core$IFn$_invoke$arity$1 ? fexpr__29766.cljs$core$IFn$_invoke$arity$1("width") : fexpr__29766.call(null,"width"));
})()], null)], null);
}));
nia.views.navbar.styled_switch = reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2(reagent_mui.material.form_control_label.form_control_label,(function (p__29767){
var map__29768 = p__29767;
var map__29768__$1 = cljs.core.__destructure_map(map__29768);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null);
}));
nia.views.navbar.search_component = (function nia$views$navbar$search_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.navbar.search_comp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.navbar.search_icon_wrapper,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.search.search], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.navbar.styled_input_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null);
});
nia.views.navbar.list_component = (function nia$views$navbar$list_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.box.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"role","role",-736691072),"presentation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.list.list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.navbar.search_component], null),(function (){var iter__5523__auto__ = (function nia$views$navbar$list_component_$_iter__29769(s__29770){
return (new cljs.core.LazySeq(null,(function (){
var s__29770__$1 = s__29770;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29770__$1);
if(temp__5804__auto__){
var s__29770__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29770__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29770__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29772 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29771 = (0);
while(true){
if((i__29771 < size__5522__auto__)){
var route_name = cljs.core._nth(c__5521__auto__,i__29771);
var click_handler = (function (){var G__29773 = route_name;
switch (G__29773) {
case "Preface":
return ((function (i__29771,G__29773,route_name,c__5521__auto__,size__5522__auto__,b__29772,s__29770__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing","home","nia.routing/home",-2077356835)], null));
});
;})(i__29771,G__29773,route_name,c__5521__auto__,size__5522__auto__,b__29772,s__29770__$2,temp__5804__auto__))

break;
case "Canto I":
return ((function (i__29771,G__29773,route_name,c__5521__auto__,size__5522__auto__,b__29772,s__29770__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing.canto","one","nia.routing.canto/one",-531958821),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"thesis","thesis",-438481408)], null)], null));
});
;})(i__29771,G__29773,route_name,c__5521__auto__,size__5522__auto__,b__29772,s__29770__$2,temp__5804__auto__))

break;
case "Canto II":
return ((function (i__29771,G__29773,route_name,c__5521__auto__,size__5522__auto__,b__29772,s__29770__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing.canto","two","nia.routing.canto/two",129588882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"thesis","thesis",-438481408)], null)], null));
});
;})(i__29771,G__29773,route_name,c__5521__auto__,size__5522__auto__,b__29772,s__29770__$2,temp__5804__auto__))

break;
case "Canto IV":
return ((function (i__29771,G__29773,route_name,c__5521__auto__,size__5522__auto__,b__29772,s__29770__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing.canto","four","nia.routing.canto/four",161013097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"thesis","thesis",-438481408)], null)], null));
});
;})(i__29771,G__29773,route_name,c__5521__auto__,size__5522__auto__,b__29772,s__29770__$2,temp__5804__auto__))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29773)].join('')));

}
})();
cljs.core.chunk_append(b__29772,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.list_item.list_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),route_name,new cljs.core.Keyword(null,"disabled-padding","disabled-padding",542223375),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.list_item_button.list_item_button,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.list_item_icon.list_item_icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.link.link,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null),route_name], null)], null)], null));

var G__29781 = (i__29771 + (1));
i__29771 = G__29781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29772),nia$views$navbar$list_component_$_iter__29769(cljs.core.chunk_rest(s__29770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29772),null);
}
} else {
var route_name = cljs.core.first(s__29770__$2);
var click_handler = (function (){var G__29774 = route_name;
switch (G__29774) {
case "Preface":
return ((function (G__29774,route_name,s__29770__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing","home","nia.routing/home",-2077356835)], null));
});
;})(G__29774,route_name,s__29770__$2,temp__5804__auto__))

break;
case "Canto I":
return ((function (G__29774,route_name,s__29770__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing.canto","one","nia.routing.canto/one",-531958821),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"thesis","thesis",-438481408)], null)], null));
});
;})(G__29774,route_name,s__29770__$2,temp__5804__auto__))

break;
case "Canto II":
return ((function (G__29774,route_name,s__29770__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing.canto","two","nia.routing.canto/two",129588882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"thesis","thesis",-438481408)], null)], null));
});
;})(G__29774,route_name,s__29770__$2,temp__5804__auto__))

break;
case "Canto IV":
return ((function (G__29774,route_name,s__29770__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing.canto","four","nia.routing.canto/four",161013097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"thesis","thesis",-438481408)], null)], null));
});
;})(G__29774,route_name,s__29770__$2,temp__5804__auto__))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29774)].join('')));

}
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.list_item.list_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),route_name,new cljs.core.Keyword(null,"disabled-padding","disabled-padding",542223375),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.list_item_button.list_item_button,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.list_item_icon.list_item_icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.link.link,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null),route_name], null)], null)], null),nia$views$navbar$list_component_$_iter__29769(cljs.core.rest(s__29770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Preface","Canto I","Canto II","Canto IV"], null));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.navbar.styled_switch,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.switch$.switch$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log("collapsed");
})], null)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Collapse",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null);
});
nia.views.navbar.navbar = (function nia$views$navbar$navbar(p__29775){
var map__29776 = p__29775;
var map__29776__$1 = cljs.core.__destructure_map(map__29776);
var _children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29776__$1,new cljs.core.Keyword(null,"_children","_children",1993687667));
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__29777){
var map__29778 = p__29777;
var map__29778__$1 = cljs.core.__destructure_map(map__29778);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.d-flex","nav.d-flex",1821738374),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-expand-lg navbar-light bg-light"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.align-items-center","div.d-flex.align-items-center",-1526073083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand m-3 display-4",new cljs.core.Keyword(null,"label","label",1718410804),"NIA",new cljs.core.Keyword(null,"on-click","on-click",1632826543),nia.views.navbar.toggle_drawer(open_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggler",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-toggle","data-bs-toggle",-1489706489),"collapse",new cljs.core.Keyword(null,"data-bs-target","data-bs-target",-1732916680),"#navbarNavAltMarkup",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"navbarNavAltMarkup",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Toggle navigation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggler-icon"], null)], null)], null)], null)], null),children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.drawer.drawer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),"left",new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(open_QMARK_),new cljs.core.Keyword(null,"on-close","on-close",-761178394),nia.views.navbar.toggle_drawer(open_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.navbar.list_component], null)], null)], null);
});
});

//# sourceMappingURL=nia.views.navbar.js.map
