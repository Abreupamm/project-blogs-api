const express = require('express');

const router = express.Router();

const postController = require('../controller/post.controller');
const valiedToken = require('../middlewares/valiedToken');
const categoryIdsIsValied = require('../middlewares/valiedBlogPost');

// router.post('/:id', postController);
// router.put('/:id', postController);
// router.get('/', postController);
router.post('/', valiedToken, categoryIdsIsValied, postController.createPost);

module.exports = router;