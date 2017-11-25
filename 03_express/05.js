var express = require('express');
var app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('form');
})
//post请求
app.post('/', function(req, res){
    //将数据添加进数据库
    res.send('成功');
})

app.listen(3000);