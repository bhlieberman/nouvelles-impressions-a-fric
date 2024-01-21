import "./cljs_env.js";
import "./cljs.core.js";
import "./rewrite_clj.custom_zipper.core.js";
import "./rewrite_clj.node.forms.js";
import "./rewrite_clj.node.protocols.js";
import "./rewrite_clj.parser.js";
import "./rewrite_clj.zip.options.js";
import "./rewrite_clj.zip.whitespace.js";
goog.provide('rewrite_clj.zip.base');
/**
 * Create and return zipper from a rewrite-clj `node` (likely parsed by [[rewrite-clj.parser]]).
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.of_node_STAR_ = (function rewrite_clj$zip$base$of_node_STAR_(var_args){
var G__27697 = arguments.length;
switch (G__27697) {
case 1:
return rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.options.set_opts((cljs.core.truth_(new cljs.core.Keyword(null,"track-position?","track-position?",1860535489).cljs$core$IFn$_invoke$arity$1(opts))?rewrite_clj.custom_zipper.core.custom_zipper(node):rewrite_clj.custom_zipper.core.zipper(node)),opts);
}));

(rewrite_clj.zip.base.of_node_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Create and return zipper from a rewrite-clj `node` (likely parsed by [[rewrite-clj.parser]]),
 *   and move to the first non-whitespace/non-comment child. If node is not forms node, is wrapped in forms node
 *   for a consistent root.
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.of_node = (function rewrite_clj$zip$base$of_node(var_args){
var G__27699 = arguments.length;
switch (G__27699) {
case 1:
return rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
var node__$1 = node;
var opts__$1 = opts;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.tag(node__$1),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2(node__$1,opts__$1);
var or__5045__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_clj.custom_zipper.core.down(top));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return top;
}
} else {
var G__27741 = rewrite_clj.node.forms.forms_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node__$1], null));
var G__27742 = opts__$1;
node__$1 = G__27741;
opts__$1 = G__27742;
continue;
}
break;
}
}));

(rewrite_clj.zip.base.of_node.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED. Renamed to [[of-node*]].
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(var_args){
var G__27702 = arguments.length;
switch (G__27702) {
case 1:
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2(node,opts);
}));

(rewrite_clj.zip.base.edn_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED. Renamed to [[of-node]].
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(var_args){
var G__27704 = arguments.length;
switch (G__27704) {
case 1:
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$2(node,opts);
}));

(rewrite_clj.zip.base.edn.cljs$lang$maxFixedArity = 2);

/**
 * Return tag of current node in `zloc`.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__27706 = zloc;
var G__27706__$1 = (((G__27706 == null))?null:rewrite_clj.custom_zipper.core.node(G__27706));
if((G__27706__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.tag(G__27706__$1);
}
});
/**
 * Return true if current node's element type in `zloc` can be [[sexpr]]-ed.
 * 
 * See [related docs in user guide](/doc/01-user-guide.adoc#not-all-clojure-is-sexpr-able)
 */
