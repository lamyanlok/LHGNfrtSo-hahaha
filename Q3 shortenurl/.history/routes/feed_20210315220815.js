const express = require("express");

const feedController = require("../controller/feed");

const router = express.Router();

//GET /feed/posts
router.get("/posts", feedController.getPosts);

module.exports = router;
