const express = require('express');
const commentController = require('../controllers/commentController');
const pagination = require('./utils/pagination');

const router = express.Router({ mergeParams: true });

// CRUD operations for comments
router.post('/', commentController.addComment);
router.get('/', pagination.paginateComments, commentController.getAllCommentsForPost);
router.put('/:commentId', commentController.updateCommentInPost);
router.delete('/:commentId', commentController.deleteCommentInPost);

module.exports = router;
