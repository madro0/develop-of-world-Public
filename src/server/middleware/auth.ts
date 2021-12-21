import { MyContext } from '../context/MyContext';
import jwt from 'jsonwebtoken'; 
import env from '../config/env';

const verifyToken = (context: MyContext)=>{

    const token = context.req.headers['authorization'];

    if(!token){
        throw new Error ('not authenticated');
    }

    try {
        const payload = jwt.verify(token, env.SEED );
        context.payload = payload as any;
    } catch (error) {
        console.log(error);
        throw new Error ('not authenticated')
    }
    
    return context.next();
}
export {verifyToken}