(ns nia.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :routing/current-route
 :-> :app.routing/current-route)

(reg-sub
 :poem/display-current-footnote
 :-> :current-footnote)

(reg-sub
 :poem/parens-depth
 :-> :app.impl/parens-depth)

(reg-sub
 :image/url
 :-> :image/url)

(reg-sub
 :images
 :-> #(-> % :images vals))