//-->> Created by pipu on 2017/6/7.
let fs = require('fs');

let ws = fs.createWriteStream('./write.txt',{
	flags: 'a',
	start: 0
});
ws.write('珠','utf8',function () {
	console.log(arguments)
});
ws.write('峰','utf8',function () {
	console.log(arguments)
});
ws.end('培训','utf8');