const { Router } = require('express');
const user = require('./userRoute');
const project = require('./projectRoute');
const auth = require('./authRoute');

const router = Router();

router.use('/user', user);
router.use('/project', project);
router.use('/auth', auth);

module.exports = router;