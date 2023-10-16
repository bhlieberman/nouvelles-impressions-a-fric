(ns nia.views.parens-scroll)

(def colors {1 :danger
             2 :warning
             3 :info
             4 :success
             5 :primary})

(defn parens-scroll [{:keys [children depth]}]
  [:div.d-flex
   [:div
    {:class "m-3 display-4"
     :on-click (fn [] 
                 (when (>= @depth 1) (swap! depth dec))
                 (js/history.back))}
    (doall (for [i (reverse (range 1 6))
                 :let [classname (if (> i @depth)
                                   "text-muted "
                                   "")]]
             [:b {:key (str i "-left")
                  :class (some->> (get colors i)
                                  name
                                  (str classname "text-"))} "("]))]
   children
   [:div
    {:class "m-3 display-4"
     :on-click (fn []
                 (when (< @depth 5) (swap! depth inc))
                 (js/history.forward))}
    (doall (for [i (range 1 6)
                 :let [classname (if (> i @depth)
                                   "text-muted "
                                   "")]]
             [:b {:key (str i "-right")
                  :class (some->> (get colors i)
                                  name
                                  (str classname "text-"))} ")"]))]])