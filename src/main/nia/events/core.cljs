(ns nia.events.core
  (:require [goog.functions :as gfn]
            [nia.config.app-db :refer [app-db]]
            [nia.events.routing]
            [nia.events.search]
            [re-frame.core :as rf :refer [dispatch-sync inject-cofx reg-event-db reg-event-fx]]
            [day8.re-frame.http-fx]))

(reg-event-fx
 :app/initialize
 [(inject-cofx :local-storage)]
 (fn [{:keys [local-storage]} _]
   (let [{:keys [user-history history-loc]} local-storage]
     {:db app-db
      :fx [#_[:dispatch [:routing/push-state user-history history-loc]]
           #_(into []
                   (for [url (keys (get app-db :images))]
                     [:dispatch [:azure/get-blob url]]))
           [:dispatch [:search/create-builder]]]})))

(reg-event-db
 :poem/change-current-footnote 
 (fn [db [_ canto footnote]]
   (assoc db :current-footnote (get-in db [:cantos/footnotes canto footnote]))))

(reg-event-fx
 :poem/parens-routing 
 (fn [{:keys [db]} [_ route params new-depth]]
   (if new-depth
     {:db (assoc db :poem/parens-depth new-depth)
      :push-state [route params]}
     {:push-state [route params]})))

(defn init-module! []
  (dispatch-sync [:app/initialize]))

(defonce init! (gfn/once init-module!))

(init!)