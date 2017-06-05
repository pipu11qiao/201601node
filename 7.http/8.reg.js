//-->> Created by pipu on 2017/6/5.
//-->> Created by pipu on 2017/6/5.
let http = require('http');
let fs = require('fs');
// var path = require('path');
// var mime = require('mime');
let url = require('url');
let user = [];
let server = http.createServer(function(req,res) {
	let urlObj = url.parse(req.url,true);
	console.log(urlObj);
	// pathname 指的是路径名 问号和端口号中间的那一部分
	if(urlObj.pathname === '/') {
		res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
		// querry 查询字符串，true，则转成对象
		fs.readFile('./8.reg.html',function(err,data){
			res.end(data);
		})
	} else if(urlObj.pathname === '/reg') {
		// 每当服务器收到客户端发过来的一段数据的时候就会触发data事件
		var reqStr = ''
		req.on('data',function( data) {
			reqStr += data.toString();
		});
		req.on('end',function () {
			let userObj = JSON.parse(reqStr);
			user.push(userObj);
			res.end((function(){
				let str = '';
				user.forEach(function (item) {
					str += `user: ${item.username}; password: ${item.password}<br/>`;
				});
				return str;
			})());
		});

	}

}).listen('8080');
