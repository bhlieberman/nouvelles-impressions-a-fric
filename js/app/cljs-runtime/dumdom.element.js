goog.provide('dumdom.element');
dumdom.element._STAR_handle_event_STAR_ = null;
dumdom.element.event_handler = (function dumdom$element$event_handler(h){
if(cljs.core.fn_QMARK_(h)){
return h;
} else {
var temp__5802__auto__ = dumdom.element._STAR_handle_event_STAR_;
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (function (e){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(e,h) : f.call(null,e,h));
});
} else {
if(typeof h === 'string'){
return h;
} else {
return null;
}
}
}
});
dumdom.element.event_entry = (function dumdom$element$event_entry(attrs,k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(cljs.core.name(k),/^on/,"").toLowerCase(),dumdom.element.event_handler((attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(k) : attrs.call(null,k)))], null);
});
dumdom.element.camelCase = (function dumdom$element$camelCase(s){
var vec__29739 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/-/);
var seq__29740 = cljs.core.seq(vec__29739);
var first__29741 = cljs.core.first(seq__29740);
var seq__29740__$1 = cljs.core.next(seq__29740);
var f = first__29741;
var rest = seq__29740__$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,rest))].join('');
});
dumdom.element.camel_key = (function dumdom$element$camel_key(k){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dumdom.element.camelCase(cljs.core.name(k)));
});
dumdom.element.skip_pixelize_attrs = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,dumdom.element.camel_key(k)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),new cljs.core.Keyword(null,"column-count","column-count",1235131236),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"orphans","orphans",1913357231),new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),new cljs.core.Keyword(null,"widows","widows",1989591025),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null)], 0)));
dumdom.element.normalize_styles = (function dumdom$element$normalize_styles(styles){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__29745){
var vec__29746 = p__29745;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29746,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29746,(1),null);
if(typeof v === 'number'){
if(cljs.core.truth_((dumdom.element.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1 ? dumdom.element.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1(attr) : dumdom.element.skip_pixelize_attrs.call(null,attr)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,attr,cljs.core.str);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,attr,cljs.core.str,"px");
}
} else {
return m;
}
}),styles,styles);
});
dumdom.element.attr_mappings = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pointerEvents","pointerEvents",-1429289472),new cljs.core.Keyword(null,"fontVariant","fontVariant",-726343072),new cljs.core.Keyword(null,"dirName","dirName",1496612544),new cljs.core.Keyword(null,"overlineThickness","overlineThickness",1054951168),new cljs.core.Keyword(null,"stopOpacity","stopOpacity",-480120864),new cljs.core.Keyword(null,"alignmentBaseline","alignmentBaseline",391161089),new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263),new cljs.core.Keyword(null,"httpEquiv","httpEquiv",789868321),new cljs.core.Keyword(null,"vectorEffect","vectorEffect",-2006517919),new cljs.core.Keyword(null,"xmlSpace","xmlSpace",-52614622),new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),new cljs.core.Keyword(null,"xlinkActuate","xlinkActuate",1909485123),new cljs.core.Keyword(null,"vertOriginX","vertOriginX",-721682845),new cljs.core.Keyword(null,"noValidate","noValidate",1502261891),new cljs.core.Keyword(null,"unitsPerEm","unitsPerEm",1686693571),new cljs.core.Keyword(null,"wordSpacing","wordSpacing",1190332323),new cljs.core.Keyword(null,"lightingColor","lightingColor",232670308),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"dropZone","dropZone",-660515868),new cljs.core.Keyword(null,"baselineShift","baselineShift",-1675988987),new cljs.core.Keyword(null,"xlinkShow","xlinkShow",1817099301),new cljs.core.Keyword(null,"underlineThickness","underlineThickness",-566140827),new cljs.core.Keyword(null,"mountedStyle","mountedStyle",-1211069883),new cljs.core.Keyword(null,"fillRule","fillRule",-1827524923),new cljs.core.Keyword(null,"vMathematical","vMathematical",-770251931),new cljs.core.Keyword(null,"glyphName","glyphName",602150918),new cljs.core.Keyword(null,"itemProp","itemProp",-772543418),new cljs.core.Keyword(null,"capHeight","capHeight",-1748931994),new cljs.core.Keyword(null,"accentHeight","accentHeight",-2141415802),new cljs.core.Keyword(null,"xlinkRole","xlinkRole",-1641848122),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),new cljs.core.Keyword(null,"preLoad","preLoad",-892114041),new cljs.core.Keyword(null,"strikethroughPosition","strikethroughPosition",759001768),new cljs.core.Keyword(null,"vHanging","vHanging",2028697384),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"panose1","panose1",1116592233),new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),new cljs.core.Keyword(null,"fontSizeAdjust","fontSizeAdjust",897836777),new cljs.core.Keyword(null,"radioGroup","radioGroup",759101257),new cljs.core.Keyword(null,"overlinePosition","overlinePosition",1360684937),new cljs.core.Keyword(null,"markerStart","markerStart",2012500042),new cljs.core.Keyword(null,"srcLang","srcLang",-1345696502),new cljs.core.Keyword(null,"renderingIntent","renderingIntent",1988940074),new cljs.core.Keyword(null,"paintOrder","paintOrder",541756202),new cljs.core.Keyword(null,"vIdeographic","vIdeographic",969873771),new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.Keyword(null,"xHeight","xHeight",1051932171),new cljs.core.Keyword(null,"imageRendering","imageRendering",-1692730837),new cljs.core.Keyword(null,"keyType","keyType",592582283),new cljs.core.Keyword(null,"strokeDashoffset","strokeDashoffset",-421034101),new cljs.core.Keyword(null,"fontStretch","fontStretch",-1740143701),new cljs.core.Keyword(null,"textAnchor","textAnchor",-917689429),new cljs.core.Keyword(null,"unicodeRange","unicodeRange",1101836236),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),new cljs.core.Keyword(null,"markerMid","markerMid",1196449357),new cljs.core.Keyword(null,"minLength","minLength",-1538722770),new cljs.core.Keyword(null,"underlinePosition","underlinePosition",669958894),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"xlinkTitle","xlinkTitle",924841391),new cljs.core.Keyword(null,"colorProfile","colorProfile",-998990033),new cljs.core.Keyword(null,"xlinkType","xlinkType",619754512),new cljs.core.Keyword(null,"xmlBase","xmlBase",790885328),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),new cljs.core.Keyword(null,"dateTime","dateTime",-2108171151),new cljs.core.Keyword(null,"glyphOrientationHorizontal","glyphOrientationHorizontal",-874420079),new cljs.core.Keyword(null,"xlinkArcrole","xlinkArcrole",1335294641),new cljs.core.Keyword(null,"writingMode","writingMode",1680665553),new cljs.core.Keyword(null,"markerEnd","markerEnd",-1727198190),new cljs.core.Keyword(null,"crossOrigin","crossOrigin",558883890),new cljs.core.Keyword(null,"floodColor","floodColor",836634770),new cljs.core.Keyword(null,"colSpan","colSpan",872137394),new cljs.core.Keyword(null,"hrefLang","hrefLang",1040962546),new cljs.core.Keyword(null,"letterSpacing","letterSpacing",-1331934989),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),new cljs.core.Keyword(null,"acceptCharset","acceptCharset",560792243),new cljs.core.Keyword(null,"colorRendering","colorRendering",-1824731469),new cljs.core.Keyword(null,"strikethroughThickness","strikethroughThickness",1068914579),new cljs.core.Keyword(null,"formAction","formAction",774624276),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"strokeLinejoin","strokeLinejoin",-721488076),new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),new cljs.core.Keyword(null,"placeHolder","placeHolder",1359734165),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"accessKey","accessKey",-2031675627),new cljs.core.Keyword(null,"srcSet","srcSet",-1378415466),new cljs.core.Keyword(null,"strokeMiterlimit","strokeMiterlimit",2119685398),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),new cljs.core.Keyword(null,"horizAdvX","horizAdvX",-2121877033),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),new cljs.core.Keyword(null,"contentEditable","contentEditable",-823191689),new cljs.core.Keyword(null,"vertOriginY","vertOriginY",-1836567561),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),new cljs.core.Keyword(null,"unicodeBidi","unicodeBidi",-1804080584),new cljs.core.Keyword(null,"shapeRendering","shapeRendering",-1384014248),new cljs.core.Keyword(null,"arabicForm","arabicForm",275023832),new cljs.core.Keyword(null,"useMap","useMap",-852270120),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"encType","encType",1733182873),new cljs.core.Keyword(null,"textRendering","textRendering",1698597337),new cljs.core.Keyword(null,"stopColor","stopColor",265518586),new cljs.core.Keyword(null,"contextMenu","contextMenu",-566126918),new cljs.core.Keyword(null,"vAlphabetic","vAlphabetic",-373115078),new cljs.core.Keyword(null,"dominantBaseline","dominantBaseline",2071607258),new cljs.core.Keyword(null,"floodOpacity","floodOpacity",-1332086757),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"disappearingStyle","disappearingStyle",-1447140965),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),new cljs.core.Keyword(null,"glyphOrientationVertical","glyphOrientationVertical",812176604),new cljs.core.Keyword(null,"enableBackground","enableBackground",-1352387332),new cljs.core.Keyword(null,"srcDoc","srcDoc",1635765309),new cljs.core.Keyword(null,"textDecoration","textDecoration",418180221),new cljs.core.Keyword(null,"isMap","isMap",-249743779),new cljs.core.Keyword(null,"xmlLang","xmlLang",675834142),new cljs.core.Keyword(null,"horizOriginX","horizOriginX",727960958),new cljs.core.Keyword(null,"colorInterpolation","colorInterpolation",-540228866),new cljs.core.Keyword(null,"vertAdvY","vertAdvY",-1347098882),new cljs.core.Keyword(null,"clipRule","clipRule",-1943443682),new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742),new cljs.core.Keyword(null,"leavingStyle","leavingStyle",1768293791),new cljs.core.Keyword(null,"codeBase","codeBase",537481055),new cljs.core.Keyword(null,"colorInterpolationFilters","colorInterpolationFilters",1748426751)],[new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-variant","font-variant",1251503591),new cljs.core.Keyword(null,"dirname","dirname",1314834844),new cljs.core.Keyword(null,"overline-thickness","overline-thickness",-1687103105),new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),new cljs.core.Keyword(null,"alignment-baseline","alignment-baseline",-311060879),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"http-equiv","http-equiv",-433976463),new cljs.core.Keyword(null,"vector-effect","vector-effect",-616736349),new cljs.core.Keyword(null,"xml:space","xml:space",-1976466326),new cljs.core.Keyword(null,"rowspan","rowspan",1059521478),new cljs.core.Keyword(null,"xlink:actuate","xlink:actuate",1846130965),new cljs.core.Keyword(null,"vert-origin-x","vert-origin-x",1437952844),new cljs.core.Keyword(null,"novalidate","novalidate",-572717086),new cljs.core.Keyword(null,"units-per-em","units-per-em",1845580082),new cljs.core.Keyword(null,"word-spacing","word-spacing",-1211711602),new cljs.core.Keyword(null,"lighting-color","lighting-color",-1324714767),new cljs.core.Keyword(null,"tabindex","tabindex",338877510),new cljs.core.Keyword(null,"dropzone","dropzone",-36573991),new cljs.core.Keyword(null,"baseline-shift","baseline-shift",-2068063947),new cljs.core.Keyword(null,"xlink:show","xlink:show",1334818180),new cljs.core.Keyword(null,"underline-thickness","underline-thickness",1528492621),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),new cljs.core.Keyword(null,"v-mathematical","v-mathematical",-639453547),new cljs.core.Keyword(null,"glyph-name","glyph-name",-1290126189),new cljs.core.Keyword(null,"itemprop","itemprop",1166204046),new cljs.core.Keyword(null,"cap-height","cap-height",1034322643),new cljs.core.Keyword(null,"accent-height","accent-height",-1189857342),new cljs.core.Keyword(null,"xlink:role","xlink:role",-556206369),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),new cljs.core.Keyword(null,"preload","preload",1646824722),new cljs.core.Keyword(null,"strikethrough-position","strikethrough-position",402256746),new cljs.core.Keyword(null,"v-hanging","v-hanging",-956218086),new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913),new cljs.core.Keyword(null,"panose-1","panose-1",-1528382164),new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"font-size-adjust","font-size-adjust",-104156772),new cljs.core.Keyword(null,"radiogroup","radiogroup",1109767410),new cljs.core.Keyword(null,"overline-position","overline-position",1793937810),new cljs.core.Keyword(null,"marker-start","marker-start",-56273582),new cljs.core.Keyword(null,"srclang","srclang",-1282812164),new cljs.core.Keyword(null,"rendering-intent","rendering-intent",-45468422),new cljs.core.Keyword(null,"paint-order","paint-order",1313558207),new cljs.core.Keyword(null,"v-ideographic","v-ideographic",-1846578533),new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),new cljs.core.Keyword(null,"x-height","x-height",1735436609),new cljs.core.Keyword(null,"image-rendering","image-rendering",770251905),new cljs.core.Keyword(null,"keytype","keytype",-1800018904),new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),new cljs.core.Keyword(null,"font-stretch","font-stretch",-1432788830),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"unicode-range","unicode-range",-2014392944),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"marker-mid","marker-mid",-505338277),new cljs.core.Keyword(null,"minlength","minlength",259053545),new cljs.core.Keyword(null,"underline-position","underline-position",2105325589),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"xlink:title","xlink:title",244078426),new cljs.core.Keyword(null,"color-profile","color-profile",1755323818),new cljs.core.Keyword(null,"xlink:type","xlink:type",-1668107217),new cljs.core.Keyword(null,"xml:base","xml:base",1209393887),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword(null,"glyph-orientation-horizontal","glyph-orientation-horizontal",436217892),new cljs.core.Keyword(null,"xlink:arcrole","xlink:arcrole",-376517951),new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),new cljs.core.Keyword(null,"marker-end","marker-end",341488703),new cljs.core.Keyword(null,"crossorigin","crossorigin",-418026140),new cljs.core.Keyword(null,"flood-color","flood-color",1622703322),new cljs.core.Keyword(null,"colspan","colspan",-1512420934),new cljs.core.Keyword(null,"hreflang","hreflang",1405893356),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"readonly","readonly",-1101398934),new cljs.core.Keyword(null,"accept-charset","accept-charset",-1667839372),new cljs.core.Keyword(null,"color-rendering","color-rendering",-891830687),new cljs.core.Keyword(null,"strikethrough-thickness","strikethrough-thickness",2087500993),new cljs.core.Keyword(null,"formaction","formaction",405331853),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"accesskey","accesskey",1009130381),new cljs.core.Keyword(null,"srcset","srcset",710050500),new cljs.core.Keyword(null,"stroke-miterlimit","stroke-miterlimit",1151270808),new cljs.core.Keyword(null,"spellcheck","spellcheck",-508643726),new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991),new cljs.core.Keyword(null,"horiz-adv-x","horiz-adv-x",1555956653),new cljs.core.Keyword(null,"maxlength","maxlength",-1163911985),new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530),new cljs.core.Keyword(null,"vert-origin-y","vert-origin-y",-1770906134),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"unicode-bidi","unicode-bidi",310629754),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),new cljs.core.Keyword(null,"arabic-form","arabic-form",-246736017),new cljs.core.Keyword(null,"usemap","usemap",898470438),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"enctype","enctype",-2053093795),new cljs.core.Keyword(null,"text-rendering","text-rendering",872518208),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),new cljs.core.Keyword(null,"contextmenu","contextmenu",-15887481),new cljs.core.Keyword(null,"v-alphabetic","v-alphabetic",-552236578),new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),new cljs.core.Keyword(null,"flood-opacity","flood-opacity",-479030608),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),new cljs.core.Keyword(null,"disappearing-style","disappearing-style",1006098271),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"glyph-orientation-vertical","glyph-orientation-vertical",1701745981),new cljs.core.Keyword(null,"enable-background","enable-background",-858721379),new cljs.core.Keyword(null,"srcdoc","srcdoc",1490493414),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"ismap","ismap",-338082918),new cljs.core.Keyword(null,"xml:lang","xml:lang",-1485113568),new cljs.core.Keyword(null,"horiz-origin-x","horiz-origin-x",1522984617),new cljs.core.Keyword(null,"color-interpolation","color-interpolation",-1276247587),new cljs.core.Keyword(null,"vert-adv-y","vert-adv-y",-641097319),new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),new cljs.core.Keyword(null,"autocapitalize","autocapitalize",1015077767),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.Keyword(null,"codebase","codebase",1837164787),new cljs.core.Keyword(null,"color-interpolation-filters","color-interpolation-filters",-519168139)]);
dumdom.element.data_attr_QMARK_ = (function dumdom$element$data_attr_QMARK_(p__29768){
var vec__29769 = p__29768;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29769,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29769,(1),null);
return cljs.core.re_find(/^data-/,cljs.core.name(k));
});
dumdom.element.event_handler_QMARK_ = (function dumdom$element$event_handler_QMARK_(attr_name){
return cljs.core.re_find(/on[A-Z]/,cljs.core.name(attr_name));
});
dumdom.element.prep_attrs = (function dumdom$element$prep_attrs(attrs){
var dataset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29788){
var vec__29791 = p__29788;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29791,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(cljs.core.name(k),/^data-/,""),v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dumdom.element.data_attr_QMARK_,attrs)));
var attrs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__29794){
var vec__29795 = p__29794;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29795,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29795,(1),null);
return (v == null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29798){
var vec__29799 = p__29798;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dumdom.element.camel_key(k),v], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(dumdom.element.data_attr_QMARK_,attrs))));
var attrs__$2 = clojure.set.rename_keys(attrs__$1,dumdom.element.attr_mappings);
var event_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dumdom.element.event_handler_QMARK_,cljs.core.keys(attrs__$2));
var el_key = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(attrs__$2,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))){
return cljs.core.hash(new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138).cljs$core$IFn$_invoke$arity$1(attrs__$2));
} else {
return null;
}
}
})();
var G__29802 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc,attrs__$2,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disappearing-style","disappearing-style",1006098271),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),event_keys], 0)),new cljs.core.Keyword(null,"props","props",453281727),(function (){var G__29804 = cljs.core.PersistentArrayMap.EMPTY;
var G__29804__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs__$2))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29804,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs__$2)):G__29804);
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138).cljs$core$IFn$_invoke$arity$1(attrs__$2),new cljs.core.Keyword(null,"__html","__html",674048345))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29804__$1,new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343),new cljs.core.Keyword(null,"__html","__html",674048345).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138).cljs$core$IFn$_invoke$arity$1(attrs__$2)));
} else {
return G__29804__$1;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dumdom.element.normalize_styles(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs__$2)),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var enter = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delayed","delayed",251992229),dumdom.element.normalize_styles(enter)], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var remove = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove","remove",-131428414),dumdom.element.normalize_styles(remove)], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"disappearing-style","disappearing-style",1006098271).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var destroy = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",-843660405),dumdom.element.normalize_styles(destroy)], null);
} else {
return null;
}
})()], 0)),new cljs.core.Keyword(null,"on","on",173873944),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29778_SHARP_){
return dumdom.element.event_entry(attrs__$2,p1__29778_SHARP_);
}),event_keys)),new cljs.core.Keyword(null,"hook","hook",750265408),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var callback = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),(function (p1__29779_SHARP_){
var G__29813 = p1__29779_SHARP_.elm;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__29813) : callback.call(null,G__29813));
}),new cljs.core.Keyword(null,"destroy","destroy",-843660405),(function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(null) : callback.call(null,null));
})], null);
} else {
return null;
}
})()], 0)),new cljs.core.Keyword(null,"dataset","dataset",1159262238),dataset], null);
if(cljs.core.truth_(el_key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29802,new cljs.core.Keyword(null,"key","key",-1516042587),el_key);
} else {
return G__29802;
}
});
dumdom.element.hiccup_QMARK_ = (function dumdom$element$hiccup_QMARK_(sexp){
return ((cljs.core.vector_QMARK_(sexp)) && ((((!(cljs.core.map_entry_QMARK_(sexp)))) && ((((cljs.core.first(sexp) instanceof cljs.core.Keyword)) || (cljs.core.fn_QMARK_(cljs.core.first(sexp))))))));
});
dumdom.element.class_list = (function dumdom$element$class_list(classes){
if((classes instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if(typeof classes === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classes], null);
} else {
if(cljs.core.empty_QMARK_(classes)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_(classes)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29815_SHARP_){
if((p1__29815_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.name(p1__29815_SHARP_);
} else {
return p1__29815_SHARP_;
}
}),classes);
} else {
if((classes == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Received class name that is neither string, keyword, or a collection of those",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null));

}
}
}
}
}
});
dumdom.element.parse_hiccup_symbol = (function dumdom$element$parse_hiccup_symbol(sym,attrs){
var vec__29821 = cljs.core.re_find(/#([^\.#]+)/,sym);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29821,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29821,(1),null);
var vec__29824 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(sym,/#([^#\.]+)/,""),/\./);
var seq__29825 = cljs.core.seq(vec__29824);
var first__29826 = cljs.core.first(seq__29825);
var seq__29825__$1 = cljs.core.next(seq__29825);
var el = first__29826;
var classes = seq__29825__$1;
var classes__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(dumdom.element.class_list(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)),dumdom.element.class_list(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(attrs)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([classes], 0)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,(function (){var G__29831 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"className","className",-1983287057)], 0));
var G__29831__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29831,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__29831);
if(cljs.core.seq(classes__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29831__$1,new cljs.core.Keyword(null,"className","className",-1983287057),(function (p1__29819_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(cljs.core.truth_(p1__29819_SHARP_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes__$1,p1__29819_SHARP_):classes__$1));
}));
} else {
return G__29831__$1;
}
})()], null);
});
dumdom.element.explode_styles = (function dumdom$element$explode_styles(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29840_SHARP_){
var vec__29842 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29840_SHARP_,/:/));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29842,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/;/)));
});
dumdom.element.prep_hiccup_attrs = (function dumdom$element$prep_hiccup_attrs(attrs){
var G__29845 = attrs;
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29845,new cljs.core.Keyword(null,"style","style",-496642736),dumdom.element.explode_styles);
} else {
return G__29845;
}
});
dumdom.element.flatten_seqs = (function dumdom$element$flatten_seqs(xs){
var res = cljs.core.PersistentVector.EMPTY;
var G__29896 = xs;
var vec__29899 = G__29896;
var seq__29900 = cljs.core.seq(vec__29899);
var first__29901 = cljs.core.first(seq__29900);
var seq__29900__$1 = cljs.core.next(seq__29900);
var x = first__29901;
var xs__$1 = seq__29900__$1;
var res__$1 = res;
var G__29896__$1 = G__29896;
while(true){
var res__$2 = res__$1;
var vec__29925 = G__29896__$1;
var seq__29926 = cljs.core.seq(vec__29925);
var first__29927 = cljs.core.first(seq__29926);
var seq__29926__$1 = cljs.core.next(seq__29926);
var x__$1 = first__29927;
var xs__$2 = seq__29926__$1;
if((((xs__$2 == null)) && ((x__$1 == null)))){
return cljs.core.seq(res__$2);
} else {
if(cljs.core.seq_QMARK_(x__$1)){
var G__30380 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(res__$2,(dumdom.element.flatten_seqs.cljs$core$IFn$_invoke$arity$1 ? dumdom.element.flatten_seqs.cljs$core$IFn$_invoke$arity$1(x__$1) : dumdom.element.flatten_seqs.call(null,x__$1)));
var G__30381 = xs__$2;
res__$1 = G__30380;
G__29896__$1 = G__30381;
continue;
} else {
var G__30384 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res__$2,x__$1);
var G__30385 = xs__$2;
res__$1 = G__30384;
G__29896__$1 = G__30385;
continue;

}
}
break;
}
});
dumdom.element.add_namespace = (function dumdom$element$add_namespace(vnode){
var G__29948 = vnode;
var G__29948__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("foreignObject",new cljs.core.Keyword(null,"sel","sel",-1686154807).cljs$core$IFn$_invoke$arity$1(vnode)))?cljs.core.assoc_in(G__29948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"ns","ns",441598760)], null),"http://www.w3.org/2000/svg"):G__29948);
if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(vnode))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29948__$1,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__29928_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(dumdom.element.add_namespace,p1__29928_SHARP_);
}));
} else {
return G__29948__$1;
}
});
dumdom.element.svg_QMARK_ = (function dumdom$element$svg_QMARK_(sel){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("s",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sel,(0)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("v",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sel,(1)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("g",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sel,(2)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(sel))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sel,(3)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sel,(3)))))))))))));
});
dumdom.element.primitive_QMARK_ = (function dumdom$element$primitive_QMARK_(x){
return ((typeof x === 'string') || (typeof x === 'number'));
});
dumdom.element.convert_primitive_children = (function dumdom$element$convert_primitive_children(children){
var iter__5523__auto__ = (function dumdom$element$convert_primitive_children_$_iter__29973(s__29974){
return (new cljs.core.LazySeq(null,(function (){
var s__29974__$1 = s__29974;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29974__$1);
if(temp__5804__auto__){
var s__29974__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29974__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29974__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29976 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29975 = (0);
while(true){
if((i__29975 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__29975);
cljs.core.chunk_append(b__29976,((dumdom.element.primitive_QMARK_(c))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),c], null):c));

var G__30395 = (i__29975 + (1));
i__29975 = G__30395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29976),dumdom$element$convert_primitive_children_$_iter__29973(cljs.core.chunk_rest(s__29974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29976),null);
}
} else {
var c = cljs.core.first(s__29974__$2);
return cljs.core.cons(((dumdom.element.primitive_QMARK_(c))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),c], null):c),dumdom$element$convert_primitive_children_$_iter__29973(cljs.core.rest(s__29974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(children);
});
dumdom.element.create_vdom_node = (function dumdom$element$create_vdom_node(sel,attrs,children){
var cmap_QMARK_ = cljs.core.map_QMARK_(children);
var G__30002 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sel","sel",-1686154807),sel,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376)], 0)),new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376),new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376).cljs$core$IFn$_invoke$arity$1(attrs)], null);
var G__30002__$1 = ((dumdom.element.primitive_QMARK_(children))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30002,new cljs.core.Keyword(null,"text","text",-1790561697),children):G__30002);
var G__30002__$2 = ((cmap_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30002__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null)):G__30002__$1);
var G__30002__$3 = ((((cljs.core.seq_QMARK_(children)) && ((!(cmap_QMARK_)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30002__$2,new cljs.core.Keyword(null,"children","children",-940561982),children):G__30002__$2);
var G__30002__$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__30002__$3,new cljs.core.Keyword(null,"children","children",-940561982),dumdom.element.convert_primitive_children)
;
var G__30002__$5 = ((dumdom.element.svg_QMARK_(sel))?dumdom.element.add_namespace(G__30002__$4):G__30002__$4);
if(cljs.core.truth_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30002__$5,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs));
} else {
return G__30002__$5;
}
});
dumdom.element.inflate_hiccup = (function dumdom$element$inflate_hiccup(sexp){
if((sexp == null)){
return dumdom.element.create_vdom_node("!",cljs.core.PersistentArrayMap.EMPTY,"nil");
} else {
if((!(dumdom.element.hiccup_QMARK_(sexp)))){
return sexp;
} else {
var tag_name = cljs.core.first(sexp);
var args = cljs.core.rest(sexp);
var args__$1 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?args:cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),args));
if(cljs.core.fn_QMARK_(tag_name)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tag_name,cljs.core.rest(sexp));
} else {
var vec__30025 = dumdom.element.parse_hiccup_symbol(cljs.core.name(tag_name),cljs.core.first(args__$1));
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30025,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30025,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(dumdom.element.create,element,dumdom.element.prep_hiccup_attrs(attrs),dumdom.element.flatten_seqs(cljs.core.rest(args__$1)));
}

}
}
});
dumdom.element.enumerate_key = (function dumdom$element$enumerate_key(kmap,k){
var k__$1 = ((typeof k === 'string')?k:cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$3(kmap,k__$1,(0))], null);
});
dumdom.element.realize_children = (function dumdom$element$realize_children(path,xs){
var xs__$1 = cljs.core.seq(xs);
var res = cljs.core.PersistentVector.EMPTY;
var ks = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((xs__$1 == null)){
return cljs.core.seq(res);
} else {
var x = cljs.core.first(xs__$1);
var child = ((cljs.core.fn_QMARK_(x))?(x.cljs$core$IFn$_invoke$arity$2 ? x.cljs$core$IFn$_invoke$arity$2(path,ks) : x.call(null,path,ks)):x);
var G__30412 = cljs.core.next(xs__$1);
var G__30413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,child);
var G__30414 = (function (){var vec__30046 = new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376).cljs$core$IFn$_invoke$arity$1(child);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30046,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30046,(1),null);
var vec__30049 = new cljs.core.Keyword("dumdom","lookup-key","dumdom/lookup-key",234912017).cljs$core$IFn$_invoke$arity$1(child);
var lk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30049,(0),null);
var lk_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30049,(1),null);
var G__30058 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ks,k,(function (){var G__30059 = (function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
if((G__30059 == null)){
return null;
} else {
return (G__30059 + (1));
}
})());
if(cljs.core.truth_(lk)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30058,lk,(function (){var G__30060 = (function (){var or__5045__auto__ = lk_n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
if((G__30060 == null)){
return null;
} else {
return (G__30060 + (1));
}
})());
} else {
return G__30058;
}
})();
xs__$1 = G__30412;
res = G__30413;
ks = G__30414;
continue;
}
break;
}
});
dumdom.element.add_comment_node = (function dumdom$element$add_comment_node(p__30061){
var map__30062 = p__30061;
var map__30062__$1 = cljs.core.__destructure_map(map__30062);
var component = map__30062__$1;
var component_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30062__$1,new cljs.core.Keyword("dumdom","component-name","dumdom/component-name",19850734));
var render_comments_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30062__$1,new cljs.core.Keyword("dumdom","render-comments?","dumdom/render-comments?",877432722));
var G__30064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null);
if(cljs.core.truth_((function (){var and__5043__auto__ = render_comments_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return component_name;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons(dumdom.element.create_vdom_node("!",cljs.core.PersistentArrayMap.EMPTY,component_name),G__30064);
} else {
return G__30064;
}
});
dumdom.element.create = (function dumdom$element$create(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30419 = arguments.length;
var i__5770__auto___30420 = (0);
while(true){
if((i__5770__auto___30420 < len__5769__auto___30419)){
args__5775__auto__.push((arguments[i__5770__auto___30420]));

var G__30421 = (i__5770__auto___30420 + (1));
i__5770__auto___30420 = G__30421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dumdom.element.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dumdom.element.create.cljs$core$IFn$_invoke$arity$variadic = (function (tag_name,attrs,children){
return (function (path,kmap){
var attrs__$1 = dumdom.element.prep_attrs(attrs);
var k = dumdom.element.enumerate_key(kmap,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs__$1));
var fullpath = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return dumdom.element.create_vdom_node(tag_name,(function (){var G__30082 = attrs__$1;
var G__30082__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30082,new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",k)):G__30082);
var G__30082__$2 = (cljs.core.truth_(k)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30082__$1,new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376),k):G__30082__$1);
return cljs.core.assoc_in(G__30082__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (old_vnode,new_vnode){
var seq__30083_30422 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__30082,G__30082__$1,G__30082__$2,attrs__$1,k,fullpath){
return (function (p1__30069_SHARP_){
var G__30101 = p1__30069_SHARP_;
if((G__30101 == null)){
return null;
} else {
return G__30101.willEnter;
}
});})(G__30082,G__30082__$1,G__30082__$2,attrs__$1,k,fullpath))
,new_vnode.children));
var chunk__30084_30423 = null;
var count__30085_30424 = (0);
var i__30086_30425 = (0);
while(true){
if((i__30086_30425 < count__30085_30424)){
var node_30429 = chunk__30084_30423.cljs$core$IIndexed$_nth$arity$2(null,i__30086_30425);
var fexpr__30111_30430 = node_30429.willEnter;
(fexpr__30111_30430.cljs$core$IFn$_invoke$arity$0 ? fexpr__30111_30430.cljs$core$IFn$_invoke$arity$0() : fexpr__30111_30430.call(null));


var G__30431 = seq__30083_30422;
var G__30432 = chunk__30084_30423;
var G__30433 = count__30085_30424;
var G__30434 = (i__30086_30425 + (1));
seq__30083_30422 = G__30431;
chunk__30084_30423 = G__30432;
count__30085_30424 = G__30433;
i__30086_30425 = G__30434;
continue;
} else {
var temp__5804__auto___30435 = cljs.core.seq(seq__30083_30422);
if(temp__5804__auto___30435){
var seq__30083_30436__$1 = temp__5804__auto___30435;
if(cljs.core.chunked_seq_QMARK_(seq__30083_30436__$1)){
var c__5568__auto___30437 = cljs.core.chunk_first(seq__30083_30436__$1);
var G__30438 = cljs.core.chunk_rest(seq__30083_30436__$1);
var G__30439 = c__5568__auto___30437;
var G__30440 = cljs.core.count(c__5568__auto___30437);
var G__30441 = (0);
seq__30083_30422 = G__30438;
chunk__30084_30423 = G__30439;
count__30085_30424 = G__30440;
i__30086_30425 = G__30441;
continue;
} else {
var node_30442 = cljs.core.first(seq__30083_30436__$1);
var fexpr__30112_30443 = node_30442.willEnter;
(fexpr__30112_30443.cljs$core$IFn$_invoke$arity$0 ? fexpr__30112_30443.cljs$core$IFn$_invoke$arity$0() : fexpr__30112_30443.call(null));


var G__30444 = cljs.core.next(seq__30083_30436__$1);
var G__30445 = null;
var G__30446 = (0);
var G__30447 = (0);
seq__30083_30422 = G__30444;
chunk__30084_30423 = G__30445;
count__30085_30424 = G__30446;
i__30086_30425 = G__30447;
continue;
}
} else {
}
}
break;
}

var seq__30113 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__30082,G__30082__$1,G__30082__$2,attrs__$1,k,fullpath){
return (function (p1__30070_SHARP_){
var G__30134 = p1__30070_SHARP_;
if((G__30134 == null)){
return null;
} else {
return G__30134.willAppear;
}
});})(G__30082,G__30082__$1,G__30082__$2,attrs__$1,k,fullpath))
,new_vnode.children));
var chunk__30114 = null;
var count__30115 = (0);
var i__30116 = (0);
while(true){
if((i__30116 < count__30115)){
var node = chunk__30114.cljs$core$IIndexed$_nth$arity$2(null,i__30116);
var fexpr__30140_30448 = node.willAppear;
(fexpr__30140_30448.cljs$core$IFn$_invoke$arity$0 ? fexpr__30140_30448.cljs$core$IFn$_invoke$arity$0() : fexpr__30140_30448.call(null));


var G__30449 = seq__30113;
var G__30450 = chunk__30114;
var G__30451 = count__30115;
var G__30452 = (i__30116 + (1));
seq__30113 = G__30449;
chunk__30114 = G__30450;
count__30115 = G__30451;
i__30116 = G__30452;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30113);
if(temp__5804__auto__){
var seq__30113__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30113__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30113__$1);
var G__30456 = cljs.core.chunk_rest(seq__30113__$1);
var G__30457 = c__5568__auto__;
var G__30458 = cljs.core.count(c__5568__auto__);
var G__30459 = (0);
seq__30113 = G__30456;
chunk__30114 = G__30457;
count__30115 = G__30458;
i__30116 = G__30459;
continue;
} else {
var node = cljs.core.first(seq__30113__$1);
var fexpr__30159_30460 = node.willAppear;
(fexpr__30159_30460.cljs$core$IFn$_invoke$arity$0 ? fexpr__30159_30460.cljs$core$IFn$_invoke$arity$0() : fexpr__30159_30460.call(null));


var G__30464 = cljs.core.next(seq__30113__$1);
var G__30465 = null;
var G__30466 = (0);
var G__30467 = (0);
seq__30113 = G__30464;
chunk__30114 = G__30465;
count__30115 = G__30466;
i__30116 = G__30467;
continue;
}
} else {
return null;
}
}
break;
}
}));

})(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(dumdom.element.add_comment_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dumdom.element.realize_children(fullpath,cljs.core.map.cljs$core$IFn$_invoke$arity$2(dumdom.element.inflate_hiccup,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30071_SHARP_){
if(cljs.core.seq_QMARK_(p1__30071_SHARP_)){
return p1__30071_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30071_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))))], 0)));
});
}));

(dumdom.element.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.element.create.cljs$lang$applyTo = (function (seq30072){
var G__30073 = cljs.core.first(seq30072);
var seq30072__$1 = cljs.core.next(seq30072);
var G__30074 = cljs.core.first(seq30072__$1);
var seq30072__$2 = cljs.core.next(seq30072__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30073,G__30074,seq30072__$2);
}));


//# sourceMappingURL=dumdom.element.js.map
