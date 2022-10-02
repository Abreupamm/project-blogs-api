const express = require('express');

const router = express.Router();

const postController = require('../controller/post.controller');
const valiedToken = require('../middlewares/valiedToken');
const { categoryIdsIsValied, inputsIsValied } = require('../middlewares/valiedBlogPost');
const { fieldsValied } = require('../middlewares/valiedFieldsPostUpdate');
const { valiedUserPost } = require('../middlewares/valiedUser');

router.get('/:id', valiedToken, postController.getPostById);
router.put('/:id', valiedToken, fieldsValied, valiedUserPost, postController.putPostById);
router.get('/', valiedToken, postController.getAllPosts);
router.post('/', valiedToken, inputsIsValied, categoryIdsIsValied, postController.createPost);

module.exports = router;