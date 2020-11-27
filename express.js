const express = require("express");
const app = express();

const consign = require("consign");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
consign().include("./routes").into(app);

// 404
app.use(function (req, res, next) {
  let err = new Error("Resourse Not Found");
  err.status = 404;
  next(err);
});

// error
app.use(function (e, req, res, next) {
  let status = e.status || 500;
  let error = { message: e.message };

  if (app.get("env") === "production") {
    console.log(e);
    res.status(status).json(error);
  } else {
    error.message = status + "" + e;
    res.status(status).send(e.stack);
  }
});

module.exports = function () {
  return app;
};
