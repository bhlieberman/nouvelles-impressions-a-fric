(ns nia.views.navbar
  (:require [reagent.core :as r]
            [re-com.core :refer [at hyperlink]]
            [re-frame.core :refer [dispatch]]))

(defn navbar [{:keys [_children]}]
  (let [active-route? (r/atom nil)
        classname (fn [name]
                    (if (= name @active-route?)
                      "nav-item nav-link active"
                      "nav-item nav-link"))]
    (fn [{:keys [children]}]
      [:div
       [:nav {:class "navbar navbar-expand-lg navbar-light bg-light"}
        [hyperlink {:class "navbar-brand m-3 display-4"
                    :label "NIA"
                    :on-click #(dispatch [:routing/push-state :nia.routing/home])}]
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
                      :class (classname :canto-i)
                      :label "Canto I"
                      :on-click (fn []
                                  (reset! active-route? :canto-i)
                                  (dispatch [:routing/push-state :nia.routing.canto.one/thesis {:path-params {:id 1}}]))}] 
          [hyperlink {:src (at)
                      :class (classname :canto-ii)
                      :label "Canto II"
                      :on-click (fn []
                                  (reset! active-route? :canto-ii)
                                  (dispatch [:routing/push-state :nia.routing.canto.two/thesis {:path-params {:id 2}}]))}]
          [hyperlink {:src (at)
                      :class (classname :canto-iv)  
                      :label "Canto IV"
                      :on-click (fn []
                                  (reset! active-route? :canto-iv)
                                  (dispatch [:routing/push-state :nia.routing.canto.four/thesis {:path-params {:id 4}}]))}]]]]
       children])))