const mapError = require('../utils/error');

const nameIsValied = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.length < 1) {
    return res.status(mapError('IS_REQUIRED')).json({ message: '"name" is required' });
  }

  next();
};

module.exports = nameIsValied;