const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define('blog_posts', {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  published: DataTypes.DATETIME,
  updated: DataTypes.DATETIME,
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    timestamp: false
  });
};

module.exports = blogPostsSchema;