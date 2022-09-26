module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_categories', { 
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BlogPost',
          key: 'id',
        },
        primaryKey: true,
        onDelete:  'CASCATE'
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Category',
          key: 'id',
        },
        primaryKey: true,
        onDelete:  'CASCATE'
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post_categories');
  }
};
