import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./reagent.core.js";
import "./re_frame.core.js";
import "./re_com.core.js";
import "./nia.views.navbar.js";
import "./nia.views.parens_scroll.js";
goog.provide('nia.views.router');
nia.views.router.router = (function nia$views$router$router(){
var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","current-route","routing/current-route",283549642)], null)));
var parens_depth = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("poem","parens-depth","poem/parens-depth",-1934963187)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.navbar.navbar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(current_route)?(function (){var map__37993 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route);
var map__37993__$1 = cljs.core.__destructure_map(map__37993);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37993__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var route_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current_route);
var canto = (function (){var G__37994 = path;
var G__37994__$1 = (((G__37994 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__37994,/\//));
var G__37994__$2 = (((G__37994__$1 == null))?null:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(G__37994__$1,(3),""));
if((G__37994__$2 == null)){
return null;
} else {
return cljs.core.parse_long(G__37994__$2);
}
})();
var temp__5802__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.name(route_name)]),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["three",null,"two",null,"five",null,"one",null,"four",null], null), null));
if(cljs.core.truth_(temp__5802__auto__)){
var parens = temp__5802__auto__;
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parens_depth,parens);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.parens_scroll.parens_scroll,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null),new cljs.core.Keyword(null,"canto","canto",523212706),canto,new cljs.core.Keyword(null,"depth","depth",1768663640),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(depth)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null);
}
})():null)], null)], null)], null)], null);
});

//# sourceMappingURL=nia.views.router.js.map
