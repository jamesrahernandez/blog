import * as express from 'express';
import Blog from '../models/blog';
let mongoose = require('mongoose');

let router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
if(req.body.id) {
  Blog.findByIdAndUpdate(req.body.id, { "$set": { "title": req.body.title, "content": req.body.content }}, { "new": true, "upsert": true }).then(() => {
  res.end();
});
} else {
  let blog = new Blog();
  blog.title = req.body.title;
  blog.content = req.body.content;

  blog.save().then((newBlog) => {
    res.json(newBlog);
  }).catch((err) => {
    res.status(400).json(err);
  });
}
});

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


router.delete('/:id', (req, res) => {
  let blogId = req.params.id;
  Blog.remove({_id:blogId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.status(500);
    console.log(err);
  });
});


export default router;
