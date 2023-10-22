(ns nia.views.parens-scroll
  (:require [reitit.frontend.easy :as rfe]))

(def colors {1 :danger
             2 :warning
             3 :info
             4 :success
             5 :primary})

(def parens-route {1 [:nia.routing.canto.one/thesis
                      :nia.routing.canto.one/one
                      :nia.routing.canto.one/two
                      :nia.routing.canto.one/three 
                      :nia.routing.canto.one/four
                      :nia.routing.canto.one/five]
                   2 [:nia.routing.canto.two/thesis
                      :nia.routing.canto.two/one
                      :nia.routing.canto.two/two
                      :nia.routing.canto.two/three
                      :nia.routing.canto.two/four
                      :nia.routing.canto.two/five]
                   4 [:nia.routing.canto.four/thesis
                      :nia.routing.canto.four/one
                      :nia.routing.canto.four/two
                      :nia.routing.canto.four/three
                      :nia.routing.canto.four/four
                      :nia.routing.canto.four/five]})

(defn parens-scroll [{:keys [children depth canto]}]
  [:div.d-flex
   [:div
    {:style {:display :flex
             :justify-content :center
             :align-items :center}
     :class "m-3 display-4"
     :on-click (fn []
                 (when (>= @depth 1)
                   (swap! depth dec)
                   (rfe/push-state (get-in parens-route [canto @depth]) {:id canto})))}
    (doall (for [i (reverse (range 1 6))
                 :let [classname (if (> i @depth)
                                   "text-muted "
                                   "")]]
             [:b {:key (str i "-left")
                  :class (some->> (get colors i)
                                  name
                                  (str classname "text-"))} "("]))]
   children
   [:div
    {:style {:display :flex
             :justify-content :center
             :align-items :center}
     :class "m-3 display-4"
     :on-click (fn []
                 (when (<= 1 @depth 5)
                   (swap! depth inc)
                   (rfe/push-state (get-in parens-route [canto @depth]) {:id canto})))}
    (doall (for [i (range 1 6)
                 :let [classname (if (> i @depth)
                                   "text-muted "
                                   "")]]
             [:b {:key (str i "-right")
                  :class (some->> (get colors i)
                                  name
                                  (str classname "text-"))} ")"]))]])