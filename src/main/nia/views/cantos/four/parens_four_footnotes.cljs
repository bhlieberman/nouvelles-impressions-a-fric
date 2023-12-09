(ns nia.views.cantos.four.parens-four-footnotes
  (:require [clojure.string :as str] 
            [re-com.core :refer [modal-panel p v-box]]
            [re-frame.core :refer [subscribe]]))

(defn modal [props]
  ;; later I will use markdown? 
  (let [footnote @(subscribe [:poem/display-current-footnote])]
    [modal-panel
     :backdrop-on-click #(reset! (:showing? props) false)
     :child
     [v-box
      :children
      (into []
            (for [line (str/split-lines footnote)]
              [p line]))]]))