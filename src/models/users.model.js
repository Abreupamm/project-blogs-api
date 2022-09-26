const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
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
    UserTable.hasMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'id'
    })
  }
  return UserTable;
};

module.exports = UserSchema;

