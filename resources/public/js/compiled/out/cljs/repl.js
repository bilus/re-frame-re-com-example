// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35824_35836 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35825_35837 = null;
var count__35826_35838 = (0);
var i__35827_35839 = (0);
while(true){
if((i__35827_35839 < count__35826_35838)){
var f_35840 = cljs.core._nth.call(null,chunk__35825_35837,i__35827_35839);
cljs.core.println.call(null,"  ",f_35840);

var G__35841 = seq__35824_35836;
var G__35842 = chunk__35825_35837;
var G__35843 = count__35826_35838;
var G__35844 = (i__35827_35839 + (1));
seq__35824_35836 = G__35841;
chunk__35825_35837 = G__35842;
count__35826_35838 = G__35843;
i__35827_35839 = G__35844;
continue;
} else {
var temp__4126__auto___35845 = cljs.core.seq.call(null,seq__35824_35836);
if(temp__4126__auto___35845){
var seq__35824_35846__$1 = temp__4126__auto___35845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35824_35846__$1)){
var c__23534__auto___35847 = cljs.core.chunk_first.call(null,seq__35824_35846__$1);
var G__35848 = cljs.core.chunk_rest.call(null,seq__35824_35846__$1);
var G__35849 = c__23534__auto___35847;
var G__35850 = cljs.core.count.call(null,c__23534__auto___35847);
var G__35851 = (0);
seq__35824_35836 = G__35848;
chunk__35825_35837 = G__35849;
count__35826_35838 = G__35850;
i__35827_35839 = G__35851;
continue;
} else {
var f_35852 = cljs.core.first.call(null,seq__35824_35846__$1);
cljs.core.println.call(null,"  ",f_35852);

var G__35853 = cljs.core.next.call(null,seq__35824_35846__$1);
var G__35854 = null;
var G__35855 = (0);
var G__35856 = (0);
seq__35824_35836 = G__35853;
chunk__35825_35837 = G__35854;
count__35826_35838 = G__35855;
i__35827_35839 = G__35856;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__22749__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22749__auto__)){
return or__22749__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35828 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35829 = null;
var count__35830 = (0);
var i__35831 = (0);
while(true){
if((i__35831 < count__35830)){
var vec__35832 = cljs.core._nth.call(null,chunk__35829,i__35831);
var name = cljs.core.nth.call(null,vec__35832,(0),null);
var map__35833 = cljs.core.nth.call(null,vec__35832,(1),null);
var map__35833__$1 = ((cljs.core.seq_QMARK_.call(null,map__35833))?cljs.core.apply.call(null,cljs.core.hash_map,map__35833):map__35833);
var arglists = cljs.core.get.call(null,map__35833__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__35833__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35857 = seq__35828;
var G__35858 = chunk__35829;
var G__35859 = count__35830;
var G__35860 = (i__35831 + (1));
seq__35828 = G__35857;
chunk__35829 = G__35858;
count__35830 = G__35859;
i__35831 = G__35860;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35828);
if(temp__4126__auto__){
var seq__35828__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35828__$1)){
var c__23534__auto__ = cljs.core.chunk_first.call(null,seq__35828__$1);
var G__35861 = cljs.core.chunk_rest.call(null,seq__35828__$1);
var G__35862 = c__23534__auto__;
var G__35863 = cljs.core.count.call(null,c__23534__auto__);
var G__35864 = (0);
seq__35828 = G__35861;
chunk__35829 = G__35862;
count__35830 = G__35863;
i__35831 = G__35864;
continue;
} else {
var vec__35834 = cljs.core.first.call(null,seq__35828__$1);
var name = cljs.core.nth.call(null,vec__35834,(0),null);
var map__35835 = cljs.core.nth.call(null,vec__35834,(1),null);
var map__35835__$1 = ((cljs.core.seq_QMARK_.call(null,map__35835))?cljs.core.apply.call(null,cljs.core.hash_map,map__35835):map__35835);
var arglists = cljs.core.get.call(null,map__35835__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__35835__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35865 = cljs.core.next.call(null,seq__35828__$1);
var G__35866 = null;
var G__35867 = (0);
var G__35868 = (0);
seq__35828 = G__35865;
chunk__35829 = G__35866;
count__35830 = G__35867;
i__35831 = G__35868;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1445200177635