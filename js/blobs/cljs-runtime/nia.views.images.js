import "./cljs_env.js";
import "./cljs.core.js";
import "./re_frame.core.js";
goog.provide('nia.views.images');
nia.views.images.show_image = (function nia$views$images$show_image(){
var url = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","url","image/url",446041905)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),url], null)], null);
});

//# sourceMappingURL=nia.views.images.js.map
