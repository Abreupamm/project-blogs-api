const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING 
  },
  {
    timestamps: false,
    tableName:'users',
    underscored: true,
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

