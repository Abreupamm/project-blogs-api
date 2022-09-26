const postCategorySchema = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define('postCategory', 
  {},{
    timestamps: false,
    tableName: 'post_categories',
    underscored: true
  });
  postCategorySchema.associate = (models) => {
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