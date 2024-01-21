goog.provide('portfolio.ui.actions');
/**
 * Takes a map and pairs of path value to assoc-in to the map. Makes `assoc-in`
 *   work like `assoc`, e.g.:
 * 
 *   ```clj
 *   (assoc-in* {}
 *           [:person :name] "Christian"
 *           [:person :language] "Clojure")
 *   ;;=>
 *   {:person {:name "Christian"
 *          :language "Clojure"}}
 *   ```
 */
portfolio.ui.actions.assoc_in_STAR_ = (function portfolio$ui$actions$assoc_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32287 = arguments.length;
var i__5770__auto___32288 = (0);
while(true){
if((i__5770__auto___32288 < len__5769__auto___32287)){
args__5775__auto__.push((arguments[i__5770__auto___32288]));

var G__32289 = (i__5770__auto___32288 + (1));
i__5770__auto___32288 = G__32289;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(cljs.core.count(args),(2)))){
} else {
throw (new Error(["Assert failed: ","assoc-in* takes a map and pairs of path value","\n","(= 0 (mod (count args) 2))"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args)))){
} else {
throw (new Error(["Assert failed: ","each path should be a vector","\n","(->> args (partition 2) (map first) (every? vector?))"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__31925){
var vec__31926 = p__31925;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31926,(1),null);
return cljs.core.assoc_in(m__$1,path,v);
}),m,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
}));

(portfolio.ui.actions.assoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.actions.assoc_in_STAR_.cljs$lang$applyTo = (function (seq31919){
var G__31920 = cljs.core.first(seq31919);
var seq31919__$1 = cljs.core.next(seq31919);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31920,seq31919__$1);
}));

/**
 * Takes a map and paths to dissoc from it. An example explains it best:
 * 
 *   ```clj
 *   (dissoc-in* {:person {:name "Christian"
 *                      :language "Clojure"}}
 *            [:person :language])
 *   ;;=>
 *   {:person {:name "Christian"}}
 *   ```
 * 
 *   Optionally pass additional paths.
 *   
 */
portfolio.ui.actions.dissoc_in_STAR_ = (function portfolio$ui$actions$dissoc_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32290 = arguments.length;
var i__5770__auto___32291 = (0);
while(true){
if((i__5770__auto___32291 < len__5769__auto___32290)){
args__5775__auto__.push((arguments[i__5770__auto___32291]));

var G__32292 = (i__5770__auto___32291 + (1));
i__5770__auto___32291 = G__32292;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(path))){
return m__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(path))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(path));
} else {
var vec__31936 = cljs.core.reverse(path);
var seq__31937 = cljs.core.seq(vec__31936);
var first__31938 = cljs.core.first(seq__31937);
var seq__31937__$1 = cljs.core.next(seq__31937);
var k = first__31938;
var ks = seq__31937__$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.reverse(ks),cljs.core.dissoc,k);

}
}
}),m,args);
}));

(portfolio.ui.actions.dissoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.actions.dissoc_in_STAR_.cljs$lang$applyTo = (function (seq31932){
var G__31933 = cljs.core.first(seq31932);
var seq31932__$1 = cljs.core.next(seq31932);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31933,seq31932__$1);
}));

