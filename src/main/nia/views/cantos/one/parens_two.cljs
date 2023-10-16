(ns nia.views.cantos.one.parens-two
  (:require [re-com.core :refer [hyperlink v-box h-box box]]
            [reitit.frontend.easy :as rfe]))

(defn parens-two []
  [h-box
   :width "750px"
   :align-self :center
   :style {:display :flex
           :flex-direction :row}
   :children
   [[box
     :child [:div
             [:p "To be able to re-touch! as when, "
              [hyperlink {:label "wearing her jewellery"
                          :on-click #(rfe/navigate :nia.routing.canto.one/three {:path-params {:id 1}})}]]
             [:p "And caught in a family snap, an aged beauty\n"]
             [:p "Not wishing to show any wrinkles"]
             [:p "Is changed from mother into sister on the negative;"]]]]])