//-->> Created by pipu on 2017/6/7.
let fs = require('fs');
// 创建可读流
let rs = fs.createReadStream('./index.txt',{
	highWaterMark: 2
});
// 设置编码
rs.setEncoding('utf8');

// 监听data事件，读取数据是会触发data事件
rs.on('data',function (data) {
	// console.log('得到数据：',data);
	console.log(data);
	rs.pause();
	setTimeout(function () {
		rs.resume();
	},1000)
});
// 读取完毕触发end事件
rs.on('end',function () {
	console.log('end');
});

/*
* 1. 同步方法 try catch
* 2. 异步 判断回调函数里的error对象是否有值
* 3. 在琉璃判断错误，监听，它的error事件
* */
// 读取过程出错会触发error事件
rs.on('error',function (err) {
	console.error(err);
});