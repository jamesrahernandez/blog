"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var blog_1 = require("../models/blog");
var mongoose = require('mongoose');
var router = express.Router();
router.post('/', function (req, res) {
    console.log(req.body);
    if (req.body.id) {
        blog_1.default.findByIdAndUpdate(req.body.id, { "$set": { "title": req.body.title, "content": req.body.content, } }, { "new": true, "upsert": true }).then(function () {
            res.end();
        });
    }
    else {
        var blog_2 = new blog_1.default();
        blog_2.title = req.body.title;
        blog_2.content = req.body.content;
        blog_2.owner_id = req.body.owner_id;
        blog_2.save().then(function (newBlog) {
            res.json(newBlog);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    }
    ;
});
router.get('/:id', function (req, res) {
    blog_1.default.find({ owner_id: req.params['id'] }).then(function (blogs) {
        res.json(blogs);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.get('/:id', function (req, res) {
    blog_1.default.findById(req.params['id']).then(function (blog) {
        res.json(blog);
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
