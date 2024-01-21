import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.core.async.impl.protocols.js";
import "./cljs.core.async.impl.channels.js";
import "./cljs.core.async.impl.buffers.js";
import "./cljs.core.async.impl.timers.js";
import "./cljs.core.async.impl.dispatch.js";
import "./cljs.core.async.impl.ioc_helpers.js";
import "./goog.array.array.js";
goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26011 = (function (f,blockable,meta26012){
this.f = f;
this.blockable = blockable;
this.meta26012 = meta26012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26013,meta26012__$1){
var self__ = this;
var _26013__$1 = this;
return (new cljs.core.async.t_cljs$core$async26011(self__.f,self__.blockable,meta26012__$1));
}));

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26013){
var self__ = this;
var _26013__$1 = this;
return self__.meta26012;
}));

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26012","meta26012",867841006,null)], null);
}));

(cljs.core.async.t_cljs$core$async26011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26011");

(cljs.core.async.t_cljs$core$async26011.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26011.
 */
cljs.core.async.__GT_t_cljs$core$async26011 = (function cljs$core$async$__GT_t_cljs$core$async26011(f,blockable,meta26012){
return (new cljs.core.async.t_cljs$core$async26011(f,blockable,meta26012));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26006 = arguments.length;
switch (G__26006) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async26011(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26056 = arguments.length;
switch (G__26056) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26073 = arguments.length;
switch (G__26073) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26094 = arguments.length;
switch (G__26094) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29577 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29577) : fn1.call(null,val_29577));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29577) : fn1.call(null,val_29577));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26113 = arguments.length;
switch (G__26113) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___29587 = n;
var x_29588 = (0);
while(true){
if((x_29588 < n__5636__auto___29587)){
(a[x_29588] = x_29588);

var G__29589 = (x_29588 + (1));
x_29588 = G__29589;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26131 = (function (flag,meta26132){
this.flag = flag;
this.meta26132 = meta26132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26133,meta26132__$1){
var self__ = this;
var _26133__$1 = this;
return (new cljs.core.async.t_cljs$core$async26131(self__.flag,meta26132__$1));
}));

(cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26133){
var self__ = this;
var _26133__$1 = this;
return self__.meta26132;
}));

(cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26132","meta26132",-1870829994,null)], null);
}));

(cljs.core.async.t_cljs$core$async26131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26131");

(cljs.core.async.t_cljs$core$async26131.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26131.
 */
cljs.core.async.__GT_t_cljs$core$async26131 = (function cljs$core$async$__GT_t_cljs$core$async26131(flag,meta26132){
return (new cljs.core.async.t_cljs$core$async26131(flag,meta26132));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async26131(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26152 = (function (flag,cb,meta26153){
this.flag = flag;
this.cb = cb;
this.meta26153 = meta26153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26154,meta26153__$1){
var self__ = this;
var _26154__$1 = this;
return (new cljs.core.async.t_cljs$core$async26152(self__.flag,self__.cb,meta26153__$1));
}));

(cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26154){
var self__ = this;
var _26154__$1 = this;
return self__.meta26153;
}));

(cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26153","meta26153",-1267781885,null)], null);
}));

