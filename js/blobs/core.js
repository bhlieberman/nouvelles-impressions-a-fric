
import "./views.js";
import "./base.js";
import "./cljs-runtime/shadow.module.core.prepend.js";
SHADOW_ENV.setLoaded("shadow.module.core.prepend.js");
import "./cljs-runtime/nia.views.navbar.js";
SHADOW_ENV.setLoaded("nia.views.navbar.js");
import "./cljs-runtime/nia.views.parens_scroll.js";
SHADOW_ENV.setLoaded("nia.views.parens_scroll.js");
import "./cljs-runtime/nia.views.router.js";
SHADOW_ENV.setLoaded("nia.views.router.js");
import "./cljs-runtime/shadow.esm.esm_import$react_dom$client.js";
SHADOW_ENV.setLoaded("shadow.esm.esm_import$react_dom$client.js");
import "./cljs-runtime/reagent.dom.client.js";
SHADOW_ENV.setLoaded("reagent.dom.client.js");
import "./cljs-runtime/nia.app.js";
SHADOW_ENV.setLoaded("nia.app.js");
import "./cljs-runtime/shadow.module.core.append.js";
SHADOW_ENV.setLoaded("shadow.module.core.append.js");


try { nia.app.init(); } catch (e) { console.error("An error occurred when calling (nia.app/init)"); throw(e); }
shadow.cljs.devtools.client.env.module_loaded("core");