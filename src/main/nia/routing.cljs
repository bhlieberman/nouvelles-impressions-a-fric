(ns nia.routing
  (:require [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.frontend.controllers :as rfc]
            [nia.views.home :refer [preface]]
            [nia.views.cantos.one.thesis :refer [thesis]]
            [nia.views.cantos.one.parens-one :refer [parens]]
            [nia.views.cantos.one.parens-two :refer [parens-two]]
            [nia.views.cantos.one.parens-three :refer [parens-three]]
            [nia.views.cantos.one.parens-four :refer [parens-four]]
            [nia.views.cantos.one.parens-five :refer [parens-five]]))

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
     ["/:id"
      [""
       {:name ::one
        :view thesis
        :controllers [{:parameters {:path [:id]}}]}]
      ["/parens"
       ["/1"
        {:name :nia.routing.canto.one/one
         :view parens
         :controllers []}]
       ["/2"
        {:name :nia.routing.canto.one/two
         :view parens-two
         :controllers []}]
       ["/3"
        {:name :nia.routing.canto.one/three
         :view parens-three
         :controllers []}]
       ["/4"
        {:name :nia.routing.canto.one/four
         :view parens-four
         :controllers []}]
       ["/5"
        {:name :nia.routing.canto.one/five
         :view parens-five
         :controllers []}]]]]]])

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