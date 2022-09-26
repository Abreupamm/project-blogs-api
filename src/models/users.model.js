const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING 
  },
  {
    tableName:'users',
    underscored: true,
    timestamp: false
  });
  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPosts, {
      as: 'post',
      foreignKey: 'id'
    })
  }
  return UserTable;
};

module.exports = UserSchema;

