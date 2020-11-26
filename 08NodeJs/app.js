const { log } = require('console');
// TODO 查看当前目录
// console.log(__dirname);

// TODO 定时器
// setTimeout(() => {
//   console.log(1);
// }, 100);

// TODO 定时循环
// let time = 0;
// let timer = setInterval(() => {
//   time++;
//   console.log(time + '秒后输出');
//   if (time >= 1) {
//     clearInterval(timer);
//   }
// }, 1000);

// TODO 创建函数
// function sayHi() {
//   console.log('Hi');
// }

// TODO 调用函数
// sayHi();

// TODO 创建匿名函数
// let sayBye = function (name) {
//   console.log('bye');
//   console.log(name);
// };

// TODO 调用匿名函数
// sayBye();

// TODO 创建回调函数(传的参数是函数方法)
// function callback(func, name) {
//   func(name);
// }

// TODO 使用回调函数（传入需要的函数  ）
// callback(sayBye, 'baby');

// TODO 引入模块
// var s = require('./count');
// console.log(s.count([1, 2, 3]));
// console.log(s.pi);

// 引入events
// let events = require('events');
// let myEmitter = new events.EventEmitter();
// myEmitter.on('some', function (msg) {
//   console.log(msg);
// });

// myEmitter.emit('some', 'hello,world');

// TODO  读写文件操作

// TODO 引入node文件类库
// var fs = require('fs');

// TODO 读取文件的方法(回调，异步) sync（同步）
// var readme = fs.readFile('README.txt', 'utf8', function (err, data) {
//   console.log(data);
// });

// TODO 写入文件的方法 （前者是文件名，后者是写入的内容   ）
// fs.writeFileSync('write.txt', 'hello,write');

// TODO 删除文件方法
// fs.unlinkSync('write.txt', function () {
//   console.log('delete success');
// });

// TODO 创建目录
// fs.mkdirSync('mkdir');
// TODO 删除目录
// fs.rmdirSync('mkdir');

// TODO 多重异步回调，创建新文件加，并把README.txt复制到该目录
// fs.mkdir('buff', function () {
//   fs.readFile('README.txt', function (err, data) {
//     fs.writeFile('./buff/README.txt', data, function () {
//       console.log('success');
//     });
//   });
// });

// TODO 流
// var fs = require('fs');
// var myReadStream = fs.createReadStream('./README.txt', 'utf8');
// var data = '';
// myReadStream.on('data', function (chunk) {
//   data += chunk;
// });

// myReadStream.on('end', function () {
//   console.log(data);
// });

// TODO 引入http模块，web服务器
// var http = require('http');

// TODO单独声明匿名函数（callback函数）
// var onrequest = function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
// json
// var obj = {
//   name: '宋华山',
//   age: 16,
//   F_JSON: {
//     name: '盛道',
//     age: 18,
//   },
// };
//   res.end(JSON.stringify(obj));
// };

// // TODO直接调用匿名函数（callback函数）
// var server = http.createServer(onrequest);

// // TODO定义端口号
// server.listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

// TODO把server封装成方法，再 调用模块化server服务
// var server = require('./server');
// server.startServer();

