(ns nia.views.cantos.one.parens-five
  (:require [re-com.core :refer [box h-box hyperlink]]))

(defn parens-five [{:keys [navigate]}]
  [:div {:style {:display :flex
                 :flex-direction :column}}
   [h-box
    :style {:display :flex}
    :align-self :center
    :children [[box 
                :style {:display :flex
                        :align-items :center}
                :child [:b.text-primary.display-4.m-3 "((((("]]
               [box :child [:div
                            [:a {:name "fn1ret"} "sometimes"]
                            [:p "a mere spark"]
                            [:p "Can, firemen climbing ladders all over it,"]
                            [:a {:href "#nia1par5.fn1"} "Reduce a peaceful building to a crater"]
                            [:hr]
                            [:a {:name "nia1par5.fn1"} "1. "]
                            [:p "What one needs, when one has to put out a building on fire,"]
                            [:p "Is a swift giant - when a building is burning,"]
                            [:p "Could a confirmed life-saver, dragging his feet,"]
                            [:p "Stand back and coyly watch the frantic activity from a distance? -"]
                            [:p "Who is prepared like Gulliver to overcome his prudishness,"]
                            [:p "Relishing the opportunity"
                             [hyperlink {:label "to relieve himself"}] "."]]]
               [box 
                :style {:display :flex
                        :align-items :center}
                :child [:b.text-primary.display-4.m-3 ")))))"]]]]])