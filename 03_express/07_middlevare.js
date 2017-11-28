var express = require('express');

var app =express();

var a = 100;

//两个路由一样的，匹配到第一个就不会在执行第二个，所以只会打印出 1
app.get('/', function(req, res, next){//这里有个next参数，如果有两个路由一样，执行了next()方法，就会继续执行下面同样的路由
    console.log("1");
    a++;
    res.send(a.toString());
    next();
})

app.get('/', function(req, res){
    console.log('2');
})

app.listen(3000);