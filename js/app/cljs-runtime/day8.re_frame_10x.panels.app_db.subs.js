import "./cljs_env.js";
import "./cljs.core.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.js";
import "./day8.re_frame_10x.navigation.epochs.subs.js";
import "./day8.re_frame_10x.panels.settings.subs.js";
import "./day8.re_frame_10x.tools.coll.js";
goog.provide('day8.re_frame_10x.panels.app_db.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__23617,_){
var map__23618 = p__23617;
var map__23618__$1 = cljs.core.__destructure_map(map__23618);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23618__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
return app_db;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-before","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-before",1079113245),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","paths","day8.re-frame-10x.panels.app-db.subs/paths",564942769),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__23622,_){
var map__23623 = p__23622;
var map__23623__$1 = cljs.core.__destructure_map(map__23623);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23623__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23621_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23621_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23621_SHARP_));
}),paths));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528)], null),(function (p__23624,p__23625){
var vec__23626 = p__23624;
var map__23629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23626,(0),null);
var map__23629__$1 = cljs.core.__destructure_map(map__23629);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23629__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var db_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23626,(1),null);
var vec__23630 = p__23625;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(0),null);
var map__23633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(1),null);
var map__23633__$1 = cljs.core.__destructure_map(map__23633);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23633__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return day8.re_frame_10x.tools.coll.get_in_with_lists_and_sets(db_after,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,id)));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","small-data?","day8.re-frame-10x.panels.app-db.subs/small-data?",1741117145),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__23634,_){
var vec__23635 = p__23634;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23635,(0),null);
var map__23638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23635,(1),null);
var map__23638__$1 = cljs.core.__destructure_map(map__23638);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","expansion-limit","day8.re-frame-10x.panels.settings.subs/expansion-limit",740463148)], null))], null);
}),(function (p__23639,_){
var vec__23640 = p__23639;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640,(1),null);
return day8.re_frame_10x.tools.coll.nodes_fewer_than_QMARK_(data,limit);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","search-string","day8.re-frame-10x.panels.app-db.subs/search-string",-1224926557),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__23643,_){
var map__23644 = p__23643;
var map__23644__$1 = cljs.core.__destructure_map(map__23644);
var search_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23644__$1,new cljs.core.Keyword(null,"search-string","search-string",68818394));
return search_string;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__23645,_){
var map__23646 = p__23645;
var map__23646__$1 = cljs.core.__destructure_map(map__23646);
var json_ml_expansions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23646__$1,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
return json_ml_expansions;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264)], null),(function (expansions,p__23647){
var vec__23648 = p__23647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23648,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23648,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","reagent-id","day8.re-frame-10x.panels.app-db.subs/reagent-id",-1515896944),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__23653,_){
var map__23654 = p__23653;
var map__23654__$1 = cljs.core.__destructure_map(map__23654);
var reagent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
return reagent_id;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__23655,_){
var map__23657 = p__23655;
var map__23657__$1 = cljs.core.__destructure_map(map__23657);
var data_path_annotations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23657__$1,new cljs.core.Keyword(null,"data-path-annotations?","data-path-annotations?",-381525058));
return data_path_annotations_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expand-all?","day8.re-frame-10x.panels.app-db.subs/expand-all?",1843725491),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__23659,p__23660){
var map__23662 = p__23659;
var map__23662__$1 = cljs.core.__destructure_map(map__23662);
var expand_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23662__$1,new cljs.core.Keyword(null,"expand-all?","expand-all?",2129393886));
var vec__23663 = p__23660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23663,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23663,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(expand_all_QMARK_,path_id);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","popup-menu","day8.re-frame-10x.panels.app-db.subs/popup-menu",-100095659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"popup-menu","popup-menu",355955876)], 0));

//# sourceMappingURL=day8.re_frame_10x.panels.app_db.subs.js.map
