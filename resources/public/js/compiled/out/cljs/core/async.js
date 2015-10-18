// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t31168 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31168 = (function (f,fn_handler,meta31169){
this.f = f;
this.fn_handler = fn_handler;
this.meta31169 = meta31169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31168.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31170){
var self__ = this;
var _31170__$1 = this;
return self__.meta31169;
});

cljs.core.async.t31168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31170,meta31169__$1){
var self__ = this;
var _31170__$1 = this;
return (new cljs.core.async.t31168(self__.f,self__.fn_handler,meta31169__$1));
});

cljs.core.async.t31168.cljs$lang$type = true;

cljs.core.async.t31168.cljs$lang$ctorStr = "cljs.core.async/t31168";

cljs.core.async.t31168.cljs$lang$ctorPrWriter = (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t31168");
});

cljs.core.async.__GT_t31168 = (function cljs$core$async$fn_handler_$___GT_t31168(f__$1,fn_handler__$1,meta31169){
return (new cljs.core.async.t31168(f__$1,fn_handler__$1,meta31169));
});

}

return (new cljs.core.async.t31168(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__31172 = buff;
if(G__31172){
var bit__23423__auto__ = null;
if(cljs.core.truth_((function (){var or__22749__auto__ = bit__23423__auto__;
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
return G__31172.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31172.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31172);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31172);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__31174 = arguments.length;
switch (G__31174) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__31177 = arguments.length;
switch (G__31177) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31179 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31179);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31179,ret){
return (function (){
return fn1.call(null,val_31179);
});})(val_31179,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__31181 = arguments.length;
switch (G__31181) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__23634__auto___31183 = n;
var x_31184 = (0);
while(true){
if((x_31184 < n__23634__auto___31183)){
(a[x_31184] = (0));

var G__31185 = (x_31184 + (1));
x_31184 = G__31185;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31186 = (i + (1));
i = G__31186;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31190 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31190 = (function (flag,alt_flag,meta31191){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31191 = meta31191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31190.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31192){
var self__ = this;
var _31192__$1 = this;
return self__.meta31191;
});})(flag))
;

cljs.core.async.t31190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31192,meta31191__$1){
var self__ = this;
var _31192__$1 = this;
return (new cljs.core.async.t31190(self__.flag,self__.alt_flag,meta31191__$1));
});})(flag))
;

cljs.core.async.t31190.cljs$lang$type = true;

cljs.core.async.t31190.cljs$lang$ctorStr = "cljs.core.async/t31190";

cljs.core.async.t31190.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t31190");
});})(flag))
;

cljs.core.async.__GT_t31190 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t31190(flag__$1,alt_flag__$1,meta31191){
return (new cljs.core.async.t31190(flag__$1,alt_flag__$1,meta31191));
});})(flag))
;

}

return (new cljs.core.async.t31190(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t31196 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31196 = (function (cb,flag,alt_handler,meta31197){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31197 = meta31197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31196.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31198){
var self__ = this;
var _31198__$1 = this;
return self__.meta31197;
});

cljs.core.async.t31196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31198,meta31197__$1){
var self__ = this;
var _31198__$1 = this;
return (new cljs.core.async.t31196(self__.cb,self__.flag,self__.alt_handler,meta31197__$1));
});

cljs.core.async.t31196.cljs$lang$type = true;

cljs.core.async.t31196.cljs$lang$ctorStr = "cljs.core.async/t31196";

cljs.core.async.t31196.cljs$lang$ctorPrWriter = (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t31196");
});

cljs.core.async.__GT_t31196 = (function cljs$core$async$alt_handler_$___GT_t31196(cb__$1,flag__$1,alt_handler__$1,meta31197){
return (new cljs.core.async.t31196(cb__$1,flag__$1,alt_handler__$1,meta31197));
});

}

