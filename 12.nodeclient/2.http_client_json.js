let http = require('http');
let options = {
	host:'localhost',
	port: 8080,
	path: '/post',
	method: 'post',
	headers: {}
};
let count = 1;
// 向服务器发送请求
let request = http.request(options,function (res) {
	// console.log(res.statusCode); // 读取响应吗
	// console.log(res.headers); // 读取响应头
	var str = '';
	res.on('data',function (data) {
		str += data;
	});
	res.on('end',function () {
		console.log(str);
	});

});
request.on('error',function (err) {
	console.log(err);
})
// request.on('response',function (data) {
// 	console.log(data);
// });

// request 是一个可写流

	setInterval(function () {
		request.end(JSON.stringify({name:`zfpx${count ++}`})); // 当调用方法的时候请求才会真正发出
		request.resume();
	},1000)
