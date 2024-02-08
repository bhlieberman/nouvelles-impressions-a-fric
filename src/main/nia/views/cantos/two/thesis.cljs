(ns nia.views.cantos.two.thesis
  (:require [re-com.core :refer [hyperlink v-box p title]]
            [re-frame.core :refer [dispatch subscribe]]))

(defn thesis []
  (let [show? @(subscribe [:show-collapsed?])]
    [v-box
    :margin "14px"
    :children
    [[v-box
      :align-self :center
      :children
      [[title {:level :level2
               :label "Canto II"
               :style {:align-self :center}}]
       [title {:level :level3
               :label [:i "The Battle-Field of The Pyramids"]
               :style {:align-self :center
                       :margin "10px 0px"}}]
       [p "This battlefield conjures up nothing but the memory of him"]
       [p "At the time of the overcoat - that full-length greatcoat -"]
       [p "And the little hat - "
        [hyperlink {:label "from which we can deduce"
                    :class "text-danger"
                    :on-click #(dispatch [:routing/push-state :nia.routing.canto/two {:location :one}])}]]
       [p "Intimidating rays of power emanating in all directions -"]
       (when show? [p {:class :text-danger} "(Grey overcoat, black hat the image of which irresistibly evokes"])
       (when show? [p {:class :text-danger} "The era when Kings were brought low"])
       (when show? [p {:class :text-danger} "And which historians cannot leave alone;)"])
       [p "Worn by him up to the point when, on his craggy rock,"]
       [p "It no longer exaggerated his silhouette,"]
       [p "A fact which causes one to forget for a moment, lost in meditation,"]
       [p "Egypt, its sun, its evenings, its sky."]]]]]))