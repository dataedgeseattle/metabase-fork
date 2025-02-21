(ns metabase-enterprise.audit-app.pages.query-detail
  "Queries to show details about a (presumably ad-hoc) query."
  (:require [cheshire.core :as json]
            [metabase-enterprise.audit-app.interface :as audit.i]
            [metabase-enterprise.audit-app.pages.common :as common]
            [metabase.util.schema :as su]
            [ring.util.codec :as codec]
            [schema.core :as s]))

;; Details about a specific query (currently just average execution time).
(s/defmethod audit.i/internal-query ::details
  [_ query-hash :- su/NonBlankString]
  {:metadata [[:query                  {:display_name "Query",                :base_type :type/Dictionary}]
              [:average_execution_time {:display_name "Avg. Exec. Time (ms)", :base_type :type/Number}]]
   :results  (common/reducible-query
              {:select [:query
                        :average_execution_time]
               :from   [:query]
               :where  [:= :query_hash (codec/base64-decode query-hash)]
               :limit  1})
   :xform (map #(update (vec %) 0 json/parse-string))})
