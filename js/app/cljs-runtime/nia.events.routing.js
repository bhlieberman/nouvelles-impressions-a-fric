import "./cljs_env.js";
import "./cljs.core.js";
import "./akiroz.re_frame.storage.js";
import "./re_frame.core.js";
import "./reitit.frontend.easy.js";
import "./reitit.frontend.controllers.js";
goog.provide('nia.events.routing');
akiroz.re_frame.storage.reg_co_fx_BANG_(new cljs.core.Keyword(null,"user-history","user-history",79427668),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),new cljs.core.Keyword(null,"cofx","cofx",2013202907),new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068)], null));
akiroz.re_frame.storage.reg_co_fx_BANG_(new cljs.core.Keyword(null,"history-loc","history-loc",1887825443),cljs.core.PersistentArrayMap.EMPTY);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("routing","navigated","routing/navigated",-218852110),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068))], null),(function (p__32448,p__32449){
var map__32453 = p__32448;
var map__32453__$1 = cljs.core.__destructure_map(map__32453);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32453__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32453__$1,new cljs.core.Keyword(null,"_local-storage","_local-storage",-2126400219));
var vec__32454 = p__32449;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32454,(0),null);
var map__32457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32454,(1),null);
var map__32457__$1 = cljs.core.__destructure_map(map__32457);
var new_match = map__32457__$1;
var _data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32457__$1,new cljs.core.Keyword(null,"_data","_data",-1394265439));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32457__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var old_match = new cljs.core.Keyword("app.routing","current-route","app.routing/current-route",-1514714915).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
var new_match_w_controllers = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("app.routing","current-route","app.routing/current-route",-1514714915),new_match_w_controllers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.routing","location","app.routing/location",2122222289),path_params], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),(function (_,p__32460){
var vec__32461 = p__32460;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32461,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32461,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32461,(2),null);
if(cljs.core.truth_(params)){
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"thesis","thesis",-438481408),(0),new cljs.core.Keyword(null,"one","one",935007904),(1),new cljs.core.Keyword(null,"two","two",627606869),(2),new cljs.core.Keyword(null,"three","three",-1651831795),(3),new cljs.core.Keyword(null,"four","four",1338555054),(4),new cljs.core.Keyword(null,"five","five",1430677197),(5)], null),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(params));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("poem","parens-routing","poem/parens-routing",-2107725194),route,params,loc], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("poem","parens-routing","poem/parens-routing",-2107725194),route,params], null)], null)], null)], null);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (p__32468){
var vec__32469 = p__32468;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32469,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32469,(1),null);
if(cljs.core.truth_(params)){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2(route,params);
} else {
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(route);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("routing","traversal-type","routing/traversal-type",-1026033643),(function (db,p__32478){
var vec__32479 = p__32478;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32479,(0),null);
var breadth_or_depth_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32479,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("poem","traversal-type","poem/traversal-type",-1891974340),breadth_or_depth_QMARK_);
}));

//# sourceMappingURL=nia.events.routing.js.map
