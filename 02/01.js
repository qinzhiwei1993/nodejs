var http = require('http');
var fs = require('fs');

//创建服务
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    //每次接受请求之后做的事情
    res.end("成功！");
})

server.listen(3000, '127.0.0.1');