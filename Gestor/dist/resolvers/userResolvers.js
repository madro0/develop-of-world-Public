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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolver = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
// import Router from 'graphql-router-ware';
const userResolver = {
    // UseMiddleware(verifyToken);
    Query: {
        Users: (parent, args, contaxt) => __awaiter(void 0, void 0, void 0, function* () {
            const users = yield user_1.UserModel.find();
            return users;
        }),
        User: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findOne({ _id: args._id });
            return user;
        })
    },
    Mutation: {
        createUser: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const userDb = yield user_1.UserModel.create({
                name: args.name,
                lastName: args.lastName,
                email: args.email,
                password: bcrypt_1.default.hashSync(args.password, 10),
                role: args.role,
            });
            if (Object.keys(args).includes('state')) {
                userDb.state = args.state;
            }
            return userDb;
        }),
        updateUser: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const userDb = yield user_1.UserModel.findByIdAndUpdate(args._id, {
                name: args.name,
                lastname: args.lastName,
                email: args.email,
                role: args.role,
                state: args.state
            });
            return userDb;
        }),
        deleteUser: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            if (Object.keys(args).includes('_id')) {
                const userDeleted = yield user_1.UserModel.findOneAndDelete({ _id: args._id });
                return userDeleted;
            }
            else if (Object.keys(args).includes('email')) {
                const userDeleted = yield user_1.UserModel.findOneAndDelete({ _id: args.email });
                return userDeleted;
            }
        }),
    },
};
exports.userResolver = userResolver;
