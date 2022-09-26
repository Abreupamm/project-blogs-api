const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define(
    'BlogPost',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamp: false,
    }
  );
  blogPostsTable.associate = (models) => {
    blogPostsTable.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  return blogPostsTable;
};

module.exports = blogPostsSchema;
