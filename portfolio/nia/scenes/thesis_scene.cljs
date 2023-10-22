(ns nia.scenes.thesis-scene
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [nia.views.cantos.one.thesis :refer [thesis]]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene thesis-scene
  [thesis])