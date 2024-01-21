(ns nia.views.cantos.two.parens-one
  (:require [re-com.core :refer [at h-box hyperlink p v-box]]
            [re-frame.core :refer [dispatch]]))

(defn parens []
  [v-box 
   :children
   [[h-box
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
                  [p "From a thin scarecrow, "
                   [hyperlink {:on-click #(dispatch [:routing/push-state :nia.routing.canto/two {:location :two}])
                               :class "text-warning"
                               :label " a simple cross"}]
                   " which stands"] 
                  [p "- Its posture suggesting terrible distress,"]
                  [p "Shirt on its back, felt-hat on its head -"]
                  [p "A marker of territory forbidden to birds;"]]]]]]])