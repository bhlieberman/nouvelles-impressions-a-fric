(ns nia.views.cantos.four.parens-two
  (:require [nia.views.vutils :refer [collapsed]]
            [re-com.core :refer [v-box p hyperlink]]
            [re-frame.core :refer [dispatch subscribe]]))

(defn parens-two []
  (let [show? @(subscribe [:show-collapsed?])
        collapse? (partial collapsed show?)]
    [v-box
    :margin "14px"
    :children
    [[p "Wondering whether it's through cowardice"]
     (collapse? [p {:class :text-info} "(((Strange forces, whatever one says or does about them"]
                [p {:class :text-info} "Which determine that retaliation is unwise,"]
                [p {:class :text-info} "And give a bow for an eye and a smile for a tooth;)))"])
     [p "That - " [hyperlink {:label "when shamefully and blatantly insulted "
                              :class "text-info"
                              :on-click #(dispatch [:routing/push-state :nia.routing.canto/four {:location :three}])}] " -"]
     [p "He habitually turns the other cheek to those who slap him in the face,"]
     [p "Or whether he is cleverly fooling them by appearing to play along;"]]]))