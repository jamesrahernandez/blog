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
exports.default = router;
