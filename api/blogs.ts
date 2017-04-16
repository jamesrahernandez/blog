import * as express from 'express';
import Blog from '../models/blog';
let mongoose = require('mongoose');

let router = express.Router();

router.post('/', (req, res) => {
  let blog = new Blog();
  blog.title = req.body.title;
  blog.content = req.body.content;

  blog.save().then((newBlog) => {
    res.json(newBlog);
  }).catch((err) => {
    res.status(400).json(err);
  });
});
/*
router.get('/', (req, res) => {
  Blog.find().then((blogs) => {
    res.json(blogs);
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
});

router.get('/', (req, res) => {
  Blog.findById(req.params['id']).then((blog) => {
    res.json(blog);
  });
});
**/
export default router;
