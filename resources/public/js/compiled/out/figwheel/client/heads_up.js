// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__23789__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23789__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35581_35589 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35582_35590 = null;
var count__35583_35591 = (0);
var i__35584_35592 = (0);
while(true){
if((i__35584_35592 < count__35583_35591)){
var k_35593 = cljs.core._nth.call(null,chunk__35582_35590,i__35584_35592);
e.setAttribute(cljs.core.name.call(null,k_35593),cljs.core.get.call(null,attrs,k_35593));

var G__35594 = seq__35581_35589;
var G__35595 = chunk__35582_35590;
var G__35596 = count__35583_35591;
var G__35597 = (i__35584_35592 + (1));
seq__35581_35589 = G__35594;
chunk__35582_35590 = G__35595;
count__35583_35591 = G__35596;
i__35584_35592 = G__35597;
continue;
} else {
var temp__4126__auto___35598 = cljs.core.seq.call(null,seq__35581_35589);
if(temp__4126__auto___35598){
var seq__35581_35599__$1 = temp__4126__auto___35598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35581_35599__$1)){
var c__23534__auto___35600 = cljs.core.chunk_first.call(null,seq__35581_35599__$1);
var G__35601 = cljs.core.chunk_rest.call(null,seq__35581_35599__$1);
var G__35602 = c__23534__auto___35600;
var G__35603 = cljs.core.count.call(null,c__23534__auto___35600);
var G__35604 = (0);
seq__35581_35589 = G__35601;
chunk__35582_35590 = G__35602;
count__35583_35591 = G__35603;
i__35584_35592 = G__35604;
continue;
} else {
var k_35605 = cljs.core.first.call(null,seq__35581_35599__$1);
e.setAttribute(cljs.core.name.call(null,k_35605),cljs.core.get.call(null,attrs,k_35605));

var G__35606 = cljs.core.next.call(null,seq__35581_35599__$1);
var G__35607 = null;
var G__35608 = (0);
var G__35609 = (0);
seq__35581_35589 = G__35606;
chunk__35582_35590 = G__35607;
count__35583_35591 = G__35608;
i__35584_35592 = G__35609;
continue;
}
} else {
}
}
break;
}

