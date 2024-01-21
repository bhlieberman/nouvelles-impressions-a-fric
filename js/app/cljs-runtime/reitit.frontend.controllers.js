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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__49380,match){
var map__49382 = p__49380;
var map__49382__$1 = cljs.core.__destructure_map(map__49382);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49382__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49382__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49382__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__49386(s__49387){
return (new cljs.core.LazySeq(null,(function (){
var s__49387__$1 = s__49387;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49387__$1);
if(temp__5804__auto__){
var s__49387__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49387__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49387__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49389 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49388 = (0);
while(true){
if((i__49388 < size__5522__auto__)){
var vec__49396 = cljs.core._nth(c__5521__auto__,i__49388);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396,(1),null);
cljs.core.chunk_append(b__49389,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__49449 = (i__49388 + (1));
i__49388 = G__49449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49389),reitit$frontend$controllers$get_identity_$_iter__49386(cljs.core.chunk_rest(s__49387__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49389),null);
}
} else {
var vec__49404 = cljs.core.first(s__49387__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49404,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49404,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__49386(cljs.core.rest(s__49387__$2)));
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
var G__49410 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49410) : f.call(null,G__49410));
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
var seq__49424_49451 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__49425_49452 = null;
var count__49426_49453 = (0);
var i__49427_49454 = (0);
while(true){
if((i__49427_49454 < count__49426_49453)){
var controller_49456 = chunk__49425_49452.cljs$core$IIndexed$_nth$arity$2(null,i__49427_49454);
reitit.frontend.controllers.apply_controller(controller_49456,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__49457 = seq__49424_49451;
var G__49458 = chunk__49425_49452;
var G__49459 = count__49426_49453;
var G__49460 = (i__49427_49454 + (1));
seq__49424_49451 = G__49457;
chunk__49425_49452 = G__49458;
count__49426_49453 = G__49459;
i__49427_49454 = G__49460;
continue;
} else {
var temp__5804__auto___49461 = cljs.core.seq(seq__49424_49451);
if(temp__5804__auto___49461){
var seq__49424_49462__$1 = temp__5804__auto___49461;
if(cljs.core.chunked_seq_QMARK_(seq__49424_49462__$1)){
var c__5568__auto___49463 = cljs.core.chunk_first(seq__49424_49462__$1);
var G__49464 = cljs.core.chunk_rest(seq__49424_49462__$1);
var G__49465 = c__5568__auto___49463;
var G__49466 = cljs.core.count(c__5568__auto___49463);
var G__49467 = (0);
seq__49424_49451 = G__49464;
chunk__49425_49452 = G__49465;
count__49426_49453 = G__49466;
i__49427_49454 = G__49467;
continue;
} else {
var controller_49468 = cljs.core.first(seq__49424_49462__$1);
reitit.frontend.controllers.apply_controller(controller_49468,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__49469 = cljs.core.next(seq__49424_49462__$1);
var G__49470 = null;
var G__49471 = (0);
var G__49472 = (0);
seq__49424_49451 = G__49469;
chunk__49425_49452 = G__49470;
count__49426_49453 = G__49471;
i__49427_49454 = G__49472;
continue;
}
} else {
}
}
break;
}

var seq__49433_49473 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__49434_49474 = null;
var count__49435_49475 = (0);
var i__49436_49476 = (0);
while(true){
if((i__49436_49476 < count__49435_49475)){
var controller_49477 = chunk__49434_49474.cljs$core$IIndexed$_nth$arity$2(null,i__49436_49476);
reitit.frontend.controllers.apply_controller(controller_49477,new cljs.core.Keyword(null,"start","start",-355208981));


var G__49478 = seq__49433_49473;
var G__49479 = chunk__49434_49474;
var G__49480 = count__49435_49475;
var G__49481 = (i__49436_49476 + (1));
seq__49433_49473 = G__49478;
chunk__49434_49474 = G__49479;
count__49435_49475 = G__49480;
i__49436_49476 = G__49481;
continue;
} else {
var temp__5804__auto___49482 = cljs.core.seq(seq__49433_49473);
if(temp__5804__auto___49482){
var seq__49433_49483__$1 = temp__5804__auto___49482;
if(cljs.core.chunked_seq_QMARK_(seq__49433_49483__$1)){
var c__5568__auto___49484 = cljs.core.chunk_first(seq__49433_49483__$1);
var G__49486 = cljs.core.chunk_rest(seq__49433_49483__$1);
var G__49487 = c__5568__auto___49484;
var G__49488 = cljs.core.count(c__5568__auto___49484);
var G__49489 = (0);
seq__49433_49473 = G__49486;
chunk__49434_49474 = G__49487;
count__49435_49475 = G__49488;
i__49436_49476 = G__49489;
continue;
} else {
var controller_49490 = cljs.core.first(seq__49433_49483__$1);
reitit.frontend.controllers.apply_controller(controller_49490,new cljs.core.Keyword(null,"start","start",-355208981));


var G__49491 = cljs.core.next(seq__49433_49483__$1);
var G__49492 = null;
var G__49493 = (0);
var G__49494 = (0);
seq__49433_49473 = G__49491;
chunk__49434_49474 = G__49492;
count__49435_49475 = G__49493;
i__49436_49476 = G__49494;
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
