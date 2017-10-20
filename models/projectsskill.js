'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProjectsSkill = sequelize.define('ProjectsSkill', {
    projectId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  return ProjectsSkill;
};
