(ns nia.views.cantos.one.parens-three
  (:require [re-com.core :refer [hyperlink v-box]]))

(defn parens-three [{:keys [navigate]}]
  [:div {:style {:display :flex
                 :flex-direction :column}}
   [v-box
    :align-self :center
    :children [[:span ""]
               [:span "(((When any individual, obsessed with his own ego,"]
               [:span "Stiffens and strikes a conventionally aggressive pose,"]
               [hyperlink {:on-click #(navigate :parens-four)
                           :label "- Wondering,"}]
               [:span "for with every breath he moves slightly,"]
               [:span "If on the plate, beneath the red light,"]
               [:span "In the developing fluid, he will come out blurred -"]
               [:span "He hopes to show off his social standing or his good points;"]
               [:span "Because he expects deference from others"]
               [:span "The challenged swordsman poses in a fencing shirt"]
               [:span "As if ready to deal with anyone who crosses him;"]
               [:span "Pen in hand, his eye turned heavenwards, the hack poet"]
               [:span "Who - hoping against hope to make his fortune by it -"]
               [:span "Knows every rhyming combination in the dictionary by heart;"]
               [:span "The wealthy lady, her bust decorated by an ornate"]
               [:span "Jewel, like a cork in search of a bottle;"]
               [:span "Above all, the Eskimo, the ghost of the pole,"]
               [:span "Who has always avoided close examination by covering-up;"]
               [:span "Violin under his chin, the eminent virtuoso"]
               [:span "Who offers to the old world a taste of the New;"]
               [:span "At his easel, the superior nobleman of Apelle,"]
               [:span "Whose name is well-known, standing in the middle of a chapel;"]
               [:span "Racquet in hand, in clean white, without shirt or waistcoat,"]
               [:span "The king of tennis who has contempt for the net;"]
               [:span "All dressed up, the lazy follower of the hunt,"]
               [:span "Blowing a fanfare from the saddle;"]
               [:span "The noted barrister, as if his post at the bar"]
               [:span "Is enviable, putting the executioner out of a job;"]
               [:span "The successful pianist at the keyboard, whose"]
               [:span "Fourth is the strongest and most energetic when trilling;"]
               [:span "Like an eccentric, talking in the accents of a son of John"]
               [:span "Bull to a horse-rider in the ring, the clown."]
               [:span "The great musician, as if composing,"]
               [:span "Writing a pause-mark over the final bar;"]
               [:span "Cool under his thin ample shirt with its big dots"]
               [:span "The jockey for whom a hundred pounds is a heavy weight;)))"]
               [:hr]
               [hyperlink {:label "Click here to return to thesis"
                           :on-click #(navigate :thesis)}]

               [hyperlink {:label "Click here to return to parens-one"
                           :on-click #(navigate :parens)}]
               [hyperlink {:label "Click here to return to parens-two"
                           :on-click #(navigate :parens-two)}]]]])