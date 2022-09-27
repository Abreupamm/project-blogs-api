const userService = require('../service/user.service');

const addNewUser = async (req, res) => {
  const { type, message, token } = await userService.addUser(req.body);
   if (token) {
    return res.status(201).json({ token });
   }
   return res.status(type).json({ message });
};

const getUsers = async (req, res) => {
  const usersAll = await userService.getAllUsers();
  return res.status(200).json(usersAll);
};

module.exports = { 
  addNewUser,
  getUsers,
};