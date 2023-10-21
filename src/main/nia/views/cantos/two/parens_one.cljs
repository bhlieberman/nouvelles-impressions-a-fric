(ns nia.views.cantos.two.parens-one
  (:require [re-com.core :refer [at h-box hyperlink p v-box]]
            [reitit.frontend.easy :as rfe]))

(defn parens []
  [h-box
   :src (at)
   :width "400px"
   :align-self :center
   :justify :start
   :children
   [[v-box
     :max-width "200px"
     :children [[p "Deduction from first principles is natural to mankind;"]
                [p "He extracts: from an insignificant event, like the fall of an apple,"]
                [p "A law which will consecrate him to immortality;"]
                [p "From a fable or tale, a moral;"]
                [p "From a thin scarecrow,"]
                [hyperlink {:on-click #(rfe/navigate :nia.routing.canto.two/two {:id 2})
                            :label " a simple cross"
                            :style {:display :inline-block}}]
                [p "which stands"]
                [p "- Its posture suggesting terrible distress,"]
                [p "Shirt on its back, felt-hat on its head -"]
                [p "A marker of territory forbidden to birds;"]]]]])