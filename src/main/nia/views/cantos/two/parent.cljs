(ns nia.views.cantos.two.parent
  (:require [nia.views.cantos.two.thesis :as thesis]
            [nia.views.cantos.two.parens-one :as one]
            [nia.views.cantos.two.parens-two :as two]
            [nia.views.cantos.two.parens-three :as three]
            [nia.views.cantos.two.parens-four :as four]
            [nia.views.cantos.two.parens-five :as five]
            [nia.views.parens-scroll :as p]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe]]))

(defn parent [which depth]
  [p/parens-scroll
   {:children (case which
                "thesis" [thesis/thesis]
                "one" [one/parens]
                "two" [two/parens-two]
                "three" [three/parens-three]
                "four" [four/parens-four]
                "five" [five/parens-five]
                [thesis/thesis])
    #_#_:depth depth
    :canto :nia.routing.canto/two}])