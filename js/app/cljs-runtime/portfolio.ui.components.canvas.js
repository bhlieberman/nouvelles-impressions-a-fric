goog.provide('portfolio.ui.components.canvas');
portfolio.ui.components.canvas.get_iframe = (function portfolio$ui$components$canvas$get_iframe(canvas_el){
var G__32296 = canvas_el;
if((G__32296 == null)){
return null;
} else {
return G__32296.querySelector(".canvas");
}
});
portfolio.ui.components.canvas.get_iframe_document = (function portfolio$ui$components$canvas$get_iframe_document(canvas_el){
var G__32297 = canvas_el;
var G__32297__$1 = (((G__32297 == null))?null:portfolio.ui.components.canvas.get_iframe(G__32297));
var G__32297__$2 = (((G__32297__$1 == null))?null:G__32297__$1.contentWindow);
if((G__32297__$2 == null)){
return null;
} else {
return G__32297__$2.document;
}
});
portfolio.ui.components.canvas.get_iframe_body = (function portfolio$ui$components$canvas$get_iframe_body(canvas_el){
var G__32299 = canvas_el;
var G__32299__$1 = (((G__32299 == null))?null:portfolio.ui.components.canvas.get_iframe_document(G__32299));
if((G__32299__$1 == null)){
return null;
} else {
return G__32299__$1.body;
}
});
portfolio.ui.components.canvas.report_error = (function portfolio$ui$components$canvas$report_error(cause,e,scene){
return portfolio.ui.actions.dispatch.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"report-render-error","report-render-error",-2098634445).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(scene)),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("action","exception","action/exception",-1254845906),e,new cljs.core.Keyword("action","cause","action/cause",1369441962),cause], null)], 0));
});
portfolio.ui.components.canvas.render_scene = (function portfolio$ui$components$canvas$render_scene(el,p__32302){
var map__32303 = p__32302;
var map__32303__$1 = cljs.core.__destructure_map(map__32303);
var scene = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32303__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
var tools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32303__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32303__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var iframe = portfolio.ui.components.canvas.get_iframe(el);
var canvas = (function (){var G__32307 = iframe;
var G__32307__$1 = (((G__32307 == null))?null:G__32307.contentDocument);
if((G__32307__$1 == null)){
return null;
} else {
return G__32307__$1.getElementById("canvas");
}
})();
var error = el.querySelector(".error-container");
if(cljs.core.truth_(error)){
error.parentNode.removeChild(error);

(iframe.style.display = "block");
} else {
}

var seq__32360_32612 = cljs.core.seq(tools);
var chunk__32361_32613 = null;
var count__32362_32614 = (0);
var i__32363_32615 = (0);
while(true){
if((i__32363_32615 < count__32362_32614)){
var tool_32616 = chunk__32361_32613.cljs$core$IIndexed$_nth$arity$2(null,i__32363_32615);
try{portfolio.ui.canvas.protocols.prepare_canvas(tool_32616,el,opt);
}catch (e32435){var e_32617 = e32435;
portfolio.ui.components.canvas.report_error(["Failed to prepare canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_32616))].join(''),e_32617,scene);
}

var G__32618 = seq__32360_32612;
var G__32619 = chunk__32361_32613;
var G__32620 = count__32362_32614;
var G__32621 = (i__32363_32615 + (1));
seq__32360_32612 = G__32618;
chunk__32361_32613 = G__32619;
count__32362_32614 = G__32620;
i__32363_32615 = G__32621;
continue;
} else {
var temp__5804__auto___32622 = cljs.core.seq(seq__32360_32612);
if(temp__5804__auto___32622){
var seq__32360_32623__$1 = temp__5804__auto___32622;
if(cljs.core.chunked_seq_QMARK_(seq__32360_32623__$1)){
var c__5568__auto___32624 = cljs.core.chunk_first(seq__32360_32623__$1);
var G__32625 = cljs.core.chunk_rest(seq__32360_32623__$1);
var G__32626 = c__5568__auto___32624;
var G__32627 = cljs.core.count(c__5568__auto___32624);
var G__32628 = (0);
seq__32360_32612 = G__32625;
chunk__32361_32613 = G__32626;
count__32362_32614 = G__32627;
i__32363_32615 = G__32628;
continue;
} else {
var tool_32629 = cljs.core.first(seq__32360_32623__$1);
try{portfolio.ui.canvas.protocols.prepare_canvas(tool_32629,el,opt);
}catch (e32463){var e_32630 = e32463;
portfolio.ui.components.canvas.report_error(["Failed to prepare canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_32629))].join(''),e_32630,scene);
}

var G__32631 = cljs.core.next(seq__32360_32623__$1);
var G__32632 = null;
var G__32633 = (0);
var G__32634 = (0);
seq__32360_32612 = G__32631;
chunk__32361_32613 = G__32632;
count__32362_32614 = G__32633;
i__32363_32615 = G__32634;
continue;
}
} else {
}
}
break;
}

try{portfolio.adapter.render_component(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene,new cljs.core.Keyword(null,"component","component",1555936782),(function (){var fexpr__32482 = new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene);
return (fexpr__32482.cljs$core$IFn$_invoke$arity$0 ? fexpr__32482.cljs$core$IFn$_invoke$arity$0() : fexpr__32482.call(null));
})()),canvas);

return setTimeout((function (){
var seq__32487_32635 = cljs.core.seq(tools);
var chunk__32488_32636 = null;
var count__32489_32637 = (0);
var i__32490_32638 = (0);
while(true){
if((i__32490_32638 < count__32489_32637)){
var tool_32639 = chunk__32488_32636.cljs$core$IIndexed$_nth$arity$2(null,i__32490_32638);
try{portfolio.ui.canvas.protocols.finalize_canvas(tool_32639,el,opt);
}catch (e32502){var e_32640 = e32502;
portfolio.ui.components.canvas.report_error(["Failed to finalize canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_32639))].join(''),e_32640,scene);
}

var G__32641 = seq__32487_32635;
var G__32642 = chunk__32488_32636;
var G__32643 = count__32489_32637;
var G__32644 = (i__32490_32638 + (1));
seq__32487_32635 = G__32641;
chunk__32488_32636 = G__32642;
count__32489_32637 = G__32643;
i__32490_32638 = G__32644;
continue;
} else {
var temp__5804__auto___32645 = cljs.core.seq(seq__32487_32635);
if(temp__5804__auto___32645){
var seq__32487_32647__$1 = temp__5804__auto___32645;
if(cljs.core.chunked_seq_QMARK_(seq__32487_32647__$1)){
var c__5568__auto___32648 = cljs.core.chunk_first(seq__32487_32647__$1);
var G__32649 = cljs.core.chunk_rest(seq__32487_32647__$1);
var G__32650 = c__5568__auto___32648;
var G__32651 = cljs.core.count(c__5568__auto___32648);
var G__32652 = (0);
seq__32487_32635 = G__32649;
chunk__32488_32636 = G__32650;
count__32489_32637 = G__32651;
i__32490_32638 = G__32652;
continue;
} else {
var tool_32654 = cljs.core.first(seq__32487_32647__$1);
try{portfolio.ui.canvas.protocols.finalize_canvas(tool_32654,el,opt);
}catch (e32506){var e_32655 = e32506;
portfolio.ui.components.canvas.report_error(["Failed to finalize canvas with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool_32654))].join(''),e_32655,scene);
}

var G__32656 = cljs.core.next(seq__32487_32647__$1);
var G__32657 = null;
var G__32658 = (0);
var G__32659 = (0);
seq__32487_32635 = G__32656;
chunk__32488_32636 = G__32657;
count__32489_32637 = G__32658;
i__32490_32638 = G__32659;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto__ = iframe.contentWindow;
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
return win.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),"scene-rendered",new cljs.core.Keyword(null,"scene-id","scene-id",2130439689),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene))], null)))], null)),"*");
} else {
return null;
}
}),(50));
}catch (e32474){var e = e32474;
return portfolio.ui.components.canvas.report_error(["Failed to render ",["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene)),"'"].join('')].join(''),e,scene);
}});
portfolio.ui.components.canvas.on_mounted = (function portfolio$ui$components$canvas$on_mounted(el,f){
if(cljs.core.truth_((function (){var G__32508 = el;
var G__32508__$1 = (((G__32508 == null))?null:G__32508.contentDocument);
if((G__32508__$1 == null)){
return null;
} else {
return G__32508__$1.getElementById("canvas");
}
})())){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return el.addEventListener("load",(function (_){
var doc = el.contentDocument;
(doc.documentElement.style.height = "auto");

if(cljs.core.truth_(doc.getElementById("canvas"))){
} else {
var el_32660__$1 = doc.createElement("div");
(el_32660__$1.id = "canvas");

doc.body.appendChild(el_32660__$1);
}

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
}
});
portfolio.ui.components.canvas.init_canvas = (function portfolio$ui$components$canvas$init_canvas(el,data,f){
var iframe = portfolio.ui.components.canvas.get_iframe(el);
var document__$1 = portfolio.ui.components.canvas.get_iframe_document(el);
var head = document__$1.head;
var loaded = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var try_complete = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.deref(loaded))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
(document__$1.title = "Component scene");

(iframe.contentWindow.portfolioMode = "client");

iframe.contentWindow.addEventListener("message",(function (e){
return window.postMessage(e.data);
}));

try_complete();

var seq__32522_32665 = cljs.core.seq(new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(data));
var chunk__32523_32666 = null;
var count__32524_32667 = (0);
var i__32525_32668 = (0);
while(true){
if((i__32525_32668 < count__32524_32667)){
var path_32673 = chunk__32523_32666.cljs$core$IIndexed$_nth$arity$2(null,i__32525_32668);
var link_32675 = document.createElement("link");
(link_32675.rel = "stylesheet");

(link_32675.type = "text/css");

(link_32675.href = path_32673);

link_32675.addEventListener("load",((function (seq__32522_32665,chunk__32523_32666,count__32524_32667,i__32525_32668,link_32675,path_32673,iframe,document__$1,head,loaded,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__32522_32665,chunk__32523_32666,count__32524_32667,i__32525_32668,link_32675,path_32673,iframe,document__$1,head,loaded,try_complete))
);

head.appendChild(link_32675);


var G__32676 = seq__32522_32665;
var G__32677 = chunk__32523_32666;
var G__32678 = count__32524_32667;
var G__32679 = (i__32525_32668 + (1));
seq__32522_32665 = G__32676;
chunk__32523_32666 = G__32677;
count__32524_32667 = G__32678;
i__32525_32668 = G__32679;
continue;
} else {
var temp__5804__auto___32680 = cljs.core.seq(seq__32522_32665);
if(temp__5804__auto___32680){
var seq__32522_32681__$1 = temp__5804__auto___32680;
if(cljs.core.chunked_seq_QMARK_(seq__32522_32681__$1)){
var c__5568__auto___32682 = cljs.core.chunk_first(seq__32522_32681__$1);
var G__32683 = cljs.core.chunk_rest(seq__32522_32681__$1);
var G__32684 = c__5568__auto___32682;
var G__32685 = cljs.core.count(c__5568__auto___32682);
var G__32686 = (0);
seq__32522_32665 = G__32683;
chunk__32523_32666 = G__32684;
count__32524_32667 = G__32685;
i__32525_32668 = G__32686;
continue;
} else {
var path_32698 = cljs.core.first(seq__32522_32681__$1);
var link_32699 = document.createElement("link");
(link_32699.rel = "stylesheet");

(link_32699.type = "text/css");

(link_32699.href = path_32698);

link_32699.addEventListener("load",((function (seq__32522_32665,chunk__32523_32666,count__32524_32667,i__32525_32668,link_32699,path_32698,seq__32522_32681__$1,temp__5804__auto___32680,iframe,document__$1,head,loaded,try_complete){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.inc);

return try_complete();
});})(seq__32522_32665,chunk__32523_32666,count__32524_32667,i__32525_32668,link_32699,path_32698,seq__32522_32681__$1,temp__5804__auto___32680,iframe,document__$1,head,loaded,try_complete))
);

head.appendChild(link_32699);


var G__32702 = cljs.core.next(seq__32522_32681__$1);
var G__32703 = null;
var G__32704 = (0);
var G__32705 = (0);
seq__32522_32665 = G__32702;
chunk__32523_32666 = G__32703;
count__32524_32667 = G__32704;
i__32525_32668 = G__32705;
continue;
}
} else {
}
}
break;
}

var vec__32536 = new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32536,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32536,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32536,(2),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32536,(3),null);
if(cljs.core.truth_(t)){
(document__$1.body.style.paddingTop = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"px"].join(''));
} else {
}

if(cljs.core.truth_(r)){
(document__$1.body.style.paddingBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),"px"].join(''));
} else {
}

