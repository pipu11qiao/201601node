//-->> Created by pipu on 2017/6/1.
var fs = require('fs');

/*
* 1. 每一个同步的方法和异步方法都是成对出现的
* 2， 同步方法回族塞住县城的执行，在数据没有哦返回之前不能执行后续代码
* 3. 他不需要传递回调函数，通过函数返回值接受结果
* 4.
* */
try {
	var data = fs.readFileSync('./index.txt1','utf-8');
}catch (err) {
	console.log(err);
}

console.log(data);
console.log('b');
console.log('c');