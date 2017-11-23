var http = require('http');
var formidale = require('formidable');//用于图像，video，文件的上传的模块

var server = http.createServer(function(req, res){
    if(req.url == '/dopost' && req.method.toLowerCase() == 'post'){
        //Creates a new incoming form.
        var form = new formidale.IncomingForm();
        //设置上传文件保存地址
        form.uploadDir = "./uploads";
        form.keepExtensions = true;//保留扩展名
        //执行里面的回到函数的时候，表单已经接收完毕了
        form.parse(req, function(err, fields, files) {
            console.log(fields);
            console.log(files);
            //所有的文本域、单选框都在fields里面
            //所有的文件域都在fiels里面存放
            res.writeHead(200, {'content-type': 'text/plain;charset=UTF8'});
            res.write('received upload:\n\n');
            res.end("成功");
        });
    }
})


server.listen(3000, '127.0.0.1');