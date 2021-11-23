const {Router} = require('express');
const {listAllProjects, creatNewProject, updateProject, getProject, deleteProject} = require('../controllers/projectController');

const route = Router();

route.post('',creatNewProject );
route.get('',listAllProjects );
route.get('/:id',getProject);
route.put('/:id',updateProject);
route.delete('/:id',deleteProject);

module.exports = route;
