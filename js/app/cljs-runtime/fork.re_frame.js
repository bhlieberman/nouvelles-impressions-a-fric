import "./cljs_env.js";
import "./cljs.core.js";
import "./fork.core.js";
import "./reagent.core.js";
import "./re_frame.core.js";
goog.provide('fork.re_frame');
fork.re_frame.set_waiting = (function fork$re_frame$set_waiting(db,path,input_name,bool){
return fork.core.set_waiting(db,path,input_name,bool);
});
fork.re_frame.set_submitting = (function fork$re_frame$set_submitting(state,path,bool){
return fork.core.set_submitting(state,path,bool);
});
fork.re_frame.set_server_message = (function fork$re_frame$set_server_message(db,path,message){
return fork.core.set_server_message(db,path,message);
});
fork.re_frame.set_error = (function fork$re_frame$set_error(state,path,input_name,message){
return fork.core.set_error(state,path,input_name,message);
});
fork.re_frame.retrieve_event_value = (function fork$re_frame$retrieve_event_value(evt){
return fork.core.element_value(evt);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fork.re-frame","server-dispatch-logic","fork.re-frame/server-dispatch-logic",-1023921676),(function (db,p__26157){
var vec__26158 = p__26157;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26158,(0),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26158,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26158,(2),null);
var set_waiting_QMARK_ = fork.core.config_set_waiting_QMARK_(config);
var input_names = new cljs.core.Keyword(null,"clean-on-refetch","clean-on-refetch",-385424580).cljs$core$IFn$_invoke$arity$1(config);
var G__26161 = db;
var G__26161__$1 = ((cljs.core.seq(input_names))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__26161,path,(function (m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,m,new cljs.core.Keyword(null,"server","server",1499190120),cljs.core.dissoc,input_names);
})):G__26161);
if(cljs.core.truth_(set_waiting_QMARK_)){
return cljs.core.assoc_in(G__26161__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215)], null)),true);
} else {
return G__26161__$1;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fork.re-frame","server-set-waiting","fork.re-frame/server-set-waiting",-1277872097),(function (db,p__26162){
var vec__26163 = p__26162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(1),null);
var input_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(2),null);
var bool = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26163,(3),null);
return cljs.core.assoc_in(db,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),input_key,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215)], null)),bool);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("fork.re-frame","db","fork.re-frame/db",503486154),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__26166){
var vec__26167 = p__26166;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26167,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26167,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fork.re-frame","clean","fork.re-frame/clean",-448599170),(function (db,p__26170){
var vec__26171 = p__26170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26171,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26171,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(path))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.first(path));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
}
}));
fork.re_frame.field_array = (function fork$re_frame$field_array(props,component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.core.field_array,props,component], null);
});
fork.re_frame.form = (function fork$re_frame$form(props,_){
var state = fork.core.initialize_state(props);
var p = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(props);
var path = (cljs.core.truth_((function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.vector_QMARK_(p);
} else {
return and__5043__auto__;
}
})())?p:(((p instanceof cljs.core.Keyword))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[p],null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","global","fork.re-frame/global",600763048)], null)
));
var form_id = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"form-id","form-id",-158754567).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
}
})();
var handlers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disable","disable",1717637504),new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264),new cljs.core.Keyword(null,"set-values","set-values",-928640446),new cljs.core.Keyword(null,"handle-change","handle-change",741134083),new cljs.core.Keyword(null,"enable","enable",-1839114332),new cljs.core.Keyword(null,"set-untouched","set-untouched",922972645),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"normalize-name","normalize-name",-510567633),new cljs.core.Keyword(null,"send-server-request","send-server-request",175775635),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[(function() { 
var G__26224__delegate = function (ks){
return fork.core.disable.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
};
var G__26224 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__26226__i = 0, G__26226__a = new Array(arguments.length -  0);
while (G__26226__i < G__26226__a.length) {G__26226__a[G__26226__i] = arguments[G__26226__i + 0]; ++G__26226__i;}
  ks = new cljs.core.IndexedSeq(G__26226__a,0,null);
} 
return G__26224__delegate.call(this,ks);};
G__26224.cljs$lang$maxFixedArity = 0;
G__26224.cljs$lang$applyTo = (function (arglist__26228){
var ks = cljs.core.seq(arglist__26228);
return G__26224__delegate(ks);
});
G__26224.cljs$core$IFn$_invoke$arity$variadic = G__26224__delegate;
return G__26224;
})()
,(function (p1__26180_SHARP_){
return fork.core.handle_blur(p1__26180_SHARP_,state);
}),(function (p1__26174_SHARP_){
return fork.core.set_values(p1__26174_SHARP_,state);
}),(function (p1__26179_SHARP_){
return fork.core.handle_change(p1__26179_SHARP_,state);
}),(function() { 
var G__26230__delegate = function (ks){
return fork.core.enable.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
};
var G__26230 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__26231__i = 0, G__26231__a = new Array(arguments.length -  0);
while (G__26231__i < G__26231__a.length) {G__26231__a[G__26231__i] = arguments[G__26231__i + 0]; ++G__26231__i;}
  ks = new cljs.core.IndexedSeq(G__26231__a,0,null);
} 
return G__26230__delegate.call(this,ks);};
G__26230.cljs$lang$maxFixedArity = 0;
G__26230.cljs$lang$applyTo = (function (arglist__26232){
var ks = cljs.core.seq(arglist__26232);
return G__26230__delegate(ks);
});
G__26230.cljs$core$IFn$_invoke$arity$variadic = G__26230__delegate;
return G__26230;
})()
,(function() { 
var G__26233__delegate = function (ks){
return fork.core.set_untouched(ks,state);
};
var G__26233 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__26234__i = 0, G__26234__a = new Array(arguments.length -  0);
while (G__26234__i < G__26234__a.length) {G__26234__a[G__26234__i] = arguments[G__26234__i + 0]; ++G__26234__i;}
  ks = new cljs.core.IndexedSeq(G__26234__a,0,null);
} 
return G__26233__delegate.call(this,ks);};
G__26233.cljs$lang$maxFixedArity = 0;
G__26233.cljs$lang$applyTo = (function (arglist__26235){
var ks = cljs.core.seq(arglist__26235);
return G__26233__delegate(ks);
});
G__26233.cljs$core$IFn$_invoke$arity$variadic = G__26233__delegate;
return G__26233;
})()
,(function() { 
var G__26236__delegate = function (p__26182){
var vec__26185 = p__26182;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26185,(0),null);
cljs.core.reset_BANG_(state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252).cljs$core$IFn$_invoke$arity$1(props))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.PersistentHashSet.EMPTY], null),m], 0)));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","clean","fork.re-frame/clean",-448599170),path], null));
};
var G__26236 = function (var_args){
var p__26182 = null;
if (arguments.length > 0) {
var G__26241__i = 0, G__26241__a = new Array(arguments.length -  0);
while (G__26241__i < G__26241__a.length) {G__26241__a[G__26241__i] = arguments[G__26241__i + 0]; ++G__26241__i;}
  p__26182 = new cljs.core.IndexedSeq(G__26241__a,0,null);
} 
return G__26236__delegate.call(this,p__26182);};
G__26236.cljs$lang$maxFixedArity = 0;
G__26236.cljs$lang$applyTo = (function (arglist__26242){
var p__26182 = cljs.core.seq(arglist__26242);
return G__26236__delegate(p__26182);
});
G__26236.cljs$core$IFn$_invoke$arity$variadic = G__26236__delegate;
return G__26236;
})()
,(function (p1__26178_SHARP_){
return fork.core.set_handle_blur(p1__26178_SHARP_,state);
}),(function() { 
var G__26244__delegate = function (ks){
return fork.core.set_touched(ks,state);
};
var G__26244 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__26246__i = 0, G__26246__a = new Array(arguments.length -  0);
while (G__26246__i < G__26246__a.length) {G__26246__a[G__26246__i] = arguments[G__26246__i + 0]; ++G__26246__i;}
  ks = new cljs.core.IndexedSeq(G__26246__a,0,null);
} 
return G__26244__delegate.call(this,ks);};
G__26244.cljs$lang$maxFixedArity = 0;
G__26244.cljs$lang$applyTo = (function (arglist__26247){
var ks = cljs.core.seq(arglist__26247);
return G__26244__delegate(ks);
});
G__26244.cljs$core$IFn$_invoke$arity$variadic = G__26244__delegate;
return G__26244;
})()
,(function (k){
return fork.core.touched(state,k);
}),(function (p1__26176_SHARP_){
return fork.core.normalize_name(p1__26176_SHARP_,props);
}),(function (config,callback){
return fork.core.send_server_request(callback,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"server-dispatch-logic","server-dispatch-logic",-465441551),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","server-dispatch-logic","fork.re-frame/server-dispatch-logic",-1023921676),config,path], null));
})], null)], 0)));
}),(function (p1__26177_SHARP_){
return fork.core.set_handle_change(p1__26177_SHARP_,state);
}),(function (p1__26175_SHARP_){
return fork.core.disabled_QMARK_(state,p1__26175_SHARP_);
})]);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var temp__5804__auto__ = new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto__)){
var on_mount = temp__5804__auto__;
return (on_mount.cljs$core$IFn$_invoke$arity$1 ? on_mount.cljs$core$IFn$_invoke$arity$1(handlers) : on_mount.call(null,handlers));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"clean-on-unmount?","clean-on-unmount?",-1144411068).cljs$core$IFn$_invoke$arity$1(props))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","clean","fork.re-frame/clean",-448599170),path], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (props__$1,component){
var db = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","db","fork.re-frame/db",503486154),path], null)));
var validation = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"validation","validation",-2141396518).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var val_fn = temp__5804__auto__;
return fork.core.handle_validation(cljs.core.deref(state),val_fn);
} else {
return null;
}
})();
var server_validation = fork.core.resolve_server_validation(new cljs.core.Keyword(null,"server","server",1499190120).cljs$core$IFn$_invoke$arity$1(db));
var on_submit_server_message = new cljs.core.Keyword(null,"server-message","server-message",-678695903).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disable","disable",1717637504),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264),new cljs.core.Keyword(null,"dirty","dirty",729553281),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"set-values","set-values",-928640446),new cljs.core.Keyword(null,"handle-change","handle-change",741134083),new cljs.core.Keyword(null,"enable","enable",-1839114332),new cljs.core.Keyword(null,"set-untouched","set-untouched",922972645),new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917),new cljs.core.Keyword(null,"successful-submissions","successful-submissions",-961073531),new cljs.core.Keyword(null,"submitting?","submitting?",1281507942),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225),new cljs.core.Keyword(null,"attempted-submissions","attempted-submissions",2035303435),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"normalize-name","normalize-name",-510567633),new cljs.core.Keyword(null,"on-submit-server-message","on-submit-server-message",-1306531376),new cljs.core.Keyword(null,"send-server-request","send-server-request",175775635),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040),new cljs.core.Keyword(null,"form-id","form-id",-158754567),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.Keyword(null,"props","props",453281727)],[new cljs.core.Keyword(null,"disable","disable",1717637504).cljs$core$IFn$_invoke$arity$1(handlers),path,new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264).cljs$core$IFn$_invoke$arity$1(handlers),fork.core.dirty(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-values","initial-values",1392120293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"touched-values","touched-values",-1817885644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], 0))),validation,new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"handle-change","handle-change",741134083).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"enable","enable",-1839114332).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"set-untouched","set-untouched",922972645).cljs$core$IFn$_invoke$arity$1(handlers),(function (p1__26181_SHARP_){
return fork.core.handle_submit(p1__26181_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"server","server",1499190120).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"form-id","form-id",-158754567),form_id,new cljs.core.Keyword(null,"validation","validation",-2141396518),validation,new cljs.core.Keyword(null,"already-submitting?","already-submitting?",1438118407),new cljs.core.Keyword(null,"submitting?","submitting?",1281507942).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(handlers)], null)], 0)));
}),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"successful-submissions","successful-submissions",-961073531).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"submitting?","submitting?",1281507942).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(handlers),db,new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225).cljs$core$IFn$_invoke$arity$1(handlers),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"attempted-submissions","attempted-submissions",2035303435).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429).cljs$core$IFn$_invoke$arity$1(handlers),state,new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"normalize-name","normalize-name",-510567633).cljs$core$IFn$_invoke$arity$1(handlers),on_submit_server_message,new cljs.core.Keyword(null,"send-server-request","send-server-request",175775635).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040).cljs$core$IFn$_invoke$arity$1(handlers),form_id,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(handlers),server_validation,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(props__$1)])], null);
})], null));
});

//# sourceMappingURL=fork.re_frame.js.map
