// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__){
return (function (state_31129){
var state_val_31130 = (state_31129[(1)]);
if((state_val_31130 === (7))){
var inst_31114 = (state_31129[(2)]);
var state_31129__$1 = (function (){var statearr_31131 = state_31129;
(statearr_31131[(7)] = inst_31114);

return statearr_31131;
})();
var statearr_31132_31152 = state_31129__$1;
(statearr_31132_31152[(2)] = null);

(statearr_31132_31152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (1))){
var state_31129__$1 = state_31129;
var statearr_31133_31153 = state_31129__$1;
(statearr_31133_31153[(2)] = null);

(statearr_31133_31153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (4))){
var inst_31101 = (state_31129[(8)]);
var inst_31101__$1 = (state_31129[(2)]);
var inst_31102 = cljs.core.meta.call(null,inst_31101__$1);
var inst_31103 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_31102);
var state_31129__$1 = (function (){var statearr_31134 = state_31129;
(statearr_31134[(8)] = inst_31101__$1);

return statearr_31134;
})();
if(cljs.core.truth_(inst_31103)){
var statearr_31135_31154 = state_31129__$1;
(statearr_31135_31154[(1)] = (5));

} else {
var statearr_31136_31155 = state_31129__$1;
(statearr_31136_31155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (6))){
var inst_31110 = cljs.core.async.timeout.call(null,(0));
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,(9),inst_31110);
} else {
if((state_val_31130 === (3))){
var inst_31127 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31129__$1,inst_31127);
} else {
if((state_val_31130 === (12))){
var inst_31101 = (state_31129[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31129,(11),Object,null,(10));
var inst_31122 = re_frame.handlers.handle.call(null,inst_31101);
var state_31129__$1 = state_31129;
var statearr_31137_31156 = state_31129__$1;
(statearr_31137_31156[(2)] = inst_31122);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (2))){
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_31130 === (11))){
var inst_31115 = (state_31129[(2)]);
var inst_31116 = re_frame.router.purge_chan.call(null);
var inst_31117 = re_frame$router$router_loop.call(null);
var inst_31118 = (function(){throw inst_31115})();
var state_31129__$1 = (function (){var statearr_31138 = state_31129;
(statearr_31138[(9)] = inst_31116);

(statearr_31138[(10)] = inst_31117);

return statearr_31138;
})();
var statearr_31139_31157 = state_31129__$1;
(statearr_31139_31157[(2)] = inst_31118);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (9))){
var inst_31112 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31140_31158 = state_31129__$1;
(statearr_31140_31158[(2)] = inst_31112);

(statearr_31140_31158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (5))){
var inst_31105 = reagent.core.flush.call(null);
var inst_31106 = cljs.core.async.timeout.call(null,(20));
var state_31129__$1 = (function (){var statearr_31141 = state_31129;
(statearr_31141[(11)] = inst_31105);

return statearr_31141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,(8),inst_31106);
} else {
if((state_val_31130 === (10))){
var inst_31124 = (state_31129[(2)]);
var state_31129__$1 = (function (){var statearr_31142 = state_31129;
(statearr_31142[(12)] = inst_31124);

return statearr_31142;
})();
var statearr_31143_31159 = state_31129__$1;
(statearr_31143_31159[(2)] = null);

(statearr_31143_31159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (8))){
var inst_31108 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31144_31160 = state_31129__$1;
(statearr_31144_31160[(2)] = inst_31108);

(statearr_31144_31160[(1)] = (7));


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
});})(c__26838__auto__))
;
return ((function (switch__26776__auto__,c__26838__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__26777__auto__ = null;
var re_frame$router$router_loop_$_state_machine__26777__auto____0 = (function (){
var statearr_31148 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31148[(0)] = re_frame$router$router_loop_$_state_machine__26777__auto__);

(statearr_31148[(1)] = (1));

return statearr_31148;
});
var re_frame$router$router_loop_$_state_machine__26777__auto____1 = (function (state_31129){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_31129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e31149){if((e31149 instanceof Object)){
var ex__26780__auto__ = e31149;
var statearr_31150_31161 = state_31129;
(statearr_31150_31161[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31162 = state_31129;
state_31129 = G__31162;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__26777__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__26777__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__26777__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__26777__auto____0;
re_frame$router$router_loop_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__26777__auto____1;
return re_frame$router$router_loop_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__))
})();
var state__26840__auto__ = (function (){var statearr_31151 = f__26839__auto__.call(null);
(statearr_31151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__))
);

return c__26838__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1445200147470