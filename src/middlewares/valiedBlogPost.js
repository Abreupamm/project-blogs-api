const mapError = require('../utils/error');

const isCategory = require('../utils/isCategory');

const categoryIdsIsValied = async (req, res, next) => {
  const { categoryIds } = req.body;
   const type = mapError('IS_REQUIRED');
  const message = '"categoryIds" not found';

  if (!categoryIds) {
    return res.status(type).json({ message });
  }

  const valied = categoryIds.map(async (id) => {
   const isValied = await isCategory(id);
   if (isValied) {
    return id;
   }
  });

  const result = valied.some((element) => element === true);
 
  if (result === false) {
    return res.status(type).json({ message });
  }
  next();
};

module.exports = categoryIdsIsValied;