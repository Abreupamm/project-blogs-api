const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      display_name:{
        allowNull: false.valueOf,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,        
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image:{
        type: Sequelize.STRING
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
     
    await queryInterface.dropTable('users');
  }
};
