import {UserModel} from '../models/user';
import bcrypt from 'bcrypt';
import {generateJWT} from '../helpers/jwt';

const authResolvers = {
    Mutation : {
        login : async (parent:any, arg: any)=>{ 
            const userDb : any = await UserModel.findOne({email: arg.email});

            if(!userDb){
                throw new Error('(email) o contraseña erronea')
            }
            if(!bcrypt.compareSync(arg.password, userDb.password)){
                throw new Error ('email o (contraseña) erronea')
            }
            let token = await generateJWT(userDb);
            
            return {
                ok: true,
                user: userDb,
                token
            };
        } 
    }
}

export {authResolvers}