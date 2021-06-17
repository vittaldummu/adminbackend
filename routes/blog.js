const express = require('express');
const router = express.Router();
const passport = require('passport');

const Blog = require("../models/blog");

require('../config/passport')(passport);

router.post("/create/blog",  (req,res) => {
    if (!req.body.header || !req.body.summary || !req.body.description ) {
        return res.status(400).send({
          message: "Required field can not be empty",
        });
    }
    const blog = new Blog({
        header: req.body.header,
        summary: req.body.summary,
        description: req.body.description,
        blog_image: req.body.blog_image,
        date: req.body.date
    });
    blog
        .save()
        .then(() => {
          res.redirect("/blogs");
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User.",
        });
    });
});

router.get("/show/blogs", (req, res) => {
    Blog.find()
        .then((blogs) => {
            return res.send({success: true, blogs: blogs});
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
});

module.exports = {
    blogController: router
}