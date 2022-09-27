const express = require('express');

const router = express.Router();

const userController = require('../controller/user.controller');
const tokenIsValied = require('../middlewares/valiedToken');
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

router.get('/', tokenIsValied, userController.getUsers);

module.exports = router;
