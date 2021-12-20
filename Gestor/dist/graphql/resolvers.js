"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const userResolvers_1 = require("../resolvers/userResolvers");
const projectResolvers_1 = require("../resolvers/projectResolvers");
const authResolvers_1 = require("../resolvers/authResolvers");
const advanceProjectResolver_1 = require("../resolvers/advanceProjectResolver");
exports.resolvers = [
    userResolvers_1.userResolver,
    projectResolvers_1.projectResolvers,
    authResolvers_1.authResolvers,
    advanceProjectResolver_1.advanceProjectResolvers
];
