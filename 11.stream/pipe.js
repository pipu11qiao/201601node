//-->> Created by pipu on 2017/6/7.
let fs = require('fs');
function copy(origin,target) {
	let rs = fs.createReadStream(origin);
	let ws = fs.createWriteStream(target);
	rs.pipe(ws);
}
copy('./index.txt','./write.txt');