"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../helpers/enums/enums");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        // validate:{
        //     validator: (email : string) => {
        //         return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        //       },
        //     message: 'El correo electronico es erroneo, debe ser de tipo example@algo.com'
        // },
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: enums_1.Enum_Role,
    },
    state: {
        type: String,
        enum: enums_1.Enum_StateUser,
        default: enums_1.Enum_StateUser.PENDIENTE,
    },
});
const UserModel = (0, mongoose_1.model)('user', userSchema);
exports.UserModel = UserModel;
