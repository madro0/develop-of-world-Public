"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectTypes = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const projectTypes = (0, apollo_server_express_1.gql) `
    scalar Date

    enum Enum_PhaseProyect {
        INICIADO
        DESARROLLO
        TERMINADO
        NULO
    }

    enum Enum_TypeObjective{
        GENERAL
        ESPECIFICO
    }

    type Objective {
        _id: ID!
        description: String
        type: Enum_TypeObjective
    }

    type Project {
        _id: ID!
        name: String!
        state: Enum_StateProyect!
        phase: Enum_PhaseProyect!
        startDate: Date!
        endDate: Date!
        leader: User!
        objectives:[Objective]
    }

    input createObjective{
        description: String!
        type: Enum_TypeObjective!
    }

    type Query {
        Projects: [Project]
    }

    type Mutation{
        createProject(
            name: String!
            phase: Enum_PhaseProyect!
            state: Enum_StateProyect!
            startDate: Date!
            endDate: Date!
            leader: String!
            objectives: [createObjective]
        ): Project
    }
`;
exports.projectTypes = projectTypes;
