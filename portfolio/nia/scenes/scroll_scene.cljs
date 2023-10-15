(ns nia.scenes.scroll-scene
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [reagent.core :as r]
            [nia.views.parens-scroll :refer [parens-scroll]]))

(defscene scroll
  [parens-scroll {:children [:div "hello"]
                  :depth (r/atom 1)}])