portfolio.ui.actions.atom_QMARK_ = (function portfolio$ui$actions$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
portfolio.ui.actions.get_page_title = (function portfolio$ui$actions$get_page_title(state,p__31944){
var map__31945 = p__31944;
var map__31945__$1 = cljs.core.__destructure_map(map__31945);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31945__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31945__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var suffix = (cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state))?[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state))].join(''):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))){
var G__31949 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(selection);
var G__31949__$1 = (((G__31949 instanceof cljs.core.Keyword))?G__31949.fqn:null);
switch (G__31949__$1) {
case "scene":
return ["Scene: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))),suffix].join('');

break;
case "collection":
return ["Collection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))),suffix].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31949__$1)].join('')));

}
} else {
if(cljs.core.truth_(document__$1)){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(document__$1);
} else {
return ["No scenes found",suffix].join('');

}
}
});
portfolio.ui.actions.go_to_location = (function portfolio$ui$actions$go_to_location(state,location){
var id = portfolio.ui.routes.get_id(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
var current_scenes = portfolio.ui.collection.get_selected_scenes(state,id);
var selection = portfolio.ui.collection.get_selection(state,portfolio.ui.routes.get_id(location));
var layout = portfolio.ui.layout.get_view_layout(state,selection);
var lp = portfolio.ui.layout.get_layout_path(layout);
var expansions = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,true], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31956_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__31956_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.scene_browser.get_expanded_path,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(selection)))], 0));
var document__$1 = (((id == null))?portfolio.ui.document.get_document(portfolio.ui.routes.get_document_id(location)):null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),(function (){var G__31958 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null),location,portfolio.ui.layout.get_current_layout_path(),lp], null);
var G__31958__$1 = (((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,lp) == null))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__31958,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lp,layout], null)):G__31958);
if(cljs.core.seq(expansions)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__31958__$1,expansions);
} else {
return G__31958__$1;
}
})(),new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31965){
var map__31966 = p__31965;
var map__31966__$1 = cljs.core.__destructure_map(map__31966);
var on_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31966__$1,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31966__$1,new cljs.core.Keyword(null,"params","params",710516235));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31966__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31966__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),(function (){var or__5045__auto__ = id__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_unmount,params], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),current_scenes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31976){
var map__31977 = p__31976;
var map__31977__$1 = cljs.core.__destructure_map(map__31977);
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31977__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31977__$1,new cljs.core.Keyword(null,"params","params",710516235));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31977__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31977__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){var or__5045__auto__ = id__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_mount,params], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(selection)))),new cljs.core.Keyword(null,"release","release",-1534371381),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.scene.get_scene_atoms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_scenes], 0)),new cljs.core.Keyword(null,"subscribe","subscribe",416253756),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(portfolio.ui.scene.get_scene_atoms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(selection)], 0)),new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407),portfolio.ui.actions.get_page_title(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"document","document",-1329188687),document__$1], null)),new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291),portfolio.ui.routes.get_url.cljs$core$IFn$_invoke$arity$1(location)], null);
});
portfolio.ui.actions.remove_scene_param = (function portfolio$ui$actions$remove_scene_param(var_args){
var G__31987 = arguments.length;
switch (G__31987) {
case 2:
return portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2 = (function (state,scene_id){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,k){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.remove_scene_param.cljs$lang$maxFixedArity = 3);

portfolio.ui.actions.set_scene_param = (function portfolio$ui$actions$set_scene_param(var_args){
var G__32006 = arguments.length;
switch (G__32006) {
case 3:
return portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,v){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null),cljs.core.deref(param)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4 = (function (state,scene_id,k,v){
var param = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_(param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__32021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__32021,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null),(function (){var G__32024 = cljs.core.deref(param);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__32024) : k.call(null,G__32024));
})()], null)], null));
} else {
return G__32021;
}
})()], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.set_scene_param.cljs$lang$maxFixedArity = 4);

portfolio.ui.actions.search = (function portfolio$ui$actions$search(p__32035,q){
var map__32036 = p__32035;
var map__32036__$1 = cljs.core.__destructure_map(map__32036);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32036__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core.truth_(index)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","suggestions","search/suggestions",-1296554258)], null),portfolio.ui.search.protocols.query(index,q)], null)], null);
} else {
return null;
}
});
portfolio.ui.actions.process_action_result_BANG_ = (function portfolio$ui$actions$process_action_result_BANG_(app,res){
var log = (cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))?cljs.core.println:(function() { 
var G__32308__delegate = function (_args){
return null;
};
var G__32308 = function (var_args){
var _args = null;
if (arguments.length > 0) {
var G__32309__i = 0, G__32309__a = new Array(arguments.length -  0);
while (G__32309__i < G__32309__a.length) {G__32309__a[G__32309__i] = arguments[G__32309__i + 0]; ++G__32309__i;}
  _args = new cljs.core.IndexedSeq(G__32309__a,0,null);
} 
return G__32308__delegate.call(this,_args);};
G__32308.cljs$lang$maxFixedArity = 0;
G__32308.cljs$lang$applyTo = (function (arglist__32310){
var _args = cljs.core.seq(arglist__32310);
return G__32308__delegate(_args);
});
G__32308.cljs$core$IFn$_invoke$arity$variadic = G__32308__delegate;
return G__32308;
})()
);
var seq__32048_32311 = cljs.core.seq(new cljs.core.Keyword(null,"release","release",-1534371381).cljs$core$IFn$_invoke$arity$1(res));
var chunk__32049_32312 = null;
var count__32050_32313 = (0);
var i__32051_32314 = (0);
while(true){
if((i__32051_32314 < count__32050_32313)){
var ref_32315 = chunk__32049_32312.cljs$core$IIndexed$_nth$arity$2(null,i__32051_32314);
var G__32058_32316 = "Stop watching atom";
var G__32059_32317 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_32315], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__32058_32316,G__32059_32317) : log.call(null,G__32058_32316,G__32059_32317));

