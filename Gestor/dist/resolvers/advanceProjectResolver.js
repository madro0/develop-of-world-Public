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
exports.advanceProjectResolvers = void 0;
const advanceProject_1 = require("../models/advanceProject");
const advanceProjectResolvers = {
    Query: {
        advanceProject: (parent, arg) => __awaiter(void 0, void 0, void 0, function* () {
            const advancesProjectDb = yield advanceProject_1.AdvanceProjectModel.find().populate('project').populate('createdBy');
            if (!advancesProjectDb) {
                throw new Error('Error al listar todos los avances de todos los projectos');
            }
            return advancesProjectDb;
        }),
        filerAdvanceProjectById: (parent, arg) => __awaiter(void 0, void 0, void 0, function* () {
            const advanceProjectDb = yield advanceProject_1.AdvanceProjectModel.find({ project: arg._id })
                .populate('project')
                .populate('createdBy');
            if (!advanceProjectDb) {
                throw new Error(`el avance del proyecto no encontrado`);
            }
            return advanceProjectDb;
        }),
    },
    Mutation: {
        createAdvanceProject: (parent, arg) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const newAdvanceProject = advanceProject_1.AdvanceProjectModel.create({
                    date: arg.date,
                    description: arg.description,
                    project: arg.project,
                    createdBy: arg.createBy
                });
                return newAdvanceProject;
            }
            catch (error) {
                throw new Error('Error al crear un nuevo avance de proyecto');
            }
        })
    }
};
exports.advanceProjectResolvers = advanceProjectResolvers;
