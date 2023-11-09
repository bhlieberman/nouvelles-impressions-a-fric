(ns nia.events.routing
  (:require [akiroz.re-frame.storage :refer [reg-co-fx!]]
            [re-frame.core :as rf :refer [inject-cofx reg-event-fx reg-event-db reg-fx]]
            [reitit.frontend.easy :as rfe]
            [reitit.frontend.controllers :as rfc]))

;; not at all clear to me why this works??
(reg-co-fx! "user.history" {:fx :local-storage
                            :cofx :local-storage})

(reg-event-fx
 :routing/navigated
 [(inject-cofx :local-storage)]
 (fn [{:keys [db local-storage]} [_ new-match]]
   (let [old-match (:app.routing/current-route db)
         controllers (rfc/apply-controllers (:controllers old-match) new-match)] 
     {:db (assoc db :app.routing/current-route (assoc new-match :controllers controllers))
      :local-storage (assoc local-storage :user-history (-> new-match :data :name))})))

(reg-event-fx
 :routing/push-state
 (fn [_ [_ route params]]
   {:push-state [route params]}))

(reg-fx
 :push-state
 (fn [[route params]]
   (if params
     (rfe/push-state route params)
     (rfe/push-state route))))

(reg-event-db
 :routing/traversal-type
 (fn [db [_ breadth-or-depth?]]
   (assoc db :poem/traversal-type breadth-or-depth?)))