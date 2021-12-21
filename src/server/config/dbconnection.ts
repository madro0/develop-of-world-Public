import { connect } from 'mongoose';
import env from './env';

const connectMongoDb = async()=>{

    return await connect(env.URLDB)
    .then(()=>{
        console.log('Mongo db connection');
    })
    .catch((e)=>{
        console.log('Error al connectar mongo DB', e);
    })
}

export {
    connectMongoDb
}