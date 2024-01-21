import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./goog.dom.dom.js";
import "./goog.useragent.useragent.js";
import "./goog.useragent.product.js";
import "./goog.uri.uri.js";
import "./shadow.json.js";
import "./shadow.cljs.devtools.client.env.js";
import "./shadow.cljs.devtools.client.console.js";
import "./shadow.cljs.devtools.client.hud.js";
import "./shadow.cljs.devtools.client.websocket.js";
import "./shadow.cljs.devtools.client.shared.js";
import "./shadow.remote.runtime.api.js";
import "./shadow.remote.runtime.shared.js";
goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34346 = arguments.length;
var i__5770__auto___34347 = (0);
while(true){
if((i__5770__auto___34347 < len__5769__auto___34346)){
args__5775__auto__.push((arguments[i__5770__auto___34347]));

var G__34348 = (i__5770__auto___34347 + (1));
i__5770__auto___34347 = G__34348;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq33397){
var G__33398 = cljs.core.first(seq33397);
var seq33397__$1 = cljs.core.next(seq33397);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33398,seq33397__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__33411 = cljs.core.seq(sources);
var chunk__33412 = null;
var count__33413 = (0);
var i__33414 = (0);
while(true){
if((i__33414 < count__33413)){
var map__33443 = chunk__33412.cljs$core$IIndexed$_nth$arity$2(null,i__33414);
var map__33443__$1 = cljs.core.__destructure_map(map__33443);
var src = map__33443__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33443__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33443__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33443__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33443__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e33445){var e_34350 = e33445;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34350);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34350.message)].join('')));
}

var G__34352 = seq__33411;
var G__34353 = chunk__33412;
var G__34354 = count__33413;
var G__34355 = (i__33414 + (1));
seq__33411 = G__34352;
chunk__33412 = G__34353;
count__33413 = G__34354;
i__33414 = G__34355;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33411);
if(temp__5804__auto__){
var seq__33411__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33411__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33411__$1);
var G__34356 = cljs.core.chunk_rest(seq__33411__$1);
var G__34357 = c__5568__auto__;
var G__34358 = cljs.core.count(c__5568__auto__);
var G__34359 = (0);
seq__33411 = G__34356;
chunk__33412 = G__34357;
count__33413 = G__34358;
i__33414 = G__34359;
continue;
} else {
var map__33575 = cljs.core.first(seq__33411__$1);
var map__33575__$1 = cljs.core.__destructure_map(map__33575);
var src = map__33575__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33575__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33575__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33575__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33575__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e33581){var e_34361 = e33581;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34361);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34361.message)].join('')));
}

var G__34362 = cljs.core.next(seq__33411__$1);
var G__34363 = null;
var G__34364 = (0);
var G__34365 = (0);
seq__33411 = G__34362;
chunk__33412 = G__34363;
count__33413 = G__34364;
i__33414 = G__34365;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__33603 = cljs.core.seq(js_requires);
var chunk__33604 = null;
var count__33605 = (0);
var i__33606 = (0);
while(true){
if((i__33606 < count__33605)){
var js_ns = chunk__33604.cljs$core$IIndexed$_nth$arity$2(null,i__33606);
var require_str_34376 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34376);


var G__34377 = seq__33603;
var G__34378 = chunk__33604;
var G__34379 = count__33605;
var G__34380 = (i__33606 + (1));
seq__33603 = G__34377;
chunk__33604 = G__34378;
count__33605 = G__34379;
i__33606 = G__34380;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33603);
if(temp__5804__auto__){
var seq__33603__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33603__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33603__$1);
var G__34381 = cljs.core.chunk_rest(seq__33603__$1);
var G__34382 = c__5568__auto__;
var G__34383 = cljs.core.count(c__5568__auto__);
var G__34384 = (0);
seq__33603 = G__34381;
chunk__33604 = G__34382;
count__33605 = G__34383;
i__33606 = G__34384;
continue;
} else {
var js_ns = cljs.core.first(seq__33603__$1);
var require_str_34385 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34385);


