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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const env_1 = __importDefault(require("./config/env"));
const apollo_server_express_1 = require("apollo-server-express");
const dbconnection_1 = require("./config/dbconnection");
const types_1 = require("./graphql/types");
const resolvers_1 = require("./graphql/resolvers");
// import dontenv from 'dotenv';
// dontenv.config();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: types_1.types,
    resolvers: resolvers_1.resolvers,
    context: ({ req, res }) => ({ req, res }),
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(next)
// app.use(express.urlencoded({}));
app.use((0, cors_1.default)());
app.get('/', (req, res) => res.send("hola"));
// app.use(require('./'));
app.listen(env_1.default.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbconnection_1.connectMongoDb)();
    yield server.start();
    server.applyMiddleware({ app });
    console.log(`server corriendo desde el puerto ${env_1.default.PORT}`);
}));
