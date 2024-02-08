(ns nia.views.macros)

(defmacro collapsed [show? & body]
  `(when ~show?
     ~@body))

(defmacro nested [show? outer-el classes inner-el & body]
  `(if ~show?
     [~outer-el ~classes 
      [~inner-el]
      ~@body]
     [~outer-el ~classes
      ~@body]))