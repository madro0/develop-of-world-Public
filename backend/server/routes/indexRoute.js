const { Router } = require('express');
const user = require('./userRoute');
const project = require('./projectRoute');

const router = Router();

router.use('/user', user);
router.use('/project', project);

module.exports = router;