const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define('BlogPosts', {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    timestamp: false
  });
  blogPostsTable.associate = (models) => {
    blogPostsTable.belongsTo(models.Users, {
      as: 'users',
      foreignKey: 'userId'
    })
  };
  return blogPostsTable;
};

module.exports = blogPostsSchema;