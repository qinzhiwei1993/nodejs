/**
 * Created by dell on 2017/11/16.
 */
var http = require('http');
var fs = require('fs');

//创建服务
var server = http.createServer(function(req, res){

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
        //每次接受请求之后做的事情
        res.end("成功！");
    }else{
        res.writeHead(404, {'Content-Type': 'text/html;charset=utf8'});
        res.end("没有找到页面")
    }

})

server.listen(3000, '127.0.0.1');