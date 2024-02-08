(ns nia.views.cantos.two.parens-two
  (:require [nia.views.vutils :refer [collapsed]]
            [reagent.core :as r]
            [re-com.core :refer [hyperlink h-box modal-panel p scroller v-box]]
            [re-frame.core :refer [dispatch subscribe]]))

(defn parens-two []
  (let [footnote-one-showing? (r/atom false)]
    (fn []
      (let [show? @(subscribe [:show-collapsed?])
            collapse? (partial collapsed show?)]
        [v-box
         :children
         [[h-box
           :align-self :center
           :justify :start
           :children
           [[scroller
             :height "500px"
             :margin "10px"
             :child
             [v-box
              :children [[p "In what guises does a cross appear! a constellation"]
                         [p "Takes its shape in the southern heart of the heavens;"]
                         [p "Speaking figuratively, we all have one to bear;"]
                         [p "When a deserved success achieved by another"]
                         [p "Earns the praise of one of those jealous people"]
                         [p "Who is being made old by ill-tempered grumblings -"]
                         [p "Their clouded minds lacking any innate flame -"]
                         [p "His acquaintances make one in the fireplace;"]
                         [p "Without fail, once a year - during Lent -"]
                         (collapse? [p {:class :text-info} "(((At least for the short period that he takes part in the ritual of sackcloth"]
                                    [p {:class :text-info} "Because he believes in Hell and is terrified of ending up there"])
                         [p "The Christian makes one on his forehead in ashes;"]
                         [p "When deliberately " (when show? [:span {:class :text-info} "the prospect of an imminent meal)))"])]
                         (collapse? [p {:class :text-info} "(((Quickens the step like nothing else;"]
                                    [p {:class :text-info} "As a carriage steers towards the hay-rack,"]
                                    [p {:class :text-info} "The horses paw the air without being touched by the whip,"]
                                    [p {:class :text-info} "As though descended from thoroughbreds;)))"])
                         [p "One arrives at a restaurant at a moment when the rest"]
                         [p "Are seated at their assigned places with hearty appetites,"]
                         [p "Often, through the "
                          [hyperlink {:label "glass"
                                      :on-click #(swap! footnote-one-showing? not)}]
                          " of the door, next to an oven,"]
                         [hyperlink {:on-click #(dispatch [:routing/push-state :nia.routing.canto/two {:location :three}])
                                     :class "text-info"
                                     :label "One sees, forming the shape of a cross,"}]
                         [p "Two knives, clicking as they are sharpened by a carver;"]
                         (when @footnote-one-showing?
                           [modal-panel
                            :backdrop-on-click #(reset! footnote-one-showing? false)
                            :child [scroller
                                    :class "m-3"
                                    :height (if show? "300px" "200px")
                                    :child
                                    [v-box
                                     :children
                                     [[p "If mankind, when building, used only transparent material"]
                                      (collapse? 
                                       [p {:class :text-danger} "(This is by way of a friendly interlude cutting short a recitation,"]
                                       [p {:class :text-danger} "An absent-minded note, to keep you awake at night),"])
                                      [p "He would kill off more than one calumny"]
                                      (collapse? 
                                       [p {:class :text-danger} "(And the sun, in short, would illuminate lessons!)"])
                                      [p "But to what extent would they continue, however, to hold sway!"]
                                      [p "Those amongst us, alas! who join in maintaining"]
                                      (collapse?
                                       [p {:class :text-danger} "(Although without doubt, even in its early days,"]
                                       [p {:class :text-danger} "Ancient man never saw its back)"])
                                      [p "That the moon " (collapse? [:span {:class :text-danger} "(that world where silence reigns,"])]
                                      (collapse? 
                                       [p {:class :text-danger} "Where no zephyr blows, where no volcano erupts,"]
                                       [p {:class :text-danger} "A world of which we carry, at the base of the fingernail,"]
                                       [p {:class :text-danger} "- Without any idea as to, such as it is, its use for us -"]
                                       [p {:class :text-warning} "((But what use is the lake that tricks us in the desert"]
                                       [p {:class :text-warning} "Making us hope for drink and fishing?"]
                                       [p {:class :text-warning} "What use our shiver at the sight of the telegram"]
                                       [p {:class :text-warning} "Whose seal we tear off trembling?))"]
                                       [p {:class :text-danger} "A tentative reduced portrait of a likeness,"]
                                       [p {:class :text-danger} "A decoration shown most clearly by the thumb,"]
                                       [p {:class :text-danger} "That recalcitrant world where no seed grows,"]
                                       [p {:class :text-danger} "Since nowhere upon it is the water required"]
                                       [p {:class :text-danger} "- There there is no shipwrecked sailor praying on his raft"]
                                       [p {:class :text-danger} "Nor land bearing the name Finistere -"]
                                       [p {:class :text-danger} "For baptisms, for painting, or in which to take a bath;" #_[:b.text-danger ")"]])
                                      [p "Is an eminently cowardly "
                                       [hyperlink {:label "satellite."
                                                   :on-click (fn [] (swap! footnote-one-showing? not))}]]]]]])]]]]]]]))))