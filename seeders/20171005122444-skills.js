'use strict';

const skillNames = ['Ruby', 'Ruby on Rails', 'Node.js', 'Elixir', 'Phoenix', 'React', 'Vue.js', 'Ember'];

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    const skills = skillNames.map((name) => {
      return {
        name,
        createdAt: now,
        updatedAt: now
      };
    });
    return queryInterface.bulkInsert('Skills', skills, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};
