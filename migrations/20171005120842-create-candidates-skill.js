'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CandidatesSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      candidateId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      skillId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      experience: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    }, {
      uniqueKeys: [{
        singleField: false,
        fields: ['candidateId', 'skillId']
      }]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CandidatesSkills');
  }
};
