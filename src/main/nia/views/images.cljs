(ns nia.views.images
  (:require [re-frame.core :refer [subscribe]]))

(defn show-image []
  (let [url @(subscribe [:image/url])]
    [:img {:src url}]))