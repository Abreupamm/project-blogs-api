const categoriesService = require('../service/categories.service');

const postCategory = async (req, res) => {
  const { category } = await categoriesService.addcategory(req.body);

  return res.status(201).json(category);
};

const getCategories = async (req, res) => {
  const { categories } = await categoriesService.categoriesList();
  return res.status(200).json(categories);
};

module.exports = {
  postCategory,
  getCategories,
};