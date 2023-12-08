(ns nia.events.search
  (:require [clojure.pprint :refer [cl-format]] 
            [goog.object :as gobj]
            ["lunr" :as lunr]
            [re-frame.core :refer [dispatch path reg-event-db reg-event-fx reg-fx]]))

(reg-event-db
 :search/create-builder
 (fn [db _]
   (let [builder (doto (lunr/Builder.)
                   (.field "title")
                   (.field "body")
                   (.ref "id"))]
     (set! (.-metadataWhitelist builder) #js ["position"])
     (assoc db :lunr/builder builder))))

(reg-event-db
 :search/add-documents
 [(path :lunr/builder)]
 (fn [builder [_ documents]]
   (let [docs (zipmap (range 1 (inc (count documents))) documents)]
     (doseq [doc docs
             :let [k (key doc)
                   v (val doc)
                   title (str "four_four_" (cl-format nil "~R" k))
                   body v
                   id (str k)
                   output #js {:title title
                               :body body
                               :id id}]]
       (js/console.log output)
       (.add builder output)))
   builder))

(reg-event-fx
 :search/fetch-documents
 (fn [{:keys [db]} _]
   (let [footnotes (get-in db [:cantos/footnotes 4])]
     (js/console.log (count footnotes))
     {:fx [[:dispatch [:search/add-documents footnotes]]]})))

(reg-event-db
 :search/build-index
 (fn [db _]
   (let [builder (:lunr/builder db)]
     (assoc db :lunr/index (.build builder)))))

(reg-event-fx
 :search/search-index
 (fn [{:keys [db]} [_ term]]
   {:search-index [(:lunr/index db) term]}))

(reg-fx
 :search-index
 (fn [[idx term]]
   (let [match (.search idx term)
         ref-and-pos (juxt #(.. % -ref) 
                           #(gobj/getValueByKeys % 
                                                 "matchData"
                                                 "metadata"
                                                 term
                                                 "body"
                                                 "position"
                                                 0))]
     (when (seq match)
       (dispatch [:search/current-best-match (ref-and-pos (first match))])))))

(reg-event-db
 :search/current-best-match
 (fn [db [_ [ref [pos len]]]]
   (js/console.log ref)
   (let [matching-footnote (get-in db [:cantos/footnotes 4 (dec (parse-long ref))])]
     (assoc db :lunr/current-match (subs matching-footnote pos)))))

(comment
  (dispatch [:search/fetch-documents])
  (dispatch [:search/create-builder])
  (dispatch [:search/build-index])
  (dispatch [:search/search-index "bluebeard's"]))
