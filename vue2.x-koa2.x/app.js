const path = require('path'),
  koa = new (require('koa'))(),
  router = require('koa-router')(),
  bodyparser = require('koa-bodyparser'), // 对于 POST 请求，将 koa2 上下文的 formData 数据解析到 ctx.request.body
  logger = require('koa-logger'), // 日志中间件
  koaStatic = require('koa-static'),
  historyApiFallback = require('koa-history-api-fallback'),
  userRoute = require('./server/routes/user.js'),
  goodsRoute = require('./server/routes/goods.js'),
  imageRoute = require('./server/routes/image.js');

koa.use(bodyparser());
koa.use(logger());
koa.use(historyApiFallback());

/*koa.use(async (ctx, next) => { // ctx 封装了node 中的 request 和 response
  let start = new Date();
  await next();
  let ms = new Date - start;
  console.log('%s %s - %s 毫秒', ctx.method, ctx.url, ms);
  console.log('ctx.body 是 ctx.response.body 的简写', '=>', ctx.body === ctx.response.body);
  console.log('ctx.request.body 获取 post 请求中的参数', '=>', ctx.request.body);
});*/

koa.on('error', function(err, ctx) {
  console.log('server error: ', err);
});

// 静态文件服务 koa-static 规则位于 koa-router 的系列规则之前
koa.use(koaStatic(path.resolve('dist'))); // 将 webpack 打包好的项目目录作为 Koa 静态文件服务的目录

// 挂载到 koa-router 上，同时会让所有的 user 的请求路径前面加上 '/auth' 前缀。
router.use('/auth', userRoute.routes());

router.use(goodsRoute.routes());

router.use(imageRoute.routes());

koa.use(router.routes()); // 将路由规则挂载到Koa上。

koa.listen(9090, () => {
  console.log('Koa is listening on port 9090');
});

module.exports = koa;
