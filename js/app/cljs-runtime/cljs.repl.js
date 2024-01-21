goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43836){
var map__43837 = p__43836;
var map__43837__$1 = cljs.core.__destructure_map(map__43837);
var m = map__43837__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43837__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__43841_44058 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43842_44059 = null;
var count__43843_44060 = (0);
var i__43844_44061 = (0);
while(true){
if((i__43844_44061 < count__43843_44060)){
var f_44062 = chunk__43842_44059.cljs$core$IIndexed$_nth$arity$2(null,i__43844_44061);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44062], 0));


var G__44063 = seq__43841_44058;
var G__44064 = chunk__43842_44059;
var G__44065 = count__43843_44060;
var G__44066 = (i__43844_44061 + (1));
seq__43841_44058 = G__44063;
chunk__43842_44059 = G__44064;
count__43843_44060 = G__44065;
i__43844_44061 = G__44066;
continue;
} else {
var temp__5804__auto___44067 = cljs.core.seq(seq__43841_44058);
if(temp__5804__auto___44067){
var seq__43841_44069__$1 = temp__5804__auto___44067;
if(cljs.core.chunked_seq_QMARK_(seq__43841_44069__$1)){
var c__5568__auto___44070 = cljs.core.chunk_first(seq__43841_44069__$1);
var G__44071 = cljs.core.chunk_rest(seq__43841_44069__$1);
var G__44072 = c__5568__auto___44070;
var G__44073 = cljs.core.count(c__5568__auto___44070);
var G__44074 = (0);
seq__43841_44058 = G__44071;
chunk__43842_44059 = G__44072;
count__43843_44060 = G__44073;
i__43844_44061 = G__44074;
continue;
} else {
var f_44075 = cljs.core.first(seq__43841_44069__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44075], 0));


var G__44077 = cljs.core.next(seq__43841_44069__$1);
var G__44078 = null;
var G__44079 = (0);
var G__44080 = (0);
seq__43841_44058 = G__44077;
chunk__43842_44059 = G__44078;
count__43843_44060 = G__44079;
i__43844_44061 = G__44080;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44081 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44081], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44081)))?cljs.core.second(arglists_44081):arglists_44081)], 0));
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
var seq__43853_44083 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43854_44084 = null;
var count__43855_44085 = (0);
var i__43856_44086 = (0);
while(true){
if((i__43856_44086 < count__43855_44085)){
var vec__43871_44088 = chunk__43854_44084.cljs$core$IIndexed$_nth$arity$2(null,i__43856_44086);
var name_44089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43871_44088,(0),null);
var map__43874_44090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43871_44088,(1),null);
var map__43874_44091__$1 = cljs.core.__destructure_map(map__43874_44090);
var doc_44092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43874_44091__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43874_44091__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44089], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44093], 0));

if(cljs.core.truth_(doc_44092)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44092], 0));
} else {
}


var G__44094 = seq__43853_44083;
var G__44095 = chunk__43854_44084;
var G__44096 = count__43855_44085;
var G__44097 = (i__43856_44086 + (1));
seq__43853_44083 = G__44094;
chunk__43854_44084 = G__44095;
count__43855_44085 = G__44096;
i__43856_44086 = G__44097;
continue;
} else {
var temp__5804__auto___44098 = cljs.core.seq(seq__43853_44083);
if(temp__5804__auto___44098){
var seq__43853_44099__$1 = temp__5804__auto___44098;
if(cljs.core.chunked_seq_QMARK_(seq__43853_44099__$1)){
var c__5568__auto___44101 = cljs.core.chunk_first(seq__43853_44099__$1);
var G__44102 = cljs.core.chunk_rest(seq__43853_44099__$1);
var G__44103 = c__5568__auto___44101;
var G__44104 = cljs.core.count(c__5568__auto___44101);
var G__44105 = (0);
seq__43853_44083 = G__44102;
chunk__43854_44084 = G__44103;
count__43855_44085 = G__44104;
i__43856_44086 = G__44105;
continue;
} else {
var vec__43878_44106 = cljs.core.first(seq__43853_44099__$1);
var name_44107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43878_44106,(0),null);
var map__43881_44108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43878_44106,(1),null);
var map__43881_44109__$1 = cljs.core.__destructure_map(map__43881_44108);
var doc_44110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43881_44109__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43881_44109__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44107], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44111], 0));

if(cljs.core.truth_(doc_44110)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44110], 0));
} else {
}


var G__44113 = cljs.core.next(seq__43853_44099__$1);
var G__44114 = null;
var G__44115 = (0);
var G__44116 = (0);
seq__43853_44083 = G__44113;
chunk__43854_44084 = G__44114;
count__43855_44085 = G__44115;
i__43856_44086 = G__44116;
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

var seq__43887 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43888 = null;
var count__43889 = (0);
var i__43890 = (0);
while(true){
if((i__43890 < count__43889)){
var role = chunk__43888.cljs$core$IIndexed$_nth$arity$2(null,i__43890);
var temp__5804__auto___44120__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___44120__$1)){
var spec_44121 = temp__5804__auto___44120__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44121)], 0));
} else {
}


