(ns nia.app
  (:require [goog.dom :as gdom]
            [nia.config.maps] 
            [nia.subs] 
            [nia.views.router :refer [router]]
            [reagent.core :as r]
            [reagent.dom.client :refer [create-root]]
            [re-frame.core :refer [dispatch-sync]]))

(defonce root (create-root (gdom/getElement "root")))

(defn ^:dev/after-load render! []
  (.render root (r/as-element [router])))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn init [] 
  (dispatch-sync [:app/initialize])
  (render!))