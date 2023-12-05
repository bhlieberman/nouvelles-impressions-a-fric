(ns nia.subs
  (:require 
   [reagent.core :as r]
   [re-frame.core :refer [reg-sub reg-sub-raw subscribe]]))

(reg-sub
 :routing/current-route
 :-> :app.routing/current-route)

(reg-sub
 :routing/route-name
 :<- [:routing/current-route]
 :-> #(-> % :data :name))

(reg-sub
 :routing/location
 :-> :app.routing/location)

(reg-sub
 :get-loc
 :<- [:routing/location]
 :-> #(-> % :location))

(reg-sub
 :poem/display-current-footnote
 :-> :current-footnote)

(reg-sub
 :poem/parens-depth
 :-> :poem/parens-depth)

(reg-sub-raw
 :poem/parens-loc
 (fn [db _]
   (r/reaction
    (let [depth @(subscribe [:poem/parens-depth])]
      (get-in @db [:poem/parens-loc depth])))))

(reg-sub
 :image/url
 :-> :image/url)

(reg-sub
 :images
 :-> :images/urls)