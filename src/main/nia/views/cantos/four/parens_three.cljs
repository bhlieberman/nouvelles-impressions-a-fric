(ns nia.views.cantos.four.parens-three
  (:require [re-com.core :refer [hyperlink p v-box]]
            [re-frame.core :refer [dispatch subscribe]]))

(defn parens-three []
  (let [show? @(subscribe [:show-collapsed?])]
    [v-box
     :margin "14px"
     :children
     [[p "Can one not get used to anything? two days after shearing"]
      [p "The harassed sheep no longer feels the chill;"]
      [p "If he can laugh, sing, whistle, earn rewards through his antics,"]
      [p "The parrot quickly gets used to the chain"]
      [p "- Like an oak tree he knows how to survive to old age"]
      [p "Since he only gets to eat by drawing attention to himself -"]
      [p "Which holds him fast to his perch even until death;"]
      [p "The jealous man "]
      (when show?
        [p {:class :text-success} "((((whose nights are restless"])
      (when show?
        [p {:class :text-success} "Ever since he saw a friend's name on the roll of honour,"])
      (when show?
        [p {:class :text-success} "And who celebrated in fine style"])
      (when show?
        [p {:class :text-success} "When, as famous abroad as he was in France,"])
      (when show?
        [p {:class :text-success} "A comrade - apparently foolishly -"])
      (when show?
        [p {:class :text-success} "Was seen to change his rosette for a tie))))"])
      [p
       [hyperlink {:label "The astronomer"
                   :class "text-success"
                   :on-click #(dispatch [:routing/push-state :nia.routing.canto/four {:location :four}])}]]
      [p "Gets used to the vastness of space"]
      [p "Where light always runs in a straight line;"]
      [p "The dumb man to his slate, irritating to whiten;"]]]))