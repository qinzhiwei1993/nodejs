var http = require('http');
var url = require('url');
var fs =require('fs');
var path = require('path');

var server = http.createServer(function(req, res){
    if(req.url == '/favicon.ico'){
        return;
    }

    //127.0.0.1:3000/1.html
    var pathname = url.parse(req.url).pathname;//得到用户的路径部分 /1.html
    console.log(pathname);
    if(pathname == '/'){
        pathname = '/index.html';
    }
    var extname = path.extname(pathname);
    console.log(extname);
    //真正的读取文件
    fs.readFile('./static' + pathname, function(err, data){
        if(err){
            //如果找到的资源不存在，就返回404
            fs.readFile('./static/404.html', function(err, data){
                res.writeHead(200,{'Content-Type': 'text/html;charset=UTF8'});
                if(err){
                    throw err;

                    return;
                }
                res.end(data);
            })
            return;
        }
        //设置MIME类型，就是
        // 网页文件 text/html
        //jpg文件  image/jpg
        var mime = getMime(extname);
        res.writeHead(200, {'Content-Type': mime})
        res.end(data);
    })
})

server.listen(3000, '127.0.0.1');

function getMime(extname){
    switch(extname){
        case '.html':
            return 'text/html';
        case '.jpg':
            return 'image/jpg';
        case '.png':
            return 'image/png';
        case '.css':
            return 'text/css'
    }
}