if(cljs.core.truth_(b)){
(document__$1.documentElement.style.paddingLeft = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),"px"].join(''));
} else {
}

if(cljs.core.truth_(l)){
return (document__$1.documentElement.style.paddingRight = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),"px"].join(''));
} else {
return null;
}
});
portfolio.ui.components.canvas.process_render_queue = (function portfolio$ui$components$canvas$process_render_queue(el){
if(cljs.core.truth_(el.renderFromQueue)){
return portfolio.ui.components.canvas.on_mounted(portfolio.ui.components.canvas.get_iframe(el),(function (){
var temp__5804__auto__ = el.renderQueue;
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
(el.renderQueue = null);

return portfolio.ui.components.canvas.render_scene(el,data);
} else {
return null;
}
}));
} else {
return null;
}
});
portfolio.ui.components.canvas.enqueue_render_data = (function portfolio$ui$components$canvas$enqueue_render_data(el,data){
(el.renderQueue = data);

return portfolio.ui.components.canvas.process_render_queue(el);
});
/**
 * 
 */
portfolio.ui.components.canvas.Canvas = (function (){var G__32541 = (function (data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__5045__auto__ = new cljs.core.Keyword("background","background-color","background/background-color",1902638780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "var(--canvas-bg)";
}
})(),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.25s, height 0.25s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe.canvas","iframe.canvas",2014956060),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "/portfolio/canvas.html";
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Component scene",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__5045__auto__ = ((typeof new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),((typeof new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null)], null)], null)], null)], null);
});
var G__32542 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Canvas",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (el,data){
(el.renderQueue = data);

