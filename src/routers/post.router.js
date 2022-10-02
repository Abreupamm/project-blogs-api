const express = require('express');

const router = express.Router();

const postController = require('../controller/post.controller');
const valiedToken = require('../middlewares/valiedToken');
const { categoryIdsIsValied, inputsIsValied } = require('../middlewares/valiedBlogPost');

// router.post('/:id', postController);
// router.put('/:id', postController);
router.get('/', valiedToken, postController.getAllPosts);
router.post('/', valiedToken, inputsIsValied, categoryIdsIsValied, postController.createPost);

module.exports = router;