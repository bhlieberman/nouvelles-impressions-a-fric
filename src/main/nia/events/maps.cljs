(ns nia.events.maps
  (:require [goog.object :as gobj]
            [nia.config.maps :refer [api-key]]
            [re-frame.core :refer [dispatch reg-event-db reg-event-fx reg-fx]]
            [shadow.cljs.modern :refer [js-await]]
            ["@googlemaps/js-api-loader" :refer [Loader]]))

(reg-event-db
 :config/save-map
 (fn [db [_ map]]
   (assoc db :config.geo/map map)))

(reg-event-db
 :maps/set-current-center
 (fn [db [_ new-center]]
   (let [new-coords (get-in db [:config.maps/coords new-center] 
                            (throw (ex-info "no mappable location" {})))]
     (-> db
         (assoc :config.maps/current-center new-coords)
         (update :config.geo/map #(.setCenter %1 %2) new-coords)))))

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
                         (dispatch [:config/save-map 
                                    (Map. canvas (clj->js {:center {:lat lat
                                                                    :lng lng}
                                                           :zoom zoom}))]))))))