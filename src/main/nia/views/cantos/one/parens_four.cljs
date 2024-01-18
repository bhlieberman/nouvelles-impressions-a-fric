(ns nia.views.cantos.one.parens-four
  (:require [nia.views.vutils :refer [collapsible]]
            [reagent.core :as r]
            [re-com.core :refer [h-box hyperlink
                                 modal-panel p
                                 popover-anchor-wrapper
                                 popover-content-wrapper
                                 scroller v-box]]
            [re-frame.core :refer [dispatch subscribe]]
            ["react" :refer [createRef]]))

(defn nested [show?]
  ;; weird overlapping text for now
  ;; when using a div -- possibly because
  ;; of default div position?
  (collapsible p show?
               [p [:b.text-danger "("] "Ready as he is to swear - even on days when"]
               "Snowflakes big as coins float in the biting wind -"
               "That in January one can happily go naked in Nice,"
               [p "Just like Archimedes shouting out a hundred times \"Eureka\"" [:b.text-danger ")"]]))

(defn parens-four []
  (let [popover-showing? (r/atom false)
        popover-two-showing? (r/atom false)
        footnote-one-showing? (r/atom false)
        note-2-showing? (r/atom false)
        to-footnote1-ref (createRef)
        from-footnote1-ref (createRef)
        to-footnote3-ref (createRef)
        from-footnote3-ref (createRef)]
    (fn []
      (let [show? @(subscribe [:show-collapsed?])]
        [h-box
        :align-self :center
        :children
        [[scroller
          :class "m-3"
          :height "750px"
          :child
          [v-box
           :children
           [[p "Wondering thus:- if perhaps he's a thief,"]

            [p "That fop who with "]
            [hyperlink {:style {:margin "0px 0px 9.8px"}
                        :on-click #(dispatch [:routing/push-state :nia.routing.canto/one {:location :five}])
                        :label "one snooty glance"
                       ;; making the links color-coordinated
                        :class "text-primary"}]
            [p "Enrages a poor uniformed"]
            [p "Hotel flunkey who has just,"]
            [p "Red-faced, brought his car to the main entrance;"]
            [p "- The new arrival in Nice, his eye on the thermometer,"]
            [p "Whether he should wear "
             [hyperlink {:label " a mackintosh"
                         :on-click #(swap! footnote-one-showing? not)}]
             " to keep out the cold;"]
            (when @footnote-one-showing?
              [modal-panel
               :backdrop-on-click #(reset! footnote-one-showing? false)
               :child [scroller
                       :class "m-3"
                       :height "300px"
                       :child
                       [v-box
                        :children
                        [[p "To give an overcoat to the new arrival in Nice"]
                         [nested show?] 
                         [p "Is like giving:- to the novice at sea, an emetic,"]
                         [p "When all he can hear is the wind getting up;"]
                         [p "- To a member of the audience during a speaker's preambles,"]
                         [p "A sleeping-draught; - to one in pursuit of"]
                         [p "A fast walker, a fan; - when he gets home, to a sinner"]
                         [p "Who has taken a late communion, a bitter walnut;"]
                         [p "- A false nose to a Jew, smaller than his own hooter;"]
                         [p "- Crazily, before a newly-pressed suit,"]
                         [p "An aphrodisiac to the man about to hang; - bellows"]
                         [p "To one who is furiously fighting a fire in a soot-filled"]
                         [p "Chimney; - to he who is removing from an old and cherished book"]
                         [p "A beautiful dried flower, a vice;"]
                         [p "- To he who wisely leaves a spider in peace one evening,"]
                         [p "Knowing this will bring good fortune, a lucky charm;"]
                         [p "- As with kid gloves towards the holy water"]
                         [p "She advances her trembling middle finger, to the devout lady, a charm"]
                         [p "To prevent her from wasting away; - when the express, carriage after carriage,"]
                         [p "Overtakes a slow train, to one who witnesses the contest,"]
                         [p "A prediction as to the outcome; - in the evening, to one in his hut"]
                         [p "Getting ready for bed in the dark, some hair curlers;"]
                         [p "- As, stamping, into his numb fingers"]
                         [p "A dyspeptic with bad breath blows, a ball"]
                         [p "Of stinking air to his friend;"]
                         [p "- An advantage to a steamship challenged by sail;"]
                         [p "- To a pedestrian who is being overtaken by a saddled-up horse"]
                         [p "Without rider, a double-slap on its back to make it trot;"]
                         [p "- To the worker in June who, sewing without a machine"]
                         [p "Pricks her finger, a rose to hold;"]
                         [p "As he growls before attacking, a stroke"]
                         [p "In the wrong direction down the dog's back;"]
                         [p "- When he is beset on all sides, to the foul-mouthed emaciate"]
                         [p "On the verge of ruin, a shaped block for enlarging hats;"]
                         [p "- To a recluse, when outside the flags are slapping hard,"]
                         [p "Many an undulating chromatic number on the flute;"]
                         [p "- To one overwhelmed in contemplation of a storm,"]
                         [p "The information that sound travels slower than light;"]
                         [p "- To a whistler nearing the end of a song,"]
                         [p "A slap on the back for each line of the refrain;"]
                         [p "- A rest to a cock who, autumn going by apace, stamps frustratedly"]
                         [p "As dawn is delayed; - to the Wandering Jew, "
                          [hyperlink {:label "a desk-job"
                                      :on-click #(reset! footnote-one-showing? false)}] "."]]]]])
            [p "Horace, alone, with what speed to make flight;"]
            [p "- The hare sauntering through the heather"]
            [p "If finding an old piece of gruyere is out of the question;"]
            [p "- If the bottles of Clicquot are dancing,"]
            [p "The diner whose nose is turning bright red;"]
            [p "- The Yankee, if it's true that ground is more slippery"]
            [p "Than banana peel, when climbing in the Alleghany Range;"]
            [p "- The stranger, if there is not something of the vice-amoral"]
            [p "In the names \"vice-president\"; or \"vice-admiral\";;"]
            [p "- Cerberus, if he should be methodical and, before sprinkling,"]
            [p "Sniff the street-lamp with all three nostrils;"]
            [p "- The stroller on the pavement, cursing his luck,"]
            [p "Whether he can get home without catching cold, his umbrella having lost its webbing;"]
            [p "- Having become sticky and begun to pong, the sole of a shoe"]
            [p "If its twin is jealous of its good fortune;"]
            [p "- The farmer at dawn, putting on his smock,"]
            [p "Which of his cockerels has begun to crow;"]
            [p "- A conscript's shirt, when he breaks wind in the morning,"]
            [p "What purgative he has consumed;"]
            [p "- The baby kicking in the cot,"]
            [p "If in being born he caused his mother's death;"]
            [p "- The flower, if its reviving perfume, smelt"]
            [p "Under a spreading tree, will improve a stream that stinks of asparagus;"]
            [p "- A Jew at church, looking for a corner in the nave,"]
            [p "Why in God's house one must keep on one's headgear;"]
            [p "- The newspaper, which dirties its back page more,"]
            [p "Toothpaste, pills or pawned goods;"]
            [p "- In retrospect, Count Janot,"]
            [p "Whether he looks old or young;"]
            [p "- The wall, what sinful thought is his,"]
            [p "That makes the shutter beat him in the high wind;"]
            [p "- The bow whose hairs were slack before it was played,"]
            [p "How much longer it must make the dud violin sound;"]
            [p "- The thermometer placed somewhere other than the armpit"]
            [p "If the next backside can be far away;"]
            [p "- When wet, the knee"]
            [p "Of the seated Papa if the nappy has been changed;"]
            [p "- The distraught player why the ball, as if it had a mind of its own,"]
            [p "Does not run for him when he aims at the red;"]
            [p "- What it is that satisfies him who smells"]
            [p "A familiar smell as he crosses the threshold of No. 100;"]
            [p "- The bad-tempered trainer, at what winning odds"]
            [p "Does Cocote stand in the Grand Prix;"]
            [p "- If riding like a man will in the end"]
            [p "Make her bow-legged, Joan of Arc;"]
            [p "- The down-and-out, if he has found a cartwheel"]
            [p "When maliciously he touches a hunchback's hump;"]
            [p "- When a bag of sweets dangles from his hand,"]
            [p "The reader, whether the mottoes will double his pleasure;"]
            [p "- The aged astronomer if he will one day absentmindedly"]
            [p "Confuse the Swan with a sign of the Zodiac;"]
            [p "- Old folk, if Saint Martin's blessing can really"]
            [p "Make it possible simultaneously to be and to have been;"]
            [p "- The architect carrying his model, no bigger"]
            [p "Than a toy, whether people will think he's just a kid;"]
            [p "- The theologian, if the the Virgin owed her fame"]
            [p "More to her son than her "
             [popover-anchor-wrapper
              :showing? popover-showing?
              :position :below-right
              :popover [popover-content-wrapper
                        :width "300px"
                        :backdrop-opacity 0.5
                        :close-button? true
                        :tooltip-style? true
                        :no-clip? true
                        :arrow-gap 20
                        :body "Gossamer threads. A gratuitous pun: fils = \"son\" or \"gossamer\" threads"]
              :anchor
              [hyperlink {:on-click (fn [] (swap! popover-showing? not) nil)
                          :label "gossamer threads"}]] ";"]
            [p "- The animal-trainer being eaten by a wild beast, if his widow will"]
            [p "Dress correctly, without grey or mauve, in a year's time;"]
            [p "- If his children will be born deaf, he whose hand"]
            [p "Was given the day before to his first cousin;"]
            [p "- The facetious man, if it is better to look up his cobbler's work address"]
            [p "In the street-map or the "
             [popover-anchor-wrapper
              :showing? popover-two-showing?
              :position :below-right
              :popover [popover-content-wrapper
                        :width "300px"
                        :backdrop-opacity 0.5
                        :close-button? false
                        :tooltip-style? true
                        :no-clip? true
                        :arrow-gap 20
                        :body "Telephone directory. Another pun: bottine = \"street-map\" and Bottin was the name of the telephone directory."]
              :anchor [hyperlink {:on-click (fn [] (swap! popover-two-showing? not) nil)
                                  :label "telephone directory"}]] ";"]
            [p "- The man waiting for his milk to heat up"]
            [p "If he will pour it into the cup with or without its skin;"]
            [p "- If he dares risk losing his authority by taking"]
            [p "A purge of ellebore, the ultra-modern dramatist;"]
            [p "- The poet, if one can with \"Auteuil\""]
            [p "Rhyme to good effect \"comme dans un fauteuil\";"]
            [p "- The unknown painter whether from above the stairs"]
            [p "He will as a ghost witness the snobs arguing about his canvases;"]
            [p "- The explorer, far from what he holds dear,"]
            [p "Whether he'll be eaten by cannibals one day;"]
            [p "- If her baby will be bonny, the new mother who"]
            [p "Has yet to hold it in " [hyperlink {:label "her arms"
                                                    :attr {:ref from-footnote1-ref}}] ";"]
            [p "- " [hyperlink {:label "The young author"
                                :on-click #(.. to-footnote1-ref -current scrollIntoView)}] ","]
            [p "for how much longer his writings will appear "
             [hyperlink {:label "at his own expense"
                         :on-click #(reset! note-2-showing? true)}]
             ";"]
            [p "- The child, if when he puts on the ogre's big boots"]
            [p "Tom-Thumb will whistle a wish to make them dwarf-sized;"]
            [p "- The old man, reading an obituary,"]
            [p "If he is himself ready for the great journey;"]
            [p "- The President, what points he may be conceding when"]
            [p "Signing or spitting out a speech;"]
            [p "- The workman who knows he has swallowed a nail,"]
            [p "If he will find it tomorrow in his turds;"]
            [p "- The late guest risking a phoney excuse,"]
            [p "If they will bring back the soup tureen and ladle;"]
            [p "- What price if sold at auction, the hangman's noose"]
            [p "Would fetch, the heir of a hanged man;"]
            [p "- The hen, how the egg she just laid"]
            [p "Could possibly be confused with "
             [hyperlink {:label "a duck's"
                         :attr {:ref from-footnote3-ref}}] ";"]
            [p "- "
             [hyperlink {:label "The ignoramus"
                         :attr {:ref from-footnote3-ref}
                         :on-click #(.. to-footnote3-ref -current scrollIntoView)}] " who sees a boat heading for the open sea"]
            [p "Flying only a scrap of sail,"]
            [p "If she is already caught in a storm;"]
            [p "- Whose children these are, the girl whose bed,"]
            [p "To the best of her knowledge, was never occupied;"]
            [p "- The morphine addict, on what rank Epicurus,"]
            [p "When classifying pleasures, would have placed injection;"]
            [p "- The mountaineer in ecstasy on the side of a peak,"]
            [p "How in the world enough to praise the Maker;"]
            [p {:class :text-primary} "- The bird, when "
             #_[:b.text-primary "((((("]
             "the sun heating even marble"
             #_[:b.text-primary ")))))"]]
            [p "In July one dines in the shade of a tree,"]
            [p "Into which which plate it will, without holding back,"]
            [p "Let drop a fresh little souvenir for examination;"]
            [p "-  The astronomer, whether when he points a telescope at the moon"]
            [p "He will see a man walking upside down,"]
            [p "Like a fly slowly crawling across the celing;"]
            [hyperlink {:label " Fame has a horror of the new."
                        :attr {:ref to-footnote1-ref}
                        :on-click #(.. from-footnote1-ref -current scrollIntoView)}]
            [hyperlink {:label " Ignoramuses believe that the earth is flat."
                        :attr {:ref to-footnote3-ref}
                        :on-click #(.. from-footnote3-ref -current scrollIntoView)}]
            (when @note-2-showing?
              [modal-panel
               :backdrop-on-click #(reset! note-2-showing? false)
               :child
               [v-box
                :children
                [[p "for a hard worker the product would be celebrated,"]
                 [p "so that a star might appear on his forehead,"]
                 [p "only the oak tree is prosperous, invasive, shady,"]
                 [p "of which the trunk is lined with many rings already."]]]])]]]]]))))