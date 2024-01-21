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
cljs.core.async.t_cljs$core$async43181 = (function (f,blockable,meta43182){
this.f = f;
this.blockable = blockable;
this.meta43182 = meta43182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43183,meta43182__$1){
var self__ = this;
var _43183__$1 = this;
return (new cljs.core.async.t_cljs$core$async43181(self__.f,self__.blockable,meta43182__$1));
}));

(cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43183){
var self__ = this;
var _43183__$1 = this;
return self__.meta43182;
}));

(cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43182","meta43182",-1208130999,null)], null);
}));

(cljs.core.async.t_cljs$core$async43181.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43181");

(cljs.core.async.t_cljs$core$async43181.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43181");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43181.
 */
cljs.core.async.__GT_t_cljs$core$async43181 = (function cljs$core$async$__GT_t_cljs$core$async43181(f,blockable,meta43182){
return (new cljs.core.async.t_cljs$core$async43181(f,blockable,meta43182));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43179 = arguments.length;
switch (G__43179) {
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
return (new cljs.core.async.t_cljs$core$async43181(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43194 = arguments.length;
switch (G__43194) {
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
var G__43200 = arguments.length;
switch (G__43200) {
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
var G__43214 = arguments.length;
switch (G__43214) {
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
var val_46031 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46031) : fn1.call(null,val_46031));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46031) : fn1.call(null,val_46031));
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
var G__43220 = arguments.length;
switch (G__43220) {
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
var n__5636__auto___46039 = n;
var x_46040 = (0);
while(true){
if((x_46040 < n__5636__auto___46039)){
(a[x_46040] = x_46040);

var G__46042 = (x_46040 + (1));
x_46040 = G__46042;
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
cljs.core.async.t_cljs$core$async43242 = (function (flag,meta43243){
this.flag = flag;
this.meta43243 = meta43243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43244,meta43243__$1){
var self__ = this;
var _43244__$1 = this;
return (new cljs.core.async.t_cljs$core$async43242(self__.flag,meta43243__$1));
}));

(cljs.core.async.t_cljs$core$async43242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43244){
var self__ = this;
var _43244__$1 = this;
return self__.meta43243;
}));

(cljs.core.async.t_cljs$core$async43242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43243","meta43243",-741654811,null)], null);
}));

(cljs.core.async.t_cljs$core$async43242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43242");

(cljs.core.async.t_cljs$core$async43242.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43242.
 */
cljs.core.async.__GT_t_cljs$core$async43242 = (function cljs$core$async$__GT_t_cljs$core$async43242(flag,meta43243){
return (new cljs.core.async.t_cljs$core$async43242(flag,meta43243));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async43242(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43259 = (function (flag,cb,meta43260){
this.flag = flag;
this.cb = cb;
this.meta43260 = meta43260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43261,meta43260__$1){
var self__ = this;
var _43261__$1 = this;
return (new cljs.core.async.t_cljs$core$async43259(self__.flag,self__.cb,meta43260__$1));
}));

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43261){
var self__ = this;
var _43261__$1 = this;
return self__.meta43260;
}));

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43260","meta43260",-1330050041,null)], null);
}));

(cljs.core.async.t_cljs$core$async43259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43259");

(cljs.core.async.t_cljs$core$async43259.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43259.
 */
cljs.core.async.__GT_t_cljs$core$async43259 = (function cljs$core$async$__GT_t_cljs$core$async43259(flag,cb,meta43260){
return (new cljs.core.async.t_cljs$core$async43259(flag,cb,meta43260));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async43259(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43270_SHARP_){
var G__43274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43270_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43274) : fret.call(null,G__43274));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43271_SHARP_){
var G__43278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43271_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43278) : fret.call(null,G__43278));
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
var G__46052 = (i + (1));
i = G__46052;
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
var len__5769__auto___46056 = arguments.length;
var i__5770__auto___46057 = (0);
while(true){
if((i__5770__auto___46057 < len__5769__auto___46056)){
args__5775__auto__.push((arguments[i__5770__auto___46057]));

var G__46058 = (i__5770__auto___46057 + (1));
i__5770__auto___46057 = G__46058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43308){
var map__43309 = p__43308;
var map__43309__$1 = cljs.core.__destructure_map(map__43309);
var opts = map__43309__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43300){
var G__43301 = cljs.core.first(seq43300);
var seq43300__$1 = cljs.core.next(seq43300);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43301,seq43300__$1);
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
var G__43330 = arguments.length;
switch (G__43330) {
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
var c__43108__auto___46065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_43400){
var state_val_43401 = (state_43400[(1)]);
if((state_val_43401 === (7))){
var inst_43380 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
var statearr_43416_46066 = state_43400__$1;
(statearr_43416_46066[(2)] = inst_43380);

(statearr_43416_46066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (1))){
var state_43400__$1 = state_43400;
var statearr_43417_46068 = state_43400__$1;
(statearr_43417_46068[(2)] = null);

(statearr_43417_46068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (4))){
var inst_43359 = (state_43400[(7)]);
var inst_43359__$1 = (state_43400[(2)]);
var inst_43360 = (inst_43359__$1 == null);
var state_43400__$1 = (function (){var statearr_43445 = state_43400;
(statearr_43445[(7)] = inst_43359__$1);

return statearr_43445;
})();
if(cljs.core.truth_(inst_43360)){
var statearr_43446_46069 = state_43400__$1;
(statearr_43446_46069[(1)] = (5));

} else {
var statearr_43448_46070 = state_43400__$1;
(statearr_43448_46070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (13))){
var state_43400__$1 = state_43400;
var statearr_43451_46071 = state_43400__$1;
(statearr_43451_46071[(2)] = null);

(statearr_43451_46071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (6))){
var inst_43359 = (state_43400[(7)]);
var state_43400__$1 = state_43400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43400__$1,(11),to,inst_43359);
} else {
if((state_val_43401 === (3))){
var inst_43384 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43400__$1,inst_43384);
} else {
if((state_val_43401 === (12))){
var state_43400__$1 = state_43400;
var statearr_43463_46073 = state_43400__$1;
(statearr_43463_46073[(2)] = null);

(statearr_43463_46073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (2))){
var state_43400__$1 = state_43400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43400__$1,(4),from);
} else {
if((state_val_43401 === (11))){
var inst_43373 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
if(cljs.core.truth_(inst_43373)){
var statearr_43475_46075 = state_43400__$1;
(statearr_43475_46075[(1)] = (12));

} else {
var statearr_43482_46076 = state_43400__$1;
(statearr_43482_46076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (9))){
var state_43400__$1 = state_43400;
var statearr_43489_46077 = state_43400__$1;
(statearr_43489_46077[(2)] = null);

(statearr_43489_46077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (5))){
var state_43400__$1 = state_43400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43490_46078 = state_43400__$1;
(statearr_43490_46078[(1)] = (8));

} else {
var statearr_43494_46079 = state_43400__$1;
(statearr_43494_46079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (14))){
var inst_43378 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
var statearr_43506_46080 = state_43400__$1;
(statearr_43506_46080[(2)] = inst_43378);

(statearr_43506_46080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (10))){
var inst_43370 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
var statearr_43518_46081 = state_43400__$1;
(statearr_43518_46081[(2)] = inst_43370);

(statearr_43518_46081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43401 === (8))){
var inst_43365 = cljs.core.async.close_BANG_(to);
var state_43400__$1 = state_43400;
var statearr_43523_46082 = state_43400__$1;
(statearr_43523_46082[(2)] = inst_43365);

(statearr_43523_46082[(1)] = (10));


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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_43542 = [null,null,null,null,null,null,null,null];
(statearr_43542[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_43542[(1)] = (1));

return statearr_43542;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_43400){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_43400);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e43547){var ex__42902__auto__ = e43547;
var statearr_43548_46083 = state_43400;
(statearr_43548_46083[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_43400[(4)]))){
var statearr_43550_46084 = state_43400;
(statearr_43550_46084[(1)] = cljs.core.first((state_43400[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46085 = state_43400;
state_43400 = G__46085;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_43400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_43400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_43552 = f__43109__auto__();
(statearr_43552[(6)] = c__43108__auto___46065);

return statearr_43552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
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
var process__$1 = (function (p__43595){
var vec__43599 = p__43595;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43599,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43599,(1),null);
var job = vec__43599;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43108__auto___46086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_43606){
var state_val_43607 = (state_43606[(1)]);
if((state_val_43607 === (1))){
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43606__$1,(2),res,v);
} else {
if((state_val_43607 === (2))){
var inst_43603 = (state_43606[(2)]);
var inst_43604 = cljs.core.async.close_BANG_(res);
var state_43606__$1 = (function (){var statearr_43608 = state_43606;
(statearr_43608[(7)] = inst_43603);

return statearr_43608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43606__$1,inst_43604);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0 = (function (){
var statearr_43613 = [null,null,null,null,null,null,null,null];
(statearr_43613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__);

(statearr_43613[(1)] = (1));

return statearr_43613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1 = (function (state_43606){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_43606);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e43622){var ex__42902__auto__ = e43622;
var statearr_43631_46090 = state_43606;
(statearr_43631_46090[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_43606[(4)]))){
var statearr_43632_46091 = state_43606;
(statearr_43632_46091[(1)] = cljs.core.first((state_43606[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46092 = state_43606;
state_43606 = G__46092;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = function(state_43606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1.call(this,state_43606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_43633 = f__43109__auto__();
(statearr_43633[(6)] = c__43108__auto___46086);

return statearr_43633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43634){
var vec__43636 = p__43634;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(1),null);
var job = vec__43636;
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
var n__5636__auto___46095 = n;
var __46096 = (0);
while(true){
if((__46096 < n__5636__auto___46095)){
var G__43639_46097 = type;
var G__43639_46098__$1 = (((G__43639_46097 instanceof cljs.core.Keyword))?G__43639_46097.fqn:null);
switch (G__43639_46098__$1) {
case "compute":
var c__43108__auto___46100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46096,c__43108__auto___46100,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async){
return (function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = ((function (__46096,c__43108__auto___46100,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async){
return (function (state_43658){
var state_val_43659 = (state_43658[(1)]);
if((state_val_43659 === (1))){
var state_43658__$1 = state_43658;
var statearr_43666_46101 = state_43658__$1;
(statearr_43666_46101[(2)] = null);

(statearr_43666_46101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43659 === (2))){
var state_43658__$1 = state_43658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43658__$1,(4),jobs);
} else {
if((state_val_43659 === (3))){
var inst_43656 = (state_43658[(2)]);
var state_43658__$1 = state_43658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43658__$1,inst_43656);
} else {
if((state_val_43659 === (4))){
var inst_43642 = (state_43658[(2)]);
var inst_43643 = process__$1(inst_43642);
var state_43658__$1 = state_43658;
if(cljs.core.truth_(inst_43643)){
var statearr_43677_46113 = state_43658__$1;
(statearr_43677_46113[(1)] = (5));

} else {
var statearr_43680_46114 = state_43658__$1;
(statearr_43680_46114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43659 === (5))){
var state_43658__$1 = state_43658;
var statearr_43683_46115 = state_43658__$1;
(statearr_43683_46115[(2)] = null);

(statearr_43683_46115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43659 === (6))){
var state_43658__$1 = state_43658;
var statearr_43684_46116 = state_43658__$1;
(statearr_43684_46116[(2)] = null);

(statearr_43684_46116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43659 === (7))){
var inst_43654 = (state_43658[(2)]);
var state_43658__$1 = state_43658;
var statearr_43688_46117 = state_43658__$1;
(statearr_43688_46117[(2)] = inst_43654);

(statearr_43688_46117[(1)] = (3));


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
});})(__46096,c__43108__auto___46100,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async))
;
return ((function (__46096,switch__42898__auto__,c__43108__auto___46100,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0 = (function (){
var statearr_43689 = [null,null,null,null,null,null,null];
(statearr_43689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__);

(statearr_43689[(1)] = (1));

return statearr_43689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1 = (function (state_43658){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_43658);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e43690){var ex__42902__auto__ = e43690;
var statearr_43691_46118 = state_43658;
(statearr_43691_46118[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_43658[(4)]))){
var statearr_43692_46119 = state_43658;
(statearr_43692_46119[(1)] = cljs.core.first((state_43658[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46120 = state_43658;
state_43658 = G__46120;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = function(state_43658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1.call(this,state_43658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__;
})()
;})(__46096,switch__42898__auto__,c__43108__auto___46100,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async))
})();
var state__43110__auto__ = (function (){var statearr_43699 = f__43109__auto__();
(statearr_43699[(6)] = c__43108__auto___46100);

return statearr_43699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
});})(__46096,c__43108__auto___46100,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async))
);


break;
case "async":
var c__43108__auto___46121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46096,c__43108__auto___46121,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async){
return (function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = ((function (__46096,c__43108__auto___46121,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async){
return (function (state_43714){
var state_val_43715 = (state_43714[(1)]);
if((state_val_43715 === (1))){
var state_43714__$1 = state_43714;
var statearr_43716_46122 = state_43714__$1;
(statearr_43716_46122[(2)] = null);

(statearr_43716_46122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (2))){
var state_43714__$1 = state_43714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43714__$1,(4),jobs);
} else {
if((state_val_43715 === (3))){
var inst_43712 = (state_43714[(2)]);
var state_43714__$1 = state_43714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43714__$1,inst_43712);
} else {
if((state_val_43715 === (4))){
var inst_43703 = (state_43714[(2)]);
var inst_43704 = async(inst_43703);
var state_43714__$1 = state_43714;
if(cljs.core.truth_(inst_43704)){
var statearr_43717_46123 = state_43714__$1;
(statearr_43717_46123[(1)] = (5));

} else {
var statearr_43718_46124 = state_43714__$1;
(statearr_43718_46124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (5))){
var state_43714__$1 = state_43714;
var statearr_43720_46125 = state_43714__$1;
(statearr_43720_46125[(2)] = null);

(statearr_43720_46125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (6))){
var state_43714__$1 = state_43714;
var statearr_43722_46126 = state_43714__$1;
(statearr_43722_46126[(2)] = null);

(statearr_43722_46126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (7))){
var inst_43710 = (state_43714[(2)]);
var state_43714__$1 = state_43714;
var statearr_43723_46127 = state_43714__$1;
(statearr_43723_46127[(2)] = inst_43710);

(statearr_43723_46127[(1)] = (3));


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
});})(__46096,c__43108__auto___46121,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async))
;
return ((function (__46096,switch__42898__auto__,c__43108__auto___46121,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0 = (function (){
var statearr_43724 = [null,null,null,null,null,null,null];
(statearr_43724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__);

(statearr_43724[(1)] = (1));

return statearr_43724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1 = (function (state_43714){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_43714);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e43725){var ex__42902__auto__ = e43725;
var statearr_43726_46128 = state_43714;
(statearr_43726_46128[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_43714[(4)]))){
var statearr_43727_46129 = state_43714;
(statearr_43727_46129[(1)] = cljs.core.first((state_43714[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46130 = state_43714;
state_43714 = G__46130;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = function(state_43714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1.call(this,state_43714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__;
})()
;})(__46096,switch__42898__auto__,c__43108__auto___46121,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async))
})();
var state__43110__auto__ = (function (){var statearr_43729 = f__43109__auto__();
(statearr_43729[(6)] = c__43108__auto___46121);

return statearr_43729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
});})(__46096,c__43108__auto___46121,G__43639_46097,G__43639_46098__$1,n__5636__auto___46095,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43639_46098__$1)].join('')));

}

var G__46131 = (__46096 + (1));
__46096 = G__46131;
continue;
} else {
}
break;
}

var c__43108__auto___46132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_43754){
var state_val_43755 = (state_43754[(1)]);
if((state_val_43755 === (7))){
var inst_43750 = (state_43754[(2)]);
var state_43754__$1 = state_43754;
var statearr_43756_46133 = state_43754__$1;
(statearr_43756_46133[(2)] = inst_43750);

(statearr_43756_46133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43755 === (1))){
var state_43754__$1 = state_43754;
var statearr_43757_46135 = state_43754__$1;
(statearr_43757_46135[(2)] = null);

(statearr_43757_46135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43755 === (4))){
var inst_43732 = (state_43754[(7)]);
var inst_43732__$1 = (state_43754[(2)]);
var inst_43733 = (inst_43732__$1 == null);
var state_43754__$1 = (function (){var statearr_43758 = state_43754;
(statearr_43758[(7)] = inst_43732__$1);

return statearr_43758;
})();
if(cljs.core.truth_(inst_43733)){
var statearr_43759_46136 = state_43754__$1;
(statearr_43759_46136[(1)] = (5));

} else {
var statearr_43760_46137 = state_43754__$1;
(statearr_43760_46137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43755 === (6))){
var inst_43737 = (state_43754[(8)]);
var inst_43732 = (state_43754[(7)]);
var inst_43737__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43742 = [inst_43732,inst_43737__$1];
var inst_43743 = (new cljs.core.PersistentVector(null,2,(5),inst_43741,inst_43742,null));
var state_43754__$1 = (function (){var statearr_43762 = state_43754;
(statearr_43762[(8)] = inst_43737__$1);

return statearr_43762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43754__$1,(8),jobs,inst_43743);
} else {
if((state_val_43755 === (3))){
var inst_43752 = (state_43754[(2)]);
var state_43754__$1 = state_43754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43754__$1,inst_43752);
} else {
if((state_val_43755 === (2))){
var state_43754__$1 = state_43754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43754__$1,(4),from);
} else {
if((state_val_43755 === (9))){
var inst_43747 = (state_43754[(2)]);
var state_43754__$1 = (function (){var statearr_43765 = state_43754;
(statearr_43765[(9)] = inst_43747);

return statearr_43765;
})();
var statearr_43772_46138 = state_43754__$1;
(statearr_43772_46138[(2)] = null);

(statearr_43772_46138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43755 === (5))){
var inst_43735 = cljs.core.async.close_BANG_(jobs);
var state_43754__$1 = state_43754;
var statearr_43774_46140 = state_43754__$1;
(statearr_43774_46140[(2)] = inst_43735);

(statearr_43774_46140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43755 === (8))){
var inst_43737 = (state_43754[(8)]);
var inst_43745 = (state_43754[(2)]);
var state_43754__$1 = (function (){var statearr_43775 = state_43754;
(statearr_43775[(10)] = inst_43745);

return statearr_43775;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43754__$1,(9),results,inst_43737);
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
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0 = (function (){
var statearr_43776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__);

(statearr_43776[(1)] = (1));

return statearr_43776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1 = (function (state_43754){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_43754);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e43778){var ex__42902__auto__ = e43778;
var statearr_43779_46142 = state_43754;
(statearr_43779_46142[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_43754[(4)]))){
var statearr_43780_46143 = state_43754;
(statearr_43780_46143[(1)] = cljs.core.first((state_43754[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46144 = state_43754;
state_43754 = G__46144;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = function(state_43754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1.call(this,state_43754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_43782 = f__43109__auto__();
(statearr_43782[(6)] = c__43108__auto___46132);

return statearr_43782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));


var c__43108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_43823){
var state_val_43824 = (state_43823[(1)]);
if((state_val_43824 === (7))){
var inst_43819 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43825_46145 = state_43823__$1;
(statearr_43825_46145[(2)] = inst_43819);

(statearr_43825_46145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (20))){
var state_43823__$1 = state_43823;
var statearr_43826_46146 = state_43823__$1;
(statearr_43826_46146[(2)] = null);

(statearr_43826_46146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (1))){
var state_43823__$1 = state_43823;
var statearr_43829_46152 = state_43823__$1;
(statearr_43829_46152[(2)] = null);

(statearr_43829_46152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (4))){
var inst_43785 = (state_43823[(7)]);
var inst_43785__$1 = (state_43823[(2)]);
var inst_43786 = (inst_43785__$1 == null);
var state_43823__$1 = (function (){var statearr_43830 = state_43823;
(statearr_43830[(7)] = inst_43785__$1);

return statearr_43830;
})();
if(cljs.core.truth_(inst_43786)){
var statearr_43832_46154 = state_43823__$1;
(statearr_43832_46154[(1)] = (5));

} else {
var statearr_43835_46155 = state_43823__$1;
(statearr_43835_46155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (15))){
var inst_43801 = (state_43823[(8)]);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43823__$1,(18),to,inst_43801);
} else {
if((state_val_43824 === (21))){
var inst_43814 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43838_46157 = state_43823__$1;
(statearr_43838_46157[(2)] = inst_43814);

(statearr_43838_46157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (13))){
var inst_43816 = (state_43823[(2)]);
var state_43823__$1 = (function (){var statearr_43839 = state_43823;
(statearr_43839[(9)] = inst_43816);

return statearr_43839;
})();
var statearr_43840_46158 = state_43823__$1;
(statearr_43840_46158[(2)] = null);

(statearr_43840_46158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (6))){
var inst_43785 = (state_43823[(7)]);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43823__$1,(11),inst_43785);
} else {
if((state_val_43824 === (17))){
var inst_43809 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43809)){
var statearr_43845_46159 = state_43823__$1;
(statearr_43845_46159[(1)] = (19));

} else {
var statearr_43847_46160 = state_43823__$1;
(statearr_43847_46160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (3))){
var inst_43821 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43823__$1,inst_43821);
} else {
if((state_val_43824 === (12))){
var inst_43795 = (state_43823[(10)]);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43823__$1,(14),inst_43795);
} else {
if((state_val_43824 === (2))){
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43823__$1,(4),results);
} else {
if((state_val_43824 === (19))){
var state_43823__$1 = state_43823;
var statearr_43848_46161 = state_43823__$1;
(statearr_43848_46161[(2)] = null);

(statearr_43848_46161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (11))){
var inst_43795 = (state_43823[(2)]);
var state_43823__$1 = (function (){var statearr_43851 = state_43823;
(statearr_43851[(10)] = inst_43795);

return statearr_43851;
})();
var statearr_43852_46162 = state_43823__$1;
(statearr_43852_46162[(2)] = null);

(statearr_43852_46162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (9))){
var state_43823__$1 = state_43823;
var statearr_43861_46163 = state_43823__$1;
(statearr_43861_46163[(2)] = null);

(statearr_43861_46163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (5))){
var state_43823__$1 = state_43823;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43864_46165 = state_43823__$1;
(statearr_43864_46165[(1)] = (8));

} else {
var statearr_43865_46166 = state_43823__$1;
(statearr_43865_46166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (14))){
var inst_43801 = (state_43823[(8)]);
var inst_43803 = (state_43823[(11)]);
var inst_43801__$1 = (state_43823[(2)]);
var inst_43802 = (inst_43801__$1 == null);
var inst_43803__$1 = cljs.core.not(inst_43802);
var state_43823__$1 = (function (){var statearr_43870 = state_43823;
(statearr_43870[(8)] = inst_43801__$1);

(statearr_43870[(11)] = inst_43803__$1);

return statearr_43870;
})();
if(inst_43803__$1){
var statearr_43875_46168 = state_43823__$1;
(statearr_43875_46168[(1)] = (15));

} else {
var statearr_43876_46169 = state_43823__$1;
(statearr_43876_46169[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (16))){
var inst_43803 = (state_43823[(11)]);
var state_43823__$1 = state_43823;
var statearr_43877_46170 = state_43823__$1;
(statearr_43877_46170[(2)] = inst_43803);

(statearr_43877_46170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (10))){
var inst_43792 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43882_46171 = state_43823__$1;
(statearr_43882_46171[(2)] = inst_43792);

(statearr_43882_46171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (18))){
var inst_43806 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43886_46172 = state_43823__$1;
(statearr_43886_46172[(2)] = inst_43806);

(statearr_43886_46172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (8))){
var inst_43789 = cljs.core.async.close_BANG_(to);
var state_43823__$1 = state_43823;
var statearr_43891_46173 = state_43823__$1;
(statearr_43891_46173[(2)] = inst_43789);

(statearr_43891_46173[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0 = (function (){
var statearr_43893 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__);

(statearr_43893[(1)] = (1));

return statearr_43893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1 = (function (state_43823){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_43823);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e43894){var ex__42902__auto__ = e43894;
var statearr_43895_46174 = state_43823;
(statearr_43895_46174[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_43823[(4)]))){
var statearr_43898_46175 = state_43823;
(statearr_43898_46175[(1)] = cljs.core.first((state_43823[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46176 = state_43823;
state_43823 = G__46176;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__ = function(state_43823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1.call(this,state_43823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_43902 = f__43109__auto__();
(statearr_43902[(6)] = c__43108__auto__);

return statearr_43902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));

return c__43108__auto__;
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
var G__43910 = arguments.length;
switch (G__43910) {
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
var G__43928 = arguments.length;
switch (G__43928) {
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
var G__43954 = arguments.length;
switch (G__43954) {
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
var c__43108__auto___46184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_43994){
var state_val_43995 = (state_43994[(1)]);
if((state_val_43995 === (7))){
var inst_43989 = (state_43994[(2)]);
var state_43994__$1 = state_43994;
var statearr_44007_46185 = state_43994__$1;
(statearr_44007_46185[(2)] = inst_43989);

(statearr_44007_46185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (1))){
var state_43994__$1 = state_43994;
var statearr_44013_46186 = state_43994__$1;
(statearr_44013_46186[(2)] = null);

(statearr_44013_46186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (4))){
var inst_43967 = (state_43994[(7)]);
var inst_43967__$1 = (state_43994[(2)]);
var inst_43969 = (inst_43967__$1 == null);
var state_43994__$1 = (function (){var statearr_44028 = state_43994;
(statearr_44028[(7)] = inst_43967__$1);

return statearr_44028;
})();
if(cljs.core.truth_(inst_43969)){
var statearr_44035_46188 = state_43994__$1;
(statearr_44035_46188[(1)] = (5));

} else {
var statearr_44040_46189 = state_43994__$1;
(statearr_44040_46189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (13))){
var state_43994__$1 = state_43994;
var statearr_44042_46190 = state_43994__$1;
(statearr_44042_46190[(2)] = null);

(statearr_44042_46190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (6))){
var inst_43967 = (state_43994[(7)]);
var inst_43975 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43967) : p.call(null,inst_43967));
var state_43994__$1 = state_43994;
if(cljs.core.truth_(inst_43975)){
var statearr_44050_46192 = state_43994__$1;
(statearr_44050_46192[(1)] = (9));

} else {
var statearr_44051_46193 = state_43994__$1;
(statearr_44051_46193[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (3))){
var inst_43991 = (state_43994[(2)]);
var state_43994__$1 = state_43994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43994__$1,inst_43991);
} else {
if((state_val_43995 === (12))){
var state_43994__$1 = state_43994;
var statearr_44054_46194 = state_43994__$1;
(statearr_44054_46194[(2)] = null);

(statearr_44054_46194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (2))){
var state_43994__$1 = state_43994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43994__$1,(4),ch);
} else {
if((state_val_43995 === (11))){
var inst_43967 = (state_43994[(7)]);
var inst_43979 = (state_43994[(2)]);
var state_43994__$1 = state_43994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43994__$1,(8),inst_43979,inst_43967);
} else {
if((state_val_43995 === (9))){
var state_43994__$1 = state_43994;
var statearr_44056_46195 = state_43994__$1;
(statearr_44056_46195[(2)] = tc);

(statearr_44056_46195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (5))){
var inst_43971 = cljs.core.async.close_BANG_(tc);
var inst_43972 = cljs.core.async.close_BANG_(fc);
var state_43994__$1 = (function (){var statearr_44068 = state_43994;
(statearr_44068[(8)] = inst_43971);

return statearr_44068;
})();
var statearr_44076_46196 = state_43994__$1;
(statearr_44076_46196[(2)] = inst_43972);

(statearr_44076_46196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (14))){
var inst_43987 = (state_43994[(2)]);
var state_43994__$1 = state_43994;
var statearr_44082_46197 = state_43994__$1;
(statearr_44082_46197[(2)] = inst_43987);

(statearr_44082_46197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (10))){
var state_43994__$1 = state_43994;
var statearr_44087_46198 = state_43994__$1;
(statearr_44087_46198[(2)] = fc);

(statearr_44087_46198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43995 === (8))){
var inst_43981 = (state_43994[(2)]);
var state_43994__$1 = state_43994;
if(cljs.core.truth_(inst_43981)){
var statearr_44100_46205 = state_43994__$1;
(statearr_44100_46205[(1)] = (12));

} else {
var statearr_44112_46206 = state_43994__$1;
(statearr_44112_46206[(1)] = (13));

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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_44122 = [null,null,null,null,null,null,null,null,null];
(statearr_44122[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_44122[(1)] = (1));

return statearr_44122;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_43994){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_43994);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e44134){var ex__42902__auto__ = e44134;
var statearr_44139_46207 = state_43994;
(statearr_44139_46207[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_43994[(4)]))){
var statearr_44141_46208 = state_43994;
(statearr_44141_46208[(1)] = cljs.core.first((state_43994[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46209 = state_43994;
state_43994 = G__46209;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_43994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_43994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_44146 = f__43109__auto__();
(statearr_44146[(6)] = c__43108__auto___46184);

return statearr_44146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
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
var c__43108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_44182){
var state_val_44183 = (state_44182[(1)]);
if((state_val_44183 === (7))){
var inst_44178 = (state_44182[(2)]);
var state_44182__$1 = state_44182;
var statearr_44187_46217 = state_44182__$1;
(statearr_44187_46217[(2)] = inst_44178);

(statearr_44187_46217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44183 === (1))){
var inst_44151 = init;
var inst_44153 = inst_44151;
var state_44182__$1 = (function (){var statearr_44192 = state_44182;
(statearr_44192[(7)] = inst_44153);

return statearr_44192;
})();
var statearr_44193_46219 = state_44182__$1;
(statearr_44193_46219[(2)] = null);

(statearr_44193_46219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44183 === (4))){
var inst_44163 = (state_44182[(8)]);
var inst_44163__$1 = (state_44182[(2)]);
var inst_44164 = (inst_44163__$1 == null);
var state_44182__$1 = (function (){var statearr_44202 = state_44182;
(statearr_44202[(8)] = inst_44163__$1);

return statearr_44202;
})();
if(cljs.core.truth_(inst_44164)){
var statearr_44203_46220 = state_44182__$1;
(statearr_44203_46220[(1)] = (5));

} else {
var statearr_44205_46221 = state_44182__$1;
(statearr_44205_46221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44183 === (6))){
var inst_44169 = (state_44182[(9)]);
var inst_44153 = (state_44182[(7)]);
var inst_44163 = (state_44182[(8)]);
var inst_44169__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44153,inst_44163) : f.call(null,inst_44153,inst_44163));
var inst_44170 = cljs.core.reduced_QMARK_(inst_44169__$1);
var state_44182__$1 = (function (){var statearr_44212 = state_44182;
(statearr_44212[(9)] = inst_44169__$1);

return statearr_44212;
})();
if(inst_44170){
var statearr_44213_46222 = state_44182__$1;
(statearr_44213_46222[(1)] = (8));

} else {
var statearr_44214_46223 = state_44182__$1;
(statearr_44214_46223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44183 === (3))){
var inst_44180 = (state_44182[(2)]);
var state_44182__$1 = state_44182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44182__$1,inst_44180);
} else {
if((state_val_44183 === (2))){
var state_44182__$1 = state_44182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44182__$1,(4),ch);
} else {
if((state_val_44183 === (9))){
var inst_44169 = (state_44182[(9)]);
var inst_44153 = inst_44169;
var state_44182__$1 = (function (){var statearr_44219 = state_44182;
(statearr_44219[(7)] = inst_44153);

return statearr_44219;
})();
var statearr_44220_46224 = state_44182__$1;
(statearr_44220_46224[(2)] = null);

(statearr_44220_46224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44183 === (5))){
var inst_44153 = (state_44182[(7)]);
var state_44182__$1 = state_44182;
var statearr_44221_46225 = state_44182__$1;
(statearr_44221_46225[(2)] = inst_44153);

(statearr_44221_46225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44183 === (10))){
var inst_44176 = (state_44182[(2)]);
var state_44182__$1 = state_44182;
var statearr_44222_46226 = state_44182__$1;
(statearr_44222_46226[(2)] = inst_44176);

(statearr_44222_46226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44183 === (8))){
var inst_44169 = (state_44182[(9)]);
var inst_44172 = cljs.core.deref(inst_44169);
var state_44182__$1 = state_44182;
var statearr_44224_46227 = state_44182__$1;
(statearr_44224_46227[(2)] = inst_44172);

(statearr_44224_46227[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__42899__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42899__auto____0 = (function (){
var statearr_44228 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44228[(0)] = cljs$core$async$reduce_$_state_machine__42899__auto__);

(statearr_44228[(1)] = (1));

return statearr_44228;
});
var cljs$core$async$reduce_$_state_machine__42899__auto____1 = (function (state_44182){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_44182);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e44229){var ex__42902__auto__ = e44229;
var statearr_44231_46228 = state_44182;
(statearr_44231_46228[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_44182[(4)]))){
var statearr_44232_46230 = state_44182;
(statearr_44232_46230[(1)] = cljs.core.first((state_44182[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46231 = state_44182;
state_44182 = G__46231;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42899__auto__ = function(state_44182){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42899__auto____1.call(this,state_44182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42899__auto____0;
cljs$core$async$reduce_$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42899__auto____1;
return cljs$core$async$reduce_$_state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_44233 = f__43109__auto__();
(statearr_44233[(6)] = c__43108__auto__);

return statearr_44233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));

return c__43108__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_44243){
var state_val_44244 = (state_44243[(1)]);
if((state_val_44244 === (1))){
var inst_44238 = cljs.core.async.reduce(f__$1,init,ch);
var state_44243__$1 = state_44243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44243__$1,(2),inst_44238);
} else {
if((state_val_44244 === (2))){
var inst_44240 = (state_44243[(2)]);
var inst_44241 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44240) : f__$1.call(null,inst_44240));
var state_44243__$1 = state_44243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44243__$1,inst_44241);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42899__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42899__auto____0 = (function (){
var statearr_44255 = [null,null,null,null,null,null,null];
(statearr_44255[(0)] = cljs$core$async$transduce_$_state_machine__42899__auto__);

(statearr_44255[(1)] = (1));

return statearr_44255;
});
var cljs$core$async$transduce_$_state_machine__42899__auto____1 = (function (state_44243){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_44243);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e44256){var ex__42902__auto__ = e44256;
var statearr_44257_46238 = state_44243;
(statearr_44257_46238[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_44243[(4)]))){
var statearr_44258_46239 = state_44243;
(statearr_44258_46239[(1)] = cljs.core.first((state_44243[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46240 = state_44243;
state_44243 = G__46240;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42899__auto__ = function(state_44243){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42899__auto____1.call(this,state_44243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42899__auto____0;
cljs$core$async$transduce_$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42899__auto____1;
return cljs$core$async$transduce_$_state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_44261 = f__43109__auto__();
(statearr_44261[(6)] = c__43108__auto__);

return statearr_44261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));

return c__43108__auto__;
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
var G__44263 = arguments.length;
switch (G__44263) {
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
var c__43108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_44291){
var state_val_44292 = (state_44291[(1)]);
if((state_val_44292 === (7))){
var inst_44270 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
var statearr_44293_46252 = state_44291__$1;
(statearr_44293_46252[(2)] = inst_44270);

(statearr_44293_46252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (1))){
var inst_44264 = cljs.core.seq(coll);
var inst_44265 = inst_44264;
var state_44291__$1 = (function (){var statearr_44294 = state_44291;
(statearr_44294[(7)] = inst_44265);

return statearr_44294;
})();
var statearr_44295_46253 = state_44291__$1;
(statearr_44295_46253[(2)] = null);

(statearr_44295_46253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (4))){
var inst_44265 = (state_44291[(7)]);
var inst_44268 = cljs.core.first(inst_44265);
var state_44291__$1 = state_44291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44291__$1,(7),ch,inst_44268);
} else {
if((state_val_44292 === (13))){
var inst_44285 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
var statearr_44304_46254 = state_44291__$1;
(statearr_44304_46254[(2)] = inst_44285);

(statearr_44304_46254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (6))){
var inst_44274 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
if(cljs.core.truth_(inst_44274)){
var statearr_44305_46255 = state_44291__$1;
(statearr_44305_46255[(1)] = (8));

} else {
var statearr_44306_46256 = state_44291__$1;
(statearr_44306_46256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (3))){
var inst_44289 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44291__$1,inst_44289);
} else {
if((state_val_44292 === (12))){
var state_44291__$1 = state_44291;
var statearr_44310_46257 = state_44291__$1;
(statearr_44310_46257[(2)] = null);

(statearr_44310_46257[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (2))){
var inst_44265 = (state_44291[(7)]);
var state_44291__$1 = state_44291;
if(cljs.core.truth_(inst_44265)){
var statearr_44312_46258 = state_44291__$1;
(statearr_44312_46258[(1)] = (4));

} else {
var statearr_44319_46259 = state_44291__$1;
(statearr_44319_46259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (11))){
var inst_44281 = cljs.core.async.close_BANG_(ch);
var state_44291__$1 = state_44291;
var statearr_44320_46260 = state_44291__$1;
(statearr_44320_46260[(2)] = inst_44281);

(statearr_44320_46260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (9))){
var state_44291__$1 = state_44291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44321_46261 = state_44291__$1;
(statearr_44321_46261[(1)] = (11));

} else {
var statearr_44322_46262 = state_44291__$1;
(statearr_44322_46262[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (5))){
var inst_44265 = (state_44291[(7)]);
var state_44291__$1 = state_44291;
var statearr_44324_46263 = state_44291__$1;
(statearr_44324_46263[(2)] = inst_44265);

(statearr_44324_46263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (10))){
var inst_44287 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
var statearr_44326_46264 = state_44291__$1;
(statearr_44326_46264[(2)] = inst_44287);

(statearr_44326_46264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (8))){
var inst_44265 = (state_44291[(7)]);
var inst_44277 = cljs.core.next(inst_44265);
var inst_44265__$1 = inst_44277;
var state_44291__$1 = (function (){var statearr_44329 = state_44291;
(statearr_44329[(7)] = inst_44265__$1);

return statearr_44329;
})();
var statearr_44330_46266 = state_44291__$1;
(statearr_44330_46266[(2)] = null);

(statearr_44330_46266[(1)] = (2));


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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_44331 = [null,null,null,null,null,null,null,null];
(statearr_44331[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_44331[(1)] = (1));

return statearr_44331;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_44291){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_44291);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e44332){var ex__42902__auto__ = e44332;
var statearr_44335_46267 = state_44291;
(statearr_44335_46267[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_44291[(4)]))){
var statearr_44338_46268 = state_44291;
(statearr_44338_46268[(1)] = cljs.core.first((state_44291[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46269 = state_44291;
state_44291 = G__46269;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_44291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_44291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_44343 = f__43109__auto__();
(statearr_44343[(6)] = c__43108__auto__);

return statearr_44343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));

return c__43108__auto__;
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
var G__44355 = arguments.length;
switch (G__44355) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_46275 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_46275(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46278 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_46278(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46280 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_46280(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46281 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_46281(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44385 = (function (ch,cs,meta44386){
this.ch = ch;
this.cs = cs;
this.meta44386 = meta44386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44387,meta44386__$1){
var self__ = this;
var _44387__$1 = this;
return (new cljs.core.async.t_cljs$core$async44385(self__.ch,self__.cs,meta44386__$1));
}));

(cljs.core.async.t_cljs$core$async44385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44387){
var self__ = this;
var _44387__$1 = this;
return self__.meta44386;
}));

(cljs.core.async.t_cljs$core$async44385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44385.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44385.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44385.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44385.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44386","meta44386",465198379,null)], null);
}));

(cljs.core.async.t_cljs$core$async44385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44385");

(cljs.core.async.t_cljs$core$async44385.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44385.
 */
cljs.core.async.__GT_t_cljs$core$async44385 = (function cljs$core$async$__GT_t_cljs$core$async44385(ch,cs,meta44386){
return (new cljs.core.async.t_cljs$core$async44385(ch,cs,meta44386));
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
var m = (new cljs.core.async.t_cljs$core$async44385(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43108__auto___46297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_44550){
var state_val_44551 = (state_44550[(1)]);
if((state_val_44551 === (7))){
var inst_44543 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
var statearr_44552_46298 = state_44550__$1;
(statearr_44552_46298[(2)] = inst_44543);

(statearr_44552_46298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (20))){
var inst_44439 = (state_44550[(7)]);
var inst_44453 = cljs.core.first(inst_44439);
var inst_44456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44453,(0),null);
var inst_44457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44453,(1),null);
var state_44550__$1 = (function (){var statearr_44553 = state_44550;
(statearr_44553[(8)] = inst_44456);

return statearr_44553;
})();
if(cljs.core.truth_(inst_44457)){
var statearr_44558_46302 = state_44550__$1;
(statearr_44558_46302[(1)] = (22));

} else {
var statearr_44559_46303 = state_44550__$1;
(statearr_44559_46303[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (27))){
var inst_44401 = (state_44550[(9)]);
var inst_44492 = (state_44550[(10)]);
var inst_44497 = (state_44550[(11)]);
var inst_44490 = (state_44550[(12)]);
var inst_44497__$1 = cljs.core._nth(inst_44490,inst_44492);
var inst_44498 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44497__$1,inst_44401,done);
var state_44550__$1 = (function (){var statearr_44560 = state_44550;
(statearr_44560[(11)] = inst_44497__$1);

return statearr_44560;
})();
if(cljs.core.truth_(inst_44498)){
var statearr_44561_46304 = state_44550__$1;
(statearr_44561_46304[(1)] = (30));

} else {
var statearr_44562_46305 = state_44550__$1;
(statearr_44562_46305[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (1))){
var state_44550__$1 = state_44550;
var statearr_44567_46306 = state_44550__$1;
(statearr_44567_46306[(2)] = null);

(statearr_44567_46306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (24))){
var inst_44439 = (state_44550[(7)]);
var inst_44462 = (state_44550[(2)]);
var inst_44464 = cljs.core.next(inst_44439);
var inst_44410 = inst_44464;
var inst_44411 = null;
var inst_44412 = (0);
var inst_44413 = (0);
var state_44550__$1 = (function (){var statearr_44568 = state_44550;
(statearr_44568[(13)] = inst_44411);

(statearr_44568[(14)] = inst_44412);

(statearr_44568[(15)] = inst_44462);

(statearr_44568[(16)] = inst_44413);

(statearr_44568[(17)] = inst_44410);

return statearr_44568;
})();
var statearr_44570_46310 = state_44550__$1;
(statearr_44570_46310[(2)] = null);

(statearr_44570_46310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (39))){
var state_44550__$1 = state_44550;
var statearr_44577_46311 = state_44550__$1;
(statearr_44577_46311[(2)] = null);

(statearr_44577_46311[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (4))){
var inst_44401 = (state_44550[(9)]);
var inst_44401__$1 = (state_44550[(2)]);
var inst_44402 = (inst_44401__$1 == null);
var state_44550__$1 = (function (){var statearr_44578 = state_44550;
(statearr_44578[(9)] = inst_44401__$1);

return statearr_44578;
})();
if(cljs.core.truth_(inst_44402)){
var statearr_44579_46318 = state_44550__$1;
(statearr_44579_46318[(1)] = (5));

} else {
var statearr_44580_46319 = state_44550__$1;
(statearr_44580_46319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (15))){
var inst_44411 = (state_44550[(13)]);
var inst_44412 = (state_44550[(14)]);
var inst_44413 = (state_44550[(16)]);
var inst_44410 = (state_44550[(17)]);
var inst_44434 = (state_44550[(2)]);
var inst_44436 = (inst_44413 + (1));
var tmp44572 = inst_44411;
var tmp44574 = inst_44412;
var tmp44575 = inst_44410;
var inst_44410__$1 = tmp44575;
var inst_44411__$1 = tmp44572;
var inst_44412__$1 = tmp44574;
var inst_44413__$1 = inst_44436;
var state_44550__$1 = (function (){var statearr_44586 = state_44550;
(statearr_44586[(13)] = inst_44411__$1);

(statearr_44586[(18)] = inst_44434);

(statearr_44586[(14)] = inst_44412__$1);

(statearr_44586[(16)] = inst_44413__$1);

(statearr_44586[(17)] = inst_44410__$1);

return statearr_44586;
})();
var statearr_44587_46322 = state_44550__$1;
(statearr_44587_46322[(2)] = null);

(statearr_44587_46322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (21))){
var inst_44467 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
var statearr_44592_46326 = state_44550__$1;
(statearr_44592_46326[(2)] = inst_44467);

(statearr_44592_46326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (31))){
var inst_44497 = (state_44550[(11)]);
var inst_44501 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44497);
var state_44550__$1 = state_44550;
var statearr_44606_46327 = state_44550__$1;
(statearr_44606_46327[(2)] = inst_44501);

(statearr_44606_46327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (32))){
var inst_44489 = (state_44550[(19)]);
var inst_44491 = (state_44550[(20)]);
var inst_44492 = (state_44550[(10)]);
var inst_44490 = (state_44550[(12)]);
var inst_44503 = (state_44550[(2)]);
var inst_44504 = (inst_44492 + (1));
var tmp44588 = inst_44489;
var tmp44589 = inst_44491;
var tmp44590 = inst_44490;
var inst_44489__$1 = tmp44588;
var inst_44490__$1 = tmp44590;
var inst_44491__$1 = tmp44589;
var inst_44492__$1 = inst_44504;
var state_44550__$1 = (function (){var statearr_44607 = state_44550;
(statearr_44607[(19)] = inst_44489__$1);

(statearr_44607[(20)] = inst_44491__$1);

(statearr_44607[(21)] = inst_44503);

(statearr_44607[(10)] = inst_44492__$1);

(statearr_44607[(12)] = inst_44490__$1);

return statearr_44607;
})();
var statearr_44608_46336 = state_44550__$1;
(statearr_44608_46336[(2)] = null);

(statearr_44608_46336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (40))){
var inst_44516 = (state_44550[(22)]);
var inst_44520 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44516);
var state_44550__$1 = state_44550;
var statearr_44623_46337 = state_44550__$1;
(statearr_44623_46337[(2)] = inst_44520);

(statearr_44623_46337[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (33))){
var inst_44507 = (state_44550[(23)]);
var inst_44509 = cljs.core.chunked_seq_QMARK_(inst_44507);
var state_44550__$1 = state_44550;
if(inst_44509){
var statearr_44624_46342 = state_44550__$1;
(statearr_44624_46342[(1)] = (36));

} else {
var statearr_44626_46343 = state_44550__$1;
(statearr_44626_46343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (13))){
var inst_44423 = (state_44550[(24)]);
var inst_44429 = cljs.core.async.close_BANG_(inst_44423);
var state_44550__$1 = state_44550;
var statearr_44628_46347 = state_44550__$1;
(statearr_44628_46347[(2)] = inst_44429);

(statearr_44628_46347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (22))){
var inst_44456 = (state_44550[(8)]);
var inst_44459 = cljs.core.async.close_BANG_(inst_44456);
var state_44550__$1 = state_44550;
var statearr_44629_46348 = state_44550__$1;
(statearr_44629_46348[(2)] = inst_44459);

(statearr_44629_46348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (36))){
var inst_44507 = (state_44550[(23)]);
var inst_44511 = cljs.core.chunk_first(inst_44507);
var inst_44512 = cljs.core.chunk_rest(inst_44507);
var inst_44513 = cljs.core.count(inst_44511);
var inst_44489 = inst_44512;
var inst_44490 = inst_44511;
var inst_44491 = inst_44513;
var inst_44492 = (0);
var state_44550__$1 = (function (){var statearr_44632 = state_44550;
(statearr_44632[(19)] = inst_44489);

(statearr_44632[(20)] = inst_44491);

(statearr_44632[(10)] = inst_44492);

(statearr_44632[(12)] = inst_44490);

return statearr_44632;
})();
var statearr_44634_46349 = state_44550__$1;
(statearr_44634_46349[(2)] = null);

(statearr_44634_46349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (41))){
var inst_44507 = (state_44550[(23)]);
var inst_44522 = (state_44550[(2)]);
var inst_44523 = cljs.core.next(inst_44507);
var inst_44489 = inst_44523;
var inst_44490 = null;
var inst_44491 = (0);
var inst_44492 = (0);
var state_44550__$1 = (function (){var statearr_44636 = state_44550;
(statearr_44636[(19)] = inst_44489);

(statearr_44636[(20)] = inst_44491);

(statearr_44636[(25)] = inst_44522);

(statearr_44636[(10)] = inst_44492);

(statearr_44636[(12)] = inst_44490);

return statearr_44636;
})();
var statearr_44637_46354 = state_44550__$1;
(statearr_44637_46354[(2)] = null);

(statearr_44637_46354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (43))){
var state_44550__$1 = state_44550;
var statearr_44638_46356 = state_44550__$1;
(statearr_44638_46356[(2)] = null);

(statearr_44638_46356[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (29))){
var inst_44531 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
var statearr_44641_46358 = state_44550__$1;
(statearr_44641_46358[(2)] = inst_44531);

(statearr_44641_46358[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (44))){
var inst_44540 = (state_44550[(2)]);
var state_44550__$1 = (function (){var statearr_44642 = state_44550;
(statearr_44642[(26)] = inst_44540);

return statearr_44642;
})();
var statearr_44643_46360 = state_44550__$1;
(statearr_44643_46360[(2)] = null);

(statearr_44643_46360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (6))){
var inst_44481 = (state_44550[(27)]);
var inst_44480 = cljs.core.deref(cs);
var inst_44481__$1 = cljs.core.keys(inst_44480);
var inst_44482 = cljs.core.count(inst_44481__$1);
var inst_44483 = cljs.core.reset_BANG_(dctr,inst_44482);
var inst_44488 = cljs.core.seq(inst_44481__$1);
var inst_44489 = inst_44488;
var inst_44490 = null;
var inst_44491 = (0);
var inst_44492 = (0);
var state_44550__$1 = (function (){var statearr_44644 = state_44550;
(statearr_44644[(27)] = inst_44481__$1);

(statearr_44644[(19)] = inst_44489);

(statearr_44644[(20)] = inst_44491);

(statearr_44644[(28)] = inst_44483);

(statearr_44644[(10)] = inst_44492);

(statearr_44644[(12)] = inst_44490);

return statearr_44644;
})();
var statearr_44645_46365 = state_44550__$1;
(statearr_44645_46365[(2)] = null);

(statearr_44645_46365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (28))){
var inst_44507 = (state_44550[(23)]);
var inst_44489 = (state_44550[(19)]);
var inst_44507__$1 = cljs.core.seq(inst_44489);
var state_44550__$1 = (function (){var statearr_44646 = state_44550;
(statearr_44646[(23)] = inst_44507__$1);

return statearr_44646;
})();
if(inst_44507__$1){
var statearr_44648_46373 = state_44550__$1;
(statearr_44648_46373[(1)] = (33));

} else {
var statearr_44649_46374 = state_44550__$1;
(statearr_44649_46374[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (25))){
var inst_44491 = (state_44550[(20)]);
var inst_44492 = (state_44550[(10)]);
var inst_44494 = (inst_44492 < inst_44491);
var inst_44495 = inst_44494;
var state_44550__$1 = state_44550;
if(cljs.core.truth_(inst_44495)){
var statearr_44652_46378 = state_44550__$1;
(statearr_44652_46378[(1)] = (27));

} else {
var statearr_44653_46379 = state_44550__$1;
(statearr_44653_46379[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (34))){
var state_44550__$1 = state_44550;
var statearr_44654_46380 = state_44550__$1;
(statearr_44654_46380[(2)] = null);

(statearr_44654_46380[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (17))){
var state_44550__$1 = state_44550;
var statearr_44655_46384 = state_44550__$1;
(statearr_44655_46384[(2)] = null);

(statearr_44655_46384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (3))){
var inst_44545 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44550__$1,inst_44545);
} else {
if((state_val_44551 === (12))){
var inst_44473 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
var statearr_44657_46385 = state_44550__$1;
(statearr_44657_46385[(2)] = inst_44473);

(statearr_44657_46385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (2))){
var state_44550__$1 = state_44550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44550__$1,(4),ch);
} else {
if((state_val_44551 === (23))){
var state_44550__$1 = state_44550;
var statearr_44659_46386 = state_44550__$1;
(statearr_44659_46386[(2)] = null);

(statearr_44659_46386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (35))){
var inst_44529 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
var statearr_44660_46387 = state_44550__$1;
(statearr_44660_46387[(2)] = inst_44529);

(statearr_44660_46387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (19))){
var inst_44439 = (state_44550[(7)]);
var inst_44444 = cljs.core.chunk_first(inst_44439);
var inst_44445 = cljs.core.chunk_rest(inst_44439);
var inst_44446 = cljs.core.count(inst_44444);
var inst_44410 = inst_44445;
var inst_44411 = inst_44444;
var inst_44412 = inst_44446;
var inst_44413 = (0);
var state_44550__$1 = (function (){var statearr_44661 = state_44550;
(statearr_44661[(13)] = inst_44411);

(statearr_44661[(14)] = inst_44412);

(statearr_44661[(16)] = inst_44413);

(statearr_44661[(17)] = inst_44410);

return statearr_44661;
})();
var statearr_44664_46389 = state_44550__$1;
(statearr_44664_46389[(2)] = null);

(statearr_44664_46389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (11))){
var inst_44439 = (state_44550[(7)]);
var inst_44410 = (state_44550[(17)]);
var inst_44439__$1 = cljs.core.seq(inst_44410);
var state_44550__$1 = (function (){var statearr_44665 = state_44550;
(statearr_44665[(7)] = inst_44439__$1);

return statearr_44665;
})();
if(inst_44439__$1){
var statearr_44666_46390 = state_44550__$1;
(statearr_44666_46390[(1)] = (16));

} else {
var statearr_44669_46391 = state_44550__$1;
(statearr_44669_46391[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (9))){
var inst_44475 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
var statearr_44670_46392 = state_44550__$1;
(statearr_44670_46392[(2)] = inst_44475);

(statearr_44670_46392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (5))){
var inst_44408 = cljs.core.deref(cs);
var inst_44409 = cljs.core.seq(inst_44408);
var inst_44410 = inst_44409;
var inst_44411 = null;
var inst_44412 = (0);
var inst_44413 = (0);
var state_44550__$1 = (function (){var statearr_44673 = state_44550;
(statearr_44673[(13)] = inst_44411);

(statearr_44673[(14)] = inst_44412);

(statearr_44673[(16)] = inst_44413);

(statearr_44673[(17)] = inst_44410);

return statearr_44673;
})();
var statearr_44678_46393 = state_44550__$1;
(statearr_44678_46393[(2)] = null);

(statearr_44678_46393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (14))){
var state_44550__$1 = state_44550;
var statearr_44679_46394 = state_44550__$1;
(statearr_44679_46394[(2)] = null);

(statearr_44679_46394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (45))){
var inst_44537 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
var statearr_44680_46395 = state_44550__$1;
(statearr_44680_46395[(2)] = inst_44537);

(statearr_44680_46395[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (26))){
var inst_44481 = (state_44550[(27)]);
var inst_44533 = (state_44550[(2)]);
var inst_44534 = cljs.core.seq(inst_44481);
var state_44550__$1 = (function (){var statearr_44681 = state_44550;
(statearr_44681[(29)] = inst_44533);

return statearr_44681;
})();
if(inst_44534){
var statearr_44682_46402 = state_44550__$1;
(statearr_44682_46402[(1)] = (42));

} else {
var statearr_44683_46403 = state_44550__$1;
(statearr_44683_46403[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (16))){
var inst_44439 = (state_44550[(7)]);
var inst_44442 = cljs.core.chunked_seq_QMARK_(inst_44439);
var state_44550__$1 = state_44550;
if(inst_44442){
var statearr_44684_46404 = state_44550__$1;
(statearr_44684_46404[(1)] = (19));

} else {
var statearr_44685_46405 = state_44550__$1;
(statearr_44685_46405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (38))){
var inst_44526 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
var statearr_44686_46406 = state_44550__$1;
(statearr_44686_46406[(2)] = inst_44526);

(statearr_44686_46406[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (30))){
var state_44550__$1 = state_44550;
var statearr_44688_46410 = state_44550__$1;
(statearr_44688_46410[(2)] = null);

(statearr_44688_46410[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (10))){
var inst_44411 = (state_44550[(13)]);
var inst_44413 = (state_44550[(16)]);
var inst_44422 = cljs.core._nth(inst_44411,inst_44413);
var inst_44423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44422,(0),null);
var inst_44424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44422,(1),null);
var state_44550__$1 = (function (){var statearr_44689 = state_44550;
(statearr_44689[(24)] = inst_44423);

return statearr_44689;
})();
if(cljs.core.truth_(inst_44424)){
var statearr_44690_46411 = state_44550__$1;
(statearr_44690_46411[(1)] = (13));

} else {
var statearr_44691_46412 = state_44550__$1;
(statearr_44691_46412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (18))){
var inst_44471 = (state_44550[(2)]);
var state_44550__$1 = state_44550;
var statearr_44692_46413 = state_44550__$1;
(statearr_44692_46413[(2)] = inst_44471);

(statearr_44692_46413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (42))){
var state_44550__$1 = state_44550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44550__$1,(45),dchan);
} else {
if((state_val_44551 === (37))){
var inst_44507 = (state_44550[(23)]);
var inst_44401 = (state_44550[(9)]);
var inst_44516 = (state_44550[(22)]);
var inst_44516__$1 = cljs.core.first(inst_44507);
var inst_44517 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44516__$1,inst_44401,done);
var state_44550__$1 = (function (){var statearr_44693 = state_44550;
(statearr_44693[(22)] = inst_44516__$1);

return statearr_44693;
})();
if(cljs.core.truth_(inst_44517)){
var statearr_44695_46414 = state_44550__$1;
(statearr_44695_46414[(1)] = (39));

} else {
var statearr_44696_46415 = state_44550__$1;
(statearr_44696_46415[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44551 === (8))){
var inst_44412 = (state_44550[(14)]);
var inst_44413 = (state_44550[(16)]);
var inst_44416 = (inst_44413 < inst_44412);
var inst_44417 = inst_44416;
var state_44550__$1 = state_44550;
if(cljs.core.truth_(inst_44417)){
var statearr_44697_46416 = state_44550__$1;
(statearr_44697_46416[(1)] = (10));

} else {
var statearr_44698_46417 = state_44550__$1;
(statearr_44698_46417[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__42899__auto__ = null;
var cljs$core$async$mult_$_state_machine__42899__auto____0 = (function (){
var statearr_44699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44699[(0)] = cljs$core$async$mult_$_state_machine__42899__auto__);

(statearr_44699[(1)] = (1));

return statearr_44699;
});
var cljs$core$async$mult_$_state_machine__42899__auto____1 = (function (state_44550){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_44550);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e44700){var ex__42902__auto__ = e44700;
var statearr_44701_46418 = state_44550;
(statearr_44701_46418[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_44550[(4)]))){
var statearr_44702_46419 = state_44550;
(statearr_44702_46419[(1)] = cljs.core.first((state_44550[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46420 = state_44550;
state_44550 = G__46420;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42899__auto__ = function(state_44550){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42899__auto____1.call(this,state_44550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42899__auto____0;
cljs$core$async$mult_$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42899__auto____1;
return cljs$core$async$mult_$_state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_44703 = f__43109__auto__();
(statearr_44703[(6)] = c__43108__auto___46297);

return statearr_44703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
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
var G__44705 = arguments.length;
switch (G__44705) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_46422 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_46422(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46424 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_46424(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46425 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46425(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46429 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_46429(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46432 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46432(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46440 = arguments.length;
var i__5770__auto___46441 = (0);
while(true){
if((i__5770__auto___46441 < len__5769__auto___46440)){
args__5775__auto__.push((arguments[i__5770__auto___46441]));

var G__46445 = (i__5770__auto___46441 + (1));
i__5770__auto___46441 = G__46445;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44782){
var map__44783 = p__44782;
var map__44783__$1 = cljs.core.__destructure_map(map__44783);
var opts = map__44783__$1;
var statearr_44784_46447 = state;
(statearr_44784_46447[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44785_46448 = state;
(statearr_44785_46448[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_44786_46449 = state;
(statearr_44786_46449[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44772){
var G__44773 = cljs.core.first(seq44772);
var seq44772__$1 = cljs.core.next(seq44772);
var G__44774 = cljs.core.first(seq44772__$1);
var seq44772__$2 = cljs.core.next(seq44772__$1);
var G__44775 = cljs.core.first(seq44772__$2);
var seq44772__$3 = cljs.core.next(seq44772__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44773,G__44774,G__44775,seq44772__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44808 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44809){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44809 = meta44809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44810,meta44809__$1){
var self__ = this;
var _44810__$1 = this;
return (new cljs.core.async.t_cljs$core$async44808(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44809__$1));
}));

(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44810){
var self__ = this;
var _44810__$1 = this;
return self__.meta44809;
}));

(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44808.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44809","meta44809",-726906793,null)], null);
}));

(cljs.core.async.t_cljs$core$async44808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44808");

(cljs.core.async.t_cljs$core$async44808.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44808.
 */
cljs.core.async.__GT_t_cljs$core$async44808 = (function cljs$core$async$__GT_t_cljs$core$async44808(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44809){
return (new cljs.core.async.t_cljs$core$async44808(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44809));
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
var m = (new cljs.core.async.t_cljs$core$async44808(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__43108__auto___46465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_44889){
var state_val_44890 = (state_44889[(1)]);
if((state_val_44890 === (7))){
var inst_44849 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
if(cljs.core.truth_(inst_44849)){
var statearr_44891_46473 = state_44889__$1;
(statearr_44891_46473[(1)] = (8));

} else {
var statearr_44892_46474 = state_44889__$1;
(statearr_44892_46474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (20))){
var inst_44839 = (state_44889[(7)]);
var state_44889__$1 = state_44889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44889__$1,(23),out,inst_44839);
} else {
if((state_val_44890 === (1))){
var inst_44822 = calc_state();
var inst_44823 = cljs.core.__destructure_map(inst_44822);
var inst_44824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44823,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44823,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44823,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44827 = inst_44822;
var state_44889__$1 = (function (){var statearr_44893 = state_44889;
(statearr_44893[(8)] = inst_44827);

(statearr_44893[(9)] = inst_44826);

(statearr_44893[(10)] = inst_44824);

(statearr_44893[(11)] = inst_44825);

return statearr_44893;
})();
var statearr_44894_46479 = state_44889__$1;
(statearr_44894_46479[(2)] = null);

(statearr_44894_46479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (24))){
var inst_44830 = (state_44889[(12)]);
var inst_44827 = inst_44830;
var state_44889__$1 = (function (){var statearr_44895 = state_44889;
(statearr_44895[(8)] = inst_44827);

return statearr_44895;
})();
var statearr_44899_46481 = state_44889__$1;
(statearr_44899_46481[(2)] = null);

(statearr_44899_46481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (4))){
var inst_44839 = (state_44889[(7)]);
var inst_44844 = (state_44889[(13)]);
var inst_44838 = (state_44889[(2)]);
var inst_44839__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44838,(0),null);
var inst_44843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44838,(1),null);
var inst_44844__$1 = (inst_44839__$1 == null);
var state_44889__$1 = (function (){var statearr_44900 = state_44889;
(statearr_44900[(7)] = inst_44839__$1);

(statearr_44900[(14)] = inst_44843);

(statearr_44900[(13)] = inst_44844__$1);

return statearr_44900;
})();
if(cljs.core.truth_(inst_44844__$1)){
var statearr_44901_46486 = state_44889__$1;
(statearr_44901_46486[(1)] = (5));

} else {
var statearr_44902_46487 = state_44889__$1;
(statearr_44902_46487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (15))){
var inst_44831 = (state_44889[(15)]);
var inst_44863 = (state_44889[(16)]);
var inst_44863__$1 = cljs.core.empty_QMARK_(inst_44831);
var state_44889__$1 = (function (){var statearr_44903 = state_44889;
(statearr_44903[(16)] = inst_44863__$1);

return statearr_44903;
})();
if(inst_44863__$1){
var statearr_44904_46492 = state_44889__$1;
(statearr_44904_46492[(1)] = (17));

} else {
var statearr_44905_46493 = state_44889__$1;
(statearr_44905_46493[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (21))){
var inst_44830 = (state_44889[(12)]);
var inst_44827 = inst_44830;
var state_44889__$1 = (function (){var statearr_44906 = state_44889;
(statearr_44906[(8)] = inst_44827);

return statearr_44906;
})();
var statearr_44907_46494 = state_44889__$1;
(statearr_44907_46494[(2)] = null);

(statearr_44907_46494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (13))){
var inst_44856 = (state_44889[(2)]);
var inst_44857 = calc_state();
var inst_44827 = inst_44857;
var state_44889__$1 = (function (){var statearr_44908 = state_44889;
(statearr_44908[(17)] = inst_44856);

(statearr_44908[(8)] = inst_44827);

return statearr_44908;
})();
var statearr_44909_46501 = state_44889__$1;
(statearr_44909_46501[(2)] = null);

(statearr_44909_46501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (22))){
var inst_44883 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
var statearr_44910_46503 = state_44889__$1;
(statearr_44910_46503[(2)] = inst_44883);

(statearr_44910_46503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (6))){
var inst_44843 = (state_44889[(14)]);
var inst_44847 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44843,change);
var state_44889__$1 = state_44889;
var statearr_44911_46506 = state_44889__$1;
(statearr_44911_46506[(2)] = inst_44847);

(statearr_44911_46506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (25))){
var state_44889__$1 = state_44889;
var statearr_44912_46510 = state_44889__$1;
(statearr_44912_46510[(2)] = null);

(statearr_44912_46510[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (17))){
var inst_44832 = (state_44889[(18)]);
var inst_44843 = (state_44889[(14)]);
var inst_44865 = (inst_44832.cljs$core$IFn$_invoke$arity$1 ? inst_44832.cljs$core$IFn$_invoke$arity$1(inst_44843) : inst_44832.call(null,inst_44843));
var inst_44866 = cljs.core.not(inst_44865);
var state_44889__$1 = state_44889;
var statearr_44915_46512 = state_44889__$1;
(statearr_44915_46512[(2)] = inst_44866);

(statearr_44915_46512[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (3))){
var inst_44887 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44889__$1,inst_44887);
} else {
if((state_val_44890 === (12))){
var state_44889__$1 = state_44889;
var statearr_44917_46514 = state_44889__$1;
(statearr_44917_46514[(2)] = null);

(statearr_44917_46514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (2))){
var inst_44827 = (state_44889[(8)]);
var inst_44830 = (state_44889[(12)]);
var inst_44830__$1 = cljs.core.__destructure_map(inst_44827);
var inst_44831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44830__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44830__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44830__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44889__$1 = (function (){var statearr_44918 = state_44889;
(statearr_44918[(18)] = inst_44832);

(statearr_44918[(15)] = inst_44831);

(statearr_44918[(12)] = inst_44830__$1);

return statearr_44918;
})();
return cljs.core.async.ioc_alts_BANG_(state_44889__$1,(4),inst_44833);
} else {
if((state_val_44890 === (23))){
var inst_44874 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
if(cljs.core.truth_(inst_44874)){
var statearr_44921_46516 = state_44889__$1;
(statearr_44921_46516[(1)] = (24));

} else {
var statearr_44922_46517 = state_44889__$1;
(statearr_44922_46517[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (19))){
var inst_44869 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
var statearr_44923_46518 = state_44889__$1;
(statearr_44923_46518[(2)] = inst_44869);

(statearr_44923_46518[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (11))){
var inst_44843 = (state_44889[(14)]);
var inst_44853 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44843);
var state_44889__$1 = state_44889;
var statearr_44924_46520 = state_44889__$1;
(statearr_44924_46520[(2)] = inst_44853);

(statearr_44924_46520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (9))){
var inst_44831 = (state_44889[(15)]);
var inst_44860 = (state_44889[(19)]);
var inst_44843 = (state_44889[(14)]);
var inst_44860__$1 = (inst_44831.cljs$core$IFn$_invoke$arity$1 ? inst_44831.cljs$core$IFn$_invoke$arity$1(inst_44843) : inst_44831.call(null,inst_44843));
var state_44889__$1 = (function (){var statearr_44925 = state_44889;
(statearr_44925[(19)] = inst_44860__$1);

return statearr_44925;
})();
if(cljs.core.truth_(inst_44860__$1)){
var statearr_44926_46521 = state_44889__$1;
(statearr_44926_46521[(1)] = (14));

} else {
var statearr_44927_46522 = state_44889__$1;
(statearr_44927_46522[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (5))){
var inst_44844 = (state_44889[(13)]);
var state_44889__$1 = state_44889;
var statearr_44929_46524 = state_44889__$1;
(statearr_44929_46524[(2)] = inst_44844);

(statearr_44929_46524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (14))){
var inst_44860 = (state_44889[(19)]);
var state_44889__$1 = state_44889;
var statearr_44931_46526 = state_44889__$1;
(statearr_44931_46526[(2)] = inst_44860);

(statearr_44931_46526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (26))){
var inst_44879 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
var statearr_44932_46530 = state_44889__$1;
(statearr_44932_46530[(2)] = inst_44879);

(statearr_44932_46530[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (16))){
var inst_44871 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
if(cljs.core.truth_(inst_44871)){
var statearr_44933_46532 = state_44889__$1;
(statearr_44933_46532[(1)] = (20));

} else {
var statearr_44934_46533 = state_44889__$1;
(statearr_44934_46533[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (10))){
var inst_44885 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
var statearr_44935_46534 = state_44889__$1;
(statearr_44935_46534[(2)] = inst_44885);

(statearr_44935_46534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (18))){
var inst_44863 = (state_44889[(16)]);
var state_44889__$1 = state_44889;
var statearr_44936_46535 = state_44889__$1;
(statearr_44936_46535[(2)] = inst_44863);

(statearr_44936_46535[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (8))){
var inst_44839 = (state_44889[(7)]);
var inst_44851 = (inst_44839 == null);
var state_44889__$1 = state_44889;
if(cljs.core.truth_(inst_44851)){
var statearr_44937_46546 = state_44889__$1;
(statearr_44937_46546[(1)] = (11));

} else {
var statearr_44938_46547 = state_44889__$1;
(statearr_44938_46547[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__42899__auto__ = null;
var cljs$core$async$mix_$_state_machine__42899__auto____0 = (function (){
var statearr_44939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44939[(0)] = cljs$core$async$mix_$_state_machine__42899__auto__);

(statearr_44939[(1)] = (1));

return statearr_44939;
});
var cljs$core$async$mix_$_state_machine__42899__auto____1 = (function (state_44889){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_44889);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e44940){var ex__42902__auto__ = e44940;
var statearr_44941_46549 = state_44889;
(statearr_44941_46549[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_44889[(4)]))){
var statearr_44942_46550 = state_44889;
(statearr_44942_46550[(1)] = cljs.core.first((state_44889[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46551 = state_44889;
state_44889 = G__46551;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42899__auto__ = function(state_44889){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42899__auto____1.call(this,state_44889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42899__auto____0;
cljs$core$async$mix_$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42899__auto____1;
return cljs$core$async$mix_$_state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_44943 = f__43109__auto__();
(statearr_44943[(6)] = c__43108__auto___46465);

return statearr_44943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_46552 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_46552(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46557 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_46557(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46559 = (function() {
var G__46560 = null;
var G__46560__1 = (function (p){
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
var G__46560__2 = (function (p,v){
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
G__46560 = function(p,v){
switch(arguments.length){
case 1:
return G__46560__1.call(this,p);
case 2:
return G__46560__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46560.cljs$core$IFn$_invoke$arity$1 = G__46560__1;
G__46560.cljs$core$IFn$_invoke$arity$2 = G__46560__2;
return G__46560;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44948 = arguments.length;
switch (G__44948) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46559(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46559(p,v);
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
cljs.core.async.t_cljs$core$async44965 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44966){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44966 = meta44966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44967,meta44966__$1){
var self__ = this;
var _44967__$1 = this;
return (new cljs.core.async.t_cljs$core$async44965(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44966__$1));
}));

(cljs.core.async.t_cljs$core$async44965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44967){
var self__ = this;
var _44967__$1 = this;
return self__.meta44966;
}));

(cljs.core.async.t_cljs$core$async44965.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44965.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44965.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44965.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async44965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44966","meta44966",1832283787,null)], null);
}));

(cljs.core.async.t_cljs$core$async44965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44965");

(cljs.core.async.t_cljs$core$async44965.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44965.
 */
cljs.core.async.__GT_t_cljs$core$async44965 = (function cljs$core$async$__GT_t_cljs$core$async44965(ch,topic_fn,buf_fn,mults,ensure_mult,meta44966){
return (new cljs.core.async.t_cljs$core$async44965(ch,topic_fn,buf_fn,mults,ensure_mult,meta44966));
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
var G__44960 = arguments.length;
switch (G__44960) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44955_SHARP_){
if(cljs.core.truth_((p1__44955_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44955_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44955_SHARP_.call(null,topic)))){
return p1__44955_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44955_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async44965(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__43108__auto___46579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_45066){
var state_val_45067 = (state_45066[(1)]);
if((state_val_45067 === (7))){
var inst_45060 = (state_45066[(2)]);
var state_45066__$1 = state_45066;
var statearr_45069_46580 = state_45066__$1;
(statearr_45069_46580[(2)] = inst_45060);

(statearr_45069_46580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (20))){
var state_45066__$1 = state_45066;
var statearr_45070_46588 = state_45066__$1;
(statearr_45070_46588[(2)] = null);

(statearr_45070_46588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (1))){
var state_45066__$1 = state_45066;
var statearr_45073_46589 = state_45066__$1;
(statearr_45073_46589[(2)] = null);

(statearr_45073_46589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (24))){
var inst_45041 = (state_45066[(7)]);
var inst_45052 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45041);
var state_45066__$1 = state_45066;
var statearr_45078_46590 = state_45066__$1;
(statearr_45078_46590[(2)] = inst_45052);

(statearr_45078_46590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (4))){
var inst_44977 = (state_45066[(8)]);
var inst_44977__$1 = (state_45066[(2)]);
var inst_44978 = (inst_44977__$1 == null);
var state_45066__$1 = (function (){var statearr_45080 = state_45066;
(statearr_45080[(8)] = inst_44977__$1);

return statearr_45080;
})();
if(cljs.core.truth_(inst_44978)){
var statearr_45082_46591 = state_45066__$1;
(statearr_45082_46591[(1)] = (5));

} else {
var statearr_45083_46592 = state_45066__$1;
(statearr_45083_46592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (15))){
var inst_45034 = (state_45066[(2)]);
var state_45066__$1 = state_45066;
var statearr_45096_46593 = state_45066__$1;
(statearr_45096_46593[(2)] = inst_45034);

(statearr_45096_46593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (21))){
var inst_45057 = (state_45066[(2)]);
var state_45066__$1 = (function (){var statearr_45098 = state_45066;
(statearr_45098[(9)] = inst_45057);

return statearr_45098;
})();
var statearr_45100_46594 = state_45066__$1;
(statearr_45100_46594[(2)] = null);

(statearr_45100_46594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (13))){
var inst_45006 = (state_45066[(10)]);
var inst_45011 = cljs.core.chunked_seq_QMARK_(inst_45006);
var state_45066__$1 = state_45066;
if(inst_45011){
var statearr_45101_46595 = state_45066__$1;
(statearr_45101_46595[(1)] = (16));

} else {
var statearr_45102_46596 = state_45066__$1;
(statearr_45102_46596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (22))){
var inst_45048 = (state_45066[(2)]);
var state_45066__$1 = state_45066;
if(cljs.core.truth_(inst_45048)){
var statearr_45103_46597 = state_45066__$1;
(statearr_45103_46597[(1)] = (23));

} else {
var statearr_45104_46598 = state_45066__$1;
(statearr_45104_46598[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (6))){
var inst_45043 = (state_45066[(11)]);
var inst_45041 = (state_45066[(7)]);
var inst_44977 = (state_45066[(8)]);
var inst_45041__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44977) : topic_fn.call(null,inst_44977));
var inst_45042 = cljs.core.deref(mults);
var inst_45043__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45042,inst_45041__$1);
var state_45066__$1 = (function (){var statearr_45109 = state_45066;
(statearr_45109[(11)] = inst_45043__$1);

(statearr_45109[(7)] = inst_45041__$1);

return statearr_45109;
})();
if(cljs.core.truth_(inst_45043__$1)){
var statearr_45110_46600 = state_45066__$1;
(statearr_45110_46600[(1)] = (19));

} else {
var statearr_45111_46601 = state_45066__$1;
(statearr_45111_46601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (25))){
var inst_45054 = (state_45066[(2)]);
var state_45066__$1 = state_45066;
var statearr_45113_46604 = state_45066__$1;
(statearr_45113_46604[(2)] = inst_45054);

(statearr_45113_46604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (17))){
var inst_45006 = (state_45066[(10)]);
var inst_45021 = cljs.core.first(inst_45006);
var inst_45025 = cljs.core.async.muxch_STAR_(inst_45021);
var inst_45027 = cljs.core.async.close_BANG_(inst_45025);
var inst_45028 = cljs.core.next(inst_45006);
var inst_44990 = inst_45028;
var inst_44991 = null;
var inst_44992 = (0);
var inst_44993 = (0);
var state_45066__$1 = (function (){var statearr_45114 = state_45066;
(statearr_45114[(12)] = inst_44993);

(statearr_45114[(13)] = inst_45027);

(statearr_45114[(14)] = inst_44992);

(statearr_45114[(15)] = inst_44991);

(statearr_45114[(16)] = inst_44990);

return statearr_45114;
})();
var statearr_45115_46605 = state_45066__$1;
(statearr_45115_46605[(2)] = null);

(statearr_45115_46605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (3))){
var inst_45062 = (state_45066[(2)]);
var state_45066__$1 = state_45066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45066__$1,inst_45062);
} else {
if((state_val_45067 === (12))){
var inst_45037 = (state_45066[(2)]);
var state_45066__$1 = state_45066;
var statearr_45117_46606 = state_45066__$1;
(statearr_45117_46606[(2)] = inst_45037);

(statearr_45117_46606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (2))){
var state_45066__$1 = state_45066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45066__$1,(4),ch);
} else {
if((state_val_45067 === (23))){
var state_45066__$1 = state_45066;
var statearr_45118_46607 = state_45066__$1;
(statearr_45118_46607[(2)] = null);

(statearr_45118_46607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (19))){
var inst_45043 = (state_45066[(11)]);
var inst_44977 = (state_45066[(8)]);
var inst_45046 = cljs.core.async.muxch_STAR_(inst_45043);
var state_45066__$1 = state_45066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45066__$1,(22),inst_45046,inst_44977);
} else {
if((state_val_45067 === (11))){
var inst_45006 = (state_45066[(10)]);
var inst_44990 = (state_45066[(16)]);
var inst_45006__$1 = cljs.core.seq(inst_44990);
var state_45066__$1 = (function (){var statearr_45119 = state_45066;
(statearr_45119[(10)] = inst_45006__$1);

return statearr_45119;
})();
if(inst_45006__$1){
var statearr_45120_46609 = state_45066__$1;
(statearr_45120_46609[(1)] = (13));

} else {
var statearr_45121_46610 = state_45066__$1;
(statearr_45121_46610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (9))){
var inst_45039 = (state_45066[(2)]);
var state_45066__$1 = state_45066;
var statearr_45123_46611 = state_45066__$1;
(statearr_45123_46611[(2)] = inst_45039);

(statearr_45123_46611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (5))){
var inst_44986 = cljs.core.deref(mults);
var inst_44987 = cljs.core.vals(inst_44986);
var inst_44988 = cljs.core.seq(inst_44987);
var inst_44990 = inst_44988;
var inst_44991 = null;
var inst_44992 = (0);
var inst_44993 = (0);
var state_45066__$1 = (function (){var statearr_45125 = state_45066;
(statearr_45125[(12)] = inst_44993);

(statearr_45125[(14)] = inst_44992);

(statearr_45125[(15)] = inst_44991);

(statearr_45125[(16)] = inst_44990);

return statearr_45125;
})();
var statearr_45126_46615 = state_45066__$1;
(statearr_45126_46615[(2)] = null);

(statearr_45126_46615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (14))){
var state_45066__$1 = state_45066;
var statearr_45130_46616 = state_45066__$1;
(statearr_45130_46616[(2)] = null);

(statearr_45130_46616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (16))){
var inst_45006 = (state_45066[(10)]);
var inst_45016 = cljs.core.chunk_first(inst_45006);
var inst_45017 = cljs.core.chunk_rest(inst_45006);
var inst_45018 = cljs.core.count(inst_45016);
var inst_44990 = inst_45017;
var inst_44991 = inst_45016;
var inst_44992 = inst_45018;
var inst_44993 = (0);
var state_45066__$1 = (function (){var statearr_45131 = state_45066;
(statearr_45131[(12)] = inst_44993);

(statearr_45131[(14)] = inst_44992);

(statearr_45131[(15)] = inst_44991);

(statearr_45131[(16)] = inst_44990);

return statearr_45131;
})();
var statearr_45133_46617 = state_45066__$1;
(statearr_45133_46617[(2)] = null);

(statearr_45133_46617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (10))){
var inst_44993 = (state_45066[(12)]);
var inst_44992 = (state_45066[(14)]);
var inst_44991 = (state_45066[(15)]);
var inst_44990 = (state_45066[(16)]);
var inst_45000 = cljs.core._nth(inst_44991,inst_44993);
var inst_45001 = cljs.core.async.muxch_STAR_(inst_45000);
var inst_45002 = cljs.core.async.close_BANG_(inst_45001);
var inst_45003 = (inst_44993 + (1));
var tmp45127 = inst_44992;
var tmp45128 = inst_44991;
var tmp45129 = inst_44990;
var inst_44990__$1 = tmp45129;
var inst_44991__$1 = tmp45128;
var inst_44992__$1 = tmp45127;
var inst_44993__$1 = inst_45003;
var state_45066__$1 = (function (){var statearr_45134 = state_45066;
(statearr_45134[(12)] = inst_44993__$1);

(statearr_45134[(14)] = inst_44992__$1);

(statearr_45134[(15)] = inst_44991__$1);

(statearr_45134[(16)] = inst_44990__$1);

(statearr_45134[(17)] = inst_45002);

return statearr_45134;
})();
var statearr_45139_46618 = state_45066__$1;
(statearr_45139_46618[(2)] = null);

(statearr_45139_46618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (18))){
var inst_45031 = (state_45066[(2)]);
var state_45066__$1 = state_45066;
var statearr_45141_46619 = state_45066__$1;
(statearr_45141_46619[(2)] = inst_45031);

(statearr_45141_46619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45067 === (8))){
var inst_44993 = (state_45066[(12)]);
var inst_44992 = (state_45066[(14)]);
var inst_44996 = (inst_44993 < inst_44992);
var inst_44997 = inst_44996;
var state_45066__$1 = state_45066;
if(cljs.core.truth_(inst_44997)){
var statearr_45143_46620 = state_45066__$1;
(statearr_45143_46620[(1)] = (10));

} else {
var statearr_45144_46621 = state_45066__$1;
(statearr_45144_46621[(1)] = (11));

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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_45145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45145[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_45145[(1)] = (1));

return statearr_45145;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_45066){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_45066);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e45146){var ex__42902__auto__ = e45146;
var statearr_45147_46622 = state_45066;
(statearr_45147_46622[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_45066[(4)]))){
var statearr_45148_46623 = state_45066;
(statearr_45148_46623[(1)] = cljs.core.first((state_45066[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46624 = state_45066;
state_45066 = G__46624;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_45066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_45066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_45149 = f__43109__auto__();
(statearr_45149[(6)] = c__43108__auto___46579);

return statearr_45149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
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
var G__45172 = arguments.length;
switch (G__45172) {
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
var G__45178 = arguments.length;
switch (G__45178) {
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
var G__45180 = arguments.length;
switch (G__45180) {
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
var c__43108__auto___46643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_45230){
var state_val_45231 = (state_45230[(1)]);
if((state_val_45231 === (7))){
var state_45230__$1 = state_45230;
var statearr_45233_46644 = state_45230__$1;
(statearr_45233_46644[(2)] = null);

(statearr_45233_46644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (1))){
var state_45230__$1 = state_45230;
var statearr_45234_46645 = state_45230__$1;
(statearr_45234_46645[(2)] = null);

(statearr_45234_46645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (4))){
var inst_45188 = (state_45230[(7)]);
var inst_45187 = (state_45230[(8)]);
var inst_45190 = (inst_45188 < inst_45187);
var state_45230__$1 = state_45230;
if(cljs.core.truth_(inst_45190)){
var statearr_45235_46646 = state_45230__$1;
(statearr_45235_46646[(1)] = (6));

} else {
var statearr_45236_46647 = state_45230__$1;
(statearr_45236_46647[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (15))){
var inst_45216 = (state_45230[(9)]);
var inst_45221 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45216);
var state_45230__$1 = state_45230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45230__$1,(17),out,inst_45221);
} else {
if((state_val_45231 === (13))){
var inst_45216 = (state_45230[(9)]);
var inst_45216__$1 = (state_45230[(2)]);
var inst_45217 = cljs.core.some(cljs.core.nil_QMARK_,inst_45216__$1);
var state_45230__$1 = (function (){var statearr_45245 = state_45230;
(statearr_45245[(9)] = inst_45216__$1);

return statearr_45245;
})();
if(cljs.core.truth_(inst_45217)){
var statearr_45246_46648 = state_45230__$1;
(statearr_45246_46648[(1)] = (14));

} else {
var statearr_45248_46649 = state_45230__$1;
(statearr_45248_46649[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (6))){
var state_45230__$1 = state_45230;
var statearr_45252_46650 = state_45230__$1;
(statearr_45252_46650[(2)] = null);

(statearr_45252_46650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (17))){
var inst_45223 = (state_45230[(2)]);
var state_45230__$1 = (function (){var statearr_45259 = state_45230;
(statearr_45259[(10)] = inst_45223);

return statearr_45259;
})();
var statearr_45260_46653 = state_45230__$1;
(statearr_45260_46653[(2)] = null);

(statearr_45260_46653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (3))){
var inst_45228 = (state_45230[(2)]);
var state_45230__$1 = state_45230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45230__$1,inst_45228);
} else {
if((state_val_45231 === (12))){
var _ = (function (){var statearr_45267 = state_45230;
(statearr_45267[(4)] = cljs.core.rest((state_45230[(4)])));

return statearr_45267;
})();
var state_45230__$1 = state_45230;
var ex45258 = (state_45230__$1[(2)]);
var statearr_45268_46654 = state_45230__$1;
(statearr_45268_46654[(5)] = ex45258);


if((ex45258 instanceof Object)){
var statearr_45273_46655 = state_45230__$1;
(statearr_45273_46655[(1)] = (11));

(statearr_45273_46655[(5)] = null);

} else {
throw ex45258;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (2))){
var inst_45185 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45187 = cnt;
var inst_45188 = (0);
var state_45230__$1 = (function (){var statearr_45277 = state_45230;
(statearr_45277[(7)] = inst_45188);

(statearr_45277[(8)] = inst_45187);

(statearr_45277[(11)] = inst_45185);

return statearr_45277;
})();
var statearr_45279_46657 = state_45230__$1;
(statearr_45279_46657[(2)] = null);

(statearr_45279_46657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (11))){
var inst_45195 = (state_45230[(2)]);
var inst_45196 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45230__$1 = (function (){var statearr_45284 = state_45230;
(statearr_45284[(12)] = inst_45195);

return statearr_45284;
})();
var statearr_45285_46659 = state_45230__$1;
(statearr_45285_46659[(2)] = inst_45196);

(statearr_45285_46659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (9))){
var inst_45188 = (state_45230[(7)]);
var _ = (function (){var statearr_45286 = state_45230;
(statearr_45286[(4)] = cljs.core.cons((12),(state_45230[(4)])));

return statearr_45286;
})();
var inst_45202 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45188) : chs__$1.call(null,inst_45188));
var inst_45203 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45188) : done.call(null,inst_45188));
var inst_45204 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45202,inst_45203);
var ___$1 = (function (){var statearr_45287 = state_45230;
(statearr_45287[(4)] = cljs.core.rest((state_45230[(4)])));

return statearr_45287;
})();
var state_45230__$1 = state_45230;
var statearr_45288_46664 = state_45230__$1;
(statearr_45288_46664[(2)] = inst_45204);

(statearr_45288_46664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (5))){
var inst_45214 = (state_45230[(2)]);
var state_45230__$1 = (function (){var statearr_45289 = state_45230;
(statearr_45289[(13)] = inst_45214);

return statearr_45289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45230__$1,(13),dchan);
} else {
if((state_val_45231 === (14))){
var inst_45219 = cljs.core.async.close_BANG_(out);
var state_45230__$1 = state_45230;
var statearr_45296_46665 = state_45230__$1;
(statearr_45296_46665[(2)] = inst_45219);

(statearr_45296_46665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (16))){
var inst_45226 = (state_45230[(2)]);
var state_45230__$1 = state_45230;
var statearr_45297_46666 = state_45230__$1;
(statearr_45297_46666[(2)] = inst_45226);

(statearr_45297_46666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (10))){
var inst_45188 = (state_45230[(7)]);
var inst_45207 = (state_45230[(2)]);
var inst_45208 = (inst_45188 + (1));
var inst_45188__$1 = inst_45208;
var state_45230__$1 = (function (){var statearr_45299 = state_45230;
(statearr_45299[(14)] = inst_45207);

(statearr_45299[(7)] = inst_45188__$1);

return statearr_45299;
})();
var statearr_45302_46668 = state_45230__$1;
(statearr_45302_46668[(2)] = null);

(statearr_45302_46668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (8))){
var inst_45212 = (state_45230[(2)]);
var state_45230__$1 = state_45230;
var statearr_45304_46669 = state_45230__$1;
(statearr_45304_46669[(2)] = inst_45212);

(statearr_45304_46669[(1)] = (5));


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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_45310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45310[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_45310[(1)] = (1));

return statearr_45310;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_45230){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_45230);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e45314){var ex__42902__auto__ = e45314;
var statearr_45315_46671 = state_45230;
(statearr_45315_46671[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_45230[(4)]))){
var statearr_45318_46672 = state_45230;
(statearr_45318_46672[(1)] = cljs.core.first((state_45230[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46673 = state_45230;
state_45230 = G__46673;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_45230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_45230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_45321 = f__43109__auto__();
(statearr_45321[(6)] = c__43108__auto___46643);

return statearr_45321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
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
var G__45329 = arguments.length;
switch (G__45329) {
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
var c__43108__auto___46675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_45383){
var state_val_45384 = (state_45383[(1)]);
if((state_val_45384 === (7))){
var inst_45353 = (state_45383[(7)]);
var inst_45352 = (state_45383[(8)]);
var inst_45352__$1 = (state_45383[(2)]);
var inst_45353__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45352__$1,(0),null);
var inst_45354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45352__$1,(1),null);
var inst_45355 = (inst_45353__$1 == null);
var state_45383__$1 = (function (){var statearr_45386 = state_45383;
(statearr_45386[(7)] = inst_45353__$1);

(statearr_45386[(8)] = inst_45352__$1);

(statearr_45386[(9)] = inst_45354);

return statearr_45386;
})();
if(cljs.core.truth_(inst_45355)){
var statearr_45392_46677 = state_45383__$1;
(statearr_45392_46677[(1)] = (8));

} else {
var statearr_45393_46678 = state_45383__$1;
(statearr_45393_46678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45384 === (1))){
var inst_45342 = cljs.core.vec(chs);
var inst_45343 = inst_45342;
var state_45383__$1 = (function (){var statearr_45395 = state_45383;
(statearr_45395[(10)] = inst_45343);

return statearr_45395;
})();
var statearr_45399_46683 = state_45383__$1;
(statearr_45399_46683[(2)] = null);

(statearr_45399_46683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45384 === (4))){
var inst_45343 = (state_45383[(10)]);
var state_45383__$1 = state_45383;
return cljs.core.async.ioc_alts_BANG_(state_45383__$1,(7),inst_45343);
} else {
if((state_val_45384 === (6))){
var inst_45374 = (state_45383[(2)]);
var state_45383__$1 = state_45383;
var statearr_45401_46684 = state_45383__$1;
(statearr_45401_46684[(2)] = inst_45374);

(statearr_45401_46684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45384 === (3))){
var inst_45381 = (state_45383[(2)]);
var state_45383__$1 = state_45383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45383__$1,inst_45381);
} else {
if((state_val_45384 === (2))){
var inst_45343 = (state_45383[(10)]);
var inst_45345 = cljs.core.count(inst_45343);
var inst_45346 = (inst_45345 > (0));
var state_45383__$1 = state_45383;
if(cljs.core.truth_(inst_45346)){
var statearr_45404_46690 = state_45383__$1;
(statearr_45404_46690[(1)] = (4));

} else {
var statearr_45405_46691 = state_45383__$1;
(statearr_45405_46691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45384 === (11))){
var inst_45343 = (state_45383[(10)]);
var inst_45367 = (state_45383[(2)]);
var tmp45402 = inst_45343;
var inst_45343__$1 = tmp45402;
var state_45383__$1 = (function (){var statearr_45407 = state_45383;
(statearr_45407[(11)] = inst_45367);

(statearr_45407[(10)] = inst_45343__$1);

return statearr_45407;
})();
var statearr_45408_46692 = state_45383__$1;
(statearr_45408_46692[(2)] = null);

(statearr_45408_46692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45384 === (9))){
var inst_45353 = (state_45383[(7)]);
var state_45383__$1 = state_45383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45383__$1,(11),out,inst_45353);
} else {
if((state_val_45384 === (5))){
var inst_45372 = cljs.core.async.close_BANG_(out);
var state_45383__$1 = state_45383;
var statearr_45413_46694 = state_45383__$1;
(statearr_45413_46694[(2)] = inst_45372);

(statearr_45413_46694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45384 === (10))){
var inst_45370 = (state_45383[(2)]);
var state_45383__$1 = state_45383;
var statearr_45414_46696 = state_45383__$1;
(statearr_45414_46696[(2)] = inst_45370);

(statearr_45414_46696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45384 === (8))){
var inst_45353 = (state_45383[(7)]);
var inst_45352 = (state_45383[(8)]);
var inst_45354 = (state_45383[(9)]);
var inst_45343 = (state_45383[(10)]);
var inst_45362 = (function (){var cs = inst_45343;
var vec__45348 = inst_45352;
var v = inst_45353;
var c = inst_45354;
return (function (p1__45324_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45324_SHARP_);
});
})();
var inst_45363 = cljs.core.filterv(inst_45362,inst_45343);
var inst_45343__$1 = inst_45363;
var state_45383__$1 = (function (){var statearr_45415 = state_45383;
(statearr_45415[(10)] = inst_45343__$1);

return statearr_45415;
})();
var statearr_45416_46699 = state_45383__$1;
(statearr_45416_46699[(2)] = null);

(statearr_45416_46699[(1)] = (2));


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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_45419 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45419[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_45419[(1)] = (1));

return statearr_45419;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_45383){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_45383);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e45421){var ex__42902__auto__ = e45421;
var statearr_45422_46702 = state_45383;
(statearr_45422_46702[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_45383[(4)]))){
var statearr_45423_46704 = state_45383;
(statearr_45423_46704[(1)] = cljs.core.first((state_45383[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46705 = state_45383;
state_45383 = G__46705;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_45383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_45383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_45435 = f__43109__auto__();
(statearr_45435[(6)] = c__43108__auto___46675);

return statearr_45435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
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
var G__45443 = arguments.length;
switch (G__45443) {
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
var c__43108__auto___46713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_45473){
var state_val_45474 = (state_45473[(1)]);
if((state_val_45474 === (7))){
var inst_45455 = (state_45473[(7)]);
var inst_45455__$1 = (state_45473[(2)]);
var inst_45456 = (inst_45455__$1 == null);
var inst_45457 = cljs.core.not(inst_45456);
var state_45473__$1 = (function (){var statearr_45475 = state_45473;
(statearr_45475[(7)] = inst_45455__$1);

return statearr_45475;
})();
if(inst_45457){
var statearr_45476_46716 = state_45473__$1;
(statearr_45476_46716[(1)] = (8));

} else {
var statearr_45477_46717 = state_45473__$1;
(statearr_45477_46717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (1))){
var inst_45450 = (0);
var state_45473__$1 = (function (){var statearr_45478 = state_45473;
(statearr_45478[(8)] = inst_45450);

return statearr_45478;
})();
var statearr_45479_46718 = state_45473__$1;
(statearr_45479_46718[(2)] = null);

(statearr_45479_46718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (4))){
var state_45473__$1 = state_45473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45473__$1,(7),ch);
} else {
if((state_val_45474 === (6))){
var inst_45468 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45480_46719 = state_45473__$1;
(statearr_45480_46719[(2)] = inst_45468);

(statearr_45480_46719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (3))){
var inst_45470 = (state_45473[(2)]);
var inst_45471 = cljs.core.async.close_BANG_(out);
var state_45473__$1 = (function (){var statearr_45481 = state_45473;
(statearr_45481[(9)] = inst_45470);

return statearr_45481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45473__$1,inst_45471);
} else {
if((state_val_45474 === (2))){
var inst_45450 = (state_45473[(8)]);
var inst_45452 = (inst_45450 < n);
var state_45473__$1 = state_45473;
if(cljs.core.truth_(inst_45452)){
var statearr_45482_46723 = state_45473__$1;
(statearr_45482_46723[(1)] = (4));

} else {
var statearr_45483_46724 = state_45473__$1;
(statearr_45483_46724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (11))){
var inst_45450 = (state_45473[(8)]);
var inst_45460 = (state_45473[(2)]);
var inst_45461 = (inst_45450 + (1));
var inst_45450__$1 = inst_45461;
var state_45473__$1 = (function (){var statearr_45485 = state_45473;
(statearr_45485[(10)] = inst_45460);

(statearr_45485[(8)] = inst_45450__$1);

return statearr_45485;
})();
var statearr_45486_46726 = state_45473__$1;
(statearr_45486_46726[(2)] = null);

(statearr_45486_46726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (9))){
var state_45473__$1 = state_45473;
var statearr_45487_46727 = state_45473__$1;
(statearr_45487_46727[(2)] = null);

(statearr_45487_46727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (5))){
var state_45473__$1 = state_45473;
var statearr_45488_46728 = state_45473__$1;
(statearr_45488_46728[(2)] = null);

(statearr_45488_46728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (10))){
var inst_45465 = (state_45473[(2)]);
var state_45473__$1 = state_45473;
var statearr_45495_46730 = state_45473__$1;
(statearr_45495_46730[(2)] = inst_45465);

(statearr_45495_46730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45474 === (8))){
var inst_45455 = (state_45473[(7)]);
var state_45473__$1 = state_45473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45473__$1,(11),out,inst_45455);
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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_45497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45497[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_45497[(1)] = (1));

return statearr_45497;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_45473){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_45473);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e45498){var ex__42902__auto__ = e45498;
var statearr_45502_46735 = state_45473;
(statearr_45502_46735[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_45473[(4)]))){
var statearr_45503_46736 = state_45473;
(statearr_45503_46736[(1)] = cljs.core.first((state_45473[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46738 = state_45473;
state_45473 = G__46738;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_45473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_45473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_45504 = f__43109__auto__();
(statearr_45504[(6)] = c__43108__auto___46713);

return statearr_45504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
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
cljs.core.async.t_cljs$core$async45510 = (function (f,ch,meta45507,_,fn1,meta45511){
this.f = f;
this.ch = ch;
this.meta45507 = meta45507;
this._ = _;
this.fn1 = fn1;
this.meta45511 = meta45511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45512,meta45511__$1){
var self__ = this;
var _45512__$1 = this;
return (new cljs.core.async.t_cljs$core$async45510(self__.f,self__.ch,self__.meta45507,self__._,self__.fn1,meta45511__$1));
}));

(cljs.core.async.t_cljs$core$async45510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45512){
var self__ = this;
var _45512__$1 = this;
return self__.meta45511;
}));

(cljs.core.async.t_cljs$core$async45510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45505_SHARP_){
var G__45513 = (((p1__45505_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45505_SHARP_) : self__.f.call(null,p1__45505_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45513) : f1.call(null,G__45513));
});
}));

(cljs.core.async.t_cljs$core$async45510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45507","meta45507",-956290434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45506","cljs.core.async/t_cljs$core$async45506",1456864111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45511","meta45511",716287055,null)], null);
}));

(cljs.core.async.t_cljs$core$async45510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45510");

(cljs.core.async.t_cljs$core$async45510.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45510.
 */
cljs.core.async.__GT_t_cljs$core$async45510 = (function cljs$core$async$__GT_t_cljs$core$async45510(f,ch,meta45507,_,fn1,meta45511){
return (new cljs.core.async.t_cljs$core$async45510(f,ch,meta45507,_,fn1,meta45511));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45506 = (function (f,ch,meta45507){
this.f = f;
this.ch = ch;
this.meta45507 = meta45507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45508,meta45507__$1){
var self__ = this;
var _45508__$1 = this;
return (new cljs.core.async.t_cljs$core$async45506(self__.f,self__.ch,meta45507__$1));
}));

(cljs.core.async.t_cljs$core$async45506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45508){
var self__ = this;
var _45508__$1 = this;
return self__.meta45507;
}));

(cljs.core.async.t_cljs$core$async45506.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45506.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45506.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45506.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45506.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async45510(self__.f,self__.ch,self__.meta45507,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45520 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45520) : self__.f.call(null,G__45520));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45506.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45506.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45507","meta45507",-956290434,null)], null);
}));

(cljs.core.async.t_cljs$core$async45506.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45506");

(cljs.core.async.t_cljs$core$async45506.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45506");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45506.
 */
cljs.core.async.__GT_t_cljs$core$async45506 = (function cljs$core$async$__GT_t_cljs$core$async45506(f,ch,meta45507){
return (new cljs.core.async.t_cljs$core$async45506(f,ch,meta45507));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async45506(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45521 = (function (f,ch,meta45522){
this.f = f;
this.ch = ch;
this.meta45522 = meta45522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45523,meta45522__$1){
var self__ = this;
var _45523__$1 = this;
return (new cljs.core.async.t_cljs$core$async45521(self__.f,self__.ch,meta45522__$1));
}));

(cljs.core.async.t_cljs$core$async45521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45523){
var self__ = this;
var _45523__$1 = this;
return self__.meta45522;
}));

(cljs.core.async.t_cljs$core$async45521.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45521.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45521.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45522","meta45522",-1341104774,null)], null);
}));

(cljs.core.async.t_cljs$core$async45521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45521");

(cljs.core.async.t_cljs$core$async45521.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45521.
 */
cljs.core.async.__GT_t_cljs$core$async45521 = (function cljs$core$async$__GT_t_cljs$core$async45521(f,ch,meta45522){
return (new cljs.core.async.t_cljs$core$async45521(f,ch,meta45522));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async45521(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45533 = (function (p,ch,meta45534){
this.p = p;
this.ch = ch;
this.meta45534 = meta45534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45535,meta45534__$1){
var self__ = this;
var _45535__$1 = this;
return (new cljs.core.async.t_cljs$core$async45533(self__.p,self__.ch,meta45534__$1));
}));

(cljs.core.async.t_cljs$core$async45533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45535){
var self__ = this;
var _45535__$1 = this;
return self__.meta45534;
}));

(cljs.core.async.t_cljs$core$async45533.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45533.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45533.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45533.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45534","meta45534",1916074481,null)], null);
}));

(cljs.core.async.t_cljs$core$async45533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45533");

(cljs.core.async.t_cljs$core$async45533.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45533.
 */
cljs.core.async.__GT_t_cljs$core$async45533 = (function cljs$core$async$__GT_t_cljs$core$async45533(p,ch,meta45534){
return (new cljs.core.async.t_cljs$core$async45533(p,ch,meta45534));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async45533(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45550 = arguments.length;
switch (G__45550) {
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
var c__43108__auto___46760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_45571){
var state_val_45572 = (state_45571[(1)]);
if((state_val_45572 === (7))){
var inst_45567 = (state_45571[(2)]);
var state_45571__$1 = state_45571;
var statearr_45573_46762 = state_45571__$1;
(statearr_45573_46762[(2)] = inst_45567);

(statearr_45573_46762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (1))){
var state_45571__$1 = state_45571;
var statearr_45574_46763 = state_45571__$1;
(statearr_45574_46763[(2)] = null);

(statearr_45574_46763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (4))){
var inst_45553 = (state_45571[(7)]);
var inst_45553__$1 = (state_45571[(2)]);
var inst_45554 = (inst_45553__$1 == null);
var state_45571__$1 = (function (){var statearr_45577 = state_45571;
(statearr_45577[(7)] = inst_45553__$1);

return statearr_45577;
})();
if(cljs.core.truth_(inst_45554)){
var statearr_45579_46770 = state_45571__$1;
(statearr_45579_46770[(1)] = (5));

} else {
var statearr_45580_46771 = state_45571__$1;
(statearr_45580_46771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (6))){
var inst_45553 = (state_45571[(7)]);
var inst_45558 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45553) : p.call(null,inst_45553));
var state_45571__$1 = state_45571;
if(cljs.core.truth_(inst_45558)){
var statearr_45581_46778 = state_45571__$1;
(statearr_45581_46778[(1)] = (8));

} else {
var statearr_45582_46779 = state_45571__$1;
(statearr_45582_46779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (3))){
var inst_45569 = (state_45571[(2)]);
var state_45571__$1 = state_45571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45571__$1,inst_45569);
} else {
if((state_val_45572 === (2))){
var state_45571__$1 = state_45571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45571__$1,(4),ch);
} else {
if((state_val_45572 === (11))){
var inst_45561 = (state_45571[(2)]);
var state_45571__$1 = state_45571;
var statearr_45583_46783 = state_45571__$1;
(statearr_45583_46783[(2)] = inst_45561);

(statearr_45583_46783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (9))){
var state_45571__$1 = state_45571;
var statearr_45584_46784 = state_45571__$1;
(statearr_45584_46784[(2)] = null);

(statearr_45584_46784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (5))){
var inst_45556 = cljs.core.async.close_BANG_(out);
var state_45571__$1 = state_45571;
var statearr_45585_46785 = state_45571__$1;
(statearr_45585_46785[(2)] = inst_45556);

(statearr_45585_46785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (10))){
var inst_45564 = (state_45571[(2)]);
var state_45571__$1 = (function (){var statearr_45586 = state_45571;
(statearr_45586[(8)] = inst_45564);

return statearr_45586;
})();
var statearr_45587_46786 = state_45571__$1;
(statearr_45587_46786[(2)] = null);

(statearr_45587_46786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45572 === (8))){
var inst_45553 = (state_45571[(7)]);
var state_45571__$1 = state_45571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45571__$1,(11),out,inst_45553);
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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_45588 = [null,null,null,null,null,null,null,null,null];
(statearr_45588[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_45588[(1)] = (1));

return statearr_45588;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_45571){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_45571);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e45589){var ex__42902__auto__ = e45589;
var statearr_45590_46790 = state_45571;
(statearr_45590_46790[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_45571[(4)]))){
var statearr_45591_46794 = state_45571;
(statearr_45591_46794[(1)] = cljs.core.first((state_45571[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46798 = state_45571;
state_45571 = G__46798;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_45571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_45571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_45592 = f__43109__auto__();
(statearr_45592[(6)] = c__43108__auto___46760);

return statearr_45592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45594 = arguments.length;
switch (G__45594) {
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
var c__43108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_45659){
var state_val_45660 = (state_45659[(1)]);
if((state_val_45660 === (7))){
var inst_45655 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
var statearr_45666_46800 = state_45659__$1;
(statearr_45666_46800[(2)] = inst_45655);

(statearr_45666_46800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (20))){
var inst_45625 = (state_45659[(7)]);
var inst_45636 = (state_45659[(2)]);
var inst_45637 = cljs.core.next(inst_45625);
var inst_45611 = inst_45637;
var inst_45612 = null;
var inst_45613 = (0);
var inst_45614 = (0);
var state_45659__$1 = (function (){var statearr_45667 = state_45659;
(statearr_45667[(8)] = inst_45612);

(statearr_45667[(9)] = inst_45636);

(statearr_45667[(10)] = inst_45613);

(statearr_45667[(11)] = inst_45611);

(statearr_45667[(12)] = inst_45614);

return statearr_45667;
})();
var statearr_45668_46802 = state_45659__$1;
(statearr_45668_46802[(2)] = null);

(statearr_45668_46802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (1))){
var state_45659__$1 = state_45659;
var statearr_45672_46803 = state_45659__$1;
(statearr_45672_46803[(2)] = null);

(statearr_45672_46803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (4))){
var inst_45600 = (state_45659[(13)]);
var inst_45600__$1 = (state_45659[(2)]);
var inst_45601 = (inst_45600__$1 == null);
var state_45659__$1 = (function (){var statearr_45673 = state_45659;
(statearr_45673[(13)] = inst_45600__$1);

return statearr_45673;
})();
if(cljs.core.truth_(inst_45601)){
var statearr_45674_46804 = state_45659__$1;
(statearr_45674_46804[(1)] = (5));

} else {
var statearr_45675_46805 = state_45659__$1;
(statearr_45675_46805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (15))){
var state_45659__$1 = state_45659;
var statearr_45679_46806 = state_45659__$1;
(statearr_45679_46806[(2)] = null);

(statearr_45679_46806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (21))){
var state_45659__$1 = state_45659;
var statearr_45680_46807 = state_45659__$1;
(statearr_45680_46807[(2)] = null);

(statearr_45680_46807[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (13))){
var inst_45612 = (state_45659[(8)]);
var inst_45613 = (state_45659[(10)]);
var inst_45611 = (state_45659[(11)]);
var inst_45614 = (state_45659[(12)]);
var inst_45621 = (state_45659[(2)]);
var inst_45622 = (inst_45614 + (1));
var tmp45676 = inst_45612;
var tmp45677 = inst_45613;
var tmp45678 = inst_45611;
var inst_45611__$1 = tmp45678;
var inst_45612__$1 = tmp45676;
var inst_45613__$1 = tmp45677;
var inst_45614__$1 = inst_45622;
var state_45659__$1 = (function (){var statearr_45681 = state_45659;
(statearr_45681[(14)] = inst_45621);

(statearr_45681[(8)] = inst_45612__$1);

(statearr_45681[(10)] = inst_45613__$1);

(statearr_45681[(11)] = inst_45611__$1);

(statearr_45681[(12)] = inst_45614__$1);

return statearr_45681;
})();
var statearr_45682_46809 = state_45659__$1;
(statearr_45682_46809[(2)] = null);

(statearr_45682_46809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (22))){
var state_45659__$1 = state_45659;
var statearr_45683_46811 = state_45659__$1;
(statearr_45683_46811[(2)] = null);

(statearr_45683_46811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (6))){
var inst_45600 = (state_45659[(13)]);
var inst_45609 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45600) : f.call(null,inst_45600));
var inst_45610 = cljs.core.seq(inst_45609);
var inst_45611 = inst_45610;
var inst_45612 = null;
var inst_45613 = (0);
var inst_45614 = (0);
var state_45659__$1 = (function (){var statearr_45684 = state_45659;
(statearr_45684[(8)] = inst_45612);

(statearr_45684[(10)] = inst_45613);

(statearr_45684[(11)] = inst_45611);

(statearr_45684[(12)] = inst_45614);

return statearr_45684;
})();
var statearr_45685_46812 = state_45659__$1;
(statearr_45685_46812[(2)] = null);

(statearr_45685_46812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (17))){
var inst_45625 = (state_45659[(7)]);
var inst_45629 = cljs.core.chunk_first(inst_45625);
var inst_45630 = cljs.core.chunk_rest(inst_45625);
var inst_45631 = cljs.core.count(inst_45629);
var inst_45611 = inst_45630;
var inst_45612 = inst_45629;
var inst_45613 = inst_45631;
var inst_45614 = (0);
var state_45659__$1 = (function (){var statearr_45686 = state_45659;
(statearr_45686[(8)] = inst_45612);

(statearr_45686[(10)] = inst_45613);

(statearr_45686[(11)] = inst_45611);

(statearr_45686[(12)] = inst_45614);

return statearr_45686;
})();
var statearr_45687_46819 = state_45659__$1;
(statearr_45687_46819[(2)] = null);

(statearr_45687_46819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (3))){
var inst_45657 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45659__$1,inst_45657);
} else {
if((state_val_45660 === (12))){
var inst_45645 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
var statearr_45688_46820 = state_45659__$1;
(statearr_45688_46820[(2)] = inst_45645);

(statearr_45688_46820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (2))){
var state_45659__$1 = state_45659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45659__$1,(4),in$);
} else {
if((state_val_45660 === (23))){
var inst_45653 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
var statearr_45692_46822 = state_45659__$1;
(statearr_45692_46822[(2)] = inst_45653);

(statearr_45692_46822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (19))){
var inst_45640 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
var statearr_45693_46823 = state_45659__$1;
(statearr_45693_46823[(2)] = inst_45640);

(statearr_45693_46823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (11))){
var inst_45625 = (state_45659[(7)]);
var inst_45611 = (state_45659[(11)]);
var inst_45625__$1 = cljs.core.seq(inst_45611);
var state_45659__$1 = (function (){var statearr_45694 = state_45659;
(statearr_45694[(7)] = inst_45625__$1);

return statearr_45694;
})();
if(inst_45625__$1){
var statearr_45695_46824 = state_45659__$1;
(statearr_45695_46824[(1)] = (14));

} else {
var statearr_45696_46825 = state_45659__$1;
(statearr_45696_46825[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (9))){
var inst_45647 = (state_45659[(2)]);
var inst_45648 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45659__$1 = (function (){var statearr_45697 = state_45659;
(statearr_45697[(15)] = inst_45647);

return statearr_45697;
})();
if(cljs.core.truth_(inst_45648)){
var statearr_45698_46826 = state_45659__$1;
(statearr_45698_46826[(1)] = (21));

} else {
var statearr_45699_46827 = state_45659__$1;
(statearr_45699_46827[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (5))){
var inst_45603 = cljs.core.async.close_BANG_(out);
var state_45659__$1 = state_45659;
var statearr_45700_46828 = state_45659__$1;
(statearr_45700_46828[(2)] = inst_45603);

(statearr_45700_46828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (14))){
var inst_45625 = (state_45659[(7)]);
var inst_45627 = cljs.core.chunked_seq_QMARK_(inst_45625);
var state_45659__$1 = state_45659;
if(inst_45627){
var statearr_45701_46829 = state_45659__$1;
(statearr_45701_46829[(1)] = (17));

} else {
var statearr_45702_46831 = state_45659__$1;
(statearr_45702_46831[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (16))){
var inst_45643 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
var statearr_45703_46832 = state_45659__$1;
(statearr_45703_46832[(2)] = inst_45643);

(statearr_45703_46832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (10))){
var inst_45612 = (state_45659[(8)]);
var inst_45614 = (state_45659[(12)]);
var inst_45619 = cljs.core._nth(inst_45612,inst_45614);
var state_45659__$1 = state_45659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45659__$1,(13),out,inst_45619);
} else {
if((state_val_45660 === (18))){
var inst_45625 = (state_45659[(7)]);
var inst_45634 = cljs.core.first(inst_45625);
var state_45659__$1 = state_45659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45659__$1,(20),out,inst_45634);
} else {
if((state_val_45660 === (8))){
var inst_45613 = (state_45659[(10)]);
var inst_45614 = (state_45659[(12)]);
var inst_45616 = (inst_45614 < inst_45613);
var inst_45617 = inst_45616;
var state_45659__$1 = state_45659;
if(cljs.core.truth_(inst_45617)){
var statearr_45704_46834 = state_45659__$1;
(statearr_45704_46834[(1)] = (10));

} else {
var statearr_45705_46835 = state_45659__$1;
(statearr_45705_46835[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__42899__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42899__auto____0 = (function (){
var statearr_45706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45706[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42899__auto__);

(statearr_45706[(1)] = (1));

return statearr_45706;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42899__auto____1 = (function (state_45659){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_45659);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e45707){var ex__42902__auto__ = e45707;
var statearr_45708_46839 = state_45659;
(statearr_45708_46839[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_45659[(4)]))){
var statearr_45709_46841 = state_45659;
(statearr_45709_46841[(1)] = cljs.core.first((state_45659[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46843 = state_45659;
state_45659 = G__46843;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42899__auto__ = function(state_45659){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42899__auto____1.call(this,state_45659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42899__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42899__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_45710 = f__43109__auto__();
(statearr_45710[(6)] = c__43108__auto__);

return statearr_45710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));

return c__43108__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45712 = arguments.length;
switch (G__45712) {
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
var G__45714 = arguments.length;
switch (G__45714) {
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
var G__45724 = arguments.length;
switch (G__45724) {
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
var c__43108__auto___46852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_45758){
var state_val_45759 = (state_45758[(1)]);
if((state_val_45759 === (7))){
var inst_45753 = (state_45758[(2)]);
var state_45758__$1 = state_45758;
var statearr_45763_46853 = state_45758__$1;
(statearr_45763_46853[(2)] = inst_45753);

(statearr_45763_46853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (1))){
var inst_45732 = null;
var state_45758__$1 = (function (){var statearr_45767 = state_45758;
(statearr_45767[(7)] = inst_45732);

return statearr_45767;
})();
var statearr_45768_46854 = state_45758__$1;
(statearr_45768_46854[(2)] = null);

(statearr_45768_46854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (4))){
var inst_45738 = (state_45758[(8)]);
var inst_45738__$1 = (state_45758[(2)]);
var inst_45739 = (inst_45738__$1 == null);
var inst_45740 = cljs.core.not(inst_45739);
var state_45758__$1 = (function (){var statearr_45769 = state_45758;
(statearr_45769[(8)] = inst_45738__$1);

return statearr_45769;
})();
if(inst_45740){
var statearr_45773_46856 = state_45758__$1;
(statearr_45773_46856[(1)] = (5));

} else {
var statearr_45777_46858 = state_45758__$1;
(statearr_45777_46858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (6))){
var state_45758__$1 = state_45758;
var statearr_45778_46859 = state_45758__$1;
(statearr_45778_46859[(2)] = null);

(statearr_45778_46859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (3))){
var inst_45755 = (state_45758[(2)]);
var inst_45756 = cljs.core.async.close_BANG_(out);
var state_45758__$1 = (function (){var statearr_45780 = state_45758;
(statearr_45780[(9)] = inst_45755);

return statearr_45780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45758__$1,inst_45756);
} else {
if((state_val_45759 === (2))){
var state_45758__$1 = state_45758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45758__$1,(4),ch);
} else {
if((state_val_45759 === (11))){
var inst_45738 = (state_45758[(8)]);
var inst_45747 = (state_45758[(2)]);
var inst_45732 = inst_45738;
var state_45758__$1 = (function (){var statearr_45783 = state_45758;
(statearr_45783[(10)] = inst_45747);

(statearr_45783[(7)] = inst_45732);

return statearr_45783;
})();
var statearr_45784_46860 = state_45758__$1;
(statearr_45784_46860[(2)] = null);

(statearr_45784_46860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (9))){
var inst_45738 = (state_45758[(8)]);
var state_45758__$1 = state_45758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45758__$1,(11),out,inst_45738);
} else {
if((state_val_45759 === (5))){
var inst_45738 = (state_45758[(8)]);
var inst_45732 = (state_45758[(7)]);
var inst_45742 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45738,inst_45732);
var state_45758__$1 = state_45758;
if(inst_45742){
var statearr_45789_46861 = state_45758__$1;
(statearr_45789_46861[(1)] = (8));

} else {
var statearr_45790_46862 = state_45758__$1;
(statearr_45790_46862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (10))){
var inst_45750 = (state_45758[(2)]);
var state_45758__$1 = state_45758;
var statearr_45791_46863 = state_45758__$1;
(statearr_45791_46863[(2)] = inst_45750);

(statearr_45791_46863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (8))){
var inst_45732 = (state_45758[(7)]);
var tmp45785 = inst_45732;
var inst_45732__$1 = tmp45785;
var state_45758__$1 = (function (){var statearr_45792 = state_45758;
(statearr_45792[(7)] = inst_45732__$1);

return statearr_45792;
})();
var statearr_45793_46868 = state_45758__$1;
(statearr_45793_46868[(2)] = null);

(statearr_45793_46868[(1)] = (2));


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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_45794 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45794[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_45794[(1)] = (1));

return statearr_45794;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_45758){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_45758);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e45795){var ex__42902__auto__ = e45795;
var statearr_45796_46870 = state_45758;
(statearr_45796_46870[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_45758[(4)]))){
var statearr_45797_46871 = state_45758;
(statearr_45797_46871[(1)] = cljs.core.first((state_45758[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46872 = state_45758;
state_45758 = G__46872;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_45758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_45758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_45798 = f__43109__auto__();
(statearr_45798[(6)] = c__43108__auto___46852);

return statearr_45798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45800 = arguments.length;
switch (G__45800) {
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
var c__43108__auto___46874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_45838){
var state_val_45839 = (state_45838[(1)]);
if((state_val_45839 === (7))){
var inst_45834 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45840_46875 = state_45838__$1;
(statearr_45840_46875[(2)] = inst_45834);

(statearr_45840_46875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (1))){
var inst_45801 = (new Array(n));
var inst_45802 = inst_45801;
var inst_45803 = (0);
var state_45838__$1 = (function (){var statearr_45841 = state_45838;
(statearr_45841[(7)] = inst_45803);

(statearr_45841[(8)] = inst_45802);

return statearr_45841;
})();
var statearr_45842_46877 = state_45838__$1;
(statearr_45842_46877[(2)] = null);

(statearr_45842_46877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (4))){
var inst_45806 = (state_45838[(9)]);
var inst_45806__$1 = (state_45838[(2)]);
var inst_45807 = (inst_45806__$1 == null);
var inst_45808 = cljs.core.not(inst_45807);
var state_45838__$1 = (function (){var statearr_45846 = state_45838;
(statearr_45846[(9)] = inst_45806__$1);

return statearr_45846;
})();
if(inst_45808){
var statearr_45847_46881 = state_45838__$1;
(statearr_45847_46881[(1)] = (5));

} else {
var statearr_45848_46882 = state_45838__$1;
(statearr_45848_46882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (15))){
var inst_45828 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45849_46883 = state_45838__$1;
(statearr_45849_46883[(2)] = inst_45828);

(statearr_45849_46883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (13))){
var state_45838__$1 = state_45838;
var statearr_45850_46884 = state_45838__$1;
(statearr_45850_46884[(2)] = null);

(statearr_45850_46884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (6))){
var inst_45803 = (state_45838[(7)]);
var inst_45824 = (inst_45803 > (0));
var state_45838__$1 = state_45838;
if(cljs.core.truth_(inst_45824)){
var statearr_45851_46885 = state_45838__$1;
(statearr_45851_46885[(1)] = (12));

} else {
var statearr_45852_46887 = state_45838__$1;
(statearr_45852_46887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (3))){
var inst_45836 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45838__$1,inst_45836);
} else {
if((state_val_45839 === (12))){
var inst_45802 = (state_45838[(8)]);
var inst_45826 = cljs.core.vec(inst_45802);
var state_45838__$1 = state_45838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45838__$1,(15),out,inst_45826);
} else {
if((state_val_45839 === (2))){
var state_45838__$1 = state_45838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45838__$1,(4),ch);
} else {
if((state_val_45839 === (11))){
var inst_45818 = (state_45838[(2)]);
var inst_45819 = (new Array(n));
var inst_45802 = inst_45819;
var inst_45803 = (0);
var state_45838__$1 = (function (){var statearr_45853 = state_45838;
(statearr_45853[(10)] = inst_45818);

(statearr_45853[(7)] = inst_45803);

(statearr_45853[(8)] = inst_45802);

return statearr_45853;
})();
var statearr_45857_46891 = state_45838__$1;
(statearr_45857_46891[(2)] = null);

(statearr_45857_46891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (9))){
var inst_45802 = (state_45838[(8)]);
var inst_45816 = cljs.core.vec(inst_45802);
var state_45838__$1 = state_45838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45838__$1,(11),out,inst_45816);
} else {
if((state_val_45839 === (5))){
var inst_45806 = (state_45838[(9)]);
var inst_45811 = (state_45838[(11)]);
var inst_45803 = (state_45838[(7)]);
var inst_45802 = (state_45838[(8)]);
var inst_45810 = (inst_45802[inst_45803] = inst_45806);
var inst_45811__$1 = (inst_45803 + (1));
var inst_45812 = (inst_45811__$1 < n);
var state_45838__$1 = (function (){var statearr_45858 = state_45838;
(statearr_45858[(12)] = inst_45810);

(statearr_45858[(11)] = inst_45811__$1);

return statearr_45858;
})();
if(cljs.core.truth_(inst_45812)){
var statearr_45859_46892 = state_45838__$1;
(statearr_45859_46892[(1)] = (8));

} else {
var statearr_45860_46893 = state_45838__$1;
(statearr_45860_46893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (14))){
var inst_45831 = (state_45838[(2)]);
var inst_45832 = cljs.core.async.close_BANG_(out);
var state_45838__$1 = (function (){var statearr_45862 = state_45838;
(statearr_45862[(13)] = inst_45831);

return statearr_45862;
})();
var statearr_45863_46894 = state_45838__$1;
(statearr_45863_46894[(2)] = inst_45832);

(statearr_45863_46894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (10))){
var inst_45822 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45864_46895 = state_45838__$1;
(statearr_45864_46895[(2)] = inst_45822);

(statearr_45864_46895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (8))){
var inst_45811 = (state_45838[(11)]);
var inst_45802 = (state_45838[(8)]);
var tmp45861 = inst_45802;
var inst_45802__$1 = tmp45861;
var inst_45803 = inst_45811;
var state_45838__$1 = (function (){var statearr_45865 = state_45838;
(statearr_45865[(7)] = inst_45803);

(statearr_45865[(8)] = inst_45802__$1);

return statearr_45865;
})();
var statearr_45866_46896 = state_45838__$1;
(statearr_45866_46896[(2)] = null);

(statearr_45866_46896[(1)] = (2));


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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_45867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45867[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_45867[(1)] = (1));

return statearr_45867;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_45838){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_45838);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e45868){var ex__42902__auto__ = e45868;
var statearr_45869_46898 = state_45838;
(statearr_45869_46898[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_45838[(4)]))){
var statearr_45870_46899 = state_45838;
(statearr_45870_46899[(1)] = cljs.core.first((state_45838[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46900 = state_45838;
state_45838 = G__46900;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_45838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_45838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_45871 = f__43109__auto__();
(statearr_45871[(6)] = c__43108__auto___46874);

return statearr_45871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45876 = arguments.length;
switch (G__45876) {
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
var c__43108__auto___46903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43109__auto__ = (function (){var switch__42898__auto__ = (function (state_45930){
var state_val_45931 = (state_45930[(1)]);
if((state_val_45931 === (7))){
var inst_45926 = (state_45930[(2)]);
var state_45930__$1 = state_45930;
var statearr_45939_46905 = state_45930__$1;
(statearr_45939_46905[(2)] = inst_45926);

(statearr_45939_46905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (1))){
var inst_45882 = [];
var inst_45886 = inst_45882;
var inst_45887 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45930__$1 = (function (){var statearr_45940 = state_45930;
(statearr_45940[(7)] = inst_45887);

(statearr_45940[(8)] = inst_45886);

return statearr_45940;
})();
var statearr_45941_46906 = state_45930__$1;
(statearr_45941_46906[(2)] = null);

(statearr_45941_46906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (4))){
var inst_45890 = (state_45930[(9)]);
var inst_45890__$1 = (state_45930[(2)]);
var inst_45891 = (inst_45890__$1 == null);
var inst_45892 = cljs.core.not(inst_45891);
var state_45930__$1 = (function (){var statearr_45942 = state_45930;
(statearr_45942[(9)] = inst_45890__$1);

return statearr_45942;
})();
if(inst_45892){
var statearr_45943_46907 = state_45930__$1;
(statearr_45943_46907[(1)] = (5));

} else {
var statearr_45944_46908 = state_45930__$1;
(statearr_45944_46908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (15))){
var inst_45886 = (state_45930[(8)]);
var inst_45918 = cljs.core.vec(inst_45886);
var state_45930__$1 = state_45930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45930__$1,(18),out,inst_45918);
} else {
if((state_val_45931 === (13))){
var inst_45913 = (state_45930[(2)]);
var state_45930__$1 = state_45930;
var statearr_45945_46909 = state_45930__$1;
(statearr_45945_46909[(2)] = inst_45913);

(statearr_45945_46909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (6))){
var inst_45886 = (state_45930[(8)]);
var inst_45915 = inst_45886.length;
var inst_45916 = (inst_45915 > (0));
var state_45930__$1 = state_45930;
if(cljs.core.truth_(inst_45916)){
var statearr_45946_46914 = state_45930__$1;
(statearr_45946_46914[(1)] = (15));

} else {
var statearr_45950_46915 = state_45930__$1;
(statearr_45950_46915[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (17))){
var inst_45923 = (state_45930[(2)]);
var inst_45924 = cljs.core.async.close_BANG_(out);
var state_45930__$1 = (function (){var statearr_45951 = state_45930;
(statearr_45951[(10)] = inst_45923);

return statearr_45951;
})();
var statearr_45952_46916 = state_45930__$1;
(statearr_45952_46916[(2)] = inst_45924);

(statearr_45952_46916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (3))){
var inst_45928 = (state_45930[(2)]);
var state_45930__$1 = state_45930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45930__$1,inst_45928);
} else {
if((state_val_45931 === (12))){
var inst_45886 = (state_45930[(8)]);
var inst_45905 = cljs.core.vec(inst_45886);
var state_45930__$1 = state_45930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45930__$1,(14),out,inst_45905);
} else {
if((state_val_45931 === (2))){
var state_45930__$1 = state_45930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45930__$1,(4),ch);
} else {
if((state_val_45931 === (11))){
var inst_45886 = (state_45930[(8)]);
var inst_45894 = (state_45930[(11)]);
var inst_45890 = (state_45930[(9)]);
var inst_45902 = inst_45886.push(inst_45890);
var tmp45954 = inst_45886;
var inst_45886__$1 = tmp45954;
var inst_45887 = inst_45894;
var state_45930__$1 = (function (){var statearr_45959 = state_45930;
(statearr_45959[(12)] = inst_45902);

(statearr_45959[(7)] = inst_45887);

(statearr_45959[(8)] = inst_45886__$1);

return statearr_45959;
})();
var statearr_45960_46921 = state_45930__$1;
(statearr_45960_46921[(2)] = null);

(statearr_45960_46921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (9))){
var inst_45887 = (state_45930[(7)]);
var inst_45898 = cljs.core.keyword_identical_QMARK_(inst_45887,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45930__$1 = state_45930;
var statearr_45961_46922 = state_45930__$1;
(statearr_45961_46922[(2)] = inst_45898);

(statearr_45961_46922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (5))){
var inst_45887 = (state_45930[(7)]);
var inst_45895 = (state_45930[(13)]);
var inst_45894 = (state_45930[(11)]);
var inst_45890 = (state_45930[(9)]);
var inst_45894__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45890) : f.call(null,inst_45890));
var inst_45895__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45894__$1,inst_45887);
var state_45930__$1 = (function (){var statearr_45965 = state_45930;
(statearr_45965[(13)] = inst_45895__$1);

(statearr_45965[(11)] = inst_45894__$1);

return statearr_45965;
})();
if(inst_45895__$1){
var statearr_45966_46927 = state_45930__$1;
(statearr_45966_46927[(1)] = (8));

} else {
var statearr_45967_46928 = state_45930__$1;
(statearr_45967_46928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (14))){
var inst_45894 = (state_45930[(11)]);
var inst_45890 = (state_45930[(9)]);
var inst_45907 = (state_45930[(2)]);
var inst_45909 = [];
var inst_45910 = inst_45909.push(inst_45890);
var inst_45886 = inst_45909;
var inst_45887 = inst_45894;
var state_45930__$1 = (function (){var statearr_45971 = state_45930;
(statearr_45971[(14)] = inst_45907);

(statearr_45971[(7)] = inst_45887);

(statearr_45971[(8)] = inst_45886);

(statearr_45971[(15)] = inst_45910);

return statearr_45971;
})();
var statearr_45972_46929 = state_45930__$1;
(statearr_45972_46929[(2)] = null);

(statearr_45972_46929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (16))){
var state_45930__$1 = state_45930;
var statearr_45979_46930 = state_45930__$1;
(statearr_45979_46930[(2)] = null);

(statearr_45979_46930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (10))){
var inst_45900 = (state_45930[(2)]);
var state_45930__$1 = state_45930;
if(cljs.core.truth_(inst_45900)){
var statearr_45980_46932 = state_45930__$1;
(statearr_45980_46932[(1)] = (11));

} else {
var statearr_45981_46936 = state_45930__$1;
(statearr_45981_46936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (18))){
var inst_45920 = (state_45930[(2)]);
var state_45930__$1 = state_45930;
var statearr_45984_46937 = state_45930__$1;
(statearr_45984_46937[(2)] = inst_45920);

(statearr_45984_46937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45931 === (8))){
var inst_45895 = (state_45930[(13)]);
var state_45930__$1 = state_45930;
var statearr_45986_46938 = state_45930__$1;
(statearr_45986_46938[(2)] = inst_45895);

(statearr_45986_46938[(1)] = (10));


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
var cljs$core$async$state_machine__42899__auto__ = null;
var cljs$core$async$state_machine__42899__auto____0 = (function (){
var statearr_45988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45988[(0)] = cljs$core$async$state_machine__42899__auto__);

(statearr_45988[(1)] = (1));

return statearr_45988;
});
var cljs$core$async$state_machine__42899__auto____1 = (function (state_45930){
while(true){
var ret_value__42900__auto__ = (function (){try{while(true){
var result__42901__auto__ = switch__42898__auto__(state_45930);
if(cljs.core.keyword_identical_QMARK_(result__42901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42901__auto__;
}
break;
}
}catch (e45992){var ex__42902__auto__ = e45992;
var statearr_45993_46942 = state_45930;
(statearr_45993_46942[(2)] = ex__42902__auto__);


if(cljs.core.seq((state_45930[(4)]))){
var statearr_45997_46943 = state_45930;
(statearr_45997_46943[(1)] = cljs.core.first((state_45930[(4)])));

} else {
throw ex__42902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46944 = state_45930;
state_45930 = G__46944;
continue;
} else {
return ret_value__42900__auto__;
}
break;
}
});
cljs$core$async$state_machine__42899__auto__ = function(state_45930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42899__auto____1.call(this,state_45930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42899__auto____0;
cljs$core$async$state_machine__42899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42899__auto____1;
return cljs$core$async$state_machine__42899__auto__;
})()
})();
var state__43110__auto__ = (function (){var statearr_45998 = f__43109__auto__();
(statearr_45998[(6)] = c__43108__auto___46903);

return statearr_45998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43110__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
