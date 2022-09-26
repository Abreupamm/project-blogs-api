const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define('Category', {
    name: DataTypes.STRING, 
  },
  {
    tableName:'categories',
    underscored: true,
    timestamp: false
  });
  return CategoriesTable;
};

module.exports = CategoriesSchema;