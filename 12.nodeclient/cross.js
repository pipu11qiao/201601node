//-->> 跨域访问的服务器
let http = require('http');
let users = [];
let fs = require('fs');
http.createServer(function (req,res) {
	let str = '';
	req.on('data',function (data) {
		str += data;
	});
	req.on('end',function () {
		console.log(JSON.parse(str));
		users.push(JSON.parse(str));
		res.end(JSON.stringify(users));
	});

}).listen('9090');