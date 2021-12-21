import { gql } from 'apollo-server-express';

const userTypes = gql`
scalar Date

    enum Enum_StateUser{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_Role {
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum Enum_StateProyect{
        ACTIVO
        INACTIVO
    }

    enum Enum_TypeObjetive {
        GENERICO
        ESPECIFICO
    }

    type User{
        _id: ID!
        name: String!
        lastName: String!
        email: String!
        role: Enum_Role!
        state: Enum_StateUser
    }

    type Query {
        Users: [User]
        User(_id: String!): User
    }

    type Mutation{
        createUser(
            name: String!
            lastName: String!
            email: String!
            password: String!
            role: Enum_Role!
            state: Enum_StateUser
        ):User

        updateUser(
            _id: String!
            name: String
            lastName: String
            email: String
            role: Enum_Role
            state: Enum_StateUser
        ): User

        deleteUser(
            _id: String, 
            email: String 
        ): User

        
    }
`; 
export{ userTypes }