//引用node的一个功能模块
var http = require('http');
var fs = require('fs');//用于读取文件的
//创建一个服务器，参数是一个回掉函数，表示如果有请求进来，要做什么
//没有根本录，因为根本没有web容器的概念。appchae有。
//这正是nodejs的一个优点，适合做顶层路由设计，可以把路由做的特别漂亮
var server = http.createServer(function(req, res){
	let url = req.url;//获取端口号后面的url参数
	if(url == '/fang'){
		fs.readFile('./fang.html',function(err, data){
			res.writeHead(200, {"Content-Type": 'text/html;charset=UTF-8;'})
			res.end(data);
		})
	}else if(url == '/yuan'){
		fs.readFile('./yuan.html',function(err, data){
			res.writeHead(200, {"Content-Type": 'text/html;charset=UTF-8;'})
			res.end(data);
		})
	}else if(url == '/0.png'){
		fs.readFile('./0.png',function(err, data){
			res.writeHead(200, {"Content-Type": 'image/png;'})
			res.end(data);
		})
	}else if(url == '/css.css'){
		fs.readFile('./css.css',function(err, data){
			res.writeHead(200, {"Content-Type": 'text/css;'})
			res.end(data);
		})
	}else{
		res.writeHead(404, {'Content-Type': 'text/html;charset=UTF-8'});
		res.end('嘻嘻，没有这个网页呦')
	}
});


//运行服务器，监听127.0.0.1:3000 端口号是可以自定义的
server.listen(3000, '127.0.0.1');