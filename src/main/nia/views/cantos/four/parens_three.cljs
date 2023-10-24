(ns nia.views.cantos.four.parens-three
  (:require [re-com.core :refer [hyperlink p v-box]]
            [re-frame.core :refer [dispatch]]))

(defn parens-three []
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
    [p "The jealous man " [:b.text-success "(((("] "whose nights are restless"]
    [p "Ever since he saw a friend's name on the roll of honour,"]
    [p "And who celebrated in fine style"]
    [p "When, as famous abroad as he was in France,"]
    [p "A comrade - apparently foolishly -"]
    [p "Was seen to change his rosette for a tie" [:b.text-success "))))"]]
    [p "Gets used to the idea that others are being preferred;"]
    [p 
     [hyperlink {:label "The astronomer"
                 :on-click #(dispatch [:routing/push-state :nia.routing.canto.four/four {:id 4}])}]]
    [p "Gets used to the vastness of space"]
    [p "Where light always runs in a straight line;"]
    [p "The dumb man to his slate, irritating to whiten;"]]])