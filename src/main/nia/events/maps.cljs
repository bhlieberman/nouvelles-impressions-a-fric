(ns nia.events.maps
  (:require [goog.object :as gobj]
            [nia.config.maps :refer [api-key]]
            [re-frame.core :refer [reg-event-fx reg-fx]]
            [shadow.cljs.modern :refer [js-await]]
            ["@googlemaps/js-api-loader" :refer [Loader]]))

(reg-event-fx
 :config/load-google-maps
 (fn [_ [_ opts]]
   {:google-maps opts}))

(reg-fx
 :google-maps
 (fn [{:keys [canvas lat lng zoom]}]
   (js-await [_ (.load (Loader. #js {:apiKey api-key
                                     :version "weekly"}))]
             (js-await [lib (js/google.maps.importLibrary "maps")]
                       (let [Map (gobj/get lib "Map")]
                         (Map. canvas (clj->js {:center {:lat lat
                                                         :lng lng}
                                                :zoom zoom})))))))