//-->> Created by pipu on 2017/6/6.
let querystring = require('querystring');
let s = 'name=zfpx&age=8';
console.log(querystring.parse(s));
let sObj = querystring.parse(s);
console.log(querystring.stringify(sObj));
