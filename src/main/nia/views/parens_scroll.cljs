(ns nia.views.parens-scroll
  (:require [re-com.core :refer [at box h-box title]]
            [re-frame.core :refer [dispatch subscribe]]))

(def colors {0 :muted
             1 :danger
             2 :warning
             3 :info
             4 :success
             5 :primary})

(defn parens-scroll [{:keys [children canto]}]
  (let [parens (subscribe [:poem/parens-loc])
        depth @(subscribe [:poem/parens-depth])]
    [h-box
     :margin "25px 0px"
     :children
     [[box
       :src (at)
       :attr {:on-click (fn []
                          (when (>= depth 1)
                            (dispatch [:poem/update-parens-depth dec]) 
                            (dispatch [:routing/push-state canto {:location @parens}])))}
       :child
       [h-box
        :align-self :center
        :margin "0px 25px"
        :children
        (into []
              (for [i (reverse (range 1 6))
                    :let [classname (if (> i depth) "text-muted " "")]]
                [title
                 :level :level1
                 :label "("
                 :class (some->> (get colors i)
                                 name
                                 (str classname "text-"))]))]]
      children
      [box
       :src (at)
       :attr {:on-click (fn []
                          (when (<= 0 depth 4)
                            (dispatch [:poem/update-parens-depth inc]) 
                            (dispatch [:routing/push-state canto {:location @parens}])))}
       :child
       [h-box
        :align-self :center
        :margin "0px 25px"
        :children
        (into [] (for [i (range 1 6)
                       :let [classname (if (> i depth) "text-muted " "")]]
                   [title
                    :level :level1
                    :label ")"
                    :class (some->> (get colors i)
                                    name
                                    (str classname "text-"))]))]]]]))