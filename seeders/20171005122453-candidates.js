'use strict';

const casual = require('casual');

module.exports = {
  up: (queryinterface, sequelize) => {
    const now = new Date();
    const candidates = Array(10).fill(null).map(() => {
      return {
        fullName: casual.full_name,
        createdAt: now,
        updatedAt: now
      };
    });
    return queryinterface.bulkInsert('Candidates', candidates, {});
  },

  down: (queryinterface, sequelize) => {
    return queryinterface.bulkDelete('Candidates', null, {});
  }
};
