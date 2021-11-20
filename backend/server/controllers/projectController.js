const projectModel = require('../models/projectsModel');

const listAllProjects = async (req, res)=>{
    projectModel.find({state:true})
        .exec((err, projectsDb)=>{
            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            projectModel.countDocuments({state:true},(err, count)=>{
                res.json({
                    ok: true,
                    projectsDb,
                    count
                });
            })
    })
}

const creatNewProject = async(req, res)=>{
    let body = req.body;

    let project = new projectModel({
        name: body.name,
        phase: body.phase,
        state: body.state
    })

    project.save((err, projectDb)=>{

        if(err){
            return res.estatus(400).json({
                ok:false,
                err,
            });
        }

        res.json({
            ok: true,
            project: projectDb
        });
    });
}

module.exports = {
    listAllProjects,
    creatNewProject
}