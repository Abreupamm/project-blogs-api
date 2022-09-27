const userService = require('../service/user.service');

const addNewUser = async (req, res) => {
  const { type, message, token } = await userService.addUser(req.body);
   if (token) {
    return res.status(201).json({ token });
   }
   return res.status(type).json({ message });
};

module.exports = { addNewUser };