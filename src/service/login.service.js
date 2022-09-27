const { User } = require('../models');
const mapError = require('../utils/error');
const { generateToken } = require('../utils/JWT');

const connection = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName'],
    where: { email, password },
  });

  if (!user) {
    return { type: mapError('IS_REQUIRED'), message: 'Invalid fields' };
  }

  const token = generateToken(user.dataValues);

  return { token };
};

module.exports = { connection };
