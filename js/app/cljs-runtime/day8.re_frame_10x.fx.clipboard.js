import "./cljs_env.js";
import "./cljs.core.js";
import "./day8.re_frame_10x.fx.window.js";
goog.provide('day8.re_frame_10x.fx.clipboard');
day8.re_frame_10x.fx.clipboard.copy_BANG_ = (function day8$re_frame_10x$fx$clipboard$copy_BANG_(text){
var doc = (function (){var or__5045__auto__ = (function (){var G__24455 = cljs.core.deref(day8.re_frame_10x.fx.window.popout_window);
if((G__24455 == null)){
return null;
} else {
return G__24455.document;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return document;
}
})();
var el = doc.createElement("textarea");
(el.value = text);

(el.style.position = "absolute");

(el.style.left = "-9999px");

doc.body.appendChild(el);

el.select();

doc.execCommand("copy");

return doc.body.removeChild(el);
});

//# sourceMappingURL=day8.re_frame_10x.fx.clipboard.js.map
