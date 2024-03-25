(ns nia.events.routing
  (:require 
   [re-frame.core :as rf :refer [inject-cofx reg-event-fx reg-event-db reg-fx]]
   [reitit.frontend.easy :as rfe]
   [reitit.frontend.controllers :as rfc]))

(reg-event-fx
 :routing/navigated
 [(inject-cofx :local-storage)]
 (fn [{:keys [db _local-storage]} [_ {:keys [_data path-params] :as new-match}]]
   (let [old-match (:app.routing/current-route db)
         controllers (rfc/apply-controllers (:controllers old-match) new-match)
         new-match-w-controllers (assoc new-match :controllers controllers)]
     {:db (assoc db
                 :app.routing/current-route new-match-w-controllers
                 :app.routing/location path-params)
      #_#_:local-storage (assoc local-storage
                                :user-history (:name data)
                                :history-loc path-params)})))

(reg-event-fx
 :routing/push-state
 (fn [_ [_ route params]]
   (if params
     (let [loc (get {:thesis 0 :one 1
                     :two 2 :three 3
                     :four 4 :five 5} (:location params))]
       {:fx [[:dispatch [:poem/parens-routing route params loc]]]})
     {:fx [[:dispatch [:poem/parens-routing route params]]]})))

(reg-fx
 :push-state
 (fn [[route params]]
   (if params
     (rfe/push-state route params)
     (rfe/push-state route))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(reg-event-db
 :routing/traversal-type
 (fn [db [_ breadth-or-depth?]]
   (assoc db :poem/traversal-type breadth-or-depth?)))