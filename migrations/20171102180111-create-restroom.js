'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restroom', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.INTEGER
      },
      comments: {
        type: Sequelize.TEXT
      },
      createdAt: {
        // allowNull: false,
        type: Sequelize.DATEONLY,
        default: Sequelize.NOW
      },
      updatedAt: {
        // allowNull: false,
        type: Sequelize.DATEONLY,
        default: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('restroom');
  }
};