var G__34386 = cljs.core.next(seq__33603__$1);
var G__34387 = null;
var G__34388 = (0);
var G__34389 = (0);
seq__33603 = G__34386;
chunk__33604 = G__34387;
count__33605 = G__34388;
i__33606 = G__34389;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__33630){
var map__33631 = p__33630;
var map__33631__$1 = cljs.core.__destructure_map(map__33631);
var msg = map__33631__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33631__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33631__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33633(s__33634){
return (new cljs.core.LazySeq(null,(function (){
var s__33634__$1 = s__33634;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33634__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__33641 = cljs.core.first(xs__6360__auto__);
var map__33641__$1 = cljs.core.__destructure_map(map__33641);
var src = map__33641__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33641__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33641__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__33634__$1,map__33641,map__33641__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__33631,map__33631__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33633_$_iter__33635(s__33636){
return (new cljs.core.LazySeq(null,((function (s__33634__$1,map__33641,map__33641__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__33631,map__33631__$1,msg,info,reload_info){
return (function (){
var s__33636__$1 = s__33636;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__33636__$1);
if(temp__5804__auto____$1){
var s__33636__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33636__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33636__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33638 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33637 = (0);
while(true){
if((i__33637 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__33637);
cljs.core.chunk_append(b__33638,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34394 = (i__33637 + (1));
i__33637 = G__34394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33638),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33633_$_iter__33635(cljs.core.chunk_rest(s__33636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33638),null);
}
} else {
var warning = cljs.core.first(s__33636__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33633_$_iter__33635(cljs.core.rest(s__33636__$2)));
}
} else {
return null;
}
break;
}
});})(s__33634__$1,map__33641,map__33641__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__33631,map__33631__$1,msg,info,reload_info))
,null,null));
});})(s__33634__$1,map__33641,map__33641__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__33631,map__33631__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33633(cljs.core.rest(s__33634__$1)));
} else {
var G__34395 = cljs.core.rest(s__33634__$1);
s__33634__$1 = G__34395;
continue;
}
} else {
var G__34396 = cljs.core.rest(s__33634__$1);
s__33634__$1 = G__34396;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__33652_34397 = cljs.core.seq(warnings);
var chunk__33653_34398 = null;
var count__33654_34399 = (0);
var i__33655_34400 = (0);
while(true){
if((i__33655_34400 < count__33654_34399)){
var map__33665_34401 = chunk__33653_34398.cljs$core$IIndexed$_nth$arity$2(null,i__33655_34400);
var map__33665_34402__$1 = cljs.core.__destructure_map(map__33665_34401);
var w_34403 = map__33665_34402__$1;
var msg_34404__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665_34402__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665_34402__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665_34402__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665_34402__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34407)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34405),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34406),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34404__$1)].join(''));


var G__34408 = seq__33652_34397;
var G__34409 = chunk__33653_34398;
var G__34410 = count__33654_34399;
var G__34411 = (i__33655_34400 + (1));
seq__33652_34397 = G__34408;
chunk__33653_34398 = G__34409;
count__33654_34399 = G__34410;
i__33655_34400 = G__34411;
continue;
} else {
var temp__5804__auto___34412 = cljs.core.seq(seq__33652_34397);
if(temp__5804__auto___34412){
var seq__33652_34413__$1 = temp__5804__auto___34412;
if(cljs.core.chunked_seq_QMARK_(seq__33652_34413__$1)){
var c__5568__auto___34414 = cljs.core.chunk_first(seq__33652_34413__$1);
var G__34415 = cljs.core.chunk_rest(seq__33652_34413__$1);
var G__34416 = c__5568__auto___34414;
var G__34417 = cljs.core.count(c__5568__auto___34414);
var G__34418 = (0);
seq__33652_34397 = G__34415;
chunk__33653_34398 = G__34416;
count__33654_34399 = G__34417;
i__33655_34400 = G__34418;
continue;
} else {
var map__33671_34419 = cljs.core.first(seq__33652_34413__$1);
var map__33671_34420__$1 = cljs.core.__destructure_map(map__33671_34419);
var w_34421 = map__33671_34420__$1;
var msg_34422__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671_34420__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671_34420__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671_34420__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671_34420__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34425)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34423),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34424),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34422__$1)].join(''));


