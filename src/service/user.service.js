const { User } = require('../models');
const mapError = require('../utils/error');
const { generateToken } = require('../utils/JWT');

const addUser = async ({ displayName, email, password, image }) => {
  const userExists = await User.findOne({
    attributes: ['id', 'email'],
     where: { email },
  });

  if (!userExists) {
    const createUser = await User.create({ displayName, email, password, image });
    const token = generateToken(createUser.dataValues);
    return { token };
  }
  
  return { type: mapError('CONFLICT'), message: 'User already registered' };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  const all = users.map((user) => user.dataValues);
  
  return all;
};

const userById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    return { type: mapError('NOT_FOUND'), message: 'User does not exist' };
  }
  
  return { user };
};

module.exports = { 
  addUser,
  getAllUsers,
  userById,
 };