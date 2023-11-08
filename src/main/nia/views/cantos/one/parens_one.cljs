(ns nia.views.cantos.one.parens-one
  (:require [re-com.core :refer [at h-box hyperlink p v-box]]
            [re-frame.core :refer [dispatch]]))

(defn parens []
  [h-box
   :src (at)
   :width "400px"
   :align-self :center
   :justify :start
   :children [[v-box 
               :max-width "200px"
               :children
               [[p "Just like the occupant, in a tall building,"]
                [p "Of a bright apartment giving onto the top landing, knows"]
                [p "- A humble photographer he, well-skilled in"
                 [hyperlink {:on-click #(dispatch [:routing/push-state :nia.routing.canto/one {:location :two}])
                             :class "block m-2"
                             :style {:display :inline-block}
                             :label " painting out"}]]
                [p "Spots and wrinkles by subtle means"]
                [p "- Which buttons to press to make the lift ascend;"]]]]])