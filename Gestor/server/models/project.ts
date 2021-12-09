import { Schema, model } from 'mongoose';
import { UserModel } from './user';
import { Enum_StateProyect, Enum_PhaseProyect, Enum_TypeObjective } from '../helpers/enums/enums';

interface Proyect {
    name: string;
    startDate: Date;
    endDate: Date;
    state: Enum_StateProyect; 
    phase: Enum_PhaseProyect;
    leader:Schema.Types.ObjectId;
    objectives: [{description: string; type: Enum_TypeObjective}]
}

const projectSchema = new Schema<Proyect>({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    state:{
        type: String,
        enum: Enum_StateProyect,
        default: Enum_StateProyect.INACTIVO
    },
    phase: {
        type: String,
        enum: Enum_PhaseProyect,
        default: Enum_PhaseProyect.NULO,
    },
    leader: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    objectives: [
        {
            description:{
                type: String,
                requerid: true,
            },
            type:{
                type:String,
                enum: Enum_TypeObjective,
                required: true,
            }
        }
    ]
});

const ProjectModel = model('Proyect', projectSchema);
export { ProjectModel }