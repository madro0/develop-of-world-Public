const { Router } = require('express');
const  { login, revalidateToken } = require('../controllers/loginController');
const { verifyToken } = require('../middlewares/auth');

const router = Router();

router.post('', login);
router.get('/renewToken', verifyToken, revalidateToken);

module.exports = router;
