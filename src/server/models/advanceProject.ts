import { Schema, model, Mongoose } from 'mongoose';
import { UserModel } from './user';
import { ProjectModel } from './project';

export interface AdvanceProject {
    date: Date;
    description: string;
    observation: [string];
    project: Schema.Types.ObjectId;
    createdBy: Schema.Types.ObjectId;
}

const advanceProjectSchema = new Schema<AdvanceProject>({
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    observation: [
        {
            type: String,
        }
    ],
    project: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        requerid: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        requered: true,
    }
});

const AdvanceProjectModel = model ('AdvanceProjectModel', advanceProjectSchema);
export{ AdvanceProjectModel }
