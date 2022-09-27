const express = require('express');

const router = express.Router();

const loginController = require('../controller/login.controller');
const { loginIsValied } = require('../middlewares/valiedLogin');

router.post('/', loginIsValied, loginController.makeConnection);

module.exports = router;