var http = require('http');
var fs = require('fs');

function startServer() {
  var onrequest = function (req, res) {
    // 配置路由
    if (req.url == '/' || req.url == '/home') {
      res.writeHead(200, { 'Content-type': 'text/html' });
      fs.createReadStream('./app.html').pipe(res);
    } else {
      res.writeHead(200, { 'Content-type': 'text/html' });
      fs.createReadStream('./404.html').pipe(res);
    }
  };
  var server = http.createServer(onrequest);
  server.listen(3000, '127.0.0.1');
       console.log('启动成功');
}

exports.startServer = startServer;
