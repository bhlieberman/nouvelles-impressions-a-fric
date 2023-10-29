(ns nia.build
  (:require [clojure.java.shell :refer [sh]]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn run-vite 
  {:shadow.build/stage :flush}
  [build-state]
  (let [vite (sh "npx" "vite" "build" "--base" "public" "--mode" "dev")]
    (println (:out vite))
    build-state))