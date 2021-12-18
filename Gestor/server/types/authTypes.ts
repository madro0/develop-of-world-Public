import {gql} from 'apollo-server-express';

const authTypes = gql`
    scalar endDate

        type User{
            _id: ID!
            name: String!
            lastName: String!
            email: String!
            role: Enum_Role!
            state: Enum_StateUser
        }

        type response{
            token: String
            user: User
            ok: Boolean
        }

    type Mutation{
        login(
            email: String
            password: String
        ): response
    }


`;
export{ authTypes }