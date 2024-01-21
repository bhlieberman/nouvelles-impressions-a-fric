import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.functions.functions.js";
import "./nia.config.app_db.js";
import "./nia.events.routing.js";
import "./nia.events.search.js";
import "./re_frame.core.js";
import "./day8.re_frame.http_fx.js";
goog.provide('nia.events.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","initialize","app/initialize",609790584),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068))], null),(function (p__28673,_){
var map__28674 = p__28673;
var map__28674__$1 = cljs.core.__destructure_map(map__28674);
var local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28674__$1,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
var map__28675 = local_storage;
var map__28675__$1 = cljs.core.__destructure_map(map__28675);
var user_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,new cljs.core.Keyword(null,"user-history","user-history",79427668));
var history_loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,new cljs.core.Keyword(null,"history-loc","history-loc",1887825443));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),nia.config.app_db.app_db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","create-builder","search/create-builder",646790304)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("poem","change-current-footnote","poem/change-current-footnote",632673023),(function (db,p__28676){
var vec__28677 = p__28676;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28677,(0),null);
var canto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28677,(1),null);
var footnote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28677,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-footnote","current-footnote",203646618),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cantos","footnotes","cantos/footnotes",-339509429),canto,footnote], null)).body);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("poem","parens-routing","poem/parens-routing",-2107725194),(function (p__28680,p__28681){
var map__28682 = p__28680;
var map__28682__$1 = cljs.core.__destructure_map(map__28682);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28682__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28683 = p__28681;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28683,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28683,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28683,(2),null);
var new_depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28683,(3),null);
if(cljs.core.truth_(new_depth)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("poem","parens-depth","poem/parens-depth",-1934963187),new_depth),new cljs.core.Keyword(null,"push-state","push-state",-1409397210),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,params], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,params], null)], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("collapse","toggle","collapse/toggle",648990523),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"show-collapsed?","show-collapsed?",-1742530825),cljs.core.not);
}));
nia.events.core.init_module_BANG_ = (function nia$events$core$init_module_BANG_(){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","initialize","app/initialize",609790584)], null));
});
if((typeof nia !== 'undefined') && (typeof nia.events !== 'undefined') && (typeof nia.events.core !== 'undefined') && (typeof nia.events.core.init_BANG_ !== 'undefined')){
} else {
nia.events.core.init_BANG_ = goog.functions.once(nia.events.core.init_module_BANG_);
}
(nia.events.core.init_BANG_.cljs$core$IFn$_invoke$arity$0 ? nia.events.core.init_BANG_.cljs$core$IFn$_invoke$arity$0() : nia.events.core.init_BANG_.call(null));

//# sourceMappingURL=nia.events.core.js.map
