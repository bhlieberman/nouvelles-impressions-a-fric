(ns nia.scenes.collapsible-scenes
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            [reagent.core :as r]
            [re-com.core :refer [p]]))

;; bootstrap's .collapse class can be used here!
(defn collapsible [show? & args]
  (into [:div]
        (for [arg args]
          (if (sequential? arg)
            (into [(first arg) (if-not show? {:class "collapse"} {})] (rest arg))
            [:span (if-not show? {:class "collapse"} {}) arg]))))

(comment)

(defscene collapse-parens []
  (let [show? (r/atom true)]
    [:div
     [p "The jealous man " #_#_[:b.text-success.collapse "(((("] "whose nights are restless"]
     (collapsible false [:b.text-success "(((("] "whose nights are restless"
                  [p "Ever since he saw a friend's name on the roll of honour,"]
                  [p "And who celebrated in fine style"]
                  [p "When, as famous abroad as he was in France,"]
                  [p "A comrade - apparently foolishly -"]
                  [p "Was seen to change his rosette for a tie" [:b.text-success "))))"]])]))