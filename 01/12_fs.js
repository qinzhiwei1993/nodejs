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

    //iterator递归函数，将异步操作强行转换为同步
    fs.readdir('./album', function(err, fils){//读取一个文件夹下的所有文件
        //fils是一个文件名的数组，表示./album下的所有东西，包括文件和文件夹
        //console.log(fils);
        (function iterator(i){
            if(i == fils.length){
                console.log(wenjianjia);
                return;
            }
            var thefilename = fils[i];
            fs.stat('./album/' + thefilename, function(err, stats){
                if(stats.isDirectory()){//找出所有的文件夹
                    wenjianjia.push(thefilename);
                }
                i++;
                iterator(i);
            })
        })(0)
    })
    res.end();
})

server.listen(3000, '127.0.0.1');
