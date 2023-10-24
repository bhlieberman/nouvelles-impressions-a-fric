(ns nia.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :routing/current-route
 :-> :app.routing/current-route)

(reg-sub
 :poem/display-current-footnote
 :-> :current-footnote)

(reg-sub
 :maps/current-center
 :-> :config.maps/current-center)