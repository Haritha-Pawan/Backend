import express from "express";
import { getPosts, createPost } from "../controller/postController.js";

const router = express.Router();

// GET POSTS
router.get("/", getPosts);

// CREATE POST
router.post("/", createPost);

export default router;
