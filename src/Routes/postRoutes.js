const express = require('express');
const postController = require('../controllers/postController');
const commentRoutes = require('./commentRoutes');

const router = express.Router();

// CRUD operations for posts
router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPostById);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

// Comment routes for posts
router.use('/:postId/comments', commentRoutes);

module.exports = router;
