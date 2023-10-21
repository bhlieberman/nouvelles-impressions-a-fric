(ns nia.scenes.thesis2-scene
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [nia.views.cantos.two.thesis :refer [thesis]]
            [nia.views.cantos.two.parens-one :refer [parens]]
            [nia.views.cantos.two.parens-two :refer [parens-two]]
            [nia.views.cantos.two.parens-three :refer [parens-three]]
            [nia.views.cantos.two.parens-four :refer [parens-four]]))

(defscene thesis2-scene
  [thesis])

(defscene parens1-scene
  [parens])

(defscene parens2-scene
  [parens-two])

(defscene parens3-scene
  [parens-three])

(defscene parens4-scene
  [parens-four])