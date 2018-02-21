'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_code: {
        type: Sequelize.STRING,
        references: {
          model: 'Companies',
          key: 'code',
        }
      },
      name: {
        type: Sequelize.STRING
      },
      sanitized_name: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.DOUBLE
      },
      year: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Results');
  }
};