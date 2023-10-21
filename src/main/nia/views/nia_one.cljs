(ns nia.views.nia-one
  (:require [reagent.core :as r]
            [nia.routing :refer [current-route]]
            [nia.views.navbar :refer [navbar]]
            [nia.views.parens-scroll :refer [parens-scroll]]))

(def parens-depth {"one" 1
                   "two" 2
                   "three" 3
                   "four" 4
                   "five" 5})

(defn nia-one []
  [navbar
   {:children
    [:div.m-3 {:style {:display :flex
                       :align-items :center
                       :justify-content :center}}
     (when @current-route
       (let [{view :view
              route-name :name} (:data @current-route)]
         (if-let [parens (some #{(name route-name)} #{"one" "two" "three" "four" "five"})]
           (let [depth (get parens-depth parens)]
             [parens-scroll {:children [view]
                             :depth (r/atom depth)}])
           [view])))]}])