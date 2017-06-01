//-->> Created by pipu on 2017/6/1.
var buf1 = new Buffer('珠');
var buf2 = new Buffer('峰');
var buf3 = new Buffer('培');
var buf4 = new Buffer('训');

var bufferA = Buffer.concat([buf1,buf2,buf3,buf4],12);

var s = bufferA.slice(9,12);
console.log(bufferA);
console.log(bufferA.toString());

console.log(s.toString());
// buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])



