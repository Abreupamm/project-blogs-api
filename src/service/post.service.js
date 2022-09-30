const Sequelize = require('sequelize');
const { BlogPots, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const newPost = async ({ title, content, categoryIds, locals }) => {
  const t = await sequelize.transaction();
  try {
    const post = await BlogPots.create(
      { title, content, userId: locals.user.id },
      { transaction: t },
    );

    await Promise.all(categoryIds.map(async (id) => {
      await PostCategory.create(
        { postId: post.id, categoryId: id },
        { transaction: t },
      );
    }));

    await t.commit();
    return { post };
  } catch (error) {
    await t.rollback();
    return { type: 500, message: 'Error' };
  }
};

module.exports = {
  newPost,
};
