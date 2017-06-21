const userController = require('../controllers/user.js');
const router = require('koa-router')();

router.post('/user', userController.postUserAuth);
router.get('/user/:id', userController.getUserInfo); // 定义 url 的参数 id
router.post('/user/list', userController.getUserList);

module.exports = router;
