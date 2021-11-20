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

