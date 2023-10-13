(ns nia.views.cantos.one.parens-one
  (:require [re-com.core :refer [v-box hyperlink]]))

(defn parens [{:keys [navigate]}]
  [:div {:style {:display :flex
                 :flex-direction :column}}
   [v-box 
    :align-self :center
    :children [[:span "(Just like the occupant, in a tall building,"]
                     [:span "Of a bright apartment giving onto the top landing, knows"]
                     [:span "- A humble photographer he, well-skilled in"
                      [hyperlink {:on-click #(navigate :parens-two) 
                                  :label " painting out\nSpots and wrinkles by subtle means "}]]
                     [:span "-"]
                     [:span "Which buttons to press to make the lift ascend;)"]
                     [:hr]
                     [hyperlink {:on-click #(navigate :thesis) 
                                 :label "Click here to return to thesis"}]]]])