(ns nia.views.maps
  (:require [goog.dom :as gdom]
            [reagent.core :as r] 
            [re-frame.core :refer [dispatch]]))

(defn gmap-inner []
  (let [{:keys [lat lng]} (r/props (r/current-component))]
    (r/create-class {:reagent-render
                     (fn [] [:div#map 
                             [:div#map-canvas {:style {:height "400px"}}]])
                     :component-did-mount
                     (fn [_]
                       (let [canvas (gdom/getElement "map-canvas")]
                         (dispatch [:config/load-google-maps {:canvas canvas
                                                              :lat lat
                                                              :lng lng
                                                              :zoom 13}])))})))

(defn gmap-outer []
  (let [pos {:lat 31.4
             :lng 31.72}]
    [gmap-inner pos]))