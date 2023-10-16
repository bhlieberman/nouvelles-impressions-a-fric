(ns nia.views.home
  (:require [clojure.string :as str]
            [re-com.core :refer [at hyperlink hyperlink-href p scroller title v-box]]
            [reitit.frontend.easy :as rfe]
            [shadow.resource :refer [inline]]))

(defn preface []
  (let [[fst snd thd] (str/split-lines (inline "preface.txt"))]
    [v-box
     :src (at)
     :justify :center
     :align :center
     :children
     [[title
       :level :level2
       :label [:b.m-2 "New Impressions of Africa, Cantos I, II, and IV"]]
      [p fst]
      [p snd]
      [p thd]]]))

(defn introduction []
  (let [intro-text (str/split-lines (inline "introduction.txt"))]
    [v-box
     :src (at)
     :justify :center
     :align :center
     :children
     [[scroller
       :src (at)
       :height "300px"
       :child
       [v-box
        :justify :center
        :align :center
        :children
        (into [[title
                :level :level2
                :label [:div.m-2 {:style {:display :flex
                                          :flex-direction :column
                                          :align-items :center}}
                        [:p "Nouvelles Impressions d'Afrique"]
                        [:p "(New Impressions of Africa)"]
                        [:p "by Raymond Roussel (1877-1933)"]
                        [:p "translated, introduced and, " [hyperlink {:label "prefaced"
                                                          :on-click #(rfe/navigate :nia.routing/home)}]
                         " by " [hyperlink-href {:label "Andrew Hugill"
                                                :href "https://andrewhugill.com/"}]]]]]
              (for [line intro-text]
                [p line]))]]]]))