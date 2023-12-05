(ns nia.events.core
  (:require [goog.functions :as gfn]
            [nia.config.app-db :refer [app-db]]
            [nia.events.routing] 
            [re-frame.core :as rf :refer [debug dispatch-sync inject-cofx
                                          path reg-event-db reg-event-fx]] 
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

(reg-event-db
 :poem/update-parens-depth 
 [(path :poem/parens-depth)]
 (fn [depth [_ f]]
   (f depth)))

(reg-event-fx
 :poem/parens-routing
 #_[debug]
 (fn [{:keys [db]} [_ route params new-depth]]
   {:db (assoc db :poem/parens-depth new-depth)
    :push-state [route params]}))

(defn init-module! []
  (js/console.log "initializing events ns")
  (dispatch-sync [:app/initialize]))

(defonce init! (gfn/once init-module!))

(init!)