import "./cljs_env.js";
import "./cljs.core.js";
import "./fork.re_frame.js";
import "./re_com.core.js";
import "./re_frame.core.js";
goog.provide('nia.views.text_search');
nia.views.text_search.search_form = (function nia$views$text_search$search_form(p__35794){
var map__35795 = p__35794;
var map__35795__$1 = cljs.core.__destructure_map(map__35795);
var handle_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var handle_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264));
var handle_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917));
var submitting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,new cljs.core.Keyword(null,"submitting?","submitting?",1281507942));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.row.g-3.m-auto","form.row.g-3.m-auto",-1796754221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),handle_submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.lead.m-1","label.lead.m-1",1521728224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"text-search","text-search",466237643)], null),"Keyword search"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.focus-ring.py-1.px-2.text-decoration-none.border-rounded-2","input.form-control.focus-ring.py-1.px-2.text-decoration-none.border-rounded-2",1920924669),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text-search","text-search",466237643),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Shall I compare thee...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),handle_blur], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),submitting_QMARK_], null),"Search"], null)], null)], null);
});
nia.views.text_search.search_results = (function nia$views$text_search$search_results(){
var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","show-shortened","search/show-shortened",1604861032)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function nia$views$text_search$search_results_$_iter__35796(s__35797){
return (new cljs.core.LazySeq(null,(function (){
var s__35797__$1 = s__35797;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35797__$1);
if(temp__5804__auto__){
var s__35797__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35797__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35797__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35799 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35798 = (0);
while(true){
if((i__35798 < size__5522__auto__)){
var result = cljs.core._nth(c__5521__auto__,i__35798);
cljs.core.chunk_append(b__35799,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,result], null));

var G__35800 = (i__35798 + (1));
i__35798 = G__35800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35799),nia$views$text_search$search_results_$_iter__35796(cljs.core.chunk_rest(s__35797__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35799),null);
}
} else {
var result = cljs.core.first(s__35797__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,result], null),nia$views$text_search$search_results_$_iter__35796(cljs.core.rest(s__35797__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(results);
})())], null);
});
nia.views.text_search.text_search = (function nia$views$text_search$text_search(){
var modal_showing_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","results-showing?","search/results-showing?",-2136910609)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ms-auto.d-flex.align-self-center","div.ms-auto.d-flex.align-self-center",-1676233474),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.re_frame.form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null),new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),true,new cljs.core.Keyword(null,"clean-on-unmount?","clean-on-unmount?",-1144411068),true,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","submit-input","search/submit-input",-1763800997),e], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","show-results","search/show-results",879725256)], null));
})], null),nia.views.text_search.search_form], null),(cljs.core.truth_(modal_showing_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","clear-results","search/clear-results",457905531)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","show-results","search/show-results",879725256)], null));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.text_search.search_results], null)], null):null)], null);
});

//# sourceMappingURL=nia.views.text_search.js.map
