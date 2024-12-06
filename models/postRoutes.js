const express = require("express");
const router = express.Router();
const { createPost, getPosts, likePost, commentOnPost } = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createPost);
router.get("/", getPosts);
router.post("/:postId/like", authMiddleware, likePost);
router.post("/:postId/comment", authMiddleware, commentOnPost);

module.exports = router;
