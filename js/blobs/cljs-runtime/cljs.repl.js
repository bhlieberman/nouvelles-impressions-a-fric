goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32260){
var map__32261 = p__32260;
var map__32261__$1 = cljs.core.__destructure_map(map__32261);
var m = map__32261__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32261__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32262_32509 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32263_32510 = null;
var count__32264_32511 = (0);
var i__32265_32512 = (0);
while(true){
if((i__32265_32512 < count__32264_32511)){
var f_32513 = chunk__32263_32510.cljs$core$IIndexed$_nth$arity$2(null,i__32265_32512);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32513], 0));


var G__32514 = seq__32262_32509;
var G__32515 = chunk__32263_32510;
var G__32516 = count__32264_32511;
var G__32517 = (i__32265_32512 + (1));
seq__32262_32509 = G__32514;
chunk__32263_32510 = G__32515;
count__32264_32511 = G__32516;
i__32265_32512 = G__32517;
continue;
} else {
var temp__5804__auto___32519 = cljs.core.seq(seq__32262_32509);
if(temp__5804__auto___32519){
var seq__32262_32520__$1 = temp__5804__auto___32519;
if(cljs.core.chunked_seq_QMARK_(seq__32262_32520__$1)){
var c__5568__auto___32521 = cljs.core.chunk_first(seq__32262_32520__$1);
var G__32522 = cljs.core.chunk_rest(seq__32262_32520__$1);
var G__32523 = c__5568__auto___32521;
var G__32524 = cljs.core.count(c__5568__auto___32521);
var G__32525 = (0);
seq__32262_32509 = G__32522;
chunk__32263_32510 = G__32523;
count__32264_32511 = G__32524;
i__32265_32512 = G__32525;
continue;
} else {
var f_32527 = cljs.core.first(seq__32262_32520__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32527], 0));


var G__32528 = cljs.core.next(seq__32262_32520__$1);
var G__32529 = null;
var G__32530 = (0);
var G__32531 = (0);
seq__32262_32509 = G__32528;
chunk__32263_32510 = G__32529;
count__32264_32511 = G__32530;
i__32265_32512 = G__32531;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32532 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32532], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32532)))?cljs.core.second(arglists_32532):arglists_32532)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32273_32534 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32274_32535 = null;
var count__32275_32536 = (0);
var i__32276_32537 = (0);
while(true){
if((i__32276_32537 < count__32275_32536)){
var vec__32289_32541 = chunk__32274_32535.cljs$core$IIndexed$_nth$arity$2(null,i__32276_32537);
var name_32543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32289_32541,(0),null);
var map__32292_32544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32289_32541,(1),null);
var map__32292_32545__$1 = cljs.core.__destructure_map(map__32292_32544);
var doc_32546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32292_32545__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32292_32545__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32543], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32547], 0));

if(cljs.core.truth_(doc_32546)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32546], 0));
} else {
}


var G__32549 = seq__32273_32534;
var G__32550 = chunk__32274_32535;
var G__32551 = count__32275_32536;
var G__32552 = (i__32276_32537 + (1));
seq__32273_32534 = G__32549;
chunk__32274_32535 = G__32550;
count__32275_32536 = G__32551;
i__32276_32537 = G__32552;
continue;
} else {
var temp__5804__auto___32558 = cljs.core.seq(seq__32273_32534);
if(temp__5804__auto___32558){
var seq__32273_32559__$1 = temp__5804__auto___32558;
if(cljs.core.chunked_seq_QMARK_(seq__32273_32559__$1)){
var c__5568__auto___32560 = cljs.core.chunk_first(seq__32273_32559__$1);
var G__32561 = cljs.core.chunk_rest(seq__32273_32559__$1);
var G__32562 = c__5568__auto___32560;
var G__32563 = cljs.core.count(c__5568__auto___32560);
var G__32564 = (0);
seq__32273_32534 = G__32561;
chunk__32274_32535 = G__32562;
count__32275_32536 = G__32563;
i__32276_32537 = G__32564;
continue;
} else {
var vec__32298_32566 = cljs.core.first(seq__32273_32559__$1);
var name_32567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32298_32566,(0),null);
var map__32301_32568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32298_32566,(1),null);
var map__32301_32569__$1 = cljs.core.__destructure_map(map__32301_32568);
var doc_32570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32301_32569__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32301_32569__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32567], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32571], 0));

if(cljs.core.truth_(doc_32570)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32570], 0));
} else {
}


var G__32576 = cljs.core.next(seq__32273_32559__$1);
var G__32577 = null;
var G__32578 = (0);
var G__32579 = (0);
seq__32273_32534 = G__32576;
chunk__32274_32535 = G__32577;
count__32275_32536 = G__32578;
i__32276_32537 = G__32579;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__32302 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32303 = null;
var count__32304 = (0);
var i__32305 = (0);
while(true){
if((i__32305 < count__32304)){
var role = chunk__32303.cljs$core$IIndexed$_nth$arity$2(null,i__32305);
var temp__5804__auto___32581__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___32581__$1)){
var spec_32582 = temp__5804__auto___32581__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32582)], 0));
} else {
}


