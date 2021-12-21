import { ProjectModel } from '../models/project';

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

        updateProject: async (parent: any, args: any)=>{
            const projectDb = await ProjectModel.findOneAndUpdate(args._id,{
                name: args.name,
                phase: args.phase,
                state: args.state,
                startDate: args.startDate,
                endDate: args.endDate,
                leader: args.leader,
                objectives: args.objectives
            });

            return projectDb;
        },

        deleteProject : async (parent: any, args:any)=>{
            if(Object.keys(args).includes('_id')){
                try {
                    const projecDeleted = await ProjectModel.findOneAndDelete({_id:args._id})
                    
                    if(!projecDeleted)
                        throw new Error(`El projecto con id ${args._id} no existe`)
                    
                    return projecDeleted;
                } catch (error) {
                    throw new Error('Error al intentar eliminar el proyecto');
                }
                
            }
        }
    },
};

export {projectResolvers};
