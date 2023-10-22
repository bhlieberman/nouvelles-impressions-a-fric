(ns nia.scenes.scroll-scene
  #_{:clj-kondo/ignore [:unused-referred-var :unused-namespace]}
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [reagent.core :as r]
            [nia.views.cantos.one.parens-one :refer [parens]]
            [nia.views.cantos.one.parens-two :refer [parens-two]]
            [nia.views.cantos.one.parens-three :refer [parens-three]]
            [nia.views.cantos.one.parens-four :refer [parens-four]]
            [nia.views.parens-scroll :refer [parens-scroll]]))

(def current-view (r/atom :thesis))
#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn navigate [level] (reset! current-view level))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene scroll
  [parens-scroll {:children [:div "hello"]
                  :depth (r/atom 1)}])

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene scroll-w-child
  :params current-view
  [store]
  [parens-scroll {:depth (r/atom 3)
                  :children [parens-four]}])