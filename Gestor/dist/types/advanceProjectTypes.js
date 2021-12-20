"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advanceProjectTypes = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const advanceProjectTypes = (0, apollo_server_express_1.gql) `

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
exports.advanceProjectTypes = advanceProjectTypes;
