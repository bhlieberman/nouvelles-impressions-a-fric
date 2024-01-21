import "./cljs_env.js";
import "./cljs.core.js";
import "./reagent.core.js";
import "./re_com.core.js";
import "./re_frame.core.js";
import "./module$node_modules$react_bootstrap$cjs$Container.js";
import "./module$node_modules$react_bootstrap$cjs$Carousel.js";
import "./module$node_modules$react_bootstrap$cjs$CarouselCaption.js";
import "./module$node_modules$react_bootstrap$cjs$CarouselItem.js";
import "./shadow.js.shim.module$react_bootstrap$Image$default.js";
goog.provide('nia.views.images');
var module$node_modules$react_bootstrap$cjs$Container=shadow.js.require("module$node_modules$react_bootstrap$cjs$Container", {});
var module$node_modules$react_bootstrap$cjs$Carousel=shadow.js.require("module$node_modules$react_bootstrap$cjs$Carousel", {});
var module$node_modules$react_bootstrap$cjs$CarouselCaption=shadow.js.require("module$node_modules$react_bootstrap$cjs$CarouselCaption", {});
var module$node_modules$react_bootstrap$cjs$CarouselItem=shadow.js.require("module$node_modules$react_bootstrap$cjs$CarouselItem", {});
nia.views.images.show_image = (function nia$views$images$show_image(){
var urls = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("images","names","images/names",1121223974)], null)));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$Container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fluid","fluid",-1823657759),true], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$Carousel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"bisque"], null)], null)], null),(function (){var iter__5523__auto__ = (function nia$views$images$show_image_$_iter__26146(s__26147){
return (new cljs.core.LazySeq(null,(function (){
var s__26147__$1 = s__26147;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26147__$1);
if(temp__5804__auto__){
var s__26147__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26147__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26147__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26149 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26148 = (0);
while(true){
if((i__26148 < size__5522__auto__)){
var url = cljs.core._nth(c__5521__auto__,i__26148);
cljs.core.chunk_append(b__26149,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$CarouselItem,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_bootstrap$Image$default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"fluid","fluid",-1823657759),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$CarouselCaption,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),"An image from the original publication of Nouvelles Impressions d'Afrique"], null)], null)], null));

var G__26155 = (i__26148 + (1));
i__26148 = G__26155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26149),nia$views$images$show_image_$_iter__26146(cljs.core.chunk_rest(s__26147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26149),null);
}
} else {
var url = cljs.core.first(s__26147__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$CarouselItem,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_bootstrap$Image$default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"fluid","fluid",-1823657759),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_bootstrap$cjs$CarouselCaption,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),"An image from the original publication of Nouvelles Impressions d'Afrique"], null)], null)], null),nia$views$images$show_image_$_iter__26146(cljs.core.rest(s__26147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(urls);
})())], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("images","revoke-obj-urls","images/revoke-obj-urls",230860855)], null));
})], null));
});

//# sourceMappingURL=nia.views.images.js.map
