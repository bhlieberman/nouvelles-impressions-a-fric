import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./devtools.prefs.js";
import "./devtools.formatters.core.js";
import "./goog.dom.dom.js";
import "./goog.events.events.js";
import "./goog.style.style.js";
import "./goog.ui.popupmenu.js";
import "./goog.ui.menuitem.js";
import "./goog.ui.component.js";
import "./goog.object.object.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.js";
import "./day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.js";
import "./day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.js";
import "./day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.core.js";
import "./day8.re_frame_10x.components.re_com.js";
import "./day8.re_frame_10x.material.js";
import "./day8.re_frame_10x.styles.js";
import "./day8.re_frame_10x.panels.app_db.events.js";
import "./day8.re_frame_10x.panels.app_db.subs.js";
import "./day8.re_frame_10x.tools.datafy.js";
import "./day8.re_frame_10x.tools.reader.edn.js";
import "./day8.re_frame_10x.panels.settings.subs.js";
goog.provide('day8.re_frame_10x.components.cljs_devtools');
goog.scope(function(){
  day8.re_frame_10x.components.cljs_devtools.goog$module$goog$object = goog.module.get('goog.object');
});
day8.re_frame_10x.components.cljs_devtools.default_config = cljs.core.deref(devtools.prefs.default_config);
day8.re_frame_10x.components.cljs_devtools.base_config = (function day8$re_frame_10x$components$cljs_devtools$base_config(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"none-style","none-style",1613422814),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0)),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false,new cljs.core.Keyword(null,"item-style","item-style",-188747722),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"#000","#000",-1342202220)], null)], null),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_5,(0),day8.re_frame_10x.styles.gs_5], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1),(0),(0),(0))], null)], null)], null)], 0))], null);
});
day8.re_frame_10x.components.cljs_devtools.body_style_base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.styles.gs_2,day8.re_frame_10x.styles.gs_12], null)], null),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),day8.re_frame_10x.styles.nord3], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null);
day8.re_frame_10x.components.cljs_devtools.dark_ambiance_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord0,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord6], null)], 0)),new cljs.core.Keyword(null,"body-style","body-style",1462943820),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.body_style_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord0], null)], 0))], null);
day8.re_frame_10x.components.cljs_devtools.bright_ambiance_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord6,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord0], null)], 0)),new cljs.core.Keyword(null,"body-style","body-style",1462943820),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.body_style_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord6], null)], 0))], null);
day8.re_frame_10x.components.cljs_devtools.custom_config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.default_config,day8.re_frame_10x.components.cljs_devtools.base_config()], 0));
day8.re_frame_10x.components.cljs_devtools.header = (function day8$re_frame_10x$components$cljs_devtools$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27284 = arguments.length;
var i__5770__auto___27285 = (0);
while(true){
if((i__5770__auto___27285 < len__5769__auto___27284)){
args__5775__auto__.push((arguments[i__5770__auto___27285]));

var G__27286 = (i__5770__auto___27285 + (1));
i__5770__auto___27285 = G__27286;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic = (function (value,config,p__27187){
var vec__27188 = p__27187;
var map__27191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27188,(0),null);
var map__27191__$1 = cljs.core.__destructure_map(map__27191);
var render_paths_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27191__$1,new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398));
var previous_config__27171__auto__ = devtools.prefs.get_prefs();
var prefs__27172__auto__ = (cljs.core.truth_(render_paths_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.custom_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-path-annotations","render-path-annotations",-1890931512),true], null)], 0)):day8.re_frame_10x.components.cljs_devtools.custom_config);
try{devtools.prefs.set_prefs_BANG_(prefs__27172__auto__);

return devtools.formatters.core.header_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__27172__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__27172__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__27171__auto__);
}}));

(day8.re_frame_10x.components.cljs_devtools.header.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.header.cljs$lang$applyTo = (function (seq27182){
var G__27183 = cljs.core.first(seq27182);
var seq27182__$1 = cljs.core.next(seq27182);
var G__27184 = cljs.core.first(seq27182__$1);
var seq27182__$2 = cljs.core.next(seq27182__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27183,G__27184,seq27182__$2);
}));

