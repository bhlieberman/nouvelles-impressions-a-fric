(ns nia.events.storage
  #_{:clj-kondo/ignore [:unused-namespace]}
  (:require [ajax.core :as ajax]
            [ajax.protocols :as p]
            [nia.config.storage :refer [sas-url sas-token]] 
            [re-frame.core :refer [reg-event-fx reg-fx]]))

(reg-event-fx
 :azure/get-blob
 (fn [_ [_ resource-name]]
   {:http-xhrio {:method :get
                 :uri (str sas-url "/" resource-name "?" sas-token)
                 :timeout 8000
                 :response-format {:content-type "image/jpeg"
                                   :description "JPEG image"
                                   :read p/-body
                                   :type :blob}
                 :on-success [:blob/create-obj-url]
                 :on-failure [:report-azure-error]}}))

(reg-event-fx
 :blob/create-obj-url
 (fn [{:keys [db]} [_ response]]
   {:db (update db :images/urls conj (js/URL.createObjectURL response))
    :log response}))

(reg-event-fx
 :images/revoke-obj-urls 
 (fn [{:keys [db]} _]
   {:revoke-urls (get db :images/urls)}))

(reg-fx
 :revoke-urls
 (fn [urls]
   (doseq [url urls] 
     (js/URL.revokeObjectURL url))))

(reg-fx
 :log
 (fn [resp]
   (js/console.log resp)))

(reg-event-fx
 :report-azure-error
 (fn [_ [_ error]]
   {:azure error}))

(reg-fx
 :azure
 (fn [err]
   (js/console.error err)))