(ns nia.views.cantos.two.parens-five
  (:require [nia.views.vutils :refer [footnote-tooltip]]
            [reagent.core :as r]
            [re-com.core :refer [p h-box v-box scroller v-box]]))

(defn parens-five []
  [v-box
   :children
   [[h-box
     :align-self :center 
     :children
     [[scroller
       :class "m-3"
       :height "500px"
       :margin "10px"
       :child [v-box
               :children
               [[p "Just like:- the shadow near midday on the face of the sundial,"]
                [p "That tells the stomach that it needs its reward;"]
                [p "- The official metre by a frost, even though it's denied;"]
                [p "- A raised pair of underpants, defying the turds;"]
                [p "- A newspaper on the toilet seat of a public convenience;"]
                [p "- The boot in for repairs whose heel is worn away;"]
                [p "- What a good rabbi tears from his head with his fingernails;"]
                [p "- As he sets the table, a servant's pile of dishes;"]
                [p "- Repositioned by a barber, an armchair with a warm back;"]
                [p "- The staff, at reveille, held by a soldier of old;"]
                [p "- Juliet at the gala of "
                 [footnote-tooltip {:children (r/as-element [:a "Ejur"])
                                    :title "The gala of Ejur is held in Roussel's Impressions of Africa."}] " and Romeo"]
                [p "Played by two child mimes gratis pro Deo;"]
                [p "- The vanquished lance which in a drama a knight breaks over his thigh;"]
                [p "- The bread which drives a Swiss to Mass with his mouth watering;"]
                [p "- The asparagus discarded after one bite;"]
                [p "- When a spade is in action, a worm in a fatal accident;"]
                [p "- The sword-stick partly unsheathed, when it is a false alarm;"]
                [p "- The too-high music stand, newly opened;"]
                [p "- A growing infant pianist, his supporting piano stool;"]
                [p "- The old calendar - formerly a fat block;"]
                [p "- The suspense of the delay after soup;"]
                [p "- The band of sealing paper when it is cut;"]
                [p "- The melting spot of ice upon which a breath has blown;"]
                [p "- The first flash of lightning which reduces the sail;"]
                [p "- The table, after a grand banquet, folded up once more;"]
                [p "- The arch up which water rapidly climbs whilst one watches it;"]
                [p "- At the receiving end of a smoker's fetid puff, the tinder;"]
                [p "- The bloody stump of the newly cut tail of a young pup;"]
                [p "- In dressage training, the unused part of the chain;"]
                [p "- When its head is about to fall off, the used match;"]
                [p "- The open half-flat tube that an old master squeezes;"]
                [p "- When, old, its button falls off, the elastic on a brolly;"]
                [p "- When the bed replaces the cradle, the back bedroom;"]
                [p "- The dandelion which awaits only a puff of air, its suffering;"]
                [p "- Her points made, the ballerina sinking to the floor;"]
                [p "- The action of a delinquent as interpreted by Magistrate X...;"]
                [p "- When the hose-user gets thirsty, the jetspout;"]
                [p "- The thread which, climbed by the spider, hangs down;"]
                [p "- On the border of a green carpet an honest figurine;"]
                [p "- A cigar reduced to a butt;"]
                [p "- The sun's disc in Neptune's skies;"]]]]]]]])