rewrite_clj.zip.base.sexpr_able_QMARK_ = (function rewrite_clj$zip$base$sexpr_able_QMARK_(zloc){
var G__27707 = zloc;
var G__27707__$1 = (((G__27707 == null))?null:rewrite_clj.custom_zipper.core.node(G__27707));
if((G__27707__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.sexpr_able_QMARK_(G__27707__$1);
}
});
/**
 * Return s-expression (the Clojure form) of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__27708 = zloc;
var G__27708__$1 = (((G__27708 == null))?null:rewrite_clj.custom_zipper.core.node(G__27708));
if((G__27708__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.sexpr.cljs$core$IFn$_invoke$arity$2(G__27708__$1,rewrite_clj.zip.options.get_opts(zloc));
}
});
/**
 * Return s-expression (the Clojure forms) of children of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__27710 = zloc;
var G__27710__$1 = (((G__27710 == null))?null:rewrite_clj.custom_zipper.core.node(G__27710));
if((G__27710__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.child_sexprs.cljs$core$IFn$_invoke$arity$2(G__27710__$1,rewrite_clj.zip.options.get_opts(zloc));
}
});
/**
 * Return length of printable [[string]] of current node in `zloc`.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__5045__auto__ = (function (){var G__27711 = zloc;
var G__27711__$1 = (((G__27711 == null))?null:rewrite_clj.custom_zipper.core.node(G__27711));
if((G__27711__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.length(G__27711__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
/**
 * DEPRECATED. Return a tag/s-expression pair for inner nodes, or
 * the s-expression itself for leaves.
 */
rewrite_clj.zip.base.value = (function rewrite_clj$zip$base$value(zloc){
var G__27712 = zloc;
var G__27712__$1 = (((G__27712 == null))?null:rewrite_clj.custom_zipper.core.node(G__27712));
if((G__27712__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.value(G__27712__$1);
}
});
/**
 * Create and return zipper from all forms in Clojure/ClojureScript/END string `s`, and do no automatic move.
 * 
 *   See [[of-string]] for same but with automatic move to first interesting node.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.of_string_STAR_ = (function rewrite_clj$zip$base$of_string_STAR_(var_args){
var G__27714 = arguments.length;
switch (G__27714) {
case 1:
return rewrite_clj.zip.base.of_string_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.of_string_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.of_string_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_clj.zip.base.of_string_STAR_.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.of_string_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var G__27716 = s;
var G__27716__$1 = (((G__27716 == null))?null:rewrite_clj.parser.parse_string_all(G__27716));
if((G__27716__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2(G__27716__$1,opts);
}
}));

(rewrite_clj.zip.base.of_string_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Create and return zipper from all forms in Clojure/ClojureScript/EDN string `s`, and move to the first non-whitespace/non-comment child.
 * 
 *   See [[of-string*]] for same but with no automatic move.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(var_args){
var G__27720 = arguments.length;
switch (G__27720) {
case 1:
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var G__27721 = s;
var G__27721__$1 = (((G__27721 == null))?null:rewrite_clj.parser.parse_string_all(G__27721));
if((G__27721__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.of_node.cljs$core$IFn$_invoke$arity$2(G__27721__$1,opts);
}
}));

(rewrite_clj.zip.base.of_string.cljs$lang$maxFixedArity = 2);

/**
 * Return string representing the current node in `zloc`.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__27723 = zloc;
var G__27723__$1 = (((G__27723 == null))?null:rewrite_clj.custom_zipper.core.node(G__27723));
if((G__27723__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.string(G__27723__$1);
}
});
/**
 * DEPRECATED. Renamed to [[string]].
 */
rewrite_clj.zip.base.__GT_string = (function rewrite_clj$zip$base$__GT_string(zloc){
return rewrite_clj.zip.base.string(zloc);
});
/**
 * Return string representing the zipped-up `zloc` zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__27724 = zloc;
var G__27724__$1 = (((G__27724 == null))?null:rewrite_clj.custom_zipper.core.root(G__27724));
if((G__27724__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.string(G__27724__$1);
}
});
/**
 * DEPRECATED. Renamed to [[root-string]].
 */
rewrite_clj.zip.base.__GT_root_string = (function rewrite_clj$zip$base$__GT_root_string(zloc){
return rewrite_clj.zip.base.root_string(zloc);
});
rewrite_clj.zip.base.print_BANG_ = (function rewrite_clj$zip$base$print_BANG_(s,_writer){
return cljs.core.string_print(s);
});
/**
 * Print current node in `zloc`.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.base.print = (function rewrite_clj$zip$base$print(var_args){
var G__27727 = arguments.length;
switch (G__27727) {
case 2:
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
var G__27730 = zloc;
var G__27730__$1 = (((G__27730 == null))?null:rewrite_clj.zip.base.string(G__27730));
if((G__27730__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.print_BANG_(G__27730__$1,writer);
}
}));

(rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.base.print.cljs$lang$maxFixedArity = 2);

/**
 * Zip up and print `zloc` from root node.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.base.print_root = (function rewrite_clj$zip$base$print_root(var_args){
var G__27733 = arguments.length;
switch (G__27733) {
case 2:
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
var G__27734 = zloc;
var G__27734__$1 = (((G__27734 == null))?null:rewrite_clj.zip.base.root_string(G__27734));
if((G__27734__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.print_BANG_(G__27734__$1,writer);
}
}));

(rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.base.print_root.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.zip.base.js.map
