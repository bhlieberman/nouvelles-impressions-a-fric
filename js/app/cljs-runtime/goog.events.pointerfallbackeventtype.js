import "./cljs_env.js";
import "./goog.events.eventtype.js";
import "./goog.events.eventtypehelpers.js";
goog.provide("goog.events.PointerFallbackEventType");
goog.require("goog.events.EventType");
goog.require("goog.events.eventTypeHelpers");
goog.events.PointerFallbackEventType = {POINTERDOWN:goog.events.eventTypeHelpers.getPointerFallbackEventName(goog.events.EventType.POINTERDOWN, goog.events.EventType.MSPOINTERDOWN, goog.events.EventType.MOUSEDOWN), POINTERUP:goog.events.eventTypeHelpers.getPointerFallbackEventName(goog.events.EventType.POINTERUP, goog.events.EventType.MSPOINTERUP, goog.events.EventType.MOUSEUP), POINTERCANCEL:goog.events.eventTypeHelpers.getPointerFallbackEventName(goog.events.EventType.POINTERCANCEL, goog.events.EventType.MSPOINTERCANCEL, 
goog.events.EventType.MOUSECANCEL), POINTERMOVE:goog.events.eventTypeHelpers.getPointerFallbackEventName(goog.events.EventType.POINTERMOVE, goog.events.EventType.MSPOINTERMOVE, goog.events.EventType.MOUSEMOVE), POINTEROVER:goog.events.eventTypeHelpers.getPointerFallbackEventName(goog.events.EventType.POINTEROVER, goog.events.EventType.MSPOINTEROVER, goog.events.EventType.MOUSEOVER), POINTEROUT:goog.events.eventTypeHelpers.getPointerFallbackEventName(goog.events.EventType.POINTEROUT, goog.events.EventType.MSPOINTEROUT, 
goog.events.EventType.MOUSEOUT), POINTERENTER:goog.events.eventTypeHelpers.getPointerFallbackEventName(goog.events.EventType.POINTERENTER, goog.events.EventType.MSPOINTERENTER, goog.events.EventType.MOUSEENTER), POINTERLEAVE:goog.events.eventTypeHelpers.getPointerFallbackEventName(goog.events.EventType.POINTERLEAVE, goog.events.EventType.MSPOINTERLEAVE, goog.events.EventType.MOUSELEAVE)};

//# sourceMappingURL=goog.events.pointerfallbackeventtype.js.map
