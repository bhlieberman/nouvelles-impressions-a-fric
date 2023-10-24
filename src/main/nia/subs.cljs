(ns nia.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :routing/current-route
 :-> :current-route)

(reg-sub
 :poem/display-current-footnote
 :-> :current-footnote)