return portfolio.ui.components.canvas.on_mounted(portfolio.ui.components.canvas.get_iframe(el),(function (){
return portfolio.ui.components.canvas.init_canvas(el,data,(function (){
(el.renderFromQueue = true);

return portfolio.ui.components.canvas.process_render_queue(el);
}));
}));
}),new cljs.core.Keyword(null,"on-update","on-update",1680216496),(function (el,data){
return portfolio.ui.components.canvas.enqueue_render_data(el,data);
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__32541,G__32542) : dumdom.core.component.call(null,G__32541,G__32542));
})();
/**
 * 
 */
portfolio.ui.components.canvas.Toolbar = (function (){var G__32551 = (function (p__32553){
var map__32554 = p__32553;
var map__32554__$1 = cljs.core.__destructure_map(map__32554);
var buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32554__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["var(--fg)",(48),"var(--bg)",(20),(20),"space-between",(10),"flex","1px solid var(--separator)"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$canvas$iter__32555(s__32556){
return (new cljs.core.LazySeq(null,(function (){
var s__32556__$1 = s__32556;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32556__$1);
if(temp__5804__auto__){
var s__32556__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32556__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32556__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32558 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32557 = (0);
while(true){
if((i__32557 < size__5522__auto__)){
var tool = cljs.core._nth(c__5521__auto__,i__32557);
cljs.core.chunk_append(b__32558,portfolio.ui.canvas.protocols.render_toolbar_button(tool));

var G__32734 = (i__32557 + (1));
i__32557 = G__32734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32558),portfolio$ui$components$canvas$iter__32555(cljs.core.chunk_rest(s__32556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32558),null);
}
} else {
var tool = cljs.core.first(s__32556__$2);
return cljs.core.cons(portfolio.ui.canvas.protocols.render_toolbar_button(tool),portfolio$ui$components$canvas$iter__32555(cljs.core.rest(s__32556__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),null], null), null),new cljs.core.Keyword(null,"align","align",1964212802)),buttons));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$canvas$iter__32560(s__32561){
return (new cljs.core.LazySeq(null,(function (){
var s__32561__$1 = s__32561;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32561__$1);
if(temp__5804__auto__){
var s__32561__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32561__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32561__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32563 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32562 = (0);
while(true){
if((i__32562 < size__5522__auto__)){
var tool = cljs.core._nth(c__5521__auto__,i__32562);
cljs.core.chunk_append(b__32563,portfolio.ui.canvas.protocols.render_toolbar_button(tool));

var G__32765 = (i__32562 + (1));
i__32562 = G__32765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32563),portfolio$ui$components$canvas$iter__32560(cljs.core.chunk_rest(s__32561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32563),null);
}
} else {
var tool = cljs.core.first(s__32561__$2);
return cljs.core.cons(portfolio.ui.canvas.protocols.render_toolbar_button(tool),portfolio$ui$components$canvas$iter__32560(cljs.core.rest(s__32561__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),null], null), null),new cljs.core.Keyword(null,"align","align",1964212802)),buttons));
})()], null)], null);
});
var G__32552 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Toolbar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__32551,G__32552) : dumdom.core.component.call(null,G__32551,G__32552));
})();
/**
 * 
 */
