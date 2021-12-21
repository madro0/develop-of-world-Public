"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectResolvers = void 0;
const project_1 = require("../models/project");
const projectResolvers = {
    Query: {
        Projects: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const projectsDb = yield project_1.ProjectModel.find().populate('leader');
            return projectsDb;
        }),
    },
    Mutation: {
        createProject: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const projectDb = yield project_1.ProjectModel.create({
                name: args.name,
                state: args.state,
                phase: args.phase,
                startDate: args.startDate,
                endDate: args.endDate,
                leader: args.leader,
                objectives: args.objectives
            });
            return projectDb;
        }),
        updateProject: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const projectDb = yield project_1.ProjectModel.findOneAndUpdate(args._id, {
                name: args.name,
                phase: args.phase,
                state: args.state,
                startDate: args.startDate,
                endDate: args.endDate,
                leader: args.leader,
                objectives: args.objectives
            });
            return projectDb;
        }),
        deleteProject: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            if (Object.keys(args).includes('_id')) {
                try {
                    const projecDeleted = yield project_1.ProjectModel.findOneAndDelete({ _id: args._id });
                    if (!projecDeleted)
                        throw new Error(`El projecto con id ${args._id} no existe`);
                    return projecDeleted;
                }
                catch (error) {
                    throw new Error('Error al intentar eliminar el proyecto');
                }
            }
        })
    },
};
exports.projectResolvers = projectResolvers;
