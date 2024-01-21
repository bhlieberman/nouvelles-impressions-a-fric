import "./cljs_env.js";
import "./cljs.core.js";
import "./ajax.core.js";
import "./ajax.protocols.js";
import "./nia.config.storage.js";
import "./re_frame.core.js";
goog.provide('nia.events.storage');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("azure","get-blob","azure/get-blob",1864496055),(function (_,p__56566){
var vec__56567 = p__56566;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56567,(0),null);
var resource_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56567,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[nia.config.storage.sas_url,"nia","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),"?",nia.config.storage.sas_token].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"image/jpeg",new cljs.core.Keyword(null,"description","description",-1428560544),"JPEG image",new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blob","blob",1636965233)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blob","create-obj-url","blob/create-obj-url",-333308318)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-azure-error","report-azure-error",46062501)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("blob","create-obj-url","blob/create-obj-url",-333308318),(function (p__56570,p__56571){
var map__56572 = p__56570;
var map__56572__$1 = cljs.core.__destructure_map(map__56572);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56573 = p__56571;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56573,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56573,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("images","urls","images/urls",658886219),cljs.core.conj,URL.createObjectURL(response)),new cljs.core.Keyword(null,"log","log",-1595516004),response], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("images","revoke-obj-urls","images/revoke-obj-urls",230860855),(function (p__56576,_){
var map__56577 = p__56576;
var map__56577__$1 = cljs.core.__destructure_map(map__56577);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56577__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"revoke-urls","revoke-urls",-18607100),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("images","urls","images/urls",658886219))], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"revoke-urls","revoke-urls",-18607100),(function (urls){
var seq__56578 = cljs.core.seq(urls);
var chunk__56579 = null;
var count__56580 = (0);
var i__56581 = (0);
while(true){
if((i__56581 < count__56580)){
var url = chunk__56579.cljs$core$IIndexed$_nth$arity$2(null,i__56581);
URL.revokeObjectURL(url);


var G__56586 = seq__56578;
var G__56587 = chunk__56579;
var G__56588 = count__56580;
var G__56589 = (i__56581 + (1));
seq__56578 = G__56586;
chunk__56579 = G__56587;
count__56580 = G__56588;
i__56581 = G__56589;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56578);
if(temp__5804__auto__){
var seq__56578__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56578__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56578__$1);
var G__56590 = cljs.core.chunk_rest(seq__56578__$1);
var G__56591 = c__5568__auto__;
var G__56592 = cljs.core.count(c__5568__auto__);
var G__56593 = (0);
seq__56578 = G__56590;
chunk__56579 = G__56591;
count__56580 = G__56592;
i__56581 = G__56593;
continue;
} else {
var url = cljs.core.first(seq__56578__$1);
URL.revokeObjectURL(url);


var G__56594 = cljs.core.next(seq__56578__$1);
var G__56595 = null;
var G__56596 = (0);
var G__56597 = (0);
seq__56578 = G__56594;
chunk__56579 = G__56595;
count__56580 = G__56596;
i__56581 = G__56597;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"log","log",-1595516004),(function (resp){
return console.log(resp);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"report-azure-error","report-azure-error",46062501),(function (_,p__56582){
var vec__56583 = p__56582;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56583,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56583,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"azure","azure",1864287702),error], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"azure","azure",1864287702),(function (err){
return console.error(err);
}));

//# sourceMappingURL=nia.events.storage.js.map