var G__34426 = cljs.core.next(seq__33652_34413__$1);
var G__34427 = null;
var G__34428 = (0);
var G__34429 = (0);
seq__33652_34397 = G__34426;
chunk__33653_34398 = G__34427;
count__33654_34399 = G__34428;
i__33655_34400 = G__34429;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__33629_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__33629_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__33692){
var map__33693 = p__33692;
var map__33693__$1 = cljs.core.__destructure_map(map__33693);
var msg = map__33693__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33693__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33693__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__33694 = cljs.core.seq(updates);
var chunk__33696 = null;
var count__33697 = (0);
var i__33698 = (0);
while(true){
if((i__33698 < count__33697)){
var path = chunk__33696.cljs$core$IIndexed$_nth$arity$2(null,i__33698);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__33980_34437 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__33984_34438 = null;
var count__33985_34439 = (0);
var i__33986_34440 = (0);
while(true){
if((i__33986_34440 < count__33985_34439)){
var node_34442 = chunk__33984_34438.cljs$core$IIndexed$_nth$arity$2(null,i__33986_34440);
if(cljs.core.not(node_34442.shadow$old)){
var path_match_34443 = shadow.cljs.devtools.client.browser.match_paths(node_34442.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34443)){
var new_link_34444 = (function (){var G__34050 = node_34442.cloneNode(true);
G__34050.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34443),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34050;
})();
(node_34442.shadow$old = true);

(new_link_34444.onload = ((function (seq__33980_34437,chunk__33984_34438,count__33985_34439,i__33986_34440,seq__33694,chunk__33696,count__33697,i__33698,new_link_34444,path_match_34443,node_34442,path,map__33693,map__33693__$1,msg,updates,reload_info){
return (function (e){
var seq__34051_34450 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34053_34451 = null;
var count__34054_34452 = (0);
var i__34055_34453 = (0);
while(true){
if((i__34055_34453 < count__34054_34452)){
var map__34064_34454 = chunk__34053_34451.cljs$core$IIndexed$_nth$arity$2(null,i__34055_34453);
var map__34064_34455__$1 = cljs.core.__destructure_map(map__34064_34454);
var task_34456 = map__34064_34455__$1;
var fn_str_34457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34064_34455__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34064_34455__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34459 = goog.getObjectByName(fn_str_34457,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34458)].join(''));

(fn_obj_34459.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34459.cljs$core$IFn$_invoke$arity$2(path,new_link_34444) : fn_obj_34459.call(null,path,new_link_34444));


var G__34460 = seq__34051_34450;
var G__34461 = chunk__34053_34451;
var G__34462 = count__34054_34452;
var G__34463 = (i__34055_34453 + (1));
seq__34051_34450 = G__34460;
chunk__34053_34451 = G__34461;
count__34054_34452 = G__34462;
i__34055_34453 = G__34463;
continue;
} else {
var temp__5804__auto___34464 = cljs.core.seq(seq__34051_34450);
if(temp__5804__auto___34464){
var seq__34051_34465__$1 = temp__5804__auto___34464;
if(cljs.core.chunked_seq_QMARK_(seq__34051_34465__$1)){
var c__5568__auto___34466 = cljs.core.chunk_first(seq__34051_34465__$1);
var G__34467 = cljs.core.chunk_rest(seq__34051_34465__$1);
var G__34468 = c__5568__auto___34466;
var G__34469 = cljs.core.count(c__5568__auto___34466);
var G__34470 = (0);
seq__34051_34450 = G__34467;
chunk__34053_34451 = G__34468;
count__34054_34452 = G__34469;
i__34055_34453 = G__34470;
continue;
} else {
var map__34077_34471 = cljs.core.first(seq__34051_34465__$1);
var map__34077_34472__$1 = cljs.core.__destructure_map(map__34077_34471);
var task_34473 = map__34077_34472__$1;
var fn_str_34474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077_34472__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077_34472__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34476 = goog.getObjectByName(fn_str_34474,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34475)].join(''));

(fn_obj_34476.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34476.cljs$core$IFn$_invoke$arity$2(path,new_link_34444) : fn_obj_34476.call(null,path,new_link_34444));


var G__34477 = cljs.core.next(seq__34051_34465__$1);
var G__34478 = null;
var G__34479 = (0);
var G__34480 = (0);
seq__34051_34450 = G__34477;
chunk__34053_34451 = G__34478;
count__34054_34452 = G__34479;
i__34055_34453 = G__34480;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34442);
});})(seq__33980_34437,chunk__33984_34438,count__33985_34439,i__33986_34440,seq__33694,chunk__33696,count__33697,i__33698,new_link_34444,path_match_34443,node_34442,path,map__33693,map__33693__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34443], 0));

goog.dom.insertSiblingAfter(new_link_34444,node_34442);


var G__34485 = seq__33980_34437;
var G__34486 = chunk__33984_34438;
var G__34487 = count__33985_34439;
var G__34488 = (i__33986_34440 + (1));
seq__33980_34437 = G__34485;
chunk__33984_34438 = G__34486;
count__33985_34439 = G__34487;
i__33986_34440 = G__34488;
continue;
} else {
var G__34489 = seq__33980_34437;
var G__34490 = chunk__33984_34438;
var G__34491 = count__33985_34439;
var G__34492 = (i__33986_34440 + (1));
seq__33980_34437 = G__34489;
chunk__33984_34438 = G__34490;
count__33985_34439 = G__34491;
i__33986_34440 = G__34492;
continue;
}
} else {
var G__34493 = seq__33980_34437;
var G__34494 = chunk__33984_34438;
var G__34495 = count__33985_34439;
var G__34496 = (i__33986_34440 + (1));
seq__33980_34437 = G__34493;
chunk__33984_34438 = G__34494;
count__33985_34439 = G__34495;
i__33986_34440 = G__34496;
continue;
}
} else {
var temp__5804__auto___34497 = cljs.core.seq(seq__33980_34437);
if(temp__5804__auto___34497){
var seq__33980_34498__$1 = temp__5804__auto___34497;
if(cljs.core.chunked_seq_QMARK_(seq__33980_34498__$1)){
var c__5568__auto___34499 = cljs.core.chunk_first(seq__33980_34498__$1);
var G__34500 = cljs.core.chunk_rest(seq__33980_34498__$1);
var G__34501 = c__5568__auto___34499;
var G__34502 = cljs.core.count(c__5568__auto___34499);
var G__34503 = (0);
seq__33980_34437 = G__34500;
chunk__33984_34438 = G__34501;
count__33985_34439 = G__34502;
i__33986_34440 = G__34503;
continue;
} else {
var node_34504 = cljs.core.first(seq__33980_34498__$1);
if(cljs.core.not(node_34504.shadow$old)){
var path_match_34505 = shadow.cljs.devtools.client.browser.match_paths(node_34504.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34505)){
var new_link_34511 = (function (){var G__34100 = node_34504.cloneNode(true);
G__34100.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34505),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34100;
})();
(node_34504.shadow$old = true);

(new_link_34511.onload = ((function (seq__33980_34437,chunk__33984_34438,count__33985_34439,i__33986_34440,seq__33694,chunk__33696,count__33697,i__33698,new_link_34511,path_match_34505,node_34504,seq__33980_34498__$1,temp__5804__auto___34497,path,map__33693,map__33693__$1,msg,updates,reload_info){
return (function (e){
var seq__34111_34512 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34113_34513 = null;
var count__34114_34514 = (0);
var i__34115_34515 = (0);
while(true){
if((i__34115_34515 < count__34114_34514)){
var map__34144_34516 = chunk__34113_34513.cljs$core$IIndexed$_nth$arity$2(null,i__34115_34515);
var map__34144_34517__$1 = cljs.core.__destructure_map(map__34144_34516);
var task_34518 = map__34144_34517__$1;
var fn_str_34519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34144_34517__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34144_34517__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34521 = goog.getObjectByName(fn_str_34519,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34520)].join(''));

(fn_obj_34521.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34521.cljs$core$IFn$_invoke$arity$2(path,new_link_34511) : fn_obj_34521.call(null,path,new_link_34511));


var G__34527 = seq__34111_34512;
var G__34528 = chunk__34113_34513;
var G__34529 = count__34114_34514;
var G__34530 = (i__34115_34515 + (1));
seq__34111_34512 = G__34527;
chunk__34113_34513 = G__34528;
count__34114_34514 = G__34529;
i__34115_34515 = G__34530;
continue;
} else {
var temp__5804__auto___34531__$1 = cljs.core.seq(seq__34111_34512);
if(temp__5804__auto___34531__$1){
var seq__34111_34532__$1 = temp__5804__auto___34531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34111_34532__$1)){
var c__5568__auto___34538 = cljs.core.chunk_first(seq__34111_34532__$1);
var G__34539 = cljs.core.chunk_rest(seq__34111_34532__$1);
var G__34540 = c__5568__auto___34538;
var G__34541 = cljs.core.count(c__5568__auto___34538);
var G__34542 = (0);
seq__34111_34512 = G__34539;
chunk__34113_34513 = G__34540;
count__34114_34514 = G__34541;
i__34115_34515 = G__34542;
continue;
} else {
var map__34162_34543 = cljs.core.first(seq__34111_34532__$1);
var map__34162_34544__$1 = cljs.core.__destructure_map(map__34162_34543);
var task_34545 = map__34162_34544__$1;
var fn_str_34546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34162_34544__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34162_34544__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34553 = goog.getObjectByName(fn_str_34546,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34547)].join(''));

(fn_obj_34553.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34553.cljs$core$IFn$_invoke$arity$2(path,new_link_34511) : fn_obj_34553.call(null,path,new_link_34511));


var G__34555 = cljs.core.next(seq__34111_34532__$1);
var G__34556 = null;
var G__34557 = (0);
var G__34558 = (0);
seq__34111_34512 = G__34555;
chunk__34113_34513 = G__34556;
count__34114_34514 = G__34557;
i__34115_34515 = G__34558;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34504);
});})(seq__33980_34437,chunk__33984_34438,count__33985_34439,i__33986_34440,seq__33694,chunk__33696,count__33697,i__33698,new_link_34511,path_match_34505,node_34504,seq__33980_34498__$1,temp__5804__auto___34497,path,map__33693,map__33693__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34505], 0));

goog.dom.insertSiblingAfter(new_link_34511,node_34504);


var G__34559 = cljs.core.next(seq__33980_34498__$1);
var G__34560 = null;
var G__34561 = (0);
var G__34562 = (0);
seq__33980_34437 = G__34559;
chunk__33984_34438 = G__34560;
count__33985_34439 = G__34561;
i__33986_34440 = G__34562;
continue;
} else {
var G__34563 = cljs.core.next(seq__33980_34498__$1);
var G__34564 = null;
var G__34565 = (0);
var G__34566 = (0);
seq__33980_34437 = G__34563;
chunk__33984_34438 = G__34564;
count__33985_34439 = G__34565;
i__33986_34440 = G__34566;
continue;
}
} else {
var G__34567 = cljs.core.next(seq__33980_34498__$1);
var G__34568 = null;
var G__34569 = (0);
var G__34570 = (0);
seq__33980_34437 = G__34567;
chunk__33984_34438 = G__34568;
count__33985_34439 = G__34569;
i__33986_34440 = G__34570;
continue;
}
}
} else {
}
}
break;
}


