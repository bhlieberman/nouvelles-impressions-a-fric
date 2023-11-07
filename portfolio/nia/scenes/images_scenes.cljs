(ns nia.scenes.images-scenes
  (:require [portfolio.reagent-18 :refer-macros [defscene]] 
            ["react-bootstrap/Container" :as Container]
            ["react-bootstrap/Carousel" :as Carousel]
            ["react-bootstrap/Image$default" :as Image]))

(defn show-images []
  [:> Container {:fluid true}
   (into [:> Carousel {:controls true :style {:width "600px"}}]
         (for [url (repeat 10 "https://placehold.co/600x400/000000/FFF")]
           [:> (.-Item Carousel)
            [:> Image {:src url :fluid true}]
            [:> (.-Caption Carousel)
             [:p "An image from the original publication of Nouvelles Impressions d'Afrique"]]]))])

(defscene imgs
  [:div [show-images]])