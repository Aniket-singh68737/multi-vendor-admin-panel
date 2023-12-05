const Post = require('../models/Post');

module.exports = {
  async createPost(req, res) {
    try {
      // Assuming the request body contains post data
      const { user, title, content, images } = req.body;
      const newPost = new Post({ user, title, content, images });
      await newPost.save();
      res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
