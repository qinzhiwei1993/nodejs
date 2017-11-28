var express = require('express');

var app =express();

app.get('/:username/:id', function(req, res){
    console.log(1);
    res.send('用户信息：'+req.params.username +'id号：'+ req.params.id);
})

app.get('/admin/login', function(req, res){
    console.log(2);
    res.send('管理员登录')
})

app.listen(3000);