// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame_re_com_example.views');
goog.require('cljs.core');
goog.require('reforms.reagent');
goog.require('re_com.core');
goog.require('re_frame.core');
re_frame_re_com_example.views.title = (function re_frame_re_com_example$views$title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str("Hello from "),cljs.core.str(cljs.core.deref.call(null,name))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
;})(name))
});
re_frame_re_com_example.views.simple_view = (function re_frame_re_com_example$views$simple_view(){
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
return ((function (data){
return (function (){
return reforms.reagent.form.call(null,reforms.reagent.text.call(null,"Login",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null)),reforms.reagent.button.call(null,"This is a button",((function (data){
return (function (){
return alert("eu");
});})(data))
));
});
;})(data))
});
re_frame_re_com_example.views.main_panel = (function re_frame_re_com_example$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_re_com_example.views.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_re_com_example.views.simple_view], null)], null)], null);
});
});

//# sourceMappingURL=views.js.map?rel=1445200139373