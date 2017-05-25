const imgController = require('../controllers/image.js');
const router = require('koa-router')();

router.post('/uploads/img', imgController.uploadImg)

module.exports = router;
