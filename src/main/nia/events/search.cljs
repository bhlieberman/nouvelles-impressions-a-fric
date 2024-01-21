(ns nia.events.search
  (:require
   [clojure.string :as str]
   [fork.re-frame :as fork]
   [goog.object :as gobj]
   ["lunr" :as lunr]
   [nia.config.app-db :refer [check-db]]
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
   (let [all-footnotes (:cantos/footnotes db)]
     {:fx [[:dispatch [:search/add-documents all-footnotes]]]
      :db db})))

(defn add-all-docs [{:keys [db]} [_ docs]]
  (let [footnotes (into [] (mapcat vals)
                        ((juxt :c1 :c2 :c4) docs))]
    {:db (update db :lunr/builder
                 (fn [b]
                   (doseq [footnote footnotes]
                     (when goog.DEBUG (js/console.log (.-id footnote)))
                     (.add b footnote))
                   b))
     :fx [[:dispatch [:search/build-index]]]}))

(reg-event-fx
 :search/add-documents
 add-all-docs)

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
         #_(dispatch [:search/current-best-match (first refs)]))))))

(defn ref->keyword [ref]
  (apply keyword (-> ref
                     first
                     (str/split #"-")
                     rest)))

(defn get-lunr-matches [db [refs]]
  (let [texts (apply concat
                     (for [ref refs
                           :let [[pos len] (second ref)
                                 text (ref->keyword ref)]]
                       (for [i [:c1 :c2 :c4]
                             :let [obj (get-in db [:cantos/footnotes i text])]
                             :when (some? obj)]
                         (cond-> {:text (.-body obj)}
                           (some? pos) (assoc :pos pos)
                           (some? len) (assoc :len len)))))]
    (assoc db :lunr/all-matches texts)))

(reg-event-db
 :search/all-matches
 [trim-v debug check-db]
 get-lunr-matches)

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(reg-event-db
 :search/current-best-match
 (fn [db [_ [ref [pos _]]]]
   ;; TODO: update this logic to reflect rest of footnotes
   ;; see above code for use as model
   (let [matching-footnote (get-in db [:cantos/footnotes 4 (dec (parse-long ref))])]
     (assoc db :lunr/current-match (some-> matching-footnote (subs pos))))))

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
