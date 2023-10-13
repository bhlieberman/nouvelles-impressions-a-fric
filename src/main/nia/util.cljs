(ns nia.util
  (:require [clojure.edn :as edn]
            [shadow.resource :refer [inline]]))

(def raw-data (-> "nia.edn" inline edn/read-string))

(def nia-1-thesis (get-in raw-data [:canto 0 :body]))

(def nia-1-parens (get-in raw-data [:canto 0 :parens]))

nia-1-parens