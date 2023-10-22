(ns nia.scenes.preface-scene
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [nia.views.home :refer [preface introduction]]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene preface-scene
  [preface])

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene intro-scene
  [introduction])