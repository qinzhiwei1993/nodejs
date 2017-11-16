/**
 * Created by dell on 2017/11/15.
 */
var http = require('http');

var fs = require('fs');

var server = http.createServer( (req, res) => {
    if(req.url == '/favicon.ico'){//不处理小图标
        return ;
    }

    //给用户加一个5位数id
    var userid = parseInt(Math.random() * 89999) + 10000;
    console.log("欢迎" + userid);  //当读取的文件足够大的时候，由于是异步读取，所以会连续显示好几个欢迎然后才显示出去文件完毕
                                    //正好证明了单线程异步非阻塞I/O 事件循环机制



    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    //linux下对去同目录下文件必须 是./，windows可以直接写test.. 但是nodejs是跨平台的，所以必须兼容

    //两个参数，第一个参数是文件路径，当前目录写./
    //第二个参数是一个回掉函数，表示读取文件之后，做的事情

    //读取文件都是异步的
    fs.readFile('./test/1.txt',{'charset': 'utf-8'}, function(err, data){
        if(err){
            throw err;//抛出错误
        }
        console.log(1);
        console.log(userid + "文件读取完毕")
        res.end(data);
    })
    console.log(2);//一定是先打印2后打印1  因为是非阻塞I/O，当读取文件之后，等待毁掉直接执行下面的语句

})

server.listen(3000, '127.0.0.1');
