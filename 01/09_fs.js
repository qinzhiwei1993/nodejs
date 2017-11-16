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

    fs.mkdir('./album/aaa');//创建一个文件夹
    //fs.rmdir('./album/aaa');//删除一个文件夹
    //fs.writeFile(file,data,options,callback) //网文件里面写东西
    res.end();
})

server.listen(3000, '127.0.0.1');
