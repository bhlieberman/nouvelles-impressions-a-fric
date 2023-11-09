
import "./storage.js";
import "./base.js";
import "./cljs-runtime/shadow.module.views.prepend.js";
SHADOW_ENV.setLoaded("shadow.module.views.prepend.js");
import "./cljs-runtime/nia.subs.js";
SHADOW_ENV.setLoaded("nia.subs.js");
import "./cljs-runtime/shadow.resource.js";
SHADOW_ENV.setLoaded("shadow.resource.js");
import "./cljs-runtime/nia.config.app_db.js";
SHADOW_ENV.setLoaded("nia.config.app_db.js");
import "./cljs-runtime/alandipert.storage_atom.js";
SHADOW_ENV.setLoaded("alandipert.storage_atom.js");
import "./cljs-runtime/akiroz.re_frame.storage.js";
SHADOW_ENV.setLoaded("akiroz.re_frame.storage.js");
import "./cljs-runtime/reitit.exception.js";
SHADOW_ENV.setLoaded("reitit.exception.js");
import "./cljs-runtime/meta_merge.core.js";
SHADOW_ENV.setLoaded("meta_merge.core.js");
import "./cljs-runtime/reitit.trie.js";
SHADOW_ENV.setLoaded("reitit.trie.js");
import "./cljs-runtime/reitit.impl.js";
SHADOW_ENV.setLoaded("reitit.impl.js");
import "./cljs-runtime/reitit.core.js";
SHADOW_ENV.setLoaded("reitit.core.js");
import "./cljs-runtime/reitit.coercion.js";
SHADOW_ENV.setLoaded("reitit.coercion.js");
import "./cljs-runtime/reitit.frontend.js";
SHADOW_ENV.setLoaded("reitit.frontend.js");
import "./cljs-runtime/reitit.frontend.history.js";
SHADOW_ENV.setLoaded("reitit.frontend.history.js");
import "./cljs-runtime/reitit.frontend.easy.js";
SHADOW_ENV.setLoaded("reitit.frontend.easy.js");
import "./cljs-runtime/reitit.frontend.controllers.js";
SHADOW_ENV.setLoaded("reitit.frontend.controllers.js");
import "./cljs-runtime/nia.events.routing.js";
SHADOW_ENV.setLoaded("nia.events.routing.js");
import "./cljs-runtime/nia.routing.js";
SHADOW_ENV.setLoaded("nia.routing.js");
import "./cljs-runtime/day8.re_frame.http_fx.js";
SHADOW_ENV.setLoaded("day8.re_frame.http_fx.js");
import "./cljs-runtime/nia.events.core.js";
SHADOW_ENV.setLoaded("nia.events.core.js");
import "./cljs-runtime/shadow.module.views.append.js";
SHADOW_ENV.setLoaded("shadow.module.views.append.js");


try { nia.routing.init_routes_BANG_(); } catch (e) { console.error("An error occurred when calling (nia.routing/init-routes!)"); throw(e); }
shadow.cljs.devtools.client.env.module_loaded("views");