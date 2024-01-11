(ns nia.config.app-db
  (:require [shadow.resource :as rs]))

(def app-db {:app.routing/current-route nil
             :app.user/history [] ;; perhaps every few clicks triggers a LocalStorage write?
             :cantos/footnotes {:c1 {:p4/fn1 #js {:title "c1-p4-fn1"
                                                  :id "c1-p4-fn1"
                                                  :body (rs/inline "footnotes/one/four_one.txt")}}
                                :c2 {:p2/fn1 #js {:title "c2-p2-fn1"
                                                  :id "c2-p2-fn1"
                                                  :body (rs/inline "footnotes/two/two_one.txt")}
                                     :p3/fn1 #js {:title "c2-p3-fn1"
                                                  :id "c2-p3-fn1"
                                                  :body (rs/inline "footnotes/two/three_one.txt")}}
                                :c4 {:p4/fn1 #js {:title "c4-p4-fn1"
                                                  :id "c4-p4-fn1"
                                                  :body (rs/inline "footnotes/four/four_one.txt")}
                                     :p4/fn2 #js {:title "c4-p4-fn2"
                                                  :id "c4-p4-fn2"
                                                  :body (rs/inline "footnotes/four/four_two.txt")}
                                     :p4/fn3 #js {:title "c4-p4-fn3"
                                                  :id "c4-p4-fn3"
                                                  :body (rs/inline "footnotes/four/four_three.txt")}
                                     :p4/fn4 #js {:title "c4-p4-fn4"
                                                  :id "c4-p4-fn4"
                                                  :body (rs/inline "footnotes/four/four_four.txt")}
                                     :p4/fn5 #js {:title "c4-p4-fn5"
                                                  :id "c4-p4-fn5"
                                                  :body (rs/inline "footnotes/four/four_five.txt")}}}
             :poem/traversal-type :depth
             :poem/parens-depth 0
             :poem/parens-loc {0 :thesis
                               1 :one
                               2 :two
                               3 :three
                               4 :four
                               5 :five}
             :search/results-showing? false
             :images/names {"snowman.jpeg" nil "man-w-book.jpeg" nil
                            "shutter.jpeg" nil "soldier.jpeg" nil
                            "street.jpeg" nil "tree.jpeg" nil
                            "astronomer.jpeg" nil "mountaineer.jpeg" nil}
             :images/urls []})
