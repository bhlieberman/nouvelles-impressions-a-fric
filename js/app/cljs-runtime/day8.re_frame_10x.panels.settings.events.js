import "./cljs_env.js";
import "./cljs.core.js";
import "./day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.js";
import "./day8.re_frame_10x.fx.local_storage.js";
import "./day8.re_frame_10x.fx.trace.js";
import "./day8.re_frame_10x.tools.reader.edn.js";
import "./day8.re_frame_10x.panels.settings.subs.js";
goog.provide('day8.re_frame_10x.panels.settings.events');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","panel-width%","day8.re-frame-10x.panels.settings.events/panel-width%",-569115915),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("panel-width-ratio")], null),(function (_,p__18437){
var vec__18438 = p__18437;
var width_PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(0),null);
var x__5130__auto__ = width_PERCENT_;
var y__5131__auto__ = 0.05;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","window-width","day8.re-frame-10x.panels.settings.events/window-width",-1771897871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"window-width","window-width",2057825599)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__18441){
var vec__18442 = p__18441;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(0),null);
return width;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","selected-tab","day8.re-frame-10x.panels.settings.events/selected-tab",-17590986),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("selected-tab")], null),(function (_,p__18445){
var vec__18446 = p__18445;
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(0),null);
return selected_tab;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","toggle","day8.re-frame-10x.panels.settings.events/toggle",-388660368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878)], null)], 0))], null),(function (showing_QMARK_,_){
return cljs.core.not(showing_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","show-panel?","day8.re-frame-10x.panels.settings.events/show-panel?",1007877818),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("show-panel")], null),(function (_,p__18450){
var vec__18452 = p__18450;
var show_panel_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18452,(0),null);
return show_panel_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","factory-reset","day8.re-frame-10x.panels.settings.events/factory-reset",880771998),(function (db,_){
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_();

location.reload();

