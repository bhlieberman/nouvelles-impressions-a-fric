(ns nia.views.cantos.four.parens-three
  (:require [nia.views.vutils :refer [collapsible toggle]]
            [re-com.core :refer [hyperlink p v-box]]
            [re-frame.core :refer [dispatch]]
            [reagent.core :as r]))

(defn nested [show?]
  (collapsible p @show? [p [:b.text-success "(((("] "whose nights are restless"]
               "Ever since he saw a friend's name on the roll of honour,"
               "And who celebrated in fine style"
               "When, as famous abroad as he was in France,"
               "A comrade - apparently foolishly -"
               [p "Was seen to change his rosette for a tie" [:b.text-success "))))"]]))

(defn parens-three []
  (let [show? (r/atom false)]
    [v-box 
    :margin "10px 0px"
    :children 
    [[p "Can one not get used to anything? two days after shearing"]
     [p "The harassed sheep no longer feels the chill;"]
     [p "If he can laugh, sing, whistle, earn rewards through his antics,"]
     [p "The parrot quickly gets used to the chain"]
     [p "- Like an oak tree he knows how to survive to old age"]
     [p "Since he only gets to eat by drawing attention to himself -"]
     [p "Which holds him fast to his perch even until death;"]
     [p "The jealous man "]
     [nested show?]
     [p 
      [hyperlink {:label "The astronomer"
                  :on-click #(dispatch [:routing/push-state :nia.routing.canto/four {:location :four}])}]]
     [p "Gets used to the vastness of space"]
     [p "Where light always runs in a straight line;"]
     [p "The dumb man to his slate, irritating to whiten;"]
     [toggle show?]]]))