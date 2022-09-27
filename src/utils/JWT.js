const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET;

const generateToken = ({ id, displayName }) => {
  const payload = { id, displayName };
  
  const jwtConfig = {
    expiresIn: '5m',
    algorithm: 'HS256',
  };

  return jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig);
};

module.exports = { generateToken };