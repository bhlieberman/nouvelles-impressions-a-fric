(ns nia.app
  (:require [goog.dom :as gdom] 
            [nia.subs] 
            [nia.views.router :refer [router]] 
            [reagent.core :as r]
            [reagent.dom.client :refer [create-root]]))

(defonce root (create-root (gdom/getElement "root")))

(defn ^:dev/after-load render! []
  (.render root (r/as-element [(fn [] router)])))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn init [] 
  (render!))