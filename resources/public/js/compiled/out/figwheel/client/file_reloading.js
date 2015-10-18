// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__35871_SHARP_,p2__35872_SHARP_){
var and__22737__auto__ = p1__35871_SHARP_;
if(cljs.core.truth_(and__22737__auto__)){
return p2__35872_SHARP_;
} else {
return and__22737__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__22749__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22749__auto__){
return or__22749__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__22749__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__22749__auto__){
return or__22749__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__22749__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__23644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23648__auto__,method_table__23644__auto__,prefer_table__23645__auto__,method_cache__23646__auto__,cached_hierarchy__23647__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35873){
var map__35874 = p__35873;
var map__35874__$1 = ((cljs.core.seq_QMARK_.call(null,map__35874))?cljs.core.apply.call(null,cljs.core.hash_map,map__35874):map__35874);
var file = cljs.core.get.call(null,map__35874__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35875){
var map__35876 = p__35875;
var map__35876__$1 = ((cljs.core.seq_QMARK_.call(null,map__35876))?cljs.core.apply.call(null,cljs.core.hash_map,map__35876):map__35876);
var namespace = cljs.core.get.call(null,map__35876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__23644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23648__auto__,method_table__23644__auto__,prefer_table__23645__auto__,method_cache__23646__auto__,cached_hierarchy__23647__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e35877){if((e35877 instanceof Error)){
var e = e35877;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35877;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__35879 = arguments.length;
switch (G__35879) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35881,callback){
var map__35883 = p__35881;
var map__35883__$1 = ((cljs.core.seq_QMARK_.call(null,map__35883))?cljs.core.apply.call(null,cljs.core.hash_map,map__35883):map__35883);
var file_msg = map__35883__$1;
var request_url = cljs.core.get.call(null,map__35883__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35883,map__35883__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35883,map__35883__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35884){
var map__35886 = p__35884;
var map__35886__$1 = ((cljs.core.seq_QMARK_.call(null,map__35886))?cljs.core.apply.call(null,cljs.core.hash_map,map__35886):map__35886);
var file_msg = map__35886__$1;
var meta_data = cljs.core.get.call(null,map__35886__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__35886__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__22749__auto__ = meta_data;
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__22737__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__22737__auto__){
var or__22749__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
var or__22749__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__22749__auto____$1)){
return or__22749__auto____$1;
} else {
var and__22737__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__22737__auto____$1){
var or__22749__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__22749__auto____$2){
return or__22749__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__22737__auto____$1;
}
}
}
} else {
return and__22737__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35887,callback){
var map__35889 = p__35887;
var map__35889__$1 = ((cljs.core.seq_QMARK_.call(null,map__35889))?cljs.core.apply.call(null,cljs.core.hash_map,map__35889):map__35889);
var file_msg = map__35889__$1;
var namespace = cljs.core.get.call(null,map__35889__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__35889__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26838__auto___35976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___35976,out){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___35976,out){
return (function (state_35958){
var state_val_35959 = (state_35958[(1)]);
if((state_val_35959 === (7))){
var inst_35942 = (state_35958[(7)]);
var inst_35948 = (state_35958[(2)]);
var inst_35949 = cljs.core.async.put_BANG_.call(null,out,inst_35948);
var inst_35938 = inst_35942;
var state_35958__$1 = (function (){var statearr_35960 = state_35958;
(statearr_35960[(8)] = inst_35938);

(statearr_35960[(9)] = inst_35949);

return statearr_35960;
})();
var statearr_35961_35977 = state_35958__$1;
(statearr_35961_35977[(2)] = null);

(statearr_35961_35977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35959 === (6))){
var inst_35954 = (state_35958[(2)]);
var state_35958__$1 = state_35958;
var statearr_35962_35978 = state_35958__$1;
(statearr_35962_35978[(2)] = inst_35954);

(statearr_35962_35978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35959 === (5))){
var inst_35952 = cljs.core.async.close_BANG_.call(null,out);
var state_35958__$1 = state_35958;
var statearr_35963_35979 = state_35958__$1;
(statearr_35963_35979[(2)] = inst_35952);

(statearr_35963_35979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35959 === (4))){
var inst_35941 = (state_35958[(10)]);
var inst_35946 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35941);
var state_35958__$1 = state_35958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35958__$1,(7),inst_35946);
} else {
if((state_val_35959 === (3))){
var inst_35956 = (state_35958[(2)]);
var state_35958__$1 = state_35958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35958__$1,inst_35956);
} else {
if((state_val_35959 === (2))){
var inst_35938 = (state_35958[(8)]);
var inst_35941 = (state_35958[(10)]);
var inst_35941__$1 = cljs.core.nth.call(null,inst_35938,(0),null);
var inst_35942 = cljs.core.nthnext.call(null,inst_35938,(1));
var inst_35943 = (inst_35941__$1 == null);
var inst_35944 = cljs.core.not.call(null,inst_35943);
var state_35958__$1 = (function (){var statearr_35964 = state_35958;
(statearr_35964[(7)] = inst_35942);

(statearr_35964[(10)] = inst_35941__$1);

return statearr_35964;
})();
if(inst_35944){
var statearr_35965_35980 = state_35958__$1;
(statearr_35965_35980[(1)] = (4));

} else {
var statearr_35966_35981 = state_35958__$1;
(statearr_35966_35981[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35959 === (1))){
var inst_35936 = cljs.core.nth.call(null,files,(0),null);
var inst_35937 = cljs.core.nthnext.call(null,files,(1));
var inst_35938 = files;
var state_35958__$1 = (function (){var statearr_35967 = state_35958;
(statearr_35967[(8)] = inst_35938);

(statearr_35967[(11)] = inst_35937);

(statearr_35967[(12)] = inst_35936);

return statearr_35967;
})();
var statearr_35968_35982 = state_35958__$1;
(statearr_35968_35982[(2)] = null);

(statearr_35968_35982[(1)] = (2));


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
});})(c__26838__auto___35976,out))
;
return ((function (switch__26776__auto__,c__26838__auto___35976,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto____0 = (function (){
var statearr_35972 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35972[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto__);

(statearr_35972[(1)] = (1));

return statearr_35972;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto____1 = (function (state_35958){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_35958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e35973){if((e35973 instanceof Object)){
var ex__26780__auto__ = e35973;
var statearr_35974_35983 = state_35958;
(statearr_35974_35983[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35984 = state_35958;
state_35958 = G__35984;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto__ = function(state_35958){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto____1.call(this,state_35958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___35976,out))
})();
var state__26840__auto__ = (function (){var statearr_35975 = f__26839__auto__.call(null);
(statearr_35975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___35976);

return statearr_35975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___35976,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__35985,p__35986){
var map__35989 = p__35985;
var map__35989__$1 = ((cljs.core.seq_QMARK_.call(null,map__35989))?cljs.core.apply.call(null,cljs.core.hash_map,map__35989):map__35989);
var opts = map__35989__$1;
var url_rewriter = cljs.core.get.call(null,map__35989__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35990 = p__35986;
var map__35990__$1 = ((cljs.core.seq_QMARK_.call(null,map__35990))?cljs.core.apply.call(null,cljs.core.hash_map,map__35990):map__35990);
var file_msg = map__35990__$1;
var file = cljs.core.get.call(null,map__35990__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35991){
var map__35994 = p__35991;
var map__35994__$1 = ((cljs.core.seq_QMARK_.call(null,map__35994))?cljs.core.apply.call(null,cljs.core.hash_map,map__35994):map__35994);
var file = cljs.core.get.call(null,map__35994__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__35994__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__22737__auto__ = eval_body__$1;
if(cljs.core.truth_(and__22737__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__22737__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e35995){var e = e35995;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36000,p__36001){
var map__36203 = p__36000;
var map__36203__$1 = ((cljs.core.seq_QMARK_.call(null,map__36203))?cljs.core.apply.call(null,cljs.core.hash_map,map__36203):map__36203);
var opts = map__36203__$1;
var load_unchanged_files = cljs.core.get.call(null,map__36203__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__36203__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__36203__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__36204 = p__36001;
var map__36204__$1 = ((cljs.core.seq_QMARK_.call(null,map__36204))?cljs.core.apply.call(null,cljs.core.hash_map,map__36204):map__36204);
var msg = map__36204__$1;
var files = cljs.core.get.call(null,map__36204__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function (state_36329){
var state_val_36330 = (state_36329[(1)]);
if((state_val_36330 === (7))){
var inst_36216 = (state_36329[(7)]);
var inst_36217 = (state_36329[(8)]);
var inst_36218 = (state_36329[(9)]);
var inst_36219 = (state_36329[(10)]);
var inst_36224 = cljs.core._nth.call(null,inst_36217,inst_36219);
var inst_36225 = figwheel.client.file_reloading.eval_body.call(null,inst_36224);
var inst_36226 = (inst_36219 + (1));
var tmp36331 = inst_36216;
var tmp36332 = inst_36217;
var tmp36333 = inst_36218;
var inst_36216__$1 = tmp36331;
var inst_36217__$1 = tmp36332;
var inst_36218__$1 = tmp36333;
var inst_36219__$1 = inst_36226;
var state_36329__$1 = (function (){var statearr_36334 = state_36329;
(statearr_36334[(7)] = inst_36216__$1);

(statearr_36334[(8)] = inst_36217__$1);

(statearr_36334[(9)] = inst_36218__$1);

(statearr_36334[(10)] = inst_36219__$1);

(statearr_36334[(11)] = inst_36225);

return statearr_36334;
})();
var statearr_36335_36404 = state_36329__$1;
(statearr_36335_36404[(2)] = null);

(statearr_36335_36404[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (20))){
var inst_36261 = (state_36329[(12)]);
var inst_36268 = (state_36329[(13)]);
var inst_36266 = (state_36329[(14)]);
var inst_36265 = (state_36329[(15)]);
var inst_36262 = (state_36329[(16)]);
var inst_36271 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36273 = (function (){var files_not_loaded = inst_36268;
var res = inst_36266;
var res_SINGLEQUOTE_ = inst_36265;
var files_SINGLEQUOTE_ = inst_36262;
var all_files = inst_36261;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36261,inst_36268,inst_36266,inst_36265,inst_36262,inst_36271,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function (p__36272){
var map__36336 = p__36272;
var map__36336__$1 = ((cljs.core.seq_QMARK_.call(null,map__36336))?cljs.core.apply.call(null,cljs.core.hash_map,map__36336):map__36336);
var file = cljs.core.get.call(null,map__36336__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__36336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36261,inst_36268,inst_36266,inst_36265,inst_36262,inst_36271,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
})();
var inst_36274 = cljs.core.map.call(null,inst_36273,inst_36266);
var inst_36275 = cljs.core.pr_str.call(null,inst_36274);
var inst_36276 = figwheel.client.utils.log.call(null,inst_36275);
var inst_36277 = (function (){var files_not_loaded = inst_36268;
var res = inst_36266;
var res_SINGLEQUOTE_ = inst_36265;
var files_SINGLEQUOTE_ = inst_36262;
var all_files = inst_36261;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36261,inst_36268,inst_36266,inst_36265,inst_36262,inst_36271,inst_36273,inst_36274,inst_36275,inst_36276,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36261,inst_36268,inst_36266,inst_36265,inst_36262,inst_36271,inst_36273,inst_36274,inst_36275,inst_36276,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
})();
var inst_36278 = setTimeout(inst_36277,(10));
var state_36329__$1 = (function (){var statearr_36337 = state_36329;
(statearr_36337[(17)] = inst_36271);

(statearr_36337[(18)] = inst_36276);

return statearr_36337;
})();
var statearr_36338_36405 = state_36329__$1;
(statearr_36338_36405[(2)] = inst_36278);

(statearr_36338_36405[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (27))){
var inst_36288 = (state_36329[(19)]);
var state_36329__$1 = state_36329;
var statearr_36339_36406 = state_36329__$1;
(statearr_36339_36406[(2)] = inst_36288);

(statearr_36339_36406[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (1))){
var inst_36208 = (state_36329[(20)]);
var inst_36205 = before_jsload.call(null,files);
var inst_36206 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36207 = (function (){return ((function (inst_36208,inst_36205,inst_36206,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function (p1__35996_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35996_SHARP_);
});
;})(inst_36208,inst_36205,inst_36206,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
})();
var inst_36208__$1 = cljs.core.filter.call(null,inst_36207,files);
var inst_36209 = cljs.core.not_empty.call(null,inst_36208__$1);
var state_36329__$1 = (function (){var statearr_36340 = state_36329;
(statearr_36340[(21)] = inst_36206);

(statearr_36340[(20)] = inst_36208__$1);

(statearr_36340[(22)] = inst_36205);

return statearr_36340;
})();
if(cljs.core.truth_(inst_36209)){
var statearr_36341_36407 = state_36329__$1;
(statearr_36341_36407[(1)] = (2));

} else {
var statearr_36342_36408 = state_36329__$1;
(statearr_36342_36408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (24))){
var state_36329__$1 = state_36329;
var statearr_36343_36409 = state_36329__$1;
(statearr_36343_36409[(2)] = null);

(statearr_36343_36409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (4))){
var inst_36253 = (state_36329[(2)]);
var inst_36254 = (function (){return ((function (inst_36253,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function (p1__35997_SHARP_){
var and__22737__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35997_SHARP_);
if(cljs.core.truth_(and__22737__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35997_SHARP_));
} else {
return and__22737__auto__;
}
});
;})(inst_36253,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
})();
var inst_36255 = cljs.core.filter.call(null,inst_36254,files);
var state_36329__$1 = (function (){var statearr_36344 = state_36329;
(statearr_36344[(23)] = inst_36255);

(statearr_36344[(24)] = inst_36253);

return statearr_36344;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_36345_36410 = state_36329__$1;
(statearr_36345_36410[(1)] = (16));

} else {
var statearr_36346_36411 = state_36329__$1;
(statearr_36346_36411[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (15))){
var inst_36243 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
var statearr_36347_36412 = state_36329__$1;
(statearr_36347_36412[(2)] = inst_36243);

(statearr_36347_36412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (21))){
var state_36329__$1 = state_36329;
var statearr_36348_36413 = state_36329__$1;
(statearr_36348_36413[(2)] = null);

(statearr_36348_36413[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (31))){
var inst_36296 = (state_36329[(25)]);
var inst_36306 = (state_36329[(2)]);
var inst_36307 = cljs.core.not_empty.call(null,inst_36296);
var state_36329__$1 = (function (){var statearr_36349 = state_36329;
(statearr_36349[(26)] = inst_36306);

return statearr_36349;
})();
if(cljs.core.truth_(inst_36307)){
var statearr_36350_36414 = state_36329__$1;
(statearr_36350_36414[(1)] = (32));

} else {
var statearr_36351_36415 = state_36329__$1;
(statearr_36351_36415[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (32))){
var inst_36296 = (state_36329[(25)]);
var inst_36309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36296);
var inst_36310 = cljs.core.pr_str.call(null,inst_36309);
var inst_36311 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_36310)].join('');
var inst_36312 = figwheel.client.utils.log.call(null,inst_36311);
var state_36329__$1 = state_36329;
var statearr_36352_36416 = state_36329__$1;
(statearr_36352_36416[(2)] = inst_36312);

(statearr_36352_36416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (33))){
var state_36329__$1 = state_36329;
var statearr_36353_36417 = state_36329__$1;
(statearr_36353_36417[(2)] = null);

(statearr_36353_36417[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (13))){
var inst_36229 = (state_36329[(27)]);
var inst_36233 = cljs.core.chunk_first.call(null,inst_36229);
var inst_36234 = cljs.core.chunk_rest.call(null,inst_36229);
var inst_36235 = cljs.core.count.call(null,inst_36233);
var inst_36216 = inst_36234;
var inst_36217 = inst_36233;
var inst_36218 = inst_36235;
var inst_36219 = (0);
var state_36329__$1 = (function (){var statearr_36354 = state_36329;
(statearr_36354[(7)] = inst_36216);

(statearr_36354[(8)] = inst_36217);

(statearr_36354[(9)] = inst_36218);

(statearr_36354[(10)] = inst_36219);

return statearr_36354;
})();
var statearr_36355_36418 = state_36329__$1;
(statearr_36355_36418[(2)] = null);

(statearr_36355_36418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (22))){
var inst_36268 = (state_36329[(13)]);
var inst_36281 = (state_36329[(2)]);
var inst_36282 = cljs.core.not_empty.call(null,inst_36268);
var state_36329__$1 = (function (){var statearr_36356 = state_36329;
(statearr_36356[(28)] = inst_36281);

return statearr_36356;
})();
if(cljs.core.truth_(inst_36282)){
var statearr_36357_36419 = state_36329__$1;
(statearr_36357_36419[(1)] = (23));

} else {
var statearr_36358_36420 = state_36329__$1;
(statearr_36358_36420[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (36))){
var state_36329__$1 = state_36329;
var statearr_36359_36421 = state_36329__$1;
(statearr_36359_36421[(2)] = null);

(statearr_36359_36421[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (29))){
var inst_36297 = (state_36329[(29)]);
var inst_36300 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36297);
var inst_36301 = cljs.core.pr_str.call(null,inst_36300);
var inst_36302 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36301)].join('');
var inst_36303 = figwheel.client.utils.log.call(null,inst_36302);
var state_36329__$1 = state_36329;
var statearr_36360_36422 = state_36329__$1;
(statearr_36360_36422[(2)] = inst_36303);

(statearr_36360_36422[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (6))){
var inst_36250 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
var statearr_36361_36423 = state_36329__$1;
(statearr_36361_36423[(2)] = inst_36250);

(statearr_36361_36423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (28))){
var inst_36297 = (state_36329[(29)]);
var inst_36294 = (state_36329[(2)]);
var inst_36295 = cljs.core.get.call(null,inst_36294,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36296 = cljs.core.get.call(null,inst_36294,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_36297__$1 = cljs.core.get.call(null,inst_36294,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36298 = cljs.core.not_empty.call(null,inst_36297__$1);
var state_36329__$1 = (function (){var statearr_36362 = state_36329;
(statearr_36362[(30)] = inst_36295);

(statearr_36362[(25)] = inst_36296);

(statearr_36362[(29)] = inst_36297__$1);

return statearr_36362;
})();
if(cljs.core.truth_(inst_36298)){
var statearr_36363_36424 = state_36329__$1;
(statearr_36363_36424[(1)] = (29));

} else {
var statearr_36364_36425 = state_36329__$1;
(statearr_36364_36425[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (25))){
var inst_36327 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36329__$1,inst_36327);
} else {
if((state_val_36330 === (34))){
var inst_36295 = (state_36329[(30)]);
var inst_36315 = (state_36329[(2)]);
var inst_36316 = cljs.core.not_empty.call(null,inst_36295);
var state_36329__$1 = (function (){var statearr_36365 = state_36329;
(statearr_36365[(31)] = inst_36315);

return statearr_36365;
})();
if(cljs.core.truth_(inst_36316)){
var statearr_36366_36426 = state_36329__$1;
(statearr_36366_36426[(1)] = (35));

} else {
var statearr_36367_36427 = state_36329__$1;
(statearr_36367_36427[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (17))){
var inst_36255 = (state_36329[(23)]);
var state_36329__$1 = state_36329;
var statearr_36368_36428 = state_36329__$1;
(statearr_36368_36428[(2)] = inst_36255);

(statearr_36368_36428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (3))){
var state_36329__$1 = state_36329;
var statearr_36369_36429 = state_36329__$1;
(statearr_36369_36429[(2)] = null);

(statearr_36369_36429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (12))){
var inst_36246 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
var statearr_36370_36430 = state_36329__$1;
(statearr_36370_36430[(2)] = inst_36246);

(statearr_36370_36430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (2))){
var inst_36208 = (state_36329[(20)]);
var inst_36215 = cljs.core.seq.call(null,inst_36208);
var inst_36216 = inst_36215;
var inst_36217 = null;
var inst_36218 = (0);
var inst_36219 = (0);
var state_36329__$1 = (function (){var statearr_36371 = state_36329;
(statearr_36371[(7)] = inst_36216);

(statearr_36371[(8)] = inst_36217);

(statearr_36371[(9)] = inst_36218);

(statearr_36371[(10)] = inst_36219);

return statearr_36371;
})();
var statearr_36372_36431 = state_36329__$1;
(statearr_36372_36431[(2)] = null);

(statearr_36372_36431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (23))){
var inst_36261 = (state_36329[(12)]);
var inst_36268 = (state_36329[(13)]);
var inst_36266 = (state_36329[(14)]);
var inst_36288 = (state_36329[(19)]);
var inst_36265 = (state_36329[(15)]);
var inst_36262 = (state_36329[(16)]);
var inst_36284 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36287 = (function (){var files_not_loaded = inst_36268;
var res = inst_36266;
var res_SINGLEQUOTE_ = inst_36265;
var files_SINGLEQUOTE_ = inst_36262;
var all_files = inst_36261;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36261,inst_36268,inst_36266,inst_36288,inst_36265,inst_36262,inst_36284,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function (p__36286){
var map__36373 = p__36286;
var map__36373__$1 = ((cljs.core.seq_QMARK_.call(null,map__36373))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373):map__36373);
var meta_data = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36261,inst_36268,inst_36266,inst_36288,inst_36265,inst_36262,inst_36284,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
})();
var inst_36288__$1 = cljs.core.group_by.call(null,inst_36287,inst_36268);
var inst_36289 = cljs.core.seq_QMARK_.call(null,inst_36288__$1);
var state_36329__$1 = (function (){var statearr_36374 = state_36329;
(statearr_36374[(19)] = inst_36288__$1);

(statearr_36374[(32)] = inst_36284);

return statearr_36374;
})();
if(inst_36289){
var statearr_36375_36432 = state_36329__$1;
(statearr_36375_36432[(1)] = (26));

} else {
var statearr_36376_36433 = state_36329__$1;
(statearr_36376_36433[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (35))){
var inst_36295 = (state_36329[(30)]);
var inst_36318 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36295);
var inst_36319 = cljs.core.pr_str.call(null,inst_36318);
var inst_36320 = [cljs.core.str("not required: "),cljs.core.str(inst_36319)].join('');
var inst_36321 = figwheel.client.utils.log.call(null,inst_36320);
var state_36329__$1 = state_36329;
var statearr_36377_36434 = state_36329__$1;
(statearr_36377_36434[(2)] = inst_36321);

(statearr_36377_36434[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (19))){
var inst_36261 = (state_36329[(12)]);
var inst_36266 = (state_36329[(14)]);
var inst_36265 = (state_36329[(15)]);
var inst_36262 = (state_36329[(16)]);
var inst_36265__$1 = (state_36329[(2)]);
var inst_36266__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36265__$1);
var inst_36267 = (function (){var res = inst_36266__$1;
var res_SINGLEQUOTE_ = inst_36265__$1;
var files_SINGLEQUOTE_ = inst_36262;
var all_files = inst_36261;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36261,inst_36266,inst_36265,inst_36262,inst_36265__$1,inst_36266__$1,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function (p1__35999_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35999_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36261,inst_36266,inst_36265,inst_36262,inst_36265__$1,inst_36266__$1,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
})();
var inst_36268 = cljs.core.filter.call(null,inst_36267,inst_36265__$1);
var inst_36269 = cljs.core.not_empty.call(null,inst_36266__$1);
var state_36329__$1 = (function (){var statearr_36378 = state_36329;
(statearr_36378[(13)] = inst_36268);

(statearr_36378[(14)] = inst_36266__$1);

(statearr_36378[(15)] = inst_36265__$1);

return statearr_36378;
})();
if(cljs.core.truth_(inst_36269)){
var statearr_36379_36435 = state_36329__$1;
(statearr_36379_36435[(1)] = (20));

} else {
var statearr_36380_36436 = state_36329__$1;
(statearr_36380_36436[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (11))){
var state_36329__$1 = state_36329;
var statearr_36381_36437 = state_36329__$1;
(statearr_36381_36437[(2)] = null);

(statearr_36381_36437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (9))){
var inst_36248 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
var statearr_36382_36438 = state_36329__$1;
(statearr_36382_36438[(2)] = inst_36248);

(statearr_36382_36438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (5))){
var inst_36218 = (state_36329[(9)]);
var inst_36219 = (state_36329[(10)]);
var inst_36221 = (inst_36219 < inst_36218);
var inst_36222 = inst_36221;
var state_36329__$1 = state_36329;
if(cljs.core.truth_(inst_36222)){
var statearr_36383_36439 = state_36329__$1;
(statearr_36383_36439[(1)] = (7));

} else {
var statearr_36384_36440 = state_36329__$1;
(statearr_36384_36440[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (14))){
var inst_36229 = (state_36329[(27)]);
var inst_36238 = cljs.core.first.call(null,inst_36229);
var inst_36239 = figwheel.client.file_reloading.eval_body.call(null,inst_36238);
var inst_36240 = cljs.core.next.call(null,inst_36229);
var inst_36216 = inst_36240;
var inst_36217 = null;
var inst_36218 = (0);
var inst_36219 = (0);
var state_36329__$1 = (function (){var statearr_36385 = state_36329;
(statearr_36385[(7)] = inst_36216);

(statearr_36385[(8)] = inst_36217);

(statearr_36385[(9)] = inst_36218);

(statearr_36385[(33)] = inst_36239);

(statearr_36385[(10)] = inst_36219);

return statearr_36385;
})();
var statearr_36386_36441 = state_36329__$1;
(statearr_36386_36441[(2)] = null);

(statearr_36386_36441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (26))){
var inst_36288 = (state_36329[(19)]);
var inst_36291 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36288);
var state_36329__$1 = state_36329;
var statearr_36387_36442 = state_36329__$1;
(statearr_36387_36442[(2)] = inst_36291);

(statearr_36387_36442[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (16))){
var inst_36255 = (state_36329[(23)]);
var inst_36257 = (function (){var all_files = inst_36255;
return ((function (all_files,inst_36255,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function (p1__35998_SHARP_){
return cljs.core.update_in.call(null,p1__35998_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_36255,state_val_36330,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
})();
var inst_36258 = cljs.core.map.call(null,inst_36257,inst_36255);
var state_36329__$1 = state_36329;
var statearr_36388_36443 = state_36329__$1;
(statearr_36388_36443[(2)] = inst_36258);

(statearr_36388_36443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (30))){
var state_36329__$1 = state_36329;
var statearr_36389_36444 = state_36329__$1;
(statearr_36389_36444[(2)] = null);

(statearr_36389_36444[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (10))){
var inst_36229 = (state_36329[(27)]);
var inst_36231 = cljs.core.chunked_seq_QMARK_.call(null,inst_36229);
var state_36329__$1 = state_36329;
if(inst_36231){
var statearr_36390_36445 = state_36329__$1;
(statearr_36390_36445[(1)] = (13));

} else {
var statearr_36391_36446 = state_36329__$1;
(statearr_36391_36446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (18))){
var inst_36261 = (state_36329[(12)]);
var inst_36262 = (state_36329[(16)]);
var inst_36261__$1 = (state_36329[(2)]);
var inst_36262__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_36261__$1);
var inst_36263 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36262__$1);
var state_36329__$1 = (function (){var statearr_36392 = state_36329;
(statearr_36392[(12)] = inst_36261__$1);

(statearr_36392[(16)] = inst_36262__$1);

return statearr_36392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36329__$1,(19),inst_36263);
} else {
if((state_val_36330 === (37))){
var inst_36324 = (state_36329[(2)]);
var state_36329__$1 = state_36329;
var statearr_36393_36447 = state_36329__$1;
(statearr_36393_36447[(2)] = inst_36324);

(statearr_36393_36447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36330 === (8))){
var inst_36216 = (state_36329[(7)]);
var inst_36229 = (state_36329[(27)]);
var inst_36229__$1 = cljs.core.seq.call(null,inst_36216);
var state_36329__$1 = (function (){var statearr_36394 = state_36329;
(statearr_36394[(27)] = inst_36229__$1);

return statearr_36394;
})();
if(inst_36229__$1){
var statearr_36395_36448 = state_36329__$1;
(statearr_36395_36448[(1)] = (10));

} else {
var statearr_36396_36449 = state_36329__$1;
(statearr_36396_36449[(1)] = (11));

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
});})(c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
;
return ((function (switch__26776__auto__,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto____0 = (function (){
var statearr_36400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36400[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto__);

(statearr_36400[(1)] = (1));

return statearr_36400;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto____1 = (function (state_36329){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_36329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e36401){if((e36401 instanceof Object)){
var ex__26780__auto__ = e36401;
var statearr_36402_36450 = state_36329;
(statearr_36402_36450[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36451 = state_36329;
state_36329 = G__36451;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto__ = function(state_36329){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto____1.call(this,state_36329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
})();
var state__26840__auto__ = (function (){var statearr_36403 = f__26839__auto__.call(null);
(statearr_36403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_36403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__,map__36203,map__36203__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36204,map__36204__$1,msg,files))
);

return c__26838__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36454,link){
var map__36456 = p__36454;
var map__36456__$1 = ((cljs.core.seq_QMARK_.call(null,map__36456))?cljs.core.apply.call(null,cljs.core.hash_map,map__36456):map__36456);
var file = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__36456,map__36456__$1,file){
return (function (p1__36452_SHARP_,p2__36453_SHARP_){
if(cljs.core._EQ_.call(null,p1__36452_SHARP_,p2__36453_SHARP_)){
return p1__36452_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__36456,map__36456__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36460){
var map__36461 = p__36460;
var map__36461__$1 = ((cljs.core.seq_QMARK_.call(null,map__36461))?cljs.core.apply.call(null,cljs.core.hash_map,map__36461):map__36461);
var current_url_length = cljs.core.get.call(null,map__36461__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__36461__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36457_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36457_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__36463 = arguments.length;
switch (G__36463) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36465){
var map__36467 = p__36465;
var map__36467__$1 = ((cljs.core.seq_QMARK_.call(null,map__36467))?cljs.core.apply.call(null,cljs.core.hash_map,map__36467):map__36467);
var f_data = map__36467__$1;
var request_url = cljs.core.get.call(null,map__36467__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__36467__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__22749__auto__ = request_url;
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36468,files_msg){
var map__36490 = p__36468;
var map__36490__$1 = ((cljs.core.seq_QMARK_.call(null,map__36490))?cljs.core.apply.call(null,cljs.core.hash_map,map__36490):map__36490);
var opts = map__36490__$1;
var on_cssload = cljs.core.get.call(null,map__36490__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36491_36511 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36492_36512 = null;
var count__36493_36513 = (0);
var i__36494_36514 = (0);
while(true){
if((i__36494_36514 < count__36493_36513)){
var f_36515 = cljs.core._nth.call(null,chunk__36492_36512,i__36494_36514);
figwheel.client.file_reloading.reload_css_file.call(null,f_36515);

var G__36516 = seq__36491_36511;
var G__36517 = chunk__36492_36512;
var G__36518 = count__36493_36513;
var G__36519 = (i__36494_36514 + (1));
seq__36491_36511 = G__36516;
chunk__36492_36512 = G__36517;
count__36493_36513 = G__36518;
i__36494_36514 = G__36519;
continue;
} else {
var temp__4126__auto___36520 = cljs.core.seq.call(null,seq__36491_36511);
if(temp__4126__auto___36520){
var seq__36491_36521__$1 = temp__4126__auto___36520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36491_36521__$1)){
var c__23534__auto___36522 = cljs.core.chunk_first.call(null,seq__36491_36521__$1);
var G__36523 = cljs.core.chunk_rest.call(null,seq__36491_36521__$1);
var G__36524 = c__23534__auto___36522;
var G__36525 = cljs.core.count.call(null,c__23534__auto___36522);
var G__36526 = (0);
seq__36491_36511 = G__36523;
chunk__36492_36512 = G__36524;
count__36493_36513 = G__36525;
i__36494_36514 = G__36526;
continue;
} else {
var f_36527 = cljs.core.first.call(null,seq__36491_36521__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36527);

var G__36528 = cljs.core.next.call(null,seq__36491_36521__$1);
var G__36529 = null;
var G__36530 = (0);
var G__36531 = (0);
seq__36491_36511 = G__36528;
chunk__36492_36512 = G__36529;
count__36493_36513 = G__36530;
i__36494_36514 = G__36531;
continue;
}
} else {
}
}
break;
}

var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__,map__36490,map__36490__$1,opts,on_cssload){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__,map__36490,map__36490__$1,opts,on_cssload){
return (function (state_36501){
var state_val_36502 = (state_36501[(1)]);
if((state_val_36502 === (2))){
var inst_36497 = (state_36501[(2)]);
var inst_36498 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_36499 = on_cssload.call(null,inst_36498);
var state_36501__$1 = (function (){var statearr_36503 = state_36501;
(statearr_36503[(7)] = inst_36497);

return statearr_36503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36501__$1,inst_36499);
} else {
if((state_val_36502 === (1))){
var inst_36495 = cljs.core.async.timeout.call(null,(100));
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36501__$1,(2),inst_36495);
} else {
return null;
}
}
});})(c__26838__auto__,map__36490,map__36490__$1,opts,on_cssload))
;
return ((function (switch__26776__auto__,c__26838__auto__,map__36490,map__36490__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto____0 = (function (){
var statearr_36507 = [null,null,null,null,null,null,null,null];
(statearr_36507[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto__);

(statearr_36507[(1)] = (1));

return statearr_36507;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto____1 = (function (state_36501){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_36501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e36508){if((e36508 instanceof Object)){
var ex__26780__auto__ = e36508;
var statearr_36509_36532 = state_36501;
(statearr_36509_36532[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36533 = state_36501;
state_36501 = G__36533;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto__ = function(state_36501){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto____1.call(this,state_36501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__,map__36490,map__36490__$1,opts,on_cssload))
})();
var state__26840__auto__ = (function (){var statearr_36510 = f__26839__auto__.call(null);
(statearr_36510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_36510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__,map__36490,map__36490__$1,opts,on_cssload))
);

return c__26838__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1445200178987