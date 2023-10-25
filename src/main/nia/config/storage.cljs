(ns nia.config.storage
  (:require [re-frame.core :refer [dispatch]]
            [shadow.cljs.modern :refer [js-await]]
            ["@azure/storage-blob" :refer [BlobServiceClient]]))

(def client (BlobServiceClient. "https://roussel.blob.core.windows.net?sv=2022-11-02&ss=b&srt=o&sp=rlactfx&se=2023-10-26T05:25:22Z&st=2023-10-25T21:25:22Z&spr=https&sig=9ElYLsdt45ciUG4U2pc8wtzdo%2Fvvk4WI17HgboU3W9s%3D"))

(defn get-pic []
  (let [container-client (.getContainerClient client "nia")
        blob-client (.getBlobClient container-client "nia-one.JPEG")]
    (try (js-await [^js blob (.download blob-client)]
                   (js-await [body (.-blobBody blob)]
                             (let [obj-url (js/URL.createObjectURL body)]
                               (dispatch [:images/create-url obj-url]))))
         (catch js/Error e
           (js/console.error e)))))