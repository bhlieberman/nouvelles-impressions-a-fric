(ns nia.build
  (:require [clojure.java.shell :refer [sh]]))

(defn run-vite
  {:shadow.build/stage :compile-finish}
  [build-state & args]
  (sh "npx" "vite" "optimize" "--base" "public")
  build-state)