"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    PORT: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4000,
    //=======================================
    //URI Database!
    //=======================================
    URLDB: (_b = process.env.URLDB) !== null && _b !== void 0 ? _b : 'mongodb+srv://madro:K8mwWFepr8Gmc73s@cluster0.yugug.mongodb.net/Gestor',
    //'mongodb://localhost:27017/Lt';
    //=======================================
    //SEED de autenticación (jwt) 
    //=======================================
    SEED: (_c = process.env.SEED) !== null && _c !== void 0 ? _c : 'este-es-el-seed-desarrollo',
    //=======================================
    //Vencimiento de token
    //=======================================
    CADUCIDAD_TOKEN: (_d = process.env.CADUCIDAD_TOKEN) !== null && _d !== void 0 ? _d : '2h',
};