cljs.core.remove_watch(ref_32315,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875));


var G__32318 = seq__32048_32311;
var G__32319 = chunk__32049_32312;
var G__32320 = count__32050_32313;
var G__32321 = (i__32051_32314 + (1));
seq__32048_32311 = G__32318;
chunk__32049_32312 = G__32319;
count__32050_32313 = G__32320;
i__32051_32314 = G__32321;
continue;
} else {
var temp__5804__auto___32322 = cljs.core.seq(seq__32048_32311);
if(temp__5804__auto___32322){
var seq__32048_32323__$1 = temp__5804__auto___32322;
if(cljs.core.chunked_seq_QMARK_(seq__32048_32323__$1)){
var c__5568__auto___32324 = cljs.core.chunk_first(seq__32048_32323__$1);
var G__32325 = cljs.core.chunk_rest(seq__32048_32323__$1);
var G__32326 = c__5568__auto___32324;
var G__32327 = cljs.core.count(c__5568__auto___32324);
var G__32328 = (0);
seq__32048_32311 = G__32325;
chunk__32049_32312 = G__32326;
count__32050_32313 = G__32327;
i__32051_32314 = G__32328;
continue;
} else {
var ref_32329 = cljs.core.first(seq__32048_32323__$1);
var G__32060_32330 = "Stop watching atom";
var G__32061_32331 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_32329], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__32060_32330,G__32061_32331) : log.call(null,G__32060_32330,G__32061_32331));

cljs.core.remove_watch(ref_32329,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875));


var G__32332 = cljs.core.next(seq__32048_32323__$1);
var G__32333 = null;
var G__32334 = (0);
var G__32335 = (0);
seq__32048_32311 = G__32332;
chunk__32049_32312 = G__32333;
count__32050_32313 = G__32334;
i__32051_32314 = G__32335;
continue;
}
} else {
}
}
break;
}

var seq__32062_32336 = cljs.core.seq(new cljs.core.Keyword(null,"fns","fns",1185138786).cljs$core$IFn$_invoke$arity$1(res));
var chunk__32063_32337 = null;
var count__32064_32338 = (0);
var i__32065_32339 = (0);
while(true){
if((i__32065_32339 < count__32064_32338)){
var vec__32089_32340 = chunk__32063_32337.cljs$core$IIndexed$_nth$arity$2(null,i__32065_32339);
var seq__32090_32341 = cljs.core.seq(vec__32089_32340);
var first__32091_32342 = cljs.core.first(seq__32090_32341);
var seq__32090_32343__$1 = cljs.core.next(seq__32090_32341);
var k_32344 = first__32091_32342;
var first__32091_32345__$1 = cljs.core.first(seq__32090_32343__$1);
var seq__32090_32346__$2 = cljs.core.next(seq__32090_32343__$1);
var t_32347 = first__32091_32345__$1;
var first__32091_32348__$2 = cljs.core.first(seq__32090_32346__$2);
var seq__32090_32349__$3 = cljs.core.next(seq__32090_32346__$2);
var f_32350 = first__32091_32348__$2;
var args_32351 = seq__32090_32349__$3;
try{var G__32099_32352 = ["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_32344)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_32347)," with"].join('');
var G__32100_32353 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_32351], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__32099_32352,G__32100_32353) : log.call(null,G__32099_32352,G__32100_32353));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f_32350,args_32351);
}catch (e32092){var e_32354 = e32092;
var G__32093_32355 = app;
var G__32094_32356 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exception","exception",-335277064),e_32354,new cljs.core.Keyword(null,"cause","cause",231901252),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_32344)," on ",cljs.core.name(t_32347)," threw exception"].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(args_32351))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"arguments",new cljs.core.Keyword(null,"data","data",-232669377),args_32351], null):null)], null)], null)], null);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(G__32093_32355,G__32094_32356) : portfolio.ui.actions.execute_action_BANG_.call(null,G__32093_32355,G__32094_32356));
}

