"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var blog_1 = require("../models/blog");
var mongoose = require('mongoose');
var router = express.Router();
router.post('/', function (req, res) {
    var blog = new blog_1.default();
    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.save().then(function (newBlog) {
        res.json(newBlog);
    }).catch(function (err) {
        res.status(400).json(err);
    });
});
router.get('/', function (req, res) {
    blog_1.default.find().then(function (blogs) {
        res.json(blogs);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.get('/', function (req, res) {
    blog_1.default.findById(req.params['id']).then(function (blog) {
        res.json(blog);
    });
});
router.post('/:id', function (req, res) {
    var blogId = req.params.id;
    blog_1.default.findById(blogId).then(function (blog) {
        blog.title = req.body.title;
        blog.content = req.body.content;
        blog.save().then(function (updatedBlog) {
            res.json(updatedBlog);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    }).catch(function () {
        res.sendStatus(404);
    });
});
router.delete('/:id', function (req, res) {
    var blogId = req.params.id;
    blog_1.default.remove({ _id: blogId }).then(function () {
        res.sendStatus(200);
    }).catch(function (err) {
        res.status(500);
        console.log(err);
    });
});
exports.default = router;
