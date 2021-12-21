import {gql} from 'apollo-server-express';

const advanceProjectTypes = gql `

    type AdvanceProject {
        date: Date!
        description: String!
        observation: [String]
        project: ID!
        createdBy: ID!
    }

    type Query {
        advanceProject: [AdvanceProject]
        filerAdvanceProjectById(_id: String!): [AdvanceProject]
    }

    type Mutation{
        createAdvanceProject(
            date: Date!
            description: String!
            project: String!
            createdBy: String!
        ):AdvanceProject
    }

`;

export { advanceProjectTypes };