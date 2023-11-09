(ns nia.events.routing
  (:require [akiroz.re-frame.storage :refer [reg-co-fx!]]
            [re-frame.core :as rf :refer [inject-cofx reg-event-fx reg-event-db reg-fx]]
            [reitit.frontend.easy :as rfe]
            [reitit.frontend.controllers :as rfc]))

;; not at all clear to me why this works??
(reg-co-fx! :user-history {:fx :local-storage
                           :cofx :local-storage})

(reg-co-fx! :history-loc {})

(reg-event-fx
 :routing/navigated
 [(inject-cofx :local-storage)]
 (fn [{:keys [db local-storage]} [_ {:keys [data path-params] :as new-match}]]
   (let [old-match (:app.routing/current-route db)
         controllers (rfc/apply-controllers (:controllers old-match) new-match)
         new-match-w-controllers (assoc new-match :controllers controllers)]
     {:db (assoc db
                 :app.routing/current-route new-match-w-controllers
                 :app.routing/location path-params)
      :local-storage (assoc local-storage
                            :user-history (:name data)
                            :history-loc path-params)})))

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