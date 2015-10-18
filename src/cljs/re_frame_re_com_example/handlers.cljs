(ns re-frame-re-com-example.handlers
    (:require [re-frame.core :as re-frame]
              [re-frame-re-com-example.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))