portfolio.ui.components.canvas.CanvasPanel = (function (){var G__32564 = (function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #ccc",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(new cljs.core.Keyword(null,"minimized?","minimized?",1807883709).cljs$core$IFn$_invoke$arity$1(data))?"40px":"30%"),new cljs.core.Keyword(null,"transition","transition",765692007),"height 0.25s",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5804__auto__)){
var button = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(20),new cljs.core.Keyword(null,"top","top",-1856271961),(10)], null)], null),(portfolio.ui.components.triangle.TriangleButton.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.triangle.TriangleButton.cljs$core$IFn$_invoke$arity$1(button) : portfolio.ui.components.triangle.TriangleButton.call(null,button))], null);
} else {
return null;
}
})(),(portfolio.ui.components.tab_bar.TabBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.tab_bar.TabBar.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.tab_bar.TabBar.call(null,data)),(function (){var G__32566 = data;
var G__32566__$1 = (((G__32566 == null))?null:new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__32566));
if((G__32566__$1 == null)){
return null;
} else {
return portfolio.ui.view.render_view(G__32566__$1);
}
})()], null);
});
var G__32565 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasPanel"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__32564,G__32565) : dumdom.core.component.call(null,G__32564,G__32565));
})();
/**
 * 
 */
portfolio.ui.components.canvas.CanvasHeader = (function (){var G__32568 = (function (p__32570){
var map__32571 = p__32570;
var map__32571__$1 = cljs.core.__destructure_map(map__32571);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32571__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32571__$1,new cljs.core.Keyword(null,"url","url",276297046));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32571__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32571__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3","h2.h3",132008135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.empty_QMARK_(description))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 10px"], null))], null),(cljs.core.truth_(url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null):title)], null),((cljs.core.empty_QMARK_(description))?null:(function (){var G__32573 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),description,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309)], null);
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(G__32573) : portfolio.ui.components.markdown.Markdown.call(null,G__32573));
})()),((cljs.core.empty_QMARK_(code))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.h4","h3.h4",122011178),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),"Scene code"], null),(function (){var G__32575 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null);
return (portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.code.Code.cljs$core$IFn$_invoke$arity$1(G__32575) : portfolio.ui.components.code.Code.call(null,G__32575));
})()], null))], null);
});
var G__32569 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasHeader",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"title","title",636505583)], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__32568,G__32569) : dumdom.core.component.call(null,G__32568,G__32569));
})();
portfolio.ui.components.canvas.render_canvas = (function portfolio$ui$components$canvas$render_canvas(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.canvas-wrapper","div.canvas-wrapper",77954480),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(cljs.core.select_keys(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"code","code",1586293142)], null))))?(portfolio.ui.components.canvas.CanvasHeader.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.CanvasHeader.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.canvas.CanvasHeader.call(null,data)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data))?(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data));
}
})())?(function (){var G__32576 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data));
return (portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1(G__32576) : portfolio.ui.components.error.Error.call(null,G__32576));
})():(portfolio.ui.components.canvas.Canvas.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Canvas.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.canvas.Canvas.call(null,data))):null)], null))], null);
});
portfolio.ui.components.canvas.direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),"column",new cljs.core.Keyword(null,"cols","cols",-1914801295),"row"], null);
/**
 * 
 */
