//-->> 代理访问 静态资源服务器
let http = require('http');
let users = [];
let fs = require('fs');
http.createServer(function (req,res) {
	if(req.url === '/') {
		fs.createReadStream('./index.html').pipe(res);
	}else if( req.url ==='/reg') {
		console.log('no access request');

		let str = '';
		req.on('data',function (data) {
			str += data;
		});
		req.on('end',function () {
			// 发起代理请求
			let options = {
				localhost: 'localhost',
				port: '9090',
				path:'/reg',
				method: 'post',
				headers: {}
			};
			let request = http.request(options,function (response) {
					let str = '';
					response.on('data',function (data) {
						str += data;
					});
					response.on('end',function () {
						res.end(str);
					})

			});
			request.end(str);
		});
	}
}).listen('8080');