(ns nia.events.core
  (:require [re-frame.core :as rf :refer [reg-event-fx reg-event-db reg-fx]]))

(reg-event-fx
 :app/initialize
 (fn [_ _]
   {:db {:current-route nil
         :parens-routes {1 [:nia.routing.canto.one/thesis
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
         :parens-depth {"one" 1
                        "two" 2
                        "three" 3
                        "four" 4
                        "five" 5}}}))