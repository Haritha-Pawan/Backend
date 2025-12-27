import Post from "../model/Post.js";

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { userId, title, content } = req.body;

        if (!userId || !title || !content) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const post = await Post.create({ userId, title, content });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all posts
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