day8.re_frame_10x.components.cljs_devtools.body = (function day8$re_frame_10x$components$cljs_devtools$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27287 = arguments.length;
var i__5770__auto___27288 = (0);
while(true){
if((i__5770__auto___27288 < len__5769__auto___27287)){
args__5775__auto__.push((arguments[i__5770__auto___27288]));

var G__27289 = (i__5770__auto___27288 + (1));
i__5770__auto___27288 = G__27289;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic = (function (value,config,p__27199){
var vec__27200 = p__27199;
var map__27203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27200,(0),null);
var map__27203__$1 = cljs.core.__destructure_map(map__27203);
var render_paths_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27203__$1,new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398));
var previous_config__27171__auto__ = devtools.prefs.get_prefs();
var prefs__27172__auto__ = (cljs.core.truth_(render_paths_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.custom_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-path-annotations","render-path-annotations",-1890931512),true], null)], 0)):day8.re_frame_10x.components.cljs_devtools.custom_config);
try{devtools.prefs.set_prefs_BANG_(prefs__27172__auto__);

return devtools.formatters.core.body_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__27172__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__27172__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__27171__auto__);
}}));

(day8.re_frame_10x.components.cljs_devtools.body.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.body.cljs$lang$applyTo = (function (seq27196){
var G__27197 = cljs.core.first(seq27196);
var seq27196__$1 = cljs.core.next(seq27196);
var G__27198 = cljs.core.first(seq27196__$1);
var seq27196__$2 = cljs.core.next(seq27196__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27197,G__27198,seq27196__$2);
}));

day8.re_frame_10x.components.cljs_devtools.has_body = (function day8$re_frame_10x$components$cljs_devtools$has_body(value,config){
var previous_config__27171__auto__ = devtools.prefs.get_prefs();
var prefs__27172__auto__ = day8.re_frame_10x.components.cljs_devtools.custom_config;
try{devtools.prefs.set_prefs_BANG_(prefs__27172__auto__);

return devtools.formatters.core.has_body_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__27172__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__27172__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__27171__auto__);
}});
day8.re_frame_10x.components.cljs_devtools.get_object = (function day8$re_frame_10x$components$cljs_devtools$get_object(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).object;
});
day8.re_frame_10x.components.cljs_devtools.get_config = (function day8$re_frame_10x$components$cljs_devtools$get_config(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).config;
});
day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$jsonml_style_factory$(style_name27206,params27207){
var style27209 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name27206)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"signature-background","signature-background",-261963584))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["> span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"text-top","text-top",-582075565)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style27209),new cljs.core.Keyword(null,"name","name",1843675177),style_name27206], null);
});

var factory_name27208_27290 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$);
day8.re_frame_10x.components.cljs_devtools.jsonml_style = (function day8$re_frame_10x$components$cljs_devtools$jsonml_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name27208_27290,day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$toggle_style_factory$(style_name27211,params27212,ambiance){
var base_style27216 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ambiance,new cljs.core.Keyword(null,"bright","bright",-1876684577)))?day8.re_frame_10x.styles.nord0:day8.re_frame_10x.styles.nord5)], null)], null)], null);
var key__18290__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style27216)));
var name27215 = (function (){var fexpr__27217 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__27217.cljs$core$IFn$_invoke$arity$3 ? fexpr__27217.cljs$core$IFn$_invoke$arity$3(style_name27211,key__18290__auto__,params27212) : fexpr__27217.call(null,style_name27211,key__18290__auto__,params27212));
})();
var style27214 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name27215)].join('')], null),base_style27216);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style27214),new cljs.core.Keyword(null,"name","name",1843675177),name27215], null);
});

