//-->> Created by pipu on 2017/6/2.

let http = require('http');
let fs = require('fs');
let mime = require('mime');
let server = http.createServer(function (req, res) {
	let url = req.url;
	console.log('.' + url);
	res.setHeader('Content-Type', mime.lookup(url) + ';charset=utf-8');
	fs.readFile('.' + url, 'utf-8', function (err, data) {
		res.write(data);
		res.end();
	})

});
// 在8080端口上进行监听，主机名是localhost
server.listen(8080, 'localhost');