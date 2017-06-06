
//-->> Created by pipu on 2017/6/2.
/*
* 回调函数来实现
* */
var fs = require('fs');

// 同步
// var name = fs.readFileSync('./name.txt','utf-8');
// var age = fs.readFileSync('./age.txt','utf-8');
// console.log(name,age);
// 异步
// 回调函数嵌套实现多个异步操作完成之后的回调
// 缺点： 1. 需要的时间长 2. 代码可读性非常差
//
// fs.readFile('./name.txt','utf-8',function(err,name) {
// 	fs.readFile('./age.txt','utf-8',function (err,age) {
// 		console.log(name,age);
// 	});
// });

// 计数器
var person = {};
function show() {
	if(Object.keys(person).length === 2) {
		console.log(person);
	}
}
fs.readFile('./name.txt','utf-8',function(err,name) {
	person.name = name;
	show();
});
fs.readFile('./age.txt','utf-8',function (err,age) {
	person.age = age;
	show();
});

// promise
