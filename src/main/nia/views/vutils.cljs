(ns nia.views.vutils)

(defn toggle [show?]
  [:div.w-25.align-self-center
   [:input.btn.rounded.p-2.w-50
    {:type :button
     :class (if @show? "bg-primary" "bg-muted border")
     :default-value (if @show? "On" "Off")
     :on-click #(swap! show? not)}]])

(defn collapsible [el-type show? & args]
  (into [el-type]
        (for [arg args]
          (if (sequential? arg)
            (into [(first arg) (if-not show? {:class "collapse"} {})] (rest arg))
            [el-type (if-not show? {:class "collapse"
                                    :style {:display :block}} {:style {:display :block}}) arg]))))