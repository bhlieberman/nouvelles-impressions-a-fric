(ns nia.views.cantos.one.parens-two
  (:require [re-com.core :refer [hyperlink v-box]]))

(defn parens-two [{:keys [navigate]}]
  [:div {:style {:display :flex
                 :flex-direction :column}}
   [v-box 
    :align-self :center
    :children [[:div [:b.text-warning.display-4 "(("] 
                [:p "To be able to re-touch! as when,"
                 [hyperlink {:label "wearing her jewellery"
                             :on-click #(navigate :parens-three)}]]
                [:p "And caught in a family snap, an aged beauty\n"]
                [:p "Not wishing to show any wrinkles"]
                [:p "Is changed from mother into sister on the negative;"]
                [:b.text-warning.display-4.text-right "))"]]
               [:hr]
               [hyperlink {:label "Return to thesis"
                           :on-click #(navigate :thesis)}] 
               [hyperlink {:label "Return to parens-one"
                           :on-click #(navigate :parens)}]]]])