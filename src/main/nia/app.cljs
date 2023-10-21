(ns nia.app
  (:require [goog.dom :as gdom]
            [reagent.core :as r]
            [reagent.dom.client :refer [create-root]]
            [reitit.frontend.history :as rfh] 
            [nia.views.router :refer [router]]
            [nia.routing :refer [init-routes!]]))

(defonce root (create-root (gdom/getElement "root")))

(def history (atom (init-routes!)))

(defn ^:dev/after-load render! []
  (.render root (r/as-element [router]))
  (swap! history rfh/stop!)
  (reset! history (init-routes!)))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn init []
  (init-routes!)
  (render!))