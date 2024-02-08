(ns nia.views.cantos.four.parens-one
  (:require [re-com.core :refer [hyperlink p v-box]]
            [re-frame.core :refer [dispatch]]))

(defn parens []
  [v-box
   :margin "14px"
   :children
   [[p "Sweet salons where as soon as "
     [hyperlink {:label "one says goodbye"
                 :class "text-warning"
                 :on-click #(dispatch [:routing/push-state :nia.routing.canto/four {:location :two}])}]]
    [p "To one guest, another is at the door;"]]])