portfolio.ui.components.canvas.WrappedMenuBar = (function (){var G__32577 = (function (menu_bar){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--bg)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--fg)",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px"], null)], null),(function (){var G__32579 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(menu_bar,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704));
return (portfolio.ui.components.menu_bar.MenuBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.menu_bar.MenuBar.cljs$core$IFn$_invoke$arity$1(G__32579) : portfolio.ui.components.menu_bar.MenuBar.call(null,G__32579));
})()], null);
});
var G__32578 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/WrappedMenuBar"], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__32577,G__32578) : dumdom.core.component.call(null,G__32577,G__32578));
})();
portfolio.ui.components.canvas.get_grid_styles = (function portfolio$ui$components$canvas$get_grid_styles(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data))?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(data)], null)));
});
portfolio.ui.components.canvas.touch_x = (function portfolio$ui$components$canvas$touch_x(e){
var or__5045__auto__ = (function (){var G__32580 = e;
var G__32580__$1 = (((G__32580 == null))?null:G__32580.changedTouches);
var G__32580__$2 = (((G__32580__$1 == null))?null:(G__32580__$1[(0)]));
if((G__32580__$2 == null)){
return null;
} else {
return G__32580__$2.screenX;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.screenX;
}
});
portfolio.ui.components.canvas.touch_y = (function portfolio$ui$components$canvas$touch_y(e){
var or__5045__auto__ = (function (){var G__32581 = e;
var G__32581__$1 = (((G__32581 == null))?null:G__32581.changedTouches);
var G__32581__$2 = (((G__32581__$1 == null))?null:(G__32581__$1[(0)]));
if((G__32581__$2 == null)){
return null;
} else {
return G__32581__$2.screenY;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.screenY;
}
});
portfolio.ui.components.canvas.get_style_n = (function portfolio$ui$components$canvas$get_style_n(style,prop){
return parseInt(style.getPropertyValue(prop),(10));
});
portfolio.ui.components.canvas.get_dim = (function portfolio$ui$components$canvas$get_dim(props,el){
var style = window.getComputedStyle(el);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),portfolio.ui.components.canvas.get_style_n(style,"height"),new cljs.core.Keyword(null,"offset","offset",296498311),portfolio.ui.components.canvas.get_style_n(style,"top")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),portfolio.ui.components.canvas.get_style_n(style,"width"),new cljs.core.Keyword(null,"offset","offset",296498311),portfolio.ui.components.canvas.get_style_n(style,"left")], null);
}
});
portfolio.ui.components.canvas.set_size = (function portfolio$ui$components$canvas$set_size(props,el,size){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return (el.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''));
} else {
return (el.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''));
}
});
portfolio.ui.components.canvas.set_offset = (function portfolio$ui$components$canvas$set_offset(props,el,offset){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return (el.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join(''));
} else {
return (el.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join(''));
}
});
portfolio.ui.components.canvas.get_neighbour = (function portfolio$ui$components$canvas$get_neighbour(el){
return el.nextSibling;
});
/**
 * 
 */
