const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");
const Like = require("../models/like");
const Follower = require("../models/follower");
const Tag = require("../models/tag");
const PostTag = require("../models/postTag");
const View = require("../models/view");

// Fetch all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all comments
router.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all likes
router.get("/likes", async (req, res) => {
  try {
    const likes = await Like.find();
    res.json(likes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all followers
router.get("/followers", async (req, res) => {
  try {
    const followers = await Follower.find();
    res.json(followers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all tags
router.get("/tags", async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all postTags
router.get("/postTags", async (req, res) => {
  try {
    const postTags = await PostTag.find();
    res.json(postTags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all views
router.get("/views", async (req, res) => {
  try {
    const views = await View.find();
    res.json(views);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
