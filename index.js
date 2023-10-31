/* eslint-disable */

const express = require("express");
//const { CloudEvent, HTTP } = require("cloudevents");
const app = express();



app.use((req, res, next) => {
  let data = "";

  req.setEncoding("utf8");
  req.on("data", function (chunk) {
    data += chunk;
  });

  req.on("end", function () {
    req.body = data;
    next();
  });
});


app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('WebHook-Request-Origin', 'eventgrid.azure.net');
  res.header('WebHook-Allowed-Origin', 'eventgrid.azure.net');
  res.header("WebHook-Allowed-Rate", "*");
  
  res.send(200);
});

app.post("/", (req, res) => {
 // console.log("HEADERS", req.headers);
  console.log(JSON.stringify(JSON.parse(req.body), null, 2));
  console.log("---------------------------------------------");
  res.status(200).end();
});

app.listen(3000, () => {
  console.log("commited on 31-10-2023@5:53 listening on port 3000!");
});