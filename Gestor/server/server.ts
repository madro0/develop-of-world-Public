import express from 'express';
import cors from 'cors';
import env from './config/env';
import { ApolloServer } from 'apollo-server-express';
import { connectMongoDb } from './config/dbconnection';
import { types } from './graphql/types';
import { resolvers } from './graphql/resolvers'; 

const server = new ApolloServer({
    typeDefs: types,
    resolvers: resolvers
});

const app = express();

app.use(express.json());
// app.use(express.urlencoded({}));

app.use(cors());
// app.use(require('./'));

app.listen(env.PORT, async()=>{
    await connectMongoDb();
    await server.start();
    server.applyMiddleware({app})
    console.log(`server corriendo desde el puerto ${env.PORT}`);

});