portfolio.ui.components.canvas.Handle = (function (){var G__32588 = (function (p__32590){
var map__32591 = p__32590;
var map__32591__$1 = cljs.core.__destructure_map(map__32591);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32591__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable","div.draggable",-249226727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),kind))?new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"3px solid var(--hard-separator)",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(30),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"3px solid var(--hard-separator)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null))], null)], null);
});
var G__32589 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Handle",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (el,props){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var f = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props)))?portfolio.ui.components.canvas.touch_y:portfolio.ui.components.canvas.touch_x);
var container = el.parentNode;
el.addEventListener("mousedown",(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e)),new cljs.core.Keyword(null,"dim","dim",-497244536),portfolio.ui.components.canvas.get_dim(props,container),new cljs.core.Keyword(null,"neighbour-dim","neighbour-dim",33598256),portfolio.ui.components.canvas.get_dim(props,portfolio.ui.components.canvas.get_neighbour(container))], 0));

e.preventDefault();

return el.classList.add("dragging");
}));

document.body.addEventListener("mousemove",(function (e){
var map__32592 = cljs.core.deref(state);
var map__32592__$1 = cljs.core.__destructure_map(map__32592);
var dragging_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32592__$1,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32592__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var dim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32592__$1,new cljs.core.Keyword(null,"dim","dim",-497244536));
var neighbour_dim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32592__$1,new cljs.core.Keyword(null,"neighbour-dim","neighbour-dim",33598256));
if(cljs.core.truth_(dragging_QMARK_)){
var offset = ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e)) - start);
var neighbour = portfolio.ui.components.canvas.get_neighbour(container);
portfolio.ui.components.canvas.set_size(props,container,(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(dim) + offset));

