import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs_time.core.js";
import "./cljs_time.format.js";
import "./goog.date.utcdatetime.js";
goog.provide('cljs_time.coerce');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_36822 = (function (obj){
var x__5393__auto__ = (((obj == null))?null:obj);
var m__5394__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5394__auto__.call(null,obj));
} else {
var m__5392__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5392__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_36822(obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__36765 = millis;
if((G__36765 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__36765) : goog.date.UtcDateTime.fromTimestamp.call(null,G__36765));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__5523__auto__ = (function cljs_time$coerce$from_string_$_iter__36768(s__36769){
return (new cljs.core.LazySeq(null,(function (){
var s__36769__$1 = s__36769;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36769__$1);
if(temp__5804__auto__){
var s__36769__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36769__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36769__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36771 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36770 = (0);
while(true){
if((i__36770 < size__5522__auto__)){
var f = cljs.core._nth(c__5521__auto__,i__36770);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e36775){if((e36775 instanceof Error)){
var _ = e36775;
return null;
} else {
throw e36775;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__36771,d);

var G__36827 = (i__36770 + (1));
i__36770 = G__36827;
continue;
} else {
var G__36828 = (i__36770 + (1));
i__36770 = G__36828;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36771),cljs_time$coerce$from_string_$_iter__36768(cljs.core.chunk_rest(s__36769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36771),null);
}
} else {
var f = cljs.core.first(s__36769__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e36785){if((e36785 instanceof Error)){
var _ = e36785;
return null;
} else {
throw e36785;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__36768(cljs.core.rest(s__36769__$2)));
} else {
var G__36829 = cljs.core.rest(s__36769__$2);
s__36769__$1 = G__36829;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__36789 = date;
var G__36789__$1 = (((G__36789 == null))?null:G__36789.getTime());
if((G__36789__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__36789__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__36791 = obj;
var G__36791__$1 = (((G__36791 == null))?null:cljs_time.coerce.to_date_time(G__36791));
if((G__36791__$1 == null)){
return null;
} else {
return G__36791__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__5043__auto__ = millis;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__5043__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__36810 = obj;
var G__36810__$1 = (((G__36810 == null))?null:cljs_time.coerce.to_date_time(G__36810));
var G__36810__$2 = (((G__36810__$1 == null))?null:G__36810__$1.getTime());
if((G__36810__$2 == null)){
return null;
} else {
return (new Date(G__36810__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__36812 = obj;
var G__36812__$1 = (((G__36812 == null))?null:cljs_time.coerce.to_date_time(G__36812));
if((G__36812__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__36812__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5802__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5802__auto__)){
var dt = temp__5802__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5802__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5802__auto__)){
var dt = temp__5802__auto__;
var G__36816 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__36816.setHours(dt.getHours());

G__36816.setMinutes(dt.getMinutes());

G__36816.setSeconds(dt.getSeconds());

G__36816.setMilliseconds(dt.getMilliseconds());

return G__36816;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long(long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string(string);
}));

//# sourceMappingURL=cljs_time.coerce.js.map
