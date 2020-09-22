//查看当前目录
// console.log(__dirname);

// 定时器
// setTimeout(() => {
//   console.log(1);
// }, 100);

// 定时循环
// let time = 0;
// let timer = setInterval(() => {
//   time++;
//   console.log(time + '秒后输出');
//   if (time >= 1) {
//     clearInterval(timer);
//   }
// }, 1000);

// 创建函数
// function sayHi() {
//   console.log('Hi');
// }

//调用函数
// sayHi();

// 创建匿名函数
// let sayBye = function (name) {
//   console.log('bye');
//   console.log(name);
// };

//调用匿名函数
// sayBye();

//创建回调函数(传的参数是函数方法)
// function callback(func, name) {
//   func(name);
// }

//使用回调函数（传入需要的函数  ）
// callback(sayBye, 'baby');

// 引入模块
// var s = require('./count');
// console.log(s.count([1, 2, 3]));
// console.log(s.pi);

// 引入events
let events = require('events');
let myEmitter = new events.EventEmitter();
myEmitter.on('some', function (msg) {
  console.log(msg);
});

myEmitter.emit('some', 'hello,world');
