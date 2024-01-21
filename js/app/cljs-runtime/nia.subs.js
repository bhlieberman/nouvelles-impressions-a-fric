import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.string.string.js";
import "./re_frame.core.js";
goog.provide('nia.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("routing","current-route","routing/current-route",283549642),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("app.routing","current-route","app.routing/current-route",-1514714915)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("routing","route-name","routing/route-name",2013475453),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","current-route","routing/current-route",283549642)], null),new cljs.core.Keyword(null,"->","->",514830339),(function (p1__28812_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__28812_SHARP_));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("routing","location","routing/location",-623873570),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("app.routing","location","app.routing/location",2122222289)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-loc","get-loc",-1857156772),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routing","location","routing/location",-623873570)], null),new cljs.core.Keyword(null,"->","->",514830339),(function (p1__28813_SHARP_){
return new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(p1__28813_SHARP_);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("poem","display-current-footnote","poem/display-current-footnote",491985497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"current-footnote","current-footnote",203646618)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("poem","parens-depth","poem/parens-depth",-1934963187),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("poem","parens-depth","poem/parens-depth",-1934963187)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("poem","parens-loc","poem/parens-loc",-19470537),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__28814){
var vec__28815 = p__28814;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("poem","parens-loc","poem/parens-loc",-19470537),depth], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("image","url","image/url",446041905),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("image","url","image/url",446041905)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"images","images",1757475080),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("images","urls","images/urls",658886219)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"builder","builder",-2055262005),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("lunr","builder","lunr/builder",-2064915488)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("search","all-matches","search/all-matches",-1395849957),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("lunr","all-matches","lunr/all-matches",1864723070)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("search","show-shortened","search/show-shortened",1604861032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","all-matches","search/all-matches",-1395849957)], null),(function (matches){
var iter__5523__auto__ = (function nia$subs$iter__28818(s__28819){
return (new cljs.core.LazySeq(null,(function (){
var s__28819__$1 = s__28819;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28819__$1);
if(temp__5804__auto__){
var s__28819__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28819__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28819__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28821 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28820 = (0);
while(true){
if((i__28820 < size__5522__auto__)){
var map__28822 = cljs.core._nth(c__5521__auto__,i__28820);
var map__28822__$1 = cljs.core.__destructure_map(map__28822);
var match = map__28822__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28822__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28822__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28822__$1,new cljs.core.Keyword(null,"len","len",1423657078));
var _ = console.log(match);
cljs.core.chunk_append(b__28821,goog.string.truncate(text,((pos + len) + (5)),false));

var G__28824 = (i__28820 + (1));
i__28820 = G__28824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28821),nia$subs$iter__28818(cljs.core.chunk_rest(s__28819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28821),null);
}
} else {
var map__28823 = cljs.core.first(s__28819__$2);
var map__28823__$1 = cljs.core.__destructure_map(map__28823);
var match = map__28823__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28823__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28823__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28823__$1,new cljs.core.Keyword(null,"len","len",1423657078));
var _ = console.log(match);
return cljs.core.cons(goog.string.truncate(text,((pos + len) + (5)),false),nia$subs$iter__28818(cljs.core.rest(s__28819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(matches);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("search","initial-results","search/initial-results",-926556246),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("lunr","current-match","lunr/current-match",-554456210)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("search","results-showing?","search/results-showing?",-2136910609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("search","results-showing?","search/results-showing?",-2136910609)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-collapsed?","show-collapsed?",-1742530825),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"show-collapsed?","show-collapsed?",-1742530825)], 0));

//# sourceMappingURL=nia.subs.js.map
