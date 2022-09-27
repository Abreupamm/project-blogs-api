const postCategorySchema = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define('PostCategory', 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
      foreignKey: 'category_id',
      otherKey: 'post_id'
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategoryTable,
      foreignKey: 'post_id',
      otherKey: 'category_id'
    });
  };

  return postCategoryTable;
};

module.exports = postCategorySchema;