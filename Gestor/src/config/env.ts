export default{
    PORT :  process.env.PORT ?? 4000,
  
    //=======================================
    //URI Database!
    //=======================================
    URLDB : process.env.URLDB ?? 'mongodb+srv://madro:K8mwWFepr8Gmc73s@cluster0.yugug.mongodb.net/Gestor',
    //'mongodb://localhost:27017/Lt';
  
    //=======================================
    //SEED de autenticación (jwt) 
    //=======================================
    SEED : process.env.SEED ?? 'este-es-el-seed-desarrollo',
  
    //=======================================
    //Vencimiento de token
    //=======================================
    CADUCIDAD_TOKEN : process.env.CADUCIDAD_TOKEN ?? '2h',
  
}

