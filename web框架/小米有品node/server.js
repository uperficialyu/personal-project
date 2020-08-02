const CONFIG = require('./config'),
  session = require('express-session'),
  bodyParser = require('body-parser');

/*-QUERY DATA-*/
const { readFile } = require('./utils/promiseFS');

const express = require('express'),
  app = express();


// 创建web服务器
app.listen(CONFIG.PORT, () => {
  console.log(`SERVICE IS OK ===> ${CONFIG.PORT}`);
});

/*-MIDDLE WARE-*/
// 处理CORS跨域
app.use((req, res, next) => {
  const {
    ALLOW_ORIGIN,
    CREDENTIALS,
    HEADERS,
    ALLOW_METHODS
  } = CONFIG.CROS;
  res.header("Access-Control-Allow-Origin", ALLOW_ORIGIN);
  res.header("Access-Control-Allow-Credentials", CREDENTIALS);
  res.header("Access-Control-Allow-Headers", HEADERS);
  res.header("Access-Control-Allow-Methods", ALLOW_METHODS);
  req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});

// 处理客户端POST请求主体内容：req.body
app.use(bodyParser.urlencoded({
  extended: false
}));
// 处理SESSION：req.session.xxx=xxx
app.use(session(CONFIG.SESSION));

// api接口处理
app.use(async (req, res, next) => {
	// 用户表
  req.$USER_DATA = JSON.parse(await readFile('./mock/user.json'));
	next();
});

/*-ROUTE-*/
app.use('/user', require('./routes/user'));
app.use((req, res) => {
	res.status(404);
	res.send('NOT FOUND!');
});
