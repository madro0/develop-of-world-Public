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
exports.authResolvers = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../helpers/jwt");
const authResolvers = {
    Mutation: {
        login: (parent, arg, contaxt) => __awaiter(void 0, void 0, void 0, function* () {
            const userDb = yield user_1.UserModel.findOne({ email: arg.email });
            if (!userDb) {
                throw new Error('(email) o contraseña erronea');
            }
            if (!bcrypt_1.default.compareSync(arg.password, userDb.password)) {
                throw new Error('email o (contraseña) erronea');
            }
            let token = yield (0, jwt_1.generateJWT)(userDb);
            contaxt.res.cookie('Authorization', token, { httpOnly: true });
            return {
                ok: true,
                user: userDb,
                token
            };
        })
    }
};
exports.authResolvers = authResolvers;
