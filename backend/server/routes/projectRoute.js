const {Router} = require('express');
const {listAllProjects, creatNewProject} = require('../controllers/projectController');

const route = Router();

route.post('',creatNewProject );
route.get('',listAllProjects );

module.exports = route;
