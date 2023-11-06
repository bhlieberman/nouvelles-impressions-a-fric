(ns nia.events.storage
  (:require [nia.config.storage :refer [sas-url sas-token]]
            [re-frame.alpha :refer [reg-flow]]
            [re-frame.core :refer [dispatch inject-cofx reg-cofx reg-event-db reg-event-fx reg-fx]]
            [shadow.cljs.modern :refer [js-await]]
            ["@azure/storage-blob" :refer [BlobServiceClient]]))

(reg-flow
 {:id ::blob-flow
  :inputs {:image-url [:image/url]
           :blob-client [:blob-client]}
  :output (fn get-new-image [_ {:keys [image-url ^js blob-client]}]
            (let [^js client (.getBlobClient blob-client image-url)
                  url (atom nil)]
              (js-await [^js blob (.download client)]
                        (js-await [^js body (.-blobBody blob)]
                                  (let [^js obj-url (js/URL.createObjectURL body)]
                                    (reset! url obj-url))))
              url))
  :path [:canto :one :image]})

(reg-cofx
 :blob-service-client
 (fn [cofx]
   (assoc cofx :blob-service-client (BlobServiceClient. (str sas-url "?" sas-token)))))

(reg-event-db
 :images/create-url
 (fn [db [_ url]]
   (assoc db :image/url url)))

(reg-event-fx
 :config.storage/load-blob-client
 [(inject-cofx :blob-service-client)]
 (fn [{:keys [^js blob-service-client db]} _]
   (let [^js container-client (.getContainerClient blob-service-client "nia")]
     {:db (assoc db :blob-client container-client)
      :fx [[:dispatch [:storage/get-new-url "snowman.jpeg"]]]})))

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