var G__32583 = seq__32302;
var G__32584 = chunk__32303;
var G__32585 = count__32304;
var G__32586 = (i__32305 + (1));
seq__32302 = G__32583;
chunk__32303 = G__32584;
count__32304 = G__32585;
i__32305 = G__32586;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__32302);
if(temp__5804__auto____$1){
var seq__32302__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32302__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32302__$1);
var G__32587 = cljs.core.chunk_rest(seq__32302__$1);
var G__32588 = c__5568__auto__;
var G__32589 = cljs.core.count(c__5568__auto__);
var G__32590 = (0);
seq__32302 = G__32587;
chunk__32303 = G__32588;
count__32304 = G__32589;
i__32305 = G__32590;
continue;
} else {
var role = cljs.core.first(seq__32302__$1);
var temp__5804__auto___32595__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___32595__$2)){
var spec_32596 = temp__5804__auto___32595__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32596)], 0));
} else {
}


var G__32597 = cljs.core.next(seq__32302__$1);
var G__32598 = null;
var G__32599 = (0);
var G__32600 = (0);
seq__32302 = G__32597;
chunk__32303 = G__32598;
count__32304 = G__32599;
i__32305 = G__32600;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__32607 = cljs.core.ex_cause(t);
via = G__32606;
t = G__32607;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__32345 = datafied_throwable;
var map__32345__$1 = cljs.core.__destructure_map(map__32345);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32345__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32345__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32345__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32346 = cljs.core.last(via);
var map__32346__$1 = cljs.core.__destructure_map(map__32346);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32346__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32346__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32346__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32347 = data;
var map__32347__$1 = cljs.core.__destructure_map(map__32347);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32347__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32347__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32347__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32348 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__32348__$1 = cljs.core.__destructure_map(map__32348);
var top_data = map__32348__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__32357 = phase;
var G__32357__$1 = (((G__32357 instanceof cljs.core.Keyword))?G__32357.fqn:null);
switch (G__32357__$1) {
case "read-source":
var map__32367 = data;
var map__32367__$1 = cljs.core.__destructure_map(map__32367);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32367__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32367__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32368 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__32368__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32368,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32368);
var G__32368__$2 = (cljs.core.truth_((function (){var fexpr__32384 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32384.cljs$core$IFn$_invoke$arity$1 ? fexpr__32384.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32384.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32368__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32368__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32368__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32394 = top_data;
var G__32394__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32394,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32394);
var G__32394__$2 = (cljs.core.truth_((function (){var fexpr__32395 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32395.cljs$core$IFn$_invoke$arity$1 ? fexpr__32395.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32395.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32394__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32394__$1);
var G__32394__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32394__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32394__$2);
var G__32394__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32394__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32394__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32394__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32394__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32403 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32403,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32403,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32403,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32403,(3),null);
var G__32418 = top_data;
var G__32418__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32418,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32418);
var G__32418__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32418__$1);
var G__32418__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32418__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32418__$2);
var G__32418__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32418__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32418__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32418__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32418__$4;
}

break;
case "execution":
var vec__32435 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32435,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32435,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32435,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32435,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32340_SHARP_){
var or__5045__auto__ = (p1__32340_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__32441 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32441.cljs$core$IFn$_invoke$arity$1 ? fexpr__32441.cljs$core$IFn$_invoke$arity$1(p1__32340_SHARP_) : fexpr__32441.call(null,p1__32340_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__32443 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32443__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32443,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32443);
var G__32443__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32443__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32443__$1);
var G__32443__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32443__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32443__$2);
var G__32443__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32443__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32443__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32443__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32443__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32357__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32448){
var map__32449 = p__32448;
var map__32449__$1 = cljs.core.__destructure_map(map__32449);
var triage_data = map__32449__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32449__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32449__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32449__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32449__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32449__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32449__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32449__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32449__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32453 = phase;
var G__32453__$1 = (((G__32453 instanceof cljs.core.Keyword))?G__32453.fqn:null);
switch (G__32453__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__32454 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__32455 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32456 = loc;
var G__32457 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32458_32627 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32459_32628 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32460_32629 = true;
var _STAR_print_fn_STAR__temp_val__32461_32630 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32460_32629);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32461_32630);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32445_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32445_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32459_32628);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32458_32627);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32454,G__32455,G__32456,G__32457) : format.call(null,G__32454,G__32455,G__32456,G__32457));

break;
case "macroexpansion":
var G__32463 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__32464 = cause_type;
var G__32465 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32466 = loc;
var G__32467 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32463,G__32464,G__32465,G__32466,G__32467) : format.call(null,G__32463,G__32464,G__32465,G__32466,G__32467));

break;
case "compile-syntax-check":
var G__32469 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__32470 = cause_type;
var G__32471 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32472 = loc;
var G__32473 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32469,G__32470,G__32471,G__32472,G__32473) : format.call(null,G__32469,G__32470,G__32471,G__32472,G__32473));

break;
case "compilation":
var G__32474 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__32475 = cause_type;
var G__32476 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32477 = loc;
var G__32478 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32474,G__32475,G__32476,G__32477,G__32478) : format.call(null,G__32474,G__32475,G__32476,G__32477,G__32478));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__32480 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__32481 = symbol;
var G__32482 = loc;
var G__32483 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32485_32635 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32486_32636 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32487_32637 = true;
var _STAR_print_fn_STAR__temp_val__32488_32638 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32487_32637);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32488_32638);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32446_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32446_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32486_32636);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32485_32635);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32480,G__32481,G__32482,G__32483) : format.call(null,G__32480,G__32481,G__32482,G__32483));
} else {
var G__32494 = "Execution error%s at %s(%s).\n%s\n";
var G__32495 = cause_type;
var G__32496 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32497 = loc;
var G__32498 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32494,G__32495,G__32496,G__32497,G__32498) : format.call(null,G__32494,G__32495,G__32496,G__32497,G__32498));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32453__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
