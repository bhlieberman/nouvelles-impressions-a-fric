import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.dom.dom.js";
import "./goog.dom.forms.js";
import "./goog.dom.classlist.js";
import "./goog.style.style.js";
import "./goog.style.transition.js";
import "./goog.string.string.js";
import "./clojure.string.js";
import "./cljs.core.async.js";
goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47167 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47167(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47168 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47168(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46093 = coll;
var G__46094 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46093,G__46094) : shadow.dom.lazy_native_coll_seq.call(null,G__46093,G__46094));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46141 = arguments.length;
switch (G__46141) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46156 = arguments.length;
switch (G__46156) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46167 = arguments.length;
switch (G__46167) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46180 = arguments.length;
switch (G__46180) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46191 = arguments.length;
switch (G__46191) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46218 = arguments.length;
switch (G__46218) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46229){if((e46229 instanceof Object)){
var e = e46229;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46229;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46248 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46249 = null;
var count__46250 = (0);
var i__46251 = (0);
while(true){
if((i__46251 < count__46250)){
var el = chunk__46249.cljs$core$IIndexed$_nth$arity$2(null,i__46251);
var handler_47179__$1 = ((function (seq__46248,chunk__46249,count__46250,i__46251,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46248,chunk__46249,count__46250,i__46251,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47179__$1);


var G__47180 = seq__46248;
var G__47181 = chunk__46249;
var G__47182 = count__46250;
var G__47183 = (i__46251 + (1));
seq__46248 = G__47180;
chunk__46249 = G__47181;
count__46250 = G__47182;
i__46251 = G__47183;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46248);
if(temp__5804__auto__){
var seq__46248__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46248__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46248__$1);
var G__47184 = cljs.core.chunk_rest(seq__46248__$1);
var G__47185 = c__5568__auto__;
var G__47186 = cljs.core.count(c__5568__auto__);
var G__47187 = (0);
seq__46248 = G__47184;
chunk__46249 = G__47185;
count__46250 = G__47186;
i__46251 = G__47187;
continue;
} else {
var el = cljs.core.first(seq__46248__$1);
var handler_47188__$1 = ((function (seq__46248,chunk__46249,count__46250,i__46251,el,seq__46248__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46248,chunk__46249,count__46250,i__46251,el,seq__46248__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47188__$1);


var G__47189 = cljs.core.next(seq__46248__$1);
var G__47190 = null;
var G__47191 = (0);
var G__47192 = (0);
seq__46248 = G__47189;
chunk__46249 = G__47190;
count__46250 = G__47191;
i__46251 = G__47192;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46277 = arguments.length;
switch (G__46277) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46290 = cljs.core.seq(events);
var chunk__46291 = null;
var count__46292 = (0);
var i__46293 = (0);
while(true){
if((i__46293 < count__46292)){
var vec__46315 = chunk__46291.cljs$core$IIndexed$_nth$arity$2(null,i__46293);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46315,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47198 = seq__46290;
var G__47199 = chunk__46291;
var G__47200 = count__46292;
var G__47201 = (i__46293 + (1));
seq__46290 = G__47198;
chunk__46291 = G__47199;
count__46292 = G__47200;
i__46293 = G__47201;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46290);
if(temp__5804__auto__){
var seq__46290__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46290__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46290__$1);
var G__47202 = cljs.core.chunk_rest(seq__46290__$1);
var G__47203 = c__5568__auto__;
var G__47204 = cljs.core.count(c__5568__auto__);
var G__47205 = (0);
seq__46290 = G__47202;
chunk__46291 = G__47203;
count__46292 = G__47204;
i__46293 = G__47205;
continue;
} else {
var vec__46323 = cljs.core.first(seq__46290__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46323,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46323,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47206 = cljs.core.next(seq__46290__$1);
var G__47207 = null;
var G__47208 = (0);
var G__47209 = (0);
seq__46290 = G__47206;
chunk__46291 = G__47207;
count__46292 = G__47208;
i__46293 = G__47209;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46338 = cljs.core.seq(styles);
var chunk__46339 = null;
var count__46340 = (0);
var i__46341 = (0);
while(true){
if((i__46341 < count__46340)){
var vec__46361 = chunk__46339.cljs$core$IIndexed$_nth$arity$2(null,i__46341);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46361,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46361,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47210 = seq__46338;
var G__47211 = chunk__46339;
var G__47212 = count__46340;
var G__47213 = (i__46341 + (1));
seq__46338 = G__47210;
chunk__46339 = G__47211;
count__46340 = G__47212;
i__46341 = G__47213;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46338);
if(temp__5804__auto__){
var seq__46338__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46338__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46338__$1);
var G__47214 = cljs.core.chunk_rest(seq__46338__$1);
var G__47215 = c__5568__auto__;
var G__47216 = cljs.core.count(c__5568__auto__);
var G__47217 = (0);
seq__46338 = G__47214;
chunk__46339 = G__47215;
count__46340 = G__47216;
i__46341 = G__47217;
continue;
} else {
var vec__46375 = cljs.core.first(seq__46338__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46375,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46375,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47218 = cljs.core.next(seq__46338__$1);
var G__47219 = null;
var G__47220 = (0);
var G__47221 = (0);
seq__46338 = G__47218;
chunk__46339 = G__47219;
count__46340 = G__47220;
i__46341 = G__47221;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46388_47222 = key;
var G__46388_47223__$1 = (((G__46388_47222 instanceof cljs.core.Keyword))?G__46388_47222.fqn:null);
switch (G__46388_47223__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47228 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_47228,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_47228,"aria-");
}
})())){
el.setAttribute(ks_47228,value);
} else {
(el[ks_47228] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46430){
var map__46431 = p__46430;
var map__46431__$1 = cljs.core.__destructure_map(map__46431);
var props = map__46431__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46431__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46437 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46437,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46437,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46437,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46446 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46446,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46446;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46457 = arguments.length;
switch (G__46457) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46461){
var vec__46462 = p__46461;
var seq__46463 = cljs.core.seq(vec__46462);
var first__46464 = cljs.core.first(seq__46463);
var seq__46463__$1 = cljs.core.next(seq__46463);
var nn = first__46464;
var first__46464__$1 = cljs.core.first(seq__46463__$1);
var seq__46463__$2 = cljs.core.next(seq__46463__$1);
var np = first__46464__$1;
var nc = seq__46463__$2;
var node = vec__46462;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46468 = nn;
var G__46469 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46468,G__46469) : create_fn.call(null,G__46468,G__46469));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46475 = nn;
var G__46476 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46475,G__46476) : create_fn.call(null,G__46475,G__46476));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46483 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46483,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46483,(1),null);
var seq__46488_47244 = cljs.core.seq(node_children);
var chunk__46489_47245 = null;
var count__46490_47246 = (0);
var i__46491_47247 = (0);
while(true){
if((i__46491_47247 < count__46490_47246)){
var child_struct_47248 = chunk__46489_47245.cljs$core$IIndexed$_nth$arity$2(null,i__46491_47247);
var children_47249 = shadow.dom.dom_node(child_struct_47248);
if(cljs.core.seq_QMARK_(children_47249)){
var seq__46564_47250 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47249));
var chunk__46566_47251 = null;
var count__46567_47252 = (0);
var i__46568_47253 = (0);
while(true){
if((i__46568_47253 < count__46567_47252)){
var child_47254 = chunk__46566_47251.cljs$core$IIndexed$_nth$arity$2(null,i__46568_47253);
if(cljs.core.truth_(child_47254)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47254);


var G__47255 = seq__46564_47250;
var G__47256 = chunk__46566_47251;
var G__47257 = count__46567_47252;
var G__47258 = (i__46568_47253 + (1));
seq__46564_47250 = G__47255;
chunk__46566_47251 = G__47256;
count__46567_47252 = G__47257;
i__46568_47253 = G__47258;
continue;
} else {
var G__47259 = seq__46564_47250;
var G__47260 = chunk__46566_47251;
var G__47261 = count__46567_47252;
var G__47262 = (i__46568_47253 + (1));
seq__46564_47250 = G__47259;
chunk__46566_47251 = G__47260;
count__46567_47252 = G__47261;
i__46568_47253 = G__47262;
continue;
}
} else {
var temp__5804__auto___47263 = cljs.core.seq(seq__46564_47250);
if(temp__5804__auto___47263){
var seq__46564_47264__$1 = temp__5804__auto___47263;
if(cljs.core.chunked_seq_QMARK_(seq__46564_47264__$1)){
var c__5568__auto___47265 = cljs.core.chunk_first(seq__46564_47264__$1);
var G__47266 = cljs.core.chunk_rest(seq__46564_47264__$1);
var G__47267 = c__5568__auto___47265;
var G__47268 = cljs.core.count(c__5568__auto___47265);
var G__47269 = (0);
seq__46564_47250 = G__47266;
chunk__46566_47251 = G__47267;
count__46567_47252 = G__47268;
i__46568_47253 = G__47269;
continue;
} else {
var child_47270 = cljs.core.first(seq__46564_47264__$1);
if(cljs.core.truth_(child_47270)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47270);


var G__47271 = cljs.core.next(seq__46564_47264__$1);
var G__47272 = null;
var G__47273 = (0);
var G__47274 = (0);
seq__46564_47250 = G__47271;
chunk__46566_47251 = G__47272;
count__46567_47252 = G__47273;
i__46568_47253 = G__47274;
continue;
} else {
var G__47276 = cljs.core.next(seq__46564_47264__$1);
var G__47277 = null;
var G__47278 = (0);
var G__47279 = (0);
seq__46564_47250 = G__47276;
chunk__46566_47251 = G__47277;
count__46567_47252 = G__47278;
i__46568_47253 = G__47279;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47249);
}


var G__47280 = seq__46488_47244;
var G__47281 = chunk__46489_47245;
var G__47282 = count__46490_47246;
var G__47283 = (i__46491_47247 + (1));
seq__46488_47244 = G__47280;
chunk__46489_47245 = G__47281;
count__46490_47246 = G__47282;
i__46491_47247 = G__47283;
continue;
} else {
var temp__5804__auto___47284 = cljs.core.seq(seq__46488_47244);
if(temp__5804__auto___47284){
var seq__46488_47286__$1 = temp__5804__auto___47284;
if(cljs.core.chunked_seq_QMARK_(seq__46488_47286__$1)){
var c__5568__auto___47287 = cljs.core.chunk_first(seq__46488_47286__$1);
var G__47288 = cljs.core.chunk_rest(seq__46488_47286__$1);
var G__47289 = c__5568__auto___47287;
var G__47290 = cljs.core.count(c__5568__auto___47287);
var G__47291 = (0);
seq__46488_47244 = G__47288;
chunk__46489_47245 = G__47289;
count__46490_47246 = G__47290;
i__46491_47247 = G__47291;
continue;
} else {
var child_struct_47292 = cljs.core.first(seq__46488_47286__$1);
var children_47293 = shadow.dom.dom_node(child_struct_47292);
if(cljs.core.seq_QMARK_(children_47293)){
var seq__46582_47294 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47293));
var chunk__46584_47295 = null;
var count__46585_47296 = (0);
var i__46586_47297 = (0);
while(true){
if((i__46586_47297 < count__46585_47296)){
var child_47298 = chunk__46584_47295.cljs$core$IIndexed$_nth$arity$2(null,i__46586_47297);
if(cljs.core.truth_(child_47298)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47298);


var G__47299 = seq__46582_47294;
var G__47300 = chunk__46584_47295;
var G__47301 = count__46585_47296;
var G__47302 = (i__46586_47297 + (1));
seq__46582_47294 = G__47299;
chunk__46584_47295 = G__47300;
count__46585_47296 = G__47301;
i__46586_47297 = G__47302;
continue;
} else {
var G__47303 = seq__46582_47294;
var G__47304 = chunk__46584_47295;
var G__47305 = count__46585_47296;
var G__47306 = (i__46586_47297 + (1));
seq__46582_47294 = G__47303;
chunk__46584_47295 = G__47304;
count__46585_47296 = G__47305;
i__46586_47297 = G__47306;
continue;
}
} else {
var temp__5804__auto___47307__$1 = cljs.core.seq(seq__46582_47294);
if(temp__5804__auto___47307__$1){
var seq__46582_47308__$1 = temp__5804__auto___47307__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46582_47308__$1)){
var c__5568__auto___47309 = cljs.core.chunk_first(seq__46582_47308__$1);
var G__47310 = cljs.core.chunk_rest(seq__46582_47308__$1);
var G__47311 = c__5568__auto___47309;
var G__47312 = cljs.core.count(c__5568__auto___47309);
var G__47313 = (0);
seq__46582_47294 = G__47310;
chunk__46584_47295 = G__47311;
count__46585_47296 = G__47312;
i__46586_47297 = G__47313;
continue;
} else {
var child_47314 = cljs.core.first(seq__46582_47308__$1);
if(cljs.core.truth_(child_47314)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47314);


var G__47315 = cljs.core.next(seq__46582_47308__$1);
var G__47316 = null;
var G__47317 = (0);
var G__47318 = (0);
seq__46582_47294 = G__47315;
chunk__46584_47295 = G__47316;
count__46585_47296 = G__47317;
i__46586_47297 = G__47318;
continue;
} else {
var G__47319 = cljs.core.next(seq__46582_47308__$1);
var G__47320 = null;
var G__47321 = (0);
var G__47322 = (0);
seq__46582_47294 = G__47319;
chunk__46584_47295 = G__47320;
count__46585_47296 = G__47321;
i__46586_47297 = G__47322;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47293);
}


var G__47323 = cljs.core.next(seq__46488_47286__$1);
var G__47324 = null;
var G__47325 = (0);
var G__47326 = (0);
seq__46488_47244 = G__47323;
chunk__46489_47245 = G__47324;
count__46490_47246 = G__47325;
i__46491_47247 = G__47326;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46628 = cljs.core.seq(node);
var chunk__46629 = null;
var count__46630 = (0);
var i__46631 = (0);
while(true){
if((i__46631 < count__46630)){
var n = chunk__46629.cljs$core$IIndexed$_nth$arity$2(null,i__46631);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47327 = seq__46628;
var G__47328 = chunk__46629;
var G__47329 = count__46630;
var G__47330 = (i__46631 + (1));
seq__46628 = G__47327;
chunk__46629 = G__47328;
count__46630 = G__47329;
i__46631 = G__47330;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46628);
if(temp__5804__auto__){
var seq__46628__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46628__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46628__$1);
var G__47331 = cljs.core.chunk_rest(seq__46628__$1);
var G__47332 = c__5568__auto__;
var G__47333 = cljs.core.count(c__5568__auto__);
var G__47334 = (0);
seq__46628 = G__47331;
chunk__46629 = G__47332;
count__46630 = G__47333;
i__46631 = G__47334;
continue;
} else {
var n = cljs.core.first(seq__46628__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47335 = cljs.core.next(seq__46628__$1);
var G__47336 = null;
var G__47337 = (0);
var G__47338 = (0);
seq__46628 = G__47335;
chunk__46629 = G__47336;
count__46630 = G__47337;
i__46631 = G__47338;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46658 = arguments.length;
switch (G__46658) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46670 = arguments.length;
switch (G__46670) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46697 = arguments.length;
switch (G__46697) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47343 = arguments.length;
var i__5770__auto___47344 = (0);
while(true){
if((i__5770__auto___47344 < len__5769__auto___47343)){
args__5775__auto__.push((arguments[i__5770__auto___47344]));

var G__47345 = (i__5770__auto___47344 + (1));
i__5770__auto___47344 = G__47345;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46740_47346 = cljs.core.seq(nodes);
var chunk__46741_47347 = null;
var count__46742_47348 = (0);
var i__46743_47349 = (0);
while(true){
if((i__46743_47349 < count__46742_47348)){
var node_47350 = chunk__46741_47347.cljs$core$IIndexed$_nth$arity$2(null,i__46743_47349);
fragment.appendChild(shadow.dom._to_dom(node_47350));


var G__47351 = seq__46740_47346;
var G__47352 = chunk__46741_47347;
var G__47353 = count__46742_47348;
var G__47354 = (i__46743_47349 + (1));
seq__46740_47346 = G__47351;
chunk__46741_47347 = G__47352;
count__46742_47348 = G__47353;
i__46743_47349 = G__47354;
continue;
} else {
var temp__5804__auto___47355 = cljs.core.seq(seq__46740_47346);
if(temp__5804__auto___47355){
var seq__46740_47357__$1 = temp__5804__auto___47355;
if(cljs.core.chunked_seq_QMARK_(seq__46740_47357__$1)){
var c__5568__auto___47358 = cljs.core.chunk_first(seq__46740_47357__$1);
var G__47359 = cljs.core.chunk_rest(seq__46740_47357__$1);
var G__47360 = c__5568__auto___47358;
var G__47361 = cljs.core.count(c__5568__auto___47358);
var G__47362 = (0);
seq__46740_47346 = G__47359;
chunk__46741_47347 = G__47360;
count__46742_47348 = G__47361;
i__46743_47349 = G__47362;
continue;
} else {
var node_47363 = cljs.core.first(seq__46740_47357__$1);
fragment.appendChild(shadow.dom._to_dom(node_47363));


var G__47365 = cljs.core.next(seq__46740_47357__$1);
var G__47366 = null;
var G__47367 = (0);
var G__47368 = (0);
seq__46740_47346 = G__47365;
chunk__46741_47347 = G__47366;
count__46742_47348 = G__47367;
i__46743_47349 = G__47368;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46737){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46737));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46752_47370 = cljs.core.seq(scripts);
var chunk__46753_47371 = null;
var count__46754_47372 = (0);
var i__46755_47373 = (0);
while(true){
if((i__46755_47373 < count__46754_47372)){
var vec__46780_47374 = chunk__46753_47371.cljs$core$IIndexed$_nth$arity$2(null,i__46755_47373);
var script_tag_47375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46780_47374,(0),null);
var script_body_47376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46780_47374,(1),null);
eval(script_body_47376);


var G__47377 = seq__46752_47370;
var G__47378 = chunk__46753_47371;
var G__47379 = count__46754_47372;
var G__47380 = (i__46755_47373 + (1));
seq__46752_47370 = G__47377;
chunk__46753_47371 = G__47378;
count__46754_47372 = G__47379;
i__46755_47373 = G__47380;
continue;
} else {
var temp__5804__auto___47381 = cljs.core.seq(seq__46752_47370);
if(temp__5804__auto___47381){
var seq__46752_47382__$1 = temp__5804__auto___47381;
if(cljs.core.chunked_seq_QMARK_(seq__46752_47382__$1)){
var c__5568__auto___47383 = cljs.core.chunk_first(seq__46752_47382__$1);
var G__47384 = cljs.core.chunk_rest(seq__46752_47382__$1);
var G__47385 = c__5568__auto___47383;
var G__47386 = cljs.core.count(c__5568__auto___47383);
var G__47387 = (0);
seq__46752_47370 = G__47384;
chunk__46753_47371 = G__47385;
count__46754_47372 = G__47386;
i__46755_47373 = G__47387;
continue;
} else {
var vec__46787_47388 = cljs.core.first(seq__46752_47382__$1);
var script_tag_47389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46787_47388,(0),null);
var script_body_47390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46787_47388,(1),null);
eval(script_body_47390);


var G__47391 = cljs.core.next(seq__46752_47382__$1);
var G__47392 = null;
var G__47393 = (0);
var G__47394 = (0);
seq__46752_47370 = G__47391;
chunk__46753_47371 = G__47392;
count__46754_47372 = G__47393;
i__46755_47373 = G__47394;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46791){
var vec__46795 = p__46791;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46795,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46795,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46810 = arguments.length;
switch (G__46810) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46847 = cljs.core.seq(style_keys);
var chunk__46848 = null;
var count__46849 = (0);
var i__46850 = (0);
while(true){
if((i__46850 < count__46849)){
var it = chunk__46848.cljs$core$IIndexed$_nth$arity$2(null,i__46850);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47399 = seq__46847;
var G__47400 = chunk__46848;
var G__47401 = count__46849;
var G__47402 = (i__46850 + (1));
seq__46847 = G__47399;
chunk__46848 = G__47400;
count__46849 = G__47401;
i__46850 = G__47402;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46847);
if(temp__5804__auto__){
var seq__46847__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46847__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46847__$1);
var G__47403 = cljs.core.chunk_rest(seq__46847__$1);
var G__47404 = c__5568__auto__;
var G__47405 = cljs.core.count(c__5568__auto__);
var G__47406 = (0);
seq__46847 = G__47403;
chunk__46848 = G__47404;
count__46849 = G__47405;
i__46850 = G__47406;
continue;
} else {
var it = cljs.core.first(seq__46847__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47407 = cljs.core.next(seq__46847__$1);
var G__47408 = null;
var G__47409 = (0);
var G__47410 = (0);
seq__46847 = G__47407;
chunk__46848 = G__47408;
count__46849 = G__47409;
i__46850 = G__47410;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46865,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46876 = k46865;
var G__46876__$1 = (((G__46876 instanceof cljs.core.Keyword))?G__46876.fqn:null);
switch (G__46876__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46865,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46886){
var vec__46888 = p__46886;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46888,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46888,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46864){
var self__ = this;
var G__46864__$1 = this;
return (new cljs.core.RecordIter((0),G__46864__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46866,other46867){
var self__ = this;
var this46866__$1 = this;
return (((!((other46867 == null)))) && ((((this46866__$1.constructor === other46867.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46866__$1.x,other46867.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46866__$1.y,other46867.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46866__$1.__extmap,other46867.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46865){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46920 = k46865;
var G__46920__$1 = (((G__46920 instanceof cljs.core.Keyword))?G__46920.fqn:null);
switch (G__46920__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46865);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46864){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46923 = cljs.core.keyword_identical_QMARK_;
var expr__46924 = k__5352__auto__;
if(cljs.core.truth_((pred__46923.cljs$core$IFn$_invoke$arity$2 ? pred__46923.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46924) : pred__46923.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46924)))){
return (new shadow.dom.Coordinate(G__46864,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46923.cljs$core$IFn$_invoke$arity$2 ? pred__46923.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46924) : pred__46923.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46924)))){
return (new shadow.dom.Coordinate(self__.x,G__46864,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46864),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46864){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46864,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46869){
var extmap__5385__auto__ = (function (){var G__46947 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46869,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46869)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46947);
} else {
return G__46947;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46869),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46869),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46955,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46966 = k46955;
var G__46966__$1 = (((G__46966 instanceof cljs.core.Keyword))?G__46966.fqn:null);
switch (G__46966__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46955,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46967){
var vec__46968 = p__46967;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46968,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46968,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46954){
var self__ = this;
var G__46954__$1 = this;
return (new cljs.core.RecordIter((0),G__46954__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46956,other46957){
var self__ = this;
var this46956__$1 = this;
return (((!((other46957 == null)))) && ((((this46956__$1.constructor === other46957.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46956__$1.w,other46957.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46956__$1.h,other46957.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46956__$1.__extmap,other46957.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46955){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46988 = k46955;
var G__46988__$1 = (((G__46988 instanceof cljs.core.Keyword))?G__46988.fqn:null);
switch (G__46988__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46955);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46954){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46989 = cljs.core.keyword_identical_QMARK_;
var expr__46990 = k__5352__auto__;
if(cljs.core.truth_((pred__46989.cljs$core$IFn$_invoke$arity$2 ? pred__46989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46990) : pred__46989.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46990)))){
return (new shadow.dom.Size(G__46954,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46989.cljs$core$IFn$_invoke$arity$2 ? pred__46989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46990) : pred__46989.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46990)))){
return (new shadow.dom.Size(self__.w,G__46954,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46954),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46954){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46954,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46962){
var extmap__5385__auto__ = (function (){var G__46993 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46962,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46962)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46993);
} else {
return G__46993;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46962),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46962),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__47441 = (i + (1));
var G__47442 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47441;
ret = G__47442;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47004){
var vec__47005 = p__47004;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47005,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47009 = arguments.length;
switch (G__47009) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47444 = ps;
var G__47445 = (i + (1));
el__$1 = G__47444;
i = G__47445;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47019 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47019,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47019,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47019,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47022_47454 = cljs.core.seq(props);
var chunk__47023_47455 = null;
var count__47024_47456 = (0);
var i__47025_47457 = (0);
while(true){
if((i__47025_47457 < count__47024_47456)){
var vec__47036_47458 = chunk__47023_47455.cljs$core$IIndexed$_nth$arity$2(null,i__47025_47457);
var k_47459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47036_47458,(0),null);
var v_47460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47036_47458,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_47459);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47459),v_47460);


var G__47464 = seq__47022_47454;
var G__47465 = chunk__47023_47455;
var G__47466 = count__47024_47456;
var G__47467 = (i__47025_47457 + (1));
seq__47022_47454 = G__47464;
chunk__47023_47455 = G__47465;
count__47024_47456 = G__47466;
i__47025_47457 = G__47467;
continue;
} else {
var temp__5804__auto___47468 = cljs.core.seq(seq__47022_47454);
if(temp__5804__auto___47468){
var seq__47022_47469__$1 = temp__5804__auto___47468;
if(cljs.core.chunked_seq_QMARK_(seq__47022_47469__$1)){
var c__5568__auto___47470 = cljs.core.chunk_first(seq__47022_47469__$1);
var G__47471 = cljs.core.chunk_rest(seq__47022_47469__$1);
var G__47472 = c__5568__auto___47470;
var G__47473 = cljs.core.count(c__5568__auto___47470);
var G__47474 = (0);
seq__47022_47454 = G__47471;
chunk__47023_47455 = G__47472;
count__47024_47456 = G__47473;
i__47025_47457 = G__47474;
continue;
} else {
var vec__47040_47475 = cljs.core.first(seq__47022_47469__$1);
var k_47476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47040_47475,(0),null);
var v_47477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47040_47475,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_47476);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47476),v_47477);


var G__47478 = cljs.core.next(seq__47022_47469__$1);
var G__47479 = null;
var G__47480 = (0);
var G__47481 = (0);
seq__47022_47454 = G__47478;
chunk__47023_47455 = G__47479;
count__47024_47456 = G__47480;
i__47025_47457 = G__47481;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47048 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47048,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47048,(1),null);
var seq__47051_47482 = cljs.core.seq(node_children);
var chunk__47053_47483 = null;
var count__47054_47484 = (0);
var i__47055_47485 = (0);
while(true){
if((i__47055_47485 < count__47054_47484)){
var child_struct_47486 = chunk__47053_47483.cljs$core$IIndexed$_nth$arity$2(null,i__47055_47485);
if((!((child_struct_47486 == null)))){
if(typeof child_struct_47486 === 'string'){
var text_47487 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47487),child_struct_47486].join(''));
} else {
var children_47491 = shadow.dom.svg_node(child_struct_47486);
if(cljs.core.seq_QMARK_(children_47491)){
var seq__47103_47495 = cljs.core.seq(children_47491);
var chunk__47105_47496 = null;
var count__47106_47497 = (0);
var i__47107_47498 = (0);
while(true){
if((i__47107_47498 < count__47106_47497)){
var child_47499 = chunk__47105_47496.cljs$core$IIndexed$_nth$arity$2(null,i__47107_47498);
if(cljs.core.truth_(child_47499)){
node.appendChild(child_47499);


var G__47500 = seq__47103_47495;
var G__47501 = chunk__47105_47496;
var G__47502 = count__47106_47497;
var G__47503 = (i__47107_47498 + (1));
seq__47103_47495 = G__47500;
chunk__47105_47496 = G__47501;
count__47106_47497 = G__47502;
i__47107_47498 = G__47503;
continue;
} else {
var G__47504 = seq__47103_47495;
var G__47505 = chunk__47105_47496;
var G__47506 = count__47106_47497;
var G__47507 = (i__47107_47498 + (1));
seq__47103_47495 = G__47504;
chunk__47105_47496 = G__47505;
count__47106_47497 = G__47506;
i__47107_47498 = G__47507;
continue;
}
} else {
var temp__5804__auto___47508 = cljs.core.seq(seq__47103_47495);
if(temp__5804__auto___47508){
var seq__47103_47509__$1 = temp__5804__auto___47508;
if(cljs.core.chunked_seq_QMARK_(seq__47103_47509__$1)){
var c__5568__auto___47510 = cljs.core.chunk_first(seq__47103_47509__$1);
var G__47511 = cljs.core.chunk_rest(seq__47103_47509__$1);
var G__47512 = c__5568__auto___47510;
var G__47513 = cljs.core.count(c__5568__auto___47510);
var G__47514 = (0);
seq__47103_47495 = G__47511;
chunk__47105_47496 = G__47512;
count__47106_47497 = G__47513;
i__47107_47498 = G__47514;
continue;
} else {
var child_47517 = cljs.core.first(seq__47103_47509__$1);
if(cljs.core.truth_(child_47517)){
node.appendChild(child_47517);


var G__47518 = cljs.core.next(seq__47103_47509__$1);
var G__47519 = null;
var G__47520 = (0);
var G__47521 = (0);
seq__47103_47495 = G__47518;
chunk__47105_47496 = G__47519;
count__47106_47497 = G__47520;
i__47107_47498 = G__47521;
continue;
} else {
var G__47523 = cljs.core.next(seq__47103_47509__$1);
var G__47524 = null;
var G__47525 = (0);
var G__47526 = (0);
seq__47103_47495 = G__47523;
chunk__47105_47496 = G__47524;
count__47106_47497 = G__47525;
i__47107_47498 = G__47526;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47491);
}
}


var G__47527 = seq__47051_47482;
var G__47528 = chunk__47053_47483;
var G__47529 = count__47054_47484;
var G__47530 = (i__47055_47485 + (1));
seq__47051_47482 = G__47527;
chunk__47053_47483 = G__47528;
count__47054_47484 = G__47529;
i__47055_47485 = G__47530;
continue;
} else {
var G__47531 = seq__47051_47482;
var G__47532 = chunk__47053_47483;
var G__47533 = count__47054_47484;
var G__47534 = (i__47055_47485 + (1));
seq__47051_47482 = G__47531;
chunk__47053_47483 = G__47532;
count__47054_47484 = G__47533;
i__47055_47485 = G__47534;
continue;
}
} else {
var temp__5804__auto___47535 = cljs.core.seq(seq__47051_47482);
if(temp__5804__auto___47535){
var seq__47051_47536__$1 = temp__5804__auto___47535;
if(cljs.core.chunked_seq_QMARK_(seq__47051_47536__$1)){
var c__5568__auto___47537 = cljs.core.chunk_first(seq__47051_47536__$1);
var G__47538 = cljs.core.chunk_rest(seq__47051_47536__$1);
var G__47539 = c__5568__auto___47537;
var G__47540 = cljs.core.count(c__5568__auto___47537);
var G__47541 = (0);
seq__47051_47482 = G__47538;
chunk__47053_47483 = G__47539;
count__47054_47484 = G__47540;
i__47055_47485 = G__47541;
continue;
} else {
var child_struct_47542 = cljs.core.first(seq__47051_47536__$1);
if((!((child_struct_47542 == null)))){
if(typeof child_struct_47542 === 'string'){
var text_47543 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47543),child_struct_47542].join(''));
} else {
var children_47544 = shadow.dom.svg_node(child_struct_47542);
if(cljs.core.seq_QMARK_(children_47544)){
var seq__47120_47545 = cljs.core.seq(children_47544);
var chunk__47122_47546 = null;
var count__47123_47547 = (0);
var i__47124_47548 = (0);
while(true){
if((i__47124_47548 < count__47123_47547)){
var child_47550 = chunk__47122_47546.cljs$core$IIndexed$_nth$arity$2(null,i__47124_47548);
if(cljs.core.truth_(child_47550)){
node.appendChild(child_47550);


var G__47553 = seq__47120_47545;
var G__47554 = chunk__47122_47546;
var G__47555 = count__47123_47547;
var G__47556 = (i__47124_47548 + (1));
seq__47120_47545 = G__47553;
chunk__47122_47546 = G__47554;
count__47123_47547 = G__47555;
i__47124_47548 = G__47556;
continue;
} else {
var G__47557 = seq__47120_47545;
var G__47558 = chunk__47122_47546;
var G__47559 = count__47123_47547;
var G__47560 = (i__47124_47548 + (1));
seq__47120_47545 = G__47557;
chunk__47122_47546 = G__47558;
count__47123_47547 = G__47559;
i__47124_47548 = G__47560;
continue;
}
} else {
var temp__5804__auto___47561__$1 = cljs.core.seq(seq__47120_47545);
if(temp__5804__auto___47561__$1){
var seq__47120_47562__$1 = temp__5804__auto___47561__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47120_47562__$1)){
var c__5568__auto___47563 = cljs.core.chunk_first(seq__47120_47562__$1);
var G__47564 = cljs.core.chunk_rest(seq__47120_47562__$1);
var G__47565 = c__5568__auto___47563;
var G__47566 = cljs.core.count(c__5568__auto___47563);
var G__47567 = (0);
seq__47120_47545 = G__47564;
chunk__47122_47546 = G__47565;
count__47123_47547 = G__47566;
i__47124_47548 = G__47567;
continue;
} else {
var child_47568 = cljs.core.first(seq__47120_47562__$1);
if(cljs.core.truth_(child_47568)){
node.appendChild(child_47568);


var G__47569 = cljs.core.next(seq__47120_47562__$1);
var G__47570 = null;
var G__47571 = (0);
var G__47572 = (0);
seq__47120_47545 = G__47569;
chunk__47122_47546 = G__47570;
count__47123_47547 = G__47571;
i__47124_47548 = G__47572;
continue;
} else {
var G__47573 = cljs.core.next(seq__47120_47562__$1);
var G__47574 = null;
var G__47575 = (0);
var G__47576 = (0);
seq__47120_47545 = G__47573;
chunk__47122_47546 = G__47574;
count__47123_47547 = G__47575;
i__47124_47548 = G__47576;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47544);
}
}


var G__47577 = cljs.core.next(seq__47051_47536__$1);
var G__47578 = null;
var G__47579 = (0);
var G__47580 = (0);
seq__47051_47482 = G__47577;
chunk__47053_47483 = G__47578;
count__47054_47484 = G__47579;
i__47055_47485 = G__47580;
continue;
} else {
var G__47584 = cljs.core.next(seq__47051_47536__$1);
var G__47585 = null;
var G__47586 = (0);
var G__47587 = (0);
seq__47051_47482 = G__47584;
chunk__47053_47483 = G__47585;
count__47054_47484 = G__47586;
i__47055_47485 = G__47587;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47588 = arguments.length;
var i__5770__auto___47589 = (0);
while(true){
if((i__5770__auto___47589 < len__5769__auto___47588)){
args__5775__auto__.push((arguments[i__5770__auto___47589]));

var G__47590 = (i__5770__auto___47589 + (1));
i__5770__auto___47589 = G__47590;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47138){
var G__47139 = cljs.core.first(seq47138);
var seq47138__$1 = cljs.core.next(seq47138);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47139,seq47138__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47145 = arguments.length;
switch (G__47145) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__43108__auto___47596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_47153){
var state_val_47154 = (state_47153[(1)]);
if((state_val_47154 === (1))){
var state_47153__$1 = state_47153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47153__$1,(2),once_or_cleanup);
} else {
if((state_val_47154 === (2))){
var inst_47150 = (state_47153[(2)]);
var inst_47151 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47153__$1 = (function (){var statearr_47155 = state_47153;
(statearr_47155[(7)] = inst_47150);

return statearr_47155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47153__$1,inst_47151);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42899__auto__ = null;
var shadow$dom$state_machine__42899__auto____0 = (function (){
var statearr_47156 = [null,null,null,null,null,null,null,null];
(statearr_47156[(0)] = shadow$dom$state_machine__42899__auto__);

(statearr_47156[(1)] = (1));

return statearr_47156;
});
var shadow$dom$state_machine__42899__auto____1 = (function (state_47153){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_47153);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e47157){var ex__42902__auto__ = e47157;
var statearr_47158_47597 = state_47153;
(statearr_47158_47597[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_47153[(4)]))){
var statearr_47159_47598 = state_47153;
(statearr_47159_47598[(1)] = cljs.core.first((state_47153[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47599 = state_47153;
state_47153 = G__47599;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
shadow$dom$state_machine__42899__auto__ = function(state_47153){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42899__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42899__auto____1.call(this,state_47153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42899__auto____0;
shadow$dom$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42899__auto____1;
return shadow$dom$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_47160 = f__43109__auto__();
(statearr_47160[(6)] = c__43108__auto___47596);

return statearr_47160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
