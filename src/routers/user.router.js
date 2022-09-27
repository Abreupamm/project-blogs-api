const express = require('express');

const router = express.Router();

const userController = require('../controller/user.controller');
const {
  displayNameIsValied,
  emailIsValied,
  passwordIsValied,
} = require('../middlewares/valiedUser');

router.post(
  '/',
  displayNameIsValied,
  emailIsValied,
  passwordIsValied,
  userController.addNewUser,
);

module.exports = router;
