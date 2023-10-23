(ns nia.views.cantos.four.parens-four-footnotes
  (:require [goog.object :as gobj]
            [reagent.core :as r]
            [re-com.core :refer [hyperlink modal-panel scroller p v-box]]
            ["react" :refer [forwardRef]]))

(defn hacked-p []
  (r/create-class {:reagent-render (fn [args] [p args])
                   :component-did-mount (fn [this] (.. this -current scroll))}))

(def modal
  (r/adapt-react-class
   (forwardRef
    (fn [props ref] 
      (r/as-element 
       [modal-panel
        :backdrop-on-click #(reset! (gobj/get props "showing?") false)
        :child
        [scroller
         :height "300px"
         :child
         [v-box
          :margin "10px 0px"
          :children
          [[v-box
            :children
            [[p " Everything progresses: as at the moment when, calling the hens,"]
             [p "Those wise early-to-bedders, in to roost,"]
             [p "The sun sinks in the west, the rich man " [:b.text-danger "("] "money"]
             [p "Improves his position of privilege;"]
             [p "The elegant dunce is sure to be outstripped in a college"]
             [p "Whose crest, through pride, the elbows of the student-body"]
             [p "Have vigorously rubbed to to a shining finish;"]
             [p "To a rich suicide one gives a mass:"]
             [p "It is hard to die without a De Profundis" [:b.text-danger ")"] ";"]
             [p "Has the wicks of his old lamps re-lit,"]
             [p "A gesture which electric light has rendered out-of-date;"]
             [p "The motorcar, causing the dropping of sticks,"]
             [p "Has brought animal transport into disrepute,"]
             [p "- Since which sparrows have had a hard time;"]
             [p "And are those awkward catapults a patch on " [hyperlink {:label "cannon"}] "?"]
             [:hr]]]
           [v-box
            :children
            [[p " What things one has to wait for, alas! the moment of the "]
             [p "Splash of a pebble which one has dropped down a well,"]
             [p "Public adulations - the celebrity having died"]
             [p "Only in death acquires the right to have his statue and his street -"]
             [p "The end when in cold water a sugar-cube is dissolving,"]
             [p "For the insomniac those patches of light on the ceiling"]
             [p "Which announce dawn and its splendours,"]
             [p "In all good books the removal of the obstacle"]
             [p "Which separates the hero from perfect happiness,"]
             [p "The young wife, when her womb is not becoming heavy,"]
             [p "The lapel of a uniform for a scarlet ribbon,"]
             [p "For the thunder, when the crash comes heavily"]
             [p "Only one minute after a feeble flash of " [hyperlink {:label "lightning"}] "!"]
             [:hr]]]
           [v-box
            :children
            [[p " Nobody is without an ambitious dream;"]
             [p "The worker sees himself dictating, during a strike,"]
             [p [:b.text-danger "("]
              "Nowadays on uses reason and everybody, eye on his goal,"]
             [p [:b.text-warning "(("]
              "We all have one; while the nape of his neck,"]
             [p "Bared to facilitate the action of the blade,"]
             [p "Is attached to his spine for another fifteen minutes,"]
             [p "Dreaming: \"He loses his prisoner - and this often happens -"]
             [p "Who holds him the tightest\", " [:b.text-info "((("] "in fact, inconsequentialities"]
             [p "Can help the long-term prisoner to break gaol,"]
             [p "Like the cheese charmed from the bill of the crow"]
             [p "- It is often best to keep silent;" [:b.text-info ")))"]]
             [p "Even the murderer has a goal: escape;" [:b.text-warning "))"]]
             [p "Whatever this ideal might be: to earn a large salary,"]
             [p "To have children, to have an abundant harvest,"]
             [p "Or to slow his heartbeat at will to achieve enlightenment,"]
             [p "Realises that in order to succeed it is better to think, to act,"]
             [p "Than to make - hard worker, barren wife,"]
             [p "Reaper or invalid - a wish at the moment when"]
             [p "A shooting-star falls across the sky;" [:b.text-danger ")"] ","]
             [p "Tired of seeing the bourgeois live off his sweat,"]
             [p [:b.text-danger "("] "Often Paul suffered and worked for Peter;"]
             [p "Vespucci exploited Columbus's efforts;"]
             [p "And it is to bedeck a finger or a chemise with pearls"]
             [p "That an oyster works so hard;" [:b.text-danger ")"] " terms to his employer;"]
             [p "The whore in her attic dreams of riding in a coach;"]
             [p "To see in his hands the amethyst and the crook"]
             [p "Is a dream dear to every young " [hyperlink {:label "priest"}] "?"]
             [:hr]]]
           [v-box
            :children
            [[p " How the significance of words change depending upon their context!"]
             [p "Eclair means \"a flash in the sky accompanied by a bang\""]
             [p "Or \"reflection from the blade of a knife\";"]
             [p "Corbeille, when found in an epithalamium"]
             [p "Depicts the precious kingdom of the spirit,"]
             [p "Gives also \"collection of old manuscripts\"; noyau"]
             [p "Means \"comet\" here and \"cherry\" there;"]
             [p "Revolution can correspond to \"crisis"]
             [p "In which people say of an obeyed prince: \"we want him\""]
             [p "Or \"sudden shock to the nervous system\";"]
             [p "Bras shifts from \"armchair\" to \"sea\"; suite from \"chapter\" to \"king\";"]
             [p "Conduite from \"the way in which man stagnates\" to \"braid\";"]
             [p "Blanc from \"cube of chalk for grinding\" to \"civilized\";"]
             [p "Banc from \"treacherous rocks where death is in the air\" to \"uncomfortable seat\";"]
             [p "Champignon is used either for \"to eat sloppily\" or \"elegant stand\";"]
             [p "\"That which a man who is hammering must have\""]
             [p "And \"a number which oozes prestige\" are contained in clou;"]
             [p "\"He who, to clean himself up, runs a bath\""]
             [p "Is in savon, or \"that which an athlete under orders listens for\";"]
             [p "\"A sin which keeps one awake at night\""]
             [p "Or \"pigtail to tickle the neck\" in repentir;"]
             [p "\"Trait by which one habitually lies from childhood\""]
             [p "In baton or \"supreme military honour\";"]
             [p "\"Emplumed roaster of men and possessor of"]
             [p "A bow\" in naturel or \"a simple happy lack"]
             [p "Of learning; in paradis \"a smelly ball\" or \"the Heavens,"]
             [p "That beautiful flowery place sung about by pious"]
             [p "Choristers\"; \"a potted delicacy for robust"]
             [p "Gastronomes\" or \"incongruous written sorrow\" in pate;"]
             [p "\"Scientific choice of comestibles made"]
             [p "To please\" in regime or \"the way in which one is led"]
             [p "By the clique to become a conformist\";"]
             [p "\"A cry by which, the one mocking the other, an alter ego"]
             [p "Imitates you\" or \"inserted paragraph\" in echo;"]
             [p "Finally, faute depicts the slip which means that she is burdened"]
             [p "Who will never be seen by him again, or the mistake that a student"]
             [p "Geared to precision commits in his homework;"]
             [p "Well now, should one decide never to see someone again"]
             [p "Because a grammatical error has appeared in that person's " [hyperlink {:label "translation"}] "?"]
             [:hr]]]
           [v-box
            :children
            [[p {:ref ref} "A trick which is worth as much as these, for novelty value:"]
             [p "To induce a hen to sit on an egg"]
             [p "Which was actually laid by a duck,"]
             [p "To see the hen trembling " [:b.text-danger "("] "around whom clucking,"]
             [p "Trying to get at the duck which is foreign to the brood,"]
             [p "Menacing, beaks at the ready, is all the farmyard" [:b.text-danger ")"]]
             [p "Whilst the duckling pecks at her ankle;"]
             [p "Frightening an old lady"]
             [p [:b.text-danger "("] "A feeble one in whom the taste for celibacy"]
             [p "Was formed by fear of a drunken husband who would beat her,"]
             [p "Like the famous example of Bluebeard's widow" [:b.text-danger ")"]]
             [p "By attaching a burning rag to her cat's tail"]
             [p "And making it run in terror towards " [hyperlink {:label "her"}] "."]]]]]]])))))