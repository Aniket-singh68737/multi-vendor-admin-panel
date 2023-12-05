const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/postsController');

router.post('/create', PostsController.createPost);

module.exports = router;
