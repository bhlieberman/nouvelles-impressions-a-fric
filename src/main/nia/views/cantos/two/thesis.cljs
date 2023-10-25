(ns nia.views.cantos.two.thesis
  (:require [nia.views.maps :refer [gmap-outer]]
            [re-com.core :refer [hyperlink v-box p title]]
            [re-frame.core :refer [dispatch]]))

(defn thesis []
  [v-box
   :margin "25px 0px"
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
      [hyperlink {:label "from which we can deduce"
                  :style {:margin "0px 0px 9.8px"}
                  :on-click #(dispatch [:routing/push-state :nia.routing.canto.two/one {:path-params {:id 2}}])}]
      [p "And the little hat - "]
      [p "Intimidating rays of power emanating in all directions -"]
      [p "Grey overcoat, black hat (the image of which irresistibly evokes"]
      [p "The era when Kings were brought low"]
      [p "And which historians cannot leave alone;)"]
      [p "Worn by him up to the point when, on his craggy rock,"]
      [p "It no longer exaggerated his silhouette,"]
      [p "A fact which causes one to forget for a moment, lost in meditation,"]
      [p "Egypt, its sun, its evenings, its sky."]
      [:hr]
      [gmap-outer :pyramids]]]]])