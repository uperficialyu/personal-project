
const dev = process.env.NODE_ENV === 'development';
const isTesting = location.href.indexOf('http://zigui.kf315.net') >= 0;
let url = '';
let imgUrl = 'https://file.jgwcjm.com';
let sysId = '6ed855ba979f401d8aa07a76121b70eb';
let functionId = '408a425aa3664ab898a8e301abec6281';
let token = 'ab91016bcb37878e06c16e9e68f';
let areaFunctionId = '62507b92eebc4924a96d1b64dd047530';
let functionId2 = '408a425aa3664ab898a8e301abec6281';
let functionId3 = 'd641d82cc4f148668d0b90e69ac6f82f'; // 价格监管 三个数值
let functionId4 = '6b74335b25c84ee9969c00c7a858492c'; // 价格监管 实时销售价格
let functionId5 = '6b80ecfd8ab84f1884e8fb5231aefce9'; // 价格监管 近半年交易量统计
let functionId6 = '747a665f715848eb8df70eaa976f4be9'; // 长势监测日期
let functionId7 = '792e0a4d3ea942539d05f4d07a7be2c6'; // 重点农批市场批发价格排名
let token1 = 'c647ac73d7fa4952b321fc58d97a3b6a'; // 价格监管
let organizationId = 'a48ac3a91dc8461d801443b50302a829';

if(dev) {
  url = '/apiInterface/interface';
  imgUrl = 'https://filetest.jgwcjm.com';
  sysId = '6ed855ba979f401d8aa07a76121b70eb';
  functionId = '62507b92eebc4924a96d1b64dd047530';
  // token = 'cc473cb5213043019264dcf32dffd132'; // 测试
  token = '416df70cd39b47dca60d27ed08b96db8'; // 正式
  areaFunctionId = '62507b92eebc4924a96d1b64dd047530';
  functionId2 = '408a425aa3664ab898a8e301abec6281';
  functionId3 = 'd641d82cc4f148668d0b90e69ac6f82f'; // 价格监管 三个数值
  functionId4 = '6b74335b25c84ee9969c00c7a858492c'; // 价格监管 实时销售价格
  functionId5 = '6b80ecfd8ab84f1884e8fb5231aefce9'; // 价格监管 近半年交易量统计
  functionId6 = '747a665f715848eb8df70eaa976f4be9'; // 长势监测日期
  functionId7 = '792e0a4d3ea942539d05f4d07a7be2c6'; // 重点农批市场批发价格排名
  token1 = '885f816bc7a945ffa2bc85756cdf2dff'; // 价格监管
  organizationId = 'a48ac3a91dc8461d801443b50302a829';
} else if(isTesting) {
  url = '/apiInterface/interface';
  imgUrl = 'https://filetest.jgwcjm.com';
  sysId = '6ed855ba979f401d8aa07a76121b70eb';
  functionId = '62507b92eebc4924a96d1b64dd047530';
  token = 'cc473cb5213043019264dcf32dffd132';
  areaFunctionId = '62507b92eebc4924a96d1b64dd047530';
  functionId2 = '408a425aa3664ab898a8e301abec6281';
  functionId3 = 'd641d82cc4f148668d0b90e69ac6f82f'; // 价格监管 三个数值
  functionId4 = '6b74335b25c84ee9969c00c7a858492c'; // 价格监管 实时销售价格
  functionId5 = '6b80ecfd8ab84f1884e8fb5231aefce9'; // 价格监管 近半年交易量统计
  functionId6 = '747a665f715848eb8df70eaa976f4be9'; // 长势监测日期
  functionId7 = '792e0a4d3ea942539d05f4d07a7be2c6'; // 重点农批市场批发价格排名
  token1 = '885f816bc7a945ffa2bc85756cdf2dff'; // 价格监管
  organizationId = 'a48ac3a91dc8461d801443b50302a829';
} else {
  url = '/apiInterface/interface';
  imgUrl = 'https://filetest.jgwcjm.com';
  sysId = '6ed855ba979f401d8aa07a76121b70eb';
  functionId = '62507b92eebc4924a96d1b64dd047530';
  token = '416df70cd39b47dca60d27ed08b96db8';
  areaFunctionId = '62507b92eebc4924a96d1b64dd047530';
  functionId2 = '408a425aa3664ab898a8e301abec6281';
  functionId3 = 'd641d82cc4f148668d0b90e69ac6f82f'; // 价格监管 三个数值
  functionId4 = '6b74335b25c84ee9969c00c7a858492c'; // 价格监管 实时销售价格
  functionId5 = '6b80ecfd8ab84f1884e8fb5231aefce9'; // 价格监管 近半年交易量统计
  functionId6 = '747a665f715848eb8df70eaa976f4be9'; // 长势监测日期
  functionId7 = '792e0a4d3ea942539d05f4d07a7be2c6'; // 重点农批市场批发价格排名
  token1 = '885f816bc7a945ffa2bc85756cdf2dff'; // 价格监管
  organizationId = 'f89e7dc01ff2450a92aaa19ce3e195f4';
}

if(!navigator.onLine) {
  url = 'http://localhost:8082';
}

export default {
  url,
  imgUrl,
  sysId,
  functionId,
  token,
  areaFunctionId,
  functionId2,
  functionId3,
  functionId4,
  functionId5,
  functionId6,
  functionId7,
  token1,
  organizationId,
};
