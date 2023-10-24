(ns nia.views.cantos.one.thesis
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
              :label "Canto I"
              :style {:align-self :center
                      }}]
      [title {:level :level3 
              :label "Damietta"
              :style {:align-self :center}}]
      [title {:level :level3
              :style {:align-self :center
                      :margin "10px 0px"}
              :label [:i "The House in Which Saint Louis Was Imprisoned"]}]
      [p "Serious reflection, weighing it up, brings the certain"]
      [p "Realisation that there, behind that door,"]
      [p "The Saint-King was imprisoned for three months! ...Louis IXth!"]
      [p "But how can it be that this seems tangible and new"]
      [p "In this place strewn about with crumbling marvels"]
      [p "Than which there are none older under the sun!"]
      [p "Evoking, as if it were yesterday:"]
      [p "That name whose bearer, though crushed, is so proud of"] 
      [hyperlink {:label "That he knows by heart, faultlessly,"
                  :style {:margin "0px 0px 9.8px"}
                  :on-click #(dispatch [:routing/push-state :nia.routing.canto.one/one {:path-params {:id 1}}])}]
      [p "- Roots, trunks, boughs, connecting branches -"] 
      [p "His family tree; the cathedrals eroded by time;"]
      [p "Likewise the proud menhir, the first cromlech"]
      [p "The dolmen beneath which the soil is always dry."]
      [:hr]]]]])