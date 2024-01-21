import "./cljs_env.js";
import "./cljs.core.js";
import "./nia.views.cantos.one.thesis.js";
import "./nia.views.cantos.one.parens_one.js";
import "./nia.views.cantos.one.parens_two.js";
import "./nia.views.cantos.one.parens_three.js";
import "./nia.views.cantos.one.parens_four.js";
import "./nia.views.cantos.one.parens_five.js";
import "./nia.views.parens_scroll.js";
goog.provide('nia.views.cantos.one.parent');
nia.views.cantos.one.parent.parent = (function nia$views$cantos$one$parent$parent(which,depth){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.parens_scroll.parens_scroll,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__34177 = which;
switch (G__34177) {
case "thesis":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.one.thesis.thesis], null);

break;
case "one":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.one.parens_one.parens], null);

break;
case "two":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.one.parens_two.parens_two], null);

break;
case "three":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.one.parens_three.parens_three], null);

break;
case "four":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.one.parens_four.parens_four], null);

break;
case "five":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.one.parens_five.parens_five], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nia.views.cantos.one.thesis.thesis], null);

}
})(),new cljs.core.Keyword(null,"canto","canto",523212706),new cljs.core.Keyword("nia.routing.canto","one","nia.routing.canto/one",-531958821)], null)], null);
});

//# sourceMappingURL=nia.views.cantos.one.parent.js.map
