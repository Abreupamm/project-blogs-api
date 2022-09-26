module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('categories', {
    id:{allowNull: false,
      autoIncremente: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
    }
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
