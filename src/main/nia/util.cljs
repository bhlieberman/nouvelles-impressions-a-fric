(ns nia.util
  (:require [clojure.edn :as edn]
            [shadow.resource :refer [inline]]))

(def raw-data (-> "nia.edn" inline edn/read-string))

(def nia-1-thesis (get-in raw-data [:canto 0 :body]))

(def nia-1-parens (get-in raw-data [:canto 0 :parens]))

(def nia-2 (get-in raw-data [:canto 1]))

(def nia-2-thesis (:body nia-2))

(def nia-2-parens (:parens nia-2))

(def nia-4 (get-in raw-data [:canto 2]))

nia-4

(comment 
  ;; programmatic routes WIP
  (for [canto [1 2 4]
       :let [names {nil "thesis"
                    1 "one"
                    2 "two"
                    3 "three"
                    4 "four"
                    5 "five"}]]
   [(str "/" canto)
    (into ["/parens"]
          (for [i (range 1 6)
                :let [route-name (str "nia.routing.canto." (get names i))
                      view-name (str "nia.views.cantos." (get names i))]]
            [(str "/" i)
             {:name (keyword route-name (get names i))
              :view (keyword view-name (get names i))
              :controllers []}]))]))