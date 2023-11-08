(ns nia.routing
  (:require [re-frame.core :refer [dispatch]]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]))

(def routes
  ["/"
   ["" {:name :nia.routing/home}]
   ["canto"
    ["/1" {:name :nia.routing.canto/one}
     ["/:location" {:controllers [{:parameters {:path [:location]}}]}]]
    ["/2" {:name :nia.routing.canto/two}
     ["/:location" {:controllers [{:parameters {:path [:location]}}]}]]
    ["/4" {:name :nia.routing.canto/four}
     ["/:location" {:controllers [{:parameters {:path [:location]}}]}]]]
   ["images" {:name :nia.routing.images/home}]])

(def router (rf/router routes))

(defn on-navigate [new-match]
  (when new-match
    (dispatch [:routing/navigated new-match])))

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfe/start! router on-navigate {:use-fragment false}))

(comment
  (init-routes!))