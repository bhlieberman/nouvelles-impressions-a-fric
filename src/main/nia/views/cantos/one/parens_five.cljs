(ns nia.views.cantos.one.parens-five
  (:require [reagent.core :as r]
            [re-com.core :refer [h-box hyperlink popover-anchor-wrapper
                                 p popover-content-wrapper v-box]]))

(defn parens-five []
  (let [popover-showing? (r/atom false)]
    (fn []
      [h-box 
       :align-self :center
       :justify :center
       :children 
       [[v-box 
         :children
         [[p "sometimes"]
          [p "a mere spark"]
          [p "Can, firemen climbing ladders all over it,"]
          [p 
           [popover-anchor-wrapper
            :showing? popover-showing? 
            :position :below-center 
            :popover [popover-content-wrapper 
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