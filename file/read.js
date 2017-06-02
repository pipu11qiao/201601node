//-->> Created by pipu on 2017/6/1.
var fs = require('fs');
function afterRead(err,data) {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
}
/*
* 1. 这是一部方法，需要吧回调函数传入
* 2. 回调函数会在同步方法执行完后在执行异步方法
* 3. 异步方法不能阻塞主线程，不会影响后续代码的执行
* */
fs.readFile('./index.txt','utf-8',afterRead);