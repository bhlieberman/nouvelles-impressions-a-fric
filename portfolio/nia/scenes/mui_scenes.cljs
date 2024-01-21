(ns nia.scenes.mui-scenes
  (:require ["@mui/material/styles" :refer [alpha]]
            [portfolio.reagent-18 :refer-macros [defscene]]
            [reagent.core :as r]
            [reagent-mui.material.app-bar :refer [app-bar]]
            [reagent-mui.material.drawer :refer [drawer]]
            [reagent-mui.material.button :refer [button]]
            [reagent-mui.material.box :refer [box]]
            [reagent-mui.material.link :refer [link]]
            [reagent-mui.icons.search :refer [search]]
            [reagent-mui.material.icon-button :refer [icon-button]]
            [reagent-mui.material.input-base :refer [input-base]]
            [reagent-mui.material.switch :refer [switch]]
            [reagent-mui.material.form-control-label :refer [form-control-label]]
            [reagent-mui.material.list :refer [list]]
            [reagent-mui.material.list-item :refer [list-item]]
            [reagent-mui.material.list-item-button :refer [list-item-button]]
            [reagent-mui.material.list-item-text :refer [list-item-text]]
            [reagent-mui.material.list-item-icon :refer [list-item-icon]]
            [reagent-mui.icons.menu :refer [menu]]
            [reagent-mui.styles :refer [styled]]
            [reagent-mui.material.toolbar :refer [toolbar]]
            [reagent-mui.material.typography :refer [typography]]
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

(def styled-switch
  (styled form-control-label (fn [{:keys [theme]}]
                               {:display :flex
                                :justify-content :center})))

(defn search-component []
  [search-comp
   [search-icon-wrapper
    [search]]
   [styled-input-base {:placeholder "Search"}]])

(defn list-component []
  [box {:width 250
        :role "presentation"}
   [list
    [search-component]
    (for [canto ["Canto I" "Canto II" "Canto IV"]]
      [list-item {:key canto
                  :disabled-padding true}
       [list-item-button
        [list-item-icon]
        [link {:color :primary
               :on-click #(js/console.log "nav")} canto]]])]
   [styled-switch
    {:control (r/as-element [switch {:default-checked true
                                     :on-click #(js/console.log "collapsed")}])
     :label "Collapse"
     :disabled false}]])

;; don't know why this doesn't work...
(defn app-bar-component []
  (let [open-bar? (r/atom false)]
    (fn []
     [box {:sx {:display :flex}}
      [app-bar {:component "nav"}
       [toolbar
        [icon-button
         {:color :inherit
          :aria-label "open drawer"
          :edge :start
          :on-click (toggle-drawer open-bar?)
          :sx {:mr 2 :display {:sm :none}}}
         [menu]]
        [typography
         {:variant :h6
          :component :div
          :sx {:flex-grow 1
               :display {:xs :none
                         :sm :block}}}
         "NIA"]]]
      [:nav
       [drawer
        {:anchor "left"
         :open @open-bar?
         :on-close (toggle-drawer open-bar?)
         #_#_:modal-props {:keep-mounted true}
         :sx {:display {:xs :block
                        :sm :none}
              "& .MuiDrawer-paper" {:box-sizing :border-box
                                    :width 240}}}
        [list-component]]]])))

(defscene app-bar-scene []
  [app-bar-component])

(defscene drawer-component []
  (let [open? (r/atom false)]
    (fn []
      [:<> {:key "left"}
       [button {:on-click (toggle-drawer open?)} "Open"]
       [drawer
        {:anchor "left"
         :open @open?
         :on-close (toggle-drawer open?)}
        [list-component]]])))

(defn app-bar-two []
  (let [open? (r/atom false)]
    (fn []
      [app-bar
       [toolbar
        [icon-button {:on-click (toggle-drawer open?)}
         [menu]]
        [drawer
         {:anchor "left"
          :open @open?
          :on-close (toggle-drawer open?)}
         [list-component]]]])))

(defscene app-two-scene []
  [:nav
   [:ul
    [:li "NIA"]]
   [app-bar-two]])