return db;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-ambiance","day8.re-frame-10x.panels.settings.events/set-ambiance",1852620827),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ambiance","ambiance",-1936594032)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("ambiance")], null),(function (_,p__18459){
var vec__18462 = p__18459;
var ambiance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18462,(0),null);
return ambiance;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-syntax-color-scheme","day8.re-frame-10x.panels.settings.events/set-syntax-color-scheme",1780603652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"syntax-color-scheme","syntax-color-scheme",2062388740)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("syntax-color-scheme")], null),(function (_,p__18466){
var vec__18467 = p__18466;
var syntax_color_scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18467,(0),null);
return syntax_color_scheme;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-number-of-retained-epochs","day8.re-frame-10x.panels.settings.events/set-number-of-retained-epochs",-813421569),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("retained-epochs")], null),(function (_,p__18473){
var vec__18476 = p__18473;
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476,(0),null);
var num = parseInt(num_str);
var num__$1 = ((((cljs.core.not(isNaN(num))) && (cljs.core.pos_int_QMARK_(num))))?num:(5));
return num__$1;
}));
day8.re_frame_10x.panels.settings.events.ignored_event_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("ignored-events")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","add-ignored-event","day8.re-frame-10x.panels.settings.events/add-ignored-event",-92168870),day8.re_frame_10x.panels.settings.events.ignored_event_interceptors,(function (ignored_events,_){
var id = cljs.core.random_uuid();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ignored_events,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event-str","event-str",381347778),"",new cljs.core.Keyword(null,"event-id","event-id",2130210178),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","remove-ignored-event","day8.re-frame-10x.panels.settings.events/remove-ignored-event",252246704),day8.re_frame_10x.panels.settings.events.ignored_event_interceptors,(function (ignored_events,p__18490){
var vec__18491 = p__18490;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18491,(0),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ignored_events,id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","update-ignored-event","day8.re-frame-10x.panels.settings.events/update-ignored-event",789804124),day8.re_frame_10x.panels.settings.events.ignored_event_interceptors,(function (ignored_events,p__18501){
var vec__18504 = p__18501;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18504,(0),null);
var event_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18504,(1),null);
var event = day8.re_frame_10x.tools.reader.edn.read_string_maybe(event_str);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(ignored_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-str","event-str",381347778)], null),event_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-id","event-id",2130210178)], null),(function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
}));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-ignored-events","day8.re-frame-10x.panels.settings.events/set-ignored-events",-970331242),day8.re_frame_10x.panels.settings.events.ignored_event_interceptors,(function (_,p__18510){
var vec__18515 = p__18510;
var ignored_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18515,(0),null);
return ignored_events;
}));
day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("filtered-view-trace")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","add-filtered-view-trace","day8.re-frame-10x.panels.settings.events/add-filtered-view-trace",937947584),day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors,(function (filtered_view_trace,_){
var id = cljs.core.random_uuid();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filtered_view_trace,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"",new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","remove-filtered-view-trace","day8.re-frame-10x.panels.settings.events/remove-filtered-view-trace",2058604246),day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors,(function (filtered_view_trace,p__18527){
var vec__18528 = p__18527;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18528,(0),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(filtered_view_trace,id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","update-filtered-view-trace","day8.re-frame-10x.panels.settings.events/update-filtered-view-trace",598201221),day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors,(function (filtered_view_trace,p__18537){
var vec__18540 = p__18537;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18540,(0),null);
var ns_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18540,(1),null);
var event = day8.re_frame_10x.tools.reader.edn.read_string_maybe(ns_str);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(filtered_view_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)], null),ns_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns","ns",441598760)], null),(function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
}));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-filtered-view-trace","day8.re-frame-10x.panels.settings.events/set-filtered-view-trace",-1786377461),day8.re_frame_10x.panels.settings.events.filtered_view_trace_interceptors,(function (_,p__18543){
var vec__18544 = p__18543;
var ignored_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18544,(0),null);
return ignored_events;
}));
day8.re_frame_10x.panels.settings.events.low_level_trace_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("low-level-trace")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-low-level-trace","day8.re-frame-10x.panels.settings.events/set-low-level-trace",2138640985),day8.re_frame_10x.panels.settings.events.low_level_trace_interceptors,(function (_,p__18553){
var vec__18554 = p__18553;
var low_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18554,(0),null);
return low_level;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","low-level-trace","day8.re-frame-10x.panels.settings.events/low-level-trace",1236991858),day8.re_frame_10x.panels.settings.events.low_level_trace_interceptors,(function (low_level,p__18557){
var vec__18558 = p__18557;
var trace_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18558,(0),null);
var capture_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18558,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(low_level,trace_type,capture_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","debug?","day8.re-frame-10x.panels.settings.events/debug?",790572533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__18563){
var vec__18564 = p__18563;
var debug_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18564,(0),null);
return debug_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","app-db-follows-events?","day8.re-frame-10x.panels.settings.events/app-db-follows-events?",-1040848496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-follows-events?")], null),(function (_,p__18567){
var vec__18568 = p__18567;
var follows_events_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18568,(0),null);
return follows_events_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","external-window-dimensions","day8.re-frame-10x.panels.settings.events/external-window-dimensions",-1468897580),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("external-window-dimensions")], null),(function (_,p__18578){
var vec__18579 = p__18578;
var external_window_dimensions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18579,(0),null);
return external_window_dimensions;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","external-window-resize","day8.re-frame-10x.panels.settings.events/external-window-resize",-1765520744),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("external-window-dimensions")], null),(function (external_window_dimensions,p__18582){
var map__18583 = p__18582;
var map__18583__$1 = cljs.core.__destructure_map(map__18583);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(external_window_dimensions,new cljs.core.Keyword(null,"width","width",-384071477),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),height], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","external-window-position","day8.re-frame-10x.panels.settings.events/external-window-position",1498755641),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("external-window-dimensions")], null),(function (external_window_dimensions,p__18586){
var map__18587 = p__18586;
var map__18587__$1 = cljs.core.__destructure_map(map__18587);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18587__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18587__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(external_window_dimensions,new cljs.core.Keyword(null,"left","left",-399115937),left,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"top","top",-1856271961),top], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","user-toggle-panel","day8.re-frame-10x.panels.settings.events/user-toggle-panel",719619220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], 0)),day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic("using-trace?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112)], 0)),day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic("show-panel",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], 0))], null),(function (p__18590,_){
var map__18594 = p__18590;
var map__18594__$1 = cljs.core.__destructure_map(map__18594);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18594__$1,new cljs.core.Keyword(null,"db","db",993250759));
var now_showing_QMARK_ = cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)));
var external_panel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803));
var trace_when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"trace-when","trace-when",-1902271347));
var using_trace_QMARK_ = (function (){var or__5045__auto__ = external_panel_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((now_showing_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"always","always",-1772028770),trace_when)));
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112),using_trace_QMARK_),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892),now_showing_QMARK_)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel","panel",-558637456),trace_when))?((now_showing_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","enable","day8.re-frame-10x.fx.trace/enable",-1468830594),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null):(cljs.core.truth_(external_panel_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","disable","day8.re-frame-10x.fx.trace/disable",-463610394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null))):null)], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","enable-tracing","day8.re-frame-10x.panels.settings.events/enable-tracing",-277800550),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","enable","day8.re-frame-10x.fx.trace/enable",-1468830594),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","disable-tracing","day8.re-frame-10x.panels.settings.events/disable-tracing",941542458),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","disable","day8.re-frame-10x.fx.trace/disable",-463610394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","show-event-history?","day8.re-frame-10x.panels.settings.events/show-event-history?",-1550189870),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-event-history?","show-event-history?",398887712)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("show-event-history")], null),(function (_,p__18610){
var vec__18611 = p__18610;
var show_event_history_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18611,(0),null);
return show_event_history_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","open-new-inspectors?","day8.re-frame-10x.panels.settings.events/open-new-inspectors?",-1146109198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"open-new-inspectors?","open-new-inspectors?",-3558540)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("open-new-inspectors?")], null),(function (_,p__18620){
var vec__18621 = p__18620;
var open_new_inspectors_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(0),null);
return open_new_inspectors_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","handle-keys?","day8.re-frame-10x.panels.settings.events/handle-keys?",-1135701923),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"handle-keys?","handle-keys?",-793509665)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("handle-keys?")], null),(function (_,p__18626){
var vec__18627 = p__18626;
var handle_keys_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627,(0),null);
return handle_keys_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","ready-to-bind-key","day8.re-frame-10x.panels.settings.events/ready-to-bind-key",861370876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ready-to-bind-key","ready-to-bind-key",1469196678)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__18633){
var vec__18636 = p__18633;
var key_intent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18636,(0),null);
return key_intent;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","key-bindings","day8.re-frame-10x.panels.settings.events/key-bindings",-996065532),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("key-bindings")], null),(function (_,p__18642){
var vec__18643 = p__18642;
var key_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18643,(0),null);
return key_bindings;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","bind-key","day8.re-frame-10x.panels.settings.events/bind-key",1967914547),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("key-bindings")], null),(function (key_bindings,p__18648){
var vec__18649 = p__18648;
var key_intent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18649,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18649,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(key_bindings,key_intent,value);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","log-outputs","day8.re-frame-10x.panels.settings.events/log-outputs",-1558253885),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"log-outputs","log-outputs",-687309247)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("log-outputs")], null),(function (log_outputs,p__18658){
var vec__18661 = p__18658;
var seq__18662 = cljs.core.seq(vec__18661);
var first__18663 = cljs.core.first(seq__18662);
var seq__18662__$1 = cljs.core.next(seq__18662);
var value = first__18663;
var vec__18664 = seq__18662__$1;
var enabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18664,(0),null);
if(cljs.core.vector_QMARK_(value)){
return value;
} else {
return cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1((function (){var G__18673 = cljs.core.set(log_outputs);
var G__18674 = value;
var fexpr__18672 = (((!(enabled_QMARK_ === false)))?cljs.core.conj:cljs.core.disj);
return (fexpr__18672.cljs$core$IFn$_invoke$arity$2 ? fexpr__18672.cljs$core$IFn$_invoke$arity$2(G__18673,G__18674) : fexpr__18672.call(null,G__18673,G__18674));
})()));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","log-pretty?","day8.re-frame-10x.panels.settings.events/log-pretty?",-1116292704),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"log-pretty?","log-pretty?",-1627576290)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("log-pretty?")], null),(function (_,p__18680){
var vec__18681 = p__18680;
var pretty_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(0),null);
return pretty_QMARK_;
}));
day8.re_frame_10x.panels.settings.events.ns_aliases_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("ns-aliases")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","alias-namespaces?","day8.re-frame-10x.panels.settings.events/alias-namespaces?",-1603977413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"alias-namespaces?","alias-namespaces?",-587355207)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("alias-namespaces?")], null),(function (_,p__18687){
var vec__18689 = p__18687;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18689,(0),null);
return b;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","ns-aliases","day8.re-frame-10x.panels.settings.events/ns-aliases",-388674713),day8.re_frame_10x.panels.settings.events.ns_aliases_interceptors,(function (_,p__18693){
var vec__18694 = p__18693;
var ns_aliases = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18694,(0),null);
return ns_aliases;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","add-ns-alias","day8.re-frame-10x.panels.settings.events/add-ns-alias",1641019125),day8.re_frame_10x.panels.settings.events.ns_aliases_interceptors,(function (ns_aliases,p__18700){
var vec__18701 = p__18700;
var ns_full = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(0),null);
var ns_alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(1),null);
var id = cljs.core.random_uuid();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns_aliases,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns-full","ns-full",225339386),ns_full,new cljs.core.Keyword(null,"ns-alias","ns-alias",1705921737),ns_alias,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","remove-ns-alias","day8.re-frame-10x.panels.settings.events/remove-ns-alias",1789636313),day8.re_frame_10x.panels.settings.events.ns_aliases_interceptors,(function (ns_aliases,p__18708){
var vec__18709 = p__18708;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18709,(0),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ns_aliases,id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","update-ns-alias","day8.re-frame-10x.panels.settings.events/update-ns-alias",1359466041),day8.re_frame_10x.panels.settings.events.ns_aliases_interceptors,(function (ns_aliases,p__18713){
var vec__18714 = p__18713;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18714,(0),null);
var ns_full = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18714,(1),null);
var ns_alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18714,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ns_aliases,id,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-full","ns-full",225339386),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_full),new cljs.core.Keyword(null,"ns-alias","ns-alias",1705921737),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_alias)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","expansion-limit","day8.re-frame-10x.panels.settings.events/expansion-limit",-1442634866),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"expansion-limit","expansion-limit",-2040810736)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("expansion-limit")], null),(function (_,p__18719){
var vec__18720 = p__18719;
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18720,(0),null);
return limit;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","trace-when","day8.re-frame-10x.panels.settings.events/trace-when",871388943),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"trace-when","trace-when",-1902271347)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("trace-when")], null),(function (p__18726,p__18727){
var map__18730 = p__18726;
var map__18730__$1 = cljs.core.__destructure_map(map__18730);
var trace_when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18730__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18731 = p__18727;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),k], null),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"never","never",50472977),trace_when)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"never","never",50472977),k))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","disable","day8.re-frame-10x.fx.trace/disable",-463610394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"never","never",50472977),trace_when)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"never","never",50472977),k))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("day8.re-frame-10x.fx.trace","enable","day8.re-frame-10x.fx.trace/enable",-1468830594),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","cb","day8.re-frame-10x.panels.settings.events/cb",1188066371)], null)], null):null)));
}));

//# sourceMappingURL=day8.re_frame_10x.panels.settings.events.js.map
