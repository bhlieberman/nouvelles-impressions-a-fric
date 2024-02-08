(ns nia.views.vutils
  (:require [nia.views.macros :as m]
            [reagent-mui.material.tooltip :refer [tooltip]]
            [reagent-mui.styles :refer [styled]] 
            ["@mui/material/Tooltip" :refer [tooltipClasses]]))

(defn collapsed [show? & body]
  (m/collapsed show? body))

(def footnote-tooltip
  (styled tooltip (fn [_]
                    {(str "& ." (.-tooltip tooltipClasses))
                     {:max-width 500}})))

(defn collapsible [el-type show? & args]
  (into [el-type]
        (for [arg args]
          (if (sequential? arg)
            (into [(first arg) (if-not show? {:class "collapse"} {})] (rest arg))
            [el-type (if-not show? {:class "collapse"} {}) arg]))))