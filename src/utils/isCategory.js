const categoryService = require('../service/categories.service');

const isCategory = async (ids) => {
  const result = ids.map(async (id) => { 
    const category = await categoryService.getCategoryById(id);
    return category;
  });

  const valied = result.some((idCategory) => idCategory === true);

  return valied;
};

module.exports = isCategory;