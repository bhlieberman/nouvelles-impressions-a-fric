(ns nia.views.cantos.four.parens-one
  (:require [re-com.core :refer [hyperlink p v-box]]
            [reitit.frontend.easy :as rfe]))

(defn parens []
  [v-box
   :margin "10px 0px"
   :children
   [[p "Sweet salons where as soon as "
     [hyperlink {:label "one says goodbye"
                 :on-click #(rfe/navigate :nia.routing.canto.four/two {:id 4})}]]
    [p "To one guest, another is at the door;"]]])