(cljs.core.async.t_cljs$core$async26152.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26152");

(cljs.core.async.t_cljs$core$async26152.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26152");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26152.
 */
cljs.core.async.__GT_t_cljs$core$async26152 = (function cljs$core$async$__GT_t_cljs$core$async26152(flag,cb,meta26153){
return (new cljs.core.async.t_cljs$core$async26152(flag,cb,meta26153));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async26152(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26174_SHARP_){
var G__26188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26174_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26188) : fret.call(null,G__26188));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26175_SHARP_){
var G__26189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26175_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26189) : fret.call(null,G__26189));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29596 = (i + (1));
i = G__29596;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29599 = arguments.length;
var i__5770__auto___29600 = (0);
while(true){
if((i__5770__auto___29600 < len__5769__auto___29599)){
args__5775__auto__.push((arguments[i__5770__auto___29600]));

var G__29601 = (i__5770__auto___29600 + (1));
i__5770__auto___29600 = G__29601;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26198){
var map__26199 = p__26198;
var map__26199__$1 = cljs.core.__destructure_map(map__26199);
var opts = map__26199__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26193){
var G__26194 = cljs.core.first(seq26193);
var seq26193__$1 = cljs.core.next(seq26193);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26194,seq26193__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26216 = arguments.length;
switch (G__26216) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15296__auto___29603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_26247){
var state_val_26251 = (state_26247[(1)]);
if((state_val_26251 === (7))){
var inst_26243 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26261_29604 = state_26247__$1;
(statearr_26261_29604[(2)] = inst_26243);

(statearr_26261_29604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (1))){
var state_26247__$1 = state_26247;
var statearr_26265_29605 = state_26247__$1;
(statearr_26265_29605[(2)] = null);

(statearr_26265_29605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (4))){
var inst_26223 = (state_26247[(7)]);
var inst_26223__$1 = (state_26247[(2)]);
var inst_26227 = (inst_26223__$1 == null);
var state_26247__$1 = (function (){var statearr_26266 = state_26247;
(statearr_26266[(7)] = inst_26223__$1);

return statearr_26266;
})();
if(cljs.core.truth_(inst_26227)){
var statearr_26267_29606 = state_26247__$1;
(statearr_26267_29606[(1)] = (5));

} else {
var statearr_26268_29607 = state_26247__$1;
(statearr_26268_29607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (13))){
var state_26247__$1 = state_26247;
var statearr_26269_29608 = state_26247__$1;
(statearr_26269_29608[(2)] = null);

(statearr_26269_29608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (6))){
var inst_26223 = (state_26247[(7)]);
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26247__$1,(11),to,inst_26223);
} else {
if((state_val_26251 === (3))){
var inst_26245 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26247__$1,inst_26245);
} else {
if((state_val_26251 === (12))){
var state_26247__$1 = state_26247;
var statearr_26271_29610 = state_26247__$1;
(statearr_26271_29610[(2)] = null);

(statearr_26271_29610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (2))){
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26247__$1,(4),from);
} else {
if((state_val_26251 === (11))){
var inst_26236 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
if(cljs.core.truth_(inst_26236)){
var statearr_26280_29612 = state_26247__$1;
(statearr_26280_29612[(1)] = (12));

} else {
var statearr_26281_29613 = state_26247__$1;
(statearr_26281_29613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (9))){
var state_26247__$1 = state_26247;
var statearr_26282_29614 = state_26247__$1;
(statearr_26282_29614[(2)] = null);

(statearr_26282_29614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (5))){
var state_26247__$1 = state_26247;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26287_29615 = state_26247__$1;
(statearr_26287_29615[(1)] = (8));

} else {
var statearr_26291_29616 = state_26247__$1;
(statearr_26291_29616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (14))){
var inst_26241 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26292_29617 = state_26247__$1;
(statearr_26292_29617[(2)] = inst_26241);

(statearr_26292_29617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (10))){
var inst_26233 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26293_29618 = state_26247__$1;
(statearr_26293_29618[(2)] = inst_26233);

(statearr_26293_29618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (8))){
var inst_26230 = cljs.core.async.close_BANG_(to);
var state_26247__$1 = state_26247;
var statearr_26298_29619 = state_26247__$1;
(statearr_26298_29619[(2)] = inst_26230);

(statearr_26298_29619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_26299 = [null,null,null,null,null,null,null,null];
(statearr_26299[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_26299[(1)] = (1));

return statearr_26299;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_26247){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26247);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26300){var ex__15149__auto__ = e26300;
var statearr_26301_29621 = state_26247;
(statearr_26301_29621[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26247[(4)]))){
var statearr_26302_29622 = state_26247;
(statearr_26302_29622[(1)] = cljs.core.first((state_26247[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29623 = state_26247;
state_26247 = G__29623;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_26247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_26247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_26315 = f__15297__auto__();
(statearr_26315[(6)] = c__15296__auto___29603);

return statearr_26315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__26320){
var vec__26321 = p__26320;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26321,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26321,(1),null);
var job = vec__26321;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15296__auto___29626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_26332){
var state_val_26333 = (state_26332[(1)]);
if((state_val_26333 === (1))){
var state_26332__$1 = state_26332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26332__$1,(2),res,v);
} else {
if((state_val_26333 === (2))){
var inst_26328 = (state_26332[(2)]);
var inst_26329 = cljs.core.async.close_BANG_(res);
var state_26332__$1 = (function (){var statearr_26334 = state_26332;
(statearr_26334[(7)] = inst_26328);

return statearr_26334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26332__$1,inst_26329);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0 = (function (){
var statearr_26337 = [null,null,null,null,null,null,null,null];
(statearr_26337[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__);

(statearr_26337[(1)] = (1));

return statearr_26337;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1 = (function (state_26332){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26332);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26338){var ex__15149__auto__ = e26338;
var statearr_26341_29627 = state_26332;
(statearr_26341_29627[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26332[(4)]))){
var statearr_26343_29628 = state_26332;
(statearr_26343_29628[(1)] = cljs.core.first((state_26332[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29630 = state_26332;
state_26332 = G__29630;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = function(state_26332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1.call(this,state_26332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_26344 = f__15297__auto__();
(statearr_26344[(6)] = c__15296__auto___29626);

return statearr_26344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__26347){
var vec__26348 = p__26347;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26348,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26348,(1),null);
var job = vec__26348;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___29632 = n;
var __29633 = (0);
while(true){
if((__29633 < n__5636__auto___29632)){
var G__26354_29634 = type;
var G__26354_29635__$1 = (((G__26354_29634 instanceof cljs.core.Keyword))?G__26354_29634.fqn:null);
switch (G__26354_29635__$1) {
case "compute":
var c__15296__auto___29637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29633,c__15296__auto___29637,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async){
return (function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = ((function (__29633,c__15296__auto___29637,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async){
return (function (state_26367){
var state_val_26368 = (state_26367[(1)]);
if((state_val_26368 === (1))){
var state_26367__$1 = state_26367;
var statearr_26372_29638 = state_26367__$1;
(statearr_26372_29638[(2)] = null);

(statearr_26372_29638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (2))){
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26367__$1,(4),jobs);
} else {
if((state_val_26368 === (3))){
var inst_26365 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26367__$1,inst_26365);
} else {
if((state_val_26368 === (4))){
var inst_26357 = (state_26367[(2)]);
var inst_26358 = process__$1(inst_26357);
var state_26367__$1 = state_26367;
if(cljs.core.truth_(inst_26358)){
var statearr_26374_29640 = state_26367__$1;
(statearr_26374_29640[(1)] = (5));

} else {
var statearr_26375_29641 = state_26367__$1;
(statearr_26375_29641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (5))){
var state_26367__$1 = state_26367;
var statearr_26376_29642 = state_26367__$1;
(statearr_26376_29642[(2)] = null);

(statearr_26376_29642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (6))){
var state_26367__$1 = state_26367;
var statearr_26377_29644 = state_26367__$1;
(statearr_26377_29644[(2)] = null);

(statearr_26377_29644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (7))){
var inst_26363 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26379_29646 = state_26367__$1;
(statearr_26379_29646[(2)] = inst_26363);

(statearr_26379_29646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29633,c__15296__auto___29637,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async))
;
return ((function (__29633,switch__15145__auto__,c__15296__auto___29637,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0 = (function (){
var statearr_26384 = [null,null,null,null,null,null,null];
(statearr_26384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__);

(statearr_26384[(1)] = (1));

return statearr_26384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1 = (function (state_26367){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26367);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26385){var ex__15149__auto__ = e26385;
var statearr_26386_29647 = state_26367;
(statearr_26386_29647[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26367[(4)]))){
var statearr_26390_29648 = state_26367;
(statearr_26390_29648[(1)] = cljs.core.first((state_26367[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29649 = state_26367;
state_26367 = G__29649;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = function(state_26367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1.call(this,state_26367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__;
})()
;})(__29633,switch__15145__auto__,c__15296__auto___29637,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async))
})();
var state__15298__auto__ = (function (){var statearr_26391 = f__15297__auto__();
(statearr_26391[(6)] = c__15296__auto___29637);

return statearr_26391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
});})(__29633,c__15296__auto___29637,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async))
);


break;
case "async":
var c__15296__auto___29650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29633,c__15296__auto___29650,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async){
return (function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = ((function (__29633,c__15296__auto___29650,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async){
return (function (state_26407){
var state_val_26408 = (state_26407[(1)]);
if((state_val_26408 === (1))){
var state_26407__$1 = state_26407;
var statearr_26409_29651 = state_26407__$1;
(statearr_26409_29651[(2)] = null);

(statearr_26409_29651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (2))){
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26407__$1,(4),jobs);
} else {
if((state_val_26408 === (3))){
var inst_26405 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26407__$1,inst_26405);
} else {
if((state_val_26408 === (4))){
var inst_26397 = (state_26407[(2)]);
var inst_26398 = async(inst_26397);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26398)){
var statearr_26410_29657 = state_26407__$1;
(statearr_26410_29657[(1)] = (5));

} else {
var statearr_26411_29658 = state_26407__$1;
(statearr_26411_29658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (5))){
var state_26407__$1 = state_26407;
var statearr_26412_29659 = state_26407__$1;
(statearr_26412_29659[(2)] = null);

(statearr_26412_29659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (6))){
var state_26407__$1 = state_26407;
var statearr_26413_29661 = state_26407__$1;
(statearr_26413_29661[(2)] = null);

(statearr_26413_29661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (7))){
var inst_26403 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26415_29662 = state_26407__$1;
(statearr_26415_29662[(2)] = inst_26403);

(statearr_26415_29662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29633,c__15296__auto___29650,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async))
;
return ((function (__29633,switch__15145__auto__,c__15296__auto___29650,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0 = (function (){
var statearr_26416 = [null,null,null,null,null,null,null];
(statearr_26416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__);

(statearr_26416[(1)] = (1));

return statearr_26416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1 = (function (state_26407){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26407);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26422){var ex__15149__auto__ = e26422;
var statearr_26423_29664 = state_26407;
(statearr_26423_29664[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26407[(4)]))){
var statearr_26424_29667 = state_26407;
(statearr_26424_29667[(1)] = cljs.core.first((state_26407[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29668 = state_26407;
state_26407 = G__29668;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = function(state_26407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1.call(this,state_26407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__;
})()
;})(__29633,switch__15145__auto__,c__15296__auto___29650,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async))
})();
var state__15298__auto__ = (function (){var statearr_26429 = f__15297__auto__();
(statearr_26429[(6)] = c__15296__auto___29650);

return statearr_26429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
});})(__29633,c__15296__auto___29650,G__26354_29634,G__26354_29635__$1,n__5636__auto___29632,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26354_29635__$1)].join('')));

}

var G__29669 = (__29633 + (1));
__29633 = G__29669;
continue;
} else {
}
break;
}

var c__15296__auto___29670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_26456){
var state_val_26457 = (state_26456[(1)]);
if((state_val_26457 === (7))){
var inst_26452 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26458_29673 = state_26456__$1;
(statearr_26458_29673[(2)] = inst_26452);

(statearr_26458_29673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (1))){
var state_26456__$1 = state_26456;
var statearr_26459_29675 = state_26456__$1;
(statearr_26459_29675[(2)] = null);

(statearr_26459_29675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (4))){
var inst_26432 = (state_26456[(7)]);
var inst_26432__$1 = (state_26456[(2)]);
var inst_26433 = (inst_26432__$1 == null);
var state_26456__$1 = (function (){var statearr_26460 = state_26456;
(statearr_26460[(7)] = inst_26432__$1);

return statearr_26460;
})();
if(cljs.core.truth_(inst_26433)){
var statearr_26461_29676 = state_26456__$1;
(statearr_26461_29676[(1)] = (5));

} else {
var statearr_26462_29677 = state_26456__$1;
(statearr_26462_29677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (6))){
var inst_26437 = (state_26456[(8)]);
var inst_26432 = (state_26456[(7)]);
var inst_26437__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_26443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26444 = [inst_26432,inst_26437__$1];
var inst_26445 = (new cljs.core.PersistentVector(null,2,(5),inst_26443,inst_26444,null));
var state_26456__$1 = (function (){var statearr_26463 = state_26456;
(statearr_26463[(8)] = inst_26437__$1);

return statearr_26463;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26456__$1,(8),jobs,inst_26445);
} else {
if((state_val_26457 === (3))){
var inst_26454 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26456__$1,inst_26454);
} else {
if((state_val_26457 === (2))){
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26456__$1,(4),from);
} else {
if((state_val_26457 === (9))){
var inst_26449 = (state_26456[(2)]);
var state_26456__$1 = (function (){var statearr_26468 = state_26456;
(statearr_26468[(9)] = inst_26449);

return statearr_26468;
})();
var statearr_26469_29685 = state_26456__$1;
(statearr_26469_29685[(2)] = null);

(statearr_26469_29685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (5))){
var inst_26435 = cljs.core.async.close_BANG_(jobs);
var state_26456__$1 = state_26456;
var statearr_26470_29689 = state_26456__$1;
(statearr_26470_29689[(2)] = inst_26435);

(statearr_26470_29689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (8))){
var inst_26437 = (state_26456[(8)]);
var inst_26447 = (state_26456[(2)]);
var state_26456__$1 = (function (){var statearr_26471 = state_26456;
(statearr_26471[(10)] = inst_26447);

return statearr_26471;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26456__$1,(9),results,inst_26437);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0 = (function (){
var statearr_26475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__);

(statearr_26475[(1)] = (1));

return statearr_26475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1 = (function (state_26456){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26456);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26476){var ex__15149__auto__ = e26476;
var statearr_26477_29694 = state_26456;
(statearr_26477_29694[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26456[(4)]))){
var statearr_26479_29695 = state_26456;
(statearr_26479_29695[(1)] = cljs.core.first((state_26456[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29699 = state_26456;
state_26456 = G__29699;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = function(state_26456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1.call(this,state_26456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_26481 = f__15297__auto__();
(statearr_26481[(6)] = c__15296__auto___29670);

return statearr_26481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


var c__15296__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_26520){
var state_val_26521 = (state_26520[(1)]);
if((state_val_26521 === (7))){
var inst_26515 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
var statearr_26525_29702 = state_26520__$1;
(statearr_26525_29702[(2)] = inst_26515);

(statearr_26525_29702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (20))){
var state_26520__$1 = state_26520;
var statearr_26526_29704 = state_26520__$1;
(statearr_26526_29704[(2)] = null);

(statearr_26526_29704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (1))){
var state_26520__$1 = state_26520;
var statearr_26527_29705 = state_26520__$1;
(statearr_26527_29705[(2)] = null);

(statearr_26527_29705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (4))){
var inst_26484 = (state_26520[(7)]);
var inst_26484__$1 = (state_26520[(2)]);
var inst_26485 = (inst_26484__$1 == null);
var state_26520__$1 = (function (){var statearr_26529 = state_26520;
(statearr_26529[(7)] = inst_26484__$1);

return statearr_26529;
})();
if(cljs.core.truth_(inst_26485)){
var statearr_26530_29709 = state_26520__$1;
(statearr_26530_29709[(1)] = (5));

} else {
var statearr_26531_29711 = state_26520__$1;
(statearr_26531_29711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (15))){
var inst_26497 = (state_26520[(8)]);
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26520__$1,(18),to,inst_26497);
} else {
if((state_val_26521 === (21))){
var inst_26510 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
var statearr_26532_29712 = state_26520__$1;
(statearr_26532_29712[(2)] = inst_26510);

(statearr_26532_29712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (13))){
var inst_26512 = (state_26520[(2)]);
var state_26520__$1 = (function (){var statearr_26533 = state_26520;
(statearr_26533[(9)] = inst_26512);

return statearr_26533;
})();
var statearr_26534_29715 = state_26520__$1;
(statearr_26534_29715[(2)] = null);

(statearr_26534_29715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (6))){
var inst_26484 = (state_26520[(7)]);
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26520__$1,(11),inst_26484);
} else {
if((state_val_26521 === (17))){
var inst_26505 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
if(cljs.core.truth_(inst_26505)){
var statearr_26536_29717 = state_26520__$1;
(statearr_26536_29717[(1)] = (19));

} else {
var statearr_26537_29719 = state_26520__$1;
(statearr_26537_29719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (3))){
var inst_26517 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26520__$1,inst_26517);
} else {
if((state_val_26521 === (12))){
var inst_26494 = (state_26520[(10)]);
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26520__$1,(14),inst_26494);
} else {
if((state_val_26521 === (2))){
var state_26520__$1 = state_26520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26520__$1,(4),results);
} else {
if((state_val_26521 === (19))){
var state_26520__$1 = state_26520;
var statearr_26543_29722 = state_26520__$1;
(statearr_26543_29722[(2)] = null);

(statearr_26543_29722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (11))){
var inst_26494 = (state_26520[(2)]);
var state_26520__$1 = (function (){var statearr_26544 = state_26520;
(statearr_26544[(10)] = inst_26494);

return statearr_26544;
})();
var statearr_26545_29725 = state_26520__$1;
(statearr_26545_29725[(2)] = null);

(statearr_26545_29725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (9))){
var state_26520__$1 = state_26520;
var statearr_26549_29727 = state_26520__$1;
(statearr_26549_29727[(2)] = null);

(statearr_26549_29727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (5))){
var state_26520__$1 = state_26520;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26550_29728 = state_26520__$1;
(statearr_26550_29728[(1)] = (8));

} else {
var statearr_26551_29729 = state_26520__$1;
(statearr_26551_29729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (14))){
var inst_26499 = (state_26520[(11)]);
var inst_26497 = (state_26520[(8)]);
var inst_26497__$1 = (state_26520[(2)]);
var inst_26498 = (inst_26497__$1 == null);
var inst_26499__$1 = cljs.core.not(inst_26498);
var state_26520__$1 = (function (){var statearr_26554 = state_26520;
(statearr_26554[(11)] = inst_26499__$1);

(statearr_26554[(8)] = inst_26497__$1);

return statearr_26554;
})();
if(inst_26499__$1){
var statearr_26559_29734 = state_26520__$1;
(statearr_26559_29734[(1)] = (15));

} else {
var statearr_26560_29736 = state_26520__$1;
(statearr_26560_29736[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (16))){
var inst_26499 = (state_26520[(11)]);
var state_26520__$1 = state_26520;
var statearr_26561_29737 = state_26520__$1;
(statearr_26561_29737[(2)] = inst_26499);

(statearr_26561_29737[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (10))){
var inst_26491 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
var statearr_26562_29738 = state_26520__$1;
(statearr_26562_29738[(2)] = inst_26491);

(statearr_26562_29738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (18))){
var inst_26502 = (state_26520[(2)]);
var state_26520__$1 = state_26520;
var statearr_26563_29739 = state_26520__$1;
(statearr_26563_29739[(2)] = inst_26502);

(statearr_26563_29739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26521 === (8))){
var inst_26488 = cljs.core.async.close_BANG_(to);
var state_26520__$1 = state_26520;
var statearr_26564_29740 = state_26520__$1;
(statearr_26564_29740[(2)] = inst_26488);

(statearr_26564_29740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0 = (function (){
var statearr_26566 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__);

(statearr_26566[(1)] = (1));

return statearr_26566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1 = (function (state_26520){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26520);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26567){var ex__15149__auto__ = e26567;
var statearr_26568_29742 = state_26520;
(statearr_26568_29742[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26520[(4)]))){
var statearr_26570_29743 = state_26520;
(statearr_26570_29743[(1)] = cljs.core.first((state_26520[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29745 = state_26520;
state_26520 = G__29745;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__ = function(state_26520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1.call(this,state_26520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_26591 = f__15297__auto__();
(statearr_26591[(6)] = c__15296__auto__);

return statearr_26591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));

return c__15296__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26611 = arguments.length;
switch (G__26611) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26622 = arguments.length;
switch (G__26622) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26628 = arguments.length;
switch (G__26628) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15296__auto___29760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_26655){
var state_val_26656 = (state_26655[(1)]);
if((state_val_26656 === (7))){
var inst_26651 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
var statearr_26660_29761 = state_26655__$1;
(statearr_26660_29761[(2)] = inst_26651);

(statearr_26660_29761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (1))){
var state_26655__$1 = state_26655;
var statearr_26662_29762 = state_26655__$1;
(statearr_26662_29762[(2)] = null);

(statearr_26662_29762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (4))){
var inst_26631 = (state_26655[(7)]);
var inst_26631__$1 = (state_26655[(2)]);
var inst_26632 = (inst_26631__$1 == null);
var state_26655__$1 = (function (){var statearr_26664 = state_26655;
(statearr_26664[(7)] = inst_26631__$1);

return statearr_26664;
})();
if(cljs.core.truth_(inst_26632)){
var statearr_26665_29763 = state_26655__$1;
(statearr_26665_29763[(1)] = (5));

} else {
var statearr_26666_29764 = state_26655__$1;
(statearr_26666_29764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (13))){
var state_26655__$1 = state_26655;
var statearr_26667_29765 = state_26655__$1;
(statearr_26667_29765[(2)] = null);

(statearr_26667_29765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (6))){
var inst_26631 = (state_26655[(7)]);
var inst_26637 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26631) : p.call(null,inst_26631));
var state_26655__$1 = state_26655;
if(cljs.core.truth_(inst_26637)){
var statearr_26668_29766 = state_26655__$1;
(statearr_26668_29766[(1)] = (9));

} else {
var statearr_26669_29767 = state_26655__$1;
(statearr_26669_29767[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (3))){
var inst_26653 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26655__$1,inst_26653);
} else {
if((state_val_26656 === (12))){
var state_26655__$1 = state_26655;
var statearr_26670_29776 = state_26655__$1;
(statearr_26670_29776[(2)] = null);

(statearr_26670_29776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (2))){
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26655__$1,(4),ch);
} else {
if((state_val_26656 === (11))){
var inst_26631 = (state_26655[(7)]);
var inst_26641 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26655__$1,(8),inst_26641,inst_26631);
} else {
if((state_val_26656 === (9))){
var state_26655__$1 = state_26655;
var statearr_26671_29791 = state_26655__$1;
(statearr_26671_29791[(2)] = tc);

(statearr_26671_29791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (5))){
var inst_26634 = cljs.core.async.close_BANG_(tc);
var inst_26635 = cljs.core.async.close_BANG_(fc);
var state_26655__$1 = (function (){var statearr_26672 = state_26655;
(statearr_26672[(8)] = inst_26634);

return statearr_26672;
})();
var statearr_26673_29796 = state_26655__$1;
(statearr_26673_29796[(2)] = inst_26635);

(statearr_26673_29796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (14))){
var inst_26649 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
var statearr_26674_29797 = state_26655__$1;
(statearr_26674_29797[(2)] = inst_26649);

(statearr_26674_29797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (10))){
var state_26655__$1 = state_26655;
var statearr_26675_29798 = state_26655__$1;
(statearr_26675_29798[(2)] = fc);

(statearr_26675_29798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (8))){
var inst_26644 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
if(cljs.core.truth_(inst_26644)){
var statearr_26676_29799 = state_26655__$1;
(statearr_26676_29799[(1)] = (12));

} else {
var statearr_26677_29800 = state_26655__$1;
(statearr_26677_29800[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_26686 = [null,null,null,null,null,null,null,null,null];
(statearr_26686[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_26686[(1)] = (1));

return statearr_26686;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_26655){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26655);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26691){var ex__15149__auto__ = e26691;
var statearr_26692_29807 = state_26655;
(statearr_26692_29807[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26655[(4)]))){
var statearr_26693_29808 = state_26655;
(statearr_26693_29808[(1)] = cljs.core.first((state_26655[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29809 = state_26655;
state_26655 = G__29809;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_26655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_26655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_26696 = f__15297__auto__();
(statearr_26696[(6)] = c__15296__auto___29760);

return statearr_26696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15296__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_26732){
var state_val_26733 = (state_26732[(1)]);
if((state_val_26733 === (7))){
var inst_26728 = (state_26732[(2)]);
var state_26732__$1 = state_26732;
var statearr_26736_29810 = state_26732__$1;
(statearr_26736_29810[(2)] = inst_26728);

(statearr_26736_29810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (1))){
var inst_26701 = init;
var inst_26702 = inst_26701;
var state_26732__$1 = (function (){var statearr_26738 = state_26732;
(statearr_26738[(7)] = inst_26702);

return statearr_26738;
})();
var statearr_26739_29811 = state_26732__$1;
(statearr_26739_29811[(2)] = null);

(statearr_26739_29811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (4))){
var inst_26707 = (state_26732[(8)]);
var inst_26707__$1 = (state_26732[(2)]);
var inst_26710 = (inst_26707__$1 == null);
var state_26732__$1 = (function (){var statearr_26740 = state_26732;
(statearr_26740[(8)] = inst_26707__$1);

return statearr_26740;
})();
if(cljs.core.truth_(inst_26710)){
var statearr_26741_29812 = state_26732__$1;
(statearr_26741_29812[(1)] = (5));

} else {
var statearr_26742_29813 = state_26732__$1;
(statearr_26742_29813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (6))){
var inst_26702 = (state_26732[(7)]);
var inst_26719 = (state_26732[(9)]);
var inst_26707 = (state_26732[(8)]);
var inst_26719__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_26702,inst_26707) : f.call(null,inst_26702,inst_26707));
var inst_26720 = cljs.core.reduced_QMARK_(inst_26719__$1);
var state_26732__$1 = (function (){var statearr_26749 = state_26732;
(statearr_26749[(9)] = inst_26719__$1);

return statearr_26749;
})();
if(inst_26720){
var statearr_26754_29814 = state_26732__$1;
(statearr_26754_29814[(1)] = (8));

} else {
var statearr_26756_29815 = state_26732__$1;
(statearr_26756_29815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (3))){
var inst_26730 = (state_26732[(2)]);
var state_26732__$1 = state_26732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26732__$1,inst_26730);
} else {
if((state_val_26733 === (2))){
var state_26732__$1 = state_26732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26732__$1,(4),ch);
} else {
if((state_val_26733 === (9))){
var inst_26719 = (state_26732[(9)]);
var inst_26702 = inst_26719;
var state_26732__$1 = (function (){var statearr_26758 = state_26732;
(statearr_26758[(7)] = inst_26702);

return statearr_26758;
})();
var statearr_26760_29816 = state_26732__$1;
(statearr_26760_29816[(2)] = null);

(statearr_26760_29816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (5))){
var inst_26702 = (state_26732[(7)]);
var state_26732__$1 = state_26732;
var statearr_26761_29819 = state_26732__$1;
(statearr_26761_29819[(2)] = inst_26702);

(statearr_26761_29819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (10))){
var inst_26726 = (state_26732[(2)]);
var state_26732__$1 = state_26732;
var statearr_26765_29821 = state_26732__$1;
(statearr_26765_29821[(2)] = inst_26726);

(statearr_26765_29821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (8))){
var inst_26719 = (state_26732[(9)]);
var inst_26722 = cljs.core.deref(inst_26719);
var state_26732__$1 = state_26732;
var statearr_26768_29822 = state_26732__$1;
(statearr_26768_29822[(2)] = inst_26722);

(statearr_26768_29822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15146__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15146__auto____0 = (function (){
var statearr_26773 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26773[(0)] = cljs$core$async$reduce_$_state_machine__15146__auto__);

(statearr_26773[(1)] = (1));

return statearr_26773;
});
var cljs$core$async$reduce_$_state_machine__15146__auto____1 = (function (state_26732){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26732);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26778){var ex__15149__auto__ = e26778;
var statearr_26781_29827 = state_26732;
(statearr_26781_29827[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26732[(4)]))){
var statearr_26782_29828 = state_26732;
(statearr_26782_29828[(1)] = cljs.core.first((state_26732[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29829 = state_26732;
state_26732 = G__29829;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15146__auto__ = function(state_26732){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15146__auto____1.call(this,state_26732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15146__auto____0;
cljs$core$async$reduce_$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15146__auto____1;
return cljs$core$async$reduce_$_state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_26786 = f__15297__auto__();
(statearr_26786[(6)] = c__15296__auto__);

return statearr_26786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));

return c__15296__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15296__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_26798){
var state_val_26799 = (state_26798[(1)]);
if((state_val_26799 === (1))){
var inst_26793 = cljs.core.async.reduce(f__$1,init,ch);
var state_26798__$1 = state_26798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26798__$1,(2),inst_26793);
} else {
if((state_val_26799 === (2))){
var inst_26795 = (state_26798[(2)]);
var inst_26796 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_26795) : f__$1.call(null,inst_26795));
var state_26798__$1 = state_26798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26798__$1,inst_26796);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15146__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15146__auto____0 = (function (){
var statearr_26807 = [null,null,null,null,null,null,null];
(statearr_26807[(0)] = cljs$core$async$transduce_$_state_machine__15146__auto__);

(statearr_26807[(1)] = (1));

return statearr_26807;
});
var cljs$core$async$transduce_$_state_machine__15146__auto____1 = (function (state_26798){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26798);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26808){var ex__15149__auto__ = e26808;
var statearr_26809_29846 = state_26798;
(statearr_26809_29846[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26798[(4)]))){
var statearr_26811_29847 = state_26798;
(statearr_26811_29847[(1)] = cljs.core.first((state_26798[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29848 = state_26798;
state_26798 = G__29848;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15146__auto__ = function(state_26798){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15146__auto____1.call(this,state_26798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15146__auto____0;
cljs$core$async$transduce_$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15146__auto____1;
return cljs$core$async$transduce_$_state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_26812 = f__15297__auto__();
(statearr_26812[(6)] = c__15296__auto__);

return statearr_26812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));

return c__15296__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__26819 = arguments.length;
switch (G__26819) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15296__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_26846){
var state_val_26847 = (state_26846[(1)]);
if((state_val_26847 === (7))){
var inst_26828 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
var statearr_26852_29853 = state_26846__$1;
(statearr_26852_29853[(2)] = inst_26828);

(statearr_26852_29853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (1))){
var inst_26822 = cljs.core.seq(coll);
var inst_26823 = inst_26822;
var state_26846__$1 = (function (){var statearr_26853 = state_26846;
(statearr_26853[(7)] = inst_26823);

return statearr_26853;
})();
var statearr_26854_29856 = state_26846__$1;
(statearr_26854_29856[(2)] = null);

(statearr_26854_29856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (4))){
var inst_26823 = (state_26846[(7)]);
var inst_26826 = cljs.core.first(inst_26823);
var state_26846__$1 = state_26846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26846__$1,(7),ch,inst_26826);
} else {
if((state_val_26847 === (13))){
var inst_26840 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
var statearr_26855_29860 = state_26846__$1;
(statearr_26855_29860[(2)] = inst_26840);

(statearr_26855_29860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (6))){
var inst_26831 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
if(cljs.core.truth_(inst_26831)){
var statearr_26856_29861 = state_26846__$1;
(statearr_26856_29861[(1)] = (8));

} else {
var statearr_26857_29863 = state_26846__$1;
(statearr_26857_29863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (3))){
var inst_26844 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26846__$1,inst_26844);
} else {
if((state_val_26847 === (12))){
var state_26846__$1 = state_26846;
var statearr_26858_29868 = state_26846__$1;
(statearr_26858_29868[(2)] = null);

(statearr_26858_29868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (2))){
var inst_26823 = (state_26846[(7)]);
var state_26846__$1 = state_26846;
if(cljs.core.truth_(inst_26823)){
var statearr_26859_29870 = state_26846__$1;
(statearr_26859_29870[(1)] = (4));

} else {
var statearr_26861_29871 = state_26846__$1;
(statearr_26861_29871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (11))){
var inst_26837 = cljs.core.async.close_BANG_(ch);
var state_26846__$1 = state_26846;
var statearr_26866_29872 = state_26846__$1;
(statearr_26866_29872[(2)] = inst_26837);

(statearr_26866_29872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (9))){
var state_26846__$1 = state_26846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26867_29873 = state_26846__$1;
(statearr_26867_29873[(1)] = (11));

} else {
var statearr_26868_29875 = state_26846__$1;
(statearr_26868_29875[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (5))){
var inst_26823 = (state_26846[(7)]);
var state_26846__$1 = state_26846;
var statearr_26869_29879 = state_26846__$1;
(statearr_26869_29879[(2)] = inst_26823);

(statearr_26869_29879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (10))){
var inst_26842 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
var statearr_26874_29883 = state_26846__$1;
(statearr_26874_29883[(2)] = inst_26842);

(statearr_26874_29883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (8))){
var inst_26823 = (state_26846[(7)]);
var inst_26833 = cljs.core.next(inst_26823);
var inst_26823__$1 = inst_26833;
var state_26846__$1 = (function (){var statearr_26875 = state_26846;
(statearr_26875[(7)] = inst_26823__$1);

return statearr_26875;
})();
var statearr_26878_29885 = state_26846__$1;
(statearr_26878_29885[(2)] = null);

(statearr_26878_29885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_26879 = [null,null,null,null,null,null,null,null];
(statearr_26879[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_26879[(1)] = (1));

return statearr_26879;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_26846){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_26846);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e26884){var ex__15149__auto__ = e26884;
var statearr_26885_29887 = state_26846;
(statearr_26885_29887[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_26846[(4)]))){
var statearr_26886_29891 = state_26846;
(statearr_26886_29891[(1)] = cljs.core.first((state_26846[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29894 = state_26846;
state_26846 = G__29894;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_26846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_26846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_26887 = f__15297__auto__();
(statearr_26887[(6)] = c__15296__auto__);

return statearr_26887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));

return c__15296__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26907 = arguments.length;
switch (G__26907) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_29903 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29903(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29906 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29906(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29914 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29914(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29916 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29916(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26935 = (function (ch,cs,meta26936){
this.ch = ch;
this.cs = cs;
this.meta26936 = meta26936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26937,meta26936__$1){
var self__ = this;
var _26937__$1 = this;
return (new cljs.core.async.t_cljs$core$async26935(self__.ch,self__.cs,meta26936__$1));
}));

(cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26937){
var self__ = this;
var _26937__$1 = this;
return self__.meta26936;
}));

(cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async26935.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async26935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26936","meta26936",408651524,null)], null);
}));

(cljs.core.async.t_cljs$core$async26935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26935");

(cljs.core.async.t_cljs$core$async26935.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26935.
 */
cljs.core.async.__GT_t_cljs$core$async26935 = (function cljs$core$async$__GT_t_cljs$core$async26935(ch,cs,meta26936){
return (new cljs.core.async.t_cljs$core$async26935(ch,cs,meta26936));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async26935(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15296__auto___29919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_27096){
var state_val_27097 = (state_27096[(1)]);
if((state_val_27097 === (7))){
var inst_27090 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27100_29920 = state_27096__$1;
(statearr_27100_29920[(2)] = inst_27090);

(statearr_27100_29920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (20))){
var inst_26990 = (state_27096[(7)]);
var inst_27002 = cljs.core.first(inst_26990);
var inst_27003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27002,(0),null);
var inst_27004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27002,(1),null);
var state_27096__$1 = (function (){var statearr_27101 = state_27096;
(statearr_27101[(8)] = inst_27003);

return statearr_27101;
})();
if(cljs.core.truth_(inst_27004)){
var statearr_27102_29921 = state_27096__$1;
(statearr_27102_29921[(1)] = (22));

} else {
var statearr_27103_29922 = state_27096__$1;
(statearr_27103_29922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (27))){
var inst_27032 = (state_27096[(9)]);
var inst_27034 = (state_27096[(10)]);
var inst_26954 = (state_27096[(11)]);
var inst_27039 = (state_27096[(12)]);
var inst_27039__$1 = cljs.core._nth(inst_27032,inst_27034);
var inst_27040 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27039__$1,inst_26954,done);
var state_27096__$1 = (function (){var statearr_27111 = state_27096;
(statearr_27111[(12)] = inst_27039__$1);

return statearr_27111;
})();
if(cljs.core.truth_(inst_27040)){
var statearr_27114_29923 = state_27096__$1;
(statearr_27114_29923[(1)] = (30));

} else {
var statearr_27115_29924 = state_27096__$1;
(statearr_27115_29924[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (1))){
var state_27096__$1 = state_27096;
var statearr_27116_29925 = state_27096__$1;
(statearr_27116_29925[(2)] = null);

(statearr_27116_29925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (24))){
var inst_26990 = (state_27096[(7)]);
var inst_27009 = (state_27096[(2)]);
var inst_27010 = cljs.core.next(inst_26990);
var inst_26966 = inst_27010;
var inst_26967 = null;
var inst_26968 = (0);
var inst_26969 = (0);
var state_27096__$1 = (function (){var statearr_27117 = state_27096;
(statearr_27117[(13)] = inst_26968);

(statearr_27117[(14)] = inst_26966);

(statearr_27117[(15)] = inst_26967);

(statearr_27117[(16)] = inst_27009);

(statearr_27117[(17)] = inst_26969);

return statearr_27117;
})();
var statearr_27118_29927 = state_27096__$1;
(statearr_27118_29927[(2)] = null);

(statearr_27118_29927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (39))){
var state_27096__$1 = state_27096;
var statearr_27126_29928 = state_27096__$1;
(statearr_27126_29928[(2)] = null);

(statearr_27126_29928[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (4))){
var inst_26954 = (state_27096[(11)]);
var inst_26954__$1 = (state_27096[(2)]);
var inst_26958 = (inst_26954__$1 == null);
var state_27096__$1 = (function (){var statearr_27135 = state_27096;
(statearr_27135[(11)] = inst_26954__$1);

return statearr_27135;
})();
if(cljs.core.truth_(inst_26958)){
var statearr_27136_29929 = state_27096__$1;
(statearr_27136_29929[(1)] = (5));

} else {
var statearr_27138_29930 = state_27096__$1;
(statearr_27138_29930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (15))){
var inst_26968 = (state_27096[(13)]);
var inst_26966 = (state_27096[(14)]);
var inst_26967 = (state_27096[(15)]);
var inst_26969 = (state_27096[(17)]);
var inst_26985 = (state_27096[(2)]);
var inst_26987 = (inst_26969 + (1));
var tmp27119 = inst_26968;
var tmp27120 = inst_26966;
var tmp27121 = inst_26967;
var inst_26966__$1 = tmp27120;
var inst_26967__$1 = tmp27121;
var inst_26968__$1 = tmp27119;
var inst_26969__$1 = inst_26987;
var state_27096__$1 = (function (){var statearr_27139 = state_27096;
(statearr_27139[(13)] = inst_26968__$1);

(statearr_27139[(14)] = inst_26966__$1);

(statearr_27139[(15)] = inst_26967__$1);

(statearr_27139[(17)] = inst_26969__$1);

(statearr_27139[(18)] = inst_26985);

return statearr_27139;
})();
var statearr_27140_29931 = state_27096__$1;
(statearr_27140_29931[(2)] = null);

(statearr_27140_29931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (21))){
var inst_27013 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27148_29932 = state_27096__$1;
(statearr_27148_29932[(2)] = inst_27013);

(statearr_27148_29932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (31))){
var inst_27039 = (state_27096[(12)]);
var inst_27043 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27039);
var state_27096__$1 = state_27096;
var statearr_27150_29933 = state_27096__$1;
(statearr_27150_29933[(2)] = inst_27043);

(statearr_27150_29933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (32))){
var inst_27032 = (state_27096[(9)]);
var inst_27034 = (state_27096[(10)]);
var inst_27031 = (state_27096[(19)]);
var inst_27033 = (state_27096[(20)]);
var inst_27045 = (state_27096[(2)]);
var inst_27047 = (inst_27034 + (1));
var tmp27141 = inst_27032;
var tmp27142 = inst_27031;
var tmp27143 = inst_27033;
var inst_27031__$1 = tmp27142;
var inst_27032__$1 = tmp27141;
var inst_27033__$1 = tmp27143;
var inst_27034__$1 = inst_27047;
var state_27096__$1 = (function (){var statearr_27151 = state_27096;
(statearr_27151[(9)] = inst_27032__$1);

(statearr_27151[(10)] = inst_27034__$1);

(statearr_27151[(19)] = inst_27031__$1);

(statearr_27151[(21)] = inst_27045);

(statearr_27151[(20)] = inst_27033__$1);

return statearr_27151;
})();
var statearr_27154_29935 = state_27096__$1;
(statearr_27154_29935[(2)] = null);

(statearr_27154_29935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (40))){
var inst_27061 = (state_27096[(22)]);
var inst_27065 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27061);
var state_27096__$1 = state_27096;
var statearr_27156_29936 = state_27096__$1;
(statearr_27156_29936[(2)] = inst_27065);

(statearr_27156_29936[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (33))){
var inst_27050 = (state_27096[(23)]);
var inst_27053 = cljs.core.chunked_seq_QMARK_(inst_27050);
var state_27096__$1 = state_27096;
if(inst_27053){
var statearr_27157_29938 = state_27096__$1;
(statearr_27157_29938[(1)] = (36));

} else {
var statearr_27158_29939 = state_27096__$1;
(statearr_27158_29939[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (13))){
var inst_26979 = (state_27096[(24)]);
var inst_26982 = cljs.core.async.close_BANG_(inst_26979);
var state_27096__$1 = state_27096;
var statearr_27167_29942 = state_27096__$1;
(statearr_27167_29942[(2)] = inst_26982);

(statearr_27167_29942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (22))){
var inst_27003 = (state_27096[(8)]);
var inst_27006 = cljs.core.async.close_BANG_(inst_27003);
var state_27096__$1 = state_27096;
var statearr_27171_29943 = state_27096__$1;
(statearr_27171_29943[(2)] = inst_27006);

(statearr_27171_29943[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (36))){
var inst_27050 = (state_27096[(23)]);
var inst_27056 = cljs.core.chunk_first(inst_27050);
var inst_27057 = cljs.core.chunk_rest(inst_27050);
var inst_27058 = cljs.core.count(inst_27056);
var inst_27031 = inst_27057;
var inst_27032 = inst_27056;
var inst_27033 = inst_27058;
var inst_27034 = (0);
var state_27096__$1 = (function (){var statearr_27172 = state_27096;
(statearr_27172[(9)] = inst_27032);

(statearr_27172[(10)] = inst_27034);

(statearr_27172[(19)] = inst_27031);

(statearr_27172[(20)] = inst_27033);

return statearr_27172;
})();
var statearr_27175_29945 = state_27096__$1;
(statearr_27175_29945[(2)] = null);

(statearr_27175_29945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (41))){
var inst_27050 = (state_27096[(23)]);
var inst_27067 = (state_27096[(2)]);
var inst_27068 = cljs.core.next(inst_27050);
var inst_27031 = inst_27068;
var inst_27032 = null;
var inst_27033 = (0);
var inst_27034 = (0);
var state_27096__$1 = (function (){var statearr_27176 = state_27096;
(statearr_27176[(9)] = inst_27032);

(statearr_27176[(10)] = inst_27034);

(statearr_27176[(19)] = inst_27031);

(statearr_27176[(25)] = inst_27067);

(statearr_27176[(20)] = inst_27033);

return statearr_27176;
})();
var statearr_27177_29946 = state_27096__$1;
(statearr_27177_29946[(2)] = null);

(statearr_27177_29946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (43))){
var state_27096__$1 = state_27096;
var statearr_27178_29947 = state_27096__$1;
(statearr_27178_29947[(2)] = null);

(statearr_27178_29947[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (29))){
var inst_27076 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27179_29948 = state_27096__$1;
(statearr_27179_29948[(2)] = inst_27076);

(statearr_27179_29948[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (44))){
var inst_27087 = (state_27096[(2)]);
var state_27096__$1 = (function (){var statearr_27183 = state_27096;
(statearr_27183[(26)] = inst_27087);

return statearr_27183;
})();
var statearr_27184_29949 = state_27096__$1;
(statearr_27184_29949[(2)] = null);

(statearr_27184_29949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (6))){
var inst_27023 = (state_27096[(27)]);
var inst_27022 = cljs.core.deref(cs);
var inst_27023__$1 = cljs.core.keys(inst_27022);
var inst_27024 = cljs.core.count(inst_27023__$1);
var inst_27025 = cljs.core.reset_BANG_(dctr,inst_27024);
var inst_27030 = cljs.core.seq(inst_27023__$1);
var inst_27031 = inst_27030;
var inst_27032 = null;
var inst_27033 = (0);
var inst_27034 = (0);
var state_27096__$1 = (function (){var statearr_27186 = state_27096;
(statearr_27186[(27)] = inst_27023__$1);

(statearr_27186[(9)] = inst_27032);

(statearr_27186[(10)] = inst_27034);

(statearr_27186[(28)] = inst_27025);

(statearr_27186[(19)] = inst_27031);

(statearr_27186[(20)] = inst_27033);

return statearr_27186;
})();
var statearr_27188_29950 = state_27096__$1;
(statearr_27188_29950[(2)] = null);

(statearr_27188_29950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (28))){
var inst_27050 = (state_27096[(23)]);
var inst_27031 = (state_27096[(19)]);
var inst_27050__$1 = cljs.core.seq(inst_27031);
var state_27096__$1 = (function (){var statearr_27189 = state_27096;
(statearr_27189[(23)] = inst_27050__$1);

return statearr_27189;
})();
if(inst_27050__$1){
var statearr_27192_29954 = state_27096__$1;
(statearr_27192_29954[(1)] = (33));

} else {
var statearr_27193_29955 = state_27096__$1;
(statearr_27193_29955[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (25))){
var inst_27034 = (state_27096[(10)]);
var inst_27033 = (state_27096[(20)]);
var inst_27036 = (inst_27034 < inst_27033);
var inst_27037 = inst_27036;
var state_27096__$1 = state_27096;
if(cljs.core.truth_(inst_27037)){
var statearr_27199_29956 = state_27096__$1;
(statearr_27199_29956[(1)] = (27));

} else {
var statearr_27201_29957 = state_27096__$1;
(statearr_27201_29957[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (34))){
var state_27096__$1 = state_27096;
var statearr_27203_29961 = state_27096__$1;
(statearr_27203_29961[(2)] = null);

(statearr_27203_29961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (17))){
var state_27096__$1 = state_27096;
var statearr_27204_29962 = state_27096__$1;
(statearr_27204_29962[(2)] = null);

(statearr_27204_29962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (3))){
var inst_27092 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27096__$1,inst_27092);
} else {
if((state_val_27097 === (12))){
var inst_27018 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27205_29964 = state_27096__$1;
(statearr_27205_29964[(2)] = inst_27018);

(statearr_27205_29964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (2))){
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27096__$1,(4),ch);
} else {
if((state_val_27097 === (23))){
var state_27096__$1 = state_27096;
var statearr_27210_29965 = state_27096__$1;
(statearr_27210_29965[(2)] = null);

(statearr_27210_29965[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (35))){
var inst_27074 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27211_29966 = state_27096__$1;
(statearr_27211_29966[(2)] = inst_27074);

(statearr_27211_29966[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (19))){
var inst_26990 = (state_27096[(7)]);
var inst_26994 = cljs.core.chunk_first(inst_26990);
var inst_26995 = cljs.core.chunk_rest(inst_26990);
var inst_26996 = cljs.core.count(inst_26994);
var inst_26966 = inst_26995;
var inst_26967 = inst_26994;
var inst_26968 = inst_26996;
var inst_26969 = (0);
var state_27096__$1 = (function (){var statearr_27212 = state_27096;
(statearr_27212[(13)] = inst_26968);

(statearr_27212[(14)] = inst_26966);

(statearr_27212[(15)] = inst_26967);

(statearr_27212[(17)] = inst_26969);

return statearr_27212;
})();
var statearr_27213_29969 = state_27096__$1;
(statearr_27213_29969[(2)] = null);

(statearr_27213_29969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (11))){
var inst_26990 = (state_27096[(7)]);
var inst_26966 = (state_27096[(14)]);
var inst_26990__$1 = cljs.core.seq(inst_26966);
var state_27096__$1 = (function (){var statearr_27214 = state_27096;
(statearr_27214[(7)] = inst_26990__$1);

return statearr_27214;
})();
if(inst_26990__$1){
var statearr_27215_29971 = state_27096__$1;
(statearr_27215_29971[(1)] = (16));

} else {
var statearr_27216_29972 = state_27096__$1;
(statearr_27216_29972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (9))){
var inst_27020 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27217_29973 = state_27096__$1;
(statearr_27217_29973[(2)] = inst_27020);

(statearr_27217_29973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (5))){
var inst_26964 = cljs.core.deref(cs);
var inst_26965 = cljs.core.seq(inst_26964);
var inst_26966 = inst_26965;
var inst_26967 = null;
var inst_26968 = (0);
var inst_26969 = (0);
var state_27096__$1 = (function (){var statearr_27218 = state_27096;
(statearr_27218[(13)] = inst_26968);

(statearr_27218[(14)] = inst_26966);

(statearr_27218[(15)] = inst_26967);

(statearr_27218[(17)] = inst_26969);

return statearr_27218;
})();
var statearr_27219_29974 = state_27096__$1;
(statearr_27219_29974[(2)] = null);

(statearr_27219_29974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (14))){
var state_27096__$1 = state_27096;
var statearr_27222_29975 = state_27096__$1;
(statearr_27222_29975[(2)] = null);

(statearr_27222_29975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (45))){
var inst_27084 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27224_29976 = state_27096__$1;
(statearr_27224_29976[(2)] = inst_27084);

(statearr_27224_29976[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (26))){
var inst_27023 = (state_27096[(27)]);
var inst_27078 = (state_27096[(2)]);
var inst_27080 = cljs.core.seq(inst_27023);
var state_27096__$1 = (function (){var statearr_27225 = state_27096;
(statearr_27225[(29)] = inst_27078);

return statearr_27225;
})();
if(inst_27080){
var statearr_27226_29977 = state_27096__$1;
(statearr_27226_29977[(1)] = (42));

} else {
var statearr_27227_29978 = state_27096__$1;
(statearr_27227_29978[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (16))){
var inst_26990 = (state_27096[(7)]);
var inst_26992 = cljs.core.chunked_seq_QMARK_(inst_26990);
var state_27096__$1 = state_27096;
if(inst_26992){
var statearr_27228_29980 = state_27096__$1;
(statearr_27228_29980[(1)] = (19));

} else {
var statearr_27233_29981 = state_27096__$1;
(statearr_27233_29981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (38))){
var inst_27071 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27234_29982 = state_27096__$1;
(statearr_27234_29982[(2)] = inst_27071);

(statearr_27234_29982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (30))){
var state_27096__$1 = state_27096;
var statearr_27236_29983 = state_27096__$1;
(statearr_27236_29983[(2)] = null);

(statearr_27236_29983[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (10))){
var inst_26967 = (state_27096[(15)]);
var inst_26969 = (state_27096[(17)]);
var inst_26977 = cljs.core._nth(inst_26967,inst_26969);
var inst_26979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26977,(0),null);
var inst_26980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26977,(1),null);
var state_27096__$1 = (function (){var statearr_27237 = state_27096;
(statearr_27237[(24)] = inst_26979);

return statearr_27237;
})();
if(cljs.core.truth_(inst_26980)){
var statearr_27238_29984 = state_27096__$1;
(statearr_27238_29984[(1)] = (13));

} else {
var statearr_27239_29986 = state_27096__$1;
(statearr_27239_29986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (18))){
var inst_27016 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27241_29988 = state_27096__$1;
(statearr_27241_29988[(2)] = inst_27016);

(statearr_27241_29988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (42))){
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27096__$1,(45),dchan);
} else {
if((state_val_27097 === (37))){
var inst_27050 = (state_27096[(23)]);
var inst_27061 = (state_27096[(22)]);
var inst_26954 = (state_27096[(11)]);
var inst_27061__$1 = cljs.core.first(inst_27050);
var inst_27062 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27061__$1,inst_26954,done);
var state_27096__$1 = (function (){var statearr_27242 = state_27096;
(statearr_27242[(22)] = inst_27061__$1);

return statearr_27242;
})();
if(cljs.core.truth_(inst_27062)){
var statearr_27243_29992 = state_27096__$1;
(statearr_27243_29992[(1)] = (39));

} else {
var statearr_27244_29993 = state_27096__$1;
(statearr_27244_29993[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (8))){
var inst_26968 = (state_27096[(13)]);
var inst_26969 = (state_27096[(17)]);
var inst_26971 = (inst_26969 < inst_26968);
var inst_26972 = inst_26971;
var state_27096__$1 = state_27096;
if(cljs.core.truth_(inst_26972)){
var statearr_27248_29994 = state_27096__$1;
(statearr_27248_29994[(1)] = (10));

} else {
var statearr_27249_29996 = state_27096__$1;
(statearr_27249_29996[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15146__auto__ = null;
var cljs$core$async$mult_$_state_machine__15146__auto____0 = (function (){
var statearr_27251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27251[(0)] = cljs$core$async$mult_$_state_machine__15146__auto__);

(statearr_27251[(1)] = (1));

return statearr_27251;
});
var cljs$core$async$mult_$_state_machine__15146__auto____1 = (function (state_27096){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_27096);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e27252){var ex__15149__auto__ = e27252;
var statearr_27254_30002 = state_27096;
(statearr_27254_30002[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_27096[(4)]))){
var statearr_27255_30003 = state_27096;
(statearr_27255_30003[(1)] = cljs.core.first((state_27096[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30004 = state_27096;
state_27096 = G__30004;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15146__auto__ = function(state_27096){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15146__auto____1.call(this,state_27096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15146__auto____0;
cljs$core$async$mult_$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15146__auto____1;
return cljs$core$async$mult_$_state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_27256 = f__15297__auto__();
(statearr_27256[(6)] = c__15296__auto___29919);

return statearr_27256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27258 = arguments.length;
switch (G__27258) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_30014 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_30014(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_30021 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_30021(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_30022 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_30022(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_30023 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_30023(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_30025 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_30025(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30027 = arguments.length;
var i__5770__auto___30028 = (0);
while(true){
if((i__5770__auto___30028 < len__5769__auto___30027)){
args__5775__auto__.push((arguments[i__5770__auto___30028]));

var G__30029 = (i__5770__auto___30028 + (1));
i__5770__auto___30028 = G__30029;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27329){
var map__27331 = p__27329;
var map__27331__$1 = cljs.core.__destructure_map(map__27331);
var opts = map__27331__$1;
var statearr_27332_30030 = state;
(statearr_27332_30030[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_27333_30031 = state;
(statearr_27333_30031[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_27337_30033 = state;
(statearr_27337_30033[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27318){
var G__27319 = cljs.core.first(seq27318);
var seq27318__$1 = cljs.core.next(seq27318);
var G__27320 = cljs.core.first(seq27318__$1);
var seq27318__$2 = cljs.core.next(seq27318__$1);
var G__27321 = cljs.core.first(seq27318__$2);
var seq27318__$3 = cljs.core.next(seq27318__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27319,G__27320,G__27321,seq27318__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27351 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27352){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27352 = meta27352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27353,meta27352__$1){
var self__ = this;
var _27353__$1 = this;
return (new cljs.core.async.t_cljs$core$async27351(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27352__$1));
}));

(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27353){
var self__ = this;
var _27353__$1 = this;
return self__.meta27352;
}));

(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27352","meta27352",1493572470,null)], null);
}));

(cljs.core.async.t_cljs$core$async27351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27351");

(cljs.core.async.t_cljs$core$async27351.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27351.
 */
cljs.core.async.__GT_t_cljs$core$async27351 = (function cljs$core$async$__GT_t_cljs$core$async27351(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27352){
return (new cljs.core.async.t_cljs$core$async27351(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27352));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async27351(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15296__auto___30048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_27469){
var state_val_27470 = (state_27469[(1)]);
if((state_val_27470 === (7))){
var inst_27417 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
if(cljs.core.truth_(inst_27417)){
var statearr_27472_30049 = state_27469__$1;
(statearr_27472_30049[(1)] = (8));

} else {
var statearr_27473_30050 = state_27469__$1;
(statearr_27473_30050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (20))){
var inst_27406 = (state_27469[(7)]);
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27469__$1,(23),out,inst_27406);
} else {
if((state_val_27470 === (1))){
var inst_27389 = calc_state();
var inst_27390 = cljs.core.__destructure_map(inst_27389);
var inst_27391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27390,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27390,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27390,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27394 = inst_27389;
var state_27469__$1 = (function (){var statearr_27481 = state_27469;
(statearr_27481[(8)] = inst_27394);

(statearr_27481[(9)] = inst_27391);

(statearr_27481[(10)] = inst_27392);

(statearr_27481[(11)] = inst_27393);

return statearr_27481;
})();
var statearr_27484_30051 = state_27469__$1;
(statearr_27484_30051[(2)] = null);

(statearr_27484_30051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (24))){
var inst_27397 = (state_27469[(12)]);
var inst_27394 = inst_27397;
var state_27469__$1 = (function (){var statearr_27490 = state_27469;
(statearr_27490[(8)] = inst_27394);

return statearr_27490;
})();
var statearr_27491_30053 = state_27469__$1;
(statearr_27491_30053[(2)] = null);

(statearr_27491_30053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (4))){
var inst_27408 = (state_27469[(13)]);
var inst_27406 = (state_27469[(7)]);
var inst_27405 = (state_27469[(2)]);
var inst_27406__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27405,(0),null);
var inst_27407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27405,(1),null);
var inst_27408__$1 = (inst_27406__$1 == null);
var state_27469__$1 = (function (){var statearr_27498 = state_27469;
(statearr_27498[(13)] = inst_27408__$1);

(statearr_27498[(14)] = inst_27407);

(statearr_27498[(7)] = inst_27406__$1);

return statearr_27498;
})();
if(cljs.core.truth_(inst_27408__$1)){
var statearr_27499_30057 = state_27469__$1;
(statearr_27499_30057[(1)] = (5));

} else {
var statearr_27500_30058 = state_27469__$1;
(statearr_27500_30058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (15))){
var inst_27398 = (state_27469[(15)]);
var inst_27439 = (state_27469[(16)]);
var inst_27439__$1 = cljs.core.empty_QMARK_(inst_27398);
var state_27469__$1 = (function (){var statearr_27501 = state_27469;
(statearr_27501[(16)] = inst_27439__$1);

return statearr_27501;
})();
if(inst_27439__$1){
var statearr_27502_30059 = state_27469__$1;
(statearr_27502_30059[(1)] = (17));

} else {
var statearr_27503_30060 = state_27469__$1;
(statearr_27503_30060[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (21))){
var inst_27397 = (state_27469[(12)]);
var inst_27394 = inst_27397;
var state_27469__$1 = (function (){var statearr_27508 = state_27469;
(statearr_27508[(8)] = inst_27394);

return statearr_27508;
})();
var statearr_27513_30063 = state_27469__$1;
(statearr_27513_30063[(2)] = null);

(statearr_27513_30063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (13))){
var inst_27428 = (state_27469[(2)]);
var inst_27433 = calc_state();
var inst_27394 = inst_27433;
var state_27469__$1 = (function (){var statearr_27518 = state_27469;
(statearr_27518[(17)] = inst_27428);

(statearr_27518[(8)] = inst_27394);

return statearr_27518;
})();
var statearr_27519_30067 = state_27469__$1;
(statearr_27519_30067[(2)] = null);

(statearr_27519_30067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (22))){
var inst_27463 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27520_30069 = state_27469__$1;
(statearr_27520_30069[(2)] = inst_27463);

(statearr_27520_30069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (6))){
var inst_27407 = (state_27469[(14)]);
var inst_27415 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27407,change);
var state_27469__$1 = state_27469;
var statearr_27521_30071 = state_27469__$1;
(statearr_27521_30071[(2)] = inst_27415);

(statearr_27521_30071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (25))){
var state_27469__$1 = state_27469;
var statearr_27522_30072 = state_27469__$1;
(statearr_27522_30072[(2)] = null);

(statearr_27522_30072[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (17))){
var inst_27407 = (state_27469[(14)]);
var inst_27399 = (state_27469[(18)]);
var inst_27445 = (inst_27399.cljs$core$IFn$_invoke$arity$1 ? inst_27399.cljs$core$IFn$_invoke$arity$1(inst_27407) : inst_27399.call(null,inst_27407));
var inst_27446 = cljs.core.not(inst_27445);
var state_27469__$1 = state_27469;
var statearr_27528_30079 = state_27469__$1;
(statearr_27528_30079[(2)] = inst_27446);

(statearr_27528_30079[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (3))){
var inst_27467 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27469__$1,inst_27467);
} else {
if((state_val_27470 === (12))){
var state_27469__$1 = state_27469;
var statearr_27529_30080 = state_27469__$1;
(statearr_27529_30080[(2)] = null);

(statearr_27529_30080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (2))){
var inst_27397 = (state_27469[(12)]);
var inst_27394 = (state_27469[(8)]);
var inst_27397__$1 = cljs.core.__destructure_map(inst_27394);
var inst_27398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27397__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27397__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27397__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27469__$1 = (function (){var statearr_27531 = state_27469;
(statearr_27531[(12)] = inst_27397__$1);

(statearr_27531[(15)] = inst_27398);

(statearr_27531[(18)] = inst_27399);

return statearr_27531;
})();
return cljs.core.async.ioc_alts_BANG_(state_27469__$1,(4),inst_27400);
} else {
if((state_val_27470 === (23))){
var inst_27454 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
if(cljs.core.truth_(inst_27454)){
var statearr_27536_30081 = state_27469__$1;
(statearr_27536_30081[(1)] = (24));

} else {
var statearr_27537_30082 = state_27469__$1;
(statearr_27537_30082[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (19))){
var inst_27449 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27540_30083 = state_27469__$1;
(statearr_27540_30083[(2)] = inst_27449);

(statearr_27540_30083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (11))){
var inst_27407 = (state_27469[(14)]);
var inst_27425 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27407);
var state_27469__$1 = state_27469;
var statearr_27544_30084 = state_27469__$1;
(statearr_27544_30084[(2)] = inst_27425);

(statearr_27544_30084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (9))){
var inst_27407 = (state_27469[(14)]);
var inst_27398 = (state_27469[(15)]);
var inst_27436 = (state_27469[(19)]);
var inst_27436__$1 = (inst_27398.cljs$core$IFn$_invoke$arity$1 ? inst_27398.cljs$core$IFn$_invoke$arity$1(inst_27407) : inst_27398.call(null,inst_27407));
var state_27469__$1 = (function (){var statearr_27548 = state_27469;
(statearr_27548[(19)] = inst_27436__$1);

return statearr_27548;
})();
if(cljs.core.truth_(inst_27436__$1)){
var statearr_27550_30086 = state_27469__$1;
(statearr_27550_30086[(1)] = (14));

} else {
var statearr_27553_30087 = state_27469__$1;
(statearr_27553_30087[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (5))){
var inst_27408 = (state_27469[(13)]);
var state_27469__$1 = state_27469;
var statearr_27558_30088 = state_27469__$1;
(statearr_27558_30088[(2)] = inst_27408);

(statearr_27558_30088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (14))){
var inst_27436 = (state_27469[(19)]);
var state_27469__$1 = state_27469;
var statearr_27560_30089 = state_27469__$1;
(statearr_27560_30089[(2)] = inst_27436);

(statearr_27560_30089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (26))){
var inst_27459 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27564_30090 = state_27469__$1;
(statearr_27564_30090[(2)] = inst_27459);

(statearr_27564_30090[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (16))){
var inst_27451 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
if(cljs.core.truth_(inst_27451)){
var statearr_27565_30091 = state_27469__$1;
(statearr_27565_30091[(1)] = (20));

} else {
var statearr_27567_30092 = state_27469__$1;
(statearr_27567_30092[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (10))){
var inst_27465 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27569_30093 = state_27469__$1;
(statearr_27569_30093[(2)] = inst_27465);

(statearr_27569_30093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (18))){
var inst_27439 = (state_27469[(16)]);
var state_27469__$1 = state_27469;
var statearr_27570_30094 = state_27469__$1;
(statearr_27570_30094[(2)] = inst_27439);

(statearr_27570_30094[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (8))){
var inst_27406 = (state_27469[(7)]);
var inst_27423 = (inst_27406 == null);
var state_27469__$1 = state_27469;
if(cljs.core.truth_(inst_27423)){
var statearr_27575_30095 = state_27469__$1;
(statearr_27575_30095[(1)] = (11));

} else {
var statearr_27576_30096 = state_27469__$1;
(statearr_27576_30096[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15146__auto__ = null;
var cljs$core$async$mix_$_state_machine__15146__auto____0 = (function (){
var statearr_27585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27585[(0)] = cljs$core$async$mix_$_state_machine__15146__auto__);

(statearr_27585[(1)] = (1));

return statearr_27585;
});
var cljs$core$async$mix_$_state_machine__15146__auto____1 = (function (state_27469){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_27469);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e27590){var ex__15149__auto__ = e27590;
var statearr_27591_30098 = state_27469;
(statearr_27591_30098[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_27469[(4)]))){
var statearr_27592_30099 = state_27469;
(statearr_27592_30099[(1)] = cljs.core.first((state_27469[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30100 = state_27469;
state_27469 = G__30100;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15146__auto__ = function(state_27469){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15146__auto____1.call(this,state_27469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15146__auto____0;
cljs$core$async$mix_$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15146__auto____1;
return cljs$core$async$mix_$_state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_27594 = f__15297__auto__();
(statearr_27594[(6)] = c__15296__auto___30048);

return statearr_27594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_30101 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30101(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30103 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30103(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30104 = (function() {
var G__30105 = null;
var G__30105__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__30105__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__30105 = function(p,v){
switch(arguments.length){
case 1:
return G__30105__1.call(this,p);
case 2:
return G__30105__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30105.cljs$core$IFn$_invoke$arity$1 = G__30105__1;
G__30105.cljs$core$IFn$_invoke$arity$2 = G__30105__2;
return G__30105;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27616 = arguments.length;
switch (G__27616) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30104(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30104(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27636 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27637){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27637 = meta27637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27638,meta27637__$1){
var self__ = this;
var _27638__$1 = this;
return (new cljs.core.async.t_cljs$core$async27636(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27637__$1));
}));

(cljs.core.async.t_cljs$core$async27636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27638){
var self__ = this;
var _27638__$1 = this;
return self__.meta27637;
}));

(cljs.core.async.t_cljs$core$async27636.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27636.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27636.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27636.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27636.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27636.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27637","meta27637",736329072,null)], null);
}));

(cljs.core.async.t_cljs$core$async27636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27636");

(cljs.core.async.t_cljs$core$async27636.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27636.
 */
cljs.core.async.__GT_t_cljs$core$async27636 = (function cljs$core$async$__GT_t_cljs$core$async27636(ch,topic_fn,buf_fn,mults,ensure_mult,meta27637){
return (new cljs.core.async.t_cljs$core$async27636(ch,topic_fn,buf_fn,mults,ensure_mult,meta27637));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27626 = arguments.length;
switch (G__27626) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__27622_SHARP_){
if(cljs.core.truth_((p1__27622_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27622_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__27622_SHARP_.call(null,topic)))){
return p1__27622_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27622_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async27636(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15296__auto___30118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_27742){
var state_val_27743 = (state_27742[(1)]);
if((state_val_27743 === (7))){
var inst_27733 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27750_30120 = state_27742__$1;
(statearr_27750_30120[(2)] = inst_27733);

(statearr_27750_30120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (20))){
var state_27742__$1 = state_27742;
var statearr_27751_30121 = state_27742__$1;
(statearr_27751_30121[(2)] = null);

(statearr_27751_30121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (1))){
var state_27742__$1 = state_27742;
var statearr_27755_30123 = state_27742__$1;
(statearr_27755_30123[(2)] = null);

(statearr_27755_30123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (24))){
var inst_27716 = (state_27742[(7)]);
var inst_27725 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27716);
var state_27742__$1 = state_27742;
var statearr_27759_30124 = state_27742__$1;
(statearr_27759_30124[(2)] = inst_27725);

(statearr_27759_30124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (4))){
var inst_27666 = (state_27742[(8)]);
var inst_27666__$1 = (state_27742[(2)]);
var inst_27667 = (inst_27666__$1 == null);
var state_27742__$1 = (function (){var statearr_27760 = state_27742;
(statearr_27760[(8)] = inst_27666__$1);

return statearr_27760;
})();
if(cljs.core.truth_(inst_27667)){
var statearr_27761_30125 = state_27742__$1;
(statearr_27761_30125[(1)] = (5));

} else {
var statearr_27763_30127 = state_27742__$1;
(statearr_27763_30127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (15))){
var inst_27710 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27766_30128 = state_27742__$1;
(statearr_27766_30128[(2)] = inst_27710);

(statearr_27766_30128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (21))){
var inst_27730 = (state_27742[(2)]);
var state_27742__$1 = (function (){var statearr_27770 = state_27742;
(statearr_27770[(9)] = inst_27730);

return statearr_27770;
})();
var statearr_27771_30130 = state_27742__$1;
(statearr_27771_30130[(2)] = null);

(statearr_27771_30130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (13))){
var inst_27691 = (state_27742[(10)]);
var inst_27693 = cljs.core.chunked_seq_QMARK_(inst_27691);
var state_27742__$1 = state_27742;
if(inst_27693){
var statearr_27773_30131 = state_27742__$1;
(statearr_27773_30131[(1)] = (16));

} else {
var statearr_27774_30132 = state_27742__$1;
(statearr_27774_30132[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (22))){
var inst_27722 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
if(cljs.core.truth_(inst_27722)){
var statearr_27779_30133 = state_27742__$1;
(statearr_27779_30133[(1)] = (23));

} else {
var statearr_27780_30135 = state_27742__$1;
(statearr_27780_30135[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (6))){
var inst_27718 = (state_27742[(11)]);
var inst_27716 = (state_27742[(7)]);
var inst_27666 = (state_27742[(8)]);
var inst_27716__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_27666) : topic_fn.call(null,inst_27666));
var inst_27717 = cljs.core.deref(mults);
var inst_27718__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27717,inst_27716__$1);
var state_27742__$1 = (function (){var statearr_27785 = state_27742;
(statearr_27785[(11)] = inst_27718__$1);

(statearr_27785[(7)] = inst_27716__$1);

return statearr_27785;
})();
if(cljs.core.truth_(inst_27718__$1)){
var statearr_27787_30137 = state_27742__$1;
(statearr_27787_30137[(1)] = (19));

} else {
var statearr_27789_30138 = state_27742__$1;
(statearr_27789_30138[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (25))){
var inst_27727 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27790_30139 = state_27742__$1;
(statearr_27790_30139[(2)] = inst_27727);

(statearr_27790_30139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (17))){
var inst_27691 = (state_27742[(10)]);
var inst_27700 = cljs.core.first(inst_27691);
var inst_27701 = cljs.core.async.muxch_STAR_(inst_27700);
var inst_27702 = cljs.core.async.close_BANG_(inst_27701);
var inst_27704 = cljs.core.next(inst_27691);
var inst_27677 = inst_27704;
var inst_27678 = null;
var inst_27679 = (0);
var inst_27680 = (0);
var state_27742__$1 = (function (){var statearr_27791 = state_27742;
(statearr_27791[(12)] = inst_27702);

(statearr_27791[(13)] = inst_27677);

(statearr_27791[(14)] = inst_27679);

(statearr_27791[(15)] = inst_27678);

(statearr_27791[(16)] = inst_27680);

return statearr_27791;
})();
var statearr_27792_30143 = state_27742__$1;
(statearr_27792_30143[(2)] = null);

(statearr_27792_30143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (3))){
var inst_27736 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27742__$1,inst_27736);
} else {
if((state_val_27743 === (12))){
var inst_27712 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27797_30145 = state_27742__$1;
(statearr_27797_30145[(2)] = inst_27712);

(statearr_27797_30145[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (2))){
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27742__$1,(4),ch);
} else {
if((state_val_27743 === (23))){
var state_27742__$1 = state_27742;
var statearr_27803_30146 = state_27742__$1;
(statearr_27803_30146[(2)] = null);

(statearr_27803_30146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (19))){
var inst_27718 = (state_27742[(11)]);
var inst_27666 = (state_27742[(8)]);
var inst_27720 = cljs.core.async.muxch_STAR_(inst_27718);
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27742__$1,(22),inst_27720,inst_27666);
} else {
if((state_val_27743 === (11))){
var inst_27691 = (state_27742[(10)]);
var inst_27677 = (state_27742[(13)]);
var inst_27691__$1 = cljs.core.seq(inst_27677);
var state_27742__$1 = (function (){var statearr_27811 = state_27742;
(statearr_27811[(10)] = inst_27691__$1);

return statearr_27811;
})();
if(inst_27691__$1){
var statearr_27815_30147 = state_27742__$1;
(statearr_27815_30147[(1)] = (13));

} else {
var statearr_27816_30150 = state_27742__$1;
(statearr_27816_30150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (9))){
var inst_27714 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27821_30151 = state_27742__$1;
(statearr_27821_30151[(2)] = inst_27714);

(statearr_27821_30151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (5))){
var inst_27674 = cljs.core.deref(mults);
var inst_27675 = cljs.core.vals(inst_27674);
var inst_27676 = cljs.core.seq(inst_27675);
var inst_27677 = inst_27676;
var inst_27678 = null;
var inst_27679 = (0);
var inst_27680 = (0);
var state_27742__$1 = (function (){var statearr_27830 = state_27742;
(statearr_27830[(13)] = inst_27677);

(statearr_27830[(14)] = inst_27679);

(statearr_27830[(15)] = inst_27678);

(statearr_27830[(16)] = inst_27680);

return statearr_27830;
})();
var statearr_27831_30153 = state_27742__$1;
(statearr_27831_30153[(2)] = null);

(statearr_27831_30153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (14))){
var state_27742__$1 = state_27742;
var statearr_27836_30155 = state_27742__$1;
(statearr_27836_30155[(2)] = null);

(statearr_27836_30155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (16))){
var inst_27691 = (state_27742[(10)]);
var inst_27695 = cljs.core.chunk_first(inst_27691);
var inst_27696 = cljs.core.chunk_rest(inst_27691);
var inst_27697 = cljs.core.count(inst_27695);
var inst_27677 = inst_27696;
var inst_27678 = inst_27695;
var inst_27679 = inst_27697;
var inst_27680 = (0);
var state_27742__$1 = (function (){var statearr_27840 = state_27742;
(statearr_27840[(13)] = inst_27677);

(statearr_27840[(14)] = inst_27679);

(statearr_27840[(15)] = inst_27678);

(statearr_27840[(16)] = inst_27680);

return statearr_27840;
})();
var statearr_27841_30156 = state_27742__$1;
(statearr_27841_30156[(2)] = null);

(statearr_27841_30156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (10))){
var inst_27677 = (state_27742[(13)]);
var inst_27679 = (state_27742[(14)]);
var inst_27678 = (state_27742[(15)]);
var inst_27680 = (state_27742[(16)]);
var inst_27685 = cljs.core._nth(inst_27678,inst_27680);
var inst_27686 = cljs.core.async.muxch_STAR_(inst_27685);
var inst_27687 = cljs.core.async.close_BANG_(inst_27686);
var inst_27688 = (inst_27680 + (1));
var tmp27832 = inst_27677;
var tmp27833 = inst_27679;
var tmp27834 = inst_27678;
var inst_27677__$1 = tmp27832;
var inst_27678__$1 = tmp27834;
var inst_27679__$1 = tmp27833;
var inst_27680__$1 = inst_27688;
var state_27742__$1 = (function (){var statearr_27842 = state_27742;
(statearr_27842[(17)] = inst_27687);

(statearr_27842[(13)] = inst_27677__$1);

(statearr_27842[(14)] = inst_27679__$1);

(statearr_27842[(15)] = inst_27678__$1);

(statearr_27842[(16)] = inst_27680__$1);

return statearr_27842;
})();
var statearr_27847_30157 = state_27742__$1;
(statearr_27847_30157[(2)] = null);

(statearr_27847_30157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (18))){
var inst_27707 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27848_30158 = state_27742__$1;
(statearr_27848_30158[(2)] = inst_27707);

(statearr_27848_30158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (8))){
var inst_27679 = (state_27742[(14)]);
var inst_27680 = (state_27742[(16)]);
var inst_27682 = (inst_27680 < inst_27679);
var inst_27683 = inst_27682;
var state_27742__$1 = state_27742;
if(cljs.core.truth_(inst_27683)){
var statearr_27852_30159 = state_27742__$1;
(statearr_27852_30159[(1)] = (10));

} else {
var statearr_27853_30160 = state_27742__$1;
(statearr_27853_30160[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_27854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27854[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_27854[(1)] = (1));

return statearr_27854;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_27742){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_27742);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e27861){var ex__15149__auto__ = e27861;
var statearr_27867_30161 = state_27742;
(statearr_27867_30161[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_27742[(4)]))){
var statearr_27872_30162 = state_27742;
(statearr_27872_30162[(1)] = cljs.core.first((state_27742[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30163 = state_27742;
state_27742 = G__30163;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_27742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_27742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_27877 = f__15297__auto__();
(statearr_27877[(6)] = c__15296__auto___30118);

return statearr_27877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27890 = arguments.length;
switch (G__27890) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27908 = arguments.length;
switch (G__27908) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27920 = arguments.length;
switch (G__27920) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15296__auto___30176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_27976){
var state_val_27977 = (state_27976[(1)]);
if((state_val_27977 === (7))){
var state_27976__$1 = state_27976;
var statearr_27981_30177 = state_27976__$1;
(statearr_27981_30177[(2)] = null);

(statearr_27981_30177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (1))){
var state_27976__$1 = state_27976;
var statearr_27983_30178 = state_27976__$1;
(statearr_27983_30178[(2)] = null);

(statearr_27983_30178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (4))){
var inst_27934 = (state_27976[(7)]);
var inst_27935 = (state_27976[(8)]);
var inst_27937 = (inst_27935 < inst_27934);
var state_27976__$1 = state_27976;
if(cljs.core.truth_(inst_27937)){
var statearr_27984_30179 = state_27976__$1;
(statearr_27984_30179[(1)] = (6));

} else {
var statearr_27985_30180 = state_27976__$1;
(statearr_27985_30180[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (15))){
var inst_27962 = (state_27976[(9)]);
var inst_27967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_27962);
var state_27976__$1 = state_27976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27976__$1,(17),out,inst_27967);
} else {
if((state_val_27977 === (13))){
var inst_27962 = (state_27976[(9)]);
var inst_27962__$1 = (state_27976[(2)]);
var inst_27963 = cljs.core.some(cljs.core.nil_QMARK_,inst_27962__$1);
var state_27976__$1 = (function (){var statearr_27986 = state_27976;
(statearr_27986[(9)] = inst_27962__$1);

return statearr_27986;
})();
if(cljs.core.truth_(inst_27963)){
var statearr_27987_30181 = state_27976__$1;
(statearr_27987_30181[(1)] = (14));

} else {
var statearr_27988_30182 = state_27976__$1;
(statearr_27988_30182[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (6))){
var state_27976__$1 = state_27976;
var statearr_27989_30183 = state_27976__$1;
(statearr_27989_30183[(2)] = null);

(statearr_27989_30183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (17))){
var inst_27969 = (state_27976[(2)]);
var state_27976__$1 = (function (){var statearr_27999 = state_27976;
(statearr_27999[(10)] = inst_27969);

return statearr_27999;
})();
var statearr_28001_30184 = state_27976__$1;
(statearr_28001_30184[(2)] = null);

(statearr_28001_30184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (3))){
var inst_27974 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27976__$1,inst_27974);
} else {
if((state_val_27977 === (12))){
var _ = (function (){var statearr_28002 = state_27976;
(statearr_28002[(4)] = cljs.core.rest((state_27976[(4)])));

return statearr_28002;
})();
var state_27976__$1 = state_27976;
var ex27995 = (state_27976__$1[(2)]);
var statearr_28003_30185 = state_27976__$1;
(statearr_28003_30185[(5)] = ex27995);


if((ex27995 instanceof Object)){
var statearr_28004_30186 = state_27976__$1;
(statearr_28004_30186[(1)] = (11));

(statearr_28004_30186[(5)] = null);

} else {
throw ex27995;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (2))){
var inst_27933 = cljs.core.reset_BANG_(dctr,cnt);
var inst_27934 = cnt;
var inst_27935 = (0);
var state_27976__$1 = (function (){var statearr_28010 = state_27976;
(statearr_28010[(7)] = inst_27934);

(statearr_28010[(11)] = inst_27933);

(statearr_28010[(8)] = inst_27935);

return statearr_28010;
})();
var statearr_28011_30190 = state_27976__$1;
(statearr_28011_30190[(2)] = null);

(statearr_28011_30190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (11))){
var inst_27941 = (state_27976[(2)]);
var inst_27942 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_27976__$1 = (function (){var statearr_28012 = state_27976;
(statearr_28012[(12)] = inst_27941);

return statearr_28012;
})();
var statearr_28013_30191 = state_27976__$1;
(statearr_28013_30191[(2)] = inst_27942);

(statearr_28013_30191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (9))){
var inst_27935 = (state_27976[(8)]);
var _ = (function (){var statearr_28014 = state_27976;
(statearr_28014[(4)] = cljs.core.cons((12),(state_27976[(4)])));

return statearr_28014;
})();
var inst_27948 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_27935) : chs__$1.call(null,inst_27935));
var inst_27949 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_27935) : done.call(null,inst_27935));
var inst_27950 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_27948,inst_27949);
var ___$1 = (function (){var statearr_28015 = state_27976;
(statearr_28015[(4)] = cljs.core.rest((state_27976[(4)])));

return statearr_28015;
})();
var state_27976__$1 = state_27976;
var statearr_28016_30198 = state_27976__$1;
(statearr_28016_30198[(2)] = inst_27950);

(statearr_28016_30198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (5))){
var inst_27960 = (state_27976[(2)]);
var state_27976__$1 = (function (){var statearr_28017 = state_27976;
(statearr_28017[(13)] = inst_27960);

return statearr_28017;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27976__$1,(13),dchan);
} else {
if((state_val_27977 === (14))){
var inst_27965 = cljs.core.async.close_BANG_(out);
var state_27976__$1 = state_27976;
var statearr_28019_30199 = state_27976__$1;
(statearr_28019_30199[(2)] = inst_27965);

(statearr_28019_30199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (16))){
var inst_27972 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28020_30200 = state_27976__$1;
(statearr_28020_30200[(2)] = inst_27972);

(statearr_28020_30200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (10))){
var inst_27935 = (state_27976[(8)]);
var inst_27953 = (state_27976[(2)]);
var inst_27954 = (inst_27935 + (1));
var inst_27935__$1 = inst_27954;
var state_27976__$1 = (function (){var statearr_28021 = state_27976;
(statearr_28021[(8)] = inst_27935__$1);

(statearr_28021[(14)] = inst_27953);

return statearr_28021;
})();
var statearr_28022_30202 = state_27976__$1;
(statearr_28022_30202[(2)] = null);

(statearr_28022_30202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (8))){
var inst_27958 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_28023_30203 = state_27976__$1;
(statearr_28023_30203[(2)] = inst_27958);

(statearr_28023_30203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_28027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28027[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_28027[(1)] = (1));

return statearr_28027;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_27976){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_27976);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e28030){var ex__15149__auto__ = e28030;
var statearr_28031_30208 = state_27976;
(statearr_28031_30208[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_27976[(4)]))){
var statearr_28032_30211 = state_27976;
(statearr_28032_30211[(1)] = cljs.core.first((state_27976[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30213 = state_27976;
state_27976 = G__30213;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_27976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_27976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_28034 = f__15297__auto__();
(statearr_28034[(6)] = c__15296__auto___30176);

return statearr_28034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28037 = arguments.length;
switch (G__28037) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15296__auto___30221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_28074){
var state_val_28075 = (state_28074[(1)]);
if((state_val_28075 === (7))){
var inst_28053 = (state_28074[(7)]);
var inst_28054 = (state_28074[(8)]);
var inst_28053__$1 = (state_28074[(2)]);
var inst_28054__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28053__$1,(0),null);
var inst_28055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28053__$1,(1),null);
var inst_28056 = (inst_28054__$1 == null);
var state_28074__$1 = (function (){var statearr_28080 = state_28074;
(statearr_28080[(7)] = inst_28053__$1);

(statearr_28080[(8)] = inst_28054__$1);

(statearr_28080[(9)] = inst_28055);

return statearr_28080;
})();
if(cljs.core.truth_(inst_28056)){
var statearr_28082_30226 = state_28074__$1;
(statearr_28082_30226[(1)] = (8));

} else {
var statearr_28083_30227 = state_28074__$1;
(statearr_28083_30227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (1))){
var inst_28041 = cljs.core.vec(chs);
var inst_28043 = inst_28041;
var state_28074__$1 = (function (){var statearr_28085 = state_28074;
(statearr_28085[(10)] = inst_28043);

return statearr_28085;
})();
var statearr_28086_30231 = state_28074__$1;
(statearr_28086_30231[(2)] = null);

(statearr_28086_30231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (4))){
var inst_28043 = (state_28074[(10)]);
var state_28074__$1 = state_28074;
return cljs.core.async.ioc_alts_BANG_(state_28074__$1,(7),inst_28043);
} else {
if((state_val_28075 === (6))){
var inst_28070 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
var statearr_28094_30233 = state_28074__$1;
(statearr_28094_30233[(2)] = inst_28070);

(statearr_28094_30233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (3))){
var inst_28072 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28074__$1,inst_28072);
} else {
if((state_val_28075 === (2))){
var inst_28043 = (state_28074[(10)]);
var inst_28045 = cljs.core.count(inst_28043);
var inst_28046 = (inst_28045 > (0));
var state_28074__$1 = state_28074;
if(cljs.core.truth_(inst_28046)){
var statearr_28102_30241 = state_28074__$1;
(statearr_28102_30241[(1)] = (4));

} else {
var statearr_28103_30242 = state_28074__$1;
(statearr_28103_30242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (11))){
var inst_28043 = (state_28074[(10)]);
var inst_28063 = (state_28074[(2)]);
var tmp28097 = inst_28043;
var inst_28043__$1 = tmp28097;
var state_28074__$1 = (function (){var statearr_28104 = state_28074;
(statearr_28104[(10)] = inst_28043__$1);

(statearr_28104[(11)] = inst_28063);

return statearr_28104;
})();
var statearr_28105_30244 = state_28074__$1;
(statearr_28105_30244[(2)] = null);

(statearr_28105_30244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (9))){
var inst_28054 = (state_28074[(8)]);
var state_28074__$1 = state_28074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28074__$1,(11),out,inst_28054);
} else {
if((state_val_28075 === (5))){
var inst_28068 = cljs.core.async.close_BANG_(out);
var state_28074__$1 = state_28074;
var statearr_28112_30248 = state_28074__$1;
(statearr_28112_30248[(2)] = inst_28068);

(statearr_28112_30248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (10))){
var inst_28066 = (state_28074[(2)]);
var state_28074__$1 = state_28074;
var statearr_28114_30249 = state_28074__$1;
(statearr_28114_30249[(2)] = inst_28066);

(statearr_28114_30249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28075 === (8))){
var inst_28053 = (state_28074[(7)]);
var inst_28054 = (state_28074[(8)]);
var inst_28043 = (state_28074[(10)]);
var inst_28055 = (state_28074[(9)]);
var inst_28058 = (function (){var cs = inst_28043;
var vec__28049 = inst_28053;
var v = inst_28054;
var c = inst_28055;
return (function (p1__28035_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28035_SHARP_);
});
})();
var inst_28059 = cljs.core.filterv(inst_28058,inst_28043);
var inst_28043__$1 = inst_28059;
var state_28074__$1 = (function (){var statearr_28122 = state_28074;
(statearr_28122[(10)] = inst_28043__$1);

return statearr_28122;
})();
var statearr_28123_30254 = state_28074__$1;
(statearr_28123_30254[(2)] = null);

(statearr_28123_30254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_28131 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28131[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_28131[(1)] = (1));

return statearr_28131;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_28074){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_28074);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e28140){var ex__15149__auto__ = e28140;
var statearr_28147_30256 = state_28074;
(statearr_28147_30256[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_28074[(4)]))){
var statearr_28155_30257 = state_28074;
(statearr_28155_30257[(1)] = cljs.core.first((state_28074[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30261 = state_28074;
state_28074 = G__30261;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_28074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_28074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_28188 = f__15297__auto__();
(statearr_28188[(6)] = c__15296__auto___30221);

return statearr_28188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28210 = arguments.length;
switch (G__28210) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15296__auto___30267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_28258){
var state_val_28259 = (state_28258[(1)]);
if((state_val_28259 === (7))){
var inst_28237 = (state_28258[(7)]);
var inst_28237__$1 = (state_28258[(2)]);
var inst_28238 = (inst_28237__$1 == null);
var inst_28239 = cljs.core.not(inst_28238);
var state_28258__$1 = (function (){var statearr_28285 = state_28258;
(statearr_28285[(7)] = inst_28237__$1);

return statearr_28285;
})();
if(inst_28239){
var statearr_28289_30272 = state_28258__$1;
(statearr_28289_30272[(1)] = (8));

} else {
var statearr_28290_30273 = state_28258__$1;
(statearr_28290_30273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (1))){
var inst_28232 = (0);
var state_28258__$1 = (function (){var statearr_28292 = state_28258;
(statearr_28292[(8)] = inst_28232);

return statearr_28292;
})();
var statearr_28294_30275 = state_28258__$1;
(statearr_28294_30275[(2)] = null);

(statearr_28294_30275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (4))){
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28258__$1,(7),ch);
} else {
if((state_val_28259 === (6))){
var inst_28252 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28298_30279 = state_28258__$1;
(statearr_28298_30279[(2)] = inst_28252);

(statearr_28298_30279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (3))){
var inst_28254 = (state_28258[(2)]);
var inst_28255 = cljs.core.async.close_BANG_(out);
var state_28258__$1 = (function (){var statearr_28299 = state_28258;
(statearr_28299[(9)] = inst_28254);

return statearr_28299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28258__$1,inst_28255);
} else {
if((state_val_28259 === (2))){
var inst_28232 = (state_28258[(8)]);
var inst_28234 = (inst_28232 < n);
var state_28258__$1 = state_28258;
if(cljs.core.truth_(inst_28234)){
var statearr_28302_30285 = state_28258__$1;
(statearr_28302_30285[(1)] = (4));

} else {
var statearr_28307_30288 = state_28258__$1;
(statearr_28307_30288[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (11))){
var inst_28232 = (state_28258[(8)]);
var inst_28242 = (state_28258[(2)]);
var inst_28244 = (inst_28232 + (1));
var inst_28232__$1 = inst_28244;
var state_28258__$1 = (function (){var statearr_28308 = state_28258;
(statearr_28308[(8)] = inst_28232__$1);

(statearr_28308[(10)] = inst_28242);

return statearr_28308;
})();
var statearr_28309_30294 = state_28258__$1;
(statearr_28309_30294[(2)] = null);

(statearr_28309_30294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (9))){
var state_28258__$1 = state_28258;
var statearr_28311_30295 = state_28258__$1;
(statearr_28311_30295[(2)] = null);

(statearr_28311_30295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (5))){
var state_28258__$1 = state_28258;
var statearr_28313_30299 = state_28258__$1;
(statearr_28313_30299[(2)] = null);

(statearr_28313_30299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (10))){
var inst_28248 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28314_30300 = state_28258__$1;
(statearr_28314_30300[(2)] = inst_28248);

(statearr_28314_30300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (8))){
var inst_28237 = (state_28258[(7)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28258__$1,(11),out,inst_28237);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_28327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28327[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_28327[(1)] = (1));

return statearr_28327;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_28258){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_28258);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e28341){var ex__15149__auto__ = e28341;
var statearr_28342_30309 = state_28258;
(statearr_28342_30309[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_28258[(4)]))){
var statearr_28343_30310 = state_28258;
(statearr_28343_30310[(1)] = cljs.core.first((state_28258[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30313 = state_28258;
state_28258 = G__30313;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_28258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_28258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_28344 = f__15297__auto__();
(statearr_28344[(6)] = c__15296__auto___30267);

return statearr_28344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28368 = (function (f,ch,meta28352,_,fn1,meta28369){
this.f = f;
this.ch = ch;
this.meta28352 = meta28352;
this._ = _;
this.fn1 = fn1;
this.meta28369 = meta28369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28370,meta28369__$1){
var self__ = this;
var _28370__$1 = this;
return (new cljs.core.async.t_cljs$core$async28368(self__.f,self__.ch,self__.meta28352,self__._,self__.fn1,meta28369__$1));
}));

(cljs.core.async.t_cljs$core$async28368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28370){
var self__ = this;
var _28370__$1 = this;
return self__.meta28369;
}));

(cljs.core.async.t_cljs$core$async28368.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28368.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__28346_SHARP_){
var G__28385 = (((p1__28346_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28346_SHARP_) : self__.f.call(null,p1__28346_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28385) : f1.call(null,G__28385));
});
}));

(cljs.core.async.t_cljs$core$async28368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28352","meta28352",-428297865,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28351","cljs.core.async/t_cljs$core$async28351",-1373573851,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28369","meta28369",2036029533,null)], null);
}));

(cljs.core.async.t_cljs$core$async28368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28368");

(cljs.core.async.t_cljs$core$async28368.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28368.
 */
cljs.core.async.__GT_t_cljs$core$async28368 = (function cljs$core$async$__GT_t_cljs$core$async28368(f,ch,meta28352,_,fn1,meta28369){
return (new cljs.core.async.t_cljs$core$async28368(f,ch,meta28352,_,fn1,meta28369));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28351 = (function (f,ch,meta28352){
this.f = f;
this.ch = ch;
this.meta28352 = meta28352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28353,meta28352__$1){
var self__ = this;
var _28353__$1 = this;
return (new cljs.core.async.t_cljs$core$async28351(self__.f,self__.ch,meta28352__$1));
}));

(cljs.core.async.t_cljs$core$async28351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28353){
var self__ = this;
var _28353__$1 = this;
return self__.meta28352;
}));

(cljs.core.async.t_cljs$core$async28351.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28351.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28351.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async28368(self__.f,self__.ch,self__.meta28352,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28395 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28395) : self__.f.call(null,G__28395));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28351.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28352","meta28352",-428297865,null)], null);
}));

(cljs.core.async.t_cljs$core$async28351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28351");

(cljs.core.async.t_cljs$core$async28351.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28351.
 */
cljs.core.async.__GT_t_cljs$core$async28351 = (function cljs$core$async$__GT_t_cljs$core$async28351(f,ch,meta28352){
return (new cljs.core.async.t_cljs$core$async28351(f,ch,meta28352));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async28351(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28402 = (function (f,ch,meta28403){
this.f = f;
this.ch = ch;
this.meta28403 = meta28403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28404,meta28403__$1){
var self__ = this;
var _28404__$1 = this;
return (new cljs.core.async.t_cljs$core$async28402(self__.f,self__.ch,meta28403__$1));
}));

(cljs.core.async.t_cljs$core$async28402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28404){
var self__ = this;
var _28404__$1 = this;
return self__.meta28403;
}));

(cljs.core.async.t_cljs$core$async28402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async28402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28403","meta28403",1668273187,null)], null);
}));

(cljs.core.async.t_cljs$core$async28402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28402");

(cljs.core.async.t_cljs$core$async28402.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28402.
 */
cljs.core.async.__GT_t_cljs$core$async28402 = (function cljs$core$async$__GT_t_cljs$core$async28402(f,ch,meta28403){
return (new cljs.core.async.t_cljs$core$async28402(f,ch,meta28403));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async28402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28414 = (function (p,ch,meta28415){
this.p = p;
this.ch = ch;
this.meta28415 = meta28415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28416,meta28415__$1){
var self__ = this;
var _28416__$1 = this;
return (new cljs.core.async.t_cljs$core$async28414(self__.p,self__.ch,meta28415__$1));
}));

(cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28416){
var self__ = this;
var _28416__$1 = this;
return self__.meta28415;
}));

(cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28415","meta28415",646887389,null)], null);
}));

(cljs.core.async.t_cljs$core$async28414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28414");

(cljs.core.async.t_cljs$core$async28414.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28414.
 */
cljs.core.async.__GT_t_cljs$core$async28414 = (function cljs$core$async$__GT_t_cljs$core$async28414(p,ch,meta28415){
return (new cljs.core.async.t_cljs$core$async28414(p,ch,meta28415));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async28414(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28441 = arguments.length;
switch (G__28441) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15296__auto___30364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_28486){
var state_val_28487 = (state_28486[(1)]);
if((state_val_28487 === (7))){
var inst_28482 = (state_28486[(2)]);
var state_28486__$1 = state_28486;
var statearr_28492_30368 = state_28486__$1;
(statearr_28492_30368[(2)] = inst_28482);

(statearr_28492_30368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28487 === (1))){
var state_28486__$1 = state_28486;
var statearr_28498_30370 = state_28486__$1;
(statearr_28498_30370[(2)] = null);

(statearr_28498_30370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28487 === (4))){
var inst_28465 = (state_28486[(7)]);
var inst_28465__$1 = (state_28486[(2)]);
var inst_28466 = (inst_28465__$1 == null);
var state_28486__$1 = (function (){var statearr_28499 = state_28486;
(statearr_28499[(7)] = inst_28465__$1);

return statearr_28499;
})();
if(cljs.core.truth_(inst_28466)){
var statearr_28500_30372 = state_28486__$1;
(statearr_28500_30372[(1)] = (5));

} else {
var statearr_28501_30373 = state_28486__$1;
(statearr_28501_30373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28487 === (6))){
var inst_28465 = (state_28486[(7)]);
var inst_28472 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28465) : p.call(null,inst_28465));
var state_28486__$1 = state_28486;
if(cljs.core.truth_(inst_28472)){
var statearr_28503_30377 = state_28486__$1;
(statearr_28503_30377[(1)] = (8));

} else {
var statearr_28504_30378 = state_28486__$1;
(statearr_28504_30378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28487 === (3))){
var inst_28484 = (state_28486[(2)]);
var state_28486__$1 = state_28486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28486__$1,inst_28484);
} else {
if((state_val_28487 === (2))){
var state_28486__$1 = state_28486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28486__$1,(4),ch);
} else {
if((state_val_28487 === (11))){
var inst_28475 = (state_28486[(2)]);
var state_28486__$1 = state_28486;
var statearr_28505_30381 = state_28486__$1;
(statearr_28505_30381[(2)] = inst_28475);

(statearr_28505_30381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28487 === (9))){
var state_28486__$1 = state_28486;
var statearr_28506_30384 = state_28486__$1;
(statearr_28506_30384[(2)] = null);

(statearr_28506_30384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28487 === (5))){
var inst_28468 = cljs.core.async.close_BANG_(out);
var state_28486__$1 = state_28486;
var statearr_28507_30385 = state_28486__$1;
(statearr_28507_30385[(2)] = inst_28468);

(statearr_28507_30385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28487 === (10))){
var inst_28479 = (state_28486[(2)]);
var state_28486__$1 = (function (){var statearr_28509 = state_28486;
(statearr_28509[(8)] = inst_28479);

return statearr_28509;
})();
var statearr_28511_30387 = state_28486__$1;
(statearr_28511_30387[(2)] = null);

(statearr_28511_30387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28487 === (8))){
var inst_28465 = (state_28486[(7)]);
var state_28486__$1 = state_28486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28486__$1,(11),out,inst_28465);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_28535 = [null,null,null,null,null,null,null,null,null];
(statearr_28535[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_28535[(1)] = (1));

return statearr_28535;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_28486){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_28486);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e28569){var ex__15149__auto__ = e28569;
var statearr_28573_30392 = state_28486;
(statearr_28573_30392[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_28486[(4)]))){
var statearr_28578_30395 = state_28486;
(statearr_28578_30395[(1)] = cljs.core.first((state_28486[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30397 = state_28486;
state_28486 = G__30397;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_28486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_28486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_28602 = f__15297__auto__();
(statearr_28602[(6)] = c__15296__auto___30364);

return statearr_28602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28618 = arguments.length;
switch (G__28618) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15296__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_28708){
var state_val_28709 = (state_28708[(1)]);
if((state_val_28709 === (7))){
var inst_28704 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28728_30407 = state_28708__$1;
(statearr_28728_30407[(2)] = inst_28704);

(statearr_28728_30407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (20))){
var inst_28660 = (state_28708[(7)]);
var inst_28680 = (state_28708[(2)]);
var inst_28681 = cljs.core.next(inst_28660);
var inst_28641 = inst_28681;
var inst_28642 = null;
var inst_28643 = (0);
var inst_28644 = (0);
var state_28708__$1 = (function (){var statearr_28731 = state_28708;
(statearr_28731[(8)] = inst_28680);

(statearr_28731[(9)] = inst_28642);

(statearr_28731[(10)] = inst_28643);

(statearr_28731[(11)] = inst_28641);

(statearr_28731[(12)] = inst_28644);

return statearr_28731;
})();
var statearr_28734_30411 = state_28708__$1;
(statearr_28734_30411[(2)] = null);

(statearr_28734_30411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (1))){
var state_28708__$1 = state_28708;
var statearr_28743_30413 = state_28708__$1;
(statearr_28743_30413[(2)] = null);

(statearr_28743_30413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (4))){
var inst_28630 = (state_28708[(13)]);
var inst_28630__$1 = (state_28708[(2)]);
var inst_28631 = (inst_28630__$1 == null);
var state_28708__$1 = (function (){var statearr_28753 = state_28708;
(statearr_28753[(13)] = inst_28630__$1);

return statearr_28753;
})();
if(cljs.core.truth_(inst_28631)){
var statearr_28762_30415 = state_28708__$1;
(statearr_28762_30415[(1)] = (5));

} else {
var statearr_28763_30417 = state_28708__$1;
(statearr_28763_30417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (15))){
var state_28708__$1 = state_28708;
var statearr_28776_30420 = state_28708__$1;
(statearr_28776_30420[(2)] = null);

(statearr_28776_30420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (21))){
var state_28708__$1 = state_28708;
var statearr_28778_30421 = state_28708__$1;
(statearr_28778_30421[(2)] = null);

(statearr_28778_30421[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (13))){
var inst_28642 = (state_28708[(9)]);
var inst_28643 = (state_28708[(10)]);
var inst_28641 = (state_28708[(11)]);
var inst_28644 = (state_28708[(12)]);
var inst_28655 = (state_28708[(2)]);
var inst_28656 = (inst_28644 + (1));
var tmp28772 = inst_28642;
var tmp28773 = inst_28643;
var tmp28774 = inst_28641;
var inst_28641__$1 = tmp28774;
var inst_28642__$1 = tmp28772;
var inst_28643__$1 = tmp28773;
var inst_28644__$1 = inst_28656;
var state_28708__$1 = (function (){var statearr_28783 = state_28708;
(statearr_28783[(9)] = inst_28642__$1);

(statearr_28783[(10)] = inst_28643__$1);

(statearr_28783[(11)] = inst_28641__$1);

(statearr_28783[(14)] = inst_28655);

(statearr_28783[(12)] = inst_28644__$1);

return statearr_28783;
})();
var statearr_28786_30426 = state_28708__$1;
(statearr_28786_30426[(2)] = null);

(statearr_28786_30426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (22))){
var state_28708__$1 = state_28708;
var statearr_28787_30428 = state_28708__$1;
(statearr_28787_30428[(2)] = null);

(statearr_28787_30428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (6))){
var inst_28630 = (state_28708[(13)]);
var inst_28639 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28630) : f.call(null,inst_28630));
var inst_28640 = cljs.core.seq(inst_28639);
var inst_28641 = inst_28640;
var inst_28642 = null;
var inst_28643 = (0);
var inst_28644 = (0);
var state_28708__$1 = (function (){var statearr_28790 = state_28708;
(statearr_28790[(9)] = inst_28642);

(statearr_28790[(10)] = inst_28643);

(statearr_28790[(11)] = inst_28641);

(statearr_28790[(12)] = inst_28644);

return statearr_28790;
})();
var statearr_28792_30437 = state_28708__$1;
(statearr_28792_30437[(2)] = null);

(statearr_28792_30437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (17))){
var inst_28660 = (state_28708[(7)]);
var inst_28670 = cljs.core.chunk_first(inst_28660);
var inst_28671 = cljs.core.chunk_rest(inst_28660);
var inst_28672 = cljs.core.count(inst_28670);
var inst_28641 = inst_28671;
var inst_28642 = inst_28670;
var inst_28643 = inst_28672;
var inst_28644 = (0);
var state_28708__$1 = (function (){var statearr_28794 = state_28708;
(statearr_28794[(9)] = inst_28642);

(statearr_28794[(10)] = inst_28643);

(statearr_28794[(11)] = inst_28641);

(statearr_28794[(12)] = inst_28644);

return statearr_28794;
})();
var statearr_28798_30441 = state_28708__$1;
(statearr_28798_30441[(2)] = null);

(statearr_28798_30441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (3))){
var inst_28706 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28708__$1,inst_28706);
} else {
if((state_val_28709 === (12))){
var inst_28689 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28802_30443 = state_28708__$1;
(statearr_28802_30443[(2)] = inst_28689);

(statearr_28802_30443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (2))){
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28708__$1,(4),in$);
} else {
if((state_val_28709 === (23))){
var inst_28702 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28818_30447 = state_28708__$1;
(statearr_28818_30447[(2)] = inst_28702);

(statearr_28818_30447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (19))){
var inst_28684 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28820_30449 = state_28708__$1;
(statearr_28820_30449[(2)] = inst_28684);

(statearr_28820_30449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (11))){
var inst_28641 = (state_28708[(11)]);
var inst_28660 = (state_28708[(7)]);
var inst_28660__$1 = cljs.core.seq(inst_28641);
var state_28708__$1 = (function (){var statearr_28826 = state_28708;
(statearr_28826[(7)] = inst_28660__$1);

return statearr_28826;
})();
if(inst_28660__$1){
var statearr_28830_30453 = state_28708__$1;
(statearr_28830_30453[(1)] = (14));

} else {
var statearr_28831_30454 = state_28708__$1;
(statearr_28831_30454[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (9))){
var inst_28694 = (state_28708[(2)]);
var inst_28695 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28708__$1 = (function (){var statearr_28832 = state_28708;
(statearr_28832[(15)] = inst_28694);

return statearr_28832;
})();
if(cljs.core.truth_(inst_28695)){
var statearr_28835_30457 = state_28708__$1;
(statearr_28835_30457[(1)] = (21));

} else {
var statearr_28837_30462 = state_28708__$1;
(statearr_28837_30462[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (5))){
var inst_28633 = cljs.core.async.close_BANG_(out);
var state_28708__$1 = state_28708;
var statearr_28849_30466 = state_28708__$1;
(statearr_28849_30466[(2)] = inst_28633);

(statearr_28849_30466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (14))){
var inst_28660 = (state_28708[(7)]);
var inst_28665 = cljs.core.chunked_seq_QMARK_(inst_28660);
var state_28708__$1 = state_28708;
if(inst_28665){
var statearr_28850_30469 = state_28708__$1;
(statearr_28850_30469[(1)] = (17));

} else {
var statearr_28851_30470 = state_28708__$1;
(statearr_28851_30470[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (16))){
var inst_28687 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28853_30471 = state_28708__$1;
(statearr_28853_30471[(2)] = inst_28687);

(statearr_28853_30471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (10))){
var inst_28642 = (state_28708[(9)]);
var inst_28644 = (state_28708[(12)]);
var inst_28653 = cljs.core._nth(inst_28642,inst_28644);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28708__$1,(13),out,inst_28653);
} else {
if((state_val_28709 === (18))){
var inst_28660 = (state_28708[(7)]);
var inst_28678 = cljs.core.first(inst_28660);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28708__$1,(20),out,inst_28678);
} else {
if((state_val_28709 === (8))){
var inst_28643 = (state_28708[(10)]);
var inst_28644 = (state_28708[(12)]);
var inst_28646 = (inst_28644 < inst_28643);
var inst_28647 = inst_28646;
var state_28708__$1 = state_28708;
if(cljs.core.truth_(inst_28647)){
var statearr_28859_30478 = state_28708__$1;
(statearr_28859_30478[(1)] = (10));

} else {
var statearr_28860_30479 = state_28708__$1;
(statearr_28860_30479[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15146__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15146__auto____0 = (function (){
var statearr_28868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28868[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15146__auto__);

(statearr_28868[(1)] = (1));

return statearr_28868;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15146__auto____1 = (function (state_28708){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_28708);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e28874){var ex__15149__auto__ = e28874;
var statearr_28876_30481 = state_28708;
(statearr_28876_30481[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_28708[(4)]))){
var statearr_28880_30482 = state_28708;
(statearr_28880_30482[(1)] = cljs.core.first((state_28708[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30483 = state_28708;
state_28708 = G__30483;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15146__auto__ = function(state_28708){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15146__auto____1.call(this,state_28708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15146__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15146__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_28883 = f__15297__auto__();
(statearr_28883[(6)] = c__15296__auto__);

return statearr_28883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));

return c__15296__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28886 = arguments.length;
switch (G__28886) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28895 = arguments.length;
switch (G__28895) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28904 = arguments.length;
switch (G__28904) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15296__auto___30493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_28938){
var state_val_28939 = (state_28938[(1)]);
if((state_val_28939 === (7))){
var inst_28928 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28940_30494 = state_28938__$1;
(statearr_28940_30494[(2)] = inst_28928);

(statearr_28940_30494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (1))){
var inst_28908 = null;
var state_28938__$1 = (function (){var statearr_28947 = state_28938;
(statearr_28947[(7)] = inst_28908);

return statearr_28947;
})();
var statearr_28948_30495 = state_28938__$1;
(statearr_28948_30495[(2)] = null);

(statearr_28948_30495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (4))){
var inst_28911 = (state_28938[(8)]);
var inst_28911__$1 = (state_28938[(2)]);
var inst_28913 = (inst_28911__$1 == null);
var inst_28914 = cljs.core.not(inst_28913);
var state_28938__$1 = (function (){var statearr_28950 = state_28938;
(statearr_28950[(8)] = inst_28911__$1);

return statearr_28950;
})();
if(inst_28914){
var statearr_28951_30496 = state_28938__$1;
(statearr_28951_30496[(1)] = (5));

} else {
var statearr_28952_30497 = state_28938__$1;
(statearr_28952_30497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (6))){
var state_28938__$1 = state_28938;
var statearr_28954_30498 = state_28938__$1;
(statearr_28954_30498[(2)] = null);

(statearr_28954_30498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (3))){
var inst_28932 = (state_28938[(2)]);
var inst_28933 = cljs.core.async.close_BANG_(out);
var state_28938__$1 = (function (){var statearr_28957 = state_28938;
(statearr_28957[(9)] = inst_28932);

return statearr_28957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28938__$1,inst_28933);
} else {
if((state_val_28939 === (2))){
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28938__$1,(4),ch);
} else {
if((state_val_28939 === (11))){
var inst_28911 = (state_28938[(8)]);
var inst_28921 = (state_28938[(2)]);
var inst_28908 = inst_28911;
var state_28938__$1 = (function (){var statearr_28964 = state_28938;
(statearr_28964[(7)] = inst_28908);

(statearr_28964[(10)] = inst_28921);

return statearr_28964;
})();
var statearr_28968_30499 = state_28938__$1;
(statearr_28968_30499[(2)] = null);

(statearr_28968_30499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (9))){
var inst_28911 = (state_28938[(8)]);
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28938__$1,(11),out,inst_28911);
} else {
if((state_val_28939 === (5))){
var inst_28908 = (state_28938[(7)]);
var inst_28911 = (state_28938[(8)]);
var inst_28916 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28911,inst_28908);
var state_28938__$1 = state_28938;
if(inst_28916){
var statearr_28971_30500 = state_28938__$1;
(statearr_28971_30500[(1)] = (8));

} else {
var statearr_28972_30501 = state_28938__$1;
(statearr_28972_30501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (10))){
var inst_28924 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28980_30502 = state_28938__$1;
(statearr_28980_30502[(2)] = inst_28924);

(statearr_28980_30502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (8))){
var inst_28908 = (state_28938[(7)]);
var tmp28969 = inst_28908;
var inst_28908__$1 = tmp28969;
var state_28938__$1 = (function (){var statearr_28983 = state_28938;
(statearr_28983[(7)] = inst_28908__$1);

return statearr_28983;
})();
var statearr_28987_30503 = state_28938__$1;
(statearr_28987_30503[(2)] = null);

(statearr_28987_30503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_28989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28989[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_28989[(1)] = (1));

return statearr_28989;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_28938){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_28938);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e28999){var ex__15149__auto__ = e28999;
var statearr_29001_30504 = state_28938;
(statearr_29001_30504[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_28938[(4)]))){
var statearr_29006_30505 = state_28938;
(statearr_29006_30505[(1)] = cljs.core.first((state_28938[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30507 = state_28938;
state_28938 = G__30507;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_28938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_28938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_29037 = f__15297__auto__();
(statearr_29037[(6)] = c__15296__auto___30493);

return statearr_29037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29050 = arguments.length;
switch (G__29050) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15296__auto___30509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_29126){
var state_val_29127 = (state_29126[(1)]);
if((state_val_29127 === (7))){
var inst_29114 = (state_29126[(2)]);
var state_29126__$1 = state_29126;
var statearr_29140_30510 = state_29126__$1;
(statearr_29140_30510[(2)] = inst_29114);

(statearr_29140_30510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (1))){
var inst_29066 = (new Array(n));
var inst_29067 = inst_29066;
var inst_29068 = (0);
var state_29126__$1 = (function (){var statearr_29151 = state_29126;
(statearr_29151[(7)] = inst_29067);

(statearr_29151[(8)] = inst_29068);

return statearr_29151;
})();
var statearr_29156_30514 = state_29126__$1;
(statearr_29156_30514[(2)] = null);

(statearr_29156_30514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (4))){
var inst_29071 = (state_29126[(9)]);
var inst_29071__$1 = (state_29126[(2)]);
var inst_29075 = (inst_29071__$1 == null);
var inst_29076 = cljs.core.not(inst_29075);
var state_29126__$1 = (function (){var statearr_29160 = state_29126;
(statearr_29160[(9)] = inst_29071__$1);

return statearr_29160;
})();
if(inst_29076){
var statearr_29162_30516 = state_29126__$1;
(statearr_29162_30516[(1)] = (5));

} else {
var statearr_29165_30517 = state_29126__$1;
(statearr_29165_30517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (15))){
var inst_29104 = (state_29126[(2)]);
var state_29126__$1 = state_29126;
var statearr_29169_30518 = state_29126__$1;
(statearr_29169_30518[(2)] = inst_29104);

(statearr_29169_30518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (13))){
var state_29126__$1 = state_29126;
var statearr_29173_30522 = state_29126__$1;
(statearr_29173_30522[(2)] = null);

(statearr_29173_30522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (6))){
var inst_29068 = (state_29126[(8)]);
var inst_29100 = (inst_29068 > (0));
var state_29126__$1 = state_29126;
if(cljs.core.truth_(inst_29100)){
var statearr_29181_30523 = state_29126__$1;
(statearr_29181_30523[(1)] = (12));

} else {
var statearr_29182_30524 = state_29126__$1;
(statearr_29182_30524[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (3))){
var inst_29116 = (state_29126[(2)]);
var state_29126__$1 = state_29126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29126__$1,inst_29116);
} else {
if((state_val_29127 === (12))){
var inst_29067 = (state_29126[(7)]);
var inst_29102 = cljs.core.vec(inst_29067);
var state_29126__$1 = state_29126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29126__$1,(15),out,inst_29102);
} else {
if((state_val_29127 === (2))){
var state_29126__$1 = state_29126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29126__$1,(4),ch);
} else {
if((state_val_29127 === (11))){
var inst_29086 = (state_29126[(2)]);
var inst_29087 = (new Array(n));
var inst_29067 = inst_29087;
var inst_29068 = (0);
var state_29126__$1 = (function (){var statearr_29200 = state_29126;
(statearr_29200[(7)] = inst_29067);

(statearr_29200[(10)] = inst_29086);

(statearr_29200[(8)] = inst_29068);

return statearr_29200;
})();
var statearr_29205_30525 = state_29126__$1;
(statearr_29205_30525[(2)] = null);

(statearr_29205_30525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (9))){
var inst_29067 = (state_29126[(7)]);
var inst_29084 = cljs.core.vec(inst_29067);
var state_29126__$1 = state_29126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29126__$1,(11),out,inst_29084);
} else {
if((state_val_29127 === (5))){
var inst_29067 = (state_29126[(7)]);
var inst_29068 = (state_29126[(8)]);
var inst_29071 = (state_29126[(9)]);
var inst_29079 = (state_29126[(11)]);
var inst_29078 = (inst_29067[inst_29068] = inst_29071);
var inst_29079__$1 = (inst_29068 + (1));
var inst_29080 = (inst_29079__$1 < n);
var state_29126__$1 = (function (){var statearr_29219 = state_29126;
(statearr_29219[(12)] = inst_29078);

(statearr_29219[(11)] = inst_29079__$1);

return statearr_29219;
})();
if(cljs.core.truth_(inst_29080)){
var statearr_29223_30526 = state_29126__$1;
(statearr_29223_30526[(1)] = (8));

} else {
var statearr_29224_30527 = state_29126__$1;
(statearr_29224_30527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (14))){
var inst_29107 = (state_29126[(2)]);
var inst_29112 = cljs.core.async.close_BANG_(out);
var state_29126__$1 = (function (){var statearr_29230 = state_29126;
(statearr_29230[(13)] = inst_29107);

return statearr_29230;
})();
var statearr_29233_30529 = state_29126__$1;
(statearr_29233_30529[(2)] = inst_29112);

(statearr_29233_30529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (10))){
var inst_29094 = (state_29126[(2)]);
var state_29126__$1 = state_29126;
var statearr_29238_30530 = state_29126__$1;
(statearr_29238_30530[(2)] = inst_29094);

(statearr_29238_30530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (8))){
var inst_29067 = (state_29126[(7)]);
var inst_29079 = (state_29126[(11)]);
var tmp29225 = inst_29067;
var inst_29067__$1 = tmp29225;
var inst_29068 = inst_29079;
var state_29126__$1 = (function (){var statearr_29242 = state_29126;
(statearr_29242[(7)] = inst_29067__$1);

(statearr_29242[(8)] = inst_29068);

return statearr_29242;
})();
var statearr_29249_30532 = state_29126__$1;
(statearr_29249_30532[(2)] = null);

(statearr_29249_30532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_29258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29258[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_29258[(1)] = (1));

return statearr_29258;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_29126){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_29126);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e29264){var ex__15149__auto__ = e29264;
var statearr_29267_30534 = state_29126;
(statearr_29267_30534[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_29126[(4)]))){
var statearr_29269_30535 = state_29126;
(statearr_29269_30535[(1)] = cljs.core.first((state_29126[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30536 = state_29126;
state_29126 = G__30536;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_29126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_29126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_29279 = f__15297__auto__();
(statearr_29279[(6)] = c__15296__auto___30509);

return statearr_29279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29298 = arguments.length;
switch (G__29298) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15296__auto___30538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15297__auto__ = (function (){var switch__15145__auto__ = (function (state_29364){
var state_val_29365 = (state_29364[(1)]);
if((state_val_29365 === (7))){
var inst_29357 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
var statearr_29366_30539 = state_29364__$1;
(statearr_29366_30539[(2)] = inst_29357);

(statearr_29366_30539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (1))){
var inst_29308 = [];
var inst_29313 = inst_29308;
var inst_29314 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29364__$1 = (function (){var statearr_29368 = state_29364;
(statearr_29368[(7)] = inst_29314);

(statearr_29368[(8)] = inst_29313);

return statearr_29368;
})();
var statearr_29369_30540 = state_29364__$1;
(statearr_29369_30540[(2)] = null);

(statearr_29369_30540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (4))){
var inst_29319 = (state_29364[(9)]);
var inst_29319__$1 = (state_29364[(2)]);
var inst_29320 = (inst_29319__$1 == null);
var inst_29321 = cljs.core.not(inst_29320);
var state_29364__$1 = (function (){var statearr_29371 = state_29364;
(statearr_29371[(9)] = inst_29319__$1);

return statearr_29371;
})();
if(inst_29321){
var statearr_29372_30541 = state_29364__$1;
(statearr_29372_30541[(1)] = (5));

} else {
var statearr_29373_30542 = state_29364__$1;
(statearr_29373_30542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (15))){
var inst_29313 = (state_29364[(8)]);
var inst_29349 = cljs.core.vec(inst_29313);
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29364__$1,(18),out,inst_29349);
} else {
if((state_val_29365 === (13))){
var inst_29344 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
var statearr_29380_30543 = state_29364__$1;
(statearr_29380_30543[(2)] = inst_29344);

(statearr_29380_30543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (6))){
var inst_29313 = (state_29364[(8)]);
var inst_29346 = inst_29313.length;
var inst_29347 = (inst_29346 > (0));
var state_29364__$1 = state_29364;
if(cljs.core.truth_(inst_29347)){
var statearr_29391_30548 = state_29364__$1;
(statearr_29391_30548[(1)] = (15));

} else {
var statearr_29392_30549 = state_29364__$1;
(statearr_29392_30549[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (17))){
var inst_29354 = (state_29364[(2)]);
var inst_29355 = cljs.core.async.close_BANG_(out);
var state_29364__$1 = (function (){var statearr_29393 = state_29364;
(statearr_29393[(10)] = inst_29354);

return statearr_29393;
})();
var statearr_29394_30550 = state_29364__$1;
(statearr_29394_30550[(2)] = inst_29355);

(statearr_29394_30550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (3))){
var inst_29359 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29364__$1,inst_29359);
} else {
if((state_val_29365 === (12))){
var inst_29313 = (state_29364[(8)]);
var inst_29336 = cljs.core.vec(inst_29313);
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29364__$1,(14),out,inst_29336);
} else {
if((state_val_29365 === (2))){
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29364__$1,(4),ch);
} else {
if((state_val_29365 === (11))){
var inst_29325 = (state_29364[(11)]);
var inst_29313 = (state_29364[(8)]);
var inst_29319 = (state_29364[(9)]);
var inst_29333 = inst_29313.push(inst_29319);
var tmp29396 = inst_29313;
var inst_29313__$1 = tmp29396;
var inst_29314 = inst_29325;
var state_29364__$1 = (function (){var statearr_29403 = state_29364;
(statearr_29403[(12)] = inst_29333);

(statearr_29403[(7)] = inst_29314);

(statearr_29403[(8)] = inst_29313__$1);

return statearr_29403;
})();
var statearr_29404_30552 = state_29364__$1;
(statearr_29404_30552[(2)] = null);

(statearr_29404_30552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (9))){
var inst_29314 = (state_29364[(7)]);
var inst_29329 = cljs.core.keyword_identical_QMARK_(inst_29314,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_29364__$1 = state_29364;
var statearr_29406_30553 = state_29364__$1;
(statearr_29406_30553[(2)] = inst_29329);

(statearr_29406_30553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (5))){
var inst_29314 = (state_29364[(7)]);
var inst_29325 = (state_29364[(11)]);
var inst_29319 = (state_29364[(9)]);
var inst_29326 = (state_29364[(13)]);
var inst_29325__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29319) : f.call(null,inst_29319));
var inst_29326__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29325__$1,inst_29314);
var state_29364__$1 = (function (){var statearr_29426 = state_29364;
(statearr_29426[(11)] = inst_29325__$1);

(statearr_29426[(13)] = inst_29326__$1);

return statearr_29426;
})();
if(inst_29326__$1){
var statearr_29433_30554 = state_29364__$1;
(statearr_29433_30554[(1)] = (8));

} else {
var statearr_29434_30555 = state_29364__$1;
(statearr_29434_30555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (14))){
var inst_29325 = (state_29364[(11)]);
var inst_29319 = (state_29364[(9)]);
var inst_29338 = (state_29364[(2)]);
var inst_29340 = [];
var inst_29341 = inst_29340.push(inst_29319);
var inst_29313 = inst_29340;
var inst_29314 = inst_29325;
var state_29364__$1 = (function (){var statearr_29436 = state_29364;
(statearr_29436[(7)] = inst_29314);

(statearr_29436[(8)] = inst_29313);

(statearr_29436[(14)] = inst_29341);

(statearr_29436[(15)] = inst_29338);

return statearr_29436;
})();
var statearr_29441_30557 = state_29364__$1;
(statearr_29441_30557[(2)] = null);

(statearr_29441_30557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (16))){
var state_29364__$1 = state_29364;
var statearr_29442_30558 = state_29364__$1;
(statearr_29442_30558[(2)] = null);

(statearr_29442_30558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (10))){
var inst_29331 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
if(cljs.core.truth_(inst_29331)){
var statearr_29443_30559 = state_29364__$1;
(statearr_29443_30559[(1)] = (11));

} else {
var statearr_29444_30560 = state_29364__$1;
(statearr_29444_30560[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (18))){
var inst_29351 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
var statearr_29446_30561 = state_29364__$1;
(statearr_29446_30561[(2)] = inst_29351);

(statearr_29446_30561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (8))){
var inst_29326 = (state_29364[(13)]);
var state_29364__$1 = state_29364;
var statearr_29447_30562 = state_29364__$1;
(statearr_29447_30562[(2)] = inst_29326);

(statearr_29447_30562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15146__auto__ = null;
var cljs$core$async$state_machine__15146__auto____0 = (function (){
var statearr_29452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29452[(0)] = cljs$core$async$state_machine__15146__auto__);

(statearr_29452[(1)] = (1));

return statearr_29452;
});
var cljs$core$async$state_machine__15146__auto____1 = (function (state_29364){
while(true){
var ret_value__15147__auto__ = (function (){try{while(true){
var result__15148__auto__ = switch__15145__auto__(state_29364);
if(cljs.core.keyword_identical_QMARK_(result__15148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15148__auto__;
}
break;
}
}catch (e29453){var ex__15149__auto__ = e29453;
var statearr_29454_30567 = state_29364;
(statearr_29454_30567[(2)] = ex__15149__auto__);


if(cljs.core.seq((state_29364[(4)]))){
var statearr_29456_30568 = state_29364;
(statearr_29456_30568[(1)] = cljs.core.first((state_29364[(4)])));

} else {
throw ex__15149__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30569 = state_29364;
state_29364 = G__30569;
continue;
} else {
return ret_value__15147__auto__;
}
break;
}
});
cljs$core$async$state_machine__15146__auto__ = function(state_29364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15146__auto____1.call(this,state_29364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15146__auto____0;
cljs$core$async$state_machine__15146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15146__auto____1;
return cljs$core$async$state_machine__15146__auto__;
})()
})();
var state__15298__auto__ = (function (){var statearr_29462 = f__15297__auto__();
(statearr_29462[(6)] = c__15296__auto___30538);

return statearr_29462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15298__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
