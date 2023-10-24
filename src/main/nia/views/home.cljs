(ns nia.views.home
  (:require [clojure.edn :as edn]
            [re-com.core :refer [at hyperlink hyperlink-href p title v-box]] 
            ["react" :refer [createRef]]
            [shadow.resource :refer [inline]]))

(defn preface []
  (let [preface (edn/read-string (inline "preface.edn"))]
    [v-box
     :src (at)
     :justify :center
     :align :center
     :children
     [[title
       :level :level2
       :label [:b "Preface"]]
      preface]]))

(defn introduction []
  (let [intro-ref (createRef)]
    [v-box
     :width "750px"
     :align :center
     :children
     [[title
       :level :level2
       :style {:align-self :center}
       :label [:b "Nouvelles Impressions d'Afrique"]]
      [title
       :level :level2
       :style {:align-self :center}
       :label "(New Impressions of Africa)"]
      [title
       :level :level4
       :style {:align-self :center
               :margin "10px 0px"}
       :label "by Raymond Roussel (1877-1933)"]
      [title
       :style {:align-self :center}
       :label [:p "translated, "
               [hyperlink {:label "introduced"
                           :on-click #(.. intro-ref -current scrollIntoView)}]
               ", and, prefaced" 
               " by " [hyperlink-href {:label "Andrew Hugill"
                                       :href "https://andrewhugill.com/"}]]]
      [preface]
      [:hr]
      [title
       :level :level2
       :label [:b {:ref intro-ref} "Introduction"]]
      [p [:p.lead.d-block "Going by his own account, Roussel wrote these New Impressions between 1915 and 1928 in an estimated 19,110 hours of work."]
       [p "They were published in 1932 in a single volume with his poem L'Ame de Victor Hugo. 
          Despite the considerable length of these two works taken together, Roussel decided that the book was insufficiently filled and,
          through the good offices of the Goron detective agency, commissioned a commercial artist named Henri Zo to provide 59 illustrations. 
          Roussel supplied Zo with simple verbal descriptions for each image and, without ever meeting the artist, accepted the results that emerged.
          The illustrations were printed only on the recto of the pages however,
          which meant that they would have to be cut in order to view the hidden images."]]
      [p "The title suggests a sequel to his Impressions d'Afrique, but the connection with that book seems 
          to exist principally at the level of Roussel's famous \" procedure. \" Apart from a brief mention of Ejur,
          and cryptically to himself as \" a false explorer \" there is little direct reference to the Impressions.
          Where the Africa of the earlier text was purely imaginary, this contains real locations: the Nile, the Battlefield of the Pyramids, etc. but these are presented only as starting-points for the remarkable series of parenthetical thoughts they engender, as if they are seen in a picture-postcard (or, as in La Vue, sealed in a miniature glass in the barrel of a pen) rather than in reality."]
      [p "But another connection does exist between the two titles, namely: impression a fric, that is to say \" a publication at the author's own expense \" and so: \" a new publication at the author's own expense. \" Roussel's fascination with the layout of the book as a physical object, his bizarre use of punctuation, and the dimly perceived presence of his \"poetic method\" all serve to remind the reader that the extraordinary content of the New Impressions may be read only as part of the total picture - a picture that remains to a large degree enigmatic, despite the amazing exegeses of Jean Ferry and the College of 'Pataphysics."]
      [p "The poem comprises four enormous Cantos, each of which contains a single sentence. Each sentence starts out as a simple poetic statement or description, but within a few lines Roussel opens the first of a series of parentheses which run to maximum of five brackets-within-brackets. These parenthetical interludes themselves contain sub-thoughts indicated by dashes or semicolons. And every so often, one comes across a footnote referring one to a further poem containing its own onion-like sets of brackets. All the cantos, and the footnotes, are written in rhyming Alexandrines (French heroic verse of six feet), an extraordinary poetic achievement in its own right, but made all the more so when one begins to appreciate the self- imposed constraints under which Roussel was working."]
      [p "In Canto IV, which contains a rare moment of direct autobiographical statement in the lines"]
      [:blockquote.blockquote.w-50
       [p "...the sacred flame of genius "
        [:b.text-primary "((((("]
        "Which makes the one chosen by it so arrogant
    That he finds the very stars in the sky pitiful
    Compared with the new star that burns upon his forehead..." [:b.text-primary ")))))"]]]
      [p "(The image of the star on the forehead of the genius was one which Roussel associated with himself, even giving it as the title of a late play: L'Etoile au Front), in Canto IV there is another brief and incomplete moment of revelation. The fourth footnote lists a collection of words whose \"meanings change depending on their context.\" Here, the reader will recognise many of the tiny recurring ideas which crop up in various guises throughout all four Cantos. Evidently the procedure described in his Comment j'ai ecrit certains de mes livres (How I wrote certain of my books) is at work again here, in some new and rigorous form."]
      [p "The most extraordinary sections of the Nouvelles Impressions... however, are the lists growing from the seed of an idea. We read lists of people affected by fortune's wheel, lists of ways in which animals show greater forbearance than mankind, lists of things that diminish, and many others. Most extraordinary of all is the massive list in Canto II of things that might be mistaken for other things. Consideration of the latter will give an idea what makes these lists so remarkable. It grows from the image of a man listening at a wall and overhearing some other people discussing the faults in his character. Complacent, he had not noticed these faults, just as though he was under a spell which made him \"liable to mistake:- ...\""]
      [p "What follows is a list of visual correspondences, mistakes that one would never make unless bewitched. Page after page, the list goes on in a kind of delirium of mutability. Partly it resembles an extended session of \"word association\" in psychoanalysis, partly an example of Leonardo da Vinci's definition of genius as \"the ability to make connections.\" Some of the \" mistakes \" are strange and beautiful, such as:"]
      [:blockquote.blockquote.w-50
       [p "- when upon them, although not a blizzard,
    It is snowing, a cluster of red eggs
    For sugared strawberries;"]]
      [p "and some are so straightforward as to be banal, e.g:"]
      [:blockquote.blockquote.w-50
       [p "- As it makes iron soft for bending,
    For a hearth-bellows, a forge-bellows;"]]
      [p "but they succeed one another with a sense of absolute equivalence."]
      [p "Reading the New Impressions is not easy. Juan-Esteban Fassio, of the College de 'Pataphysique, has even invented a machine to do it: a kind of card index on a revolving drum with a handle. The presence of parentheses within parentheses within parentheses to seemingly infinite regress stretches the memory beyond the point where it can follow the multiple trains of thought. Flicking back and forth is not without its hazards too: not all the parenthetical rings sit neatly within one another. Canto II, for example, dips in and out of the fourth parenthesis at irregular intervals, sometimes with only a single line in which to reconnect with the original chain of meaning. But as one works at figuring out the various trains of thought, the poem gradually focusses into a splendid simplicity, like music. Roussel himself was a musician and the structuring of these images and ideas resemble musical form more than poetic form."]
      [p "Perhaps it was for that reason that I decided to translate Nouvelles Impressions d'Afrique, back in the early 1980's. As a composer, I found its musicality irresistible: the sense of an object of pure form whose detail was clear but whose origins were uncertain. Or perhaps it was simply for the good of my 'pataphysical soul. In any event, I set out to make a translation which would merely clarify the meaning of the text. I had no ambition to attempt a rhymed version. Kenneth Koch had already translated Canto III* in this way and, although I found it immensely impressive on a technical level, I felt it lacked clarity. Nevertheless, doubtless in deference to him, I never did translate Canto III, hence its omission here."]
      [p "So my translation is really just a humble \"reader's guide\" to the text. The versification which adds so much grandeur (and, it has to be said, creates many grammatical problems too) to the original is, of course, missing. Nevertheless, I have generally kept words to the lines of the poem in which they originally appeared, insofar as clarity allows. Roussel's strict rhyme-scheme obliged him to create some strange word-orders at times..."]
      [p "I made much use of Jean Ferry's two seminal commentaries** on the poem to help me unravel its mysteries. I would also like to thank Terry Hale and Alastair Brotchie for their useful comments, on the strength of which I have made a number of revisions to my original translation. Perhaps a suitable epigraph for the finished result is the one that appears in the third footnote to Canto IV:"]
      [:blockquote.blockquote.w-50
       [p "...should one decide never to see someone again
    Because a grammatical error has appeared in that person's
    translation?"]]
      [p [:i "[Note: In the poems that follow, Roussel's poetic footnotes are given by numbers and appear at the bottom of the page, translator's notes are marked with asterisks and follow each canto.]"]]]]))