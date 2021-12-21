import { gql } from 'apollo-server-express';


const projectTypes = gql`
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

        updateProject(
            _id: String!
            name: String
            phase: Enum_PhaseProyect
            state: Enum_StateProyect
            startDate: Date
            endDate: Date
            leader: String
            objectives: [createObjective]
        ): Project

        deleteProject(
            _id: String,
        ): Project
    }
`;

export {projectTypes};