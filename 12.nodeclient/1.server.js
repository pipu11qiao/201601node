//-->> Created by pipu on 2017/6/7.
let http = require('http');
let users = [];
http.createServer(function (req,res) {
	// console.log(req.method); // 方法
	// console.log(req.headers); // 请求头
	// console.log(req.httpVersion); // http版本号
	// console.log(req.url); // 请求的url
	let str = '';
	req.on('data',function (data) {
		str += data;
	});
	req.on('end',function () {
		console.log(str);
		users.push(JSON.parse(str));
		res.setHeader('name','zfpx');
		res.setHeader('age','6');
		res.end(JSON.stringify(users));
	});

}).listen('8080');