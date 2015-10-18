// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('re_frame_re_com_example.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__36536__delegate = function (x){
if(cljs.core.truth_(re_frame_re_com_example.core.mount_root)){
return cljs.core.apply.call(null,re_frame_re_com_example.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 're-frame-re-com-example.core/mount-root' is missing");
}
};
var G__36536 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__36537__i = 0, G__36537__a = new Array(arguments.length -  0);
while (G__36537__i < G__36537__a.length) {G__36537__a[G__36537__i] = arguments[G__36537__i + 0]; ++G__36537__i;}
  x = new cljs.core.IndexedSeq(G__36537__a,0);
} 
return G__36536__delegate.call(this,x);};
G__36536.cljs$lang$maxFixedArity = 0;
G__36536.cljs$lang$applyTo = (function (arglist__36538){
var x = cljs.core.seq(arglist__36538);
return G__36536__delegate(x);
});
G__36536.cljs$core$IFn$_invoke$arity$variadic = G__36536__delegate;
return G__36536;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1445200179919