(ns nia.views.navbar
  (:require [re-com.core :refer [hyperlink]]
            [reitit.frontend.easy :as rfe]))

(defn navbar [{:keys [depth children navigate]}]
  [:div
   [:nav {:class "navbar navbar-expand-lg navbar-light bg-light"}
    [hyperlink {:class "navbar-brand m-3 display-4"
                :label "NIA"
                :on-click #(navigate :home)}]
    [:button {:class "navbar-toggler", :type "button", :data-toggle "collapse", :data-target "#navbarNavAltMarkup", :aria-controls "navbarNavAltMarkup", :aria-expanded "false", :aria-label "Toggle navigation"}
     [:span {:class "navbar-toggler-icon"}]] 
    [:div {:class "collapse navbar-collapse", :id "navbarNavAltMarkup"}
     [:div {:class "navbar-nav"}
      [hyperlink {:class "nav-item nav-link"
                  :label "test router"
                  :on-click #(rfe/navigate :nia.views.routing/home)}]
      [hyperlink
       {:class "nav-item nav-link active"
        :label [:span {:class "sr-only"} "Thesis"]
        :on-click #(navigate :thesis)}
       ]
      (for [i (range (inc depth))]
        [hyperlink
         {:class "nav-item nav-link" 
          :label (apply str (repeat i "("))
          :on-click #(navigate (get {1 :parens
                                     2 :parens-two
                                     3 :parens-three
                                     4 :parens-four
                                     5 :parens-five} i))}])]]]
   children])