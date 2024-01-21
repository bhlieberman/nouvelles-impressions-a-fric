(ns nia.views.router
  (:require [re-frame.core :refer [subscribe]]
            [re-com.core :refer [h-box]]
            [nia.views.navbar :refer [navbar]]
            [nia.views.cantos.one.parent :as one]
            [nia.views.cantos.two.parent :as two]
            [nia.views.cantos.four.parent :as four] 
            [nia.views.home :refer [introduction]]))

(defn router []
  (let [route-name @(subscribe [:routing/route-name])
        location @(subscribe [:get-loc])]
    [navbar
     {:children
      [h-box
       :align :center
       :justify :center
       :children
       [(case route-name
          :nia.routing/home [introduction]
          :nia.routing.canto/one [one/parent location]
          :nia.routing.canto/two [two/parent location]
          :nia.routing.canto/four [four/parent location]
          #_#_:nia.routing.images/home [images/show-image]
          [introduction])]]}]))