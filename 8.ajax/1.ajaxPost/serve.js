//-->> Created by pipu on 2017/6/6.
// 引入核心模块
let http = require('http');
let url = require('url');
let fs = require('fs');
let querystring = require('querystring');

// 创建http服务器
http.createServer(function (req,res) {
	let user = [];
	let urlObj = url.parse(req.url,true);
	// 去除路径名
	let pathname = urlObj.pathname;
	if(pathname === '/') {
		fs.readFile('./form.html',function (err,data) {
			res.setHeader('Content-type','text/html;charset=utf-8');
			res.end(data);
		})
	} else if(pathname === '/reg') {
		let result = '';
		req.on('data',function (data) {
			result += data;
		});
		req.on('end',function () {
			user.push(querystring.parse(result));
			console.log(user);
			res.end('Ok');
		});
	}
	else if(pathname === '/reg2') {
		res.end('Ok');
		// let result = '';
		// req.on('data',function (data) {
		// 	result += data;
		// });
		// req.on('end',function () {
		// 	user.push(querystring.parse(result));
		// 	console.log(user);
		// 	res.end('Ok');
		// });
	}

}).listen('8080');