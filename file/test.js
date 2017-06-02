//-->> Created by pipu on 2017/6/2.
var fs = require('fs');
try {
	fs.readFile('./index.txt1','utf-8',function(err,data) {
		if(err) {
			console.log(err);
		} else {
			console.log(data);
		}
	})
} catch (e) {
	console.log('err' + e);
}
