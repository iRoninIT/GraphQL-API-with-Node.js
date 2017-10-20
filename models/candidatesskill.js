'use strict';
module.exports = (sequelize, DataTypes) => {
  var CandidatesSkill = sequelize.define('CandidatesSkill', {
    candidateId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CandidatesSkill;
};