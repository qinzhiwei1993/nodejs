var http = require('http');
var formidale = require('formidable');//用于图像，video，文件的上传的模块
var util = require('util');//工具类
var fs =require('fs');
var sd =require('silly-datetime');
var path = require('path');

var server = http.createServer(function(req, res){
    if(req.url == '/dopost' && req.method.toLowerCase() == 'post'){
        //Creates a new incoming form.
        var form = new formidale.IncomingForm();
        //设置上传文件保存地址
        form.uploadDir = "./uploads";
        form.keepExtensions = true;
        //执行里面的回到函数的时候，表单已经接收完毕了
        form.parse(req, function(err, fields, files) {
            //console.log(fields);
            //console.log(files);
            console.log(util.inspect({fields: fields, files: files}))
            //所有的文本域、单选框都在fields里面
            //所有的文件域都在fiels里面存放
            //时间  使用的silly-datetime
            var ttt = sd.format(new Date(), "YYYYMMDDHHmmss");
            var ran = parseInt(Math.random() * 89999 +10000);

            var extname = path.extname(files.images.name);//获取文件的扩展名
            //执行改名
            //新的路径由三个部分组成： 时间戳 +随机数 + 扩展名
            var oldpath = __dirname + "/" +  files.images.path;
            var newpath = __dirname + "/uploads/" + ttt + ran + extname;

            //改名
            fs.rename(oldpath, newpath, function(err){
                if(err){
                    throw Error("改名失败");
                }
                res.writeHead(200, {'content-type': 'text/plain;charset=UTF8'});
                res.write('received upload:\n\n');
                res.end("成功");
            });
        });
    }else if(req.url == '/'){
        //呈递aa.html
        fs.readFile('./static/aa.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
            res.end(data);
        })
    }
})


server.listen(3000, '127.0.0.1');