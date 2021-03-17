const express = require("express");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed");

const app = express();

mongoose.connect(
  "mongodb://localhost/urlShortener",
  { userNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.error(err);
    else console.log("Connected to the mongodb");
  }
);

app.use(express.json());

app.use("/", feedRoutes);

app.listen(8081);
