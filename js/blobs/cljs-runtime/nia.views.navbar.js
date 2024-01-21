import "./cljs_env.js";
import "./cljs.core.js";
import "./reagent.core.js";
import "./re_com.core.js";
import "./re_frame.core.js";
goog.provide('nia.views.navbar');
nia.views.navbar.navbar = (function nia$views$navbar$navbar(p__37971){
var map__37972 = p__37971;
var map__37972__$1 = cljs.core.__destructure_map(map__37972);
var _children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37972__$1,new cljs.core.Keyword(null,"_children","_children",1993687667));
var active_route_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var classname = (function (name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.deref(active_route_QMARK_))){
return "nav-item nav-link active";
} else {
return "nav-item nav-link";
}
});
return (function (p__37977){
var map__37978 = p__37977;
var map__37978__$1 = cljs.core.__destructure_map(map__37978);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-expand-lg navbar-light bg-light"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand m-3 display-4",new cljs.core.Keyword(null,"label","label",1718410804),"NIA",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing","home","nia.routing/home",-2077356835)], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggler",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"data-target","data-target",-113904678),"#navbarNavAltMarkup",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"navbarNavAltMarkup",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Toggle navigation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggler-icon"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"collapse navbar-collapse",new cljs.core.Keyword(null,"id","id",-1388402092),"navbarNavAltMarkup"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-nav"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"nia/views/navbar.cljs",new cljs.core.Keyword(null,"line","line",212345235),28], null)),new cljs.core.Keyword(null,"class","class",-2030961996),classname(new cljs.core.Keyword(null,"canto-i","canto-i",147083681)),new cljs.core.Keyword(null,"label","label",1718410804),"Canto I",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(active_route_QMARK_,new cljs.core.Keyword(null,"canto-i","canto-i",147083681));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing.canto.one","thesis","nia.routing.canto.one/thesis",-301879597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"nia/views/navbar.cljs",new cljs.core.Keyword(null,"line","line",212345235),34], null)),new cljs.core.Keyword(null,"class","class",-2030961996),classname(new cljs.core.Keyword(null,"canto-ii","canto-ii",-1541319303)),new cljs.core.Keyword(null,"label","label",1718410804),"Canto II",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(active_route_QMARK_,new cljs.core.Keyword(null,"canto-ii","canto-ii",-1541319303));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing.canto.two","thesis","nia.routing.canto.two/thesis",-301876491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null)], null)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"nia/views/navbar.cljs",new cljs.core.Keyword(null,"line","line",212345235),40], null)),new cljs.core.Keyword(null,"class","class",-2030961996),classname(new cljs.core.Keyword(null,"canto-iv","canto-iv",-1643416575)),new cljs.core.Keyword(null,"label","label",1718410804),"Canto IV",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(active_route_QMARK_,new cljs.core.Keyword(null,"canto-iv","canto-iv",-1643416575));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new cljs.core.Keyword("nia.routing.canto.four","thesis","nia.routing.canto.four/thesis",-491471851),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null)], null)], null));
})], null)], null)], null)], null)], null),children], null);
});
});

//# sourceMappingURL=nia.views.navbar.js.map
