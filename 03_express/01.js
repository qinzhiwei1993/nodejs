var express = require('express');

var app = express();

app.get("/", function(req, res){
    res.send('你好');
})
//中间件
app.get('/haha', function(req, res){
    res.send("这是hah页面， 哈哈哈哈");
})

app.get(/^\/student\/([\d]{10})$/, function(req, res){//圆括号表示匹配的第一个params
    console.log(req);
    console.log(req.params);
    res.send('学生信息，学号：' + req.params[0]);
})

app.get('/teacher/:gonghao', function(req, res){//  :gonghao 是express自己定义的
    res.send('老师信息，工号：' + req.params['gonghao']);
})


app.listen(3000);