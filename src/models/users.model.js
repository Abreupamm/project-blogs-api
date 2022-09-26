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
  return UserTable;
};

module.exports = UserSchema;

