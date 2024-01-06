(ns nia.events.search
  (:require [clojure.pprint :refer [cl-format]]
            [clojure.string :as str]
            [fork.re-frame :as fork]
            [goog.object :as gobj]
            ["lunr" :as lunr]
            [re-frame.core :refer [debug dispatch reg-event-db reg-event-fx reg-fx trim-v]]))

(reg-event-fx
 :search/create-builder
 (fn [{:keys [db]} _]
   (let [builder (doto (lunr/Builder.)
                   (.field "title")
                   (.field "body")
                   (.ref "id"))]
     (set! (.-metadataWhitelist builder) #js ["position"])
     {:db (assoc db :lunr/builder builder)
      :fx [[:dispatch [:search/fetch-documents]]]})))

(reg-event-fx
 :search/fetch-documents
 (fn [{:keys [db]} _]
   (let [footnotes (get-in db [:cantos/footnotes 4])
         all-footnotes (:cantos/footnotes db)]
     {:fx [[:dispatch [:search/add-documents all-footnotes]]]
      :db db})))

;; still WIP (I think it doesn't quite match footnote format)
(defn add-all-docs [{:keys [db]} [_ docs]]
  (let [one (get docs 1) ;; nil for now
        two (get docs 2)
        four (get docs 4)
    ;; I can do this with update later
        input (zipmap [2 4]
                      (for [each [two four]
                            :let [keyed (zipmap (range 1 (inc (count each))) each)]]
                        keyed))
        output (reduce-kv
                (fn [v k ik]
                  (let [keys (keys ik)]
                    (conj v (for [key keys
                                  :let [title (cl-format nil "~R_~R" k key)
                                        body (get ik key)]]
                              #js {:title title
                                   :body body
                                   :id (random-uuid)})))) [] input)]
    {:db (update db :lunr/builder
                 (fn [b]
                   (doseq [section output]
                     (doseq [footnote section]
                       (.add b footnote)))
                   b))
     :fx [[:dispatch [:search/build-index]]]}))

(reg-event-fx
 :search/add-documents
 add-all-docs
 #_(fn [{:keys [db]} [_ documents]]
   (let [docs (zipmap (range 1 (inc (count documents))) documents)]
     {:db (update db :lunr/builder
                  (fn [b]
                    (doseq [doc docs
                            :let [k (key doc) v (val doc)
                                  title (str "four_four_" (cl-format nil "~R" k))
                                  body v id (str k)
                                  output #js {:title title
                                              :body body
                                              :id id}]]
                      (.add b output))
                    b))
      :fx [[:dispatch [:search/build-index]]]})))

(reg-event-db
 :search/build-index
 (fn [db _]
   (let [builder (:lunr/builder db)]
     (-> db
         (assoc :lunr/index (.build builder))
         (dissoc :lunr/builder)))))

(reg-event-fx
 :search/submit-input
 (fn [{:keys [db]} [_ {:keys [values path]}]]
   {:db (fork/set-submitting db path true)
    :fx [[:dispatch [:search/resolved-form path values]]]}))

(reg-event-fx
 :search/resolved-form
 (fn [{:keys [db]} [_ path values]]
   (js/console.log values)
   {:db (fork/set-submitting db path false)
    :fx [[:dispatch [:search/search-index (get values nil)]]]}))

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
                                                 (str/lower-case term)
                                                 "body"
                                                 "position"
                                                 0))]
     (when (seq match)
       (let [refs (map ref-and-pos match)]
         (dispatch [:search/all-matches refs])
         (dispatch [:search/current-best-match (first refs)]))))))

(defn get-lunr-matches [db [refs]]
  (let [texts (for [ref refs
                    :let [[pos len] (second ref)]]
                (for [i [1 2 4]] ;; this doesn't break old searches but it doesn't bring in new stuff either
                  (cond-> {:text (get-in db [:cantos/footnotes i (dec (parse-long (first ref)))])}
                    (some? pos) (assoc :pos pos)
                    (some? len) (assoc :len len))))]
    (assoc db :lunr/all-matches texts)))

(reg-event-db
 :search/all-matches
 [trim-v debug]
 get-lunr-matches)

(reg-event-db
 :search/current-best-match
 (fn [db [_ [ref [pos _]]]]
   (let [matching-footnote (get-in db [:cantos/footnotes 4 (dec (parse-long ref))])]
     (assoc db :lunr/current-match (subs matching-footnote pos)))))

(reg-event-db
 :search/clear-results
 (fn [db _]
   (dissoc db :lunr/current-match)))

(reg-event-db
 :search/show-results
 (fn [db _]
   (update db :search/results-showing? not)))

(comment
  (dispatch [:search/all-matches])
  (dispatch [:search/fetch-documents])
  (dispatch [:search/create-builder])
  (dispatch [:search/build-index])
  (dispatch [:search/search-index "interlude"]))
