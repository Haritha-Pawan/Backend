import express from "express";
import Post from "../model/Post.js";

const router = express.Router();

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
