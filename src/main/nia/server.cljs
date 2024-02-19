(ns nia.server
  (:require 
   [nia.subs]
   [nia.views.router :refer [router]]
   [promesa.core :as p]
   ["react-dom/server" :refer [renderToString]]
   [reagent.core :as r] 
   [shadow.resource :refer [inline]]
   [sitefox.web :as web]))

(def re-com (inline "css/re-com.css"))
(def fonts (inline "css/material-design-iconic-font.min.css"))

(defn ssr-handler [_ res]
  (let [content (renderToString (r/as-element [router]))
        html (str "<!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Example</title>
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\" />
      <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65\" crossorigin=\"anonymous\">
    <style>" fonts "</style>
    <style>" re-com
    "</style><link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic\" rel=\"stylesheet\"
        type=\"text/css\">
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300' rel='stylesheet' type='text/css'>
                   </head>
      <body>
        <div id=\"root\">" content "</div>
        <script src=\"/base.js\"></script>
    <script src=\"/views.js\"></script>
    <script src=\"/storage.js\"></script>
    <script src=\"/core.js\"></script>
      </body>
    </html>);")]
    (.send res html)))

(defonce server (atom nil))

(defn setup-routes [app]
  (web/reset-routes app) 
  (.get app "/app" ssr-handler)
  (web/static-folder app "/" "./app"))

(defn main! []
  (p/let [[app host port] (web/start)]
    (reset! server app)
    (setup-routes app)
    (println "Serving on" (str "http://" host ":" port))))

(defn ^:dev/after-load reload []
  (js/console.log "Reloading.")
  (setup-routes @server))
