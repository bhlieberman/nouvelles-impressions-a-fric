(ns nia.views.navbar
  (:require ["@mui/material/styles" :refer [alpha]] 
            [reagent-mui.material.drawer :refer [drawer]] 
            [reagent-mui.material.box :refer [box]]
            [reagent-mui.material.link :refer [link]]
            [reagent-mui.icons.search :refer [search]] 
            [reagent-mui.material.input-base :refer [input-base]]
            [reagent-mui.material.switch :refer [switch]]
            [reagent-mui.material.form-control-label :refer [form-control-label]]
            [reagent-mui.material.list :refer [list]]
            [reagent-mui.material.list-item :refer [list-item]]
            [reagent-mui.material.list-item-button :refer [list-item-button]] 
            [reagent-mui.material.list-item-icon :refer [list-item-icon]] 
            [reagent-mui.styles :refer [styled]] 
            [reagent.core :as r]
            [re-com.core :refer [hyperlink]]
            [re-frame.core :refer [dispatch]]
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

;; TODO: integrate search functionality
;; into MUI form
(def styled-input-base
  (styled input-base (fn [{:keys [theme]}]
                       {:color "inherit"
                        :width "100%"
                        "& .MuiInputBase-input" {:padding ((:spacing theme) 1 1 1 0)
                                                 :padding-left (js-template "calc(1em + " ((:spacing theme) 4) ")")
                                                 :transition ((-> theme :transitions :create) "width")}})))

(def styled-switch
  (styled form-control-label (fn [{:keys [_]}]
                               {:display :flex
                                :justify-content :center})))

(defn search-component []
  [search-comp
   [search-icon-wrapper
    [search]]
   [styled-input-base {:placeholder "Search"
                       :disabled true}]])

(defn list-component []
  [box {:width 250
        :role "presentation"}
   [list
    [search-component]
    (for [route-name ["Preface" "Canto I" "Canto II" "Canto IV"]
          :let [click-handler (case route-name
                                "Preface" #(dispatch [:routing/push-state :nia.routing/home])
                                "Canto I" #(dispatch [:routing/push-state :nia.routing.canto/one {:location :thesis}])
                                "Canto II" #(dispatch [:routing/push-state :nia.routing.canto/two {:location :thesis}])
                                "Canto IV" #(dispatch [:routing/push-state :nia.routing.canto/four {:location :thesis}]))]]
      [list-item {:key route-name
                  :disabled-padding true}
       [list-item-button
        [list-item-icon]
        [link {:color :primary
               :on-click click-handler} route-name]]])]
   [styled-switch
    {:control (r/as-element [switch {:default-checked false
                                     :on-click #(dispatch [:collapse/toggle])}])
     :label "Collapse"
     :disabled false}]])

(defn navbar [{:keys [_children]}]
  (let [open? (r/atom false)]
    (fn [{:keys [children]}]
      [:div.container-fluid
       [:nav.d-flex
        {:class "navbar navbar-expand-lg navbar-light bg-light"} 
        [:div.d-flex.align-items-center
         [hyperlink {:class "navbar-brand m-3 display-4"
                     :label "NIA"
                     :on-click (toggle-drawer open?)}]]]
       children
       [drawer
        {:anchor "left"
         :open @open?
         :on-close (toggle-drawer open?)}
        [list-component]]])))