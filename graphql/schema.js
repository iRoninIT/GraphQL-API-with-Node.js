import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Project {
  id: ID!,
  name: String,
  skills: String
}

type Candidate {
  id: ID!,
  fullName: String,
  experience: Int,
  matchedSkillsNo: Int,
  matchedSkills: String
}

type Query {
  projects: [Project],
  candidates(projectId: Int): [Candidate]
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });
