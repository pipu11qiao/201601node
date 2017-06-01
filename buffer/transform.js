//-->> Created by pipu on 2017/6/1.
// buf.toString([encoding[, start[, end]]])
// 字符串转 buffer
var buffer = new Buffer('珠峰');
console.log(buffer);

// buffer 转字符串
console.log(buffer.toString('utf-8',0,3));

