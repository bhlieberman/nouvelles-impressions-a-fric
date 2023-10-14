(ns nia.portfolio
  (:require [portfolio.ui :as ui]
            [nia.scenes.scroll-scene]))

(defn init []
  (ui/start!
   {:config
    {:css-paths
     ["/assets/css/material-design-iconic-font.min.css"
      "/assets/css/re-com.css"]
     :background/options [{:id :light
                           :title "Light"
                           :value {:background/background-color "#fff"
                                   :background/body-class "light"}}
                          {:id :dark
                           :title "Dark"
                           :value {:background/background-color "#282828"
                                   :background/body-class "dark"}}]

     :background/default-option-id :light

     :grid/options [{:title "8 x 8px"
                     :value {:grid/offset 0
                             :grid/size 8
                             :grid/group-size 8}}
                    {:title "No grid"
                     :value {:grid/size 0}}]}}))

(init)