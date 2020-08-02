const {
	handleMD5,
	success,
	queryUserInfo,
	checkPhone,
	random,
	createID
} = require('../utils/tools');

const express = require('express'),
  route = express.Router();

  //=>校验验证码是否正确
route.get('/login', (req, res) => {
  res.send(success(true, {
    data: req.$USER_DATA
  }));
	// res.send(req.USER_DATA);
});
module.exports = route;