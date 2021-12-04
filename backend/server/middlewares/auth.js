const jwt = require('jsonwebtoken');
const userModel = require('../models/usersModel');

const verifyToken=async(req, res, next)=>{
    const token = await req.get('Authorization');

    if(!token){
        return res.status(401).json({
            ok:false,
            message: 'no envio en token en la peticion'
        })
    }

    try {
        jwt.verify(token, process.env.SEED, (err, decode)=>{
            if(err){
                return res.status(401).json({
                    err:{
                        message: err.message || 'Autorization (token) invalid'
                    }
                })
            }
            req.user = decode.user;
        })
    } catch (err) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
    next();
}

module.exports = {
    verifyToken
}