(ns nia.views.cantos.one.parent
  (:require [nia.views.cantos.one.thesis :as thesis]
            [nia.views.cantos.one.parens-one :as one]
            [nia.views.cantos.one.parens-two :as two]
            [nia.views.cantos.one.parens-three :as three]
            [nia.views.cantos.one.parens-four :as four]
            [nia.views.cantos.one.parens-five :as five]
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
    :canto :nia.routing.canto/one}])