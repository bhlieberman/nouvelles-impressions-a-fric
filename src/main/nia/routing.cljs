(ns nia.routing
  (:require [re-frame.core :refer [dispatch]]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [nia.views.home :refer [introduction]]
            [nia.views.cantos.one.thesis :as one-thesis :refer [thesis]]
            [nia.views.cantos.one.parens-one :refer [parens]]
            [nia.views.cantos.one.parens-two :refer [parens-two]]
            [nia.views.cantos.one.parens-three :refer [parens-three]]
            [nia.views.cantos.one.parens-four :refer [parens-four]]
            [nia.views.cantos.one.parens-five :refer [parens-five]]
            [nia.views.cantos.two.thesis :as two-thesis]
            [nia.views.cantos.two.parens-one :as two-one]
            [nia.views.cantos.two.parens-two :as two-two]
            [nia.views.cantos.two.parens-three :as two-three]
            [nia.views.cantos.two.parens-four :as two-four]
            [nia.views.cantos.two.parens-five :as two-five]
            [nia.views.cantos.four.thesis :as four-thesis]
            [nia.views.cantos.four.parens-one :as four-one]
            [nia.views.cantos.four.parens-two :as four-two]
            [nia.views.cantos.four.parens-three :as four-three]
            [nia.views.cantos.four.parens-four :as four-four]
            [nia.views.cantos.four.parens-five :as four-five]))

(def routes
  ["/"
   ["" {:name ::home
        :view introduction
        :controllers []}]
   ["nia"
    ["/canto"
     ["/1"
      [""
       {:name :nia.routing.canto.one/thesis
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
         :controllers []}]]]
     ["/2"
      ["" {:name :nia.routing.canto.two/thesis
           :view two-thesis/thesis
           :controllers []}]
      ["/parens"
       ["/1" {:name :nia.routing.canto.two/one
              :view two-one/parens
              :controllers []}]
       ["/2" {:name :nia.routing.canto.two/two
              :view two-two/parens-two
              :controllers []}]
       ["/3" {:name :nia.routing.canto.two/three
              :view two-three/parens-three
              :controllers []}]
       ["/4" {:name :nia.routing.canto.two/four
              :view two-four/parens-four
              :controllers []}]
       ["/5" {:name :nia.routing.canto.two/five
              :view two-five/parens-five
              :controllers []}]]]
     ["/4"
      ["" {:name :nia.routing.canto.four/thesis
           :view four-thesis/thesis
           :controllers []}]
      ["/parens"
       ["/1" {:name :nia.routing.canto.four/one
              :view four-one/parens
              :controllers []}]
       ["/2" {:name :nia.routing.canto.four/two
              :view four-two/parens-two
              :controllers []}]
       ["/3" {:name :nia.routing.canto.four/three
              :view four-three/parens-three
              :controllers []}]
       ["/4" {:name :nia.routing.canto.four/four
              :view four-four/parens-four
              :controllers []}]
       ["/5" {:name :nia.routing.canto.four/five
              :view four-five/parens-five
              :controllers []}]]]]]])

(def router (rf/router routes))

(defn on-navigate [new-match]
  (when new-match
    (dispatch [:routing/navigated new-match])))

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfe/start! router on-navigate {:use-fragment false}))