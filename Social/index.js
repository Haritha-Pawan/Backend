import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import postRoutes from "./routes/PostRoute.js"; // your routes file

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
    origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(bodyParser.json());

// Routes
app.use("/post", postRoutes); // all /post requests go to postRoutes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
