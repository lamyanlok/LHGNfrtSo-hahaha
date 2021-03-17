const express = require("express");

const feedController = require("../controller/feed");

const router = express.Router();

//GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/post
router.post("/newurl", feedController.createPost);

module.exports = router;
