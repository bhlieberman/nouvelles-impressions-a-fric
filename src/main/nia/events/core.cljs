(ns nia.events.core
  (:require [nia.config.app-db :refer [app-db]]
            [nia.events.maps]
            [nia.events.routing] 
            [re-frame.core :as rf :refer [debug reg-event-db reg-event-fx]]))

(reg-event-fx
 :app/initialize
 (fn [_ _]
   {:db app-db
    :fx [[:dispatch [:config/load-google-maps]]
         [:dispatch [:config.storage/load-blob-client "snowman.jpeg"]]]}))

(reg-event-db
 :poem/change-current-footnote
 [debug]
 (fn [db [_ canto footnote]]
   (assoc db :current-footnote (get-in db [:cantos/footnotes canto footnote]))))