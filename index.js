const express = require("./express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("your_mongo_url", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, function () {
  console.log("express is running on port 3000");
});