var G__44123 = seq__43887;
var G__44124 = chunk__43888;
var G__44125 = count__43889;
var G__44126 = (i__43890 + (1));
seq__43887 = G__44123;
chunk__43888 = G__44124;
count__43889 = G__44125;
i__43890 = G__44126;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__43887);
if(temp__5804__auto____$1){
var seq__43887__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43887__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43887__$1);
var G__44128 = cljs.core.chunk_rest(seq__43887__$1);
var G__44129 = c__5568__auto__;
var G__44130 = cljs.core.count(c__5568__auto__);
var G__44131 = (0);
seq__43887 = G__44128;
chunk__43888 = G__44129;
count__43889 = G__44130;
i__43890 = G__44131;
continue;
} else {
var role = cljs.core.first(seq__43887__$1);
var temp__5804__auto___44132__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___44132__$2)){
var spec_44133 = temp__5804__auto___44132__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44133)], 0));
} else {
}


var G__44135 = cljs.core.next(seq__43887__$1);
var G__44136 = null;
var G__44137 = (0);
var G__44138 = (0);
seq__43887 = G__44135;
chunk__43888 = G__44136;
count__43889 = G__44137;
i__43890 = G__44138;
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
var G__44144 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44145 = cljs.core.ex_cause(t);
via = G__44144;
t = G__44145;
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
var map__43923 = datafied_throwable;
var map__43923__$1 = cljs.core.__destructure_map(map__43923);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43923__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43923__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43923__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43924 = cljs.core.last(via);
var map__43924__$1 = cljs.core.__destructure_map(map__43924);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43924__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43924__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43924__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43925 = data;
var map__43925__$1 = cljs.core.__destructure_map(map__43925);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43926 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43926__$1 = cljs.core.__destructure_map(map__43926);
var top_data = map__43926__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43926__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43931 = phase;
var G__43931__$1 = (((G__43931 instanceof cljs.core.Keyword))?G__43931.fqn:null);
switch (G__43931__$1) {
case "read-source":
var map__43933 = data;
var map__43933__$1 = cljs.core.__destructure_map(map__43933);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43933__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43933__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43934 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43934__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43934,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43934);
var G__43934__$2 = (cljs.core.truth_((function (){var fexpr__43935 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43935.cljs$core$IFn$_invoke$arity$1 ? fexpr__43935.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43935.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43934__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43934__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43934__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43936 = top_data;
var G__43936__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43936,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43936);
var G__43936__$2 = (cljs.core.truth_((function (){var fexpr__43938 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43938.cljs$core$IFn$_invoke$arity$1 ? fexpr__43938.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43938.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43936__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43936__$1);
var G__43936__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43936__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43936__$2);
var G__43936__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43936__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43936__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43936__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43936__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43941 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43941,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43941,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43941,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43941,(3),null);
var G__43944 = top_data;
var G__43944__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43944,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43944);
var G__43944__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43944__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43944__$1);
var G__43944__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43944__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43944__$2);
var G__43944__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43944__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43944__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43944__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43944__$4;
}

break;
case "execution":
var vec__43948 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43948,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43948,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43948,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43948,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43922_SHARP_){
var or__5045__auto__ = (p1__43922_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__43953 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43953.cljs$core$IFn$_invoke$arity$1 ? fexpr__43953.cljs$core$IFn$_invoke$arity$1(p1__43922_SHARP_) : fexpr__43953.call(null,p1__43922_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__43955 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43955__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43955,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43955);
var G__43955__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43955__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43955__$1);
var G__43955__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43955__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43955__$2);
var G__43955__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43955__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43955__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43955__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43955__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43931__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43964){
var map__43965 = p__43964;
var map__43965__$1 = cljs.core.__destructure_map(map__43965);
var triage_data = map__43965__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43965__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43965__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43965__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43965__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43965__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43965__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43965__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43965__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__43996 = phase;
var G__43996__$1 = (((G__43996 instanceof cljs.core.Keyword))?G__43996.fqn:null);
switch (G__43996__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43998 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43999 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44000 = loc;
var G__44001 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44003_44198 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44004_44199 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44005_44200 = true;
var _STAR_print_fn_STAR__temp_val__44006_44201 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44005_44200);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44006_44201);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43956_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43956_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44004_44199);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44003_44198);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43998,G__43999,G__44000,G__44001) : format.call(null,G__43998,G__43999,G__44000,G__44001));

break;
case "macroexpansion":
var G__44008 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44009 = cause_type;
var G__44010 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44011 = loc;
var G__44012 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44008,G__44009,G__44010,G__44011,G__44012) : format.call(null,G__44008,G__44009,G__44010,G__44011,G__44012));

break;
case "compile-syntax-check":
var G__44014 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44015 = cause_type;
var G__44016 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44017 = loc;
var G__44018 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44014,G__44015,G__44016,G__44017,G__44018) : format.call(null,G__44014,G__44015,G__44016,G__44017,G__44018));

break;
case "compilation":
var G__44022 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44023 = cause_type;
var G__44024 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44025 = loc;
var G__44026 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44022,G__44023,G__44024,G__44025,G__44026) : format.call(null,G__44022,G__44023,G__44024,G__44025,G__44026));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44030 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44031 = symbol;
var G__44032 = loc;
var G__44033 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44036_44215 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44037_44216 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44038_44217 = true;
var _STAR_print_fn_STAR__temp_val__44039_44218 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44038_44217);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44039_44218);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43957_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43957_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44037_44216);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44036_44215);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44030,G__44031,G__44032,G__44033) : format.call(null,G__44030,G__44031,G__44032,G__44033));
} else {
var G__44045 = "Execution error%s at %s(%s).\n%s\n";
var G__44046 = cause_type;
var G__44047 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44048 = loc;
var G__44049 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44045,G__44046,G__44047,G__44048,G__44049) : format.call(null,G__44045,G__44046,G__44047,G__44048,G__44049));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43996__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
