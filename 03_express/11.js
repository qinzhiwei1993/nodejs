var express = require('express');
var app = express();

//设置视图文件夹
app.set('views', './aaa');
//设置模板引擎
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('haha', {news: []});
})

app.get('/check', function(req, res){
    res.send({//自动设置MIME类型为json
        "username": "qinzhiwei"
    })
})

app.listen(3000);