(ns nia.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :routing/current-route
 :-> :app.routing/current-route)

(reg-sub
 :poem/display-current-footnote
 :-> :current-footnote)

(reg-sub
 :config.maps/current-center
 :-> :config.maps/current-center)

(reg-sub
 :config.maps/coords 
 (fn [db [_ center]] (get-in db [:config.maps/coords center])))

(reg-sub
 :maps/current-center
 :-> :config.maps/current-center)

(reg-sub
 :poem/parens-depth
 :-> :app.impl/parens-depth)

(reg-sub
 :image/url
 :-> :image/url)