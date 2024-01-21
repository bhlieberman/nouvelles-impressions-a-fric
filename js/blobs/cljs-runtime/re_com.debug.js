import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.object.object.js";
import "./cljs.reader.js";
import "./clojure.string.js";
import "./reagent.core.js";
import "./reagent.impl.component.js";
import "./re_com.config.js";
goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__36206){
var map__36208 = p__36206;
var map__36208__$1 = cljs.core.__destructure_map(map__36208);
var args = map__36208__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36208__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36208__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var user_ref_fn = temp__5804__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__36213 = src;
var map__36213__$1 = cljs.core.__destructure_map(map__36213);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36213__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36213__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__36218 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36218,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__36218;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__36222 = arguments.length;
switch (G__36222) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__36233_36421 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__36232_SHARP_,p2__36231_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__36231_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__36232_SHARP_ + (1)));
}),stack));
var chunk__36234_36422 = null;
var count__36235_36423 = (0);
var i__36236_36424 = (0);
while(true){
if((i__36236_36424 < count__36235_36423)){
var map__36254_36425 = chunk__36234_36422.cljs$core$IIndexed$_nth$arity$2(null,i__36236_36424);
var map__36254_36426__$1 = cljs.core.__destructure_map(map__36254_36425);
var i_36427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36254_36426__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_36428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36254_36426__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_36429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36254_36426__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_36430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36254_36426__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_36431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36254_36426__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_36429)){
if(cljs.core.truth_(src_36430)){
var vec__36255_36432 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_36430,/:/);
var file_36433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36255_36432,(0),null);
var line_36434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36255_36432,(1),null);
if(cljs.core.truth_(args_36431)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_36427),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_36429)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_36433),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36434),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_36431,el_36428);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_36427),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_36429)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_36433),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36434),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_36428);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_36427),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_36429)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_36431,el_36428);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_36427),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_36428);
}


var G__36447 = seq__36233_36421;
var G__36448 = chunk__36234_36422;
var G__36449 = count__36235_36423;
var G__36450 = (i__36236_36424 + (1));
seq__36233_36421 = G__36447;
chunk__36234_36422 = G__36448;
count__36235_36423 = G__36449;
i__36236_36424 = G__36450;
continue;
} else {
var temp__5804__auto___36451 = cljs.core.seq(seq__36233_36421);
if(temp__5804__auto___36451){
var seq__36233_36452__$1 = temp__5804__auto___36451;
if(cljs.core.chunked_seq_QMARK_(seq__36233_36452__$1)){
var c__5568__auto___36453 = cljs.core.chunk_first(seq__36233_36452__$1);
var G__36454 = cljs.core.chunk_rest(seq__36233_36452__$1);
var G__36455 = c__5568__auto___36453;
var G__36456 = cljs.core.count(c__5568__auto___36453);
var G__36457 = (0);
seq__36233_36421 = G__36454;
chunk__36234_36422 = G__36455;
count__36235_36423 = G__36456;
i__36236_36424 = G__36457;
continue;
} else {
var map__36264_36458 = cljs.core.first(seq__36233_36452__$1);
var map__36264_36459__$1 = cljs.core.__destructure_map(map__36264_36458);
var i_36460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264_36459__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_36461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264_36459__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_36462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264_36459__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_36463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264_36459__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_36464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264_36459__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_36462)){
if(cljs.core.truth_(src_36463)){
var vec__36265_36468 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_36463,/:/);
var file_36469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36265_36468,(0),null);
var line_36470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36265_36468,(1),null);
if(cljs.core.truth_(args_36464)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_36460),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_36462)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_36469),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36470),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_36464,el_36461);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_36460),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_36462)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_36469),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36470),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_36461);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_36460),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_36462)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_36464,el_36461);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_36460),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_36461);
}


