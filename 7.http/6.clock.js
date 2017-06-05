//-->> Created by pipu on 2017/6/5.
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
var server = http.createServer(function(req,res) {
	var urlObj = url.parse(req.url,true);
	console.log(urlObj);
	res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
	// pathname 指的是路径名 问号和端口号中间的那一部分
	if(urlObj.pathname === '/apple') {
		// querry 查询字符串，true，则转成对象
		res.end(urlObj.query.num + '个苹果');
	}

}).listen('8080');
