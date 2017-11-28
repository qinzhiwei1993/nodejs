var express = require('express');
var fs = require('fs');
//创建一个express工程
var app = express();


app.set('view engine', 'ejs');
//当你不写路径的时候，实际上就相当于'/'.就是所有网址
app.use(haha);//haha是回调函数

app.get('/admin', function(req, res){
    res.send('管理员');
})

//会自动识别err参数，如果有会自动捕获err  设置404页面
app.use(function(req, res){
    res.status(404).send('没有这个页面');
})
app.listen(3000);

function haha(req, res, next){
    //根据当前的网址，读取public文件夹中的文件，
    //如果有这个文件，就渲染这个文件
    //如果没有就next()
    var filepath = req.originalUrl;
    console.log(filepath);
    fs.readFile('./static' + filepath, function(err, data){
        if(err){
            //文件不存在
            next();
        }else{
            res.send(data.toString());
        }
    })
}