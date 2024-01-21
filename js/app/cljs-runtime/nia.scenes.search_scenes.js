goog.provide('nia.scenes.search_scenes');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
portfolio.data.register_scene_BANG_(portfolio.reagent_18.create_scene(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("nia.scenes.search-scenes","search-scene","nia.scenes.search-scenes/search-scene",2123450646),new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__42810__delegate = function (args){
var value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid.d-flex.flex-column","div.container-fluid.d-flex.flex-column",1898286432),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.lead.m-1","label.lead.m-1",1521728224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"text-search","text-search",466237643)], null),"Keyword search"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.w-25.focus-ring.py-1.px-2.text-decoration-none.border-rounded-2","input.form-control.w-25.focus-ring.py-1.px-2.text-decoration-none.border-rounded-2",-88256500),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text-search","text-search",466237643),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Shall I compare thee...",new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.code,"Space")){
return console.log(cljs.core.deref(value));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var current = e.target.value;
return cljs.core.reset_BANG_(value,current);
})], null)], null)], null);
};
var G__42810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42815__i = 0, G__42815__a = new Array(arguments.length -  0);
while (G__42815__i < G__42815__a.length) {G__42815__a[G__42815__i] = arguments[G__42815__i + 0]; ++G__42815__i;}
  args = new cljs.core.IndexedSeq(G__42815__a,0,null);
} 
return G__42810__delegate.call(this,args);};
G__42810.cljs$lang$maxFixedArity = 0;
G__42810.cljs$lang$applyTo = (function (arglist__42816){
var args = cljs.core.seq(arglist__42816);
return G__42810__delegate(args);
});
G__42810.cljs$core$IFn$_invoke$arity$variadic = G__42810__delegate;
return G__42810;
})()
,new cljs.core.Keyword(null,"code","code",1586293142),"(let [value (r/atom nil)]\n [:div.container-fluid.d-flex.flex-column\n  [:label.lead.m-1 {:for :text-search} \"Keyword search\"]\n  [:input.form-control.w-25.focus-ring.py-1.px-2.text-decoration-none.border-rounded-2\n   {:type :search,\n    :id :text-search,\n    :placeholder \"Shall I compare thee...\",\n    :on-key-up\n    (fn [e] (when (= (.-code e) \"Space\") (js/console.log @value))),\n    :on-change\n    (fn\n     [e]\n     (let [current (.. e -target -value)] (reset! value current)))}]])"], null)));

//# sourceMappingURL=nia.scenes.search_scenes.js.map
