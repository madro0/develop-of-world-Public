"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../config/env"));
const generateJWT = (user) => {
    return new Promise((resolve, rejact) => {
        jsonwebtoken_1.default.sign({ user }, env_1.default.SEED, { expiresIn: env_1.default.CADUCIDAD_TOKEN }, (err, token) => {
            if (err) {
                console.log(err);
                rejact('no se puede generar un nuevo token', err);
            }
            resolve(token);
        });
    });
};
exports.generateJWT = generateJWT;
