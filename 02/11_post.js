var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    //如果访问地址是这个，并且请求类型是post

    //下面是post请求接收的一个公式
    //node为了追求极致，它是一小段一小段接受的， 是一个异步的过程
    //接收了一小段，有人进来请求时，可能就去给别人服务了。防止过大的表单，阻塞了整个进程
    if(req.url == '/dopost' && req.method.toLowerCase() == 'post'){
        var alldata = '';
        req.addListener('data', function(chunk){//数据传输过程中
            alldata += chunk;
        })
        //全都传输完毕
        req.addListener('end', function(){//数据传输完毕
            var dataString = alldata.toString();
            var dataObj = querystring.parse(dataString, null, null)
            console.log(dataObj);
            res.end('success');
        })
    }
})

server.listen(3000, '127.0.0.1');