import "./cljs_env.js";
import "./goog.events.mouseasmouseeventtype.js";
import "./goog.events.mouseevents.js";
import "./goog.events.pointerasmouseeventtype.js";
goog.provide("goog.ui.ComponentUtil");
goog.require("goog.events.MouseAsMouseEventType");
goog.require("goog.events.MouseEvents");
goog.require("goog.events.PointerAsMouseEventType");
goog.requireType("goog.ui.Component");
goog.ui.ComponentUtil.getMouseEventType = function(component) {
  return component.pointerEventsEnabled() ? goog.events.PointerAsMouseEventType : goog.events.MouseAsMouseEventType;
};

//# sourceMappingURL=goog.ui.componentutil.js.map
