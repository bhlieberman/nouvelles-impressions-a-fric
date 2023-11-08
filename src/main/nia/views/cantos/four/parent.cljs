(ns nia.views.cantos.four.parent
  (:require [nia.views.cantos.four.thesis :as thesis]
            [nia.views.cantos.four.parens-one :as one]
            [nia.views.cantos.four.parens-two :as two]
            [nia.views.cantos.four.parens-three :as three]
            [nia.views.cantos.four.parens-four :as four]
            [nia.views.cantos.four.parens-five :as five]
            [nia.views.parens-scroll :as p]
            [reagent.core :as r]))

(defn parent [_which]
  (let [depth (r/atom 0)]
    (fn [which]
      [p/parens-scroll
       {:children (case which
                    "thesis" [thesis/thesis]
                    "one" [one/parens]
                    "two" [two/parens-two]
                    "three" [three/parens-three]
                    "four" [four/parens-four]
                    "five" [five/parens-five]
                    [thesis/thesis])
        :depth depth
        :canto :nia.routing.canto/four}])))