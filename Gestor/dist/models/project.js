"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const user_1 = require("./user");
const enums_1 = require("../helpers/enums/enums");
const projectSchema = new mongoose_1.Schema({
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
    state: {
        type: String,
        enum: enums_1.Enum_StateProyect,
        default: enums_1.Enum_StateProyect.INACTIVO
    },
    phase: {
        type: String,
        enum: enums_1.Enum_PhaseProyect,
        default: enums_1.Enum_PhaseProyect.NULO,
    },
    leader: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: user_1.UserModel,
    },
    objectives: [
        {
            description: {
                type: String,
                requerid: true,
            },
            type: {
                type: String,
                enum: enums_1.Enum_TypeObjective,
                required: true,
            }
        }
    ]
});
const ProjectModel = (0, mongoose_1.model)('Proyect', projectSchema);
exports.ProjectModel = ProjectModel;
