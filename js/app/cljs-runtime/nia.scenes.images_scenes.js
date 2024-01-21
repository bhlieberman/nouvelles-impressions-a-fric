goog.provide('nia.scenes.images_scenes');
var module$node_modules$react_bootstrap$cjs$Container=shadow.js.require("module$node_modules$react_bootstrap$cjs$Container", {});
var module$node_modules$react_bootstrap$cjs$Carousel=shadow.js.require("module$node_modules$react_bootstrap$cjs$Carousel", {});
nia.scenes.images_scenes.show_images = (function nia$scenes$images_scenes$show_images(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$Container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fluid","fluid",-1823657759),true], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$Carousel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"600px"], null)], null)], null),(function (){var iter__5523__auto__ = (function nia$scenes$images_scenes$show_images_$_iter__32095(s__32096){
return (new cljs.core.LazySeq(null,(function (){
var s__32096__$1 = s__32096;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32096__$1);
if(temp__5804__auto__){
var s__32096__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32096__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32096__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32098 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32097 = (0);
while(true){
if((i__32097 < size__5522__auto__)){
var url = cljs.core._nth(c__5521__auto__,i__32097);
cljs.core.chunk_append(b__32098,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$Carousel.Item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_bootstrap$Image$default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"fluid","fluid",-1823657759),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$Carousel.Caption,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"An image from the original publication of Nouvelles Impressions d'Afrique"], null)], null)], null));

var G__32131 = (i__32097 + (1));
i__32097 = G__32131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32098),nia$scenes$images_scenes$show_images_$_iter__32095(cljs.core.chunk_rest(s__32096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32098),null);
}
} else {
var url = cljs.core.first(s__32096__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$Carousel.Item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_bootstrap$Image$default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"fluid","fluid",-1823657759),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$Carousel.Caption,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"An image from the original publication of Nouvelles Impressions d'Afrique"], null)], null)], null),nia$scenes$images_scenes$show_images_$_iter__32095(cljs.core.rest(s__32096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((10),"https://placehold.co/600x400/000000/FFF"));
})())], null);
});
portfolio.data.register_scene_BANG_(portfolio.reagent_18.create_scene(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("nia.scenes.images-scenes","imgs","nia.scenes.images-scenes/imgs",1897094994),new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__32132__delegate = function (___28748__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.scenes.images_scenes.show_images], null)], null);
};
var G__32132 = function (var_args){
var ___28748__auto__ = null;
if (arguments.length > 0) {
var G__32133__i = 0, G__32133__a = new Array(arguments.length -  0);
while (G__32133__i < G__32133__a.length) {G__32133__a[G__32133__i] = arguments[G__32133__i + 0]; ++G__32133__i;}
  ___28748__auto__ = new cljs.core.IndexedSeq(G__32133__a,0,null);
} 
return G__32132__delegate.call(this,___28748__auto__);};
G__32132.cljs$lang$maxFixedArity = 0;
G__32132.cljs$lang$applyTo = (function (arglist__32134){
var ___28748__auto__ = cljs.core.seq(arglist__32134);
return G__32132__delegate(___28748__auto__);
});
G__32132.cljs$core$IFn$_invoke$arity$variadic = G__32132__delegate;
return G__32132;
})()
,new cljs.core.Keyword(null,"code","code",1586293142),"[:div [show-images]]"], null)));

//# sourceMappingURL=nia.scenes.images_scenes.js.map
