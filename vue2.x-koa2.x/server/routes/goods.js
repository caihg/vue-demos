const goodsController = require('../controllers/goods.js');
const router = require('koa-router')();

router.post('/goods/list', goodsController.getGoodsList);
router.get('/goods/:id', goodsController.getGoodsDetails);
router.delete('/goods/:id/', goodsController.removeGoods);
router.post('/goods/management', goodsController.manageGoods);

module.exports = router;
