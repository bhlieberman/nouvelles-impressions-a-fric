(ns nia.views.cantos.four.thesis
  (:require [re-com.core :refer [hyperlink p title v-box]]
            [re-frame.core :refer [dispatch]]))

(defn thesis []
  [v-box
   :margin "25px 0px"
   :children
   [[v-box
     :align-self :center
     :children
     [[title {:level :level2
              :label "Canto IV"
              :style {:align-self :center}}]
      [title {:level :level3 :style {:align-self :center} :label
              "The Gardens of Rosetta Seen from A Dahabiah"}]
      [title {:level :level3
              :style {:align-self :center
                      :margin "10px 0px 10px 0px"}
              :label [:i "Outskirts of Cairo"]}]

      [p "Skimming along the Nile I see two banks going past covered"]
      [p "With flowers, birds' wings, flashes of light, lush green plants,"]
      [p "One of which would suffice for twenty of our "
       [hyperlink {:label "salons"
                   :on-click #(dispatch [:routing/push-state :nia.routing.canto/four {:location :one}])}]]
      [p "With its opaque foliage, lightly coloured stripes and fruits."]
      [:hr]]]]])