(ns nia.views.nia-one
  (:require [reagent.core :as r]
            [nia.views.cantos.one.thesis :refer [thesis]]
            [nia.views.cantos.one.parens-one :refer [parens]]
            [nia.views.cantos.one.parens-two :refer [parens-two]]
            [nia.views.cantos.one.parens-three :refer [parens-three]]
            [nia.views.cantos.one.parens-four :refer [parens-four]]
            [nia.views.cantos.one.parens-five :refer [parens-five]]))

(defn nia-one []
  (let [current-view (r/atom :thesis)
        navigate {:navigate (fn [level] (reset! current-view level))}]
    (fn []
      [:div (condp = @current-view
              :thesis [thesis navigate]
              :parens [parens navigate]
              :parens-two [parens-two navigate]
              :parens-three [parens-three navigate]
              :parens-four [parens-four navigate]
              :parens-five [parens-five navigate])])))