portfolio.ui.components.canvas.set_offset(props,neighbour,(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(neighbour_dim) + offset));

return portfolio.ui.components.canvas.set_size(props,neighbour,(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(neighbour_dim) - offset));
} else {
return null;
}
}));

return document.body.addEventListener("mouseup",(function (_e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));

return el.classList.remove("dragging");
} else {
return null;
}
}));
})], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__32588,G__32589) : dumdom.core.component.call(null,G__32588,G__32589));
})();
portfolio.ui.components.canvas.render_hud = (function portfolio$ui$components$canvas$render_hud(hud){
return portfolio.ui.components.hud.render_hud.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(hud),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(20),new cljs.core.Keyword(null,"left","left",-399115937),(20),new cljs.core.Keyword(null,"right","right",-452581833),(20)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(hud);
if(cljs.core.truth_(temp__5804__auto__)){
var error = temp__5804__auto__;
return (portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.error.Error.cljs$core$IFn$_invoke$arity$1(error) : portfolio.ui.components.error.Error.call(null,error));
} else {
return null;
}
})()], 0));
});
/**
 * 
 */
portfolio.ui.components.canvas.Pane = (function (){var G__32593 = (function (p__32595){
var map__32596 = p__32595;
var map__32596__$1 = cljs.core.__destructure_map(map__32596);
var data = map__32596__$1;
var canvases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"canvases","canvases",-441653731));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var browser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"browser","browser",828191719));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var menu_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"menu-bar","menu-bar",-1688157683));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"title","title",636505583));
var handle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"handle","handle",1538948854));
var toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane","div.pane",24297878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.cljs$core$IFn$_invoke$arity$2(portfolio.ui.components.canvas.get_grid_styles(data),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null))], null),(function (){var G__32597 = toolbar;
if((G__32597 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.Toolbar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Toolbar.cljs$core$IFn$_invoke$arity$1(G__32597) : portfolio.ui.components.canvas.Toolbar.call(null,G__32597));
}
})(),(function (){var G__32598 = menu_bar;
if((G__32598 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.WrappedMenuBar.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.WrappedMenuBar.cljs$core$IFn$_invoke$arity$1(G__32598) : portfolio.ui.components.canvas.WrappedMenuBar.call(null,G__32598));
}
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.15s",new cljs.core.Keyword(null,"background","background",-863952629),background], null)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(browser))?new cljs.core.Keyword(null,"dark","dark",1818973999):class_name)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(browser))?(portfolio.ui.components.browser.Browser.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.browser.Browser.cljs$core$IFn$_invoke$arity$1(browser) : portfolio.ui.components.browser.Browser.call(null,browser)):null),(cljs.core.truth_((function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return description;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px"], null)], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),title], null):null),(cljs.core.truth_(description)?(function (){var G__32599 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),description], null);
return (portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.markdown.Markdown.cljs$core$IFn$_invoke$arity$1(G__32599) : portfolio.ui.components.markdown.Markdown.call(null,G__32599));
})():null)], null):null),((cljs.core.seq(canvases))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.components.canvas.render_canvas,canvases):null)], null),(function (){var G__32600 = handle;
if((G__32600 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1(G__32600) : portfolio.ui.components.canvas.Handle.call(null,G__32600));
}
})()], null);
});
var G__32594 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Pane",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__32593,G__32594) : dumdom.core.component.call(null,G__32593,G__32594));
})();
portfolio.ui.components.canvas.render_layout = (function portfolio$ui$components$canvas$render_layout(data){
if(cljs.core.truth_((function (){var G__32602 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data);
var fexpr__32601 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null);
return (fexpr__32601.cljs$core$IFn$_invoke$arity$1 ? fexpr__32601.cljs$core$IFn$_invoke$arity$1(G__32602) : fexpr__32601.call(null,G__32602));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),portfolio.ui.components.canvas.get_grid_styles(data),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(portfolio.ui.components.canvas.render_layout,new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(data)),(function (){var G__32603 = new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(data);
if((G__32603 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Handle.cljs$core$IFn$_invoke$arity$1(G__32603) : portfolio.ui.components.canvas.Handle.call(null,G__32603));
}
})()], null);
} else {
return (portfolio.ui.components.canvas.Pane.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.Pane.cljs$core$IFn$_invoke$arity$1(data) : portfolio.ui.components.canvas.Pane.call(null,data));
}
});
/**
 * 
 */
