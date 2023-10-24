(ns nia.views.cantos.four.parens-one
  (:require [re-com.core :refer [hyperlink p v-box]]
            [re-frame.core :refer [dispatch]]))

(defn parens []
  [v-box
   :margin "10px 0px"
   :children
   [[p "Sweet salons where as soon as "
     [hyperlink {:label "one says goodbye"
                 :on-click #(dispatch [:routing/push-state :nia.routing.canto.four/two {:id 4}])}]]
    [p "To one guest, another is at the door;"]]])