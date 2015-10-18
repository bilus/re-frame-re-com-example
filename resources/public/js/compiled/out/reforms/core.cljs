;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.core
  "Core controls and helpers."
  (:require [reforms.binding.core :as binding]
            [reforms.core.impl :as impl]
            [reforms.core.react-keys :refer [gen-key]]
            [reforms.core.options :as options])
  (:refer-clojure :exclude [time]))

(def get-options
  "Get configuration option(s) by key. See [[reforms.core.options]].

   Arguments:

   - ks - key seq"
  options/get-options)

(def set-options!
  "Sets configuration options. See [[reforms.core.options]].

   Arguments:

   - options - a map specifying options to merge into current option map.

   **Note:** It intelligently merges options; see the example below.

   Example:

       ;; Example initial configuration:
       {:form {:horizontal true
               :attrs {:style {:background-color \"yellow\"}}}}

       ;; Setting options
       (set-options! {:form {:attrs {:style {:border \"1px solid black\"}}}{)

       ;; Resulting configuration:
       {:form {:horizontal true
               :attrs {:style {:background-color \"yellow\"}}}"
  options/set-options!)

(defn panel
  "A panel. See http://getbootstrap.com/components/#panels

   Arguments:

   [attrs] title [:close <lambda>] element1 ... element2

    - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
    - title - panel title; a string or Hiccup/Sablono style template
    - :close - (optional) lambda to call when panel is closed; when the option is set, the panel shows a close icon (FontAwesome by default)
    - contents - (optional) the contained elements

   Examples:

       (panel \"A simple panel\"
           [:div \"Contents go here\"])
       (panel {:class \"my-special-panel\"} \"My special panel\" :close #(js/alert \"closed\")
           [:div \"Contents go here\"])"
  [& args]
  (let [[attrs [title & rest-args]] (impl/resolve-args [:panel] {:class "panel panel-default"} args)
        [{:keys [close]} contents] (impl/parse-options rest-args)]
    [:div attrs
     [:div {:class "panel-heading"
            :key   "ph"}
      [:h3 {:class "panel-title"
            :key   "pt"} title]
      (when close
        [:div {:class "actions pull-right"
               :key   "c"}
         [:i {:class   (get-options [:panel :icon-close])
              :onClick close}]])]
     (into
      [:div {:class "panel-body"
             :key   "pb"}]
      contents)]))

(defn form
  "A form. See http://getbootstrap.com/css/#forms

   Arguments:

   [attrs] element1 ... element2

   - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - contents - (optional) the contained elements

   Examples:

       (form [:div \"Contents go here\"])
       (form {:style {:background-color \"red\"}} [:div \"Contents go here\"])"
  [& args]
  (let [[attrs elems] (impl/resolve-args [:form]
                                         {:on-submit #(.preventDefault %)
                                          :class     (when (impl/form-horizontal?) "form-horizontal")}
                                         args)]
    (into
     [:form attrs]
     (concat ;; Avoid React "key" prop warnings.
      elems
      (when (:on-submit (first args)) ;; TODO: Kinda hackish.
        [[:button {:type  "submit"
                   :style {:display "none"}
                   :key   "fsb"}]])))))

(defn group-title
  "A title for a logical group of controls.

   Arguments:

   [attrs] title [:tag <tag-name>]

   - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - title - the title; a string or Hiccup/Sablono style template
   - tag   - (optional) name of the tag to use, e.g. :h4"
  [& args]
  (let [[attrs [title & {:keys [tag]}]] (impl/resolve-args [:group-title] {:class "group-title"} args)]
    [(or tag (get-options [:group-title :tag]))
     attrs
     title]))

(defn html5-input
  "An HTML5-compatible input. Used internally to implement most input types.

   Arguments:

   type [attrs] [label] cursor korks [:in-progress BOOL] [:warn-fn LAMBDA]
   [help RENDERABLE] [:inline BOOL] [:large BOOL] [:placeholder STRING] [:valid? BOOL] [:validation-error-fn LAMBDA]

   - type                  - input type
   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - (optional) the label; a string or Hiccup/Sablono style template
   - cursor, korks         - data to bind to
   - :in-progress          - (optional) if true shows progress spinner
   - :warn-fn              - (optional) a predicate invoked on the input's value; if it returns a RENDERABLE,
                             it will be shown as a warning label
   - :help                 - (optional) help block
   - :inline               - (optional) if true renders the control inline
   - :large                - (optional) if true the input will have a larger size
   - :placeholder          - (optional) the input's placeholder text
   - :valid?               - (optional) if false shows a validation error; internal
   - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal

   RENDERABLE - string, hiccup-style markup or a React component."
  [type & args]
  (let [[attrs [label placeholder cursor korks & opts]] (impl/resolve-args [:html5-input type] {} args
                                                                           [[impl/attrs? {}]
                                                                            [(complement binding/valid?) nil]
                                                                            [(complement binding/valid?) nil]])]
    (apply impl/html5-input* attrs label placeholder cursor korks (name type) opts)))

(defn text
  "Text input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :text args))

(defn password
  "Password input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :password args))


(defn form-buttons
  "Auto-aligning form buttons.

   Arguments:

   button-1 ... button-n"
  [& buttons]
  (apply impl/unlabeled-control "form-buttons" false buttons))

(defn button
  "Button. See http://getbootstrap.com/css/#buttons

   Arguments:

   [attrs] label on-click [:in-progress <bool> :disabled <bool]

   - attrs        - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label        - button label; a string or Hiccup/Sablono style template
   - on-click     - lambda to handle clicks
   - :in-progress - true to show an indicator that a background action is in progress and disable the button
   - :disabled    - true to disable the button"
  [& args]
  (let [[attrs [label on-click & {:keys [in-progress disabled]}]] (impl/resolve-args [:button]
                                                                                     {:type  "button"
                                                                                      :class "btn"}
                                                                                     args)]
    (into
     [:button (merge {:disabled disabled
                      :on-click #(when-not disabled
                                   (on-click))
                      :key      (gen-key label (:class attrs))}
                     attrs)]
     (concat ;; Avoid React "key" prop warnings.
      [label]
      (when in-progress
        [" " (impl/spinner)])))))

(defn button-primary
  "Primary button. See http://getbootstrap.com/css/#buttons

   Arguments:

   See `button`."
  [& args]
  (let [[attrs [& rest-args]] (impl/resolve-args [:button-primary] {:class "btn-primary"} args)]
    (apply button attrs rest-args)))

(defn button-default
  "Default button. See http://getbootstrap.com/css/#buttons

   Arguments:

   See `button`."
  [& args]
  (let [[attrs [& rest-args]] (impl/resolve-args [:button-default] {:class "btn-default"} args)]
    (apply button attrs rest-args)))

(defn button-group
  "Button group.

   Arguments:

   [attrs] button-1 ... button-n

   - attrs        - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)"
  [& args]
  (let [[attrs [& buttons]] (impl/resolve-args [:button-group] {:class "button-group"} args)]
    (into
     [:div attrs]
     buttons)))

(defn checkbox
  "Checkbox. See http://getbootstrap.com/css/#checkboxes-and-radios

  Arguments:

  [attrs] label cursor korks value [:valid? <bool> :validation-error-fn <lambda> :inline <bool>]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - the label; a string or Hiccup/Sablono style template
   - cursor, korks         - data to bind to
   - :inline               - (optional) if true renders the control inline
   - :valid?               - (optional) if false shows a validation error; internal
   - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal"
  [& args]
  (let [[attrs [label cursor korks & {:keys [valid? validation-error-fn inline]}]] (impl/resolve-args [:checkbox] {} args)
        dom-id (impl/gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))]
    (apply impl/unlabeled-control
           (gen-key :wrap cursor korks)
           inline
           (concat ;; Avoid React "key" prop warnings.
            [[:div {:class (str "checkbox" (when-not valid " has-error") (when inline " checkbox-inline"))
                    :key   (gen-key :checkbox cursor korks)}
              [:label
               {:key (gen-key :label cursor korks)}
               [:input
                (impl/merge-attrs {:on-change #(binding/reset! cursor korks (.. % -target -checked))
                                   :checked   (binding/get-in cursor korks)
                                   :type      "checkbox"
                                   :id        dom-id
                                   :key       (gen-key :input cursor korks)}
                                  attrs
                                  {})]
               [:span label]]]]
            (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
              [(impl/error-label {:key (gen-key :error-label)} validation-error)])))))

(defn radio ;; TODO: Extract common method for `radio` and `checkbox`.
  "Radio button. See http://getbootstrap.com/css/#checkboxes-and-radios

   Arguments:

   [attrs] label cursor korks value [:valid? <bool> :validation-error-fn <lambda> :inline <bool>]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - the label; a string or Hiccup/Sablono style template
   - cursor, korks         - data to bind to
   - :inline               - (optional) if true renders the control inline
   - :valid?               - (optional) if false shows a validation error; internal
   - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal"
  [& args]
  (let [[attrs [label cursor korks value & {:keys [valid? validation-error-fn inline]}]] (impl/resolve-args [:radio] {} args)
        dom-id (impl/gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))]
    (apply impl/unlabeled-control
           (gen-key :wrap cursor korks)
           inline
           (concat ;; Avoid React "key" prop warnings.
            [[:div {:class (str "radio" (when-not valid " has-error") (when inline " radio-inline"))
                    :key   (gen-key :radio cursor korks)}
              [:label
               [:input
                (impl/merge-attrs {:on-change #(when (.. % -target -checked)
                                                 (binding/reset! cursor korks value))
                                   :checked   (= value (binding/get-in cursor korks))
                                   :type      "radio"
                                   :id        dom-id
                                   :name      dom-id
                                   :value     value
                                   :key       (gen-key :input cursor korks)}
                                  attrs
                                  {})]
               label]]]
            (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
              [(impl/error-label {:key (gen-key :el)} validation-error)])))))


(defn textarea
  "Textarea element. See http://getbootstrap.com/css/#textarea

   Arguments:

   [attrs] [label] cursor korks [opts]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - (optional) the label; a string or Hiccup/Sablono style template
   - cursor, korks         - data to bind to
   - opts                  - see [[html5-input]]


   Examples:

       (f/textarea \"Textarea\" \"A placeholder\" data [:some-text])
       (f/textarea {:rows 8} \"Textarea\" \"A placeholder\" data [:some-text] :inline true)"
  [& args]
  (let [[attrs [label placeholder cursor korks & opts]] (impl/resolve-args [:textarea] {:class "form-control"} args
                                                                           [[impl/attrs? {}]
                                                                            [(complement binding/valid?) nil]
                                                                            [(complement binding/valid?) nil]])
        dom-id (impl/gen-dom-id cursor korks)
        textarea-attrs (impl/merge-attrs {:class       "form-control"
                                          :id          dom-id
                                          :placeholder placeholder}
                                         attrs
                                         {:on-change #(binding/reset! cursor korks (.. % -target -value))
                                          :value     (binding/get-in cursor korks)})]
    (when placeholder
      (impl/deprecated "Placeholders as positional arguments will be removed in the next major release; use :placeholder option instead."))
    (impl/input* :textarea textarea-attrs label cursor korks opts)))


(defn select
  "Select element. See http://getbootstrap.com/css/#selects

   Arguments:

   [attrs] label cursor korks options [:on-change <lambda>]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - (optional) the label; a string or Hiccup/Sablono style template
   - cursor, korks         - data to bind to
   - options               - a vector containing options and their labels (see examples below)
   - :on-change            - (optional) lambda to call on selection


   Examples:

       (f/select \"Select\" data [:select]
           [[:option1 \"Option 1\"] [:option2 \"Option 2\"] [:option3 \"Option 3\"]])
       (f/select {:class \"my-special-selector\"} \"Select\" data [:select]
           :on-change #(js/alert @data)
           [[:option1 \"Option 1\"] [:option2 \"Option 2\"] [:option3 \"Option 3\"]])"
  [& args]
  (let [[attrs [label cursor korks options & {:keys [on-change] :as opts}]] (impl/resolve-args [:select]
                                                                                               {:class "form-control"}
                                                                                               args
                                                                                               [[impl/attrs? {}]
                                                                                                [(complement binding/valid?) nil]])
        dom-id (impl/gen-dom-id cursor korks)
        selected-val (binding/get-in cursor korks)
        input-attrs (impl/merge-attrs {} attrs {:value     (str selected-val)
                                                :on-change (fn [dom-event]
                                                             (binding/reset! cursor
                                                                             korks
                                                                             (impl/unstr-option (.. dom-event -target -value) options))
                                                             (when on-change
                                                               (on-change)))
                                                :id        dom-id})]
    (apply impl/input* :select input-attrs label cursor korks opts
           (map #(vector :option {:value (str (first %))
                                  :key   (gen-key (first %))} (second %)) options))))

(defn datetime
  "Datetime input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :datetime args))

(defn datetime-local
  "Datetime-local input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :datetime-local args))

(defn date
  "Date input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :date args))

(defn month
  "Month input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :month args))

(defn time
  "Time input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :time args))

(defn week
  "Week input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :week args))

(defn number
  "Number input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :number args))

(defn email
  "Email input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :email args))

(defn url
  "Url input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :url args))

(defn search
  "Search input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :search args))

(defn tel
  "Tel input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :tel args))

(defn color
  "Color input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :color args))

(defn spinner
  "A spinner.

   Arguments:

   [attrs]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)"
  [& args]
  (apply impl/spinner args))


(comment
  [:table {:key "styled-table", :class "table-striped table-bordered table"}
   [:thead
    [:tr [:th "Hero name"]]]
   [:tbody
    [:tr [:td "Tom"]]
    [:tr [:td "Jerry"]]
    [:tr [:td "Mickey"]]
    [:tr [:td "Minnie"]]]])
