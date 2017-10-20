'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING
  });

  Project.associate = function(models) {
    var Candidate = models.Candidate;
    var CandidatesProject = models.CandidatesProject;
    var ProjectsSkill = models.ProjectsSkill;
    var Skill = models.Skill;

    Project.belongsToMany(Candidate, {
      through: {
        model: CandidatesProject,
        unique: false
      },
      foreign_key: 'projectId'
    });
    Project.belongsToMany(Skill, {
      through: {
        model: ProjectsSkill,
        unique: false
      },
      foreign_key: 'projectId'
    });
  };

  return Project;
};
