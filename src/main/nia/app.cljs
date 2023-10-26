(ns nia.app
  (:require [goog.dom :as gdom]
            [nia.config.maps] 
            [nia.config.storage]
            [nia.events.core] 
            [nia.events.maps] 
            [nia.events.routing] 
            [nia.subs] 
            [nia.routing :refer [init-routes!]]
            [nia.views.router :refer [router]]
            [reagent.core :as r]
            [reagent.dom.client :refer [create-root]]
            [re-frame.core :refer [dispatch-sync]]))

(defonce root (create-root (gdom/getElement "root")))

(defn ^:dev/after-load render! []
  (.render root (r/as-element [router]))
  (init-routes!))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn init [] 
  (dispatch-sync [:app/initialize]) 
  (render!))