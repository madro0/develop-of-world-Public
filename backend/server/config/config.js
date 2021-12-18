// =============================================
//puerto
// =============================================
process.env.PORT = process.env.PORT || 4000;

// =============================================
// Entorno
// =============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================================
// Conexion mongo db
// =============================================
let urlDb;
if(process.env.NODE_ENV === 'dev'){
    urlDb = 'mongodb+srv://madro:K8mwWFepr8Gmc73s@cluster0.yugug.mongodb.net/developersOfWorld';
} else {
    urlDb = process.env.MONGO_URL;
}
process.env.URLDB = urlDb;

//=======================================
//SEED de autenticación (jwt) 
//=======================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//=======================================
//Vencimiento de token
//=======================================
process.CADUCIDAD_TOKEN = process.CADUCIDAD_TOKEN || '2h';