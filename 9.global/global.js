//-->> Created by pipu on 2017/6/6.
let fs = require('fs');
// current working directory
console.log(process.cwd());
process.chdir('./txt');
console.log(fs.readFileSync('index.txt','utf8'));
