const loginService = require('../service/login.service');

const makeConnection = async (req, res) => {
  const { body } = req;
  const { type, message, token } = await loginService.connection(body);
  if (token) {
    return res.status(200).json({ token });
  }
  return res.status(type).json({ message });
};

module.exports = { makeConnection };