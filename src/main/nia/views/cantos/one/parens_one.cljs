(ns nia.views.cantos.one.parens-one
  (:require [re-com.core :refer [at h-box v-box box hyperlink]]))

(defn parens [{:keys [navigate]}]
  [h-box
   :src (at)
   :width "750px"
   :align-self :center
   :style {:display :flex
           :flex-direction :row}
   :children [[box :child [:div
                           [:p "Just like the occupant, in a tall building,"]
                           [:p "Of a bright apartment giving onto the top landing, knows"]
                           [:p "- A humble photographer he, well-skilled in"
                            [hyperlink {:on-click #(navigate :parens-two)
                                        :class "block m-2"
                                        :style {:display :inline-block}
                                        :label " painting out\nSpots and wrinkles by subtle means "}]]
                           [:p "- Which buttons to press to make the lift ascend;"]]]]])