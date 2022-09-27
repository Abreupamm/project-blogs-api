const { authenticateToken } = require('../utils/JWT');

const tokenIsValied = (req, res, next) => {
  const { token } = req.header;

  const { type, message, user } = authenticateToken(token);

  if (!user) {
    return res.status(type).json({ message });
  }

  req.locals = user;

  next();
};

module.exports = tokenIsValied;