var G__32364 = seq__32062_32336;
var G__32365 = chunk__32063_32337;
var G__32366 = count__32064_32338;
var G__32367 = (i__32065_32339 + (1));
seq__32062_32336 = G__32364;
chunk__32063_32337 = G__32365;
count__32064_32338 = G__32366;
i__32065_32339 = G__32367;
continue;
} else {
var temp__5804__auto___32369 = cljs.core.seq(seq__32062_32336);
if(temp__5804__auto___32369){
var seq__32062_32371__$1 = temp__5804__auto___32369;
if(cljs.core.chunked_seq_QMARK_(seq__32062_32371__$1)){
var c__5568__auto___32373 = cljs.core.chunk_first(seq__32062_32371__$1);
var G__32375 = cljs.core.chunk_rest(seq__32062_32371__$1);
var G__32376 = c__5568__auto___32373;
var G__32377 = cljs.core.count(c__5568__auto___32373);
var G__32378 = (0);
seq__32062_32336 = G__32375;
chunk__32063_32337 = G__32376;
count__32064_32338 = G__32377;
i__32065_32339 = G__32378;
continue;
} else {
var vec__32103_32381 = cljs.core.first(seq__32062_32371__$1);
var seq__32104_32382 = cljs.core.seq(vec__32103_32381);
var first__32105_32383 = cljs.core.first(seq__32104_32382);
var seq__32104_32384__$1 = cljs.core.next(seq__32104_32382);
var k_32385 = first__32105_32383;
var first__32105_32386__$1 = cljs.core.first(seq__32104_32384__$1);
var seq__32104_32387__$2 = cljs.core.next(seq__32104_32384__$1);
var t_32388 = first__32105_32386__$1;
var first__32105_32389__$2 = cljs.core.first(seq__32104_32387__$2);
var seq__32104_32390__$3 = cljs.core.next(seq__32104_32387__$2);
var f_32391 = first__32105_32389__$2;
var args_32392 = seq__32104_32390__$3;
try{var G__32109_32401 = ["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_32385)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_32388)," with"].join('');
var G__32110_32402 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_32392], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__32109_32401,G__32110_32402) : log.call(null,G__32109_32401,G__32110_32402));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f_32391,args_32392);
}catch (e32106){var e_32408 = e32106;
var G__32107_32409 = app;
var G__32108_32410 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exception","exception",-335277064),e_32408,new cljs.core.Keyword(null,"cause","cause",231901252),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_32385)," on ",cljs.core.name(t_32388)," threw exception"].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(args_32392))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"arguments",new cljs.core.Keyword(null,"data","data",-232669377),args_32392], null):null)], null)], null)], null);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(G__32107_32409,G__32108_32410) : portfolio.ui.actions.execute_action_BANG_.call(null,G__32107_32409,G__32108_32410));
}

var G__32424 = cljs.core.next(seq__32062_32371__$1);
var G__32425 = null;
var G__32426 = (0);
var G__32427 = (0);
seq__32062_32336 = G__32424;
chunk__32063_32337 = G__32425;
count__32064_32338 = G__32426;
i__32065_32339 = G__32427;
continue;
}
} else {
}
}
break;
}

var seq__32115_32428 = cljs.core.seq(new cljs.core.Keyword(null,"subscribe","subscribe",416253756).cljs$core$IFn$_invoke$arity$1(res));
var chunk__32116_32429 = null;
var count__32117_32430 = (0);
var i__32118_32431 = (0);
while(true){
if((i__32118_32431 < count__32117_32430)){
var ref_32432 = chunk__32116_32429.cljs$core$IIndexed$_nth$arity$2(null,i__32118_32431);
var G__32125_32433 = "Start watching atom";
var G__32126_32434 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_32432], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__32125_32433,G__32126_32434) : log.call(null,G__32125_32433,G__32126_32434));

