(ns nia.scenes.collapsible-scenes
  (:require [nia.views.vutils :refer [collapsible]]
            [portfolio.reagent-18 :refer-macros [defscene]] 
            [reagent.core :as r]
            [re-com.core :refer [p]]))

(defscene toggle []
  (let [on-off (r/atom true)]
    (fn []
      [:div.w-25
      [:input.btn.rounded.p-2.w-50
       {:type :button
        :class (if @on-off "bg-primary" "bg-muted border")
        :default-value (if @on-off "On" "Off")
        :on-click #(swap! on-off not)}]])))

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