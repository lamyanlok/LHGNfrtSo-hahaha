const randomString = require("randomstring");
const ShortUrl = require("./shortUrls");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first post!" }],
  });
};

exports.createShort = async (req, res, next) => {
  //console.log(req.body.url);
  const fullUrl = await ShortUrl.findOne({ full: req.body.url });
  //console.log(fullUrl);
  //console.log(fullUrl.full);
  //console.log(fullUrl.short);
  if (fullUrl.full != null) {
    console.log("return existing one");
    res.status(201).json({
      url: fullUrl.full,
      shortenUrl: fullUrl.short,
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
