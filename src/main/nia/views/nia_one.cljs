(ns nia.views.nia-one
  (:require [reagent.core :as r]
            [nia.routing :refer [current-route]]
            [nia.views.navbar :refer [navbar]]
            [nia.views.parens-scroll :refer [parens-scroll]]))

(defn nia-one []
  (let [current-view (r/atom :thesis)
        navigate  {:navigate (fn [level] (reset! current-view level))}]
    (fn []
      [navbar
       {:depth 5
        :navigate (:navigate navigate)
        :children
        [:div.m-3 {:style {:display :flex
                           :align-items :center
                           :justify-content :center}}
         ;; new routing
         (when @current-route
           (let [{view :view
                  route-name :name} (:data @current-route)]
             (if-let [parens (some #{(name route-name)} #{"one" "two" "three" "four" "five"})]
               (let [depth (get {"one" 1
                                 "two" 2
                                 "three" 3
                                 "four" 4
                                 "five" 5} parens)]
                 [parens-scroll {:children [view]
                                 :depth (r/atom depth)}])
               [view])))]}])))