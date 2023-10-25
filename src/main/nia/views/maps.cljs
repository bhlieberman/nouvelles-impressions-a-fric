(ns nia.views.maps
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            ["react" :refer [createRef]]))

(defn gmap-inner [center coords]
  (r/create-class
   {:constructor (fn [this _props] 
                   (set! ^js (.-mapCanvas this) (createRef)))
    :reagent-render
    (fn [] (let [this (r/current-component)]
             [:div#map
              [:div#map-canvas {:style {:height "400px"}
                                :ref ^js (.-mapCanvas this)}]]))
    :component-did-mount
    (fn [^js this]
      (dispatch [:maps/set-current-center center])
      (dispatch [:map/update-map (clj->js (.. this -mapCanvas -current)) (clj->js coords)]))}))

(defn gmap-outer [center]
  (let [coords @(subscribe [:config.maps/coords center])
        center @(subscribe [:config.maps/current-center])] 
    [gmap-inner center coords]))