(ns nia.events.core
  (:require [goog.functions :as fn]
            [nia.config.app-db :refer [app-db]] 
            [nia.events.routing] 
            [re-frame.core :as rf :refer [debug dispatch-sync reg-event-db reg-event-fx]]
            [day8.re-frame.http-fx]))

(reg-event-fx
 :app/initialize
 (fn [_ _]
   {:db app-db 
    :fx (into []
              (for [url (keys (get app-db :images))]
                [:dispatch [:azure/get-blob url]]))}))

(reg-event-db
 :poem/change-current-footnote
 [debug]
 (fn [db [_ canto footnote]]
   (assoc db :current-footnote (get-in db [:cantos/footnotes canto footnote]))))

(defn init-module! []
  (js/console.log "initializing events ns")
  (dispatch-sync [:app/initialize]))

(def init! (fn/once init-module!))

(init!)