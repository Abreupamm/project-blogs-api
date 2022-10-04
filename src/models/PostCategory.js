const postCategorySchema = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define('PostCategory', 
  {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },{
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true
  });
  postCategoryTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: postCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
  };

  return postCategoryTable;
};

module.exports = postCategorySchema;