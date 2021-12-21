import jwt from 'jsonwebtoken';
import env from '../config/env';
import { User } from '../models/user';
const generateJWT = (user:User )=>{
    return new Promise ((resolve: any, rejact: any)=>{
        jwt.sign({user}, env.SEED, {expiresIn: env.CADUCIDAD_TOKEN}, (err:any, token: any)=>{
            if(err){
                console.log(err)
                rejact('no se puede generar un nuevo token', err);
            }
            resolve(token);
        })
    })
}
export  {
    generateJWT
}