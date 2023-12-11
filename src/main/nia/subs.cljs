(ns nia.subs
  (:require [goog.string :as gstr]
            [re-frame.core :refer [reg-sub]]))

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

(reg-sub
 :poem/parens-loc
 (fn [db [_ depth]]
   (get-in db [:poem/parens-loc depth])))

(reg-sub
 :image/url
 :-> :image/url)

(reg-sub
 :images
 :-> :images/urls)

(reg-sub
 :builder
 :-> :lunr/builder)

(reg-sub
 :search/all-matches
 :-> :lunr/all-matches)

(reg-sub
 :search/show-shortened
 :<- [:search/all-matches]
 (fn [matches]
   (for [{:keys [text pos len]} matches]
     (gstr/truncate text (+ pos len 5) false))))

(reg-sub
 :search/initial-results
 :-> :lunr/current-match)

(reg-sub
 :search/results-showing?
 :-> :search/results-showing?)