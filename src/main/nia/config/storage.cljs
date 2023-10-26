(ns nia.config.storage
  (:require [re-frame.core :refer [dispatch inject-cofx reg-cofx reg-event-db reg-event-fx reg-fx]]
            [shadow.cljs.modern :refer [js-await]]
            ["@azure/storage-blob" :refer [BlobServiceClient]]))

(goog-define sas-url "")

(reg-cofx
 :blob-service-client
 (fn [cofx]
   (assoc cofx :blob-service-client (BlobServiceClient. (str sas-url "?sp=r&st=2023-10-26T23:44:46Z&se=2023-10-27T07:44:46Z&spr=https&sv=2022-11-02&sr=c&sig=WfrPWmYY8cyra2TBvXRXVJlwJxKOtP4VtQfhmlZCtD4%3D")))))

(reg-event-db
 :images/create-url 
 (fn [db [_ url]]
   (assoc db :image/url url)))

(reg-event-fx
 :config.storage/load-blob-client
 [(inject-cofx :blob-service-client)]
 (fn [{:keys [^js blob-service-client db]} _]
   (let [^js container-client (.getContainerClient blob-service-client "nia")]
     {:db (assoc db :blob-client container-client)})))

(reg-event-fx
 :storage/get-new-url
 (fn [{:keys [db]} [_ url]]
   (let [blob-client (:blob-client db)]
     {:update-image-url [blob-client url]})))

(reg-fx
 :update-image-url
 (fn [[^js client img-name]]
   (try (let [^js blob-client (.getBlobClient client img-name)]
          (js-await [^js blob (.download blob-client)]
                    (js-await [^js body (.-blobBody blob)]
                              (let [^js obj-url (js/URL.createObjectURL body)]
                                (dispatch [:images/create-url obj-url])))))
        (catch js/Error e
          (js/console.error e)))))