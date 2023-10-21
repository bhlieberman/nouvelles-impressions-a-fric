(ns nia.views.navbar
  (:require [reagent.core :as r]
            [re-com.core :refer [at hyperlink]]
            [reitit.frontend.easy :as rfe]))

(defn navbar [{:keys [_children]}]
  (let [current-route? (r/atom nil)
        classname (fn [name]
                    (if (= name @current-route?)
                      "nav-item nav-link active"
                      "nav-item nav-link"))]
    (fn [{:keys [children]}]
      [:div
       [:nav {:class "navbar navbar-expand-lg navbar-light bg-light"}
        [hyperlink {:class "navbar-brand m-3 display-4"
                    :label "NIA"
                    :on-click #(rfe/navigate :nia.routing/home)}]
        [:button {:class "navbar-toggler"
                  :type "button"
                  :data-toggle "collapse"
                  :data-target "#navbarNavAltMarkup"
                  :aria-controls "navbarNavAltMarkup"
                  :aria-expanded "false"
                  :aria-label "Toggle navigation"}
         [:span {:class "navbar-toggler-icon"}]]
        [:div {:class "collapse navbar-collapse", :id "navbarNavAltMarkup"}
         [:div {:class "navbar-nav"}
          [hyperlink {:src (at)
                      :class (classname :intro)
                      :label "Introduction"
                      :on-click (fn []
                                  (reset! current-route? :intro)
                                  (rfe/navigate :nia.routing/intro))}]
          [hyperlink {:src (at)
                      :class (classname :preface)
                      :label "Preface"
                      :on-click (fn []
                                  (reset! current-route? :preface)
                                  (rfe/navigate :nia.routing/home))}]
          [hyperlink {:src (at)
                      :class (classname :canto-i)
                      :label "Canto I"
                      :on-click (fn []
                                  (reset! current-route? :canto-i)
                                  (rfe/navigate :nia.routing.canto.one/thesis {:path-params {:id 1}}))}] 
          [hyperlink {:src (at)
                      :class (classname :canto-ii)
                      :label "Canto II"
                      :on-click (fn []
                                  (reset! current-route? :canto-ii)
                                  (rfe/navigate :nia.routing.canto.two/thesis {:path-params {:id 2}}))}]
          [hyperlink {:src (at)
                      :class "nav nav-link disabled"
                      :disabled? true
                      :label "Canto IV"}]]]]
       children])))