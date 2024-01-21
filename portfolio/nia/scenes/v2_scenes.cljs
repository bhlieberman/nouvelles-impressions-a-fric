(ns nia.scenes.v2-scenes
  (:require
   ["framer-motion" :refer [motion]]
   [portfolio.reagent-18 :refer-macros [defscene]]))

(def circle (.-circle motion))

(def svg (.-svg motion))

(def variants {:active {:backgroundColor "#000"},
               :inactive {:backgroundColor "#fff" 
                          :transition {:duration 2}}})

(defscene canto-i []
  [:> svg {:view-box "0 0 50 50"
           :xmlns "http://www.w3.org/2000/svg"}
   [:> circle
    {:while-hover {:stroke "black"}
     :while-tap {:stroke "black"}
     :cx "25"
     :cy "25"
     :r "5" 
     #_#_:variants variants}]])

(defscene cantos []
  [:svg {:view-box "0 0 100 100"
         :xmlns "http://www.w3.org/2000/svg"}
   [:circle
    {:cx "50%"
     :cy "50%"
     :stroke "red"
     :on-click #(js/console.log "going to canto I")
     :fill :none
     :stroke-width "10%"
     :r "35%"}
    [:animate
     {:attribute-name "r"
      :begin "0s"
      :dur "2s"
      :repeat-count :indefinite
      :from "35%"
      :to "0%"}]
    [:animate
     {:attribute-name "fill"
      :begin "0s"
      :dur "2s"
      :repeat-count :indefinite
      :from :white
      :to :red}]]
   #_#_#_[:circle
          {:cx "50%"
           :cy "50%"
           :stroke "blue"
           :fill :none
           :stroke-width "10%"
           :r "25%"}
          [:animate
           {:attribute-name "r"
            :begin "0s"
            :dur "2s"
            :repeat-count 1
            :from "25%"
            :to "35%"}]
          [:animate
           {:attribute-name "fill"
            :begin "0s"
            :dur "2s"
            :repeat-count 1
            :from :blue
            :to :blue}]]
       [:circle
        {:cx "50%"
         :cy "50%"
         :stroke "yellow"
         :fill :none
         :stroke-width "10%"
         :r "15%"}
        [:animate
         {:attribute-name "r"
          :begin "0s"
          :dur "2s"
          :repeat-count 1
          :from "15%"
          :to "35%"}]
        [:animate
         {:attribute-name "fill"
          :begin "0s"
          :dur "2s"
          :repeat-count 1
          :from :yellow
          :to :yellow}]]
     [:circle
      {:cx "50%"
       :cy "50%"
       :stroke "green"
       :fill :none
       :stroke-width "10%"
       :r "5%"}
      [:animate
       {:attribute-name "r"
        :begin "0s"
        :dur "2s"
        :repeat-count 1
        :from "5%"
        :to "35%"}]
      [:animate
       {:attribute-name "fill"
        :begin "0s"
        :dur "2s"
        :repeat-count 1
        :from :green
        :to :green}]]])