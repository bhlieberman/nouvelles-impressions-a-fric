(ns nia.views.macros)

(defmacro collapsed [show? & body]
  `(when ~show?
     ~@body))

(defmacro nested [show? outer-el inner-el & body]
  `(if ~show?
     [~outer-el 
      (collapsed ~show? ~inner-el)
      ~@body]
     [~outer-el ~@body]))