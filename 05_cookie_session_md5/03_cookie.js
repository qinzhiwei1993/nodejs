var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

//使用cookie必须使用cookie-parser中间件
app.use(cookieParser());

app.get('/', function(req ,res){
    //猜你喜欢
    res.send("猜你喜欢" + req.cookies.mudidi);
})

//查询攻略 /gonglve?mudidi=北京，
//此时北京就存储在cookie中
app.get('/gonglve', function(req ,res){
    //先读取cookie中的目的地，放入数组中
    //maxAge 在express中是以毫秒为单位
    var mudidiArr = req.cookies.mudidi || [];
    var mudidi = req.query.mudidi;
    mudidiArr.push(mudidi);
    //设置新的cookie目的地
    res.cookie('mudidi', mudidiArr, {maxAge: 900000, httpOnly: true});
    res.send(mudidi + "略有攻略");

})

app.listen(3000);