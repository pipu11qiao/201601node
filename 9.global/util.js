//-->> Created by pipu on 2017/6/6.
let util = require('util');
// function Parent() {
// 	this.name = 'father';
// 	this.age = 50;
// 	this.say = function () {
// 		console.log(this.name);
// 	}
// }
// Parent.prototype.shout = function () {
// 	console.log(this.age);
// }
// function Child() {
// 	this.name = 'child';
// 	Parent.call(this);
// }
// util.inherits(Child,Parent);
// var c = new Child();
// console.log(c);
// console.log(Parent.prototype);
// c.shout();

var c = {
	name: '22',
	age: 22,
	body: {hand: {figure: {num:5}},
		food: {
			weight: 50,
			height: /\d{10}/g
		}
	}
};

console.log(util.inspect(c,{depth: 3,colors:true}));
console.log(util.isArray({}));
console.log(util.isDate({}));







