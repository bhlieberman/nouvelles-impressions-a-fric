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
var len__5769__auto___49897 = arguments.length;
var i__5770__auto___49898 = (0);
while(true){
if((i__5770__auto___49898 < len__5769__auto___49897)){
args__5775__auto__.push((arguments[i__5770__auto___49898]));

var G__49899 = (i__5770__auto___49898 + (1));
i__5770__auto___49898 = G__49899;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49204){
var G__49205 = cljs.core.first(seq49204);
var seq49204__$1 = cljs.core.next(seq49204);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49205,seq49204__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49216 = cljs.core.seq(sources);
var chunk__49217 = null;
var count__49218 = (0);
var i__49219 = (0);
while(true){
if((i__49219 < count__49218)){
var map__49231 = chunk__49217.cljs$core$IIndexed$_nth$arity$2(null,i__49219);
var map__49231__$1 = cljs.core.__destructure_map(map__49231);
var src = map__49231__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49241){var e_49905 = e49241;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49905);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49905.message)].join('')));
}

var G__49906 = seq__49216;
var G__49907 = chunk__49217;
var G__49908 = count__49218;
var G__49909 = (i__49219 + (1));
seq__49216 = G__49906;
chunk__49217 = G__49907;
count__49218 = G__49908;
i__49219 = G__49909;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49216);
if(temp__5804__auto__){
var seq__49216__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49216__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49216__$1);
var G__49910 = cljs.core.chunk_rest(seq__49216__$1);
var G__49911 = c__5568__auto__;
var G__49912 = cljs.core.count(c__5568__auto__);
var G__49913 = (0);
seq__49216 = G__49910;
chunk__49217 = G__49911;
count__49218 = G__49912;
i__49219 = G__49913;
continue;
} else {
var map__49245 = cljs.core.first(seq__49216__$1);
var map__49245__$1 = cljs.core.__destructure_map(map__49245);
var src = map__49245__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49245__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49245__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49245__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49245__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49246){var e_49914 = e49246;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49914);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49914.message)].join('')));
}

var G__49916 = cljs.core.next(seq__49216__$1);
var G__49917 = null;
var G__49918 = (0);
var G__49919 = (0);
seq__49216 = G__49916;
chunk__49217 = G__49917;
count__49218 = G__49918;
i__49219 = G__49919;
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
var seq__49247 = cljs.core.seq(js_requires);
var chunk__49248 = null;
var count__49249 = (0);
var i__49250 = (0);
while(true){
if((i__49250 < count__49249)){
var js_ns = chunk__49248.cljs$core$IIndexed$_nth$arity$2(null,i__49250);
var require_str_49928 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49928);


var G__49929 = seq__49247;
var G__49930 = chunk__49248;
var G__49931 = count__49249;
var G__49932 = (i__49250 + (1));
seq__49247 = G__49929;
chunk__49248 = G__49930;
count__49249 = G__49931;
i__49250 = G__49932;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49247);
if(temp__5804__auto__){
var seq__49247__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49247__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49247__$1);
var G__49933 = cljs.core.chunk_rest(seq__49247__$1);
var G__49934 = c__5568__auto__;
var G__49935 = cljs.core.count(c__5568__auto__);
var G__49936 = (0);
seq__49247 = G__49933;
chunk__49248 = G__49934;
count__49249 = G__49935;
i__49250 = G__49936;
continue;
} else {
var js_ns = cljs.core.first(seq__49247__$1);
var require_str_49937 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49937);


