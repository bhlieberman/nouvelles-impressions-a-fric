(ns nia.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :routing/current-route
 :-> :app.routing/current-route)

(reg-sub
 :routing/route-name
 :<- [:routing/current-route]
 :-> #(-> % :data :name))

(reg-sub
 :routing/location
 :<- [:routing/current-route]
 :-> #(-> % :path-params :location))

(reg-sub
 :poem/display-current-footnote
 :-> :current-footnote)

(reg-sub
 :image/url
 :-> :image/url)

(reg-sub
 :images
 :-> :images/urls)