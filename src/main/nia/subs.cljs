(ns nia.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :routing/current-route
 :-> :current-route)

(reg-sub
 :routing/parens-route
 (fn [db [_ canto depth]]
   (get-in db [:parens-routes canto depth])))