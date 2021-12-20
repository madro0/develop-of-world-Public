"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTypes = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const authTypes = (0, apollo_server_express_1.gql) `
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
exports.authTypes = authTypes;
