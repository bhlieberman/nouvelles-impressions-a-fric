(ns nia.views.cantos.two.parens-three
  (:require [nia.views.vutils :refer [footnote-tooltip]]
            [reagent.core :as r] 
            [re-com.core :refer [at h-box hyperlink
                                 modal-panel p
                                 scroller v-box]]
            [re-frame.core :refer [dispatch]]
            [nia.views.cantos.two.parens-four-ii :refer [parens-four-ii]]))

(defn parens-three []
  (let [par-ii-modal (r/atom false)]
    (fn []
      [v-box
       :children
       [[h-box
         :align-self :center
         :justify :start
         :children
         [[scroller
           :height "500px"
           :class "m-3"
           :margin "10px"
           :child [v-box
                   :children
                   [[p "while the " [:i "patron,"]]
                    [p {:class :text-success} "((((Something of a specialist in the art of good living,"]
                    [p {:class :text-success} "Who would shudder to see an expensive fruit"]
                    [p {:class :text-success} "Given to the kiss of a steel blade,))))"]
                    [p "Knowing that all men carry, wisely hidden"]
                    [p "In a bulging sack which they would rather believe was flat,"]
                    [hyperlink {:src (at)
                                :class "text-success"
                                :label "Their personal faults upon their backs,"
                                :on-click #(dispatch [:routing/push-state :nia.routing.canto/two {:location :four}])}]
                    [p "Seeking the swing of the thurible to secure their salvation,"]
                    [p [hyperlink  {:src (at)
                                    :label "So that fortune will favour them,"
                                    :on-click #(swap! par-ii-modal not)}]
                     " she whose wheel's"]
                    (when @par-ii-modal
                      [modal-panel
                       :backdrop-on-click #(swap! par-ii-modal not)
                       :child [parens-four-ii]])
                    [p "Spokes move, turning without peace and without cease,"]
                    [p "- Like the hat of a simpleton before his superior -"]
                    [p "Like any host he flatters, pays heed, agrees with an important person,"]
                    [p "Even when it is affirmed: - that to save money"]
                    [p "One should never pay the cobbler's bill;"]
                    [p "- That a dwarf no taller than your waist, standing in front of a mirror,"]
                    [p "Would seem like a giant if placed under a dolmen;"]
                    [p "- That it is necessary, when dinner is served, to force a man to eat"]
                    [p "Whose family is infected with ringworm;"]
                    [p "- That there is more instinctive feeling between a woman and her husband"]
                    [p "Than between an old maid and her canary;"]
                    [p "- That across the Channel, for certain intimate ablutions,"]
                    [p "Necessarily performed blind, the Times is never used;"]
                    [p "- That a tuberculosis sufferer in Paris, more quickly than in Menton,"]
                    [p "Gains weight through peace and fresh air alone;"]
                    [p "- That in deference to asparagus in May, when he urinates,"]
                    [p "The replete gourmet never closes his eyes and flares his nostrils;"]
                    [p "- That it is ignorant in its glass cage, the little frog, when according"]
                    [p "To its own fancy it ascends or descends a rung of its ladder;"]
                    [p "- That a fly swimming in one's cup enhances"]
                    [p "The attraction exercised by the drink contained therein;"]
                    [p "- That it is as well to be so sensitive to cold as to raise one's collar"]
                    [p "When mercury freezes and alcohol becomes necessary;"]
                    [p "- That there is nothing remotely boot-shaped about that country"]
                    [p "Where, according to Mignon, the bees always buzz;"]
                    [p "- When a poltroon receives without quaking a duelling-card"]
                    [p "That he will have none other come against him than Tell;"]
                    [p "- That the fire was designed to bend still further the backs of the Czars,"]
                    [p "That in brilliant strategy was lit by Rasputin;"]
                    [p "- That a released cork, rather than an unreleased one, in flight"]
                    [p "Would jump across the length of a high ceiling;"]
                    [p "- That the sum of stars is increased around"]
                    [p "The Moon, the rounder and brighter she is;"]
                    [p "- That nobody was the equal of Napoleon 1st"]
                    [p "In the art of avoiding eating his bread first;"] 
                    [p
                     [footnote-tooltip {:children (r/as-element [:a "- That with the art of exposing the shortcomings of the bluestocking"])
                                        :title "Bluestocking. i.e. femme savante, from Moliere's play of that title."}]] 
                    [p "Moliere has never gifted the servant;"]
                    [p "- That everybody would refuse he who politely"]
                    [p "Asks permission before opening an envelope in company;"]
                    [p "- That if a black specimen is a rare thing amongst pearls"]
                    [p "As opposed to white, then the same is the case with swifts;"]
                    [p "- That he who has been dealt a good hand in a game of Nain"]
                    [p
                     [footnote-tooltip {:children (r/as-element [:a "Jaune would much rather finish without having had the hand;"])
                                        :title "Nain Jaune. A card game called Pope Joan."}]]
                    [p "- That it was far from his Spring when, moved by an alder tree,"]
                    [p "The human St. Martin gave his cloak to the poor;"]
                    [p "- That in love nothing could be the equal of Onan"]
                    [p "With his universal law of \"gimme gimme\""]
                    [p "- That the sound is changed less effectively by an accidental"]
                    [p "Than by a key-change at the double-bar;"]
                    [p "- That the ant has always, for his unaware neighbour,"]
                    [p "Obligingly provided everything when the North Wind blows;"]
                    [p "- That Attila, more highly valued than his elder Rodrigo,"]
                    [p "Is more feted in famous Alexandrines;"]
                    [p "- That a curved route, when running towards a sudden noise,"]
                    [p "Is more direct than a straight for connecting two points;"]
                    [p "- That the most noble weapon is the anonymous letter"]
                    [p "Used for defaming one's rivalsin the battle for honours;"]
                    [p "- That there is a letter which, disgusted, the noble Calino"]
                    [p "Threw unopened into the waste-paper basket -"]
                    [p "Or that a law excluding females exists in the bee world;"]
                    [p "What prosperities, what fine fortunes,"]
                    [p "To him who is not blind, clearly spring from an infamous source!"]
                    [p "The piano prize depends more for the woman"]
                    [p "Upon the number of admirers she has on the jury"]
                    [p "Than upon her playing and upon her developed talents"]
                    [p "Which she either reveals or not while playing her sonata;"]
                    [p "Many an X... Spa owes less to its bicarbonate"]
                    [p "Than to the gamblers who frequent its casino at night."]]]]]]]])))