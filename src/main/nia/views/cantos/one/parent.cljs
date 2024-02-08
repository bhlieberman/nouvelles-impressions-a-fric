(ns nia.views.cantos.one.parent
  (:require [nia.views.cantos.one.thesis :as thesis]
            [nia.views.cantos.one.parens-one :as one]
            [nia.views.cantos.one.parens-two :as two]
            [nia.views.cantos.one.parens-three :as three]
            [nia.views.cantos.one.parens-four :as four]
            [nia.views.cantos.one.parens-five :as five]
            [nia.views.parens-scroll :as p]))

(defn parent [which]
  [p/parens-scroll
   {:children (case which
                "thesis" [thesis/thesis]
                "one" [one/parens]
                "two" [two/parens-two]
                "three" [three/parens-three]
                "four" [four/parens-four]
                "five" [five/parens-five]
                [thesis/thesis]) 
    :canto :nia.routing.canto/one}])