var factory_name27213_27291 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$);
day8.re_frame_10x.components.cljs_devtools.toggle_style = (function day8$re_frame_10x$components$cljs_devtools$toggle_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name27213_27291,day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.components.cljs_devtools.data_structure = (function day8$re_frame_10x$components$cljs_devtools$data_structure(_,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),path], null));
return (function (jsonml,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.toggle_style(new cljs.core.Keyword(null,"bright","bright",-1876684577)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),path__$1], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right], null))], null)], null),(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return day8.re_frame_10x.components.cljs_devtools.has_body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
} else {
return and__5043__auto__;
}
})())?(function (){var G__27218 = day8.re_frame_10x.components.cljs_devtools.body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__27219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__27218,G__27219) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__27218,G__27219));
})():(function (){var G__27220 = day8.re_frame_10x.components.cljs_devtools.header(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__27221 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"header","header",119441134));
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__27220,G__27221) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__27220,G__27221));
})())], null);
});
});
day8.re_frame_10x.components.cljs_devtools.data_structure_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$data_structure_with_path_annotations(_,___$1,___$2,___$3){
var render_paths_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881)], null));
return (function (jsonml,indexed_path,devtools_path,p__27222){
var map__27223 = p__27222;
var map__27223__$1 = cljs.core.__destructure_map(map__27223);
var opts = map__27223__$1;
var expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27223__$1,new cljs.core.Keyword(null,"expand?","expand?",-1744295862));
var path_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27223__$1,new cljs.core.Keyword(null,"path-id","path-id",-73169688));
var node_expanded_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),indexed_path], null)));
var show_body_QMARK_ = (function (){var and__5043__auto__ = day8.re_frame_10x.components.cljs_devtools.has_body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = (function (){var and__5043__auto____$1 = node_expanded_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return (!((expand_QMARK_ == null)));
} else {
return and__5043__auto____$1;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return expand_QMARK_;
}
} else {
return and__5043__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.toggle_style(new cljs.core.Keyword(null,"bright","bright",-1876684577)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),indexed_path], null));

return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","expand","day8.re-frame-10x.panels.app-db.events/expand",-1429129798),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),path_id,new cljs.core.Keyword(null,"expand?","expand?",-1744295862),false], null)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(show_body_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right], null))], null)], null),(cljs.core.truth_(show_body_QMARK_)?(function (){var G__27224 = day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398),cljs.core.deref(render_paths_QMARK_)], null)], 0));
var G__27225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,new cljs.core.Keyword(null,"body","body",-2049205669));
var G__27226 = devtools_path;
var G__27227 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__27224,G__27225,G__27226,G__27227) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__27224,G__27225,G__27226,G__27227));
})():(function (){var G__27228 = day8.re_frame_10x.components.cljs_devtools.header(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__27229 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,new cljs.core.Keyword(null,"header","header",119441134));
var G__27230 = devtools_path;
var G__27231 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__27228,G__27229,G__27230,G__27231) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__27228,G__27229,G__27230,G__27231));
})())], null);
});
});
/**
 * This function converts jsonml css-strings to valid css maps for hiccup.
 *   Example: 'margin-left:0px;min-height:14px;' converts to
 *         {:margin-left '0px', :min-height '14px'}
 */
day8.re_frame_10x.components.cljs_devtools.string__GT_css = (function day8$re_frame_10x$components$cljs_devtools$string__GT_css(css_string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__27233){
var vec__27234 = p__27233;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27234,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27234,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27232_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__27232_SHARP_,/:/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(css_string,/;/)));
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup = (function day8$re_frame_10x$components$cljs_devtools$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__27239 = jsonml;
var seq__27240 = cljs.core.seq(vec__27239);
var first__27241 = cljs.core.first(seq__27240);
var seq__27240__$1 = cljs.core.next(seq__27240);
var tag_name = first__27241;
var first__27241__$1 = cljs.core.first(seq__27240__$1);
var seq__27240__$2 = cljs.core.next(seq__27240__$1);
var attributes = first__27241__$1;
var children = seq__27240__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.components.cljs_devtools.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__27242 = child;
var G__27243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__27242,G__27243) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__27242,G__27243));
})),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.data_structure,jsonml,path], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"annotation")){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__27244 = child;
var G__27245 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__27244,G__27245) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__27244,G__27245));
})),children);
} else {
return jsonml;

}
}
}
}
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can be found at
 *   https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 */
