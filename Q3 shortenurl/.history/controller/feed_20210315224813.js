const mongoose = require("mongoose");
const shortId = require("shortid");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first post!" }],
  });
};

exports.createShort = (req, res, next) => {
  const url = req.body.url;
  const shortenUrl = "https://shortenurl.org/";
  var shortgen = shortId.generate;
  console.log(shortgen);
  // create post in db
  res.status(201).json({
    url: url,
    shortenUrl: shortenUrl,
  });
};
