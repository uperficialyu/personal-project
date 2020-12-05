const koa = require('koa');

const app = new koa();

function test() {
  console.log('hello world');
}

// 注册
app.use((ctx, next) =>{
  // 上下文
  console.log('hello world');
  next();
})

app.use(() => {
  console.log('dsdds')
})

app.listen(3000);