(ns nia.scenes.thesis-scene
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [nia.views.cantos.one.thesis :refer [thesis]]))

(defscene thesis-scene
  [thesis])