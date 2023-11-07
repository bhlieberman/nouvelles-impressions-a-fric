(ns nia.views.images
  (:require [re-com.core :refer [p]]
            [re-frame.core :refer [subscribe]]
            ["react-bootstrap/Container$default" :as Container]
            ["react-bootstrap/Carousel$default" :as Carousel]
            ["react-bootstrap/CarouselCaption$default" :as CarouselCaption]
            ["react-bootstrap/CarouselItem$default" :as CarouselItem]
            ["react-bootstrap/Image$default" :as Image]))

(defn show-image []
  (let [urls @(subscribe [:images])]
    [:> Container {:fluid true}
     (into [:> Carousel {:controls true :style {:width "400px"
                                                :background-color "bisque"}}]
           (for [url urls]
             [:> CarouselItem
              [:> Image {:src url :fluid true}]
              [:> CarouselCaption
               [p {:style {:color "black"}} "An image from the original publication of Nouvelles Impressions d'Afrique"]]]))]))