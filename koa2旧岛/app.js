const koa = require('koa');

const iniManger = require('./core/init');

const app = new koa();

iniManger.initCore(app);

// const router = new Router();

// router.get('/classic/latest', (ctx, next) =>{
//   ctx.body = {
//     key:'hello world'
//   }
// })

// 注册
// app.use(router.routes());

// 注册
// app.use(async(ctx, next) => {
//   console.log(ctx.path)
//   console.log(ctx.method)
//   if(ctx.path === '/classic/latest' && ctx.method === 'GET') {
//     ctx.body = 'hello world'
//   }
// })

app.listen(3000);