const express = require('express');

const router = express.Router();
const categoriesController = require('../controller/categories.controller');
const tokenIsValied = require('../middlewares/valiedToken');

router.post('/', tokenIsValied, categoriesController.postCategory);
router.get('/', tokenIsValied, categoriesController.getCategories);

module.exports = router;