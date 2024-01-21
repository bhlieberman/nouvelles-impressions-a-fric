import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./fork.re_frame.js";
import "./goog.object.object.js";
import "./module$node_modules$lunr$lunr.js";
import "./nia.config.app_db.js";
import "./re_frame.core.js";
goog.provide('nia.events.search');
goog.scope(function(){
  nia.events.search.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$lunr$lunr=shadow.js.require("module$node_modules$lunr$lunr", {});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","create-builder","search/create-builder",646790304),(function (p__28829,_){
var map__28830 = p__28829;
var map__28830__$1 = cljs.core.__destructure_map(map__28830);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28830__$1,new cljs.core.Keyword(null,"db","db",993250759));
var builder = (function (){var G__28831 = (new module$node_modules$lunr$lunr.Builder());
G__28831.field("title");

G__28831.field("body");

G__28831.ref("id");

return G__28831;
})();
(builder.metadataWhitelist = ["position"]);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("lunr","builder","lunr/builder",-2064915488),builder),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","fetch-documents","search/fetch-documents",-1275291581)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","fetch-documents","search/fetch-documents",-1275291581),(function (p__28832,_){
var map__28833 = p__28832;
var map__28833__$1 = cljs.core.__destructure_map(map__28833);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28833__$1,new cljs.core.Keyword(null,"db","db",993250759));
var all_footnotes = new cljs.core.Keyword("cantos","footnotes","cantos/footnotes",-339509429).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","add-documents","search/add-documents",1527632771),all_footnotes], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
nia.events.search.add_all_docs = (function nia$events$search$add_all_docs(p__28834,p__28835){
var map__28836 = p__28834;
var map__28836__$1 = cljs.core.__destructure_map(map__28836);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28836__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28837 = p__28835;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(0),null);
var docs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(1),null);
var footnotes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.vals),cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"c1","c1",1132530803),new cljs.core.Keyword(null,"c2","c2",-1561880371),new cljs.core.Keyword(null,"c4","c4",1028045610))(docs));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("lunr","builder","lunr/builder",-2064915488),(function (b){
var seq__28840_28908 = cljs.core.seq(footnotes);
var chunk__28841_28909 = null;
var count__28842_28910 = (0);
var i__28843_28911 = (0);
while(true){
if((i__28843_28911 < count__28842_28910)){
var footnote_28912 = chunk__28841_28909.cljs$core$IIndexed$_nth$arity$2(null,i__28843_28911);
if(cljs.core.truth_(goog.DEBUG)){
console.log(footnote_28912.id);
} else {
}

b.add(footnote_28912);


var G__28914 = seq__28840_28908;
var G__28915 = chunk__28841_28909;
var G__28916 = count__28842_28910;
var G__28917 = (i__28843_28911 + (1));
seq__28840_28908 = G__28914;
chunk__28841_28909 = G__28915;
count__28842_28910 = G__28916;
i__28843_28911 = G__28917;
continue;
} else {
var temp__5804__auto___28918 = cljs.core.seq(seq__28840_28908);
if(temp__5804__auto___28918){
var seq__28840_28919__$1 = temp__5804__auto___28918;
if(cljs.core.chunked_seq_QMARK_(seq__28840_28919__$1)){
var c__5568__auto___28920 = cljs.core.chunk_first(seq__28840_28919__$1);
var G__28921 = cljs.core.chunk_rest(seq__28840_28919__$1);
var G__28922 = c__5568__auto___28920;
var G__28923 = cljs.core.count(c__5568__auto___28920);
var G__28924 = (0);
seq__28840_28908 = G__28921;
chunk__28841_28909 = G__28922;
count__28842_28910 = G__28923;
i__28843_28911 = G__28924;
continue;
} else {
var footnote_28925 = cljs.core.first(seq__28840_28919__$1);
if(cljs.core.truth_(goog.DEBUG)){
console.log(footnote_28925.id);
} else {
}

b.add(footnote_28925);


var G__28926 = cljs.core.next(seq__28840_28919__$1);
var G__28927 = null;
var G__28928 = (0);
var G__28929 = (0);
seq__28840_28908 = G__28926;
chunk__28841_28909 = G__28927;
count__28842_28910 = G__28928;
i__28843_28911 = G__28929;
continue;
}
} else {
}
}
break;
}

return b;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","build-index","search/build-index",1286211323)], null)], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","add-documents","search/add-documents",1527632771),nia.events.search.add_all_docs);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","build-index","search/build-index",1286211323),(function (db,_){
var builder = new cljs.core.Keyword("lunr","builder","lunr/builder",-2064915488).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("lunr","index","lunr/index",-1511836908),builder.build()),new cljs.core.Keyword("lunr","builder","lunr/builder",-2064915488));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","submit-input","search/submit-input",-1763800997),(function (p__28844,p__28845){
var map__28846 = p__28844;
var map__28846__$1 = cljs.core.__destructure_map(map__28846);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28847 = p__28845;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28847,(0),null);
var map__28850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28847,(1),null);
var map__28850__$1 = cljs.core.__destructure_map(map__28850);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28850__$1,new cljs.core.Keyword(null,"values","values",372645556));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28850__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),fork.re_frame.set_submitting(db,path,true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","resolved-form","search/resolved-form",1120527794),path,values], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","resolved-form","search/resolved-form",1120527794),(function (p__28851,p__28852){
var map__28853 = p__28851;
var map__28853__$1 = cljs.core.__destructure_map(map__28853);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28853__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28854 = p__28852;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(1),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(2),null);
console.log(values);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),fork.re_frame.set_submitting(db,path,false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","search-index","search/search-index",1381221376),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","search-index","search/search-index",1381221376),(function (p__28857,p__28858){
var map__28859 = p__28857;
var map__28859__$1 = cljs.core.__destructure_map(map__28859);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28859__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28860 = p__28858;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28860,(0),null);
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28860,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-index","search-index",1817399128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lunr","index","lunr/index",-1511836908).cljs$core$IFn$_invoke$arity$1(db),term], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"search-index","search-index",1817399128),(function (p__28865){
var vec__28866 = p__28865;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28866,(0),null);
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28866,(1),null);
var match = idx.search(term);
var ref_and_pos = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__28863_SHARP_){
return p1__28863_SHARP_.ref;
}),(function (p1__28864_SHARP_){
return nia.events.search.goog$module$goog$object.getValueByKeys(p1__28864_SHARP_,"matchData","metadata",clojure.string.lower_case(term),"body","position",(0));
}));
if(cljs.core.seq(match)){
var refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ref_and_pos,match);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","all-matches","search/all-matches",-1395849957),refs], null));
} else {
return null;
}
}));
nia.events.search.ref__GT_keyword = (function nia$events$search$ref__GT_keyword(ref){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.rest(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ref),/-/)));
});
nia.events.search.get_lunr_matches = (function nia$events$search$get_lunr_matches(db,p__28869){
var vec__28870 = p__28869;
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28870,(0),null);
var texts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function nia$events$search$get_lunr_matches_$_iter__28873(s__28874){
return (new cljs.core.LazySeq(null,(function (){
var s__28874__$1 = s__28874;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28874__$1);
if(temp__5804__auto__){
var s__28874__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28874__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28874__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28876 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28875 = (0);
while(true){
if((i__28875 < size__5522__auto__)){
var ref = cljs.core._nth(c__5521__auto__,i__28875);
var vec__28877 = cljs.core.second(ref);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(1),null);
var text = nia.events.search.ref__GT_keyword(ref);
cljs.core.chunk_append(b__28876,(function (){var iter__5523__auto__ = ((function (i__28875,vec__28877,pos,len,text,ref,c__5521__auto__,size__5522__auto__,b__28876,s__28874__$2,temp__5804__auto__,vec__28870,refs){
return (function nia$events$search$get_lunr_matches_$_iter__28873_$_iter__28880(s__28881){
return (new cljs.core.LazySeq(null,((function (i__28875,vec__28877,pos,len,text,ref,c__5521__auto__,size__5522__auto__,b__28876,s__28874__$2,temp__5804__auto__,vec__28870,refs){
return (function (){
var s__28881__$1 = s__28881;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__28881__$1);
if(temp__5804__auto____$1){
var s__28881__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28881__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__28881__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__28883 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__28882 = (0);
while(true){
if((i__28882 < size__5522__auto____$1)){
var i = cljs.core._nth(c__5521__auto____$1,i__28882);
var obj = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cantos","footnotes","cantos/footnotes",-339509429),i,text], null));
if((!((obj == null)))){
cljs.core.chunk_append(b__28883,(function (){var G__28884 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),obj.body], null);
var G__28884__$1 = (((!((pos == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28884,new cljs.core.Keyword(null,"pos","pos",-864607220),pos):G__28884);
if((!((len == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28884__$1,new cljs.core.Keyword(null,"len","len",1423657078),len);
} else {
return G__28884__$1;
}
})());

var G__28940 = (i__28882 + (1));
i__28882 = G__28940;
continue;
} else {
var G__28941 = (i__28882 + (1));
i__28882 = G__28941;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28883),nia$events$search$get_lunr_matches_$_iter__28873_$_iter__28880(cljs.core.chunk_rest(s__28881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28883),null);
}
} else {
var i = cljs.core.first(s__28881__$2);
var obj = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cantos","footnotes","cantos/footnotes",-339509429),i,text], null));
if((!((obj == null)))){
return cljs.core.cons((function (){var G__28885 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),obj.body], null);
var G__28885__$1 = (((!((pos == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28885,new cljs.core.Keyword(null,"pos","pos",-864607220),pos):G__28885);
if((!((len == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28885__$1,new cljs.core.Keyword(null,"len","len",1423657078),len);
} else {
return G__28885__$1;
}
})(),nia$events$search$get_lunr_matches_$_iter__28873_$_iter__28880(cljs.core.rest(s__28881__$2)));
} else {
var G__28942 = cljs.core.rest(s__28881__$2);
s__28881__$1 = G__28942;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__28875,vec__28877,pos,len,text,ref,c__5521__auto__,size__5522__auto__,b__28876,s__28874__$2,temp__5804__auto__,vec__28870,refs))
,null,null));
});})(i__28875,vec__28877,pos,len,text,ref,c__5521__auto__,size__5522__auto__,b__28876,s__28874__$2,temp__5804__auto__,vec__28870,refs))
;
return iter__5523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c1","c1",1132530803),new cljs.core.Keyword(null,"c2","c2",-1561880371),new cljs.core.Keyword(null,"c4","c4",1028045610)], null));
})());

var G__28943 = (i__28875 + (1));
i__28875 = G__28943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28876),nia$events$search$get_lunr_matches_$_iter__28873(cljs.core.chunk_rest(s__28874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28876),null);
}
} else {
var ref = cljs.core.first(s__28874__$2);
var vec__28886 = cljs.core.second(ref);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28886,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28886,(1),null);
var text = nia.events.search.ref__GT_keyword(ref);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (vec__28886,pos,len,text,ref,s__28874__$2,temp__5804__auto__,vec__28870,refs){
return (function nia$events$search$get_lunr_matches_$_iter__28873_$_iter__28889(s__28890){
return (new cljs.core.LazySeq(null,(function (){
var s__28890__$1 = s__28890;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__28890__$1);
if(temp__5804__auto____$1){
var s__28890__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28890__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28890__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28892 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28891 = (0);
while(true){
if((i__28891 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__28891);
var obj = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cantos","footnotes","cantos/footnotes",-339509429),i,text], null));
if((!((obj == null)))){
cljs.core.chunk_append(b__28892,(function (){var G__28893 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),obj.body], null);
var G__28893__$1 = (((!((pos == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28893,new cljs.core.Keyword(null,"pos","pos",-864607220),pos):G__28893);
if((!((len == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28893__$1,new cljs.core.Keyword(null,"len","len",1423657078),len);
} else {
return G__28893__$1;
}
})());

var G__28944 = (i__28891 + (1));
i__28891 = G__28944;
continue;
} else {
var G__28945 = (i__28891 + (1));
i__28891 = G__28945;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28892),nia$events$search$get_lunr_matches_$_iter__28873_$_iter__28889(cljs.core.chunk_rest(s__28890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28892),null);
}
} else {
var i = cljs.core.first(s__28890__$2);
var obj = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cantos","footnotes","cantos/footnotes",-339509429),i,text], null));
if((!((obj == null)))){
return cljs.core.cons((function (){var G__28894 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),obj.body], null);
var G__28894__$1 = (((!((pos == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28894,new cljs.core.Keyword(null,"pos","pos",-864607220),pos):G__28894);
if((!((len == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28894__$1,new cljs.core.Keyword(null,"len","len",1423657078),len);
} else {
return G__28894__$1;
}
})(),nia$events$search$get_lunr_matches_$_iter__28873_$_iter__28889(cljs.core.rest(s__28890__$2)));
} else {
var G__28946 = cljs.core.rest(s__28890__$2);
s__28890__$1 = G__28946;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__28886,pos,len,text,ref,s__28874__$2,temp__5804__auto__,vec__28870,refs))
;
return iter__5523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c1","c1",1132530803),new cljs.core.Keyword(null,"c2","c2",-1561880371),new cljs.core.Keyword(null,"c4","c4",1028045610)], null));
})(),nia$events$search$get_lunr_matches_$_iter__28873(cljs.core.rest(s__28874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(refs);
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("lunr","all-matches","lunr/all-matches",1864723070),texts);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("search","all-matches","search/all-matches",-1395849957),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,re_frame.core.debug,nia.config.app_db.check_db], null),nia.events.search.get_lunr_matches);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","current-best-match","search/current-best-match",-543161137),(function (db,p__28895){
var vec__28896 = p__28895;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28896,(0),null);
var vec__28899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28896,(1),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28899,(0),null);
var vec__28902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28899,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28902,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28902,(1),null);
var matching_footnote = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cantos","footnotes","cantos/footnotes",-339509429),(4),(cljs.core.parse_long(ref) - (1))], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("lunr","current-match","lunr/current-match",-554456210),(function (){var G__28905 = matching_footnote;
if((G__28905 == null)){
return null;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__28905,pos);
}
})());
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","clear-results","search/clear-results",457905531),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("lunr","current-match","lunr/current-match",-554456210));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("search","show-results","search/show-results",879725256),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("search","results-showing?","search/results-showing?",-2136910609),cljs.core.not);
}));

//# sourceMappingURL=nia.events.search.js.map
