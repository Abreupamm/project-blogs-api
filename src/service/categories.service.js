const { Category } = require('../models');

const addcategory = async (category) => {
  const newCategory = await Category.create(category);

  return { category: newCategory.dataValues };
};

const categoriesList = async () => {
  const categories = await Category.findAll();

  const all = categories.map((category) => category.dataValues);

  return { categories: all };
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);

  if (!category) {
    return null;
  }

  return true;
};

module.exports = {
  categoriesList,
  addcategory,
  getCategoryById,
};