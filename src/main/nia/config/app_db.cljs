(ns nia.config.app-db
  (:require [shadow.resource :as rs]))

(def app-db {:app.routing/current-route nil
             :app.user/history [] ;; perhaps every few clicks triggers a LocalStorage write?
             :cantos/footnotes {1 []
                                2 []
                                4 [(rs/inline "four_four_one.txt")
                                   (rs/inline "four_four_two.txt")
                                   (rs/inline "four_four_three.txt")
                                   (rs/inline "four_four_four.txt")
                                   (rs/inline "four_four_five.txt")]}
             :poem/traversal-type :depth 
             :images {"snowman.jpeg" nil "man-w-book.jpeg" nil 
                      "shutter.jpeg" nil "soldier.jpeg" nil
                      "street.jpeg" nil "tree.jpeg" nil
                      "astronomer.jpeg" nil "mountaineer.jpeg" nil}
             :images/urls []})