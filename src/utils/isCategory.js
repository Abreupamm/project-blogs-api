const categoryService = require('../service/categories.service');

const isCategory = async (id) => {
  const category = await categoryService.getCategoryById(id);

  if (!category) {
    return null;
  }

  return true;
};

module.exports = isCategory;