var G__34571 = seq__33694;
var G__34572 = chunk__33696;
var G__34573 = count__33697;
var G__34574 = (i__33698 + (1));
seq__33694 = G__34571;
chunk__33696 = G__34572;
count__33697 = G__34573;
i__33698 = G__34574;
continue;
} else {
var G__34576 = seq__33694;
var G__34577 = chunk__33696;
var G__34578 = count__33697;
var G__34579 = (i__33698 + (1));
seq__33694 = G__34576;
chunk__33696 = G__34577;
count__33697 = G__34578;
i__33698 = G__34579;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33694);
if(temp__5804__auto__){
var seq__33694__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33694__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33694__$1);
var G__34586 = cljs.core.chunk_rest(seq__33694__$1);
var G__34587 = c__5568__auto__;
var G__34588 = cljs.core.count(c__5568__auto__);
var G__34589 = (0);
seq__33694 = G__34586;
chunk__33696 = G__34587;
count__33697 = G__34588;
i__33698 = G__34589;
continue;
} else {
var path = cljs.core.first(seq__33694__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34193_34590 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34198_34591 = null;
var count__34199_34592 = (0);
var i__34200_34593 = (0);
while(true){
if((i__34200_34593 < count__34199_34592)){
var node_34594 = chunk__34198_34591.cljs$core$IIndexed$_nth$arity$2(null,i__34200_34593);
if(cljs.core.not(node_34594.shadow$old)){
var path_match_34595 = shadow.cljs.devtools.client.browser.match_paths(node_34594.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34595)){
var new_link_34596 = (function (){var G__34250 = node_34594.cloneNode(true);
G__34250.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34595),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34250;
})();
(node_34594.shadow$old = true);

(new_link_34596.onload = ((function (seq__34193_34590,chunk__34198_34591,count__34199_34592,i__34200_34593,seq__33694,chunk__33696,count__33697,i__33698,new_link_34596,path_match_34595,node_34594,path,seq__33694__$1,temp__5804__auto__,map__33693,map__33693__$1,msg,updates,reload_info){
return (function (e){
var seq__34252_34598 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34254_34599 = null;
var count__34255_34600 = (0);
var i__34256_34601 = (0);
while(true){
if((i__34256_34601 < count__34255_34600)){
var map__34263_34602 = chunk__34254_34599.cljs$core$IIndexed$_nth$arity$2(null,i__34256_34601);
var map__34263_34603__$1 = cljs.core.__destructure_map(map__34263_34602);
var task_34604 = map__34263_34603__$1;
var fn_str_34605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34263_34603__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34263_34603__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34607 = goog.getObjectByName(fn_str_34605,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34606)].join(''));

(fn_obj_34607.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34607.cljs$core$IFn$_invoke$arity$2(path,new_link_34596) : fn_obj_34607.call(null,path,new_link_34596));


var G__34608 = seq__34252_34598;
var G__34609 = chunk__34254_34599;
var G__34610 = count__34255_34600;
var G__34611 = (i__34256_34601 + (1));
seq__34252_34598 = G__34608;
chunk__34254_34599 = G__34609;
count__34255_34600 = G__34610;
i__34256_34601 = G__34611;
continue;
} else {
var temp__5804__auto___34612__$1 = cljs.core.seq(seq__34252_34598);
if(temp__5804__auto___34612__$1){
var seq__34252_34613__$1 = temp__5804__auto___34612__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34252_34613__$1)){
var c__5568__auto___34614 = cljs.core.chunk_first(seq__34252_34613__$1);
var G__34615 = cljs.core.chunk_rest(seq__34252_34613__$1);
var G__34616 = c__5568__auto___34614;
var G__34617 = cljs.core.count(c__5568__auto___34614);
var G__34618 = (0);
seq__34252_34598 = G__34615;
chunk__34254_34599 = G__34616;
count__34255_34600 = G__34617;
i__34256_34601 = G__34618;
continue;
} else {
var map__34264_34619 = cljs.core.first(seq__34252_34613__$1);
var map__34264_34620__$1 = cljs.core.__destructure_map(map__34264_34619);
var task_34621 = map__34264_34620__$1;
var fn_str_34622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34264_34620__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34264_34620__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34624 = goog.getObjectByName(fn_str_34622,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34623)].join(''));

(fn_obj_34624.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34624.cljs$core$IFn$_invoke$arity$2(path,new_link_34596) : fn_obj_34624.call(null,path,new_link_34596));


var G__34625 = cljs.core.next(seq__34252_34613__$1);
var G__34626 = null;
var G__34627 = (0);
var G__34628 = (0);
seq__34252_34598 = G__34625;
chunk__34254_34599 = G__34626;
count__34255_34600 = G__34627;
i__34256_34601 = G__34628;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34594);
});})(seq__34193_34590,chunk__34198_34591,count__34199_34592,i__34200_34593,seq__33694,chunk__33696,count__33697,i__33698,new_link_34596,path_match_34595,node_34594,path,seq__33694__$1,temp__5804__auto__,map__33693,map__33693__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34595], 0));

goog.dom.insertSiblingAfter(new_link_34596,node_34594);


var G__34629 = seq__34193_34590;
var G__34630 = chunk__34198_34591;
var G__34631 = count__34199_34592;
var G__34632 = (i__34200_34593 + (1));
seq__34193_34590 = G__34629;
chunk__34198_34591 = G__34630;
count__34199_34592 = G__34631;
i__34200_34593 = G__34632;
continue;
} else {
var G__34633 = seq__34193_34590;
var G__34634 = chunk__34198_34591;
var G__34635 = count__34199_34592;
var G__34636 = (i__34200_34593 + (1));
seq__34193_34590 = G__34633;
chunk__34198_34591 = G__34634;
count__34199_34592 = G__34635;
i__34200_34593 = G__34636;
continue;
}
} else {
var G__34637 = seq__34193_34590;
var G__34638 = chunk__34198_34591;
var G__34639 = count__34199_34592;
var G__34640 = (i__34200_34593 + (1));
seq__34193_34590 = G__34637;
chunk__34198_34591 = G__34638;
count__34199_34592 = G__34639;
i__34200_34593 = G__34640;
continue;
}
} else {
var temp__5804__auto___34641__$1 = cljs.core.seq(seq__34193_34590);
if(temp__5804__auto___34641__$1){
var seq__34193_34642__$1 = temp__5804__auto___34641__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34193_34642__$1)){
var c__5568__auto___34643 = cljs.core.chunk_first(seq__34193_34642__$1);
var G__34644 = cljs.core.chunk_rest(seq__34193_34642__$1);
var G__34645 = c__5568__auto___34643;
var G__34646 = cljs.core.count(c__5568__auto___34643);
var G__34647 = (0);
seq__34193_34590 = G__34644;
chunk__34198_34591 = G__34645;
count__34199_34592 = G__34646;
i__34200_34593 = G__34647;
continue;
} else {
var node_34648 = cljs.core.first(seq__34193_34642__$1);
if(cljs.core.not(node_34648.shadow$old)){
var path_match_34649 = shadow.cljs.devtools.client.browser.match_paths(node_34648.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34649)){
var new_link_34650 = (function (){var G__34269 = node_34648.cloneNode(true);
G__34269.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34649),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34269;
})();
(node_34648.shadow$old = true);

(new_link_34650.onload = ((function (seq__34193_34590,chunk__34198_34591,count__34199_34592,i__34200_34593,seq__33694,chunk__33696,count__33697,i__33698,new_link_34650,path_match_34649,node_34648,seq__34193_34642__$1,temp__5804__auto___34641__$1,path,seq__33694__$1,temp__5804__auto__,map__33693,map__33693__$1,msg,updates,reload_info){
return (function (e){
var seq__34270_34652 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34272_34653 = null;
var count__34273_34654 = (0);
var i__34274_34655 = (0);
while(true){
if((i__34274_34655 < count__34273_34654)){
var map__34283_34656 = chunk__34272_34653.cljs$core$IIndexed$_nth$arity$2(null,i__34274_34655);
var map__34283_34657__$1 = cljs.core.__destructure_map(map__34283_34656);
var task_34658 = map__34283_34657__$1;
var fn_str_34659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34283_34657__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34283_34657__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34661 = goog.getObjectByName(fn_str_34659,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34660)].join(''));

(fn_obj_34661.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34661.cljs$core$IFn$_invoke$arity$2(path,new_link_34650) : fn_obj_34661.call(null,path,new_link_34650));


var G__34665 = seq__34270_34652;
var G__34666 = chunk__34272_34653;
var G__34667 = count__34273_34654;
var G__34668 = (i__34274_34655 + (1));
seq__34270_34652 = G__34665;
chunk__34272_34653 = G__34666;
count__34273_34654 = G__34667;
i__34274_34655 = G__34668;
continue;
} else {
var temp__5804__auto___34669__$2 = cljs.core.seq(seq__34270_34652);
if(temp__5804__auto___34669__$2){
var seq__34270_34670__$1 = temp__5804__auto___34669__$2;
if(cljs.core.chunked_seq_QMARK_(seq__34270_34670__$1)){
var c__5568__auto___34671 = cljs.core.chunk_first(seq__34270_34670__$1);
var G__34672 = cljs.core.chunk_rest(seq__34270_34670__$1);
var G__34673 = c__5568__auto___34671;
var G__34674 = cljs.core.count(c__5568__auto___34671);
var G__34675 = (0);
seq__34270_34652 = G__34672;
chunk__34272_34653 = G__34673;
count__34273_34654 = G__34674;
i__34274_34655 = G__34675;
continue;
} else {
var map__34287_34676 = cljs.core.first(seq__34270_34670__$1);
var map__34287_34677__$1 = cljs.core.__destructure_map(map__34287_34676);
var task_34678 = map__34287_34677__$1;
var fn_str_34679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34287_34677__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34287_34677__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34681 = goog.getObjectByName(fn_str_34679,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34680)].join(''));

(fn_obj_34681.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34681.cljs$core$IFn$_invoke$arity$2(path,new_link_34650) : fn_obj_34681.call(null,path,new_link_34650));


var G__34683 = cljs.core.next(seq__34270_34670__$1);
var G__34684 = null;
var G__34685 = (0);
var G__34686 = (0);
seq__34270_34652 = G__34683;
chunk__34272_34653 = G__34684;
count__34273_34654 = G__34685;
i__34274_34655 = G__34686;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34648);
});})(seq__34193_34590,chunk__34198_34591,count__34199_34592,i__34200_34593,seq__33694,chunk__33696,count__33697,i__33698,new_link_34650,path_match_34649,node_34648,seq__34193_34642__$1,temp__5804__auto___34641__$1,path,seq__33694__$1,temp__5804__auto__,map__33693,map__33693__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34649], 0));