return (new cljs.core.async.t31196(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31199_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31199_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31200_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31200_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22749__auto__ = wport;
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31201 = (i + (1));
i = G__31201;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22749__auto__ = ret;
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__22737__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22737__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22737__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__23789__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23789__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31204){
var map__31205 = p__31204;
var map__31205__$1 = ((cljs.core.seq_QMARK_.call(null,map__31205))?cljs.core.apply.call(null,cljs.core.hash_map,map__31205):map__31205);
var opts = map__31205__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31202){
var G__31203 = cljs.core.first.call(null,seq31202);
var seq31202__$1 = cljs.core.next.call(null,seq31202);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31203,seq31202__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__31207 = arguments.length;
switch (G__31207) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26838__auto___31256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___31256){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___31256){
return (function (state_31231){
var state_val_31232 = (state_31231[(1)]);
if((state_val_31232 === (7))){
var inst_31227 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31233_31257 = state_31231__$1;
(statearr_31233_31257[(2)] = inst_31227);

(statearr_31233_31257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (1))){
var state_31231__$1 = state_31231;
var statearr_31234_31258 = state_31231__$1;
(statearr_31234_31258[(2)] = null);

(statearr_31234_31258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (4))){
var inst_31210 = (state_31231[(7)]);
var inst_31210__$1 = (state_31231[(2)]);
var inst_31211 = (inst_31210__$1 == null);
var state_31231__$1 = (function (){var statearr_31235 = state_31231;
(statearr_31235[(7)] = inst_31210__$1);

return statearr_31235;
})();
if(cljs.core.truth_(inst_31211)){
var statearr_31236_31259 = state_31231__$1;
(statearr_31236_31259[(1)] = (5));

} else {
var statearr_31237_31260 = state_31231__$1;
(statearr_31237_31260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (13))){
var state_31231__$1 = state_31231;
var statearr_31238_31261 = state_31231__$1;
(statearr_31238_31261[(2)] = null);

(statearr_31238_31261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (6))){
var inst_31210 = (state_31231[(7)]);
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31231__$1,(11),to,inst_31210);
} else {
if((state_val_31232 === (3))){
var inst_31229 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31231__$1,inst_31229);
} else {
if((state_val_31232 === (12))){
var state_31231__$1 = state_31231;
var statearr_31239_31262 = state_31231__$1;
(statearr_31239_31262[(2)] = null);

(statearr_31239_31262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (2))){
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31231__$1,(4),from);
} else {
if((state_val_31232 === (11))){
var inst_31220 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
if(cljs.core.truth_(inst_31220)){
var statearr_31240_31263 = state_31231__$1;
(statearr_31240_31263[(1)] = (12));

} else {
var statearr_31241_31264 = state_31231__$1;
(statearr_31241_31264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (9))){
var state_31231__$1 = state_31231;
var statearr_31242_31265 = state_31231__$1;
(statearr_31242_31265[(2)] = null);

(statearr_31242_31265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (5))){
var state_31231__$1 = state_31231;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31243_31266 = state_31231__$1;
(statearr_31243_31266[(1)] = (8));

} else {
var statearr_31244_31267 = state_31231__$1;
(statearr_31244_31267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (14))){
var inst_31225 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31245_31268 = state_31231__$1;
(statearr_31245_31268[(2)] = inst_31225);

(statearr_31245_31268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (10))){
var inst_31217 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31246_31269 = state_31231__$1;
(statearr_31246_31269[(2)] = inst_31217);

(statearr_31246_31269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (8))){
var inst_31214 = cljs.core.async.close_BANG_.call(null,to);
var state_31231__$1 = state_31231;
var statearr_31247_31270 = state_31231__$1;
(statearr_31247_31270[(2)] = inst_31214);

(statearr_31247_31270[(1)] = (10));


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
});})(c__26838__auto___31256))
;
return ((function (switch__26776__auto__,c__26838__auto___31256){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_31251 = [null,null,null,null,null,null,null,null];
(statearr_31251[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_31251[(1)] = (1));

return statearr_31251;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_31231){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31252){if((e31252 instanceof Object)){
var ex__26780__auto__ = e31252;
var statearr_31253_31271 = state_31231;
(statearr_31253_31271[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31272 = state_31231;
state_31231 = G__31272;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_31231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_31231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___31256))
})();
var state__26840__auto__ = (function (){var statearr_31254 = f__26839__auto__.call(null);
(statearr_31254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___31256);

return statearr_31254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___31256))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31456){
var vec__31457 = p__31456;
var v = cljs.core.nth.call(null,vec__31457,(0),null);
var p = cljs.core.nth.call(null,vec__31457,(1),null);
var job = vec__31457;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26838__auto___31639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___31639,res,vec__31457,v,p,job,jobs,results){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___31639,res,vec__31457,v,p,job,jobs,results){
return (function (state_31462){
var state_val_31463 = (state_31462[(1)]);
if((state_val_31463 === (2))){
var inst_31459 = (state_31462[(2)]);
var inst_31460 = cljs.core.async.close_BANG_.call(null,res);
var state_31462__$1 = (function (){var statearr_31464 = state_31462;
(statearr_31464[(7)] = inst_31459);

return statearr_31464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31462__$1,inst_31460);
} else {
if((state_val_31463 === (1))){
var state_31462__$1 = state_31462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31462__$1,(2),res,v);
} else {
return null;
}
}
});})(c__26838__auto___31639,res,vec__31457,v,p,job,jobs,results))
;
return ((function (switch__26776__auto__,c__26838__auto___31639,res,vec__31457,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0 = (function (){
var statearr_31468 = [null,null,null,null,null,null,null,null];
(statearr_31468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__);

(statearr_31468[(1)] = (1));

return statearr_31468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1 = (function (state_31462){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31469){if((e31469 instanceof Object)){
var ex__26780__auto__ = e31469;
var statearr_31470_31640 = state_31462;
(statearr_31470_31640[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31641 = state_31462;
state_31462 = G__31641;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = function(state_31462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1.call(this,state_31462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___31639,res,vec__31457,v,p,job,jobs,results))
})();
var state__26840__auto__ = (function (){var statearr_31471 = f__26839__auto__.call(null);
(statearr_31471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___31639);

return statearr_31471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___31639,res,vec__31457,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31472){
var vec__31473 = p__31472;
var v = cljs.core.nth.call(null,vec__31473,(0),null);
var p = cljs.core.nth.call(null,vec__31473,(1),null);
var job = vec__31473;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__23634__auto___31642 = n;
var __31643 = (0);
while(true){
if((__31643 < n__23634__auto___31642)){
var G__31474_31644 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31474_31644) {
case "async":
var c__26838__auto___31646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31643,c__26838__auto___31646,G__31474_31644,n__23634__auto___31642,jobs,results,process,async){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (__31643,c__26838__auto___31646,G__31474_31644,n__23634__auto___31642,jobs,results,process,async){
return (function (state_31487){
var state_val_31488 = (state_31487[(1)]);
if((state_val_31488 === (7))){
var inst_31483 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31489_31647 = state_31487__$1;
(statearr_31489_31647[(2)] = inst_31483);

(statearr_31489_31647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (6))){
var state_31487__$1 = state_31487;
var statearr_31490_31648 = state_31487__$1;
(statearr_31490_31648[(2)] = null);

(statearr_31490_31648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (5))){
var state_31487__$1 = state_31487;
var statearr_31491_31649 = state_31487__$1;
(statearr_31491_31649[(2)] = null);

(statearr_31491_31649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (4))){
var inst_31477 = (state_31487[(2)]);
var inst_31478 = async.call(null,inst_31477);
var state_31487__$1 = state_31487;
if(cljs.core.truth_(inst_31478)){
var statearr_31492_31650 = state_31487__$1;
(statearr_31492_31650[(1)] = (5));

} else {
var statearr_31493_31651 = state_31487__$1;
(statearr_31493_31651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (3))){
var inst_31485 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31487__$1,inst_31485);
} else {
if((state_val_31488 === (2))){
var state_31487__$1 = state_31487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31487__$1,(4),jobs);
} else {
if((state_val_31488 === (1))){
var state_31487__$1 = state_31487;
var statearr_31494_31652 = state_31487__$1;
(statearr_31494_31652[(2)] = null);

(statearr_31494_31652[(1)] = (2));


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
});})(__31643,c__26838__auto___31646,G__31474_31644,n__23634__auto___31642,jobs,results,process,async))
;
return ((function (__31643,switch__26776__auto__,c__26838__auto___31646,G__31474_31644,n__23634__auto___31642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0 = (function (){
var statearr_31498 = [null,null,null,null,null,null,null];
(statearr_31498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__);

(statearr_31498[(1)] = (1));

return statearr_31498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1 = (function (state_31487){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31499){if((e31499 instanceof Object)){
var ex__26780__auto__ = e31499;
var statearr_31500_31653 = state_31487;
(statearr_31500_31653[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31654 = state_31487;
state_31487 = G__31654;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = function(state_31487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1.call(this,state_31487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__;
})()
;})(__31643,switch__26776__auto__,c__26838__auto___31646,G__31474_31644,n__23634__auto___31642,jobs,results,process,async))
})();
var state__26840__auto__ = (function (){var statearr_31501 = f__26839__auto__.call(null);
(statearr_31501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___31646);

return statearr_31501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(__31643,c__26838__auto___31646,G__31474_31644,n__23634__auto___31642,jobs,results,process,async))
);


break;
case "compute":
var c__26838__auto___31655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31643,c__26838__auto___31655,G__31474_31644,n__23634__auto___31642,jobs,results,process,async){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (__31643,c__26838__auto___31655,G__31474_31644,n__23634__auto___31642,jobs,results,process,async){
return (function (state_31514){
var state_val_31515 = (state_31514[(1)]);
if((state_val_31515 === (7))){
var inst_31510 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31516_31656 = state_31514__$1;
(statearr_31516_31656[(2)] = inst_31510);

(statearr_31516_31656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (6))){
var state_31514__$1 = state_31514;
var statearr_31517_31657 = state_31514__$1;
(statearr_31517_31657[(2)] = null);

(statearr_31517_31657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (5))){
var state_31514__$1 = state_31514;
var statearr_31518_31658 = state_31514__$1;
(statearr_31518_31658[(2)] = null);

(statearr_31518_31658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (4))){
var inst_31504 = (state_31514[(2)]);
var inst_31505 = process.call(null,inst_31504);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31505)){
var statearr_31519_31659 = state_31514__$1;
(statearr_31519_31659[(1)] = (5));

} else {
var statearr_31520_31660 = state_31514__$1;
(statearr_31520_31660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (3))){
var inst_31512 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31514__$1,inst_31512);
} else {
if((state_val_31515 === (2))){
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(4),jobs);
} else {
if((state_val_31515 === (1))){
var state_31514__$1 = state_31514;
var statearr_31521_31661 = state_31514__$1;
(statearr_31521_31661[(2)] = null);

(statearr_31521_31661[(1)] = (2));


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
});})(__31643,c__26838__auto___31655,G__31474_31644,n__23634__auto___31642,jobs,results,process,async))
;
return ((function (__31643,switch__26776__auto__,c__26838__auto___31655,G__31474_31644,n__23634__auto___31642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0 = (function (){
var statearr_31525 = [null,null,null,null,null,null,null];
(statearr_31525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__);

(statearr_31525[(1)] = (1));

return statearr_31525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1 = (function (state_31514){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31526){if((e31526 instanceof Object)){
var ex__26780__auto__ = e31526;
var statearr_31527_31662 = state_31514;
(statearr_31527_31662[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31663 = state_31514;
state_31514 = G__31663;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = function(state_31514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1.call(this,state_31514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__;
})()
;})(__31643,switch__26776__auto__,c__26838__auto___31655,G__31474_31644,n__23634__auto___31642,jobs,results,process,async))
})();
var state__26840__auto__ = (function (){var statearr_31528 = f__26839__auto__.call(null);
(statearr_31528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___31655);

return statearr_31528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(__31643,c__26838__auto___31655,G__31474_31644,n__23634__auto___31642,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31664 = (__31643 + (1));
__31643 = G__31664;
continue;
} else {
}
break;
}

var c__26838__auto___31665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___31665,jobs,results,process,async){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___31665,jobs,results,process,async){
return (function (state_31550){
var state_val_31551 = (state_31550[(1)]);
if((state_val_31551 === (9))){
var inst_31543 = (state_31550[(2)]);
var state_31550__$1 = (function (){var statearr_31552 = state_31550;
(statearr_31552[(7)] = inst_31543);

return statearr_31552;
})();
var statearr_31553_31666 = state_31550__$1;
(statearr_31553_31666[(2)] = null);

(statearr_31553_31666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (8))){
var inst_31536 = (state_31550[(8)]);
var inst_31541 = (state_31550[(2)]);
var state_31550__$1 = (function (){var statearr_31554 = state_31550;
(statearr_31554[(9)] = inst_31541);

return statearr_31554;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31550__$1,(9),results,inst_31536);
} else {
if((state_val_31551 === (7))){
var inst_31546 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31555_31667 = state_31550__$1;
(statearr_31555_31667[(2)] = inst_31546);

(statearr_31555_31667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (6))){
var inst_31531 = (state_31550[(10)]);
var inst_31536 = (state_31550[(8)]);
var inst_31536__$1 = cljs.core.async.chan.call(null,(1));
var inst_31537 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31538 = [inst_31531,inst_31536__$1];
var inst_31539 = (new cljs.core.PersistentVector(null,2,(5),inst_31537,inst_31538,null));
var state_31550__$1 = (function (){var statearr_31556 = state_31550;
(statearr_31556[(8)] = inst_31536__$1);

return statearr_31556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31550__$1,(8),jobs,inst_31539);
} else {
if((state_val_31551 === (5))){
var inst_31534 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31550__$1 = state_31550;
var statearr_31557_31668 = state_31550__$1;
(statearr_31557_31668[(2)] = inst_31534);

(statearr_31557_31668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (4))){
var inst_31531 = (state_31550[(10)]);
var inst_31531__$1 = (state_31550[(2)]);
var inst_31532 = (inst_31531__$1 == null);
var state_31550__$1 = (function (){var statearr_31558 = state_31550;
(statearr_31558[(10)] = inst_31531__$1);

return statearr_31558;
})();
if(cljs.core.truth_(inst_31532)){
var statearr_31559_31669 = state_31550__$1;
(statearr_31559_31669[(1)] = (5));

} else {
var statearr_31560_31670 = state_31550__$1;
(statearr_31560_31670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (3))){
var inst_31548 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31550__$1,inst_31548);
} else {
if((state_val_31551 === (2))){
var state_31550__$1 = state_31550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31550__$1,(4),from);
} else {
if((state_val_31551 === (1))){
var state_31550__$1 = state_31550;
var statearr_31561_31671 = state_31550__$1;
(statearr_31561_31671[(2)] = null);

(statearr_31561_31671[(1)] = (2));


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
});})(c__26838__auto___31665,jobs,results,process,async))
;
return ((function (switch__26776__auto__,c__26838__auto___31665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0 = (function (){
var statearr_31565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__);

(statearr_31565[(1)] = (1));

return statearr_31565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1 = (function (state_31550){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31566){if((e31566 instanceof Object)){
var ex__26780__auto__ = e31566;
var statearr_31567_31672 = state_31550;
(statearr_31567_31672[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31673 = state_31550;
state_31550 = G__31673;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = function(state_31550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1.call(this,state_31550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___31665,jobs,results,process,async))
})();
var state__26840__auto__ = (function (){var statearr_31568 = f__26839__auto__.call(null);
(statearr_31568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___31665);

return statearr_31568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___31665,jobs,results,process,async))
);


var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__,jobs,results,process,async){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__,jobs,results,process,async){
return (function (state_31606){
var state_val_31607 = (state_31606[(1)]);
if((state_val_31607 === (7))){
var inst_31602 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31608_31674 = state_31606__$1;
(statearr_31608_31674[(2)] = inst_31602);

(statearr_31608_31674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (20))){
var state_31606__$1 = state_31606;
var statearr_31609_31675 = state_31606__$1;
(statearr_31609_31675[(2)] = null);

(statearr_31609_31675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (1))){
var state_31606__$1 = state_31606;
var statearr_31610_31676 = state_31606__$1;
(statearr_31610_31676[(2)] = null);

(statearr_31610_31676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (4))){
var inst_31571 = (state_31606[(7)]);
var inst_31571__$1 = (state_31606[(2)]);
var inst_31572 = (inst_31571__$1 == null);
var state_31606__$1 = (function (){var statearr_31611 = state_31606;
(statearr_31611[(7)] = inst_31571__$1);

return statearr_31611;
})();
if(cljs.core.truth_(inst_31572)){
var statearr_31612_31677 = state_31606__$1;
(statearr_31612_31677[(1)] = (5));

} else {
var statearr_31613_31678 = state_31606__$1;
(statearr_31613_31678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (15))){
var inst_31584 = (state_31606[(8)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31606__$1,(18),to,inst_31584);
} else {
if((state_val_31607 === (21))){
var inst_31597 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31614_31679 = state_31606__$1;
(statearr_31614_31679[(2)] = inst_31597);

(statearr_31614_31679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (13))){
var inst_31599 = (state_31606[(2)]);
var state_31606__$1 = (function (){var statearr_31615 = state_31606;
(statearr_31615[(9)] = inst_31599);

return statearr_31615;
})();
var statearr_31616_31680 = state_31606__$1;
(statearr_31616_31680[(2)] = null);

(statearr_31616_31680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (6))){
var inst_31571 = (state_31606[(7)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31606__$1,(11),inst_31571);
} else {
if((state_val_31607 === (17))){
var inst_31592 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
if(cljs.core.truth_(inst_31592)){
var statearr_31617_31681 = state_31606__$1;
(statearr_31617_31681[(1)] = (19));

} else {
var statearr_31618_31682 = state_31606__$1;
(statearr_31618_31682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (3))){
var inst_31604 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31606__$1,inst_31604);
} else {
if((state_val_31607 === (12))){
var inst_31581 = (state_31606[(10)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31606__$1,(14),inst_31581);
} else {
if((state_val_31607 === (2))){
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31606__$1,(4),results);
} else {
if((state_val_31607 === (19))){
var state_31606__$1 = state_31606;
var statearr_31619_31683 = state_31606__$1;
(statearr_31619_31683[(2)] = null);

(statearr_31619_31683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (11))){
var inst_31581 = (state_31606[(2)]);
var state_31606__$1 = (function (){var statearr_31620 = state_31606;
(statearr_31620[(10)] = inst_31581);

return statearr_31620;
})();
var statearr_31621_31684 = state_31606__$1;
(statearr_31621_31684[(2)] = null);

(statearr_31621_31684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (9))){
var state_31606__$1 = state_31606;
var statearr_31622_31685 = state_31606__$1;
(statearr_31622_31685[(2)] = null);

(statearr_31622_31685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (5))){
var state_31606__$1 = state_31606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31623_31686 = state_31606__$1;
(statearr_31623_31686[(1)] = (8));

} else {
var statearr_31624_31687 = state_31606__$1;
(statearr_31624_31687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (14))){
var inst_31586 = (state_31606[(11)]);
var inst_31584 = (state_31606[(8)]);
var inst_31584__$1 = (state_31606[(2)]);
var inst_31585 = (inst_31584__$1 == null);
var inst_31586__$1 = cljs.core.not.call(null,inst_31585);
var state_31606__$1 = (function (){var statearr_31625 = state_31606;
(statearr_31625[(11)] = inst_31586__$1);

(statearr_31625[(8)] = inst_31584__$1);

return statearr_31625;
})();
if(inst_31586__$1){
var statearr_31626_31688 = state_31606__$1;
(statearr_31626_31688[(1)] = (15));

} else {
var statearr_31627_31689 = state_31606__$1;
(statearr_31627_31689[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (16))){
var inst_31586 = (state_31606[(11)]);
var state_31606__$1 = state_31606;
var statearr_31628_31690 = state_31606__$1;
(statearr_31628_31690[(2)] = inst_31586);

(statearr_31628_31690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (10))){
var inst_31578 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31629_31691 = state_31606__$1;
(statearr_31629_31691[(2)] = inst_31578);

(statearr_31629_31691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (18))){
var inst_31589 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31630_31692 = state_31606__$1;
(statearr_31630_31692[(2)] = inst_31589);

(statearr_31630_31692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (8))){
var inst_31575 = cljs.core.async.close_BANG_.call(null,to);
var state_31606__$1 = state_31606;
var statearr_31631_31693 = state_31606__$1;
(statearr_31631_31693[(2)] = inst_31575);

(statearr_31631_31693[(1)] = (10));


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
});})(c__26838__auto__,jobs,results,process,async))
;
return ((function (switch__26776__auto__,c__26838__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0 = (function (){
var statearr_31635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__);

(statearr_31635[(1)] = (1));

return statearr_31635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1 = (function (state_31606){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31636){if((e31636 instanceof Object)){
var ex__26780__auto__ = e31636;
var statearr_31637_31694 = state_31606;
(statearr_31637_31694[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31695 = state_31606;
state_31606 = G__31695;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__ = function(state_31606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1.call(this,state_31606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__,jobs,results,process,async))
})();
var state__26840__auto__ = (function (){var statearr_31638 = f__26839__auto__.call(null);
(statearr_31638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_31638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__,jobs,results,process,async))
);

return c__26838__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__31697 = arguments.length;
switch (G__31697) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__31700 = arguments.length;
switch (G__31700) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__31703 = arguments.length;
switch (G__31703) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26838__auto___31755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___31755,tc,fc){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___31755,tc,fc){
return (function (state_31729){
var state_val_31730 = (state_31729[(1)]);
if((state_val_31730 === (7))){
var inst_31725 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31731_31756 = state_31729__$1;
(statearr_31731_31756[(2)] = inst_31725);

(statearr_31731_31756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (1))){
var state_31729__$1 = state_31729;
var statearr_31732_31757 = state_31729__$1;
(statearr_31732_31757[(2)] = null);

(statearr_31732_31757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (4))){
var inst_31706 = (state_31729[(7)]);
var inst_31706__$1 = (state_31729[(2)]);
var inst_31707 = (inst_31706__$1 == null);
var state_31729__$1 = (function (){var statearr_31733 = state_31729;
(statearr_31733[(7)] = inst_31706__$1);

return statearr_31733;
})();
if(cljs.core.truth_(inst_31707)){
var statearr_31734_31758 = state_31729__$1;
(statearr_31734_31758[(1)] = (5));

} else {
var statearr_31735_31759 = state_31729__$1;
(statearr_31735_31759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (13))){
var state_31729__$1 = state_31729;
var statearr_31736_31760 = state_31729__$1;
(statearr_31736_31760[(2)] = null);

(statearr_31736_31760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (6))){
var inst_31706 = (state_31729[(7)]);
var inst_31712 = p.call(null,inst_31706);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31712)){
var statearr_31737_31761 = state_31729__$1;
(statearr_31737_31761[(1)] = (9));

} else {
var statearr_31738_31762 = state_31729__$1;
(statearr_31738_31762[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (3))){
var inst_31727 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31729__$1,inst_31727);
} else {
if((state_val_31730 === (12))){
var state_31729__$1 = state_31729;
var statearr_31739_31763 = state_31729__$1;
(statearr_31739_31763[(2)] = null);

(statearr_31739_31763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (2))){
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31729__$1,(4),ch);
} else {
if((state_val_31730 === (11))){
var inst_31706 = (state_31729[(7)]);
var inst_31716 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31729__$1,(8),inst_31716,inst_31706);
} else {
if((state_val_31730 === (9))){
var state_31729__$1 = state_31729;
var statearr_31740_31764 = state_31729__$1;
(statearr_31740_31764[(2)] = tc);

(statearr_31740_31764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (5))){
var inst_31709 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31710 = cljs.core.async.close_BANG_.call(null,fc);
var state_31729__$1 = (function (){var statearr_31741 = state_31729;
(statearr_31741[(8)] = inst_31709);

return statearr_31741;
})();
var statearr_31742_31765 = state_31729__$1;
(statearr_31742_31765[(2)] = inst_31710);

(statearr_31742_31765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (14))){
var inst_31723 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31743_31766 = state_31729__$1;
(statearr_31743_31766[(2)] = inst_31723);

(statearr_31743_31766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (10))){
var state_31729__$1 = state_31729;
var statearr_31744_31767 = state_31729__$1;
(statearr_31744_31767[(2)] = fc);

(statearr_31744_31767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (8))){
var inst_31718 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31718)){
var statearr_31745_31768 = state_31729__$1;
(statearr_31745_31768[(1)] = (12));

} else {
var statearr_31746_31769 = state_31729__$1;
(statearr_31746_31769[(1)] = (13));

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
});})(c__26838__auto___31755,tc,fc))
;
return ((function (switch__26776__auto__,c__26838__auto___31755,tc,fc){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_31750 = [null,null,null,null,null,null,null,null,null];
(statearr_31750[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_31750[(1)] = (1));

return statearr_31750;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_31729){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31751){if((e31751 instanceof Object)){
var ex__26780__auto__ = e31751;
var statearr_31752_31770 = state_31729;
(statearr_31752_31770[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31771 = state_31729;
state_31729 = G__31771;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_31729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_31729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___31755,tc,fc))
})();
var state__26840__auto__ = (function (){var statearr_31753 = f__26839__auto__.call(null);
(statearr_31753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___31755);

return statearr_31753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___31755,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__){
return (function (state_31818){
var state_val_31819 = (state_31818[(1)]);
if((state_val_31819 === (7))){
var inst_31814 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31820_31836 = state_31818__$1;
(statearr_31820_31836[(2)] = inst_31814);

(statearr_31820_31836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (6))){
var inst_31807 = (state_31818[(7)]);
var inst_31804 = (state_31818[(8)]);
var inst_31811 = f.call(null,inst_31804,inst_31807);
var inst_31804__$1 = inst_31811;
var state_31818__$1 = (function (){var statearr_31821 = state_31818;
(statearr_31821[(8)] = inst_31804__$1);

return statearr_31821;
})();
var statearr_31822_31837 = state_31818__$1;
(statearr_31822_31837[(2)] = null);

(statearr_31822_31837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (5))){
var inst_31804 = (state_31818[(8)]);
var state_31818__$1 = state_31818;
var statearr_31823_31838 = state_31818__$1;
(statearr_31823_31838[(2)] = inst_31804);

(statearr_31823_31838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (4))){
var inst_31807 = (state_31818[(7)]);
var inst_31807__$1 = (state_31818[(2)]);
var inst_31808 = (inst_31807__$1 == null);
var state_31818__$1 = (function (){var statearr_31824 = state_31818;
(statearr_31824[(7)] = inst_31807__$1);

return statearr_31824;
})();
if(cljs.core.truth_(inst_31808)){
var statearr_31825_31839 = state_31818__$1;
(statearr_31825_31839[(1)] = (5));

} else {
var statearr_31826_31840 = state_31818__$1;
(statearr_31826_31840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (3))){
var inst_31816 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31818__$1,inst_31816);
} else {
if((state_val_31819 === (2))){
var state_31818__$1 = state_31818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31818__$1,(4),ch);
} else {
if((state_val_31819 === (1))){
var inst_31804 = init;
var state_31818__$1 = (function (){var statearr_31827 = state_31818;
(statearr_31827[(8)] = inst_31804);

return statearr_31827;
})();
var statearr_31828_31841 = state_31818__$1;
(statearr_31828_31841[(2)] = null);

(statearr_31828_31841[(1)] = (2));


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
});})(c__26838__auto__))
;
return ((function (switch__26776__auto__,c__26838__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26777__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26777__auto____0 = (function (){
var statearr_31832 = [null,null,null,null,null,null,null,null,null];
(statearr_31832[(0)] = cljs$core$async$reduce_$_state_machine__26777__auto__);

(statearr_31832[(1)] = (1));

return statearr_31832;
});
var cljs$core$async$reduce_$_state_machine__26777__auto____1 = (function (state_31818){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31833){if((e31833 instanceof Object)){
var ex__26780__auto__ = e31833;
var statearr_31834_31842 = state_31818;
(statearr_31834_31842[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31843 = state_31818;
state_31818 = G__31843;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26777__auto__ = function(state_31818){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26777__auto____1.call(this,state_31818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26777__auto____0;
cljs$core$async$reduce_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26777__auto____1;
return cljs$core$async$reduce_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__))
})();
var state__26840__auto__ = (function (){var statearr_31835 = f__26839__auto__.call(null);
(statearr_31835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_31835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__))
);

return c__26838__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__31845 = arguments.length;
switch (G__31845) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__){
return (function (state_31870){
var state_val_31871 = (state_31870[(1)]);
if((state_val_31871 === (7))){
var inst_31852 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31872_31896 = state_31870__$1;
(statearr_31872_31896[(2)] = inst_31852);

(statearr_31872_31896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (1))){
var inst_31846 = cljs.core.seq.call(null,coll);
var inst_31847 = inst_31846;
var state_31870__$1 = (function (){var statearr_31873 = state_31870;
(statearr_31873[(7)] = inst_31847);

return statearr_31873;
})();
var statearr_31874_31897 = state_31870__$1;
(statearr_31874_31897[(2)] = null);

(statearr_31874_31897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (4))){
var inst_31847 = (state_31870[(7)]);
var inst_31850 = cljs.core.first.call(null,inst_31847);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31870__$1,(7),ch,inst_31850);
} else {
if((state_val_31871 === (13))){
var inst_31864 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31875_31898 = state_31870__$1;
(statearr_31875_31898[(2)] = inst_31864);

(statearr_31875_31898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (6))){
var inst_31855 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31855)){
var statearr_31876_31899 = state_31870__$1;
(statearr_31876_31899[(1)] = (8));

} else {
var statearr_31877_31900 = state_31870__$1;
(statearr_31877_31900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (3))){
var inst_31868 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31870__$1,inst_31868);
} else {
if((state_val_31871 === (12))){
var state_31870__$1 = state_31870;
var statearr_31878_31901 = state_31870__$1;
(statearr_31878_31901[(2)] = null);

(statearr_31878_31901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (2))){
var inst_31847 = (state_31870[(7)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31847)){
var statearr_31879_31902 = state_31870__$1;
(statearr_31879_31902[(1)] = (4));

} else {
var statearr_31880_31903 = state_31870__$1;
(statearr_31880_31903[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (11))){
var inst_31861 = cljs.core.async.close_BANG_.call(null,ch);
var state_31870__$1 = state_31870;
var statearr_31881_31904 = state_31870__$1;
(statearr_31881_31904[(2)] = inst_31861);

(statearr_31881_31904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (9))){
var state_31870__$1 = state_31870;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31882_31905 = state_31870__$1;
(statearr_31882_31905[(1)] = (11));

} else {
var statearr_31883_31906 = state_31870__$1;
(statearr_31883_31906[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (5))){
var inst_31847 = (state_31870[(7)]);
var state_31870__$1 = state_31870;
var statearr_31884_31907 = state_31870__$1;
(statearr_31884_31907[(2)] = inst_31847);

(statearr_31884_31907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (10))){
var inst_31866 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31885_31908 = state_31870__$1;
(statearr_31885_31908[(2)] = inst_31866);

(statearr_31885_31908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (8))){
var inst_31847 = (state_31870[(7)]);
var inst_31857 = cljs.core.next.call(null,inst_31847);
var inst_31847__$1 = inst_31857;
var state_31870__$1 = (function (){var statearr_31886 = state_31870;
(statearr_31886[(7)] = inst_31847__$1);

return statearr_31886;
})();
var statearr_31887_31909 = state_31870__$1;
(statearr_31887_31909[(2)] = null);

(statearr_31887_31909[(1)] = (2));


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
});})(c__26838__auto__))
;
return ((function (switch__26776__auto__,c__26838__auto__){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_31891 = [null,null,null,null,null,null,null,null];
(statearr_31891[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_31891[(1)] = (1));

return statearr_31891;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_31870){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31892){if((e31892 instanceof Object)){
var ex__26780__auto__ = e31892;
var statearr_31893_31910 = state_31870;
(statearr_31893_31910[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31911 = state_31870;
state_31870 = G__31911;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_31870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_31870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__))
})();
var state__26840__auto__ = (function (){var statearr_31894 = f__26839__auto__.call(null);
(statearr_31894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_31894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__))
);

return c__26838__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj31913 = {};
return obj31913;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__22737__auto__ = _;
if(and__22737__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__22737__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__23385__auto__ = (((_ == null))?null:_);
return (function (){var or__22749__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj31915 = {};
return obj31915;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__22737__auto__ = m;
if(and__22737__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__22737__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__23385__auto__ = (((m == null))?null:m);
return (function (){var or__22749__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__22737__auto__ = m;
if(and__22737__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__22737__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__23385__auto__ = (((m == null))?null:m);
return (function (){var or__22749__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__22737__auto__ = m;
if(and__22737__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__22737__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__23385__auto__ = (((m == null))?null:m);
return (function (){var or__22749__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t32137 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32137 = (function (cs,ch,mult,meta32138){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32138 = meta32138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32137.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32137.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32137.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32137.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32137.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32139){
var self__ = this;
var _32139__$1 = this;
return self__.meta32138;
});})(cs))
;

cljs.core.async.t32137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32139,meta32138__$1){
var self__ = this;
var _32139__$1 = this;
return (new cljs.core.async.t32137(self__.cs,self__.ch,self__.mult,meta32138__$1));
});})(cs))
;

cljs.core.async.t32137.cljs$lang$type = true;

cljs.core.async.t32137.cljs$lang$ctorStr = "cljs.core.async/t32137";

cljs.core.async.t32137.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t32137");
});})(cs))
;

cljs.core.async.__GT_t32137 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t32137(cs__$1,ch__$1,mult__$1,meta32138){
return (new cljs.core.async.t32137(cs__$1,ch__$1,mult__$1,meta32138));
});})(cs))
;

}

return (new cljs.core.async.t32137(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26838__auto___32358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___32358,cs,m,dchan,dctr,done){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___32358,cs,m,dchan,dctr,done){
return (function (state_32270){
var state_val_32271 = (state_32270[(1)]);
if((state_val_32271 === (7))){
var inst_32266 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32272_32359 = state_32270__$1;
(statearr_32272_32359[(2)] = inst_32266);

(statearr_32272_32359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (20))){
var inst_32171 = (state_32270[(7)]);
var inst_32181 = cljs.core.first.call(null,inst_32171);
var inst_32182 = cljs.core.nth.call(null,inst_32181,(0),null);
var inst_32183 = cljs.core.nth.call(null,inst_32181,(1),null);
var state_32270__$1 = (function (){var statearr_32273 = state_32270;
(statearr_32273[(8)] = inst_32182);

return statearr_32273;
})();
if(cljs.core.truth_(inst_32183)){
var statearr_32274_32360 = state_32270__$1;
(statearr_32274_32360[(1)] = (22));

} else {
var statearr_32275_32361 = state_32270__$1;
(statearr_32275_32361[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (27))){
var inst_32142 = (state_32270[(9)]);
var inst_32218 = (state_32270[(10)]);
var inst_32213 = (state_32270[(11)]);
var inst_32211 = (state_32270[(12)]);
var inst_32218__$1 = cljs.core._nth.call(null,inst_32211,inst_32213);
var inst_32219 = cljs.core.async.put_BANG_.call(null,inst_32218__$1,inst_32142,done);
var state_32270__$1 = (function (){var statearr_32276 = state_32270;
(statearr_32276[(10)] = inst_32218__$1);

return statearr_32276;
})();
if(cljs.core.truth_(inst_32219)){
var statearr_32277_32362 = state_32270__$1;
(statearr_32277_32362[(1)] = (30));

} else {
var statearr_32278_32363 = state_32270__$1;
(statearr_32278_32363[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (1))){
var state_32270__$1 = state_32270;
var statearr_32279_32364 = state_32270__$1;
(statearr_32279_32364[(2)] = null);

(statearr_32279_32364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (24))){
var inst_32171 = (state_32270[(7)]);
var inst_32188 = (state_32270[(2)]);
var inst_32189 = cljs.core.next.call(null,inst_32171);
var inst_32151 = inst_32189;
var inst_32152 = null;
var inst_32153 = (0);
var inst_32154 = (0);
var state_32270__$1 = (function (){var statearr_32280 = state_32270;
(statearr_32280[(13)] = inst_32153);

(statearr_32280[(14)] = inst_32188);

(statearr_32280[(15)] = inst_32152);

(statearr_32280[(16)] = inst_32154);

(statearr_32280[(17)] = inst_32151);

return statearr_32280;
})();
var statearr_32281_32365 = state_32270__$1;
(statearr_32281_32365[(2)] = null);

(statearr_32281_32365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (39))){
var state_32270__$1 = state_32270;
var statearr_32285_32366 = state_32270__$1;
(statearr_32285_32366[(2)] = null);

(statearr_32285_32366[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (4))){
var inst_32142 = (state_32270[(9)]);
var inst_32142__$1 = (state_32270[(2)]);
var inst_32143 = (inst_32142__$1 == null);
var state_32270__$1 = (function (){var statearr_32286 = state_32270;
(statearr_32286[(9)] = inst_32142__$1);

return statearr_32286;
})();
if(cljs.core.truth_(inst_32143)){
var statearr_32287_32367 = state_32270__$1;
(statearr_32287_32367[(1)] = (5));

} else {
var statearr_32288_32368 = state_32270__$1;
(statearr_32288_32368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (15))){
var inst_32153 = (state_32270[(13)]);
var inst_32152 = (state_32270[(15)]);
var inst_32154 = (state_32270[(16)]);
var inst_32151 = (state_32270[(17)]);
var inst_32167 = (state_32270[(2)]);
var inst_32168 = (inst_32154 + (1));
var tmp32282 = inst_32153;
var tmp32283 = inst_32152;
var tmp32284 = inst_32151;
var inst_32151__$1 = tmp32284;
var inst_32152__$1 = tmp32283;
var inst_32153__$1 = tmp32282;
var inst_32154__$1 = inst_32168;
var state_32270__$1 = (function (){var statearr_32289 = state_32270;
(statearr_32289[(13)] = inst_32153__$1);

(statearr_32289[(15)] = inst_32152__$1);

(statearr_32289[(16)] = inst_32154__$1);

(statearr_32289[(17)] = inst_32151__$1);

(statearr_32289[(18)] = inst_32167);

return statearr_32289;
})();
var statearr_32290_32369 = state_32270__$1;
(statearr_32290_32369[(2)] = null);

(statearr_32290_32369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (21))){
var inst_32192 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32294_32370 = state_32270__$1;
(statearr_32294_32370[(2)] = inst_32192);

(statearr_32294_32370[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (31))){
var inst_32218 = (state_32270[(10)]);
var inst_32222 = done.call(null,null);
var inst_32223 = cljs.core.async.untap_STAR_.call(null,m,inst_32218);
var state_32270__$1 = (function (){var statearr_32295 = state_32270;
(statearr_32295[(19)] = inst_32222);

return statearr_32295;
})();
var statearr_32296_32371 = state_32270__$1;
(statearr_32296_32371[(2)] = inst_32223);

(statearr_32296_32371[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (32))){
var inst_32212 = (state_32270[(20)]);
var inst_32210 = (state_32270[(21)]);
var inst_32213 = (state_32270[(11)]);
var inst_32211 = (state_32270[(12)]);
var inst_32225 = (state_32270[(2)]);
var inst_32226 = (inst_32213 + (1));
var tmp32291 = inst_32212;
var tmp32292 = inst_32210;
var tmp32293 = inst_32211;
var inst_32210__$1 = tmp32292;
var inst_32211__$1 = tmp32293;
var inst_32212__$1 = tmp32291;
var inst_32213__$1 = inst_32226;
var state_32270__$1 = (function (){var statearr_32297 = state_32270;
(statearr_32297[(20)] = inst_32212__$1);

(statearr_32297[(21)] = inst_32210__$1);

(statearr_32297[(11)] = inst_32213__$1);

(statearr_32297[(12)] = inst_32211__$1);

(statearr_32297[(22)] = inst_32225);

return statearr_32297;
})();
var statearr_32298_32372 = state_32270__$1;
(statearr_32298_32372[(2)] = null);

(statearr_32298_32372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (40))){
var inst_32238 = (state_32270[(23)]);
var inst_32242 = done.call(null,null);
var inst_32243 = cljs.core.async.untap_STAR_.call(null,m,inst_32238);
var state_32270__$1 = (function (){var statearr_32299 = state_32270;
(statearr_32299[(24)] = inst_32242);

return statearr_32299;
})();
var statearr_32300_32373 = state_32270__$1;
(statearr_32300_32373[(2)] = inst_32243);

(statearr_32300_32373[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (33))){
var inst_32229 = (state_32270[(25)]);
var inst_32231 = cljs.core.chunked_seq_QMARK_.call(null,inst_32229);
var state_32270__$1 = state_32270;
if(inst_32231){
var statearr_32301_32374 = state_32270__$1;
(statearr_32301_32374[(1)] = (36));

} else {
var statearr_32302_32375 = state_32270__$1;
(statearr_32302_32375[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (13))){
var inst_32161 = (state_32270[(26)]);
var inst_32164 = cljs.core.async.close_BANG_.call(null,inst_32161);
var state_32270__$1 = state_32270;
var statearr_32303_32376 = state_32270__$1;
(statearr_32303_32376[(2)] = inst_32164);

(statearr_32303_32376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (22))){
var inst_32182 = (state_32270[(8)]);
var inst_32185 = cljs.core.async.close_BANG_.call(null,inst_32182);
var state_32270__$1 = state_32270;
var statearr_32304_32377 = state_32270__$1;
(statearr_32304_32377[(2)] = inst_32185);

(statearr_32304_32377[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (36))){
var inst_32229 = (state_32270[(25)]);
var inst_32233 = cljs.core.chunk_first.call(null,inst_32229);
var inst_32234 = cljs.core.chunk_rest.call(null,inst_32229);
var inst_32235 = cljs.core.count.call(null,inst_32233);
var inst_32210 = inst_32234;
var inst_32211 = inst_32233;
var inst_32212 = inst_32235;
var inst_32213 = (0);
var state_32270__$1 = (function (){var statearr_32305 = state_32270;
(statearr_32305[(20)] = inst_32212);

(statearr_32305[(21)] = inst_32210);

(statearr_32305[(11)] = inst_32213);

(statearr_32305[(12)] = inst_32211);

return statearr_32305;
})();
var statearr_32306_32378 = state_32270__$1;
(statearr_32306_32378[(2)] = null);

(statearr_32306_32378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (41))){
var inst_32229 = (state_32270[(25)]);
var inst_32245 = (state_32270[(2)]);
var inst_32246 = cljs.core.next.call(null,inst_32229);
var inst_32210 = inst_32246;
var inst_32211 = null;
var inst_32212 = (0);
var inst_32213 = (0);
var state_32270__$1 = (function (){var statearr_32307 = state_32270;
(statearr_32307[(20)] = inst_32212);

(statearr_32307[(21)] = inst_32210);

(statearr_32307[(11)] = inst_32213);

(statearr_32307[(27)] = inst_32245);

(statearr_32307[(12)] = inst_32211);

return statearr_32307;
})();
var statearr_32308_32379 = state_32270__$1;
(statearr_32308_32379[(2)] = null);

(statearr_32308_32379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (43))){
var state_32270__$1 = state_32270;
var statearr_32309_32380 = state_32270__$1;
(statearr_32309_32380[(2)] = null);

(statearr_32309_32380[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (29))){
var inst_32254 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32310_32381 = state_32270__$1;
(statearr_32310_32381[(2)] = inst_32254);

(statearr_32310_32381[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (44))){
var inst_32263 = (state_32270[(2)]);
var state_32270__$1 = (function (){var statearr_32311 = state_32270;
(statearr_32311[(28)] = inst_32263);

return statearr_32311;
})();
var statearr_32312_32382 = state_32270__$1;
(statearr_32312_32382[(2)] = null);

(statearr_32312_32382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (6))){
var inst_32202 = (state_32270[(29)]);
var inst_32201 = cljs.core.deref.call(null,cs);
var inst_32202__$1 = cljs.core.keys.call(null,inst_32201);
var inst_32203 = cljs.core.count.call(null,inst_32202__$1);
var inst_32204 = cljs.core.reset_BANG_.call(null,dctr,inst_32203);
var inst_32209 = cljs.core.seq.call(null,inst_32202__$1);
var inst_32210 = inst_32209;
var inst_32211 = null;
var inst_32212 = (0);
var inst_32213 = (0);
var state_32270__$1 = (function (){var statearr_32313 = state_32270;
(statearr_32313[(20)] = inst_32212);

(statearr_32313[(30)] = inst_32204);

(statearr_32313[(21)] = inst_32210);

(statearr_32313[(11)] = inst_32213);

(statearr_32313[(29)] = inst_32202__$1);

(statearr_32313[(12)] = inst_32211);

return statearr_32313;
})();
var statearr_32314_32383 = state_32270__$1;
(statearr_32314_32383[(2)] = null);

(statearr_32314_32383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (28))){
var inst_32229 = (state_32270[(25)]);
var inst_32210 = (state_32270[(21)]);
var inst_32229__$1 = cljs.core.seq.call(null,inst_32210);
var state_32270__$1 = (function (){var statearr_32315 = state_32270;
(statearr_32315[(25)] = inst_32229__$1);

return statearr_32315;
})();
if(inst_32229__$1){
var statearr_32316_32384 = state_32270__$1;
(statearr_32316_32384[(1)] = (33));

} else {
var statearr_32317_32385 = state_32270__$1;
(statearr_32317_32385[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (25))){
var inst_32212 = (state_32270[(20)]);
var inst_32213 = (state_32270[(11)]);
var inst_32215 = (inst_32213 < inst_32212);
var inst_32216 = inst_32215;
var state_32270__$1 = state_32270;
if(cljs.core.truth_(inst_32216)){
var statearr_32318_32386 = state_32270__$1;
(statearr_32318_32386[(1)] = (27));

} else {
var statearr_32319_32387 = state_32270__$1;
(statearr_32319_32387[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (34))){
var state_32270__$1 = state_32270;
var statearr_32320_32388 = state_32270__$1;
(statearr_32320_32388[(2)] = null);

(statearr_32320_32388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (17))){
var state_32270__$1 = state_32270;
var statearr_32321_32389 = state_32270__$1;
(statearr_32321_32389[(2)] = null);

(statearr_32321_32389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (3))){
var inst_32268 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32270__$1,inst_32268);
} else {
if((state_val_32271 === (12))){
var inst_32197 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32322_32390 = state_32270__$1;
(statearr_32322_32390[(2)] = inst_32197);

(statearr_32322_32390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (2))){
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32270__$1,(4),ch);
} else {
if((state_val_32271 === (23))){
var state_32270__$1 = state_32270;
var statearr_32323_32391 = state_32270__$1;
(statearr_32323_32391[(2)] = null);

(statearr_32323_32391[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (35))){
var inst_32252 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32324_32392 = state_32270__$1;
(statearr_32324_32392[(2)] = inst_32252);

(statearr_32324_32392[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (19))){
var inst_32171 = (state_32270[(7)]);
var inst_32175 = cljs.core.chunk_first.call(null,inst_32171);
var inst_32176 = cljs.core.chunk_rest.call(null,inst_32171);
var inst_32177 = cljs.core.count.call(null,inst_32175);
var inst_32151 = inst_32176;
var inst_32152 = inst_32175;
var inst_32153 = inst_32177;
var inst_32154 = (0);
var state_32270__$1 = (function (){var statearr_32325 = state_32270;
(statearr_32325[(13)] = inst_32153);

(statearr_32325[(15)] = inst_32152);

(statearr_32325[(16)] = inst_32154);

(statearr_32325[(17)] = inst_32151);

return statearr_32325;
})();
var statearr_32326_32393 = state_32270__$1;
(statearr_32326_32393[(2)] = null);

(statearr_32326_32393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (11))){
var inst_32151 = (state_32270[(17)]);
var inst_32171 = (state_32270[(7)]);
var inst_32171__$1 = cljs.core.seq.call(null,inst_32151);
var state_32270__$1 = (function (){var statearr_32327 = state_32270;
(statearr_32327[(7)] = inst_32171__$1);

return statearr_32327;
})();
if(inst_32171__$1){
var statearr_32328_32394 = state_32270__$1;
(statearr_32328_32394[(1)] = (16));

} else {
var statearr_32329_32395 = state_32270__$1;
(statearr_32329_32395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (9))){
var inst_32199 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32330_32396 = state_32270__$1;
(statearr_32330_32396[(2)] = inst_32199);

(statearr_32330_32396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (5))){
var inst_32149 = cljs.core.deref.call(null,cs);
var inst_32150 = cljs.core.seq.call(null,inst_32149);
var inst_32151 = inst_32150;
var inst_32152 = null;
var inst_32153 = (0);
var inst_32154 = (0);
var state_32270__$1 = (function (){var statearr_32331 = state_32270;
(statearr_32331[(13)] = inst_32153);

(statearr_32331[(15)] = inst_32152);

(statearr_32331[(16)] = inst_32154);

(statearr_32331[(17)] = inst_32151);

return statearr_32331;
})();
var statearr_32332_32397 = state_32270__$1;
(statearr_32332_32397[(2)] = null);

(statearr_32332_32397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (14))){
var state_32270__$1 = state_32270;
var statearr_32333_32398 = state_32270__$1;
(statearr_32333_32398[(2)] = null);

(statearr_32333_32398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (45))){
var inst_32260 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32334_32399 = state_32270__$1;
(statearr_32334_32399[(2)] = inst_32260);

(statearr_32334_32399[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (26))){
var inst_32202 = (state_32270[(29)]);
var inst_32256 = (state_32270[(2)]);
var inst_32257 = cljs.core.seq.call(null,inst_32202);
var state_32270__$1 = (function (){var statearr_32335 = state_32270;
(statearr_32335[(31)] = inst_32256);

return statearr_32335;
})();
if(inst_32257){
var statearr_32336_32400 = state_32270__$1;
(statearr_32336_32400[(1)] = (42));

} else {
var statearr_32337_32401 = state_32270__$1;
(statearr_32337_32401[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (16))){
var inst_32171 = (state_32270[(7)]);
var inst_32173 = cljs.core.chunked_seq_QMARK_.call(null,inst_32171);
var state_32270__$1 = state_32270;
if(inst_32173){
var statearr_32338_32402 = state_32270__$1;
(statearr_32338_32402[(1)] = (19));

} else {
var statearr_32339_32403 = state_32270__$1;
(statearr_32339_32403[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (38))){
var inst_32249 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32340_32404 = state_32270__$1;
(statearr_32340_32404[(2)] = inst_32249);

(statearr_32340_32404[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (30))){
var state_32270__$1 = state_32270;
var statearr_32341_32405 = state_32270__$1;
(statearr_32341_32405[(2)] = null);

(statearr_32341_32405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (10))){
var inst_32152 = (state_32270[(15)]);
var inst_32154 = (state_32270[(16)]);
var inst_32160 = cljs.core._nth.call(null,inst_32152,inst_32154);
var inst_32161 = cljs.core.nth.call(null,inst_32160,(0),null);
var inst_32162 = cljs.core.nth.call(null,inst_32160,(1),null);
var state_32270__$1 = (function (){var statearr_32342 = state_32270;
(statearr_32342[(26)] = inst_32161);

return statearr_32342;
})();
if(cljs.core.truth_(inst_32162)){
var statearr_32343_32406 = state_32270__$1;
(statearr_32343_32406[(1)] = (13));

} else {
var statearr_32344_32407 = state_32270__$1;
(statearr_32344_32407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (18))){
var inst_32195 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32345_32408 = state_32270__$1;
(statearr_32345_32408[(2)] = inst_32195);

(statearr_32345_32408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (42))){
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32270__$1,(45),dchan);
} else {
if((state_val_32271 === (37))){
var inst_32142 = (state_32270[(9)]);
var inst_32229 = (state_32270[(25)]);
var inst_32238 = (state_32270[(23)]);
var inst_32238__$1 = cljs.core.first.call(null,inst_32229);
var inst_32239 = cljs.core.async.put_BANG_.call(null,inst_32238__$1,inst_32142,done);
var state_32270__$1 = (function (){var statearr_32346 = state_32270;
(statearr_32346[(23)] = inst_32238__$1);

return statearr_32346;
})();
if(cljs.core.truth_(inst_32239)){
var statearr_32347_32409 = state_32270__$1;
(statearr_32347_32409[(1)] = (39));

} else {
var statearr_32348_32410 = state_32270__$1;
(statearr_32348_32410[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (8))){
var inst_32153 = (state_32270[(13)]);
var inst_32154 = (state_32270[(16)]);
var inst_32156 = (inst_32154 < inst_32153);
var inst_32157 = inst_32156;
var state_32270__$1 = state_32270;
if(cljs.core.truth_(inst_32157)){
var statearr_32349_32411 = state_32270__$1;
(statearr_32349_32411[(1)] = (10));

} else {
var statearr_32350_32412 = state_32270__$1;
(statearr_32350_32412[(1)] = (11));

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
});})(c__26838__auto___32358,cs,m,dchan,dctr,done))
;
return ((function (switch__26776__auto__,c__26838__auto___32358,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26777__auto__ = null;
var cljs$core$async$mult_$_state_machine__26777__auto____0 = (function (){
var statearr_32354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32354[(0)] = cljs$core$async$mult_$_state_machine__26777__auto__);

(statearr_32354[(1)] = (1));

return statearr_32354;
});
var cljs$core$async$mult_$_state_machine__26777__auto____1 = (function (state_32270){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_32270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e32355){if((e32355 instanceof Object)){
var ex__26780__auto__ = e32355;
var statearr_32356_32413 = state_32270;
(statearr_32356_32413[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32414 = state_32270;
state_32270 = G__32414;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26777__auto__ = function(state_32270){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26777__auto____1.call(this,state_32270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26777__auto____0;
cljs$core$async$mult_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26777__auto____1;
return cljs$core$async$mult_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___32358,cs,m,dchan,dctr,done))
})();
var state__26840__auto__ = (function (){var statearr_32357 = f__26839__auto__.call(null);
(statearr_32357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___32358);

return statearr_32357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___32358,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__32416 = arguments.length;
switch (G__32416) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj32419 = {};
return obj32419;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__22737__auto__ = m;
if(and__22737__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__22737__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__23385__auto__ = (((m == null))?null:m);
return (function (){var or__22749__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__22737__auto__ = m;
if(and__22737__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__22737__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__23385__auto__ = (((m == null))?null:m);
return (function (){var or__22749__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__22737__auto__ = m;
if(and__22737__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__22737__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__23385__auto__ = (((m == null))?null:m);
return (function (){var or__22749__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__22737__auto__ = m;
if(and__22737__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__22737__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__23385__auto__ = (((m == null))?null:m);
return (function (){var or__22749__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__22737__auto__ = m;
if(and__22737__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__22737__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__23385__auto__ = (((m == null))?null:m);
return (function (){var or__22749__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__23789__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23789__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32424){
var map__32425 = p__32424;
var map__32425__$1 = ((cljs.core.seq_QMARK_.call(null,map__32425))?cljs.core.apply.call(null,cljs.core.hash_map,map__32425):map__32425);
var opts = map__32425__$1;
var statearr_32426_32429 = state;
(statearr_32426_32429[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32425,map__32425__$1,opts){
return (function (val){
var statearr_32427_32430 = state;
(statearr_32427_32430[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32425,map__32425__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32428_32431 = state;
(statearr_32428_32431[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32420){
var G__32421 = cljs.core.first.call(null,seq32420);
var seq32420__$1 = cljs.core.next.call(null,seq32420);
var G__32422 = cljs.core.first.call(null,seq32420__$1);
var seq32420__$2 = cljs.core.next.call(null,seq32420__$1);
var G__32423 = cljs.core.first.call(null,seq32420__$2);
var seq32420__$3 = cljs.core.next.call(null,seq32420__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32421,G__32422,G__32423,seq32420__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32551 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32551 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32552){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32552 = meta32552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32551.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32551.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32551.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32551.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32551.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32551.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32551.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32553){
var self__ = this;
var _32553__$1 = this;
return self__.meta32552;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32553,meta32552__$1){
var self__ = this;
var _32553__$1 = this;
return (new cljs.core.async.t32551(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32552__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32551.cljs$lang$type = true;

cljs.core.async.t32551.cljs$lang$ctorStr = "cljs.core.async/t32551";

cljs.core.async.t32551.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t32551");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32551 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t32551(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32552){
return (new cljs.core.async.t32551(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32552));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32551(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26838__auto___32670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___32670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___32670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32623){
var state_val_32624 = (state_32623[(1)]);
if((state_val_32624 === (7))){
var inst_32567 = (state_32623[(7)]);
var inst_32572 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32567);
var state_32623__$1 = state_32623;
var statearr_32625_32671 = state_32623__$1;
(statearr_32625_32671[(2)] = inst_32572);

(statearr_32625_32671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (20))){
var inst_32582 = (state_32623[(8)]);
var state_32623__$1 = state_32623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32623__$1,(23),out,inst_32582);
} else {
if((state_val_32624 === (1))){
var inst_32557 = (state_32623[(9)]);
var inst_32557__$1 = calc_state.call(null);
var inst_32558 = cljs.core.seq_QMARK_.call(null,inst_32557__$1);
var state_32623__$1 = (function (){var statearr_32626 = state_32623;
(statearr_32626[(9)] = inst_32557__$1);

return statearr_32626;
})();
if(inst_32558){
var statearr_32627_32672 = state_32623__$1;
(statearr_32627_32672[(1)] = (2));

} else {
var statearr_32628_32673 = state_32623__$1;
(statearr_32628_32673[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (24))){
var inst_32575 = (state_32623[(10)]);
var inst_32567 = inst_32575;
var state_32623__$1 = (function (){var statearr_32629 = state_32623;
(statearr_32629[(7)] = inst_32567);

return statearr_32629;
})();
var statearr_32630_32674 = state_32623__$1;
(statearr_32630_32674[(2)] = null);

(statearr_32630_32674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (4))){
var inst_32557 = (state_32623[(9)]);
var inst_32563 = (state_32623[(2)]);
var inst_32564 = cljs.core.get.call(null,inst_32563,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32565 = cljs.core.get.call(null,inst_32563,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32566 = cljs.core.get.call(null,inst_32563,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32567 = inst_32557;
var state_32623__$1 = (function (){var statearr_32631 = state_32623;
(statearr_32631[(11)] = inst_32564);

(statearr_32631[(12)] = inst_32566);

(statearr_32631[(13)] = inst_32565);

(statearr_32631[(7)] = inst_32567);

return statearr_32631;
})();
var statearr_32632_32675 = state_32623__$1;
(statearr_32632_32675[(2)] = null);

(statearr_32632_32675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (15))){
var state_32623__$1 = state_32623;
var statearr_32633_32676 = state_32623__$1;
(statearr_32633_32676[(2)] = null);

(statearr_32633_32676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (21))){
var inst_32575 = (state_32623[(10)]);
var inst_32567 = inst_32575;
var state_32623__$1 = (function (){var statearr_32634 = state_32623;
(statearr_32634[(7)] = inst_32567);

return statearr_32634;
})();
var statearr_32635_32677 = state_32623__$1;
(statearr_32635_32677[(2)] = null);

(statearr_32635_32677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (13))){
var inst_32619 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
var statearr_32636_32678 = state_32623__$1;
(statearr_32636_32678[(2)] = inst_32619);

(statearr_32636_32678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (22))){
var inst_32617 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
var statearr_32637_32679 = state_32623__$1;
(statearr_32637_32679[(2)] = inst_32617);

(statearr_32637_32679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (6))){
var inst_32621 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32623__$1,inst_32621);
} else {
if((state_val_32624 === (25))){
var state_32623__$1 = state_32623;
var statearr_32638_32680 = state_32623__$1;
(statearr_32638_32680[(2)] = null);

(statearr_32638_32680[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (17))){
var inst_32597 = (state_32623[(14)]);
var state_32623__$1 = state_32623;
var statearr_32639_32681 = state_32623__$1;
(statearr_32639_32681[(2)] = inst_32597);

(statearr_32639_32681[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (3))){
var inst_32557 = (state_32623[(9)]);
var state_32623__$1 = state_32623;
var statearr_32640_32682 = state_32623__$1;
(statearr_32640_32682[(2)] = inst_32557);

(statearr_32640_32682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (12))){
var inst_32597 = (state_32623[(14)]);
var inst_32578 = (state_32623[(15)]);
var inst_32583 = (state_32623[(16)]);
var inst_32597__$1 = inst_32578.call(null,inst_32583);
var state_32623__$1 = (function (){var statearr_32641 = state_32623;
(statearr_32641[(14)] = inst_32597__$1);

return statearr_32641;
})();
if(cljs.core.truth_(inst_32597__$1)){
var statearr_32642_32683 = state_32623__$1;
(statearr_32642_32683[(1)] = (17));

} else {
var statearr_32643_32684 = state_32623__$1;
(statearr_32643_32684[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (2))){
var inst_32557 = (state_32623[(9)]);
var inst_32560 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32557);
var state_32623__$1 = state_32623;
var statearr_32644_32685 = state_32623__$1;
(statearr_32644_32685[(2)] = inst_32560);

(statearr_32644_32685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (23))){
var inst_32608 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
if(cljs.core.truth_(inst_32608)){
var statearr_32645_32686 = state_32623__$1;
(statearr_32645_32686[(1)] = (24));

} else {
var statearr_32646_32687 = state_32623__$1;
(statearr_32646_32687[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (19))){
var inst_32605 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
if(cljs.core.truth_(inst_32605)){
var statearr_32647_32688 = state_32623__$1;
(statearr_32647_32688[(1)] = (20));

} else {
var statearr_32648_32689 = state_32623__$1;
(statearr_32648_32689[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (11))){
var inst_32582 = (state_32623[(8)]);
var inst_32588 = (inst_32582 == null);
var state_32623__$1 = state_32623;
if(cljs.core.truth_(inst_32588)){
var statearr_32649_32690 = state_32623__$1;
(statearr_32649_32690[(1)] = (14));

} else {
var statearr_32650_32691 = state_32623__$1;
(statearr_32650_32691[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (9))){
var inst_32575 = (state_32623[(10)]);
var inst_32575__$1 = (state_32623[(2)]);
var inst_32576 = cljs.core.get.call(null,inst_32575__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32577 = cljs.core.get.call(null,inst_32575__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32578 = cljs.core.get.call(null,inst_32575__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32623__$1 = (function (){var statearr_32651 = state_32623;
(statearr_32651[(15)] = inst_32578);

(statearr_32651[(10)] = inst_32575__$1);

(statearr_32651[(17)] = inst_32577);

return statearr_32651;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32623__$1,(10),inst_32576);
} else {
if((state_val_32624 === (5))){
var inst_32567 = (state_32623[(7)]);
var inst_32570 = cljs.core.seq_QMARK_.call(null,inst_32567);
var state_32623__$1 = state_32623;
if(inst_32570){
var statearr_32652_32692 = state_32623__$1;
(statearr_32652_32692[(1)] = (7));

} else {
var statearr_32653_32693 = state_32623__$1;
(statearr_32653_32693[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (14))){
var inst_32583 = (state_32623[(16)]);
var inst_32590 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32583);
var state_32623__$1 = state_32623;
var statearr_32654_32694 = state_32623__$1;
(statearr_32654_32694[(2)] = inst_32590);

(statearr_32654_32694[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (26))){
var inst_32613 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
var statearr_32655_32695 = state_32623__$1;
(statearr_32655_32695[(2)] = inst_32613);

(statearr_32655_32695[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (16))){
var inst_32593 = (state_32623[(2)]);
var inst_32594 = calc_state.call(null);
var inst_32567 = inst_32594;
var state_32623__$1 = (function (){var statearr_32656 = state_32623;
(statearr_32656[(18)] = inst_32593);

(statearr_32656[(7)] = inst_32567);

return statearr_32656;
})();
var statearr_32657_32696 = state_32623__$1;
(statearr_32657_32696[(2)] = null);

(statearr_32657_32696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (10))){
var inst_32583 = (state_32623[(16)]);
var inst_32582 = (state_32623[(8)]);
var inst_32581 = (state_32623[(2)]);
var inst_32582__$1 = cljs.core.nth.call(null,inst_32581,(0),null);
var inst_32583__$1 = cljs.core.nth.call(null,inst_32581,(1),null);
var inst_32584 = (inst_32582__$1 == null);
var inst_32585 = cljs.core._EQ_.call(null,inst_32583__$1,change);
var inst_32586 = (inst_32584) || (inst_32585);
var state_32623__$1 = (function (){var statearr_32658 = state_32623;
(statearr_32658[(16)] = inst_32583__$1);

(statearr_32658[(8)] = inst_32582__$1);

return statearr_32658;
})();
if(cljs.core.truth_(inst_32586)){
var statearr_32659_32697 = state_32623__$1;
(statearr_32659_32697[(1)] = (11));

} else {
var statearr_32660_32698 = state_32623__$1;
(statearr_32660_32698[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (18))){
var inst_32578 = (state_32623[(15)]);
var inst_32583 = (state_32623[(16)]);
var inst_32577 = (state_32623[(17)]);
var inst_32600 = cljs.core.empty_QMARK_.call(null,inst_32578);
var inst_32601 = inst_32577.call(null,inst_32583);
var inst_32602 = cljs.core.not.call(null,inst_32601);
var inst_32603 = (inst_32600) && (inst_32602);
var state_32623__$1 = state_32623;
var statearr_32661_32699 = state_32623__$1;
(statearr_32661_32699[(2)] = inst_32603);

(statearr_32661_32699[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (8))){
var inst_32567 = (state_32623[(7)]);
var state_32623__$1 = state_32623;
var statearr_32662_32700 = state_32623__$1;
(statearr_32662_32700[(2)] = inst_32567);

(statearr_32662_32700[(1)] = (9));


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
});})(c__26838__auto___32670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26776__auto__,c__26838__auto___32670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26777__auto__ = null;
var cljs$core$async$mix_$_state_machine__26777__auto____0 = (function (){
var statearr_32666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32666[(0)] = cljs$core$async$mix_$_state_machine__26777__auto__);

(statearr_32666[(1)] = (1));

return statearr_32666;
});
var cljs$core$async$mix_$_state_machine__26777__auto____1 = (function (state_32623){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_32623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e32667){if((e32667 instanceof Object)){
var ex__26780__auto__ = e32667;
var statearr_32668_32701 = state_32623;
(statearr_32668_32701[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32702 = state_32623;
state_32623 = G__32702;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26777__auto__ = function(state_32623){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26777__auto____1.call(this,state_32623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26777__auto____0;
cljs$core$async$mix_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26777__auto____1;
return cljs$core$async$mix_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___32670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26840__auto__ = (function (){var statearr_32669 = f__26839__auto__.call(null);
(statearr_32669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___32670);

return statearr_32669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___32670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj32704 = {};
return obj32704;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__22737__auto__ = p;
if(and__22737__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__22737__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__23385__auto__ = (((p == null))?null:p);
return (function (){var or__22749__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__22737__auto__ = p;
if(and__22737__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__22737__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__23385__auto__ = (((p == null))?null:p);
return (function (){var or__22749__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__32706 = arguments.length;
switch (G__32706) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__22737__auto__ = p;
if(and__22737__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__22737__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23385__auto__ = (((p == null))?null:p);
return (function (){var or__22749__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__22737__auto__ = p;
if(and__22737__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__22737__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__23385__auto__ = (((p == null))?null:p);
return (function (){var or__22749__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23385__auto__)]);
if(or__22749__auto__){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__22749__auto____$1){
return or__22749__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__32710 = arguments.length;
switch (G__32710) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22749__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22749__auto__,mults){
return (function (p1__32708_SHARP_){
if(cljs.core.truth_(p1__32708_SHARP_.call(null,topic))){
return p1__32708_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32708_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22749__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32711 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32711 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta32712){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta32712 = meta32712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32711.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32711.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32711.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32711.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32713){
var self__ = this;
var _32713__$1 = this;
return self__.meta32712;
});})(mults,ensure_mult))
;

cljs.core.async.t32711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32713,meta32712__$1){
var self__ = this;
var _32713__$1 = this;
return (new cljs.core.async.t32711(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta32712__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32711.cljs$lang$type = true;

cljs.core.async.t32711.cljs$lang$ctorStr = "cljs.core.async/t32711";

cljs.core.async.t32711.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t32711");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32711 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t32711(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta32712){
return (new cljs.core.async.t32711(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta32712));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32711(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26838__auto___32834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___32834,mults,ensure_mult,p){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___32834,mults,ensure_mult,p){
return (function (state_32785){
var state_val_32786 = (state_32785[(1)]);
if((state_val_32786 === (7))){
var inst_32781 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32787_32835 = state_32785__$1;
(statearr_32787_32835[(2)] = inst_32781);

(statearr_32787_32835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (20))){
var state_32785__$1 = state_32785;
var statearr_32788_32836 = state_32785__$1;
(statearr_32788_32836[(2)] = null);

(statearr_32788_32836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (1))){
var state_32785__$1 = state_32785;
var statearr_32789_32837 = state_32785__$1;
(statearr_32789_32837[(2)] = null);

(statearr_32789_32837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (24))){
var inst_32764 = (state_32785[(7)]);
var inst_32773 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32764);
var state_32785__$1 = state_32785;
var statearr_32790_32838 = state_32785__$1;
(statearr_32790_32838[(2)] = inst_32773);

(statearr_32790_32838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (4))){
var inst_32716 = (state_32785[(8)]);
var inst_32716__$1 = (state_32785[(2)]);
var inst_32717 = (inst_32716__$1 == null);
var state_32785__$1 = (function (){var statearr_32791 = state_32785;
(statearr_32791[(8)] = inst_32716__$1);

return statearr_32791;
})();
if(cljs.core.truth_(inst_32717)){
var statearr_32792_32839 = state_32785__$1;
(statearr_32792_32839[(1)] = (5));

} else {
var statearr_32793_32840 = state_32785__$1;
(statearr_32793_32840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (15))){
var inst_32758 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32794_32841 = state_32785__$1;
(statearr_32794_32841[(2)] = inst_32758);

(statearr_32794_32841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (21))){
var inst_32778 = (state_32785[(2)]);
var state_32785__$1 = (function (){var statearr_32795 = state_32785;
(statearr_32795[(9)] = inst_32778);

return statearr_32795;
})();
var statearr_32796_32842 = state_32785__$1;
(statearr_32796_32842[(2)] = null);

(statearr_32796_32842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (13))){
var inst_32740 = (state_32785[(10)]);
var inst_32742 = cljs.core.chunked_seq_QMARK_.call(null,inst_32740);
var state_32785__$1 = state_32785;
if(inst_32742){
var statearr_32797_32843 = state_32785__$1;
(statearr_32797_32843[(1)] = (16));

} else {
var statearr_32798_32844 = state_32785__$1;
(statearr_32798_32844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (22))){
var inst_32770 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
if(cljs.core.truth_(inst_32770)){
var statearr_32799_32845 = state_32785__$1;
(statearr_32799_32845[(1)] = (23));

} else {
var statearr_32800_32846 = state_32785__$1;
(statearr_32800_32846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (6))){
var inst_32766 = (state_32785[(11)]);
var inst_32716 = (state_32785[(8)]);
var inst_32764 = (state_32785[(7)]);
var inst_32764__$1 = topic_fn.call(null,inst_32716);
var inst_32765 = cljs.core.deref.call(null,mults);
var inst_32766__$1 = cljs.core.get.call(null,inst_32765,inst_32764__$1);
var state_32785__$1 = (function (){var statearr_32801 = state_32785;
(statearr_32801[(11)] = inst_32766__$1);

(statearr_32801[(7)] = inst_32764__$1);

return statearr_32801;
})();
if(cljs.core.truth_(inst_32766__$1)){
var statearr_32802_32847 = state_32785__$1;
(statearr_32802_32847[(1)] = (19));

} else {
var statearr_32803_32848 = state_32785__$1;
(statearr_32803_32848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (25))){
var inst_32775 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32804_32849 = state_32785__$1;
(statearr_32804_32849[(2)] = inst_32775);

(statearr_32804_32849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (17))){
var inst_32740 = (state_32785[(10)]);
var inst_32749 = cljs.core.first.call(null,inst_32740);
var inst_32750 = cljs.core.async.muxch_STAR_.call(null,inst_32749);
var inst_32751 = cljs.core.async.close_BANG_.call(null,inst_32750);
var inst_32752 = cljs.core.next.call(null,inst_32740);
var inst_32726 = inst_32752;
var inst_32727 = null;
var inst_32728 = (0);
var inst_32729 = (0);
var state_32785__$1 = (function (){var statearr_32805 = state_32785;
(statearr_32805[(12)] = inst_32751);

(statearr_32805[(13)] = inst_32729);

(statearr_32805[(14)] = inst_32728);

(statearr_32805[(15)] = inst_32727);

(statearr_32805[(16)] = inst_32726);

return statearr_32805;
})();
var statearr_32806_32850 = state_32785__$1;
(statearr_32806_32850[(2)] = null);

(statearr_32806_32850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (3))){
var inst_32783 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32785__$1,inst_32783);
} else {
if((state_val_32786 === (12))){
var inst_32760 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32807_32851 = state_32785__$1;
(statearr_32807_32851[(2)] = inst_32760);

(statearr_32807_32851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (2))){
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32785__$1,(4),ch);
} else {
if((state_val_32786 === (23))){
var state_32785__$1 = state_32785;
var statearr_32808_32852 = state_32785__$1;
(statearr_32808_32852[(2)] = null);

(statearr_32808_32852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (19))){
var inst_32766 = (state_32785[(11)]);
var inst_32716 = (state_32785[(8)]);
var inst_32768 = cljs.core.async.muxch_STAR_.call(null,inst_32766);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32785__$1,(22),inst_32768,inst_32716);
} else {
if((state_val_32786 === (11))){
var inst_32740 = (state_32785[(10)]);
var inst_32726 = (state_32785[(16)]);
var inst_32740__$1 = cljs.core.seq.call(null,inst_32726);
var state_32785__$1 = (function (){var statearr_32809 = state_32785;
(statearr_32809[(10)] = inst_32740__$1);

return statearr_32809;
})();
if(inst_32740__$1){
var statearr_32810_32853 = state_32785__$1;
(statearr_32810_32853[(1)] = (13));

} else {
var statearr_32811_32854 = state_32785__$1;
(statearr_32811_32854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (9))){
var inst_32762 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32812_32855 = state_32785__$1;
(statearr_32812_32855[(2)] = inst_32762);

(statearr_32812_32855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (5))){
var inst_32723 = cljs.core.deref.call(null,mults);
var inst_32724 = cljs.core.vals.call(null,inst_32723);
var inst_32725 = cljs.core.seq.call(null,inst_32724);
var inst_32726 = inst_32725;
var inst_32727 = null;
var inst_32728 = (0);
var inst_32729 = (0);
var state_32785__$1 = (function (){var statearr_32813 = state_32785;
(statearr_32813[(13)] = inst_32729);

(statearr_32813[(14)] = inst_32728);

(statearr_32813[(15)] = inst_32727);

(statearr_32813[(16)] = inst_32726);

return statearr_32813;
})();
var statearr_32814_32856 = state_32785__$1;
(statearr_32814_32856[(2)] = null);

(statearr_32814_32856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (14))){
var state_32785__$1 = state_32785;
var statearr_32818_32857 = state_32785__$1;
(statearr_32818_32857[(2)] = null);

(statearr_32818_32857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (16))){
var inst_32740 = (state_32785[(10)]);
var inst_32744 = cljs.core.chunk_first.call(null,inst_32740);
var inst_32745 = cljs.core.chunk_rest.call(null,inst_32740);
var inst_32746 = cljs.core.count.call(null,inst_32744);
var inst_32726 = inst_32745;
var inst_32727 = inst_32744;
var inst_32728 = inst_32746;
var inst_32729 = (0);
var state_32785__$1 = (function (){var statearr_32819 = state_32785;
(statearr_32819[(13)] = inst_32729);

(statearr_32819[(14)] = inst_32728);

(statearr_32819[(15)] = inst_32727);

(statearr_32819[(16)] = inst_32726);

return statearr_32819;
})();
var statearr_32820_32858 = state_32785__$1;
(statearr_32820_32858[(2)] = null);

(statearr_32820_32858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (10))){
var inst_32729 = (state_32785[(13)]);
var inst_32728 = (state_32785[(14)]);
var inst_32727 = (state_32785[(15)]);
var inst_32726 = (state_32785[(16)]);
var inst_32734 = cljs.core._nth.call(null,inst_32727,inst_32729);
var inst_32735 = cljs.core.async.muxch_STAR_.call(null,inst_32734);
var inst_32736 = cljs.core.async.close_BANG_.call(null,inst_32735);
var inst_32737 = (inst_32729 + (1));
var tmp32815 = inst_32728;
var tmp32816 = inst_32727;
var tmp32817 = inst_32726;
var inst_32726__$1 = tmp32817;
var inst_32727__$1 = tmp32816;
var inst_32728__$1 = tmp32815;
var inst_32729__$1 = inst_32737;
var state_32785__$1 = (function (){var statearr_32821 = state_32785;
(statearr_32821[(13)] = inst_32729__$1);

(statearr_32821[(14)] = inst_32728__$1);

(statearr_32821[(15)] = inst_32727__$1);

(statearr_32821[(17)] = inst_32736);

(statearr_32821[(16)] = inst_32726__$1);

return statearr_32821;
})();
var statearr_32822_32859 = state_32785__$1;
(statearr_32822_32859[(2)] = null);

(statearr_32822_32859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (18))){
var inst_32755 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32823_32860 = state_32785__$1;
(statearr_32823_32860[(2)] = inst_32755);

(statearr_32823_32860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (8))){
var inst_32729 = (state_32785[(13)]);
var inst_32728 = (state_32785[(14)]);
var inst_32731 = (inst_32729 < inst_32728);
var inst_32732 = inst_32731;
var state_32785__$1 = state_32785;
if(cljs.core.truth_(inst_32732)){
var statearr_32824_32861 = state_32785__$1;
(statearr_32824_32861[(1)] = (10));

} else {
var statearr_32825_32862 = state_32785__$1;
(statearr_32825_32862[(1)] = (11));

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
});})(c__26838__auto___32834,mults,ensure_mult,p))
;
return ((function (switch__26776__auto__,c__26838__auto___32834,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_32829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32829[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_32829[(1)] = (1));

return statearr_32829;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_32785){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_32785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e32830){if((e32830 instanceof Object)){
var ex__26780__auto__ = e32830;
var statearr_32831_32863 = state_32785;
(statearr_32831_32863[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32864 = state_32785;
state_32785 = G__32864;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_32785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_32785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___32834,mults,ensure_mult,p))
})();
var state__26840__auto__ = (function (){var statearr_32832 = f__26839__auto__.call(null);
(statearr_32832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___32834);

return statearr_32832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___32834,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__32866 = arguments.length;
switch (G__32866) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__32869 = arguments.length;
switch (G__32869) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__32872 = arguments.length;
switch (G__32872) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26838__auto___32942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___32942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___32942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32911){
var state_val_32912 = (state_32911[(1)]);
if((state_val_32912 === (7))){
var state_32911__$1 = state_32911;
var statearr_32913_32943 = state_32911__$1;
(statearr_32913_32943[(2)] = null);

(statearr_32913_32943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (1))){
var state_32911__$1 = state_32911;
var statearr_32914_32944 = state_32911__$1;
(statearr_32914_32944[(2)] = null);

(statearr_32914_32944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (4))){
var inst_32875 = (state_32911[(7)]);
var inst_32877 = (inst_32875 < cnt);
var state_32911__$1 = state_32911;
if(cljs.core.truth_(inst_32877)){
var statearr_32915_32945 = state_32911__$1;
(statearr_32915_32945[(1)] = (6));

} else {
var statearr_32916_32946 = state_32911__$1;
(statearr_32916_32946[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (15))){
var inst_32907 = (state_32911[(2)]);
var state_32911__$1 = state_32911;
var statearr_32917_32947 = state_32911__$1;
(statearr_32917_32947[(2)] = inst_32907);

(statearr_32917_32947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (13))){
var inst_32900 = cljs.core.async.close_BANG_.call(null,out);
var state_32911__$1 = state_32911;
var statearr_32918_32948 = state_32911__$1;
(statearr_32918_32948[(2)] = inst_32900);

(statearr_32918_32948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (6))){
var state_32911__$1 = state_32911;
var statearr_32919_32949 = state_32911__$1;
(statearr_32919_32949[(2)] = null);

(statearr_32919_32949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (3))){
var inst_32909 = (state_32911[(2)]);
var state_32911__$1 = state_32911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32911__$1,inst_32909);
} else {
if((state_val_32912 === (12))){
var inst_32897 = (state_32911[(8)]);
var inst_32897__$1 = (state_32911[(2)]);
var inst_32898 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32897__$1);
var state_32911__$1 = (function (){var statearr_32920 = state_32911;
(statearr_32920[(8)] = inst_32897__$1);

return statearr_32920;
})();
if(cljs.core.truth_(inst_32898)){
var statearr_32921_32950 = state_32911__$1;
(statearr_32921_32950[(1)] = (13));

} else {
var statearr_32922_32951 = state_32911__$1;
(statearr_32922_32951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (2))){
var inst_32874 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32875 = (0);
var state_32911__$1 = (function (){var statearr_32923 = state_32911;
(statearr_32923[(9)] = inst_32874);

(statearr_32923[(7)] = inst_32875);

return statearr_32923;
})();
var statearr_32924_32952 = state_32911__$1;
(statearr_32924_32952[(2)] = null);

(statearr_32924_32952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (11))){
var inst_32875 = (state_32911[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32911,(10),Object,null,(9));
var inst_32884 = chs__$1.call(null,inst_32875);
var inst_32885 = done.call(null,inst_32875);
var inst_32886 = cljs.core.async.take_BANG_.call(null,inst_32884,inst_32885);
var state_32911__$1 = state_32911;
var statearr_32925_32953 = state_32911__$1;
(statearr_32925_32953[(2)] = inst_32886);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (9))){
var inst_32875 = (state_32911[(7)]);
var inst_32888 = (state_32911[(2)]);
var inst_32889 = (inst_32875 + (1));
var inst_32875__$1 = inst_32889;
var state_32911__$1 = (function (){var statearr_32926 = state_32911;
(statearr_32926[(10)] = inst_32888);

(statearr_32926[(7)] = inst_32875__$1);

return statearr_32926;
})();
var statearr_32927_32954 = state_32911__$1;
(statearr_32927_32954[(2)] = null);

(statearr_32927_32954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (5))){
var inst_32895 = (state_32911[(2)]);
var state_32911__$1 = (function (){var statearr_32928 = state_32911;
(statearr_32928[(11)] = inst_32895);

return statearr_32928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32911__$1,(12),dchan);
} else {
if((state_val_32912 === (14))){
var inst_32897 = (state_32911[(8)]);
var inst_32902 = cljs.core.apply.call(null,f,inst_32897);
var state_32911__$1 = state_32911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32911__$1,(16),out,inst_32902);
} else {
if((state_val_32912 === (16))){
var inst_32904 = (state_32911[(2)]);
var state_32911__$1 = (function (){var statearr_32929 = state_32911;
(statearr_32929[(12)] = inst_32904);

return statearr_32929;
})();
var statearr_32930_32955 = state_32911__$1;
(statearr_32930_32955[(2)] = null);

(statearr_32930_32955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (10))){
var inst_32879 = (state_32911[(2)]);
var inst_32880 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32911__$1 = (function (){var statearr_32931 = state_32911;
(statearr_32931[(13)] = inst_32879);

return statearr_32931;
})();
var statearr_32932_32956 = state_32911__$1;
(statearr_32932_32956[(2)] = inst_32880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32912 === (8))){
var inst_32893 = (state_32911[(2)]);
var state_32911__$1 = state_32911;
var statearr_32933_32957 = state_32911__$1;
(statearr_32933_32957[(2)] = inst_32893);

(statearr_32933_32957[(1)] = (5));


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
});})(c__26838__auto___32942,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26776__auto__,c__26838__auto___32942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_32937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32937[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_32937[(1)] = (1));

return statearr_32937;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_32911){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_32911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e32938){if((e32938 instanceof Object)){
var ex__26780__auto__ = e32938;
var statearr_32939_32958 = state_32911;
(statearr_32939_32958[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32959 = state_32911;
state_32911 = G__32959;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_32911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_32911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___32942,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26840__auto__ = (function (){var statearr_32940 = f__26839__auto__.call(null);
(statearr_32940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___32942);

return statearr_32940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___32942,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__32962 = arguments.length;
switch (G__32962) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26838__auto___33017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___33017,out){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___33017,out){
return (function (state_32992){
var state_val_32993 = (state_32992[(1)]);
if((state_val_32993 === (7))){
var inst_32971 = (state_32992[(7)]);
var inst_32972 = (state_32992[(8)]);
var inst_32971__$1 = (state_32992[(2)]);
var inst_32972__$1 = cljs.core.nth.call(null,inst_32971__$1,(0),null);
var inst_32973 = cljs.core.nth.call(null,inst_32971__$1,(1),null);
var inst_32974 = (inst_32972__$1 == null);
var state_32992__$1 = (function (){var statearr_32994 = state_32992;
(statearr_32994[(9)] = inst_32973);

(statearr_32994[(7)] = inst_32971__$1);

(statearr_32994[(8)] = inst_32972__$1);

return statearr_32994;
})();
if(cljs.core.truth_(inst_32974)){
var statearr_32995_33018 = state_32992__$1;
(statearr_32995_33018[(1)] = (8));

} else {
var statearr_32996_33019 = state_32992__$1;
(statearr_32996_33019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (1))){
var inst_32963 = cljs.core.vec.call(null,chs);
var inst_32964 = inst_32963;
var state_32992__$1 = (function (){var statearr_32997 = state_32992;
(statearr_32997[(10)] = inst_32964);

return statearr_32997;
})();
var statearr_32998_33020 = state_32992__$1;
(statearr_32998_33020[(2)] = null);

(statearr_32998_33020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (4))){
var inst_32964 = (state_32992[(10)]);
var state_32992__$1 = state_32992;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32992__$1,(7),inst_32964);
} else {
if((state_val_32993 === (6))){
var inst_32988 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
var statearr_32999_33021 = state_32992__$1;
(statearr_32999_33021[(2)] = inst_32988);

(statearr_32999_33021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (3))){
var inst_32990 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32992__$1,inst_32990);
} else {
if((state_val_32993 === (2))){
var inst_32964 = (state_32992[(10)]);
var inst_32966 = cljs.core.count.call(null,inst_32964);
var inst_32967 = (inst_32966 > (0));
var state_32992__$1 = state_32992;
if(cljs.core.truth_(inst_32967)){
var statearr_33001_33022 = state_32992__$1;
(statearr_33001_33022[(1)] = (4));

} else {
var statearr_33002_33023 = state_32992__$1;
(statearr_33002_33023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (11))){
var inst_32964 = (state_32992[(10)]);
var inst_32981 = (state_32992[(2)]);
var tmp33000 = inst_32964;
var inst_32964__$1 = tmp33000;
var state_32992__$1 = (function (){var statearr_33003 = state_32992;
(statearr_33003[(10)] = inst_32964__$1);

(statearr_33003[(11)] = inst_32981);

return statearr_33003;
})();
var statearr_33004_33024 = state_32992__$1;
(statearr_33004_33024[(2)] = null);

(statearr_33004_33024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (9))){
var inst_32972 = (state_32992[(8)]);
var state_32992__$1 = state_32992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32992__$1,(11),out,inst_32972);
} else {
if((state_val_32993 === (5))){
var inst_32986 = cljs.core.async.close_BANG_.call(null,out);
var state_32992__$1 = state_32992;
var statearr_33005_33025 = state_32992__$1;
(statearr_33005_33025[(2)] = inst_32986);

(statearr_33005_33025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (10))){
var inst_32984 = (state_32992[(2)]);
var state_32992__$1 = state_32992;
var statearr_33006_33026 = state_32992__$1;
(statearr_33006_33026[(2)] = inst_32984);

(statearr_33006_33026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32993 === (8))){
var inst_32964 = (state_32992[(10)]);
var inst_32973 = (state_32992[(9)]);
var inst_32971 = (state_32992[(7)]);
var inst_32972 = (state_32992[(8)]);
var inst_32976 = (function (){var c = inst_32973;
var v = inst_32972;
var vec__32969 = inst_32971;
var cs = inst_32964;
return ((function (c,v,vec__32969,cs,inst_32964,inst_32973,inst_32971,inst_32972,state_val_32993,c__26838__auto___33017,out){
return (function (p1__32960_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32960_SHARP_);
});
;})(c,v,vec__32969,cs,inst_32964,inst_32973,inst_32971,inst_32972,state_val_32993,c__26838__auto___33017,out))
})();
var inst_32977 = cljs.core.filterv.call(null,inst_32976,inst_32964);
var inst_32964__$1 = inst_32977;
var state_32992__$1 = (function (){var statearr_33007 = state_32992;
(statearr_33007[(10)] = inst_32964__$1);

return statearr_33007;
})();
var statearr_33008_33027 = state_32992__$1;
(statearr_33008_33027[(2)] = null);

(statearr_33008_33027[(1)] = (2));


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
});})(c__26838__auto___33017,out))
;
return ((function (switch__26776__auto__,c__26838__auto___33017,out){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_33012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33012[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_33012[(1)] = (1));

return statearr_33012;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_32992){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_32992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e33013){if((e33013 instanceof Object)){
var ex__26780__auto__ = e33013;
var statearr_33014_33028 = state_32992;
(statearr_33014_33028[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33029 = state_32992;
state_32992 = G__33029;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_32992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_32992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___33017,out))
})();
var state__26840__auto__ = (function (){var statearr_33015 = f__26839__auto__.call(null);
(statearr_33015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___33017);

return statearr_33015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___33017,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__33031 = arguments.length;
switch (G__33031) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26838__auto___33079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___33079,out){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___33079,out){
return (function (state_33055){
var state_val_33056 = (state_33055[(1)]);
if((state_val_33056 === (7))){
var inst_33037 = (state_33055[(7)]);
var inst_33037__$1 = (state_33055[(2)]);
var inst_33038 = (inst_33037__$1 == null);
var inst_33039 = cljs.core.not.call(null,inst_33038);
var state_33055__$1 = (function (){var statearr_33057 = state_33055;
(statearr_33057[(7)] = inst_33037__$1);

return statearr_33057;
})();
if(inst_33039){
var statearr_33058_33080 = state_33055__$1;
(statearr_33058_33080[(1)] = (8));

} else {
var statearr_33059_33081 = state_33055__$1;
(statearr_33059_33081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (1))){
var inst_33032 = (0);
var state_33055__$1 = (function (){var statearr_33060 = state_33055;
(statearr_33060[(8)] = inst_33032);

return statearr_33060;
})();
var statearr_33061_33082 = state_33055__$1;
(statearr_33061_33082[(2)] = null);

(statearr_33061_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (4))){
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33055__$1,(7),ch);
} else {
if((state_val_33056 === (6))){
var inst_33050 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33062_33083 = state_33055__$1;
(statearr_33062_33083[(2)] = inst_33050);

(statearr_33062_33083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (3))){
var inst_33052 = (state_33055[(2)]);
var inst_33053 = cljs.core.async.close_BANG_.call(null,out);
var state_33055__$1 = (function (){var statearr_33063 = state_33055;
(statearr_33063[(9)] = inst_33052);

return statearr_33063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33055__$1,inst_33053);
} else {
if((state_val_33056 === (2))){
var inst_33032 = (state_33055[(8)]);
var inst_33034 = (inst_33032 < n);
var state_33055__$1 = state_33055;
if(cljs.core.truth_(inst_33034)){
var statearr_33064_33084 = state_33055__$1;
(statearr_33064_33084[(1)] = (4));

} else {
var statearr_33065_33085 = state_33055__$1;
(statearr_33065_33085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (11))){
var inst_33032 = (state_33055[(8)]);
var inst_33042 = (state_33055[(2)]);
var inst_33043 = (inst_33032 + (1));
var inst_33032__$1 = inst_33043;
var state_33055__$1 = (function (){var statearr_33066 = state_33055;
(statearr_33066[(8)] = inst_33032__$1);

(statearr_33066[(10)] = inst_33042);

return statearr_33066;
})();
var statearr_33067_33086 = state_33055__$1;
(statearr_33067_33086[(2)] = null);

(statearr_33067_33086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (9))){
var state_33055__$1 = state_33055;
var statearr_33068_33087 = state_33055__$1;
(statearr_33068_33087[(2)] = null);

(statearr_33068_33087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (5))){
var state_33055__$1 = state_33055;
var statearr_33069_33088 = state_33055__$1;
(statearr_33069_33088[(2)] = null);

(statearr_33069_33088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (10))){
var inst_33047 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33070_33089 = state_33055__$1;
(statearr_33070_33089[(2)] = inst_33047);

(statearr_33070_33089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (8))){
var inst_33037 = (state_33055[(7)]);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33055__$1,(11),out,inst_33037);
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
});})(c__26838__auto___33079,out))
;
return ((function (switch__26776__auto__,c__26838__auto___33079,out){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_33074 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33074[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_33074[(1)] = (1));

return statearr_33074;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_33055){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_33055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e33075){if((e33075 instanceof Object)){
var ex__26780__auto__ = e33075;
var statearr_33076_33090 = state_33055;
(statearr_33076_33090[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33091 = state_33055;
state_33055 = G__33091;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_33055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_33055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___33079,out))
})();
var state__26840__auto__ = (function (){var statearr_33077 = f__26839__auto__.call(null);
(statearr_33077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___33079);

return statearr_33077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___33079,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t33099 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33099 = (function (ch,f,map_LT_,meta33100){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33100 = meta33100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33102 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33102 = (function (fn1,_,meta33100,map_LT_,f,ch,meta33103){
this.fn1 = fn1;
this._ = _;
this.meta33100 = meta33100;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33103 = meta33103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33102.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33092_SHARP_){
return f1.call(null,(((p1__33092_SHARP_ == null))?null:self__.f.call(null,p1__33092_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33104){
var self__ = this;
var _33104__$1 = this;
return self__.meta33103;
});})(___$1))
;

cljs.core.async.t33102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33104,meta33103__$1){
var self__ = this;
var _33104__$1 = this;
return (new cljs.core.async.t33102(self__.fn1,self__._,self__.meta33100,self__.map_LT_,self__.f,self__.ch,meta33103__$1));
});})(___$1))
;

cljs.core.async.t33102.cljs$lang$type = true;

cljs.core.async.t33102.cljs$lang$ctorStr = "cljs.core.async/t33102";

cljs.core.async.t33102.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t33102");
});})(___$1))
;

cljs.core.async.__GT_t33102 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t33102(fn1__$1,___$2,meta33100__$1,map_LT___$1,f__$1,ch__$1,meta33103){
return (new cljs.core.async.t33102(fn1__$1,___$2,meta33100__$1,map_LT___$1,f__$1,ch__$1,meta33103));
});})(___$1))
;

}

return (new cljs.core.async.t33102(fn1,___$1,self__.meta33100,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22737__auto__ = ret;
if(cljs.core.truth_(and__22737__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22737__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33101){
var self__ = this;
var _33101__$1 = this;
return self__.meta33100;
});

cljs.core.async.t33099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33101,meta33100__$1){
var self__ = this;
var _33101__$1 = this;
return (new cljs.core.async.t33099(self__.ch,self__.f,self__.map_LT_,meta33100__$1));
});

cljs.core.async.t33099.cljs$lang$type = true;

cljs.core.async.t33099.cljs$lang$ctorStr = "cljs.core.async/t33099";

cljs.core.async.t33099.cljs$lang$ctorPrWriter = (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t33099");
});

cljs.core.async.__GT_t33099 = (function cljs$core$async$map_LT__$___GT_t33099(ch__$1,f__$1,map_LT___$1,meta33100){
return (new cljs.core.async.t33099(ch__$1,f__$1,map_LT___$1,meta33100));
});

}

return (new cljs.core.async.t33099(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t33108 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33108 = (function (ch,f,map_GT_,meta33109){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33109 = meta33109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33110){
var self__ = this;
var _33110__$1 = this;
return self__.meta33109;
});

cljs.core.async.t33108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33110,meta33109__$1){
var self__ = this;
var _33110__$1 = this;
return (new cljs.core.async.t33108(self__.ch,self__.f,self__.map_GT_,meta33109__$1));
});

cljs.core.async.t33108.cljs$lang$type = true;

cljs.core.async.t33108.cljs$lang$ctorStr = "cljs.core.async/t33108";

cljs.core.async.t33108.cljs$lang$ctorPrWriter = (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t33108");
});

cljs.core.async.__GT_t33108 = (function cljs$core$async$map_GT__$___GT_t33108(ch__$1,f__$1,map_GT___$1,meta33109){
return (new cljs.core.async.t33108(ch__$1,f__$1,map_GT___$1,meta33109));
});

}

return (new cljs.core.async.t33108(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t33114 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33114 = (function (ch,p,filter_GT_,meta33115){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33115 = meta33115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33116){
var self__ = this;
var _33116__$1 = this;
return self__.meta33115;
});

cljs.core.async.t33114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33116,meta33115__$1){
var self__ = this;
var _33116__$1 = this;
return (new cljs.core.async.t33114(self__.ch,self__.p,self__.filter_GT_,meta33115__$1));
});

cljs.core.async.t33114.cljs$lang$type = true;

cljs.core.async.t33114.cljs$lang$ctorStr = "cljs.core.async/t33114";

cljs.core.async.t33114.cljs$lang$ctorPrWriter = (function (this__23328__auto__,writer__23329__auto__,opt__23330__auto__){
return cljs.core._write.call(null,writer__23329__auto__,"cljs.core.async/t33114");
});

cljs.core.async.__GT_t33114 = (function cljs$core$async$filter_GT__$___GT_t33114(ch__$1,p__$1,filter_GT___$1,meta33115){
return (new cljs.core.async.t33114(ch__$1,p__$1,filter_GT___$1,meta33115));
});

}

return (new cljs.core.async.t33114(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__33118 = arguments.length;
switch (G__33118) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26838__auto___33161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___33161,out){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___33161,out){
return (function (state_33139){
var state_val_33140 = (state_33139[(1)]);
if((state_val_33140 === (7))){
var inst_33135 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
var statearr_33141_33162 = state_33139__$1;
(statearr_33141_33162[(2)] = inst_33135);

(statearr_33141_33162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (1))){
var state_33139__$1 = state_33139;
var statearr_33142_33163 = state_33139__$1;
(statearr_33142_33163[(2)] = null);

(statearr_33142_33163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (4))){
var inst_33121 = (state_33139[(7)]);
var inst_33121__$1 = (state_33139[(2)]);
var inst_33122 = (inst_33121__$1 == null);
var state_33139__$1 = (function (){var statearr_33143 = state_33139;
(statearr_33143[(7)] = inst_33121__$1);

return statearr_33143;
})();
if(cljs.core.truth_(inst_33122)){
var statearr_33144_33164 = state_33139__$1;
(statearr_33144_33164[(1)] = (5));

} else {
var statearr_33145_33165 = state_33139__$1;
(statearr_33145_33165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (6))){
var inst_33121 = (state_33139[(7)]);
var inst_33126 = p.call(null,inst_33121);
var state_33139__$1 = state_33139;
if(cljs.core.truth_(inst_33126)){
var statearr_33146_33166 = state_33139__$1;
(statearr_33146_33166[(1)] = (8));

} else {
var statearr_33147_33167 = state_33139__$1;
(statearr_33147_33167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (3))){
var inst_33137 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33139__$1,inst_33137);
} else {
if((state_val_33140 === (2))){
var state_33139__$1 = state_33139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33139__$1,(4),ch);
} else {
if((state_val_33140 === (11))){
var inst_33129 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
var statearr_33148_33168 = state_33139__$1;
(statearr_33148_33168[(2)] = inst_33129);

(statearr_33148_33168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (9))){
var state_33139__$1 = state_33139;
var statearr_33149_33169 = state_33139__$1;
(statearr_33149_33169[(2)] = null);

(statearr_33149_33169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (5))){
var inst_33124 = cljs.core.async.close_BANG_.call(null,out);
var state_33139__$1 = state_33139;
var statearr_33150_33170 = state_33139__$1;
(statearr_33150_33170[(2)] = inst_33124);

(statearr_33150_33170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (10))){
var inst_33132 = (state_33139[(2)]);
var state_33139__$1 = (function (){var statearr_33151 = state_33139;
(statearr_33151[(8)] = inst_33132);

return statearr_33151;
})();
var statearr_33152_33171 = state_33139__$1;
(statearr_33152_33171[(2)] = null);

(statearr_33152_33171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (8))){
var inst_33121 = (state_33139[(7)]);
var state_33139__$1 = state_33139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33139__$1,(11),out,inst_33121);
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
});})(c__26838__auto___33161,out))
;
return ((function (switch__26776__auto__,c__26838__auto___33161,out){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_33156 = [null,null,null,null,null,null,null,null,null];
(statearr_33156[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_33156[(1)] = (1));

return statearr_33156;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_33139){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_33139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e33157){if((e33157 instanceof Object)){
var ex__26780__auto__ = e33157;
var statearr_33158_33172 = state_33139;
(statearr_33158_33172[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33173 = state_33139;
state_33139 = G__33173;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_33139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_33139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___33161,out))
})();
var state__26840__auto__ = (function (){var statearr_33159 = f__26839__auto__.call(null);
(statearr_33159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___33161);

return statearr_33159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___33161,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__33175 = arguments.length;
switch (G__33175) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__){
return (function (state_33342){
var state_val_33343 = (state_33342[(1)]);
if((state_val_33343 === (7))){
var inst_33338 = (state_33342[(2)]);
var state_33342__$1 = state_33342;
var statearr_33344_33385 = state_33342__$1;
(statearr_33344_33385[(2)] = inst_33338);

(statearr_33344_33385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (20))){
var inst_33308 = (state_33342[(7)]);
var inst_33319 = (state_33342[(2)]);
var inst_33320 = cljs.core.next.call(null,inst_33308);
var inst_33294 = inst_33320;
var inst_33295 = null;
var inst_33296 = (0);
var inst_33297 = (0);
var state_33342__$1 = (function (){var statearr_33345 = state_33342;
(statearr_33345[(8)] = inst_33295);

(statearr_33345[(9)] = inst_33319);

(statearr_33345[(10)] = inst_33297);

(statearr_33345[(11)] = inst_33296);

(statearr_33345[(12)] = inst_33294);

return statearr_33345;
})();
var statearr_33346_33386 = state_33342__$1;
(statearr_33346_33386[(2)] = null);

(statearr_33346_33386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (1))){
var state_33342__$1 = state_33342;
var statearr_33347_33387 = state_33342__$1;
(statearr_33347_33387[(2)] = null);

(statearr_33347_33387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (4))){
var inst_33283 = (state_33342[(13)]);
var inst_33283__$1 = (state_33342[(2)]);
var inst_33284 = (inst_33283__$1 == null);
var state_33342__$1 = (function (){var statearr_33348 = state_33342;
(statearr_33348[(13)] = inst_33283__$1);

return statearr_33348;
})();
if(cljs.core.truth_(inst_33284)){
var statearr_33349_33388 = state_33342__$1;
(statearr_33349_33388[(1)] = (5));

} else {
var statearr_33350_33389 = state_33342__$1;
(statearr_33350_33389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (15))){
var state_33342__$1 = state_33342;
var statearr_33354_33390 = state_33342__$1;
(statearr_33354_33390[(2)] = null);

(statearr_33354_33390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (21))){
var state_33342__$1 = state_33342;
var statearr_33355_33391 = state_33342__$1;
(statearr_33355_33391[(2)] = null);

(statearr_33355_33391[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (13))){
var inst_33295 = (state_33342[(8)]);
var inst_33297 = (state_33342[(10)]);
var inst_33296 = (state_33342[(11)]);
var inst_33294 = (state_33342[(12)]);
var inst_33304 = (state_33342[(2)]);
var inst_33305 = (inst_33297 + (1));
var tmp33351 = inst_33295;
var tmp33352 = inst_33296;
var tmp33353 = inst_33294;
var inst_33294__$1 = tmp33353;
var inst_33295__$1 = tmp33351;
var inst_33296__$1 = tmp33352;
var inst_33297__$1 = inst_33305;
var state_33342__$1 = (function (){var statearr_33356 = state_33342;
(statearr_33356[(8)] = inst_33295__$1);

(statearr_33356[(10)] = inst_33297__$1);

(statearr_33356[(11)] = inst_33296__$1);

(statearr_33356[(12)] = inst_33294__$1);

(statearr_33356[(14)] = inst_33304);

return statearr_33356;
})();
var statearr_33357_33392 = state_33342__$1;
(statearr_33357_33392[(2)] = null);

(statearr_33357_33392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (22))){
var state_33342__$1 = state_33342;
var statearr_33358_33393 = state_33342__$1;
(statearr_33358_33393[(2)] = null);

(statearr_33358_33393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (6))){
var inst_33283 = (state_33342[(13)]);
var inst_33292 = f.call(null,inst_33283);
var inst_33293 = cljs.core.seq.call(null,inst_33292);
var inst_33294 = inst_33293;
var inst_33295 = null;
var inst_33296 = (0);
var inst_33297 = (0);
var state_33342__$1 = (function (){var statearr_33359 = state_33342;
(statearr_33359[(8)] = inst_33295);

(statearr_33359[(10)] = inst_33297);

(statearr_33359[(11)] = inst_33296);

(statearr_33359[(12)] = inst_33294);

return statearr_33359;
})();
var statearr_33360_33394 = state_33342__$1;
(statearr_33360_33394[(2)] = null);

(statearr_33360_33394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (17))){
var inst_33308 = (state_33342[(7)]);
var inst_33312 = cljs.core.chunk_first.call(null,inst_33308);
var inst_33313 = cljs.core.chunk_rest.call(null,inst_33308);
var inst_33314 = cljs.core.count.call(null,inst_33312);
var inst_33294 = inst_33313;
var inst_33295 = inst_33312;
var inst_33296 = inst_33314;
var inst_33297 = (0);
var state_33342__$1 = (function (){var statearr_33361 = state_33342;
(statearr_33361[(8)] = inst_33295);

(statearr_33361[(10)] = inst_33297);

(statearr_33361[(11)] = inst_33296);

(statearr_33361[(12)] = inst_33294);

return statearr_33361;
})();
var statearr_33362_33395 = state_33342__$1;
(statearr_33362_33395[(2)] = null);

(statearr_33362_33395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (3))){
var inst_33340 = (state_33342[(2)]);
var state_33342__$1 = state_33342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33342__$1,inst_33340);
} else {
if((state_val_33343 === (12))){
var inst_33328 = (state_33342[(2)]);
var state_33342__$1 = state_33342;
var statearr_33363_33396 = state_33342__$1;
(statearr_33363_33396[(2)] = inst_33328);

(statearr_33363_33396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (2))){
var state_33342__$1 = state_33342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33342__$1,(4),in$);
} else {
if((state_val_33343 === (23))){
var inst_33336 = (state_33342[(2)]);
var state_33342__$1 = state_33342;
var statearr_33364_33397 = state_33342__$1;
(statearr_33364_33397[(2)] = inst_33336);

(statearr_33364_33397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (19))){
var inst_33323 = (state_33342[(2)]);
var state_33342__$1 = state_33342;
var statearr_33365_33398 = state_33342__$1;
(statearr_33365_33398[(2)] = inst_33323);

(statearr_33365_33398[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (11))){
var inst_33308 = (state_33342[(7)]);
var inst_33294 = (state_33342[(12)]);
var inst_33308__$1 = cljs.core.seq.call(null,inst_33294);
var state_33342__$1 = (function (){var statearr_33366 = state_33342;
(statearr_33366[(7)] = inst_33308__$1);

return statearr_33366;
})();
if(inst_33308__$1){
var statearr_33367_33399 = state_33342__$1;
(statearr_33367_33399[(1)] = (14));

} else {
var statearr_33368_33400 = state_33342__$1;
(statearr_33368_33400[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (9))){
var inst_33330 = (state_33342[(2)]);
var inst_33331 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33342__$1 = (function (){var statearr_33369 = state_33342;
(statearr_33369[(15)] = inst_33330);

return statearr_33369;
})();
if(cljs.core.truth_(inst_33331)){
var statearr_33370_33401 = state_33342__$1;
(statearr_33370_33401[(1)] = (21));

} else {
var statearr_33371_33402 = state_33342__$1;
(statearr_33371_33402[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (5))){
var inst_33286 = cljs.core.async.close_BANG_.call(null,out);
var state_33342__$1 = state_33342;
var statearr_33372_33403 = state_33342__$1;
(statearr_33372_33403[(2)] = inst_33286);

(statearr_33372_33403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (14))){
var inst_33308 = (state_33342[(7)]);
var inst_33310 = cljs.core.chunked_seq_QMARK_.call(null,inst_33308);
var state_33342__$1 = state_33342;
if(inst_33310){
var statearr_33373_33404 = state_33342__$1;
(statearr_33373_33404[(1)] = (17));

} else {
var statearr_33374_33405 = state_33342__$1;
(statearr_33374_33405[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (16))){
var inst_33326 = (state_33342[(2)]);
var state_33342__$1 = state_33342;
var statearr_33375_33406 = state_33342__$1;
(statearr_33375_33406[(2)] = inst_33326);

(statearr_33375_33406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33343 === (10))){
var inst_33295 = (state_33342[(8)]);
var inst_33297 = (state_33342[(10)]);
var inst_33302 = cljs.core._nth.call(null,inst_33295,inst_33297);
var state_33342__$1 = state_33342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33342__$1,(13),out,inst_33302);
} else {
if((state_val_33343 === (18))){
var inst_33308 = (state_33342[(7)]);
var inst_33317 = cljs.core.first.call(null,inst_33308);
var state_33342__$1 = state_33342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33342__$1,(20),out,inst_33317);
} else {
if((state_val_33343 === (8))){
var inst_33297 = (state_33342[(10)]);
var inst_33296 = (state_33342[(11)]);
var inst_33299 = (inst_33297 < inst_33296);
var inst_33300 = inst_33299;
var state_33342__$1 = state_33342;
if(cljs.core.truth_(inst_33300)){
var statearr_33376_33407 = state_33342__$1;
(statearr_33376_33407[(1)] = (10));

} else {
var statearr_33377_33408 = state_33342__$1;
(statearr_33377_33408[(1)] = (11));

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
});})(c__26838__auto__))
;
return ((function (switch__26776__auto__,c__26838__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26777__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26777__auto____0 = (function (){
var statearr_33381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33381[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26777__auto__);

(statearr_33381[(1)] = (1));

return statearr_33381;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26777__auto____1 = (function (state_33342){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_33342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e33382){if((e33382 instanceof Object)){
var ex__26780__auto__ = e33382;
var statearr_33383_33409 = state_33342;
(statearr_33383_33409[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33410 = state_33342;
state_33342 = G__33410;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26777__auto__ = function(state_33342){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26777__auto____1.call(this,state_33342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26777__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26777__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__))
})();
var state__26840__auto__ = (function (){var statearr_33384 = f__26839__auto__.call(null);
(statearr_33384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_33384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__))
);

return c__26838__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__33412 = arguments.length;
switch (G__33412) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__33415 = arguments.length;
switch (G__33415) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__33418 = arguments.length;
switch (G__33418) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26838__auto___33468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___33468,out){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___33468,out){
return (function (state_33442){
var state_val_33443 = (state_33442[(1)]);
if((state_val_33443 === (7))){
var inst_33437 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
var statearr_33444_33469 = state_33442__$1;
(statearr_33444_33469[(2)] = inst_33437);

(statearr_33444_33469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (1))){
var inst_33419 = null;
var state_33442__$1 = (function (){var statearr_33445 = state_33442;
(statearr_33445[(7)] = inst_33419);

return statearr_33445;
})();
var statearr_33446_33470 = state_33442__$1;
(statearr_33446_33470[(2)] = null);

(statearr_33446_33470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (4))){
var inst_33422 = (state_33442[(8)]);
var inst_33422__$1 = (state_33442[(2)]);
var inst_33423 = (inst_33422__$1 == null);
var inst_33424 = cljs.core.not.call(null,inst_33423);
var state_33442__$1 = (function (){var statearr_33447 = state_33442;
(statearr_33447[(8)] = inst_33422__$1);

return statearr_33447;
})();
if(inst_33424){
var statearr_33448_33471 = state_33442__$1;
(statearr_33448_33471[(1)] = (5));

} else {
var statearr_33449_33472 = state_33442__$1;
(statearr_33449_33472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (6))){
var state_33442__$1 = state_33442;
var statearr_33450_33473 = state_33442__$1;
(statearr_33450_33473[(2)] = null);

(statearr_33450_33473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (3))){
var inst_33439 = (state_33442[(2)]);
var inst_33440 = cljs.core.async.close_BANG_.call(null,out);
var state_33442__$1 = (function (){var statearr_33451 = state_33442;
(statearr_33451[(9)] = inst_33439);

return statearr_33451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33442__$1,inst_33440);
} else {
if((state_val_33443 === (2))){
var state_33442__$1 = state_33442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33442__$1,(4),ch);
} else {
if((state_val_33443 === (11))){
var inst_33422 = (state_33442[(8)]);
var inst_33431 = (state_33442[(2)]);
var inst_33419 = inst_33422;
var state_33442__$1 = (function (){var statearr_33452 = state_33442;
(statearr_33452[(7)] = inst_33419);

(statearr_33452[(10)] = inst_33431);

return statearr_33452;
})();
var statearr_33453_33474 = state_33442__$1;
(statearr_33453_33474[(2)] = null);

(statearr_33453_33474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (9))){
var inst_33422 = (state_33442[(8)]);
var state_33442__$1 = state_33442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33442__$1,(11),out,inst_33422);
} else {
if((state_val_33443 === (5))){
var inst_33422 = (state_33442[(8)]);
var inst_33419 = (state_33442[(7)]);
var inst_33426 = cljs.core._EQ_.call(null,inst_33422,inst_33419);
var state_33442__$1 = state_33442;
if(inst_33426){
var statearr_33455_33475 = state_33442__$1;
(statearr_33455_33475[(1)] = (8));

} else {
var statearr_33456_33476 = state_33442__$1;
(statearr_33456_33476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (10))){
var inst_33434 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
var statearr_33457_33477 = state_33442__$1;
(statearr_33457_33477[(2)] = inst_33434);

(statearr_33457_33477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (8))){
var inst_33419 = (state_33442[(7)]);
var tmp33454 = inst_33419;
var inst_33419__$1 = tmp33454;
var state_33442__$1 = (function (){var statearr_33458 = state_33442;
(statearr_33458[(7)] = inst_33419__$1);

return statearr_33458;
})();
var statearr_33459_33478 = state_33442__$1;
(statearr_33459_33478[(2)] = null);

(statearr_33459_33478[(1)] = (2));


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
});})(c__26838__auto___33468,out))
;
return ((function (switch__26776__auto__,c__26838__auto___33468,out){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_33463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33463[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_33463[(1)] = (1));

return statearr_33463;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_33442){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_33442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e33464){if((e33464 instanceof Object)){
var ex__26780__auto__ = e33464;
var statearr_33465_33479 = state_33442;
(statearr_33465_33479[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33480 = state_33442;
state_33442 = G__33480;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_33442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_33442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___33468,out))
})();
var state__26840__auto__ = (function (){var statearr_33466 = f__26839__auto__.call(null);
(statearr_33466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___33468);

return statearr_33466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___33468,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__33482 = arguments.length;
switch (G__33482) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26838__auto___33551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___33551,out){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___33551,out){
return (function (state_33520){
var state_val_33521 = (state_33520[(1)]);
if((state_val_33521 === (7))){
var inst_33516 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33522_33552 = state_33520__$1;
(statearr_33522_33552[(2)] = inst_33516);

(statearr_33522_33552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (1))){
var inst_33483 = (new Array(n));
var inst_33484 = inst_33483;
var inst_33485 = (0);
var state_33520__$1 = (function (){var statearr_33523 = state_33520;
(statearr_33523[(7)] = inst_33485);

(statearr_33523[(8)] = inst_33484);

return statearr_33523;
})();
var statearr_33524_33553 = state_33520__$1;
(statearr_33524_33553[(2)] = null);

(statearr_33524_33553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (4))){
var inst_33488 = (state_33520[(9)]);
var inst_33488__$1 = (state_33520[(2)]);
var inst_33489 = (inst_33488__$1 == null);
var inst_33490 = cljs.core.not.call(null,inst_33489);
var state_33520__$1 = (function (){var statearr_33525 = state_33520;
(statearr_33525[(9)] = inst_33488__$1);

return statearr_33525;
})();
if(inst_33490){
var statearr_33526_33554 = state_33520__$1;
(statearr_33526_33554[(1)] = (5));

} else {
var statearr_33527_33555 = state_33520__$1;
(statearr_33527_33555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (15))){
var inst_33510 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33528_33556 = state_33520__$1;
(statearr_33528_33556[(2)] = inst_33510);

(statearr_33528_33556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (13))){
var state_33520__$1 = state_33520;
var statearr_33529_33557 = state_33520__$1;
(statearr_33529_33557[(2)] = null);

(statearr_33529_33557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (6))){
var inst_33485 = (state_33520[(7)]);
var inst_33506 = (inst_33485 > (0));
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33506)){
var statearr_33530_33558 = state_33520__$1;
(statearr_33530_33558[(1)] = (12));

} else {
var statearr_33531_33559 = state_33520__$1;
(statearr_33531_33559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (3))){
var inst_33518 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33520__$1,inst_33518);
} else {
if((state_val_33521 === (12))){
var inst_33484 = (state_33520[(8)]);
var inst_33508 = cljs.core.vec.call(null,inst_33484);
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33520__$1,(15),out,inst_33508);
} else {
if((state_val_33521 === (2))){
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33520__$1,(4),ch);
} else {
if((state_val_33521 === (11))){
var inst_33500 = (state_33520[(2)]);
var inst_33501 = (new Array(n));
var inst_33484 = inst_33501;
var inst_33485 = (0);
var state_33520__$1 = (function (){var statearr_33532 = state_33520;
(statearr_33532[(10)] = inst_33500);

(statearr_33532[(7)] = inst_33485);

(statearr_33532[(8)] = inst_33484);

return statearr_33532;
})();
var statearr_33533_33560 = state_33520__$1;
(statearr_33533_33560[(2)] = null);

(statearr_33533_33560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (9))){
var inst_33484 = (state_33520[(8)]);
var inst_33498 = cljs.core.vec.call(null,inst_33484);
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33520__$1,(11),out,inst_33498);
} else {
if((state_val_33521 === (5))){
var inst_33485 = (state_33520[(7)]);
var inst_33488 = (state_33520[(9)]);
var inst_33493 = (state_33520[(11)]);
var inst_33484 = (state_33520[(8)]);
var inst_33492 = (inst_33484[inst_33485] = inst_33488);
var inst_33493__$1 = (inst_33485 + (1));
var inst_33494 = (inst_33493__$1 < n);
var state_33520__$1 = (function (){var statearr_33534 = state_33520;
(statearr_33534[(12)] = inst_33492);

(statearr_33534[(11)] = inst_33493__$1);

return statearr_33534;
})();
if(cljs.core.truth_(inst_33494)){
var statearr_33535_33561 = state_33520__$1;
(statearr_33535_33561[(1)] = (8));

} else {
var statearr_33536_33562 = state_33520__$1;
(statearr_33536_33562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (14))){
var inst_33513 = (state_33520[(2)]);
var inst_33514 = cljs.core.async.close_BANG_.call(null,out);
var state_33520__$1 = (function (){var statearr_33538 = state_33520;
(statearr_33538[(13)] = inst_33513);

return statearr_33538;
})();
var statearr_33539_33563 = state_33520__$1;
(statearr_33539_33563[(2)] = inst_33514);

(statearr_33539_33563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (10))){
var inst_33504 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33540_33564 = state_33520__$1;
(statearr_33540_33564[(2)] = inst_33504);

(statearr_33540_33564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (8))){
var inst_33493 = (state_33520[(11)]);
var inst_33484 = (state_33520[(8)]);
var tmp33537 = inst_33484;
var inst_33484__$1 = tmp33537;
var inst_33485 = inst_33493;
var state_33520__$1 = (function (){var statearr_33541 = state_33520;
(statearr_33541[(7)] = inst_33485);

(statearr_33541[(8)] = inst_33484__$1);

return statearr_33541;
})();
var statearr_33542_33565 = state_33520__$1;
(statearr_33542_33565[(2)] = null);

(statearr_33542_33565[(1)] = (2));


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
});})(c__26838__auto___33551,out))
;
return ((function (switch__26776__auto__,c__26838__auto___33551,out){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_33546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33546[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_33546[(1)] = (1));

return statearr_33546;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_33520){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_33520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e33547){if((e33547 instanceof Object)){
var ex__26780__auto__ = e33547;
var statearr_33548_33566 = state_33520;
(statearr_33548_33566[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33567 = state_33520;
state_33520 = G__33567;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_33520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_33520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___33551,out))
})();
var state__26840__auto__ = (function (){var statearr_33549 = f__26839__auto__.call(null);
(statearr_33549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___33551);

return statearr_33549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___33551,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__33569 = arguments.length;
switch (G__33569) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26838__auto___33642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___33642,out){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___33642,out){
return (function (state_33611){
var state_val_33612 = (state_33611[(1)]);
if((state_val_33612 === (7))){
var inst_33607 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
var statearr_33613_33643 = state_33611__$1;
(statearr_33613_33643[(2)] = inst_33607);

(statearr_33613_33643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (1))){
var inst_33570 = [];
var inst_33571 = inst_33570;
var inst_33572 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33611__$1 = (function (){var statearr_33614 = state_33611;
(statearr_33614[(7)] = inst_33571);

(statearr_33614[(8)] = inst_33572);

return statearr_33614;
})();
var statearr_33615_33644 = state_33611__$1;
(statearr_33615_33644[(2)] = null);

(statearr_33615_33644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (4))){
var inst_33575 = (state_33611[(9)]);
var inst_33575__$1 = (state_33611[(2)]);
var inst_33576 = (inst_33575__$1 == null);
var inst_33577 = cljs.core.not.call(null,inst_33576);
var state_33611__$1 = (function (){var statearr_33616 = state_33611;
(statearr_33616[(9)] = inst_33575__$1);

return statearr_33616;
})();
if(inst_33577){
var statearr_33617_33645 = state_33611__$1;
(statearr_33617_33645[(1)] = (5));

} else {
var statearr_33618_33646 = state_33611__$1;
(statearr_33618_33646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (15))){
var inst_33601 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
var statearr_33619_33647 = state_33611__$1;
(statearr_33619_33647[(2)] = inst_33601);

(statearr_33619_33647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (13))){
var state_33611__$1 = state_33611;
var statearr_33620_33648 = state_33611__$1;
(statearr_33620_33648[(2)] = null);

(statearr_33620_33648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (6))){
var inst_33571 = (state_33611[(7)]);
var inst_33596 = inst_33571.length;
var inst_33597 = (inst_33596 > (0));
var state_33611__$1 = state_33611;
if(cljs.core.truth_(inst_33597)){
var statearr_33621_33649 = state_33611__$1;
(statearr_33621_33649[(1)] = (12));

} else {
var statearr_33622_33650 = state_33611__$1;
(statearr_33622_33650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (3))){
var inst_33609 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33611__$1,inst_33609);
} else {
if((state_val_33612 === (12))){
var inst_33571 = (state_33611[(7)]);
var inst_33599 = cljs.core.vec.call(null,inst_33571);
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33611__$1,(15),out,inst_33599);
} else {
if((state_val_33612 === (2))){
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33611__$1,(4),ch);
} else {
if((state_val_33612 === (11))){
var inst_33575 = (state_33611[(9)]);
var inst_33579 = (state_33611[(10)]);
var inst_33589 = (state_33611[(2)]);
var inst_33590 = [];
var inst_33591 = inst_33590.push(inst_33575);
var inst_33571 = inst_33590;
var inst_33572 = inst_33579;
var state_33611__$1 = (function (){var statearr_33623 = state_33611;
(statearr_33623[(7)] = inst_33571);

(statearr_33623[(11)] = inst_33589);

(statearr_33623[(8)] = inst_33572);

(statearr_33623[(12)] = inst_33591);

return statearr_33623;
})();
var statearr_33624_33651 = state_33611__$1;
(statearr_33624_33651[(2)] = null);

(statearr_33624_33651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (9))){
var inst_33571 = (state_33611[(7)]);
var inst_33587 = cljs.core.vec.call(null,inst_33571);
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33611__$1,(11),out,inst_33587);
} else {
if((state_val_33612 === (5))){
var inst_33572 = (state_33611[(8)]);
var inst_33575 = (state_33611[(9)]);
var inst_33579 = (state_33611[(10)]);
var inst_33579__$1 = f.call(null,inst_33575);
var inst_33580 = cljs.core._EQ_.call(null,inst_33579__$1,inst_33572);
var inst_33581 = cljs.core.keyword_identical_QMARK_.call(null,inst_33572,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33582 = (inst_33580) || (inst_33581);
var state_33611__$1 = (function (){var statearr_33625 = state_33611;
(statearr_33625[(10)] = inst_33579__$1);

return statearr_33625;
})();
if(cljs.core.truth_(inst_33582)){
var statearr_33626_33652 = state_33611__$1;
(statearr_33626_33652[(1)] = (8));

} else {
var statearr_33627_33653 = state_33611__$1;
(statearr_33627_33653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (14))){
var inst_33604 = (state_33611[(2)]);
var inst_33605 = cljs.core.async.close_BANG_.call(null,out);
var state_33611__$1 = (function (){var statearr_33629 = state_33611;
(statearr_33629[(13)] = inst_33604);

return statearr_33629;
})();
var statearr_33630_33654 = state_33611__$1;
(statearr_33630_33654[(2)] = inst_33605);

(statearr_33630_33654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (10))){
var inst_33594 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
var statearr_33631_33655 = state_33611__$1;
(statearr_33631_33655[(2)] = inst_33594);

(statearr_33631_33655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33612 === (8))){
var inst_33571 = (state_33611[(7)]);
var inst_33575 = (state_33611[(9)]);
var inst_33579 = (state_33611[(10)]);
var inst_33584 = inst_33571.push(inst_33575);
var tmp33628 = inst_33571;
var inst_33571__$1 = tmp33628;
var inst_33572 = inst_33579;
var state_33611__$1 = (function (){var statearr_33632 = state_33611;
(statearr_33632[(7)] = inst_33571__$1);

(statearr_33632[(8)] = inst_33572);

(statearr_33632[(14)] = inst_33584);

return statearr_33632;
})();
var statearr_33633_33656 = state_33611__$1;
(statearr_33633_33656[(2)] = null);

(statearr_33633_33656[(1)] = (2));


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
});})(c__26838__auto___33642,out))
;
return ((function (switch__26776__auto__,c__26838__auto___33642,out){
return (function() {
var cljs$core$async$state_machine__26777__auto__ = null;
var cljs$core$async$state_machine__26777__auto____0 = (function (){
var statearr_33637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33637[(0)] = cljs$core$async$state_machine__26777__auto__);

(statearr_33637[(1)] = (1));

return statearr_33637;
});
var cljs$core$async$state_machine__26777__auto____1 = (function (state_33611){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_33611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e33638){if((e33638 instanceof Object)){
var ex__26780__auto__ = e33638;
var statearr_33639_33657 = state_33611;
(statearr_33639_33657[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33658 = state_33611;
state_33611 = G__33658;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
cljs$core$async$state_machine__26777__auto__ = function(state_33611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26777__auto____1.call(this,state_33611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26777__auto____0;
cljs$core$async$state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26777__auto____1;
return cljs$core$async$state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___33642,out))
})();
var state__26840__auto__ = (function (){var statearr_33640 = f__26839__auto__.call(null);
(statearr_33640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___33642);

return statearr_33640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___33642,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1445200154781