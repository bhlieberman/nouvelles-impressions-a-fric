(ns nia.views.images
  (:require [reagent.core :as r]
            [re-com.core :refer [p]]
            [re-frame.core :refer [dispatch subscribe]]
            ["react-bootstrap/Container" :as Container]
            ["react-bootstrap/Carousel" :as Carousel]
            ["react-bootstrap/CarouselCaption" :as CarouselCaption]
            ["react-bootstrap/CarouselItem" :as CarouselItem]
            ["react-bootstrap/Image$default" :as Image]))


(defn show-image []
  (r/create-class
   {:reagent-render
    (fn [_]
      (let [urls @(subscribe [:images])]
        [:> Container {:fluid true}
         (into [:> Carousel {:controls true :style {:width "400px"
                                                    :background-color "bisque"}}]
               (for [url urls]
                 [:> CarouselItem
                  [:> Image {:src url :fluid true}]
                  [:> CarouselCaption
                   [p {:style {:color "black"}} "An image from the original publication of Nouvelles Impressions d'Afrique"]]]))]))
    :component-did-mount (fn [_] (dispatch [:images/revoke-obj-urls]))}))