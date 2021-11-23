const { Router } = require('express');
const { createUser, listUsers, updateProject} = require('../controllers/userController');

const route = Router();

route.post ('', createUser);
route.get('',listUsers);
route.put('/:id',updateProject);

module.exports = route;