day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$jsonml__GT_hiccup_with_path_annotations(jsonml,indexed_path,devtools_path,p__27247){
var map__27248 = p__27247;
var map__27248__$1 = cljs.core.__destructure_map(map__27248);
var opts = map__27248__$1;
var click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27248__$1,new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084));
var middle_click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27248__$1,new cljs.core.Keyword(null,"middle-click-listener","middle-click-listener",-1619151179));
var menu_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27248__$1,new cljs.core.Keyword(null,"menu-listener","menu-listener",-1541878230));
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__27249 = jsonml;
var seq__27250 = cljs.core.seq(vec__27249);
var first__27251 = cljs.core.first(seq__27250);
var seq__27250__$1 = cljs.core.next(seq__27250);
var tag_name = first__27251;
var first__27251__$1 = cljs.core.first(seq__27250__$1);
var seq__27250__$2 = cljs.core.next(seq__27250__$1);
var attributes = first__27251__$1;
var children = seq__27250__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.components.cljs_devtools.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__27252 = child;
var G__27253 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__27254 = devtools_path;
var G__27255 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__27252,G__27253,G__27254,G__27255) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__27252,G__27253,G__27254,G__27255));
})),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.data_structure_with_path_annotations,jsonml,indexed_path,devtools_path,opts], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"annotation")){
var jsonml_path_index = cljs.core.last(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
var absolute_devtools_path = (cljs.core.truth_(jsonml_path_index)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools_path,jsonml_path_index):devtools_path);
var element_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var child_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var child_value = (((child_element instanceof Array))?cljs.core.nth.cljs$core$IFn$_invoke$arity$3(child_element,(2),null):null);
var child_component = (function (i,child){
var G__27256 = child;
var G__27257 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__27258 = absolute_devtools_path;
var G__27259 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__27256,G__27257,G__27258,G__27259) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__27256,G__27257,G__27258,G__27259));
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(((!(((typeof child_value === 'string') || (((typeof child_value === 'number') || ((child_value instanceof cljs.core.Keyword))))))))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),element_id,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__27246_SHARP_){
if(cljs.core.truth_(p1__27246_SHARP_)){
var G__27260 = p1__27246_SHARP_;
goog.events.listen(G__27260,"contextmenu",menu_listener);

goog.events.listen(G__27260,"dblclick",click_listener);

goog.events.listen(G__27260,"mousedown",middle_click_listener);

return G__27260;
} else {
return null;
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),"path-annotation",new cljs.core.Keyword(null,"data-path","data-path",674802181),cljs.core.str.cljs$core$IFn$_invoke$arity$1(absolute_devtools_path)], null))], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(child_component,children));
} else {
return jsonml;

}
}
}
}
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_ = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_QMARK_(data){
return ((typeof data === 'string') || ((((data instanceof RegExp)) || (((typeof data === 'number') || (((cljs.core.boolean_QMARK_(data)) || ((data == null)))))))));
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_style_factory$(style_name27261,params27262){
var style27264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name27261)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"signature-background","signature-background",-261963584)),new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"bool","bool",1444635321))], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style27264),new cljs.core.Keyword(null,"name","name",1843675177),style_name27261], null);
});

var factory_name27263_27292 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$);
day8.re_frame_10x.components.cljs_devtools.prn_str_render_style = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name27263_27292,day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.prn_str_render_style()], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
});
day8.re_frame_10x.components.cljs_devtools.simple_render = (function day8$re_frame_10x$components$cljs_devtools$simple_render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27293 = arguments.length;
var i__5770__auto___27294 = (0);
while(true){
if((i__5770__auto___27294 < len__5769__auto___27293)){
args__5775__auto__.push((arguments[i__5770__auto___27294]));

var G__27295 = (i__5770__auto___27294 + (1));
i__5770__auto___27294 = G__27295;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__27269){
var vec__27270 = p__27269;
var map__27273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270,(0),null);
var map__27273__$1 = cljs.core.__destructure_map(map__27273);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27273__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27273__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var ns__GT_alias = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ns->alias","day8.re-frame-10x.panels.settings.subs/ns->alias",925252888)], null)));
var alias_QMARK_ = (function (){var and__5043__auto__ = cljs.core.seq(ns__GT_alias);
if(and__5043__auto__){
return cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","alias-namespaces?","day8.re-frame-10x.panels.settings.subs/alias-namespaces?",507809565)], null)));
} else {
return and__5043__auto__;
}
})();
var data__$1 = (function (){var G__27274 = data;
var G__27274__$1 = (cljs.core.truth_(alias_QMARK_)?day8.re_frame_10x.tools.datafy.alias_namespaces(G__27274,ns__GT_alias):G__27274);
if(cljs.core.truth_(sort_QMARK_)){
return day8.re_frame_10x.tools.datafy.deep_sorted_map(G__27274__$1);
} else {
return G__27274__$1;
}
})();
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.components.cljs_devtools.jsonml_style())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),((day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_(data__$1))?day8.re_frame_10x.components.cljs_devtools.prn_str_render(data__$1):day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup(day8.re_frame_10x.components.cljs_devtools.header(data__$1,null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))))], null);
}));

