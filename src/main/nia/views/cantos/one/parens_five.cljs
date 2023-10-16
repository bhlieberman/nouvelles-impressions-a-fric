(ns nia.views.cantos.one.parens-five
  (:require [reagent.core :as r]
            [re-com.core :refer [box h-box hyperlink popover-anchor-wrapper
                                 popover-content-wrapper]]))

(defn parens-five []
  (let [popover-showing? (r/atom false)]
    (fn []
      [:div {:style {:display :flex
                    :flex-direction :column}}
      [h-box
       :style {:display :flex}
       :align-self :center
       :children [[box :child [:div
                               [:a {:name "fn1ret"} "sometimes"]
                               [:p "a mere spark"]
                               [:p "Can, firemen climbing ladders all over it,"]
                               [popover-anchor-wrapper
                                :showing? popover-showing? 
                                :position :below-center 
                                :popover [popover-content-wrapper 
                                          :title "Footnote 1"
                                          :width "750px"
                                          :backdrop-opacity 0.5
                                          :close-button? false
                                          :tooltip-style? true
                                          :arrow-gap 20
                                          :body "What one needs, when one has to put out a building on fire,
                                                 Is a swift giant - when a building is burning,
                                                 Could a confirmed life-saver, dragging his feet,
                                                 Stand back and coyly watch the frantic activity from a distance?
                                                 - Who is prepared like Gulliver to overcome his prudishness,
                                                 Relishing the opportunity to relieve himself."]
                                :anchor
                                [hyperlink {:on-click (fn [] (swap! popover-showing? not) nil) 
                                            :label "Reduce a peaceful building to a crater"}]]]]]]])))