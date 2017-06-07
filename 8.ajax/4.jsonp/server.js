//-->> Created by pipu on 2017/6/7.
let http = require('http');
let user = require('./user.json'); // json数据
let url = require('url');
let fs = require('fs');
let querystring = require('querystring');

http.createServer(function (req,res) {
	let curUrl = url.parse(req.url,true);
	if(curUrl.pathname === '/') {
		curUrl.pathname = '/index.html';
	}
	if(curUrl.pathname === '/index.html') {
		fs.readFile('./index.html',function (err,data) {
			res.setHeader('Content-Type','text/html;charset=utf-8');
			res.end(data);
		})
	} else if (curUrl.pathname === '/index.js' ) {
		let funName = curUrl.query.callback;
		res.end(funName + '(' + JSON.stringify(user) + ')');
		console.log(funName);
	}
}).listen('8080');