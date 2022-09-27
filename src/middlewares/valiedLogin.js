const mapError = require('../utils/error');

const loginIsValied = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(mapError('IS_REQUIRED'))
      .json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  loginIsValied,
};
