var http = require('http');
var ejs = require('ejs');
var fs = require('fs');


var server = http.createServer(function(req, res){
    if(req.url == '/'){
        fs.readFile('./views/index.ejs', function(err, data){//data 是一个buffer，需要toString转为字符串
            //绑定模板
            var template = data.toString();
            var dictionary = {
                a: 6,
                news: [
                    1,2,3,4,5,6,7,"news数组"
                ]
            };

            //显示
            var html = ejs.render(template, dictionary);
            res.writeHead(200, {"Content-Type": "text/html;charset=UTF8"});
            res.end(html);
        })
    }else{
        res.end("404");
    }

})

server.listen(3000, '127.0.0.1');
