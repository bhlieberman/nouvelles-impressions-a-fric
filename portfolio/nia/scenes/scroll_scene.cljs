(ns nia.scenes.scroll-scene
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [reagent.core :as r]
            [nia.views.cantos.one.parens-one :refer [parens]]
            [nia.views.parens-scroll :refer [parens-scroll]]))

(def current-view (r/atom :thesis))
(defn navigate [level] (reset! current-view level))

(defscene scroll
  [parens-scroll {:children [:div "hello"]
                  :depth (r/atom 1)}])

(defscene scroll-w-child
  :params current-view
  [store]
  [parens-scroll {:depth (r/atom 0)
                  :children [parens {:navigate navigate}]}])