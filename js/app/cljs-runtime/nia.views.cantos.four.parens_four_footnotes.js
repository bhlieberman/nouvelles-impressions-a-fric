import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./re_com.core.js";
import "./re_frame.core.js";
goog.provide('nia.views.cantos.four.parens_four_footnotes');
nia.views.cantos.four.parens_four_footnotes.modal = (function nia$views$cantos$four$parens_four_footnotes$modal(props){
var footnote = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("poem","display-current-footnote","poem/display-current-footnote",491985497)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"showing?","showing?",2094921488).cljs$core$IFn$_invoke$arity$1(props),false);
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function nia$views$cantos$four$parens_four_footnotes$modal_$_iter__29928(s__29929){
return (new cljs.core.LazySeq(null,(function (){
var s__29929__$1 = s__29929;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29929__$1);
if(temp__5804__auto__){
var s__29929__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29929__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29929__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29931 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29930 = (0);
while(true){
if((i__29930 < size__5522__auto__)){
var line = cljs.core._nth(c__5521__auto__,i__29930);
cljs.core.chunk_append(b__29931,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,line], null));

var G__29932 = (i__29930 + (1));
i__29930 = G__29932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29931),nia$views$cantos$four$parens_four_footnotes$modal_$_iter__29928(cljs.core.chunk_rest(s__29929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29931),null);
}
} else {
var line = cljs.core.first(s__29929__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,line], null),nia$views$cantos$four$parens_four_footnotes$modal_$_iter__29928(cljs.core.rest(s__29929__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(clojure.string.split_lines(footnote));
})())], null)], null);
});

//# sourceMappingURL=nia.views.cantos.four.parens_four_footnotes.js.map
