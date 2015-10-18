// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame_re_com_example.core');
goog.require('cljs.core');
goog.require('re_frame_re_com_example.views');
goog.require('re_frame_re_com_example.subs');
goog.require('re_frame_re_com_example.handlers');
goog.require('re_frame.core');
goog.require('reagent.core');
re_frame_re_com_example.core.mount_root = (function re_frame_re_com_example$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_re_com_example.views.main_panel], null),document.getElementById("app"));
});
re_frame_re_com_example.core.init = (function re_frame_re_com_example$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return re_frame_re_com_example.core.mount_root.call(null);
});
goog.exportSymbol('re_frame_re_com_example.core.init', re_frame_re_com_example.core.init);

//# sourceMappingURL=core.js.map?rel=1445200139506