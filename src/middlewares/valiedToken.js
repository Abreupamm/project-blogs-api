const { authenticateToken } = require('../utils/JWT');

const mapError = require('../utils/error');

const tokenIsValied = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(mapError('UNAUTHORIZED')).json({ message: 'Token not found' });
  }

  const { type, message, user } = authenticateToken(authorization);

  if (!user) {
    return res.status(type).json({ message });
  }

  req.locals = user;

  next();
};

module.exports = tokenIsValied;
