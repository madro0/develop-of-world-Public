const bcrypt = require ('bcrypt');
const userModel = require('../models/usersModel');

const listUsers = async (req, res)=>{
    
    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 10;
    limit = Number(limit);

    userModel.find({state: true}, 'name, email, role, state')
        .skip(from)
        .limit(limit)
        .exec((err, usersDB)=>{
            if(err){
                return res.state(400).json({
                    ok: false,
                    err
                });
            }

            userModel.countDocuments({state: true}, (err, count)=>{
                res.json({
                    ok: true,
                    usersDB,
                    count
                });
            })
    })
}

const createUser = async (req, res)=>{
    let body = req.body;

    let user = new userModel({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    user.save((err, userDb)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDb
        });
    });
}

module.exports = {
    createUser,
    listUsers
}