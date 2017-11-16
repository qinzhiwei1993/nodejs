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
    var wenjianjia = [];//存储所有文件夹
    fs.readdir('./album', function(err, fils){//读取一个文件夹下的所有文件
        //fils是一个文件名的数组，表示./album下的所有东西，包括文件和文件夹
        //console.log(fils);
        for(var i = 0; i < fils.length; i++){
            var thefilename = fils[i];
            //console.log(thefilename);
            fs.stat('./album/' +thefilename, function(err, stats){//这也是一个异步的
                if(stats.isDirectory()){
                    wenjianjia.push(thefilename);
                }
                console.log(wenjianjia);
            })

        }
        //console.log(wenjianjia);//打印出来的[]
    })
    res.end();
})

server.listen(3000, '127.0.0.1');
