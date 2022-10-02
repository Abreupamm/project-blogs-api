const Sequelize = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const mapError = require('../utils/error');

const newPost = async ({ title, content, categoryIds }, locals) => {
  const t = await sequelize.transaction();
  try {
  const post = await BlogPost.create(
    { title, content, userId: locals.id }, { transaction: t },
    );
  await Promise.all(
    categoryIds.map(async (id) => {
      await PostCategory.create(
        { postId: post.dataValues.id, categoryId: id }, { transaction: t },
      );
    }),
  );
  await t.commit();
  return { post };
  } catch (error) {
    await t.rollback();
    return { type: 500, message: error.type };
  }
};

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories' },
    ],
  });
  const posts = result.map((post) => post.dataValues);
  return { posts };
};

const getPostId = async (id) => {
  const postId = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories' },
    ],
  });
  if (!postId) {
    return { type: mapError('NOT_FOUND'), message: 'Post does not exist' };
  }

  const post = postId.dataValues;
  return { post };
};

const editPostById = async (id, { title, content }) => {
  await BlogPost.update({
    title,
    content,
  },
  {
    where: { id },
  });
  const { post } = await getPostId(id);

  return post;
};

module.exports = {
  newPost,
  getAll,
  getPostId,
  editPostById,
};
