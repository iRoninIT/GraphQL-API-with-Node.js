'use strict';

const sampleSize = require('lodash/sampleSize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let ids = Array(8).fill(null).map((_, i) => i + 1);

    const projectsSkills = ids.reduce((memo, projectId) => {
      const skillIds = sampleSize(ids, 5);
      const projectSkills = skillIds.map((skillId) => {
        return { projectId, skillId };
      });
      return memo.concat(projectSkills);
    }, []);

    return queryInterface.bulkInsert('ProjectsSkills', projectsSkills, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProjectsSkills', null, {});
  }
};
