(ns nia.events.maps
  (:require [goog.object :as gobj]
            [nia.config.maps :refer [api-key]]
            [re-frame.core :refer [debug dispatch reg-event-db reg-event-fx reg-fx]]
            [shadow.cljs.modern :refer [js-await]]
            ["@googlemaps/js-api-loader" :refer [Loader]]))

(reg-event-db
 :config/save-map
 (fn [db [_ map]]
   (assoc db :config.geo/map map)))

(reg-event-fx
 :map/update-map
 [debug]
 (fn [{:keys [db]} [_ canvas lat-lng]]
   (let [Map (get db :config.geo/map)
         current-view? (:map/current-view db)]
     (if current-view?
       {:set-center [current-view? lat-lng]}
       {:db (assoc db :map/current-view (Map. canvas (clj->js {:center lat-lng
                                                               :zoom 13})))}))))

(reg-fx
 :set-center
 (fn [[^js map lat-lng]]
   (.setCenter map lat-lng)))

(reg-event-db
 :maps/set-current-center
 (fn [db [_ new-center]]
   (assoc db :config.maps/current-center new-center)))

(reg-event-fx
 :config/load-google-maps
 (fn [_ _]
   {:google-maps nil}))

(reg-fx
 :google-maps
 (fn [_]
   (js-await [_ (try (.load (Loader. #js {:apiKey api-key
                                          :version "weekly"}))
                     (catch js/Error e
                       (throw (ex-info "failed to load JS Maps API" {:cause e}))))]
             (js-await [lib (js/google.maps.importLibrary "maps")]
                       (dispatch [:config/save-map (gobj/get lib "Map")])))))