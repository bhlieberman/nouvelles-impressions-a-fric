(ns nia.events.core
  (:require [goog.functions :as gfn]
            [nia.config.app-db :refer [app-db]]
            [nia.events.routing] 
            [re-frame.core :as rf :refer [debug dispatch-sync inject-cofx reg-event-db reg-event-fx]] 
            [day8.re-frame.http-fx]))

(reg-event-fx
 :app/initialize
 [(inject-cofx :local-storage)]
 (fn [{:keys [local-storage]} _]
   (let [{:keys [user-history history-loc]} local-storage] 
     {:db app-db
      :fx [[:dispatch [:routing/push-state user-history history-loc]]] 
      #_#_:fx (into []
                    (for [url (keys (get app-db :images))]
                      [:dispatch [:azure/get-blob url]]))})))

(reg-event-db
 :poem/change-current-footnote
 [debug]
 (fn [db [_ canto footnote]]
   (assoc db :current-footnote (get-in db [:cantos/footnotes canto footnote]))))

(defn init-module! []
  (js/console.log "initializing events ns")
  (dispatch-sync [:app/initialize]))

(defonce init! (gfn/once init-module!))

(init!)