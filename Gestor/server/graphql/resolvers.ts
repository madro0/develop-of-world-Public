import { userResolver } from '../models/user/resolvers';
import { projectResolvers } from '../models/project/resolvers';
export const resolvers = [
    userResolver,
    projectResolvers
]