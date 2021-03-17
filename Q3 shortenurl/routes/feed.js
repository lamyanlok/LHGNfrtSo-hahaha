const express = require("express");

const feedController = require("../controller/feed");
const ShortUrl = require("../controller/shortUrls");

const router = express.Router();

//GET /feed/posts

router.get("/:shortUrl", async (req, res) => {
  console.log(req.params.shortUrl);
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  res.redirect(shortUrl.full);
});

router.post("/newurl", feedController.createShort);

module.exports = router;
