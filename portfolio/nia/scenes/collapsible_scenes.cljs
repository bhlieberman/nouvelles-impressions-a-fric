(ns nia.scenes.collapsible-scenes
  (:require [nia.views.vutils :refer [collapsible]]
            [portfolio.reagent-18 :refer-macros [defscene]]
            [reagent.core :as r]
            [re-com.core :refer [p]]))

(defscene collapse-parens []
  (let [show? (r/atom true)]
    [:div
     [p "The jealous man "]
     (collapsible p @show?
                  [p [:b.text-success "(((("] "whose nights are restless"]
                  "Ever since he saw a friend's name on the roll of honour,"
                  "And who celebrated in fine style"
                  "When, as famous abroad as he was in France,"
                  "A comrade - apparently foolishly -"
                  [p "Was seen to change his rosette for a tie" [:b.text-success "))))"]])]))