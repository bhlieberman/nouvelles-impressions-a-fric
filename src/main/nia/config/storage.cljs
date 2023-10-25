(ns nia.config.storage
  (:require [re-frame.core :refer [dispatch]]
            [shadow.cljs.modern :refer [js-await]]
            ["@azure/storage-blob" :refer [BlobServiceClient]]))

(goog-define sas-url "")

(def client (BlobServiceClient. sas-url))

(defn get-pic []
  (let [container-client (.getContainerClient client "nia")
        blob-client (.getBlobClient container-client "nia-one.JPEG")]
    (try (js-await [^js blob (.download blob-client)]
                   (js-await [body (.-blobBody blob)]
                             (let [obj-url (js/URL.createObjectURL body)]
                               (dispatch [:images/create-url obj-url]))))
         (catch js/Error e
           (js/console.error e)))))