var seq__35585_35610 = cljs.core.seq.call(null,children);
var chunk__35586_35611 = null;
var count__35587_35612 = (0);
var i__35588_35613 = (0);
while(true){
if((i__35588_35613 < count__35587_35612)){
var ch_35614 = cljs.core._nth.call(null,chunk__35586_35611,i__35588_35613);
e.appendChild(ch_35614);

var G__35615 = seq__35585_35610;
var G__35616 = chunk__35586_35611;
var G__35617 = count__35587_35612;
var G__35618 = (i__35588_35613 + (1));
seq__35585_35610 = G__35615;
chunk__35586_35611 = G__35616;
count__35587_35612 = G__35617;
i__35588_35613 = G__35618;
continue;
} else {
var temp__4126__auto___35619 = cljs.core.seq.call(null,seq__35585_35610);
if(temp__4126__auto___35619){
var seq__35585_35620__$1 = temp__4126__auto___35619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35585_35620__$1)){
var c__23534__auto___35621 = cljs.core.chunk_first.call(null,seq__35585_35620__$1);
var G__35622 = cljs.core.chunk_rest.call(null,seq__35585_35620__$1);
var G__35623 = c__23534__auto___35621;
var G__35624 = cljs.core.count.call(null,c__23534__auto___35621);
var G__35625 = (0);
seq__35585_35610 = G__35622;
chunk__35586_35611 = G__35623;
count__35587_35612 = G__35624;
i__35588_35613 = G__35625;
continue;
} else {
var ch_35626 = cljs.core.first.call(null,seq__35585_35620__$1);
e.appendChild(ch_35626);

var G__35627 = cljs.core.next.call(null,seq__35585_35620__$1);
var G__35628 = null;
var G__35629 = (0);
var G__35630 = (0);
seq__35585_35610 = G__35627;
chunk__35586_35611 = G__35628;
count__35587_35612 = G__35629;
i__35588_35613 = G__35630;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq35578){
var G__35579 = cljs.core.first.call(null,seq35578);
var seq35578__$1 = cljs.core.next.call(null,seq35578);
var G__35580 = cljs.core.first.call(null,seq35578__$1);
var seq35578__$2 = cljs.core.next.call(null,seq35578__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__35579,G__35580,seq35578__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__23644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__23644__auto__,prefer_table__23645__auto__,method_cache__23646__auto__,cached_hierarchy__23647__auto__,hierarchy__23648__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__23644__auto__,prefer_table__23645__auto__,method_cache__23646__auto__,cached_hierarchy__23647__auto__,hierarchy__23648__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23648__auto__,method_table__23644__auto__,prefer_table__23645__auto__,method_cache__23646__auto__,cached_hierarchy__23647__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_35631 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_35631.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_35631.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_35631.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_35631);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__35632,st_map){
var map__35636 = p__35632;
var map__35636__$1 = ((cljs.core.seq_QMARK_.call(null,map__35636))?cljs.core.apply.call(null,cljs.core.hash_map,map__35636):map__35636);
var container_el = cljs.core.get.call(null,map__35636__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35636,map__35636__$1,container_el){
return (function (p__35637){
var vec__35638 = p__35637;
var k = cljs.core.nth.call(null,vec__35638,(0),null);
var v = cljs.core.nth.call(null,vec__35638,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35636,map__35636__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__35639,dom_str){
var map__35641 = p__35639;
var map__35641__$1 = ((cljs.core.seq_QMARK_.call(null,map__35641))?cljs.core.apply.call(null,cljs.core.hash_map,map__35641):map__35641);
var c = map__35641__$1;
var content_area_el = cljs.core.get.call(null,map__35641__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__35642){
var map__35644 = p__35642;
var map__35644__$1 = ((cljs.core.seq_QMARK_.call(null,map__35644))?cljs.core.apply.call(null,cljs.core.hash_map,map__35644):map__35644);
var content_area_el = cljs.core.get.call(null,map__35644__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__){
return (function (state_35686){
var state_val_35687 = (state_35686[(1)]);
if((state_val_35687 === (2))){
var inst_35671 = (state_35686[(7)]);
var inst_35680 = (state_35686[(2)]);
var inst_35681 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35682 = ["auto"];
var inst_35683 = cljs.core.PersistentHashMap.fromArrays(inst_35681,inst_35682);
var inst_35684 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35671,inst_35683);
var state_35686__$1 = (function (){var statearr_35688 = state_35686;
(statearr_35688[(8)] = inst_35680);

return statearr_35688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35686__$1,inst_35684);
} else {
if((state_val_35687 === (1))){
var inst_35671 = (state_35686[(7)]);
var inst_35671__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35672 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35673 = ["10px","10px","100%","68px","1.0"];
var inst_35674 = cljs.core.PersistentHashMap.fromArrays(inst_35672,inst_35673);
var inst_35675 = cljs.core.merge.call(null,inst_35674,style);
var inst_35676 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35671__$1,inst_35675);
var inst_35677 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35671__$1,msg);
var inst_35678 = cljs.core.async.timeout.call(null,(300));
var state_35686__$1 = (function (){var statearr_35689 = state_35686;
(statearr_35689[(9)] = inst_35676);

(statearr_35689[(7)] = inst_35671__$1);

(statearr_35689[(10)] = inst_35677);

return statearr_35689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35686__$1,(2),inst_35678);
} else {
return null;
}
}
});})(c__26838__auto__))
;
return ((function (switch__26776__auto__,c__26838__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto____0 = (function (){
var statearr_35693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35693[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto__);

(statearr_35693[(1)] = (1));

return statearr_35693;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto____1 = (function (state_35686){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_35686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e35694){if((e35694 instanceof Object)){
var ex__26780__auto__ = e35694;
var statearr_35695_35697 = state_35686;
(statearr_35695_35697[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35698 = state_35686;
state_35686 = G__35698;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto__ = function(state_35686){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto____1.call(this,state_35686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__))
})();
var state__26840__auto__ = (function (){var statearr_35696 = f__26839__auto__.call(null);
(statearr_35696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_35696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__))
);

return c__26838__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__35700 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__35700,(0),null);
var ln = cljs.core.nth.call(null,vec__35700,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__35703 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__35703,(0),null);
var file_line = cljs.core.nth.call(null,vec__35703,(1),null);
var file_column = cljs.core.nth.call(null,vec__35703,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35703,file_name,file_line,file_column){
return (function (p1__35701_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__35701_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__35703,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__22749__auto__ = file_line;
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
var and__22737__auto__ = cause;
if(cljs.core.truth_(and__22737__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__22737__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__35705 = figwheel.client.heads_up.ensure_container.call(null);
var map__35705__$1 = ((cljs.core.seq_QMARK_.call(null,map__35705))?cljs.core.apply.call(null,cljs.core.hash_map,map__35705):map__35705);
var content_area_el = cljs.core.get.call(null,map__35705__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__){
return (function (state_35752){
var state_val_35753 = (state_35752[(1)]);
if((state_val_35753 === (3))){
var inst_35735 = (state_35752[(7)]);
var inst_35749 = (state_35752[(2)]);
var inst_35750 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35735,"");
var state_35752__$1 = (function (){var statearr_35754 = state_35752;
(statearr_35754[(8)] = inst_35749);

return statearr_35754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35752__$1,inst_35750);
} else {
if((state_val_35753 === (2))){
var inst_35735 = (state_35752[(7)]);
var inst_35742 = (state_35752[(2)]);
var inst_35743 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35744 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35745 = cljs.core.PersistentHashMap.fromArrays(inst_35743,inst_35744);
var inst_35746 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35735,inst_35745);
var inst_35747 = cljs.core.async.timeout.call(null,(200));
var state_35752__$1 = (function (){var statearr_35755 = state_35752;
(statearr_35755[(9)] = inst_35742);

(statearr_35755[(10)] = inst_35746);

return statearr_35755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(3),inst_35747);
} else {
if((state_val_35753 === (1))){
var inst_35735 = (state_35752[(7)]);
var inst_35735__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35736 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35737 = ["0.0"];
var inst_35738 = cljs.core.PersistentHashMap.fromArrays(inst_35736,inst_35737);
var inst_35739 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35735__$1,inst_35738);
var inst_35740 = cljs.core.async.timeout.call(null,(300));
var state_35752__$1 = (function (){var statearr_35756 = state_35752;
(statearr_35756[(7)] = inst_35735__$1);

(statearr_35756[(11)] = inst_35739);

return statearr_35756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(2),inst_35740);
} else {
return null;
}
}
}
});})(c__26838__auto__))
;
return ((function (switch__26776__auto__,c__26838__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__26777__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__26777__auto____0 = (function (){
var statearr_35760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35760[(0)] = figwheel$client$heads_up$clear_$_state_machine__26777__auto__);

(statearr_35760[(1)] = (1));

return statearr_35760;
});
var figwheel$client$heads_up$clear_$_state_machine__26777__auto____1 = (function (state_35752){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_35752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e35761){if((e35761 instanceof Object)){
var ex__26780__auto__ = e35761;
var statearr_35762_35764 = state_35752;
(statearr_35762_35764[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35765 = state_35752;
state_35752 = G__35765;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__26777__auto__ = function(state_35752){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__26777__auto____1.call(this,state_35752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__26777__auto____0;
figwheel$client$heads_up$clear_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__26777__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__))
})();
var state__26840__auto__ = (function (){var statearr_35763 = f__26839__auto__.call(null);
(statearr_35763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_35763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__))
);

return c__26838__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__26838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26838__auto__){
return (function (){
var f__26839__auto__ = (function (){var switch__26776__auto__ = ((function (c__26838__auto__){
return (function (state_35797){
var state_val_35798 = (state_35797[(1)]);
if((state_val_35798 === (4))){
var inst_35795 = (state_35797[(2)]);
var state_35797__$1 = state_35797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35797__$1,inst_35795);
} else {
if((state_val_35798 === (3))){
var inst_35792 = (state_35797[(2)]);
var inst_35793 = figwheel.client.heads_up.clear.call(null);
var state_35797__$1 = (function (){var statearr_35799 = state_35797;
(statearr_35799[(7)] = inst_35792);

return statearr_35799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35797__$1,(4),inst_35793);
} else {
if((state_val_35798 === (2))){
var inst_35789 = (state_35797[(2)]);
var inst_35790 = cljs.core.async.timeout.call(null,(400));
var state_35797__$1 = (function (){var statearr_35800 = state_35797;
(statearr_35800[(8)] = inst_35789);

return statearr_35800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35797__$1,(3),inst_35790);
} else {
if((state_val_35798 === (1))){
var inst_35787 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35797__$1 = state_35797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35797__$1,(2),inst_35787);
} else {
return null;
}
}
}
}
});})(c__26838__auto__))
;
return ((function (switch__26776__auto__,c__26838__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto____0 = (function (){
var statearr_35804 = [null,null,null,null,null,null,null,null,null];
(statearr_35804[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto__);

(statearr_35804[(1)] = (1));

return statearr_35804;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto____1 = (function (state_35797){
while(true){
var ret_value__26778__auto__ = (function (){try{while(true){
var result__26779__auto__ = switch__26776__auto__.call(null,state_35797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26779__auto__;
}
break;
}
}catch (e35805){if((e35805 instanceof Object)){
var ex__26780__auto__ = e35805;
var statearr_35806_35808 = state_35797;
(statearr_35806_35808[(5)] = ex__26780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35809 = state_35797;
state_35797 = G__35809;
continue;
} else {
return ret_value__26778__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto__ = function(state_35797){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto____1.call(this,state_35797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__26777__auto__;
})()
;})(switch__26776__auto__,c__26838__auto__))
})();
var state__26840__auto__ = (function (){var statearr_35807 = f__26839__auto__.call(null);
(statearr_35807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26838__auto__);

return statearr_35807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26840__auto__);
});})(c__26838__auto__))
);

return c__26838__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1445200177487