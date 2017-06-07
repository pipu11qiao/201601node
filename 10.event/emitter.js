//-->> Created by pipu on 2017/6/6.
let EventEmitter = require('events');
// let e = new EventEmiiter();
let util = require('util');
function Girl(name) {
	EventEmitter.call(this);
	this.name = name;
}
function Boy(name) {
	EventEmitter.call(this);
	this.name = name;
	this.say = function (words) {
		return function () {
			console.log(words);
		}

	}
}
let xiaoming = new Boy('小明');
util.inherits(Girl,EventEmitter);
let xiaohua = new Boy('小花');
let girl = new Girl('lina');

girl.addListener('look',xiaoming.say('买买买'));
girl.on('look',xiaohua.say('剁剁多'))
girl.emit('look');
