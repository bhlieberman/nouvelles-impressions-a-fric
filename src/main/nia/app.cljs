(ns nia.app
  (:require [goog.dom :as gdom]
            [reagent.core :as r]
            [reagent.dom.client :refer [create-root]]
            [nia.views.nia-one :refer [nia-one]]
            [nia.routing :refer [init-routes!]]))

(defonce root (create-root (gdom/getElement "root")))

(defn ^:dev/after-load render! []
  (.render root (r/as-element [nia-one])))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn init []
  (init-routes!)
  (render!))