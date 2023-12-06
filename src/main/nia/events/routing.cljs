(ns nia.events.routing
  (:require [akiroz.re-frame.storage :refer [reg-co-fx!]] 
            [re-frame.core :as rf :refer [debug inject-cofx path
                                          reg-event-fx reg-event-db reg-fx
                                          trim-v]]
            [reitit.frontend.easy :as rfe]
            [reitit.frontend.controllers :as rfc]))

;; not at all clear to me why this works??
(reg-co-fx! :user-history {:fx :local-storage
                           :cofx :local-storage})

(reg-co-fx! :history-loc {})

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
   {:fx [[:dispatch [:poem/parens-routing route params (condp = (:location params)
                                                         :thesis 0
                                                         :one 1
                                                         :two 2
                                                         :three 3
                                                         :four 4
                                                         :five 5
                                                         0)]]]}))

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