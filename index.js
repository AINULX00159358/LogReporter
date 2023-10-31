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

app.post("/", (req, res) => {
  //console.log("HEADERS", req.headers);
  console.log(req.body);
  res.status(200).end();
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});