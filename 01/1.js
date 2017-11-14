//引用node的一个功能模块
var http = require('http');
//创建一个服务器，参数是一个回掉函数，表示如果有请求进来，要做什么
var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8;"});
	res.end("你好 node.js")
});
//运行服务器，监听127.0.0.1:3000
server.listen(3000, '127.0.0.1');