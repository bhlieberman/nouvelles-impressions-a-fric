(ns nia.views.cantos.four.parens-two
  (:require [re-com.core :refer [v-box p hyperlink]]
            [re-frame.core :refer [dispatch]]))

(defn parens-two []
  [v-box
   :margin "10px 0px"
   :children
   [[p "Wondering whether it's through cowardice"]
    [p [:b.text-info "((("] "Strange forces, whatever one says or does about them"]
    [p "Which determine that retaliation is unwise,"]
    [p "And give a bow for an eye and a smile for a tooth;" [:b.text-info ")))"]]
    [p "That " [hyperlink {:label "- when shamefully and blatantly insulted -"
                             :on-click #(dispatch [:routing/push-state :nia.routing.canto.four/three {:id 4}])}]]
    [p "He habitually turns the other cheek to those who slap him in the face,"]
    [p "Or whether he is cleverly fooling them by appearing to play along;"]]])