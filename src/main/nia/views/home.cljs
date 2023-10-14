(ns nia.views.home
  (:require [clojure.string :as str]
            [re-com.core :refer [at box v-box p]]
            [shadow.resource :refer [inline]]))

(defn preface []
  (let [preface-text (inline "preface.txt")]
    [v-box
     :src (at)
     :children [[box :child
                 [:b.m-2.display-4 "New Impressions of Africa, Cantos I, II, and IV"]]
                [box :child
                 (into [:div]
                       (for [line (str/split-lines preface-text)]
                         [p line]))]]]))