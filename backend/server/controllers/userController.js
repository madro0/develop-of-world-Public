const bcrypt = require ('bcrypt');
const userModel = require('../models/usersModel');

const listUsers = async (req, res)=>{
    
    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 10;
    limit = Number(limit);

    try {
        let listUserDb = await userModel
        .find({state: true},)
        .skip(from)
        .limit(limit)
        .exec();

        if (listUserDb.length === 0) {
            return res.status(400).json({
              ok: false,
              err: {
                message: "There is no active user with this id",
              },
            })
        }

        res.json({
            ok: true,
            users: listUserDb,
            count: listUserDb.length
        })

    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }
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
const  updateProject = async(req, res)=>{
    let id = req.params.id;
    let body = req.body;

    try {
        let userDb = await userModel.findByIdAndUpdate(id, body, {
            new:true
        });

        res.json({
            ok:true,
            user: userDb
        });

    } catch (err) {
        return res.status(500).json({
            ok: false,
            err,
        });
    }
}

module.exports = {
    createUser,
    listUsers,
    updateProject
}