var G__36474 = cljs.core.next(seq__36233_36452__$1);
var G__36475 = null;
var G__36476 = (0);
var G__36477 = (0);
seq__36233_36421 = G__36474;
chunk__36234_36422 = G__36475;
count__36235_36423 = G__36476;
i__36236_36424 = G__36477;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__36283 = cljs.core.seq(problems);
var chunk__36284 = null;
var count__36285 = (0);
var i__36286 = (0);
while(true){
if((i__36286 < count__36285)){
var map__36323 = chunk__36284.cljs$core$IIndexed$_nth$arity$2(null,i__36286);
var map__36323__$1 = cljs.core.__destructure_map(map__36323);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__36324_36478 = problem;
var G__36324_36479__$1 = (((G__36324_36478 instanceof cljs.core.Keyword))?G__36324_36478.fqn:null);
switch (G__36324_36479__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__36485 = seq__36283;
var G__36486 = chunk__36284;
var G__36487 = count__36285;
var G__36488 = (i__36286 + (1));
seq__36283 = G__36485;
chunk__36284 = G__36486;
count__36285 = G__36487;
i__36286 = G__36488;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36283);
if(temp__5804__auto__){
var seq__36283__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36283__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36283__$1);
var G__36493 = cljs.core.chunk_rest(seq__36283__$1);
var G__36494 = c__5568__auto__;
var G__36495 = cljs.core.count(c__5568__auto__);
var G__36496 = (0);
seq__36283 = G__36493;
chunk__36284 = G__36494;
count__36285 = G__36495;
i__36286 = G__36496;
continue;
} else {
var map__36330 = cljs.core.first(seq__36283__$1);
var map__36330__$1 = cljs.core.__destructure_map(map__36330);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__36333_36498 = problem;
var G__36333_36499__$1 = (((G__36333_36498 instanceof cljs.core.Keyword))?G__36333_36498.fqn:null);
switch (G__36333_36499__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__36501 = cljs.core.next(seq__36283__$1);
var G__36502 = null;
var G__36503 = (0);
var G__36504 = (0);
seq__36283 = G__36501;
chunk__36284 = G__36502;
count__36285 = G__36503;
i__36286 = G__36504;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__36340){
var map__36341 = p__36340;
var map__36341__$1 = cljs.core.__destructure_map(map__36341);
var src = map__36341__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36341__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36341__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36512 = arguments.length;
var i__5770__auto___36513 = (0);
while(true){
if((i__5770__auto___36513 < len__5769__auto___36512)){
args__5775__auto__.push((arguments[i__5770__auto___36513]));

var G__36514 = (i__5770__auto___36513 + (1));
i__5770__auto___36513 = G__36514;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__36360){
var map__36361 = p__36360;
var map__36361__$1 = cljs.core.__destructure_map(map__36361);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36361__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36361__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36361__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__36519__delegate = function (p__36374){
var map__36376 = p__36374;
var map__36376__$1 = cljs.core.__destructure_map(map__36376);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36376__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36376__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36376__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__36519 = function (var_args){
var p__36374 = null;
if (arguments.length > 0) {
var G__36521__i = 0, G__36521__a = new Array(arguments.length -  0);
while (G__36521__i < G__36521__a.length) {G__36521__a[G__36521__i] = arguments[G__36521__i + 0]; ++G__36521__i;}
  p__36374 = new cljs.core.IndexedSeq(G__36521__a,0,null);
} 
return G__36519__delegate.call(this,p__36374);};
G__36519.cljs$lang$maxFixedArity = 0;
G__36519.cljs$lang$applyTo = (function (arglist__36522){
var p__36374 = cljs.core.seq(arglist__36522);
return G__36519__delegate(p__36374);
});
G__36519.cljs$core$IFn$_invoke$arity$variadic = G__36519__delegate;
return G__36519;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq36351){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36351));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36524 = arguments.length;
var i__5770__auto___36525 = (0);
while(true){
if((i__5770__auto___36525 < len__5769__auto___36524)){
args__5775__auto__.push((arguments[i__5770__auto___36525]));

var G__36526 = (i__5770__auto___36525 + (1));
i__5770__auto___36525 = G__36526;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__36386){
var map__36387 = p__36386;
var map__36387__$1 = cljs.core.__destructure_map(map__36387);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36387__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36387__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__36530__delegate = function (p__36394){
var map__36396 = p__36394;
var map__36396__$1 = cljs.core.__destructure_map(map__36396);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36396__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36396__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__36530 = function (var_args){
var p__36394 = null;
if (arguments.length > 0) {
var G__36533__i = 0, G__36533__a = new Array(arguments.length -  0);
while (G__36533__i < G__36533__a.length) {G__36533__a[G__36533__i] = arguments[G__36533__i + 0]; ++G__36533__i;}
  p__36394 = new cljs.core.IndexedSeq(G__36533__a,0,null);
} 
return G__36530__delegate.call(this,p__36394);};
G__36530.cljs$lang$maxFixedArity = 0;
G__36530.cljs$lang$applyTo = (function (arglist__36534){
var p__36394 = cljs.core.seq(arglist__36534);
return G__36530__delegate(p__36394);
});
G__36530.cljs$core$IFn$_invoke$arity$variadic = G__36530__delegate;
return G__36530;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq36382){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36382));
}));


//# sourceMappingURL=re_com.debug.js.map
