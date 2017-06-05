var fs = require('fs');

//已同步的方法向硬盘的写文件
// fs.writeFileSync('./write.txt','偷影子的猫');

// 异步
// fs.writeFile('./write.txt','node.js 异步写入','utf-8',function (err) {
// 	if(err) {
// 		console.log(err);
// 	}else {
// 		console.log('写入成功');
// 	}
// });

// flag 是表示要对此文件做何种类型的操作
// w 清空并写入
// a 在原有基础上追加
// fs.readFile('./age.txt','utf-8',function(err,data) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		fs.writeFile('./write.txt',data,{flag:'a'},function (err) {
// 			if(err) {
// 				console.log(err);
// 			} else {
// 				console.log('写入成功')
// 			}
// 		})
// 	}
// });
fs.appendFile('./write.txt','\rnode',function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('写入成功');
	}
});