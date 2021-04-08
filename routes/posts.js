const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { validatePostInput } = require("../util/post_valid");
const jwtCheck = require("../util/check-auth");

// get all posts
router.get("/get", async (req, res) => {
  try {
    const postMessages = await Post.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// create posts
router.post("/create", jwtCheck, async (req, res) => {
  let { title, description, price } = req.body;
  const { valid, errors } = validatePostInput(title, description, price);

  const post = new Post({
    title: title,
    description: description,
    price: price,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// delete posts

module.exports = router;
