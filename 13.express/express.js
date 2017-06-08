//-->> Created by pipu on 2017/6/7.

// 加载 express
let express = require('express');
// 获取配置对象
let app = express();
// 配置路由
// 当用户访问/的时候，会执行后面的回调函数
app.get('/hello',function (req,res) {
	// send 可以自动判断参数类型，自动转换相应信息
	// 并且自动设置Content-Type
	res.send('get hello');
});
app.post('/hello',function (req,res) {
	// send 可以自动判断参数类型，自动转换相应信息
	// 并且自动设置Content-Type
	res.send('post hello');
});
app.all('/hello',function (req,res) {
	// send 可以自动判断参数类型，自动转换相应信息
	// 并且自动设置Content-Type
	res.send('all hello');
});

// 启动服务器
app.listen(3000,function () {
	console.log('server is listening port 3000')
});