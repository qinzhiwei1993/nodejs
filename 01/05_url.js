var http = require('http');

var url =require('url');
var querystring = require('querystring');

 var server = http.createServer( (req, res) => {

     // URL.parse() 可以将url分为很多部分   host pathname query port
     //url.parse(str,true) 的第二个参数是true，就可以将查询参数转换为对象
     var pathobj = url.parse(req.url);
     //var query = pathobj.query;
     //var queryobj = querystring.parse(query, null, null);
     var pathobj_1 = url.parse(req.url, true);//true把query字符串转换为对象
     console.log(pathobj);
     console.log(pathobj_1);
     //console.log(queryobj);
     res.end();
})

server.listen(3000, '127.0.0.1');
