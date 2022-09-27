const jwt = require('jsonwebtoken');

const mapError = require('./error');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET;

const generateToken = ({ id, displayName }) => {
  const payload = { id, displayName };
  
  const jwtConfig = {
    expiresIn: '5m',
    algorithm: 'HS256',
  };

  return jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig);
};

const authenticateToken = (token) => {
  const type = mapError('UNAUTHORIZED');
  
  try {
    const user = jwt.verify(token, TOKEN_SECRET_KEY);
    return { user };
  } catch (error) {
    return { type, message: 'Expired or invalid token' };
  }
};

module.exports = { generateToken, authenticateToken };