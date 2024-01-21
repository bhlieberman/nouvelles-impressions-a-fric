import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.dom.dom.js";
import "./nia.subs.js";
import "./nia.views.router.js";
import "./reagent.core.js";
import "./reagent.dom.client.js";
goog.provide('nia.app');
if((typeof nia !== 'undefined') && (typeof nia.app !== 'undefined') && (typeof nia.app.root !== 'undefined')){
} else {
nia.app.root = reagent.dom.client.create_root(goog.dom.getElement("root"));
}
nia.app.render_BANG_ = (function nia$app$render_BANG_(){
return nia.app.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return nia.views.router.router;
})], null)));
});
nia.app.init = (function nia$app$init(){
return nia.app.render_BANG_();
});

//# sourceMappingURL=nia.app.js.map
