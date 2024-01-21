import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__37819,match){
var map__37820 = p__37819;
var map__37820__$1 = cljs.core.__destructure_map(map__37820);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37820__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37820__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37820__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__5043__auto__ = identity;
if(cljs.core.truth_(and__5043__auto__)){
return parameters;
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__37821(s__37822){
return (new cljs.core.LazySeq(null,(function (){
var s__37822__$1 = s__37822;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37822__$1);
if(temp__5804__auto__){
var s__37822__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37822__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37822__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37824 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37823 = (0);
while(true){
if((i__37823 < size__5522__auto__)){
var vec__37825 = cljs.core._nth(c__5521__auto__,i__37823);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37825,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37825,(1),null);
cljs.core.chunk_append(b__37824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__37870 = (i__37823 + (1));
i__37823 = G__37870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37824),reitit$frontend$controllers$get_identity_$_iter__37821(cljs.core.chunk_rest(s__37822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37824),null);
}
} else {
var vec__37828 = cljs.core.first(s__37822__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37828,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37828,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__37821(cljs.core.rest(s__37822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var G__37837 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37837) : f.call(null,G__37837));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__37846_37872 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__37847_37873 = null;
var count__37848_37874 = (0);
var i__37849_37875 = (0);
while(true){
if((i__37849_37875 < count__37848_37874)){
var controller_37876 = chunk__37847_37873.cljs$core$IIndexed$_nth$arity$2(null,i__37849_37875);
reitit.frontend.controllers.apply_controller(controller_37876,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__37877 = seq__37846_37872;
var G__37878 = chunk__37847_37873;
var G__37879 = count__37848_37874;
var G__37880 = (i__37849_37875 + (1));
seq__37846_37872 = G__37877;
chunk__37847_37873 = G__37878;
count__37848_37874 = G__37879;
i__37849_37875 = G__37880;
continue;
} else {
var temp__5804__auto___37881 = cljs.core.seq(seq__37846_37872);
if(temp__5804__auto___37881){
var seq__37846_37882__$1 = temp__5804__auto___37881;
if(cljs.core.chunked_seq_QMARK_(seq__37846_37882__$1)){
var c__5568__auto___37883 = cljs.core.chunk_first(seq__37846_37882__$1);
var G__37884 = cljs.core.chunk_rest(seq__37846_37882__$1);
var G__37885 = c__5568__auto___37883;
var G__37886 = cljs.core.count(c__5568__auto___37883);
var G__37887 = (0);
seq__37846_37872 = G__37884;
chunk__37847_37873 = G__37885;
count__37848_37874 = G__37886;
i__37849_37875 = G__37887;
continue;
} else {
var controller_37888 = cljs.core.first(seq__37846_37882__$1);
reitit.frontend.controllers.apply_controller(controller_37888,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__37889 = cljs.core.next(seq__37846_37882__$1);
var G__37890 = null;
var G__37891 = (0);
var G__37892 = (0);
seq__37846_37872 = G__37889;
chunk__37847_37873 = G__37890;
count__37848_37874 = G__37891;
i__37849_37875 = G__37892;
continue;
}
} else {
}
}
break;
}

var seq__37858_37893 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__37859_37894 = null;
var count__37860_37895 = (0);
var i__37861_37896 = (0);
while(true){
if((i__37861_37896 < count__37860_37895)){
var controller_37897 = chunk__37859_37894.cljs$core$IIndexed$_nth$arity$2(null,i__37861_37896);
reitit.frontend.controllers.apply_controller(controller_37897,new cljs.core.Keyword(null,"start","start",-355208981));


var G__37898 = seq__37858_37893;
var G__37899 = chunk__37859_37894;
var G__37900 = count__37860_37895;
var G__37901 = (i__37861_37896 + (1));
seq__37858_37893 = G__37898;
chunk__37859_37894 = G__37899;
count__37860_37895 = G__37900;
i__37861_37896 = G__37901;
continue;
} else {
var temp__5804__auto___37902 = cljs.core.seq(seq__37858_37893);
if(temp__5804__auto___37902){
var seq__37858_37903__$1 = temp__5804__auto___37902;
if(cljs.core.chunked_seq_QMARK_(seq__37858_37903__$1)){
var c__5568__auto___37904 = cljs.core.chunk_first(seq__37858_37903__$1);
var G__37905 = cljs.core.chunk_rest(seq__37858_37903__$1);
var G__37906 = c__5568__auto___37904;
var G__37907 = cljs.core.count(c__5568__auto___37904);
var G__37908 = (0);
seq__37858_37893 = G__37905;
chunk__37859_37894 = G__37906;
count__37860_37895 = G__37907;
i__37861_37896 = G__37908;
continue;
} else {
var controller_37909 = cljs.core.first(seq__37858_37903__$1);
reitit.frontend.controllers.apply_controller(controller_37909,new cljs.core.Keyword(null,"start","start",-355208981));


var G__37910 = cljs.core.next(seq__37858_37903__$1);
var G__37911 = null;
var G__37912 = (0);
var G__37913 = (0);
seq__37858_37893 = G__37910;
chunk__37859_37894 = G__37911;
count__37860_37895 = G__37912;
i__37861_37896 = G__37913;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
