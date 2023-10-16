(ns nia.views.navbar
  (:require [reagent.core :as r]
            [re-com.core :refer [at hyperlink]]
            [reitit.frontend.easy :as rfe]))

(defn navbar [{:keys [_depth _children _navigate]}]
  (let [current-route? (r/atom nil)
        classname (fn [name]
                    (if (= name @current-route?)
                      "nav-item nav-link active"
                      "nav-item nav-link"))]
    (fn [{:keys [depth children navigate]}]
      [:div
       [:nav {:class "navbar navbar-expand-lg navbar-light bg-light"}
        [hyperlink {:class "navbar-brand m-3 display-4"
                    :label "NIA"
                    :on-click #(navigate :home)}]
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
                                  (rfe/navigate :nia.routing/one {:path-params {:id 1}}))}] 
          [hyperlink {:src (at)
                      :class "nav nav-link disabled"
                      :disabled? true
                      :label "Canto II"}]
          [hyperlink {:src (at)
                      :class "nav nav-link disabled"
                      :disabled? true
                      :label "Canto IV"}]
          #_(doall (for [i (range (inc depth))]
                   ^{:key i}
                   [hyperlink
                    {:class (classname :parens)
                     :label (apply str (repeat i "("))
                     :on-click #(navigate (get {1 :parens
                                                2 :parens-two
                                                3 :parens-three
                                                4 :parens-four
                                                5 :parens-five} i))}]))]]]
       children])))