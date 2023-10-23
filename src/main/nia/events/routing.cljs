(ns nia.events.routing
  (:require [nia.routing :refer [router]]
            [re-frame.core :as rf :refer [reg-event-fx reg-event-db reg-fx]]
            [reitit.frontend :refer [match-by-name]]
            [reitit.frontend.easy :as rfe]
            [reitit.frontend.controllers :as rfc]))

(reg-event-db
 :routing/navigated
 (fn [db [_ new-match]]
   (let [old-match (:current-route db)
         controllers (rfc/apply-controllers (:controllers old-match) new-match)]
     (assoc db :current-route (assoc new-match :controllers controllers)))))

(reg-event-fx
 :routing/push-state
 (fn [_ [_ & route]]
   {:push-state route}))

(reg-fx
 :push-state
 (fn [route]
   (apply rfe/push-state route)))

(reg-event-fx
 :routing/parens-click
 (fn [{:keys [db]} [_ canto depth]]
   (let [new-route (get-in db [:parens-routes canto depth])
         match (match-by-name router new-route)]
     {:fx [[:dispatch [:routing/navigated match]]]})))