var G__49938 = cljs.core.next(seq__49247__$1);
var G__49939 = null;
var G__49940 = (0);
var G__49941 = (0);
seq__49247 = G__49938;
chunk__49248 = G__49939;
count__49249 = G__49940;
i__49250 = G__49941;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__49262){
var map__49263 = p__49262;
var map__49263__$1 = cljs.core.__destructure_map(map__49263);
var msg = map__49263__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49263__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49263__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49264(s__49265){
return (new cljs.core.LazySeq(null,(function (){
var s__49265__$1 = s__49265;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49265__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__49276 = cljs.core.first(xs__6360__auto__);
var map__49276__$1 = cljs.core.__destructure_map(map__49276);
var src = map__49276__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__49265__$1,map__49276,map__49276__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49263,map__49263__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49264_$_iter__49266(s__49267){
return (new cljs.core.LazySeq(null,((function (s__49265__$1,map__49276,map__49276__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49263,map__49263__$1,msg,info,reload_info){
return (function (){
var s__49267__$1 = s__49267;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__49267__$1);
if(temp__5804__auto____$1){
var s__49267__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49267__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49267__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49269 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49268 = (0);
while(true){
if((i__49268 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__49268);
cljs.core.chunk_append(b__49269,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49945 = (i__49268 + (1));
i__49268 = G__49945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49269),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49264_$_iter__49266(cljs.core.chunk_rest(s__49267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49269),null);
}
} else {
var warning = cljs.core.first(s__49267__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49264_$_iter__49266(cljs.core.rest(s__49267__$2)));
}
} else {
return null;
}
break;
}
});})(s__49265__$1,map__49276,map__49276__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49263,map__49263__$1,msg,info,reload_info))
,null,null));
});})(s__49265__$1,map__49276,map__49276__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49263,map__49263__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49264(cljs.core.rest(s__49265__$1)));
} else {
var G__49948 = cljs.core.rest(s__49265__$1);
s__49265__$1 = G__49948;
continue;
}
} else {
var G__49949 = cljs.core.rest(s__49265__$1);
s__49265__$1 = G__49949;
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
var seq__49281_49950 = cljs.core.seq(warnings);
var chunk__49282_49951 = null;
var count__49283_49952 = (0);
var i__49284_49953 = (0);
while(true){
if((i__49284_49953 < count__49283_49952)){
var map__49288_49954 = chunk__49282_49951.cljs$core$IIndexed$_nth$arity$2(null,i__49284_49953);
var map__49288_49955__$1 = cljs.core.__destructure_map(map__49288_49954);
var w_49956 = map__49288_49955__$1;
var msg_49957__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49288_49955__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49288_49955__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49288_49955__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49288_49955__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49960)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49958),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49959),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49957__$1)].join(''));


var G__49962 = seq__49281_49950;
var G__49963 = chunk__49282_49951;
var G__49964 = count__49283_49952;
var G__49965 = (i__49284_49953 + (1));
seq__49281_49950 = G__49962;
chunk__49282_49951 = G__49963;
count__49283_49952 = G__49964;
i__49284_49953 = G__49965;
continue;
} else {
var temp__5804__auto___49966 = cljs.core.seq(seq__49281_49950);
if(temp__5804__auto___49966){
var seq__49281_49967__$1 = temp__5804__auto___49966;
if(cljs.core.chunked_seq_QMARK_(seq__49281_49967__$1)){
var c__5568__auto___49968 = cljs.core.chunk_first(seq__49281_49967__$1);
var G__49969 = cljs.core.chunk_rest(seq__49281_49967__$1);
var G__49970 = c__5568__auto___49968;
var G__49971 = cljs.core.count(c__5568__auto___49968);
var G__49972 = (0);
seq__49281_49950 = G__49969;
chunk__49282_49951 = G__49970;
count__49283_49952 = G__49971;
i__49284_49953 = G__49972;
continue;
} else {
var map__49290_49974 = cljs.core.first(seq__49281_49967__$1);
var map__49290_49975__$1 = cljs.core.__destructure_map(map__49290_49974);
var w_49976 = map__49290_49975__$1;
var msg_49977__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49290_49975__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49290_49975__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49290_49975__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49290_49975__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49980)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49978),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49979),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49977__$1)].join(''));


