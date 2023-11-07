(ns nia.events.storage
  #_{:clj-kondo/ignore [:unused-namespace]}
  (:require [ajax.core :as ajax]
            [ajax.protocols :as p]
            #_[nia.config.storage :refer [sas-url sas-token]] 
            [re-frame.core :refer [path reg-event-fx reg-fx]]))

(reg-event-fx
 :azure/get-blob
 (fn [_ [_ url]]
   {:http-xhrio {:method :get
                 :uri (str "https://roussel.blob.core.windows.net/nia/" url "?sp=racwdli&st=2023-11-07T15:23:34Z&se=2023-11-07T23:23:34Z&spr=https&sv=2022-11-02&sr=c&sig=NHSzLS%2FkfMAl%2BirtEJN0jmkGKTp5mUC8ZnNkL%2F%2BthFQ%3D")
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
 [(path :images/urls)]
 (fn [urls _]
   {:revoke-urls urls}))

(reg-fx
 :revoke-urls
 (fn [urls]
   (doseq [url urls]
     (when goog.DEBUG (js/console.log "revoking object URL from resource: " url))
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