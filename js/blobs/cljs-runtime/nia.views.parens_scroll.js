import "./cljs_env.js";
import "./cljs.core.js";
import "./re_com.core.js";
import "./re_frame.core.js";
goog.provide('nia.views.parens_scroll');
nia.views.parens_scroll.colors = new cljs.core.PersistentArrayMap(null, 5, [(1),new cljs.core.Keyword(null,"danger","danger",-624338030),(2),new cljs.core.Keyword(null,"warning","warning",-1685650671),(3),new cljs.core.Keyword(null,"info","info",-317069002),(4),new cljs.core.Keyword(null,"success","success",1890645906),(5),new cljs.core.Keyword(null,"primary","primary",817773892)], null);
nia.views.parens_scroll.parens_scroll = (function nia$views$parens_scroll$parens_scroll(p__37969){
var map__37970 = p__37969;
var map__37970__$1 = cljs.core.__destructure_map(map__37970);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37970__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var canto = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37970__$1,new cljs.core.Keyword(null,"canto","canto",523212706));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"margin","margin",-995903681),"25px 0px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"nia/views/parens_scroll.cljs",new cljs.core.Keyword(null,"line","line",212345235),16], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((cljs.core.deref(depth) >= (1))){
var new_depth = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(depth,cljs.core.dec);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","parens-click","routing/parens-click",1807476915),canto,new_depth], null));
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 25px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function nia$views$parens_scroll$parens_scroll_$_iter__37973(s__37974){
return (new cljs.core.LazySeq(null,(function (){
var s__37974__$1 = s__37974;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37974__$1);
if(temp__5804__auto__){
var s__37974__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37974__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37974__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37976 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37975 = (0);
while(true){
if((i__37975 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__37975);
var classname = (((i > cljs.core.deref(depth)))?"text-muted ":"");
cljs.core.chunk_append(b__37976,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),"(",new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__37979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nia.views.parens_scroll.colors,i);
var G__37979__$1 = (((G__37979 == null))?null:cljs.core.name(G__37979));
if((G__37979__$1 == null)){
return null;
} else {
return [classname,"text-",G__37979__$1].join('');
}
})()], null));

var G__37987 = (i__37975 + (1));
i__37975 = G__37987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37976),nia$views$parens_scroll$parens_scroll_$_iter__37973(cljs.core.chunk_rest(s__37974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37976),null);
}
} else {
var i = cljs.core.first(s__37974__$2);
var classname = (((i > cljs.core.deref(depth)))?"text-muted ":"");
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),"(",new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__37980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nia.views.parens_scroll.colors,i);
var G__37980__$1 = (((G__37980 == null))?null:cljs.core.name(G__37980));
if((G__37980__$1 == null)){
return null;
} else {
return [classname,"text-",G__37980__$1].join('');
}
})()], null),nia$views$parens_scroll$parens_scroll_$_iter__37973(cljs.core.rest(s__37974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(6))));
})())], null)], null),children,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"nia/views/parens_scroll.cljs",new cljs.core.Keyword(null,"line","line",212345235),37], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(((((1) <= cljs.core.deref(depth))) && ((cljs.core.deref(depth) <= (4))))){
var new_depth = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(depth,cljs.core.inc);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","parens-click","routing/parens-click",1807476915),canto,new_depth], null));
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 25px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function nia$views$parens_scroll$parens_scroll_$_iter__37981(s__37982){
return (new cljs.core.LazySeq(null,(function (){
var s__37982__$1 = s__37982;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37982__$1);
if(temp__5804__auto__){
var s__37982__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37982__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37982__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37984 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37983 = (0);
while(true){
if((i__37983 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__37983);
var classname = (((i > cljs.core.deref(depth)))?"text-muted ":"");
cljs.core.chunk_append(b__37984,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),")",new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__37985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nia.views.parens_scroll.colors,i);
var G__37985__$1 = (((G__37985 == null))?null:cljs.core.name(G__37985));
if((G__37985__$1 == null)){
return null;
} else {
return [classname,"text-",G__37985__$1].join('');
}
})()], null));

var G__37988 = (i__37983 + (1));
i__37983 = G__37988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37984),nia$views$parens_scroll$parens_scroll_$_iter__37981(cljs.core.chunk_rest(s__37982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37984),null);
}
} else {
var i = cljs.core.first(s__37982__$2);
var classname = (((i > cljs.core.deref(depth)))?"text-muted ":"");
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),")",new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__37986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nia.views.parens_scroll.colors,i);
var G__37986__$1 = (((G__37986 == null))?null:cljs.core.name(G__37986));
if((G__37986__$1 == null)){
return null;
} else {
return [classname,"text-",G__37986__$1].join('');
}
})()], null),nia$views$parens_scroll$parens_scroll_$_iter__37981(cljs.core.rest(s__37982__$2)));
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
