(ns nia.scenes.thesis2-scene
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [nia.views.cantos.two.thesis :refer [thesis]]
            [nia.views.cantos.two.parens-one :refer [parens]]
            [nia.views.cantos.two.parens-two :refer [parens-two]]
            [nia.views.cantos.two.parens-three :refer [parens-three]]
            [nia.views.cantos.two.parens-four :refer [parens-four]]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene thesis2-scene
  [thesis])

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene parens1-scene
  [parens])

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene parens2-scene
  [parens-two])

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene parens3-scene
  [parens-three])

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene parens4-scene
  [parens-four])