goog.dom.insertSiblingAfter(new_link_34650,node_34648);


var G__34687 = cljs.core.next(seq__34193_34642__$1);
var G__34688 = null;
var G__34689 = (0);
var G__34690 = (0);
seq__34193_34590 = G__34687;
chunk__34198_34591 = G__34688;
count__34199_34592 = G__34689;
i__34200_34593 = G__34690;
continue;
} else {
var G__34691 = cljs.core.next(seq__34193_34642__$1);
var G__34692 = null;
var G__34693 = (0);
var G__34694 = (0);
seq__34193_34590 = G__34691;
chunk__34198_34591 = G__34692;
count__34199_34592 = G__34693;
i__34200_34593 = G__34694;
continue;
}
} else {
var G__34696 = cljs.core.next(seq__34193_34642__$1);
var G__34697 = null;
var G__34698 = (0);
var G__34699 = (0);
seq__34193_34590 = G__34696;
chunk__34198_34591 = G__34697;
count__34199_34592 = G__34698;
i__34200_34593 = G__34699;
continue;
}
}
} else {
}
}
break;
}


var G__34700 = cljs.core.next(seq__33694__$1);
var G__34701 = null;
var G__34702 = (0);
var G__34703 = (0);
seq__33694 = G__34700;
chunk__33696 = G__34701;
count__33697 = G__34702;
i__33698 = G__34703;
continue;
} else {
var G__34704 = cljs.core.next(seq__33694__$1);
var G__34705 = null;
var G__34706 = (0);
var G__34707 = (0);
seq__33694 = G__34704;
chunk__33696 = G__34705;
count__33697 = G__34706;
i__33698 = G__34707;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__34293){
var map__34294 = p__34293;
var map__34294__$1 = cljs.core.__destructure_map(map__34294);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34294__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__34298,done,error){
var map__34299 = p__34298;
var map__34299__$1 = cljs.core.__destructure_map(map__34299);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__34300,done,error){
var map__34301 = p__34300;
var map__34301__$1 = cljs.core.__destructure_map(map__34301);
var msg = map__34301__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34301__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34301__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34301__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34304){
var map__34305 = p__34304;
var map__34305__$1 = cljs.core.__destructure_map(map__34305);
var src = map__34305__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34305__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__34306 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__34306) : done.call(null,G__34306));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__34307){
var map__34309 = p__34307;
var map__34309__$1 = cljs.core.__destructure_map(map__34309);
var msg__$1 = map__34309__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34309__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e34310){var ex = e34310;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__34311){
var map__34313 = p__34311;
var map__34313__$1 = cljs.core.__destructure_map(map__34313);
var env = map__34313__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34313__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__34328){
var map__34329 = p__34328;
var map__34329__$1 = cljs.core.__destructure_map(map__34329);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34329__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34329__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__34332){
var map__34333 = p__34332;
var map__34333__$1 = cljs.core.__destructure_map(map__34333);
var svc = map__34333__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34333__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
