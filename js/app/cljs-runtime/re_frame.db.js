import "./cljs_env.js";
import "./cljs.core.js";
import "./re_frame.interop.js";
goog.provide('re_frame.db');
re_frame.db.app_db = re_frame.interop.ratom(cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=re_frame.db.js.map
