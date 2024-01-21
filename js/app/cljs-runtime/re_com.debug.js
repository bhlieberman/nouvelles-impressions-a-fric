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
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__50990){
var map__50991 = p__50990;
var map__50991__$1 = cljs.core.__destructure_map(map__50991);
var args = map__50991__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50991__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50991__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
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
var map__50993 = src;
var map__50993__$1 = cljs.core.__destructure_map(map__50993);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50993__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50993__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__50999 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50999,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__50999;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__51010 = arguments.length;
switch (G__51010) {
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

var seq__51032_51169 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__51023_SHARP_,p2__51022_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__51022_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__51023_SHARP_ + (1)));
}),stack));
var chunk__51033_51170 = null;
var count__51034_51171 = (0);
var i__51035_51172 = (0);
while(true){
if((i__51035_51172 < count__51034_51171)){
var map__51068_51173 = chunk__51033_51170.cljs$core$IIndexed$_nth$arity$2(null,i__51035_51172);
var map__51068_51174__$1 = cljs.core.__destructure_map(map__51068_51173);
var i_51175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51068_51174__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_51176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51068_51174__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_51177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51068_51174__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_51178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51068_51174__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_51179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51068_51174__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_51177)){
if(cljs.core.truth_(src_51178)){
var vec__51076_51180 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_51178,/:/);
var file_51181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076_51180,(0),null);
var line_51182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076_51180,(1),null);
if(cljs.core.truth_(args_51179)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51175),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51177)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_51181),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51182),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_51179,el_51176);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51175),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51177)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_51181),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51182),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_51176);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51175),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51177)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_51179,el_51176);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51175),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_51176);
}


var G__51186 = seq__51032_51169;
var G__51187 = chunk__51033_51170;
var G__51188 = count__51034_51171;
var G__51189 = (i__51035_51172 + (1));
seq__51032_51169 = G__51186;
chunk__51033_51170 = G__51187;
count__51034_51171 = G__51188;
i__51035_51172 = G__51189;
continue;
} else {
var temp__5804__auto___51190 = cljs.core.seq(seq__51032_51169);
if(temp__5804__auto___51190){
var seq__51032_51191__$1 = temp__5804__auto___51190;
if(cljs.core.chunked_seq_QMARK_(seq__51032_51191__$1)){
var c__5568__auto___51192 = cljs.core.chunk_first(seq__51032_51191__$1);
var G__51193 = cljs.core.chunk_rest(seq__51032_51191__$1);
var G__51194 = c__5568__auto___51192;
var G__51195 = cljs.core.count(c__5568__auto___51192);
var G__51196 = (0);
seq__51032_51169 = G__51193;
chunk__51033_51170 = G__51194;
count__51034_51171 = G__51195;
i__51035_51172 = G__51196;
continue;
} else {
var map__51086_51197 = cljs.core.first(seq__51032_51191__$1);
var map__51086_51198__$1 = cljs.core.__destructure_map(map__51086_51197);
var i_51199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51086_51198__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_51200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51086_51198__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_51201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51086_51198__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_51202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51086_51198__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_51203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51086_51198__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_51201)){
if(cljs.core.truth_(src_51202)){
var vec__51087_51206 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_51202,/:/);
var file_51207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51087_51206,(0),null);
var line_51208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51087_51206,(1),null);
if(cljs.core.truth_(args_51203)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51199),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51201)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_51207),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51208),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_51203,el_51200);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51199),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51201)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_51207),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51208),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_51200);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51199),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51201)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_51203,el_51200);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51199),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_51200);
}


