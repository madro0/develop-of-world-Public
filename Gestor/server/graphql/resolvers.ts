import { userResolver } from '../resolvers/userResolvers';
import { projectResolvers } from '../resolvers/projectResolvers';
import { authResolvers } from '../resolvers/authResolvers';
export const resolvers = [
    userResolver,
    projectResolvers,
    authResolvers
]