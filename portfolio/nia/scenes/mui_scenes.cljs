(ns nia.scenes.mui-scenes
  (:require ["@mui/material/styles" :refer [alpha]]
            [portfolio.reagent-18 :refer-macros [defscene]]
            [reagent.core :as r]
            [reagent-mui.material.drawer :refer [drawer]]
            [reagent-mui.material.button :refer [button]]
            [reagent-mui.material.box :refer [box]]
            [reagent-mui.material.list :refer [list]]
            [reagent-mui.material.list-item :refer [list-item]]
            [reagent-mui.material.list-item-button :refer [list-item-button]]
            [reagent-mui.material.list-item-text :refer [list-item-text]]
            [reagent-mui.material.list-item-icon :refer [list-item-icon]]
            [reagent-mui.styles :refer [styled]]))

(defn toggle-drawer [open?]
  (fn [event]
    (let [e (and (= (.-type event) "keydown")
                 (or (= (.-key event) "Tab")
                     (= (.-key event) "Shift")))]
      (when-not e
        (swap! open? not)))))

(def search
  (styled "div" {:position :relative
                 #_#_#_#_#_#_:border-radius (.. theme -shape -borderRadius)
                         :background-color (alpha (.. theme -palette -common -white) 0.15)
                     "&:hover" {:background-color (alpha (.. theme -palette -common -white) 0.25)}
                 :margin-left 0
                 :width "100%"}))

(defscene search-component []
  [search])

(defn list-component []
  [box {:width 250
        :role "presentation"
        :on-click (toggle-drawer false)
        :on-key-down (toggle-drawer false)}
   [list
    (for [canto ["Canto I" "Canto II" "Canto IV"]]
      [list-item {:key canto
                  :disabled-padding true}
       [list-item-button
        [list-item-icon]
        [list-item-text {:primary canto}]]])]])

(defscene drawer-component []
  (let [open? (r/atom false)]
    (fn []
      [:<> {:key "left"}
       [button {:on-click (toggle-drawer open?)} "Open"]
       [drawer
        {:anchor "left"
         :open @open?
         :on-close (toggle-drawer open?)}
        [list-component "left"]]])))