(ns nia.config.app-db
  (:require [shadow.resource :as rs]))

(def app-db {:app.routing/current-route nil
             :app.routing.impl/parens-routes {1 [:nia.routing.canto.one/thesis
                                                 :nia.routing.canto.one/one
                                                 :nia.routing.canto.one/two
                                                 :nia.routing.canto.one/three
                                                 :nia.routing.canto.one/four
                                                 :nia.routing.canto.one/five]
                                              2 [:nia.routing.canto.two/thesis
                                                 :nia.routing.canto.two/one
                                                 :nia.routing.canto.two/two
                                                 :nia.routing.canto.two/three
                                                 :nia.routing.canto.two/four
                                                 :nia.routing.canto.two/five]
                                              4 [:nia.routing.canto.four/thesis
                                                 :nia.routing.canto.four/one
                                                 :nia.routing.canto.four/two
                                                 :nia.routing.canto.four/three
                                                 :nia.routing.canto.four/four
                                                 :nia.routing.canto.four/five]}
             :app.impl/parens-depth {"one" 1
                                     "two" 2
                                     "three" 3
                                     "four" 4
                                     "five" 5}
             :cantos/footnotes {1 []
                                2 []
                                4 [(rs/inline "four_four_one.txt")
                                   (rs/inline "four_four_two.txt")
                                   (rs/inline "four_four_three.txt")
                                   (rs/inline "four_four_four.txt")
                                   (rs/inline "four_four_five.txt")]}
             :poem/traversal-type :depth
             :app.routing/breadth-first {:theses [:nia.routing.canto.one/thesis
                                                  :nia.routing.canto.two/thesis
                                                  :nia.routing.canto.four/thesis]
                                         :parens [:nia.routing.canto.one/one
                                                  :nia.routing.canto.two/one
                                                  :nia.routing.canto.three/one
                                                  :nia.routing.canto.four/one
                                                  :nia.routing.canto.five/one]}
             :images {"snowman.jpeg" nil "man-w-book.jpeg" nil 
                      "shutter.jpeg" nil "soldier.jpeg" nil
                      "street.jpeg" nil "tree.jpeg" nil
                      "astronomer.jpeg" nil "mountaineer.jpeg" nil}})