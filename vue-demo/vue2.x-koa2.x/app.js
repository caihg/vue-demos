const path = require('path'),
  koa = new (require('koa'))(),
  koaRouter = require('koa-router')(),
  bodyparser = require('koa-bodyparser'), // 解析 body 数据，存放于 ctx.request.body
  json = require('koa-json'), // 格式化服务端返回的 JSON 数据
  logger = require('koa-logger'), // 日志中间件
  koaStatic = require('koa-static'),
  historyApiFallback = require('koa-history-api-fallback'),
  image = require('./server/routes/image.js'),
  user = require('./server/routes/user.js'),
  goods = require('./server/routes/goods.js');

koa.use(bodyparser());
koa.use(json());
koa.use(logger());
koa.use(historyApiFallback());

koa.use(async (ctx, next) => {
  let start = new Date();
  await next();
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

koa.on('error', function(err, ctx) {
  console.log('server error: ', err);
});

// 静态文件服务 koa-static 规则位于 koa-router 的系列规则之前
koa.use(koaStatic(path.resolve('dist'))); // 将 webpack 打包好的项目目录作为 Koa 静态文件服务的目录

// 挂载到 koa-router 上，同时会让所有的 user 的请求路径前面加上 '/auth' 。
koaRouter.use('/auth', user.routes());

koaRouter.use(goods.routes());

koaRouter.use(image.routes());

koa.use(koaRouter.routes()); // 将路由规则挂载到Koa上。

koa.listen(9090, () => {
  console.log('Koa is listening on port 9090');
});

module.exports = koa;
