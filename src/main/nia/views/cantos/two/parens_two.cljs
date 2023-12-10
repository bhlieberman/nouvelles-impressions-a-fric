(ns nia.views.cantos.two.parens-two
  (:require [reagent.core :as r]
            [re-com.core :refer [hyperlink h-box modal-panel p scroller v-box]]
            [re-frame.core :refer [dispatch]]))

(defn parens-two []
  (let [footnote-one-showing? (r/atom false)]
    (fn []
      [v-box
       :children
       [[h-box 
         :align-self :center
         :justify :start
         :children
         [[v-box
           :children [[p "In what guises does a cross appear! a constellation"]
                      [p "Takes its shape in the southern heart of the heavens;"]
                      [p "Speaking figuratively, we all have one to bear;"]
                      [p "When a deserved success achieved by another"]
                      [p "Earns the praise of one of those jealous people"]
                      [p "Who is being made old by ill-tempered grumblings -"]
                      [p "Their clouded minds lacking any innate flame -"]
                      [p "His acquaintances make one in the fireplace;"]
                      [p "Without fail, once a year - during Lent -"]
                      [p [:b.text-info "((("] "At least for the short period that he takes part in the ritual of sackcloth"]
                      [p "Because he believes in Hell and is terrified of ending up there" [:b.text-info ")))"]]
                      [p "The Christian makes one on his forehead in ashes;"]
                      [p "When deliberately " [:b.text-info "((("] "the prospect of an imminent meal"]
                      [p "Quickens the step like nothing else;"]
                      [p "As a carriage steers towards the hay-rack,"]
                      [p "The horses paw the air without being touched by the whip,"]
                      [p "As though descended from thoroughbreds;" [:b.text-info ")))"]]
                      [p "One arrives at a restaurant at a moment when the rest"]
                      [p "Are seated at their assigned places with hearty appetites,"]
                      [p "Often, through the "
                       [hyperlink {:label "glass"
                                   :on-click #(swap! footnote-one-showing? not)}]
                       " of the door, next to an oven,"]
                      [hyperlink {:on-click #(dispatch [:routing/push-state :nia.routing.canto/two {:location :three}])
                                  :label "One sees, forming the shape of a cross,"}]
                      [p "Two knives, clicking as they are sharpened by a carver;"]
                      [:hr]
                      (when @footnote-one-showing?
                        [modal-panel
                         :backdrop-on-click #(reset! footnote-one-showing? false)
                         :child [scroller
                                 :class "m-3"
                                 :height "300px"
                                 :child
                                 [v-box
                                  :children
                                  [[p "If mankind, when building, used only transparent material"]
                                   [p [:b.text-danger "("] "This is by way of a friendly interlude cutting short a recitation,"]
                                   [p "An absent-minded note, to keep you awake at night" [:b.text-danger ")"] ","]
                                   [p "He would kill off more than one calumny"]
                                   [p [:b.text-danger "("] "And the sun, in short, would illuminate lessons!" [:b.text-danger ")"]]
                                   [p "But to what extent would they continue, however, to hold sway!"]
                                   [p "Those amongst us, alas! who join in maintaining"]
                                   [p [:b.text-danger "("] "Although without doubt, even in its early days,"]
                                   [p "Ancient man never saw its back" [:b.text-danger ")"]]
                                   [p "That the moon " [:b.text-danger "("] "that world where silence reigns,"]
                                   [p "Where no zephyr blows, where no volcano erupts,"]
                                   [p "A world of which we carry, at the base of the fingernail,"]
                                   [p "- Without any idea as to, such as it is, its use for us -"]
                                   [p [:b.text-warning "(("] "But what use is the lake that tricks us in the desert"]
                                   [p "Making us hope for drink and fishing?"]
                                   [p "What use our shiver at the sight of the telegram"]
                                   [p "Whose seal we tear off trembling?" [:b.text-warning "))"]]
                                   [p "A tentative reduced portrait of a likeness,"]
                                   [p "A decoration shown most clearly by the thumb,"]
                                   [p "That recalcitrant world where no seed grows,"]
                                   [p "Since nowhere upon it is the water required"]
                                   [p "- There there is no shipwrecked sailor praying on his raft"]
                                   [p "Nor land bearing the name Finistere -"]
                                   [p "For baptisms, for painting, or in which to take a bath;" [:b.text-danger ")"]]
                                   [p "Is an eminently cowardly "
                                    [hyperlink {:label "satellite." 
                                                :on-click (fn [] (swap! footnote-one-showing? not))}]]]]]])]]]]]])))