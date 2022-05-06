const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = 'development';
const merge = require('webpack-merge');
const webpackConfigBase = require('./webpack.base.config');

const PORT = 8089;

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}

const webpackConfigDev = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('../app'),
    historyApiFallback: true,
    hot: true,
    host: 'localhost',
    // host: '0.0.0.0',
    // host: '192.168.90.58',
    port: PORT,
    proxy: {
      // '/apiInterface/interface': {
      //   target: 'http://system.nine.kf315.net/',
      //   secure: false,
      //   changeOrigin: true,
      // },
      '/apiInterface/interface': {
        // target: 'https://freedom.jgwcjm.com/',
        // target: 'http://hbzgfy.nongtt.com/', // 源地址
        // target: 'https://freedom.jgwcjm.com/',
        // target: 'https://zgqc.hbzg.gov.cn/', // 正式源地址
        // target: 'http://192.168.2.222:18000/', // 测试源地址
        target: 'http://cjmyq.yq.kf315.net/', // 测试源地址
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          // '/apiInterface/interface': ''
        }
      },
      '/ntt_api': {
        target: 'http://hbzgfy.nongtt.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/apiInterface/interface': ''
        }
      },
      // '/hydra-production': {
      //   target: 'http://system.two.kf315.net/apiInterface/interface/',
      //   secure: false,
      //   changeOrigin: true,
      // },
      // '/hydra-datascreen-generator': {
      //   target: 'http://localhost:8082',
      //   secure: false,
      //   changeOrigin: true,
      // },
      // '/hydra-datascreen-generator': {
      //   target: 'http://localhost:8082',
      //   secure: false,
      //   changeOrigin: true,
      // },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMENT: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
