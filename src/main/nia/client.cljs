(ns nia.client
  (:require 
   [nia.views.router :refer [router]]
   [reagent.core :as r]
   [reagent.dom.client :refer [hydrate-root]]))

(defn ^:export hydrate! []
  (hydrate-root (.getElementById js/document "root") (r/as-element [router])))

(hydrate!)