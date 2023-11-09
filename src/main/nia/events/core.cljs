(ns nia.events.core
  (:require [goog.functions :as gfn]
            [nia.config.app-db :refer [app-db]]
            [nia.events.routing]
            [nia.routing :as rt]
            [re-frame.core :as rf :refer [debug dispatch-sync inject-cofx reg-event-db reg-event-fx]]
            [reitit.frontend :as rfe]
            [day8.re-frame.http-fx]))

(reg-event-fx
 :app/initialize
 [(inject-cofx :local-storage)]
 (fn [{:keys [local-storage]} _]
   (let [{:keys [user-history]} local-storage
         match (rfe/match-by-name! rt/router user-history {:location :two})]
     (js/console.log match)
     {:db app-db
      #_#_:fx [[:dispatch [:routing/push-state (:user-history local-storage) {:location :three}]]] 
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