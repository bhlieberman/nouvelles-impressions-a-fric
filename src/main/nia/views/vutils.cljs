(ns nia.views.vutils
  (:require [defun.core :refer-macros [defun]]
            [nia.views.macros :as m]
            [reagent-mui.material.tooltip :refer [tooltip]]
            [reagent-mui.styles :refer [styled]] 
            ["@mui/material/CssBaseline" :as CssBaseline]
            ["@mui/material/Tooltip" :refer [tooltipClasses]]
            ["@mui/material/styles" :refer [ThemeProvider createTheme]]))

(defn collapsed [show? & body]
  (m/collapsed show? body))

(defun nested
  ([outer-el body] 
   [outer-el body])
  ([outer-el classes body] 
   [outer-el classes body])
  ([outer-el inner-el body] 
   [outer-el body inner-el])
  ([outer-el classes inner-el body]
   [outer-el classes body inner-el]))

(def dark-theme (createTheme (clj->js {:palette {:mode "dark"}})))

(defn dark-mode-wrapper [app]
  [:> ThemeProvider {:theme dark-theme}
   [:> (.-default CssBaseline)]
   app])

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