import { SchemaTypes, Schema, model } from "mongoose";
import {Enum_Role, Enum_StateUser} from '../enums/enums';

interface User {
    email: string;
    name: string,
    lastName: string,
    role: Enum_Role,
    state: Enum_StateUser 
}

const userSchema = new Schema<User>({
    email:{
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
    name:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        enum:Enum_Role,
    },
    state:{
        type: String,
        enum: Enum_StateUser,
        default: Enum_StateUser.PENDIENTE,
    },
});

const UserModel = model ('user', userSchema);

export{ UserModel }