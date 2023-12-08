(ns nia.views.text-search
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]))

(defn text-search []
  (let [value (r/atom nil)]
    (fn []
      [:div.ms-auto.d-flex
       [:label.lead.m-1
        {:for :text-search}
        "Keyword search"]
       [:input.form-control.focus-ring.py-1.px-2.text-decoration-none.border-rounded-2
        {:type :search
         :id :text-search
         :placeholder "Shall I compare thee..."
         :on-key-up (fn [e] (when (= (.-code e) "Space")
                              (js/console.log @value)))
         :on-change (fn [e] (let [current (.. e -target -value)]
                              (reset! value current)))
         #_#_:on-focus #(js/console.log "focused")}]])))