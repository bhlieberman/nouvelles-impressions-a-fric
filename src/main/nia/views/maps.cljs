(ns nia.views.maps
  (:require [re-frame.core :refer [subscribe]]
            ["@react-google-maps/api" :refer [GoogleMap]]))

(defn react-google-map [center]
  (let [coords @(subscribe [:config.maps/coords center])]
    [:> GoogleMap
     {:mapContainerStyle {:height "400px"
                          :width "400px"}
      :center coords
      :zoom 13
      :onLoad (fn [^js map] (js/console.log (.-center map)))}]))