import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.remote.runtime.api.js";
import "./shadow.remote.runtime.shared.js";
import "./shadow.remote.runtime.obj_support.js";
goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44712,p__44713){
var map__44716 = p__44712;
var map__44716__$1 = cljs.core.__destructure_map(map__44716);
var svc = map__44716__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44716__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44716__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44716__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44717 = p__44713;
var map__44717__$1 = cljs.core.__destructure_map(map__44717);
var msg = map__44717__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44717__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44717__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44717__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44717__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44726,p__44727){
var map__44728 = p__44726;
var map__44728__$1 = cljs.core.__destructure_map(map__44728);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44728__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44729 = p__44727;
var map__44729__$1 = cljs.core.__destructure_map(map__44729);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44729__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44732,p__44733){
var map__44734 = p__44732;
var map__44734__$1 = cljs.core.__destructure_map(map__44734);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44734__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44734__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44735 = p__44733;
var map__44735__$1 = cljs.core.__destructure_map(map__44735);
var msg = map__44735__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44735__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44740,tid){
var map__44741 = p__44740;
var map__44741__$1 = cljs.core.__destructure_map(map__44741);
var svc = map__44741__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44741__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44753 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44754 = null;
var count__44755 = (0);
var i__44756 = (0);
while(true){
if((i__44756 < count__44755)){
var vec__44765 = chunk__44754.cljs$core$IIndexed$_nth$arity$2(null,i__44756);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44765,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44765,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44793 = seq__44753;
var G__44794 = chunk__44754;
var G__44795 = count__44755;
var G__44796 = (i__44756 + (1));
seq__44753 = G__44793;
chunk__44754 = G__44794;
count__44755 = G__44795;
i__44756 = G__44796;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44753);
if(temp__5804__auto__){
var seq__44753__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44753__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44753__$1);
var G__44797 = cljs.core.chunk_rest(seq__44753__$1);
var G__44798 = c__5568__auto__;
var G__44799 = cljs.core.count(c__5568__auto__);
var G__44800 = (0);
seq__44753 = G__44797;
chunk__44754 = G__44798;
count__44755 = G__44799;
i__44756 = G__44800;
continue;
} else {
var vec__44769 = cljs.core.first(seq__44753__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44769,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44769,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44801 = cljs.core.next(seq__44753__$1);
var G__44802 = null;
var G__44803 = (0);
var G__44804 = (0);
seq__44753 = G__44801;
chunk__44754 = G__44802;
count__44755 = G__44803;
i__44756 = G__44804;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44744_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44744_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44745_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44745_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44746_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44746_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44747_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44747_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44776){
var map__44780 = p__44776;
var map__44780__$1 = cljs.core.__destructure_map(map__44780);
var svc = map__44780__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44780__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44780__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
