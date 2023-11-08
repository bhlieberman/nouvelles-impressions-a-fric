(ns nia.events.routing
  (:require [nia.routing :refer [router]]
            [re-frame.core :as rf :refer [debug reg-event-fx reg-event-db reg-fx]]
            [reitit.frontend :refer [match-by-name]]
            [reitit.frontend.easy :as rfe]
            [reitit.frontend.controllers :as rfc]))

(reg-event-db
 :routing/navigated 
 (fn [db [_ new-match]]
   (let [old-match (:app.routing/current-route db)
         controllers (rfc/apply-controllers (:controllers old-match) new-match)]
     (assoc db :app.routing/current-route (assoc new-match :controllers controllers)))))

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