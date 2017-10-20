'use strict';
module.exports = (sequelize, DataTypes) => {
  var CandidatesProject = sequelize.define('CandidatesProject', {
    candidateId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    matchedSkillsNo: DataTypes.INTEGER,
    matchedSkills: DataTypes.STRING,
    experience: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  return CandidatesProject;
};
