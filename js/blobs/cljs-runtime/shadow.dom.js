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

var shadow$dom$IElement$_to_dom$dyn_30774 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_30774(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_30775 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_30775(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29591 = coll;
var G__29592 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29591,G__29592) : shadow.dom.lazy_native_coll_seq.call(null,G__29591,G__29592));
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
var G__29624 = arguments.length;
switch (G__29624) {
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
var G__29631 = arguments.length;
switch (G__29631) {
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
var G__29645 = arguments.length;
switch (G__29645) {
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
var G__29660 = arguments.length;
switch (G__29660) {
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
var G__29688 = arguments.length;
switch (G__29688) {
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
var G__29721 = arguments.length;
switch (G__29721) {
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
}catch (e29744){if((e29744 instanceof Object)){
var e = e29744;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29744;

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
var seq__29756 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29757 = null;
var count__29758 = (0);
var i__29759 = (0);
while(true){
if((i__29759 < count__29758)){
var el = chunk__29757.cljs$core$IIndexed$_nth$arity$2(null,i__29759);
var handler_30791__$1 = ((function (seq__29756,chunk__29757,count__29758,i__29759,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29756,chunk__29757,count__29758,i__29759,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30791__$1);


var G__30792 = seq__29756;
var G__30793 = chunk__29757;
var G__30794 = count__29758;
var G__30795 = (i__29759 + (1));
seq__29756 = G__30792;
chunk__29757 = G__30793;
count__29758 = G__30794;
i__29759 = G__30795;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29756);
if(temp__5804__auto__){
var seq__29756__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29756__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29756__$1);
var G__30796 = cljs.core.chunk_rest(seq__29756__$1);
var G__30797 = c__5568__auto__;
var G__30798 = cljs.core.count(c__5568__auto__);
var G__30799 = (0);
seq__29756 = G__30796;
chunk__29757 = G__30797;
count__29758 = G__30798;
i__29759 = G__30799;
continue;
} else {
var el = cljs.core.first(seq__29756__$1);
var handler_30800__$1 = ((function (seq__29756,chunk__29757,count__29758,i__29759,el,seq__29756__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29756,chunk__29757,count__29758,i__29759,el,seq__29756__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30800__$1);


var G__30801 = cljs.core.next(seq__29756__$1);
var G__30802 = null;
var G__30803 = (0);
var G__30804 = (0);
seq__29756 = G__30801;
chunk__29757 = G__30802;
count__29758 = G__30803;
i__29759 = G__30804;
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
var G__29806 = arguments.length;
switch (G__29806) {
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
var seq__29823 = cljs.core.seq(events);
var chunk__29824 = null;
var count__29825 = (0);
var i__29826 = (0);
while(true){
if((i__29826 < count__29825)){
var vec__29850 = chunk__29824.cljs$core$IIndexed$_nth$arity$2(null,i__29826);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29850,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30808 = seq__29823;
var G__30809 = chunk__29824;
var G__30810 = count__29825;
var G__30811 = (i__29826 + (1));
seq__29823 = G__30808;
chunk__29824 = G__30809;
count__29825 = G__30810;
i__29826 = G__30811;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29823);
if(temp__5804__auto__){
var seq__29823__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29823__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29823__$1);
var G__30812 = cljs.core.chunk_rest(seq__29823__$1);
var G__30813 = c__5568__auto__;
var G__30814 = cljs.core.count(c__5568__auto__);
var G__30815 = (0);
seq__29823 = G__30812;
chunk__29824 = G__30813;
count__29825 = G__30814;
i__29826 = G__30815;
continue;
} else {
var vec__29857 = cljs.core.first(seq__29823__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29857,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30819 = cljs.core.next(seq__29823__$1);
var G__30820 = null;
var G__30821 = (0);
var G__30822 = (0);
seq__29823 = G__30819;
chunk__29824 = G__30820;
count__29825 = G__30821;
i__29826 = G__30822;
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
var seq__29874 = cljs.core.seq(styles);
var chunk__29876 = null;
var count__29877 = (0);
var i__29878 = (0);
while(true){
if((i__29878 < count__29877)){
var vec__29900 = chunk__29876.cljs$core$IIndexed$_nth$arity$2(null,i__29878);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29900,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30829 = seq__29874;
var G__30830 = chunk__29876;
var G__30831 = count__29877;
var G__30832 = (i__29878 + (1));
seq__29874 = G__30829;
chunk__29876 = G__30830;
count__29877 = G__30831;
i__29878 = G__30832;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29874);
if(temp__5804__auto__){
var seq__29874__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29874__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29874__$1);
var G__30833 = cljs.core.chunk_rest(seq__29874__$1);
var G__30834 = c__5568__auto__;
var G__30835 = cljs.core.count(c__5568__auto__);
var G__30836 = (0);
seq__29874 = G__30833;
chunk__29876 = G__30834;
count__29877 = G__30835;
i__29878 = G__30836;
continue;
} else {
var vec__29911 = cljs.core.first(seq__29874__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29911,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30837 = cljs.core.next(seq__29874__$1);
var G__30838 = null;
var G__30839 = (0);
var G__30840 = (0);
seq__29874 = G__30837;
chunk__29876 = G__30838;
count__29877 = G__30839;
i__29878 = G__30840;
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
var G__29917_30841 = key;
var G__29917_30842__$1 = (((G__29917_30841 instanceof cljs.core.Keyword))?G__29917_30841.fqn:null);
switch (G__29917_30842__$1) {
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
var ks_30846 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_30846,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_30846,"aria-");
}
})())){
el.setAttribute(ks_30846,value);
} else {
(el[ks_30846] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29952){
var map__29953 = p__29952;
var map__29953__$1 = cljs.core.__destructure_map(map__29953);
var props = map__29953__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29958 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29958,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29958,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29958,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29963 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29963,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29963;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29970 = arguments.length;
switch (G__29970) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29987){
var vec__29989 = p__29987;
var seq__29990 = cljs.core.seq(vec__29989);
var first__29991 = cljs.core.first(seq__29990);
var seq__29990__$1 = cljs.core.next(seq__29990);
var nn = first__29991;
var first__29991__$1 = cljs.core.first(seq__29990__$1);
var seq__29990__$2 = cljs.core.next(seq__29990__$1);
var np = first__29991__$1;
var nc = seq__29990__$2;
var node = vec__29989;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29997 = nn;
var G__29998 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29997,G__29998) : create_fn.call(null,G__29997,G__29998));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29999 = nn;
var G__30000 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29999,G__30000) : create_fn.call(null,G__29999,G__30000));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30006 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30006,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30006,(1),null);
var seq__30009_30871 = cljs.core.seq(node_children);
var chunk__30010_30872 = null;
var count__30011_30873 = (0);
var i__30012_30874 = (0);
while(true){
if((i__30012_30874 < count__30011_30873)){
var child_struct_30875 = chunk__30010_30872.cljs$core$IIndexed$_nth$arity$2(null,i__30012_30874);
var children_30876 = shadow.dom.dom_node(child_struct_30875);
if(cljs.core.seq_QMARK_(children_30876)){
var seq__30042_30878 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30876));
var chunk__30044_30879 = null;
var count__30045_30880 = (0);
var i__30046_30881 = (0);
while(true){
if((i__30046_30881 < count__30045_30880)){
var child_30888 = chunk__30044_30879.cljs$core$IIndexed$_nth$arity$2(null,i__30046_30881);
if(cljs.core.truth_(child_30888)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30888);


var G__30889 = seq__30042_30878;
var G__30890 = chunk__30044_30879;
var G__30891 = count__30045_30880;
var G__30892 = (i__30046_30881 + (1));
seq__30042_30878 = G__30889;
chunk__30044_30879 = G__30890;
count__30045_30880 = G__30891;
i__30046_30881 = G__30892;
continue;
} else {
var G__30893 = seq__30042_30878;
var G__30894 = chunk__30044_30879;
var G__30895 = count__30045_30880;
var G__30896 = (i__30046_30881 + (1));
seq__30042_30878 = G__30893;
chunk__30044_30879 = G__30894;
count__30045_30880 = G__30895;
i__30046_30881 = G__30896;
continue;
}
} else {
var temp__5804__auto___30897 = cljs.core.seq(seq__30042_30878);
if(temp__5804__auto___30897){
var seq__30042_30898__$1 = temp__5804__auto___30897;
if(cljs.core.chunked_seq_QMARK_(seq__30042_30898__$1)){
var c__5568__auto___30899 = cljs.core.chunk_first(seq__30042_30898__$1);
var G__30900 = cljs.core.chunk_rest(seq__30042_30898__$1);
var G__30901 = c__5568__auto___30899;
var G__30902 = cljs.core.count(c__5568__auto___30899);
var G__30903 = (0);
seq__30042_30878 = G__30900;
chunk__30044_30879 = G__30901;
count__30045_30880 = G__30902;
i__30046_30881 = G__30903;
continue;
} else {
var child_30904 = cljs.core.first(seq__30042_30898__$1);
if(cljs.core.truth_(child_30904)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30904);


var G__30905 = cljs.core.next(seq__30042_30898__$1);
var G__30906 = null;
var G__30907 = (0);
var G__30908 = (0);
seq__30042_30878 = G__30905;
chunk__30044_30879 = G__30906;
count__30045_30880 = G__30907;
i__30046_30881 = G__30908;
continue;
} else {
var G__30909 = cljs.core.next(seq__30042_30898__$1);
var G__30910 = null;
var G__30911 = (0);
var G__30912 = (0);
seq__30042_30878 = G__30909;
chunk__30044_30879 = G__30910;
count__30045_30880 = G__30911;
i__30046_30881 = G__30912;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30876);
}


var G__30914 = seq__30009_30871;
var G__30915 = chunk__30010_30872;
var G__30916 = count__30011_30873;
var G__30917 = (i__30012_30874 + (1));
seq__30009_30871 = G__30914;
chunk__30010_30872 = G__30915;
count__30011_30873 = G__30916;
i__30012_30874 = G__30917;
continue;
} else {
var temp__5804__auto___30918 = cljs.core.seq(seq__30009_30871);
if(temp__5804__auto___30918){
var seq__30009_30919__$1 = temp__5804__auto___30918;
if(cljs.core.chunked_seq_QMARK_(seq__30009_30919__$1)){
var c__5568__auto___30920 = cljs.core.chunk_first(seq__30009_30919__$1);
var G__30921 = cljs.core.chunk_rest(seq__30009_30919__$1);
var G__30922 = c__5568__auto___30920;
var G__30923 = cljs.core.count(c__5568__auto___30920);
var G__30924 = (0);
seq__30009_30871 = G__30921;
chunk__30010_30872 = G__30922;
count__30011_30873 = G__30923;
i__30012_30874 = G__30924;
continue;
} else {
var child_struct_30925 = cljs.core.first(seq__30009_30919__$1);
var children_30926 = shadow.dom.dom_node(child_struct_30925);
if(cljs.core.seq_QMARK_(children_30926)){
var seq__30073_30932 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30926));
var chunk__30075_30933 = null;
var count__30076_30934 = (0);
var i__30077_30935 = (0);
while(true){
if((i__30077_30935 < count__30076_30934)){
var child_30939 = chunk__30075_30933.cljs$core$IIndexed$_nth$arity$2(null,i__30077_30935);
if(cljs.core.truth_(child_30939)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30939);


var G__30940 = seq__30073_30932;
var G__30941 = chunk__30075_30933;
var G__30942 = count__30076_30934;
var G__30943 = (i__30077_30935 + (1));
seq__30073_30932 = G__30940;
chunk__30075_30933 = G__30941;
count__30076_30934 = G__30942;
i__30077_30935 = G__30943;
continue;
} else {
var G__30944 = seq__30073_30932;
var G__30945 = chunk__30075_30933;
var G__30946 = count__30076_30934;
var G__30947 = (i__30077_30935 + (1));
seq__30073_30932 = G__30944;
chunk__30075_30933 = G__30945;
count__30076_30934 = G__30946;
i__30077_30935 = G__30947;
continue;
}
} else {
var temp__5804__auto___30949__$1 = cljs.core.seq(seq__30073_30932);
if(temp__5804__auto___30949__$1){
var seq__30073_30953__$1 = temp__5804__auto___30949__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30073_30953__$1)){
var c__5568__auto___30955 = cljs.core.chunk_first(seq__30073_30953__$1);
var G__30959 = cljs.core.chunk_rest(seq__30073_30953__$1);
var G__30960 = c__5568__auto___30955;
var G__30961 = cljs.core.count(c__5568__auto___30955);
var G__30962 = (0);
seq__30073_30932 = G__30959;
chunk__30075_30933 = G__30960;
count__30076_30934 = G__30961;
i__30077_30935 = G__30962;
continue;
} else {
var child_30963 = cljs.core.first(seq__30073_30953__$1);
if(cljs.core.truth_(child_30963)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30963);


var G__30964 = cljs.core.next(seq__30073_30953__$1);
var G__30965 = null;
var G__30966 = (0);
var G__30967 = (0);
seq__30073_30932 = G__30964;
chunk__30075_30933 = G__30965;
count__30076_30934 = G__30966;
i__30077_30935 = G__30967;
continue;
} else {
var G__30968 = cljs.core.next(seq__30073_30953__$1);
var G__30969 = null;
var G__30970 = (0);
var G__30971 = (0);
seq__30073_30932 = G__30968;
chunk__30075_30933 = G__30969;
count__30076_30934 = G__30970;
i__30077_30935 = G__30971;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30926);
}


var G__30972 = cljs.core.next(seq__30009_30919__$1);
var G__30973 = null;
var G__30974 = (0);
var G__30975 = (0);
seq__30009_30871 = G__30972;
chunk__30010_30872 = G__30973;
count__30011_30873 = G__30974;
i__30012_30874 = G__30975;
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
var seq__30113 = cljs.core.seq(node);
var chunk__30114 = null;
var count__30115 = (0);
var i__30116 = (0);
while(true){
if((i__30116 < count__30115)){
var n = chunk__30114.cljs$core$IIndexed$_nth$arity$2(null,i__30116);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30979 = seq__30113;
var G__30980 = chunk__30114;
var G__30981 = count__30115;
var G__30982 = (i__30116 + (1));
seq__30113 = G__30979;
chunk__30114 = G__30980;
count__30115 = G__30981;
i__30116 = G__30982;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30113);
if(temp__5804__auto__){
var seq__30113__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30113__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30113__$1);
var G__30983 = cljs.core.chunk_rest(seq__30113__$1);
var G__30984 = c__5568__auto__;
var G__30985 = cljs.core.count(c__5568__auto__);
var G__30986 = (0);
seq__30113 = G__30983;
chunk__30114 = G__30984;
count__30115 = G__30985;
i__30116 = G__30986;
continue;
} else {
var n = cljs.core.first(seq__30113__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30987 = cljs.core.next(seq__30113__$1);
var G__30988 = null;
var G__30989 = (0);
var G__30990 = (0);
seq__30113 = G__30987;
chunk__30114 = G__30988;
count__30115 = G__30989;
i__30116 = G__30990;
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
var G__30141 = arguments.length;
switch (G__30141) {
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
var G__30154 = arguments.length;
switch (G__30154) {
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
var G__30175 = arguments.length;
switch (G__30175) {
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
var len__5769__auto___31000 = arguments.length;
var i__5770__auto___31001 = (0);
while(true){
if((i__5770__auto___31001 < len__5769__auto___31000)){
args__5775__auto__.push((arguments[i__5770__auto___31001]));

var G__31002 = (i__5770__auto___31001 + (1));
i__5770__auto___31001 = G__31002;
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
var seq__30237_31004 = cljs.core.seq(nodes);
var chunk__30238_31005 = null;
var count__30239_31006 = (0);
var i__30240_31007 = (0);
while(true){
if((i__30240_31007 < count__30239_31006)){
var node_31008 = chunk__30238_31005.cljs$core$IIndexed$_nth$arity$2(null,i__30240_31007);
fragment.appendChild(shadow.dom._to_dom(node_31008));


var G__31010 = seq__30237_31004;
var G__31011 = chunk__30238_31005;
var G__31012 = count__30239_31006;
var G__31013 = (i__30240_31007 + (1));
seq__30237_31004 = G__31010;
chunk__30238_31005 = G__31011;
count__30239_31006 = G__31012;
i__30240_31007 = G__31013;
continue;
} else {
var temp__5804__auto___31014 = cljs.core.seq(seq__30237_31004);
if(temp__5804__auto___31014){
var seq__30237_31016__$1 = temp__5804__auto___31014;
if(cljs.core.chunked_seq_QMARK_(seq__30237_31016__$1)){
var c__5568__auto___31020 = cljs.core.chunk_first(seq__30237_31016__$1);
var G__31021 = cljs.core.chunk_rest(seq__30237_31016__$1);
var G__31022 = c__5568__auto___31020;
var G__31023 = cljs.core.count(c__5568__auto___31020);
var G__31024 = (0);
seq__30237_31004 = G__31021;
chunk__30238_31005 = G__31022;
count__30239_31006 = G__31023;
i__30240_31007 = G__31024;
continue;
} else {
var node_31025 = cljs.core.first(seq__30237_31016__$1);
fragment.appendChild(shadow.dom._to_dom(node_31025));


var G__31026 = cljs.core.next(seq__30237_31016__$1);
var G__31027 = null;
var G__31028 = (0);
var G__31029 = (0);
seq__30237_31004 = G__31026;
chunk__30238_31005 = G__31027;
count__30239_31006 = G__31028;
i__30240_31007 = G__31029;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq30219){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30219));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__30281_31030 = cljs.core.seq(scripts);
var chunk__30282_31031 = null;
var count__30283_31032 = (0);
var i__30284_31033 = (0);
while(true){
if((i__30284_31033 < count__30283_31032)){
var vec__30316_31036 = chunk__30282_31031.cljs$core$IIndexed$_nth$arity$2(null,i__30284_31033);
var script_tag_31037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30316_31036,(0),null);
var script_body_31038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30316_31036,(1),null);
eval(script_body_31038);


var G__31039 = seq__30281_31030;
var G__31040 = chunk__30282_31031;
var G__31041 = count__30283_31032;
var G__31042 = (i__30284_31033 + (1));
seq__30281_31030 = G__31039;
chunk__30282_31031 = G__31040;
count__30283_31032 = G__31041;
i__30284_31033 = G__31042;
continue;
} else {
var temp__5804__auto___31043 = cljs.core.seq(seq__30281_31030);
if(temp__5804__auto___31043){
var seq__30281_31044__$1 = temp__5804__auto___31043;
if(cljs.core.chunked_seq_QMARK_(seq__30281_31044__$1)){
var c__5568__auto___31045 = cljs.core.chunk_first(seq__30281_31044__$1);
var G__31046 = cljs.core.chunk_rest(seq__30281_31044__$1);
var G__31047 = c__5568__auto___31045;
var G__31048 = cljs.core.count(c__5568__auto___31045);
var G__31049 = (0);
seq__30281_31030 = G__31046;
chunk__30282_31031 = G__31047;
count__30283_31032 = G__31048;
i__30284_31033 = G__31049;
continue;
} else {
var vec__30327_31050 = cljs.core.first(seq__30281_31044__$1);
var script_tag_31051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30327_31050,(0),null);
var script_body_31052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30327_31050,(1),null);
eval(script_body_31052);


var G__31054 = cljs.core.next(seq__30281_31044__$1);
var G__31055 = null;
var G__31056 = (0);
var G__31057 = (0);
seq__30281_31030 = G__31054;
chunk__30282_31031 = G__31055;
count__30283_31032 = G__31056;
i__30284_31033 = G__31057;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__30334){
var vec__30338 = p__30334;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30338,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30338,(1),null);
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
var G__30365 = arguments.length;
switch (G__30365) {
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
var seq__30429 = cljs.core.seq(style_keys);
var chunk__30430 = null;
var count__30431 = (0);
var i__30432 = (0);
while(true){
if((i__30432 < count__30431)){
var it = chunk__30430.cljs$core$IIndexed$_nth$arity$2(null,i__30432);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31061 = seq__30429;
var G__31062 = chunk__30430;
var G__31063 = count__30431;
var G__31064 = (i__30432 + (1));
seq__30429 = G__31061;
chunk__30430 = G__31062;
count__30431 = G__31063;
i__30432 = G__31064;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30429);
if(temp__5804__auto__){
var seq__30429__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30429__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30429__$1);
var G__31065 = cljs.core.chunk_rest(seq__30429__$1);
var G__31066 = c__5568__auto__;
var G__31067 = cljs.core.count(c__5568__auto__);
var G__31068 = (0);
seq__30429 = G__31065;
chunk__30430 = G__31066;
count__30431 = G__31067;
i__30432 = G__31068;
continue;
} else {
var it = cljs.core.first(seq__30429__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31070 = cljs.core.next(seq__30429__$1);
var G__31071 = null;
var G__31072 = (0);
var G__31073 = (0);
seq__30429 = G__31070;
chunk__30430 = G__31071;
count__30431 = G__31072;
i__30432 = G__31073;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k30459,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__30484 = k30459;
var G__30484__$1 = (((G__30484 instanceof cljs.core.Keyword))?G__30484.fqn:null);
switch (G__30484__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30459,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__30486){
var vec__30488 = p__30486;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30488,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30488,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30458){
var self__ = this;
var G__30458__$1 = this;
return (new cljs.core.RecordIter((0),G__30458__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30460,other30461){
var self__ = this;
var this30460__$1 = this;
return (((!((other30461 == null)))) && ((((this30460__$1.constructor === other30461.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30460__$1.x,other30461.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30460__$1.y,other30461.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30460__$1.__extmap,other30461.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k30459){
var self__ = this;
var this__5350__auto____$1 = this;
var G__30515 = k30459;
var G__30515__$1 = (((G__30515 instanceof cljs.core.Keyword))?G__30515.fqn:null);
switch (G__30515__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30459);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__30458){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__30519 = cljs.core.keyword_identical_QMARK_;
var expr__30520 = k__5352__auto__;
if(cljs.core.truth_((pred__30519.cljs$core$IFn$_invoke$arity$2 ? pred__30519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__30520) : pred__30519.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__30520)))){
return (new shadow.dom.Coordinate(G__30458,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30519.cljs$core$IFn$_invoke$arity$2 ? pred__30519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__30520) : pred__30519.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__30520)))){
return (new shadow.dom.Coordinate(self__.x,G__30458,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__30458),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__30458){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__30458,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__30468){
var extmap__5385__auto__ = (function (){var G__30533 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30468,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__30468)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30533);
} else {
return G__30533;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30468),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30468),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k30545,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__30556 = k30545;
var G__30556__$1 = (((G__30556 instanceof cljs.core.Keyword))?G__30556.fqn:null);
switch (G__30556__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30545,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__30563){
var vec__30564 = p__30563;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30564,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30564,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30544){
var self__ = this;
var G__30544__$1 = this;
return (new cljs.core.RecordIter((0),G__30544__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30546,other30547){
var self__ = this;
var this30546__$1 = this;
return (((!((other30547 == null)))) && ((((this30546__$1.constructor === other30547.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30546__$1.w,other30547.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30546__$1.h,other30547.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30546__$1.__extmap,other30547.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k30545){
var self__ = this;
var this__5350__auto____$1 = this;
var G__30572 = k30545;
var G__30572__$1 = (((G__30572 instanceof cljs.core.Keyword))?G__30572.fqn:null);
switch (G__30572__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30545);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__30544){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__30573 = cljs.core.keyword_identical_QMARK_;
var expr__30574 = k__5352__auto__;
if(cljs.core.truth_((pred__30573.cljs$core$IFn$_invoke$arity$2 ? pred__30573.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__30574) : pred__30573.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__30574)))){
return (new shadow.dom.Size(G__30544,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30573.cljs$core$IFn$_invoke$arity$2 ? pred__30573.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__30574) : pred__30573.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__30574)))){
return (new shadow.dom.Size(self__.w,G__30544,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__30544),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__30544){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30544,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30551){
var extmap__5385__auto__ = (function (){var G__30576 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30551,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30551)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30576);
} else {
return G__30576;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30551),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30551),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__31126 = (i + (1));
var G__31127 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31126;
ret = G__31127;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30592){
var vec__30593 = p__30592;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30593,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30593,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30605 = arguments.length;
switch (G__30605) {
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
var G__31134 = ps;
var G__31135 = (i + (1));
el__$1 = G__31134;
i = G__31135;
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
var vec__30634 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30634,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30634,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30634,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30638_31140 = cljs.core.seq(props);
var chunk__30639_31141 = null;
var count__30640_31142 = (0);
var i__30641_31143 = (0);
while(true){
if((i__30641_31143 < count__30640_31142)){
var vec__30653_31144 = chunk__30639_31141.cljs$core$IIndexed$_nth$arity$2(null,i__30641_31143);
var k_31145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30653_31144,(0),null);
var v_31146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30653_31144,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_31145);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31145),v_31146);


var G__31147 = seq__30638_31140;
var G__31148 = chunk__30639_31141;
var G__31149 = count__30640_31142;
var G__31150 = (i__30641_31143 + (1));
seq__30638_31140 = G__31147;
chunk__30639_31141 = G__31148;
count__30640_31142 = G__31149;
i__30641_31143 = G__31150;
continue;
} else {
var temp__5804__auto___31151 = cljs.core.seq(seq__30638_31140);
if(temp__5804__auto___31151){
var seq__30638_31152__$1 = temp__5804__auto___31151;
if(cljs.core.chunked_seq_QMARK_(seq__30638_31152__$1)){
var c__5568__auto___31153 = cljs.core.chunk_first(seq__30638_31152__$1);
var G__31154 = cljs.core.chunk_rest(seq__30638_31152__$1);
var G__31155 = c__5568__auto___31153;
var G__31156 = cljs.core.count(c__5568__auto___31153);
var G__31157 = (0);
seq__30638_31140 = G__31154;
chunk__30639_31141 = G__31155;
count__30640_31142 = G__31156;
i__30641_31143 = G__31157;
continue;
} else {
var vec__30657_31158 = cljs.core.first(seq__30638_31152__$1);
var k_31159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657_31158,(0),null);
var v_31160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657_31158,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_31159);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31159),v_31160);


var G__31161 = cljs.core.next(seq__30638_31152__$1);
var G__31162 = null;
var G__31163 = (0);
var G__31164 = (0);
seq__30638_31140 = G__31161;
chunk__30639_31141 = G__31162;
count__30640_31142 = G__31163;
i__30641_31143 = G__31164;
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
var vec__30678 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30678,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30678,(1),null);
var seq__30681_31166 = cljs.core.seq(node_children);
var chunk__30683_31167 = null;
var count__30684_31168 = (0);
var i__30685_31169 = (0);
while(true){
if((i__30685_31169 < count__30684_31168)){
var child_struct_31173 = chunk__30683_31167.cljs$core$IIndexed$_nth$arity$2(null,i__30685_31169);
if((!((child_struct_31173 == null)))){
if(typeof child_struct_31173 === 'string'){
var text_31177 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31177),child_struct_31173].join(''));
} else {
var children_31178 = shadow.dom.svg_node(child_struct_31173);
if(cljs.core.seq_QMARK_(children_31178)){
var seq__30726_31179 = cljs.core.seq(children_31178);
var chunk__30728_31180 = null;
var count__30729_31181 = (0);
var i__30730_31182 = (0);
while(true){
if((i__30730_31182 < count__30729_31181)){
var child_31183 = chunk__30728_31180.cljs$core$IIndexed$_nth$arity$2(null,i__30730_31182);
if(cljs.core.truth_(child_31183)){
node.appendChild(child_31183);


var G__31184 = seq__30726_31179;
var G__31185 = chunk__30728_31180;
var G__31186 = count__30729_31181;
var G__31187 = (i__30730_31182 + (1));
seq__30726_31179 = G__31184;
chunk__30728_31180 = G__31185;
count__30729_31181 = G__31186;
i__30730_31182 = G__31187;
continue;
} else {
var G__31188 = seq__30726_31179;
var G__31189 = chunk__30728_31180;
var G__31190 = count__30729_31181;
var G__31191 = (i__30730_31182 + (1));
seq__30726_31179 = G__31188;
chunk__30728_31180 = G__31189;
count__30729_31181 = G__31190;
i__30730_31182 = G__31191;
continue;
}
} else {
var temp__5804__auto___31192 = cljs.core.seq(seq__30726_31179);
if(temp__5804__auto___31192){
var seq__30726_31193__$1 = temp__5804__auto___31192;
if(cljs.core.chunked_seq_QMARK_(seq__30726_31193__$1)){
var c__5568__auto___31194 = cljs.core.chunk_first(seq__30726_31193__$1);
var G__31195 = cljs.core.chunk_rest(seq__30726_31193__$1);
var G__31196 = c__5568__auto___31194;
var G__31197 = cljs.core.count(c__5568__auto___31194);
var G__31198 = (0);
seq__30726_31179 = G__31195;
chunk__30728_31180 = G__31196;
count__30729_31181 = G__31197;
i__30730_31182 = G__31198;
continue;
} else {
var child_31199 = cljs.core.first(seq__30726_31193__$1);
if(cljs.core.truth_(child_31199)){
node.appendChild(child_31199);


var G__31200 = cljs.core.next(seq__30726_31193__$1);
var G__31201 = null;
var G__31202 = (0);
var G__31203 = (0);
seq__30726_31179 = G__31200;
chunk__30728_31180 = G__31201;
count__30729_31181 = G__31202;
i__30730_31182 = G__31203;
continue;
} else {
var G__31204 = cljs.core.next(seq__30726_31193__$1);
var G__31205 = null;
var G__31206 = (0);
var G__31207 = (0);
seq__30726_31179 = G__31204;
chunk__30728_31180 = G__31205;
count__30729_31181 = G__31206;
i__30730_31182 = G__31207;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31178);
}
}


var G__31208 = seq__30681_31166;
var G__31209 = chunk__30683_31167;
var G__31210 = count__30684_31168;
var G__31211 = (i__30685_31169 + (1));
seq__30681_31166 = G__31208;
chunk__30683_31167 = G__31209;
count__30684_31168 = G__31210;
i__30685_31169 = G__31211;
continue;
} else {
var G__31212 = seq__30681_31166;
var G__31213 = chunk__30683_31167;
var G__31214 = count__30684_31168;
var G__31215 = (i__30685_31169 + (1));
seq__30681_31166 = G__31212;
chunk__30683_31167 = G__31213;
count__30684_31168 = G__31214;
i__30685_31169 = G__31215;
continue;
}
} else {
var temp__5804__auto___31216 = cljs.core.seq(seq__30681_31166);
if(temp__5804__auto___31216){
var seq__30681_31218__$1 = temp__5804__auto___31216;
if(cljs.core.chunked_seq_QMARK_(seq__30681_31218__$1)){
var c__5568__auto___31222 = cljs.core.chunk_first(seq__30681_31218__$1);
var G__31223 = cljs.core.chunk_rest(seq__30681_31218__$1);
var G__31224 = c__5568__auto___31222;
var G__31225 = cljs.core.count(c__5568__auto___31222);
var G__31226 = (0);
seq__30681_31166 = G__31223;
chunk__30683_31167 = G__31224;
count__30684_31168 = G__31225;
i__30685_31169 = G__31226;
continue;
} else {
var child_struct_31227 = cljs.core.first(seq__30681_31218__$1);
if((!((child_struct_31227 == null)))){
if(typeof child_struct_31227 === 'string'){
var text_31228 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31228),child_struct_31227].join(''));
} else {
var children_31229 = shadow.dom.svg_node(child_struct_31227);
if(cljs.core.seq_QMARK_(children_31229)){
var seq__30742_31230 = cljs.core.seq(children_31229);
var chunk__30744_31231 = null;
var count__30745_31232 = (0);
var i__30746_31233 = (0);
while(true){
if((i__30746_31233 < count__30745_31232)){
var child_31234 = chunk__30744_31231.cljs$core$IIndexed$_nth$arity$2(null,i__30746_31233);
if(cljs.core.truth_(child_31234)){
node.appendChild(child_31234);


var G__31235 = seq__30742_31230;
var G__31236 = chunk__30744_31231;
var G__31237 = count__30745_31232;
var G__31238 = (i__30746_31233 + (1));
seq__30742_31230 = G__31235;
chunk__30744_31231 = G__31236;
count__30745_31232 = G__31237;
i__30746_31233 = G__31238;
continue;
} else {
var G__31239 = seq__30742_31230;
var G__31240 = chunk__30744_31231;
var G__31241 = count__30745_31232;
var G__31242 = (i__30746_31233 + (1));
seq__30742_31230 = G__31239;
chunk__30744_31231 = G__31240;
count__30745_31232 = G__31241;
i__30746_31233 = G__31242;
continue;
}
} else {
var temp__5804__auto___31243__$1 = cljs.core.seq(seq__30742_31230);
if(temp__5804__auto___31243__$1){
var seq__30742_31244__$1 = temp__5804__auto___31243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30742_31244__$1)){
var c__5568__auto___31245 = cljs.core.chunk_first(seq__30742_31244__$1);
var G__31246 = cljs.core.chunk_rest(seq__30742_31244__$1);
var G__31247 = c__5568__auto___31245;
var G__31248 = cljs.core.count(c__5568__auto___31245);
var G__31249 = (0);
seq__30742_31230 = G__31246;
chunk__30744_31231 = G__31247;
count__30745_31232 = G__31248;
i__30746_31233 = G__31249;
continue;
} else {
var child_31250 = cljs.core.first(seq__30742_31244__$1);
if(cljs.core.truth_(child_31250)){
node.appendChild(child_31250);


var G__31251 = cljs.core.next(seq__30742_31244__$1);
var G__31252 = null;
var G__31254 = (0);
var G__31255 = (0);
seq__30742_31230 = G__31251;
chunk__30744_31231 = G__31252;
count__30745_31232 = G__31254;
i__30746_31233 = G__31255;
continue;
} else {
var G__31258 = cljs.core.next(seq__30742_31244__$1);
var G__31259 = null;
var G__31260 = (0);
var G__31261 = (0);
seq__30742_31230 = G__31258;
chunk__30744_31231 = G__31259;
count__30745_31232 = G__31260;
i__30746_31233 = G__31261;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31229);
}
}


var G__31262 = cljs.core.next(seq__30681_31218__$1);
var G__31263 = null;
var G__31264 = (0);
var G__31265 = (0);
seq__30681_31166 = G__31262;
chunk__30683_31167 = G__31263;
count__30684_31168 = G__31264;
i__30685_31169 = G__31265;
continue;
} else {
var G__31266 = cljs.core.next(seq__30681_31218__$1);
var G__31267 = null;
var G__31268 = (0);
var G__31269 = (0);
seq__30681_31166 = G__31266;
chunk__30683_31167 = G__31267;
count__30684_31168 = G__31268;
i__30685_31169 = G__31269;
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
var len__5769__auto___31270 = arguments.length;
var i__5770__auto___31271 = (0);
while(true){
if((i__5770__auto___31271 < len__5769__auto___31270)){
args__5775__auto__.push((arguments[i__5770__auto___31271]));

var G__31272 = (i__5770__auto___31271 + (1));
i__5770__auto___31271 = G__31272;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30754){
var G__30755 = cljs.core.first(seq30754);
var seq30754__$1 = cljs.core.next(seq30754);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30755,seq30754__$1);
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
var G__30759 = arguments.length;
switch (G__30759) {
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
var c__15296__auto___31279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_30764){
var state_val_30765 = (state_30764[(1)]);
if((state_val_30765 === (1))){
var state_30764__$1 = state_30764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30764__$1,(2),once_or_cleanup);
} else {
if((state_val_30765 === (2))){
var inst_30761 = (state_30764[(2)]);
var inst_30762 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_30764__$1 = (function (){var statearr_30766 = state_30764;
(statearr_30766[(7)] = inst_30761);

return statearr_30766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30764__$1,inst_30762);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15146__auto__ = null;
var shadow$dom$state_machine__15146__auto____0 = (function (){
var statearr_30767 = [null,null,null,null,null,null,null,null];
(statearr_30767[(0)] = shadow$dom$state_machine__15146__auto__);

(statearr_30767[(1)] = (1));

return statearr_30767;
});
var shadow$dom$state_machine__15146__auto____1 = (function (state_30764){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_30764);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e30768){var ex__15149__auto__ = e30768;
var statearr_30769_31280 = state_30764;
(statearr_30769_31280[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_30764[(4)]))){
var statearr_30770_31281 = state_30764;
(statearr_30770_31281[(1)] = cljs.core.first((state_30764[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31285 = state_30764;
state_30764 = G__31285;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
shadow$dom$state_machine__15146__auto__ = function(state_30764){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15146__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15146__auto____1.call(this,state_30764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15146__auto____0;
shadow$dom$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15146__auto____1;
return shadow$dom$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_30771 = f__15297__auto__();
(statearr_30771[(6)] = c__15296__auto___31279);

return statearr_30771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
