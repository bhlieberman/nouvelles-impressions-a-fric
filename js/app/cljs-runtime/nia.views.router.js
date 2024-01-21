import "./cljs_env.js";
import "./cljs.core.js";
import "./re_frame.core.js";
import "./re_com.core.js";
import "./nia.views.navbar.js";
import "./nia.views.cantos.one.parent.js";
import "./nia.views.cantos.two.parent.js";
import "./nia.views.cantos.four.parent.js";
import "./nia.views.home.js";
goog.provide('nia.views.router');
nia.views.router.router = (function nia$views$router$router(){
var route_name = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","route-name","routing/route-name",2013475453)], null)));
var location__$1 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-loc","get-loc",-1857156772)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.navbar.navbar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29123 = route_name;
var G__29123__$1 = (((G__29123 instanceof cljs.core.Keyword))?G__29123.fqn:null);
switch (G__29123__$1) {
case "nia.routing/home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.home.introduction], null);

break;
case "nia.routing.canto/one":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.one.parent.parent,location__$1], null);

break;
case "nia.routing.canto/two":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.two.parent.parent,location__$1], null);

break;
case "nia.routing.canto/four":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.four.parent.parent,location__$1], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.home.introduction], null);

}
})()], null)], null)], null)], null);
});

//# sourceMappingURL=nia.views.router.js.map
