'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name_EN: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name_HE: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description_EN: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description_HE: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      imageURL: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  },
};
