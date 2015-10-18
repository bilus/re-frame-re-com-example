(ns re-frame-re-com-example.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [re-frame-re-com-example.handlers]
              [re-frame-re-com-example.subs]
              [re-frame-re-com-example.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
