const express = require('express');
const Post = require('../models/Posts');
const controller = require('../controllers/Controllers')
const router = express.Router();
// GET ALL THE POSTS
router.get('/', controller.getAllThePosts);
// SUBMIT A POSTS
router.post('/addpost', controller.addPost);
// GET SPECIFIC POSTS BY ID
router.get('/:postId', controller.getSpecificPostById);
// DELETE POSTS BY ID
router.delete('/:postId', controller.deletePostById);

module.exports = router;