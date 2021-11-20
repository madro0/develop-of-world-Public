const { Router } = require('express');
const { createUser, listUsers} = require('../controllers/userController');

const route = Router();

route.post ('', createUser);
route.get('',listUsers);

module.exports = route;