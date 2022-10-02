const mapError = require('../utils/error');

const categoryService = require('../service/categories.service');

const type = mapError('IS_REQUIRED');

const valiedId = async (ids) => {
  const valied = await Promise.all(ids.map(async (id) => {
    const isValied = await categoryService.getCategoryById(id);
   
    if (!isValied) {
      return null;
    }
    return true;
  }));
  
  const result = valied.some((id) => id === true);

  if (result === false) {
    return null;
  }
  return true;
};

const categoryIdsIsValied = async (req, res, next) => {
  const message = '"categoryIds" not found';
  const { categoryIds } = req.body;
  
  const result = await valiedId(categoryIds);

  if (!result) {
    return res.status(type).json({ message });
  }
  next();
};

const inputsIsValied = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const post = [title, content, categoryIds];
  const message = 'Some required fields are missing';

  const isValied = post.every((e) => e);
  const isValue = post.every((e) => e.length > 0);

  if (isValied === false || isValue === false) {
    return res.status(type).json({ message });
  }

  next();
};

module.exports = {
  categoryIdsIsValied,
  inputsIsValied,
};
