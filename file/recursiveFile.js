//-->> Created by pipu on 2017/6/2.
//-->> Created by pipu on 2017/6/2.
// manipulate catalogue

var fs = require('fs');

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
function makep(path,cb) {
	var path = path.split('/');
	let allPath = '';
	let i = 0;
	function mkAA(i,cb) {
		if(i < path.length) {
			let curPath = path[i];
			allPath += curPath + '/';
			console.log(allPath);
			i += 1;
			fs.readdir(allPath,function(err) {
				if(err) {
					// 文件夹不存在
					fs.mkdir(allPath,function (err) {
						mkAA(i,cb)
					})
				} else {
					// 文件夹存在
					mkAA(i,cb)
				}
			})
		}else {
			console.log('success');
			return;
		}
	}
	mkAA(i,cb);
}
makep('d1/d2/d3/d4/d5/d6',function(){});

