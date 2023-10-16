(ns nia.views.cantos.one.thesis
  (:require [re-com.core :refer [hyperlink-href v-box]]
            [reitit.frontend.easy :as rfe]))

(defn thesis [{:keys [navigate]}]
  [:div {:style {:display :flex
                 :flex-direction :column}}
   [v-box
    :align-self :center
    :children
    [[:h1 "Canto I"]
     [:p "Damietta"
      [:br]
      [:i "The House in Which Saint Louis Was Imprisoned"]]
     [:p
      "Serious reflection, weighing it up, brings the certain"
      [:br]
      "Realisation that there, behind that door,"
      [:br]
      "The Saint-King was imprisoned for three months! ...Louis IXth!"
      [:br]
      "But how can it be that this seems tangible and new"
      [:br]
      "In this place strewn about with crumbling marvels"
      [:br]
      "Than which there are none older under the sun!"
      [:br]
      "Evoking, as if it were yesterday:"
      [:br]
      "That name whose bearer, though crushed, is so proud of"
      [:br]
      [:a {:href (rfe/href :nia.routing.canto.one/one {:id 1})}
       "That he knows by heart, faultlessly,"]
      "- Roots, trunks, boughs, connecting branches -"
      [:br]
      "His family tree; the cathedrals eroded by time;"
      [:br]
      "Likewise the proud menhir, the first cromlech"
      [:br]
      "The dolmen beneath which the soil is always dry."
      [:br]]
]]])