import express from "express";
import { createPost, getPosts } from "../controller/postController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/get", getPosts);

export default router;
