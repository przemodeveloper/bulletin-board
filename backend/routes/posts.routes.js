const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'})
      .select('author created title text status')
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/posts', async (req, res) => {
  try {
    const { author, created, status, title, text } = req.body;
    const newPost = new Post({author: author, created: created, status: status, title: title, text: text});
    await newPost.save();
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json({ message: err});
  }
});

router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await(Post.findById(req.params.id));
    if(post) {
      await Post.deleteOne({ _id: req.params.id });
      res.json({ deletedElement: post});
    }
    else res.status(404).json({ message: 'Not found...'});
  } catch(err) {
    res.status(500).json({ message: err});
  }
});

module.exports = router;
