'use strict';

const casual = require('casual');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    const projects = Array(5).fill(null).map(() => {
      return {
        name: casual.title,
        createdAt: now,
        updatedAt: now
      };
    });
    return queryInterface.bulkInsert('Projects', projects, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
