(ns nia.scenes.canto4-scenes
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [nia.views.cantos.four.thesis :as four-thesis]
            [nia.views.cantos.four.parens-one :as four-one]
            [nia.views.cantos.four.parens-two :as four-two]
            [nia.views.cantos.four.parens-three :as four-three]
            [nia.views.cantos.four.parens-four :as four-four]
            [nia.views.cantos.four.parens-five :as four-five]))

(defscene thesis-scene
  [four-thesis/thesis])

(defscene parens-one
  [four-one/parens])

(defscene parens-two
  [four-two/parens-two])

(defscene parens-three
  [four-three/parens-three])

(defscene parens-four
  [four-four/parens-four])

(defscene parens-five
  [four-five/parens-five])