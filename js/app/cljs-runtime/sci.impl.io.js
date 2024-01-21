import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.string.string.js";
import "./sci.impl.copy_vars.js";
import "./sci.impl.records.js";
import "./sci.impl.unrestrict.js";
import "./sci.impl.utils.js";
import "./sci.impl.vars.js";
goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__35438 = arguments.length;
switch (G__35438) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__35443 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35444 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35444);

try{var G__35446 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__35446);

return G__35446;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35443);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__35448 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35449 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35449);

try{var G__35451 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__35451);

return G__35451;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35448);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__35452 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35453 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35453);

try{var G__35454 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__35454);

return G__35454;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35452);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__35457 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35458 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35458);

try{var G__35460 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__35460);

return G__35460;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35457);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__35462 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35463 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35463);

try{var G__35466 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__35466);

return G__35466;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35462);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__35478 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__35480 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35480);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35478);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35744 = arguments.length;
var i__5770__auto___35745 = (0);
while(true){
if((i__5770__auto___35745 < len__5769__auto___35744)){
args__5775__auto__.push((arguments[i__5770__auto___35745]));

var G__35746 = (i__5770__auto___35745 + (1));
i__5770__auto___35745 = G__35746;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__35487 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__35488 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35489 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35490 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35491 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35492 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35493 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35494 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__35495 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__35496 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35497 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35498 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35499 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35500 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35502 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35503 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35495);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35496);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35497);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35498);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35499);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35500);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35502);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35503);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35494);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35493);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35492);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35491);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35490);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35489);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35488);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35487);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq35483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35483));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__35513 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__35514 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35514);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35513);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35749 = arguments.length;
var i__5770__auto___35750 = (0);
while(true){
if((i__5770__auto___35750 < len__5769__auto___35749)){
args__5775__auto__.push((arguments[i__5770__auto___35750]));

var G__35751 = (i__5770__auto___35750 + (1));
i__5770__auto___35750 = G__35751;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__35528 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35529 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35530 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35531 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35532 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35533 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35534 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__35535 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35536 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35537 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35538 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35539 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35540 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35541 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35535);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35536);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35537);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35538);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35539);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35540);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35541);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35533);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35532);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35531);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35530);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35529);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35528);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq35518){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35518));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35756 = arguments.length;
var i__5770__auto___35757 = (0);
while(true){
if((i__5770__auto___35757 < len__5769__auto___35756)){
args__5775__auto__.push((arguments[i__5770__auto___35757]));

var G__35759 = (i__5770__auto___35757 + (1));
i__5770__auto___35757 = G__35759;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__35562 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__35563 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35564 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35565 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35566 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35567 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35568 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35569 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__35570 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__35571 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35572 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35573 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35574 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35575 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35576 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35577 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35570);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35571);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35572);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35573);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35574);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35575);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35576);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35577);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35569);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35568);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35567);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35566);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35565);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35564);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35563);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35562);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq35552){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35552));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35763 = arguments.length;
var i__5770__auto___35764 = (0);
while(true){
if((i__5770__auto___35764 < len__5769__auto___35763)){
args__5775__auto__.push((arguments[i__5770__auto___35764]));

var G__35765 = (i__5770__auto___35764 + (1));
i__5770__auto___35764 = G__35765;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__35604 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35605 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35606 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35607 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35608 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35609 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35610 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__35611 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35612 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35613 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35614 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35615 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35616 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35617 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35611);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35612);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35613);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35614);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35615);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35616);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35617);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35610);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35609);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35608);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35607);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35606);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35605);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35604);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq35600){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35600));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35771 = arguments.length;
var i__5770__auto___35772 = (0);
while(true){
if((i__5770__auto___35772 < len__5769__auto___35771)){
args__5775__auto__.push((arguments[i__5770__auto___35772]));

var G__35773 = (i__5770__auto___35772 + (1));
i__5770__auto___35772 = G__35773;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__35628 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__35629 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35630 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35631 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35632 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35634 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__35635 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__35636 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35637 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__35638 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35639 = null;
var _STAR_print_newline_STAR__temp_val__35640 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35641 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35635);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35636);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35637);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35638);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35639);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35640);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35641);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35634);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35633);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35632);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35631);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35630);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35629);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35628);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq35624){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35624));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35777 = arguments.length;
var i__5770__auto___35778 = (0);
while(true){
if((i__5770__auto___35778 < len__5769__auto___35777)){
args__5775__auto__.push((arguments[i__5770__auto___35778]));

var G__35779 = (i__5770__auto___35778 + (1));
i__5770__auto___35778 = G__35779;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__35659 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35660 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35661 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35662 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35663 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35664 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35665 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__35666 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35667 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35668 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35669 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35670 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35671 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35672 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35666);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35667);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35668);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35669);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35670);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35671);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35672);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35665);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35664);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35663);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35662);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35661);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35660);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35659);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq35653){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35653));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35787 = arguments.length;
var i__5770__auto___35788 = (0);
while(true){
if((i__5770__auto___35788 < len__5769__auto___35787)){
args__5775__auto__.push((arguments[i__5770__auto___35788]));

var G__35789 = (i__5770__auto___35788 + (1));
i__5770__auto___35788 = G__35789;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__35691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__35692 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35693 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35694 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35695 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35696 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35697 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35698 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__35699 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__35700 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35701 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35702 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35703 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35704 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35705 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35706 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35699);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35700);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35701);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35702);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35703);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35704);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35705);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35706);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35698);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35697);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35696);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35695);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35694);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35693);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35692);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35691);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq35686){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35686));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35791 = arguments.length;
var i__5770__auto___35792 = (0);
while(true){
if((i__5770__auto___35792 < len__5769__auto___35791)){
args__5775__auto__.push((arguments[i__5770__auto___35792]));

var G__35793 = (i__5770__auto___35792 + (1));
i__5770__auto___35792 = G__35793;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__35714__auto__","s__35714__auto__",-1285653106,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__35716__auto__","x__35716__auto__",-1369446252,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__35714__auto__","s__35714__auto__",-1285653106,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35716__auto__","x__35716__auto__",-1369446252,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__35714__auto__","s__35714__auto__",-1285653106,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq35717){
var G__35718 = cljs.core.first(seq35717);
var seq35717__$1 = cljs.core.next(seq35717);
var G__35719 = cljs.core.first(seq35717__$1);
var seq35717__$2 = cljs.core.next(seq35717__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35718,G__35719,seq35717__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
