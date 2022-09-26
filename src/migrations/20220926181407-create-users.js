'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncremente: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
