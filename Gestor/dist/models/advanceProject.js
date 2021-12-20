"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvanceProjectModel = void 0;
const mongoose_1 = require("mongoose");
const user_1 = require("./user");
const project_1 = require("./project");
const advanceProjectSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: project_1.ProjectModel,
        requerid: true
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: user_1.UserModel,
        requered: true,
    }
});
const AdvanceProjectModel = (0, mongoose_1.model)('AdvanceProjectModel', advanceProjectSchema);
exports.AdvanceProjectModel = AdvanceProjectModel;
