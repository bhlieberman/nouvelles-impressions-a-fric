(ns nia.node-ssr
  (:require
   nia.events.core
   nia.subs
   [nia.views.router :refer [router]]
   ["express" :as express]
   ["serve-static" :as serve-static]
   ["path" :as path]
   [reagent.dom.server :as rds]
   [shadow.resource :refer [inline]]))

(def re-com (inline "assets/css/re-com.css"))
(def fonts (inline "assets/css/material-design-iconic-font.min.css"))

(defn handler [_ res]
  (let [comp (rds/render-to-string [router])
        html
        (str "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Document</title>
    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65\" crossorigin=\"anonymous\">
<link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic\" rel=\"stylesheet\" type=\"text/css\">
<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300' rel='stylesheet' type='text/css'>
<style>" fonts "</style>
<style>" re-com "</style>
</head>
<body>
    <div id=\"root\">" comp "</div>
    <script src=\"core.js\"></script>
</body>
</html>")]
    (.send res html)))

(defonce server-ref (volatile! nil))

(defn main []
  (prn "starting node server")
  (let [app (express)
        setup-routes
        (fn setup-routes [] (.get app "/app" handler)
          (.use app "/" (serve-static (path/join (or js/__dirname "./") "./app"))))]
    (setup-routes)
    (.listen app 3000 (fn [] (js/console.log "express started")))
    (vreset! server-ref app)))

(defn start []
  (main))

(defn stop [done]
  (when-some [server @server-ref]
    (.close server
            (fn [err]
              (js/console.log "stop completed" err)
              (done)))))