var G__49981 = cljs.core.next(seq__49281_49967__$1);
var G__49982 = null;
var G__49983 = (0);
var G__49984 = (0);
seq__49281_49950 = G__49981;
chunk__49282_49951 = G__49982;
count__49283_49952 = G__49983;
i__49284_49953 = G__49984;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__49261_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49261_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__49294){
var map__49295 = p__49294;
var map__49295__$1 = cljs.core.__destructure_map(map__49295);
var msg = map__49295__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49295__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49295__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__49300 = cljs.core.seq(updates);
var chunk__49302 = null;
var count__49303 = (0);
var i__49304 = (0);
while(true){
if((i__49304 < count__49303)){
var path = chunk__49302.cljs$core$IIndexed$_nth$arity$2(null,i__49304);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49590_49987 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49594_49988 = null;
var count__49595_49989 = (0);
var i__49596_49990 = (0);
while(true){
if((i__49596_49990 < count__49595_49989)){
var node_49991 = chunk__49594_49988.cljs$core$IIndexed$_nth$arity$2(null,i__49596_49990);
if(cljs.core.not(node_49991.shadow$old)){
var path_match_49992 = shadow.cljs.devtools.client.browser.match_paths(node_49991.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49992)){
var new_link_49993 = (function (){var G__49677 = node_49991.cloneNode(true);
G__49677.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49992),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49677;
})();
(node_49991.shadow$old = true);

(new_link_49993.onload = ((function (seq__49590_49987,chunk__49594_49988,count__49595_49989,i__49596_49990,seq__49300,chunk__49302,count__49303,i__49304,new_link_49993,path_match_49992,node_49991,path,map__49295,map__49295__$1,msg,updates,reload_info){
return (function (e){
var seq__49678_49994 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49680_49995 = null;
var count__49681_49996 = (0);
var i__49682_49997 = (0);
while(true){
if((i__49682_49997 < count__49681_49996)){
var map__49692_49999 = chunk__49680_49995.cljs$core$IIndexed$_nth$arity$2(null,i__49682_49997);
var map__49692_50000__$1 = cljs.core.__destructure_map(map__49692_49999);
var task_50001 = map__49692_50000__$1;
var fn_str_50002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692_50000__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692_50000__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50004 = goog.getObjectByName(fn_str_50002,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50003)].join(''));

(fn_obj_50004.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50004.cljs$core$IFn$_invoke$arity$2(path,new_link_49993) : fn_obj_50004.call(null,path,new_link_49993));


var G__50006 = seq__49678_49994;
var G__50007 = chunk__49680_49995;
var G__50008 = count__49681_49996;
var G__50009 = (i__49682_49997 + (1));
seq__49678_49994 = G__50006;
chunk__49680_49995 = G__50007;
count__49681_49996 = G__50008;
i__49682_49997 = G__50009;
continue;
} else {
var temp__5804__auto___50011 = cljs.core.seq(seq__49678_49994);
if(temp__5804__auto___50011){
var seq__49678_50012__$1 = temp__5804__auto___50011;
if(cljs.core.chunked_seq_QMARK_(seq__49678_50012__$1)){
var c__5568__auto___50013 = cljs.core.chunk_first(seq__49678_50012__$1);
var G__50014 = cljs.core.chunk_rest(seq__49678_50012__$1);
var G__50015 = c__5568__auto___50013;
var G__50016 = cljs.core.count(c__5568__auto___50013);
var G__50017 = (0);
seq__49678_49994 = G__50014;
chunk__49680_49995 = G__50015;
count__49681_49996 = G__50016;
i__49682_49997 = G__50017;
continue;
} else {
var map__49694_50019 = cljs.core.first(seq__49678_50012__$1);
var map__49694_50020__$1 = cljs.core.__destructure_map(map__49694_50019);
var task_50021 = map__49694_50020__$1;
var fn_str_50022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694_50020__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694_50020__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50025 = goog.getObjectByName(fn_str_50022,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50023)].join(''));

(fn_obj_50025.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50025.cljs$core$IFn$_invoke$arity$2(path,new_link_49993) : fn_obj_50025.call(null,path,new_link_49993));


var G__50027 = cljs.core.next(seq__49678_50012__$1);
var G__50028 = null;
var G__50029 = (0);
var G__50030 = (0);
seq__49678_49994 = G__50027;
chunk__49680_49995 = G__50028;
count__49681_49996 = G__50029;
i__49682_49997 = G__50030;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49991);
});})(seq__49590_49987,chunk__49594_49988,count__49595_49989,i__49596_49990,seq__49300,chunk__49302,count__49303,i__49304,new_link_49993,path_match_49992,node_49991,path,map__49295,map__49295__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49992], 0));

goog.dom.insertSiblingAfter(new_link_49993,node_49991);


var G__50032 = seq__49590_49987;
var G__50033 = chunk__49594_49988;
var G__50034 = count__49595_49989;
var G__50035 = (i__49596_49990 + (1));
seq__49590_49987 = G__50032;
chunk__49594_49988 = G__50033;
count__49595_49989 = G__50034;
i__49596_49990 = G__50035;
continue;
} else {
var G__50037 = seq__49590_49987;
var G__50038 = chunk__49594_49988;
var G__50039 = count__49595_49989;
var G__50040 = (i__49596_49990 + (1));
seq__49590_49987 = G__50037;
chunk__49594_49988 = G__50038;
count__49595_49989 = G__50039;
i__49596_49990 = G__50040;
continue;
}
} else {
var G__50041 = seq__49590_49987;
var G__50042 = chunk__49594_49988;
var G__50043 = count__49595_49989;
var G__50044 = (i__49596_49990 + (1));
seq__49590_49987 = G__50041;
chunk__49594_49988 = G__50042;
count__49595_49989 = G__50043;
i__49596_49990 = G__50044;
continue;
}
} else {
var temp__5804__auto___50046 = cljs.core.seq(seq__49590_49987);
if(temp__5804__auto___50046){
var seq__49590_50047__$1 = temp__5804__auto___50046;
if(cljs.core.chunked_seq_QMARK_(seq__49590_50047__$1)){
var c__5568__auto___50049 = cljs.core.chunk_first(seq__49590_50047__$1);
var G__50050 = cljs.core.chunk_rest(seq__49590_50047__$1);
var G__50051 = c__5568__auto___50049;
var G__50052 = cljs.core.count(c__5568__auto___50049);
var G__50053 = (0);
seq__49590_49987 = G__50050;
chunk__49594_49988 = G__50051;
count__49595_49989 = G__50052;
i__49596_49990 = G__50053;
continue;
} else {
var node_50055 = cljs.core.first(seq__49590_50047__$1);
if(cljs.core.not(node_50055.shadow$old)){
var path_match_50056 = shadow.cljs.devtools.client.browser.match_paths(node_50055.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50056)){
var new_link_50057 = (function (){var G__49701 = node_50055.cloneNode(true);
G__49701.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50056),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49701;
})();
(node_50055.shadow$old = true);

(new_link_50057.onload = ((function (seq__49590_49987,chunk__49594_49988,count__49595_49989,i__49596_49990,seq__49300,chunk__49302,count__49303,i__49304,new_link_50057,path_match_50056,node_50055,seq__49590_50047__$1,temp__5804__auto___50046,path,map__49295,map__49295__$1,msg,updates,reload_info){
return (function (e){
var seq__49704_50059 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49706_50060 = null;
var count__49707_50061 = (0);
var i__49708_50062 = (0);
while(true){
if((i__49708_50062 < count__49707_50061)){
var map__49719_50063 = chunk__49706_50060.cljs$core$IIndexed$_nth$arity$2(null,i__49708_50062);
var map__49719_50064__$1 = cljs.core.__destructure_map(map__49719_50063);
var task_50065 = map__49719_50064__$1;
var fn_str_50066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49719_50064__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49719_50064__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50068 = goog.getObjectByName(fn_str_50066,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50067)].join(''));

(fn_obj_50068.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50068.cljs$core$IFn$_invoke$arity$2(path,new_link_50057) : fn_obj_50068.call(null,path,new_link_50057));


var G__50069 = seq__49704_50059;
var G__50070 = chunk__49706_50060;
var G__50071 = count__49707_50061;
var G__50072 = (i__49708_50062 + (1));
seq__49704_50059 = G__50069;
chunk__49706_50060 = G__50070;
count__49707_50061 = G__50071;
i__49708_50062 = G__50072;
continue;
} else {
var temp__5804__auto___50074__$1 = cljs.core.seq(seq__49704_50059);
if(temp__5804__auto___50074__$1){
var seq__49704_50075__$1 = temp__5804__auto___50074__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49704_50075__$1)){
var c__5568__auto___50076 = cljs.core.chunk_first(seq__49704_50075__$1);
var G__50079 = cljs.core.chunk_rest(seq__49704_50075__$1);
var G__50080 = c__5568__auto___50076;
var G__50081 = cljs.core.count(c__5568__auto___50076);
var G__50082 = (0);
seq__49704_50059 = G__50079;
chunk__49706_50060 = G__50080;
count__49707_50061 = G__50081;
i__49708_50062 = G__50082;
continue;
} else {
var map__49722_50085 = cljs.core.first(seq__49704_50075__$1);
var map__49722_50086__$1 = cljs.core.__destructure_map(map__49722_50085);
var task_50087 = map__49722_50086__$1;
var fn_str_50088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49722_50086__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49722_50086__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50090 = goog.getObjectByName(fn_str_50088,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50089)].join(''));

(fn_obj_50090.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50090.cljs$core$IFn$_invoke$arity$2(path,new_link_50057) : fn_obj_50090.call(null,path,new_link_50057));


var G__50098 = cljs.core.next(seq__49704_50075__$1);
var G__50099 = null;
var G__50100 = (0);
var G__50101 = (0);
seq__49704_50059 = G__50098;
chunk__49706_50060 = G__50099;
count__49707_50061 = G__50100;
i__49708_50062 = G__50101;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50055);
});})(seq__49590_49987,chunk__49594_49988,count__49595_49989,i__49596_49990,seq__49300,chunk__49302,count__49303,i__49304,new_link_50057,path_match_50056,node_50055,seq__49590_50047__$1,temp__5804__auto___50046,path,map__49295,map__49295__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50056], 0));

goog.dom.insertSiblingAfter(new_link_50057,node_50055);


var G__50102 = cljs.core.next(seq__49590_50047__$1);
var G__50103 = null;
var G__50104 = (0);
var G__50105 = (0);
seq__49590_49987 = G__50102;
chunk__49594_49988 = G__50103;
count__49595_49989 = G__50104;
i__49596_49990 = G__50105;
continue;
} else {
var G__50106 = cljs.core.next(seq__49590_50047__$1);
var G__50107 = null;
var G__50108 = (0);
var G__50109 = (0);
seq__49590_49987 = G__50106;
chunk__49594_49988 = G__50107;
count__49595_49989 = G__50108;
i__49596_49990 = G__50109;
continue;
}
} else {
var G__50110 = cljs.core.next(seq__49590_50047__$1);
var G__50111 = null;
var G__50112 = (0);
var G__50113 = (0);
seq__49590_49987 = G__50110;
chunk__49594_49988 = G__50111;
count__49595_49989 = G__50112;
i__49596_49990 = G__50113;
continue;
}
}
} else {
}
}
break;
}


