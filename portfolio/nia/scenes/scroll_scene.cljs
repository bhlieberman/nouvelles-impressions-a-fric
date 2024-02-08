(ns nia.scenes.scroll-scene
  #_{:clj-kondo/ignore [:unused-referred-var :unused-namespace]}
  (:require ["framer-motion" :refer [motion]] 
            ["@mui/material/styles" :refer [alpha]]
            ["@mui/material" :refer [Button]] 
            [portfolio.reagent-18 :refer-macros [defscene]]
            [reagent.core :as r]
            [reagent-mui.material.button :refer [button]]
            [reagent-mui.styles :refer [styled]]
            [re-com.core :refer [at box h-box title]]
            [nia.views.cantos.one.parens-one :refer [parens]]
            [nia.views.cantos.one.parens-two :refer [parens-two]]
            [nia.views.cantos.one.parens-three :refer [parens-three]]
            [nia.views.cantos.one.parens-four :refer [parens-four]]))

(def colors {0 :muted
             1 :danger
             2 :warning
             3 :info
             4 :success
             5 :primary})

(def motion-button (motion Button))

(def styled-parens
  (styled button (fn [{:keys [theme]}] 
             {:border-radius (-> theme :shape :border-radius)
              :background-color (alpha (-> theme :palette :common :white) 0.15)})))

(def current-view (r/atom :thesis))
#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn navigate [level] (reset! current-view level))

(defn parens-scroll [{:keys [children canto]}]
  (let [depth (r/atom 1)
        parens {0 :thesis 1 :one 2 :two 3 :three 4 :four 5 :five}]
    (fn [{:keys [children]}]
      [h-box
       :src (at)
       :style {:display :flex
               :align-items :stretch 
               :height "500px"}
       :children
       [[button
         {:component (.-div motion)
          :while-hover {:background-color "rgba(128,128,128,0.1)"
                        :border-radius "1rem"} 
          :style {:height "100%" 
                  :display :flex
                  :align-items :center 
                  :margin-right "10px"
                  :justify-content :center 
                  :background-color "rgba(0,0,0,0)"}
          :on-click (fn []
                      (when (>= @depth 1)
                        (swap! depth dec)))}

         [:div
          {:style {:display :flex
                   :padding "2px"
                   :margin-left "10px"
                   :margin-right "10px"}}
          (doall
           (for [i (reverse (range 1 6))
                 :let [classname (if (> i @depth) "text-muted " "")]]
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
                  :justify-content :center
                  :background-color "rgba(0,0,0,0)"}
          :on-click (fn []
                      (when (<= 0 @depth 4)
                        (swap! depth inc)))} 
         [:div
          {:style {:display :flex
                   :align-self :center
                   :margin-left "10px"
                   :margin-right "10px"}}
          (doall
           (for [i (range 1 6)
                 :let [classname (if (> i @depth) "text-muted " "")]]
             [title
              :level :level1
              :style {:align-self :center}
              :label ")"
              :class (some->> (get colors i)
                              name
                              (str classname "text-"))]))]]]])))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene scroll
  [parens-scroll {:children [parens]
                  :depth (r/atom 1)}])

(defscene js-parens []
  [:div 
   [styled-parens "Hello"]])

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defscene scroll-w-child
  :params current-view
  [store]
  [parens-scroll {:depth (r/atom 3)
                  :children [parens-four]}])