(ns nia.views.parens-scroll
  (:require [reitit.frontend.easy :as rfe]))

(def colors {1 :danger
             2 :warning
             3 :info
             4 :success
             5 :primary})

(def parens-route {[1 0] :nia.routing.canto.one/thesis
                   [1 1] :nia.routing.canto.one/one
                   [1 2] :nia.routing.canto.one/two
                   [1 3] :nia.routing.canto.one/three
                   [1 4] :nia.routing.canto.one/four
                   [1 5] :nia.routing.canto.one/five
                   [2 0] :nia.routing.canto.two/thesis
                   [2 1] :nia.routing.canto.two/one
                   [2 2] :nia.routing.canto.two/two
                   [2 3] :nia.routing.canto.two/three
                   [2 4] :nia.routing.canto.two/four})

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
                   (js/console.log "depth:" @depth "canto:" canto)
                   (rfe/push-state (get parens-route [canto @depth]) {:id canto})))}
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
                   (js/console.log "depth:" @depth "canto:" canto)
                   (rfe/push-state (get parens-route [canto @depth]) {:id canto})))}
    (doall (for [i (range 1 6)
                 :let [classname (if (> i @depth)
                                   "text-muted "
                                   "")]]
             [:b {:key (str i "-right")
                  :class (some->> (get colors i)
                                  name
                                  (str classname "text-"))} ")"]))]])