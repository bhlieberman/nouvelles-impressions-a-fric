(ns nia.views.cantos.four.parens-five
  (:require
   [reagent.core :as r]
   [re-com.core :refer [hyperlink modal-panel scroller p v-box]]))

(defn parens-five []
  (let [footnote-modal-showing? (r/atom false)]
    (fn []
      [v-box
       :margin "10px 0px"
       :children
       [[v-box
         :align-self :center
         :children
         [[p "Which makes the one chosen by it so arrogant"]
          [p "That he finds the very stars in the sky pitiful"]
          [p "Compared with the new star that burns upon his forehead"]
          [p "And dreams of becoming the maestro that whoever"]
          [p "Is a cartoonist will draw,"]
          [p "- An art born, so it is said, from those silly profiles"]
          [p "Which proffer the silhouette of a person for laughs, -"]
          [p "At whose door many a journalist will ring,"]
          [p "He who of twenty medals now has only one,"]
          [p "He who often went to bed hungry,"]
          [p "No less than the young faithful taking "
           [hyperlink {:label "the Sacred Host"
                       :on-click #(reset! footnote-modal-showing? true)}]]
          [:hr]
          (when @footnote-modal-showing?
            [modal-panel
             :backdrop-on-click #(reset! footnote-modal-showing? false)
             :child [scroller
                     :class "m-3"
                     :height "300px"
                     :child
                     [v-box
                      :children [[p "Although forbearance may be driven out from human virtues"]
                                 [p "To the same degree that Monday morning drives out the ardour of workers"]
                                 [p [:b.text-danger "("] "Having enjoyed leisure; heart and soul are elsewhere,"]
                                 [p "And gloomy is the student when he returns in October;" [:b.text-danger ")"]]
                                 [p "And the criminal is depressed by dementia,"]
                                 [p "As a light winter by the price of rock salt,"]
                                 [p "Nevertheless anger is not a universal vice;"]
                                 [p "When shunned, the peacock respects other animals;"]
                                 [p "Also the swallow, despite his skill in riding thermals;"]
                                 [p "The ram, even though he is legendary"]
                                 [p [:b.text-danger "("] "Everybody has heard of the Golden Fleece" [:b.text-danger ")"] "; the cat,"]
                                 [p "Even though he can see at night without a lantern,"]
                                 [p "Even though he can make prophecies - as can the swallow,"]
                                 [p "But with less accuracy and less famously -"]
                                 [p "Even though he can emit through his fur, like electricity,"]
                                 [p "A rumbling sound which suggests satisfaction,"]
                                 [p "Even though he gives an old maid a tranquil old age,"]
                                 [p "And he can walk silently without a carpet beneath his feet;"]
                                 [p "The wolf, even though his mate has a beautiful litter of cubs;"]
                                 [p "The ox, even though his skin makes bags for humans;"]
                                 [p "In spite of the high prices on his head, the mink;"]
                                 [p "Even though his name has been given to a fabric, the chamois."]]]]])]]]])))