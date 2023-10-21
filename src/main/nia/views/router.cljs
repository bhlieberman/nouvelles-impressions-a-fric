(ns nia.views.router
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [re-com.core :refer [h-box]]
            [nia.routing :refer [current-route]]
            [nia.views.navbar :refer [navbar]]
            [nia.views.parens-scroll :refer [parens-scroll]]))

(def parens-depth {"one" 1
                   "two" 2
                   "three" 3
                   "four" 4
                   "five" 5})

(defn router []
  (let [canto (-> @current-route 
                  :path
                  (str/split #"/")
                  (nth 3 "") 
                  parse-long)] 
    [navbar
     {:children 
      [h-box
       :align :center
       :justify :center
       :children 
       [(when @current-route
          (let [{view :view
                 route-name :name} (:data @current-route)]
            (if-let [parens (some #{(name route-name)} #{"one" "two" "three" "four" "five"})]
              (let [depth (get parens-depth parens)]
                [parens-scroll {:children [view]
                                :canto canto
                                :depth (r/atom depth)}])
              [view])))]]}]))
