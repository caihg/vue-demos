const goodsModel = require('../models/goods.js');

const getGoodsList = async function() {
  const data = this.request.body; // post 请求，参数在 request.body 里
  const currentPage = Number(data.currentPage);
  const pageSize = Number(data.pageSize);
  const searchVal = data.searchVal;
  const result = await goodsModel.getGoodsList(searchVal);

  let list = result.rows;

  // 根据分页输出数据
  let start = pageSize * (currentPage - 1);
  list = list.slice(start, start + pageSize);

  this.body = {
    success: true,
    list,
    total: result.count,
    msg: '获取商品列表成功！'
  }
}

const getGoodsDetails = async function() {
  const id = this.params.id;
  const list = await goodsModel.getGoodsDetails(id);

  this.body = {
    success: true,
    list: Array.isArray(list) ? list : [list],
    msg: '获取商品详情成功！'
  };
}

const manageGoods = async function() {
  const data = this.request.body;
  const id = data.id;
  const name = data.name;
  const description = data.description;
  const imgUrl = data.imgUrl;

  let success = false;
  let msg = '';

  if (id) {
    if (name) {
      await goodsModel.updateGoods(id, name, description, imgUrl);
      success = true;
      msg = '修改成功！';
    }
  } else if (name) {
    await goodsModel.addGoods(name, description, imgUrl);
    success = true;
    msg = '添加成功！';
  }

  this.body = {
    success,
    msg
  }
}

const removeGoods = async function() {
  const id = this.params.id;

  await goodsModel.removeGoods(id);

  this.body = {
    success: true,
    msg: '删除成功！'
  }
}

module.exports = {
  getGoodsList,
  getGoodsDetails,
  removeGoods,
  manageGoods
}
