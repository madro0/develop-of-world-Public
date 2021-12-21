import { AdvanceProjectModel } from "../models/advanceProject";

const advanceProjectResolvers = {
    Query : {
        advanceProject: async ( parent: any, arg: any )=>{
            const advancesProjectDb = await AdvanceProjectModel.find().populate('project').populate('createdBy');
            if(!advancesProjectDb){
                throw new Error('Error al listar todos los avances de todos los projectos');
            }
            return advancesProjectDb;
        },

        filerAdvanceProjectById: async (parent: any, arg: any)=>{
            const advanceProjectDb = await AdvanceProjectModel.find({project: arg._id })
                .populate('project')
                .populate('createdBy');

            if(!advanceProjectDb){
                throw new Error(`el avance del proyecto no encontrado`);
            }    
            return advanceProjectDb;
        }, 
    },

    Mutation: {
        createAdvanceProject: async ( parent: any, arg: any )=>{
            try {
                const newAdvanceProject = AdvanceProjectModel.create({
                    date: arg.date,
                    description: arg.description,
                    project: arg.project,
                    createdBy: arg.createBy
                });

                return newAdvanceProject; 
            
            } catch (error) {
                throw new Error ('Error al crear un nuevo avance de proyecto');    
            }
        }
    }
};

export { advanceProjectResolvers }