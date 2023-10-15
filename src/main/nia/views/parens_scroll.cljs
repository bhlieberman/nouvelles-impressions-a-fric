(ns nia.views.parens-scroll
  (:require [reagent.core :as r]))

(def colors {1 :danger
             2 :warning
             3 :secondary
             4 :success
             5 :primary})

(defn parens-scroll []
  (let [depth (r/atom 1)]
    (fn []
      [:div.d-flex
       [:div
        {:class "m-3 display-4 border"
         :on-click (fn [] 
                     (when (>= @depth 1) (swap! depth dec)))}
        (doall (for [i (reverse (range 1 6))
               :let [classname (if (> i @depth)
                                 "text-muted "
                                 "")]]
           [:b {:class (some->> (get colors i :muted)
                                name
                                (str classname "text-"))} "("]))]
       [:div
        {:class "m-3 display-4 border"
         :on-click (fn []
                     (when (< @depth 5) (swap! depth inc)))}
        (doall (for [i (range 1 6)
               :let [classname (if (> i @depth)
                                 "text-muted "
                                 "")]]
           [:b {:class (some->> (get colors i)
                                name
                                (str classname "text-"))} ")"]))]])))