import "./cljs_env.js";
import "./cljs.core.js";
import "./devtools.formatters.templating.js";
import "./devtools.formatters.state.js";
import "./devtools.formatters.helpers.js";
import "./devtools.formatters.markup.js";
goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__15418__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__15418__auto__["add"]).call(o__15418__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__15418__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__15418__auto__["delete"]).call(o__15418__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__15418__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__15418__auto__["has"]).call(o__15418__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__21314 = data;
var target__15444__auto__ = G__21314;
if(cljs.core.truth_(target__15444__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21314)].join(''),"\n","target__15444__auto__"].join('')));
}

(target__15444__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__21314;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_21346 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_21346);
} else {
var seq__21318_21347 = cljs.core.seq(json_ml);
var chunk__21319_21348 = null;
var count__21320_21349 = (0);
var i__21321_21350 = (0);
while(true){
if((i__21321_21350 < count__21320_21349)){
var item_21351 = chunk__21319_21348.cljs$core$IIndexed$_nth$arity$2(null,i__21321_21350);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_21351,new_depth_budget_21346) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_21351,new_depth_budget_21346));


var G__21352 = seq__21318_21347;
var G__21353 = chunk__21319_21348;
var G__21354 = count__21320_21349;
var G__21355 = (i__21321_21350 + (1));
seq__21318_21347 = G__21352;
chunk__21319_21348 = G__21353;
count__21320_21349 = G__21354;
i__21321_21350 = G__21355;
continue;
} else {
var temp__5804__auto___21356 = cljs.core.seq(seq__21318_21347);
if(temp__5804__auto___21356){
var seq__21318_21358__$1 = temp__5804__auto___21356;
if(cljs.core.chunked_seq_QMARK_(seq__21318_21358__$1)){
var c__5568__auto___21359 = cljs.core.chunk_first(seq__21318_21358__$1);
var G__21360 = cljs.core.chunk_rest(seq__21318_21358__$1);
var G__21361 = c__5568__auto___21359;
var G__21362 = cljs.core.count(c__5568__auto___21359);
var G__21363 = (0);
seq__21318_21347 = G__21360;
chunk__21319_21348 = G__21361;
count__21320_21349 = G__21362;
i__21321_21350 = G__21363;
continue;
} else {
var item_21365 = cljs.core.first(seq__21318_21358__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_21365,new_depth_budget_21346) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_21365,new_depth_budget_21346));


var G__21366 = cljs.core.next(seq__21318_21358__$1);
var G__21367 = null;
var G__21368 = (0);
var G__21369 = (0);
seq__21318_21347 = G__21366;
chunk__21319_21348 = G__21367;
count__21320_21349 = G__21368;
i__21321_21350 = G__21369;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5802__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5802__auto__)){
var initial_hierarchy_depth_budget = temp__5802__auto__;
var remaining_depth_budget = (function (){var or__5045__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
