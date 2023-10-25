(ns nia.events.storage
  (:require [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :images/create-url
 (fn [db [_ url]]
   (assoc db :image/url url)))