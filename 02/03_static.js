//静态化资源文件
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res){
    //这里如果不用req.url来if判断，用户不管输入什么网址
    //做的事情都一样
    //把文件读出来

    var pathname = url.parse(req.url).pathname;
    //判断用户此时输入的是文件地址还是文件夹地址
    //如果是文件夹地，那么自动请求该文件夹下的index.html

    if(pathname.indexOf('.') == -1){
        pathname += './index.html';
    }

    //输入的网网址是 127.0.0.1/images/logo.png
    //实际上请求的是 ./static/images/logo.png
    var fileURl = './' + path.normalize('./static' + pathname);//path.normalize() ，将路由中重复的'/index/abd//asf' => '/index/adb/asf'
    var extname = path.extname(pathname);

    fs.readFile(fileURl, function(err, data){
        //读完之后做的事情
        if(err){//文件不存在
            res.writeHead(404, {'Contetn-Type': 'text/html;charset=UTF8'});
            res.end("404，页面没有找到");
            return;
        }
        getMime(extname, function(mime){
            res.writeHead(200, {'Contetn-Type': mime });
            res.end(data);
        });
    })
});

server.listen(3000, '127.0.0.1');

function getMime(extname, callback){//添加回调函数参数
    //读取mime.json文件，得到JSON，根据extname key，返回相应的value
    //读取文件
    fs.readFile('./mime.json', function(err, data){
        if(err){
            throw Error('找不到mime.json文件');
            return;
        }

        //将json字符串转为javascript JSON对象
        var mimeJSON = JSON.parse(data);
        var mime = mimeJSON[extname ] || 'text/html;charset=UTF8';
        ///执行回调函数
        callback(mime);
    })
}