var G__51210 = cljs.core.next(seq__51032_51191__$1);
var G__51211 = null;
var G__51212 = (0);
var G__51213 = (0);
seq__51032_51169 = G__51210;
chunk__51033_51170 = G__51211;
count__51034_51171 = G__51212;
i__51035_51172 = G__51213;
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
var seq__51097 = cljs.core.seq(problems);
var chunk__51098 = null;
var count__51099 = (0);
var i__51100 = (0);
while(true){
if((i__51100 < count__51099)){
var map__51114 = chunk__51098.cljs$core$IIndexed$_nth$arity$2(null,i__51100);
var map__51114__$1 = cljs.core.__destructure_map(map__51114);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51114__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51114__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51114__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51114__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51114__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__51115_51215 = problem;
var G__51115_51216__$1 = (((G__51115_51215 instanceof cljs.core.Keyword))?G__51115_51215.fqn:null);
switch (G__51115_51216__$1) {
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


var G__51221 = seq__51097;
var G__51222 = chunk__51098;
var G__51223 = count__51099;
var G__51224 = (i__51100 + (1));
seq__51097 = G__51221;
chunk__51098 = G__51222;
count__51099 = G__51223;
i__51100 = G__51224;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51097);
if(temp__5804__auto__){
var seq__51097__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51097__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51097__$1);
var G__51225 = cljs.core.chunk_rest(seq__51097__$1);
var G__51226 = c__5568__auto__;
var G__51227 = cljs.core.count(c__5568__auto__);
var G__51228 = (0);
seq__51097 = G__51225;
chunk__51098 = G__51226;
count__51099 = G__51227;
i__51100 = G__51228;
continue;
} else {
var map__51123 = cljs.core.first(seq__51097__$1);
var map__51123__$1 = cljs.core.__destructure_map(map__51123);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__51124_51229 = problem;
var G__51124_51230__$1 = (((G__51124_51229 instanceof cljs.core.Keyword))?G__51124_51229.fqn:null);
switch (G__51124_51230__$1) {
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


var G__51234 = cljs.core.next(seq__51097__$1);
var G__51235 = null;
var G__51236 = (0);
var G__51237 = (0);
seq__51097 = G__51234;
chunk__51098 = G__51235;
count__51099 = G__51236;
i__51100 = G__51237;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__51129){
var map__51130 = p__51129;
var map__51130__$1 = cljs.core.__destructure_map(map__51130);
var src = map__51130__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51130__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51130__$1,new cljs.core.Keyword(null,"line","line",212345235));
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
var len__5769__auto___51242 = arguments.length;
var i__5770__auto___51243 = (0);
while(true){
if((i__5770__auto___51243 < len__5769__auto___51242)){
args__5775__auto__.push((arguments[i__5770__auto___51243]));

var G__51244 = (i__5770__auto___51243 + (1));
i__5770__auto___51243 = G__51244;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__51141){
var map__51142 = p__51141;
var map__51142__$1 = cljs.core.__destructure_map(map__51142);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51142__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51142__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51142__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var G__51247__delegate = function (p__51145){
var map__51146 = p__51145;
var map__51146__$1 = cljs.core.__destructure_map(map__51146);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51146__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__51247 = function (var_args){
var p__51145 = null;
if (arguments.length > 0) {
var G__51248__i = 0, G__51248__a = new Array(arguments.length -  0);
while (G__51248__i < G__51248__a.length) {G__51248__a[G__51248__i] = arguments[G__51248__i + 0]; ++G__51248__i;}
  p__51145 = new cljs.core.IndexedSeq(G__51248__a,0,null);
} 
return G__51247__delegate.call(this,p__51145);};
G__51247.cljs$lang$maxFixedArity = 0;
G__51247.cljs$lang$applyTo = (function (arglist__51249){
var p__51145 = cljs.core.seq(arglist__51249);
return G__51247__delegate(p__51145);
});
G__51247.cljs$core$IFn$_invoke$arity$variadic = G__51247__delegate;
return G__51247;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq51139){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51139));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51250 = arguments.length;
var i__5770__auto___51251 = (0);
while(true){
if((i__5770__auto___51251 < len__5769__auto___51250)){
args__5775__auto__.push((arguments[i__5770__auto___51251]));

var G__51252 = (i__5770__auto___51251 + (1));
i__5770__auto___51251 = G__51252;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__51148){
var map__51149 = p__51148;
var map__51149__$1 = cljs.core.__destructure_map(map__51149);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
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
var G__51254__delegate = function (p__51152){
var map__51153 = p__51152;
var map__51153__$1 = cljs.core.__destructure_map(map__51153);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51153__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51153__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__51254 = function (var_args){
var p__51152 = null;
if (arguments.length > 0) {
var G__51255__i = 0, G__51255__a = new Array(arguments.length -  0);
while (G__51255__i < G__51255__a.length) {G__51255__a[G__51255__i] = arguments[G__51255__i + 0]; ++G__51255__i;}
  p__51152 = new cljs.core.IndexedSeq(G__51255__a,0,null);
} 
return G__51254__delegate.call(this,p__51152);};
G__51254.cljs$lang$maxFixedArity = 0;
G__51254.cljs$lang$applyTo = (function (arglist__51256){
var p__51152 = cljs.core.seq(arglist__51256);
return G__51254__delegate(p__51152);
});
G__51254.cljs$core$IFn$_invoke$arity$variadic = G__51254__delegate;
return G__51254;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq51147){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51147));
}));


//# sourceMappingURL=re_com.debug.js.map
