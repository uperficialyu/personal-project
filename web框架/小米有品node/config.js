module.exports = {
	PORT: 12345,
	CROS: {
		ALLOW_ORIGIN: 'http://127.0.0.1:3000',
		ALLOW_METHODS: 'PUT,POST,GET,DELETE,OPTIONS,HEAD',
		HEADERS: 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With',
		CREDENTIALS: true
	},
	SESSION: {
		secret: 'ZFPX', // 秘钥
		saveUninitialized: false, // 是否初始化保存
		resave: false, // 是否保存
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 30
		}
	}
};