var G__50114 = seq__49300;
var G__50115 = chunk__49302;
var G__50116 = count__49303;
var G__50117 = (i__49304 + (1));
seq__49300 = G__50114;
chunk__49302 = G__50115;
count__49303 = G__50116;
i__49304 = G__50117;
continue;
} else {
var G__50118 = seq__49300;
var G__50119 = chunk__49302;
var G__50120 = count__49303;
var G__50121 = (i__49304 + (1));
seq__49300 = G__50118;
chunk__49302 = G__50119;
count__49303 = G__50120;
i__49304 = G__50121;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49300);
if(temp__5804__auto__){
var seq__49300__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49300__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49300__$1);
var G__50122 = cljs.core.chunk_rest(seq__49300__$1);
var G__50123 = c__5568__auto__;
var G__50124 = cljs.core.count(c__5568__auto__);
var G__50125 = (0);
seq__49300 = G__50122;
chunk__49302 = G__50123;
count__49303 = G__50124;
i__49304 = G__50125;
continue;
} else {
var path = cljs.core.first(seq__49300__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49743_50126 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49747_50127 = null;
var count__49748_50128 = (0);
var i__49749_50129 = (0);
while(true){
if((i__49749_50129 < count__49748_50128)){
var node_50130 = chunk__49747_50127.cljs$core$IIndexed$_nth$arity$2(null,i__49749_50129);
if(cljs.core.not(node_50130.shadow$old)){
var path_match_50131 = shadow.cljs.devtools.client.browser.match_paths(node_50130.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50131)){
var new_link_50132 = (function (){var G__49803 = node_50130.cloneNode(true);
G__49803.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50131),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49803;
})();
(node_50130.shadow$old = true);

(new_link_50132.onload = ((function (seq__49743_50126,chunk__49747_50127,count__49748_50128,i__49749_50129,seq__49300,chunk__49302,count__49303,i__49304,new_link_50132,path_match_50131,node_50130,path,seq__49300__$1,temp__5804__auto__,map__49295,map__49295__$1,msg,updates,reload_info){
return (function (e){
var seq__49807_50134 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49809_50135 = null;
var count__49810_50136 = (0);
var i__49811_50137 = (0);
while(true){
if((i__49811_50137 < count__49810_50136)){
var map__49817_50139 = chunk__49809_50135.cljs$core$IIndexed$_nth$arity$2(null,i__49811_50137);
var map__49817_50140__$1 = cljs.core.__destructure_map(map__49817_50139);
var task_50141 = map__49817_50140__$1;
var fn_str_50142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817_50140__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817_50140__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50144 = goog.getObjectByName(fn_str_50142,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50143)].join(''));

(fn_obj_50144.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50144.cljs$core$IFn$_invoke$arity$2(path,new_link_50132) : fn_obj_50144.call(null,path,new_link_50132));


var G__50145 = seq__49807_50134;
var G__50146 = chunk__49809_50135;
var G__50147 = count__49810_50136;
var G__50148 = (i__49811_50137 + (1));
seq__49807_50134 = G__50145;
chunk__49809_50135 = G__50146;
count__49810_50136 = G__50147;
i__49811_50137 = G__50148;
continue;
} else {
var temp__5804__auto___50150__$1 = cljs.core.seq(seq__49807_50134);
if(temp__5804__auto___50150__$1){
var seq__49807_50151__$1 = temp__5804__auto___50150__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49807_50151__$1)){
var c__5568__auto___50152 = cljs.core.chunk_first(seq__49807_50151__$1);
var G__50154 = cljs.core.chunk_rest(seq__49807_50151__$1);
var G__50155 = c__5568__auto___50152;
var G__50156 = cljs.core.count(c__5568__auto___50152);
var G__50157 = (0);
seq__49807_50134 = G__50154;
chunk__49809_50135 = G__50155;
count__49810_50136 = G__50156;
i__49811_50137 = G__50157;
continue;
} else {
var map__49820_50158 = cljs.core.first(seq__49807_50151__$1);
var map__49820_50159__$1 = cljs.core.__destructure_map(map__49820_50158);
var task_50160 = map__49820_50159__$1;
var fn_str_50161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820_50159__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820_50159__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50164 = goog.getObjectByName(fn_str_50161,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50162)].join(''));

(fn_obj_50164.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50164.cljs$core$IFn$_invoke$arity$2(path,new_link_50132) : fn_obj_50164.call(null,path,new_link_50132));


var G__50165 = cljs.core.next(seq__49807_50151__$1);
var G__50166 = null;
var G__50167 = (0);
var G__50168 = (0);
seq__49807_50134 = G__50165;
chunk__49809_50135 = G__50166;
count__49810_50136 = G__50167;
i__49811_50137 = G__50168;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50130);
});})(seq__49743_50126,chunk__49747_50127,count__49748_50128,i__49749_50129,seq__49300,chunk__49302,count__49303,i__49304,new_link_50132,path_match_50131,node_50130,path,seq__49300__$1,temp__5804__auto__,map__49295,map__49295__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50131], 0));

goog.dom.insertSiblingAfter(new_link_50132,node_50130);


var G__50169 = seq__49743_50126;
var G__50170 = chunk__49747_50127;
var G__50171 = count__49748_50128;
var G__50172 = (i__49749_50129 + (1));
seq__49743_50126 = G__50169;
chunk__49747_50127 = G__50170;
count__49748_50128 = G__50171;
i__49749_50129 = G__50172;
continue;
} else {
var G__50173 = seq__49743_50126;
var G__50174 = chunk__49747_50127;
var G__50175 = count__49748_50128;
var G__50176 = (i__49749_50129 + (1));
seq__49743_50126 = G__50173;
chunk__49747_50127 = G__50174;
count__49748_50128 = G__50175;
i__49749_50129 = G__50176;
continue;
}
} else {
var G__50177 = seq__49743_50126;
var G__50178 = chunk__49747_50127;
var G__50179 = count__49748_50128;
var G__50180 = (i__49749_50129 + (1));
seq__49743_50126 = G__50177;
chunk__49747_50127 = G__50178;
count__49748_50128 = G__50179;
i__49749_50129 = G__50180;
continue;
}
} else {
var temp__5804__auto___50181__$1 = cljs.core.seq(seq__49743_50126);
if(temp__5804__auto___50181__$1){
var seq__49743_50182__$1 = temp__5804__auto___50181__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49743_50182__$1)){
var c__5568__auto___50183 = cljs.core.chunk_first(seq__49743_50182__$1);
var G__50184 = cljs.core.chunk_rest(seq__49743_50182__$1);
var G__50185 = c__5568__auto___50183;
var G__50186 = cljs.core.count(c__5568__auto___50183);
var G__50187 = (0);
seq__49743_50126 = G__50184;
chunk__49747_50127 = G__50185;
count__49748_50128 = G__50186;
i__49749_50129 = G__50187;
continue;
} else {
var node_50188 = cljs.core.first(seq__49743_50182__$1);
if(cljs.core.not(node_50188.shadow$old)){
var path_match_50190 = shadow.cljs.devtools.client.browser.match_paths(node_50188.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50190)){
var new_link_50191 = (function (){var G__49825 = node_50188.cloneNode(true);
G__49825.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50190),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49825;
})();
(node_50188.shadow$old = true);

(new_link_50191.onload = ((function (seq__49743_50126,chunk__49747_50127,count__49748_50128,i__49749_50129,seq__49300,chunk__49302,count__49303,i__49304,new_link_50191,path_match_50190,node_50188,seq__49743_50182__$1,temp__5804__auto___50181__$1,path,seq__49300__$1,temp__5804__auto__,map__49295,map__49295__$1,msg,updates,reload_info){
return (function (e){
var seq__49828_50192 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49830_50193 = null;
var count__49831_50194 = (0);
var i__49832_50195 = (0);
while(true){
if((i__49832_50195 < count__49831_50194)){
var map__49846_50197 = chunk__49830_50193.cljs$core$IIndexed$_nth$arity$2(null,i__49832_50195);
var map__49846_50198__$1 = cljs.core.__destructure_map(map__49846_50197);
var task_50199 = map__49846_50198__$1;
var fn_str_50200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49846_50198__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49846_50198__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50202 = goog.getObjectByName(fn_str_50200,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50201)].join(''));

(fn_obj_50202.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50202.cljs$core$IFn$_invoke$arity$2(path,new_link_50191) : fn_obj_50202.call(null,path,new_link_50191));


var G__50211 = seq__49828_50192;
var G__50212 = chunk__49830_50193;
var G__50213 = count__49831_50194;
var G__50214 = (i__49832_50195 + (1));
seq__49828_50192 = G__50211;
chunk__49830_50193 = G__50212;
count__49831_50194 = G__50213;
i__49832_50195 = G__50214;
continue;
} else {
var temp__5804__auto___50216__$2 = cljs.core.seq(seq__49828_50192);
if(temp__5804__auto___50216__$2){
var seq__49828_50218__$1 = temp__5804__auto___50216__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49828_50218__$1)){
var c__5568__auto___50220 = cljs.core.chunk_first(seq__49828_50218__$1);
var G__50221 = cljs.core.chunk_rest(seq__49828_50218__$1);
var G__50222 = c__5568__auto___50220;
var G__50223 = cljs.core.count(c__5568__auto___50220);
var G__50224 = (0);
seq__49828_50192 = G__50221;
chunk__49830_50193 = G__50222;
count__49831_50194 = G__50223;
i__49832_50195 = G__50224;
continue;
} else {
var map__49848_50225 = cljs.core.first(seq__49828_50218__$1);
var map__49848_50226__$1 = cljs.core.__destructure_map(map__49848_50225);
var task_50227 = map__49848_50226__$1;
var fn_str_50228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848_50226__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848_50226__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50230 = goog.getObjectByName(fn_str_50228,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50229)].join(''));

(fn_obj_50230.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50230.cljs$core$IFn$_invoke$arity$2(path,new_link_50191) : fn_obj_50230.call(null,path,new_link_50191));


var G__50231 = cljs.core.next(seq__49828_50218__$1);
var G__50232 = null;
var G__50233 = (0);
var G__50234 = (0);
seq__49828_50192 = G__50231;
chunk__49830_50193 = G__50232;
count__49831_50194 = G__50233;
i__49832_50195 = G__50234;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50188);
});})(seq__49743_50126,chunk__49747_50127,count__49748_50128,i__49749_50129,seq__49300,chunk__49302,count__49303,i__49304,new_link_50191,path_match_50190,node_50188,seq__49743_50182__$1,temp__5804__auto___50181__$1,path,seq__49300__$1,temp__5804__auto__,map__49295,map__49295__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50190], 0));

