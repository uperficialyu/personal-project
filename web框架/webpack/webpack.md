## commonJS
打开index.htm，运行，控制台报

	Uncaught ReferenceError: require is not definedat index.js:1

使用node ./index.js，成功运行

commonjs的语法只支持node环境，不支持浏览器环境。

## esmodule
打开index.html，运行，成功运行

浏览器环境支持esmodule的方式

## webpack 打包工具  gulp  grunt

- 代码转化  less/sass/stylus 转成 css；ts/js  es6789 -》es3
- 代码压缩  压缩 html js  css; 小图片 转成 base64
- 代码分割 抽离共用代码
- 模块合并  （模块化开发）
- 自动刷新（热更新） 代码改变的时候  页面自动刷新

## 模块开发
- 单例模式 高级单例模式  工厂模式  原型模式（swiper）
- esModule  每一个JS文件都可以是一个单独的模块  import(导入) export(导出) 浏览器支持的模块化
- commonJS 规范(node) 每一个JS文件都可以是一个单独的模块 require(导入)  module.exports(导出) node支持

webpack 是基于 node运行的；所有webpack的配置文件都是要写成 commonJS 规范的；

使用第一步   安装webpack

	npm i webpack webpack-cli  --save-dev
	npm i  webpack webpack-cli  -D    
	yarn add   webpack webpack-cli  -D   
	
	npm i jquery --save
	npm i jquery -S 
	npm i xxx -g  全局安装 也就是说 在本机任何路径下 都可以调用到这个包

## 0配置用法   

直接执行 npx  webpack // 默认把src下的index作为主入口文件

若不想走0配置  我们可以自己建立一个 webpack.config.js  文件作为配置文件