cljs.core.add_watch(ref_32432,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875),((function (seq__32115_32428,chunk__32116_32429,count__32117_32430,i__32118_32431,ref_32432,log){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});})(seq__32115_32428,chunk__32116_32429,count__32117_32430,i__32118_32431,ref_32432,log))
);


var G__32436 = seq__32115_32428;
var G__32437 = chunk__32116_32429;
var G__32438 = count__32117_32430;
var G__32439 = (i__32118_32431 + (1));
seq__32115_32428 = G__32436;
chunk__32116_32429 = G__32437;
count__32117_32430 = G__32438;
i__32118_32431 = G__32439;
continue;
} else {
var temp__5804__auto___32440 = cljs.core.seq(seq__32115_32428);
if(temp__5804__auto___32440){
var seq__32115_32441__$1 = temp__5804__auto___32440;
if(cljs.core.chunked_seq_QMARK_(seq__32115_32441__$1)){
var c__5568__auto___32442 = cljs.core.chunk_first(seq__32115_32441__$1);
var G__32443 = cljs.core.chunk_rest(seq__32115_32441__$1);
var G__32444 = c__5568__auto___32442;
var G__32445 = cljs.core.count(c__5568__auto___32442);
var G__32446 = (0);
seq__32115_32428 = G__32443;
chunk__32116_32429 = G__32444;
count__32117_32430 = G__32445;
i__32118_32431 = G__32446;
continue;
} else {
var ref_32447 = cljs.core.first(seq__32115_32441__$1);
var G__32135_32448 = "Start watching atom";
var G__32136_32449 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_32447], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__32135_32448,G__32136_32449) : log.call(null,G__32135_32448,G__32136_32449));

cljs.core.add_watch(ref_32447,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875),((function (seq__32115_32428,chunk__32116_32429,count__32117_32430,i__32118_32431,ref_32447,seq__32115_32441__$1,temp__5804__auto___32440,log){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});})(seq__32115_32428,chunk__32116_32429,count__32117_32430,i__32118_32431,ref_32447,seq__32115_32441__$1,temp__5804__auto___32440,log))
);


var G__32450 = cljs.core.next(seq__32115_32441__$1);
var G__32451 = null;
var G__32452 = (0);
var G__32453 = (0);
seq__32115_32428 = G__32450;
chunk__32116_32429 = G__32451;
count__32117_32430 = G__32452;
i__32118_32431 = G__32453;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___32454 = new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___32454)){
var url_32455 = temp__5804__auto___32454;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_32455,portfolio.ui.routes.get_current_url())){
} else {
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2("Updating browser URL to",url_32455) : log.call(null,"Updating browser URL to",url_32455));

history.pushState(false,false,url_32455);
}

requestAnimationFrame((function (){
var temp__5804__auto____$1 = (function (){var G__32141 = location.hash;
var G__32141__$1 = (((G__32141 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__32141,(1)));
if((G__32141__$1 == null)){
return null;
} else {
return document.getElementById(G__32141__$1);
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var el = temp__5804__auto____$1;
return el.scrollIntoView();
} else {
return null;
}
}));
} else {
}

var temp__5804__auto___32456 = new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___32456)){
var title_32457 = temp__5804__auto___32456;
var G__32148_32458 = ["Set page title to '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_32457),"'"].join('');
(log.cljs$core$IFn$_invoke$arity$1 ? log.cljs$core$IFn$_invoke$arity$1(G__32148_32458) : log.call(null,G__32148_32458));

(document.title = title_32457);
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res);
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res))){
var G__32149_32459 = ":assoc-in";
var G__32150_32460 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res)], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__32149_32459,G__32150_32460) : log.call(null,G__32149_32459,G__32150_32460));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res))){
var G__32151_32461 = ":dissoc-in";
var G__32152_32462 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)], 0));
(log.cljs$core$IFn$_invoke$arity$2 ? log.cljs$core$IFn$_invoke$arity$2(G__32151_32461,G__32152_32462) : log.call(null,G__32151_32461,G__32152_32462));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app,(function (state){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.assoc_in_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.dissoc_in_STAR_,state,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res));
}));
} else {
}

