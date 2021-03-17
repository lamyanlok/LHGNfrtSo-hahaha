const randomString = require("randomstring");
const ShortUrl = require("./shortUrls");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first post!" }],
  });
};

exports.createShort = async (req, res, next) => {
  const fullUrl = await ShortUrl.findOne({ full: req.body.url });
  if (fullUrl != null) {
    console.log("return existing one");
    var shortenUrl = "https://shortenurl.org/" + fullUrl.short;
    res.status(201).json({
      url: fullUrl.full,
      shortenUrl: shortenUrl,
    });
  } else {
    var shortgen = randomString.generate(9);
    const url = req.body.url;
    var shortenUrl = "https://shortenurl.org/" + shortgen;

    await ShortUrl.create({ full: url, short: shortgen });

    //console.log(shortgen);
    // create post in db
    console.log("create new one");
    res.status(201).json({
      url: url,
      shortenUrl: shortenUrl,
    });
  }
};