goog.dom.insertSiblingAfter(new_link_50191,node_50188);


var G__50237 = cljs.core.next(seq__49743_50182__$1);
var G__50238 = null;
var G__50239 = (0);
var G__50240 = (0);
seq__49743_50126 = G__50237;
chunk__49747_50127 = G__50238;
count__49748_50128 = G__50239;
i__49749_50129 = G__50240;
continue;
} else {
var G__50241 = cljs.core.next(seq__49743_50182__$1);
var G__50242 = null;
var G__50243 = (0);
var G__50244 = (0);
seq__49743_50126 = G__50241;
chunk__49747_50127 = G__50242;
count__49748_50128 = G__50243;
i__49749_50129 = G__50244;
continue;
}
} else {
var G__50245 = cljs.core.next(seq__49743_50182__$1);
var G__50246 = null;
var G__50247 = (0);
var G__50248 = (0);
seq__49743_50126 = G__50245;
chunk__49747_50127 = G__50246;
count__49748_50128 = G__50247;
i__49749_50129 = G__50248;
continue;
}
}
} else {
}
}
break;
}


var G__50250 = cljs.core.next(seq__49300__$1);
var G__50251 = null;
var G__50252 = (0);
var G__50253 = (0);
seq__49300 = G__50250;
chunk__49302 = G__50251;
count__49303 = G__50252;
i__49304 = G__50253;
continue;
} else {
var G__50255 = cljs.core.next(seq__49300__$1);
var G__50256 = null;
var G__50257 = (0);
var G__50258 = (0);
seq__49300 = G__50255;
chunk__49302 = G__50256;
count__49303 = G__50257;
i__49304 = G__50258;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__49857){
var map__49858 = p__49857;
var map__49858__$1 = cljs.core.__destructure_map(map__49858);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49858__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__49861,done,error){
var map__49862 = p__49861;
var map__49862__$1 = cljs.core.__destructure_map(map__49862);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__49865,done,error){
var map__49866 = p__49865;
var map__49866__$1 = cljs.core.__destructure_map(map__49866);
var msg = map__49866__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49866__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49866__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49866__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49869){
var map__49873 = p__49869;
var map__49873__$1 = cljs.core.__destructure_map(map__49873);
var src = map__49873__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49873__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__49877 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__49877) : done.call(null,G__49877));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__49878){
var map__49879 = p__49878;
var map__49879__$1 = cljs.core.__destructure_map(map__49879);
var msg__$1 = map__49879__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49879__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e49880){var ex = e49880;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__49881){
var map__49882 = p__49881;
var map__49882__$1 = cljs.core.__destructure_map(map__49882);
var env = map__49882__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__49889){
var map__49890 = p__49889;
var map__49890__$1 = cljs.core.__destructure_map(map__49890);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49890__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49890__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__49892){
var map__49893 = p__49892;
var map__49893__$1 = cljs.core.__destructure_map(map__49893);
var svc = map__49893__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49893__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
