(ns nia.routing
  (:require [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.frontend.controllers :as rfc]
            [nia.views.home :refer [preface]]))

(def routes
  ["/"
   ["" {:name ::home
        :view preface
        :controllers [{:start (fn [_] (js/console.log "home page"))
                       :stop (fn [_] (js/console.log "leaving home"))}]}]
   ["nia"
    ["/intro" {:name ::intro
               :view [:div "Intro here, soon"]
               :controllers [{:start (fn [_] (js/console.log "intro page"))
                              :stop (fn [_] (js/console.log "leaving intro"))}]}]
    ["/canto"
     ["/:id" {:name (keyword 'nia.views.routing "one")
              :view [:div "a canto"]
              :parameters {:path {:id 1}}
              :controllers [{:start (fn [{:keys [path]}] (js/console.log (:id path)))
                             :stop (fn [{:keys [path]}] (js/console.log (:id path)))}]}]]]])

(def router (rf/router routes))

(def current-route (r/atom nil))

(defn on-navigate [new-match]
  (when new-match
    (swap! current-route
           (fn [old-match]
             (assoc new-match
                    :controllers
                    (rfc/apply-controllers (:controllers old-match) new-match))))))

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfe/start! router on-navigate {:use-fragment false}))