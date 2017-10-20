'use strict';

const random = require('lodash/random');
const sampleSize = require('lodash/sampleSize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let ids = Array(8).fill(null).map((_, i) => i + 1);

    const candidatesSkills = ids.reduce((memo, candidateId) => {
      const skillIds = sampleSize(ids, 5);
      const candidateSkills = skillIds.map((skillId) => {
        return { candidateId, skillId, experience: random(0, 5) };
      });
      return memo.concat(candidateSkills);
    }, []);

    return queryInterface.bulkInsert('CandidatesSkills', candidatesSkills, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CandidatesSkills', null, {});
  }
};
