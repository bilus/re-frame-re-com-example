(ns re-frame-re-com-example.views
    (:require [re-frame.core :as re-frame]
              [re-com.core :as re-com]
              [reforms.reagent :include-macros true :as f]))

(defn title []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [re-com/title
       :label (str "Hello from " @name)
       :level :level1])))

(defn simple-view
  []
  (let [data (re-frame/subscribe [:data])]
    (fn []
      (f/form
       (f/text "Login" data [:login])
       (f/button "This is a button" #(js/alert "eu"))))))

(defn main-panel []
  (fn []
    [re-com/v-box
     :height "100%"
     :children [[title]
                [simple-view]]]))