(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$lang$applyTo = (function (seq27266){
var G__27267 = cljs.core.first(seq27266);
var seq27266__$1 = cljs.core.next(seq27266);
var G__27268 = cljs.core.first(seq27266__$1);
var seq27266__$2 = cljs.core.next(seq27266__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27267,G__27268,seq27266__$2);
}));

day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$simple_render_with_path_annotations(p__27278){
var map__27279 = p__27278;
var map__27279__$1 = cljs.core.__destructure_map(map__27279);
var opts = map__27279__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27279__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27279__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27279__$1,new cljs.core.Keyword(null,"path-id","path-id",-73169688));
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27279__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var render_paths_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881)], null)));
var open_new_inspectors_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","open-new-inspectors?","day8.re-frame-10x.panels.settings.subs/open-new-inspectors?",965777560)], null)));
var ns__GT_alias = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ns->alias","day8.re-frame-10x.panels.settings.subs/ns->alias",925252888)], null)));
var alias_QMARK_ = (function (){var and__5043__auto__ = cljs.core.seq(ns__GT_alias);
if(and__5043__auto__){
return cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","alias-namespaces?","day8.re-frame-10x.panels.settings.subs/alias-namespaces?",507809565)], null)));
} else {
return and__5043__auto__;
}
})();
var data__$1 = (function (){var G__27280 = data;
var G__27280__$1 = (cljs.core.truth_(alias_QMARK_)?day8.re_frame_10x.tools.datafy.alias_namespaces(G__27280,ns__GT_alias):G__27280);
if(cljs.core.truth_(sort_QMARK_)){
return day8.re_frame_10x.tools.datafy.deep_sorted_map(G__27280__$1);
} else {
return G__27280__$1;
}
})();
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style(),new cljs.core.Keyword(null,"child","child",623967545),((day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_(data__$1))?day8.re_frame_10x.components.cljs_devtools.prn_str_render(data__$1):day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations(day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic(data__$1,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398),render_paths_QMARK_], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db-path",path], null),(function (){var or__5045__auto__ = path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084),(function (p1__27275_SHARP_){
var temp__5804__auto__ = (function (){var G__27281 = p1__27275_SHARP_;
var G__27281__$1 = (((G__27281 == null))?null:G__27281.target);
var G__27281__$2 = (((G__27281__$1 == null))?null:G__27281__$1.parentElement);
if((G__27281__$2 == null)){
return null;
} else {
return G__27281__$2.getAttribute("data-path");
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var path__$1 = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27275_SHARP_.button,(0))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316),path__$1], null)], null));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"middle-click-listener","middle-click-listener",-1619151179),(function (p1__27276_SHARP_){
var temp__5804__auto__ = (function (){var G__27282 = p1__27276_SHARP_;
var G__27282__$1 = (((G__27282 == null))?null:G__27282.target);
if((G__27282__$1 == null)){
return null;
} else {
return G__27282__$1.parentElement;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var target = temp__5804__auto__;
var path__$1 = target.getAttribute("data-path");
var btn = p1__27276_SHARP_.button;
p1__27276_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(btn,(1))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path-and-skip-to","day8.re-frame-10x.panels.app-db.events/create-path-and-skip-to",-195622997),path__$1,open_new_inspectors_QMARK_], null));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"menu-listener","menu-listener",-1541878230),(function (p1__27277_SHARP_){
p1__27277_SHARP_.preventDefault();

return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","open-popup-menu","day8.re-frame-10x.panels.app-db.events/open-popup-menu",-559965598),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27277_SHARP_.clientX,p1__27277_SHARP_.clientY], null),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"data-path","data-path",674802181),(function (){var G__27283 = p1__27277_SHARP_;
var G__27283__$1 = (((G__27283 == null))?null:G__27283.target);
var G__27283__$2 = (((G__27283__$1 == null))?null:G__27283__$1.parentElement);
var G__27283__$3 = (((G__27283__$2 == null))?null:G__27283__$2.getAttribute("data-path"));
if((G__27283__$3 == null)){
return null;
} else {
return day8.re_frame_10x.tools.reader.edn.read_string_maybe(G__27283__$3);
}
})()], null)], null));
})], null)], 0))))], null);
});

//# sourceMappingURL=day8.re_frame_10x.components.cljs_devtools.js.map
