//-->> Created by pipu on 2017/6/5.
//-->> Created by pipu on 2017/6/5.
var http = require('http');
var fs = require('fs');
// var path = require('path');
// var mime = require('mime');
var url = require('url');
var server = http.createServer(function(req,res) {
	var urlObj = url.parse(req.url,true);
	console.log(urlObj);
	// pathname 指的是路径名 问号和端口号中间的那一部分
	if(urlObj.pathname === '/') {
		res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
		// querry 查询字符串，true，则转成对象
		fs.readFile('./clock.html',function(err,data){
			res.end(data);
		})
	} else if(urlObj.pathname === '/clock') {
		res.statusCode = 404;
		// res.end(new Date().toLocaleString());
		res.end();
	}

}).listen('8080');
