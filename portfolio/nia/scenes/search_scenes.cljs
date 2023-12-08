(ns nia.scenes.search-scenes
  (:require [portfolio.reagent-18 :refer-macros [defscene]]
            ["react" :refer [createRef]]
            [reagent.core :as r]))

(defscene search-scene []
  (r/create-class
   {:constructor (fn [this props]
                   (let [input (createRef)]
                     (set! (.-ref this) input)))
    :render 
    (fn [this]
      (let [value (r/atom nil)]
       [:div.container-fluid.d-flex.flex-column
        [:label.lead
         {:for :text-search}
         "Keyword search"]
        [:input
         {:class "focus-ring py-1 px-2 text-decoration-none border rounded-2" 
          :type :search
          :id :text-search 
          :placeholder "Shall I compare thee..."
          :ref (.-ref this)
          :on-change (fn [e] (let [current (.. e -target -value)]
                               (reset! value current)))
          #_#_:on-focus #(js/console.log "focused")}]]))
    :component-did-mount 
    (fn [this] (.addEventListener (.. this -ref -current) "keyup"
                                  (fn [e] ())))}))