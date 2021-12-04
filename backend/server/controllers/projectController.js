const projectModel = require('../models/projectsModel');
const _ = require('underscore');

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

    await project.save((err, projectDb)=>{

        if(err){
            return res.status(400).json({
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

const getProject = async(req, res)=>{
    let id = req.params.id;

    try {
        let project = await projectModel.find()
            .where("_id")
            .equals(id)
            .where("state")
            .equals(true)
            .exec();

        if(project.length === 0 ){
            return res.status(400).json({
                ok: false,
                err: {
                    message: `no existe ningun projecto activo con este id ${id}` 
                }
            });
        }    
    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }
}
const updateProject = async(req, res)=>{
    const id = req.params.id;

    let body = _.pick(req.body, ["name", "phase"]);

    try {
        let projectDb = await projectModel.findByIdAndUpdate(id, body,{
            new: true,
            runValidators: true
        });

        res.json({
            ok: true,
            project: projectDb
        });

    } catch (err) {
        return res.status(400).json({
            ok: false,
            err,
        });
    }
}
const deleteProject = async (req, res)=>{
    const id = req.params.id;
    let body = {state: false};
    
    try {
        let projectDb = await projectModel.findByIdAndUpdate(id, body,{
            new:true,
            runValidators: true,
        });
        res.json({
            ok: true,
            project: projectDb
        })
    } catch (err) {
        return res.status(500).json({
            ok: false,
            err,
        });
    }
}

module.exports = {
    listAllProjects,
    creatNewProject,
    getProject,
    updateProject,
    deleteProject
}