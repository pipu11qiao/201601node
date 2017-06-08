//-->> Created by pipu on 2017/6/7.
let express = require('express');
let app = express();

//中央
app.use(function (req,res,next) {
	res.money = 100;
	next();
});
//省
app.use('/province',function (req,res,next) {
	res.money = res.money -50;
	next();
});
//市
app.use('/city',function (req,res,next) {
	res.money = res.money -70;
	next();
});
//村
app.use('/village',function (req,res,next) {
	res.money = res.money -90;
	next();
});

// send方法不接受数字类型的参数
app.get(/.*/,function (req,res) {
	res.send('' + res.money);
});
app.listen('3000',function () {
	console.log('app is listening 3000')
});