var seq__32154_32464 = cljs.core.seq(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(res));
var chunk__32155_32465 = null;
var count__32156_32466 = (0);
var i__32157_32467 = (0);
while(true){
if((i__32157_32467 < count__32156_32466)){
var action_32468 = chunk__32155_32465.cljs$core$IIndexed$_nth$arity$2(null,i__32157_32467);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(app,action_32468) : portfolio.ui.actions.execute_action_BANG_.call(null,app,action_32468));


var G__32469 = seq__32154_32464;
var G__32470 = chunk__32155_32465;
var G__32471 = count__32156_32466;
var G__32472 = (i__32157_32467 + (1));
seq__32154_32464 = G__32469;
chunk__32155_32465 = G__32470;
count__32156_32466 = G__32471;
i__32157_32467 = G__32472;
continue;
} else {
var temp__5804__auto___32473 = cljs.core.seq(seq__32154_32464);
if(temp__5804__auto___32473){
var seq__32154_32475__$1 = temp__5804__auto___32473;
if(cljs.core.chunked_seq_QMARK_(seq__32154_32475__$1)){
var c__5568__auto___32476 = cljs.core.chunk_first(seq__32154_32475__$1);
var G__32477 = cljs.core.chunk_rest(seq__32154_32475__$1);
var G__32478 = c__5568__auto___32476;
var G__32479 = cljs.core.count(c__5568__auto___32476);
var G__32480 = (0);
seq__32154_32464 = G__32477;
chunk__32155_32465 = G__32478;
count__32156_32466 = G__32479;
i__32157_32467 = G__32480;
continue;
} else {
var action_32481 = cljs.core.first(seq__32154_32475__$1);
(portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2 ? portfolio.ui.actions.execute_action_BANG_.cljs$core$IFn$_invoke$arity$2(app,action_32481) : portfolio.ui.actions.execute_action_BANG_.call(null,app,action_32481));


var G__32483 = cljs.core.next(seq__32154_32475__$1);
var G__32484 = null;
var G__32485 = (0);
var G__32486 = (0);
seq__32154_32464 = G__32483;
chunk__32155_32465 = G__32484;
count__32156_32466 = G__32485;
i__32157_32467 = G__32486;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___32493 = new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___32493)){
var vec__32173_32494 = temp__5804__auto___32493;
var ref_32495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32173_32494,(0),null);
var path_32496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32173_32494,(1),null);
var v_32497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32173_32494,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref_32495,cljs.core.assoc_in,path_32496,v_32497);
} else {
}

var temp__5804__auto___32498 = new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___32498)){
var vec__32180_32499 = temp__5804__auto___32498;
var ref_32500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32180_32499,(0),null);
var v_32501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32180_32499,(1),null);
cljs.core.reset_BANG_(ref_32500,v_32501);
} else {
}

var temp__5804__auto___32503 = new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___32503)){
var paths_32504 = temp__5804__auto___32503;
portfolio.ui.css.load_css_files(paths_32504);
} else {
}

var temp__5804__auto__ = new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto__)){
var paths = temp__5804__auto__;
return portfolio.ui.css.replace_loaded_css_files(paths);
} else {
return null;
}
});
portfolio.ui.actions.save_in_local_storage = (function portfolio$ui$actions$save_in_local_storage(k,v){
return localStorage.setItem(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
});
portfolio.ui.actions.execute_action_BANG_ = (function portfolio$ui$actions$execute_action_BANG_(app,action){
if(cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["execute-action!",action], 0));
} else {
}

portfolio.ui.actions.process_action_result_BANG_(app,(function (){var G__32200 = cljs.core.first(action);
var G__32200__$1 = (((G__32200 instanceof cljs.core.Keyword))?G__32200.fqn:null);
switch (G__32200__$1) {
case "assoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),cljs.core.rest(action)], null);

break;
case "dissoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),cljs.core.rest(action)], null);

break;
case "fn/call":
var vec__32201 = cljs.core.rest(action);
var seq__32202 = cljs.core.seq(vec__32201);
var first__32203 = cljs.core.first(seq__32202);
var seq__32202__$1 = cljs.core.next(seq__32202);
var fn = first__32203;
var args = seq__32202__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,args);

break;
case "go-to-location":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.go_to_location,cljs.core.deref(app),cljs.core.rest(action));

break;
case "go-to-current-location":
return portfolio.ui.actions.go_to_location(cljs.core.deref(app),portfolio.ui.routes.get_current_location());

break;
case "set-css-files":
var vec__32206 = cljs.core.rest(action);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32206,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-paths","css-paths",582305563)], null),paths], null),new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475),paths,new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968),paths], null);

break;
case "remove-scene-param":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.remove_scene_param,cljs.core.deref(app),cljs.core.rest(action));

break;
case "save-in-local-storage":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(portfolio.ui.actions.save_in_local_storage,cljs.core.rest(action));

break;
case "set-scene-param":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.set_scene_param,cljs.core.deref(app),cljs.core.rest(action));

break;
case "search":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(portfolio.ui.actions.search,cljs.core.deref(app),cljs.core.rest(action));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32200__$1)].join('')));

}
})());

