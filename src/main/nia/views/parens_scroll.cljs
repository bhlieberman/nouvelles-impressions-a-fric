(ns nia.views.parens-scroll
  (:require [reagent.core :as r]))

(defn parens-scroll []
  (let [left (r/atom 0)
        right (r/atom 5)]
    (fn []
      [:div.d-flex.justify-content-around
       [:button.btn.btn-primary.m-3 {:on-click (fn []
                                                 (swap! left inc)
                                                 (swap! right dec))}
        [:b (repeat @left "(")]]
       [:button.btn.btn-primary.m-3 {:on-click (fn []
                                                 (swap! right inc)
                                                 (swap! left dec))}
        [:b (repeat @right ")")]]])))