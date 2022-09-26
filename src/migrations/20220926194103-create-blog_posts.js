module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncremente: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCATE',
      },
      published: {
        type: Sequelize.DATETIME,
      },
      updated: {
        type: Sequelize.DATETIME,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
