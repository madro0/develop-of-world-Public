"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../config/env"));
const verifyToken = (context) => {
    const token = context.req.headers['authorization'];
    if (!token) {
        throw new Error('not authenticated');
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, env_1.default.SEED);
        context.payload = payload;
    }
    catch (error) {
        console.log(error);
        throw new Error('not authenticated');
    }
    return context.next();
};
exports.verifyToken = verifyToken;
