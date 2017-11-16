//创建一个文件夹

/**
 * Created by dell on 2017/11/15.
 */
var http = require('http');

var fs = require('fs');

var server = http.createServer( (req, res) => {
    if(req.url == '/favicon.ico'){//不处理小图标
        return ;
    }

    fs.stat('./album/aaa', function(err,data){
        console.log(data.isDirectory());//检测路径是不是一个文件夹
    })
    res.end();
})

server.listen(3000, '127.0.0.1');
