//-->> Created by pipu on 2017/6/6.
setImmediate(function () {
	console.log('a');
});
// 把这个函数放在当前任务的末尾
process.nextTick(function () {
	console.log('c')
})
console.log('b');