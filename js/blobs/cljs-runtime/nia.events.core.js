import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.functions.functions.js";
import "./nia.config.app_db.js";
import "./nia.events.routing.js";
import "./re_frame.core.js";
goog.provide('nia.events.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","initialize","app/initialize",609790584),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),nia.config.app_db.app_db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config.storage","load-blob-client","config.storage/load-blob-client",-1734470913),"snowman.jpeg"], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("poem","change-current-footnote","poem/change-current-footnote",632673023),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__38013){
var vec__38014 = p__38013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38014,(0),null);
var canto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38014,(1),null);
var footnote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38014,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-footnote","current-footnote",203646618),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cantos","footnotes","cantos/footnotes",-339509429),canto,footnote], null)));
}));
nia.events.core.init_module_BANG_ = (function nia$events$core$init_module_BANG_(){
console.log("initializing events ns");

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","initialize","app/initialize",609790584)], null));
});
var fexpr__38017_38018 = goog.functions.once(nia.events.core.init_module_BANG_);
(fexpr__38017_38018.cljs$core$IFn$_invoke$arity$0 ? fexpr__38017_38018.cljs$core$IFn$_invoke$arity$0() : fexpr__38017_38018.call(null));

//# sourceMappingURL=nia.events.core.js.map
