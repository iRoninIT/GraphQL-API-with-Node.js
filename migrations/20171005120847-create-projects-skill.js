'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProjectsSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      skillId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    }, {
      uniqueKeys: [{
        singleField: false,
        fields: ['projectId', 'skillId']
      }]
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('ProjectsSkills');
  }
};
