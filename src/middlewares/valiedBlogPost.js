const mapError = require('../utils/error');

const isCategory = require('../utils/isCategory');

const categoryIdsIsValied = async (req, res, next) => {
  const { categoryIds } = req.body;
  const type = mapError('NOT_FOUND');
  const message = '"categoryIds" not found';

  if (!categoryIds) {
    return res.status(type).json({ message });
  }

  const valied = await isCategory(categoryIds);
 
  if (!valied) {
    return res.status(type).json({ message });
  }
  next();
};

module.exports = categoryIdsIsValied;