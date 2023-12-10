(ns nia.views.vutils)

(defn collapsible [el-type show? & args]
  (into [el-type]
        (for [arg args]
          (if (sequential? arg)
            (into [(first arg) (if-not show? {:class "collapse"} {})] (rest arg))
            [el-type (if-not show? {:class "collapse"
                                    :style {:display :block}} {:style {:display :block}}) arg]))))