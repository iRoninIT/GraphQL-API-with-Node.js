import Models from '../models';

const { Project, Skill, sequelize } = Models;

const buildCandidates = (candidates) => {
  return candidates.map((candidate) => {
    const matchedSkills = candidate.CandidatesProject.matchedSkills;
    return Object.assign(candidate.get(), {
      experience: candidate.CandidatesProject.experience,
      matchedSkillsNo: candidate.CandidatesProject.matchedSkillsNo,
      matchedSkills: matchedSkills.split(',').join(', ')
    });
  });
};

const buildProjects = (projects) => {
  return projects.map((project) => {
    const skillNames = project.Skills.map((s) => s.name);
    return Object.assign(project.get(), {
      skills: skillNames.join(', ')
    });
  });
};

export default {
  Query: {
    projects() {
      return Project.findAll({
        include: [{
          model: Skill
        }]
      }).then(buildProjects);
    },
    candidates(_, { projectId }) {
      return Project.findOne({ where: { id: projectId } })
        .then((project) => {
          if(!project) { return []; }

          return project.getCandidates({
            order: [
              sequelize.literal('CandidatesProject.matchedSkillsNo DESC'),
              sequelize.literal('CandidatesProject.experience DESC')
            ]
          }).then(buildCandidates);
        });
    }
  }
};
