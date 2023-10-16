(ns nia.scenes.preface-scene
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [nia.views.home :refer [preface introduction]]))

(defscene preface-scene
  [preface])

(defscene intro-scene
  [introduction])