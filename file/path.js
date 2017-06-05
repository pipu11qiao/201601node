//-->> Created by pipu on 2017/6/2.
var fs = require('fs');
// 处理路径
var path = require('path');
// 合并链接路径
console.log(path.join('./test/book','package.json'));
// seperator
console.log(path.sep);
console.log(__filename); //获取当前模块的绝对路径
console.log(__dirname); // 获取当前模块所在的绝对目录
// 获取一个路径里面文件的名
console.log(path.basename('age.txt','.txt'));
// 获取一个陆经理文件的扩展名
console.log(path.extname('age.txt'));
// 从一个相对路径解析出一个绝对路径
console.log(path.resolve('test/book','package.json'));
console.log(path.resolve('/'));
console.log(path.resolve(__filename,'../../','buffer/style.css'));
fs.readFile(path.resolve(__filename,'../../','buffer/style.css'), 'utf-8', function (err, data) {
	if(err) {
		throw new Error('file not find');
	}
	console.log(data);
})