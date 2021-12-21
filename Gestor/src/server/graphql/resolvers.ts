import { userResolver } from '../resolvers/userResolvers';
import { projectResolvers } from '../resolvers/projectResolvers';
import { authResolvers } from '../resolvers/authResolvers';
import { advanceProjectResolvers } from '../resolvers/advanceProjectResolver';
export const resolvers = [
    userResolver,
    projectResolvers,
    authResolvers,
    advanceProjectResolvers
]