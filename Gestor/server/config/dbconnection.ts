import { connect } from 'mongoose';
import env from './env'

const connectMongoDb = async()=>{
    return await connect('mongodb+srv://madro:K8mwWFepr8Gmc73s@cluster0.yugug.mongodb.net/Gestor')
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