return app;
});
portfolio.ui.actions.available_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177),null,new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),null,new cljs.core.Keyword(null,"remove-scene-param","remove-scene-param",-1304315187),null,new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583),null,new cljs.core.Keyword(null,"set-scene-param","set-scene-param",234226032),null,new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),null,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),null,new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),null,new cljs.core.Keyword("fn","call","fn/call",-519998786),null], null), null);
portfolio.ui.actions.actions_QMARK_ = (function portfolio$ui$actions$actions_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && (((cljs.core.seq(x)) && (cljs.core.every_QMARK_((function (p1__32210_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__32210_SHARP_)) && (cljs.core.contains_QMARK_(portfolio.ui.actions.available_actions,cljs.core.first(p1__32210_SHARP_))));
}),x)))));
});
portfolio.ui.actions.parse_int = (function portfolio$ui$actions$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,n)){
return (0);
} else {
return n;
}
});
portfolio.ui.actions.get_action = (function portfolio$ui$actions$get_action(message){
try{var msg = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(msg))){
var action = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(msg));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),action))?(function (){var vec__32227 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32227,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__32222_SHARP_){
var G__32230 = p1__32222_SHARP_;
if(typeof p1__32222_SHARP_ === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__32230);
} else {
return G__32230;
}
}),path),v], null);
})():null));
} else {
return null;
}
}catch (e32223){var _e = e32223;
return null;
}});
/**
 * Given a Portfolio `app` instance and some prepared data to render, wrap
 *   collections of actions in a function that executes these actions. Using this
 *   function makes it possible to prepare event handlers as a sequence of action
 *   tuples, and have them seemlessly emitted as actions in the components.
 * 
 *   If you need to access the `.-value` of the event target (e.g. for on-change on
 *   input fields, etc), use `:event.target/value` as a placeholder in your action,
 *   and it will be replaced with the value.
 */
portfolio.ui.actions.actionize_data = (function portfolio$ui$actions$actionize_data(app,data){
return clojure.walk.prewalk((function (x){
if(portfolio.ui.actions.actions_QMARK_(x)){
return (function() { 
var G__32507__delegate = function (e,p__32235){
var vec__32236 = p__32235;
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32236,(0),null);
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null)]),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.identity,x)))){
e.preventDefault();

e.stopPropagation();
} else {
}

var seq__32242 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null)]),x));
var chunk__32243 = null;
var count__32244 = (0);
var i__32245 = (0);
while(true){
if((i__32245 < count__32244)){
var action = chunk__32243.cljs$core$IIndexed$_nth$arity$2(null,i__32245);
portfolio.ui.actions.execute_action_BANG_(app,clojure.walk.prewalk(((function (seq__32242,chunk__32243,count__32244,i__32245,action,vec__32236,data__$1){
return (function (ax){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__32259 = e;
var G__32259__$1 = (((G__32259 == null))?null:G__32259.target);
if((G__32259__$1 == null)){
return null;
} else {
return G__32259__$1.value;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__32260 = e;
var G__32260__$1 = (((G__32260 == null))?null:G__32260.target);
var G__32260__$2 = (((G__32260__$1 == null))?null:G__32260__$1.value);
if((G__32260__$2 == null)){
return null;
} else {
return portfolio.ui.actions.parse_int(G__32260__$2);
}
} else {
return ax;

}
}
}
});})(seq__32242,chunk__32243,count__32244,i__32245,action,vec__32236,data__$1))
,action));


