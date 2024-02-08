(ns nia.views.parens-scroll
  (:require ["framer-motion" :refer [motion]]
            [reagent-mui.material.button :refer [button]]
            [re-com.core :refer [h-box title]]
            [re-frame.core :refer [dispatch subscribe]]))

(def colors {0 :muted
             1 :danger
             2 :warning
             3 :info
             4 :success
             5 :primary})

(defn parens-scroll [{:keys [children canto]}]
  (let [depth @(subscribe [:poem/parens-depth])
        parens {0 :thesis 1 :one 2 :two 3 :three 4 :four 5 :five}]
    [h-box 
     :margin "25px 0px"
     :style {:height "750px"} 
     :align :center 
     :children
     [[button
       {:component (.-div motion)
        :variant :contained
        :color :primary
        :while-hover {:background-color "rgba(128,128,128,0.1)"
                      :border-radius "1rem"}
        :style {:height "100%"
                :display :flex
                :align-items :center
                :margin-right "10px"
                :justify-content :center
                :border-radius "1rem"
                :background-color "rgba(0,0,0,0)"}
        :on-click (fn []
                    (when (>= depth 1)
                      (let [new-depth (dec depth)]
                        (dispatch [:poem/parens-routing canto {:location (get parens new-depth)} new-depth]))))}
       [:div
        {:style {:display :flex
                 :padding "2px"
                 :margin-left "10px"
                 :margin-right "10px"}}
        (doall
         (for [i (reverse (range 1 6))
               :let [classname (if (> i depth) "text-muted " "")]]
           [title
            :level :level1
            :style {:align-self :center}
            :label "("
            :class (some->> (get colors i)
                            name
                            (str classname "text-"))]))]]
      children
      [button 
       {:component (.-div motion)
        :variant :contained
        :color :primary
        :while-hover {:background-color "rgba(128,128,128,0.1)"
                      :border-radius "1rem"}
        :style {:height "100%"
                :display :flex
                :align-items :center
                :align-self :center
                :justify-content :center
                :border-radius "1rem"
                :background-color "rgba(0,0,0,0)"}
        :on-click (fn []
                    (when (<= 0 depth 4)
                      (let [new-depth (inc depth)]
                        (dispatch [:poem/parens-routing canto {:location (get parens new-depth)} new-depth]))))}
       [:div
        {:style {:display :flex
                 :margin-left "10px"
                 :margin-right "10px"}}
        (doall
         (for [i (range 1 6)
               :let [classname (if (> i depth) "text-muted " "")]]
           [title
            :level :level1
            :style {:align-self :center}
            :label ")"
            :class (some->> (get colors i)
                            name
                            (str classname "text-"))]))]]]]))