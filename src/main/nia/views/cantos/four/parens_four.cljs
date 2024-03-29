(ns nia.views.cantos.four.parens-four
  (:require [nia.views.cantos.four.parens-four-footnotes :refer [modal]]
            [nia.views.vutils :refer [collapsed]]
            [reagent.core :as r]
            [re-com.core :refer [hyperlink p scroller v-box]]
            [re-frame.core :refer [dispatch subscribe]]))

(defn parens-four []
  (let [footnote-modal-showing? (r/atom false)]
    (fn []
      (let [show? @(subscribe [:show-collapsed?])
            collapse? (partial collapsed show?)]
        [scroller
         :height "500px"
         :class "m-3"
         :margin "10px"
         :child
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
           (collapse?
            [p {:class :text-primary} "(((((A burning fire this, but an illusion; no-one would ever run from it"]
            [p {:class :text-primary} "Or see its embers, and the hare"]
            [p {:class :text-primary} "Would never notice it making the frogs run faster)))));"])
           [p "Makes a fire which goes out, either when the patient dies"]
           [p "Or when, the fever at its peak and looking dangerous,"]
           [p "One's shining eyes and "
            [hyperlink {:label "deep blisters"
                        :on-click (fn []
                                    (dispatch [:poem/change-current-footnote :c4 :p4/fn1])
                                    (swap! footnote-modal-showing? not))}] ","]
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
                        :on-click (fn []
                                    (dispatch [:poem/change-current-footnote :c4 :p4/fn2])
                                    (swap! footnote-modal-showing? not))}]]
           [p "Started secretly "
            [hyperlink  {:label " to see who was on his side;"
                         :on-click (fn []
                                     (dispatch [:poem/change-current-footnote :c4 :p4/fn3])
                                     (swap! footnote-modal-showing? not))}]]
           [p "- As when noisily leaving a distant pistol"]
           [p "Held by a champion whose shots are always accurate,"]
           [p "A well-aimed bullet splits a lock of hair or a fly;"]
           [p "- As when a reader in bed "]
           (collapse?
            [p {:class :text-primary} "(((((his back higher than his ears,"]
            [p {:class :text-primary} "Forehead in hands, fascination keeping him awake,)))))"])
           [p "Devours some poignant passage"]
           [p "In which an unmarried mother "
            (collapse?
             [:span {:class :text-primary} "(((((who everybody thinks is well-behaved"])]
           (collapse?
            [p {:class :text-primary} "As long as her affair remains a secret)))))"])
           [p [:a {:name "fn4ret"} "Who "]
            (collapse?
             [:span {:class :text-primary} "(((((ready to join with hers his plenteous destiny)))))"])]
           [p "Is loved by a high-level financier,"]
           [p "A young employee of whom, a year after "
            [hyperlink {:label "the sin was committed,"
                        :on-click (fn []
                                    (dispatch [:poem/change-current-footnote :c4 :p4/fn4])
                                    (swap! footnote-modal-showing? not))}]]
           [p "Takes his child for a secret baptism,"]
           [p "Which will not allow him to sleep, is alas! frustrated"]
           [p [:a {:name "fn5ret"} "Because"] ", for a laugh, someone has planted in the candlestick"]
           [p "A trick candle invisibly rigged"]
           [p [hyperlink {:label "So as not to burn any more than its tip"
                          :on-click (fn []
                                      (dispatch [:poem/change-current-footnote :c4 :p4/fn5])
                                      (swap! footnote-modal-showing? not))}] ";"]
           [p "- As when he has let fly a quick sneeze"]
           [p "Followed by fervent prayers to God to bless him,"]
           [p "The man with a cold; "
            [hyperlink {:label "the sacred flame of genius"
                        :on-click #(dispatch [:routing/push-state :nia.routing.canto/four {:location :five}])}]]
           [p "Dies when its possessor grows senile"]
           (collapse? [p {:class :text-primary} "(((((A flame which, however big this name or that pseudonym,"]
                      [p {:class :text-primary} "Is not held in the same regard by everybody;"]
                      [p {:class :text-primary} "- In the same way that a man has only one puppet in the bazaar"])
           [p (collapse? [:span {:class :text-primary} "And its price-tag is attached;)))))"])
            " on his wall Balthazar"]
           [p "Saw written in ineradicable letters"]
           [p "Three words of living flame... then they disappeared;"]
           [p "The fire in one's eyes goes out when one reaches the age when, tooth by tooth,"]
           [p "Hair by hair, without any drastic shock, without any accident,"]
           [p "By the erosion of time, one's head empties;"]
           (when @footnote-modal-showing?
             [modal {:showing? footnote-modal-showing?}])]]]))))