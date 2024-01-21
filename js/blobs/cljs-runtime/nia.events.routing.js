import "./cljs_env.js";
import "./cljs.core.js";
import "./nia.routing.js";
import "./re_frame.core.js";
import "./reitit.frontend.js";
import "./reitit.frontend.easy.js";
import "./reitit.frontend.controllers.js";
goog.provide('nia.events.routing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("routing","navigated","routing/navigated",-218852110),(function (db,p__37989){
var vec__37990 = p__37989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(1),null);
var old_match = new cljs.core.Keyword("app.routing","current-route","app.routing/current-route",-1514714915).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("app.routing","current-route","app.routing/current-route",-1514714915),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),(function (_,p__37995){
var vec__37996 = p__37995;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,params], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (p__37999){
var vec__38000 = p__37999;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38000,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38000,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reitit.frontend.easy.navigate,route,params);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("routing","parens-click","routing/parens-click",1807476915),(function (p__38003,p__38004){
var map__38005 = p__38003;
var map__38005__$1 = cljs.core.__destructure_map(map__38005);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__38006 = p__38004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006,(0),null);
var canto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006,(1),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006,(2),null);
var new_route = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.routing.impl","parens-routes","app.routing.impl/parens-routes",-63535649),canto,depth], null));
var match = reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(nia.routing.router,new_route);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","navigated","routing/navigated",-218852110),match], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","push-state","routing/push-state",1049931620),new_route,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("routing","traversal-type","routing/traversal-type",-1026033643),(function (db,p__38009){
var vec__38010 = p__38009;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(0),null);
var breadth_or_depth_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("poem","traversal-type","poem/traversal-type",-1891974340),breadth_or_depth_QMARK_);
}));

//# sourceMappingURL=nia.events.routing.js.map
