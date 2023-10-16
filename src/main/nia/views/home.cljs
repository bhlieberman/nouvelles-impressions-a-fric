(ns nia.views.home
  (:require [clojure.string :as str] 
            [re-com.core :refer [at box v-box p]] 
            [shadow.resource :refer [inline]]))

(defn preface []
  (let [[fst snd thd] (str/split-lines (inline "preface.txt"))] 
    [:div
     [:p [:b.m-2.display-4 "New Impressions of Africa, Cantos I, II, and IV"]] 
     [:p fst]
     [:p snd]
     [:p thd]]))