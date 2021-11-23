const jwt= require('jsonwebtoken');

const generateJWT = (user)=>{
    return new Promise((resolve, rejact)=>{
        jwt.sign(user, process.env.SEED, {expiresIn: process.CADUCIDAD_TOKEN}, (err, token)=>{
            if(err){
                console.log(err)
                rejact('No se puede generar un nuevo token');
            }
            resolve(token);
        })
    })
}

module.exports = {
    generateJWT
}