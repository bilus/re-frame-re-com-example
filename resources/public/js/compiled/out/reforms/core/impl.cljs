;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.core.impl
  (:require [reforms.binding.core :as binding]
            [reforms.core.options :refer [get-options]]
            [reforms.core.react-keys :refer [gen-key]]
            [clojure.string :as str])
  (:refer-clojure :exclude [time])
  (:import [goog.ui IdGenerator]))

(declare spinner feedback-icon)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Argument parsing

(defn extend-attrs
  [attrs extensions]
  (merge-with (fn [& vals]
                (let [result (let [vals' (remove nil? vals)]
                               (if (some #(satisfies? Fn %) vals')
                                 (fn [& args] (last (map (fn [f] (apply f args)) vals')))
                                 (str/join " " vals')))]
                  result))
              attrs
              extensions))

(defn override-attrs
  [old new]
  (merge-with (fn [old new]
                (cond
                  (map? old) (override-attrs old new)
                  :else new))
              old
              new))


(defn merge-attrs
  [defaults overrides extensions]
  (as-> overrides $
        (override-attrs defaults $)
        (extend-attrs $ extensions)))

(defn parse-args
  ([args opt-args result]
   (let [[opt-pred def] (first opt-args)
         arg (first args)]
     (cond
       (nil? arg) result
       (nil? opt-pred) (recur (rest args) opt-args (conj result arg))
       (opt-pred arg) (recur (rest args) (rest opt-args) (conj result arg))
       :else (recur args (rest opt-args) (conj result def)))))
  ([args opt-args]
   (parse-args args opt-args []))
  ([args]
   (parse-args args [] [])))

(defn resolve-args
  ([ks ext-attrs args & [opt-args]]
   (let [[attrs & rest-args] (parse-args args (or opt-args [[map? {}]]))]
     [(merge-attrs
        (->> ks
             (map #(get-options [% :attrs]))
             (reduce (fn [attrs crn-attrs]
                       (merge-attrs attrs crn-attrs {}))))
        attrs
        ext-attrs)
      rest-args])))

(defn parse-options
  [args]
  (let [[options rest-args] (split-with (comp keyword? first) (partition-all 2 args))]
    [(apply hash-map (mapcat identity options)) (mapcat identity (or rest-args []))]))

(defn attrs?
  [arg]
  (and
    (not (binding/valid? arg))
    (map? arg)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Generic helpers

(defn unstr-option
  "Converts an option converted to string to be used in <select> tag back to its
   representation as in options (it's often a keyword).

   Example:

   (unstr-option \":foo\"
                [:foo \"foobar\" :foo2 \"zoobar\"]) ;; => :foo"
  [s options]
  (let [m (->> options
               (map (fn str->orig [[k _v]] [(str k) k]))
               (into {}))]
    (or (m s) s)))

(defn deprecated
  [msg]
  (when js/console
    (. js/console (warn "[reforms] Warning:" msg))))

(defn -p
  [xs]
  #_(println xs)
  xs)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Markup helpers

(defn gen-dom-id
  ([path]
   (str/join "-" (map (fn [x]
                        (if (implements? INamed x)
                          (name x)
                          (str x)))
                      path)))
  ([cursor korks]
   (gen-dom-id (concat (binding/path cursor) korks)))
  ([]
   (.getNextUniqueId (.getInstance IdGenerator))))

(defn form-horizontal?
  []
  (get-options [:form :horizontal]))

(defn label-column-class
  []
  (when (form-horizontal?)
    (get-options [:form :label-column-class])))

(defn input-column-class
  []
  (when (form-horizontal?)
    (get-options [:form :input-column-class])))

(defn input-column
  [key & elems]
  (if (form-horizontal?)
    (list
     (into
      [:div {:class (input-column-class)
             :key   key}]
      elems))
    elems))

(defn feedback-icon
  [& args]
  (let [[attrs] (resolve-args [:feedback-icon] {} args)]
    [:i attrs]))

(defn error-label
  [& args]
  (let [[attrs [error]] (resolve-args [:error-label] {} args)]
    [:label attrs error]))

(defn warning-label
  [& args]
  (let [[attrs [warning]] (resolve-args [:warning-label] {} args)]
    [:label attrs warning]))

(defn maybe-flatten
  [xs]
  (if (and (seq xs) (= 1 (count xs)))
    (first xs)
    xs))

(defn unlabeled-control
  [key inline & xs]
  (maybe-flatten
   (if inline
     xs ;; TODO: A sequence; may generate React warnings about keys.
     (list
      (into
       [:div.form-group {:key (gen-key :form-group key)}]
       (concat
        (when (form-horizontal?)
          [[:div {:class (label-column-class)
                  :key   (gen-key :label-column key)}]])
        (apply input-column (gen-key :input-column key) xs)))))))

(defn labeled-control
  [key inline form-group-class label dom-id & xs]
  (maybe-flatten
   (if inline
     (list ;; TODO: A sequence; may generate React warnings about keys.
      [:label {:for   dom-id
               :class "control-label"
               :key   (gen-key :control-label key)} label]
      xs)
     (list
      (into
       [:div.form-group {:class form-group-class
                         :key   (gen-key :form-group key)}]
       (concat
        (cond
          label [[:label {:for   dom-id
                          :class (str "control-label " (label-column-class))
                          :key   (gen-key :control-label)} label]]
          (form-horizontal?) [[:div {:class (str "control-label " (label-column-class))
                                     :key (gen-key :control-label)}]]
          :else nil)
        (apply input-column (gen-key :input-column) xs)))))))

(defn input*
  [tag attrs label cursor korks {:keys [placeholder valid? validation-error-fn in-progress warn-fn help inline large]} & inner]
  (let [dom-id (gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))
        warning (and warn-fn (warn-fn (binding/get-in cursor korks)))
        base-key (gen-key cursor korks)]
    (apply labeled-control
      base-key
      inline (str/join " " [(when (or warning in-progress) "has-feedback")
                            (when-not valid "has-error")
                            (when large "form-group-lg")])
      label dom-id
      (concat ;; Avoid React "key" prop warnings.
       [(into [tag (merge {:key (gen-key :input base-key)}
                     attrs
                     (when placeholder {:placeholder placeholder}))]
              inner)]
       (cond
         in-progress [(spinner {:class "form-control-feedback"
                                :key   (gen-key :spinner base-key)})]
         warning [(feedback-icon {:class (str (get-options [:icon-warning]) " form-control-feedback")
                                  :key   (gen-key :feedback-icon base-key)})]
         :else nil)
       (when warning
         [(warning-label {:key (gen-key :warning-label base-key)} warning)])
       (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
         [(error-label {:key (gen-key :erorr-label base-key)} validation-error)])
       (when help
         [[:p.help-block {:key (gen-key :help-block base-key)} help]])))))

(defn html5-input*
  [attrs label placeholder cursor korks type & opts]
  (when placeholder
    (deprecated "Placeholders as positional arguments will be removed in the next major release; use :placeholder option instead."))
  (let [dom-id (gen-dom-id cursor korks)
        input-attrs (merge-attrs {:type        type
                                  :class       "form-control"
                                  :id          dom-id
                                  :placeholder placeholder}
                                 attrs
                                 {:on-change #(binding/reset! cursor korks (.. % -target -value))
                                  :value     (binding/get-in cursor korks)})]
    (input* :input input-attrs label cursor korks opts)))

(defn spinner
  "A spinner.

   Arguments:

   [attrs]

   attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)"
  [& args]
  (let [[attrs] (resolve-args [:spinner] {} args)]
    [:i attrs]))
