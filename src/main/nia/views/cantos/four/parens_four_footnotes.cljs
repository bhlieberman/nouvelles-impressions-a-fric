(ns nia.views.cantos.four.parens-four-footnotes
  (:require [clojure.edn :as edn] 
            [re-com.core :refer [modal-panel scroller v-box]]
            [re-frame.core :refer [subscribe]]))

(defn modal [props]
  (let [footnote @(subscribe [:poem/display-current-footnote])]
    [modal-panel
     :backdrop-on-click #(reset! (:showing? props) false) 
     :child
     [v-box 
      :children
      [[scroller
        :class "m-3"
        :height "300px" 
        :child
        [v-box
         :children
         (edn/read-string footnote)]]]]]))