portfolio.ui.components.canvas.CanvasView = (function (){var G__32604 = (function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),portfolio.ui.components.canvas.render_layout(data)], null),(function (){var G__32608 = data;
var G__32608__$1 = (((G__32608 == null))?null:new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(G__32608));
if((G__32608__$1 == null)){
return null;
} else {
return portfolio.ui.components.canvas.render_hud(G__32608__$1);
}
})(),(function (){var G__32609 = data;
var G__32609__$1 = (((G__32609 == null))?null:new cljs.core.Keyword(null,"panel","panel",-558637456).cljs$core$IFn$_invoke$arity$1(G__32609));
if((G__32609__$1 == null)){
return null;
} else {
return (portfolio.ui.components.canvas.CanvasPanel.cljs$core$IFn$_invoke$arity$1 ? portfolio.ui.components.canvas.CanvasPanel.cljs$core$IFn$_invoke$arity$1(G__32609__$1) : portfolio.ui.components.canvas.CanvasPanel.call(null,G__32609__$1));
}
})()], null);
});
var G__32605 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasView",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (dumdom.core.component.cljs$core$IFn$_invoke$arity$2 ? dumdom.core.component.cljs$core$IFn$_invoke$arity$2(G__32604,G__32605) : dumdom.core.component.call(null,G__32604,G__32605));
})();

//# sourceMappingURL=portfolio.ui.components.canvas.js.map
