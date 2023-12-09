(ns nia.views.vutils)

(defn collapsible [show? & args]
  (into [:div]
        (for [arg args]
          (if (sequential? arg)
            (into [(first arg) (if-not show? {:class "collapse"} {})] (rest arg))
            [:span (if-not show? {:class "collapse"} {}) arg]))))