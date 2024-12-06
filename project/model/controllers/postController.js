const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res) => {
    const { content } = req.body;
    const userId = req.userId; // Extraído do token JWT

    try {
        const newPost = new Post({ userId, content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ message: "Erro ao criar post." });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("userId", "username").sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar posts." });
    }
};

exports.likePost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.userId; // Extraído do token JWT

    try {
        const post = await Post.findById(postId);
        if (post.likes.includes(userId)) {
            return res.status(400).json({ message: "Você já curtiu este post." });
        }
        post.likes.push(userId);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: "Erro ao curtir post." });
    }
};

exports.commentOnPost = async (req, res) => {
    const { postId, text } = req.body;
    const userId = req.userId; // Extraído do token JWT

    try {
        const post = await Post.findById(postId);
        post.comments.push({ userId, text });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: "Erro ao comentar no post." });
    }
};
