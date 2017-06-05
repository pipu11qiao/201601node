//-->> Created by pipu on 2017/6/2.

var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
	var url = req.url;
	// 指定文件路径设置编码，得到data就是字符串类型的
	if (/\.css/g.test(url)) {
		res.setHeader('Content-Type', 'text/css;charset=utf-8');

		fs.readFile('./style.css', 'utf-8', function (err, data) {
			res.write(data);
			res.end();
		})
	}else if(/\.js/g.test(url)) {
		res.setHeader('Content-Type', 'text/javascript;charset=utf-8');

		fs.readFile('./index.js', 'utf-8', function (err, data) {
			res.write(data);
			res.end();
		})
	} else {
		res.setHeader('Content-Type', 'text/html;charset=utf-8');
		fs.readFile('./index.html', 'utf-8', function (err, data) {
			res.write(data);
			res.end();
		})
	}
});
// 在8080端口上进行监听，主机名是localhost
server.listen(8080, 'localhost');