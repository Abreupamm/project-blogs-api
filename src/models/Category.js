const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define('Category', {
    id: DataTypes.INTEGER,
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