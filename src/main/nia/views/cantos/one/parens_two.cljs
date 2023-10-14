(ns nia.views.cantos.one.parens-two
  (:require [re-com.core :refer [hyperlink v-box h-box box]]))

(defn parens-two [{:keys [navigate]}]
  [h-box
   :width "750px"
   :align-self :center
   :style {:display :flex
           :flex-direction :row}
   :children
   [[box
     :style {:display :flex
             :align-items :center}
     :child [:b.text-warning.display-2.m-3 "(("]]
    [box
     :child [:div
             [:p "To be able to re-touch! as when, "
              [hyperlink {:label "wearing her jewellery"
                          :on-click #(navigate :parens-three)}]]
             [:p "And caught in a family snap, an aged beauty\n"]
             [:p "Not wishing to show any wrinkles"]
             [:p "Is changed from mother into sister on the negative;"]]]
    [box
     :style {:display :flex
             :align-items :center}
     :child [:b.text-warning.display-2.m-3 "))"]]
]])