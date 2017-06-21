const theDatabase = require('../config/db.js').theDb;
const goodsSchema = theDatabase.import('../schema/goods.js');

const getGoodsList = async (searchVal) => {
  return await goodsSchema.findAndCount(
    {
      where: {
        name: {
          $like: '%' + searchVal + '%'  // searchVal：要搜索的商品名称
        }
      }
    }
  );
}

// 根据商品 id 查找数据
const getGoodsDetails = async (id) => {
  return await goodsSchema.findById(id);
}

// 添加商品
const addGoods = async (name, description, img_url) => {
  await goodsSchema.create({
    name,
    description,
    img_url
  });

  return true;
}

// 根据商品 id 修改
const updateGoods = async (id, name, description, img_url) => {
  await goodsSchema.update(
    {
      name,
      description,
      img_url
    },
    {
      where: {
        id
      }
    }
  );

  return true;
}

// 根据商品 id 删除数据
const removeGoods = async (id) => {
  await goodsSchema.destroy({
    where: {
      id
    }
  });

  return true;
}

module.exports = {
  getGoodsList,
  getGoodsDetails,
  addGoods,
  updateGoods,
  removeGoods
}
