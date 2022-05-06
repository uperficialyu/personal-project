import axios from 'axios';
import qs from 'qs';
import urlConfig from '../config/environment';
import { sessionGet } from 'lib/storage';
import { pushUrl } from "lib/url";

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => qs.stringify(data);

axios.defaults.timeout = 75000;
axios.defaults.withCredentials = true;

const Ajax = (type, url, param = {}) => {
  let baseurl = '';
  if(url.includes('ntt_api')) {
    baseurl = url;
  } else {
    baseurl = urlConfig.url + url;
  }
  // if(url.includes('upload') || url.includes('read-code/list')) {
  //   baseurl = 'http://localhost:8082' + url;
  // } else {
  //   baseurl = urlConfig.url + url;
  // }
  // baseurl = urlConfig.url + url;
  let headers = {
    'Content-Type': 'application/json;charset=utf-8',
    // 'super-token': sessionGet('super-token') || param.token || urlConfig.token, //sessionGet('super-token') || ''
    'super-token': sessionGet('super-token'), //sessionGet('super-token') || ''
    // 'super-token': param.token || urlConfig.token, //sessionGet('super-token') || ''
    'functionId': param.functionId || urlConfig.functionId2,
    // 'super-token': 'cc473cb5213043019264dcf32dffd132', //sessionGet('super-token') || ''
    // 'functionId': 'd641d82cc4f148668d0b90e69ac6f82f',

  };
  const params = JSON.stringify(param);
  const requestUrl = type;
  return axios({
    url: baseurl,
    data: params,
    params: param,
    method: requestUrl,
    headers,
    transformRequest: [function (data) {
      return data;
    }],
  }).then(function (res) {
    let data = res.data;
    if(data.msg === '您暂未登入') {
      pushUrl({
        pathname: '/login'
      })
    }
    return data;
  }).catch(function (error) {
    return error;
  });
};

export default  Ajax;
