(ns nia.views.cantos.one.parens-five
  (:require [re-com.core :refer [hyperlink v-box]]))

(defn parens-five [{:keys [navigate]}]
  [:div {:style {:display :flex
                 :flex-direction :column}}
   [v-box :align-self :center
    :children [[:div 
                [:b.text-primary.display-4 "((((("]
                [:a {:name "fn1ret"} "sometimes"]
                [:p "a mere spark"]
                [:p "Can, firemen climbing ladders all over it,"]
                [:a {:href "#nia1par5.fn1"} "Reduce a peaceful building to a crater"]
                [:b.text-primary.display-4 ")))))"]] 
               [:hr]
               [:p ""]
               [hyperlink {:label "Return to thesis"
                           :on-click #(navigate :thesis)}]
               [hyperlink {:label "Return to parens-one"
                           :on-click #(navigate :parens)}]
               [hyperlink {:label "Return to parens-two"
                           :on-click #(navigate :parens-two)}]
               [hyperlink {:label "Return to parens-three"
                           :on-click #(navigate :parens-three)}]
               [hyperlink {:label "Return to parens-four"
                           :on-click #(navigate :parens-four)}]
               [:hr]
               [:a {:name "nia1par5.fn1"} "1. "]
               [:p "What one needs, when one has to put out a building on fire,"]
               [:p "Is a swift giant - when a building is burning,"]
               [:p "Could a confirmed life-saver, dragging his feet,"]
               [:p "Stand back and coyly watch the frantic activity from a distance? -"]
               [:p "Who is prepared like Gulliver to overcome his prudishness,"]
               [:p "Relishing the opportunity"
                [hyperlink {:label "to relieve himself"}] "."]]]])