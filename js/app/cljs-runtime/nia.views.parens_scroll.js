import "./cljs_env.js";
import "./cljs.core.js";
import "./re_com.core.js";
import "./re_frame.core.js";
goog.provide('nia.views.parens_scroll');
nia.views.parens_scroll.colors = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"muted","muted",1275109029),(1),new cljs.core.Keyword(null,"danger","danger",-624338030),(2),new cljs.core.Keyword(null,"warning","warning",-1685650671),(3),new cljs.core.Keyword(null,"info","info",-317069002),(4),new cljs.core.Keyword(null,"success","success",1890645906),(5),new cljs.core.Keyword(null,"primary","primary",817773892)], null);
nia.views.parens_scroll.parens_scroll = (function nia$views$parens_scroll$parens_scroll(p__34160){
var map__34161 = p__34160;
var map__34161__$1 = cljs.core.__destructure_map(map__34161);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var canto = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34161__$1,new cljs.core.Keyword(null,"canto","canto",523212706));
var depth = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("poem","parens-depth","poem/parens-depth",-1934963187)], null)));
var parens = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"thesis","thesis",-438481408),(1),new cljs.core.Keyword(null,"one","one",935007904),(2),new cljs.core.Keyword(null,"two","two",627606869),(3),new cljs.core.Keyword(null,"three","three",-1651831795),(4),new cljs.core.Keyword(null,"four","four",1338555054),(5),new cljs.core.Keyword(null,"five","five",1430677197)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"margin","margin",-995903681),"25px 0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"nia/views/parens_scroll.cljs",new cljs.core.Keyword(null,"line","line",212345235),19], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((depth >= (1))){
var new_depth = (depth - (1));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("poem","parens-routing","poem/parens-routing",-2107725194),canto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parens,new_depth)], null),new_depth], null));
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 25px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function nia$views$parens_scroll$parens_scroll_$_iter__34162(s__34163){
return (new cljs.core.LazySeq(null,(function (){
var s__34163__$1 = s__34163;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__34163__$1);
if(temp__5804__auto__){
var s__34163__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34163__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__34163__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__34165 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__34164 = (0);
while(true){
if((i__34164 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__34164);
var classname = (((i > depth))?"text-muted ":"");
cljs.core.chunk_append(b__34165,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),"(",new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__34166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nia.views.parens_scroll.colors,i);
var G__34166__$1 = (((G__34166 == null))?null:cljs.core.name(G__34166));
if((G__34166__$1 == null)){
return null;
} else {
return [classname,"text-",G__34166__$1].join('');
}
})()], null));

var G__34174 = (i__34164 + (1));
i__34164 = G__34174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34165),nia$views$parens_scroll$parens_scroll_$_iter__34162(cljs.core.chunk_rest(s__34163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34165),null);
}
} else {
var i = cljs.core.first(s__34163__$2);
var classname = (((i > depth))?"text-muted ":"");
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),"(",new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__34167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nia.views.parens_scroll.colors,i);
var G__34167__$1 = (((G__34167 == null))?null:cljs.core.name(G__34167));
if((G__34167__$1 == null)){
return null;
} else {
return [classname,"text-",G__34167__$1].join('');
}
})()], null),nia$views$parens_scroll$parens_scroll_$_iter__34162(cljs.core.rest(s__34163__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(6))));
})())], null)], null),children,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"nia/views/parens_scroll.cljs",new cljs.core.Keyword(null,"line","line",212345235),40], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(((((0) <= depth)) && ((depth <= (4))))){
var new_depth = (depth + (1));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("poem","parens-routing","poem/parens-routing",-2107725194),canto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parens,new_depth)], null),new_depth], null));
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 25px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function nia$views$parens_scroll$parens_scroll_$_iter__34168(s__34169){
return (new cljs.core.LazySeq(null,(function (){
var s__34169__$1 = s__34169;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__34169__$1);
if(temp__5804__auto__){
var s__34169__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34169__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__34169__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__34171 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__34170 = (0);
while(true){
if((i__34170 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__34170);
var classname = (((i > depth))?"text-muted ":"");
cljs.core.chunk_append(b__34171,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),")",new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__34172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nia.views.parens_scroll.colors,i);
var G__34172__$1 = (((G__34172 == null))?null:cljs.core.name(G__34172));
if((G__34172__$1 == null)){
return null;
} else {
return [classname,"text-",G__34172__$1].join('');
}
})()], null));

var G__34181 = (i__34170 + (1));
i__34170 = G__34181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34171),nia$views$parens_scroll$parens_scroll_$_iter__34168(cljs.core.chunk_rest(s__34169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34171),null);
}
} else {
var i = cljs.core.first(s__34169__$2);
var classname = (((i > depth))?"text-muted ":"");
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),")",new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__34173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nia.views.parens_scroll.colors,i);
var G__34173__$1 = (((G__34173 == null))?null:cljs.core.name(G__34173));
if((G__34173__$1 == null)){
return null;
} else {
return [classname,"text-",G__34173__$1].join('');
}
})()], null),nia$views$parens_scroll$parens_scroll_$_iter__34168(cljs.core.rest(s__34169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(6)));
})())], null)], null)], null)], null);
});

//# sourceMappingURL=nia.views.parens_scroll.js.map
