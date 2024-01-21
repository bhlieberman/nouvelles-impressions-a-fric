import "./cljs_env.js";
import "./cljs.core.js";
import "./reagent.core.js";
import "./module$node_modules$$mui$material$node$styles$index.js";
import "./reagent_mui.util.js";
goog.provide('reagent_mui.styles');
var module$node_modules$$mui$material$node$styles$index=shadow.js.require("module$node_modules$$mui$material$node$styles$index", {});
reagent_mui.styles.theme_provider_STAR_ = reagent.core.adapt_react_class(module$node_modules$$mui$material$node$styles$index.ThemeProvider);
reagent_mui.styles.experimental_css_vars_provider_STAR_ = reagent.core.adapt_react_class(module$node_modules$$mui$material$node$styles$index.Experimental_CssVarsProvider);
/**
 * The styled-components pattern. Takes a component and a styles-generating function or a styles object.
 * Creates and returns a new component and gives the input component a `:class-name` prop for applying styles.
 * Note: input component has to take all its props (including children) in a single map.
 */
reagent_mui.styles.styled = (function reagent_mui$styles$styled(var_args){
var G__29915 = arguments.length;
switch (G__29915) {
case 2:
return reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2 = (function (component,styles){
return reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$3(component,cljs.core.PersistentArrayMap.EMPTY,styles);
}));

(reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$3 = (function (component,opts,styles){
var react_component = ((typeof component === 'string')?component:reagent_mui.util.reactify_component(component));
var styled_component = module$node_modules$$mui$material$node$styles$index.styled(react_component,cljs.core.clj__GT_js(opts));
return reagent.core.adapt_react_class((function (){var G__29927 = reagent_mui.util.wrap_styles(styles);
return (styled_component.cljs$core$IFn$_invoke$arity$1 ? styled_component.cljs$core$IFn$_invoke$arity$1(G__29927) : styled_component.call(null,G__29927));
})());
}));

(reagent_mui.styles.styled.cljs$lang$maxFixedArity = 3);

/**
 * Takes a theme object and enhances it with responsive font options
 * Options may optionally be passed in to override the defaults provided by Material-UI
 * See: https://mui.com/material-ui/customization/theming/#responsivefontsizes-theme-options-theme
 */
reagent_mui.styles.responsive_font_sizes = (function reagent_mui$styles$responsive_font_sizes(var_args){
var G__29932 = arguments.length;
switch (G__29932) {
case 1:
return reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$1 = (function (theme){
return reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2(theme,cljs.core.PersistentArrayMap.EMPTY);
}));

(reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2 = (function (theme,options){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_(module$node_modules$$mui$material$node$styles$index.responsiveFontSizes(reagent_mui.util.clj__GT_js_SINGLEQUOTE_(theme),reagent_mui.util.clj__GT_js_SINGLEQUOTE_(options)));
}));

(reagent_mui.styles.responsive_font_sizes.cljs$lang$maxFixedArity = 2);

/**
 * React hook that returns the theme object.
 * Note: React hooks can't be used in regular Reagent components: https://cljdoc.org/d/reagent/reagent/1.0.0-alpha2/doc/tutorials/react-features#hooks
 */
reagent_mui.styles.use_theme = (function reagent_mui$styles$use_theme(){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_(module$node_modules$$mui$material$node$styles$index.useTheme());
});
/**
 * Component that takes a theme object and makes it available in child components.
 * It should preferably be used at the root of your component tree.
 */
reagent_mui.styles.theme_provider = (function reagent_mui$styles$theme_provider(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29951 = arguments.length;
var i__5770__auto___29952 = (0);
while(true){
if((i__5770__auto___29952 < len__5769__auto___29951)){
args__5775__auto__.push((arguments[i__5770__auto___29952]));

var G__29953 = (i__5770__auto___29952 + (1));
i__5770__auto___29952 = G__29953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return reagent_mui.styles.theme_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(reagent_mui.styles.theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (theme,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.styles.theme_provider_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),reagent_mui.util.clj__GT_js_SINGLEQUOTE_(theme)], null)], null),children);
}));

(reagent_mui.styles.theme_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_mui.styles.theme_provider.cljs$lang$applyTo = (function (seq29945){
var G__29946 = cljs.core.first(seq29945);
var seq29945__$1 = cljs.core.next(seq29945);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29946,seq29945__$1);
}));

/**
 * Experimental provider for the theme to inject styles into Material UI components.
 * In addition to providing the theme in the inner React context,
 * this new provider also generates CSS variables out of all tokens in the theme
 * that are not functions, and makes them available in the context as well.
 * Currently only supported by the Button component.
 * See: https://mui.com/material-ui/experimental-api/css-variables/
 */
reagent_mui.styles.experimental_css_vars_provider = (function reagent_mui$styles$experimental_css_vars_provider(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29954 = arguments.length;
var i__5770__auto___29955 = (0);
while(true){
if((i__5770__auto___29955 < len__5769__auto___29954)){
args__5775__auto__.push((arguments[i__5770__auto___29955]));

var G__29956 = (i__5770__auto___29955 + (1));
i__5770__auto___29955 = G__29956;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return reagent_mui.styles.experimental_css_vars_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(reagent_mui.styles.experimental_css_vars_provider.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.styles.experimental_css_vars_provider_STAR_,props], null),children);
}));

(reagent_mui.styles.experimental_css_vars_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_mui.styles.experimental_css_vars_provider.cljs$lang$applyTo = (function (seq29947){
var G__29948 = cljs.core.first(seq29947);
var seq29947__$1 = cljs.core.next(seq29947);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29948,seq29947__$1);
}));

/**
 * Hook that provides the current mode and setMode function for experimental-css-vars-provider.
 *   See: https://mui.com/material-ui/experimental-api/css-variables/
 */
reagent_mui.styles.use_color_scheme = (function reagent_mui$styles$use_color_scheme(){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_(module$node_modules$$mui$material$node$styles$index.useColorScheme());
});
/**
 * Takes an incomplete theme object and adds the missing parts
 */
reagent_mui.styles.create_theme = (function reagent_mui$styles$create_theme(options){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_(module$node_modules$$mui$material$node$styles$index.createTheme(reagent_mui.util.clj__GT_js_SINGLEQUOTE_(options)));
});

//# sourceMappingURL=reagent_mui.styles.js.map
