import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.remote.runtime.api.js";
import "./shadow.remote.runtime.shared.js";
import "./shadow.remote.runtime.obj_support.js";
goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__32857,p__32858){
var map__32859 = p__32857;
var map__32859__$1 = cljs.core.__destructure_map(map__32859);
var svc = map__32859__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32859__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32859__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32859__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32860 = p__32858;
var map__32860__$1 = cljs.core.__destructure_map(map__32860);
var msg = map__32860__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32860__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32860__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32860__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32860__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__32867,p__32868){
var map__32870 = p__32867;
var map__32870__$1 = cljs.core.__destructure_map(map__32870);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32870__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__32871 = p__32868;
var map__32871__$1 = cljs.core.__destructure_map(map__32871);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32871__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__32879,p__32880){
var map__32882 = p__32879;
var map__32882__$1 = cljs.core.__destructure_map(map__32882);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32882__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32882__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32883 = p__32880;
var map__32883__$1 = cljs.core.__destructure_map(map__32883);
var msg = map__32883__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32883__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__32885,tid){
var map__32888 = p__32885;
var map__32888__$1 = cljs.core.__destructure_map(map__32888);
var svc = map__32888__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32888__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__32898 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__32899 = null;
var count__32900 = (0);
var i__32901 = (0);
while(true){
if((i__32901 < count__32900)){
var vec__32922 = chunk__32899.cljs$core$IIndexed$_nth$arity$2(null,i__32901);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32922,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32922,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32945 = seq__32898;
var G__32946 = chunk__32899;
var G__32947 = count__32900;
var G__32948 = (i__32901 + (1));
seq__32898 = G__32945;
chunk__32899 = G__32946;
count__32900 = G__32947;
i__32901 = G__32948;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32898);
if(temp__5804__auto__){
var seq__32898__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32898__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32898__$1);
var G__32949 = cljs.core.chunk_rest(seq__32898__$1);
var G__32950 = c__5568__auto__;
var G__32951 = cljs.core.count(c__5568__auto__);
var G__32952 = (0);
seq__32898 = G__32949;
chunk__32899 = G__32950;
count__32900 = G__32951;
i__32901 = G__32952;
continue;
} else {
var vec__32928 = cljs.core.first(seq__32898__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32928,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32928,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32953 = cljs.core.next(seq__32898__$1);
var G__32954 = null;
var G__32955 = (0);
var G__32956 = (0);
seq__32898 = G__32953;
chunk__32899 = G__32954;
count__32900 = G__32955;
i__32901 = G__32956;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__32892_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__32892_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__32893_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__32893_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__32894_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__32894_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__32895_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__32895_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__32933){
var map__32938 = p__32933;
var map__32938__$1 = cljs.core.__destructure_map(map__32938);
var svc = map__32938__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32938__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32938__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
