(ns nia.scenes.search-scenes
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            ["react" :refer [createRef]]
            [reagent.core :as r]))

(defscene search-scene []
  (let [value (r/atom nil)]
    [:div.container-fluid.d-flex.flex-column
     [:label.lead.m-1
      {:for :text-search}
      "Keyword search"]
     [:input.form-control.w-25.focus-ring.py-1.px-2.text-decoration-none.border-rounded-2
      {:type :search
       :id :text-search
       :placeholder "Shall I compare thee..."
       :on-key-up (fn [e] (when (= (.-code e) "Space")
                            (js/console.log @value)))
       :on-change (fn [e] (let [current (.. e -target -value)]
                            (reset! value current)))
       #_#_:on-focus #(js/console.log "focused")}]]))