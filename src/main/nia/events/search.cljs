(ns nia.events.search
  (:require [clojure.pprint :refer [cl-format]]
            ["lunr" :as lunr]
            [re-frame.core :refer [dispatch path reg-event-db reg-event-fx]]
            [shadow.resource :as rs]))

(reg-event-db
 :search/create-builder
 (fn [db _]
   (let [builder (doto (lunr/Builder.)
                   (.field "title")
                   (.field "body")
                   (.ref "id"))]
     (assoc db :lunr/builder builder))))

(reg-event-db
 :search/add-documents
 [(path :lunr/builder)]
 (fn [builder [_ documents]]
   (doseq [doc (zipmap (range 1 (count documents)) documents)
           :let [k (key doc)
                 v (val doc)
                 title (str "four_four_" (cl-format nil "~R" k))
                 body v
                 id (str k)
                 output #js {:title title
                             :body body
                             :id id}]]
     (.add builder output))
   builder))

(reg-event-fx
 :search/fetch-documents
 (fn [{:keys [db]} _]
   (let [footnotes (get-in db [:cantos/footnotes 4])]
     {:fx [[:dispatch [:search/add-documents footnotes]]]})))


(comment (dispatch [:search/fetch-documents])
         (dispatch [:search/create-builder]))
