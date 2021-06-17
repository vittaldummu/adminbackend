const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    header: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    blog_image: {
        type: String,
        required: true
    },
    date: {
        type: Number
    }
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;