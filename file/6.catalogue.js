//-->> Created by pipu on 2017/6/2.
// manipulate catalogue

var fs = require('fs');
process.env.TZ = 'Asia/Shanghai';
// create a directory
// fs.mkdir('test1/t1',function(err) {
// 	if(err) {
// 		console.log(err);
// 		console.log('directory create failed');
// 	} else {
// 		console.log('directory create success');
// 	}
// });
// 读取目录下的所有文件

// fs.readdir('test',function(err,data) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// })
// 创建文件夹，如果父文件夹不存爱的话，则需要自动创建

// 3. 获取一个文件或目录的详情
// fs.readdir('./test/book',function(err,files) {
// 	// 循环文件列表
// 	console.log(files);
// 	files.forEach(function (file) {
// 		// 获取文件的详情
// 		fs.stat('./test/book/' + file,function (err,state) {
// 			console.log(state.isDirectory()); // 是否是目录
// 			console.log(state.isFile()); // 是否是文件
// 			console.log(state.size);
// 		})
// 	});
// });
// 4.判断一个文件或文件夹是否存在
fs.exists('./test/book',function(exists) {
	console.log(exists);
});
// 4.获取文件的绝对路径
