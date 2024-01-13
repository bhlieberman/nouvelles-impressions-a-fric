(ns nia.scenes.mui-scenes
  (:require ["@mui/material/styles" :refer [alpha]]
            [portfolio.reagent-18 :refer-macros [defscene]]
            [reagent.core :as r]
            [reagent-mui.material.drawer :refer [drawer]]
            [reagent-mui.material.button :refer [button]]
            [reagent-mui.material.box :refer [box]]
            [reagent-mui.icons.search :refer [search]]
            [reagent-mui.material.input-base :refer [input-base]]
            [reagent-mui.material.list :refer [list]]
            [reagent-mui.material.list-item :refer [list-item]]
            [reagent-mui.material.list-item-button :refer [list-item-button]]
            [reagent-mui.material.list-item-text :refer [list-item-text]]
            [reagent-mui.material.list-item-icon :refer [list-item-icon]]
            [reagent-mui.styles :refer [styled]]
            [shadow.cljs.modern :refer [js-template]]))

(defn toggle-drawer [open?]
  (fn [event]
    (let [e (and (= (.-type event) "keydown")
                 (or (= (.-key event) "Tab")
                     (= (.-key event) "Shift")))]
      (when-not e
        (swap! open? not)))))

(def search-comp
  (styled "div" (fn [{:keys [theme]}]
                  {:position :relative
                   :border-radius (-> theme :shape :border-radius)
                   :background-color (alpha (-> theme :palette :common :white) 0.15)
                   "&:hover" {:background-color (alpha (-> theme :palette :common :white) 0.25)}
                   :margin-left 0
                   :width "100%"})))

(def search-icon-wrapper
  (styled "div" (fn [{:keys [theme]}]
                  {:padding ((:spacing theme) 0 2)
                   :height "100%"
                   :position "absolute"
                   :pointer-events "none"
                   :display "flex"
                   :align-items "center"
                   :justify-content "center"})))

(def styled-input-base
  (styled input-base (fn [{:keys [theme]}]
                       {:color "inherit"
                        :width "100%"
                        "& .MuiInputBase-input" {:padding ((:spacing theme) 1 1 1 0)
                                                 :padding-left (js-template "calc(1em + " ((:spacing theme) 4) ")")
                                                 :transition ((-> theme :transitions :create) "width")}})))

(defn search-component []
  [search-comp
   [search-icon-wrapper
    [search]]
   [styled-input-base {:placeholder "Search"}]])

(defn list-component []
  [box {:width 250
        :role "presentation"
        :on-click (toggle-drawer false)
        :on-key-down (toggle-drawer false)}
   [list
    [search-component]
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