(ns nia.views.cantos.one.parens-three
  (:require [re-com.core :refer [box h-box hyperlink scroller v-box]]
            [reitit.frontend.easy :as rfe]))

(defn parens-three []
  (fn []
    [:div {:style {:display :flex
                  :flex-direction :column}}
    [h-box
     :align-self :center
     :style {:display :flex}
     :children [[box
                 :child
                 [scroller
                  :height "300px"
                  :class "m-3"
                  :child [:div
                          [:p "When any individual, obsessed with his own ego,"]
                          [:p "Stiffens and strikes a conventionally aggressive pose,"]
                          [hyperlink {:on-click #(rfe/navigate :nia.routing.canto.one/four {:path-params {:id 1}}) 
                                      :label "- Wondering,"}]
                          [:p "for with every breath he moves slightly,"]
                          [:p "If on the plate, beneath the red light,"]
                          [:p "In the developing fluid, he will come out blurred -"]
                          [:p "He hopes to show off his social standing or his good points;"]
                          [:p "Because he expects deference from others"]
                          [:p "The challenged swordsman poses in a fencing shirt"]
                          [:p "As if ready to deal with anyone who crosses him;"]
                          [:p "Pen in hand, his eye turned heavenwards, the hack poet"]
                          [:p "Who - hoping against hope to make his fortune by it -"]
                          [:p "Knows every rhyming combination in the dictionary by heart;"]
                          [:p "The wealthy lady, her bust decorated by an ornate"]
                          [:p "Jewel, like a cork in search of a bottle;"]
                          [:p "Above all, the Eskimo, the ghost of the pole,"]
                          [:p "Who has always avoided close examination by covering-up;"]
                          [:p "Violin under his chin, the eminent virtuoso"]
                          [:p "Who offers to the old world a taste of the New;"]
                          [:p "At his easel, the superior nobleman of Apelle,"]
                          [:p "Whose name is well-known, standing in the middle of a chapel;"]
                          [:p "Racquet in hand, in clean white, without shirt or waistcoat,"]
                          [:p "The king of tennis who has contempt for the net;"]
                          [:p "All dressed up, the lazy follower of the hunt,"]
                          [:p "Blowing a fanfare from the saddle;"]
                          [:p "The noted barrister, as if his post at the bar"]
                          [:p "Is enviable, putting the executioner out of a job;"]
                          [:p "The successful pianist at the keyboard, whose"]
                          [:p "Fourth is the strongest and most energetic when trilling;"]
                          [:p "Like an eccentric, talking in the accents of a son of John"]
                          [:p "Bull to a horse-rider in the ring, the clown."]
                          [:p "The great musician, as if composing,"]
                          [:p "Writing a pause-mark over the final bar;"]
                          [:p "Cool under his thin ample shirt with its big dots"]
                          [:p "The jockey for whom a hundred pounds is a heavy weight;"]]]]]]]))