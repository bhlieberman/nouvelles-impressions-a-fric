(ns nia.views.text-search
  (:require [clojure.string :as str]
            [fork.re-frame :as fork] 
            [re-com.core :refer [modal-panel p v-box]]
            [re-frame.core :refer [dispatch subscribe]]))

(defn search-form [{:keys [handle-change
                           handle-blur
                           handle-submit
                           submitting?]}]
  [:form.row.g-3.m-auto {:on-submit handle-submit}
   [:div.col-auto
    [:label.lead.m-1
     {:for :text-search}
     "Keyword search"]]
   [:div.col-auto
    [:input.form-control.focus-ring.py-1.px-2.text-decoration-none.border-rounded-2
     {:type :search 
      :id :text-search
      :placeholder "Shall I compare thee..."
      :on-change handle-change
      :on-blur handle-blur}]]
   [:div.col-auto
    [:button.btn.btn-primary {:type :submit :disabled submitting?} "Search"]]])

(defn text-search []
  (let [results @(subscribe [:search/initial-results])
        modal-showing? @(subscribe [:search/results-showing?])]
    [:div.ms-auto.d-flex.align-self-center
     [fork/form {:path [:form]
                 :prevent-default? true
                 :clean-on-unmount? true
                 :on-submit (fn [e]
                              (dispatch [:search/submit-input e])
                              (dispatch [:search/show-results]))}
      search-form]
     (when modal-showing?
       [modal-panel
        :backdrop-on-click (fn [] 
                             (dispatch [:search/clear-results])
                             (dispatch [:search/show-results]))
        :child
        [v-box
         :children
         (into []
               (for [line (str/split-lines results)]
                 [p line]))]])]))
