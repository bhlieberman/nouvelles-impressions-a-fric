(ns nia.views.cantos.four.parens-four
  (:require [nia.views.cantos.four.parens-four-footnotes :refer [modal]]
            [reagent.core :as r]
            [re-com.core :refer [hyperlink p v-box]]
            [reitit.frontend.easy :as rfe]
            ["react" :refer [createRef]]))

(defn parens-four []
  (let [footnote-modal-showing? (r/atom false)
        footnote-five-ref (createRef)]
    (fn []
      [v-box
       :margin "10px 0px"
       :children
       [[p "a star that appears to us today"]
        [p "Like a fire whose twinkling light has penetrated through,"]
        [p "Will, when water has covered all the bare earth"]
        [p "Except for peaks as yet unclimbed,"]
        [p "Already be one of the extinct worlds..."]
        [p "All fires go out, within us as in nature:-"]
        [p "On the envelopes which one can only obtain with a counter-signature"]
        [p "The sender has extinguished each seal with a puff;"]
        [p "- Old age puts out certain fires: tireless, the young cock"]
        [p "Takes all-comers, pullets, hens at point-of-lay, old chickens..."]
        [p "The mature cockerel uses his discretion; - inside cowards"]
        [p "Is a flame which never fails to burn when danger is present"]
        [p [:b.text-primary "((((("]
         "A burning fire this, but an illusion; no-one would ever run from it"]
        [p "Or see its embers, and the hare"]
        [p "Would never notice it making the frogs run faster" [:b.text-primary ")))))"] ";"]
        [:a {:name "fn1ret"} "fever"]
        [p "Makes a fire which goes out, either when the patient dies"]
        [p "Or when, the fever at its peak and looking dangerous,"]
        [p "One's shining eyes and "
         [hyperlink {:label "deep blisters"
                     :on-click #(swap! footnote-modal-showing? not)}] ","]
        (when @footnote-modal-showing?
          [modal {:showing? footnote-modal-showing? :ref footnote-five-ref}])
        [p "- Fever makes even adults grow, it's a well-known fact -"]
        [p "Gradually transform into blooming convalesence,"]
        [p "And ravenous hunger drives one to eat like a hundred men,"]
        [p "With a tongue which is once more good and red;"]
        [p "The fire which patiently diminishes a candle"]
        [p "Goes out; - like the hammer that falls when one sells"]
        [p "A building at an auction; -"
         [:a {:name "fn2ret"} "as"] " under a gust of wind,"]
        [p "When a king is saved from a burning building,"]
        [p [:a {:name "fn3ret"} "A fire "] "which the heir "
         [hyperlink {:label "who would benefit from his death"
                     :on-click #(swap! footnote-modal-showing? not)}]]
        [p "Started secretly "
         [hyperlink  {:label " to see who was on his side;"
                      :on-click #(swap! footnote-modal-showing? not)}]]
        [p "- As when noisily leaving a distant pistol"]
        [p "Held by a champion whose shots are always accurate,"]
        [p "A well-aimed bullet splits a lock of hair or a fly;"]
        [p "- As when a reader in bed " [:b.text-primary "((((("] "his back higher than his ears,"]
        [p "Forehead in hands, fascination keeping him awake," [:b.text-primary ")))))"]]
        [p "Devours some poignant passage"]
        [p "In which an unmarried mother " [:b.text-primary "((((("]
         "who everybody thinks is well-behaved"]
        [p "As long as her affair remains a secret" [:b.text-primary ")))))"]]
        [p [:a {:name "fn4ret"} "Who "] [:b.text-primary "((((("]
         "ready to join with hers his plenteous destiny" [:b.text-primary ")))))"]]
        [p "Is loved by a high-level financier,"]
        [p "A young employee of whom, a year after "
         [hyperlink {:label "the sin was committed,"
                     :on-click (fn []
                                 (swap! footnote-modal-showing? not)
                                 (.. footnote-five-ref -current scrollIntoView))}]]
        [p "Takes his child for a secret baptism,"]
        [p "Which will not allow him to sleep, is alas! frustrated"]
        [p [:a {:name "fn5ret"} "Because"] ", for a laugh, someone has planted in the candlestick"]
        [p "A trick candle invisibly rigged"]
        [p [hyperlink {:label "So as not to burn any more than its tip"
                       :on-click #(swap! footnote-modal-showing? not)}] ";"]
        [p "- As when he has let fly a quick sneeze"]
        [p "Followed by fervent prayers to God to bless him,"]
        [p "The man with a cold; "
         [hyperlink {:label "the sacred flame of genius"
                     :on-click #(rfe/navigate :nia.routing.canto.four/five {:id 4})}]]
        [p "Dies when its possessor grows senile"]
        [p [:b.text-primary "((((("]
         "A flame which, however big this name or that pseudonym,"]
        [p "Is not held in the same regard by everybody;"]
        [p "- In the same way that a man has only one puppet in the bazaar"]
        [p "And its price-tag is attached;" [:b.text-primary ")))))"] " on his wall Balthazar"]
        [p "Saw written in ineradicable letters"]
        [p "Three words of living flame... then they disappeared;"]
        [p "The fire in one's eyes goes out when one reaches the age when, tooth by tooth,"]
        [p "Hair by hair, without any drastic shock, without any accident,"]
        [p "By the erosion of time, one's head empties;"]
        [:hr]]])))