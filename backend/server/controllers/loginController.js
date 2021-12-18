const bcrypt = require('bcrypt');
const userModel = require('../models/usersModel');
const jwt = require ('jsonwebtoken');
const {generateJWT } = require('../helpers/jwt');

const login = async (req, res)=>{
    let body = req.body;

    // console.log(req.body)
    try {
        let userDb = await userModel.findOne({email: body.email});
        
        if(!userDb){
            return res.status(400).json({
                ok: false,
                err:{
                    message: '(email) o contraseña erronea'
                }
            });
        }

        if(!bcrypt.compareSync(body.password, userDb.password)){
            return res.status(400)({
                ok: false,
                err:{
                    message: 'email o (contraseña) erroneo'
                }
            });
        }

        let token = await generateJWT({user:userDb});

        res.json({
            ok: true,
            user: userDb,
            token
        })



    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }
}

const revalidateToken = async (req, res = response)=>{
    const {user} = req;

    const token = await generateJWT({user});
    
    res.json({
        ok:true,
        user: user,
        token
    })
}

module.exports = {
    login,
    revalidateToken
}