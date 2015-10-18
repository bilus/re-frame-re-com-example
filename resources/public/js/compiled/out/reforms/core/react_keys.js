// Compiled by ClojureScript 0.0-3211 {}
goog.provide('reforms.core.react_keys');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('clojure.string');
goog.require('reforms.binding.core');
reforms.core.react_keys.to_str = (function reforms$core$react_keys$to_str(x){
if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,x))){
return clojure.string.join.call(null,"-",cljs.core.map.call(null,reforms$core$react_keys$to_str,reforms.binding.core.path.call(null,x)));
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return clojure.string.join.call(null,"-",cljs.core.map.call(null,reforms$core$react_keys$to_str,x));
} else {
return [cljs.core.str(x)].join('');

}
}
}
});
reforms.core.react_keys.gen_key = (function reforms$core$react_keys$gen_key(){
var argseq__23789__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.react_keys.gen_key.cljs$core$IFn$_invoke$arity$variadic(argseq__23789__auto__);
});

reforms.core.react_keys.gen_key.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var or__22749__auto__ = cljs.core.not_empty.call(null,clojure.string.replace.call(null,clojure.string.lower_case.call(null,clojure.string.join.call(null,"-",cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.map.call(null,reforms.core.react_keys.to_str,cljs.core.remove.call(null,cljs.core.nil_QMARK_,args))))),/[^a-zA-Z0-9_$]/,"-"));
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
});

reforms.core.react_keys.gen_key.cljs$lang$maxFixedArity = (0);

reforms.core.react_keys.gen_key.cljs$lang$applyTo = (function (seq33888){
return reforms.core.react_keys.gen_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33888));
});

//# sourceMappingURL=react_keys.js.map?rel=1445200158560