//-->> Created by pipu on 2017/6/5.
let http = require('http');
let fs = require('fs');
let bookJson = require('./books.json');
let server = http.createServer(function (req,res) {

	let url = req.url;
	if(url === '/') {
		url = '/index.html';
	}

	if(url === '/index.html') {
		res.setHeader('Content-type','text/html;charset=utf-8');
		fs.readFile('./index.html',function (err,data) {
			res.end(data);
		});
	} else if (url === '/books.json') {
		res.end(JSON.stringify(bookJson));
	}
}).listen('8080');
