'use strict';

const query = `
CREATE VIEW CandidatesProjects AS
SELECT CandidatesSkills.candidateId,
       ProjectsSkills.projectId,
       COUNT(*) AS matchedSkillsNo,
       GROUP_CONCAT(Skills.name) AS matchedSkills,
       SUM(CandidatesSkills.experience) AS experience
FROM CandidatesSkills
INNER JOIN ProjectsSkills
ON CandidatesSkills.skillId = ProjectsSkills.skillId
INNER JOIN Skills
ON CandidatesSkills.skillId = Skills.id
GROUP BY candidateId, projectId
`;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(query);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP VIEW CandidatesProjects');
  }
};
