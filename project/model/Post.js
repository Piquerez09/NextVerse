const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: { type: String, required: true }
        }
    ]
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
