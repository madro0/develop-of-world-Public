import { ProjectModel } from './project';

const projectResolvers = {

    Query:{
        Projects: async (parent:any, args: any)=>{
            const projectsDb = await ProjectModel.find().populate('leader');
            return projectsDb;
        },
    },
    Mutation : {
        createProject : async (parent:any, args:any)=>{
            const projectDb = await ProjectModel.create({
                name: args.name,
                state: args.state,
                phase: args.phase,
                startDate: args.startDate,
                endDate: args.endDate,
                leader: args.leader,
                objectives: args.objectives
            });
            return projectDb;
        },
    },
};

export {projectResolvers};
