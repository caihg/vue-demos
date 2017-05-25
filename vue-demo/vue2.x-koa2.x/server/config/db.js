const Sequelize = require('sequelize');

// 使用 url 形式连接数据库
const theDb = new Sequelize('mysql://root:123456@localhost/my_test_db', {
  define: {
    timestamps: false // 取消Sequelzie自动给数据表添加的 createdAt 和 updatedAt 两个时间戳字段
  }
})

module.exports = {
  theDb
}
