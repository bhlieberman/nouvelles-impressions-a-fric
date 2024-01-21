import "./cljs_env.js";
import "./cljs.core.js";
import "./nia.config.storage.js";
import "./re_frame.alpha.js";
import "./re_frame.core.js";
import "./shadow.cljs.modern.js";
import "./shadow.esm.esm_import$$azure$storage_blob.js";
goog.provide('nia.events.storage');
re_frame.alpha.reg_flow(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("nia.events.storage","blob-flow","nia.events.storage/blob-flow",-104724539),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image-url","image-url",-1064784064),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","url","image/url",446041905)], null),new cljs.core.Keyword(null,"blob-client","blob-client",1477274582),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blob-client","blob-client",1477274582)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function nia$events$storage$get_new_image(_,p__37945){
var map__37946 = p__37945;
var map__37946__$1 = cljs.core.__destructure_map(map__37946);
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064));
var blob_client = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,new cljs.core.Keyword(null,"blob-client","blob-client",1477274582));
var client = blob_client.getBlobClient(image_url);
var url = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
client.download().then((function (blob){
return blob.blobBody.then((function (body){
var obj_url = URL.createObjectURL(body);
return cljs.core.reset_BANG_(url,obj_url);
}));
}));

return url;
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canto","canto",523212706),new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.Keyword(null,"image","image",-58725096)], null)], null));
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"blob-service-client","blob-service-client",-1438357754),(function (cofx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"blob-service-client","blob-service-client",-1438357754),(new shadow.esm.esm_import$$azure$storage_blob.BlobServiceClient([nia.config.storage.sas_url,"?",nia.config.storage.sas_token].join(''))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("images","create-url","images/create-url",1228597577),(function (db,p__37947){
var vec__37948 = p__37947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37948,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37948,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("image","url","image/url",446041905),url);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("config.storage","load-blob-client","config.storage/load-blob-client",-1734470913),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blob-service-client","blob-service-client",-1438357754))], null),(function (p__37951,_){
var map__37952 = p__37951;
var map__37952__$1 = cljs.core.__destructure_map(map__37952);
var blob_service_client = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37952__$1,new cljs.core.Keyword(null,"blob-service-client","blob-service-client",-1438357754));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37952__$1,new cljs.core.Keyword(null,"db","db",993250759));
var container_client = blob_service_client.getContainerClient("nia");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"blob-client","blob-client",1477274582),container_client),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("storage","get-new-url","storage/get-new-url",-1958878382),"snowman.jpeg"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("storage","get-new-url","storage/get-new-url",-1958878382),(function (p__37953,p__37954){
var map__37955 = p__37953;
var map__37955__$1 = cljs.core.__destructure_map(map__37955);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__37956 = p__37954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37956,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37956,(1),null);
var blob_client = new cljs.core.Keyword(null,"blob-client","blob-client",1477274582).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-image-url","update-image-url",-669085063),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blob_client,url], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"update-image-url","update-image-url",-669085063),(function (p__37959){
var vec__37960 = p__37959;
var client = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37960,(0),null);
var img_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37960,(1),null);
try{var blob_client = client.getBlobClient(img_name);
return blob_client.download().then((function (blob){
return blob.blobBody.then((function (body){
var obj_url = URL.createObjectURL(body);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("images","create-url","images/create-url",1228597577),obj_url], null));
}));
}));
}catch (e37963){if((e37963 instanceof Error)){
var e = e37963;
return console.error(e);
} else {
throw e37963;

}
}}));

//# sourceMappingURL=nia.events.storage.js.map
