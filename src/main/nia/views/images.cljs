(ns nia.views.images
  (:require [nia.config.storage :refer [get-pic]]
            [re-frame.core :refer [subscribe]]))

(defn show-image []
  (let [url @(subscribe [:image/url])]
    [:img {:src url}]))