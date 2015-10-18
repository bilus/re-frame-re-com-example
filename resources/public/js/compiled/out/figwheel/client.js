// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34817__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34818__i = 0, G__34818__a = new Array(arguments.length -  0);
while (G__34818__i < G__34818__a.length) {G__34818__a[G__34818__i] = arguments[G__34818__i + 0]; ++G__34818__i;}
  args = new cljs.core.IndexedSeq(G__34818__a,0);
} 
return G__34817__delegate.call(this,args);};
G__34817.cljs$lang$maxFixedArity = 0;
G__34817.cljs$lang$applyTo = (function (arglist__34819){
var args = cljs.core.seq(arglist__34819);
return G__34817__delegate(args);
});
G__34817.cljs$core$IFn$_invoke$arity$variadic = G__34817__delegate;
return G__34817;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34820){
var map__34822 = p__34820;
var map__34822__$1 = ((cljs.core.seq_QMARK_.call(null,map__34822))?cljs.core.apply.call(null,cljs.core.hash_map,map__34822):map__34822);
var class$ = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22749__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22737__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22737__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22737__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26838__auto___34951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___34951,ch){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___34951,ch){
return (function (state_34925){
var state_val_34926 = (state_34925[(1)]);
if((state_val_34926 === (7))){
var inst_34921 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34927_34952 = state_34925__$1;
(statearr_34927_34952[(2)] = inst_34921);

(statearr_34927_34952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (1))){
var state_34925__$1 = state_34925;
var statearr_34928_34953 = state_34925__$1;
(statearr_34928_34953[(2)] = null);

(statearr_34928_34953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (4))){
var inst_34889 = (state_34925[(7)]);
var inst_34889__$1 = (state_34925[(2)]);
var state_34925__$1 = (function (){var statearr_34929 = state_34925;
(statearr_34929[(7)] = inst_34889__$1);

return statearr_34929;
})();
if(cljs.core.truth_(inst_34889__$1)){
var statearr_34930_34954 = state_34925__$1;
(statearr_34930_34954[(1)] = (5));

} else {
var statearr_34931_34955 = state_34925__$1;
(statearr_34931_34955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (13))){
var state_34925__$1 = state_34925;
var statearr_34932_34956 = state_34925__$1;
(statearr_34932_34956[(2)] = null);

(statearr_34932_34956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (6))){
var state_34925__$1 = state_34925;
var statearr_34933_34957 = state_34925__$1;
(statearr_34933_34957[(2)] = null);

(statearr_34933_34957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (3))){
var inst_34923 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34925__$1,inst_34923);
} else {
if((state_val_34926 === (12))){
var inst_34896 = (state_34925[(8)]);
var inst_34909 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34896);
var inst_34910 = cljs.core.first.call(null,inst_34909);
var inst_34911 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34910);
var inst_34912 = console.warn("Figwheel: Not loading code with warnings - ",inst_34911);
var state_34925__$1 = state_34925;
var statearr_34934_34958 = state_34925__$1;
(statearr_34934_34958[(2)] = inst_34912);

(statearr_34934_34958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (2))){
var state_34925__$1 = state_34925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34925__$1,(4),ch);
} else {
if((state_val_34926 === (11))){
var inst_34905 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34935_34959 = state_34925__$1;
(statearr_34935_34959[(2)] = inst_34905);

(statearr_34935_34959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (9))){
var inst_34895 = (state_34925[(9)]);
var inst_34907 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34895,opts);
var state_34925__$1 = state_34925;
if(cljs.core.truth_(inst_34907)){
var statearr_34936_34960 = state_34925__$1;
(statearr_34936_34960[(1)] = (12));

} else {
var statearr_34937_34961 = state_34925__$1;
(statearr_34937_34961[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (5))){
var inst_34895 = (state_34925[(9)]);
var inst_34889 = (state_34925[(7)]);
var inst_34891 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34892 = (new cljs.core.PersistentArrayMap(null,2,inst_34891,null));
var inst_34893 = (new cljs.core.PersistentHashSet(null,inst_34892,null));
var inst_34894 = figwheel.client.focus_msgs.call(null,inst_34893,inst_34889);
var inst_34895__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34894);
var inst_34896 = cljs.core.first.call(null,inst_34894);
var inst_34897 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34895__$1,opts);
var state_34925__$1 = (function (){var statearr_34938 = state_34925;
(statearr_34938[(9)] = inst_34895__$1);

(statearr_34938[(8)] = inst_34896);

return statearr_34938;
})();
if(cljs.core.truth_(inst_34897)){
var statearr_34939_34962 = state_34925__$1;
(statearr_34939_34962[(1)] = (8));

} else {
var statearr_34940_34963 = state_34925__$1;
(statearr_34940_34963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (14))){
var inst_34915 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
var statearr_34941_34964 = state_34925__$1;
(statearr_34941_34964[(2)] = inst_34915);

(statearr_34941_34964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (10))){
var inst_34917 = (state_34925[(2)]);
var state_34925__$1 = (function (){var statearr_34942 = state_34925;
(statearr_34942[(10)] = inst_34917);

return statearr_34942;
})();
var statearr_34943_34965 = state_34925__$1;
(statearr_34943_34965[(2)] = null);

(statearr_34943_34965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (8))){
var inst_34896 = (state_34925[(8)]);
var inst_34899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34900 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34896);
var inst_34901 = cljs.core.async.timeout.call(null,(1000));
var inst_34902 = [inst_34900,inst_34901];
var inst_34903 = (new cljs.core.PersistentVector(null,2,(5),inst_34899,inst_34902,null));
var state_34925__$1 = state_34925;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34925__$1,(11),inst_34903);
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
});})(c__26838__auto___34951,ch))
;
return ((function (switch__26776__auto__,c__26838__auto___34951,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26777__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26777__auto____0 = (function (){
var statearr_34947 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34947[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26777__auto__);

(statearr_34947[(1)] = (1));

return statearr_34947;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26777__auto____1 = (function (state_34925){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_34925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e34948){if((e34948 instanceof Object)){
var ex__26780__auto__ = e34948;
var statearr_34949_34966 = state_34925;
(statearr_34949_34966[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34967 = state_34925;
state_34925 = G__34967;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26777__auto__ = function(state_34925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26777__auto____1.call(this,state_34925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26777__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26777__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___34951,ch))
})();
var state__26840__auto__ = (function (){var statearr_34950 = f__26839__auto__.call(null);
(statearr_34950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___34951);

return statearr_34950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___34951,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34968_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34968_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34975 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34975){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34973 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34974 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34973,_STAR_print_newline_STAR_34974,base_path_34975){
return (function() { 
var G__34976__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34977__i = 0, G__34977__a = new Array(arguments.length -  0);
while (G__34977__i < G__34977__a.length) {G__34977__a[G__34977__i] = arguments[G__34977__i + 0]; ++G__34977__i;}
  args = new cljs.core.IndexedSeq(G__34977__a,0);
} 
return G__34976__delegate.call(this,args);};
G__34976.cljs$lang$maxFixedArity = 0;
G__34976.cljs$lang$applyTo = (function (arglist__34978){
var args = cljs.core.seq(arglist__34978);
return G__34976__delegate(args);
});
G__34976.cljs$core$IFn$_invoke$arity$variadic = G__34976__delegate;
return G__34976;
})()
;})(_STAR_print_fn_STAR_34973,_STAR_print_newline_STAR_34974,base_path_34975))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34974;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34973;
}}catch (e34972){if((e34972 instanceof Error)){
var e = e34972;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34975], null));
} else {
var e = e34972;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34975))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34979){
var map__34984 = p__34979;
var map__34984__$1 = ((cljs.core.seq_QMARK_.call(null,map__34984))?cljs.core.apply.call(null,cljs.core.hash_map,map__34984):map__34984);
var opts = map__34984__$1;
var build_id = cljs.core.get.call(null,map__34984__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34984,map__34984__$1,opts,build_id){
return (function (p__34985){
var vec__34986 = p__34985;
var map__34987 = cljs.core.nth.call(null,vec__34986,(0),null);
var map__34987__$1 = ((cljs.core.seq_QMARK_.call(null,map__34987))?cljs.core.apply.call(null,cljs.core.hash_map,map__34987):map__34987);
var msg = map__34987__$1;
var msg_name = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34986,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34986,map__34987,map__34987__$1,msg,msg_name,_,map__34984,map__34984__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34986,map__34987,map__34987__$1,msg,msg_name,_,map__34984,map__34984__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34984,map__34984__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34991){
var vec__34992 = p__34991;
var map__34993 = cljs.core.nth.call(null,vec__34992,(0),null);
var map__34993__$1 = ((cljs.core.seq_QMARK_.call(null,map__34993))?cljs.core.apply.call(null,cljs.core.hash_map,map__34993):map__34993);
var msg = map__34993__$1;
var msg_name = cljs.core.get.call(null,map__34993__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34992,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34994){
var map__35002 = p__34994;
var map__35002__$1 = ((cljs.core.seq_QMARK_.call(null,map__35002))?cljs.core.apply.call(null,cljs.core.hash_map,map__35002):map__35002);
var on_compile_fail = cljs.core.get.call(null,map__35002__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__35002__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__35002,map__35002__$1,on_compile_fail,on_compile_warning){
return (function (p__35003){
var vec__35004 = p__35003;
var map__35005 = cljs.core.nth.call(null,vec__35004,(0),null);
var map__35005__$1 = ((cljs.core.seq_QMARK_.call(null,map__35005))?cljs.core.apply.call(null,cljs.core.hash_map,map__35005):map__35005);
var msg = map__35005__$1;
var msg_name = cljs.core.get.call(null,map__35005__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35004,(1));
var pred__35006 = cljs.core._EQ_;
var expr__35007 = msg_name;
if(cljs.core.truth_(pred__35006.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35007))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35006.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35007))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35002,map__35002__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__,msg_hist,msg_names,msg){
return (function (state_35208){
var state_val_35209 = (state_35208[(1)]);
if((state_val_35209 === (7))){
var inst_35142 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35210_35251 = state_35208__$1;
(statearr_35210_35251[(2)] = inst_35142);

(statearr_35210_35251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (20))){
var inst_35170 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35208__$1 = state_35208;
if(cljs.core.truth_(inst_35170)){
var statearr_35211_35252 = state_35208__$1;
(statearr_35211_35252[(1)] = (22));

} else {
var statearr_35212_35253 = state_35208__$1;
(statearr_35212_35253[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (27))){
var inst_35182 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35183 = figwheel.client.heads_up.display_warning.call(null,inst_35182);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35208__$1,(30),inst_35183);
} else {
if((state_val_35209 === (1))){
var inst_35130 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35208__$1 = state_35208;
if(cljs.core.truth_(inst_35130)){
var statearr_35213_35254 = state_35208__$1;
(statearr_35213_35254[(1)] = (2));

} else {
var statearr_35214_35255 = state_35208__$1;
(statearr_35214_35255[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (24))){
var inst_35198 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35215_35256 = state_35208__$1;
(statearr_35215_35256[(2)] = inst_35198);

(statearr_35215_35256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (4))){
var inst_35206 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35208__$1,inst_35206);
} else {
if((state_val_35209 === (15))){
var inst_35158 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35159 = figwheel.client.format_messages.call(null,inst_35158);
var inst_35160 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35161 = figwheel.client.heads_up.display_error.call(null,inst_35159,inst_35160);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35208__$1,(18),inst_35161);
} else {
if((state_val_35209 === (21))){
var inst_35200 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35216_35257 = state_35208__$1;
(statearr_35216_35257[(2)] = inst_35200);

(statearr_35216_35257[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (31))){
var inst_35189 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35208__$1,(34),inst_35189);
} else {
if((state_val_35209 === (32))){
var state_35208__$1 = state_35208;
var statearr_35217_35258 = state_35208__$1;
(statearr_35217_35258[(2)] = null);

(statearr_35217_35258[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (33))){
var inst_35194 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35218_35259 = state_35208__$1;
(statearr_35218_35259[(2)] = inst_35194);

(statearr_35218_35259[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (13))){
var inst_35148 = (state_35208[(2)]);
var inst_35149 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35150 = figwheel.client.format_messages.call(null,inst_35149);
var inst_35151 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35152 = figwheel.client.heads_up.display_error.call(null,inst_35150,inst_35151);
var state_35208__$1 = (function (){var statearr_35219 = state_35208;
(statearr_35219[(7)] = inst_35148);

return statearr_35219;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35208__$1,(14),inst_35152);
} else {
if((state_val_35209 === (22))){
var inst_35172 = figwheel.client.heads_up.clear.call(null);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35208__$1,(25),inst_35172);
} else {
if((state_val_35209 === (29))){
var inst_35196 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35220_35260 = state_35208__$1;
(statearr_35220_35260[(2)] = inst_35196);

(statearr_35220_35260[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (6))){
var inst_35138 = figwheel.client.heads_up.clear.call(null);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35208__$1,(9),inst_35138);
} else {
if((state_val_35209 === (28))){
var inst_35187 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35208__$1 = state_35208;
if(cljs.core.truth_(inst_35187)){
var statearr_35221_35261 = state_35208__$1;
(statearr_35221_35261[(1)] = (31));

} else {
var statearr_35222_35262 = state_35208__$1;
(statearr_35222_35262[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (25))){
var inst_35174 = (state_35208[(2)]);
var inst_35175 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35176 = figwheel.client.heads_up.display_warning.call(null,inst_35175);
var state_35208__$1 = (function (){var statearr_35223 = state_35208;
(statearr_35223[(8)] = inst_35174);

return statearr_35223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35208__$1,(26),inst_35176);
} else {
if((state_val_35209 === (34))){
var inst_35191 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35224_35263 = state_35208__$1;
(statearr_35224_35263[(2)] = inst_35191);

(statearr_35224_35263[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (17))){
var inst_35202 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35225_35264 = state_35208__$1;
(statearr_35225_35264[(2)] = inst_35202);

(statearr_35225_35264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (3))){
var inst_35144 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35208__$1 = state_35208;
if(cljs.core.truth_(inst_35144)){
var statearr_35226_35265 = state_35208__$1;
(statearr_35226_35265[(1)] = (10));

} else {
var statearr_35227_35266 = state_35208__$1;
(statearr_35227_35266[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (12))){
var inst_35204 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35228_35267 = state_35208__$1;
(statearr_35228_35267[(2)] = inst_35204);

(statearr_35228_35267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (2))){
var inst_35132 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35208__$1 = state_35208;
if(cljs.core.truth_(inst_35132)){
var statearr_35229_35268 = state_35208__$1;
(statearr_35229_35268[(1)] = (5));

} else {
var statearr_35230_35269 = state_35208__$1;
(statearr_35230_35269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (23))){
var inst_35180 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35208__$1 = state_35208;
if(cljs.core.truth_(inst_35180)){
var statearr_35231_35270 = state_35208__$1;
(statearr_35231_35270[(1)] = (27));

} else {
var statearr_35232_35271 = state_35208__$1;
(statearr_35232_35271[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (19))){
var inst_35167 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35168 = figwheel.client.heads_up.append_message.call(null,inst_35167);
var state_35208__$1 = state_35208;
var statearr_35233_35272 = state_35208__$1;
(statearr_35233_35272[(2)] = inst_35168);

(statearr_35233_35272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (11))){
var inst_35156 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35208__$1 = state_35208;
if(cljs.core.truth_(inst_35156)){
var statearr_35234_35273 = state_35208__$1;
(statearr_35234_35273[(1)] = (15));

} else {
var statearr_35235_35274 = state_35208__$1;
(statearr_35235_35274[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (9))){
var inst_35140 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35236_35275 = state_35208__$1;
(statearr_35236_35275[(2)] = inst_35140);

(statearr_35236_35275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (5))){
var inst_35134 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35208__$1,(8),inst_35134);
} else {
if((state_val_35209 === (14))){
var inst_35154 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35237_35276 = state_35208__$1;
(statearr_35237_35276[(2)] = inst_35154);

(statearr_35237_35276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (26))){
var inst_35178 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35238_35277 = state_35208__$1;
(statearr_35238_35277[(2)] = inst_35178);

(statearr_35238_35277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (16))){
var inst_35165 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35208__$1 = state_35208;
if(cljs.core.truth_(inst_35165)){
var statearr_35239_35278 = state_35208__$1;
(statearr_35239_35278[(1)] = (19));

} else {
var statearr_35240_35279 = state_35208__$1;
(statearr_35240_35279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (30))){
var inst_35185 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35241_35280 = state_35208__$1;
(statearr_35241_35280[(2)] = inst_35185);

(statearr_35241_35280[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (10))){
var inst_35146 = figwheel.client.heads_up.clear.call(null);
var state_35208__$1 = state_35208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35208__$1,(13),inst_35146);
} else {
if((state_val_35209 === (18))){
var inst_35163 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35242_35281 = state_35208__$1;
(statearr_35242_35281[(2)] = inst_35163);

(statearr_35242_35281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35209 === (8))){
var inst_35136 = (state_35208[(2)]);
var state_35208__$1 = state_35208;
var statearr_35243_35282 = state_35208__$1;
(statearr_35243_35282[(2)] = inst_35136);

(statearr_35243_35282[(1)] = (7));


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
});})(c__26838__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26776__auto__,c__26838__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto____0 = (function (){
var statearr_35247 = [null,null,null,null,null,null,null,null,null];
(statearr_35247[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto__);

(statearr_35247[(1)] = (1));

return statearr_35247;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto____1 = (function (state_35208){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_35208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e35248){if((e35248 instanceof Object)){
var ex__26780__auto__ = e35248;
var statearr_35249_35283 = state_35208;
(statearr_35249_35283[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35284 = state_35208;
state_35208 = G__35284;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto__ = function(state_35208){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto____1.call(this,state_35208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__,msg_hist,msg_names,msg))
})();
var state__26840__auto__ = (function (){var statearr_35250 = f__26839__auto__.call(null);
(statearr_35250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_35250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__,msg_hist,msg_names,msg))
);

return c__26838__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26838__auto___35347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto___35347,ch){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto___35347,ch){
return (function (state_35330){
var state_val_35331 = (state_35330[(1)]);
if((state_val_35331 === (8))){
var inst_35322 = (state_35330[(2)]);
var state_35330__$1 = (function (){var statearr_35332 = state_35330;
(statearr_35332[(7)] = inst_35322);

return statearr_35332;
})();
var statearr_35333_35348 = state_35330__$1;
(statearr_35333_35348[(2)] = null);

(statearr_35333_35348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35331 === (7))){
var inst_35326 = (state_35330[(2)]);
var state_35330__$1 = state_35330;
var statearr_35334_35349 = state_35330__$1;
(statearr_35334_35349[(2)] = inst_35326);

(statearr_35334_35349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35331 === (6))){
var state_35330__$1 = state_35330;
var statearr_35335_35350 = state_35330__$1;
(statearr_35335_35350[(2)] = null);

(statearr_35335_35350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35331 === (5))){
var inst_35318 = (state_35330[(8)]);
var inst_35320 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35318);
var state_35330__$1 = state_35330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35330__$1,(8),inst_35320);
} else {
if((state_val_35331 === (4))){
var inst_35318 = (state_35330[(8)]);
var inst_35318__$1 = (state_35330[(2)]);
var state_35330__$1 = (function (){var statearr_35336 = state_35330;
(statearr_35336[(8)] = inst_35318__$1);

return statearr_35336;
})();
if(cljs.core.truth_(inst_35318__$1)){
var statearr_35337_35351 = state_35330__$1;
(statearr_35337_35351[(1)] = (5));

} else {
var statearr_35338_35352 = state_35330__$1;
(statearr_35338_35352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35331 === (3))){
var inst_35328 = (state_35330[(2)]);
var state_35330__$1 = state_35330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35330__$1,inst_35328);
} else {
if((state_val_35331 === (2))){
var state_35330__$1 = state_35330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35330__$1,(4),ch);
} else {
if((state_val_35331 === (1))){
var state_35330__$1 = state_35330;
var statearr_35339_35353 = state_35330__$1;
(statearr_35339_35353[(2)] = null);

(statearr_35339_35353[(1)] = (2));


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
});})(c__26838__auto___35347,ch))
;
return ((function (switch__26776__auto__,c__26838__auto___35347,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26777__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26777__auto____0 = (function (){
var statearr_35343 = [null,null,null,null,null,null,null,null,null];
(statearr_35343[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26777__auto__);

(statearr_35343[(1)] = (1));

return statearr_35343;
});
var figwheel$client$heads_up_plugin_$_state_machine__26777__auto____1 = (function (state_35330){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_35330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e35344){if((e35344 instanceof Object)){
var ex__26780__auto__ = e35344;
var statearr_35345_35354 = state_35330;
(statearr_35345_35354[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35355 = state_35330;
state_35330 = G__35355;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26777__auto__ = function(state_35330){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26777__auto____1.call(this,state_35330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26777__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26777__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto___35347,ch))
})();
var state__26840__auto__ = (function (){var statearr_35346 = f__26839__auto__.call(null);
(statearr_35346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto___35347);

return statearr_35346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto___35347,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__){
return (function (state_35376){
var state_val_35377 = (state_35376[(1)]);
if((state_val_35377 === (2))){
var inst_35373 = (state_35376[(2)]);
var inst_35374 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35376__$1 = (function (){var statearr_35378 = state_35376;
(statearr_35378[(7)] = inst_35373);

return statearr_35378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35376__$1,inst_35374);
} else {
if((state_val_35377 === (1))){
var inst_35371 = cljs.core.async.timeout.call(null,(3000));
var state_35376__$1 = state_35376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35376__$1,(2),inst_35371);
} else {
return null;
}
}
});})(c__26838__auto__))
;
return ((function (switch__26776__auto__,c__26838__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26777__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26777__auto____0 = (function (){
var statearr_35382 = [null,null,null,null,null,null,null,null];
(statearr_35382[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26777__auto__);

(statearr_35382[(1)] = (1));

return statearr_35382;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26777__auto____1 = (function (state_35376){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_35376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e35383){if((e35383 instanceof Object)){
var ex__26780__auto__ = e35383;
var statearr_35384_35386 = state_35376;
(statearr_35384_35386[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35387 = state_35376;
state_35376 = G__35387;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26777__auto__ = function(state_35376){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26777__auto____1.call(this,state_35376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26777__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26777__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__))
})();
var state__26840__auto__ = (function (){var statearr_35385 = f__26839__auto__.call(null);
(statearr_35385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_35385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__))
);

return c__26838__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35388){
var map__35394 = p__35388;
var map__35394__$1 = ((cljs.core.seq_QMARK_.call(null,map__35394))?cljs.core.apply.call(null,cljs.core.hash_map,map__35394):map__35394);
var ed = map__35394__$1;
var cause = cljs.core.get.call(null,map__35394__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__35394__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__35394__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35395_35399 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35396_35400 = null;
var count__35397_35401 = (0);
var i__35398_35402 = (0);
while(true){
if((i__35398_35402 < count__35397_35401)){
var msg_35403 = cljs.core._nth.call(null,chunk__35396_35400,i__35398_35402);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35403);

var G__35404 = seq__35395_35399;
var G__35405 = chunk__35396_35400;
var G__35406 = count__35397_35401;
var G__35407 = (i__35398_35402 + (1));
seq__35395_35399 = G__35404;
chunk__35396_35400 = G__35405;
count__35397_35401 = G__35406;
i__35398_35402 = G__35407;
continue;
} else {
var temp__4126__auto___35408 = cljs.core.seq.call(null,seq__35395_35399);
if(temp__4126__auto___35408){
var seq__35395_35409__$1 = temp__4126__auto___35408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35395_35409__$1)){
var c__23534__auto___35410 = cljs.core.chunk_first.call(null,seq__35395_35409__$1);
var G__35411 = cljs.core.chunk_rest.call(null,seq__35395_35409__$1);
var G__35412 = c__23534__auto___35410;
var G__35413 = cljs.core.count.call(null,c__23534__auto___35410);
var G__35414 = (0);
seq__35395_35399 = G__35411;
chunk__35396_35400 = G__35412;
count__35397_35401 = G__35413;
i__35398_35402 = G__35414;
continue;
} else {
var msg_35415 = cljs.core.first.call(null,seq__35395_35409__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35415);

var G__35416 = cljs.core.next.call(null,seq__35395_35409__$1);
var G__35417 = null;
var G__35418 = (0);
var G__35419 = (0);
seq__35395_35399 = G__35416;
chunk__35396_35400 = G__35417;
count__35397_35401 = G__35418;
i__35398_35402 = G__35419;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35420){
var map__35422 = p__35420;
var map__35422__$1 = ((cljs.core.seq_QMARK_.call(null,map__35422))?cljs.core.apply.call(null,cljs.core.hash_map,map__35422):map__35422);
var w = map__35422__$1;
var message = cljs.core.get.call(null,map__35422__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__22737__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22737__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22737__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35429 = cljs.core.seq.call(null,plugins);
var chunk__35430 = null;
var count__35431 = (0);
var i__35432 = (0);
while(true){
if((i__35432 < count__35431)){
var vec__35433 = cljs.core._nth.call(null,chunk__35430,i__35432);
var k = cljs.core.nth.call(null,vec__35433,(0),null);
var plugin = cljs.core.nth.call(null,vec__35433,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35435 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35429,chunk__35430,count__35431,i__35432,pl_35435,vec__35433,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35435.call(null,msg_hist);
});})(seq__35429,chunk__35430,count__35431,i__35432,pl_35435,vec__35433,k,plugin))
);
} else {
}

var G__35436 = seq__35429;
var G__35437 = chunk__35430;
var G__35438 = count__35431;
var G__35439 = (i__35432 + (1));
seq__35429 = G__35436;
chunk__35430 = G__35437;
count__35431 = G__35438;
i__35432 = G__35439;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35429);
if(temp__4126__auto__){
var seq__35429__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35429__$1)){
var c__23534__auto__ = cljs.core.chunk_first.call(null,seq__35429__$1);
var G__35440 = cljs.core.chunk_rest.call(null,seq__35429__$1);
var G__35441 = c__23534__auto__;
var G__35442 = cljs.core.count.call(null,c__23534__auto__);
var G__35443 = (0);
seq__35429 = G__35440;
chunk__35430 = G__35441;
count__35431 = G__35442;
i__35432 = G__35443;
continue;
} else {
var vec__35434 = cljs.core.first.call(null,seq__35429__$1);
var k = cljs.core.nth.call(null,vec__35434,(0),null);
var plugin = cljs.core.nth.call(null,vec__35434,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35444 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35429,chunk__35430,count__35431,i__35432,pl_35444,vec__35434,k,plugin,seq__35429__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35444.call(null,msg_hist);
});})(seq__35429,chunk__35430,count__35431,i__35432,pl_35444,vec__35434,k,plugin,seq__35429__$1,temp__4126__auto__))
);
} else {
}

var G__35445 = cljs.core.next.call(null,seq__35429__$1);
var G__35446 = null;
var G__35447 = (0);
var G__35448 = (0);
seq__35429 = G__35445;
chunk__35430 = G__35446;
count__35431 = G__35447;
i__35432 = G__35448;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__35450 = arguments.length;
switch (G__35450) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__23789__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23789__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35453){
var map__35454 = p__35453;
var map__35454__$1 = ((cljs.core.seq_QMARK_.call(null,map__35454))?cljs.core.apply.call(null,cljs.core.hash_map,map__35454):map__35454);
var opts = map__35454__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35452){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35452));
});

//# sourceMappingURL=client.js.map?rel=1445200175851