(ns nia.views.cantos.one.parens-five
  (:require [reagent.core :as r]
            [re-com.core :refer [h-box hyperlink modal-panel
                                 p v-box]]))

(defn parens-five []
  (let [footnote-modal-showing? (r/atom false)]
    (fn []
      [h-box 
       :align-self :center
       :justify :center
       :margin "14px"
       :children 
       [[v-box 
         :justify :center
         :children
         [[p "sometimes"]
          [p "a mere spark"]
          [p "Can, firemen climbing ladders all over it,"] 
          [p [hyperlink {:on-click #(reset! footnote-modal-showing? true) 
                       :label "Reduce a peaceful building to a crater"}]]]]
        (when @footnote-modal-showing?
          [modal-panel
           :backdrop-on-click #(reset! footnote-modal-showing? false)
           :child [v-box
                   :children
                   [[p "What one needs, when one has to put out a building on fire,"]
                    [p "Is a swift giant - when a building is burning,"]
                    [p "Could a confirmed life-saver, dragging his feet,"]
                    [p "Stand back and coyly watch the frantic activity from a distance?"]
                    [p "- Who is prepared like Gulliver to overcome his prudishness,"]
                    [p "Relishing the opportunity to relieve himself."]]]])]])))