var G__32509 = seq__32242;
var G__32510 = chunk__32243;
var G__32511 = count__32244;
var G__32512 = (i__32245 + (1));
seq__32242 = G__32509;
chunk__32243 = G__32510;
count__32244 = G__32511;
i__32245 = G__32512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32242);
if(temp__5804__auto__){
var seq__32242__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32242__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32242__$1);
var G__32517 = cljs.core.chunk_rest(seq__32242__$1);
var G__32518 = c__5568__auto__;
var G__32519 = cljs.core.count(c__5568__auto__);
var G__32520 = (0);
seq__32242 = G__32517;
chunk__32243 = G__32518;
count__32244 = G__32519;
i__32245 = G__32520;
continue;
} else {
var action = cljs.core.first(seq__32242__$1);
portfolio.ui.actions.execute_action_BANG_(app,clojure.walk.prewalk(((function (seq__32242,chunk__32243,count__32244,i__32245,action,seq__32242__$1,temp__5804__auto__,vec__32236,data__$1){
return (function (ax){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,ax);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__32262 = e;
var G__32262__$1 = (((G__32262 == null))?null:G__32262.target);
if((G__32262__$1 == null)){
return null;
} else {
return G__32262__$1.value;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__32263 = e;
var G__32263__$1 = (((G__32263 == null))?null:G__32263.target);
var G__32263__$2 = (((G__32263__$1 == null))?null:G__32263__$1.value);
if((G__32263__$2 == null)){
return null;
} else {
return portfolio.ui.actions.parse_int(G__32263__$2);
}
} else {
return ax;

}
}
}
});})(seq__32242,chunk__32243,count__32244,i__32245,action,seq__32242__$1,temp__5804__auto__,vec__32236,data__$1))
,action));


var G__32526 = cljs.core.next(seq__32242__$1);
var G__32527 = null;
var G__32528 = (0);
var G__32529 = (0);
seq__32242 = G__32526;
chunk__32243 = G__32527;
count__32244 = G__32528;
i__32245 = G__32529;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__32507 = function (e,var_args){
var p__32235 = null;
if (arguments.length > 1) {
var G__32530__i = 0, G__32530__a = new Array(arguments.length -  1);
while (G__32530__i < G__32530__a.length) {G__32530__a[G__32530__i] = arguments[G__32530__i + 1]; ++G__32530__i;}
  p__32235 = new cljs.core.IndexedSeq(G__32530__a,0,null);
} 
return G__32507__delegate.call(this,e,p__32235);};
G__32507.cljs$lang$maxFixedArity = 1;
G__32507.cljs$lang$applyTo = (function (arglist__32531){
var e = cljs.core.first(arglist__32531);
var p__32235 = cljs.core.rest(arglist__32531);
return G__32507__delegate(e,p__32235);
});
G__32507.cljs$core$IFn$_invoke$arity$variadic = G__32507__delegate;
return G__32507;
})()
;
} else {
return x;
}
}),data);
});
portfolio.ui.actions.dispatch = (function portfolio$ui$actions$dispatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32532 = arguments.length;
var i__5770__auto___32533 = (0);
while(true){
if((i__5770__auto___32533 < len__5769__auto___32532)){
args__5775__auto__.push((arguments[i__5770__auto___32533]));

var G__32534 = (i__5770__auto___32533 + (1));
i__5770__auto___32533 = G__32534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (actions,e,p__32274){
var vec__32275 = p__32274;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32275,(0),null);
return requestAnimationFrame((function (){
return (actions.cljs$core$IFn$_invoke$arity$2 ? actions.cljs$core$IFn$_invoke$arity$2(e,data) : actions.call(null,e,data));
}));
}));

(portfolio.ui.actions.dispatch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.actions.dispatch.cljs$lang$applyTo = (function (seq32266){
var G__32267 = cljs.core.first(seq32266);
var seq32266__$1 = cljs.core.next(seq32266);
var G__32268 = cljs.core.first(seq32266__$1);
var seq32266__$2 = cljs.core.next(seq32266__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32267,G__32268,seq32266__$2);
}));


//# sourceMappingURL=portfolio.ui.actions.js.map
