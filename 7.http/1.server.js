//-->> Created by pipu on 2017/6/2.
// 导入核心模块 http
var http = require('http');
/*
* 1. 能在特定的ip在特定的端口上监听客户端的请求
* 2. 当请求到来的时候能执行监听函数，并返回相应
* 创建一个服务器，指定监听函数，每当有客户端请求到来的时候执行的函数
* req 代表客户端的额请求，可以从中获取请求过来的信息
* res 代表服务器的相应，可以通过它相关客户单发相应
* */
// var server = http.createServer(function (req,res) {
// 	var now = new Date();
// 	// 设置响应类型
// 	res.setHeader('Content-Type','text/html;charset=utf-8');
// 	res.end(now.toString()); // 说完了，挂掉电话
// });

var server = http.createServer(function (req,res) {
	console.log(req.method); // 请求的方法
	console.log(req.url); // 请求的url
	console.log(req.headers); // 请求头
	res.statusCode = 404; // 设置响应吗
	res.setHeader('Content-Type','text/html;charset=utf-8');

	var now = new Date();
	res.write('hello');
	// 设置响应类型
	setTimeout(function() {
		res.write('world');
		res.end(now.toString());
	},2000)
	 // 说完了，挂掉电话
});
// 在8080端口上进行监听，主机名是localhost
server.listen(8080,'localhost');
