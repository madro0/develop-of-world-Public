import {UserModel} from '../models/user';
import bcrypt from 'bcrypt';
import {generateJWT} from '../helpers/jwt';
import { MyContext } from '../context/MyContext';

const authResolvers = {
    Mutation : {
        login : async (parent:any, arg: any, contaxt: MyContext)=>{ 
            const userDb : any = await UserModel.findOne({email: arg.email});
            
            if(!userDb){
                throw new Error('(email) o contraseña erronea')
            }
            if(!bcrypt.compareSync(arg.password, userDb.password)){
                throw new Error ('email o (contraseña) erronea')
            }
            let token = await generateJWT(userDb);
            
            contaxt.res.cookie('Authorization',token, {httpOnly: true});

            return {
                ok: true,
                user: userDb,
                token
            };
        } 
    }
}

export {authResolvers}