(ns nia.views.cantos.two.parens-four
  (:require [reagent.core :as r]
            [re-com.core :refer [h-box hyperlink p popover-anchor-wrapper popover-content-wrapper scroller v-box]]
            [re-frame.core :refer [dispatch]]))

(defn parens-four []
  (let [heidelberg-showing? (r/atom false)
        sancy-showing? (r/atom false)
        stones-showing? (r/atom false)
        pouchet-showing? (r/atom false)
        penguin-showing? (r/atom false)
        crow-showing? (r/atom false)
        barrel-showing? (r/atom false)
        mark-showing? (r/atom false)
        guide-showing? (r/atom false)
        bishop-showing? (r/atom false)
        spraying-showing? (r/atom false)
        torsade-showing? (r/atom false)]
    (fn []
      [v-box
       :children
       [[h-box
         :align-self :center
         :children
         [[scroller
           :height "750px"
           :class "m-3"
           :child
           [v-box
            :children
            [[p "Moreover, when a man, with his ear pressed stethoscopically"]
             [p [:b.text-primary "((((("] "As is done to a young person to whom the Faculty"]
             [p "Has forbidden human contact and closed the window,"]
             [p "Having found him to be infected with tuberculosis,"]
             [p "Which, whilst hard on the young, respects the mature" [:b.text-primary ")))))"]]
             [p "Against this door or that wall whilst others strip him bare,"]
             [p [:b.text-primary "((((("] "Let us not forget that indeed a voice carries"]
             [p "Through a thin wall, through a door;" [:b.text-primary ")))))"]]
             [p "Sees his faults naked before him, his habits, his tastes,"]
             [p "When to his complacent eyes they seem "
              [hyperlink {:label "diminished,"
                          :on-click #(dispatch [:routing/push-state :nia.routing.canto.two/five {:id 2}])}]]
             [p "As though, choosing an opportune moment,"]
             [p "A spell had been cast to make him liable"]
             [p "To mistake:- the apparatus invented by Franklin"]
             [p "Which makes a thunderbolt harmlessly disappear into a hole,"]
             [p "For a grey thread passed through a darning-needle;"]
             [p "- For those objects which adorn the arm of a newly promoted officer,"]
             [p "A cluster of three white stars in the sky from a firework;"]
             [p "- When there's a middle line cutting it in half, for the bib"]
             [p "Of a priest, a blackboard; - the full tube with a bowl"]
             [p "Of a thermometer soon to fall,"]
             [p "For a pin with a round head;"]
             [p "- Soft, a worn-out collar which grips the dog tight,"]
             [p "For a strip encircling an umbrella; - a spiralling shower-tap"]
             [p "In a full shower installation, for a simple spiral"]
             [p "Spring; - the snuffer capping a dead candle,"]
             [p "For that which sharpens a white pencil exposing new blackness"]
             [p "Attached to a society notebook; the aquatic and stark ball"]
             [p "In the corner of a frightening dentist's, for the water-feeder"]
             [p "Of a sober canary; - for the propellor working"]
             [p "Against nothing when the swell lifts it, a disturbed mill"]
             [p "In frenzy, ravaged by a hurricane; - the monkey-"]
             [p "Wrench, positioned as if to take a nut, for a semiquaver"]
             [p "Rest; - for an egg alone on a side-plate,"]
             [p "Well salted in its centre, a scalp lowered in prayer"]
             [p "Of an aged and yellowing priest; and for a daisy"]
             [p "Without its stalk, sunnyside up"]
             [p "The egg on a plate; - for three stylish lines striped unostentatiously"]
             [p "On a shiny evening glove of magnificent whiteness,"]
             [p "Three neighbouring black keys; - a photographic tripod,"]
             [p "As the Green Ray disappears, for the discarded stalk"]
             [p "Of a triple cherry; - in passing, for the miserable"]
             [p "Jet of water produced by a bend in a hosepipe,"]
             [p "That of a park; - for a slack hammock,"]
             [p "The safety-net of a circus tightrope-walker;"]
             [p "- The insensible arrow of foreshortened descent"]
             [p "Which is plucked from a heart, for a learned goose quill"]
             [p "With red ink;"]
             [p "- a nautical flashlight which commands"]
             [p "Systematically the right to clear a path, for"]
             [p "A heavy hand-held lantern; - the jettisonings"]
             [p "Made by a balloonist who is taking off, for the internal stream"]
             [p "Of an hourglass;"]
             [p "- for an empty reel which looks"]
             [p "Like a used bobbin with a clean ribbon, a dusty"]
             [p "Drum after braiding;"]
             [p "- a removed and creased glove"]
             [p "Of a cardinal, for the massive hand-print"]
             [p "In coral from which happiness springs; in a boat,"]
             [p "For two pharmacist's spatulas,"]
             [p "The pair of oars;"]
             [p "- the knot which, sooner or later,"]
             [p "An Alsace girl wears to decorate her head,"]
             [p "For a necktie knot; - for a milestone"]
             [p "Near a bench, a menhir or a dolmen a little way off;"]
             [p "- A group who look like policemen, for the sad swarm"]
             [p "Of aimless students that one encounters on holidays;"]
             [p "- For a shaky O inscribed by a mute on his slate,"]
             [p "A circle made in one movement on a blackboard;"]
             [p "- For the shape of the neck of a bottle, the spout"]
             [p "With which a cafe terrace is sprinkled"]
             [p "In innumerable figures-of-eight; - at dusk"]
             [p "In the tropics, for a bat,"]
             [p "A vampire; - the card on which, following our condolences,"]
             [p "The family of a dead man expresses its thanks, for that"]
             [p "Of a visitor newly in mourning; - for the string"]
             [p "Around a confectioner's selected bags, the gold braid"]
             [p "On an official hat; - in a certain corridor"]
             [p "For two brackets, pointed at the bottom, in crude characters,"]
             [p "The mark indicating complete closure; - for a peach at which prudishly"]
             [p "One dare not look, a red backside"]
             [p "Of a naughty beaten child; - for the string of beads"]
             [p "Remaining on a broken set of worry-beads, the ball and chain"]
             [p "Of an old lag on penal servitude; - for that which is released"]
             [p "By a needle pricking a blister, the escape which in the desert"]
             [p "The sword of a traitor drains from the water-sack; - when, beautifully described,"]
             [p "The wind rages, a raft tossed in a whirlwind,"]
             [p "For a spinning-top; - red sign, a rhomboid marker"]
             [p "Of a phial of poison, for the central shape"]
             [p "Of the Ace of Diamonds; - for that through which eagerly"]
             [p "The afflicted myopic strains his eye,"]
             [p "A porthole; - for the sudden downpour"]
             [p "From a man watering his flowers, what falls upon one's head"]
             [p "From a shower nozzle; - when without panic"]
             [p "One puts it to the test, for two lowerings of the trapdoor,"]
             [p "Those of a house-curtain; - for the ruler which strikes,"]
             [p "All of a tremble, the outstretched fingers of schoolboys,"]
             [p "A beam in the funeral parlour; - a pillory"]
             [p "Collar for handcuffs, which to the eye"]
             [p "Only presents half; - for an obstacle"]
             [p "Surrounding a lawn, a telegraph-pole with a single"]
             [p "Wire; - a rude clown as he gibbers into the air"]
             [p "With his drum at his side, for a tambourine"]
             [p "Held up to a mirror; - when upon them, although not a blizzard,"]
             [p "It is snowing, a cluster of red eggs"]
             [p "For sugared strawberries; - in May, when bad weather is past,"]
             [p "A newly-wed in a holy place, for a lone"]
             [p "Communicant; - for a deceitful document"]
             [p "Full of cliches, a newspaper with black borders"]
             [p "Announcing the death of the proprietor; - for that which in wild music,"]
             [p "His hand in time with his steps, the Spaniard beats together,"]
             [p "A bell-clapper; - for the baton of a conductor who takes a two-four"]
             [p "At double speed, the bowsprit during foul weather"]
             [p "Of an anchored skiff; - for the card calling the insulter"]
             [p "To the small meadow, the rectangular mural in a mortuary"]
             [p "In white marble, the name in black; - when in the holy chapel"]
             [p "For the elevation, for an unconsecrated one"]
             [p "The Host being used; - when far from niggling problems,"]
             [p "Its usefulness past, it vegetates, an end of chalk"]
             [p "For a pill; - for the shining gem,"]
             [p "The uncut diamond which the jeweller prepares,"]
             [p "The "
              [popover-anchor-wrapper
               :showing? sancy-showing?
               :position :below-center
               :popover [popover-content-wrapper
                         :width "750px"
                         :no-clip? true
                         :backdrop-opacity 0.5
                         :close-button? false
                         :tooltip-style? true
                         :arrow-gap 20
                         :body "The Sancy. The Sancy diamond is a famous 55-carat stone of Indian origin."]
               :anchor
               [hyperlink {:label "Sancy"
                           :on-click #(swap! sancy-showing? not)}]] ";"]
             [p "- that instrument which a muderer dreams"]
             [p "Is ready to receive him, for a cigar-cutter;"]
             [p "- Four-sided sign, the cross, which in stations,"]
             [p "Mounted on revolving discs, makes the various lines change,"]
             [p "For a sharp sign; - in the circus a group with raised fore-parts"]
             [p "Of tall horses rearing for long stretches, for a horde"]
             [p "Of aimless sea-horses; - the thief having been captured, for the rope"]
             [p "Of an erected gibbet, blowing in a high wind,"]
             [p "A lassoo; - in the instance, reasonably frequent,"]
             [p "When its hands are in diametric opposition, a watch,"]
             [p "For a pulse-indicator; - for the glove of confrontation"]
             [p "Flying towards a certain gentleman, what is passing through the air"]
             [p "As an advertising leaflet; - the curved bill, by the determined crane"]
             [p "Lowered into a river, for an unbaited hook"]
             [p "Of an absent-minded fisherman; - the attachment which, firmly"]
             [p "Placed on its bridge, mutes a violin,"]
             [p "For a little m; - in a refreshment area"]
             [p "An intruding cayman near a fixed parasol,"]
             [p "For a lizard beneath a mushroom; - during a fracas,"]
             [p "A brown knocked-out tooth, for the pip from a fruit"]
             [p "Spat out; - for the glutton who eats a second time"]
             [p "And is squashed by a clap of the hands, his flighty cousin"]
             [p "Who escapes to the ceiling; - in a gun lodge,"]
             [p "For a pearl-tipped pin fallen from its knot,"]
             [p "The water surrounding an egg; - when a suburb is disturbed"]
             [p "By a regiment passing through, for a decorative bullrush,"]
             [p "The up-thrown swagger-stick; - for the ladder upon which dies"]
             [p "A little frog in a glass jar, that which without perishing"]
             [p "A diver uses; - for a healing tablet,"]
             [p "A pair of attractive dishes of hot food"]
             [p "Placed rim-to-rim; - when with bare arms and flying hands"]
             [p "A conjuror works and slaves, his clever juggling of rings,"]
             [p "For a new supply of key-rings; - the king of barrels"]
             [p "The " [popover-anchor-wrapper
                        :showing? heidelberg-showing?
                        :position :below-center
                        :popover [popover-content-wrapper
                                  :width "750px"
                                  :no-clip? true
                                  :backdrop-opacity 0.5
                                  :close-button? false
                                  :tooltip-style? true
                                  :arrow-gap 20
                                  :body "The Heidelberg Tun. A celebrated wine-cask of 1751 with a capacity of 49,000 gallons."]
                        :anchor [hyperlink {:label "Heidelberg Tun,"
                                            :on-click #(swap! heidelberg-showing? not)}]] " for a money-box;"]
             [p "- For the stamp which descends, covering whatever is to be read"]
             [p "With puddles of sealing-wax, a crusher at work;"]
             [p "- For the hole which a chick makes in emerging,"]
             [p "The one which the horseback acrobat leaves in the paper hoop;"]
             [p "- In a sculptor's studio, for a"
              [popover-anchor-wrapper
               :showing? pouchet-showing?
               :position :below-center
               :popover [popover-content-wrapper
                         :width "750px"
                         :no-clip? true
                         :backdrop-opacity 0.5
                         :close-button? false
                         :tooltip-style? true
                         :arrow-gap 20
                         :body [p "Pouchet. Felix-Archimede Pouchet (1800-72) was a naturalist who believed in the spontaneous generation of life from objects."]]
               :anchor
               [hyperlink {:label "Pouchet"
                           :on-click #(swap! pouchet-showing? not)}]]
              "on the heath"]
             [p "Sewing his pebbles in a line, an unhurt Deucalion"]
             [p "Throwing his " [popover-anchor-wrapper
                                 :showing? stones-showing?
                                 :position :below-center
                                 :popover [popover-content-wrapper
                                           :width "750px"
                                           :no-clip? true
                                           :backdrop-opacity 0.5
                                           :close-button? false
                                           :tooltip-style? true
                                           :arrow-gap 20
                                           :body [p "Deucalion Throwing his stones. 
                                                     In Greek myth, Deucalion built a boat in which he escaped death in the Great Flood inflicted upon
                                                     mankind by Zeus. Deucalion and his wife recreated the human
                                                     race by throwing stones behind them: his stones turned into men, hers into women."]]
                                 :anchor
                                 [hyperlink {:label "stones;"
                                             :on-click #(swap! stones-showing? not)}]]]
             [p "- as whena lion roars, brushed"]
             [p "By the huntsman's rifle, for a simple revolver"]
             [p "Frightening an enraged wild brown dog; - for a bust"]
             [p "Without a pedestal, what an enveloping sand"]
             [p "Has left visible of the Sphinx; - on washing day"]
             [p "A cloth which is coloured by the purple of menstrual fluids"]
             [p "For a handkerchief stained with nasal blood; - on the corner of streets"]
             [p "The blue plaque with the name alone, for that upon which one reads"]
             [p "The number of the house; - for that which oozes in bed"]
             [p "From a permed head of hair, the greased paper"]
             [p "Surrounding a chop; - for the disgraced ex-see-saw"]
             [p "Of an attractive rat cage, a faithful spring-board;"]
             [p "- A tunnel when voraciously full of steam,"]
             [p "For an unwell oral cavity with a cotton-wool plug;"]
             [p "- For a thimble adequately covering the longest finger on the right hand,"]
             [p "When it is turned inside-out, the magician's tumbler;"]
             [p "- For that of croupiers, so fine as they always are,"]
             [p "The dull muck-rake of red rubber;"]
             [p "- The game which to the dog appears designed to exclude him,"]
             [p "For a discarded group of, taken by the blacks, white"]
             [p "Insignificant chess pawns; - when, full of water until its sides"]
             [p "Are nearly bursting is a dinghy, those who are bailing out,"]
             [p "For a human stage-coach; - an observatory roof"]
             [p "For one, separated from its fellows, of the grand hemispheres"]
             [p "Of Magdebourg; - the child, product of secret meetings,"]
             [p "Left exposed on a round hillock, for the emerging figure"]
             [p "Of a King of gingerbread men; - when, side by side,"]
             [p "Two horses bolt, the axle to which they are chained,"]
             [p "For a low-flying arrow; - for a cut-throat"]
             [p "Razor in leather, the menu which is encased"]
             [p "In a rectangular frame; an avaricious burn-to-the-end candlestick"]
             [p "For a flat-headed drawing-pin out on its own"]
             [p "With its point upwards; - in Switzerland, at the bazaar, for a curved"]
             [p "Eye-lash which has fallen from a moist eye, a black horn"]
             [p "From a chamois; - hanging from its nail, a frying-pan,"]
             [p "For a stopped pendulum in need of rewinding;"]
             [p "- In a carriage which is being made ready,"]
             [p "Man's degrading harness, for braces;"]
             [p "- In the sinner's house, an elegant lace cushion,"]
             [p "For the pin-cushion in which sits happily, hole-less, a hem;"]
             [p "- Put on by the tired fencer, a protective mask,"]
             [p "For an eye-protector worn like spectacles"]
             [p "By a stone mason; - the forehead with a network of wrinkles"]
             [p "Of an old man, for the upper side of a fist;"]
             [p "- For the disarrayed blackdrape of a lens-focusser,"]
             [p "That with which, in windy weather, fastened at four corners one covers"]
             [p "A coffin; - the albumn of portraits, if it be opened only"]
             [p "By besting one or two clasps, for a  parish register;"]
             [p "- For a vulgar bell-pull, the hook on its rump which"]
             [p "Nobly takes the place of five fingers for the"
              [popover-anchor-wrapper
               :showing? penguin-showing?
               :position :below-center
               :popover [popover-content-wrapper
                         :width "750px"
                         :no-clip? true
                         :backdrop-opacity 0.5
                         :close-button? false
                         :tooltip-style? true
                         :arrow-gap 20
                         :body [p "Nobly takes the place of five fingers for the penguin. Specifically, the manchot."]]
               :anchor
               [hyperlink {:label "penguin"}]] ";"]
             [p "- The sling in which an arm is put, for that object in which, ten"]
             [p "times its normal size"]
             [p "A cheek is buried, when one has toothache;"]
             [p "- As it makes iron soft for bending,"]
             [p "For a hearth-bellows, a forge-bellows;"]
             [p "- For that which a cougher shows a throat'specialist,"]
             [p "An arched cavern, reddened by the sunset"]
             [p "With a single stalactite; - a pool of flowing blood"]
             [p "In a suspicious place, for the damned phlegm"]
             [p "Of the consumptive; - at the saddler's, the strap in which, empty,"]
             [p "A stirrup flashes, for a bright handle strap"]
             [p "Of a yellow umbrella; - for the treacherous cursed shot"]
             [p "That an eater of game spits aside at the devil,"]
             [p "A cannonball cleaving the air; - when irremediably"]
             [p "The inundation spatters it, a cardboard target,"]
             [p "For the 'double-ace' of dominoes; - seeing it depart,"]
             [p "For a flying cork that is released, a cylindrical"]
             [p "Lift; - for the frail arrow which indicates North,"]
             [p "An absent fisherman's line floating across"]
             [p "A dock; - of a sentinel at his hazardous post"]
             [p "In the shooting range, on his white stand, for a Chinese shadow,"]
             [p "The black silhouette; - a saturnine pair"]
             [p "Of boleadores at full stretch, flying strings held,"]
             [p "For a dumbbell; - when the fencer makes a cut,"]
             [p "For a snake, his foil proud to be bent;"]
             [p "- For the mouth of the barrel swallowing without trickery"]
             [p "A well-thrown discus, the one into which the cheese falls from"]
             [p "The "
              [popover-anchor-wrapper
               :showing? crow-showing?
               :position :below-center
               :popover [popover-content-wrapper
                         :width "750px"
                         :no-clip? true
                         :backdrop-opacity 0.5
                         :close-button? false
                         :tooltip-style? true
                         :arrow-gap 20
                         :body [p "The one into which the cheese falls from/The crow. A reference to
                         Aesop's fable of the crow who is flattered into dropping his
                         cheese by the fox."]]
               :anchor
               [hyperlink {:label "crow"
                           :on-click #(swap! crow-showing? not)}]] ";"]
             [p "- the registered letter which looks so neat"]
             [p "When placed off centre, address against the table,"]
             [p "For a 'five' of red suit; - for the intractable trident"]
             [p "Which raises oysters to the gob, the one which outdoors"]
             [p "Hoists the hay into the barn; - when in front of two stage-sets"]
             [p "Separated by a wall a cloud-covered curtain falls,"]
             [p "For a veil lowered over a thin nose; - when, bared,"]
             [p "They cross one another, for wide-open scissors,"]
             [p "Two free blades; - when their green shutters are closed,"]
             [p "A block of white houses in a sleeping street,"]
             [p "For a piece of Roquefort; - a sloping lawn where snakes"]
             [p "A hosepipe, for a wise old bird's shoulder"]
             [p "On which a long hair is strewn; - for a hotel corridor"]
             [p "With hanging key-number tags, a rich boulevard"]
             [p "Full of signposts; - blinded by nervousness,"]
             [p "For the child with a blindfold in blind-man's-bluff,"]
             [p "An aged parliamentarian; -in the market, when jovially"]
             [p "He roves around under its cover, for that of the Holy Father,"]
             [p "The white hat of a stall-owner; - assiduously toiling,"]
             [p "For that which a lucky thrower gets into the mouth of a :"
              [popover-anchor-wrapper
               :showing? barrel-showing?
               :position :below-center
               :popover [popover-content-wrapper
                         :width "750px"
                         :no-clip? true
                         :backdrop-opacity 0.5
                         :close-button? false
                         :tooltip-style? true
                         :arrow-gap 20
                         :body [p "For that which a lucky thrower gets into the mouth of a barrel. A
                                   reference to a variant of quoits in which large rings are thrown at
                                   the mouth of a barrel."]]
               :anchor
               [hyperlink {:label "barrel"
                           :on-click #(swap! barrel-showing? not)}]] ","]
             [p "The cold-bath wheel of a water-mill; - a white panel"]
             [p "Which is fronted by a full umbrella-stand occupied in five places,"]
             [p "For blank music-paper; - for one of the mirrors"]
             [p "Which produces a magnified reflection of teeth for the dentist,"]
             [p "A barber's concave mirror; - for the whistle"]
             [p "Made by inserting two fingers into the mouth, a game of 'graces'"]
             [p "Before the ring is thrown from the wand; - for the greasy pronged bone"]
             [p "Which on a special chicken day, for good fortune, is broken in two,"]
             [p "A dusty spur; - for two quickly shed tears,"]
             [p "That which a man with an uncontrolled cold expels"]
             [p "Using his fingers as a handkerchief; - on a windless day,"]
             [p "For an empty inkwell which is refilled with ink, a bucket"]
             [p "Being filled with ashphalt; - when it is signalling from a vessel,"]
             [p "An arm holding a red object, for a match"]
             [p "Which is hard to extinguish; - for what before being reinserted"]
             [p "A cork shows, words carved in the trunk"]
             [p "Of a felled tree; - when, ungloved from the elbow upwards,"]
             [p "It is pressed against the wall, a model's naked arm,"]
             [p "For an index finger; - when a mother bravely"]
             [p "Opens a cradle, the white curtains, for two pages"]
             [p "As yet uncut that are being separated; - as they zigzag without eyeholes,"]
             [p "A soft yellow metre-long tape measure,"]
             [p "For sandal laces; - when, so that his comings-and-goings"]
             [p "Can be better heard a child wears it, a ringing hoop,"]
             [p "For a watch-spring; - in a luxurious staircase"]
             [p "A carpet bar, for the copper hinge"]
             [p "Of a small box being emptied; - for the punctuation mark suitable to follow"]
             [p "If you please, that which a black terrier, walking in front,"]
             [p "Presents to his" [popover-anchor-wrapper
                                   :showing? mark-showing?
                                   :position :below-center
                                   :popover [popover-content-wrapper
                                             :width "750px"
                                             :no-clip? true
                                             :backdrop-opacity 0.5
                                             :close-button? false
                                             :tooltip-style? true
                                             :arrow-gap 20
                                             :body "Punctuation mark > Presents to his master. i.e. !"]
                                   :anchor
                                   [hyperlink {:label "master"}]] ";"]
             [p "- for what is removed"]
             [p "From inside the shell of an egg by a spoon,"]
             [p "The cuff of a pope; - a beautiful cabin roof"]
             [p "Covered with snow, for a learned book standing spine uppermost"]
             [p "And newly covered with a blank sheet of paper; - when, as it must,"]
             [p "A horse excretes on the verge, the product, for boules"]
             [p "Jacks on a billiard table; - for that which from hens"]
             [p "Is carried out with the passage of eggs, the splashes"]
             [p "On a calf which is white at the bottom; - the worrying bones found"]
             [p "At the bottom of a pond, for the bits left on the plate"]
             [p "By an eater of offal; - for two teeth which break"]
             [p "A small piece of bread, the two white fingers of a valet who, wearing gloves"]
             [p "Without using his thumb, picks up a crouton; - when in comradeship"]
             [p "Two blacks stroll along together arm in arm, for two clumsy"]
             [p "Fish-hooks tangled together; - for the needle of rapid"]
             [p "Stitches which hypnotizes the tailor whose foot operates it,"]
             [p "A sledge-hammer; - when on a Sunday-best day a dreamer"]
             [p "Sits down, the suit which he undoes, for a pair"]
             [p "Of false whiskers left out; - for the kennel"]
             [p "Of a guard dog, its back against a wire fence,"]
             [p "A booth with a grill; - a red-hot firebrand"]
             [p "In a brazier, for the ruby which is displayed"]
             [p "In his handiwork by a jeweller; - the rounded hand of a scribe,"]
             [p "For the shorthand of a cafe waiter;"]
             [p "- For the inverted pocket which on the arrival of the bailiff"]
             [p "Is pulled from a cowardly pair of trousers, the meagre flat bag"]
             [p "Destined for a horse's muzzle; - for two dice shaken"]
             [p "In their shaker, two white cubes taken together,"]
             [p "Sugaring an empty cup; - the large object used"]
             [p "As a sign, for that which is attached to respectable houses,"]
             [p "A dirty number; - for the object whose wet"]
             [p "Lines confide their secrets to the blotting-paper,"]
             [p "A tube in a park; - for a gossip's little finger"]
             [p "Cleaning an inquisitive ear, a stiff index"]
             [p "Which is attracted to its own nostril; - sober assistant,"]
             [p "A "
              [popover-anchor-wrapper
               :showing? guide-showing?
               :position :below-center
               :popover [popover-content-wrapper
                         :width "750px"
                         :no-clip? true
                         :backdrop-opacity 0.5
                         :close-button? false
                         :tooltip-style? true
                         :arrow-gap 20
                         :body "Guide-ane. A ruled sheet placed beneath another sheet of paper to
guide the hand in straight lines when writing."]
               :anchor
               [hyperlink {:label "guide-ane"
                           :on-click #(swap! guide-showing? not)}]] ", for a stripe-fronted"]
             [p "Corset; - when, quickly, a frightened credulous individual"]
             [p "Makes the horned sign of the cuckold, his hand, for the attentive head"]
             [p "Of a wandering snail; - for the same imaginary"]
             [p "Hand in a luxurious white glove, a donkey's cap;"]
             [p "- When an oculist opens the doors of its case,"]
             [p "The card hanging on the wall full of ranks of letters,"]
             [p "For a page of the ABC;"]
             [p "- for a "
              [popover-anchor-wrapper
               :showing? bishop-showing?
               :position :below-center
               :popover
               [popover-content-wrapper
                :width "750px"
                :no-clip? true
                :backdrop-opacity 0.5
                :close-button? false
                :tooltip-style? true
                :arrow-gap 20
                :body [p "False Bishop <; The Queen. In chess a Queen can move diagonally,
                        like a Bishop."]]
               :anchor [hyperlink {:label "false Bishop"
                                   :on-click #(swap! bishop-showing? not)}]] ","]
             [p "When she chooses to make his sliding move,"]
             [p "The Queen; - on the top of a funeral carriage, a cross"]
             [p "Of violets, for a dusty cross"]
             [p "Of amethysts on a black jewel-case; - an arm-rest"]
             [p "In a railway carriage, for the covered end of an old riding-crop;"]
             [p "- For the little balls with which, at the dining-table, a drunken prankster"]
             [p "Bombards the mouth of his friend, the crashing heavy spheres"]
             [p "Of basketball; - crutches leaning against a wall in Lourdes,"]
             [p "For the upside-down page of a small scholar's attempts"]
             [p "At capital A; - the crouton through lack of appetite,"]
             [p "Left, when covered by the unfolded serviette,"]
             [p "For the finger of a white glove; - forgotten,"]
             [p "A wedding-ring in the bright corner of a bathroom,"]
             [p "For the golden O on a stylish envelope; - looking for the missing bobbin,"]
             [p "For a reel of English taffeta, a piece"]
             [p "Of rolled-up rose-coloured satin; - a balloon, for the type"]
             [p "Of string covered pouch that one uses for "
              [popover-anchor-wrapper
               :position :below-center
               :showing? spraying-showing?
               :popover
               [popover-content-wrapper
                :width "750px"
                :no-clip? true
                :backdrop-opacity 0.5
                :close-button? false
                :tooltip-style? true
                :arrow-gap 20
                :body [p "*String-covered pouch that one uses for sraying. i.e. like a"]]
               :anchor [hyperlink {:label "spraying"
                                   :on-click #(swap! spraying-showing? not)}]] ";"]
             [p "- When from a bottom is expelled an egg for collection,"]
             [p "For that from a goat, slowly into the enclosure"]
             [p "Relieving himself; - for the remains, following an accident,"]
             [p "Of a silent mitten, a set of panpipes;"]
             [p "- For the gold watch which is going, tickling the ear"]
             [p "Of a legless boozer with a white waistcoat, the silent"]
             [p "Warming pan that is taken out of a bed; - whilst it ascends"]
             [p "A child's balloon escaping into a blue sky,"]
             [p "For the red stamp of a bailiff; - a blackboard"]
             [p "Being cleaned with a damp cloth, for the high forehead of a negro"]
             [p "Who, sponging himself, moistens a handkerchief; - for a swift"]
             [p "Lead pencil, his moistened finger outlining a name"]
             [p "On a misty window-pane; - the same saying no"]
             [p "Serving, horizontally, for a dark needle"]
             [p "On a moving compass; - that tepid caster of shadow"]
             [p "When the sun is obscured, for a parasol, a wall"]
             [p "Of a tent with a flat roof; - for a white hair from an old person's"]
             [p "Blonde head, the cigarette containing a blend of Havanas;"]
             [p "- For two rings gripping badly the diaphanous fingers"]
             [p "Of the skinny person, those in the circus through which two arms are thrust;"]
             [p "- The secured paper on which sits an unused pair of compasses"]
             [p "Belonging to an absent geometrician, for a stopped watch"]
             [p "Square in shape; - ready to be surprised if the distance is great,"]
             [p "For a map measuring-wheel in use, the front wheel"]
             [p "Of a wheelbarrow; - when of a performing horse"]
             [p "The flanks have described their circle, for a "
              [popover-anchor-wrapper
               :position :below-center
               :showing? torsade-showing?
               :popover
               [popover-content-wrapper
                :width "750px"
                :no-clip? true
                :backdrop-opacity 0.5
                :close-button? false
                :tooltip-style? true
                :arrow-gap 20
                :body [p "Torsade. An ornament, usually of horsehair, consisting of filaments
                          wound into a spiral."]]
               :anchor [hyperlink {:label "torsade"
                                   :on-click #(swap! torsade-showing? not)}]] "."]
             [p "With fixed feet; - during changeable weather,"]
             [p "When it creates a letter V, the indicating needle,"]
             [p "For the split end of a hair; - for two big toes"]
             [p "Seen through a hole in the stockings, that which encases an injured person"]
             [p "And protrudes from the bottom of his trousers; - for of the dull salad"]
             [p "The greater part, the white pieces piled up on a chequered surface"]
             [p "By a gossip with careless fingers; - for the first"]
             [p "Piece of silken paper fallen from a map made in layers,"]
             [p "A grey glass paving-slab; - for that which a sole"]
             [p "With several nails has left imprinted in droppings,"]
             [p "A solitaire set without pegs; - when it is grasping"]
             [p "Nothing, a holy armband on display, for a flamboyant"]
             [p "Knot tied of an evening; - a black moustache severely"]
             [p "Lacking in substance, if the nose punctuates its arc,"]
             [p "For a pause-mark; - when a park shines in the rain,"]
             [p "The intact bottom of a broken flower-pot, for a"]
             [p "Yellow patch with a hole; - when they swing in the evening,"]
             [p "For runner beans spilling from a plate, the narrow"]
             [p "Slats of a shutter; - and later, in places"]
             [p "Of commerce, heaped up yellow envelopes, for the potatoes"]
             [p "That a frier has prepared badly; - for the grey figures"]
             [p "Made of paper dangling from a ceiling on the end of a string,"]
             [p "Hanged men after a snowstorm; - product of a polite"]
             [p "Kiss, the round stain on a white glove, for a mark"]
             [p "From a sputtering blowtorch; - for that which a monarch"]
             [p "Has for giving assent, the marble hand made after"]
             [p "The right hand of a beauty; - enticed by progress,"]
             [p "A Redskin in a suit, for a kid with measles;"]
             [p "- In view of its striations, for a prized pond"]
             [p "Used for skating, a track used"]
             [p "For launching boats; - for the colourless mouth"]
             [p "Of an anaemic who is smoking in bed, a candle in a saucer;"]
             [p "- When a hustler cues up, his non-red billiard ball,"]
             [p "For a round pearl with a pale gold stem"]
             [p "That is being removed from a green ribbon; - the friendly appendage"]
             [p "Of a grey dog, for the noisy antenna of a metronome;"]
             [p "- For the inner rectangle with which a tailor tags our clothes,"]
             [p "The address upon it, an envelope with tough"]
             [p "Sides made of linen; - Unfairly angry in advance of future blows,"]
             [p "The beater at a concert, for the bunched end"]
             [p "Of a painter's maulstick; - for the round hole of an ordinary"]
             [p "Pencil-sharpener, an empty container for heavy buttons;"]
             [p "- For two clogs clashing to re-heat the contained big toes,"]
             [p "Two pitching boats at anchor during the equinox"]
             [p "Meeting head-on; - on a day when there's no boxing-match,"]
             [p "A leather ball in flight, for the gloved fist"]
             [p "Of an opponent; - a good deal in which, on a recent"]
             [p "Round, a lucky ten of Spades is turned over,"]
             [p "For a double five; - for the grey hair which sticks"]
             [p "In the questing pair of tweezers, a bar"]
             [p "Of iron secured by a virile clamp;"]
             [p "- For a humble chapel in which heads get bumped,"]
             [p "The gigantic cathedral which stands in Cologne;"]
             [p "- The savage iceberg, found at the North Pole,"]
             [p "For the narrow block of domestic ice, portable,"]
             [p "Which into pieces for glasses, in the pantry, is crushed;"]
             [p "- To a fisherman, for a louse in a hair-net,"]
             [p "A lazy water-spider investigating a fishing-net;"]]]]]]]])))