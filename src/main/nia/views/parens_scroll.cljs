(ns nia.views.parens-scroll
  (:require [reitit.frontend.easy :as rfe]))

(def colors {1 :danger
             2 :warning
             3 :info
             4 :success
             5 :primary})

(def parens-route {0 :nia.routing.canto.one/thesis
                   1 :nia.routing.canto.one/one
                   2 :nia.routing.canto.one/two
                   3 :nia.routing.canto.one/three
                   4 :nia.routing.canto.one/four
                   5 :nia.routing.canto.one/five})

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
                   ;; eventually :id will be canto
                   (rfe/push-state (get parens-route @depth) {:id 1})))}
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
                   ;; eventually :id will be canto
                   (rfe/push-state (get parens-route @depth) {:id 1})))}
    (doall (for [i (range 1 6)
                 :let [classname (if (> i @depth)
                                   "text-muted "
                                   "")]]
             [:b {:key (str i "-right")
                  :class (some->> (get colors i)
                                  name
                                  (str classname "text-"))} ")"]))]])

(comment
  ;; figure out how to make this dynamically
  ;; match so it works on all cantos
  (rfe/push-state :nia.routing.canto.one/four {:id 1})
  (rfe/push-state :nia.routing.canto.one/test {:par-num 3
                                               :id 1})
  ;; pure JS tings
  (js/history.pushState #js {:parens 3} nil "")
  (.-state js/history))